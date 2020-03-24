/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const {
  Given, When, Then, setDefaultTimeout,
} = require('cucumber');
const { browser } = require('protractor');
const helper = require('../utils/helper');

const discoursePrintInformation = require('../page_objects/demo.page');
const dircourseHome = require('../page_objects/discourseHome.page');

setDefaultTimeout(30 * 1000);

// Beginning of GIVEN  steps
Given('I am on Dircourse home page', () => {
  helper.openPage(process.env.SITE_URL_EXERCISE_1);
  helper.waitForElement(dircourseHome.demoMenu);
});


// Beginning of WHEN  steps
When('I decide to see the Demo topic', () => {
  dircourseHome.goToDemoPage();
});

When('I search by a specific {string}', { timeout: 40000 }, async (string) => {
  await browser.getAllWindowHandles().then(async (handles) => {
    await browser.switchTo().window(handles[1]).then(async () => {
      const getPageUrl = await browser.getCurrentUrl();
      expect(getPageUrl).to.equal('https://try.discourse.org/');

      await discoursePrintInformation.categorySelect();
      await discoursePrintInformation.chooseCategory();
      await helper.waitForElementNotPresent(discoursePrintInformation.discourseCategory);
      await helper.waitForElement(discoursePrintInformation.categoryItemsNumber);
    });
    // await browser.driver.close();
    // await browser.switchTo().window(handles[0]);
  });
});


// Beginning of THEN  steps
Then('I can see how many items the {string} have', async (string) => {
  const items = await discoursePrintInformation.numberItemsByCategory();
  browser.sleep(5000);

  console.log(`the number of items are : ${items}`);
});


Then('I can see the description of all lock topics', () => {
  discoursePrintInformation.chooseCategory();
});

Then('I can see how many items the discourse have', async () => {
  const viewCategoryList = await helper.waitForElement(discoursePrintInformation.categoryItemsNumber);
  await expect(viewCategoryList).to.equal(true);
  const categoryItemLenght = discoursePrintInformation.numberItemsByCategory();
  console.log(`The number of topic for discourse is ${categoryItemLenght}`);
});

Then('I can see how many items the uncategorized have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the movies have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the videos have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the gaming have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the tech have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the general have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the school have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the sports have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the pics have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the music have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');

Then('I can see how many items the pets have', () =>
// Write code here that turns the phrase above into concrete actions
  'pending');
