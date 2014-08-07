// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  id: 'songQueue',

  initialize: function() {
    this.render();
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('ended', function(){
      this.render();
    }, this);
    this.collection.on('dequeue', function(){
      this.render();
    }, this);
  },

  updateQueue: function(queue){
    this.collection.add(queue);
    this.render();
  },
  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){

        return new SongQueueEntryView({model: song}).render();
      })
    );
    console.log(this.collection, 'whoops');
  }

});
