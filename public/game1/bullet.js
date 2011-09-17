

var Bullet = function(pos, vel) {
    this.pos = pos;
    this.oldpos = pos;
    this.vel = vel;
};

Bullet.prototype.update = function(dt) {
    var p = this;
    p.time += dt;

    this.oldpos = this.pos.clone();
    p.pos = vec2.add(p.pos, vec2.mul(dt, p.vel));
    //p.pos.x = 100*Math.cos(p.time*p.vel);
    //p.pos.y = 100*Math.sin(p.time*p.vel);
};

Bullet.prototype.render = function(ctx) {
    var p = this.pos;
    var p0 = this.oldpos;
    ctx.beginPath();
    ctx.moveTo(p0.x,p0.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
};

var Bullets = function() {
    this.bullets = [];
}

Bullets.prototype.fire = function(pos, vel) {
    this.bullets.push(new Bullet(pos, vel));
    console.log('bullets ' + this.bullets.length);
}

Bullets.prototype.update = function(dt) {
    var b = this.bullets;
    for(var i = 0; i < b.length; ++i) {
        b[i].update(dt);
    }
};

Bullets.prototype.render = function(ctx) {
    var b = this.bullets;
    for(var i = 0; i < b.length; ++i) {
        b[i].render(ctx);
    }
};

window.bullets = new Bullets();
