
var Entities = function() {
    this.ent = [];
}

Entities.prototype.add = function(b) {
    this.ent.push(b);
}

Entities.prototype.update = function(dt) {
    var b = this.ent;
    var len = b.length;
    for(var i = 0; i < len; ++i) {
        if(!b[i].update(dt)) {
            b.splice(i, 1);
            len -= 1;
            i-=1;
        }
    }
};

Entities.prototype.render = function(ctx) {
    var b = this.ent;
    for(var i = 0; i < b.length; ++i) {
        b[i].render(ctx);
    }
};

window.entities = new Entities();

setInterval(function() {
    console.log(entities.ent.length);
}, 1000);
