
/* eslint-disable import/no-extraneous-dependencies */
const helper = require('../utils/helper');

class Discourse {
  constructor() {
    this.demoMenu = element(by.xpath('//*[contains(text(),"Demo")]'));
  }

  goToDemoPage() {
    helper.waitForElement(this.demoMenu);
    return this.demoMenu.click();
  }
}
module.exports = new Discourse();
