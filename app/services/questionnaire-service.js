import Ember from 'ember';

export default Ember.Service.extend({
  items: 'test',
  getUrlData(url) {
    let data = Ember.$.getJSON(url);
    console.log(data);
    return data;
  },
});
