
/* eslint-disable import/no-extraneous-dependencies */
const { protractor, browser } = require('protractor');
const helper = require('../utils/helper');

class SearchDestination {
  constructor() {
    this.searchDestinationarea = $('#querytext');
    this.searchButton = $('[data-qa="search-button"]');
    this.roomTypeSelect = $('.dealform-button.dealform-button--guests');
    this.roomTypeOnePerson = $$('.roomtype-btn__wrap').get(0);
    this.sortBySelect = $('[data-qa="sorting"]');
    this.sortByDistanceOnly = $('option[value="3"]');
    this.accomodationDetails = $$('[data-qa="item-location-details"]').get(0);
    this.moreAmenitiesBtn = $('.expand-amenities > button[type="button"]');
    this.roomFacilities = $$('[itemscope="itemscope"] li.unordered-list__item');
    this.roomPrice = $$('[data-qa="recommended-price"]').get(0);
    this.numberStars = $$('[data-qa="item-rating-details"]  .inline-block').get(0);
    this.hotelName = $$('[data-qa="item-name"]').get(0);
    this.siteNameOffering = $$('[data-qa="recommended-price-partner"]').get(0);
    this.loading = $('.loader-text center-x');
    this.expandAmendities = $('.expand-amenities');
  }

  async inputDestination(destination) {
    await this.searchDestinationarea.click();
    await this.searchDestinationarea.sendKeys(destination);
    return this.searchDestinationarea.sendKeys(protractor.Key.ENTER);
  }

  search() {
    helper.waitForElementToBeClickable(this.searchButton);
    return this.searchButton.click();
  }

  async chooseRoomType() {
    await this.roomTypeSelect.click();
    await helper.waitForElement(this.roomTypeOnePerson);
    return this.roomTypeOnePerson.click();
  }

  async chooseSortBy() {
    await this.sortBySelect.click();
    return this.sortByDistanceOnly.click();
  }

  async viewMoreAmenities() {
    await this.accomodationDetails.click();
    await helper.waitForElement(this.moreAmenitiesBtn);
    return this.moreAmenitiesBtn.click();
  }

  getAllAmenitiesRoom() {
    const ammenities = this.roomFacilities.map((elem) => elem.getText());
    return ammenities;
  }

  getRoomPrice() {
    return this.roomPrice.getText();
  }

  getNumberStars() {
    return this.numberStars.getText();
  }

  getHotelName() {
    return this.hotelName.getText();
  }

  getSiteNameOffering() {
    return this.siteNameOffering.getText();
  }
}
module.exports = new SearchDestination();
