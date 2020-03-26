
/* eslint-disable import/no-extraneous-dependencies */
const { protractor, element, by } = require('protractor');
const helper = require('../utils/helper');

class DemoPage {
  constructor() {
    this.lockTopics = $$('');
    this.TopicsDescription = element.all(by.css('a.title.raw-link.raw-topic-link'));
    this.category = $$('span.name').get(0);
    this.topMenu = $$('li[title="the most active topics in the last year, month, week or day"]');
    this.searchCategoryArea = $('.filter-input.ember-text-field');
    this.categoryItemsNumber = $$('td.main-link.clearfix');
    this.topics = element.all(by.css('link-top-line'));
    this.categoryStatus = $$('.category-status');
  }

  categorySelect() {
    return this.category.click();
  }

  getCategoryStatusName() {
    return this.categoryStatus.getText();
  }

  async chooseCategory(type) {
    const category = {
      discourse: () => helper.searchElement(this.searchCategoryArea, 'discourse'),
      uncategorized: () => helper.searchElement(this.searchCategoryArea, 'uncategorized'),
      movies: () => helper.searchElement(this.searchCategoryArea, 'movies'),
      videos: () => helper.searchElement(this.searchCategoryArea, 'videos'),
      gaming: () => helper.searchElement(this.searchCategoryArea, 'gaming'),
      tech: () => helper.searchElement(this.searchCategoryArea, 'tech'),
      general: () => helper.searchElement(this.searchCategoryArea, 'general'),
      school: () => helper.searchElement(this.searchCategoryArea, 'school'),
      sports: () => helper.searchElement(this.searchCategoryArea, 'sports'),
      pics: () => helper.searchElement(this.searchCategoryArea, 'pics'),
      music: () => helper.searchElement(this.searchCategoryArea, 'music'),
      pets: () => helper.searchElement(this.searchCategoryArea, 'pets'),
      default: () => {},
    };
    return (category[type] || category.default)();
  }

  getAllLockTopic() {
    return this.lockTopics.map((elem) => elem);
  }

  getTopicDescription() {
    return this.TopicsDescription.map((item) => item.getText());
  }
}
module.exports = new DemoPage();
