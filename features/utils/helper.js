/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
const { browser, ExpectedConditions } = require('protractor');

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

  async searchSelectOption(elem, searchArea, option, searchInput) {
    await elem.click();
    await this.waitForElementToBeClickable(searchArea);
    await searchArea.sendKeys(searchInput);
    await this.waitForElementToBeClickable(option);
    return option.click();
  }

  async chooseSelect(elem, option) {
    await this.waitForElementToBeClickable(elem);
    await elem.click();
    await this.waitForElement(option);
    return option.click();
  }

  async searchElement(searchArea, searchItem, selectItem) {
    await this.waitForElementToBeClickable(searchArea);
    await searchArea.click();
    await searchArea.sendKeys(searchItem);
    return selectItem.click();
  }
}
module.exports = new Helper();
