"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 6.3.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 20, 2020
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var s in i) {
          Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  function i(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function s(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (a) {
      void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
    });
  }

  var a = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function r() {
    var e = "undefined" != typeof document ? document : {};
    return s(e, a), e;
  }

  var n = {
    document: a,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return s(e, n), e;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function p(e, t, i) {
    return (p = h() ? Reflect.construct : function (e, t, i) {
      var s = [null];
      s.push.apply(s, t);
      var a = new (Function.bind.apply(e, s))();
      return i && d(a, i.prototype), a;
    }).apply(null, arguments);
  }

  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function u(e) {
      if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
      var i;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }

      function s() {
        return p(e, arguments, o(this).constructor);
      }

      return s.prototype = Object.create(e.prototype, {
        constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(s, e);
    })(e);
  }

  var c = function (e) {
    var t, i;

    function s(t) {
      var i, s, a;
      return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
        get: function get() {
          return a;
        },
        set: function set(e) {
          a.__proto__ = e;
        }
      }), i;
    }

    return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
  }(u(Array));

  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }

  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function m(e, t) {
    var i = l(),
        s = r(),
        a = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(a);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = s.createElement(o);
        d.innerHTML = n;

        for (var h = 0; h < d.childNodes.length; h += 1) {
          a.push(d.childNodes[h]);
        }
      } else a = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) {
          i.push(s[a]);
        }

        return i;
      }(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) a.push(e);else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      a = e;
    }

    return new c(function (e) {
      for (var t = [], i = 0; i < e.length; i += 1) {
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      }

      return t;
    }(a));
  }

  m.fn = c.prototype;
  var g,
      w,
      y,
      b = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, s);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, s);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      return f(this, function (e) {
        return s.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = v(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        s.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var i = 0; i < this.length; i += 1) {
        if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) {
          this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transition = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);else for (var s = m(t).parents(), n = 0; n < s.length; n += 1) {
            m(s[n]).is(a) && r.apply(s[n], i);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
        var u = this[p];
        if (a) for (d = 0; d < h.length; d += 1) {
          var c = h[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
            listener: r,
            proxyListener: l
          }), u.addEventListener(c, l, n);
        } else for (d = 0; d < h.length; d += 1) {
          var v = h[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
            listener: r,
            proxyListener: o
          }), u.addEventListener(v, o, n);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);

      for (var l = s.split(" "), o = 0; o < l.length; o += 1) {
        for (var d = l[o], h = 0; h < this.length; h += 1) {
          var p = this[h],
              u = void 0;
          if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length) for (var c = u.length - 1; c >= 0; c -= 1) {
            var v = u[c];
            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
        i[s] = arguments[s];
      }

      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
        for (var o = a[n], d = 0; d < this.length; d += 1) {
          var h = this[d];

          if (e.CustomEvent) {
            var p = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            h.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            }), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function i(s) {
        s.target === this && (e.call(this, s), t.off("transitionend", i));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = l(),
            t = r(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            n = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
        return {
          top: s.top + d - n,
          left: s.left + h - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var i,
          s = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var a in e) {
              this[i].style[a] = e[a];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, i) {
        e.apply(t, [t, i]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          i,
          s = l(),
          a = r(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = m(e), i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
        }

        return !1;
      }

      if (e === a) return n === a;
      if (e === s) return n === s;

      if (e.nodeType || e instanceof c) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return m([]);

      if (e < 0) {
        var i = t + e;
        return m(i < 0 ? [] : [this[i]]);
      }

      return m([this[e]]);
    },
    append: function append() {
      for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
        e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

        for (var s = 0; s < this.length; s += 1) {
          if ("string" == typeof e) {
            var a = t.createElement("div");

            for (a.innerHTML = e; a.firstChild;) {
              this[s].appendChild(a.firstChild);
            }
          } else if (e instanceof c) for (var n = 0; n < e.length; n += 1) {
            this[s].appendChild(e[n]);
          } else this[s].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          i,
          s = r();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var a = s.createElement("div");

          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) {
            this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
          }
        } else if (e instanceof c) for (i = 0; i < e.length; i += 1) {
          this[t].insertBefore(e[i], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
      }

      return m([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          i = this[0];
      if (!i) return m([]);

      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        e ? m(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return m(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }

      return m(t);
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].parentNode; s;) {
          e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
        }
      }

      return m(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) {
          t.push(s[a]);
        }
      }

      return m(t);
    },
    children: function children(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].children, a = 0; a < s.length; a += 1) {
          e && !m(s[a]).is(e) || t.push(s[a]);
        }
      }

      return m(t);
    },
    filter: function filter(e) {
      return m(f(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function x() {
    return Date.now();
  }

  function T(e, t) {
    void 0 === t && (t = "x");
    var i,
        s,
        a,
        r = l(),
        n = r.getComputedStyle(e, null);
    return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
  }

  function C(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
  }

  function S() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i) for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
        var n = s[a],
            l = Object.getOwnPropertyDescriptor(i, n);
        void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n]);
      }
    }

    return e;
  }

  function M(e, t) {
    Object.keys(t).forEach(function (i) {
      C(t[i]) && Object.keys(t[i]).forEach(function (s) {
        "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
      }), e[i] = t[i];
    });
  }

  function z() {
    return g || (g = function () {
      var e = l(),
          t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var i = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, i);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }

  function P(e) {
    return void 0 === e && (e = {}), w || (w = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          i = z(),
          s = l(),
          a = s.navigator.platform,
          r = t || s.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          o = s.screen.width,
          d = s.screen.height,
          h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          p = r.match(/(iPad).*OS\s([\d_]+)/),
          u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === a,
          f = "MacIntel" === a;
      return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), f = !1), h && !v && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n;
    }(e)), w;
  }

  function k() {
    return y || (y = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), y;
  }

  Object.keys(b).forEach(function (e) {
    m.fn[e] = b[e];
  });
  var $ = {
    name: "resize",
    create: function create() {
      var e = this;
      S(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = l();
        t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
      },
      destroy: function destroy(e) {
        var t = l();
        t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  },
      L = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var i = l(),
          s = this,
          a = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            s.emit("observerUpdate", e[0]);
          };

          i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
        } else s.emit("observerUpdate", e[0]);
      });
      a.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), s.observer.observers.push(a);
    },
    init: function init() {
      if (this.support.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }
        this.observer.attach(this.$el[0], {
          childList: this.params.observeSlideChildren
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      I = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      M(this, {
        observer: t(t({}, L), {}, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function O(e) {
    var t = r(),
        i = l(),
        s = this.touchEventsData,
        a = this.params,
        n = this.touches;

    if (!this.animating || !a.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = m(o.target);
      if (("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === o.type, (s.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!s.isTouchEvent && "button" in o && o.button > 0 || s.isTouched && s.isMoved))) if (a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var h = n.currentX,
            p = n.currentY,
            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

        if (!u || !(h <= c || h >= i.screen.width - c)) {
          if (S(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var v = !0;
            d.is(s.formElements) && (v = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var f = v && this.allowTouchMove && a.touchStartPreventDefault;
            (a.touchStartForcePreventDefault || f) && o.preventDefault();
          }

          this.emit("touchStart", o);
        }
      }
    }
  }

  function A(e) {
    var t = r(),
        i = this.touchEventsData,
        s = this.params,
        a = this.touches,
        n = this.rtlTranslate,
        l = e;

    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === l.type) {
        var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
            d = "touchmove" === l.type ? o.pageX : l.pageX,
            h = "touchmove" === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = h);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (S(a, {
          startX: d,
          startY: h,
          currentX: d,
          currentY: h
        }), i.touchStartTime = x()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
          if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          a.currentX = d, a.currentY = h;
          var p = a.currentX - a.startX,
              u = a.currentY - a.startY;

          if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var c;
            if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
              var v = this.isHorizontal() ? p : u;
              a.diff = v, v *= s.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
              var f = !0,
                  g = s.resistanceRatio;

              if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))), f && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
              }

              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: a[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                time: x()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }

  function D(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid,
        d = e;
    if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var h,
        p = x(),
        u = p - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (h > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var c = i.velocities.pop(),
              v = i.velocities.pop(),
              f = c.position - v.position,
              m = c.time - v.time;
          t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var g = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * g,
            y = t.translate + w;
        r && (y = -y);
        var b,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), b = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), b = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var M, z = 0; z < o.length; z += 1) {
            if (o[z] > -y) {
              M = z;
              break;
            }
          }

          y = -(y = Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
        }

        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -y : y) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
            g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();

        s.freeModeMomentumBounce && C ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(b), n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();

      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
      }

      var A = (h - l[$]) / L,
          D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
      }
    }
  }

  function G() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }

  function N(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function B() {
    var e = this.wrapperEl,
        t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }

  var H = !1;

  function X() {}

  var Y = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    nested: !1,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  },
      V = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && S(e, s.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
              a = e[i] || {};
          s.on && t.on && Object.keys(s.on).forEach(function (e) {
            t.on(e, s.on[e]);
          }), s.create && s.create.bind(t)(a);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
        }), s;
      },
      once: function once(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
          s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;

          for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
            r[n] = arguments[n];
          }

          t.apply(s, r);
        }

        return a.__emitterProxy = t, s.on(e, a, i);
      },
      onAny: function onAny(e, t) {
        if ("function" != typeof e) return this;
        var i = t ? "unshift" : "push";
        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
      },
      offAny: function offAny(e) {
        if (!this.eventsAnyListeners) return this;
        var t = this.eventsAnyListeners.indexOf(e);
        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
      },
      off: function off(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, a) {
            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1);
          });
        }), i) : i;
      },
      emit: function emit() {
        var e,
            t,
            i,
            s = this;
        if (!s.eventsListeners) return s;

        for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
          r[n] = arguments[n];
        }

        "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
        var l = Array.isArray(e) ? e : e.split(" ");
        return l.forEach(function (e) {
          if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
            s.apply(i, [e].concat(t));
          }), s.eventsListeners && s.eventsListeners[e]) {
            var a = [];
            s.eventsListeners[e].forEach(function (e) {
              a.push(e);
            }), a.forEach(function (e) {
              e.apply(i, t);
            });
          }
        }), s;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            i = this.$el;
        e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            a = this.rtlTranslate,
            r = this.wrongRTL,
            n = this.virtual && t.virtual.enabled,
            o = n ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            h = n ? this.virtual.slides.length : d.length,
            p = [],
            u = [],
            c = [];

        function v(e, i) {
          return !t.cssMode || i !== d.length - 1;
        }

        var f = t.slidesOffsetBefore;
        "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
        var m = t.slidesOffsetAfter;
        "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
        var g = this.snapGrid.length,
            w = this.snapGrid.length,
            y = t.spaceBetween,
            b = -f,
            E = 0,
            x = 0;

        if (void 0 !== s) {
          var T, C;
          "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), this.virtualSize = -y, a ? d.css({
            marginLeft: "",
            marginTop: ""
          }) : d.css({
            marginRight: "",
            marginBottom: ""
          }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));

          for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
            C = 0;
            var L = d.eq($);

            if (t.slidesPerColumn > 1) {
              var I = void 0,
                  O = void 0,
                  A = void 0;

              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                    G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                    N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z, L.css({
                  "-webkit-box-ordinal-group": I,
                  "-moz-box-ordinal-group": I,
                  "-ms-flex-order": I,
                  "-webkit-order": I,
                  order: I
                });
              } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;

              L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px");
            }

            if ("none" !== L.css("display")) {
              if ("auto" === t.slidesPerView) {
                var B = e.getComputedStyle(L[0], null),
                    H = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);else if (this.isHorizontal()) {
                  var Y = parseFloat(B.getPropertyValue("width") || 0),
                      V = parseFloat(B.getPropertyValue("padding-left") || 0),
                      F = parseFloat(B.getPropertyValue("padding-right") || 0),
                      R = parseFloat(B.getPropertyValue("margin-left") || 0),
                      W = parseFloat(B.getPropertyValue("margin-right") || 0),
                      q = B.getPropertyValue("box-sizing");
                  if (q && "border-box" === q) C = Y + R + W;else {
                    var j = L[0],
                        _ = j.clientWidth;
                    C = Y + V + F + R + W + (j.offsetWidth - _);
                  }
                } else {
                  var U = parseFloat(B.getPropertyValue("height") || 0),
                      K = parseFloat(B.getPropertyValue("padding-top") || 0),
                      Z = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                      J = parseFloat(B.getPropertyValue("margin-top") || 0),
                      Q = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                      ee = B.getPropertyValue("box-sizing");
                  if (ee && "border-box" === ee) C = U + J + Q;else {
                    var te = L[0],
                        ie = te.clientHeight;
                    C = U + K + Z + J + Q + (te.offsetHeight - ie);
                  }
                }
                H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C));
              } else C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");

              d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (b = b + C / 2 + E / 2 + y, 0 === E && 0 !== $ && (b = b - s / 2 - y), 0 === $ && (b = b - s / 2 - y), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && p.push(b), u.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(b), u.push(b), b = b + C + y), this.virtualSize += C + y, E = C, x += 1;
            }
          }

          if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }), t.setWrapperSize && (this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
            M = [];

            for (var se = 0; se < p.length; se += 1) {
              var ae = p[se];
              t.roundLengths && (ae = Math.floor(ae)), p[se] < this.virtualSize + p[0] && M.push(ae);
            }

            p = M;
          }

          if (!t.centeredSlides) {
            M = [];

            for (var re = 0; re < p.length; re += 1) {
              var ne = p[re];
              t.roundLengths && (ne = Math.floor(ne)), p[re] <= this.virtualSize - s && M.push(ne);
            }

            p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
          }

          if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
            marginLeft: y + "px"
          }) : d.filter(v).css({
            marginRight: y + "px"
          }) : d.filter(v).css({
            marginBottom: y + "px"
          })), t.centeredSlides && t.centeredSlidesBounds) {
            var le = 0;
            c.forEach(function (e) {
              le += e + (t.spaceBetween ? t.spaceBetween : 0);
            });
            var oe = (le -= t.spaceBetween) - s;
            p = p.map(function (e) {
              return e < 0 ? -f : e > oe ? oe + m : e;
            });
          }

          if (t.centerInsufficientSlides) {
            var de = 0;

            if (c.forEach(function (e) {
              de += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (de -= t.spaceBetween) < s) {
              var he = (s - de) / 2;
              p.forEach(function (e, t) {
                p[t] = e - he;
              }), u.forEach(function (e, t) {
                u[t] = e + he;
              });
            }
          }

          S(this, {
            slides: d,
            snapGrid: p,
            slidesGrid: u,
            slidesSizesGrid: c
          }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            i = [],
            s = 0;
        if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
          if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var a = this.activeIndex + t;
            if (a > this.slides.length) break;
            i.push(this.slides.eq(a)[0]);
          }
        } else i.push(this.slides.eq(this.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var r = i[t].offsetHeight;
            s = r > s ? r : s;
          }
        }

        s && this.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var a = -e;
          s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

          for (var r = 0; r < i.length; r += 1) {
            var n = i[r],
                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);

            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
              var o = -(a - n.swiperSlideOffset),
                  d = o + this.slidesSizesGrid[r];
              (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
            }

            n.progress = s ? -l : l;
          }

          this.visibleSlides = m(this.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        if (void 0 === e) {
          var t = this.rtlTranslate ? -1 : 1;
          e = this && this.translate && this.translate * t || 0;
        }

        var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            r = this.isBeginning,
            n = this.isEnd,
            l = r,
            o = n;
        0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
          progress: a,
          isBeginning: r,
          isEnd: n
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            r = this.realIndex,
            n = this.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
        var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
        var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            r = this.params,
            n = this.activeIndex,
            l = this.realIndex,
            o = this.snapIndex,
            d = e;

        if (void 0 === d) {
          for (var h = 0; h < s.length; h += 1) {
            void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
          }

          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }

        if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
          var p = Math.min(r.slidesPerGroupSkip, d);
          t = p + Math.floor((d - p) / r.slidesPerGroup);
        }

        if (t >= a.length && (t = a.length - 1), d !== n) {
          var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
          S(this, {
            snapIndex: t,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
        } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this.params,
            i = m(e.target).closest("." + t.slideClass)[0],
            s = !1;
        if (i) for (var a = 0; a < this.slides.length; a += 1) {
          this.slides[a] === i && (s = !0);
        }
        if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
        this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        var r = T(a[0], e);
        return i && (r = -r), r || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            r = this.wrapperEl,
            n = this.progress,
            l = 0,
            o = 0;
        this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
        var d = this.maxTranslate() - this.minTranslate();
        (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, i, s, a) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o,
            d = r.minTranslate(),
            h = r.maxTranslate();

        if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
          var p,
              u = r.isHorizontal();
          if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));else l[u ? "scrollLeft" : "scrollTop"] = -o;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.params,
            a = this.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && this.updateAutoHeight();
          var r = t;

          if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
            if ("reset" === r) return void this.emit("slideResetTransitionStart");
            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.previousIndex,
            a = this.params;

        if (this.animating = !1, !a.cssMode) {
          this.setTransition(0);
          var r = t;

          if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
            if ("reset" === r) return void this.emit("slideResetTransitionEnd");
            this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var a = this,
            r = e;
        r < 0 && (r = 0);
        var n = a.params,
            l = a.snapGrid,
            o = a.slidesGrid,
            d = a.previousIndex,
            h = a.activeIndex,
            p = a.rtlTranslate,
            u = a.wrapperEl;
        if (a.animating && n.preventInteractionOnTransition) return !1;
        var c = Math.min(a.params.slidesPerGroupSkip, r),
            v = c + Math.floor((r - c) / a.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
        var f,
            m = -l[v];
        if (a.updateProgress(m), n.normalizeSlideIndex) for (var g = 0; g < o.length; g += 1) {
          -Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
        }

        if (a.initialized && r !== h) {
          if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1;
        }

        if (f = r > h ? "next" : r < h ? "prev" : "reset", p && -m === a.translate || !p && m === a.translate) return a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;

        if (n.cssMode) {
          var w,
              y = a.isHorizontal(),
              b = -m;
          if (p && (b = u.scrollWidth - u.offsetWidth - b), 0 === t) u[y ? "scrollLeft" : "scrollTop"] = b;else if (u.scrollTo) u.scrollTo(((w = {})[y ? "left" : "top"] = b, w.behavior = "smooth", w));else u[y ? "scrollLeft" : "scrollTop"] = b;
          return !0;
        }

        return 0 === t ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)) : (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
          a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, f));
        }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var a = e;
        return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
      },
      slideNext: function slideNext(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        return this.slideTo(this.activeIndex + r, e, t, i);
      },
      slidePrev: function slidePrev(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            a = this.animating,
            r = this.snapGrid,
            n = this.slidesGrid,
            l = this.rtlTranslate;

        if (s.loop) {
          if (a && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        function o(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var d,
            h = o(l ? this.translate : -this.translate),
            p = r.map(function (e) {
          return o(e);
        }),
            u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
        return void 0 === u && s.cssMode && r.forEach(function (e) {
          !u && h >= e && (u = e);
        }), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
      },
      slideReset: function slideReset(e, t, i) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function slideToClosest(e, t, i, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
        var a = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, a),
            n = r + Math.floor((a - r) / this.params.slidesPerGroup),
            l = this.rtlTranslate ? this.translate : -this.translate;

        if (l >= this.snapGrid[n]) {
          var o = this.snapGrid[n];
          l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup);
        } else {
          var d = this.snapGrid[n - 1];
          l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
        }

        return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            r = t.clickedIndex;

        if (i.loop) {
          if (t.animating) return;
          e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = r(),
            i = e.params,
            s = e.$wrapperEl;
        s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var a = s.children("." + i.slideClass);

        if (i.loopFillGroupWithBlank) {
          var n = i.slidesPerGroup - a.length % i.slidesPerGroup;

          if (n !== i.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
              s.append(o);
            }

            a = s.children("." + i.slideClass);
          }
        }

        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
        var d = [],
            h = [];
        a.each(function (t, i) {
          var s = m(t);
          i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
        });

        for (var p = 0; p < h.length; p += 1) {
          s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }

        for (var u = d.length - 1; u >= 0; u -= 1) {
          s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        this.emit("beforeLoopFix");
        var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            r = this.allowSlideNext,
            n = this.snapGrid,
            l = this.rtlTranslate;
        this.allowSlidePrev = !0, this.allowSlideNext = !0;
        var o = -n[t] - this.getTranslate();
        if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);else if (t >= i.length - s) {
          e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
        }
        this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this.$wrapperEl,
            i = this.params;
        if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && t.append(e[s]);
        } else t.append(e);
        i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var r = 0; r < e.length; r += 1) {
            e[r] && i.prepend(e[r]);
          }

          a = s + e.length;
        } else i.prepend(e);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var i = this.$wrapperEl,
            s = this.params,
            a = this.activeIndex;
        s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
          for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
            var d = this.slides.eq(o);
            d.remove(), l.unshift(d);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var h = 0; h < t.length; h += 1) {
              t[h] && i.append(t[h]);
            }

            n = a > e ? a + t.length : a;
          } else i.append(t);

          for (var p = 0; p < l.length; p += 1) {
            i.append(l[p]);
          }

          s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var a,
            r = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
          }

          r = Math.max(r, 0);
        } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support;
        this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = N.bind(this);
        var o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
              passive: !1,
              capture: o
            } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
      },
      detachEvents: function detachEvents() {
        var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support,
            o = !!t.nested;
        if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
          if (l.touch) {
            var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            a = this.params,
            r = this.$el,
            n = a.breakpoints;

        if (n && (!n || 0 !== Object.keys(n).length)) {
          var l = this.getBreakpoint(n);

          if (l && this.currentBreakpoint !== l) {
            var o = l in n ? n[l] : void 0;
            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = o[e];
              void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var d = o || this.originalParams,
                h = a.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
            h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
            var u = d.direction && d.direction !== a.direction,
                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
            u && t && this.changeDirection(), S(this.params, d), S(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = l, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = l();

        if (e) {
          var i = !1,
              s = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var i = parseFloat(e.substr(1));
              return {
                value: t.innerHeight * i,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          s.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var a = 0; a < s.length; a += 1) {
            var r = s[a],
                n = r.point;
            r.value <= t.innerWidth && (i = n);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = this.device,
            r = [];
        r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" ")), this.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, i, s, a, r) {
        var n,
            o = l();

        function d() {
          r && r();
        }

        m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      F = {},
      R = function () {
    function t() {
      for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) {
        a[r] = arguments[r];
      }

      1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
      var n = this;
      n.support = z(), n.device = P({
        userAgent: i.userAgent
      }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
        var t = n.modules[e];

        if (t.params) {
          var s = Object.keys(t.params)[0],
              a = t.params[s];
          if ("object" != _typeof(a) || null === a) return;
          if (!(s in i) || !("enabled" in a)) return;
          !0 === i[s] && (i[s] = {
            enabled: !0
          }), "object" != _typeof(i[s]) || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
            enabled: !1
          });
        }
      });
      var l = S({}, Y);
      n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(function (e) {
        n.on(e, n.params.on[e]);
      }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = m;
      var o = m(n.params.el);

      if (e = o[0]) {
        if (o.length > 1) {
          var d = [];
          return o.each(function (e) {
            var s = S({}, i, {
              el: e
            });
            d.push(new t(s));
          }), d;
        }

        var h, p, u;
        return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
          return o.children(e);
        } : h = o.children("." + n.params.wrapperClass), S(n, {
          $el: o,
          el: e,
          $wrapperEl: h,
          wrapperEl: h[0],
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === n.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === n.params.direction;
          },
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
          rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
          wrongRTL: "-webkit-box" === h.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
            start: p[0],
            move: p[1],
            end: p[2],
            cancel: p[3]
          }, n.touchEventsDesktop = {
            start: u[0],
            move: u[1],
            end: u[2]
          }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: x(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n;
      }
    }

    var i,
        s,
        a,
        r = t.prototype;
    return r.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, r.getSlideClasses = function (e) {
      var t = this;
      return e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }, r.emitSlidesClasses = function () {
      var e = this;
      e.params._emitClasses && e.el && e.slides.each(function (t) {
        var i = e.getSlideClasses(t);
        e.emit("_slideClass", t, i);
      });
    }, r.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;

      if (e.centeredSlides) {
        for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) {
          t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
        }

        for (var d = a - 1; d >= 0; d -= 1) {
          t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0));
        }
      } else for (var h = a + 1; h < t.length; h += 1) {
        i[h] - i[a] < s && (r += 1);
      }

      return r;
    }, r.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, r.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var i = this.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), this.emit("changeDirection"), t && this.update()), this;
    }, r.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit"));
    }, r.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i,
          s = this,
          a = s.params,
          r = s.$el,
          n = s.$wrapperEl,
          l = s.slides;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
        s.off(e);
      }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
        try {
          i[e] = null;
        } catch (e) {}

        try {
          delete i[e];
        } catch (e) {}
      })), s.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      S(F, e);
    }, t.installModule = function (e) {
      t.prototype.modules || (t.prototype.modules = {});
      var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
      t.prototype.modules[i] = e;
    }, t.use = function (e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return t.installModule(e);
      }), t) : (t.installModule(e), t);
    }, i = t, a = [{
      key: "extendedDefaults",
      get: function get() {
        return F;
      }
    }, {
      key: "defaults",
      get: function get() {
        return Y;
      }
    }], (s = null) && e(i.prototype, s), a && e(i, a), t;
  }();

  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      R.prototype[t] = V[e][t];
    });
  }), R.use([$, I]);
  var W = {
    update: function update(e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          h = d.from,
          p = d.to,
          u = d.slides,
          c = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          w,
          y = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
      var b = Math.max((y || 0) - w, 0),
          E = Math.min((y || 0) + g, u.length - 1),
          x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

      function T() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (S(t.virtual, {
        from: b,
        to: E,
        offset: x,
        slidesGrid: t.slidesGrid
      }), h === b && p === E && !e) return t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: b,
        to: E,
        slides: function () {
          for (var e = [], t = b; t <= E; t += 1) {
            e.push(u[t]);
          }

          return e;
        }()
      }), void (t.params.virtual.renderExternalUpdate && T());
      var C = [],
          M = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = h; z <= p; z += 1) {
        (z < b || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
      }

      for (var P = 0; P < u.length; P += 1) {
        P >= b && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));
      }

      M.forEach(function (e) {
        t.$wrapperEl.append(v(u[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
    },
    renderSlide: function renderSlide(e, t) {
      var i = this.params.virtual;
      if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
      var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      if ("object" == _typeof(e) && "length" in e) for (var t = 0; t < e.length; t += 1) {
        e[t] && this.virtual.slides.push(e[t]);
      } else this.virtual.slides.push(e);
      this.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this.activeIndex,
          i = t + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var a = 0; a < e.length; a += 1) {
          e[a] && this.virtual.slides.unshift(e[a]);
        }

        i = t + e.length, s = e.length;
      } else this.virtual.slides.unshift(e);

      if (this.params.virtual.cache) {
        var r = this.virtual.cache,
            n = {};
        Object.keys(r).forEach(function (e) {
          var t = r[e],
              i = t.attr("data-swiper-slide-index");
          i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
        }), this.virtual.cache = n;
      }

      this.virtual.update(!0), this.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      if (null != e) {
        var t = this.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
          this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
        } else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        this.virtual.update(!0), this.slideTo(t, 0);
      }
    },
    removeAllSlides: function removeAllSlides() {
      this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
    }
  },
      q = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      M(this, {
        virtual: t(t({}, W), {}, {
          slides: this.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function setTranslate(e) {
        e.params.virtual.enabled && e.virtual.update();
      }
    }
  },
      j = {
    handle: function handle(e) {
      var t = l(),
          i = r(),
          s = this.rtlTranslate,
          a = e;
      a.originalEvent && (a = a.originalEvent);
      var n = a.keyCode || a.charCode,
          o = this.params.keyboard.pageUpDown,
          d = o && 33 === n,
          h = o && 34 === n,
          p = 37 === n,
          u = 39 === n,
          c = 38 === n,
          v = 40 === n;
      if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && v || h)) return !1;
      if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || v)) {
          var f = !1;
          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
          var m = t.innerWidth,
              g = t.innerHeight,
              w = this.$el.offset();
          s && (w.left -= this.$el[0].scrollLeft);

          for (var y = [[w.left, w.top], [w.left + this.width, w.top], [w.left, w.top + this.height], [w.left + this.width, w.top + this.height]], b = 0; b < y.length; b += 1) {
            var E = y[b];
            E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0);
          }

          if (!f) return;
        }

        this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || v) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || v) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n);
      }
    },
    enable: function enable() {
      var e = r();
      this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      var e = r();
      this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      _ = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    },
    create: function create() {
      M(this, {
        keyboard: t({
          enabled: !1
        }, j)
      });
    },
    on: {
      init: function init(e) {
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function destroy(e) {
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var U = {
    lastScrollTime: x(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function event() {
      return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = r(),
            t = ("onwheel" in e);

        if (!t) {
          var i = e.createElement("div");
          i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
        }

        return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: s,
        pixelY: a
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var t = e,
          i = this,
          s = i.params.mousewheel;
      i.params.cssMode && t.preventDefault();
      var a = i.$el;
      if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var r = 0,
          n = i.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
      if (s.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          r = -l.pixelX * n;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          r = -l.pixelY;
        }
      } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
      if (0 === r) return !0;

      if (s.invert && (r = -r), i.params.freeMode) {
        var o = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r)
        },
            d = i.mousewheel.lastEventBeforeSnap,
            h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;

        if (!h) {
          i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
          var p = i.getTranslate() + r * s.sensitivity,
              u = i.isBeginning,
              c = i.isEnd;

          if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
            var v = i.mousewheel.recentWheelEvents;
            v.length >= 15 && v.shift();
            var f = v.length ? v[v.length - 1] : void 0,
                g = v[0];
            if (v.push(o), f && (o.delta > f.delta || o.direction !== f.direction)) v.splice(0);else if (v.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
              var w = r > 0 ? .8 : .2;
              i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.mousewheel.timeout = E(function () {
                i.slideToClosest(i.params.speed, !0, void 0, w);
              }, 0);
            }
            i.mousewheel.timeout || (i.mousewheel.timeout = E(function () {
              i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
        }
      } else {
        var y = {
          time: x(),
          delta: Math.abs(r),
          direction: Math.sign(r),
          raw: e
        },
            b = i.mousewheel.recentWheelEvents;
        b.length >= 2 && b.shift();
        var T = b.length ? b[b.length - 1] : void 0;
        if (b.push(y), T ? (y.direction !== T.direction || y.delta > T.delta || y.time > T.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    animateSlider: function animateSlider(e) {
      var t = l();
      return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1));
    },
    releaseScroll: function releaseScroll(e) {
      var t = this.params.mousewheel;

      if (e.direction < 0) {
        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
      } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;

      return !1;
    },
    enable: function enable() {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = U.event();
      if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (!this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    }
  },
      K = {
    update: function update() {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function init() {
      var e,
          t,
          i = this.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      Z = {
    update: function update() {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var n,
              l,
              o,
              d = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each(function (e) {
            var s = m(e),
                a = s.index();
            a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var h = d.eq(i),
                p = h.index();

            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1) {
                d.eq(v).addClass(t.bulletActiveClass + "-main");
              }

              if (this.params.loop) {
                if (p >= d.length - t.dynamicMainBullets) {
                  for (var f = t.dynamicMainBullets; f >= 0; f -= 1) {
                    d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                  }

                  d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }

          if (t.dynamicBullets) {
            var g = Math.min(d.length, t.dynamicMainBullets + 4),
                w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                y = e ? "right" : "left";
            d.css(this.isHorizontal() ? y : "top", w + "px");
          }
        }

        if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
          var b;
          b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var E = (i + 1) / r,
              x = 1,
              T = 1;
          "horizontal" === b ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function render() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
            e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = m(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = m(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), S(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      J = {
    setTranslate: function setTranslate() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            l = this.params.scrollbar,
            o = s,
            d = (a - s) * i;
        t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
          trackSize: a,
          divider: r,
          moveDivider: n,
          dragSize: s
        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function getPointerPosition(e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          l = i.dragStartPos;
      t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
      this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
      this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E(function () {
        a.css("opacity", 0), a.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    disableDraggable: function disableDraggable() {
      if (this.params.scrollbar.el) {
        var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            d = !(!n.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
      }
    },
    init: function init() {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = m(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
        var a = s.find("." + this.params.scrollbar.dragClass);
        0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
          $el: s,
          el: s[0],
          $dragEl: a,
          dragEl: a[0]
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      Q = {
    setTransform: function setTransform(e, t) {
      var i = this.rtl,
          s = m(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          n = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          o = s.attr("data-swiper-parallax-scale"),
          d = s.attr("data-swiper-parallax-opacity");

      if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
        var h = d - (d - 1) * (1 - Math.abs(t));
        s[0].style.opacity = h;
      }

      if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");else {
        var p = o - (o - 1) * (1 - Math.abs(t));
        s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, s);
      }), i.each(function (t, i) {
        var r = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var i = m(t),
            s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (s = 0), i.transition(s);
      });
    }
  },
      ee = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e);
      }

      a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;

      if (!t.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e);
      }

      a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;

      if (!i.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
        a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
      }

      r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
      s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale,
            n = s.height * t.scale;

        if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300,
            r = 300,
            n = s.x * a,
            l = i.currentX + n,
            o = s.y * r,
            d = i.currentY + o;
        0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
        var h = Math.max(a, r);
        i.currentX = l, i.currentY = d;
        var p = i.width * e.scale,
            u = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t["in"](e);
    },
    "in": function _in(e) {
      var t,
          i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          h,
          p,
          u,
          c,
          v,
          f,
          m,
          g = this.zoom,
          w = this.params.zoom,
          y = g.gesture,
          b = g.image;
      (y.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? y.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : y.$slideEl = this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === b.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = b.touchesStart.x, i = b.touchesStart.y), g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, s = y.$slideEl.offset().left + f / 2 - t, a = y.$slideEl.offset().top + m / 2 - i, l = y.$imageEl[0].offsetWidth, o = y.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > v && (n = v)) : (r = 0, n = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
    },
    out: function out() {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
      i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    },
    toggleGestures: function toggleGestures(e) {
      var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
      this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
    },
    enableGestures: function enableGestures() {
      this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
    },
    disableGestures: function disableGestures() {
      this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
    },
    enable: function enable() {
      var e = this.support,
          t = this.zoom;

      if (!t.enabled) {
        t.enabled = !0;
        var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !e.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
      }
    },
    disable: function disable() {
      var e = this.zoom;

      if (e.enabled) {
        var t = this.support;
        this.zoom.enabled = !1;
        var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !t.passiveListener || {
          passive: !1,
          capture: !0
        },
            a = "." + this.params.slideClass;
        t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
      }
    }
  },
      te = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var i = this,
          s = i.params.lazy;

      if (void 0 !== e && 0 !== i.slides.length) {
        var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
        !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(function (e) {
          var r = m(e);
          r.addClass(s.loadingClass);
          var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              h = r.parent("picture");
          i.loadImage(r[0], l || n, o, d, !1, function () {
            if (null != i && i && (!i || i.params) && !i.destroyed) {
              if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
                var t = m(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                var e = a.attr("data-swiper-slide-index");

                if (a.hasClass(i.params.slideDuplicateClass)) {
                  var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                  i.lazy.loadInSlide(p.index(), !1);
                } else {
                  var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(u.index(), !1);
                }
              }

              i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight();
            }
          }), i.emit("lazyImageLoad", a[0], r[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          l = i.slidesPerView;

      function o(e) {
        if (r) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (s[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t) {
        var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
        e.lazy.loadInSlide(i);
      });else if (l > 1) for (var h = a; h < a + l; h += 1) {
        o(h) && e.lazy.loadInSlide(h);
      } else e.lazy.loadInSlide(a);
      if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + l; f < c; f += 1) {
          o(f) && e.lazy.loadInSlide(f);
        }

        for (var g = v; g < a; g += 1) {
          o(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var w = t.children("." + i.slideNextClass);
        w.length > 0 && e.lazy.loadInSlide(d(w));
        var y = t.children("." + i.slidePrevClass);
        y.length > 0 && e.lazy.loadInSlide(d(y));
      }
    }
  },
      ie = {
    LinearSpline: function LinearSpline(e, t) {
      var i,
          s,
          a,
          r,
          n,
          l = function l(e, t) {
        for (s = -1, i = e.length; i - s > 1;) {
          e[a = i + s >> 1] <= t ? s = a : i = a;
        }

        return i;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control,
          n = a.constructor;

      function l(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;
        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof n && l(r[o]);
      } else r instanceof n && t !== r && l(r);
    },
    setTransition: function setTransition(e, t) {
      var i,
          s = this,
          a = s.constructor,
          r = s.controller.control;

      function n(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) {
        r[i] !== t && r[i] instanceof a && n(r[i]);
      } else r instanceof a && t !== r && n(r);
    }
  },
      se = {
    getRandomNumber: function getRandomNumber(e) {
      void 0 === e && (e = 16);
      return "x".repeat(e).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      });
    },
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function makeElNotFocusable(e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElRoleDescription: function addElRoleDescription(e, t) {
      return e.attr("aria-role-description", t), e;
    },
    addElControls: function addElControls(e, t) {
      return e.attr("aria-controls", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    addElId: function addElId(e, t) {
      return e.attr("id", t), e;
    },
    addElLive: function addElLive(e, t) {
      return e.attr("aria-live", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function onEnterKey(e) {
      var t = this.params.a11y;

      if (13 === e.keyCode) {
        var i = m(e.target);
        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      if (!this.params.loop && this.navigation) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i) {
        var s = m(i);
        e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)));
      });
    },
    init: function init() {
      var e = this,
          t = e.params.a11y;
      e.$el.append(e.a11y.liveRegion);
      var i = e.$el;
      t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
      var s,
          a,
          r,
          n = e.$wrapperEl,
          l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
      e.a11y.addElId(n, l), s = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, s), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), "group"), e.slides.each(function (t) {
        var i = m(t);
        e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length);
      }), e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(a, t.nextSlideMessage), e.a11y.addElControls(a, l)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, l)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e, t;
      this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }
  },
      ae = {
    init: function init() {
      var e = l();

      if (this.params.history) {
        if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
        var t = this.history;
        t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues(e) {
      var t = l(),
          i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          s = i.length;
      return {
        key: i[s - 2],
        value: i[s - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      var i = l();

      if (this.history.initialized && this.params.history.enabled) {
        var s;
        s = this.params.url ? new URL(this.params.url) : i.location;
        var a = this.slides.eq(t),
            r = ae.slugify(a.attr("data-history"));
        s.pathname.includes(e) || (r = e + "/" + r);
        var n = i.history.state;
        n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
          value: r
        }, null, r) : i.history.pushState({
          value: r
        }, null, r));
      }
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);

        if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();
          this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    }
  },
      re = {
    onHashCange: function onHashCange() {
      var e = r();
      this.emit("hashChange");
      var t = e.location.hash.replace("#", "");

      if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
        if (void 0 === i) return;
        this.slideTo(i);
      }
    },
    setHash: function setHash() {
      var e = l(),
          t = r();
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");else {
        var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        t.location.hash = s || "", this.emit("hashSet");
      }
    },
    init: function init() {
      var e = r(),
          t = l();

      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;
        var i = e.location.hash.replace("#", "");
        if (i) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var n = this.slides.eq(s);

          if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
            var o = n.index();
            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }
        this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      ne = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
        var t;
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
      }, i);
    },
    start: function start() {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function stop() {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    },
    onVisibilityChange: function onVisibilityChange() {
      var e = r();
      "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1);
    },
    onTransitionEnd: function onTransitionEnd(e) {
      this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
    }
  },
      le = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
        this.params.virtualTranslate || (s -= this.translate);
        var a = 0;
        this.isHorizontal() || (a = s, s = 0);
        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: r
        }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;
        i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              s.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      oe = {
    setTranslate: function setTranslate() {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
      d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: a + "px"
      })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));

      for (var c = 0; c < s.length; c += 1) {
        var v = s.eq(c),
            f = c;
        p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var g = 90 * f,
            w = Math.floor(g / 360);
        n && (g = -g, w = Math.floor(-g / 360));
        var y = Math.max(Math.min(v[0].progress, 1), -1),
            b = 0,
            E = 0,
            x = 0;
        f % 4 == 0 ? (b = 4 * -w * l, x = 0) : (f - 1) % 4 == 0 ? (b = 0, x = 4 * -w * l) : (f - 2) % 4 == 0 ? (b = l + 4 * w * l, x = l) : (f - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * w), n && (b = -b), h || (E = b, b = 0);
        var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + b + "px, " + E + "px, " + x + "px)";

        if (y <= 1 && y > -1 && (u = 90 * f + 90 * y, n && (u = 90 * -f - 90 * y)), v.transform(T), d.slideShadows) {
          var C = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
            P = d.shadowScale,
            k = d.shadowScale / z,
            $ = d.shadowOffset;
        e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)");
      }
      var L = o.isSafari || o.isWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      de = {
    setTranslate: function setTranslate() {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var s = e.eq(i),
            a = s[0].progress;
        this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
        var r = -180 * a,
            n = 0,
            l = -s[0].swiperSlideOffset,
            o = 0;

        if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
          var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0));
        }

        s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
              a.trigger(e[i]);
            }
          }
        });
      }
    }
  },
      he = {
    setTranslate: function setTranslate() {
      for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
        var u = i.eq(h),
            c = s[h],
            v = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
            f = r ? o * v : 0,
            g = r ? 0 : o * v,
            w = -d * Math.abs(v),
            y = a.stretch;
        "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(a.stretch) / 100 * c);
        var b = r ? 0 : y * v,
            E = r ? y * v : 0,
            x = 1 - (1 - a.scale) * Math.abs(v);
        Math.abs(E) < .001 && (E = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(f) < .001 && (f = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
        var T = "translate3d(" + E + "px," + b + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + f + "deg) scale(" + x + ")";

        if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
          var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
              S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
          0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      pe = {
    init: function init() {
      var e = this.params.thumbs;
      if (this.thumbs.initialized) return !1;
      this.thumbs.initialized = !0;
      var t = this.constructor;
      return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), S(this.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0;
    },
    onThumbClick: function onThumbClick() {
      var e = this.thumbs.swiper;

      if (e) {
        var t = e.clickedIndex,
            i = e.clickedSlide;

        if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
          var s;

          if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
            var a = this.activeIndex;
            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
          }

          this.slideTo(s);
        }
      }
    },
    update: function update(e) {
      var t = this.thumbs.swiper;

      if (t) {
        var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;

        if (this.realIndex !== t.realIndex || a) {
          var r,
              n,
              l = t.activeIndex;

          if (t.params.loop) {
            t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
            var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
            r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev";
          } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";

          a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
        }

        var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var u = 0; u < h; u += 1) {
          t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
        } else for (var c = 0; c < h; c += 1) {
          t.slides.eq(this.realIndex + c).addClass(p);
        }
      }
    }
  },
      ue = [q, _, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function create() {
      M(this, {
        mousewheel: {
          enabled: !1,
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          enable: U.enable,
          disable: U.disable,
          handle: U.handle,
          handleMouseEnter: U.handleMouseEnter,
          handleMouseLeave: U.handleMouseLeave,
          animateSlider: U.animateSlider,
          releaseScroll: U.releaseScroll
        }
      });
    },
    on: {
      init: function init(e) {
        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
      },
      destroy: function destroy(e) {
        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      M(this, {
        navigation: t({}, K)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      click: function click(e, t) {
        var i,
            s = e.navigation,
            a = s.$nextEl,
            r = s.$prevEl;
        !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      M(this, {
        pagination: t({
          dynamicBulletIndex: 0
        }, Z)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      click: function click(e, t) {
        e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      M(this, {
        scrollbar: t({
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }, J)
      });
    },
    on: {
      init: function init(e) {
        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
      },
      update: function update(e) {
        e.scrollbar.updateSize();
      },
      resize: function resize(e) {
        e.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(e) {
        e.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(e) {
        e.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.scrollbar.setTransition(t);
      },
      destroy: function destroy(e) {
        e.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      M(this, {
        parallax: t({}, Q)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      init: function init(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTranslate: function setTranslate(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.params.parallax.enabled && e.parallax.setTransition(t);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this;
      M(e, {
        zoom: t({
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        }, ee)
      });
      var i = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return i;
        },
        set: function set(t) {
          if (i !== t) {
            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, s, a);
          }

          i = t;
        }
      });
    },
    on: {
      init: function init(e) {
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function destroy(e) {
        e.zoom.disable();
      },
      touchStart: function touchStart(e, t) {
        e.zoom.enabled && e.zoom.onTouchStart(t);
      },
      touchEnd: function touchEnd(e, t) {
        e.zoom.enabled && e.zoom.onTouchEnd(t);
      },
      doubleTap: function doubleTap(e, t) {
        e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
      },
      transitionEnd: function transitionEnd(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      },
      slideChange: function slideChange(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      M(this, {
        lazy: t({
          initialImageLoaded: !1
        }, te)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function init(e) {
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
      },
      scroll: function scroll(e) {
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      resize: function resize(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      scrollbarDragMove: function scrollbarDragMove(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function transitionStart(e) {
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd(e) {
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      },
      slideChange: function slideChange(e) {
        e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      M(this, {
        controller: t({
          control: this.params.controller.control
        }, ie)
      });
    },
    on: {
      update: function update(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function resize(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function observerUpdate(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function setTranslate(e, t, i) {
        e.controller.control && e.controller.setTranslate(t, i);
      },
      setTransition: function setTransition(e, t, i) {
        e.controller.control && e.controller.setTransition(t, i);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null
      }
    },
    create: function create() {
      M(this, {
        a11y: t(t({}, se), {}, {
          liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        })
      });
    },
    on: {
      afterInit: function afterInit(e) {
        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
      },
      toEdge: function toEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(e) {
        e.params.a11y.enabled && e.a11y.updatePagination();
      },
      destroy: function destroy(e) {
        e.params.a11y.enabled && e.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      M(this, {
        history: t({}, ae)
      });
    },
    on: {
      init: function init(e) {
        e.params.history.enabled && e.history.init();
      },
      destroy: function destroy(e) {
        e.params.history.enabled && e.history.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      },
      slideChange: function slideChange(e) {
        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      M(this, {
        hashNavigation: t({
          initialized: !1
        }, re)
      });
    },
    on: {
      init: function init(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function destroy(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd(e) {
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      },
      slideChange: function slideChange(e) {
        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function create() {
      M(this, {
        autoplay: t(t({}, ne), {}, {
          running: !1,
          paused: !1
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
      },
      beforeTransitionStart: function beforeTransitionStart(e, t, i) {
        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove(e) {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      touchEnd: function touchEnd(e) {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
      },
      destroy: function destroy(e) {
        e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      M(this, {
        fadeEffect: t({}, le)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "fade" === e.params.effect && e.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      M(this, {
        cubeEffect: t({}, oe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "cube" === e.params.effect && e.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      M(this, {
        flipEffect: t({}, de)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          S(e.params, t), S(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "flip" === e.params.effect && e.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "flip" === e.params.effect && e.flipEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      M(this, {
        coverflowEffect: t({}, he)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate(e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      M(this, {
        thumbs: t({
          swiper: null,
          initialized: !1
        }, pe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        var t = e.params.thumbs;
        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
      },
      slideChange: function slideChange(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      update: function update(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      resize: function resize(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      observerUpdate: function observerUpdate(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      setTransition: function setTransition(e, t) {
        var i = e.thumbs.swiper;
        i && i.setTransition(t);
      },
      beforeDestroy: function beforeDestroy(e) {
        var t = e.thumbs.swiper;
        t && e.thumbs.swiperCreated && t && t.destroy();
      }
    }
  }];
  return R.use(ue), R;
});
"object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = e || self).Plyr = t();
}(void 0, function () {
  "use strict";

  !function () {
    if ("undefined" != typeof window) try {
      var e = new window.CustomEvent("test", {
        cancelable: !0
      });
      if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default");
    } catch (e) {
      var t = function t(e, _t2) {
        var n, i;
        return (_t2 = _t2 || {}).bubbles = !!_t2.bubbles, _t2.cancelable = !!_t2.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, _t2.bubbles, _t2.cancelable, _t2.detail), i = n.preventDefault, n.preventDefault = function () {
          i.call(this);

          try {
            Object.defineProperty(this, "defaultPrevented", {
              get: function get() {
                return !0;
              }
            });
          } catch (e) {
            this.defaultPrevented = !0;
          }
        }, n;
      };

      t.prototype = window.Event.prototype, window.CustomEvent = t;
    }
  }();
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function t(e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports;
  }

  var n = function n(e) {
    return e && e.Math == Math && e;
  },
      i = n("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || n("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || n("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || n("object" == _typeof(e) && e) || Function("return this")(),
      r = function r(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
      a = !r(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1];
  }),
      o = {}.propertyIsEnumerable,
      s = Object.getOwnPropertyDescriptor,
      l = {
    f: s && !o.call({
      1: 2
    }, 1) ? function (e) {
      var t = s(this, e);
      return !!t && t.enumerable;
    } : o
  },
      c = function c(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
      u = {}.toString,
      h = function h(e) {
    return u.call(e).slice(8, -1);
  },
      f = "".split,
      d = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (e) {
    return "String" == h(e) ? f.call(e, "") : Object(e);
  } : Object,
      p = function p(e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
      m = function m(e) {
    return d(p(e));
  },
      g = function g(e) {
    return "object" == _typeof(e) ? null !== e : "function" == typeof e;
  },
      v = function v(e, t) {
    if (!g(e)) return e;
    var n, i;
    if (t && "function" == typeof (n = e.toString) && !g(i = n.call(e))) return i;
    if ("function" == typeof (n = e.valueOf) && !g(i = n.call(e))) return i;
    if (!t && "function" == typeof (n = e.toString) && !g(i = n.call(e))) return i;
    throw TypeError("Can't convert object to primitive value");
  },
      y = {}.hasOwnProperty,
      b = function b(e, t) {
    return y.call(e, t);
  },
      w = i.document,
      k = g(w) && g(w.createElement),
      T = function T(e) {
    return k ? w.createElement(e) : {};
  },
      S = !a && !r(function () {
    return 7 != Object.defineProperty(T("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      E = Object.getOwnPropertyDescriptor,
      A = {
    f: a ? E : function (e, t) {
      if (e = m(e), t = v(t, !0), S) try {
        return E(e, t);
      } catch (e) {}
      if (b(e, t)) return c(!l.f.call(e, t), e[t]);
    }
  },
      P = function P(e) {
    if (!g(e)) throw TypeError(String(e) + " is not an object");
    return e;
  },
      x = Object.defineProperty,
      C = {
    f: a ? x : function (e, t, n) {
      if (P(e), t = v(t, !0), P(n), S) try {
        return x(e, t, n);
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (e[t] = n.value), e;
    }
  },
      O = a ? function (e, t, n) {
    return C.f(e, t, c(1, n));
  } : function (e, t, n) {
    return e[t] = n, e;
  },
      I = function I(e, t) {
    try {
      O(i, e, t);
    } catch (n) {
      i[e] = t;
    }

    return t;
  },
      L = i["__core-js_shared__"] || I("__core-js_shared__", {}),
      j = Function.toString;

  "function" != typeof L.inspectSource && (L.inspectSource = function (e) {
    return j.call(e);
  });

  var N,
      R,
      M,
      _ = L.inspectSource,
      U = i.WeakMap,
      D = "function" == typeof U && /native code/.test(_(U)),
      F = t(function (e) {
    (e.exports = function (e, t) {
      return L[e] || (L[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }),
      q = 0,
      H = Math.random(),
      B = function B(e) {
    return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++q + H).toString(36);
  },
      V = F("keys"),
      z = function z(e) {
    return V[e] || (V[e] = B(e));
  },
      W = {},
      K = i.WeakMap;

  if (D) {
    var $ = new K(),
        Y = $.get,
        G = $.has,
        X = $.set;
    N = function N(e, t) {
      return X.call($, e, t), t;
    }, R = function R(e) {
      return Y.call($, e) || {};
    }, M = function M(e) {
      return G.call($, e);
    };
  } else {
    var Q = z("state");
    W[Q] = !0, N = function N(e, t) {
      return O(e, Q, t), t;
    }, R = function R(e) {
      return b(e, Q) ? e[Q] : {};
    }, M = function M(e) {
      return b(e, Q);
    };
  }

  var J,
      Z = {
    set: N,
    get: R,
    has: M,
    enforce: function enforce(e) {
      return M(e) ? R(e) : N(e, {});
    },
    getterFor: function getterFor(e) {
      return function (t) {
        var n;
        if (!g(t) || (n = R(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
        return n;
      };
    }
  },
      ee = t(function (e) {
    var t = Z.get,
        n = Z.enforce,
        r = String(String).split("String");
    (e.exports = function (e, t, a, o) {
      var s = !!o && !!o.unsafe,
          l = !!o && !!o.enumerable,
          c = !!o && !!o.noTargetGet;
      "function" == typeof a && ("string" != typeof t || b(a, "name") || O(a, "name", t), n(a).source = r.join("string" == typeof t ? t : "")), e !== i ? (s ? !c && e[t] && (l = !0) : delete e[t], l ? e[t] = a : O(e, t, a)) : l ? e[t] = a : I(t, a);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && t(this).source || _(this);
    });
  }),
      te = i,
      ne = function ne(e) {
    return "function" == typeof e ? e : void 0;
  },
      ie = function ie(e, t) {
    return arguments.length < 2 ? ne(te[e]) || ne(i[e]) : te[e] && te[e][t] || i[e] && i[e][t];
  },
      re = Math.ceil,
      ae = Math.floor,
      oe = function oe(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? ae : re)(e);
  },
      se = Math.min,
      le = function le(e) {
    return e > 0 ? se(oe(e), 9007199254740991) : 0;
  },
      ce = Math.max,
      ue = Math.min,
      he = function he(e, t) {
    var n = oe(e);
    return n < 0 ? ce(n + t, 0) : ue(n, t);
  },
      fe = function fe(e) {
    return function (t, n, i) {
      var r,
          a = m(t),
          o = le(a.length),
          s = he(i, o);

      if (e && n != n) {
        for (; o > s;) {
          if ((r = a[s++]) != r) return !0;
        }
      } else for (; o > s; s++) {
        if ((e || s in a) && a[s] === n) return e || s || 0;
      }

      return !e && -1;
    };
  },
      de = {
    includes: fe(!0),
    indexOf: fe(!1)
  },
      pe = de.indexOf,
      me = function me(e, t) {
    var n,
        i = m(e),
        r = 0,
        a = [];

    for (n in i) {
      !b(W, n) && b(i, n) && a.push(n);
    }

    for (; t.length > r;) {
      b(i, n = t[r++]) && (~pe(a, n) || a.push(n));
    }

    return a;
  },
      ge = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      ve = ge.concat("length", "prototype"),
      ye = {
    f: Object.getOwnPropertyNames || function (e) {
      return me(e, ve);
    }
  },
      be = {
    f: Object.getOwnPropertySymbols
  },
      we = ie("Reflect", "ownKeys") || function (e) {
    var t = ye.f(P(e)),
        n = be.f;
    return n ? t.concat(n(e)) : t;
  },
      ke = function ke(e, t) {
    for (var n = we(t), i = C.f, r = A.f, a = 0; a < n.length; a++) {
      var o = n[a];
      b(e, o) || i(e, o, r(t, o));
    }
  },
      Te = /#|\.prototype\./,
      Se = function Se(e, t) {
    var n = Ae[Ee(e)];
    return n == xe || n != Pe && ("function" == typeof t ? r(t) : !!t);
  },
      Ee = Se.normalize = function (e) {
    return String(e).replace(Te, ".").toLowerCase();
  },
      Ae = Se.data = {},
      Pe = Se.NATIVE = "N",
      xe = Se.POLYFILL = "P",
      Ce = Se,
      Oe = A.f,
      Ie = function Ie(e, t) {
    var n,
        r,
        a,
        o,
        s,
        l = e.target,
        c = e.global,
        u = e.stat;
    if (n = c ? i : u ? i[l] || I(l, {}) : (i[l] || {}).prototype) for (r in t) {
      if (o = t[r], a = e.noTargetGet ? (s = Oe(n, r)) && s.value : n[r], !Ce(c ? r : l + (u ? "." : "#") + r, e.forced) && void 0 !== a) {
        if (_typeof(o) == _typeof(a)) continue;
        ke(o, a);
      }

      (e.sham || a && a.sham) && O(o, "sham", !0), ee(n, r, o, e);
    }
  },
      Le = !!Object.getOwnPropertySymbols && !r(function () {
    return !String(Symbol());
  }),
      je = Le && !Symbol.sham && "symbol" == _typeof(Symbol.iterator),
      Ne = Array.isArray || function (e) {
    return "Array" == h(e);
  },
      Re = function Re(e) {
    return Object(p(e));
  },
      Me = Object.keys || function (e) {
    return me(e, ge);
  },
      _e = a ? Object.defineProperties : function (e, t) {
    P(e);

    for (var n, i = Me(t), r = i.length, a = 0; r > a;) {
      C.f(e, n = i[a++], t[n]);
    }

    return e;
  },
      Ue = ie("document", "documentElement"),
      De = z("IE_PROTO"),
      Fe = function Fe() {},
      qe = function qe(e) {
    return "<script>" + e + "<\/script>";
  },
      _He = function He() {
    try {
      J = document.domain && new ActiveXObject("htmlfile");
    } catch (e) {}

    var e, t;
    _He = J ? function (e) {
      e.write(qe("")), e.close();
      var t = e.parentWindow.Object;
      return e = null, t;
    }(J) : ((t = T("iframe")).style.display = "none", Ue.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(qe("document.F=Object")), e.close(), e.F);

    for (var n = ge.length; n--;) {
      delete _He.prototype[ge[n]];
    }

    return _He();
  };

  W[De] = !0;

  var Be = Object.create || function (e, t) {
    var n;
    return null !== e ? (Fe.prototype = P(e), n = new Fe(), Fe.prototype = null, n[De] = e) : n = _He(), void 0 === t ? n : _e(n, t);
  },
      Ve = ye.f,
      ze = {}.toString,
      We = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      Ke = {
    f: function f(e) {
      return We && "[object Window]" == ze.call(e) ? function (e) {
        try {
          return Ve(e);
        } catch (e) {
          return We.slice();
        }
      }(e) : Ve(m(e));
    }
  },
      $e = F("wks"),
      Ye = i.Symbol,
      Ge = je ? Ye : Ye && Ye.withoutSetter || B,
      Xe = function Xe(e) {
    return b($e, e) || (Le && b(Ye, e) ? $e[e] = Ye[e] : $e[e] = Ge("Symbol." + e)), $e[e];
  },
      Qe = {
    f: Xe
  },
      Je = C.f,
      Ze = function Ze(e) {
    var t = te.Symbol || (te.Symbol = {});
    b(t, e) || Je(t, e, {
      value: Qe.f(e)
    });
  },
      et = C.f,
      tt = Xe("toStringTag"),
      nt = function nt(e, t, n) {
    e && !b(e = n ? e : e.prototype, tt) && et(e, tt, {
      configurable: !0,
      value: t
    });
  },
      it = function it(e) {
    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
    return e;
  },
      rt = function rt(e, t, n) {
    if (it(e), void 0 === t) return e;

    switch (n) {
      case 0:
        return function () {
          return e.call(t);
        };

      case 1:
        return function (n) {
          return e.call(t, n);
        };

      case 2:
        return function (n, i) {
          return e.call(t, n, i);
        };

      case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r);
        };
    }

    return function () {
      return e.apply(t, arguments);
    };
  },
      at = Xe("species"),
      ot = function ot(e, t) {
    var n;
    return Ne(e) && ("function" != typeof (n = e.constructor) || n !== Array && !Ne(n.prototype) ? g(n) && null === (n = n[at]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
  },
      st = [].push,
      lt = function lt(e) {
    var t = 1 == e,
        n = 2 == e,
        i = 3 == e,
        r = 4 == e,
        a = 6 == e,
        o = 5 == e || a;
    return function (s, l, c, u) {
      for (var h, f, p = Re(s), m = d(p), g = rt(l, c, 3), v = le(m.length), y = 0, b = u || ot, w = t ? b(s, v) : n ? b(s, 0) : void 0; v > y; y++) {
        if ((o || y in m) && (f = g(h = m[y], y, p), e)) if (t) w[y] = f;else if (f) switch (e) {
          case 3:
            return !0;

          case 5:
            return h;

          case 6:
            return y;

          case 2:
            st.call(w, h);
        } else if (r) return !1;
      }

      return a ? -1 : i || r ? r : w;
    };
  },
      ct = {
    forEach: lt(0),
    map: lt(1),
    filter: lt(2),
    some: lt(3),
    every: lt(4),
    find: lt(5),
    findIndex: lt(6)
  },
      ut = ct.forEach,
      ht = z("hidden"),
      ft = Xe("toPrimitive"),
      dt = Z.set,
      pt = Z.getterFor("Symbol"),
      mt = Object.prototype,
      _gt = i.Symbol,
      vt = ie("JSON", "stringify"),
      yt = A.f,
      bt = C.f,
      wt = Ke.f,
      kt = l.f,
      Tt = F("symbols"),
      St = F("op-symbols"),
      Et = F("string-to-symbol-registry"),
      At = F("symbol-to-string-registry"),
      Pt = F("wks"),
      xt = i.QObject,
      Ct = !xt || !xt.prototype || !xt.prototype.findChild,
      Ot = a && r(function () {
    return 7 != Be(bt({}, "a", {
      get: function get() {
        return bt(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (e, t, n) {
    var i = yt(mt, t);
    i && delete mt[t], bt(e, t, n), i && e !== mt && bt(mt, t, i);
  } : bt,
      It = function It(e, t) {
    var n = Tt[e] = Be(_gt.prototype);
    return dt(n, {
      type: "Symbol",
      tag: e,
      description: t
    }), a || (n.description = t), n;
  },
      Lt = je ? function (e) {
    return "symbol" == _typeof(e);
  } : function (e) {
    return Object(e) instanceof _gt;
  },
      jt = function jt(e, t, n) {
    e === mt && jt(St, t, n), P(e);
    var i = v(t, !0);
    return P(n), b(Tt, i) ? (n.enumerable ? (b(e, ht) && e[ht][i] && (e[ht][i] = !1), n = Be(n, {
      enumerable: c(0, !1)
    })) : (b(e, ht) || bt(e, ht, c(1, {})), e[ht][i] = !0), Ot(e, i, n)) : bt(e, i, n);
  },
      Nt = function Nt(e, t) {
    P(e);
    var n = m(t),
        i = Me(n).concat(Ut(n));
    return ut(i, function (t) {
      a && !Rt.call(n, t) || jt(e, t, n[t]);
    }), e;
  },
      Rt = function Rt(e) {
    var t = v(e, !0),
        n = kt.call(this, t);
    return !(this === mt && b(Tt, t) && !b(St, t)) && (!(n || !b(this, t) || !b(Tt, t) || b(this, ht) && this[ht][t]) || n);
  },
      Mt = function Mt(e, t) {
    var n = m(e),
        i = v(t, !0);

    if (n !== mt || !b(Tt, i) || b(St, i)) {
      var r = yt(n, i);
      return !r || !b(Tt, i) || b(n, ht) && n[ht][i] || (r.enumerable = !0), r;
    }
  },
      _t = function _t(e) {
    var t = wt(m(e)),
        n = [];
    return ut(t, function (e) {
      b(Tt, e) || b(W, e) || n.push(e);
    }), n;
  },
      Ut = function Ut(e) {
    var t = e === mt,
        n = wt(t ? St : m(e)),
        i = [];
    return ut(n, function (e) {
      !b(Tt, e) || t && !b(mt, e) || i.push(Tt[e]);
    }), i;
  };

  if (Le || (ee((_gt = function gt() {
    if (this instanceof _gt) throw TypeError("Symbol is not a constructor");

    var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        t = B(e),
        n = function n(e) {
      this === mt && n.call(St, e), b(this, ht) && b(this[ht], t) && (this[ht][t] = !1), Ot(this, t, c(1, e));
    };

    return a && Ct && Ot(mt, t, {
      configurable: !0,
      set: n
    }), It(t, e);
  }).prototype, "toString", function () {
    return pt(this).tag;
  }), ee(_gt, "withoutSetter", function (e) {
    return It(B(e), e);
  }), l.f = Rt, C.f = jt, A.f = Mt, ye.f = Ke.f = _t, be.f = Ut, Qe.f = function (e) {
    return It(Xe(e), e);
  }, a && (bt(_gt.prototype, "description", {
    configurable: !0,
    get: function get() {
      return pt(this).description;
    }
  }), ee(mt, "propertyIsEnumerable", Rt, {
    unsafe: !0
  }))), Ie({
    global: !0,
    wrap: !0,
    forced: !Le,
    sham: !Le
  }, {
    Symbol: _gt
  }), ut(Me(Pt), function (e) {
    Ze(e);
  }), Ie({
    target: "Symbol",
    stat: !0,
    forced: !Le
  }, {
    "for": function _for(e) {
      var t = String(e);
      if (b(Et, t)) return Et[t];

      var n = _gt(t);

      return Et[t] = n, At[n] = t, n;
    },
    keyFor: function keyFor(e) {
      if (!Lt(e)) throw TypeError(e + " is not a symbol");
      if (b(At, e)) return At[e];
    },
    useSetter: function useSetter() {
      Ct = !0;
    },
    useSimple: function useSimple() {
      Ct = !1;
    }
  }), Ie({
    target: "Object",
    stat: !0,
    forced: !Le,
    sham: !a
  }, {
    create: function create(e, t) {
      return void 0 === t ? Be(e) : Nt(Be(e), t);
    },
    defineProperty: jt,
    defineProperties: Nt,
    getOwnPropertyDescriptor: Mt
  }), Ie({
    target: "Object",
    stat: !0,
    forced: !Le
  }, {
    getOwnPropertyNames: _t,
    getOwnPropertySymbols: Ut
  }), Ie({
    target: "Object",
    stat: !0,
    forced: r(function () {
      be.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(e) {
      return be.f(Re(e));
    }
  }), vt) {
    var Dt = !Le || r(function () {
      var e = _gt();

      return "[null]" != vt([e]) || "{}" != vt({
        a: e
      }) || "{}" != vt(Object(e));
    });
    Ie({
      target: "JSON",
      stat: !0,
      forced: Dt
    }, {
      stringify: function stringify(e, t, n) {
        for (var i, r = [e], a = 1; arguments.length > a;) {
          r.push(arguments[a++]);
        }

        if (i = t, (g(t) || void 0 !== e) && !Lt(e)) return Ne(t) || (t = function t(e, _t3) {
          if ("function" == typeof i && (_t3 = i.call(this, e, _t3)), !Lt(_t3)) return _t3;
        }), r[1] = t, vt.apply(null, r);
      }
    });
  }

  _gt.prototype[ft] || O(_gt.prototype, ft, _gt.prototype.valueOf), nt(_gt, "Symbol"), W[ht] = !0;
  var Ft = C.f,
      qt = i.Symbol;

  if (a && "function" == typeof qt && (!("description" in qt.prototype) || void 0 !== qt().description)) {
    var Ht = {},
        Bt = function Bt() {
      var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          t = this instanceof Bt ? new qt(e) : void 0 === e ? qt() : qt(e);
      return "" === e && (Ht[t] = !0), t;
    };

    ke(Bt, qt);
    var Vt = Bt.prototype = qt.prototype;
    Vt.constructor = Bt;
    var zt = Vt.toString,
        Wt = "Symbol(test)" == String(qt("test")),
        Kt = /^Symbol\((.*)\)[^)]+$/;
    Ft(Vt, "description", {
      configurable: !0,
      get: function get() {
        var e = g(this) ? this.valueOf() : this,
            t = zt.call(e);
        if (b(Ht, e)) return "";
        var n = Wt ? t.slice(7, -1) : t.replace(Kt, "$1");
        return "" === n ? void 0 : n;
      }
    }), Ie({
      global: !0,
      forced: !0
    }, {
      Symbol: Bt
    });
  }

  Ze("iterator");

  var $t = function $t(e, t) {
    var n = [][e];
    return !!n && r(function () {
      n.call(null, t || function () {
        throw 1;
      }, 1);
    });
  },
      Yt = Object.defineProperty,
      Gt = {},
      Xt = function Xt(e) {
    throw e;
  },
      Qt = function Qt(e, t) {
    if (b(Gt, e)) return Gt[e];
    t || (t = {});
    var n = [][e],
        i = !!b(t, "ACCESSORS") && t.ACCESSORS,
        o = b(t, 0) ? t[0] : Xt,
        s = b(t, 1) ? t[1] : void 0;
    return Gt[e] = !!n && !r(function () {
      if (i && !a) return !0;
      var e = {
        length: -1
      };
      i ? Yt(e, 1, {
        enumerable: !0,
        get: Xt
      }) : e[1] = 1, n.call(e, o, s);
    });
  },
      Jt = ct.forEach,
      Zt = $t("forEach"),
      en = Qt("forEach"),
      tn = Zt && en ? [].forEach : function (e) {
    return Jt(this, e, arguments.length > 1 ? arguments[1] : void 0);
  };

  Ie({
    target: "Array",
    proto: !0,
    forced: [].forEach != tn
  }, {
    forEach: tn
  });
  var nn = de.indexOf,
      rn = [].indexOf,
      an = !!rn && 1 / [1].indexOf(1, -0) < 0,
      on = $t("indexOf"),
      sn = Qt("indexOf", {
    ACCESSORS: !0,
    1: 0
  });
  Ie({
    target: "Array",
    proto: !0,
    forced: an || !on || !sn
  }, {
    indexOf: function indexOf(e) {
      return an ? rn.apply(this, arguments) || 0 : nn(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var ln = Xe("unscopables"),
      cn = Array.prototype;
  null == cn[ln] && C.f(cn, ln, {
    configurable: !0,
    value: Be(null)
  });

  var un,
      hn,
      fn,
      dn = function dn(e) {
    cn[ln][e] = !0;
  },
      pn = {},
      mn = !r(function () {
    function e() {}

    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  }),
      gn = z("IE_PROTO"),
      vn = Object.prototype,
      yn = mn ? Object.getPrototypeOf : function (e) {
    return e = Re(e), b(e, gn) ? e[gn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? vn : null;
  },
      bn = Xe("iterator"),
      wn = !1;

  [].keys && ("next" in (fn = [].keys()) ? (hn = yn(yn(fn))) !== Object.prototype && (un = hn) : wn = !0), null == un && (un = {}), b(un, bn) || O(un, bn, function () {
    return this;
  });

  var kn = {
    IteratorPrototype: un,
    BUGGY_SAFARI_ITERATORS: wn
  },
      Tn = kn.IteratorPrototype,
      Sn = function Sn() {
    return this;
  },
      En = function En(e, t, n) {
    var i = t + " Iterator";
    return e.prototype = Be(Tn, {
      next: c(1, n)
    }), nt(e, i, !1), pn[i] = Sn, e;
  },
      An = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e,
        t = !1,
        n = {};

    try {
      (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array;
    } catch (e) {}

    return function (n, i) {
      return P(n), function (e) {
        if (!g(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
      }(i), t ? e.call(n, i) : n.__proto__ = i, n;
    };
  }() : void 0),
      Pn = kn.IteratorPrototype,
      xn = kn.BUGGY_SAFARI_ITERATORS,
      Cn = Xe("iterator"),
      On = function On() {
    return this;
  },
      In = function In(e, t, n, i, r, a, o) {
    En(n, t, i);

    var s,
        l,
        c,
        u = function u(e) {
      if (e === r && m) return m;
      if (!xn && e in d) return d[e];

      switch (e) {
        case "keys":
        case "values":
        case "entries":
          return function () {
            return new n(this, e);
          };
      }

      return function () {
        return new n(this);
      };
    },
        h = t + " Iterator",
        f = !1,
        d = e.prototype,
        p = d[Cn] || d["@@iterator"] || r && d[r],
        m = !xn && p || u(r),
        g = "Array" == t && d.entries || p;

    if (g && (s = yn(g.call(new e())), Pn !== Object.prototype && s.next && (yn(s) !== Pn && (An ? An(s, Pn) : "function" != typeof s[Cn] && O(s, Cn, On)), nt(s, h, !0))), "values" == r && p && "values" !== p.name && (f = !0, m = function m() {
      return p.call(this);
    }), d[Cn] !== m && O(d, Cn, m), pn[t] = m, r) if (l = {
      values: u("values"),
      keys: a ? m : u("keys"),
      entries: u("entries")
    }, o) for (c in l) {
      (xn || f || !(c in d)) && ee(d, c, l[c]);
    } else Ie({
      target: t,
      proto: !0,
      forced: xn || f
    }, l);
    return l;
  },
      Ln = Z.set,
      jn = Z.getterFor("Array Iterator"),
      Nn = In(Array, "Array", function (e, t) {
    Ln(this, {
      type: "Array Iterator",
      target: m(e),
      index: 0,
      kind: t
    });
  }, function () {
    var e = jn(this),
        t = e.target,
        n = e.kind,
        i = e.index++;
    return !t || i >= t.length ? (e.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == n ? {
      value: i,
      done: !1
    } : "values" == n ? {
      value: t[i],
      done: !1
    } : {
      value: [i, t[i]],
      done: !1
    };
  }, "values");

  pn.Arguments = pn.Array, dn("keys"), dn("values"), dn("entries");

  var Rn = [].join,
      Mn = d != Object,
      _n = $t("join", ",");

  Ie({
    target: "Array",
    proto: !0,
    forced: Mn || !_n
  }, {
    join: function join(e) {
      return Rn.call(m(this), void 0 === e ? "," : e);
    }
  });

  var Un,
      Dn,
      Fn = function Fn(e, t, n) {
    var i = v(t);
    i in e ? C.f(e, i, c(0, n)) : e[i] = n;
  },
      qn = ie("navigator", "userAgent") || "",
      Hn = i.process,
      Bn = Hn && Hn.versions,
      Vn = Bn && Bn.v8;

  Vn ? Dn = (Un = Vn.split("."))[0] + Un[1] : qn && (!(Un = qn.match(/Edge\/(\d+)/)) || Un[1] >= 74) && (Un = qn.match(/Chrome\/(\d+)/)) && (Dn = Un[1]);

  var zn = Dn && +Dn,
      Wn = Xe("species"),
      Kn = function Kn(e) {
    return zn >= 51 || !r(function () {
      var t = [];
      return (t.constructor = {})[Wn] = function () {
        return {
          foo: 1
        };
      }, 1 !== t[e](Boolean).foo;
    });
  },
      $n = Kn("slice"),
      Yn = Qt("slice", {
    ACCESSORS: !0,
    0: 0,
    1: 2
  }),
      Gn = Xe("species"),
      Xn = [].slice,
      Qn = Math.max;

  Ie({
    target: "Array",
    proto: !0,
    forced: !$n || !Yn
  }, {
    slice: function slice(e, t) {
      var n,
          i,
          r,
          a = m(this),
          o = le(a.length),
          s = he(e, o),
          l = he(void 0 === t ? o : t, o);
      if (Ne(a) && ("function" != typeof (n = a.constructor) || n !== Array && !Ne(n.prototype) ? g(n) && null === (n = n[Gn]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return Xn.call(a, s, l);

      for (i = new (void 0 === n ? Array : n)(Qn(l - s, 0)), r = 0; s < l; s++, r++) {
        s in a && Fn(i, r, a[s]);
      }

      return i.length = r, i;
    }
  });
  var Jn = {};
  Jn[Xe("toStringTag")] = "z";
  var Zn = "[object z]" === String(Jn),
      ei = Xe("toStringTag"),
      ti = "Arguments" == h(function () {
    return arguments;
  }()),
      ni = Zn ? h : function (e) {
    var t, n, i;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    }(t = Object(e), ei)) ? n : ti ? h(t) : "Object" == (i = h(t)) && "function" == typeof t.callee ? "Arguments" : i;
  },
      ii = Zn ? {}.toString : function () {
    return "[object " + ni(this) + "]";
  };
  Zn || ee(Object.prototype, "toString", ii, {
    unsafe: !0
  });

  var ri = function ri() {
    var e = P(this),
        t = "";
    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
  };

  function ai(e, t) {
    return RegExp(e, t);
  }

  var oi = {
    UNSUPPORTED_Y: r(function () {
      var e = ai("a", "y");
      return e.lastIndex = 2, null != e.exec("abcd");
    }),
    BROKEN_CARET: r(function () {
      var e = ai("^r", "gy");
      return e.lastIndex = 2, null != e.exec("str");
    })
  },
      si = RegExp.prototype.exec,
      li = String.prototype.replace,
      ci = si,
      ui = function () {
    var e = /a/,
        t = /b*/g;
    return si.call(e, "a"), si.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
  }(),
      hi = oi.UNSUPPORTED_Y || oi.BROKEN_CARET,
      fi = void 0 !== /()??/.exec("")[1];

  (ui || fi || hi) && (ci = function ci(e) {
    var t,
        n,
        i,
        r,
        a = this,
        o = hi && a.sticky,
        s = ri.call(a),
        l = a.source,
        c = 0,
        u = e;
    return o && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), u = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (l = "(?: " + l + ")", u = " " + u, c++), n = new RegExp("^(?:" + l + ")", s)), fi && (n = new RegExp("^" + l + "$(?!\\s)", s)), ui && (t = a.lastIndex), i = si.call(o ? n : a, u), o ? i ? (i.input = i.input.slice(c), i[0] = i[0].slice(c), i.index = a.lastIndex, a.lastIndex += i[0].length) : a.lastIndex = 0 : ui && i && (a.lastIndex = a.global ? i.index + i[0].length : t), fi && i && i.length > 1 && li.call(i[0], n, function () {
      for (r = 1; r < arguments.length - 2; r++) {
        void 0 === arguments[r] && (i[r] = void 0);
      }
    }), i;
  });
  var di = ci;
  Ie({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== di
  }, {
    exec: di
  });
  var pi = RegExp.prototype,
      mi = pi.toString,
      gi = r(function () {
    return "/a/b" != mi.call({
      source: "a",
      flags: "b"
    });
  }),
      vi = "toString" != mi.name;
  (gi || vi) && ee(RegExp.prototype, "toString", function () {
    var e = P(this),
        t = String(e.source),
        n = e.flags;
    return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in pi) ? ri.call(e) : n);
  }, {
    unsafe: !0
  });

  var yi = function yi(e) {
    return function (t, n) {
      var i,
          r,
          a = String(p(t)),
          o = oe(n),
          s = a.length;
      return o < 0 || o >= s ? e ? "" : void 0 : (i = a.charCodeAt(o)) < 55296 || i > 56319 || o + 1 === s || (r = a.charCodeAt(o + 1)) < 56320 || r > 57343 ? e ? a.charAt(o) : i : e ? a.slice(o, o + 2) : r - 56320 + (i - 55296 << 10) + 65536;
    };
  },
      bi = {
    codeAt: yi(!1),
    charAt: yi(!0)
  },
      wi = bi.charAt,
      ki = Z.set,
      Ti = Z.getterFor("String Iterator");

  In(String, "String", function (e) {
    ki(this, {
      type: "String Iterator",
      string: String(e),
      index: 0
    });
  }, function () {
    var e,
        t = Ti(this),
        n = t.string,
        i = t.index;
    return i >= n.length ? {
      value: void 0,
      done: !0
    } : (e = wi(n, i), t.index += e.length, {
      value: e,
      done: !1
    });
  });

  var Si = Xe("species"),
      Ei = !r(function () {
    var e = /./;
    return e.exec = function () {
      var e = [];
      return e.groups = {
        a: "7"
      }, e;
    }, "7" !== "".replace(e, "$<a>");
  }),
      Ai = "$0" === "a".replace(/./, "$0"),
      Pi = Xe("replace"),
      xi = !!/./[Pi] && "" === /./[Pi]("a", "$0"),
      Ci = !r(function () {
    var e = /(?:)/,
        t = e.exec;

    e.exec = function () {
      return t.apply(this, arguments);
    };

    var n = "ab".split(e);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  }),
      Oi = function Oi(e, t, n, i) {
    var a = Xe(e),
        o = !r(function () {
      var t = {};
      return t[a] = function () {
        return 7;
      }, 7 != ""[e](t);
    }),
        s = o && !r(function () {
      var t = !1,
          n = /a/;
      return "split" === e && ((n = {}).constructor = {}, n.constructor[Si] = function () {
        return n;
      }, n.flags = "", n[a] = /./[a]), n.exec = function () {
        return t = !0, null;
      }, n[a](""), !t;
    });

    if (!o || !s || "replace" === e && (!Ei || !Ai || xi) || "split" === e && !Ci) {
      var l = /./[a],
          c = n(a, ""[e], function (e, t, n, i, r) {
        return t.exec === di ? o && !r ? {
          done: !0,
          value: l.call(t, n, i)
        } : {
          done: !0,
          value: e.call(n, t, i)
        } : {
          done: !1
        };
      }, {
        REPLACE_KEEPS_$0: Ai,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: xi
      }),
          u = c[0],
          h = c[1];
      ee(String.prototype, e, u), ee(RegExp.prototype, a, 2 == t ? function (e, t) {
        return h.call(e, this, t);
      } : function (e) {
        return h.call(e, this);
      });
    }

    i && O(RegExp.prototype[a], "sham", !0);
  },
      Ii = bi.charAt,
      Li = function Li(e, t, n) {
    return t + (n ? Ii(e, t).length : 1);
  },
      ji = function ji(e, t) {
    var n = e.exec;

    if ("function" == typeof n) {
      var i = n.call(e, t);
      if ("object" != _typeof(i)) throw TypeError("RegExp exec method returned something other than an Object or null");
      return i;
    }

    if ("RegExp" !== h(e)) throw TypeError("RegExp#exec called on incompatible receiver");
    return di.call(e, t);
  },
      Ni = Math.max,
      Ri = Math.min,
      Mi = Math.floor,
      _i = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      Ui = /\$([$&'`]|\d\d?)/g;

  Oi("replace", 2, function (e, t, n, i) {
    var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        a = i.REPLACE_KEEPS_$0,
        o = r ? "$" : "$0";
    return [function (n, i) {
      var r = p(this),
          a = null == n ? void 0 : n[e];
      return void 0 !== a ? a.call(n, r, i) : t.call(String(r), n, i);
    }, function (e, i) {
      if (!r && a || "string" == typeof i && -1 === i.indexOf(o)) {
        var l = n(t, e, this, i);
        if (l.done) return l.value;
      }

      var c = P(e),
          u = String(this),
          h = "function" == typeof i;
      h || (i = String(i));
      var f = c.global;

      if (f) {
        var d = c.unicode;
        c.lastIndex = 0;
      }

      for (var p = [];;) {
        var m = ji(c, u);
        if (null === m) break;
        if (p.push(m), !f) break;
        "" === String(m[0]) && (c.lastIndex = Li(u, le(c.lastIndex), d));
      }

      for (var g, v = "", y = 0, b = 0; b < p.length; b++) {
        m = p[b];

        for (var w = String(m[0]), k = Ni(Ri(oe(m.index), u.length), 0), T = [], S = 1; S < m.length; S++) {
          T.push(void 0 === (g = m[S]) ? g : String(g));
        }

        var E = m.groups;

        if (h) {
          var A = [w].concat(T, k, u);
          void 0 !== E && A.push(E);
          var x = String(i.apply(void 0, A));
        } else x = s(w, u, k, T, E, i);

        k >= y && (v += u.slice(y, k) + x, y = k + w.length);
      }

      return v + u.slice(y);
    }];

    function s(e, n, i, r, a, o) {
      var s = i + e.length,
          l = r.length,
          c = Ui;
      return void 0 !== a && (a = Re(a), c = _i), t.call(o, c, function (t, o) {
        var c;

        switch (o.charAt(0)) {
          case "$":
            return "$";

          case "&":
            return e;

          case "`":
            return n.slice(0, i);

          case "'":
            return n.slice(s);

          case "<":
            c = a[o.slice(1, -1)];
            break;

          default:
            var u = +o;
            if (0 === u) return t;

            if (u > l) {
              var h = Mi(u / 10);
              return 0 === h ? t : h <= l ? void 0 === r[h - 1] ? o.charAt(1) : r[h - 1] + o.charAt(1) : t;
            }

            c = r[u - 1];
        }

        return void 0 === c ? "" : c;
      });
    }
  });

  var Di = Object.is || function (e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  };

  Oi("search", 1, function (e, t, n) {
    return [function (t) {
      var n = p(this),
          i = null == t ? void 0 : t[e];
      return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
    }, function (e) {
      var i = n(t, e, this);
      if (i.done) return i.value;
      var r = P(e),
          a = String(this),
          o = r.lastIndex;
      Di(o, 0) || (r.lastIndex = 0);
      var s = ji(r, a);
      return Di(r.lastIndex, o) || (r.lastIndex = o), null === s ? -1 : s.index;
    }];
  });

  var Fi = Xe("match"),
      qi = function qi(e) {
    var t;
    return g(e) && (void 0 !== (t = e[Fi]) ? !!t : "RegExp" == h(e));
  },
      Hi = Xe("species"),
      Bi = function Bi(e, t) {
    var n,
        i = P(e).constructor;
    return void 0 === i || null == (n = P(i)[Hi]) ? t : it(n);
  },
      Vi = [].push,
      zi = Math.min,
      Wi = !r(function () {
    return !RegExp(4294967295, "y");
  });

  Oi("split", 2, function (e, t, n) {
    var i;
    return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
      var i = String(p(this)),
          r = void 0 === n ? 4294967295 : n >>> 0;
      if (0 === r) return [];
      if (void 0 === e) return [i];
      if (!qi(e)) return t.call(i, e, r);

      for (var a, o, s, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, h = new RegExp(e.source, c + "g"); (a = di.call(h, i)) && !((o = h.lastIndex) > u && (l.push(i.slice(u, a.index)), a.length > 1 && a.index < i.length && Vi.apply(l, a.slice(1)), s = a[0].length, u = o, l.length >= r));) {
        h.lastIndex === a.index && h.lastIndex++;
      }

      return u === i.length ? !s && h.test("") || l.push("") : l.push(i.slice(u)), l.length > r ? l.slice(0, r) : l;
    } : "0".split(void 0, 0).length ? function (e, n) {
      return void 0 === e && 0 === n ? [] : t.call(this, e, n);
    } : t, [function (t, n) {
      var r = p(this),
          a = null == t ? void 0 : t[e];
      return void 0 !== a ? a.call(t, r, n) : i.call(String(r), t, n);
    }, function (e, r) {
      var a = n(i, e, this, r, i !== t);
      if (a.done) return a.value;
      var o = P(e),
          s = String(this),
          l = Bi(o, RegExp),
          c = o.unicode,
          u = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Wi ? "y" : "g"),
          h = new l(Wi ? o : "^(?:" + o.source + ")", u),
          f = void 0 === r ? 4294967295 : r >>> 0;
      if (0 === f) return [];
      if (0 === s.length) return null === ji(h, s) ? [s] : [];

      for (var d = 0, p = 0, m = []; p < s.length;) {
        h.lastIndex = Wi ? p : 0;
        var g,
            v = ji(h, Wi ? s : s.slice(p));
        if (null === v || (g = zi(le(h.lastIndex + (Wi ? 0 : p)), s.length)) === d) p = Li(s, p, c);else {
          if (m.push(s.slice(d, p)), m.length === f) return m;

          for (var y = 1; y <= v.length - 1; y++) {
            if (m.push(v[y]), m.length === f) return m;
          }

          p = d = g;
        }
      }

      return m.push(s.slice(d)), m;
    }];
  }, !Wi);
  var Ki = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  for (var $i in Ki) {
    var Yi = i[$i],
        Gi = Yi && Yi.prototype;
    if (Gi && Gi.forEach !== tn) try {
      O(Gi, "forEach", tn);
    } catch (e) {
      Gi.forEach = tn;
    }
  }

  var Xi = Xe("iterator"),
      Qi = Xe("toStringTag"),
      Ji = Nn.values;

  for (var Zi in Ki) {
    var er = i[Zi],
        tr = er && er.prototype;

    if (tr) {
      if (tr[Xi] !== Ji) try {
        O(tr, Xi, Ji);
      } catch (e) {
        tr[Xi] = Ji;
      }
      if (tr[Qi] || O(tr, Qi, Zi), Ki[Zi]) for (var nr in Nn) {
        if (tr[nr] !== Nn[nr]) try {
          O(tr, nr, Nn[nr]);
        } catch (e) {
          tr[nr] = Nn[nr];
        }
      }
    }
  }

  var ir = Xe("iterator"),
      rr = !r(function () {
    var e = new URL("b?a=1&b=2&c=3", "http://a"),
        t = e.searchParams,
        n = "";
    return e.pathname = "c%20d", t.forEach(function (e, i) {
      t["delete"]("b"), n += i + e;
    }), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[ir] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host;
  }),
      ar = function ar(e, t, n) {
    if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    return e;
  },
      or = Object.assign,
      sr = Object.defineProperty,
      lr = !or || r(function () {
    if (a && 1 !== or({
      b: 1
    }, or(sr({}, "a", {
      enumerable: !0,
      get: function get() {
        sr(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b) return !0;
    var e = {},
        t = {},
        n = Symbol();
    return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (e) {
      t[e] = e;
    }), 7 != or({}, e)[n] || "abcdefghijklmnopqrst" != Me(or({}, t)).join("");
  }) ? function (e, t) {
    for (var n = Re(e), i = arguments.length, r = 1, o = be.f, s = l.f; i > r;) {
      for (var c, u = d(arguments[r++]), h = o ? Me(u).concat(o(u)) : Me(u), f = h.length, p = 0; f > p;) {
        c = h[p++], a && !s.call(u, c) || (n[c] = u[c]);
      }
    }

    return n;
  } : or,
      cr = function cr(e, t, n, i) {
    try {
      return i ? t(P(n)[0], n[1]) : t(n);
    } catch (t) {
      var r = e["return"];
      throw void 0 !== r && P(r.call(e)), t;
    }
  },
      ur = Xe("iterator"),
      hr = Array.prototype,
      fr = function fr(e) {
    return void 0 !== e && (pn.Array === e || hr[ur] === e);
  },
      dr = Xe("iterator"),
      pr = function pr(e) {
    if (null != e) return e[dr] || e["@@iterator"] || pn[ni(e)];
  },
      mr = function mr(e) {
    var t,
        n,
        i,
        r,
        a,
        o,
        s = Re(e),
        l = "function" == typeof this ? this : Array,
        c = arguments.length,
        u = c > 1 ? arguments[1] : void 0,
        h = void 0 !== u,
        f = pr(s),
        d = 0;
    if (h && (u = rt(u, c > 2 ? arguments[2] : void 0, 2)), null == f || l == Array && fr(f)) for (n = new l(t = le(s.length)); t > d; d++) {
      o = h ? u(s[d], d) : s[d], Fn(n, d, o);
    } else for (a = (r = f.call(s)).next, n = new l(); !(i = a.call(r)).done; d++) {
      o = h ? cr(r, u, [i.value, d], !0) : i.value, Fn(n, d, o);
    }
    return n.length = d, n;
  },
      gr = /[^\0-\u007E]/,
      vr = /[.\u3002\uFF0E\uFF61]/g,
      yr = "Overflow: input needs wider integers to process",
      br = Math.floor,
      wr = String.fromCharCode,
      kr = function kr(e) {
    return e + 22 + 75 * (e < 26);
  },
      Tr = function Tr(e, t, n) {
    var i = 0;

    for (e = n ? br(e / 700) : e >> 1, e += br(e / t); e > 455; i += 36) {
      e = br(e / 35);
    }

    return br(i + 36 * e / (e + 38));
  },
      Sr = function Sr(e) {
    var t,
        n,
        i = [],
        r = (e = function (e) {
      for (var t = [], n = 0, i = e.length; n < i;) {
        var r = e.charCodeAt(n++);

        if (r >= 55296 && r <= 56319 && n < i) {
          var a = e.charCodeAt(n++);
          56320 == (64512 & a) ? t.push(((1023 & r) << 10) + (1023 & a) + 65536) : (t.push(r), n--);
        } else t.push(r);
      }

      return t;
    }(e)).length,
        a = 128,
        o = 0,
        s = 72;

    for (t = 0; t < e.length; t++) {
      (n = e[t]) < 128 && i.push(wr(n));
    }

    var l = i.length,
        c = l;

    for (l && i.push("-"); c < r;) {
      var u = 2147483647;

      for (t = 0; t < e.length; t++) {
        (n = e[t]) >= a && n < u && (u = n);
      }

      var h = c + 1;
      if (u - a > br((2147483647 - o) / h)) throw RangeError(yr);

      for (o += (u - a) * h, a = u, t = 0; t < e.length; t++) {
        if ((n = e[t]) < a && ++o > 2147483647) throw RangeError(yr);

        if (n == a) {
          for (var f = o, d = 36;; d += 36) {
            var p = d <= s ? 1 : d >= s + 26 ? 26 : d - s;
            if (f < p) break;
            var m = f - p,
                g = 36 - p;
            i.push(wr(kr(p + m % g))), f = br(m / g);
          }

          i.push(wr(kr(f))), s = Tr(o, h, c == l), o = 0, ++c;
        }
      }

      ++o, ++a;
    }

    return i.join("");
  },
      Er = function Er(e, t, n) {
    for (var i in t) {
      ee(e, i, t[i], n);
    }

    return e;
  },
      Ar = function Ar(e) {
    var t = pr(e);
    if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
    return P(t.call(e));
  },
      Pr = ie("fetch"),
      xr = ie("Headers"),
      Cr = Xe("iterator"),
      Or = Z.set,
      Ir = Z.getterFor("URLSearchParams"),
      Lr = Z.getterFor("URLSearchParamsIterator"),
      jr = /\+/g,
      Nr = Array(4),
      Rr = function Rr(e) {
    return Nr[e - 1] || (Nr[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
  },
      Mr = function Mr(e) {
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e;
    }
  },
      _r = function _r(e) {
    var t = e.replace(jr, " "),
        n = 4;

    try {
      return decodeURIComponent(t);
    } catch (e) {
      for (; n;) {
        t = t.replace(Rr(n--), Mr);
      }

      return t;
    }
  },
      Ur = /[!'()~]|%20/g,
      Dr = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
      Fr = function Fr(e) {
    return Dr[e];
  },
      qr = function qr(e) {
    return encodeURIComponent(e).replace(Ur, Fr);
  },
      Hr = function Hr(e, t) {
    if (t) for (var n, i, r = t.split("&"), a = 0; a < r.length;) {
      (n = r[a++]).length && (i = n.split("="), e.push({
        key: _r(i.shift()),
        value: _r(i.join("="))
      }));
    }
  },
      Br = function Br(e) {
    this.entries.length = 0, Hr(this.entries, e);
  },
      Vr = function Vr(e, t) {
    if (e < t) throw TypeError("Not enough arguments");
  },
      zr = En(function (e, t) {
    Or(this, {
      type: "URLSearchParamsIterator",
      iterator: Ar(Ir(e).entries),
      kind: t
    });
  }, "Iterator", function () {
    var e = Lr(this),
        t = e.kind,
        n = e.iterator.next(),
        i = n.value;
    return n.done || (n.value = "keys" === t ? i.key : "values" === t ? i.value : [i.key, i.value]), n;
  }),
      Wr = function Wr() {
    ar(this, Wr, "URLSearchParams");
    var e,
        t,
        n,
        i,
        r,
        a,
        o,
        s,
        l,
        c = arguments.length > 0 ? arguments[0] : void 0,
        u = this,
        h = [];
    if (Or(u, {
      type: "URLSearchParams",
      entries: h,
      updateURL: function updateURL() {},
      updateSearchParams: Br
    }), void 0 !== c) if (g(c)) {
      if ("function" == typeof (e = pr(c))) for (n = (t = e.call(c)).next; !(i = n.call(t)).done;) {
        if ((o = (a = (r = Ar(P(i.value))).next).call(r)).done || (s = a.call(r)).done || !a.call(r).done) throw TypeError("Expected sequence with length 2");
        h.push({
          key: o.value + "",
          value: s.value + ""
        });
      } else for (l in c) {
        b(c, l) && h.push({
          key: l,
          value: c[l] + ""
        });
      }
    } else Hr(h, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "");
  },
      Kr = Wr.prototype;

  Er(Kr, {
    append: function append(e, t) {
      Vr(arguments.length, 2);
      var n = Ir(this);
      n.entries.push({
        key: e + "",
        value: t + ""
      }), n.updateURL();
    },
    "delete": function _delete(e) {
      Vr(arguments.length, 1);

      for (var t = Ir(this), n = t.entries, i = e + "", r = 0; r < n.length;) {
        n[r].key === i ? n.splice(r, 1) : r++;
      }

      t.updateURL();
    },
    get: function get(e) {
      Vr(arguments.length, 1);

      for (var t = Ir(this).entries, n = e + "", i = 0; i < t.length; i++) {
        if (t[i].key === n) return t[i].value;
      }

      return null;
    },
    getAll: function getAll(e) {
      Vr(arguments.length, 1);

      for (var t = Ir(this).entries, n = e + "", i = [], r = 0; r < t.length; r++) {
        t[r].key === n && i.push(t[r].value);
      }

      return i;
    },
    has: function has(e) {
      Vr(arguments.length, 1);

      for (var t = Ir(this).entries, n = e + "", i = 0; i < t.length;) {
        if (t[i++].key === n) return !0;
      }

      return !1;
    },
    set: function set(e, t) {
      Vr(arguments.length, 1);

      for (var n, i = Ir(this), r = i.entries, a = !1, o = e + "", s = t + "", l = 0; l < r.length; l++) {
        (n = r[l]).key === o && (a ? r.splice(l--, 1) : (a = !0, n.value = s));
      }

      a || r.push({
        key: o,
        value: s
      }), i.updateURL();
    },
    sort: function sort() {
      var e,
          t,
          n,
          i = Ir(this),
          r = i.entries,
          a = r.slice();

      for (r.length = 0, n = 0; n < a.length; n++) {
        for (e = a[n], t = 0; t < n; t++) {
          if (r[t].key > e.key) {
            r.splice(t, 0, e);
            break;
          }
        }

        t === n && r.push(e);
      }

      i.updateURL();
    },
    forEach: function forEach(e) {
      for (var t, n = Ir(this).entries, i = rt(e, arguments.length > 1 ? arguments[1] : void 0, 3), r = 0; r < n.length;) {
        i((t = n[r++]).value, t.key, this);
      }
    },
    keys: function keys() {
      return new zr(this, "keys");
    },
    values: function values() {
      return new zr(this, "values");
    },
    entries: function entries() {
      return new zr(this, "entries");
    }
  }, {
    enumerable: !0
  }), ee(Kr, Cr, Kr.entries), ee(Kr, "toString", function () {
    for (var e, t = Ir(this).entries, n = [], i = 0; i < t.length;) {
      e = t[i++], n.push(qr(e.key) + "=" + qr(e.value));
    }

    return n.join("&");
  }, {
    enumerable: !0
  }), nt(Wr, "URLSearchParams"), Ie({
    global: !0,
    forced: !rr
  }, {
    URLSearchParams: Wr
  }), rr || "function" != typeof Pr || "function" != typeof xr || Ie({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function fetch(e) {
      var t,
          n,
          i,
          r = [e];
      return arguments.length > 1 && (t = arguments[1], g(t) && (n = t.body, "URLSearchParams" === ni(n) && ((i = t.headers ? new xr(t.headers) : new xr()).has("content-type") || i.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = Be(t, {
        body: c(0, String(n)),
        headers: c(0, i)
      }))), r.push(t)), Pr.apply(this, r);
    }
  });

  var $r,
      Yr = {
    URLSearchParams: Wr,
    getState: Ir
  },
      Gr = bi.codeAt,
      Xr = i.URL,
      Qr = Yr.URLSearchParams,
      Jr = Yr.getState,
      Zr = Z.set,
      ea = Z.getterFor("URL"),
      ta = Math.floor,
      na = Math.pow,
      ia = /[A-Za-z]/,
      ra = /[\d+-.A-Za-z]/,
      aa = /\d/,
      oa = /^(0x|0X)/,
      sa = /^[0-7]+$/,
      la = /^\d+$/,
      ca = /^[\dA-Fa-f]+$/,
      ua = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      ha = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      fa = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      da = /[\u0009\u000A\u000D]/g,
      pa = function pa(e, t) {
    var n, i, r;

    if ("[" == t.charAt(0)) {
      if ("]" != t.charAt(t.length - 1)) return "Invalid host";
      if (!(n = ga(t.slice(1, -1)))) return "Invalid host";
      e.host = n;
    } else if (Ea(e)) {
      if (t = function (e) {
        var t,
            n,
            i = [],
            r = e.toLowerCase().replace(vr, ".").split(".");

        for (t = 0; t < r.length; t++) {
          n = r[t], i.push(gr.test(n) ? "xn--" + Sr(n) : n);
        }

        return i.join(".");
      }(t), ua.test(t)) return "Invalid host";
      if (null === (n = ma(t))) return "Invalid host";
      e.host = n;
    } else {
      if (ha.test(t)) return "Invalid host";

      for (n = "", i = mr(t), r = 0; r < i.length; r++) {
        n += Ta(i[r], ya);
      }

      e.host = n;
    }
  },
      ma = function ma(e) {
    var t,
        n,
        i,
        r,
        a,
        o,
        s,
        l = e.split(".");
    if (l.length && "" == l[l.length - 1] && l.pop(), (t = l.length) > 4) return e;

    for (n = [], i = 0; i < t; i++) {
      if ("" == (r = l[i])) return e;
      if (a = 10, r.length > 1 && "0" == r.charAt(0) && (a = oa.test(r) ? 16 : 8, r = r.slice(8 == a ? 1 : 2)), "" === r) o = 0;else {
        if (!(10 == a ? la : 8 == a ? sa : ca).test(r)) return e;
        o = parseInt(r, a);
      }
      n.push(o);
    }

    for (i = 0; i < t; i++) {
      if (o = n[i], i == t - 1) {
        if (o >= na(256, 5 - t)) return null;
      } else if (o > 255) return null;
    }

    for (s = n.pop(), i = 0; i < n.length; i++) {
      s += n[i] * na(256, 3 - i);
    }

    return s;
  },
      ga = function ga(e) {
    var t,
        n,
        i,
        r,
        a,
        o,
        s,
        l = [0, 0, 0, 0, 0, 0, 0, 0],
        c = 0,
        u = null,
        h = 0,
        f = function f() {
      return e.charAt(h);
    };

    if (":" == f()) {
      if (":" != e.charAt(1)) return;
      h += 2, u = ++c;
    }

    for (; f();) {
      if (8 == c) return;

      if (":" != f()) {
        for (t = n = 0; n < 4 && ca.test(f());) {
          t = 16 * t + parseInt(f(), 16), h++, n++;
        }

        if ("." == f()) {
          if (0 == n) return;
          if (h -= n, c > 6) return;

          for (i = 0; f();) {
            if (r = null, i > 0) {
              if (!("." == f() && i < 4)) return;
              h++;
            }

            if (!aa.test(f())) return;

            for (; aa.test(f());) {
              if (a = parseInt(f(), 10), null === r) r = a;else {
                if (0 == r) return;
                r = 10 * r + a;
              }
              if (r > 255) return;
              h++;
            }

            l[c] = 256 * l[c] + r, 2 != ++i && 4 != i || c++;
          }

          if (4 != i) return;
          break;
        }

        if (":" == f()) {
          if (h++, !f()) return;
        } else if (f()) return;

        l[c++] = t;
      } else {
        if (null !== u) return;
        h++, u = ++c;
      }
    }

    if (null !== u) for (o = c - u, c = 7; 0 != c && o > 0;) {
      s = l[c], l[c--] = l[u + o - 1], l[u + --o] = s;
    } else if (8 != c) return;
    return l;
  },
      va = function va(e) {
    var t, n, i, r;

    if ("number" == typeof e) {
      for (t = [], n = 0; n < 4; n++) {
        t.unshift(e % 256), e = ta(e / 256);
      }

      return t.join(".");
    }

    if ("object" == _typeof(e)) {
      for (t = "", i = function (e) {
        for (var t = null, n = 1, i = null, r = 0, a = 0; a < 8; a++) {
          0 !== e[a] ? (r > n && (t = i, n = r), i = null, r = 0) : (null === i && (i = a), ++r);
        }

        return r > n && (t = i, n = r), t;
      }(e), n = 0; n < 8; n++) {
        r && 0 === e[n] || (r && (r = !1), i === n ? (t += n ? ":" : "::", r = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
      }

      return "[" + t + "]";
    }

    return e;
  },
      ya = {},
      ba = lr({}, ya, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
      wa = lr({}, ba, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
      ka = lr({}, wa, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
      Ta = function Ta(e, t) {
    var n = Gr(e, 0);
    return n > 32 && n < 127 && !b(t, e) ? e : encodeURIComponent(e);
  },
      Sa = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
      Ea = function Ea(e) {
    return b(Sa, e.scheme);
  },
      Aa = function Aa(e) {
    return "" != e.username || "" != e.password;
  },
      Pa = function Pa(e) {
    return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
  },
      xa = function xa(e, t) {
    var n;
    return 2 == e.length && ia.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n);
  },
      Ca = function Ca(e) {
    var t;
    return e.length > 1 && xa(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
  },
      Oa = function Oa(e) {
    var t = e.path,
        n = t.length;
    !n || "file" == e.scheme && 1 == n && xa(t[0], !0) || t.pop();
  },
      Ia = function Ia(e) {
    return "." === e || "%2e" === e.toLowerCase();
  },
      La = {},
      ja = {},
      Na = {},
      Ra = {},
      Ma = {},
      _a = {},
      Ua = {},
      Da = {},
      Fa = {},
      qa = {},
      Ha = {},
      Ba = {},
      Va = {},
      za = {},
      Wa = {},
      Ka = {},
      $a = {},
      Ya = {},
      Ga = {},
      Xa = {},
      Qa = {},
      Ja = function Ja(e, t, n, i) {
    var r,
        a,
        o,
        s,
        l,
        c = n || La,
        u = 0,
        h = "",
        f = !1,
        d = !1,
        p = !1;

    for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(fa, "")), t = t.replace(da, ""), r = mr(t); u <= r.length;) {
      switch (a = r[u], c) {
        case La:
          if (!a || !ia.test(a)) {
            if (n) return "Invalid scheme";
            c = Na;
            continue;
          }

          h += a.toLowerCase(), c = ja;
          break;

        case ja:
          if (a && (ra.test(a) || "+" == a || "-" == a || "." == a)) h += a.toLowerCase();else {
            if (":" != a) {
              if (n) return "Invalid scheme";
              h = "", c = Na, u = 0;
              continue;
            }

            if (n && (Ea(e) != b(Sa, h) || "file" == h && (Aa(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
            if (e.scheme = h, n) return void (Ea(e) && Sa[e.scheme] == e.port && (e.port = null));
            h = "", "file" == e.scheme ? c = za : Ea(e) && i && i.scheme == e.scheme ? c = Ra : Ea(e) ? c = Da : "/" == r[u + 1] ? (c = Ma, u++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = Ga);
          }
          break;

        case Na:
          if (!i || i.cannotBeABaseURL && "#" != a) return "Invalid scheme";

          if (i.cannotBeABaseURL && "#" == a) {
            e.scheme = i.scheme, e.path = i.path.slice(), e.query = i.query, e.fragment = "", e.cannotBeABaseURL = !0, c = Qa;
            break;
          }

          c = "file" == i.scheme ? za : _a;
          continue;

        case Ra:
          if ("/" != a || "/" != r[u + 1]) {
            c = _a;
            continue;
          }

          c = Fa, u++;
          break;

        case Ma:
          if ("/" == a) {
            c = qa;
            break;
          }

          c = Ya;
          continue;

        case _a:
          if (e.scheme = i.scheme, a == $r) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query;else if ("/" == a || "\\" == a && Ea(e)) c = Ua;else if ("?" == a) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = "", c = Xa;else {
            if ("#" != a) {
              e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.path.pop(), c = Ya;
              continue;
            }

            e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = Qa;
          }
          break;

        case Ua:
          if (!Ea(e) || "/" != a && "\\" != a) {
            if ("/" != a) {
              e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, c = Ya;
              continue;
            }

            c = qa;
          } else c = Fa;

          break;

        case Da:
          if (c = Fa, "/" != a || "/" != h.charAt(u + 1)) continue;
          u++;
          break;

        case Fa:
          if ("/" != a && "\\" != a) {
            c = qa;
            continue;
          }

          break;

        case qa:
          if ("@" == a) {
            f && (h = "%40" + h), f = !0, o = mr(h);

            for (var m = 0; m < o.length; m++) {
              var g = o[m];

              if (":" != g || p) {
                var v = Ta(g, ka);
                p ? e.password += v : e.username += v;
              } else p = !0;
            }

            h = "";
          } else if (a == $r || "/" == a || "?" == a || "#" == a || "\\" == a && Ea(e)) {
            if (f && "" == h) return "Invalid authority";
            u -= mr(h).length + 1, h = "", c = Ha;
          } else h += a;

          break;

        case Ha:
        case Ba:
          if (n && "file" == e.scheme) {
            c = Ka;
            continue;
          }

          if (":" != a || d) {
            if (a == $r || "/" == a || "?" == a || "#" == a || "\\" == a && Ea(e)) {
              if (Ea(e) && "" == h) return "Invalid host";
              if (n && "" == h && (Aa(e) || null !== e.port)) return;
              if (s = pa(e, h)) return s;
              if (h = "", c = $a, n) return;
              continue;
            }

            "[" == a ? d = !0 : "]" == a && (d = !1), h += a;
          } else {
            if ("" == h) return "Invalid host";
            if (s = pa(e, h)) return s;
            if (h = "", c = Va, n == Ba) return;
          }

          break;

        case Va:
          if (!aa.test(a)) {
            if (a == $r || "/" == a || "?" == a || "#" == a || "\\" == a && Ea(e) || n) {
              if ("" != h) {
                var y = parseInt(h, 10);
                if (y > 65535) return "Invalid port";
                e.port = Ea(e) && y === Sa[e.scheme] ? null : y, h = "";
              }

              if (n) return;
              c = $a;
              continue;
            }

            return "Invalid port";
          }

          h += a;
          break;

        case za:
          if (e.scheme = "file", "/" == a || "\\" == a) c = Wa;else {
            if (!i || "file" != i.scheme) {
              c = Ya;
              continue;
            }

            if (a == $r) e.host = i.host, e.path = i.path.slice(), e.query = i.query;else if ("?" == a) e.host = i.host, e.path = i.path.slice(), e.query = "", c = Xa;else {
              if ("#" != a) {
                Ca(r.slice(u).join("")) || (e.host = i.host, e.path = i.path.slice(), Oa(e)), c = Ya;
                continue;
              }

              e.host = i.host, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = Qa;
            }
          }
          break;

        case Wa:
          if ("/" == a || "\\" == a) {
            c = Ka;
            break;
          }

          i && "file" == i.scheme && !Ca(r.slice(u).join("")) && (xa(i.path[0], !0) ? e.path.push(i.path[0]) : e.host = i.host), c = Ya;
          continue;

        case Ka:
          if (a == $r || "/" == a || "\\" == a || "?" == a || "#" == a) {
            if (!n && xa(h)) c = Ya;else if ("" == h) {
              if (e.host = "", n) return;
              c = $a;
            } else {
              if (s = pa(e, h)) return s;
              if ("localhost" == e.host && (e.host = ""), n) return;
              h = "", c = $a;
            }
            continue;
          }

          h += a;
          break;

        case $a:
          if (Ea(e)) {
            if (c = Ya, "/" != a && "\\" != a) continue;
          } else if (n || "?" != a) {
            if (n || "#" != a) {
              if (a != $r && (c = Ya, "/" != a)) continue;
            } else e.fragment = "", c = Qa;
          } else e.query = "", c = Xa;

          break;

        case Ya:
          if (a == $r || "/" == a || "\\" == a && Ea(e) || !n && ("?" == a || "#" == a)) {
            if (".." === (l = (l = h).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l ? (Oa(e), "/" == a || "\\" == a && Ea(e) || e.path.push("")) : Ia(h) ? "/" == a || "\\" == a && Ea(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && xa(h) && (e.host && (e.host = ""), h = h.charAt(0) + ":"), e.path.push(h)), h = "", "file" == e.scheme && (a == $r || "?" == a || "#" == a)) for (; e.path.length > 1 && "" === e.path[0];) {
              e.path.shift();
            }
            "?" == a ? (e.query = "", c = Xa) : "#" == a && (e.fragment = "", c = Qa);
          } else h += Ta(a, wa);

          break;

        case Ga:
          "?" == a ? (e.query = "", c = Xa) : "#" == a ? (e.fragment = "", c = Qa) : a != $r && (e.path[0] += Ta(a, ya));
          break;

        case Xa:
          n || "#" != a ? a != $r && ("'" == a && Ea(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : Ta(a, ya)) : (e.fragment = "", c = Qa);
          break;

        case Qa:
          a != $r && (e.fragment += Ta(a, ba));
      }

      u++;
    }
  },
      Za = function Za(e) {
    var t,
        n,
        i = ar(this, Za, "URL"),
        r = arguments.length > 1 ? arguments[1] : void 0,
        o = String(e),
        s = Zr(i, {
      type: "URL"
    });
    if (void 0 !== r) if (r instanceof Za) t = ea(r);else if (n = Ja(t = {}, String(r))) throw TypeError(n);
    if (n = Ja(s, o, null, t)) throw TypeError(n);
    var l = s.searchParams = new Qr(),
        c = Jr(l);
    c.updateSearchParams(s.query), c.updateURL = function () {
      s.query = String(l) || null;
    }, a || (i.href = to.call(i), i.origin = no.call(i), i.protocol = io.call(i), i.username = ro.call(i), i.password = ao.call(i), i.host = oo.call(i), i.hostname = so.call(i), i.port = lo.call(i), i.pathname = co.call(i), i.search = uo.call(i), i.searchParams = ho.call(i), i.hash = fo.call(i));
  },
      eo = Za.prototype,
      to = function to() {
    var e = ea(this),
        t = e.scheme,
        n = e.username,
        i = e.password,
        r = e.host,
        a = e.port,
        o = e.path,
        s = e.query,
        l = e.fragment,
        c = t + ":";
    return null !== r ? (c += "//", Aa(e) && (c += n + (i ? ":" + i : "") + "@"), c += va(r), null !== a && (c += ":" + a)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? o[0] : o.length ? "/" + o.join("/") : "", null !== s && (c += "?" + s), null !== l && (c += "#" + l), c;
  },
      no = function no() {
    var e = ea(this),
        t = e.scheme,
        n = e.port;
    if ("blob" == t) try {
      return new URL(t.path[0]).origin;
    } catch (e) {
      return "null";
    }
    return "file" != t && Ea(e) ? t + "://" + va(e.host) + (null !== n ? ":" + n : "") : "null";
  },
      io = function io() {
    return ea(this).scheme + ":";
  },
      ro = function ro() {
    return ea(this).username;
  },
      ao = function ao() {
    return ea(this).password;
  },
      oo = function oo() {
    var e = ea(this),
        t = e.host,
        n = e.port;
    return null === t ? "" : null === n ? va(t) : va(t) + ":" + n;
  },
      so = function so() {
    var e = ea(this).host;
    return null === e ? "" : va(e);
  },
      lo = function lo() {
    var e = ea(this).port;
    return null === e ? "" : String(e);
  },
      co = function co() {
    var e = ea(this),
        t = e.path;
    return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
  },
      uo = function uo() {
    var e = ea(this).query;
    return e ? "?" + e : "";
  },
      ho = function ho() {
    return ea(this).searchParams;
  },
      fo = function fo() {
    var e = ea(this).fragment;
    return e ? "#" + e : "";
  },
      po = function po(e, t) {
    return {
      get: e,
      set: t,
      configurable: !0,
      enumerable: !0
    };
  };

  if (a && _e(eo, {
    href: po(to, function (e) {
      var t = ea(this),
          n = String(e),
          i = Ja(t, n);
      if (i) throw TypeError(i);
      Jr(t.searchParams).updateSearchParams(t.query);
    }),
    origin: po(no),
    protocol: po(io, function (e) {
      var t = ea(this);
      Ja(t, String(e) + ":", La);
    }),
    username: po(ro, function (e) {
      var t = ea(this),
          n = mr(String(e));

      if (!Pa(t)) {
        t.username = "";

        for (var i = 0; i < n.length; i++) {
          t.username += Ta(n[i], ka);
        }
      }
    }),
    password: po(ao, function (e) {
      var t = ea(this),
          n = mr(String(e));

      if (!Pa(t)) {
        t.password = "";

        for (var i = 0; i < n.length; i++) {
          t.password += Ta(n[i], ka);
        }
      }
    }),
    host: po(oo, function (e) {
      var t = ea(this);
      t.cannotBeABaseURL || Ja(t, String(e), Ha);
    }),
    hostname: po(so, function (e) {
      var t = ea(this);
      t.cannotBeABaseURL || Ja(t, String(e), Ba);
    }),
    port: po(lo, function (e) {
      var t = ea(this);
      Pa(t) || ("" == (e = String(e)) ? t.port = null : Ja(t, e, Va));
    }),
    pathname: po(co, function (e) {
      var t = ea(this);
      t.cannotBeABaseURL || (t.path = [], Ja(t, e + "", $a));
    }),
    search: po(uo, function (e) {
      var t = ea(this);
      "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Ja(t, e, Xa)), Jr(t.searchParams).updateSearchParams(t.query);
    }),
    searchParams: po(ho),
    hash: po(fo, function (e) {
      var t = ea(this);
      "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Ja(t, e, Qa)) : t.fragment = null;
    })
  }), ee(eo, "toJSON", function () {
    return to.call(this);
  }, {
    enumerable: !0
  }), ee(eo, "toString", function () {
    return to.call(this);
  }, {
    enumerable: !0
  }), Xr) {
    var mo = Xr.createObjectURL,
        go = Xr.revokeObjectURL;
    mo && ee(Za, "createObjectURL", function (e) {
      return mo.apply(Xr, arguments);
    }), go && ee(Za, "revokeObjectURL", function (e) {
      return go.apply(Xr, arguments);
    });
  }

  function vo(e) {
    return (vo = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  function yo(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function bo(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function wo(e, t, n) {
    return t && bo(e.prototype, t), n && bo(e, n), e;
  }

  function ko(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function To(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function So(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? To(Object(n), !0).forEach(function (t) {
        ko(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : To(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  function Eo(e, t) {
    if (null == e) return {};

    var n,
        i,
        r = function (e, t) {
      if (null == e) return {};
      var n,
          i,
          r = {},
          a = Object.keys(e);

      for (i = 0; i < a.length; i++) {
        n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      }

      return r;
    }(e, t);

    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);

      for (i = 0; i < a.length; i++) {
        n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      }
    }

    return r;
  }

  function Ao(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
          i = !0,
          r = !1,
          a = void 0;

      try {
        for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0) {
          ;
        }
      } catch (e) {
        r = !0, a = e;
      } finally {
        try {
          i || null == s["return"] || s["return"]();
        } finally {
          if (r) throw a;
        }
      }

      return n;
    }(e, t) || xo(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function Po(e) {
    return function (e) {
      if (Array.isArray(e)) return Co(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }(e) || xo(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function xo(e, t) {
    if (e) {
      if ("string" == typeof e) return Co(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Co(e, t) : void 0;
    }
  }

  function Co(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var n = 0, i = new Array(t); n < t; n++) {
      i[n] = e[n];
    }

    return i;
  }

  nt(Za, "URL"), Ie({
    global: !0,
    forced: !rr,
    sham: !a
  }, {
    URL: Za
  }), function (e) {
    var t = function () {
      try {
        return !!Symbol.iterator;
      } catch (e) {
        return !1;
      }
    }(),
        n = function n(e) {
      var n = {
        next: function next() {
          var t = e.shift();
          return {
            done: void 0 === t,
            value: t
          };
        }
      };
      return t && (n[Symbol.iterator] = function () {
        return n;
      }), n;
    },
        i = function i(e) {
      return encodeURIComponent(e).replace(/%20/g, "+");
    },
        r = function r(e) {
      return decodeURIComponent(String(e).replace(/\+/g, " "));
    };

    (function () {
      try {
        var t = e.URLSearchParams;
        return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set;
      } catch (e) {
        return !1;
      }
    })() || function () {
      var r = function e(t) {
        Object.defineProperty(this, "_entries", {
          writable: !0,
          value: {}
        });
        var n = vo(t);
        if ("undefined" === n) ;else if ("string" === n) "" !== t && this._fromString(t);else if (t instanceof e) {
          var i = this;
          t.forEach(function (e, t) {
            i.append(t, e);
          });
        } else {
          if (null === t || "object" !== n) throw new TypeError("Unsupported input's type for URLSearchParams");
          if ("[object Array]" === Object.prototype.toString.call(t)) for (var r = 0; r < t.length; r++) {
            var a = t[r];
            if ("[object Array]" !== Object.prototype.toString.call(a) && 2 === a.length) throw new TypeError("Expected [string, any] as entry at index " + r + " of URLSearchParams's input");
            this.append(a[0], a[1]);
          } else for (var o in t) {
            t.hasOwnProperty(o) && this.append(o, t[o]);
          }
        }
      },
          a = r.prototype;

      a.append = function (e, t) {
        e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)];
      }, a["delete"] = function (e) {
        delete this._entries[e];
      }, a.get = function (e) {
        return e in this._entries ? this._entries[e][0] : null;
      }, a.getAll = function (e) {
        return e in this._entries ? this._entries[e].slice(0) : [];
      }, a.has = function (e) {
        return e in this._entries;
      }, a.set = function (e, t) {
        this._entries[e] = [String(t)];
      }, a.forEach = function (e, t) {
        var n;

        for (var i in this._entries) {
          if (this._entries.hasOwnProperty(i)) {
            n = this._entries[i];

            for (var r = 0; r < n.length; r++) {
              e.call(t, n[r], i, this);
            }
          }
        }
      }, a.keys = function () {
        var e = [];
        return this.forEach(function (t, n) {
          e.push(n);
        }), n(e);
      }, a.values = function () {
        var e = [];
        return this.forEach(function (t) {
          e.push(t);
        }), n(e);
      }, a.entries = function () {
        var e = [];
        return this.forEach(function (t, n) {
          e.push([n, t]);
        }), n(e);
      }, t && (a[Symbol.iterator] = a.entries), a.toString = function () {
        var e = [];
        return this.forEach(function (t, n) {
          e.push(i(n) + "=" + i(t));
        }), e.join("&");
      }, e.URLSearchParams = r;
    }();
    var a = e.URLSearchParams.prototype;
    "function" != typeof a.sort && (a.sort = function () {
      var e = this,
          t = [];
      this.forEach(function (n, i) {
        t.push([i, n]), e._entries || e["delete"](i);
      }), t.sort(function (e, t) {
        return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
      }), e._entries && (e._entries = {});

      for (var n = 0; n < t.length; n++) {
        this.append(t[n][0], t[n][1]);
      }
    }), "function" != typeof a._fromString && Object.defineProperty(a, "_fromString", {
      enumerable: !1,
      configurable: !1,
      writable: !1,
      value: function value(e) {
        if (this._entries) this._entries = {};else {
          var t = [];
          this.forEach(function (e, n) {
            t.push(n);
          });

          for (var n = 0; n < t.length; n++) {
            this["delete"](t[n]);
          }
        }
        var i,
            a = (e = e.replace(/^\?/, "")).split("&");

        for (n = 0; n < a.length; n++) {
          i = a[n].split("="), this.append(r(i[0]), i.length > 1 ? r(i[1]) : "");
        }
      }
    });
  }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e), function (e) {
    if (function () {
      try {
        var t = new e.URL("b", "http://a");
        return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams;
      } catch (e) {
        return !1;
      }
    }() || function () {
      var t = e.URL,
          n = function n(t, _n2) {
        "string" != typeof t && (t = String(t));
        var i,
            r = document;

        if (_n2 && (void 0 === e.location || _n2 !== e.location.href)) {
          (i = (r = document.implementation.createHTMLDocument("")).createElement("base")).href = _n2, r.head.appendChild(i);

          try {
            if (0 !== i.href.indexOf(_n2)) throw new Error(i.href);
          } catch (e) {
            throw new Error("URL unable to set base " + _n2 + " due to " + e);
          }
        }

        var a = r.createElement("a");
        if (a.href = t, i && (r.body.appendChild(a), a.href = a.href), ":" === a.protocol || !/:/.test(a.href)) throw new TypeError("Invalid URL");
        Object.defineProperty(this, "_anchorElement", {
          value: a
        });
        var o = new e.URLSearchParams(this.search),
            s = !0,
            l = !0,
            c = this;
        ["append", "delete", "set"].forEach(function (e) {
          var t = o[e];

          o[e] = function () {
            t.apply(o, arguments), s && (l = !1, c.search = o.toString(), l = !0);
          };
        }), Object.defineProperty(this, "searchParams", {
          value: o,
          enumerable: !0
        });
        var u = void 0;
        Object.defineProperty(this, "_updateSearchParams", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: function value() {
            this.search !== u && (u = this.search, l && (s = !1, this.searchParams._fromString(this.search), s = !0));
          }
        });
      },
          i = n.prototype;

      ["hash", "host", "hostname", "port", "protocol"].forEach(function (e) {
        !function (e) {
          Object.defineProperty(i, e, {
            get: function get() {
              return this._anchorElement[e];
            },
            set: function set(t) {
              this._anchorElement[e] = t;
            },
            enumerable: !0
          });
        }(e);
      }), Object.defineProperty(i, "search", {
        get: function get() {
          return this._anchorElement.search;
        },
        set: function set(e) {
          this._anchorElement.search = e, this._updateSearchParams();
        },
        enumerable: !0
      }), Object.defineProperties(i, {
        toString: {
          get: function get() {
            var e = this;
            return function () {
              return e.href;
            };
          }
        },
        href: {
          get: function get() {
            return this._anchorElement.href.replace(/\?$/, "");
          },
          set: function set(e) {
            this._anchorElement.href = e, this._updateSearchParams();
          },
          enumerable: !0
        },
        pathname: {
          get: function get() {
            return this._anchorElement.pathname.replace(/(^\/?)/, "/");
          },
          set: function set(e) {
            this._anchorElement.pathname = e;
          },
          enumerable: !0
        },
        origin: {
          get: function get() {
            var e = {
              "http:": 80,
              "https:": 443,
              "ftp:": 21
            }[this._anchorElement.protocol],
                t = this._anchorElement.port != e && "" !== this._anchorElement.port;
            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "");
          },
          enumerable: !0
        },
        password: {
          get: function get() {
            return "";
          },
          set: function set(e) {},
          enumerable: !0
        },
        username: {
          get: function get() {
            return "";
          },
          set: function set(e) {},
          enumerable: !0
        }
      }), n.createObjectURL = function (e) {
        return t.createObjectURL.apply(t, arguments);
      }, n.revokeObjectURL = function (e) {
        return t.revokeObjectURL.apply(t, arguments);
      }, e.URL = n;
    }(), void 0 !== e.location && !("origin" in e.location)) {
      var t = function t() {
        return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "");
      };

      try {
        Object.defineProperty(e.location, "origin", {
          get: t,
          enumerable: !0
        });
      } catch (n) {
        setInterval(function () {
          e.location.origin = t();
        }, 100);
      }
    }
  }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);

  var Oo = Xe("isConcatSpreadable"),
      Io = zn >= 51 || !r(function () {
    var e = [];
    return e[Oo] = !1, e.concat()[0] !== e;
  }),
      Lo = Kn("concat"),
      jo = function jo(e) {
    if (!g(e)) return !1;
    var t = e[Oo];
    return void 0 !== t ? !!t : Ne(e);
  };

  Ie({
    target: "Array",
    proto: !0,
    forced: !Io || !Lo
  }, {
    concat: function concat(e) {
      var t,
          n,
          i,
          r,
          a,
          o = Re(this),
          s = ot(o, 0),
          l = 0;

      for (t = -1, i = arguments.length; t < i; t++) {
        if (a = -1 === t ? o : arguments[t], jo(a)) {
          if (l + (r = le(a.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");

          for (n = 0; n < r; n++, l++) {
            n in a && Fn(s, l, a[n]);
          }
        } else {
          if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          Fn(s, l++, a);
        }
      }

      return s.length = l, s;
    }
  });
  var No = ct.filter,
      Ro = Kn("filter"),
      Mo = Qt("filter");
  Ie({
    target: "Array",
    proto: !0,
    forced: !Ro || !Mo
  }, {
    filter: function filter(e) {
      return No(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  var _o = ct.find,
      Uo = !0,
      Do = Qt("find");
  "find" in [] && Array(1).find(function () {
    Uo = !1;
  }), Ie({
    target: "Array",
    proto: !0,
    forced: Uo || !Do
  }, {
    find: function find(e) {
      return _o(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), dn("find");
  var Fo = Xe("iterator"),
      qo = !1;

  try {
    var Ho = 0,
        Bo = {
      next: function next() {
        return {
          done: !!Ho++
        };
      },
      "return": function _return() {
        qo = !0;
      }
    };
    Bo[Fo] = function () {
      return this;
    }, Array.from(Bo, function () {
      throw 2;
    });
  } catch (e) {}

  var Vo = function Vo(e, t) {
    if (!t && !qo) return !1;
    var n = !1;

    try {
      var i = {};
      i[Fo] = function () {
        return {
          next: function next() {
            return {
              done: n = !0
            };
          }
        };
      }, e(i);
    } catch (e) {}

    return n;
  },
      zo = !Vo(function (e) {
    Array.from(e);
  });

  Ie({
    target: "Array",
    stat: !0,
    forced: zo
  }, {
    from: mr
  });
  var Wo = de.includes,
      Ko = Qt("indexOf", {
    ACCESSORS: !0,
    1: 0
  });
  Ie({
    target: "Array",
    proto: !0,
    forced: !Ko
  }, {
    includes: function includes(e) {
      return Wo(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), dn("includes");
  var $o = ct.map,
      Yo = Kn("map"),
      Go = Qt("map");
  Ie({
    target: "Array",
    proto: !0,
    forced: !Yo || !Go
  }, {
    map: function map(e) {
      return $o(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });

  var Xo = function Xo(e, t, n) {
    var i, r;
    return An && "function" == typeof (i = t.constructor) && i !== n && g(r = i.prototype) && r !== n.prototype && An(e, r), e;
  },
      Qo = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
      Jo = "[" + Qo + "]",
      Zo = RegExp("^" + Jo + Jo + "*"),
      es = RegExp(Jo + Jo + "*$"),
      ts = function ts(e) {
    return function (t) {
      var n = String(p(t));
      return 1 & e && (n = n.replace(Zo, "")), 2 & e && (n = n.replace(es, "")), n;
    };
  },
      ns = {
    start: ts(1),
    end: ts(2),
    trim: ts(3)
  },
      is = ye.f,
      rs = A.f,
      as = C.f,
      os = ns.trim,
      ss = i.Number,
      ls = ss.prototype,
      cs = "Number" == h(Be(ls)),
      us = function us(e) {
    var t,
        n,
        i,
        r,
        a,
        o,
        s,
        l,
        c = v(e, !1);
    if ("string" == typeof c && c.length > 2) if (43 === (t = (c = os(c)).charCodeAt(0)) || 45 === t) {
      if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN;
    } else if (48 === t) {
      switch (c.charCodeAt(1)) {
        case 66:
        case 98:
          i = 2, r = 49;
          break;

        case 79:
        case 111:
          i = 8, r = 55;
          break;

        default:
          return +c;
      }

      for (o = (a = c.slice(2)).length, s = 0; s < o; s++) {
        if ((l = a.charCodeAt(s)) < 48 || l > r) return NaN;
      }

      return parseInt(a, i);
    }
    return +c;
  };

  if (Ce("Number", !ss(" 0o1") || !ss("0b1") || ss("+0x1"))) {
    for (var hs, fs = function fs(e) {
      var t = arguments.length < 1 ? 0 : e,
          n = this;
      return n instanceof fs && (cs ? r(function () {
        ls.valueOf.call(n);
      }) : "Number" != h(n)) ? Xo(new ss(us(t)), n, fs) : us(t);
    }, ds = a ? is(ss) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), ps = 0; ds.length > ps; ps++) {
      b(ss, hs = ds[ps]) && !b(fs, hs) && as(fs, hs, rs(ss, hs));
    }

    fs.prototype = ls, ls.constructor = fs, ee(i, "Number", fs);
  }

  var ms = r(function () {
    Me(1);
  });
  Ie({
    target: "Object",
    stat: !0,
    forced: ms
  }, {
    keys: function keys(e) {
      return Me(Re(e));
    }
  });

  var gs = function gs(e) {
    if (qi(e)) throw TypeError("The method doesn't accept regular expressions");
    return e;
  },
      vs = Xe("match"),
      ys = function ys(e) {
    var t = /./;

    try {
      "/./"[e](t);
    } catch (n) {
      try {
        return t[vs] = !1, "/./"[e](t);
      } catch (e) {}
    }

    return !1;
  };

  Ie({
    target: "String",
    proto: !0,
    forced: !ys("includes")
  }, {
    includes: function includes(e) {
      return !!~String(p(this)).indexOf(gs(e), arguments.length > 1 ? arguments[1] : void 0);
    }
  });

  var bs = !r(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
      ws = t(function (e) {
    var t = C.f,
        n = B("meta"),
        i = 0,
        r = Object.isExtensible || function () {
      return !0;
    },
        a = function a(e) {
      t(e, n, {
        value: {
          objectID: "O" + ++i,
          weakData: {}
        }
      });
    },
        o = e.exports = {
      REQUIRED: !1,
      fastKey: function fastKey(e, t) {
        if (!g(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;

        if (!b(e, n)) {
          if (!r(e)) return "F";
          if (!t) return "E";
          a(e);
        }

        return e[n].objectID;
      },
      getWeakData: function getWeakData(e, t) {
        if (!b(e, n)) {
          if (!r(e)) return !0;
          if (!t) return !1;
          a(e);
        }

        return e[n].weakData;
      },
      onFreeze: function onFreeze(e) {
        return bs && o.REQUIRED && r(e) && !b(e, n) && a(e), e;
      }
    };

    W[n] = !0;
  }),
      ks = (ws.REQUIRED, ws.fastKey, ws.getWeakData, ws.onFreeze, t(function (e) {
    var t = function t(e, _t4) {
      this.stopped = e, this.result = _t4;
    };

    (e.exports = function (e, n, i, r, a) {
      var o,
          s,
          l,
          c,
          u,
          h,
          f,
          d = rt(n, i, r ? 2 : 1);
      if (a) o = e;else {
        if ("function" != typeof (s = pr(e))) throw TypeError("Target is not iterable");

        if (fr(s)) {
          for (l = 0, c = le(e.length); c > l; l++) {
            if ((u = r ? d(P(f = e[l])[0], f[1]) : d(e[l])) && u instanceof t) return u;
          }

          return new t(!1);
        }

        o = s.call(e);
      }

      for (h = o.next; !(f = h.call(o)).done;) {
        if ("object" == _typeof(u = cr(o, d, f.value, r)) && u && u instanceof t) return u;
      }

      return new t(!1);
    }).stop = function (e) {
      return new t(!0, e);
    };
  })),
      Ts = ws.getWeakData,
      Ss = Z.set,
      Es = Z.getterFor,
      As = ct.find,
      Ps = ct.findIndex,
      xs = 0,
      Cs = function Cs(e) {
    return e.frozen || (e.frozen = new Os());
  },
      Os = function Os() {
    this.entries = [];
  },
      Is = function Is(e, t) {
    return As(e.entries, function (e) {
      return e[0] === t;
    });
  };

  Os.prototype = {
    get: function get(e) {
      var t = Is(this, e);
      if (t) return t[1];
    },
    has: function has(e) {
      return !!Is(this, e);
    },
    set: function set(e, t) {
      var n = Is(this, e);
      n ? n[1] = t : this.entries.push([e, t]);
    },
    "delete": function _delete(e) {
      var t = Ps(this.entries, function (t) {
        return t[0] === e;
      });
      return ~t && this.entries.splice(t, 1), !!~t;
    }
  };
  var Ls = {
    getConstructor: function getConstructor(e, t, n, i) {
      var r = e(function (e, a) {
        ar(e, r, t), Ss(e, {
          type: t,
          id: xs++,
          frozen: void 0
        }), null != a && ks(a, e[i], e, n);
      }),
          a = Es(t),
          o = function o(e, t, n) {
        var i = a(e),
            r = Ts(P(t), !0);
        return !0 === r ? Cs(i).set(t, n) : r[i.id] = n, e;
      };

      return Er(r.prototype, {
        "delete": function _delete(e) {
          var t = a(this);
          if (!g(e)) return !1;
          var n = Ts(e);
          return !0 === n ? Cs(t)["delete"](e) : n && b(n, t.id) && delete n[t.id];
        },
        has: function has(e) {
          var t = a(this);
          if (!g(e)) return !1;
          var n = Ts(e);
          return !0 === n ? Cs(t).has(e) : n && b(n, t.id);
        }
      }), Er(r.prototype, n ? {
        get: function get(e) {
          var t = a(this);

          if (g(e)) {
            var n = Ts(e);
            return !0 === n ? Cs(t).get(e) : n ? n[t.id] : void 0;
          }
        },
        set: function set(e, t) {
          return o(this, e, t);
        }
      } : {
        add: function add(e) {
          return o(this, e, !0);
        }
      }), r;
    }
  },
      js = (t(function (e) {
    var t,
        n = Z.enforce,
        a = !i.ActiveXObject && "ActiveXObject" in i,
        o = Object.isExtensible,
        s = function s(e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
        l = e.exports = function (e, t, n) {
      var a = -1 !== e.indexOf("Map"),
          o = -1 !== e.indexOf("Weak"),
          s = a ? "set" : "add",
          l = i[e],
          c = l && l.prototype,
          u = l,
          h = {},
          f = function f(e) {
        var t = c[e];
        ee(c, e, "add" == e ? function (e) {
          return t.call(this, 0 === e ? 0 : e), this;
        } : "delete" == e ? function (e) {
          return !(o && !g(e)) && t.call(this, 0 === e ? 0 : e);
        } : "get" == e ? function (e) {
          return o && !g(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
        } : "has" == e ? function (e) {
          return !(o && !g(e)) && t.call(this, 0 === e ? 0 : e);
        } : function (e, n) {
          return t.call(this, 0 === e ? 0 : e, n), this;
        });
      };

      if (Ce(e, "function" != typeof l || !(o || c.forEach && !r(function () {
        new l().entries().next();
      })))) u = n.getConstructor(t, e, a, s), ws.REQUIRED = !0;else if (Ce(e, !0)) {
        var d = new u(),
            p = d[s](o ? {} : -0, 1) != d,
            m = r(function () {
          d.has(1);
        }),
            v = Vo(function (e) {
          new l(e);
        }),
            y = !o && r(function () {
          for (var e = new l(), t = 5; t--;) {
            e[s](t, t);
          }

          return !e.has(-0);
        });
        v || ((u = t(function (t, n) {
          ar(t, u, e);
          var i = Xo(new l(), t, u);
          return null != n && ks(n, i[s], i, a), i;
        })).prototype = c, c.constructor = u), (m || y) && (f("delete"), f("has"), a && f("get")), (y || p) && f(s), o && c.clear && delete c.clear;
      }
      return h[e] = u, Ie({
        global: !0,
        forced: u != l
      }, h), nt(u, e), o || n.setStrong(u, e, a), u;
    }("WeakMap", s, Ls);

    if (D && a) {
      t = Ls.getConstructor(s, "WeakMap", !0), ws.REQUIRED = !0;
      var c = l.prototype,
          u = c["delete"],
          h = c.has,
          f = c.get,
          d = c.set;
      Er(c, {
        "delete": function _delete(e) {
          if (g(e) && !o(e)) {
            var i = n(this);
            return i.frozen || (i.frozen = new t()), u.call(this, e) || i.frozen["delete"](e);
          }

          return u.call(this, e);
        },
        has: function has(e) {
          if (g(e) && !o(e)) {
            var i = n(this);
            return i.frozen || (i.frozen = new t()), h.call(this, e) || i.frozen.has(e);
          }

          return h.call(this, e);
        },
        get: function get(e) {
          if (g(e) && !o(e)) {
            var i = n(this);
            return i.frozen || (i.frozen = new t()), h.call(this, e) ? f.call(this, e) : i.frozen.get(e);
          }

          return f.call(this, e);
        },
        set: function set(e, i) {
          if (g(e) && !o(e)) {
            var r = n(this);
            r.frozen || (r.frozen = new t()), h.call(this, e) ? d.call(this, e, i) : r.frozen.set(e, i);
          } else d.call(this, e, i);

          return this;
        }
      });
    }
  }), ct.every),
      Ns = $t("every"),
      Rs = Qt("every");
  Ie({
    target: "Array",
    proto: !0,
    forced: !Ns || !Rs
  }, {
    every: function every(e) {
      return js(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), Ie({
    target: "Object",
    stat: !0,
    forced: Object.assign !== lr
  }, {
    assign: lr
  });
  var Ms = ns.trim;
  Ie({
    target: "String",
    proto: !0,
    forced: function (e) {
      return r(function () {
        return !!Qo[e]() || "​᠎" != "​᠎"[e]() || Qo[e].name !== e;
      });
    }("trim")
  }, {
    trim: function trim() {
      return Ms(this);
    }
  });
  var _s = ct.some,
      Us = $t("some"),
      Ds = Qt("some");
  Ie({
    target: "Array",
    proto: !0,
    forced: !Us || !Ds
  }, {
    some: function some(e) {
      return _s(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });

  var Fs = "".repeat || function (e) {
    var t = String(p(this)),
        n = "",
        i = oe(e);
    if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");

    for (; i > 0; (i >>>= 1) && (t += t)) {
      1 & i && (n += t);
    }

    return n;
  },
      qs = 1..toFixed,
      Hs = Math.floor,
      Bs = function Bs(e, t, n) {
    return 0 === t ? n : t % 2 == 1 ? Bs(e, t - 1, n * e) : Bs(e * e, t / 2, n);
  },
      Vs = qs && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !r(function () {
    qs.call({});
  });

  Ie({
    target: "Number",
    proto: !0,
    forced: Vs
  }, {
    toFixed: function toFixed(e) {
      var t,
          n,
          i,
          r,
          a = function (e) {
        if ("number" != typeof e && "Number" != h(e)) throw TypeError("Incorrect invocation");
        return +e;
      }(this),
          o = oe(e),
          s = [0, 0, 0, 0, 0, 0],
          l = "",
          c = "0",
          u = function u(e, t) {
        for (var n = -1, i = t; ++n < 6;) {
          i += e * s[n], s[n] = i % 1e7, i = Hs(i / 1e7);
        }
      },
          f = function f(e) {
        for (var t = 6, n = 0; --t >= 0;) {
          n += s[t], s[t] = Hs(n / e), n = n % e * 1e7;
        }
      },
          d = function d() {
        for (var e = 6, t = ""; --e >= 0;) {
          if ("" !== t || 0 === e || 0 !== s[e]) {
            var n = String(s[e]);
            t = "" === t ? n : t + Fs.call("0", 7 - n.length) + n;
          }
        }

        return t;
      };

      if (o < 0 || o > 20) throw RangeError("Incorrect fraction digits");
      if (a != a) return "NaN";
      if (a <= -1e21 || a >= 1e21) return String(a);
      if (a < 0 && (l = "-", a = -a), a > 1e-21) if (n = (t = function (e) {
        for (var t = 0, n = e; n >= 4096;) {
          t += 12, n /= 4096;
        }

        for (; n >= 2;) {
          t += 1, n /= 2;
        }

        return t;
      }(a * Bs(2, 69, 1)) - 69) < 0 ? a * Bs(2, -t, 1) : a / Bs(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
        for (u(0, n), i = o; i >= 7;) {
          u(1e7, 0), i -= 7;
        }

        for (u(Bs(10, i, 1), 0), i = t - 1; i >= 23;) {
          f(1 << 23), i -= 23;
        }

        f(1 << i), u(1, 1), f(2), c = d();
      } else u(0, n), u(1 << -t, 0), c = d() + Fs.call("0", o);
      return c = o > 0 ? l + ((r = c.length) <= o ? "0." + Fs.call("0", o - r) + c : c.slice(0, r - o) + "." + c.slice(r - o)) : l + c;
    }
  });

  var zs = l.f,
      Ws = function Ws(e) {
    return function (t) {
      for (var n, i = m(t), r = Me(i), o = r.length, s = 0, l = []; o > s;) {
        n = r[s++], a && !zs.call(i, n) || l.push(e ? [n, i[n]] : i[n]);
      }

      return l;
    };
  },
      Ks = {
    entries: Ws(!0),
    values: Ws(!1)
  },
      $s = Ks.entries;

  Ie({
    target: "Object",
    stat: !0
  }, {
    entries: function entries(e) {
      return $s(e);
    }
  });
  var Ys = Ks.values;
  Ie({
    target: "Object",
    stat: !0
  }, {
    values: function values(e) {
      return Ys(e);
    }
  }), Ie({
    target: "Number",
    stat: !0
  }, {
    isNaN: function isNaN(e) {
      return e != e;
    }
  });
  var Gs = A.f,
      Xs = r(function () {
    Gs(1);
  });

  function Qs(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function Js(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function Zs(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function el(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Zs(Object(n), !0).forEach(function (t) {
        Js(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zs(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  Ie({
    target: "Object",
    stat: !0,
    forced: !a || Xs,
    sham: !a
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
      return Gs(m(e), t);
    }
  }), Ie({
    target: "Object",
    stat: !0,
    sham: !a
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
      for (var t, n, i = m(e), r = A.f, a = we(i), o = {}, s = 0; a.length > s;) {
        void 0 !== (n = r(i, t = a[s++])) && Fn(o, t, n);
      }

      return o;
    }
  }), Oi("match", 1, function (e, t, n) {
    return [function (t) {
      var n = p(this),
          i = null == t ? void 0 : t[e];
      return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
    }, function (e) {
      var i = n(t, e, this);
      if (i.done) return i.value;
      var r = P(e),
          a = String(this);
      if (!r.global) return ji(r, a);
      var o = r.unicode;
      r.lastIndex = 0;

      for (var s, l = [], c = 0; null !== (s = ji(r, a));) {
        var u = String(s[0]);
        l[c] = u, "" === u && (r.lastIndex = Li(a, le(r.lastIndex), o)), c++;
      }

      return 0 === c ? null : l;
    }];
  });
  var tl = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
  };

  function nl(e, t) {
    return function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }.call(e, t);
  }

  var il = function il(e) {
    return null != e ? e.constructor : null;
  },
      rl = function rl(e, t) {
    return !!(e && t && e instanceof t);
  },
      al = function al(e) {
    return null == e;
  },
      ol = function ol(e) {
    return il(e) === Object;
  },
      sl = function sl(e) {
    return il(e) === String;
  },
      ll = function ll(e) {
    return Array.isArray(e);
  },
      cl = function cl(e) {
    return rl(e, NodeList);
  },
      ul = sl,
      hl = ll,
      fl = cl,
      dl = function dl(e) {
    return rl(e, Element);
  },
      pl = function pl(e) {
    return rl(e, Event);
  },
      ml = function ml(e) {
    return al(e) || (sl(e) || ll(e) || cl(e)) && !e.length || ol(e) && !Object.keys(e).length;
  };

  function gl(e, t) {
    if (1 > t) {
      var n = function (e) {
        var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
      }(t);

      return parseFloat(e.toFixed(n));
    }

    return Math.round(e / t) * t;
  }

  var vl,
      yl,
      bl,
      wl = function () {
    function e(t, n) {
      (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, e), dl(t) ? this.element = t : ul(t) && (this.element = document.querySelector(t)), dl(this.element) && ml(this.element.rangeTouch) && (this.config = el({}, tl, {}, n), this.init());
    }

    return function (e, t, n) {
      t && Qs(e.prototype, t), n && Qs(e, n);
    }(e, [{
      key: "init",
      value: function value() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function value() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function value(e) {
        var t = this,
            n = e ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function (e) {
          t.element[n](e, function (e) {
            return t.set(e);
          }, !1);
        });
      }
    }, {
      key: "get",
      value: function value(t) {
        if (!e.enabled || !pl(t)) return null;
        var n,
            i = t.target,
            r = t.changedTouches[0],
            a = parseFloat(i.getAttribute("min")) || 0,
            o = parseFloat(i.getAttribute("max")) || 100,
            s = parseFloat(i.getAttribute("step")) || 1,
            l = i.getBoundingClientRect(),
            c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
        return 0 > (n = 100 / l.width * (r.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), a + gl(n / 100 * (o - a), s);
      }
    }, {
      key: "set",
      value: function value(t) {
        e.enabled && pl(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
          if (e && t) {
            var n = new Event(t, {
              bubbles: !0
            });
            e.dispatchEvent(n);
          }
        }(t.target, "touchend" === t.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function value(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            i = null;
        if (ml(t) || ul(t) ? i = Array.from(document.querySelectorAll(ul(t) ? t : 'input[type="range"]')) : dl(t) ? i = [t] : fl(t) ? i = Array.from(t) : hl(t) && (i = t.filter(dl)), ml(i)) return null;
        var r = el({}, tl, {}, n);

        if (ul(t) && r.watch) {
          var a = new MutationObserver(function (n) {
            Array.from(n).forEach(function (n) {
              Array.from(n.addedNodes).forEach(function (n) {
                dl(n) && nl(n, t) && new e(n, r);
              });
            });
          });
          a.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }

        return i.map(function (t) {
          return new e(t, n);
        });
      }
    }, {
      key: "enabled",
      get: function get() {
        return "ontouchstart" in document.documentElement;
      }
    }]), e;
  }(),
      kl = i.Promise,
      Tl = Xe("species"),
      Sl = function Sl(e) {
    var t = ie(e),
        n = C.f;
    a && t && !t[Tl] && n(t, Tl, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  },
      El = /(iphone|ipod|ipad).*applewebkit/i.test(qn),
      Al = i.location,
      Pl = i.setImmediate,
      xl = i.clearImmediate,
      Cl = i.process,
      Ol = i.MessageChannel,
      Il = i.Dispatch,
      Ll = 0,
      jl = {},
      Nl = function Nl(e) {
    if (jl.hasOwnProperty(e)) {
      var t = jl[e];
      delete jl[e], t();
    }
  },
      Rl = function Rl(e) {
    return function () {
      Nl(e);
    };
  },
      Ml = function Ml(e) {
    Nl(e.data);
  },
      _l = function _l(e) {
    i.postMessage(e + "", Al.protocol + "//" + Al.host);
  };

  Pl && xl || (Pl = function Pl(e) {
    for (var t = [], n = 1; arguments.length > n;) {
      t.push(arguments[n++]);
    }

    return jl[++Ll] = function () {
      ("function" == typeof e ? e : Function(e)).apply(void 0, t);
    }, vl(Ll), Ll;
  }, xl = function xl(e) {
    delete jl[e];
  }, "process" == h(Cl) ? vl = function vl(e) {
    Cl.nextTick(Rl(e));
  } : Il && Il.now ? vl = function vl(e) {
    Il.now(Rl(e));
  } : Ol && !El ? (bl = (yl = new Ol()).port2, yl.port1.onmessage = Ml, vl = rt(bl.postMessage, bl, 1)) : !i.addEventListener || "function" != typeof postMessage || i.importScripts || r(_l) || "file:" === Al.protocol ? vl = "onreadystatechange" in T("script") ? function (e) {
    Ue.appendChild(T("script")).onreadystatechange = function () {
      Ue.removeChild(this), Nl(e);
    };
  } : function (e) {
    setTimeout(Rl(e), 0);
  } : (vl = _l, i.addEventListener("message", Ml, !1)));
  var Ul,
      Dl,
      Fl,
      ql,
      Hl,
      Bl,
      Vl,
      zl,
      Wl = {
    set: Pl,
    clear: xl
  },
      Kl = A.f,
      $l = Wl.set,
      Yl = i.MutationObserver || i.WebKitMutationObserver,
      Gl = i.process,
      Xl = i.Promise,
      Ql = "process" == h(Gl),
      Jl = Kl(i, "queueMicrotask"),
      Zl = Jl && Jl.value;
  Zl || (Ul = function Ul() {
    var e, t;

    for (Ql && (e = Gl.domain) && e.exit(); Dl;) {
      t = Dl.fn, Dl = Dl.next;

      try {
        t();
      } catch (e) {
        throw Dl ? ql() : Fl = void 0, e;
      }
    }

    Fl = void 0, e && e.enter();
  }, Ql ? ql = function ql() {
    Gl.nextTick(Ul);
  } : Yl && !El ? (Hl = !0, Bl = document.createTextNode(""), new Yl(Ul).observe(Bl, {
    characterData: !0
  }), ql = function ql() {
    Bl.data = Hl = !Hl;
  }) : Xl && Xl.resolve ? (Vl = Xl.resolve(void 0), zl = Vl.then, ql = function ql() {
    zl.call(Vl, Ul);
  }) : ql = function ql() {
    $l.call(i, Ul);
  });

  var ec,
      tc,
      nc,
      ic,
      rc = Zl || function (e) {
    var t = {
      fn: e,
      next: void 0
    };
    Fl && (Fl.next = t), Dl || (Dl = t, ql()), Fl = t;
  },
      ac = function ac(e) {
    var t, n;
    this.promise = new e(function (e, i) {
      if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
      t = e, n = i;
    }), this.resolve = it(t), this.reject = it(n);
  },
      oc = {
    f: function f(e) {
      return new ac(e);
    }
  },
      sc = function sc(e, t) {
    if (P(e), g(t) && t.constructor === e) return t;
    var n = oc.f(e);
    return (0, n.resolve)(t), n.promise;
  },
      lc = function lc(e) {
    try {
      return {
        error: !1,
        value: e()
      };
    } catch (e) {
      return {
        error: !0,
        value: e
      };
    }
  },
      cc = Wl.set,
      uc = Xe("species"),
      hc = "Promise",
      fc = Z.get,
      dc = Z.set,
      pc = Z.getterFor(hc),
      _mc = kl,
      gc = i.TypeError,
      vc = i.document,
      yc = i.process,
      bc = ie("fetch"),
      wc = oc.f,
      kc = wc,
      Tc = "process" == h(yc),
      Sc = !!(vc && vc.createEvent && i.dispatchEvent),
      Ec = Ce(hc, function () {
    if (!(_(_mc) !== String(_mc))) {
      if (66 === zn) return !0;
      if (!Tc && "function" != typeof PromiseRejectionEvent) return !0;
    }

    if (zn >= 51 && /native code/.test(_mc)) return !1;

    var e = _mc.resolve(1),
        t = function t(e) {
      e(function () {}, function () {});
    };

    return (e.constructor = {})[uc] = t, !(e.then(function () {}) instanceof t);
  }),
      Ac = Ec || !Vo(function (e) {
    _mc.all(e)["catch"](function () {});
  }),
      Pc = function Pc(e) {
    var t;
    return !(!g(e) || "function" != typeof (t = e.then)) && t;
  },
      xc = function xc(e, t, n) {
    if (!t.notified) {
      t.notified = !0;
      var i = t.reactions;
      rc(function () {
        for (var r = t.value, a = 1 == t.state, o = 0; i.length > o;) {
          var s,
              l,
              c,
              u = i[o++],
              h = a ? u.ok : u.fail,
              f = u.resolve,
              d = u.reject,
              p = u.domain;

          try {
            h ? (a || (2 === t.rejection && Lc(e, t), t.rejection = 1), !0 === h ? s = r : (p && p.enter(), s = h(r), p && (p.exit(), c = !0)), s === u.promise ? d(gc("Promise-chain cycle")) : (l = Pc(s)) ? l.call(s, f, d) : f(s)) : d(r);
          } catch (e) {
            p && !c && p.exit(), d(e);
          }
        }

        t.reactions = [], t.notified = !1, n && !t.rejection && Oc(e, t);
      });
    }
  },
      Cc = function Cc(e, t, n) {
    var r, a;
    Sc ? ((r = vc.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), i.dispatchEvent(r)) : r = {
      promise: t,
      reason: n
    }, (a = i["on" + e]) ? a(r) : "unhandledrejection" === e && function (e, t) {
      var n = i.console;
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    }("Unhandled promise rejection", n);
  },
      Oc = function Oc(e, t) {
    cc.call(i, function () {
      var n,
          i = t.value;
      if (Ic(t) && (n = lc(function () {
        Tc ? yc.emit("unhandledRejection", i, e) : Cc("unhandledrejection", e, i);
      }), t.rejection = Tc || Ic(t) ? 2 : 1, n.error)) throw n.value;
    });
  },
      Ic = function Ic(e) {
    return 1 !== e.rejection && !e.parent;
  },
      Lc = function Lc(e, t) {
    cc.call(i, function () {
      Tc ? yc.emit("rejectionHandled", e) : Cc("rejectionhandled", e, t.value);
    });
  },
      jc = function jc(e, t, n, i) {
    return function (r) {
      e(t, n, r, i);
    };
  },
      Nc = function Nc(e, t, n, i) {
    t.done || (t.done = !0, i && (t = i), t.value = n, t.state = 2, xc(e, t, !0));
  },
      Rc = function Rc(e, t, n, i) {
    if (!t.done) {
      t.done = !0, i && (t = i);

      try {
        if (e === n) throw gc("Promise can't be resolved itself");
        var r = Pc(n);
        r ? rc(function () {
          var i = {
            done: !1
          };

          try {
            r.call(n, jc(Rc, e, i, t), jc(Nc, e, i, t));
          } catch (n) {
            Nc(e, i, n, t);
          }
        }) : (t.value = n, t.state = 1, xc(e, t, !1));
      } catch (n) {
        Nc(e, {
          done: !1
        }, n, t);
      }
    }
  };

  Ec && (_mc = function mc(e) {
    ar(this, _mc, hc), it(e), ec.call(this);
    var t = fc(this);

    try {
      e(jc(Rc, this, t), jc(Nc, this, t));
    } catch (e) {
      Nc(this, t, e);
    }
  }, (ec = function ec(e) {
    dc(this, {
      type: hc,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0
    });
  }).prototype = Er(_mc.prototype, {
    then: function then(e, t) {
      var n = pc(this),
          i = wc(Bi(this, _mc));
      return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = Tc ? yc.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && xc(this, n, !1), i.promise;
    },
    "catch": function _catch(e) {
      return this.then(void 0, e);
    }
  }), tc = function tc() {
    var e = new ec(),
        t = fc(e);
    this.promise = e, this.resolve = jc(Rc, e, t), this.reject = jc(Nc, e, t);
  }, oc.f = wc = function wc(e) {
    return e === _mc || e === nc ? new tc(e) : kc(e);
  }, "function" == typeof kl && (ic = kl.prototype.then, ee(kl.prototype, "then", function (e, t) {
    var n = this;
    return new _mc(function (e, t) {
      ic.call(n, e, t);
    }).then(e, t);
  }, {
    unsafe: !0
  }), "function" == typeof bc && Ie({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function fetch(e) {
      return sc(_mc, bc.apply(i, arguments));
    }
  }))), Ie({
    global: !0,
    wrap: !0,
    forced: Ec
  }, {
    Promise: _mc
  }), nt(_mc, hc, !1), Sl(hc), nc = ie(hc), Ie({
    target: hc,
    stat: !0,
    forced: Ec
  }, {
    reject: function reject(e) {
      var t = wc(this);
      return t.reject.call(void 0, e), t.promise;
    }
  }), Ie({
    target: hc,
    stat: !0,
    forced: Ec
  }, {
    resolve: function resolve(e) {
      return sc(this, e);
    }
  }), Ie({
    target: hc,
    stat: !0,
    forced: Ac
  }, {
    all: function all(e) {
      var t = this,
          n = wc(t),
          i = n.resolve,
          r = n.reject,
          a = lc(function () {
        var n = it(t.resolve),
            a = [],
            o = 0,
            s = 1;
        ks(e, function (e) {
          var l = o++,
              c = !1;
          a.push(void 0), s++, n.call(t, e).then(function (e) {
            c || (c = !0, a[l] = e, --s || i(a));
          }, r);
        }), --s || i(a);
      });
      return a.error && r(a.value), n.promise;
    },
    race: function race(e) {
      var t = this,
          n = wc(t),
          i = n.reject,
          r = lc(function () {
        var r = it(t.resolve);
        ks(e, function (e) {
          r.call(t, e).then(n.resolve, i);
        });
      });
      return r.error && i(r.value), n.promise;
    }
  });
  var Mc,
      _c = A.f,
      Uc = "".startsWith,
      Dc = Math.min,
      Fc = ys("startsWith"),
      qc = !(Fc || (Mc = _c(String.prototype, "startsWith"), !Mc || Mc.writable));
  Ie({
    target: "String",
    proto: !0,
    forced: !qc && !Fc
  }, {
    startsWith: function startsWith(e) {
      var t = String(p(this));
      gs(e);
      var n = le(Dc(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          i = String(e);
      return Uc ? Uc.call(t, i, n) : t.slice(n, n + i.length) === i;
    }
  });

  var Hc,
      Bc,
      Vc,
      zc = function zc(e) {
    return null != e ? e.constructor : null;
  },
      Wc = function Wc(e, t) {
    return Boolean(e && t && e instanceof t);
  },
      Kc = function Kc(e) {
    return null == e;
  },
      $c = function $c(e) {
    return zc(e) === Object;
  },
      Yc = function Yc(e) {
    return zc(e) === String;
  },
      Gc = function Gc(e) {
    return zc(e) === Function;
  },
      Xc = function Xc(e) {
    return Array.isArray(e);
  },
      Qc = function Qc(e) {
    return Wc(e, NodeList);
  },
      Jc = function Jc(e) {
    return Kc(e) || (Yc(e) || Xc(e) || Qc(e)) && !e.length || $c(e) && !Object.keys(e).length;
  },
      Zc = Kc,
      eu = $c,
      tu = function tu(e) {
    return zc(e) === Number && !Number.isNaN(e);
  },
      nu = Yc,
      iu = function iu(e) {
    return zc(e) === Boolean;
  },
      ru = Gc,
      au = Xc,
      ou = Qc,
      su = function su(e) {
    return Wc(e, Element);
  },
      lu = function lu(e) {
    return Wc(e, Event);
  },
      cu = function cu(e) {
    return Wc(e, KeyboardEvent);
  },
      uu = function uu(e) {
    return Wc(e, TextTrack) || !Kc(e) && Yc(e.kind);
  },
      hu = function hu(e) {
    return Wc(e, Promise) && Gc(e.then);
  },
      fu = function fu(e) {
    if (Wc(e, window.URL)) return !0;
    if (!Yc(e)) return !1;
    var t = e;
    e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));

    try {
      return !Jc(new URL(t).hostname);
    } catch (e) {
      return !1;
    }
  },
      du = Jc,
      pu = (Hc = document.createElement("span"), Bc = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  }, Vc = Object.keys(Bc).find(function (e) {
    return void 0 !== Hc.style[e];
  }), !!nu(Vc) && Bc[Vc]);

  function mu(e, t) {
    setTimeout(function () {
      try {
        e.hidden = !0, e.offsetHeight, e.hidden = !1;
      } catch (e) {}
    }, t);
  }

  var gu = {
    isIE:
    /* @cc_on!@ */
    !!document.documentMode,
    isEdge: window.navigator.userAgent.includes("Edge"),
    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  },
      vu = function vu(e) {
    return function (t, n, i, r) {
      it(n);
      var a = Re(t),
          o = d(a),
          s = le(a.length),
          l = e ? s - 1 : 0,
          c = e ? -1 : 1;
      if (i < 2) for (;;) {
        if (l in o) {
          r = o[l], l += c;
          break;
        }

        if (l += c, e ? l < 0 : s <= l) throw TypeError("Reduce of empty array with no initial value");
      }

      for (; e ? l >= 0 : s > l; l += c) {
        l in o && (r = n(r, o[l], l, a));
      }

      return r;
    };
  },
      yu = {
    left: vu(!1),
    right: vu(!0)
  }.left,
      bu = $t("reduce"),
      wu = Qt("reduce", {
    1: 0
  });

  function ku(e, t) {
    return t.split(".").reduce(function (e, t) {
      return e && e[t];
    }, e);
  }

  function Tu() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
      n[i - 1] = arguments[i];
    }

    if (!n.length) return e;
    var r = n.shift();
    return eu(r) ? (Object.keys(r).forEach(function (t) {
      eu(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, ko({}, t, {})), Tu(e[t], r[t])) : Object.assign(e, ko({}, t, r[t]));
    }), Tu.apply(void 0, [e].concat(n))) : e;
  }

  function Su(e, t) {
    var n = e.length ? e : [e];
    Array.from(n).reverse().forEach(function (e, n) {
      var i = n > 0 ? t.cloneNode(!0) : t,
          r = e.parentNode,
          a = e.nextSibling;
      i.appendChild(e), a ? r.insertBefore(i, a) : r.appendChild(i);
    });
  }

  function Eu(e, t) {
    su(e) && !du(t) && Object.entries(t).filter(function (e) {
      var t = Ao(e, 2)[1];
      return !Zc(t);
    }).forEach(function (t) {
      var n = Ao(t, 2),
          i = n[0],
          r = n[1];
      return e.setAttribute(i, r);
    });
  }

  function Au(e, t, n) {
    var i = document.createElement(e);
    return eu(t) && Eu(i, t), nu(n) && (i.innerText = n), i;
  }

  function Pu(e, t, n, i) {
    su(t) && t.appendChild(Au(e, n, i));
  }

  function xu(e) {
    ou(e) || au(e) ? Array.from(e).forEach(xu) : su(e) && su(e.parentNode) && e.parentNode.removeChild(e);
  }

  function Cu(e) {
    if (su(e)) for (var t = e.childNodes.length; t > 0;) {
      e.removeChild(e.lastChild), t -= 1;
    }
  }

  function Ou(e, t) {
    return su(t) && su(t.parentNode) && su(e) ? (t.parentNode.replaceChild(e, t), e) : null;
  }

  function Iu(e, t) {
    if (!nu(e) || du(e)) return {};
    var n = {},
        i = Tu({}, t);
    return e.split(",").forEach(function (e) {
      var t = e.trim(),
          r = t.replace(".", ""),
          a = t.replace(/[[\]]/g, "").split("="),
          o = Ao(a, 1)[0],
          s = a.length > 1 ? a[1].replace(/["']/g, "") : "";

      switch (t.charAt(0)) {
        case ".":
          nu(i["class"]) ? n["class"] = "".concat(i["class"], " ").concat(r) : n["class"] = r;
          break;

        case "#":
          n.id = t.replace("#", "");
          break;

        case "[":
          n[o] = s;
      }
    }), Tu(i, n);
  }

  function Lu(e, t) {
    if (su(e)) {
      var n = t;
      iu(n) || (n = !e.hidden), e.hidden = n;
    }
  }

  function ju(e, t, n) {
    if (ou(e)) return Array.from(e).map(function (e) {
      return ju(e, t, n);
    });

    if (su(e)) {
      var i = "toggle";
      return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t);
    }

    return !1;
  }

  function Nu(e, t) {
    return su(e) && e.classList.contains(t);
  }

  function Ru(e, t) {
    var n = Element.prototype;
    return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }).call(e, t);
  }

  function Mu(e) {
    return this.elements.container.querySelectorAll(e);
  }

  function _u(e) {
    return this.elements.container.querySelector(e);
  }

  function Uu() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    su(e) && (e.focus({
      preventScroll: !0
    }), t && ju(e, this.config.classNames.tabFocus));
  }

  Ie({
    target: "Array",
    proto: !0,
    forced: !bu || !wu
  }, {
    reduce: function reduce(e) {
      return yu(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });

  var Du,
      Fu = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  },
      qu = {
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    check: function check(e, t, n) {
      var i = gu.isIPhone && n && qu.playsinline,
          r = qu[e] || "html5" !== t;
      return {
        api: r,
        ui: r && qu.rangeInput && ("video" !== e || !gu.isIPhone || i)
      };
    },
    pip: !(gu.isIPhone || !ru(Au("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Au("video").disablePictureInPicture)),
    airplay: ru(window.WebKitPlaybackTargetAvailabilityEvent),
    playsinline: "playsInline" in document.createElement("video"),
    mime: function mime(e) {
      if (du(e)) return !1;
      var t = Ao(e.split("/"), 1)[0],
          n = e;
      if (!this.isHTML5 || t !== this.type) return !1;
      Object.keys(Fu).includes(n) && (n += '; codecs="'.concat(Fu[e], '"'));

      try {
        return Boolean(n && this.media.canPlayType(n).replace(/no/, ""));
      } catch (e) {
        return !1;
      }
    },
    textTracks: "textTracks" in document.createElement("video"),
    rangeInput: (Du = document.createElement("input"), Du.type = "range", "range" === Du.type),
    touch: "ontouchstart" in document.documentElement,
    transitions: !1 !== pu,
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  },
      Hu = function () {
    var e = !1;

    try {
      var t = Object.defineProperty({}, "passive", {
        get: function get() {
          return e = !0, null;
        }
      });
      window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch (e) {}

    return e;
  }();

  function Bu(e, t, n) {
    var i = this,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];

    if (e && "addEventListener" in e && !du(t) && ru(n)) {
      var s = t.split(" "),
          l = o;
      Hu && (l = {
        passive: a,
        capture: o
      }), s.forEach(function (t) {
        i && i.eventListeners && r && i.eventListeners.push({
          element: e,
          type: t,
          callback: n,
          options: l
        }), e[r ? "addEventListener" : "removeEventListener"](t, n, l);
      });
    }
  }

  function Vu(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    Bu.call(this, e, t, n, !0, i, r);
  }

  function zu(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    Bu.call(this, e, t, n, !1, i, r);
  }

  function Wu(e) {
    var t = this,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = function o() {
      zu(e, n, o, r, a);

      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) {
        l[c] = arguments[c];
      }

      i.apply(t, l);
    };

    Bu.call(this, e, n, o, !0, r, a);
  }

  function Ku(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};

    if (su(e) && !du(t)) {
      var r = new CustomEvent(t, {
        bubbles: n,
        detail: So(So({}, i), {}, {
          plyr: this
        })
      });
      e.dispatchEvent(r);
    }
  }

  function $u() {
    this && this.eventListeners && (this.eventListeners.forEach(function (e) {
      var t = e.element,
          n = e.type,
          i = e.callback,
          r = e.options;
      t.removeEventListener(n, i, r);
    }), this.eventListeners = []);
  }

  function Yu() {
    var e = this;
    return new Promise(function (t) {
      return e.ready ? setTimeout(t, 0) : Vu.call(e, e.elements.container, "ready", t);
    }).then(function () {});
  }

  function Gu(e) {
    hu(e) && e.then(null, function () {});
  }

  function Xu(e) {
    return !!(au(e) || nu(e) && e.includes(":")) && (au(e) ? e : e.split(":")).map(Number).every(tu);
  }

  function Qu(e) {
    if (!au(e) || !e.every(tu)) return null;

    var t = Ao(e, 2),
        n = t[0],
        i = t[1],
        r = function e(t, n) {
      return 0 === n ? t : e(n, t % n);
    }(n, i);

    return [n / r, i / r];
  }

  function Ju(e) {
    var t = function t(e) {
      return Xu(e) ? e.split(":").map(Number) : null;
    },
        n = t(e);

    if (null === n && (n = t(this.config.ratio)), null === n && !du(this.embed) && au(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
      var i = this.media;
      n = Qu([i.videoWidth, i.videoHeight]);
    }

    return n;
  }

  function Zu(e) {
    if (!this.isVideo) return {};
    var t = this.elements.wrapper,
        n = Ju.call(this, e),
        i = Ao(au(n) ? n : [0, 0], 2),
        r = 100 / i[0] * i[1];

    if (t.style.paddingBottom = "".concat(r, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      var a = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          o = (a - r) / (a / 50);
      this.media.style.transform = "translateY(-".concat(o, "%)");
    } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);

    return {
      padding: r,
      ratio: n
    };
  }

  var eh = {
    getSources: function getSources() {
      var e = this;
      return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
        var n = t.getAttribute("type");
        return !!du(n) || qu.mime.call(e, n);
      }) : [];
    },
    getQualityOptions: function getQualityOptions() {
      return this.config.quality.forced ? this.config.quality.options : eh.getSources.call(this).map(function (e) {
        return Number(e.getAttribute("size"));
      }).filter(Boolean);
    },
    setup: function setup() {
      if (this.isHTML5) {
        var e = this;
        e.options.speed = e.config.speed.options, du(this.config.ratio) || Zu.call(e), Object.defineProperty(e.media, "quality", {
          get: function get() {
            var t = eh.getSources.call(e).find(function (t) {
              return t.getAttribute("src") === e.source;
            });
            return t && Number(t.getAttribute("size"));
          },
          set: function set(t) {
            if (e.quality !== t) {
              if (e.config.quality.forced && ru(e.config.quality.onChange)) e.config.quality.onChange(t);else {
                var n = eh.getSources.call(e).find(function (e) {
                  return Number(e.getAttribute("size")) === t;
                });
                if (!n) return;
                var i = e.media,
                    r = i.currentTime,
                    a = i.paused,
                    o = i.preload,
                    s = i.readyState,
                    l = i.playbackRate;
                e.media.src = n.getAttribute("src"), ("none" !== o || s) && (e.once("loadedmetadata", function () {
                  e.speed = l, e.currentTime = r, a || Gu(e.play());
                }), e.media.load());
              }
              Ku.call(e, e.media, "qualitychange", !1, {
                quality: t
              });
            }
          }
        });
      }
    },
    cancelRequests: function cancelRequests() {
      this.isHTML5 && (xu(eh.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    }
  };

  function th(e) {
    return au(e) ? e.filter(function (t, n) {
      return e.indexOf(t) === n;
    }) : e;
  }

  var nh = C.f,
      ih = ye.f,
      rh = Z.set,
      ah = Xe("match"),
      oh = i.RegExp,
      sh = oh.prototype,
      lh = /a/g,
      ch = /a/g,
      uh = new oh(lh) !== lh,
      hh = oi.UNSUPPORTED_Y;

  if (a && Ce("RegExp", !uh || hh || r(function () {
    return ch[ah] = !1, oh(lh) != lh || oh(ch) == ch || "/a/i" != oh(lh, "i");
  }))) {
    for (var fh = function fh(e, t) {
      var n,
          i = this instanceof fh,
          r = qi(e),
          a = void 0 === t;
      if (!i && r && e.constructor === fh && a) return e;
      uh ? r && !a && (e = e.source) : e instanceof fh && (a && (t = ri.call(e)), e = e.source), hh && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
      var o = Xo(uh ? new oh(e, t) : oh(e, t), i ? this : sh, fh);
      return hh && n && rh(o, {
        sticky: n
      }), o;
    }, dh = function dh(e) {
      (e in fh) || nh(fh, e, {
        configurable: !0,
        get: function get() {
          return oh[e];
        },
        set: function set(t) {
          oh[e] = t;
        }
      });
    }, ph = ih(oh), mh = 0; ph.length > mh;) {
      dh(ph[mh++]);
    }

    sh.constructor = fh, fh.prototype = sh, ee(i, "RegExp", fh);
  }

  function gh(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) {
      n[i - 1] = arguments[i];
    }

    return du(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
      return n[t].toString();
    });
  }

  Sl("RegExp");

  var vh = function vh() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString());
  },
      yh = function yh() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.toString().replace(/\w\S*/g, function (e) {
      return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
  };

  function bh() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = e.toString();
    return t = vh(t, "-", " "), t = vh(t, "_", " "), t = yh(t), vh(t, " ", "");
  }

  function wh(e) {
    var t = document.createElement("div");
    return t.appendChild(e), t.innerHTML;
  }

  var kh = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  },
      Th = function Th() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (du(e) || du(t)) return "";
    var n = ku(t.i18n, e);
    if (du(n)) return Object.keys(kh).includes(e) ? kh[e] : "";
    var i = {
      "{seektime}": t.seekTime,
      "{title}": t.title
    };
    return Object.entries(i).forEach(function (e) {
      var t = Ao(e, 2),
          i = t[0],
          r = t[1];
      n = vh(n, i, r);
    }), n;
  },
      Sh = function () {
    function e(t) {
      yo(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
    }

    return wo(e, [{
      key: "get",
      value: function value(t) {
        if (!e.supported || !this.enabled) return null;
        var n = window.localStorage.getItem(this.key);
        if (du(n)) return null;
        var i = JSON.parse(n);
        return nu(t) && t.length ? i[t] : i;
      }
    }, {
      key: "set",
      value: function value(t) {
        if (e.supported && this.enabled && eu(t)) {
          var n = this.get();
          du(n) && (n = {}), Tu(n, t), window.localStorage.setItem(this.key, JSON.stringify(n));
        }
      }
    }], [{
      key: "supported",
      get: function get() {
        try {
          if (!("localStorage" in window)) return !1;
          return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      }
    }]), e;
  }();

  function Eh(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
    return new Promise(function (n, i) {
      try {
        var r = new XMLHttpRequest();
        if (!("withCredentials" in r)) return;
        r.addEventListener("load", function () {
          if ("text" === t) try {
            n(JSON.parse(r.responseText));
          } catch (e) {
            n(r.responseText);
          } else n(r.response);
        }), r.addEventListener("error", function () {
          throw new Error(r.status);
        }), r.open("GET", e, !0), r.responseType = t, r.send();
      } catch (e) {
        i(e);
      }
    });
  }

  function Ah(e, t) {
    if (nu(e)) {
      var n = nu(t),
          i = function i() {
        return null !== document.getElementById(t);
      },
          r = function r(e, t) {
        e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e);
      };

      if (!n || !i()) {
        var a = Sh.supported,
            o = document.createElement("div");

        if (o.setAttribute("hidden", ""), n && o.setAttribute("id", t), a) {
          var s = window.localStorage.getItem("".concat("cache", "-").concat(t));

          if (null !== s) {
            var l = JSON.parse(s);
            r(o, l.content);
          }
        }

        Eh(e).then(function (e) {
          du(e) || (a && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
            content: e
          })), r(o, e));
        })["catch"](function () {});
      }
    }
  }

  var Ph = Math.ceil,
      xh = Math.floor;
  Ie({
    target: "Math",
    stat: !0
  }, {
    trunc: function trunc(e) {
      return (e > 0 ? xh : Ph)(e);
    }
  });

  var Ch = function Ch(e) {
    return Math.trunc(e / 60 / 60 % 60, 10);
  },
      Oh = function Oh(e) {
    return Math.trunc(e / 60 % 60, 10);
  },
      Ih = function Ih(e) {
    return Math.trunc(e % 60, 10);
  };

  function Lh() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!tu(e)) return Lh(void 0, t, n);

    var i = function i(e) {
      return "0".concat(e).slice(-2);
    },
        r = Ch(e),
        a = Oh(e),
        o = Ih(e);

    return r = t || r > 0 ? "".concat(r, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(r).concat(i(a), ":").concat(i(o));
  }

  var jh = {
    getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || gu.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors: e
      };
    },
    findElements: function findElements() {
      try {
        return this.elements.controls = _u.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
          play: Mu.call(this, this.config.selectors.buttons.play),
          pause: _u.call(this, this.config.selectors.buttons.pause),
          restart: _u.call(this, this.config.selectors.buttons.restart),
          rewind: _u.call(this, this.config.selectors.buttons.rewind),
          fastForward: _u.call(this, this.config.selectors.buttons.fastForward),
          mute: _u.call(this, this.config.selectors.buttons.mute),
          pip: _u.call(this, this.config.selectors.buttons.pip),
          airplay: _u.call(this, this.config.selectors.buttons.airplay),
          settings: _u.call(this, this.config.selectors.buttons.settings),
          captions: _u.call(this, this.config.selectors.buttons.captions),
          fullscreen: _u.call(this, this.config.selectors.buttons.fullscreen)
        }, this.elements.progress = _u.call(this, this.config.selectors.progress), this.elements.inputs = {
          seek: _u.call(this, this.config.selectors.inputs.seek),
          volume: _u.call(this, this.config.selectors.inputs.volume)
        }, this.elements.display = {
          buffer: _u.call(this, this.config.selectors.display.buffer),
          currentTime: _u.call(this, this.config.selectors.display.currentTime),
          duration: _u.call(this, this.config.selectors.display.duration)
        }, su(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    },
    createIcon: function createIcon(e, t) {
      var n = jh.getIconUrl.call(this),
          i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
          r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      Eu(r, Tu(t, {
        "aria-hidden": "true",
        focusable: "false"
      }));
      var a = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          o = "".concat(i, "-").concat(e);
      return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), r.appendChild(a), r;
    },
    createLabel: function createLabel(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Th(e, this.config),
          i = So(So({}, t), {}, {
        "class": [t["class"], this.config.classNames.hidden].filter(Boolean).join(" ")
      });
      return Au("span", i, n);
    },
    createBadge: function createBadge(e) {
      if (du(e)) return null;
      var t = Au("span", {
        "class": this.config.classNames.menu.value
      });
      return t.appendChild(Au("span", {
        "class": this.config.classNames.menu.badge
      }, e)), t;
    },
    createButton: function createButton(e, t) {
      var n = this,
          i = Tu({}, t),
          r = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return (t = bh(t)).charAt(0).toLowerCase() + t.slice(1);
      }(e),
          a = {
        element: "button",
        toggle: !1,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };

      switch (["element", "icon", "label"].forEach(function (e) {
        Object.keys(i).includes(e) && (a[e] = i[e], delete i[e]);
      }), "button" !== a.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i["class"].split(" ").some(function (e) {
        return e === n.config.classNames.control;
      }) || Tu(i, {
        "class": "".concat(i["class"], " ").concat(this.config.classNames.control)
      }) : i["class"] = this.config.classNames.control, e) {
        case "play":
          a.toggle = !0, a.label = "play", a.labelPressed = "pause", a.icon = "play", a.iconPressed = "pause";
          break;

        case "mute":
          a.toggle = !0, a.label = "mute", a.labelPressed = "unmute", a.icon = "volume", a.iconPressed = "muted";
          break;

        case "captions":
          a.toggle = !0, a.label = "enableCaptions", a.labelPressed = "disableCaptions", a.icon = "captions-off", a.iconPressed = "captions-on";
          break;

        case "fullscreen":
          a.toggle = !0, a.label = "enterFullscreen", a.labelPressed = "exitFullscreen", a.icon = "enter-fullscreen", a.iconPressed = "exit-fullscreen";
          break;

        case "play-large":
          i["class"] += " ".concat(this.config.classNames.control, "--overlaid"), r = "play", a.label = "play", a.icon = "play";
          break;

        default:
          du(a.label) && (a.label = r), du(a.icon) && (a.icon = e);
      }

      var o = Au(a.element);
      return a.toggle ? (o.appendChild(jh.createIcon.call(this, a.iconPressed, {
        "class": "icon--pressed"
      })), o.appendChild(jh.createIcon.call(this, a.icon, {
        "class": "icon--not-pressed"
      })), o.appendChild(jh.createLabel.call(this, a.labelPressed, {
        "class": "label--pressed"
      })), o.appendChild(jh.createLabel.call(this, a.label, {
        "class": "label--not-pressed"
      }))) : (o.appendChild(jh.createIcon.call(this, a.icon)), o.appendChild(jh.createLabel.call(this, a.label))), Tu(i, Iu(this.config.selectors.buttons[r], i)), Eu(o, i), "play" === r ? (au(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(o)) : this.elements.buttons[r] = o, o;
    },
    createRange: function createRange(e, t) {
      var n = Au("input", Tu(Iu(this.config.selectors.inputs[e]), {
        type: "range",
        min: 0,
        max: 100,
        step: .01,
        value: 0,
        autocomplete: "off",
        role: "slider",
        "aria-label": Th(e, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, t));
      return this.elements.inputs[e] = n, jh.updateRangeFill.call(this, n), wl.setup(n), n;
    },
    createProgress: function createProgress(e, t) {
      var n = Au("progress", Tu(Iu(this.config.selectors.display[e]), {
        min: 0,
        max: 100,
        value: 0,
        role: "progressbar",
        "aria-hidden": !0
      }, t));

      if ("volume" !== e) {
        n.appendChild(Au("span", null, "0"));
        var i = {
          played: "played",
          buffer: "buffered"
        }[e],
            r = i ? Th(i, this.config) : "";
        n.innerText = "% ".concat(r.toLowerCase());
      }

      return this.elements.display[e] = n, n;
    },
    createTime: function createTime(e, t) {
      var n = Iu(this.config.selectors.display[e], t),
          i = Au("div", Tu(n, {
        "class": "".concat(n["class"] ? n["class"] : "", " ").concat(this.config.classNames.display.time, " ").trim(),
        "aria-label": Th(e, this.config)
      }), "00:00");
      return this.elements.display[e] = i, i;
    },
    bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
      var n = this;
      Vu.call(this, e, "keydown keyup", function (i) {
        if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
          var r,
              a = Ru(e, '[role="menuitemradio"]');
          if (!a && [32, 39].includes(i.which)) jh.showMenuPanel.call(n, t, !0);else 32 !== i.which && (40 === i.which || a && 39 === i.which ? (r = e.nextElementSibling, su(r) || (r = e.parentNode.firstElementChild)) : (r = e.previousElementSibling, su(r) || (r = e.parentNode.lastElementChild)), Uu.call(n, r, !0));
        }
      }, !1), Vu.call(this, e, "keyup", function (e) {
        13 === e.which && jh.focusFirstMenuItem.call(n, null, !0);
      });
    },
    createMenuItem: function createMenuItem(e) {
      var t = this,
          n = e.value,
          i = e.list,
          r = e.type,
          a = e.title,
          o = e.badge,
          s = void 0 === o ? null : o,
          l = e.checked,
          c = void 0 !== l && l,
          u = Iu(this.config.selectors.inputs[r]),
          h = Au("button", Tu(u, {
        type: "button",
        role: "menuitemradio",
        "class": "".concat(this.config.classNames.control, " ").concat(u["class"] ? u["class"] : "").trim(),
        "aria-checked": c,
        value: n
      })),
          f = Au("span");
      f.innerHTML = a, su(s) && f.appendChild(s), h.appendChild(f), Object.defineProperty(h, "checked", {
        enumerable: !0,
        get: function get() {
          return "true" === h.getAttribute("aria-checked");
        },
        set: function set(e) {
          e && Array.from(h.parentNode.children).filter(function (e) {
            return Ru(e, '[role="menuitemradio"]');
          }).forEach(function (e) {
            return e.setAttribute("aria-checked", "false");
          }), h.setAttribute("aria-checked", e ? "true" : "false");
        }
      }), this.listeners.bind(h, "click keyup", function (e) {
        if (!cu(e) || 32 === e.which) {
          switch (e.preventDefault(), e.stopPropagation(), h.checked = !0, r) {
            case "language":
              t.currentTrack = Number(n);
              break;

            case "quality":
              t.quality = n;
              break;

            case "speed":
              t.speed = parseFloat(n);
          }

          jh.showMenuPanel.call(t, "home", cu(e));
        }
      }, r, !1), jh.bindMenuItemShortcuts.call(this, h, r), i.appendChild(h);
    },
    formatTime: function formatTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!tu(e)) return e;
      var n = Ch(this.duration) > 0;
      return Lh(e, n, t);
    },
    updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      su(e) && tu(t) && (e.innerText = jh.formatTime(t, n));
    },
    updateVolume: function updateVolume() {
      this.supported.ui && (su(this.elements.inputs.volume) && jh.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), su(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
    },
    setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      su(e) && (e.value = t, jh.updateRangeFill.call(this, e));
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (this.supported.ui && lu(e)) {
        var n = 0;
        if (e) switch (e.type) {
          case "timeupdate":
          case "seeking":
          case "seeked":
            n = function (e, t) {
              return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2);
            }(this.currentTime, this.duration), "timeupdate" === e.type && jh.setRange.call(this, this.elements.inputs.seek, n);
            break;

          case "playing":
          case "progress":
            !function (e, n) {
              var i = tu(n) ? n : 0,
                  r = su(e) ? e : t.elements.display.buffer;

              if (su(r)) {
                r.value = i;
                var a = r.getElementsByTagName("span")[0];
                su(a) && (a.childNodes[0].nodeValue = i);
              }
            }(this.elements.display.buffer, 100 * this.buffered);
        }
      }
    },
    updateRangeFill: function updateRangeFill(e) {
      var t = lu(e) ? e.target : e;

      if (su(t) && "range" === t.getAttribute("type")) {
        if (Ru(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);
          var n = jh.formatTime(this.currentTime),
              i = jh.formatTime(this.duration),
              r = Th("seekLabel", this.config);
          t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i));
        } else if (Ru(t, this.config.selectors.inputs.volume)) {
          var a = 100 * t.value;
          t.setAttribute("aria-valuenow", a), t.setAttribute("aria-valuetext", "".concat(a.toFixed(1), "%"));
        } else t.setAttribute("aria-valuenow", t.value);

        gu.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"));
      }
    },
    updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;

      if (this.config.tooltips.seek && su(this.elements.inputs.seek) && su(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var n = "".concat(this.config.classNames.tooltip, "--visible"),
            i = function i(e) {
          return ju(t.elements.display.seekTooltip, n, e);
        };

        if (this.touch) i(!1);else {
          var r = 0,
              a = this.elements.progress.getBoundingClientRect();
          if (lu(e)) r = 100 / a.width * (e.pageX - a.left);else {
            if (!Nu(this.elements.display.seekTooltip, n)) return;
            r = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }
          r < 0 ? r = 0 : r > 100 && (r = 100), jh.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * r), this.elements.display.seekTooltip.style.left = "".concat(r, "%"), lu(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type);
        }
      }
    },
    timeUpdate: function timeUpdate(e) {
      var t = !su(this.elements.display.duration) && this.config.invertTime;
      jh.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || jh.updateProgress.call(this, e);
    },
    durationUpdate: function durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        if (this.duration >= Math.pow(2, 32)) return Lu(this.elements.display.currentTime, !0), void Lu(this.elements.progress, !0);
        su(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
        var e = su(this.elements.display.duration);
        !e && this.config.displayDuration && this.paused && jh.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && jh.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), jh.updateSeekTooltip.call(this);
      }
    },
    toggleMenuButton: function toggleMenuButton(e, t) {
      Lu(this.elements.settings.buttons[e], !t);
    },
    updateSetting: function updateSetting(e, t, n) {
      var i = this.elements.settings.panels[e],
          r = null,
          a = t;
      if ("captions" === e) r = this.currentTrack;else {
        if (r = du(n) ? this[e] : n, du(r) && (r = this.config[e]["default"]), !du(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(e));
        if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(e));
      }

      if (su(a) || (a = i && i.querySelector('[role="menu"]')), su(a)) {
        this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = jh.getLabel.call(this, e, r);
        var o = a && a.querySelector('[value="'.concat(r, '"]'));
        su(o) && (o.checked = !0);
      }
    },
    getLabel: function getLabel(e, t) {
      switch (e) {
        case "speed":
          return 1 === t ? Th("normal", this.config) : "".concat(t, "&times;");

        case "quality":
          if (tu(t)) {
            var n = Th("qualityLabel.".concat(t), this.config);
            return n.length ? n : "".concat(t, "p");
          }

          return yh(t);

        case "captions":
          return Mh.getLabel.call(this);

        default:
          return null;
      }
    },
    setQualityMenu: function setQualityMenu(e) {
      var t = this;

      if (su(this.elements.settings.panels.quality)) {
        var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
        au(e) && (this.options.quality = th(e).filter(function (e) {
          return t.config.quality.options.includes(e);
        }));
        var i = !du(this.options.quality) && this.options.quality.length > 1;

        if (jh.toggleMenuButton.call(this, "quality", i), Cu(n), jh.checkMenu.call(this), i) {
          var r = function r(e) {
            var n = Th("qualityBadge.".concat(e), t.config);
            return n.length ? jh.createBadge.call(t, n) : null;
          };

          this.options.quality.sort(function (e, n) {
            var i = t.config.quality.options;
            return i.indexOf(e) > i.indexOf(n) ? 1 : -1;
          }).forEach(function (e) {
            jh.createMenuItem.call(t, {
              value: e,
              list: n,
              type: "quality",
              title: jh.getLabel.call(t, "quality", e),
              badge: r(e)
            });
          }), jh.updateSetting.call(this, "quality", n);
        }
      }
    },
    setCaptionsMenu: function setCaptionsMenu() {
      var e = this;

      if (su(this.elements.settings.panels.captions)) {
        var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
            n = Mh.getTracks.call(this),
            i = Boolean(n.length);

        if (jh.toggleMenuButton.call(this, "captions", i), Cu(t), jh.checkMenu.call(this), i) {
          var r = n.map(function (n, i) {
            return {
              value: i,
              checked: e.captions.toggled && e.currentTrack === i,
              title: Mh.getLabel.call(e, n),
              badge: n.language && jh.createBadge.call(e, n.language.toUpperCase()),
              list: t,
              type: "language"
            };
          });
          r.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: Th("disabled", this.config),
            list: t,
            type: "language"
          }), r.forEach(jh.createMenuItem.bind(this)), jh.updateSetting.call(this, "captions", t);
        }
      }
    },
    setSpeedMenu: function setSpeedMenu() {
      var e = this;

      if (su(this.elements.settings.panels.speed)) {
        var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(function (t) {
          return t >= e.minimumSpeed && t <= e.maximumSpeed;
        });
        var n = !du(this.options.speed) && this.options.speed.length > 1;
        jh.toggleMenuButton.call(this, "speed", n), Cu(t), jh.checkMenu.call(this), n && (this.options.speed.forEach(function (n) {
          jh.createMenuItem.call(e, {
            value: n,
            list: t,
            type: "speed",
            title: jh.getLabel.call(e, "speed", n)
          });
        }), jh.updateSetting.call(this, "speed", t));
      }
    },
    checkMenu: function checkMenu() {
      var e = this.elements.settings.buttons,
          t = !du(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });
      Lu(this.elements.settings.menu, !t);
    },
    focusFirstMenuItem: function focusFirstMenuItem(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

      if (!this.elements.settings.popup.hidden) {
        var n = e;
        su(n) || (n = Object.values(this.elements.settings.panels).find(function (e) {
          return !e.hidden;
        }));
        var i = n.querySelector('[role^="menuitem"]');
        Uu.call(this, i, t);
      }
    },
    toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.popup,
          n = this.elements.buttons.settings;

      if (su(t) && su(n)) {
        var i = t.hidden,
            r = i;
        if (iu(e)) r = e;else if (cu(e) && 27 === e.which) r = !1;else if (lu(e)) {
          var a = ru(e.composedPath) ? e.composedPath()[0] : e.target,
              o = t.contains(a);
          if (o || !o && e.target !== n && r) return;
        }
        n.setAttribute("aria-expanded", r), Lu(t, !r), ju(this.elements.container, this.config.classNames.menu.open, r), r && cu(e) ? jh.focusFirstMenuItem.call(this, null, !0) : r || i || Uu.call(this, n, cu(e));
      }
    },
    getMenuSize: function getMenuSize(e) {
      var t = e.cloneNode(!0);
      t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
      var n = t.scrollWidth,
          i = t.scrollHeight;
      return xu(t), {
        width: n,
        height: i
      };
    },
    showMenuPanel: function showMenuPanel() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));

      if (su(i)) {
        var r = i.parentNode,
            a = Array.from(r.children).find(function (e) {
          return !e.hidden;
        });

        if (qu.transitions && !qu.reducedMotion) {
          r.style.width = "".concat(a.scrollWidth, "px"), r.style.height = "".concat(a.scrollHeight, "px");

          var o = jh.getMenuSize.call(this, i),
              s = function t(n) {
            n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", zu.call(e, r, pu, t));
          };

          Vu.call(this, r, pu, s), r.style.width = "".concat(o.width, "px"), r.style.height = "".concat(o.height, "px");
        }

        Lu(a, !0), Lu(i, !1), jh.focusFirstMenuItem.call(this, i, n);
      }
    },
    setDownloadUrl: function setDownloadUrl() {
      var e = this.elements.buttons.download;
      su(e) && e.setAttribute("href", this.download);
    },
    create: function create(e) {
      var t = this,
          n = jh.bindMenuItemShortcuts,
          i = jh.createButton,
          r = jh.createProgress,
          a = jh.createRange,
          o = jh.createTime,
          s = jh.setQualityMenu,
          l = jh.setSpeedMenu,
          c = jh.showMenuPanel;
      this.elements.controls = null, au(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
      var u = Au("div", Iu(this.config.selectors.controls.wrapper));
      this.elements.controls = u;
      var h = {
        "class": "plyr__controls__item"
      };
      return th(au(this.config.controls) ? this.config.controls : []).forEach(function (s) {
        if ("restart" === s && u.appendChild(i.call(t, "restart", h)), "rewind" === s && u.appendChild(i.call(t, "rewind", h)), "play" === s && u.appendChild(i.call(t, "play", h)), "fast-forward" === s && u.appendChild(i.call(t, "fast-forward", h)), "progress" === s) {
          var l = Au("div", {
            "class": "".concat(h["class"], " plyr__progress__container")
          }),
              f = Au("div", Iu(t.config.selectors.progress));

          if (f.appendChild(a.call(t, "seek", {
            id: "plyr-seek-".concat(e.id)
          })), f.appendChild(r.call(t, "buffer")), t.config.tooltips.seek) {
            var d = Au("span", {
              "class": t.config.classNames.tooltip
            }, "00:00");
            f.appendChild(d), t.elements.display.seekTooltip = d;
          }

          t.elements.progress = f, l.appendChild(t.elements.progress), u.appendChild(l);
        }

        if ("current-time" === s && u.appendChild(o.call(t, "currentTime", h)), "duration" === s && u.appendChild(o.call(t, "duration", h)), "mute" === s || "volume" === s) {
          var p = t.elements.volume;

          if (su(p) && u.contains(p) || (p = Au("div", Tu({}, h, {
            "class": "".concat(h["class"], " plyr__volume").trim()
          })), t.elements.volume = p, u.appendChild(p)), "mute" === s && p.appendChild(i.call(t, "mute")), "volume" === s && !gu.isIos) {
            var m = {
              max: 1,
              step: .05,
              value: t.config.volume
            };
            p.appendChild(a.call(t, "volume", Tu(m, {
              id: "plyr-volume-".concat(e.id)
            })));
          }
        }

        if ("captions" === s && u.appendChild(i.call(t, "captions", h)), "settings" === s && !du(t.config.settings)) {
          var g = Au("div", Tu({}, h, {
            "class": "".concat(h["class"], " plyr__menu").trim(),
            hidden: ""
          }));
          g.appendChild(i.call(t, "settings", {
            "aria-haspopup": !0,
            "aria-controls": "plyr-settings-".concat(e.id),
            "aria-expanded": !1
          }));
          var v = Au("div", {
            "class": "plyr__menu__container",
            id: "plyr-settings-".concat(e.id),
            hidden: ""
          }),
              y = Au("div"),
              b = Au("div", {
            id: "plyr-settings-".concat(e.id, "-home")
          }),
              w = Au("div", {
            role: "menu"
          });
          b.appendChild(w), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach(function (i) {
            var r = Au("button", Tu(Iu(t.config.selectors.buttons.settings), {
              type: "button",
              "class": "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
              role: "menuitem",
              "aria-haspopup": !0,
              hidden: ""
            }));
            n.call(t, r, i), Vu.call(t, r, "click", function () {
              c.call(t, i, !1);
            });
            var a = Au("span", null, Th(i, t.config)),
                o = Au("span", {
              "class": t.config.classNames.menu.value
            });
            o.innerHTML = e[i], a.appendChild(o), r.appendChild(a), w.appendChild(r);
            var s = Au("div", {
              id: "plyr-settings-".concat(e.id, "-").concat(i),
              hidden: ""
            }),
                l = Au("button", {
              type: "button",
              "class": "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
            });
            l.appendChild(Au("span", {
              "aria-hidden": !0
            }, Th(i, t.config))), l.appendChild(Au("span", {
              "class": t.config.classNames.hidden
            }, Th("menuBack", t.config))), Vu.call(t, s, "keydown", function (e) {
              37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0));
            }, !1), Vu.call(t, l, "click", function () {
              c.call(t, "home", !1);
            }), s.appendChild(l), s.appendChild(Au("div", {
              role: "menu"
            })), y.appendChild(s), t.elements.settings.buttons[i] = r, t.elements.settings.panels[i] = s;
          }), v.appendChild(y), g.appendChild(v), u.appendChild(g), t.elements.settings.popup = v, t.elements.settings.menu = g;
        }

        if ("pip" === s && qu.pip && u.appendChild(i.call(t, "pip", h)), "airplay" === s && qu.airplay && u.appendChild(i.call(t, "airplay", h)), "download" === s) {
          var k = Tu({}, h, {
            element: "a",
            href: t.download,
            target: "_blank"
          });
          t.isHTML5 && (k.download = "");
          var T = t.config.urls.download;
          !fu(T) && t.isEmbed && Tu(k, {
            icon: "logo-".concat(t.provider),
            label: t.provider
          }), u.appendChild(i.call(t, "download", k));
        }

        "fullscreen" === s && u.appendChild(i.call(t, "fullscreen", h));
      }), this.isHTML5 && s.call(this, eh.getQualityOptions.call(this)), l.call(this), u;
    },
    inject: function inject() {
      var e = this;

      if (this.config.loadSprite) {
        var t = jh.getIconUrl.call(this);
        t.cors && Ah(t.url, "sprite-plyr");
      }

      this.id = Math.floor(1e4 * Math.random());
      var n = null;
      this.elements.controls = null;
      var i = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      },
          r = !0;
      ru(this.config.controls) && (this.config.controls = this.config.controls.call(this, i)), this.config.controls || (this.config.controls = []), su(this.config.controls) || nu(this.config.controls) ? n = this.config.controls : (n = jh.create.call(this, {
        id: this.id,
        seektime: this.config.seekTime,
        speed: this.speed,
        quality: this.quality,
        captions: Mh.getLabel.call(this)
      }), r = !1);
      var a, o;

      if (r && nu(this.config.controls) && (a = n, Object.entries(i).forEach(function (e) {
        var t = Ao(e, 2),
            n = t[0],
            i = t[1];
        a = vh(a, "{".concat(n, "}"), i);
      }), n = a), nu(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), su(o) || (o = this.elements.container), o[su(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), su(this.elements.controls) || jh.findElements.call(this), !du(this.elements.buttons)) {
        var s = function s(t) {
          var n = e.config.classNames.controlPressed;
          Object.defineProperty(t, "pressed", {
            enumerable: !0,
            get: function get() {
              return Nu(t, n);
            },
            set: function set() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              ju(t, n, e);
            }
          });
        };

        Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
          au(e) || ou(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e);
        });
      }

      if (gu.isEdge && mu(o), this.config.tooltips.controls) {
        var l = this.config,
            c = l.classNames,
            u = l.selectors,
            h = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(c.hidden),
            f = Mu.call(this, h);
        Array.from(f).forEach(function (t) {
          ju(t, e.config.classNames.hidden, !1), ju(t, e.config.classNames.tooltip, !0);
        });
      }
    }
  };

  function Nh(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = e;

    if (t) {
      var i = document.createElement("a");
      i.href = n, n = i.href;
    }

    try {
      return new URL(n);
    } catch (e) {
      return null;
    }
  }

  function Rh(e) {
    var t = new URLSearchParams();
    return eu(e) && Object.entries(e).forEach(function (e) {
      var n = Ao(e, 2),
          i = n[0],
          r = n[1];
      t.set(i, r);
    }), t;
  }

  var Mh = {
    setup: function setup() {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !qu.textTracks) au(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && jh.setCaptionsMenu.call(this);else {
        if (su(this.elements.captions) || (this.elements.captions = Au("div", Iu(this.config.selectors.captions)), function (e, t) {
          su(e) && su(t) && t.parentNode.insertBefore(e, t.nextSibling);
        }(this.elements.captions, this.elements.wrapper)), gu.isIE && window.URL) {
          var e = this.media.querySelectorAll("track");
          Array.from(e).forEach(function (e) {
            var t = e.getAttribute("src"),
                n = Nh(t);
            null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Eh(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            })["catch"](function () {
              xu(e);
            });
          });
        }

        var t = th((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
          return e.split("-")[0];
        })),
            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
        if ("auto" === n) n = Ao(t, 1)[0];
        var i = this.storage.get("captions");

        if (iu(i) || (i = this.config.captions.active), Object.assign(this.captions, {
          toggled: !1,
          active: i,
          language: n,
          languages: t
        }), this.isHTML5) {
          var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";
          Vu.call(this, this.media.textTracks, r, Mh.update.bind(this));
        }

        setTimeout(Mh.update.bind(this), 0);
      }
    },
    update: function update() {
      var e = this,
          t = Mh.getTracks.call(this, !0),
          n = this.captions,
          i = n.active,
          r = n.language,
          a = n.meta,
          o = n.currentTrackNode,
          s = Boolean(t.find(function (e) {
        return e.language === r;
      }));
      this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !a.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), a.set(t, {
          "default": "showing" === t.mode
        }), "showing" === t.mode && (t.mode = "hidden"), Vu.call(e, t, "cuechange", function () {
          return Mh.updateCues.call(e);
        });
      }), (s && this.language !== r || !t.includes(o)) && (Mh.setLanguage.call(this, r), Mh.toggle.call(this, i && s)), ju(this.elements.container, this.config.classNames.captions.enabled, !du(t)), au(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && jh.setCaptionsMenu.call(this);
    },
    toggle: function toggle(e) {
      var t = this,
          n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (this.supported.ui) {
        var i = this.captions.toggled,
            r = this.config.classNames.captions.active,
            a = Zc(e) ? !i : e;

        if (a !== i) {
          if (n || (this.captions.active = a, this.storage.set({
            captions: a
          })), !this.language && a && !n) {
            var o = Mh.getTracks.call(this),
                s = Mh.findTrack.call(this, [this.captions.language].concat(Po(this.captions.languages)), !0);
            return this.captions.language = s.language, void Mh.set.call(this, o.indexOf(s));
          }

          this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a), ju(this.elements.container, r, a), this.captions.toggled = a, jh.updateSetting.call(this, "captions"), Ku.call(this, this.media, a ? "captionsenabled" : "captionsdisabled");
        }

        setTimeout(function () {
          a && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden");
        });
      }
    },
    set: function set(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = Mh.getTracks.call(this);
      if (-1 !== e) {
        if (tu(e)) {
          if (e in n) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;
              var i = n[e],
                  r = i || {},
                  a = r.language;
              this.captions.currentTrackNode = i, jh.updateSetting.call(this, "captions"), t || (this.captions.language = a, this.storage.set({
                language: a
              })), this.isVimeo && this.embed.enableTextTrack(a), Ku.call(this, this.media, "languagechange");
            }

            Mh.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Mh.updateCues.call(this);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else Mh.toggle.call(this, !1, t);
    },
    setLanguage: function setLanguage(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (nu(e)) {
        var n = e.toLowerCase();
        this.captions.language = n;
        var i = Mh.getTracks.call(this),
            r = Mh.findTrack.call(this, [n]);
        Mh.set.call(this, i.indexOf(r), t);
      } else this.debug.warn("Invalid language argument", e);
    },
    getTracks: function getTracks() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = Array.from((this.media || {}).textTracks || []);
      return n.filter(function (n) {
        return !e.isHTML5 || t || e.captions.meta.has(n);
      }).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    },
    findTrack: function findTrack(e) {
      var t,
          n = this,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = Mh.getTracks.call(this),
          a = function a(e) {
        return Number((n.captions.meta.get(e) || {})["default"]);
      },
          o = Array.from(r).sort(function (e, t) {
        return a(t) - a(e);
      });

      return e.every(function (e) {
        return !(t = o.find(function (t) {
          return t.language === e;
        }));
      }), t || (i ? o[0] : void 0);
    },
    getCurrentTrack: function getCurrentTrack() {
      return Mh.getTracks.call(this)[this.currentTrack];
    },
    getLabel: function getLabel(e) {
      var t = e;
      return !uu(t) && qu.textTracks && this.captions.toggled && (t = Mh.getCurrentTrack.call(this)), uu(t) ? du(t.label) ? du(t.language) ? Th("enabled", this.config) : e.language.toUpperCase() : t.label : Th("disabled", this.config);
    },
    updateCues: function updateCues(e) {
      if (this.supported.ui) if (su(this.elements.captions)) {
        if (Zc(e) || Array.isArray(e)) {
          var t = e;

          if (!t) {
            var n = Mh.getCurrentTrack.call(this);
            t = Array.from((n || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(wh);
          }

          var i = t.map(function (e) {
            return e.trim();
          }).join("\n");

          if (i !== this.elements.captions.innerHTML) {
            Cu(this.elements.captions);
            var r = Au("span", Iu(this.config.selectors.caption));
            r.innerHTML = i, this.elements.captions.appendChild(r), Ku.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    }
  },
      _h = {
    enabled: !0,
    title: "",
    debug: !1,
    autoplay: !1,
    autopause: !0,
    playsinline: !0,
    seekTime: 10,
    volume: 1,
    muted: !1,
    duration: null,
    displayDuration: !0,
    invertTime: !0,
    toggleInvert: !0,
    ratio: null,
    clickToPlay: !0,
    hideControls: !0,
    resetOnEnd: !1,
    disableContextMenu: !0,
    loadSprite: !0,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    quality: {
      "default": 576,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: !1,
      onChange: null
    },
    loop: {
      active: !1
    },
    speed: {
      selected: 1,
      options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    keyboard: {
      focused: !0,
      global: !1
    },
    tooltips: {
      controls: !1,
      seek: !0
    },
    captions: {
      active: !1,
      language: "auto",
      update: !1
    },
    fullscreen: {
      enabled: !0,
      fallback: !0,
      iosNative: !1
    },
    storage: {
      enabled: !0,
      key: "plyr"
    },
    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
    settings: ["captions", "quality", "speed"],
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/v2/video/{0}.json"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption"
    },
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isIos: "plyr--is-ios",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      tabFocus: "plyr__tab-focus",
      previewThumbnails: {
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
      }
    },
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id"
      }
    },
    ads: {
      enabled: !1,
      publisherId: "",
      tagUrl: ""
    },
    previewThumbnails: {
      enabled: !1,
      src: ""
    },
    vimeo: {
      byline: !1,
      portrait: !1,
      title: !1,
      speed: !0,
      transparent: !1,
      premium: !1,
      referrerPolicy: null
    },
    youtube: {
      noCookie: !0,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1
    }
  },
      Uh = "picture-in-picture",
      Dh = "inline",
      Fh = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  },
      qh = "audio",
      Hh = "video";

  var Bh = function Bh() {},
      Vh = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      yo(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled");
    }

    return wo(e, [{
      key: "log",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : Bh;
      }
    }, {
      key: "warn",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : Bh;
      }
    }, {
      key: "error",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : Bh;
      }
    }]), e;
  }(),
      zh = function () {
    function e(t) {
      var n = this;
      yo(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
        x: 0,
        y: 0
      }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function (e, t) {
        return (Element.prototype.closest || function () {
          var e = this;

          do {
            if (Ru.matches(e, t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);

          return null;
        }).call(e, t);
      }(this.player.elements.container, t.config.fullscreen.container), Vu.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
        n.onChange();
      }), Vu.call(this.player, this.player.elements.container, "dblclick", function (e) {
        su(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle();
      }), Vu.call(this, this.player.elements.container, "keydown", function (e) {
        return n.trapFocus(e);
      }), this.update();
    }

    return wo(e, [{
      key: "onChange",
      value: function value() {
        if (this.enabled) {
          var e = this.player.elements.buttons.fullscreen;
          su(e) && (e.pressed = this.active), Ku.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0);
        }
      }
    }, {
      key: "toggleFallback",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

        if (e ? this.scrollPosition = {
          x: window.scrollX || 0,
          y: window.scrollY || 0
        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", ju(this.target, this.player.config.classNames.fullscreen.fallback, e), gu.isIos) {
          var t = document.head.querySelector('meta[name="viewport"]'),
              n = "viewport-fit=cover";
          t || (t = document.createElement("meta")).setAttribute("name", "viewport");
          var i = nu(t.content) && t.content.includes(n);
          e ? (this.cleanupViewport = !i, i || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter(function (e) {
            return e.trim() !== n;
          }).join(","));
        }

        this.onChange();
      }
    }, {
      key: "trapFocus",
      value: function value(e) {
        if (!gu.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
          var t = document.activeElement,
              n = Mu.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
              i = Ao(n, 1)[0],
              r = n[n.length - 1];
          t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault());
        }
      }
    }, {
      key: "update",
      value: function value() {
        var t;
        this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e["native"] ? "Native" : "Fallback", this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
        ju(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      }
    }, {
      key: "enter",
      value: function value() {
        this.enabled && (gu.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e["native"] || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? du(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
          navigationUI: "hide"
        }));
      }
    }, {
      key: "exit",
      value: function value() {
        if (this.enabled) if (gu.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), Gu(this.player.play());else if (!e["native"] || this.forceFallback) this.toggleFallback(!1);else if (this.prefix) {
          if (!du(this.prefix)) {
            var t = "moz" === this.prefix ? "Cancel" : "Exit";
            document["".concat(this.prefix).concat(t).concat(this.property)]();
          }
        } else (document.cancelFullScreen || document.exitFullscreen).call(document);
      }
    }, {
      key: "toggle",
      value: function value() {
        this.active ? this.exit() : this.enter();
      }
    }, {
      key: "usingNative",
      get: function get() {
        return e["native"] && !this.forceFallback;
      }
    }, {
      key: "enabled",
      get: function get() {
        return (e["native"] || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      }
    }, {
      key: "active",
      get: function get() {
        if (!this.enabled) return !1;
        if (!e["native"] || this.forceFallback) return Nu(this.target, this.player.config.classNames.fullscreen.fallback);
        var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
        return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target;
      }
    }, {
      key: "target",
      get: function get() {
        return gu.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
      }
    }], [{
      key: "native",
      get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      }
    }, {
      key: "prefix",
      get: function get() {
        if (ru(document.exitFullscreen)) return "";
        var e = "";
        return ["webkit", "moz", "ms"].some(function (t) {
          return !(!ru(document["".concat(t, "ExitFullscreen")]) && !ru(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
        }), e;
      }
    }, {
      key: "property",
      get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
    }]), e;
  }(),
      Wh = Math.sign || function (e) {
    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
  };

  function Kh(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return new Promise(function (n, i) {
      var r = new Image(),
          a = function a() {
        delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r);
      };

      Object.assign(r, {
        onload: a,
        onerror: a,
        src: e
      });
    });
  }

  Ie({
    target: "Math",
    stat: !0
  }, {
    sign: Wh
  });

  var $h = {
    addStyleHook: function addStyleHook() {
      ju(this.elements.container, this.config.selectors.container.replace(".", ""), !0), ju(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    toggleNativeControls: function toggleNativeControls() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    },
    build: function build() {
      var e = this;
      if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void $h.toggleNativeControls.call(this, !0);
      su(this.elements.controls) || (jh.inject.call(this), this.listeners.controls()), $h.toggleNativeControls.call(this), this.isHTML5 && Mh.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, jh.updateVolume.call(this), jh.timeUpdate.call(this), $h.checkPlaying.call(this), ju(this.elements.container, this.config.classNames.pip.supported, qu.pip && this.isHTML5 && this.isVideo), ju(this.elements.container, this.config.classNames.airplay.supported, qu.airplay && this.isHTML5), ju(this.elements.container, this.config.classNames.isIos, gu.isIos), ju(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        Ku.call(e, e.media, "ready");
      }, 0), $h.setTitle.call(this), this.poster && $h.setPoster.call(this, this.poster, !1)["catch"](function () {}), this.config.duration && jh.durationUpdate.call(this);
    },
    setTitle: function setTitle() {
      var e = Th("play", this.config);

      if (nu(this.config.title) && !du(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = _u.call(this, "iframe");

        if (!su(t)) return;
        var n = du(this.config.title) ? "video" : this.config.title,
            i = Th("frameTitle", this.config);
        t.setAttribute("title", i.replace("{title}", n));
      }
    },
    togglePoster: function togglePoster(e) {
      ju(this.elements.container, this.config.classNames.posterEnabled, e);
    },
    setPoster: function setPoster(e) {
      var t = this,
          n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), Yu.call(this).then(function () {
        return Kh(e);
      })["catch"](function (n) {
        throw e === t.poster && $h.togglePoster.call(t, !1), n;
      }).then(function () {
        if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
      }).then(function () {
        return Object.assign(t.elements.poster.style, {
          backgroundImage: "url('".concat(e, "')"),
          backgroundSize: ""
        }), $h.togglePoster.call(t, !0), e;
      }));
    },
    checkPlaying: function checkPlaying(e) {
      var t = this;
      ju(this.elements.container, this.config.classNames.playing, this.playing), ju(this.elements.container, this.config.classNames.paused, this.paused), ju(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
        Object.assign(e, {
          pressed: t.playing
        }), e.setAttribute("aria-label", Th(t.playing ? "pause" : "play", t.config));
      }), lu(e) && "timeupdate" === e.type || $h.toggleControls.call(this);
    },
    checkLoading: function checkLoading(e) {
      var t = this;
      this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        ju(t.elements.container, t.config.classNames.loading, t.loading), $h.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    },
    toggleControls: function toggleControls(e) {
      var t = this.elements.controls;

      if (t && this.config.hideControls) {
        var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n));
      }
    },
    migrateStyles: function migrateStyles() {
      var e = this;
      Object.values(So({}, this.media.style)).filter(function (e) {
        return !du(e) && e.startsWith("--plyr");
      }).forEach(function (t) {
        e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t);
      }), du(this.media.style) && this.media.removeAttribute("style");
    }
  },
      Yh = function () {
    function e(t) {
      yo(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }

    return wo(e, [{
      key: "handleKey",
      value: function value(e) {
        var t = this.player,
            n = t.elements,
            i = e.keyCode ? e.keyCode : e.which,
            r = "keydown" === e.type,
            a = r && i === this.lastKey;

        if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && tu(i)) {
          if (r) {
            var o = document.activeElement;

            if (su(o)) {
              var s = t.config.selectors.editable;
              if (o !== n.inputs.seek && Ru(o, s)) return;
              if (32 === e.which && Ru(o, 'button, [role^="menuitem"]')) return;
            }

            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                a || (t.currentTime = t.duration / 10 * (i - 48));
                break;

              case 32:
              case 75:
                a || Gu(t.togglePlay());
                break;

              case 38:
                t.increaseVolume(.1);
                break;

              case 40:
                t.decreaseVolume(.1);
                break;

              case 77:
                a || (t.muted = !t.muted);
                break;

              case 39:
                t.forward();
                break;

              case 37:
                t.rewind();
                break;

              case 70:
                t.fullscreen.toggle();
                break;

              case 67:
                a || t.toggleCaptions();
                break;

              case 76:
                t.loop = !t.loop;
            }

            27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i;
          } else this.lastKey = null;
        }
      }
    }, {
      key: "toggleMenu",
      value: function value(e) {
        jh.toggleMenu.call(this.player, e);
      }
    }, {
      key: "firstTouch",
      value: function value() {
        var e = this.player,
            t = e.elements;
        e.touch = !0, ju(t.container, e.config.classNames.isTouch, !0);
      }
    }, {
      key: "setTabFocus",
      value: function value(e) {
        var t = this.player,
            n = t.elements;

        if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
          "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
          var i,
              r = e.timeStamp - this.lastKeyDown <= 20;
          if ("focus" !== e.type || r) i = t.config.classNames.tabFocus, ju(Mu.call(t, ".".concat(i)), i, !1), "focusout" !== e.type && (this.focusTimer = setTimeout(function () {
            var e = document.activeElement;
            n.container.contains(e) && ju(document.activeElement, t.config.classNames.tabFocus, !0);
          }, 10));
        }
      }
    }, {
      key: "global",
      value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this.player;
        t.config.keyboard.global && Bu.call(t, window, "keydown keyup", this.handleKey, e, !1), Bu.call(t, document.body, "click", this.toggleMenu, e), Wu.call(t, document.body, "touchstart", this.firstTouch), Bu.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0);
      }
    }, {
      key: "container",
      value: function value() {
        var e = this.player,
            t = e.config,
            n = e.elements,
            i = e.timers;
        !t.keyboard.global && t.keyboard.focused && Vu.call(e, n.container, "keydown keyup", this.handleKey, !1), Vu.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
          var r = n.controls;
          r && "enterfullscreen" === t.type && (r.pressed = !1, r.hover = !1);
          var a = 0;
          ["touchstart", "touchmove", "mousemove"].includes(t.type) && ($h.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout(function () {
            return $h.toggleControls.call(e, !1);
          }, a);
        });

        var r = function r(t) {
          if (!t) return Zu.call(e);
          var i = n.container.getBoundingClientRect(),
              r = i.width,
              a = i.height;
          return Zu.call(e, "".concat(r, ":").concat(a));
        },
            a = function a() {
          clearTimeout(i.resized), i.resized = setTimeout(r, 50);
        };

        Vu.call(e, n.container, "enterfullscreen exitfullscreen", function (t) {
          var i = e.fullscreen,
              o = i.target,
              s = i.usingNative;

          if (o === n.container && (e.isEmbed || !du(e.config.ratio))) {
            var l = "enterfullscreen" === t.type,
                c = r(l);
            c.padding;
            !function (t, n, i) {
              if (e.isVimeo && !e.config.vimeo.premium) {
                var r = e.elements.wrapper.firstChild,
                    a = Ao(t, 2)[1],
                    o = Ao(Ju.call(e), 2),
                    s = o[0],
                    l = o[1];
                r.style.maxWidth = i ? "".concat(a / l * s, "px") : null, r.style.margin = i ? "0 auto" : null;
              }
            }(c.ratio, 0, l), s || (l ? Vu.call(e, window, "resize", a) : zu.call(e, window, "resize", a));
          }
        });
      }
    }, {
      key: "media",
      value: function value() {
        var e = this,
            t = this.player,
            n = t.elements;

        if (Vu.call(t, t.media, "timeupdate seeking seeked", function (e) {
          return jh.timeUpdate.call(t, e);
        }), Vu.call(t, t.media, "durationchange loadeddata loadedmetadata", function (e) {
          return jh.durationUpdate.call(t, e);
        }), Vu.call(t, t.media, "ended", function () {
          t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause());
        }), Vu.call(t, t.media, "progress playing seeking seeked", function (e) {
          return jh.updateProgress.call(t, e);
        }), Vu.call(t, t.media, "volumechange", function (e) {
          return jh.updateVolume.call(t, e);
        }), Vu.call(t, t.media, "playing play pause ended emptied timeupdate", function (e) {
          return $h.checkPlaying.call(t, e);
        }), Vu.call(t, t.media, "waiting canplay seeked playing", function (e) {
          return $h.checkLoading.call(t, e);
        }), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
          var i = _u.call(t, ".".concat(t.config.classNames.video));

          if (!su(i)) return;
          Vu.call(t, n.container, "click", function (r) {
            ([n.container, i].includes(r.target) || i.contains(r.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(r, t.restart, "restart"), e.proxy(r, function () {
              Gu(t.play());
            }, "play")) : e.proxy(r, function () {
              Gu(t.togglePlay());
            }, "play")));
          });
        }

        t.supported.ui && t.config.disableContextMenu && Vu.call(t, n.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), Vu.call(t, t.media, "volumechange", function () {
          t.storage.set({
            volume: t.volume,
            muted: t.muted
          });
        }), Vu.call(t, t.media, "ratechange", function () {
          jh.updateSetting.call(t, "speed"), t.storage.set({
            speed: t.speed
          });
        }), Vu.call(t, t.media, "qualitychange", function (e) {
          jh.updateSetting.call(t, "quality", null, e.detail.quality);
        }), Vu.call(t, t.media, "ready qualitychange", function () {
          jh.setDownloadUrl.call(t);
        });
        var r = t.config.events.concat(["keyup", "keydown"]).join(" ");
        Vu.call(t, t.media, r, function (e) {
          var i = e.detail,
              r = void 0 === i ? {} : i;
          "error" === e.type && (r = t.media.error), Ku.call(t, n.container, e.type, !0, r);
        });
      }
    }, {
      key: "proxy",
      value: function value(e, t, n) {
        var i = this.player,
            r = i.config.listeners[n],
            a = !0;
        ru(r) && (a = r.call(i, e)), !1 !== a && ru(t) && t.call(i, e);
      }
    }, {
      key: "bind",
      value: function value(e, t, n, i) {
        var r = this,
            a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            o = this.player,
            s = o.config.listeners[i],
            l = ru(s);
        Vu.call(o, e, t, function (e) {
          return r.proxy(e, n, i);
        }, a && !l);
      }
    }, {
      key: "controls",
      value: function value() {
        var e = this,
            t = this.player,
            n = t.elements,
            i = gu.isIE ? "change" : "input";

        if (n.buttons.play && Array.from(n.buttons.play).forEach(function (n) {
          e.bind(n, "click", function () {
            Gu(t.togglePlay());
          }, "play");
        }), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", function () {
          t.muted = !t.muted;
        }, "mute"), this.bind(n.buttons.captions, "click", function () {
          return t.toggleCaptions();
        }), this.bind(n.buttons.download, "click", function () {
          Ku.call(t, t.media, "download");
        }, "download"), this.bind(n.buttons.fullscreen, "click", function () {
          t.fullscreen.toggle();
        }, "fullscreen"), this.bind(n.buttons.pip, "click", function () {
          t.pip = "toggle";
        }, "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", function (e) {
          e.stopPropagation(), e.preventDefault(), jh.toggleMenu.call(t, e);
        }, null, !1), this.bind(n.buttons.settings, "keyup", function (e) {
          var n = e.which;
          [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), jh.toggleMenu.call(t, e)) : jh.focusFirstMenuItem.call(t, null, !0));
        }, null, !1), this.bind(n.settings.menu, "keydown", function (e) {
          27 === e.which && jh.toggleMenu.call(t, e);
        }), this.bind(n.inputs.seek, "mousedown mousemove", function (e) {
          var t = n.progress.getBoundingClientRect(),
              i = 100 / t.width * (e.pageX - t.left);
          e.currentTarget.setAttribute("seek-value", i);
        }), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
          var n = e.currentTarget,
              i = e.keyCode ? e.keyCode : e.which;

          if (!cu(e) || 39 === i || 37 === i) {
            t.lastSeekTime = Date.now();
            var r = n.hasAttribute("play-on-seeked"),
                a = ["mouseup", "touchend", "keyup"].includes(e.type);
            r && a ? (n.removeAttribute("play-on-seeked"), Gu(t.play())) : !a && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause());
          }
        }), gu.isIos) {
          var r = Mu.call(t, 'input[type="range"]');
          Array.from(r).forEach(function (t) {
            return e.bind(t, i, function (e) {
              return mu(e.target);
            });
          });
        }

        this.bind(n.inputs.seek, i, function (e) {
          var n = e.currentTarget,
              i = n.getAttribute("seek-value");
          du(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration;
        }, "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", function (e) {
          return jh.updateSeekTooltip.call(t, e);
        }), this.bind(n.progress, "mousemove touchmove", function (e) {
          var n = t.previewThumbnails;
          n && n.loaded && n.startMove(e);
        }), this.bind(n.progress, "mouseleave touchend click", function () {
          var e = t.previewThumbnails;
          e && e.loaded && e.endMove(!1, !0);
        }), this.bind(n.progress, "mousedown touchstart", function (e) {
          var n = t.previewThumbnails;
          n && n.loaded && n.startScrubbing(e);
        }), this.bind(n.progress, "mouseup touchend", function (e) {
          var n = t.previewThumbnails;
          n && n.loaded && n.endScrubbing(e);
        }), gu.isWebkit && Array.from(Mu.call(t, 'input[type="range"]')).forEach(function (n) {
          e.bind(n, "input", function (e) {
            return jh.updateRangeFill.call(t, e.target);
          });
        }), t.config.toggleInvert && !su(n.display.duration) && this.bind(n.display.currentTime, "click", function () {
          0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, jh.timeUpdate.call(t));
        }), this.bind(n.inputs.volume, i, function (e) {
          t.volume = e.target.value;
        }, "volume"), this.bind(n.controls, "mouseenter mouseleave", function (e) {
          n.controls.hover = !t.touch && "mouseenter" === e.type;
        }), n.fullscreen && Array.from(n.fullscreen.children).filter(function (e) {
          return !e.contains(n.container);
        }).forEach(function (i) {
          e.bind(i, "mouseenter mouseleave", function (e) {
            n.controls.hover = !t.touch && "mouseenter" === e.type;
          });
        }), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
          n.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
        }), this.bind(n.controls, "focusin", function () {
          var i = t.config,
              r = t.timers;
          ju(n.controls, i.classNames.noTransition, !0), $h.toggleControls.call(t, !0), setTimeout(function () {
            ju(n.controls, i.classNames.noTransition, !1);
          }, 0);
          var a = e.touch ? 3e3 : 4e3;
          clearTimeout(r.controls), r.controls = setTimeout(function () {
            return $h.toggleControls.call(t, !1);
          }, a);
        }), this.bind(n.inputs.volume, "wheel", function (e) {
          var n = e.webkitDirectionInvertedFromDevice,
              i = Ao([e.deltaX, -e.deltaY].map(function (e) {
            return n ? -e : e;
          }), 2),
              r = i[0],
              a = i[1],
              o = Math.sign(Math.abs(r) > Math.abs(a) ? r : a);
          t.increaseVolume(o / 50);
          var s = t.media.volume;
          (1 === o && s < 1 || -1 === o && s > 0) && e.preventDefault();
        }, "volume", !1);
      }
    }]), e;
  }(),
      Gh = Kn("splice"),
      Xh = Qt("splice", {
    ACCESSORS: !0,
    0: 0,
    1: 2
  }),
      Qh = Math.max,
      Jh = Math.min;

  Ie({
    target: "Array",
    proto: !0,
    forced: !Gh || !Xh
  }, {
    splice: function splice(e, t) {
      var n,
          i,
          r,
          a,
          o,
          s,
          l = Re(this),
          c = le(l.length),
          u = he(e, c),
          h = arguments.length;
      if (0 === h ? n = i = 0 : 1 === h ? (n = 0, i = c - u) : (n = h - 2, i = Jh(Qh(oe(t), 0), c - u)), c + n - i > 9007199254740991) throw TypeError("Maximum allowed length exceeded");

      for (r = ot(l, i), a = 0; a < i; a++) {
        (o = u + a) in l && Fn(r, a, l[o]);
      }

      if (r.length = i, n < i) {
        for (a = u; a < c - i; a++) {
          s = a + n, (o = a + i) in l ? l[s] = l[o] : delete l[s];
        }

        for (a = c; a > c - i + n; a--) {
          delete l[a - 1];
        }
      } else if (n > i) for (a = c - i; a > u; a--) {
        s = a + n - 1, (o = a + i - 1) in l ? l[s] = l[o] : delete l[s];
      }

      for (a = 0; a < n; a++) {
        l[a + u] = arguments[a + 2];
      }

      return l.length = c - i + n, r;
    }
  });
  var Zh = t(function (e, t) {
    e.exports = function () {
      var e = function e() {},
          t = {},
          n = {},
          i = {};

      function r(e, t) {
        if (e) {
          var r = i[e];
          if (n[e] = t, r) for (; r.length;) {
            r[0](e, t), r.splice(0, 1);
          }
        }
      }

      function a(t, n) {
        t.call && (t = {
          success: t
        }), n.length ? (t.error || e)(n) : (t.success || e)(t);
      }

      function o(t, n, i, r) {
        var a,
            s,
            l = document,
            c = i.async,
            u = (i.numRetries || 0) + 1,
            h = i.before || e,
            f = t.replace(/[\?|#].*$/, ""),
            d = t.replace(/^(css|img)!/, "");
        r = r || 0, /(^css!|\.css$)/.test(f) ? ((s = l.createElement("link")).rel = "stylesheet", s.href = d, (a = "hideFocus" in s) && s.relList && (a = 0, s.rel = "preload", s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f) ? (s = l.createElement("img")).src = d : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function (e) {
          var l = e.type[0];
          if (a) try {
            s.sheet.cssText.length || (l = "e");
          } catch (e) {
            18 != e.code && (l = "e");
          }

          if ("e" == l) {
            if ((r += 1) < u) return o(t, n, i, r);
          } else if ("preload" == s.rel && "style" == s.as) return s.rel = "stylesheet";

          n(t, l, e.defaultPrevented);
        }, !1 !== h(t, s) && l.head.appendChild(s);
      }

      function s(e, n, i) {
        var s, l;

        if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
          if (s in t) throw "LoadJS";
          t[s] = !0;
        }

        function c(t, n) {
          !function (e, t, n) {
            var i,
                r,
                a = (e = e.push ? e : [e]).length,
                s = a,
                l = [];

            for (i = function i(e, n, _i2) {
              if ("e" == n && l.push(e), "b" == n) {
                if (!_i2) return;
                l.push(e);
              }

              --a || t(l);
            }, r = 0; r < s; r++) {
              o(e[r], i, n);
            }
          }(e, function (e) {
            a(l, e), t && a({
              success: t,
              error: n
            }, e), r(s, e);
          }, l);
        }

        if (l.returnPromise) return new Promise(c);
        c();
      }

      return s.ready = function (e, t) {
        return function (e, t) {
          e = e.push ? e : [e];
          var r,
              a,
              o,
              s = [],
              l = e.length,
              c = l;

          for (r = function r(e, n) {
            n.length && s.push(e), --c || t(s);
          }; l--;) {
            a = e[l], (o = n[a]) ? r(a, o) : (i[a] = i[a] || []).push(r);
          }
        }(e, function (e) {
          a(t, e);
        }), s;
      }, s.done = function (e) {
        r(e, []);
      }, s.reset = function () {
        t = {}, n = {}, i = {};
      }, s.isDefined = function (e) {
        return e in t;
      }, s;
    }();
  });

  function ef(e) {
    return new Promise(function (t, n) {
      Zh(e, {
        success: t,
        error: n
      });
    });
  }

  function tf(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ku.call(this, this.media, e ? "play" : "pause"));
  }

  var nf = {
    setup: function setup() {
      var e = this;
      ju(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Zu.call(e), eu(window.Vimeo) ? nf.ready.call(e) : ef(e.config.urls.vimeo.sdk).then(function () {
        nf.ready.call(e);
      })["catch"](function (t) {
        e.debug.warn("Vimeo SDK (player.js) failed to load", t);
      });
    },
    ready: function ready() {
      var e = this,
          t = this,
          n = t.config.vimeo,
          i = n.premium,
          r = n.referrerPolicy,
          a = Eo(n, ["premium", "referrerPolicy"]);
      i && Object.assign(a, {
        controls: !1,
        sidedock: !1
      });
      var o = Rh(So({
        loop: t.config.loop.active,
        autoplay: t.autoplay,
        muted: t.muted,
        gesture: "media",
        playsinline: !this.config.fullscreen.iosNative
      }, a)),
          s = t.media.getAttribute("src");
      du(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));
      var l,
          c = du(l = s) ? null : tu(Number(l)) ? l : l.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : l,
          u = Au("iframe"),
          h = gh(t.config.urls.vimeo.iframe, c, o);
      u.setAttribute("src", h), u.setAttribute("allowfullscreen", ""), u.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), du(r) || u.setAttribute("referrerPolicy", r);
      var f = t.poster;
      if (i) u.setAttribute("data-poster", f), t.media = Ou(u, t.media);else {
        var d = Au("div", {
          "class": t.config.classNames.embedContainer,
          "data-poster": f
        });
        d.appendChild(u), t.media = Ou(d, t.media);
      }
      Eh(gh(t.config.urls.vimeo.api, c), "json").then(function (e) {
        if (!du(e)) {
          var n = new URL(e[0].thumbnail_large);
          n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), $h.setPoster.call(t, n.href)["catch"](function () {});
        }
      }), t.embed = new window.Vimeo.Player(u, {
        autopause: t.config.autopause,
        muted: t.muted
      }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return tf.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return tf.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };
      var p = t.media.currentTime;
      Object.defineProperty(t.media, "currentTime", {
        get: function get() {
          return p;
        },
        set: function set(e) {
          var n = t.embed,
              i = t.media,
              r = t.paused,
              a = t.volume,
              o = r && !n.hasPlayed;
          i.seeking = !0, Ku.call(t, i, "seeking"), Promise.resolve(o && n.setVolume(0)).then(function () {
            return n.setCurrentTime(e);
          }).then(function () {
            return o && n.pause();
          }).then(function () {
            return o && n.setVolume(a);
          })["catch"](function () {});
        }
      });
      var m = t.config.speed.selected;
      Object.defineProperty(t.media, "playbackRate", {
        get: function get() {
          return m;
        },
        set: function set(e) {
          t.embed.setPlaybackRate(e).then(function () {
            m = e, Ku.call(t, t.media, "ratechange");
          })["catch"](function () {
            t.options.speed = [1];
          });
        }
      });
      var g = t.config.volume;
      Object.defineProperty(t.media, "volume", {
        get: function get() {
          return g;
        },
        set: function set(e) {
          t.embed.setVolume(e).then(function () {
            g = e, Ku.call(t, t.media, "volumechange");
          });
        }
      });
      var v = t.config.muted;
      Object.defineProperty(t.media, "muted", {
        get: function get() {
          return v;
        },
        set: function set(e) {
          var n = !!iu(e) && e;
          t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
            v = n, Ku.call(t, t.media, "volumechange");
          });
        }
      });
      var y,
          b = t.config.loop;
      Object.defineProperty(t.media, "loop", {
        get: function get() {
          return b;
        },
        set: function set(e) {
          var n = iu(e) ? e : t.config.loop.active;
          t.embed.setLoop(n).then(function () {
            b = n;
          });
        }
      }), t.embed.getVideoUrl().then(function (e) {
        y = e, jh.setDownloadUrl.call(t);
      })["catch"](function (t) {
        e.debug.warn(t);
      }), Object.defineProperty(t.media, "currentSrc", {
        get: function get() {
          return y;
        }
      }), Object.defineProperty(t.media, "ended", {
        get: function get() {
          return t.currentTime === t.duration;
        }
      }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (n) {
        var i = Ao(n, 2),
            r = i[0],
            a = i[1];
        t.embed.ratio = [r, a], Zu.call(e);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (n) {
        t.config.title = n, $h.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        p = e, Ku.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, Ku.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, Mh.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var n = e.cues,
            i = (void 0 === n ? [] : n).map(function (e) {
          return function (e) {
            var t = document.createDocumentFragment(),
                n = document.createElement("div");
            return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText;
          }(e.text);
        });
        Mh.updateCues.call(t, i);
      }), t.embed.on("loaded", function () {
        (t.embed.getPaused().then(function (e) {
          tf.call(t, !e), e || Ku.call(t, t.media, "playing");
        }), su(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("bufferstart", function () {
        Ku.call(t, t.media, "waiting");
      }), t.embed.on("bufferend", function () {
        Ku.call(t, t.media, "playing");
      }), t.embed.on("play", function () {
        tf.call(t, !0), Ku.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        tf.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, p = e.seconds, Ku.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, Ku.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Ku.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, Ku.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, Ku.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, Ku.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, Ku.call(t, t.media, "error");
      }), setTimeout(function () {
        return $h.build.call(t);
      }, 0);
    }
  };

  function rf(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ku.call(this, this.media, e ? "play" : "pause"));
  }

  function af(e) {
    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
  }

  var of = {
    setup: function setup() {
      var e = this;
      if (ju(this.elements.wrapper, this.config.classNames.embed, !0), eu(window.YT) && ru(window.YT.Player)) of.ready.call(this);else {
        var t = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () {
          ru(t) && t(), of.ready.call(e);
        }, ef(this.config.urls.youtube.sdk)["catch"](function (t) {
          e.debug.warn("YouTube API failed to load", t);
        });
      }
    },
    getTitle: function getTitle(e) {
      var t = this;
      Eh(gh(this.config.urls.youtube.api, e)).then(function (e) {
        if (eu(e)) {
          var n = e.title,
              i = e.height,
              r = e.width;
          t.config.title = n, $h.setTitle.call(t), t.embed.ratio = [r, i];
        }

        Zu.call(t);
      })["catch"](function () {
        Zu.call(t);
      });
    },
    ready: function ready() {
      var e = this,
          t = e.media && e.media.getAttribute("id");

      if (du(t) || !t.startsWith("youtube-")) {
        var n = e.media.getAttribute("src");
        du(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
        var i,
            r,
            a = du(i = n) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i,
            o = (r = e.provider, "".concat(r, "-").concat(Math.floor(1e4 * Math.random()))),
            s = Au("div", {
          id: o,
          "data-poster": e.poster
        });
        e.media = Ou(s, e.media);

        var l = function l(e) {
          return "https://i.ytimg.com/vi/".concat(a, "/").concat(e, "default.jpg");
        };

        Kh(l("maxres"), 121)["catch"](function () {
          return Kh(l("sd"), 121);
        })["catch"](function () {
          return Kh(l("hq"));
        }).then(function (t) {
          return $h.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        })["catch"](function () {});
        var c = e.config.youtube;
        e.embed = new window.YT.Player(o, {
          videoId: a,
          host: af(c),
          playerVars: Tu({}, {
            autoplay: e.config.autoplay ? 1 : 0,
            hl: e.config.hl,
            controls: e.supported.ui ? 0 : 1,
            disablekb: 1,
            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
            cc_load_policy: e.captions.active ? 1 : 0,
            cc_lang_pref: e.config.captions.language,
            widget_referrer: window ? window.location.href : null
          }, c),
          events: {
            onError: function onError(t) {
              if (!e.media.error) {
                var n = t.data,
                    i = {
                  2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                  5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                  100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                  101: "The owner of the requested video does not allow it to be played in embedded players.",
                  150: "The owner of the requested video does not allow it to be played in embedded players."
                }[n] || "An unknown error occured";
                e.media.error = {
                  code: n,
                  message: i
                }, Ku.call(e, e.media, "error");
              }
            },
            onPlaybackRateChange: function onPlaybackRateChange(t) {
              var n = t.target;
              e.media.playbackRate = n.getPlaybackRate(), Ku.call(e, e.media, "ratechange");
            },
            onReady: function onReady(t) {
              if (!ru(e.media.play)) {
                var n = t.target;
                of.getTitle.call(e, a), e.media.play = function () {
                  rf.call(e, !0), n.playVideo();
                }, e.media.pause = function () {
                  rf.call(e, !1), n.pauseVideo();
                }, e.media.stop = function () {
                  n.stopVideo();
                }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                  get: function get() {
                    return Number(n.getCurrentTime());
                  },
                  set: function set(t) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Ku.call(e, e.media, "seeking"), n.seekTo(t);
                  }
                }), Object.defineProperty(e.media, "playbackRate", {
                  get: function get() {
                    return n.getPlaybackRate();
                  },
                  set: function set(e) {
                    n.setPlaybackRate(e);
                  }
                });
                var i = e.config.volume;
                Object.defineProperty(e.media, "volume", {
                  get: function get() {
                    return i;
                  },
                  set: function set(t) {
                    i = t, n.setVolume(100 * i), Ku.call(e, e.media, "volumechange");
                  }
                });
                var r = e.config.muted;
                Object.defineProperty(e.media, "muted", {
                  get: function get() {
                    return r;
                  },
                  set: function set(t) {
                    var i = iu(t) ? t : r;
                    r = i, n[i ? "mute" : "unMute"](), Ku.call(e, e.media, "volumechange");
                  }
                }), Object.defineProperty(e.media, "currentSrc", {
                  get: function get() {
                    return n.getVideoUrl();
                  }
                }), Object.defineProperty(e.media, "ended", {
                  get: function get() {
                    return e.currentTime === e.duration;
                  }
                });
                var o = n.getAvailablePlaybackRates();
                e.options.speed = o.filter(function (t) {
                  return e.config.speed.options.includes(t);
                }), e.supported.ui && e.media.setAttribute("tabindex", -1), Ku.call(e, e.media, "timeupdate"), Ku.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                  e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Ku.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Ku.call(e, e.media, "canplaythrough"));
                }, 200), setTimeout(function () {
                  return $h.build.call(e);
                }, 50);
              }
            },
            onStateChange: function onStateChange(t) {
              var n = t.target;

              switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Ku.call(e, e.media, "seeked")), t.data) {
                case -1:
                  Ku.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), Ku.call(e, e.media, "progress");
                  break;

                case 0:
                  rf.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : Ku.call(e, e.media, "ended");
                  break;

                case 1:
                  e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (rf.call(e, !0), Ku.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    Ku.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), Ku.call(e, e.media, "durationchange"))) : e.media.pause();
                  break;

                case 2:
                  e.muted || e.embed.unMute(), rf.call(e, !1);
                  break;

                case 3:
                  Ku.call(e, e.media, "waiting");
              }

              Ku.call(e, e.elements.container, "statechange", !1, {
                code: t.data
              });
            }
          }
        });
      }
    }
  },
      sf = {
    setup: function setup() {
      this.media ? (ju(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), ju(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && ju(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Au("div", {
        "class": this.config.classNames.video
      }), Su(this.media, this.elements.wrapper), this.elements.poster = Au("div", {
        "class": this.config.classNames.poster
      }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? eh.setup.call(this) : this.isYouTube ? of.setup.call(this) : this.isVimeo && nf.setup.call(this)) : this.debug.warn("No media element found!");
    }
  },
      lf = function () {
    function e(t) {
      var n = this;
      yo(this, e), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
        container: null,
        displayContainer: null
      }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        n.on("loaded", e), n.on("error", t);
      }), this.load();
    }

    return wo(e, [{
      key: "load",
      value: function value() {
        var e = this;
        this.enabled && (eu(window.google) && eu(window.google.ima) ? this.ready() : ef(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        })["catch"](function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      }
    }, {
      key: "ready",
      value: function value() {
        var e,
            t = this;
        this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          t.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      }
    }, {
      key: "setupIMA",
      value: function value() {
        var e = this;
        this.elements.container = Au("div", {
          "class": this.player.config.classNames.ads
        }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
          return e.onAdsManagerLoaded(t);
        }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
          return e.onAdError(t);
        }, !1), this.requestAds();
      }
    }, {
      key: "requestAds",
      value: function value() {
        var e = this.player.elements.container;

        try {
          var t = new google.ima.AdsRequest();
          t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t);
        } catch (e) {
          this.onAdError(e);
        }
      }
    }, {
      key: "pollCountdown",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");

        var n = function n() {
          var t = Lh(Math.max(e.manager.getRemainingTime(), 0)),
              n = "".concat(Th("advertisement", e.player.config), " - ").concat(t);
          e.elements.container.setAttribute("data-badge-text", n);
        };

        this.countdownTimer = setInterval(n, 100);
      }
    }, {
      key: "onAdsManagerLoaded",
      value: function value(e) {
        var t = this;

        if (this.enabled) {
          var n = new google.ima.AdsRenderingSettings();
          n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
            return t.onAdError(e);
          }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
            t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
              return t.onAdEvent(e);
            });
          }), this.trigger("loaded");
        }
      }
    }, {
      key: "addCuePoints",
      value: function value() {
        var e = this;
        du(this.cuePoints) || this.cuePoints.forEach(function (t) {
          if (0 !== t && -1 !== t && t < e.player.duration) {
            var n = e.player.elements.progress;

            if (su(n)) {
              var i = 100 / e.player.duration * t,
                  r = Au("span", {
                "class": e.player.config.classNames.cues
              });
              r.style.left = "".concat(i.toString(), "%"), n.appendChild(r);
            }
          }
        });
      }
    }, {
      key: "onAdEvent",
      value: function value(e) {
        var t = this,
            n = this.player.elements.container,
            i = e.getAd(),
            r = e.getAdData();

        switch (function (e) {
          Ku.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()));
        }(e.type), e.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
            break;

          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;

          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            this.player.ended ? this.loadAds() : this.loader.contentComplete();
            break;

          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;

          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown(), this.resumeContent();
            break;

          case google.ima.AdEvent.Type.LOG:
            r.adError && this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()));
        }
      }
    }, {
      key: "onAdError",
      value: function value(e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      }
    }, {
      key: "listeners",
      value: function value() {
        var e,
            t = this,
            n = this.player.elements.container;
        this.player.on("canplay", function () {
          t.addCuePoints();
        }), this.player.on("ended", function () {
          t.loader.contentComplete();
        }), this.player.on("timeupdate", function () {
          e = t.player.currentTime;
        }), this.player.on("seeked", function () {
          var n = t.player.currentTime;
          du(t.cuePoints) || t.cuePoints.forEach(function (i, r) {
            e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(r, 1));
          });
        }), window.addEventListener("resize", function () {
          t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL);
        });
      }
    }, {
      key: "play",
      value: function value() {
        var e = this,
            t = this.player.elements.container;
        this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
          e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();

          try {
            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0;
          } catch (t) {
            e.onAdError(t);
          }
        })["catch"](function () {});
      }
    }, {
      key: "resumeContent",
      value: function value() {
        this.elements.container.style.zIndex = "", this.playing = !1, Gu(this.player.media.play());
      }
    }, {
      key: "pauseContent",
      value: function value() {
        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
      }
    }, {
      key: "cancel",
      value: function value() {
        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
      }
    }, {
      key: "loadAds",
      value: function value() {
        var e = this;
        this.managerPromise.then(function () {
          e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
            e.on("loaded", t), e.player.debug.log(e.manager);
          }), e.initialized = !1, e.requestAds();
        })["catch"](function () {});
      }
    }, {
      key: "trigger",
      value: function value(e) {
        for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
          i[r - 1] = arguments[r];
        }

        var a = this.events[e];
        au(a) && a.forEach(function (e) {
          ru(e) && e.apply(t, i);
        });
      }
    }, {
      key: "on",
      value: function value(e, t) {
        return au(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      }
    }, {
      key: "startSafetyTimer",
      value: function value(e, t) {
        var n = this;
        this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
          n.cancel(), n.clearSafetyTimer("startSafetyTimer()");
        }, e);
      }
    }, {
      key: "clearSafetyTimer",
      value: function value(e) {
        Zc(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      }
    }, {
      key: "enabled",
      get: function get() {
        var e = this.config;
        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!du(e.publisherId) || fu(e.tagUrl));
      }
    }, {
      key: "tagUrl",
      get: function get() {
        var e = this.config;
        if (fu(e.tagUrl)) return e.tagUrl;
        var t = {
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId
        };
        return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(Rh(t));
      }
    }]), e;
  }(),
      cf = ct.findIndex,
      uf = !0,
      hf = Qt("findIndex");

  "findIndex" in [] && Array(1).findIndex(function () {
    uf = !1;
  }), Ie({
    target: "Array",
    proto: !0,
    forced: uf || !hf
  }, {
    findIndex: function findIndex(e) {
      return cf(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), dn("findIndex");
  var ff = Math.min,
      df = [].lastIndexOf,
      pf = !!df && 1 / [1].lastIndexOf(1, -0) < 0,
      mf = $t("lastIndexOf"),
      gf = Qt("indexOf", {
    ACCESSORS: !0,
    1: 0
  }),
      vf = pf || !mf || !gf ? function (e) {
    if (pf) return df.apply(this, arguments) || 0;
    var t = m(this),
        n = le(t.length),
        i = n - 1;

    for (arguments.length > 1 && (i = ff(i, oe(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--) {
      if (i in t && t[i] === e) return i || 0;
    }

    return -1;
  } : df;
  Ie({
    target: "Array",
    proto: !0,
    forced: vf !== [].lastIndexOf
  }, {
    lastIndexOf: vf
  });

  var yf = function yf(e, t) {
    var n = {};
    return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n;
  },
      bf = function () {
    function e(t) {
      yo(this, e), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
        thumb: {},
        scrubbing: {}
      }, this.load();
    }

    return wo(e, [{
      key: "load",
      value: function value() {
        var e = this;
        this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(function () {
          e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0);
        });
      }
    }, {
      key: "getThumbnails",
      value: function value() {
        var e = this;
        return new Promise(function (t) {
          var n = e.player.config.previewThumbnails.src;
          if (du(n)) throw new Error("Missing previewThumbnails.src config attribute");

          var i = function i() {
            e.thumbnails.sort(function (e, t) {
              return e.height - t.height;
            }), e.player.debug.log("Preview thumbnails", e.thumbnails), t();
          };

          if (ru(n)) n(function (t) {
            e.thumbnails = t, i();
          });else {
            var r = (nu(n) ? [n] : n).map(function (t) {
              return e.getThumbnail(t);
            });
            Promise.all(r).then(i);
          }
        });
      }
    }, {
      key: "getThumbnail",
      value: function value(e) {
        var t = this;
        return new Promise(function (n) {
          Eh(e).then(function (i) {
            var r,
                a,
                o = {
              frames: (r = i, a = [], r.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                var t = {};
                e.split(/\r\n|\n|\r/).forEach(function (e) {
                  if (tu(t.startTime)) {
                    if (!du(e.trim()) && du(t.text)) {
                      var n = e.trim().split("#xywh="),
                          i = Ao(n, 1);

                      if (t.text = i[0], n[1]) {
                        var r = Ao(n[1].split(","), 4);
                        t.x = r[0], t.y = r[1], t.w = r[2], t.h = r[3];
                      }
                    }
                  } else {
                    var a = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                    a && (t.startTime = 60 * Number(a[1] || 0) * 60 + 60 * Number(a[2]) + Number(a[3]) + Number("0.".concat(a[4])), t.endTime = 60 * Number(a[6] || 0) * 60 + 60 * Number(a[7]) + Number(a[8]) + Number("0.".concat(a[9])));
                  }
                }), t.text && a.push(t);
              }), a),
              height: null,
              urlPrefix: ""
            };
            o.frames[0].text.startsWith("/") || o.frames[0].text.startsWith("http://") || o.frames[0].text.startsWith("https://") || (o.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
            var s = new Image();
            s.onload = function () {
              o.height = s.naturalHeight, o.width = s.naturalWidth, t.thumbnails.push(o), n();
            }, s.src = o.urlPrefix + o.frames[0].text;
          });
        });
      }
    }, {
      key: "startMove",
      value: function value(e) {
        if (this.loaded && lu(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
          if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);else {
            var t = this.player.elements.progress.getBoundingClientRect(),
                n = 100 / t.width * (e.pageX - t.left);
            this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Lh(this.seekTime);
          }
          this.showImageAtCurrentTime();
        }
      }
    }, {
      key: "endMove",
      value: function value() {
        this.toggleThumbContainer(!1, !0);
      }
    }, {
      key: "startScrubbing",
      value: function value(e) {
        (Zc(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
      }
    }, {
      key: "endScrubbing",
      value: function value() {
        var e = this;
        this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Wu.call(this.player, this.player.media, "timeupdate", function () {
          e.mouseDown || e.toggleScrubbingContainer(!1);
        });
      }
    }, {
      key: "listeners",
      value: function value() {
        var e = this;
        this.player.on("play", function () {
          e.toggleThumbContainer(!1, !0);
        }), this.player.on("seeked", function () {
          e.toggleThumbContainer(!1);
        }), this.player.on("timeupdate", function () {
          e.lastTime = e.player.media.currentTime;
        });
      }
    }, {
      key: "render",
      value: function value() {
        this.elements.thumb.container = Au("div", {
          "class": this.player.config.classNames.previewThumbnails.thumbContainer
        }), this.elements.thumb.imageContainer = Au("div", {
          "class": this.player.config.classNames.previewThumbnails.imageContainer
        }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
        var e = Au("div", {
          "class": this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = Au("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), su(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = Au("div", {
          "class": this.player.config.classNames.previewThumbnails.scrubbingContainer
        }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      }
    }, {
      key: "destroy",
      value: function value() {
        this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
      }
    }, {
      key: "showImageAtCurrentTime",
      value: function value() {
        var e = this;
        this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
        var t = this.thumbnails[0].frames.findIndex(function (t) {
          return e.seekTime >= t.startTime && e.seekTime <= t.endTime;
        }),
            n = t >= 0,
            i = 0;
        this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach(function (n, r) {
          e.loadedImages.includes(n.frames[t].text) && (i = r);
        }), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(i)));
      }
    }, {
      key: "loadImage",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = this.showingThumb,
            i = this.thumbnails[t],
            r = i.urlPrefix,
            a = i.frames[n],
            o = i.frames[n].text,
            s = r + o;
        if (this.currentImageElement && this.currentImageElement.dataset.filename === o) this.showImage(this.currentImageElement, a, t, n, o, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);else {
          this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
          var l = new Image();
          l.src = s, l.dataset.index = n, l.dataset.filename = o, this.showingThumbFilename = o, this.player.debug.log("Loading image: ".concat(s)), l.onload = function () {
            return e.showImage(l, a, t, n, o, !0);
          }, this.loadingImage = l, this.removeOldImages(l);
        }
      }
    }, {
      key: "showImage",
      value: function value(e, t, n, i, r) {
        var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        this.player.debug.log("Showing thumb: ".concat(r, ". num: ").concat(i, ". qual: ").concat(n, ". newimg: ").concat(a)), this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(r) || this.loadedImages.push(r)), this.preloadNearby(i, !0).then(this.preloadNearby(i, !1)).then(this.getHigherQuality(n, e, t, r));
      }
    }, {
      key: "removeOldImages",
      value: function value(e) {
        var t = this;
        Array.from(this.currentImageContainer.children).forEach(function (n) {
          if ("img" === n.tagName.toLowerCase()) {
            var i = t.usingSprites ? 500 : 1e3;

            if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
              n.dataset.deleting = !0;
              var r = t.currentImageContainer;
              setTimeout(function () {
                r.removeChild(n), t.player.debug.log("Removing thumb: ".concat(n.dataset.filename));
              }, i);
            }
          }
        });
      }
    }, {
      key: "preloadNearby",
      value: function value(e) {
        var t = this,
            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return new Promise(function (i) {
          setTimeout(function () {
            var r = t.thumbnails[0].frames[e].text;

            if (t.showingThumbFilename === r) {
              var a;
              a = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
              var o = !1;
              a.forEach(function (e) {
                var n = e.text;

                if (n !== r && !t.loadedImages.includes(n)) {
                  o = !0, t.player.debug.log("Preloading thumb filename: ".concat(n));
                  var a = t.thumbnails[0].urlPrefix + n,
                      s = new Image();
                  s.src = a, s.onload = function () {
                    t.player.debug.log("Preloaded thumb filename: ".concat(n)), t.loadedImages.includes(n) || t.loadedImages.push(n), i();
                  };
                }
              }), o || i();
            }
          }, 300);
        });
      }
    }, {
      key: "getHigherQuality",
      value: function value(e, t, n, i) {
        var r = this;

        if (e < this.thumbnails.length - 1) {
          var a = t.naturalHeight;
          this.usingSprites && (a = n.h), a < this.thumbContainerHeight && setTimeout(function () {
            r.showingThumbFilename === i && (r.player.debug.log("Showing higher quality thumb for: ".concat(i)), r.loadImage(e + 1));
          }, 300);
        }
      }
    }, {
      key: "toggleThumbContainer",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(n, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null);
      }
    }, {
      key: "toggleScrubbingContainer",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null);
      }
    }, {
      key: "determineContainerAutoSizing",
      value: function value() {
        (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
      }
    }, {
      key: "setThumbContainerSizeAndPos",
      value: function value() {
        if (this.sizeSpecifiedInCSS) {
          if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
            var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
            this.elements.thumb.imageContainer.style.width = "".concat(e, "px");
          } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
            var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
            this.elements.thumb.imageContainer.style.height = "".concat(t, "px");
          }
        } else {
          var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n, "px");
        }

        this.setThumbContainerPos();
      }
    }, {
      key: "setThumbContainerPos",
      value: function value() {
        var e = this.player.elements.progress.getBoundingClientRect(),
            t = this.player.elements.container.getBoundingClientRect(),
            n = this.elements.thumb.container,
            i = t.left - e.left + 10,
            r = t.right - e.left - n.clientWidth - 10,
            a = this.mousePosX - e.left - n.clientWidth / 2;
        a < i && (a = i), a > r && (a = r), n.style.left = "".concat(a, "px");
      }
    }, {
      key: "setScrubbingContainerSize",
      value: function value() {
        var e = yf(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }),
            t = e.width,
            n = e.height;
        this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(n, "px");
      }
    }, {
      key: "setImageSizeAndOffset",
      value: function value(e, t) {
        if (this.usingSprites) {
          var n = this.thumbContainerHeight / t.h;
          e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px");
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
      }
    }, {
      key: "currentImageContainer",
      get: function get() {
        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
      }
    }, {
      key: "usingSprites",
      get: function get() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
    }, {
      key: "thumbAspectRatio",
      get: function get() {
        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
      }
    }, {
      key: "thumbContainerHeight",
      get: function get() {
        return this.mouseDown ? yf(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
      }
    }, {
      key: "currentImageElement",
      get: function get() {
        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
      },
      set: function set(e) {
        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
      }
    }]), e;
  }(),
      wf = {
    insertElements: function insertElements(e, t) {
      var n = this;
      nu(t) ? Pu(e, this.media, {
        src: t
      }) : au(t) && t.forEach(function (t) {
        Pu(e, n.media, t);
      });
    },
    change: function change(e) {
      var t = this;
      ku(e, "sources.length") ? (eh.cancelRequests.call(this), this.destroy.call(this, function () {
        t.options.quality = [], xu(t.media), t.media = null, su(t.elements.container) && t.elements.container.removeAttribute("class");
        var n = e.sources,
            i = e.type,
            r = Ao(n, 1)[0],
            a = r.provider,
            o = void 0 === a ? Fh.html5 : a,
            s = r.src,
            l = "html5" === o ? i : "div",
            c = "html5" === o ? {} : {
          src: s
        };
        Object.assign(t, {
          provider: o,
          type: i,
          supported: qu.check(i, o, t.config.playsinline),
          media: Au(l, c)
        }), t.elements.container.appendChild(t.media), iu(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), du(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), $h.addStyleHook.call(t), t.isHTML5 && wf.insertElements.call(t, "source", n), t.config.title = e.title, sf.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && wf.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && $h.build.call(t), t.isHTML5 && t.media.load(), du(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new bf(t))), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    }
  };

  var kf,
      Tf = function () {
    function e(t, n) {
      var i = this;
      if (yo(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = qu.touch, this.media = t, nu(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || ou(this.media) || au(this.media)) && (this.media = this.media[0]), this.config = Tu({}, _h, e.defaults, n || {}, function () {
        try {
          return JSON.parse(i.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }, this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }, this.fullscreen = {
        active: !1
      }, this.options = {
        speed: [],
        quality: []
      }, this.debug = new Vh(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", qu), !Zc(this.media) && su(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (qu.check().api) {
            var r = this.media.cloneNode(!0);
            r.autoplay = !1, this.elements.original = r;
            var a = this.media.tagName.toLowerCase(),
                o = null,
                s = null;

            switch (a) {
              case "div":
                if (o = this.media.querySelector("iframe"), su(o)) {
                  if (s = Nh(o.getAttribute("src")), this.provider = function (e) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Fh.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Fh.vimeo : null;
                  }(s.toString()), this.elements.container = this.media, this.media = o, this.elements.container.className = "", s.search.length) {
                    var l = ["1", "true"];
                    l.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(s.searchParams.get("playsinline")), this.config.youtube.hl = s.searchParams.get("hl")) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

                if (du(this.provider) || !Object.keys(Fh).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = Hh;
                break;

              case "video":
              case "audio":
                this.type = a, this.provider = Fh.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                break;

              default:
                return void this.debug.error("Setup failed: unsupported type");
            }

            this.supported = qu.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Yh(this), this.storage = new Sh(this), this.media.plyr = this, su(this.elements.container) || (this.elements.container = Au("div", {
              tabindex: 0
            }), Su(this.media, this.elements.container)), $h.migrateStyles.call(this), $h.addStyleHook.call(this), sf.setup.call(this), this.config.debug && Vu.call(this, this.elements.container, this.config.events.join(" "), function (e) {
              i.debug.log("event: ".concat(e.type));
            }), this.fullscreen = new zh(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && $h.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new lf(this)), this.isHTML5 && this.config.autoplay && setTimeout(function () {
              return Gu(i.play());
            }, 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new bf(this))) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }

    return wo(e, [{
      key: "play",
      value: function value() {
        var e = this;
        return ru(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(function () {
          return e.ads.play();
        })["catch"](function () {
          return Gu(e.media.play());
        }), this.media.play()) : null;
      }
    }, {
      key: "pause",
      value: function value() {
        return this.playing && ru(this.media.pause) ? this.media.pause() : null;
      }
    }, {
      key: "togglePlay",
      value: function value(e) {
        return (iu(e) ? e : !this.playing) ? this.play() : this.pause();
      }
    }, {
      key: "stop",
      value: function value() {
        this.isHTML5 ? (this.pause(), this.restart()) : ru(this.media.stop) && this.media.stop();
      }
    }, {
      key: "restart",
      value: function value() {
        this.currentTime = 0;
      }
    }, {
      key: "rewind",
      value: function value(e) {
        this.currentTime -= tu(e) ? e : this.config.seekTime;
      }
    }, {
      key: "forward",
      value: function value(e) {
        this.currentTime += tu(e) ? e : this.config.seekTime;
      }
    }, {
      key: "increaseVolume",
      value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;
        this.volume = t + (tu(e) ? e : 0);
      }
    }, {
      key: "decreaseVolume",
      value: function value(e) {
        this.increaseVolume(-e);
      }
    }, {
      key: "toggleCaptions",
      value: function value(e) {
        Mh.toggle.call(this, e, !1);
      }
    }, {
      key: "airplay",
      value: function value() {
        qu.airplay && this.media.webkitShowPlaybackTargetPicker();
      }
    }, {
      key: "toggleControls",
      value: function value(e) {
        if (this.supported.ui && !this.isAudio) {
          var t = Nu(this.elements.container, this.config.classNames.hideControls),
              n = void 0 === e ? void 0 : !e,
              i = ju(this.elements.container, this.config.classNames.hideControls, n);

          if (i && au(this.config.controls) && this.config.controls.includes("settings") && !du(this.config.settings) && jh.toggleMenu.call(this, !1), i !== t) {
            var r = i ? "controlshidden" : "controlsshown";
            Ku.call(this, this.media, r);
          }

          return !i;
        }

        return !1;
      }
    }, {
      key: "on",
      value: function value(e, t) {
        Vu.call(this, this.elements.container, e, t);
      }
    }, {
      key: "once",
      value: function value(e, t) {
        Wu.call(this, this.elements.container, e, t);
      }
    }, {
      key: "off",
      value: function value(e, t) {
        zu(this.elements.container, e, t);
      }
    }, {
      key: "destroy",
      value: function value(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (this.ready) {
          var i = function i() {
            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (xu(t.elements.buttons.play), xu(t.elements.captions), xu(t.elements.controls), xu(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), ru(e) && e()) : ($u.call(t), Ou(t.elements.original, t.elements.container), Ku.call(t, t.elements.original, "destroyed", !0), ru(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };

          this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? ($h.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && ru(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200));
        }
      }
    }, {
      key: "supports",
      value: function value(e) {
        return qu.mime.call(this, e);
      }
    }, {
      key: "isHTML5",
      get: function get() {
        return this.provider === Fh.html5;
      }
    }, {
      key: "isEmbed",
      get: function get() {
        return this.isYouTube || this.isVimeo;
      }
    }, {
      key: "isYouTube",
      get: function get() {
        return this.provider === Fh.youtube;
      }
    }, {
      key: "isVimeo",
      get: function get() {
        return this.provider === Fh.vimeo;
      }
    }, {
      key: "isVideo",
      get: function get() {
        return this.type === Hh;
      }
    }, {
      key: "isAudio",
      get: function get() {
        return this.type === qh;
      }
    }, {
      key: "playing",
      get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
    }, {
      key: "paused",
      get: function get() {
        return Boolean(this.media.paused);
      }
    }, {
      key: "stopped",
      get: function get() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
    }, {
      key: "ended",
      get: function get() {
        return Boolean(this.media.ended);
      }
    }, {
      key: "currentTime",
      set: function set(e) {
        if (this.duration) {
          var t = tu(e) && e > 0;
          this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
        }
      },
      get: function get() {
        return Number(this.media.currentTime);
      }
    }, {
      key: "buffered",
      get: function get() {
        var e = this.media.buffered;
        return tu(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      }
    }, {
      key: "seeking",
      get: function get() {
        return Boolean(this.media.seeking);
      }
    }, {
      key: "duration",
      get: function get() {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            n = tu(t) && t !== 1 / 0 ? t : 0;
        return e || n;
      }
    }, {
      key: "volume",
      set: function set(e) {
        var t = e;
        nu(t) && (t = Number(t)), tu(t) || (t = this.storage.get("volume")), tu(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !du(e) && this.muted && t > 0 && (this.muted = !1);
      },
      get: function get() {
        return Number(this.media.volume);
      }
    }, {
      key: "muted",
      set: function set(e) {
        var t = e;
        iu(t) || (t = this.storage.get("muted")), iu(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      },
      get: function get() {
        return Boolean(this.media.muted);
      }
    }, {
      key: "hasAudio",
      get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      }
    }, {
      key: "speed",
      set: function set(e) {
        var t = this,
            n = null;
        tu(e) && (n = e), tu(n) || (n = this.storage.get("speed")), tu(n) || (n = this.config.speed.selected);
        var i = this.minimumSpeed,
            r = this.maximumSpeed;
        n = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
          return Math.min(Math.max(e, t), n);
        }(n, i, r), this.config.speed.selected = n, setTimeout(function () {
          t.media.playbackRate = n;
        }, 0);
      },
      get: function get() {
        return Number(this.media.playbackRate);
      }
    }, {
      key: "minimumSpeed",
      get: function get() {
        return this.isYouTube ? Math.min.apply(Math, Po(this.options.speed)) : this.isVimeo ? .5 : .0625;
      }
    }, {
      key: "maximumSpeed",
      get: function get() {
        return this.isYouTube ? Math.max.apply(Math, Po(this.options.speed)) : this.isVimeo ? 2 : 16;
      }
    }, {
      key: "quality",
      set: function set(e) {
        var t = this.config.quality,
            n = this.options.quality;

        if (n.length) {
          var i = [!du(e) && Number(e), this.storage.get("quality"), t.selected, t["default"]].find(tu),
              r = !0;

          if (!n.includes(i)) {
            var a = function (e, t) {
              return au(e) && e.length ? e.reduce(function (e, n) {
                return Math.abs(n - t) < Math.abs(e - t) ? n : e;
              }) : null;
            }(n, i);

            this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(a, " instead")), i = a, r = !1;
          }

          t.selected = i, this.media.quality = i, r && this.storage.set({
            quality: i
          });
        }
      },
      get: function get() {
        return this.media.quality;
      }
    }, {
      key: "loop",
      set: function set(e) {
        var t = iu(e) ? e : this.config.loop.active;
        this.config.loop.active = t, this.media.loop = t;
      },
      get: function get() {
        return Boolean(this.media.loop);
      }
    }, {
      key: "source",
      set: function set(e) {
        wf.change.call(this, e);
      },
      get: function get() {
        return this.media.currentSrc;
      }
    }, {
      key: "download",
      get: function get() {
        var e = this.config.urls.download;
        return fu(e) ? e : this.source;
      },
      set: function set(e) {
        fu(e) && (this.config.urls.download = e, jh.setDownloadUrl.call(this));
      }
    }, {
      key: "poster",
      set: function set(e) {
        this.isVideo ? $h.setPoster.call(this, e, !1)["catch"](function () {}) : this.debug.warn("Poster can only be set for video");
      },
      get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
      }
    }, {
      key: "ratio",
      get: function get() {
        if (!this.isVideo) return null;
        var e = Qu(Ju.call(this));
        return au(e) ? e.join(":") : e;
      },
      set: function set(e) {
        this.isVideo ? nu(e) && Xu(e) ? (this.config.ratio = e, Zu.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
      }
    }, {
      key: "autoplay",
      set: function set(e) {
        var t = iu(e) ? e : this.config.autoplay;
        this.config.autoplay = t;
      },
      get: function get() {
        return Boolean(this.config.autoplay);
      }
    }, {
      key: "currentTrack",
      set: function set(e) {
        Mh.set.call(this, e, !1);
      },
      get: function get() {
        var e = this.captions,
            t = e.toggled,
            n = e.currentTrack;
        return t ? n : -1;
      }
    }, {
      key: "language",
      set: function set(e) {
        Mh.setLanguage.call(this, e, !1);
      },
      get: function get() {
        return (Mh.getCurrentTrack.call(this) || {}).language;
      }
    }, {
      key: "pip",
      set: function set(e) {
        if (qu.pip) {
          var t = iu(e) ? e : !this.pip;
          ru(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Uh : Dh), ru(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
        }
      },
      get: function get() {
        return qu.pip ? du(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Uh : null;
      }
    }], [{
      key: "supported",
      value: function value(e, t, n) {
        return qu.check(e, t, n);
      }
    }, {
      key: "loadSprite",
      value: function value(e, t) {
        return Ah(e, t);
      }
    }, {
      key: "setup",
      value: function value(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = null;
        return nu(t) ? i = Array.from(document.querySelectorAll(t)) : ou(t) ? i = Array.from(t) : au(t) && (i = t.filter(su)), du(i) ? null : i.map(function (t) {
          return new e(t, n);
        });
      }
    }]), e;
  }();

  return Tf.defaults = (kf = _h, JSON.parse(JSON.stringify(kf))), Tf;
});