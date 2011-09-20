
cos = Math.cos
sin = Math.sin
atan2 = Math.atan2

function vec2(x, y) {

    this.x = x || 0;
    this.y = y || 0;

    this.lengthSq = function() {
        var v = this;
        return v.x*v.x + v.y*v.y;
    }

    this.clone = function() { return new vec2(this.x, this.y); };
    this.angle = function() { return atan2(this.y, this.x); };
}

vec2.add = function(a, b) {
    return new vec2(a.x + b.x, a.y + b.y);
};

vec2.mul = function(scalar, b) {
    return new vec2(scalar*b.x, scalar*b.y);
};

vec2.fromAngle = function(angle) {
    return new vec2(cos(angle), sin(angle));
};

vec2.sub = function(v1, v2) { return new vec2(v1.x - v2.x, v1.y - v2.y); };
vec2.dot = function(v1, v2) { return v1.x*v2.x +  v1.y*v2.y; };

