Backbone.Spinner = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this,'stopSpinner');
        
        this.options.stopEvent.context.bind(this.options.stopEvent.event, this.stopSpinner);
        this.startSpinner();
        
    },
    startSpinner: function() {
        window.target = this.options.spinner;
        
        this.spinner = new Spinner().spin();
        
        $(this.spinner.el).appendTo(target).css({
            position:'absolute',
            left: $(target).width()/2 + (45/2),
            top: $(target).height()/2 - (45/2),
            zIndex:1000000
        });
        
        $(target).css('position','relative');
        
        this.$overlay = $("<div>").css({
            height:$(target).outerHeight(),
            width:$(target).outerWidth(),
            position:'absolute',
            opacity: '.7',
            background: 'white',
            top: 0,
            left: 0
        }).appendTo(target);
        
    },
    stopSpinner: function() {
        this.$overlay.remove();
        this.spinner.stop();
    }
});