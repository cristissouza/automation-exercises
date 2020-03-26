/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const {
  Given, When, Then, setDefaultTimeout,
} = require('cucumber');
const { browser } = require('protractor');
const helper = require('../utils/helper');

const discoursePrint = require('../page_objects/demo.page');
const dircourseHome = require('../page_objects/discourseHome.page');

setDefaultTimeout(15 * 1000);

// Beginning of GIVEN  steps
Given('I am on Dircourse home page', () => {
  helper.openPage(process.env.SITE_URL_EXERCISE_1);
  helper.waitForElement(dircourseHome.demoMenu);
});


// Beginning of WHEN  steps
When('I decide to see the Demo topic', async () => {
  await helper.waitForElementToBeClickable(dircourseHome.demoMenu);
  await dircourseHome.goToDemoPage();
  await browser.getAllWindowHandles().then(async (handles) => {
    await browser.switchTo().window(handles[0]).then(async () => {
      const getPageUrl = await browser.getCurrentUrl();
      expect(getPageUrl).to.equal('https://www.discourse.org/');
    });
    await browser.driver.close();
    await browser.switchTo().window(handles[1]);
  });
});

When('I search by a specific {string}', { timeout: 40000 }, async (string) => {
  await discoursePrint.categorySelect();
  await discoursePrint.chooseCategory(string);
});


// Beginning of THEN  steps
Then('I can see the description of all lock topics', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(print.length);
  });
});


Then('I can see how many items the discourse have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for discourse are ${print.length}`);
  });
});

Then('I can see how many items the uncategorized have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for uncategorized are ${print.length}`);
  });
});

Then('I can see how many items the movies have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for movie are ${print.length}`);
  });
});

Then('I can see how many items the videos have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for video are ${print.length}`);
  });
});

Then('I can see how many items the gaming have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for gaming are ${print.length}`);
  });
});

Then('I can see how many items the tech have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for tech are ${print.length}`);
  });
});

Then('I can see how many items the general have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for general are ${print.length}`);
  });
});

Then('I can see how many items the school have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for school are ${print.length}`);
  });
});

Then('I can see how many items the sports have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for sports are ${print.length}`);
  });
});

Then('I can see how many items the pics have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for pics are ${print.length}`);
  });
});

Then('I can see how many items the music have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for music are ${print.length}`);
  });
});

Then('I can see how many items the pets have', async () => {
  await helper.waitForElement(discoursePrint.category);
  await discoursePrint.getTopicDescription().then((elem) => {
    const result = elem.toString().trim();
    const print = result.split(',');
    console.log(`The number of topic for pets are ${print.length}`);
  });
});
