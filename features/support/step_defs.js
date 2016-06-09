var mappings = require('./vars');
var ui = require('./ui');
//web apps page&popup list
var pageList = mappings.pageList;

module.exports = function() {

  //Go to page
  this.Given(/^I am on "([^"]*)" page$/, 
    function (page_name) {
      browser.url(pageList[page_name].url);
  });

  //click a link on relevant page
  this.When(/^I click "([^"]*)" link on "([^"]*)" page$/, 
    function (link_name, page_name) {
      var pageObject = pageList[page_name];
      ui.checkLinkExistAndClickItWithDataPurpose(pageObject.getDataPurposeOfElement(link_name, 'link'));
  });

  //set an input to a value on relevant page
  this.When(/^I set "([^"]*)" to "([^"]*)" on "([^"]*)" popup$/, 
    function (input_identifier, value, popup_name) {
      let popupObject = pageList[popup_name];
      let cssSelector = popupObject.class;
      browser.waitForExist(cssSelector, ui.minWaitTime);
      let input_purpose = popupObject.getDataPurposeOfElement(input_identifier, 'input');
      if (input_purpose !== null) {
        ui.setElementValue(input_purpose, value);
      }
  });

  //click a button on relevant page
  this.When(/^I click "([^"]*)" button on "([^"]*)" popup$/, 
    function (button_identifier, popup_name) {
      let popupObject = pageList[popup_name];
      let cssSelector = popupObject.class;
      browser.waitForExist(cssSelector, ui.minWaitTime);
      let buttonPurpose = popupObject.getDataPurposeOfElement(button_identifier, 'button');
      if (buttonPurpose !== null) {
        let cssSelector = "input[data-purpose='" + buttonPurpose + "']";
        browser.click(cssSelector);
      }
  });

  //checks whether or not user on right page
  this.Then(/^I must be on "([^"]*)" page$/, 
    function (page_name) {
      var pageObject = pageList[page_name];
      var validationElement = pageObject.validationElement;
      var cssSelector = validationElement.dataPurposePrefix + "[data-purpose='" + validationElement.dataPurpose + "']";
      browser.waitForExist(cssSelector, ui.maxWaitTime);
      expect(browser.getUrl()).toEqual(pageObject.url);
  });
};