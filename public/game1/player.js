

var Player = function(pos, controller) {
    this.pos = pos;
    this.angle = 0;
    this.controller = controller;
};

Player.prototype.update = function(dt) {
    var PLAYER_TURN_VEL = 0.01
    var p = this;
    p.time += dt;

    var controls = this.controller.controls;
    this.angle += PLAYER_TURN_VEL*(dt*controls.left - dt*controls.right);

    if(this.controller.controls.fire) {
        window.bullets.fire(p.pos, 
            vec2.mul(
                1.0 + 0.1*rand01(),
                vec2.fromAngle(this.angle + 0.3*rand01())));
        if(rand01() <0.1) 
            Explosion(p.pos);
    }
    //p.pos.x = 100*Math.cos(p.time*p.vel);
    //p.pos.y = 100*Math.sin(p.time*p.vel);
};

Player.prototype.render = function(ctx) {
    var p = this.pos;
    ctx.fillRect(p.x, p.y, 10, 10);
};

