! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.odoo = e() : t.odoo = e() }(this, function() {
    return function(t) {
        function e(r) { if (a[r]) return a[r].exports; var l = a[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(l.exports, l, l.exports, e), l.loaded = !0, l.exports }
        var a = {};
        return e.m = t, e.c = a, e.p = "/", e(0)
    }([function(t, e, a) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l = a(2);
        Object.defineProperty(e, "default", { enumerable: !0, get: function() { return r(l).default } })
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t) {
            var e = void 0,
                a = function a(r) { e = requestAnimationFrame(a), t(r) };
            return a(0),
                function() { return cancelAnimationFrame(e) }
        }
    }, function(t, e, a) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l = a(1),
            n = r(l),
            o = a(5),
            i = a(10),
            c = r(i),
            u = 10,
            f = 3,
            d = function(t, e, a, r) {
                var l, n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                    i = (l = (l = o.append.call(t, "g"), o.attr).call(l, "id", "digit-" + r), o.style).call(l, "filter", "url(#motionFilter-" + r + ")");
                return n.forEach(function(t, r) {
                    var l;
                    (l = (l = o.append.call(i, "text"), o.attr).call(l, "y", -r * e * a), o.text).call(l, t)
                }), i
            },
            s = function(t, e, a) { var r; return (r = (r = (r = o.append.call(t, "g"), o.append).call(r, "text"), o.style).call(r, "filter", "url(#createShadowFailFilter)"), o.text).call(r, e) },
            p = function(t, e) { var a; return (a = (a = (a = (a = (a = (a = (a = o.append.call(t, "filter"), o.attr).call(a, "id", "motionFilter-" + e), o.attr).call(a, "width", "300%"), o.attr).call(a, "x", "-100%"), o.append).call(a, "feGaussianBlur"), o.attr).call(a, "class", "blurValues"), o.attr).call(a, "in", "SourceGraphic"), o.attr).call(a, "stdDeviation", "0 0") },
            v = function(t) { var e; return (e = (e = (e = (e = (e = o.append.call(t, "filter"), o.attr).call(e, "id", "createShadowFailFilter"), o.attr).call(e, "width", "300%"), o.attr).call(e, "x", "-100%"), o.append).call(e, "feGaussianBlur"), o.attr).call(e, "stdDeviation", "0 0") },
            y = function(t, e) { var a; return (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = o.append.call(t, "linearGradient"), o.attr).call(a, "id", "gradient-" + e), o.attr).call(a, "x1", "0%"), o.attr).call(a, "y1", "0%"), o.attr).call(a, "x2", "0%"), o.attr).call(a, "y2", "100%"), o.append).call(a, "stop"), o.attr).call(a, "offset", "0"), o.attr).call(a, "stop-color", "white"), o.attr).call(a, "stop-opacity", "0"), o.select).call(a, "#gradient-" + e), o.append).call(a, "stop"), o.attr).call(a, "offset", "0.2"), o.attr).call(a, "stop-color", "white"), o.attr).call(a, "stop-opacity", "1"), o.select).call(a, "#gradient-" + e), o.append).call(a, "stop"), o.attr).call(a, "offset", "0.8"), o.attr).call(a, "stop-color", "white"), o.attr).call(a, "stop-opacity", "1"), o.select).call(a, "#gradient-" + e), o.append).call(a, "stop"), o.attr).call(a, "offset", "1"), o.attr).call(a, "stop-color", "white"), o.attr).call(a, "stop-opacity", "0") },
            h = function(t, e) { var a; return (a = (a = (a = (a = (a = (a = (a = o.append.call(t, "mask"), o.attr).call(a, "id", "mask-" + e), o.append).call(a, "rect"), o.attr).call(a, "x", 0), o.attr).call(a, "y", 0), o.attr).call(a, "width", "100%"), o.attr).call(a, "height", "100%"), o.attr).call(a, "fill", "url(#gradient-" + e + ")") },
            g = function(t, e, a) { o.attr.call(t, "width", e), o.attr.call(t, "height", a), o.attr.call(t, "viewBox", "0 0 " + e + " " + a), o.style.call(t, "overflow", "hidden") };
        e.default = function(t) {
            var e, a = t.el,
                r = t.value,
                l = t.lineHeight,
                i = void 0 === l ? 1.35 : l,
                m = t.letterSpacing,
                b = void 0 === m ? 1 : m,
                _ = t.animationDelay,
                x = void 0 === _ ? 100 : _,
                j = t.letterAnimationDelay,
                w = void 0 === j ? 100 : j,
                M = (0, o.select)(a),
                P = window.getComputedStyle(M),
                O = parseInt(P.fontSize, 10),
                S = (O * i - O) / 2 + O / 10,
                D = O * i - S,
                F = Date.now(),
                E = 0,
                B = O * i + S;
            M.innerHTML = "";
            var k = o.append.call(M, "svg"),
                A = (e = o.append.call(k, "svg"), o.attr).call(e, "mask", "url(#mask-" + F + ")"),
                G = o.append.call(k, "defs");
            y(G, F), h(G, F), v(G);
            var N = String(r).replace(/ /g, " ").split(""),
                C = N.map(function(t, e) { var a = e + "-" + F; return isNaN(parseInt(t, 10)) ? { isDigit: !1, node: s(A, t, O), value: t, offset: { x: 0, y: D } } : { isDigit: !0, id: a, node: d(A, O, i, a), filter: p(G, a), value: Number(t), offset: { x: 0, y: D } } }),
                q = [],
                H = C.filter(function(t) { return t.isDigit });
            H.forEach(function(t, e) {
                var a = (f * u + t.value) * (O * i),
                    r = (0, c.default)({
                        from: 0,
                        to: a,
                        delay: (H.length - 1 - e) * w + x,
                        step: function(e) {
                            var r;
                            t.offset.y = D + e % (O * i * u), (r = t.node, o.attr).call(r, "transform", "translate(" + t.offset.x + ", " + t.offset.y + ")");
                            var l = a / 2,
                                n = Math.abs(Math.abs(e - l) - l) / 100;
                            (r = t.filter, o.attr).call(r, "stdDeviation", "0 " + n)
                        },
                        end: 0 === e ? function() { return z() } : function(t) { return t }
                    });
                q.push(r)
            });
            var I = function(t) {
                    E = 0, C.forEach(function(t) {
                        var e = t.node.getBBox(),
                            a = e.width;
                        t.offset.x = E, E += a + b
                    }), C.forEach(function(t) {
                        var e;
                        (e = t.node, o.attr).call(e, "transform", "translate(" + t.offset.x + ", " + t.offset.y + ")")
                    }), g(k, E, B), q.forEach(function(e) { return e.update(t) })
                },
                z = (0, n.default)(I);
            return z
        }
    }, function(t, e, a) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t) { var e = document.createElementNS(n.default.svg, t); return this.appendChild(e), e };
        var l = a(6),
            n = r(l)
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t, e) { return this.setAttribute(t, e), this }
    }, function(t, e, a) {
        "use strict";

        function r(t) { return t && t.__esModule ? t : { default: t } }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l = a(7);
        Object.defineProperty(e, "select", { enumerable: !0, get: function() { return r(l).default } });
        var n = a(3);
        Object.defineProperty(e, "append", { enumerable: !0, get: function() { return r(n).default } });
        var o = a(4);
        Object.defineProperty(e, "attr", { enumerable: !0, get: function() { return r(o).default } });
        var i = a(8);
        Object.defineProperty(e, "style", { enumerable: !0, get: function() { return r(i).default } });
        var c = a(9);
        Object.defineProperty(e, "text", { enumerable: !0, get: function() { return r(c).default } })
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { svg: "http://www.w3.org/2000/svg" }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t) { return t === String(t) ? document.querySelector(t) : t }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t, e) { var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""; return this.style.setProperty(t, e, a), this }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t) { return this.textContent = t, this }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = function(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 };
        e.default = function(t) {
            var e = t.from,
                r = t.to,
                l = t.duration,
                n = void 0 === l ? 3e3 : l,
                o = t.delay,
                i = void 0 === o ? 0 : o,
                c = t.easing,
                u = void 0 === c ? a : c,
                f = t.start,
                d = void 0 === f ? function(t) { return t } : f,
                s = t.step,
                p = void 0 === s ? function(t) { return t } : s,
                v = t.end,
                y = void 0 === v ? function(t) { return t } : v,
                h = e,
                g = 0,
                m = !1,
                b = function(t) {
                    if (!m) {
                        g || (g = t, d(h));
                        var a = Math.min(Math.max(t - g - i, 0), n) / n;
                        h = u(a) * (r - e) + e, p(h), 1 === a && (m = !0, y(h))
                    }
                };
            return { update: b }
        }
    }])
});
