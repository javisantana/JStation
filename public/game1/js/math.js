

max = Math.max;
min = Math.min;

function clamp(a, b, v) {
    return min(b, max(a, v));
}

function smoothstep(edge0, edge1, x) {
    x = clamp((x - edge0)/(edge1 - edge0), 0, 1);
    return x*x*x*(x*(x*6 - 15) + 10);
}

function rand01() {
    return Math.random();
}
