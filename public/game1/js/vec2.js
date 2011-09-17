
cos = Math.cos
sin = Math.sin
function vec2(x, y) {

    this.x = x || 0;
    this.y = y || 0;

    this.lengthSq = function() {
        var v = this;
        return v.x*v.x + v.y*v.y;
    }

    this.clone = function() { return new vec2(this.x, this.y); }
}

vec2.add = function(a, b) {
    return new vec2(a.x + b.x, a.y + b.y);
};

vec2.mul = function(scalar, b) {
    return new vec2(scalar*b.x, scalar*b.y);
}

vec2.fromAngle = function(angle) {
    return new vec2(cos(angle), sin(angle));
}

