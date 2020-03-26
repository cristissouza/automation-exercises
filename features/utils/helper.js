/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
const { browser, ExpectedConditions, protractor } = require('protractor');

class Helper {
  openPage(url) {
    browser.ignoreSynchronization = true;
    return browser.get(url);
  }

  waitForElement(subject, timeout = 10000) {
    browser.ignoreSynchronization = true;
    return browser.wait(ExpectedConditions.visibilityOf(subject), timeout);
  }

  waitForElementToBeClickable(subject, timeout = 10000) {
    return browser.wait(ExpectedConditions.elementToBeClickable(subject, timeout));
  }

  waitForElementNotPresent(subject, timeout = 10000) {
    return browser.wait(ExpectedConditions.invisibilityOf(subject), timeout);
  }

  checkURLIs(url) {
    return browser.wait(ExpectedConditions.urlIs(url), 15000);
  }

  async searchElement(searchArea, input) {
    await this.waitForElement(searchArea);
    await searchArea.sendKeys(input);
    return searchArea.sendKeys(protractor.Key.ENTER);
  }
}
module.exports = new Helper();
