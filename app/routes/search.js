import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var searchword = params.searchword
    return Ember.$.getJSON("http://www.reddit.com/search.json?q=" + searchword).then(function(res){
      return res.data.children
    })
  }
});
