

function Explosion(pos) {
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
                c.fillColor = "rgba(100, 100, 100, 0.5)";
                c.fillRect(p.x, p.y, 1, 1);
            }
        });
    }
}
