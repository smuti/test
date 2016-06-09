module.exports = {
	minWaitTime:10000,
	maxWaitTime:20000,

	checkLinkExistAndClickItWithDataPurpose: function(data_purpose) {
		var cssSelector = "a[data-purpose='" + data_purpose + "']";
		browser.waitForExist(cssSelector, this.minWaitTime);
		browser.click(cssSelector);
	},
       
	setElementValue: function(data_purpose, value) {
		var cssSelector = "input[data-purpose='" + data_purpose + "']";
		browser.waitForExist(cssSelector, this.minWaitTime);
		browser.setValue(cssSelector, value);
	}
};