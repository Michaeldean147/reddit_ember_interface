import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var subSearchWord = params.subSearchWord
    return Ember.$.getJSON('http://www.reddit.com/subreddits/search.json?q=' + subSearchWord).then(function(res){
      return res.data.children
    })
  }
});
