

var img = document.createElement("img");
img.src = '/img/player.png';
img.width = '32px';
img.height = '32px';


var Player = function(pos, controller) {
    this.pos = pos;
    this.angle = 0;
    this.controller = controller;
    
    this.size = 32;
};

Player.prototype.update = function(dt) {
    var PLAYER_TURN_VEL = 0.01
    var p = this;
    p.time += dt;

    var controls = this.controller.controls;
    this.angle += PLAYER_TURN_VEL*(dt*controls.left - dt*controls.right);

    if(this.controller.controls.fire) {
        var canon = vec2.add(p.pos, vec2.mul(this.size/2 + 1, vec2.fromAngle(this.angle)));
        window.bullets.fire(canon,
            vec2.mul(
                1.0 + 0.1*rand01(),
                vec2.fromAngle(this.angle + 0.1*rand01())));
    }
    //p.pos.x = 100*Math.cos(p.time*p.vel);
    //p.pos.y = 100*Math.sin(p.time*p.vel);
};

Player.prototype.collide = function(pos) {
   var s2 = this.size>>1;
   s2 = s2*s2;
   return vec2.sub(pos, this.pos).lengthSq() < s2;
}

Player.prototype.render = function(ctx) {
    var p = this.pos;
    var s = this.size;
    var s2 = s >> 1;
    //ctx.fillRect((p.x - s2)>>0, (p.y - s2)>>0, s, s);
    ctx.drawImage(img, (p.x - s2)>>0, (p.y - s2)>>0, s, s);
};

