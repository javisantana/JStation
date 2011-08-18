
var Player = function(pos, controller) {
    this.pos = pos;
    this.controller = controller;
};

Player.prototype.update = function(dt) {
    var p = this;
    p.time += dt;

    if(this.controller.controls.left) {
        p.pos = vec2.add(p.pos, new vec2(1, 0));
    }
    if(this.controller.controls.fire) {
        window.bullets.fire(p.pos, new vec2(0, -1));
    }
    //p.pos.x = 100*Math.cos(p.time*p.vel);
    //p.pos.y = 100*Math.sin(p.time*p.vel);
};

Player.prototype.render = function(ctx) {
    var p = this.pos;
    ctx.fillRect(p.x, p.y, 10, 10);
};

