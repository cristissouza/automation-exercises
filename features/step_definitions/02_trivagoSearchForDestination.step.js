/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const {
  Given, When, Then, setDefaultTimeout,
} = require('cucumber');
const { browser } = require('protractor');
const helper = require('../utils/helper');
const trivago = require('../page_objects/trivagoSearch.page');

setDefaultTimeout(30 * 1000);

// Beginning of GIVEN  step
Given('I am on Trivago home page', () => {
  helper.openPage(process.env.SITE_URL_EXERCISE_2);
});

// Beginning of WHEN  step
When('I search for a {string} destination', { timeout: 40000 }, async (string) => {
  await helper.waitForElementToBeClickable(trivago.searchDestinationarea);
  await trivago.inputDestination(string);
  await helper.waitForElementToBeClickable(trivago.searchButton);
  await trivago.search();
  await helper.waitForElement(trivago.roomPrice);
});

When('Apply the filters for one person room and sort by distance only', async () => {
  await trivago.chooseRoomType();
  await helper.waitForElementNotPresent(trivago.loading);
  await helper.waitForElement(trivago.hotelName);
  await trivago.chooseSortBy();
  await browser.sleep(5000);
  // await helper.waitForElement(trivago.loading);// breaking
  await helper.waitForElement(trivago.hotelName);
  await helper.waitForElementNotPresent(trivago.loading);
});

When('Decide to see the more details information', async () => {
  await trivago.viewMoreAmenities();
  await helper.waitForElement(trivago.roomFacilities);
});


// Beginning of THEN  step
Then('I can see the site name that has the offer', async () => {
  const siteIsPresent = await helper.waitForElement(trivago.siteNameOffering);
  const siteName = await trivago.getSiteNameOffering();
  expect(siteIsPresent).to.equal(true);
  const print = `The site name that has the offer is: ${siteName}`;
  console.log(print);
});

Then('I can see the room price', async () => {
  const priceRoom = await helper.waitForElement(trivago.roomPrice);
  const firstRoomPricePresented = await trivago.getRoomPrice();
  expect(priceRoom).to.equal(true);
  const print = `The site room price is: ${firstRoomPricePresented}`;
  console.log(print);
});

Then('I can see the the hotel number of stars', async () => {
  const starsClassification = await helper.waitForElement(trivago.numberStars);
  const firstHotelStars = await trivago.getNumberStars();
  expect(starsClassification).to.equal(true);
  const print = `The site number os starts: ${firstHotelStars}`;
  console.log(print);
});

Then('I can see the room facilities', async () => {
  const facilities = await helper.waitForElement(trivago.roomFacilities);
  const amenitiesRoom = await trivago.getAllAmenitiesRoom();
  expect(facilities).to.equal(true);
  const print = `The site room facilities is: ${amenitiesRoom}`;
  console.log(print);
});
