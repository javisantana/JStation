
function Game() {
    this.initialize();
}

_.extend(Game.prototype, {

    initialize: function() {
        this.setupDOM();
        this.init();
    },

    setupDOM: function() {
        var doc = document, body = doc.body;
        doc.body.style.margin = '0px';
        doc.body.style.overflow = 'hidden';
        this.doc = doc;
    },

    add_layer: function() {
        var doc = this.doc;
        var canvas = doc.createElement('canvas');
        doc.body.appendChild(canvas);
        var width = innerWidth;
        var height = innerHeight;
        var widthHalf = width >> 1;
        var heightHalf = height >> 1;

        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left= '0';

        canvas.width = width;
        canvas.height = height;

        var c = canvas.getContext( '2d' );
        c.width = width;
        c.height = height;
        c.translate( widthHalf, heightHalf );
        return c;
    },

    start: function() {
        var game = this;
        setInterval(function() {
                game.update(20);
                game.render();
        }, 20);
    }

});
