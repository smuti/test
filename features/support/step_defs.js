var mappings = require('./vars');
//web apps page&popup list
var pageList = mappings.pageList;
// used for element existence waiting period
var minWaitTime = 2000;
var maxWaitTime = 8000;

//click a link using data-purpose
function checkLinkExistAndClickItWithDataPurpose(data_purpose) {
  var cssSelector = "a[data-purpose='" + data_purpose + "']";
  browser.waitForExist(cssSelector, minWaitTime);
  browser.click(cssSelector);
}

//set inputs value
function setElementValue(data_purpose, value) {
  var cssSelector = "input[data-purpose='" + data_purpose + "']";
  browser.waitForExist(cssSelector, minWaitTime);
  browser.setValue(cssSelector, value);
}

module.exports = function() {

  //Go to page
  this.Given(/^I am on "([^"]*)" page$/, 
    function (page_name) {
      browser.url(pageList[page_name].url);
  });

  //click a link on relevant page
  this.When(/^I click "([^"]*)" link on "([^"]*)" page$/, 
    function (link_name, page_name) {
      let links = pageList[page_name].elementList.linkList;
      for (var link in links) {
        if(links[link].identifier === link_name) {
          checkLinkExistAndClickItWithDataPurpose(links[link].dataPurpose);
          break;
        }
      }
  });

  //set an input to a value on relevant page
  this.When(/^I set "([^"]*)" to "([^"]*)" on "([^"]*)" popup$/, 
    function (input_identifier, value, popup_name) {
      let popupObject = pageList[popup_name];
      let cssSelector = popupObject.class;
      browser.waitForExist(cssSelector, minWaitTime);
      let inputs = popupObject.elementList.inputList;
      for (var input in inputs) {
          if(inputs[input].identifier === input_identifier) {
            setElementValue(inputs[input].dataPurpose, value);
            break;
          }
        };
  });

  //click a button on relevant page
  this.When(/^I click "([^"]*)" button on "([^"]*)" popup$/, 
    function (button_identifier, popup_name) {
      let popupObject = pageList[popup_name];
      let cssSelector = popupObject.class;
      browser.waitForExist(cssSelector, minWaitTime);
      let buttons = popupObject.elementList.buttonList;
      for (var button in buttons) {
          if(buttons[button].identifier === button_identifier) {
            let cssSelector = "input[data-purpose='" + buttons[button].dataPurpose + "']";
            browser.click(cssSelector);
            break;
          }
        };
  });

  //checks whether or not user on right page
  this.Then(/^I must be on "([^"]*)" page$/, 
    function (page_name) {
      var pageObject = pageList[page_name];
      var validationElement = pageObject.validationElement;
      var cssSelector = validationElement.dataPurposePrefix + "[data-purpose='" + validationElement.dataPurpose + "']";
      browser.waitForExist(cssSelector, maxWaitTime);
      expect(browser.getUrl()).toEqual(pageObject.url);
  });
};