import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['data.score'],
  sortAscending: false,
  actions: {
    sortPosts: function(){
      this.toggleProperty('sortAscending')
    }
  }
});
