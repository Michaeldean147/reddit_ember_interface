import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['data.score'],
  sortAscending: false,
  actions: {
    sortPosts: function(){
      this.toggleProperty('sortAscending')
    },
    addFavorite: function(post){
      console.log('CLICKED!!')
      var favorite = this.store.createRecord('favorite', {
        title: post.data.title,
        score: post.data.score,
        author: post.data.author,
        link: post.data.url
      });
      favorite.save()
    }
  }
});
