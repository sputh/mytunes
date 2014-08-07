// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.remove(this.models[0]);
      if(this.length){
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      this.remove(song);
    });
  },
  playFirst: function(){
    this.at(0).play();
  },
  dequeue: function() {
    this.remove(this.models[0]);
    if(this.length){
      this.playFirst();
    }
  }


});
