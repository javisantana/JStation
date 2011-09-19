

var bullet_img = document.createElement('img');
bullet_img.src = '/img/fire.png';

var Bullet = function(pos, vel) {
    this.pos = pos;
    this.oldpos = pos;
    this.vel = vel;
    this.time = 0;
};

Bullet.prototype.update = function(dt) {
    var p = this;
    p.time += dt;

    this.oldpos = this.pos.clone();
    p.pos = vec2.add(p.pos, vec2.mul(dt, p.vel));

    //var v = 1.0 - smoothstep(0, 300, p.time);
    var v = clamp(0, 1, 200.0/p.time);
    this.vel = vec2.mul(v, p.vel);
    return v > 0.4;
    //p.pos.x = 100*Math.cos(p.time*p.vel);
    //p.pos.y = 100*Math.sin(p.time*p.vel);
};

Bullet.prototype.render = function(ctx) {
    var p = this.pos;
    var p0 = this.oldpos;
    //ctx.fillStyle = "rgb(157, 170, 195)";
    //ctx.fillRect(p.x, p.y, 2, 2);
    ctx.drawImage(bullet_img, p.x, p.y, 15, 1);
    /*
    ctx.beginPath();
    ctx.moveTo(p0.x,p0.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    */
};

var Bullets = function() {};

Bullets.prototype.fire = function(pos, vel) {
    entities.add(new Bullet(pos, vel));
}

window.bullets = new Bullets();

