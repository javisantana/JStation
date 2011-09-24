

function explosion(pos) {
    for(var i=0; i < 100; ++i) {
        entities.add({
            pos: pos,
            vel: vec2.fromAngle(rand01()*360),
            v: 1.0 + rand01(),
            life: rand01()*0.01,
            time: 0,

            update: function(dt) {
                var p = this;
                p.time += dt;
                p.v += (0 - p.v)*dt*p.life;
                p.pos = vec2.add(p.pos, vec2.mul(dt, vec2.mul(p.v*0.2, p.vel)));
                return p.v > 0.1;
            },

            render: function(c) {
                var p = this.pos;
                c.fillstyle = "rgba(255, 255, 255, 1.0)";
                c.fillrect(p.x, p.y, 2, 2);
            }
        });
    }
}

litte_explosion_img = load_image('exp1.png');

function litte_explosion(pos) {
        entities.add({
            pos: pos,
            life: rand01()*40,
            time: 0,

            update: function(dt) {
                var p = this;
                p.time += dt;
                p.life -= 0.06*dt;
                return p.life > 0;
            },

            render: function(c) {
                var p = this.pos;
                var s = this.life;
                var s2 = s>>1;
                c.fillstyle = "rgba(255, 255, 255, 1.0)";
                c.drawImage(litte_explosion_img, (p.x - s2) >>0, (p.y - s2)>>0, s, s);
            }
        });
}

function epic_explosion(pos) {
        for(var i=0; i < 100; ++i)
        entities.add({
            pos: pos,
            oldpos: pos,
            life: rand01()*60,
            vel: vec2.fromAngle(rand01()*360),
            time: 0,
            v: 0.1 + 0.3*rand01(),

            update: function(dt) {
                var p = this;
                p.time += dt;
                p.life -= 0.06*dt;
                p.v += (0 - p.v)*dt*0.001;
                p.oldpos = p.pos;
                p.pos = vec2.add(p.pos,
                    vec2.mul(dt, vec2.mul(p.v, p.vel)));
                
                return p.life > 0;
            },

            render: function(c) {
                var p = this.pos;
                var op = this.oldpos;
                var s = this.life*0.7;
                var s2 = s>>1;
                c.fillStyle = "rgba(255, 255, 255, 1.0)";
                c.drawImage(litte_explosion_img, (p.x - s2) >>0, (p.y - s2)>>0, s, s);
                c.strokeStyle = "rgba(255, 255, 255, 1.0)";
                c.beginPath();
                c.moveTo(p.x, p.y);
                c.lineTo(op.x, op.y);
                c.stroke();
            }
        });
}
