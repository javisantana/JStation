
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
/*
Entities.prototype.get_by_type = function(type) {
    var t = [];
    for(var i = 0; i < b.length; ++i) {
        var a = b[i];
        if(a.type === type) {
            t.push(a);
        }
    }
    return t;
}
*/

window.entities = new Entities();
//window.bullets_entities = new Entities();

setInterval(function() {
    console.log(entities.ent.length);
}, 1000);
