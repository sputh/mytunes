// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  id: 'song',
  initialize: function(){
    // this.on('add', function(){
    //   // do this
    //   this.render();
    // });
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),


  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    console.log("lsidj jtdyrdaetyu what", this);

    return this.$el.html(this.template(this.model.attributes));
  }

});
