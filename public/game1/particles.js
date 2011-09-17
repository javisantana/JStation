

function Explosion(pos) {

    
    for(var i=0; i < 100; ++i)
        entities.add({

            pos: pos,
            vel: vec2.fromAngle(rand01()*360),
            life: 0.1 + rand01(),
            time: 0,

            update: function(dt) {
                var p = this;
                p.pos = vec2.add(p.pos, vec2.mul(dt, p.vel));

                //var v = 1.0 - smoothstep(0, 300, p.time);
                var v = clamp(0, 1, p.life*100.0/p.time);
                this.vel = vec2.mul(v, p.vel);
                return v > 0.4;
            },

            render: function(c) {
                var p = this.pos;
                c.fillColor = "rgba(100, 100, 100, 0.5)";
                c.fillRect(p.x, p.y, 1, 1);
            }
        });
}
