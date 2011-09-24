

var bullet_img = load_image('fire.png');

var Bullet = function(pos, vel, who) {
    this.pos = pos;
    this.oldpos = pos;
    this.vel = vel;
    this.angle = this.vel.angle();
    this.time = 0;
    this.explode = false;
    this.who = who;
};

Bullet.prototype.update = function(dt) {
    var p = this;
    p.time += dt;

    // is marked to die
    if(this.explode) {
        litte_explosion(p.pos);
        return false;
    }

    this.oldpos = this.pos.clone();
    p.pos = vec2.add(p.pos, vec2.mul(dt, p.vel));
    var v = clamp(0, 1, 200.0/p.time);
    this.vel = vec2.mul(v, p.vel);
    return v > 0.4;
};

Bullet.prototype.render = function(ctx) {
    var p = this.pos;
    var p0 = this.oldpos;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(this.angle);
    ctx.drawImage(bullet_img, 0, 0, 15, 1);
    ctx.restore();
};

var Bullets = function() {};
Bullets.prototype = new Entities();

Bullets.prototype.fire = function(pos, vel, who) {
    bullets.add(new Bullet(pos, vel, who));
}

window.bullets = new Bullets();

