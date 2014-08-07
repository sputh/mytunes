// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function(){
    this.render();
  },

  events: {
    'click': function() {
      //this.model.play();
          console.log("lsidj ghjksdalflkjsdfhi why", this);
          var that = this;
          console.log('that', that);
          console.log('model', this.model);
//      this.model.add
      this.model.enqueue();
      console.log('this', this);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
