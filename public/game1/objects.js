
function Box(pos, size) {
    this.pos = pos;
    this.size = size;
}


Box.prototype.update = function(dt) {
    return true;
}

Box.prototype.render = function(ctx) {
    var p = this;
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    ctx.fillRect(p.pos.x, p.pos.y, p.size.x, p.size.y);
}

Box.prototype.is_inside = function(pos) {
    var b = this;
    return pos.x < b.pos.x + b.size.x &&
           pos.x > b.pos.x &&
           pos.y < b.pos.y + b.size.y &&
           pos.y > b.pos.y ;
}

Box.prototype.overlap = function(box) {
    var b = this;
    return b.is_inside(box.pos) &&
        b.is_inside(vec2.add(box.pos, new vec2(b.size.x, 0))) &&
        b.is_inside(vec2.add(box.pos, new vec2(b.size.x, b.size.y))) &&
        b.is_inside(vec2.add(box.pos, new vec2(0, b.size.y)));
}
