

var img = load_image('player.png');

var Player = function(pos, controller) {
    this.controller = controller;

    this.pos = pos;
    this.angle = 0;
    this.size = 32;
    this.died = false;

    this.damage = 1.0;
    // add name
    var name = document.createElement('div');
    name.innerHTML = controller.name;
    name.style.position = 'absolute';
    name.style.top = this.pos.y + "px";
    name.style.left = this.pos.x + "px";
    name.style.color = "#FFF";
    name.style['text-shadow']= "#FFF 0px 0px 3px";
    name.style['font-weigth'] = 'bold';
    name.style['font-size'] = '12px';
    document.body.appendChild(name);
    //life
    var life = document.createElement('div');
    life.style.position = 'absolute';
    life.style.width= '50px';
    life.style.height = '5px';
    life.style.border = '1px solid #EEE';
    document.body.appendChild(life);

    var life_size = document.createElement('div');
    life_size.style.width= '50%';
    life_size.style.height= '100%';
    life_size.style.background = '#EEEEEE';
    life.appendChild(life_size);

    this.name = name;
    this.life = life;
    this.life_size = life_size;

};

Player.prototype.update = function(dt) {
    var PLAYER_TURN_VEL = 0.003;
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
    this.life_size.style.width = ((this.damage*100)>>0) + "%";
    //p.pos.x = 100*Math.cos(p.time*p.vel);
    //p.pos.y = 100*Math.sin(p.time*p.vel);
    var alive = this.damage > 0.01;
    if(!alive) {
        this.destroy();
    }
    return alive;
};

Player.prototype.destroy = function() {

    document.body.removeChild(this.life);
    document.body.removeChild(this.name);
    this.died = true;
    //this.destroy();
}

Player.prototype.collide = function(pos) {
   var s2 = this.size>>1;
   s2 = s2*s2;
   return vec2.sub(pos, this.pos).lengthSq() < s2;
}

Player.prototype.damaged = function() {
    this.damage -= 0.02;
    if(this.damage < 0)
        this.damage = 0;
}

Player.prototype.render = function(ctx) {
    if(this.died) return;
    var p = this.pos;
    var s = this.size;
    var s2 = s >> 1;
    var canon_h = s >> 4;
    ctx.drawImage(img, (p.x - s2)>>0, (p.y - s2)>>0, s, s);
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = 'rgb(157, 170, 195)';
    ctx.fillRect(5, -canon_h/2, s2, canon_h);
    ctx.restore();
        
    //name
    var name = this.name;
    name.style.top = 8 + ctx.height/2 + this.pos.y + "px";
    name.style.left = 8 +ctx.width/2 + this.pos.x + "px";
    var life = this.life;
    life.style.top = 22 + ctx.height/2 + this.pos.y + "px";
    life.style.left = 8 +ctx.width/2 + this.pos.x + "px";
};

