import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search: function(){
      var searchterm = this.controllerFor('application').get('searchWord')
      this.controllerFor('application').set('searchWord', "")
      this.transitionTo('search', searchterm)
    },

    subSearch: function(){
      var searchterm = this.controllerFor('application').get('subSearchWord')
      this.controllerFor('application').set('subSearchWord', "")
      this.transitionTo('subsearch', searchterm)
    },
  }
});
