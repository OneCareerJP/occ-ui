(function (e) {
  function t(t) {
    for (
      var r, c, a = t[0], i = t[1], u = t[2], f = 0, p = [];
      f < a.length;
      f++
    )
      (c = a[f]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
        (o[c] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    s && s(t);
    while (p.length) p.shift()();
    return l.push.apply(l, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, a = 1; a < n.length; a++) {
        var i = n[a];
        0 !== o[i] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    l = [];
  function c(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = e),
    (c.c = r),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/");
  var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var u = 0; u < a.length; u++) t(a[u]);
  var s = i;
  l.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("cd49");
  },
  "058e": function (e, t, n) {},
  4449: function (e, t, n) {
    "use strict";
    n("058e");
  },
  cd49: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "OccHeading", function () {
        return u;
      });
    var r = n("7a23");
    function o(e, t, n, o, l, c) {
      return (
        Object(r["f"])(),
        Object(r["b"])(
          Object(r["h"])(e.tagLevel),
          {
            class: Object(r["d"])(e.classes),
            style: Object(r["e"])(e.lineClampClassName),
          },
          {
            default: Object(r["i"])(function () {
              return [Object(r["g"])(e.$slots, "default", {}, void 0, !0)];
            }),
            _: 3,
          },
          8,
          ["class", "style"]
        )
      );
    }
    var l = Object(r["c"])({
        name: "OccHeading",
        props: {
          level: {
            type: Number,
            validator: function (e) {
              return [1, 2, 3, 4, 5, 6].includes(e);
            },
            default: 1,
          },
          visual: { type: String, default: "" },
          color: { type: String, default: "" },
          lineClamp: { type: Number, default: 0 },
        },
        setup: function (e) {
          var t = Object(r["a"])(function () {
              return "h" + e.level;
            }),
            n = Object(r["a"])(function () {
              return e.visual ? e.visual : e.level;
            }),
            o = Object(r["a"])(function () {
              return e.lineClamp > 0
                ? {
                    display: "-webkit-box",
                    overflow: "hidden",
                    "max-height": "initial",
                    "-webkit-line-clamp": "" + e.lineClamp,
                    "-webkit-box-orient": "vertical",
                  }
                : {};
            }),
            l = Object(r["a"])(function () {
              return [
                "occ-heading--" + n.value,
                e.color ? "occ-heading__color--" + e.color : "",
              ];
            });
          return {
            classes: l,
            tagLevel: t,
            visualLevel: n,
            lineClampClassName: o,
          };
        },
      }),
      c = (n("4449"), n("6b0d")),
      a = n.n(c);
    const i = a()(l, [
      ["render", o],
      ["__scopeId", "data-v-031c7576"],
    ]);
    var u = i,
      s = [u],
      f = function (e) {
        s.forEach(function (t) {
          e.component(t.this.$options.name, t);
        });
      };
    t["default"] = { install: f };
  },
});
//# sourceMappingURL=app.e4724c16.js.map