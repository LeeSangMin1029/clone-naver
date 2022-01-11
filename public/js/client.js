var b = Object.create;
var s = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var O = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf, g = Object.prototype.hasOwnProperty;
var m = (r)=>s(r, "__esModule", {
        value: !0
    })
;
var v = (r, e)=>()=>(e || r((e = {
            exports: {
            }
        }).exports, e), e.exports)
;
var y = (r, e, t)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let n of O(e))!g.call(r, n) && n !== "default" && s(r, n, {
        get: ()=>e[n]
        ,
        enumerable: !(t = p(e, n)) || t.enumerable
    });
    return r;
}, h = (r)=>y(m(s(r != null ? b(j(r)) : {
    }, "default", r && r.__esModule && "default" in r ? {
        get: ()=>r.default
        ,
        enumerable: !0
    } : {
        value: r,
        enumerable: !0
    })), r)
;
var l = v((q, i)=>{
    "use strict";
    var u = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
    function P(r) {
        if (r == null) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(r);
    }
    function E() {
        try {
            if (!Object.assign) return !1;
            var r = new String("abc");
            if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5") return !1;
            for(var e = {
            }, t = 0; t < 10; t++)e["_" + String.fromCharCode(t)] = t;
            var n = Object.getOwnPropertyNames(e).map(function(o) {
                return e[o];
            });
            if (n.join("") !== "0123456789") return !1;
            var a = {
            };
            return "abcdefghijklmnopqrst".split("").forEach(function(o) {
                a[o] = o;
            }), Object.keys(Object.assign({
            }, a)).join("") === "abcdefghijklmnopqrst";
        } catch (o) {
            return !1;
        }
    }
    i.exports = E() ? Object.assign : function(r, e) {
        for(var t, n = P(r), a, o = 1; o < arguments.length; o++){
            t = Object(arguments[o]);
            for(var f in t)d.call(t, f) && (n[f] = t[f]);
            if (u) {
                a = u(t);
                for(var c = 0; c < a.length; c++)w.call(t, a[c]) && (n[a[c]] = t[a[c]]);
            }
        }
        return n;
    };
});
var S = h(l());
var export_default = S.default;
var W = Object.create;
var h1 = Object.defineProperty;
var Y = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var J = Object.getPrototypeOf, K = Object.prototype.hasOwnProperty;
var Q = (e)=>h1(e, "__esModule", {
        value: !0
    })
;
var j1 = (e, t)=>()=>(t || e((t = {
            exports: {
            }
        }).exports, t), t.exports)
;
var Z = (e, t, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of G(t))!K.call(e, o) && o !== "default" && h1(e, o, {
        get: ()=>t[o]
        ,
        enumerable: !(r = Y(t, o)) || r.enumerable
    });
    return e;
}, O1 = (e)=>Z(Q(h1(e != null ? W(J(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var z = j1((n)=>{
    "use strict";
    var E = export_default, y = 60103, P = 60106;
    n.Fragment = 60107;
    n.StrictMode = 60108;
    n.Profiler = 60114;
    var x = 60109, I = 60110, w = 60112;
    n.Suspense = 60113;
    var A = 60115, F = 60116;
    typeof Symbol == "function" && Symbol.for && (l = Symbol.for, y = l("react.element"), P = l("react.portal"), n.Fragment = l("react.fragment"), n.StrictMode = l("react.strict_mode"), n.Profiler = l("react.profiler"), x = l("react.provider"), I = l("react.context"), w = l("react.forward_ref"), n.Suspense = l("react.suspense"), A = l("react.memo"), F = l("react.lazy"));
    var l, L = typeof Symbol == "function" && Symbol.iterator;
    function b(e) {
        return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function _(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var q = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
    }, D = {
    };
    function d(e, t, r) {
        this.props = e, this.context = t, this.refs = D, this.updater = r || q;
    }
    d.prototype.isReactComponent = {
    };
    d.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error(_(85));
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    d.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function M() {
    }
    M.prototype = d.prototype;
    function S(e, t, r) {
        this.props = e, this.context = t, this.refs = D, this.updater = r || q;
    }
    var C = S.prototype = new M;
    C.constructor = S;
    E(C, d.prototype);
    C.isPureReactComponent = !0;
    var R = {
        current: null
    }, N = Object.prototype.hasOwnProperty, U = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function T(e, t, r) {
        var o, u = {
        }, c = null, f = null;
        if (t != null) for(o in t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = "" + t.key), t)N.call(t, o) && !U.hasOwnProperty(o) && (u[o] = t[o]);
        var s = arguments.length - 2;
        if (s === 1) u.children = r;
        else if (1 < s) {
            for(var i = Array(s), p = 0; p < s; p++)i[p] = arguments[p + 2];
            u.children = i;
        }
        if (e && e.defaultProps) for(o in s = e.defaultProps, s)u[o] === void 0 && (u[o] = s[o]);
        return {
            $$typeof: y,
            type: e,
            key: c,
            ref: f,
            props: u,
            _owner: R.current
        };
    }
    function ee(e, t) {
        return {
            $$typeof: y,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function k(e) {
        return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function te(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(r) {
            return t[r];
        });
    }
    var V = /\/+/g;
    function $(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? te("" + e.key) : t.toString(36);
    }
    function v(e, t, r, o, u) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var f = !1;
        if (e === null) f = !0;
        else switch(c){
            case "string":
            case "number":
                f = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case y:
                    case P:
                        f = !0;
                }
        }
        if (f) return f = e, u = u(f), e = o === "" ? "." + $(f, 0) : o, Array.isArray(u) ? (r = "", e != null && (r = e.replace(V, "$&/") + "/"), v(u, t, r, "", function(p) {
            return p;
        })) : u != null && (k(u) && (u = ee(u, r + (!u.key || f && f.key === u.key ? "" : ("" + u.key).replace(V, "$&/") + "/") + e)), t.push(u)), 1;
        if (f = 0, o = o === "" ? "." : o + ":", Array.isArray(e)) for(var s = 0; s < e.length; s++){
            c = e[s];
            var i = o + $(c, s);
            f += v(c, t, r, i, u);
        }
        else if (i = b(e), typeof i == "function") for(e = i.call(e), s = 0; !(c = e.next()).done;)c = c.value, i = o + $(c, s++), f += v(c, t, r, i, u);
        else if (c === "object") throw t = "" + e, Error(_(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
        return f;
    }
    function m(e, t, r) {
        if (e == null) return e;
        var o = [], u = 0;
        return v(e, o, "", "", function(c) {
            return t.call(r, c, u++);
        }), o;
    }
    function re(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), e._status = 0, e._result = t, t.then(function(r) {
                e._status === 0 && (r = r.default, e._status = 1, e._result = r);
            }, function(r) {
                e._status === 0 && (e._status = 2, e._result = r);
            });
        }
        if (e._status === 1) return e._result;
        throw e._result;
    }
    var B = {
        current: null
    };
    function a() {
        var e = B.current;
        if (e === null) throw Error(_(321));
        return e;
    }
    var ne = {
        ReactCurrentDispatcher: B,
        ReactCurrentBatchConfig: {
            transition: 0
        },
        ReactCurrentOwner: R,
        IsSomeRendererActing: {
            current: !1
        },
        assign: E
    };
    n.Children = {
        map: m,
        forEach: function(e, t, r) {
            m(e, function() {
                t.apply(this, arguments);
            }, r);
        },
        count: function(e) {
            var t = 0;
            return m(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return m(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!k(e)) throw Error(_(143));
            return e;
        }
    };
    n.Component = d;
    n.PureComponent = S;
    n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne;
    n.cloneElement = function(e, t, r) {
        if (e == null) throw Error(_(267, e));
        var o = E({
        }, e.props), u = e.key, c = e.ref, f = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (c = t.ref, f = R.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(i in t)N.call(t, i) && !U.hasOwnProperty(i) && (o[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
        }
        var i = arguments.length - 2;
        if (i === 1) o.children = r;
        else if (1 < i) {
            s = Array(i);
            for(var p = 0; p < i; p++)s[p] = arguments[p + 2];
            o.children = s;
        }
        return {
            $$typeof: y,
            type: e.type,
            key: u,
            ref: c,
            props: o,
            _owner: f
        };
    };
    n.createContext = function(e, t) {
        return t === void 0 && (t = null), e = {
            $$typeof: I,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, e.Provider = {
            $$typeof: x,
            _context: e
        }, e.Consumer = e;
    };
    n.createElement = T;
    n.createFactory = function(e) {
        var t = T.bind(null, e);
        return t.type = e, t;
    };
    n.createRef = function() {
        return {
            current: null
        };
    };
    n.forwardRef = function(e) {
        return {
            $$typeof: w,
            render: e
        };
    };
    n.isValidElement = k;
    n.lazy = function(e) {
        return {
            $$typeof: F,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: re
        };
    };
    n.memo = function(e, t) {
        return {
            $$typeof: A,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    n.useCallback = function(e, t) {
        return a().useCallback(e, t);
    };
    n.useContext = function(e, t) {
        return a().useContext(e, t);
    };
    n.useDebugValue = function() {
    };
    n.useEffect = function(e, t) {
        return a().useEffect(e, t);
    };
    n.useImperativeHandle = function(e, t, r) {
        return a().useImperativeHandle(e, t, r);
    };
    n.useLayoutEffect = function(e, t) {
        return a().useLayoutEffect(e, t);
    };
    n.useMemo = function(e, t) {
        return a().useMemo(e, t);
    };
    n.useReducer = function(e, t, r) {
        return a().useReducer(e, t, r);
    };
    n.useRef = function(e) {
        return a().useRef(e);
    };
    n.useState = function(e) {
        return a().useState(e);
    };
    n.version = "17.0.2";
});
var g1 = j1((se, H)=>{
    "use strict";
    H.exports = z();
});
var oe = O1(g1()), ue = O1(g1()), { Fragment: fe , StrictMode: le , Profiler: pe , Suspense: ae , Children: ye , Component: de , PureComponent: _e , __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve , cloneElement: me , createContext: he , createElement: Ee , createFactory: Se , createRef: Ce , forwardRef: Re , isValidElement: ke , lazy: $e , memo: ge , useCallback: je , useContext: Oe , useDebugValue: Pe , useEffect: xe , useImperativeHandle: Ie , useLayoutEffect: we , useMemo: Ae , useReducer: Fe , useRef: Le , useState: qe , version: De  } = oe;
var export_default1 = ue.default;
var D = Object.create;
var j2 = Object.defineProperty;
var z1 = Object.getOwnPropertyDescriptor;
var B = Object.getOwnPropertyNames;
var G1 = Object.getPrototypeOf, ee = Object.prototype.hasOwnProperty;
var ne = (e)=>j2(e, "__esModule", {
        value: !0
    })
;
var H = (e, n)=>()=>(n || e((n = {
            exports: {
            }
        }).exports, n), n.exports)
;
var te = (e, n, t)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let l of B(n))!ee.call(e, l) && l !== "default" && j2(e, l, {
        get: ()=>n[l]
        ,
        enumerable: !(t = z1(n, l)) || t.enumerable
    });
    return e;
}, J1 = (e)=>te(ne(j2(e != null ? D(G1(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var $ = H((r)=>{
    "use strict";
    var _, v, g, C;
    typeof performance == "object" && typeof performance.now == "function" ? (K = performance, r.unstable_now = function() {
        return K.now();
    }) : (F = Date, Q = F.now(), r.unstable_now = function() {
        return F.now() - Q;
    });
    var K, F, Q;
    typeof window == "undefined" || typeof MessageChannel != "function" ? (y = null, L = null, N = function() {
        if (y !== null) try {
            var e = r.unstable_now();
            y(!0, e), y = null;
        } catch (n) {
            throw setTimeout(N, 0), n;
        }
    }, _ = function(e) {
        y !== null ? setTimeout(_, 0, e) : (y = e, setTimeout(N, 0));
    }, v = function(e, n) {
        L = setTimeout(e, n);
    }, g = function() {
        clearTimeout(L);
    }, r.unstable_shouldYield = function() {
        return !1;
    }, C = r.unstable_forceFrameRate = function() {
    }) : (S = window.setTimeout, X = window.clearTimeout, typeof console != "undefined" && (Z = window.cancelAnimationFrame, typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof Z != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")), h = !1, w = null, P = -1, E = 5, R = 0, r.unstable_shouldYield = function() {
        return r.unstable_now() >= R;
    }, C = function() {
    }, r.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1000 / e) : 5;
    }, q = new MessageChannel, x = q.port2, q.port1.onmessage = function() {
        if (w !== null) {
            var e = r.unstable_now();
            R = e + E;
            try {
                w(!0, e) ? x.postMessage(null) : (h = !1, w = null);
            } catch (n) {
                throw x.postMessage(null), n;
            }
        } else h = !1;
    }, _ = function(e) {
        w = e, h || (h = !0, x.postMessage(null));
    }, v = function(e, n) {
        P = S(function() {
            e(r.unstable_now());
        }, n);
    }, g = function() {
        X(P), P = -1;
    });
    var y, L, N, S, X, Z, h, w, P, E, R, q, x;
    function Y(e, n) {
        var t = e.length;
        e.push(n);
        e: for(;;){
            var l = t - 1 >>> 1, o = e[l];
            if (o !== void 0 && 0 < I(o, n)) e[l] = n, e[t] = o, t = l;
            else break e;
        }
    }
    function a(e) {
        return e = e[0], e === void 0 ? null : e;
    }
    function T(e) {
        var n = e[0];
        if (n !== void 0) {
            var t = e.pop();
            if (t !== n) {
                e[0] = t;
                e: for(var l = 0, o = e.length; l < o;){
                    var f = 2 * (l + 1) - 1, b = e[f], m = f + 1, d = e[m];
                    if (b !== void 0 && 0 > I(b, t)) d !== void 0 && 0 > I(d, b) ? (e[l] = d, e[m] = t, l = m) : (e[l] = b, e[f] = t, l = f);
                    else if (d !== void 0 && 0 > I(d, t)) e[l] = d, e[m] = t, l = m;
                    else break e;
                }
            }
            return n;
        }
        return null;
    }
    function I(e, n) {
        var t = e.sortIndex - n.sortIndex;
        return t !== 0 ? t : e.id - n.id;
    }
    var s = [], c = [], re = 1, u = null, i = 3, M = !1, p = !1, k = !1;
    function U(e) {
        for(var n = a(c); n !== null;){
            if (n.callback === null) T(c);
            else if (n.startTime <= e) T(c), n.sortIndex = n.expirationTime, Y(s, n);
            else break;
            n = a(c);
        }
    }
    function W(e) {
        if (k = !1, U(e), !p) if (a(s) !== null) p = !0, _(O);
        else {
            var n = a(c);
            n !== null && v(W, n.startTime - e);
        }
    }
    function O(e, n) {
        p = !1, k && (k = !1, g()), M = !0;
        var t = i;
        try {
            for(U(n), u = a(s); u !== null && (!(u.expirationTime > n) || e && !r.unstable_shouldYield());){
                var l = u.callback;
                if (typeof l == "function") {
                    u.callback = null, i = u.priorityLevel;
                    var o = l(u.expirationTime <= n);
                    n = r.unstable_now(), typeof o == "function" ? u.callback = o : u === a(s) && T(s), U(n);
                } else T(s);
                u = a(s);
            }
            if (u !== null) var f = !0;
            else {
                var b = a(c);
                b !== null && v(W, b.startTime - n), f = !1;
            }
            return f;
        } finally{
            u = null, i = t, M = !1;
        }
    }
    var le = C;
    r.unstable_IdlePriority = 5;
    r.unstable_ImmediatePriority = 1;
    r.unstable_LowPriority = 4;
    r.unstable_NormalPriority = 3;
    r.unstable_Profiling = null;
    r.unstable_UserBlockingPriority = 2;
    r.unstable_cancelCallback = function(e) {
        e.callback = null;
    };
    r.unstable_continueExecution = function() {
        p || M || (p = !0, _(O));
    };
    r.unstable_getCurrentPriorityLevel = function() {
        return i;
    };
    r.unstable_getFirstCallbackNode = function() {
        return a(s);
    };
    r.unstable_next = function(e) {
        switch(i){
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = i;
        }
        var t = i;
        i = n;
        try {
            return e();
        } finally{
            i = t;
        }
    };
    r.unstable_pauseExecution = function() {
    };
    r.unstable_requestPaint = le;
    r.unstable_runWithPriority = function(e, n) {
        switch(e){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        var t = i;
        i = e;
        try {
            return n();
        } finally{
            i = t;
        }
    };
    r.unstable_scheduleCallback = function(e, n, t) {
        var l = r.unstable_now();
        switch(typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l + t : l) : t = l, e){
            case 1:
                var o = -1;
                break;
            case 2:
                o = 250;
                break;
            case 5:
                o = 1073741823;
                break;
            case 4:
                o = 10000;
                break;
            default:
                o = 5000;
        }
        return o = t + o, e = {
            id: re++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: o,
            sortIndex: -1
        }, t > l ? (e.sortIndex = t, Y(c, e), a(s) === null && e === a(c) && (k ? g() : k = !0, v(W, t - l))) : (e.sortIndex = o, Y(s, e), p || M || (p = !0, _(O))), e;
    };
    r.unstable_wrapCallback = function(e) {
        var n = i;
        return function() {
            var t = i;
            i = n;
            try {
                return e.apply(this, arguments);
            } finally{
                i = t;
            }
        };
    };
});
var V = H((se, A)=>{
    "use strict";
    A.exports = $();
});
var oe1 = J1(V()), ie = J1(V()), { unstable_now: ce , unstable_shouldYield: fe1 , unstable_forceFrameRate: be , unstable_IdlePriority: pe1 , unstable_ImmediatePriority: de1 , unstable_LowPriority: _e1 , unstable_NormalPriority: ye1 , unstable_Profiling: me1 , unstable_UserBlockingPriority: ve1 , unstable_cancelCallback: he1 , unstable_continueExecution: we1 , unstable_getCurrentPriorityLevel: ke1 , unstable_getFirstCallbackNode: ge1 , unstable_next: Pe1 , unstable_pauseExecution: xe1 , unstable_requestPaint: Te , unstable_runWithPriority: Ie1 , unstable_scheduleCallback: Me , unstable_wrapCallback: je1  } = oe1;
var export_default2 = ie.default;
var _s = Object.create;
var Or = Object.defineProperty;
var Ns = Object.getOwnPropertyDescriptor;
var Ps = Object.getOwnPropertyNames;
var Ts = Object.getPrototypeOf, Ls = Object.prototype.hasOwnProperty;
var zs = (e)=>Or(e, "__esModule", {
        value: !0
    })
;
var Ri = (e, n)=>()=>(n || e((n = {
            exports: {
            }
        }).exports, n), n.exports)
;
var Os = (e, n, t)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let r of Ps(n))!Ls.call(e, r) && r !== "default" && Or(e, r, {
        get: ()=>n[r]
        ,
        enumerable: !(t = Ns(n, r)) || t.enumerable
    });
    return e;
}, Di = (e)=>Os(zs(Or(e != null ? _s(Ts(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var Es = Ri((ie)=>{
    "use strict";
    var _t = export_default1, M = export_default, U = export_default2;
    function v(e) {
        for(var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!_t) throw Error(v(227));
    var Ii = new Set, On = {
    };
    function He(e, n) {
        nn(e, n), nn(e + "Capture", n);
    }
    function nn(e, n) {
        for(On[e] = n, e = 0; e < n.length; e++)Ii.add(n[e]);
    }
    var me = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Ms = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fi = Object.prototype.hasOwnProperty, ji = {
    }, Ui = {
    };
    function Rs(e) {
        return Fi.call(Ui, e) ? !0 : Fi.call(ji, e) ? !1 : Ms.test(e) ? Ui[e] = !0 : (ji[e] = !0, !1);
    }
    function Ds(e, n, t, r) {
        if (t !== null && t.type === 0) return !1;
        switch(typeof n){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function Is(e, n, t, r) {
        if (n === null || typeof n == "undefined" || Ds(e, n, t, r)) return !0;
        if (r) return !1;
        if (t !== null) switch(t.type){
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
        return !1;
    }
    function Y(e, n, t, r, l, i, o) {
        this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o;
    }
    var V = {
    };
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        V[e] = new Y(e, 0, !1, e, null, !1, !1);
    });
    [
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "className",
            "class"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ]
    ].forEach(function(e) {
        var n = e[0];
        V[n] = new Y(n, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        V[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        V[e] = new Y(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        V[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        V[e] = new Y(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        V[e] = new Y(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        V[e] = new Y(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        V[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Rr = /[\-:]([a-z])/g;
    function Dr(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var n = e.replace(Rr, Dr);
        V[n] = new Y(n, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var n = e.replace(Rr, Dr);
        V[n] = new Y(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var n = e.replace(Rr, Dr);
        V[n] = new Y(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        V[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    V.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        V[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Ir(e, n, t, r) {
        var l = V.hasOwnProperty(n) ? V[n] : null, i = l !== null ? l.type === 0 : r ? !1 : !(!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N");
        i || (Is(n, t, l, r) && (t = null), r || l === null ? Rs(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    var We = _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Mn = 60103, Ae = 60106, Ee = 60107, Fr = 60108, Rn = 60114, jr = 60109, Ur = 60110, Nt = 60112, Dn = 60113, Pt = 60120, Tt = 60115, Vr = 60116, Br = 60121, Hr = 60128, Vi = 60129, Wr = 60130, Ar = 60131;
    typeof Symbol == "function" && Symbol.for && (F = Symbol.for, Mn = F("react.element"), Ae = F("react.portal"), Ee = F("react.fragment"), Fr = F("react.strict_mode"), Rn = F("react.profiler"), jr = F("react.provider"), Ur = F("react.context"), Nt = F("react.forward_ref"), Dn = F("react.suspense"), Pt = F("react.suspense_list"), Tt = F("react.memo"), Vr = F("react.lazy"), Br = F("react.block"), F("react.scope"), Hr = F("react.opaque.id"), Vi = F("react.debug_trace_mode"), Wr = F("react.offscreen"), Ar = F("react.legacy_hidden"));
    var F, Bi = typeof Symbol == "function" && Symbol.iterator;
    function In(e) {
        return e === null || typeof e != "object" ? null : (e = Bi && e[Bi] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Qr;
    function Fn(e) {
        if (Qr === void 0) try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            Qr = n && n[1] || "";
        }
        return `
` + Qr + e;
    }
    var $r = !1;
    function Lt(e, n) {
        if (!e || $r) return "";
        $r = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (n) if (n = function() {
                throw Error();
            }, Object.defineProperty(n.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], n);
            } else {
                try {
                    n.call();
                } catch (s) {
                    r = s;
                }
                e.call(n.prototype);
            }
            else {
                try {
                    throw Error();
                } catch (s) {
                    r = s;
                }
                e();
            }
        } catch (s) {
            if (s && r && typeof s.stack == "string") {
                for(var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u];)u--;
                for(; 1 <= o && 0 <= u; o--, u--)if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1) do if (o--, u--, 0 > u || l[o] !== i[u]) return `
` + l[o].replace(" at new ", " at ");
                    while (1 <= o && 0 <= u)
                    break;
                }
            }
        } finally{
            $r = !1, Error.prepareStackTrace = t;
        }
        return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
    }
    function Fs(e) {
        switch(e.tag){
            case 5:
                return Fn(e.type);
            case 16:
                return Fn("Lazy");
            case 13:
                return Fn("Suspense");
            case 19:
                return Fn("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Lt(e.type, !1), e;
            case 11:
                return e = Lt(e.type.render, !1), e;
            case 22:
                return e = Lt(e.type._render, !1), e;
            case 1:
                return e = Lt(e.type, !0), e;
            default:
                return "";
        }
    }
    function tn(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Ee:
                return "Fragment";
            case Ae:
                return "Portal";
            case Rn:
                return "Profiler";
            case Fr:
                return "StrictMode";
            case Dn:
                return "Suspense";
            case Pt:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Ur:
                return (e.displayName || "Context") + ".Consumer";
            case jr:
                return (e._context.displayName || "Context") + ".Provider";
            case Nt:
                var n = e.render;
                return n = n.displayName || n.name || "", e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case Tt:
                return tn(e.type);
            case Br:
                return tn(e._render);
            case Vr:
                n = e._payload, e = e._init;
                try {
                    return tn(e(n));
                } catch (t) {
                }
        }
        return null;
    }
    function ke(e) {
        switch(typeof e){
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return "";
        }
    }
    function Hi(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function js(e) {
        var n = Hi(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
        if (!e.hasOwnProperty(n) && typeof t != "undefined" && typeof t.get == "function" && typeof t.set == "function") {
            var l = t.get, i = t.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function() {
                    return l.call(this);
                },
                set: function(o) {
                    r = "" + o, i.call(this, o);
                }
            }), Object.defineProperty(e, n, {
                enumerable: t.enumerable
            }), {
                getValue: function() {
                    return r;
                },
                setValue: function(o) {
                    r = "" + o;
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[n];
                }
            };
        }
    }
    function zt(e) {
        e._valueTracker || (e._valueTracker = js(e));
    }
    function Wi(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var t = n.getValue(), r = "";
        return e && (r = Hi(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
    }
    function Ot(e) {
        if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
        try {
            return e.activeElement || e.body;
        } catch (n) {
            return e.body;
        }
    }
    function Yr(e, n) {
        var t = n.checked;
        return M({
        }, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: t ?? e._wrapperState.initialChecked
        });
    }
    function Ai(e, n) {
        var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
        t = ke(n.value != null ? n.value : t), e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
        };
    }
    function Qi(e, n) {
        n = n.checked, n != null && Ir(e, "checked", n, !1);
    }
    function Xr(e, n) {
        Qi(e, n);
        var t = ke(n.value), r = n.type;
        if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        n.hasOwnProperty("value") ? Kr(e, n.type, t) : n.hasOwnProperty("defaultValue") && Kr(e, n.type, ke(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
    }
    function $i(e, n, t) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
            n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
        }
        t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
    }
    function Kr(e, n, t) {
        (n !== "number" || Ot(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    function Us(e) {
        var n = "";
        return _t.Children.forEach(e, function(t) {
            t != null && (n += t);
        }), n;
    }
    function Gr(e, n) {
        return e = M({
            children: void 0
        }, n), (n = Us(n.children)) && (e.children = n), e;
    }
    function rn(e, n, t, r) {
        if (e = e.options, n) {
            n = {
            };
            for(var l = 0; l < t.length; l++)n["$" + t[l]] = !0;
            for(t = 0; t < e.length; t++)l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
        } else {
            for(t = "" + ke(t), n = null, l = 0; l < e.length; l++){
                if (e[l].value === t) {
                    e[l].selected = !0, r && (e[l].defaultSelected = !0);
                    return;
                }
                n !== null || e[l].disabled || (n = e[l]);
            }
            n !== null && (n.selected = !0);
        }
    }
    function Zr(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(v(91));
        return M({
        }, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Yi(e, n) {
        var t = n.value;
        if (t == null) {
            if (t = n.children, n = n.defaultValue, t != null) {
                if (n != null) throw Error(v(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw Error(v(93));
                    t = t[0];
                }
                n = t;
            }
            n == null && (n = ""), t = n;
        }
        e._wrapperState = {
            initialValue: ke(t)
        };
    }
    function Xi(e, n) {
        var t = ke(n.value), r = ke(n.defaultValue);
        t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
    }
    function Ki(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
    }
    var Jr = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    function Gi(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function qr(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Gi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Mt, Zi = function(e) {
        return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(n, t, r, l);
            });
        } : e;
    }(function(e, n) {
        if (e.namespaceURI !== Jr.svg || "innerHTML" in e) e.innerHTML = n;
        else {
            for(Mt = Mt || document.createElement("div"), Mt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Mt.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; n.firstChild;)e.appendChild(n.firstChild);
        }
    });
    function jn(e, n) {
        if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = n;
                return;
            }
        }
        e.textContent = n;
    }
    var Un = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, Vs = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Un).forEach(function(e) {
        Vs.forEach(function(n) {
            n = n + e.charAt(0).toUpperCase() + e.substring(1), Un[n] = Un[e];
        });
    });
    function Ji(e, n, t) {
        return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + n).trim() : n + "px";
    }
    function qi(e, n) {
        e = e.style;
        for(var t in n)if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0, l = Ji(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
        }
    }
    var Bs = M({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function br(e, n) {
        if (n) {
            if (Bs[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(v(60));
                if (!(typeof n.dangerouslySetInnerHTML == "object" && "__html" in n.dangerouslySetInnerHTML)) throw Error(v(61));
            }
            if (n.style != null && typeof n.style != "object") throw Error(v(62));
        }
    }
    function el(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string";
        switch(e){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    function nl(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var tl = null, ln = null, on = null;
    function bi(e) {
        if (e = tt(e)) {
            if (typeof tl != "function") throw Error(v(280));
            var n = e.stateNode;
            n && (n = bt(n), tl(e.stateNode, e.type, n));
        }
    }
    function eo(e) {
        ln ? on ? on.push(e) : on = [
            e
        ] : ln = e;
    }
    function no() {
        if (ln) {
            var e = ln, n = on;
            if (on = ln = null, bi(e), n) for(e = 0; e < n.length; e++)bi(n[e]);
        }
    }
    function rl(e, n) {
        return e(n);
    }
    function to(e, n, t, r, l) {
        return e(n, t, r, l);
    }
    function ll() {
    }
    var ro = rl, Qe = !1, il = !1;
    function ol() {
        (ln !== null || on !== null) && (ll(), no());
    }
    function Hs(e, n, t) {
        if (il) return e(n, t);
        il = !0;
        try {
            return ro(e, n, t);
        } finally{
            il = !1, ol();
        }
    }
    function Vn(e, n) {
        var t = e.stateNode;
        if (t === null) return null;
        var r = bt(t);
        if (r === null) return null;
        t = r[n];
        e: switch(n){
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (t && typeof t != "function") throw Error(v(231, n, typeof t));
        return t;
    }
    var ul = !1;
    if (me) try {
        un = {
        }, Object.defineProperty(un, "passive", {
            get: function() {
                ul = !0;
            }
        }), window.addEventListener("test", un, un), window.removeEventListener("test", un, un);
    } catch (e) {
        ul = !1;
    }
    var un;
    function Ws(e, n, t, r, l, i, o, u, s) {
        var d = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(t, d);
        } catch (y) {
            this.onError(y);
        }
    }
    var Bn = !1, Rt = null, Dt = !1, sl = null, As = {
        onError: function(e) {
            Bn = !0, Rt = e;
        }
    };
    function Qs(e, n, t, r, l, i, o, u, s) {
        Bn = !1, Rt = null, Ws.apply(As, arguments);
    }
    function $s(e, n, t, r, l, i, o, u, s) {
        if (Qs.apply(this, arguments), Bn) {
            if (Bn) {
                var d = Rt;
                Bn = !1, Rt = null;
            } else throw Error(v(198));
            Dt || (Dt = !0, sl = d);
        }
    }
    function $e(e) {
        var n = e, t = e;
        if (e.alternate) for(; n.return;)n = n.return;
        else {
            e = n;
            do n = e, (n.flags & 1026) != 0 && (t = n.return), e = n.return;
            while (e)
        }
        return n.tag === 3 ? t : null;
    }
    function lo(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
        }
        return null;
    }
    function io(e) {
        if ($e(e) !== e) throw Error(v(188));
    }
    function Ys(e) {
        var n = e.alternate;
        if (!n) {
            if (n = $e(e), n === null) throw Error(v(188));
            return n !== e ? null : e;
        }
        for(var t = e, r = n;;){
            var l = t.return;
            if (l === null) break;
            var i = l.alternate;
            if (i === null) {
                if (r = l.return, r !== null) {
                    t = r;
                    continue;
                }
                break;
            }
            if (l.child === i.child) {
                for(i = l.child; i;){
                    if (i === t) return io(l), e;
                    if (i === r) return io(l), n;
                    i = i.sibling;
                }
                throw Error(v(188));
            }
            if (t.return !== r.return) t = l, r = i;
            else {
                for(var o = !1, u = l.child; u;){
                    if (u === t) {
                        o = !0, t = l, r = i;
                        break;
                    }
                    if (u === r) {
                        o = !0, r = l, t = i;
                        break;
                    }
                    u = u.sibling;
                }
                if (!o) {
                    for(u = i.child; u;){
                        if (u === t) {
                            o = !0, t = i, r = l;
                            break;
                        }
                        if (u === r) {
                            o = !0, r = i, t = l;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!o) throw Error(v(189));
                }
            }
            if (t.alternate !== r) throw Error(v(190));
        }
        if (t.tag !== 3) throw Error(v(188));
        return t.stateNode.current === t ? e : n;
    }
    function oo(e) {
        if (e = Ys(e), !e) return null;
        for(var n = e;;){
            if (n.tag === 5 || n.tag === 6) return n;
            if (n.child) n.child.return = n, n = n.child;
            else {
                if (n === e) break;
                for(; !n.sibling;){
                    if (!n.return || n.return === e) return null;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
        }
        return null;
    }
    function uo(e, n) {
        for(var t = e.alternate; n !== null;){
            if (n === e || n === t) return !0;
            n = n.return;
        }
        return !1;
    }
    var so, al, ao, fo, fl = !1, se = [], xe = null, Ce = null, _e = null, Hn = new Map, Wn = new Map, An = [], co = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function cl(e, n, t, r, l) {
        return {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: t | 16,
            nativeEvent: l,
            targetContainers: [
                r
            ]
        };
    }
    function po(e, n) {
        switch(e){
            case "focusin":
            case "focusout":
                xe = null;
                break;
            case "dragenter":
            case "dragleave":
                Ce = null;
                break;
            case "mouseover":
            case "mouseout":
                _e = null;
                break;
            case "pointerover":
            case "pointerout":
                Hn.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Wn.delete(n.pointerId);
        }
    }
    function Qn(e, n, t, r, l, i) {
        return e === null || e.nativeEvent !== i ? (e = cl(n, t, r, l, i), n !== null && (n = tt(n), n !== null && al(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
    }
    function Xs(e, n, t, r, l) {
        switch(n){
            case "focusin":
                return xe = Qn(xe, e, n, t, r, l), !0;
            case "dragenter":
                return Ce = Qn(Ce, e, n, t, r, l), !0;
            case "mouseover":
                return _e = Qn(_e, e, n, t, r, l), !0;
            case "pointerover":
                var i = l.pointerId;
                return Hn.set(i, Qn(Hn.get(i) || null, e, n, t, r, l)), !0;
            case "gotpointercapture":
                return i = l.pointerId, Wn.set(i, Qn(Wn.get(i) || null, e, n, t, r, l)), !0;
        }
        return !1;
    }
    function Ks(e) {
        var n = Ye(e.target);
        if (n !== null) {
            var t = $e(n);
            if (t !== null) {
                if (n = t.tag, n === 13) {
                    if (n = lo(t), n !== null) {
                        e.blockedOn = n, fo(e.lanePriority, function() {
                            U.unstable_runWithPriority(e.priority, function() {
                                ao(t);
                            });
                        });
                        return;
                    }
                } else if (n === 3 && t.stateNode.hydrate) {
                    e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function It(e) {
        if (e.blockedOn !== null) return !1;
        for(var n = e.targetContainers; 0 < n.length;){
            var t = yl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (t !== null) return n = tt(t), n !== null && al(n), e.blockedOn = t, !1;
            n.shift();
        }
        return !0;
    }
    function mo(e, n, t) {
        It(e) && t.delete(n);
    }
    function Gs() {
        for(fl = !1; 0 < se.length;){
            var e = se[0];
            if (e.blockedOn !== null) {
                e = tt(e.blockedOn), e !== null && so(e);
                break;
            }
            for(var n = e.targetContainers; 0 < n.length;){
                var t = yl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                if (t !== null) {
                    e.blockedOn = t;
                    break;
                }
                n.shift();
            }
            e.blockedOn === null && se.shift();
        }
        xe !== null && It(xe) && (xe = null), Ce !== null && It(Ce) && (Ce = null), _e !== null && It(_e) && (_e = null), Hn.forEach(mo), Wn.forEach(mo);
    }
    function $n(e, n) {
        e.blockedOn === n && (e.blockedOn = null, fl || (fl = !0, U.unstable_scheduleCallback(U.unstable_NormalPriority, Gs)));
    }
    function ho(e) {
        function n(l) {
            return $n(l, e);
        }
        if (0 < se.length) {
            $n(se[0], e);
            for(var t = 1; t < se.length; t++){
                var r = se[t];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(xe !== null && $n(xe, e), Ce !== null && $n(Ce, e), _e !== null && $n(_e, e), Hn.forEach(n), Wn.forEach(n), t = 0; t < An.length; t++)r = An[t], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < An.length && (t = An[0], t.blockedOn === null);)Ks(t), t.blockedOn === null && An.shift();
    }
    function Ft(e, n) {
        var t = {
        };
        return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
    }
    var sn = {
        animationend: Ft("Animation", "AnimationEnd"),
        animationiteration: Ft("Animation", "AnimationIteration"),
        animationstart: Ft("Animation", "AnimationStart"),
        transitionend: Ft("Transition", "TransitionEnd")
    }, dl = {
    }, vo = {
    };
    me && (vo = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
    function jt(e) {
        if (dl[e]) return dl[e];
        if (!sn[e]) return e;
        var n = sn[e], t;
        for(t in n)if (n.hasOwnProperty(t) && t in vo) return dl[e] = n[t];
        return e;
    }
    var yo = jt("animationend"), go = jt("animationiteration"), wo = jt("animationstart"), So = jt("transitionend"), Eo = new Map, pl = new Map, Zs = [
        "abort",
        "abort",
        yo,
        "animationEnd",
        go,
        "animationIteration",
        wo,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        So,
        "transitionEnd",
        "waiting",
        "waiting"
    ];
    function ml(e, n) {
        for(var t = 0; t < e.length; t += 2){
            var r = e[t], l = e[t + 1];
            l = "on" + (l[0].toUpperCase() + l.slice(1)), pl.set(r, n), Eo.set(r, l), He(l, [
                r
            ]);
        }
    }
    var Js = U.unstable_now;
    Js();
    var L = 8;
    function an(e) {
        if ((1 & e) != 0) return L = 15, 1;
        if ((2 & e) != 0) return L = 14, 2;
        if ((4 & e) != 0) return L = 13, 4;
        var n = 24 & e;
        return n !== 0 ? (L = 12, n) : (e & 32) != 0 ? (L = 11, 32) : (n = 192 & e, n !== 0 ? (L = 10, n) : (e & 256) != 0 ? (L = 9, 256) : (n = 3584 & e, n !== 0 ? (L = 8, n) : (e & 4096) != 0 ? (L = 7, 4096) : (n = 4186112 & e, n !== 0 ? (L = 6, n) : (n = 62914560 & e, n !== 0 ? (L = 5, n) : e & 67108864 ? (L = 4, 67108864) : (e & 134217728) != 0 ? (L = 3, 134217728) : (n = 805306368 & e, n !== 0 ? (L = 2, n) : (1073741824 & e) != 0 ? (L = 1, 1073741824) : (L = 8, e))))));
    }
    function qs(e) {
        switch(e){
            case 99:
                return 15;
            case 98:
                return 10;
            case 97:
            case 96:
                return 8;
            case 95:
                return 2;
            default:
                return 0;
        }
    }
    function bs(e) {
        switch(e){
            case 15:
            case 14:
                return 99;
            case 13:
            case 12:
            case 11:
            case 10:
                return 98;
            case 9:
            case 8:
            case 7:
            case 6:
            case 4:
            case 5:
                return 97;
            case 3:
            case 2:
            case 1:
                return 95;
            case 0:
                return 90;
            default:
                throw Error(v(358, e));
        }
    }
    function Yn(e, n) {
        var t = e.pendingLanes;
        if (t === 0) return L = 0;
        var r = 0, l1 = 0, i = e.expiredLanes, o = e.suspendedLanes, u = e.pingedLanes;
        if (i !== 0) r = i, l1 = L = 15;
        else if (i = t & 134217727, i !== 0) {
            var s = i & ~o;
            s !== 0 ? (r = an(s), l1 = L) : (u &= i, u !== 0 && (r = an(u), l1 = L));
        } else i = t & ~o, i !== 0 ? (r = an(i), l1 = L) : u !== 0 && (r = an(u), l1 = L);
        if (r === 0) return 0;
        if (r = 31 - Ne(r), r = t & ((0 > r ? 0 : 1 << r) << 1) - 1, n !== 0 && n !== r && (n & o) == 0) {
            if (an(n), l1 <= L) return n;
            L = l1;
        }
        if (n = e.entangledLanes, n !== 0) for(e = e.entanglements, n &= r; 0 < n;)t = 31 - Ne(n), l1 = 1 << t, r |= e[t], n &= ~l1;
        return r;
    }
    function ko(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Ut(e, n) {
        switch(e){
            case 15:
                return 1;
            case 14:
                return 2;
            case 12:
                return e = fn(24 & ~n), e === 0 ? Ut(10, n) : e;
            case 10:
                return e = fn(192 & ~n), e === 0 ? Ut(8, n) : e;
            case 8:
                return e = fn(3584 & ~n), e === 0 && (e = fn(4186112 & ~n), e === 0 && (e = 512)), e;
            case 2:
                return n = fn(805306368 & ~n), n === 0 && (n = 268435456), n;
        }
        throw Error(v(358, e));
    }
    function fn(e) {
        return e & -e;
    }
    function hl(e) {
        for(var n = [], t = 0; 31 > t; t++)n.push(e);
        return n;
    }
    function Vt(e, n, t) {
        e.pendingLanes |= n;
        var r = n - 1;
        e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, n = 31 - Ne(n), e[n] = t;
    }
    var Ne = Math.clz32 ? Math.clz32 : ta, ea = Math.log, na = Math.LN2;
    function ta(e) {
        return e === 0 ? 32 : 31 - (ea(e) / na | 0) | 0;
    }
    var ra = U.unstable_UserBlockingPriority, la = U.unstable_runWithPriority, Bt = !0;
    function ia(e, n, t, r) {
        Qe || ll();
        var l1 = vl, i = Qe;
        Qe = !0;
        try {
            to(l1, e, n, t, r);
        } finally{
            (Qe = i) || ol();
        }
    }
    function oa(e, n, t, r) {
        la(ra, vl.bind(null, e, n, t, r));
    }
    function vl(e, n, t, r) {
        if (Bt) {
            var l;
            if ((l = (n & 4) == 0) && 0 < se.length && -1 < co.indexOf(e)) e = cl(null, e, n, t, r), se.push(e);
            else {
                var i = yl(e, n, t, r);
                if (i === null) l && po(e, r);
                else {
                    if (l) {
                        if (-1 < co.indexOf(e)) {
                            e = cl(i, e, n, t, r), se.push(e);
                            return;
                        }
                        if (Xs(i, e, n, t, r)) return;
                        po(e, r);
                    }
                    Zo(e, n, r, null, t);
                }
            }
        }
    }
    function yl(e, n, t, r) {
        var l1 = nl(r);
        if (l1 = Ye(l1), l1 !== null) {
            var i = $e(l1);
            if (i === null) l1 = null;
            else {
                var o = i.tag;
                if (o === 13) {
                    if (l1 = lo(i), l1 !== null) return l1;
                    l1 = null;
                } else if (o === 3) {
                    if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
                    l1 = null;
                } else i !== l1 && (l1 = null);
            }
        }
        return Zo(e, n, r, l1, t), null;
    }
    var Pe = null, gl = null, Ht = null;
    function xo() {
        if (Ht) return Ht;
        var e1, n = gl, t = n.length, r, l1 = "value" in Pe ? Pe.value : Pe.textContent, i = l1.length;
        for(e1 = 0; e1 < t && n[e1] === l1[e1]; e1++);
        var o = t - e1;
        for(r = 1; r <= o && n[t - r] === l1[i - r]; r++);
        return Ht = l1.slice(e1, 1 < r ? 1 - r : void 0);
    }
    function Wt(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function At() {
        return !0;
    }
    function Co() {
        return !1;
    }
    function q(e) {
        function n(t, r, l, i, o) {
            this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for(var u in e)e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i) : i[u]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? At : Co, this.isPropagationStopped = Co, this;
        }
        return M(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = At);
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = At);
            },
            persist: function() {
            },
            isPersistent: At
        }), n;
    }
    var cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, wl = q(cn), Xn = M({
    }, cn, {
        view: 0,
        detail: 0
    }), ua = q(Xn), Sl, El, Kn, Qt = M({
    }, Xn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: xl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Sl = e.screenX - Kn.screenX, El = e.screenY - Kn.screenY) : El = Sl = 0, Kn = e), Sl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : El;
        }
    }), _o = q(Qt), sa = M({
    }, Qt, {
        dataTransfer: 0
    }), aa = q(sa), fa = M({
    }, Xn, {
        relatedTarget: 0
    }), kl = q(fa), ca = M({
    }, cn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), da = q(ca), pa = M({
    }, cn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), ma = q(pa), ha = M({
    }, cn, {
        data: 0
    }), No = q(ha), va = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, ya = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ga = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function wa(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = ga[e]) ? !!n[e] : !1;
    }
    function xl() {
        return wa;
    }
    var Sa = M({
    }, Xn, {
        key: function(e) {
            if (e.key) {
                var n = va[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress" ? (e = Wt(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ya[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xl,
        charCode: function(e) {
            return e.type === "keypress" ? Wt(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Wt(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Ea = q(Sa), ka = M({
    }, Qt, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), Po = q(ka), xa = M({
    }, Xn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xl
    }), Ca = q(xa), _a = M({
    }, cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Na = q(_a), Pa = M({
    }, Qt, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Ta = q(Pa), La = [
        9,
        13,
        27,
        32
    ], Cl = me && "CompositionEvent" in window, Gn = null;
    me && "documentMode" in document && (Gn = document.documentMode);
    var za = me && "TextEvent" in window && !Gn, To = me && (!Cl || Gn && 8 < Gn && 11 >= Gn), Lo = String.fromCharCode(32), zo = !1;
    function Oo(e, n) {
        switch(e){
            case "keyup":
                return La.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Mo(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var dn = !1;
    function Oa(e, n) {
        switch(e){
            case "compositionend":
                return Mo(n);
            case "keypress":
                return n.which !== 32 ? null : (zo = !0, Lo);
            case "textInput":
                return e = n.data, e === Lo && zo ? null : e;
            default:
                return null;
        }
    }
    function Ma(e, n) {
        if (dn) return e === "compositionend" || !Cl && Oo(e, n) ? (e = xo(), Ht = gl = Pe = null, dn = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which);
                }
                return null;
            case "compositionend":
                return To && n.locale !== "ko" ? null : n.data;
            default:
                return null;
        }
    }
    var Ra = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Ro(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!Ra[e.type] : n === "textarea";
    }
    function Do(e, n, t, r) {
        eo(r), n = Gt(n, "onChange"), 0 < n.length && (t = new wl("onChange", "change", null, t, r), e.push({
            event: t,
            listeners: n
        }));
    }
    var Zn = null, Jn = null;
    function Da(e) {
        $o(e, 0);
    }
    function $t(e) {
        var n = yn(e);
        if (Wi(n)) return e;
    }
    function Ia(e, n) {
        if (e === "change") return n;
    }
    var Io = !1;
    me && (me ? (Xt = "oninput" in document, Xt || (_l = document.createElement("div"), _l.setAttribute("oninput", "return;"), Xt = typeof _l.oninput == "function"), Yt = Xt) : Yt = !1, Io = Yt && (!document.documentMode || 9 < document.documentMode));
    var Yt, Xt, _l;
    function Fo() {
        Zn && (Zn.detachEvent("onpropertychange", jo), Jn = Zn = null);
    }
    function jo(e) {
        if (e.propertyName === "value" && $t(Jn)) {
            var n = [];
            if (Do(n, Jn, e, nl(e)), e = Da, Qe) e(n);
            else {
                Qe = !0;
                try {
                    rl(e, n);
                } finally{
                    Qe = !1, ol();
                }
            }
        }
    }
    function Fa(e, n, t) {
        e === "focusin" ? (Fo(), Zn = n, Jn = t, Zn.attachEvent("onpropertychange", jo)) : e === "focusout" && Fo();
    }
    function ja(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return $t(Jn);
    }
    function Ua(e, n) {
        if (e === "click") return $t(n);
    }
    function Va(e, n) {
        if (e === "input" || e === "change") return $t(n);
    }
    function Ba(e, n) {
        return e === n && (e !== 0 || 1 / e == 1 / n) || e !== e && n !== n;
    }
    var ee = typeof Object.is == "function" ? Object.is : Ba, Ha = Object.prototype.hasOwnProperty;
    function qn(e, n) {
        if (ee(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var t = Object.keys(e), r = Object.keys(n);
        if (t.length !== r.length) return !1;
        for(r = 0; r < t.length; r++)if (!Ha.call(n, t[r]) || !ee(e[t[r]], n[t[r]])) return !1;
        return !0;
    }
    function Uo(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Vo(e, n) {
        var t = Uo(e);
        e = 0;
        for(var r; t;){
            if (t.nodeType === 3) {
                if (r = e + t.textContent.length, e <= n && r >= n) return {
                    node: t,
                    offset: n - e
                };
                e = r;
            }
            e: {
                for(; t;){
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break e;
                    }
                    t = t.parentNode;
                }
                t = void 0;
            }
            t = Uo(t);
        }
    }
    function Bo(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bo(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
    }
    function Ho() {
        for(var e1 = window, n = Ot(); n instanceof e1.HTMLIFrameElement;){
            try {
                var t = typeof n.contentWindow.location.href == "string";
            } catch (r) {
                t = !1;
            }
            if (t) e1 = n.contentWindow;
            else break;
            n = Ot(e1.document);
        }
        return n;
    }
    function Nl(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    var Wa = me && "documentMode" in document && 11 >= document.documentMode, pn = null, Pl = null, bn = null, Tl = !1;
    function Wo(e, n, t) {
        var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        Tl || pn == null || pn !== Ot(r) || (r = pn, "selectionStart" in r && Nl(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), bn && qn(bn, r) || (bn = r, r = Gt(Pl, "onSelect"), 0 < r.length && (n = new wl("onSelect", "select", null, n, t), e.push({
            event: n,
            listeners: r
        }), n.target = pn)));
    }
    ml("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    ml("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    ml(Zs, 2);
    for(Ll = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Kt = 0; Kt < Ll.length; Kt++)pl.set(Ll[Kt], 0);
    var Ll, Kt;
    nn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    nn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    nn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    nn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    He("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    He("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    He("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    He("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    He("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    He("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ao = new Set("cancel close invalid load scroll toggle".split(" ").concat(et));
    function Qo(e, n, t) {
        var r = e.type || "unknown-event";
        e.currentTarget = t, $s(r, n, void 0, e), e.currentTarget = null;
    }
    function $o(e, n) {
        n = (n & 4) != 0;
        for(var t = 0; t < e.length; t++){
            var r = e[t], l = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (n) for(var o = r.length - 1; 0 <= o; o--){
                    var u = r[o], s = u.instance, d = u.currentTarget;
                    if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
                    Qo(l, u, d), i = s;
                }
                else for(o = 0; o < r.length; o++){
                    if (u = r[o], s = u.instance, d = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
                    Qo(l, u, d), i = s;
                }
            }
        }
        if (Dt) throw e = sl, Dt = !1, sl = null, e;
    }
    function z(e, n) {
        var t = tu(n), r = e + "__bubble";
        t.has(r) || (Go(n, e, 2, !1), t.add(r));
    }
    var Yo = "_reactListening" + Math.random().toString(36).slice(2);
    function Xo(e) {
        e[Yo] || (e[Yo] = !0, Ii.forEach(function(n) {
            Ao.has(n) || Ko(n, !1, e, null), Ko(n, !0, e, null);
        }));
    }
    function Ko(e, n, t, r) {
        var l1 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = t;
        if (e === "selectionchange" && t.nodeType !== 9 && (i = t.ownerDocument), r !== null && !n && Ao.has(e)) {
            if (e !== "scroll") return;
            l1 |= 2, i = r;
        }
        var o = tu(i), u = e + "__" + (n ? "capture" : "bubble");
        o.has(u) || (n && (l1 |= 4), Go(i, e, l1, n), o.add(u));
    }
    function Go(e, n, t, r) {
        var l1 = pl.get(n);
        switch(l1 === void 0 ? 2 : l1){
            case 0:
                l1 = ia;
                break;
            case 1:
                l1 = oa;
                break;
            default:
                l1 = vl;
        }
        t = l1.bind(null, n, t, e), l1 = void 0, !ul || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l1 = !0), r ? l1 !== void 0 ? e.addEventListener(n, t, {
            capture: !0,
            passive: l1
        }) : e.addEventListener(n, t, !0) : l1 !== void 0 ? e.addEventListener(n, t, {
            passive: l1
        }) : e.addEventListener(n, t, !1);
    }
    function Zo(e, n, t, r, l) {
        var i = r;
        if ((n & 1) == 0 && (n & 2) == 0 && r !== null) e: for(;;){
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l) break;
                if (o === 4) for(o = r.return; o !== null;){
                    var s = o.tag;
                    if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    o = o.return;
                }
                for(; u !== null;){
                    if (o = Ye(u), o === null) return;
                    if (s = o.tag, s === 5 || s === 6) {
                        r = i = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
        Hs(function() {
            var d = i, y = nl(t), C = [];
            e: {
                var h = Eo.get(e);
                if (h !== void 0) {
                    var S = wl, k = e;
                    switch(e){
                        case "keypress":
                            if (Wt(t) === 0) break e;
                        case "keydown":
                        case "keyup":
                            S = Ea;
                            break;
                        case "focusin":
                            k = "focus", S = kl;
                            break;
                        case "focusout":
                            k = "blur", S = kl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            S = kl;
                            break;
                        case "click":
                            if (t.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            S = _o;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            S = aa;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            S = Ca;
                            break;
                        case yo:
                        case go:
                        case wo:
                            S = da;
                            break;
                        case So:
                            S = Na;
                            break;
                        case "scroll":
                            S = ua;
                            break;
                        case "wheel":
                            S = Ta;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            S = ma;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            S = Po;
                    }
                    var E = (n & 4) != 0, c = !E && e === "scroll", a = E ? h !== null ? h + "Capture" : null : h;
                    E = [];
                    for(var f = d, p; f !== null;){
                        p = f;
                        var m = p.stateNode;
                        if (p.tag === 5 && m !== null && (p = m, a !== null && (m = Vn(f, a), m != null && E.push(nt(f, m, p)))), c) break;
                        f = f.return;
                    }
                    0 < E.length && (h = new S(h, k, null, t, y), C.push({
                        event: h,
                        listeners: E
                    }));
                }
            }
            if ((n & 7) == 0) {
                e: {
                    if (h = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", h && (n & 16) == 0 && (k = t.relatedTarget || t.fromElement) && (Ye(k) || k[vn])) break e;
                    if ((S || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (k = t.relatedTarget || t.toElement, S = d, k = k ? Ye(k) : null, k !== null && (c = $e(k), k !== c || k.tag !== 5 && k.tag !== 6) && (k = null)) : (S = null, k = d), S !== k)) {
                        if (E = _o, m = "onMouseLeave", a = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (E = Po, m = "onPointerLeave", a = "onPointerEnter", f = "pointer"), c = S == null ? h : yn(S), p = k == null ? h : yn(k), h = new E(m, f + "leave", S, t, y), h.target = c, h.relatedTarget = p, m = null, Ye(y) === d && (E = new E(a, f + "enter", k, t, y), E.target = p, E.relatedTarget = c, m = E), c = m, S && k) n: {
                            for(E = S, a = k, f = 0, p = E; p; p = mn(p))f++;
                            for(p = 0, m = a; m; m = mn(m))p++;
                            for(; 0 < f - p;)E = mn(E), f--;
                            for(; 0 < p - f;)a = mn(a), p--;
                            for(; f--;){
                                if (E === a || a !== null && E === a.alternate) break n;
                                E = mn(E), a = mn(a);
                            }
                            E = null;
                        }
                        else E = null;
                        S !== null && Jo(C, h, S, E, !1), k !== null && c !== null && Jo(C, c, k, E, !0);
                    }
                }
                e: {
                    if (h = d ? yn(d) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file") var _ = Ia;
                    else if (Ro(h)) if (Io) _ = Va;
                    else {
                        _ = ja;
                        var w = Fa;
                    }
                    else (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = Ua);
                    if (_ && (_ = _(e, d))) {
                        Do(C, _, t, y);
                        break e;
                    }
                    w && w(e, h, d), e === "focusout" && (w = h._wrapperState) && w.controlled && h.type === "number" && Kr(h, "number", h.value);
                }
                switch(w = d ? yn(d) : window, e){
                    case "focusin":
                        (Ro(w) || w.contentEditable === "true") && (pn = w, Pl = d, bn = null);
                        break;
                    case "focusout":
                        bn = Pl = pn = null;
                        break;
                    case "mousedown":
                        Tl = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Tl = !1, Wo(C, t, y);
                        break;
                    case "selectionchange":
                        if (Wa) break;
                    case "keydown":
                    case "keyup":
                        Wo(C, t, y);
                }
                var N;
                if (Cl) e: {
                    switch(e){
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e;
                    }
                    T = void 0;
                }
                else dn ? Oo(e, t) && (T = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (T = "onCompositionStart");
                T && (To && t.locale !== "ko" && (dn || T !== "onCompositionStart" ? T === "onCompositionEnd" && dn && (N = xo()) : (Pe = y, gl = "value" in Pe ? Pe.value : Pe.textContent, dn = !0)), w = Gt(d, T), 0 < w.length && (T = new No(T, e, null, t, y), C.push({
                    event: T,
                    listeners: w
                }), N ? T.data = N : (N = Mo(t), N !== null && (T.data = N)))), (N = za ? Oa(e, t) : Ma(e, t)) && (d = Gt(d, "onBeforeInput"), 0 < d.length && (y = new No("onBeforeInput", "beforeinput", null, t, y), C.push({
                    event: y,
                    listeners: d
                }), y.data = N));
            }
            $o(C, n);
        });
    }
    function nt(e, n, t) {
        return {
            instance: e,
            listener: n,
            currentTarget: t
        };
    }
    function Gt(e, n) {
        for(var t = n + "Capture", r = []; e !== null;){
            var l = e, i = l.stateNode;
            l.tag === 5 && i !== null && (l = i, i = Vn(e, t), i != null && r.unshift(nt(e, i, l)), i = Vn(e, n), i != null && r.push(nt(e, i, l))), e = e.return;
        }
        return r;
    }
    function mn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5)
        return e || null;
    }
    function Jo(e, n, t, r, l) {
        for(var i = n._reactName, o = []; t !== null && t !== r;){
            var u = t, s = u.alternate, d = u.stateNode;
            if (s !== null && s === r) break;
            u.tag === 5 && d !== null && (u = d, l ? (s = Vn(t, i), s != null && o.unshift(nt(t, s, u))) : l || (s = Vn(t, i), s != null && o.push(nt(t, s, u)))), t = t.return;
        }
        o.length !== 0 && e.push({
            event: n,
            listeners: o
        });
    }
    function Zt() {
    }
    var zl = null, Ol = null;
    function qo(e, n) {
        switch(e){
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!n.autoFocus;
        }
        return !1;
    }
    function Ml(e, n) {
        return e === "textarea" || e === "option" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var bo = typeof setTimeout == "function" ? setTimeout : void 0, Aa = typeof clearTimeout == "function" ? clearTimeout : void 0;
    function Rl(e) {
        e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
    }
    function hn(e) {
        for(; e != null; e = e.nextSibling){
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
        }
        return e;
    }
    function eu(e) {
        e = e.previousSibling;
        for(var n = 0; e;){
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "$" || t === "$!" || t === "$?") {
                    if (n === 0) return e;
                    n--;
                } else t === "/$" && n++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var Dl = 0;
    function Qa(e) {
        return {
            $$typeof: Hr,
            toString: e,
            valueOf: e
        };
    }
    var Jt = Math.random().toString(36).slice(2), Te = "__reactFiber$" + Jt, qt = "__reactProps$" + Jt, vn = "__reactContainer$" + Jt, nu = "__reactEvents$" + Jt;
    function Ye(e) {
        var n = e[Te];
        if (n) return n;
        for(var t = e.parentNode; t;){
            if (n = t[vn] || t[Te]) {
                if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for(e = eu(e); e !== null;){
                    if (t = e[Te]) return t;
                    e = eu(e);
                }
                return n;
            }
            e = t, t = e.parentNode;
        }
        return null;
    }
    function tt(e) {
        return e = e[Te] || e[vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function yn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(v(33));
    }
    function bt(e) {
        return e[qt] || null;
    }
    function tu(e) {
        var n = e[nu];
        return n === void 0 && (n = e[nu] = new Set), n;
    }
    var Il = [], gn = -1;
    function Le(e) {
        return {
            current: e
        };
    }
    function O(e) {
        0 > gn || (e.current = Il[gn], Il[gn] = null, gn--);
    }
    function R(e, n) {
        gn++, Il[gn] = e.current, e.current = n;
    }
    var ze = {
    }, W = Le(ze), K = Le(!1), Xe = ze;
    function wn(e, n) {
        var t = e.type.contextTypes;
        if (!t) return ze;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
        var l1 = {
        }, i;
        for(i in t)l1[i] = n[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l1), l1;
    }
    function G(e) {
        return e = e.childContextTypes, e != null;
    }
    function er() {
        O(K), O(W);
    }
    function ru(e, n, t) {
        if (W.current !== ze) throw Error(v(168));
        R(W, n), R(K, t);
    }
    function lu(e, n, t) {
        var r = e.stateNode;
        if (e = n.childContextTypes, typeof r.getChildContext != "function") return t;
        r = r.getChildContext();
        for(var l1 in r)if (!(l1 in e)) throw Error(v(108, tn(n) || "Unknown", l1));
        return M({
        }, t, r);
    }
    function nr(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ze, Xe = W.current, R(W, e), R(K, K.current), !0;
    }
    function iu(e, n, t) {
        var r = e.stateNode;
        if (!r) throw Error(v(169));
        t ? (e = lu(e, n, Xe), r.__reactInternalMemoizedMergedChildContext = e, O(K), O(W), R(W, e)) : O(K), R(K, t);
    }
    var Fl = null, Ke = null, $a = U.unstable_runWithPriority, jl = U.unstable_scheduleCallback, Ul = U.unstable_cancelCallback, Ya = U.unstable_shouldYield, ou = U.unstable_requestPaint, Vl = U.unstable_now, Xa = U.unstable_getCurrentPriorityLevel, tr = U.unstable_ImmediatePriority, uu = U.unstable_UserBlockingPriority, su = U.unstable_NormalPriority, au = U.unstable_LowPriority, fu = U.unstable_IdlePriority, Bl = {
    }, Ka = ou !== void 0 ? ou : function() {
    }, he = null, rr = null, Hl = !1, cu = Vl(), A = 10000 > cu ? Vl : function() {
        return Vl() - cu;
    };
    function Sn() {
        switch(Xa()){
            case tr:
                return 99;
            case uu:
                return 98;
            case su:
                return 97;
            case au:
                return 96;
            case fu:
                return 95;
            default:
                throw Error(v(332));
        }
    }
    function du(e) {
        switch(e){
            case 99:
                return tr;
            case 98:
                return uu;
            case 97:
                return su;
            case 96:
                return au;
            case 95:
                return fu;
            default:
                throw Error(v(332));
        }
    }
    function Ge(e, n) {
        return e = du(e), $a(e, n);
    }
    function rt(e, n, t) {
        return e = du(e), jl(e, n, t);
    }
    function ae() {
        if (rr !== null) {
            var e = rr;
            rr = null, Ul(e);
        }
        pu();
    }
    function pu() {
        if (!Hl && he !== null) {
            Hl = !0;
            var e = 0;
            try {
                var n = he;
                Ge(99, function() {
                    for(; e < n.length; e++){
                        var t = n[e];
                        do t = t(!0);
                        while (t !== null)
                    }
                }), he = null;
            } catch (t) {
                throw he !== null && (he = he.slice(e + 1)), jl(tr, ae), t;
            } finally{
                Hl = !1;
            }
        }
    }
    var Ga = We.ReactCurrentBatchConfig;
    function oe(e, n) {
        if (e && e.defaultProps) {
            n = M({
            }, n), e = e.defaultProps;
            for(var t in e)n[t] === void 0 && (n[t] = e[t]);
            return n;
        }
        return n;
    }
    var lr = Le(null), ir = null, En = null, or = null;
    function Wl() {
        or = En = ir = null;
    }
    function Al(e) {
        var n = lr.current;
        O(lr), e.type._context._currentValue = n;
    }
    function mu(e, n) {
        for(; e !== null;){
            var t = e.alternate;
            if ((e.childLanes & n) === n) {
                if (t === null || (t.childLanes & n) === n) break;
                t.childLanes |= n;
            } else e.childLanes |= n, t !== null && (t.childLanes |= n);
            e = e.return;
        }
    }
    function kn(e, n) {
        ir = e, or = En = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) != 0 && (ue = !0), e.firstContext = null);
    }
    function ne(e, n) {
        if (or !== e && n !== !1 && n !== 0) if ((typeof n != "number" || n === 1073741823) && (or = e, n = 1073741823), n = {
            context: e,
            observedBits: n,
            next: null
        }, En === null) {
            if (ir === null) throw Error(v(308));
            En = n, ir.dependencies = {
                lanes: 0,
                firstContext: n,
                responders: null
            };
        } else En = En.next = n;
        return e._currentValue;
    }
    var Oe = !1;
    function Ql(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null
            },
            effects: null
        };
    }
    function hu(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Me(e, n) {
        return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function Re(e, n) {
        if (e = e.updateQueue, e !== null) {
            e = e.shared;
            var t = e.pending;
            t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
        }
    }
    function vu(e, n) {
        var t = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, t === r)) {
            var l = null, i = null;
            if (t = t.firstBaseUpdate, t !== null) {
                do {
                    var o = {
                        eventTime: t.eventTime,
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: t.callback,
                        next: null
                    };
                    i === null ? l = i = o : i = i.next = o, t = t.next;
                }while (t !== null)
                i === null ? l = i = n : i = i.next = n;
            } else l = i = n;
            t = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = t;
            return;
        }
        e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
    }
    function lt(e, n, t, r) {
        var l1 = e.updateQueue;
        Oe = !1;
        var i = l1.firstBaseUpdate, o = l1.lastBaseUpdate, u = l1.shared.pending;
        if (u !== null) {
            l1.shared.pending = null;
            var s = u, d = s.next;
            s.next = null, o === null ? i = d : o.next = d, o = s;
            var y = e.alternate;
            if (y !== null) {
                y = y.updateQueue;
                var C = y.lastBaseUpdate;
                C !== o && (C === null ? y.firstBaseUpdate = d : C.next = d, y.lastBaseUpdate = s);
            }
        }
        if (i !== null) {
            C = l1.baseState, o = 0, y = d = s = null;
            do {
                u = i.lane;
                var h = i.eventTime;
                if ((r & u) === u) {
                    y !== null && (y = y.next = {
                        eventTime: h,
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    });
                    e: {
                        var S = e, k = i;
                        switch(u = n, h = t, k.tag){
                            case 1:
                                if (S = k.payload, typeof S == "function") {
                                    C = S.call(h, C, u);
                                    break e;
                                }
                                C = S;
                                break e;
                            case 3:
                                S.flags = S.flags & -4097 | 64;
                            case 0:
                                if (S = k.payload, u = typeof S == "function" ? S.call(h, C, u) : S, u == null) break e;
                                C = M({
                                }, C, u);
                                break e;
                            case 2:
                                Oe = !0;
                        }
                    }
                    i.callback !== null && (e.flags |= 32, u = l1.effects, u === null ? l1.effects = [
                        i
                    ] : u.push(i));
                } else h = {
                    eventTime: h,
                    lane: u,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                }, y === null ? (d = y = h, s = C) : y = y.next = h, o |= u;
                if (i = i.next, i === null) {
                    if (u = l1.shared.pending, u === null) break;
                    i = u.next, u.next = null, l1.lastBaseUpdate = u, l1.shared.pending = null;
                }
            }while (1)
            y === null && (s = C), l1.baseState = s, l1.firstBaseUpdate = d, l1.lastBaseUpdate = y, vt |= o, e.lanes = o, e.memoizedState = C;
        }
    }
    function yu(e, n, t) {
        if (e = n.effects, n.effects = null, e !== null) for(n = 0; n < e.length; n++){
            var r = e[n], l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = t, typeof l != "function") throw Error(v(191, l));
                l.call(r);
            }
        }
    }
    var gu = new _t.Component().refs;
    function ur(e, n, t, r) {
        n = e.memoizedState, t = t(r, n), t = t == null ? n : M({
        }, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
    }
    var sr = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? $e(e) === e : !1;
        },
        enqueueSetState: function(e, n, t) {
            e = e._reactInternals;
            var r = b(), l1 = Fe(e), i = Me(r, l1);
            i.payload = n, t != null && (i.callback = t), Re(e, i), je(e, l1, r);
        },
        enqueueReplaceState: function(e, n, t) {
            e = e._reactInternals;
            var r = b(), l1 = Fe(e), i = Me(r, l1);
            i.tag = 1, i.payload = n, t != null && (i.callback = t), Re(e, i), je(e, l1, r);
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var t = b(), r = Fe(e), l1 = Me(t, r);
            l1.tag = 2, n != null && (l1.callback = n), Re(e, l1), je(e, r, t);
        }
    };
    function wu(e, n, t, r, l, i, o) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !qn(t, r) || !qn(l, i) : !0;
    }
    function Su(e, n, t) {
        var r = !1, l1 = ze, i = n.contextType;
        return typeof i == "object" && i !== null ? i = ne(i) : (l1 = G(n) ? Xe : W.current, r = n.contextTypes, i = (r = r != null) ? wn(e, l1) : ze), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sr, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l1, e.__reactInternalMemoizedMaskedChildContext = i), n;
    }
    function Eu(e, n, t, r) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sr.enqueueReplaceState(n, n.state, null);
    }
    function $l(e, n, t, r) {
        var l1 = e.stateNode;
        l1.props = t, l1.state = e.memoizedState, l1.refs = gu, Ql(e);
        var i = n.contextType;
        typeof i == "object" && i !== null ? l1.context = ne(i) : (i = G(n) ? Xe : W.current, l1.context = wn(e, i)), lt(e, t, l1, r), l1.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (ur(e, n, i, t), l1.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l1.getSnapshotBeforeUpdate == "function" || typeof l1.UNSAFE_componentWillMount != "function" && typeof l1.componentWillMount != "function" || (n = l1.state, typeof l1.componentWillMount == "function" && l1.componentWillMount(), typeof l1.UNSAFE_componentWillMount == "function" && l1.UNSAFE_componentWillMount(), n !== l1.state && sr.enqueueReplaceState(l1, l1.state, null), lt(e, t, l1, r), l1.state = e.memoizedState), typeof l1.componentDidMount == "function" && (e.flags |= 4);
    }
    var ar = Array.isArray;
    function it(e, n, t) {
        if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (t._owner) {
                if (t = t._owner, t) {
                    if (t.tag !== 1) throw Error(v(309));
                    var r = t.stateNode;
                }
                if (!r) throw Error(v(147, e));
                var l = "" + e;
                return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l ? n.ref : (n = function(i) {
                    var o = r.refs;
                    o === gu && (o = r.refs = {
                    }), i === null ? delete o[l] : o[l] = i;
                }, n._stringRef = l, n);
            }
            if (typeof e != "string") throw Error(v(284));
            if (!t._owner) throw Error(v(290, e));
        }
        return e;
    }
    function fr(e, n) {
        if (e.type !== "textarea") throw Error(v(31, Object.prototype.toString.call(n) === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : n));
    }
    function ku(e) {
        function n(c, a) {
            if (e) {
                var f = c.lastEffect;
                f !== null ? (f.nextEffect = a, c.lastEffect = a) : c.firstEffect = c.lastEffect = a, a.nextEffect = null, a.flags = 8;
            }
        }
        function t(c, a) {
            if (!e) return null;
            for(; a !== null;)n(c, a), a = a.sibling;
            return null;
        }
        function r(c, a) {
            for(c = new Map; a !== null;)a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
            return c;
        }
        function l(c, a) {
            return c = Be(c, a), c.index = 0, c.sibling = null, c;
        }
        function i(c, a, f) {
            return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < a ? (c.flags = 2, a) : f) : (c.flags = 2, a)) : a;
        }
        function o(c) {
            return e && c.alternate === null && (c.flags = 2), c;
        }
        function u(c, a, f, p) {
            return a === null || a.tag !== 6 ? (a = Pi(f, c.mode, p), a.return = c, a) : (a = l(a, f), a.return = c, a);
        }
        function s(c, a, f, p) {
            return a !== null && a.elementType === f.type ? (p = l(a, f.props), p.ref = it(c, a, f), p.return = c, p) : (p = Tr(f.type, f.key, f.props, null, c.mode, p), p.ref = it(c, a, f), p.return = c, p);
        }
        function d(c, a, f, p) {
            return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = Ti(f, c.mode, p), a.return = c, a) : (a = l(a, f.children || []), a.return = c, a);
        }
        function y(c, a, f, p, m) {
            return a === null || a.tag !== 7 ? (a = zn(f, c.mode, p, m), a.return = c, a) : (a = l(a, f), a.return = c, a);
        }
        function C(c, a, f) {
            if (typeof a == "string" || typeof a == "number") return a = Pi("" + a, c.mode, f), a.return = c, a;
            if (typeof a == "object" && a !== null) {
                switch(a.$$typeof){
                    case Mn:
                        return f = Tr(a.type, a.key, a.props, null, c.mode, f), f.ref = it(c, null, a), f.return = c, f;
                    case Ae:
                        return a = Ti(a, c.mode, f), a.return = c, a;
                }
                if (ar(a) || In(a)) return a = zn(a, c.mode, f, null), a.return = c, a;
                fr(c, a);
            }
            return null;
        }
        function h(c, a, f, p) {
            var m = a !== null ? a.key : null;
            if (typeof f == "string" || typeof f == "number") return m !== null ? null : u(c, a, "" + f, p);
            if (typeof f == "object" && f !== null) {
                switch(f.$$typeof){
                    case Mn:
                        return f.key === m ? f.type === Ee ? y(c, a, f.props.children, p, m) : s(c, a, f, p) : null;
                    case Ae:
                        return f.key === m ? d(c, a, f, p) : null;
                }
                if (ar(f) || In(f)) return m !== null ? null : y(c, a, f, p, null);
                fr(c, f);
            }
            return null;
        }
        function S(c, a, f, p, m) {
            if (typeof p == "string" || typeof p == "number") return c = c.get(f) || null, u(a, c, "" + p, m);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Mn:
                        return c = c.get(p.key === null ? f : p.key) || null, p.type === Ee ? y(a, c, p.props.children, m, p.key) : s(a, c, p, m);
                    case Ae:
                        return c = c.get(p.key === null ? f : p.key) || null, d(a, c, p, m);
                }
                if (ar(p) || In(p)) return c = c.get(f) || null, y(a, c, p, m, null);
                fr(a, p);
            }
            return null;
        }
        function k(c, a, f, p) {
            for(var m = null, _ = null, w = a, N = a = 0, T = null; w !== null && N < f.length; N++){
                w.index > N ? (T = w, w = null) : T = w.sibling;
                var P = h(c, w, f[N], p);
                if (P === null) {
                    w === null && (w = T);
                    break;
                }
                e && w && P.alternate === null && n(c, w), a = i(P, a, N), _ === null ? m = P : _.sibling = P, _ = P, w = T;
            }
            if (N === f.length) return t(c, w), m;
            if (w === null) {
                for(; N < f.length; N++)w = C(c, f[N], p), w !== null && (a = i(w, a, N), _ === null ? m = w : _.sibling = w, _ = w);
                return m;
            }
            for(w = r(c, w); N < f.length; N++)T = S(w, c, N, f[N], p), T !== null && (e && T.alternate !== null && w.delete(T.key === null ? N : T.key), a = i(T, a, N), _ === null ? m = T : _.sibling = T, _ = T);
            return e && w.forEach(function(Se) {
                return n(c, Se);
            }), m;
        }
        function E(c, a, f, p) {
            var m = In(f);
            if (typeof m != "function") throw Error(v(150));
            if (f = m.call(f), f == null) throw Error(v(151));
            for(var _ = m = null, w = a, N = a = 0, T = null, P = f.next(); w !== null && !P.done; N++, P = f.next()){
                w.index > N ? (T = w, w = null) : T = w.sibling;
                var Se = h(c, w, P.value, p);
                if (Se === null) {
                    w === null && (w = T);
                    break;
                }
                e && w && Se.alternate === null && n(c, w), a = i(Se, a, N), _ === null ? m = Se : _.sibling = Se, _ = Se, w = T;
            }
            if (P.done) return t(c, w), m;
            if (w === null) {
                for(; !P.done; N++, P = f.next())P = C(c, P.value, p), P !== null && (a = i(P, a, N), _ === null ? m = P : _.sibling = P, _ = P);
                return m;
            }
            for(w = r(c, w); !P.done; N++, P = f.next())P = S(w, c, N, P.value, p), P !== null && (e && P.alternate !== null && w.delete(P.key === null ? N : P.key), a = i(P, a, N), _ === null ? m = P : _.sibling = P, _ = P);
            return e && w.forEach(function(Cs) {
                return n(c, Cs);
            }), m;
        }
        return function(c, a, f, p) {
            var m = typeof f == "object" && f !== null && f.type === Ee && f.key === null;
            m && (f = f.props.children);
            var _ = typeof f == "object" && f !== null;
            if (_) switch(f.$$typeof){
                case Mn:
                    e: {
                        for(_ = f.key, m = a; m !== null;){
                            if (m.key === _) {
                                switch(m.tag){
                                    case 7:
                                        if (f.type === Ee) {
                                            t(c, m.sibling), a = l(m, f.props.children), a.return = c, c = a;
                                            break e;
                                        }
                                        break;
                                    default:
                                        if (m.elementType === f.type) {
                                            t(c, m.sibling), a = l(m, f.props), a.ref = it(c, m, f), a.return = c, c = a;
                                            break e;
                                        }
                                }
                                t(c, m);
                                break;
                            } else n(c, m);
                            m = m.sibling;
                        }
                        f.type === Ee ? (a = zn(f.props.children, c.mode, p, f.key), a.return = c, c = a) : (p = Tr(f.type, f.key, f.props, null, c.mode, p), p.ref = it(c, a, f), p.return = c, c = p);
                    }
                    return o(c);
                case Ae:
                    e: {
                        for(m = f.key; a !== null;){
                            if (a.key === m) if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                                t(c, a.sibling), a = l(a, f.children || []), a.return = c, c = a;
                                break e;
                            } else {
                                t(c, a);
                                break;
                            }
                            else n(c, a);
                            a = a.sibling;
                        }
                        a = Ti(f, c.mode, p), a.return = c, c = a;
                    }
                    return o(c);
            }
            if (typeof f == "string" || typeof f == "number") return f = "" + f, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l(a, f), a.return = c, c = a) : (t(c, a), a = Pi(f, c.mode, p), a.return = c, c = a), o(c);
            if (ar(f)) return k(c, a, f, p);
            if (In(f)) return E(c, a, f, p);
            if (_ && fr(c, f), typeof f == "undefined" && !m) switch(c.tag){
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(v(152, tn(c.type) || "Component"));
            }
            return t(c, a);
        };
    }
    var cr = ku(!0), xu = ku(!1), ot = {
    }, fe = Le(ot), ut = Le(ot), st = Le(ot);
    function Ze(e) {
        if (e === ot) throw Error(v(174));
        return e;
    }
    function Yl(e, n) {
        switch(R(st, n), R(ut, e), R(fe, ot), e = n.nodeType, e){
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : qr(null, "");
                break;
            default:
                e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = qr(n, e);
        }
        O(fe), R(fe, n);
    }
    function xn() {
        O(fe), O(ut), O(st);
    }
    function Cu(e) {
        Ze(st.current);
        var n = Ze(fe.current), t = qr(n, e.type);
        n !== t && (R(ut, e), R(fe, t));
    }
    function Xl(e) {
        ut.current === e && (O(fe), O(ut));
    }
    var D = Le(0);
    function dr(e) {
        for(var n = e; n !== null;){
            if (n.tag === 13) {
                var t = n.memoizedState;
                if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 64) != 0) return n;
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === e) break;
            for(; n.sibling === null;){
                if (n.return === null || n.return === e) return null;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
        return null;
    }
    var ve = null, De = null, ce = !1;
    function _u(e, n) {
        var t = le(5, null, null, 0);
        t.elementType = "DELETED", t.type = "DELETED", t.stateNode = n, t.return = e, t.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t;
    }
    function Nu(e, n) {
        switch(e.tag){
            case 5:
                var t = e.type;
                return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 6:
                return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, !0) : !1;
            case 13:
                return !1;
            default:
                return !1;
        }
    }
    function Kl(e) {
        if (ce) {
            var n = De;
            if (n) {
                var t = n;
                if (!Nu(e, n)) {
                    if (n = hn(t.nextSibling), !n || !Nu(e, n)) {
                        e.flags = e.flags & -1025 | 2, ce = !1, ve = e;
                        return;
                    }
                    _u(ve, t);
                }
                ve = e, De = hn(n.firstChild);
            } else e.flags = e.flags & -1025 | 2, ce = !1, ve = e;
        }
    }
    function Pu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        ve = e;
    }
    function pr(e) {
        if (e !== ve) return !1;
        if (!ce) return Pu(e), ce = !0, !1;
        var n = e.type;
        if (e.tag !== 5 || n !== "head" && n !== "body" && !Ml(n, e.memoizedProps)) for(n = De; n;)_u(e, n), n = hn(n.nextSibling);
        if (Pu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
            e: {
                for(e = e.nextSibling, n = 0; e;){
                    if (e.nodeType === 8) {
                        var t = e.data;
                        if (t === "/$") {
                            if (n === 0) {
                                De = hn(e.nextSibling);
                                break e;
                            }
                            n--;
                        } else t !== "$" && t !== "$!" && t !== "$?" || n++;
                    }
                    e = e.nextSibling;
                }
                De = null;
            }
        } else De = ve ? hn(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Gl() {
        De = ve = null, ce = !1;
    }
    var Cn = [];
    function Zl() {
        for(var e1 = 0; e1 < Cn.length; e1++)Cn[e1]._workInProgressVersionPrimary = null;
        Cn.length = 0;
    }
    var at = We.ReactCurrentDispatcher, te = We.ReactCurrentBatchConfig, ft = 0, I = null, Q = null, B = null, mr = !1, ct = !1;
    function Z() {
        throw Error(v(321));
    }
    function Jl(e, n) {
        if (n === null) return !1;
        for(var t = 0; t < n.length && t < e.length; t++)if (!ee(e[t], n[t])) return !1;
        return !0;
    }
    function ql(e, n, t, r, l, i) {
        if (ft = i, I = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, at.current = e === null || e.memoizedState === null ? Ja : qa, e = t(r, l), ct) {
            i = 0;
            do {
                if (ct = !1, !(25 > i)) throw Error(v(301));
                i += 1, B = Q = null, n.updateQueue = null, at.current = ba, e = t(r, l);
            }while (ct)
        }
        if (at.current = gr, n = Q !== null && Q.next !== null, ft = 0, B = Q = I = null, mr = !1, n) throw Error(v(300));
        return e;
    }
    function Je() {
        var e1 = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return B === null ? I.memoizedState = B = e1 : B = B.next = e1, B;
    }
    function qe() {
        if (Q === null) {
            var e = I.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Q.next;
        var n = B === null ? I.memoizedState : B.next;
        if (n !== null) B = n, Q = e;
        else {
            if (e === null) throw Error(v(310));
            Q = e, e = {
                memoizedState: Q.memoizedState,
                baseState: Q.baseState,
                baseQueue: Q.baseQueue,
                queue: Q.queue,
                next: null
            }, B === null ? I.memoizedState = B = e : B = B.next = e;
        }
        return B;
    }
    function de(e, n) {
        return typeof n == "function" ? n(e) : n;
    }
    function dt(e) {
        var n = qe(), t = n.queue;
        if (t === null) throw Error(v(311));
        t.lastRenderedReducer = e;
        var r = Q, l1 = r.baseQueue, i = t.pending;
        if (i !== null) {
            if (l1 !== null) {
                var o = l1.next;
                l1.next = i.next, i.next = o;
            }
            r.baseQueue = l1 = i, t.pending = null;
        }
        if (l1 !== null) {
            l1 = l1.next, r = r.baseState;
            var u = o = i = null, s = l1;
            do {
                var d = s.lane;
                if ((ft & d) === d) u !== null && (u = u.next = {
                    lane: 0,
                    action: s.action,
                    eagerReducer: s.eagerReducer,
                    eagerState: s.eagerState,
                    next: null
                }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                else {
                    var y = {
                        lane: d,
                        action: s.action,
                        eagerReducer: s.eagerReducer,
                        eagerState: s.eagerState,
                        next: null
                    };
                    u === null ? (o = u = y, i = r) : u = u.next = y, I.lanes |= d, vt |= d;
                }
                s = s.next;
            }while (s !== null && s !== l1)
            u === null ? i = r : u.next = o, ee(r, n.memoizedState) || (ue = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = u, t.lastRenderedState = r;
        }
        return [
            n.memoizedState,
            t.dispatch
        ];
    }
    function pt(e) {
        var n = qe(), t = n.queue;
        if (t === null) throw Error(v(311));
        t.lastRenderedReducer = e;
        var r = t.dispatch, l1 = t.pending, i = n.memoizedState;
        if (l1 !== null) {
            t.pending = null;
            var o = l1 = l1.next;
            do i = e(i, o.action), o = o.next;
            while (o !== l1)
            ee(i, n.memoizedState) || (ue = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
        }
        return [
            i,
            r
        ];
    }
    function Tu(e, n, t) {
        var r = n._getVersion;
        r = r(n._source);
        var l1 = n._workInProgressVersionPrimary;
        if (l1 !== null ? e = l1 === r : (e = e.mutableReadLanes, (e = (ft & e) === e) && (n._workInProgressVersionPrimary = r, Cn.push(n))), e) return t(n._source);
        throw Cn.push(n), Error(v(350));
    }
    function Lu(e, n, t, r) {
        var l1 = X;
        if (l1 === null) throw Error(v(349));
        var i = n._getVersion, o = i(n._source), u = at.current, s1 = u.useState(function() {
            return Tu(l1, n, t);
        }), d = s1[1], y1 = s1[0];
        s1 = B;
        var C = e.memoizedState, h4 = C.refs, S1 = h4.getSnapshot, k = C.source;
        C = C.subscribe;
        var E = I;
        return e.memoizedState = {
            refs: h4,
            source: n,
            subscribe: r
        }, u.useEffect(function() {
            h4.getSnapshot = t, h4.setSnapshot = d;
            var c = i(n._source);
            if (!ee(o, c)) {
                c = t(n._source), ee(y1, c) || (d(c), c = Fe(E), l1.mutableReadLanes |= c & l1.pendingLanes), c = l1.mutableReadLanes, l1.entangledLanes |= c;
                for(var a = l1.entanglements, f = c; 0 < f;){
                    var p = 31 - Ne(f), m = 1 << p;
                    a[p] |= c, f &= ~m;
                }
            }
        }, [
            t,
            n,
            r
        ]), u.useEffect(function() {
            return r(n._source, function() {
                var c = h4.getSnapshot, a = h4.setSnapshot;
                try {
                    a(c(n._source));
                    var f = Fe(E);
                    l1.mutableReadLanes |= f & l1.pendingLanes;
                } catch (p) {
                    a(function() {
                        throw p;
                    });
                }
            });
        }, [
            n,
            r
        ]), ee(S1, t) && ee(k, n) && ee(C, r) || (e = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: de,
            lastRenderedState: y1
        }, e.dispatch = d = ti.bind(null, I, e), s1.queue = e, s1.baseQueue = null, y1 = Tu(l1, n, t), s1.memoizedState = s1.baseState = y1), y1;
    }
    function zu(e, n, t) {
        var r = qe();
        return Lu(r, e, n, t);
    }
    function mt(e) {
        var n = Je();
        return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = n.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: de,
            lastRenderedState: e
        }, e = e.dispatch = ti.bind(null, I, e), [
            n.memoizedState,
            e
        ];
    }
    function hr(e, n, t, r) {
        return e = {
            tag: e,
            create: n,
            destroy: t,
            deps: r,
            next: null
        }, n = I.updateQueue, n === null ? (n = {
            lastEffect: null
        }, I.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
    }
    function Ou(e) {
        var n = Je();
        return e = {
            current: e
        }, n.memoizedState = e;
    }
    function vr() {
        return qe().memoizedState;
    }
    function bl(e, n, t, r) {
        var l1 = Je();
        I.flags |= e, l1.memoizedState = hr(1 | n, t, void 0, r === void 0 ? null : r);
    }
    function ei(e, n, t, r) {
        var l1 = qe();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (Q !== null) {
            var o = Q.memoizedState;
            if (i = o.destroy, r !== null && Jl(r, o.deps)) {
                hr(n, t, i, r);
                return;
            }
        }
        I.flags |= e, l1.memoizedState = hr(1 | n, t, i, r);
    }
    function Mu(e, n) {
        return bl(516, 4, e, n);
    }
    function yr(e, n) {
        return ei(516, 4, e, n);
    }
    function Ru(e, n) {
        return ei(4, 2, e, n);
    }
    function Du(e, n) {
        if (typeof n == "function") return e = e(), n(e), function() {
            n(null);
        };
        if (n != null) return e = e(), n.current = e, function() {
            n.current = null;
        };
    }
    function Iu(e, n, t) {
        return t = t != null ? t.concat([
            e
        ]) : null, ei(4, 2, Du.bind(null, n, e), t);
    }
    function ni() {
    }
    function Fu(e, n) {
        var t = qe();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (t.memoizedState = [
            e,
            n
        ], e);
    }
    function ju(e, n) {
        var t = qe();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Jl(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [
            e,
            n
        ], e);
    }
    function Za(e, n) {
        var t = Sn();
        Ge(98 > t ? 98 : t, function() {
            e(!0);
        }), Ge(97 < t ? 97 : t, function() {
            var r = te.transition;
            te.transition = 1;
            try {
                e(!1), n();
            } finally{
                te.transition = r;
            }
        });
    }
    function ti(e, n, t) {
        var r = b(), l1 = Fe(e), i = {
            lane: l1,
            action: t,
            eagerReducer: null,
            eagerState: null,
            next: null
        }, o = n.pending;
        if (o === null ? i.next = i : (i.next = o.next, o.next = i), n.pending = i, o = e.alternate, e === I || o !== null && o === I) ct = mr = !0;
        else {
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
                var u = n.lastRenderedState, s = o(u, t);
                if (i.eagerReducer = o, i.eagerState = s, ee(s, u)) return;
            } catch (d) {
            } finally{
            }
            je(e, l1, r);
        }
    }
    var gr = {
        readContext: ne,
        useCallback: Z,
        useContext: Z,
        useEffect: Z,
        useImperativeHandle: Z,
        useLayoutEffect: Z,
        useMemo: Z,
        useReducer: Z,
        useRef: Z,
        useState: Z,
        useDebugValue: Z,
        useDeferredValue: Z,
        useTransition: Z,
        useMutableSource: Z,
        useOpaqueIdentifier: Z,
        unstable_isNewReconciler: !1
    }, Ja = {
        readContext: ne,
        useCallback: function(e, n) {
            return Je().memoizedState = [
                e,
                n === void 0 ? null : n
            ], e;
        },
        useContext: ne,
        useEffect: Mu,
        useImperativeHandle: function(e, n, t) {
            return t = t != null ? t.concat([
                e
            ]) : null, bl(4, 2, Du.bind(null, n, e), t);
        },
        useLayoutEffect: function(e, n) {
            return bl(4, 2, e, n);
        },
        useMemo: function(e, n) {
            var t = Je();
            return n = n === void 0 ? null : n, e = e(), t.memoizedState = [
                e,
                n
            ], e;
        },
        useReducer: function(e, n, t) {
            var r = Je();
            return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, e = e.dispatch = ti.bind(null, I, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: Ou,
        useState: mt,
        useDebugValue: ni,
        useDeferredValue: function(e) {
            var n = mt(e), t = n[0], r = n[1];
            return Mu(function() {
                var l = te.transition;
                te.transition = 1;
                try {
                    r(e);
                } finally{
                    te.transition = l;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e1 = mt(!1), n = e1[0];
            return e1 = Za.bind(null, e1[1]), Ou(e1), [
                e1,
                n
            ];
        },
        useMutableSource: function(e, n, t) {
            var r = Je();
            return r.memoizedState = {
                refs: {
                    getSnapshot: n,
                    setSnapshot: null
                },
                source: e,
                subscribe: t
            }, Lu(r, e, n, t);
        },
        useOpaqueIdentifier: function() {
            if (ce) {
                var e = !1, n = Qa(function() {
                    throw e || (e = !0, t("r:" + (Dl++).toString(36))), Error(v(355));
                }), t = mt(n)[1];
                return (I.mode & 2) == 0 && (I.flags |= 516, hr(5, function() {
                    t("r:" + (Dl++).toString(36));
                }, void 0, null)), n;
            }
            return n = "r:" + (Dl++).toString(36), mt(n), n;
        },
        unstable_isNewReconciler: !1
    }, qa = {
        readContext: ne,
        useCallback: Fu,
        useContext: ne,
        useEffect: yr,
        useImperativeHandle: Iu,
        useLayoutEffect: Ru,
        useMemo: ju,
        useReducer: dt,
        useRef: vr,
        useState: function() {
            return dt(de);
        },
        useDebugValue: ni,
        useDeferredValue: function(e) {
            var n = dt(de), t = n[0], r = n[1];
            return yr(function() {
                var l = te.transition;
                te.transition = 1;
                try {
                    r(e);
                } finally{
                    te.transition = l;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e1 = dt(de)[0];
            return [
                vr().current,
                e1
            ];
        },
        useMutableSource: zu,
        useOpaqueIdentifier: function() {
            return dt(de)[0];
        },
        unstable_isNewReconciler: !1
    }, ba = {
        readContext: ne,
        useCallback: Fu,
        useContext: ne,
        useEffect: yr,
        useImperativeHandle: Iu,
        useLayoutEffect: Ru,
        useMemo: ju,
        useReducer: pt,
        useRef: vr,
        useState: function() {
            return pt(de);
        },
        useDebugValue: ni,
        useDeferredValue: function(e) {
            var n = pt(de), t = n[0], r = n[1];
            return yr(function() {
                var l = te.transition;
                te.transition = 1;
                try {
                    r(e);
                } finally{
                    te.transition = l;
                }
            }, [
                e
            ]), t;
        },
        useTransition: function() {
            var e1 = pt(de)[0];
            return [
                vr().current,
                e1
            ];
        },
        useMutableSource: zu,
        useOpaqueIdentifier: function() {
            return pt(de)[0];
        },
        unstable_isNewReconciler: !1
    }, ef = We.ReactCurrentOwner, ue = !1;
    function J(e, n, t, r) {
        n.child = e === null ? xu(n, null, t, r) : cr(n, e.child, t, r);
    }
    function Uu(e, n, t, r, l) {
        t = t.render;
        var i = n.ref;
        return kn(n, l), r = ql(e, n, t, r, i, l), e !== null && !ue ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l, ye(e, n, l)) : (n.flags |= 1, J(e, n, r, l), n.child);
    }
    function Vu(e, n, t, r, l, i) {
        if (e === null) {
            var o = t.type;
            return typeof o == "function" && !_i(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Bu(e, n, o, r, l, i)) : (e = Tr(t.type, null, r, n, n.mode, i), e.ref = n.ref, e.return = n, n.child = e);
        }
        return o = e.child, (l & i) == 0 && (l = o.memoizedProps, t = t.compare, t = t !== null ? t : qn, t(l, r) && e.ref === n.ref) ? ye(e, n, i) : (n.flags |= 1, e = Be(o, r), e.ref = n.ref, e.return = n, n.child = e);
    }
    function Bu(e, n, t, r, l, i) {
        if (e !== null && qn(e.memoizedProps, r) && e.ref === n.ref) if (ue = !1, (i & l) != 0) (e.flags & 16384) != 0 && (ue = !0);
        else return n.lanes = e.lanes, ye(e, n, i);
        return li(e, n, t, r, i);
    }
    function ri(e, n, t) {
        var r = n.pendingProps, l1 = r.children, i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if ((n.mode & 4) == 0) n.memoizedState = {
            baseLanes: 0
        }, Pr(n, t);
        else if ((t & 1073741824) != 0) n.memoizedState = {
            baseLanes: 0
        }, Pr(n, i !== null ? i.baseLanes : t);
        else return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
            baseLanes: e
        }, Pr(n, e), null;
        else i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, Pr(n, r);
        return J(e, n, l1, t), n.child;
    }
    function Hu(e, n) {
        var t = n.ref;
        (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 128);
    }
    function li(e, n, t, r, l) {
        var i = G(t) ? Xe : W.current;
        return i = wn(n, i), kn(n, l), t = ql(e, n, t, r, i, l), e !== null && !ue ? (n.updateQueue = e.updateQueue, n.flags &= -517, e.lanes &= ~l, ye(e, n, l)) : (n.flags |= 1, J(e, n, t, l), n.child);
    }
    function Wu(e, n, t, r, l) {
        if (G(t)) {
            var i = !0;
            nr(n);
        } else i = !1;
        if (kn(n, l), n.stateNode === null) e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), Su(n, t, r), $l(n, t, r, l), r = !0;
        else if (e === null) {
            var o = n.stateNode, u = n.memoizedProps;
            o.props = u;
            var s = o.context, d = t.contextType;
            typeof d == "object" && d !== null ? d = ne(d) : (d = G(t) ? Xe : W.current, d = wn(n, d));
            var y = t.getDerivedStateFromProps, C = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            C || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== d) && Eu(n, o, r, d), Oe = !1;
            var h = n.memoizedState;
            o.state = h, lt(n, r, o, l), s = n.memoizedState, u !== r || h !== s || K.current || Oe ? (typeof y == "function" && (ur(n, t, y, r), s = n.memoizedState), (u = Oe || wu(n, t, u, r, h, s, d)) ? (C || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4)) : (typeof o.componentDidMount == "function" && (n.flags |= 4), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = d, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4), r = !1);
        } else {
            o = n.stateNode, hu(e, n), u = n.memoizedProps, d = n.type === n.elementType ? u : oe(n.type, u), o.props = d, C = n.pendingProps, h = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = ne(s) : (s = G(t) ? Xe : W.current, s = wn(n, s));
            var S = t.getDerivedStateFromProps;
            (y = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== C || h !== s) && Eu(n, o, r, s), Oe = !1, h = n.memoizedState, o.state = h, lt(n, r, o, l);
            var k = n.memoizedState;
            u !== C || h !== k || K.current || Oe ? (typeof S == "function" && (ur(n, t, S, r), k = n.memoizedState), (d = Oe || wu(n, t, d, r, h, k, s)) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 256)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 256), n.memoizedProps = r, n.memoizedState = k), o.props = r, o.state = k, o.context = s, r = d) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 256), r = !1);
        }
        return ii(e, n, t, r, i, l);
    }
    function ii(e, n, t, r, l, i) {
        Hu(e, n);
        var o = (n.flags & 64) != 0;
        if (!r && !o) return l && iu(n, t, !1), ye(e, n, i);
        r = n.stateNode, ef.current = n;
        var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
        return n.flags |= 1, e !== null && o ? (n.child = cr(n, e.child, null, i), n.child = cr(n, null, u, i)) : J(e, n, u, i), n.memoizedState = r.state, l && iu(n, t, !0), n.child;
    }
    function Au(e) {
        var n = e.stateNode;
        n.pendingContext ? ru(e, n.pendingContext, n.pendingContext !== n.context) : n.context && ru(e, n.context, !1), Yl(e, n.containerInfo);
    }
    var wr = {
        dehydrated: null,
        retryLane: 0
    };
    function Qu(e, n, t) {
        var r = n.pendingProps, l1 = D.current, i = !1, o;
        return (o = (n.flags & 64) != 0) || (o = e !== null && e.memoizedState === null ? !1 : (l1 & 2) != 0), o ? (i = !0, n.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (l1 |= 1), R(D, l1 & 1), e === null ? (r.fallback !== void 0 && Kl(n), e = r.children, l1 = r.fallback, i ? (e = $u(n, e, l1, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = wr, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = $u(n, e, l1, t), n.child.memoizedState = {
            baseLanes: t
        }, n.memoizedState = wr, n.lanes = 33554432, e) : (t = Ni({
            mode: "visible",
            children: e
        }, n.mode, t, null), t.return = n, n.child = t)) : e.memoizedState !== null ? i ? (r = Xu(e, n, r.children, r.fallback, t), i = n.child, l1 = e.child.memoizedState, i.memoizedState = l1 === null ? {
            baseLanes: t
        } : {
            baseLanes: l1.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = wr, r) : (t = Yu(e, n, r.children, t), n.memoizedState = null, t) : i ? (r = Xu(e, n, r.children, r.fallback, t), i = n.child, l1 = e.child.memoizedState, i.memoizedState = l1 === null ? {
            baseLanes: t
        } : {
            baseLanes: l1.baseLanes | t
        }, i.childLanes = e.childLanes & ~t, n.memoizedState = wr, r) : (t = Yu(e, n, r.children, t), n.memoizedState = null, t);
    }
    function $u(e, n, t, r) {
        var l1 = e.mode, i = e.child;
        return n = {
            mode: "hidden",
            children: n
        }, (l1 & 2) == 0 && i !== null ? (i.childLanes = 0, i.pendingProps = n) : i = Ni(n, l1, 0, null), t = zn(t, l1, r, null), i.return = e, t.return = e, i.sibling = t, e.child = i, t;
    }
    function Yu(e, n, t, r) {
        var l1 = e.child;
        return e = l1.sibling, t = Be(l1, {
            mode: "visible",
            children: t
        }), (n.mode & 2) == 0 && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, n.firstEffect = n.lastEffect = e), n.child = t;
    }
    function Xu(e, n, t, r, l) {
        var i = n.mode, o = e.child;
        e = o.sibling;
        var u = {
            mode: "hidden",
            children: t
        };
        return (i & 2) == 0 && n.child !== o ? (t = n.child, t.childLanes = 0, t.pendingProps = u, o = t.lastEffect, o !== null ? (n.firstEffect = t.firstEffect, n.lastEffect = o, o.nextEffect = null) : n.firstEffect = n.lastEffect = null) : t = Be(o, u), e !== null ? r = Be(e, r) : (r = zn(r, i, l, null), r.flags |= 2), r.return = n, t.return = n, t.sibling = r, n.child = t, r;
    }
    function Ku(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        t !== null && (t.lanes |= n), mu(e.return, n);
    }
    function oi(e, n, t, r, l, i) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: l,
            lastEffect: i
        } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l, o.lastEffect = i);
    }
    function Gu(e, n, t) {
        var r = n.pendingProps, l1 = r.revealOrder, i = r.tail;
        if (J(e, n, r.children, t), r = D.current, (r & 2) != 0) r = r & 1 | 2, n.flags |= 64;
        else {
            if (e !== null && (e.flags & 64) != 0) e: for(e = n.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Ku(e, t);
                else if (e.tag === 19) Ku(e, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === n) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (R(D, r), (n.mode & 2) == 0) n.memoizedState = null;
        else switch(l1){
            case "forwards":
                for(t = n.child, l1 = null; t !== null;)e = t.alternate, e !== null && dr(e) === null && (l1 = t), t = t.sibling;
                t = l1, t === null ? (l1 = n.child, n.child = null) : (l1 = t.sibling, t.sibling = null), oi(n, !1, l1, t, i, n.lastEffect);
                break;
            case "backwards":
                for(t = null, l1 = n.child, n.child = null; l1 !== null;){
                    if (e = l1.alternate, e !== null && dr(e) === null) {
                        n.child = l1;
                        break;
                    }
                    e = l1.sibling, l1.sibling = t, t = l1, l1 = e;
                }
                oi(n, !0, t, null, i, n.lastEffect);
                break;
            case "together":
                oi(n, !1, null, null, void 0, n.lastEffect);
                break;
            default:
                n.memoizedState = null;
        }
        return n.child;
    }
    function ye(e, n, t) {
        if (e !== null && (n.dependencies = e.dependencies), vt |= n.lanes, (t & n.childLanes) != 0) {
            if (e !== null && n.child !== e.child) throw Error(v(153));
            if (n.child !== null) {
                for(e = n.child, t = Be(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;)e = e.sibling, t = t.sibling = Be(e, e.pendingProps), t.return = n;
                t.sibling = null;
            }
            return n.child;
        }
        return null;
    }
    var Zu, ui, Ju, qu;
    Zu = function(e, n) {
        for(var t = n.child; t !== null;){
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
            else if (t.tag !== 4 && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    };
    ui = function() {
    };
    Ju = function(e, n, t, r) {
        var l1 = e.memoizedProps;
        if (l1 !== r) {
            e = n.stateNode, Ze(fe.current);
            var i = null;
            switch(t){
                case "input":
                    l1 = Yr(e, l1), r = Yr(e, r), i = [];
                    break;
                case "option":
                    l1 = Gr(e, l1), r = Gr(e, r), i = [];
                    break;
                case "select":
                    l1 = M({
                    }, l1, {
                        value: void 0
                    }), r = M({
                    }, r, {
                        value: void 0
                    }), i = [];
                    break;
                case "textarea":
                    l1 = Zr(e, l1), r = Zr(e, r), i = [];
                    break;
                default:
                    typeof l1.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zt);
            }
            br(t, r);
            var o;
            t = null;
            for(d in l1)if (!r.hasOwnProperty(d) && l1.hasOwnProperty(d) && l1[d] != null) if (d === "style") {
                var u = l1[d];
                for(o in u)u.hasOwnProperty(o) && (t || (t = {
                }), t[o] = "");
            } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (On.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
            for(d in r){
                var s = r[d];
                if (u = l1 != null ? l1[d] : void 0, r.hasOwnProperty(d) && s !== u && (s != null || u != null)) if (d === "style") if (u) {
                    for(o in u)!u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {
                    }), t[o] = "");
                    for(o in s)s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {
                    }), t[o] = s[o]);
                } else t || (i || (i = []), i.push(d, t)), t = s;
                else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (On.hasOwnProperty(d) ? (s != null && d === "onScroll" && z("scroll", e), i || u === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === Hr ? s.toString() : (i = i || []).push(d, s));
            }
            t && (i = i || []).push("style", t);
            var d = i;
            (n.updateQueue = d) && (n.flags |= 4);
        }
    };
    qu = function(e, n, t, r) {
        t !== r && (n.flags |= 4);
    };
    function ht(e, n) {
        if (!ce) switch(e.tailMode){
            case "hidden":
                n = e.tail;
                for(var t = null; n !== null;)n.alternate !== null && (t = n), n = n.sibling;
                t === null ? e.tail = null : t.sibling = null;
                break;
            case "collapsed":
                t = e.tail;
                for(var r = null; t !== null;)t.alternate !== null && (r = t), t = t.sibling;
                r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }
    function nf(e, n, t) {
        var r = n.pendingProps;
        switch(n.tag){
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return G(n.type) && er(), null;
            case 3:
                return xn(), O(K), O(W), Zl(), r = n.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(n) ? n.flags |= 4 : r.hydrate || (n.flags |= 256)), ui(n), null;
            case 5:
                Xl(n);
                var l1 = Ze(st.current);
                if (t = n.type, e !== null && n.stateNode != null) Ju(e, n, t, r, l1), e.ref !== n.ref && (n.flags |= 128);
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(v(166));
                        return null;
                    }
                    if (e = Ze(fe.current), pr(n)) {
                        r = n.stateNode, t = n.type;
                        var i = n.memoizedProps;
                        switch(r[Te] = n, r[qt] = i, t){
                            case "dialog":
                                z("cancel", r), z("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < et.length; e++)z(et[e], r);
                                break;
                            case "source":
                                z("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z("error", r), z("load", r);
                                break;
                            case "details":
                                z("toggle", r);
                                break;
                            case "input":
                                Ai(r, i), z("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, z("invalid", r);
                                break;
                            case "textarea":
                                Yi(r, i), z("invalid", r);
                        }
                        br(t, i), e = null;
                        for(var o in i)i.hasOwnProperty(o) && (l1 = i[o], o === "children" ? typeof l1 == "string" ? r.textContent !== l1 && (e = [
                            "children",
                            l1
                        ]) : typeof l1 == "number" && r.textContent !== "" + l1 && (e = [
                            "children",
                            "" + l1
                        ]) : On.hasOwnProperty(o) && l1 != null && o === "onScroll" && z("scroll", r));
                        switch(t){
                            case "input":
                                zt(r), $i(r, i, !0);
                                break;
                            case "textarea":
                                zt(r), Ki(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof i.onClick == "function" && (r.onclick = Zt);
                        }
                        r = e, n.updateQueue = r, r !== null && (n.flags |= 4);
                    } else {
                        switch(o = l1.nodeType === 9 ? l1 : l1.ownerDocument, e === Jr.html && (e = Gi(t)), e === Jr.html ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, {
                            is: r.is
                        }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[Te] = n, e[qt] = r, Zu(e, n, !1, !1), n.stateNode = e, o = el(t, r), t){
                            case "dialog":
                                z("cancel", e), z("close", e), l1 = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z("load", e), l1 = r;
                                break;
                            case "video":
                            case "audio":
                                for(l1 = 0; l1 < et.length; l1++)z(et[l1], e);
                                l1 = r;
                                break;
                            case "source":
                                z("error", e), l1 = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z("error", e), z("load", e), l1 = r;
                                break;
                            case "details":
                                z("toggle", e), l1 = r;
                                break;
                            case "input":
                                Ai(e, r), l1 = Yr(e, r), z("invalid", e);
                                break;
                            case "option":
                                l1 = Gr(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l1 = M({
                                }, r, {
                                    value: void 0
                                }), z("invalid", e);
                                break;
                            case "textarea":
                                Yi(e, r), l1 = Zr(e, r), z("invalid", e);
                                break;
                            default:
                                l1 = r;
                        }
                        br(t, l1);
                        var u = l1;
                        for(i in u)if (u.hasOwnProperty(i)) {
                            var s = u[i];
                            i === "style" ? qi(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Zi(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && jn(e, s) : typeof s == "number" && jn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (On.hasOwnProperty(i) ? s != null && i === "onScroll" && z("scroll", e) : s != null && Ir(e, i, s, o));
                        }
                        switch(t){
                            case "input":
                                zt(e), $i(e, r, !1);
                                break;
                            case "textarea":
                                zt(e), Ki(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ke(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? rn(e, !!r.multiple, i, !1) : r.defaultValue != null && rn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l1.onClick == "function" && (e.onclick = Zt);
                        }
                        qo(t, r) && (n.flags |= 4);
                    }
                    n.ref !== null && (n.flags |= 128);
                }
                return null;
            case 6:
                if (e && n.stateNode != null) qu(e, n, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && n.stateNode === null) throw Error(v(166));
                    t = Ze(st.current), Ze(fe.current), pr(n) ? (r = n.stateNode, t = n.memoizedProps, r[Te] = n, r.nodeValue !== t && (n.flags |= 4)) : (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Te] = n, n.stateNode = r);
                }
                return null;
            case 13:
                return O(D), r = n.memoizedState, (n.flags & 64) != 0 ? (n.lanes = t, n) : (r = r !== null, t = !1, e === null ? n.memoizedProps.fallback !== void 0 && pr(n) : t = e.memoizedState !== null, r && !t && (n.mode & 2) != 0 && (e === null && n.memoizedProps.unstable_avoidThisFallback !== !0 || (D.current & 1) != 0 ? H === 0 && (H = 3) : ((H === 0 || H === 3) && (H = 4), X === null || (vt & 134217727) == 0 && (Nn & 134217727) == 0 || Tn(X, $))), (r || t) && (n.flags |= 4), null);
            case 4:
                return xn(), ui(n), e === null && Xo(n.stateNode.containerInfo), null;
            case 10:
                return Al(n), null;
            case 17:
                return G(n.type) && er(), null;
            case 19:
                if (O(D), r = n.memoizedState, r === null) return null;
                if (i = (n.flags & 64) != 0, o = r.rendering, o === null) if (i) ht(r, !1);
                else {
                    if (H !== 0 || e !== null && (e.flags & 64) != 0) for(e = n.child; e !== null;){
                        if (o = dr(e), o !== null) {
                            for(n.flags |= 64, ht(r, !1), i = o.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), r.lastEffect === null && (n.firstEffect = null), n.lastEffect = r.lastEffect, r = t, t = n.child; t !== null;)i = t, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), t = t.sibling;
                            return R(D, D.current & 1 | 2), n.child;
                        }
                        e = e.sibling;
                    }
                    r.tail !== null && A() > gi && (n.flags |= 64, i = !0, ht(r, !1), n.lanes = 33554432);
                }
                else {
                    if (!i) if (e = dr(o), e !== null) {
                        if (n.flags |= 64, i = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ht(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !ce) return n = n.lastEffect = r.lastEffect, n !== null && (n.nextEffect = null), null;
                    } else 2 * A() - r.renderingStartTime > gi && t !== 1073741824 && (n.flags |= 64, i = !0, ht(r, !1), n.lanes = 33554432);
                    r.isBackwards ? (o.sibling = n.child, n.child = o) : (t = r.last, t !== null ? t.sibling = o : n.child = o, r.last = o);
                }
                return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.lastEffect = n.lastEffect, r.renderingStartTime = A(), t.sibling = null, n = D.current, R(D, i ? n & 1 | 2 : n & 1), t) : null;
            case 23:
            case 24:
                return Ci(), e !== null && e.memoizedState !== null != (n.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (n.flags |= 4), null;
        }
        throw Error(v(156, n.tag));
    }
    function tf(e) {
        switch(e.tag){
            case 1:
                G(e.type) && er();
                var n = e.flags;
                return n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 3:
                if (xn(), O(K), O(W), Zl(), n = e.flags, (n & 64) != 0) throw Error(v(285));
                return e.flags = n & -4097 | 64, e;
            case 5:
                return Xl(e), null;
            case 13:
                return O(D), n = e.flags, n & 4096 ? (e.flags = n & -4097 | 64, e) : null;
            case 19:
                return O(D), null;
            case 4:
                return xn(), null;
            case 10:
                return Al(e), null;
            case 23:
            case 24:
                return Ci(), null;
            default:
                return null;
        }
    }
    function si(e, n) {
        try {
            var t = "", r = n;
            do t += Fs(r), r = r.return;
            while (r)
            var l1 = t;
        } catch (i) {
            l1 = `
Error generating stack: ` + i.message + `
` + i.stack;
        }
        return {
            value: e,
            source: n,
            stack: l1
        };
    }
    function ai(e, n) {
        try {
            console.error(n.value);
        } catch (t) {
            setTimeout(function() {
                throw t;
            });
        }
    }
    var rf = typeof WeakMap == "function" ? WeakMap : Map;
    function bu(e, n, t) {
        t = Me(-1, t), t.tag = 3, t.payload = {
            element: null
        };
        var r = n.value;
        return t.callback = function() {
            kr || (kr = !0, wi = r), ai(e, n);
        }, t;
    }
    function es(e, n, t) {
        t = Me(-1, t), t.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = n.value;
            t.payload = function() {
                return ai(e, n), r(l);
            };
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            typeof r != "function" && (pe === null ? pe = new Set([
                this
            ]) : pe.add(this), ai(e, n));
            var o = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: o !== null ? o : ""
            });
        }), t;
    }
    var lf = typeof WeakSet == "function" ? WeakSet : Set;
    function ns(e) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (t) {
            Ve(e, t);
        }
        else n.current = null;
    }
    function of(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (n.flags & 256 && e !== null) {
                    var t = e.memoizedProps, r = e.memoizedState;
                    e = n.stateNode, n = e.getSnapshotBeforeUpdate(n.elementType === n.type ? t : oe(n.type, t), r), e.__reactInternalSnapshotBeforeUpdate = n;
                }
                return;
            case 3:
                n.flags & 256 && Rl(n.stateNode.containerInfo);
                return;
            case 5:
            case 6:
            case 4:
            case 17:
                return;
        }
        throw Error(v(163));
    }
    function uf(e, n, t) {
        switch(t.tag){
            case 0:
            case 11:
            case 15:
            case 22:
                if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                    e = n = n.next;
                    do {
                        if ((e.tag & 3) == 3) {
                            var r = e.create;
                            e.destroy = r();
                        }
                        e = e.next;
                    }while (e !== n)
                }
                if (n = t.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
                    e = n = n.next;
                    do {
                        var l = e;
                        r = l.next, l = l.tag, (l & 4) != 0 && (l & 1) != 0 && (vs(t, e), hf(t, e)), e = r;
                    }while (e !== n)
                }
                return;
            case 1:
                e = t.stateNode, t.flags & 4 && (n === null ? e.componentDidMount() : (r = t.elementType === t.type ? n.memoizedProps : oe(t.type, n.memoizedProps), e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), n = t.updateQueue, n !== null && yu(t, n, e);
                return;
            case 3:
                if (n = t.updateQueue, n !== null) {
                    if (e = null, t.child !== null) switch(t.child.tag){
                        case 5:
                            e = t.child.stateNode;
                            break;
                        case 1:
                            e = t.child.stateNode;
                    }
                    yu(t, n, e);
                }
                return;
            case 5:
                e = t.stateNode, n === null && t.flags & 4 && qo(t.type, t.memoizedProps) && e.focus();
                return;
            case 6:
                return;
            case 4:
                return;
            case 12:
                return;
            case 13:
                t.memoizedState === null && (t = t.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null && ho(t))));
                return;
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
                return;
        }
        throw Error(v(163));
    }
    function ts(e, n) {
        for(var t = e;;){
            if (t.tag === 5) {
                var r = t.stateNode;
                if (n) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                    r = t.stateNode;
                    var l = t.memoizedProps.style;
                    l = l != null && l.hasOwnProperty("display") ? l.display : null, r.style.display = Ji("display", l);
                }
            } else if (t.tag === 6) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
            else if ((t.tag !== 23 && t.tag !== 24 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === e) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function rs(e, n) {
        if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
            Ke.onCommitFiberUnmount(Fl, n);
        } catch (i) {
        }
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (e = n.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                    var t = e = e.next;
                    do {
                        var r = t, l = r.destroy;
                        if (r = r.tag, l !== void 0) if ((r & 4) != 0) vs(n, t);
                        else {
                            r = n;
                            try {
                                l();
                            } catch (i) {
                                Ve(r, i);
                            }
                        }
                        t = t.next;
                    }while (t !== e)
                }
                break;
            case 1:
                if (ns(n), e = n.stateNode, typeof e.componentWillUnmount == "function") try {
                    e.props = n.memoizedProps, e.state = n.memoizedState, e.componentWillUnmount();
                } catch (i1) {
                    Ve(n, i1);
                }
                break;
            case 5:
                ns(n);
                break;
            case 4:
                us(e, n);
        }
    }
    function ls(e) {
        e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
    }
    function is(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function os(e) {
        e: {
            for(var n = e.return; n !== null;){
                if (is(n)) break e;
                n = n.return;
            }
            throw Error(v(160));
        }
        var t = n;
        switch(n = t.stateNode, t.tag){
            case 5:
                var r = !1;
                break;
            case 3:
                n = n.containerInfo, r = !0;
                break;
            case 4:
                n = n.containerInfo, r = !0;
                break;
            default:
                throw Error(v(161));
        }
        t.flags & 16 && (jn(n, ""), t.flags &= -17);
        e: n: for(t = e;;){
            for(; t.sibling === null;){
                if (t.return === null || is(t.return)) {
                    t = null;
                    break e;
                }
                t = t.return;
            }
            for(t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;){
                if (t.flags & 2 || t.child === null || t.tag === 4) continue n;
                t.child.return = t, t = t.child;
            }
            if (!(t.flags & 2)) {
                t = t.stateNode;
                break e;
            }
        }
        r ? fi(e, t, n) : ci(e, t, n);
    }
    function fi(e, n, t) {
        var r = e.tag, l1 = r === 5 || r === 6;
        if (l1) e = l1 ? e.stateNode : e.stateNode.instance, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Zt));
        else if (r !== 4 && (e = e.child, e !== null)) for(fi(e, n, t), e = e.sibling; e !== null;)fi(e, n, t), e = e.sibling;
    }
    function ci(e, n, t) {
        var r = e.tag, l1 = r === 5 || r === 6;
        if (l1) e = l1 ? e.stateNode : e.stateNode.instance, n ? t.insertBefore(e, n) : t.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(ci(e, n, t), e = e.sibling; e !== null;)ci(e, n, t), e = e.sibling;
    }
    function us(e, n) {
        for(var t = n, r = !1, l, i;;){
            if (!r) {
                r = t.return;
                e: for(;;){
                    if (r === null) throw Error(v(160));
                    switch(l = r.stateNode, r.tag){
                        case 5:
                            i = !1;
                            break e;
                        case 3:
                            l = l.containerInfo, i = !0;
                            break e;
                        case 4:
                            l = l.containerInfo, i = !0;
                            break e;
                    }
                    r = r.return;
                }
                r = !0;
            }
            if (t.tag === 5 || t.tag === 6) {
                e: for(var o = e, u = t, s = u;;)if (rs(o, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
                else {
                    if (s === u) break e;
                    for(; s.sibling === null;){
                        if (s.return === null || s.return === u) break e;
                        s = s.return;
                    }
                    s.sibling.return = s.return, s = s.sibling;
                }
                i ? (o = l, u = t.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u)) : l.removeChild(t.stateNode);
            } else if (t.tag === 4) {
                if (t.child !== null) {
                    l = t.stateNode.containerInfo, i = !0, t.child.return = t, t = t.child;
                    continue;
                }
            } else if (rs(e, t), t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return, t.tag === 4 && (r = !1);
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    }
    function di(e, n) {
        switch(n.tag){
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                var t = n.updateQueue;
                if (t = t !== null ? t.lastEffect : null, t !== null) {
                    var r = t = t.next;
                    do (r.tag & 3) == 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
                    while (r !== t)
                }
                return;
            case 1:
                return;
            case 5:
                if (t = n.stateNode, t != null) {
                    r = n.memoizedProps;
                    var l = e !== null ? e.memoizedProps : r;
                    e = n.type;
                    var i = n.updateQueue;
                    if (n.updateQueue = null, i !== null) {
                        for(t[qt] = r, e === "input" && r.type === "radio" && r.name != null && Qi(t, r), el(e, l), n = el(e, r), l = 0; l < i.length; l += 2){
                            var o = i[l], u = i[l + 1];
                            o === "style" ? qi(t, u) : o === "dangerouslySetInnerHTML" ? Zi(t, u) : o === "children" ? jn(t, u) : Ir(t, o, u, n);
                        }
                        switch(e){
                            case "input":
                                Xr(t, r);
                                break;
                            case "textarea":
                                Xi(t, r);
                                break;
                            case "select":
                                e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? rn(t, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? rn(t, !!r.multiple, r.defaultValue, !0) : rn(t, !!r.multiple, r.multiple ? [] : "", !1));
                        }
                    }
                }
                return;
            case 6:
                if (n.stateNode === null) throw Error(v(162));
                n.stateNode.nodeValue = n.memoizedProps;
                return;
            case 3:
                t = n.stateNode, t.hydrate && (t.hydrate = !1, ho(t.containerInfo));
                return;
            case 12:
                return;
            case 13:
                n.memoizedState !== null && (yi = A(), ts(n.child, !0)), ss(n);
                return;
            case 19:
                ss(n);
                return;
            case 17:
                return;
            case 23:
            case 24:
                ts(n, n.memoizedState !== null);
                return;
        }
        throw Error(v(163));
    }
    function ss(e) {
        var n = e.updateQueue;
        if (n !== null) {
            e.updateQueue = null;
            var t = e.stateNode;
            t === null && (t = e.stateNode = new lf), n.forEach(function(r) {
                var l = gf.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l, l));
            });
        }
    }
    function sf(e, n) {
        return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (n = n.memoizedState, n !== null && n.dehydrated === null) : !1;
    }
    var af = Math.ceil, Sr = We.ReactCurrentDispatcher, pi = We.ReactCurrentOwner, x = 0, X = null, j = null, $ = 0, be = 0, mi = Le(0), H = 0, Er = null, _n = 0, vt = 0, Nn = 0, hi = 0, vi = null, yi = 0, gi = 1 / 0;
    function Pn() {
        gi = A() + 500;
    }
    var g = null, kr = !1, wi = null, pe = null, Ie = !1, yt = null, gt = 90, Si = [], Ei = [], ge = null, wt = 0, ki = null, xr = -1, we = 0, Cr = 0, St = null, _r = !1;
    function b() {
        return (x & 48) != 0 ? A() : xr !== -1 ? xr : xr = A();
    }
    function Fe(e) {
        if (e = e.mode, (e & 2) == 0) return 1;
        if ((e & 4) == 0) return Sn() === 99 ? 1 : 2;
        if (we === 0 && (we = _n), Ga.transition !== 0) {
            Cr !== 0 && (Cr = vi !== null ? vi.pendingLanes : 0), e = we;
            var n = 4186112 & ~Cr;
            return n &= -n, n === 0 && (e = 4186112 & ~e, n = e & -e, n === 0 && (n = 8192)), n;
        }
        return e = Sn(), (x & 4) != 0 && e === 98 ? e = Ut(12, we) : (e = qs(e), e = Ut(e, we)), e;
    }
    function je(e, n, t) {
        if (50 < wt) throw wt = 0, ki = null, Error(v(185));
        if (e = Nr(e, n), e === null) return null;
        Vt(e, n, t), e === X && (Nn |= n, H === 4 && Tn(e, $));
        var r = Sn();
        n === 1 ? (x & 8) != 0 && (x & 48) == 0 ? xi(e) : (re(e, t), x === 0 && (Pn(), ae())) : ((x & 4) == 0 || r !== 98 && r !== 99 || (ge === null ? ge = new Set([
            e
        ]) : ge.add(e)), re(e, t)), vi = e;
    }
    function Nr(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        for(t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
        return t.tag === 3 ? t.stateNode : null;
    }
    function re(e, n) {
        for(var t = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;){
            var u = 31 - Ne(o), s = 1 << u, d = i[u];
            if (d === -1) {
                if ((s & r) == 0 || (s & l) != 0) {
                    d = n, an(s);
                    var y = L;
                    i[u] = 10 <= y ? d + 250 : 6 <= y ? d + 5000 : -1;
                }
            } else d <= n && (e.expiredLanes |= s);
            o &= ~s;
        }
        if (r = Yn(e, e === X ? $ : 0), n = L, r === 0) t !== null && (t !== Bl && Ul(t), e.callbackNode = null, e.callbackPriority = 0);
        else {
            if (t !== null) {
                if (e.callbackPriority === n) return;
                t !== Bl && Ul(t);
            }
            n === 15 ? (t = xi.bind(null, e), he === null ? (he = [
                t
            ], rr = jl(tr, pu)) : he.push(t), t = Bl) : n === 14 ? t = rt(99, xi.bind(null, e)) : (t = bs(n), t = rt(t, as.bind(null, e))), e.callbackPriority = n, e.callbackNode = t;
        }
    }
    function as(e) {
        if (xr = -1, Cr = we = 0, (x & 48) != 0) throw Error(v(327));
        var n = e.callbackNode;
        if (Ue() && e.callbackNode !== n) return null;
        var t = Yn(e, e === X ? $ : 0);
        if (t === 0) return null;
        var r = t, l1 = x;
        x |= 16;
        var i = ps();
        (X !== e || $ !== r) && (Pn(), Ln(e, r));
        do try {
            df();
            break;
        } catch (u) {
            ds(e, u);
        }
        while (1)
        if (Wl(), Sr.current = i, x = l1, j !== null ? r = 0 : (X = null, $ = 0, r = H), (_n & Nn) != 0) Ln(e, 0);
        else if (r !== 0) {
            if (r === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Rl(e.containerInfo)), t = ko(e), t !== 0 && (r = Et(e, t))), r === 1) throw n = Er, Ln(e, 0), Tn(e, t), re(e, A()), n;
            switch(e.finishedWork = e.current.alternate, e.finishedLanes = t, r){
                case 0:
                case 1:
                    throw Error(v(345));
                case 2:
                    en(e);
                    break;
                case 3:
                    if (Tn(e, t), (t & 62914560) === t && (r = yi + 500 - A(), 10 < r)) {
                        if (Yn(e, 0) !== 0) break;
                        if (l1 = e.suspendedLanes, (l1 & t) !== t) {
                            b(), e.pingedLanes |= e.suspendedLanes & l1;
                            break;
                        }
                        e.timeoutHandle = bo(en.bind(null, e), r);
                        break;
                    }
                    en(e);
                    break;
                case 4:
                    if (Tn(e, t), (t & 4186112) === t) break;
                    for(r = e.eventTimes, l1 = -1; 0 < t;){
                        var o = 31 - Ne(t);
                        i = 1 << o, o = r[o], o > l1 && (l1 = o), t &= ~i;
                    }
                    if (t = l1, t = A() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3000 > t ? 3000 : 4320 > t ? 4320 : 1960 * af(t / 1960)) - t, 10 < t) {
                        e.timeoutHandle = bo(en.bind(null, e), t);
                        break;
                    }
                    en(e);
                    break;
                case 5:
                    en(e);
                    break;
                default:
                    throw Error(v(329));
            }
        }
        return re(e, A()), e.callbackNode === n ? as.bind(null, e) : null;
    }
    function Tn(e, n) {
        for(n &= ~hi, n &= ~Nn, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;){
            var t = 31 - Ne(n), r = 1 << t;
            e[t] = -1, n &= ~r;
        }
    }
    function xi(e) {
        if ((x & 48) != 0) throw Error(v(327));
        if (Ue(), e === X && (e.expiredLanes & $) != 0) {
            var n = $, t = Et(e, n);
            (_n & Nn) != 0 && (n = Yn(e, n), t = Et(e, n));
        } else n = Yn(e, 0), t = Et(e, n);
        if (e.tag !== 0 && t === 2 && (x |= 64, e.hydrate && (e.hydrate = !1, Rl(e.containerInfo)), n = ko(e), n !== 0 && (t = Et(e, n))), t === 1) throw t = Er, Ln(e, 0), Tn(e, n), re(e, A()), t;
        return e.finishedWork = e.current.alternate, e.finishedLanes = n, en(e), re(e, A()), null;
    }
    function ff() {
        if (ge !== null) {
            var e = ge;
            ge = null, e.forEach(function(n) {
                n.expiredLanes |= 24 & n.pendingLanes, re(n, A());
            });
        }
        ae();
    }
    function fs(e, n) {
        var t = x;
        x |= 1;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (Pn(), ae());
        }
    }
    function cs(e, n) {
        var t = x;
        x &= -2, x |= 8;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (Pn(), ae());
        }
    }
    function Pr(e, n) {
        R(mi, be), be |= n, _n |= n;
    }
    function Ci() {
        be = mi.current, O(mi);
    }
    function Ln(e, n) {
        e.finishedWork = null, e.finishedLanes = 0;
        var t = e.timeoutHandle;
        if (t !== -1 && (e.timeoutHandle = -1, Aa(t)), j !== null) for(t = j.return; t !== null;){
            var r = t;
            switch(r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && er();
                    break;
                case 3:
                    xn(), O(K), O(W), Zl();
                    break;
                case 5:
                    Xl(r);
                    break;
                case 4:
                    xn();
                    break;
                case 13:
                    O(D);
                    break;
                case 19:
                    O(D);
                    break;
                case 10:
                    Al(r);
                    break;
                case 23:
                case 24:
                    Ci();
            }
            t = t.return;
        }
        X = e, j = Be(e.current, null), $ = be = _n = n, H = 0, Er = null, hi = Nn = vt = 0;
    }
    function ds(e, n) {
        do {
            var t = j;
            try {
                if (Wl(), at.current = gr, mr) {
                    for(var r = I.memoizedState; r !== null;){
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next;
                    }
                    mr = !1;
                }
                if (ft = 0, B = Q = I = null, ct = !1, pi.current = null, t === null || t.return === null) {
                    H = 1, Er = n, j = null;
                    break;
                }
                e: {
                    var i = e, o = t.return, u = t, s = n;
                    if (n = $, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
                        var d = s;
                        if ((u.mode & 2) == 0) {
                            var y = u.alternate;
                            y ? (u.updateQueue = y.updateQueue, u.memoizedState = y.memoizedState, u.lanes = y.lanes) : (u.updateQueue = null, u.memoizedState = null);
                        }
                        var C = (D.current & 1) != 0, h = o;
                        do {
                            var S;
                            if (S = h.tag === 13) {
                                var k = h.memoizedState;
                                if (k !== null) S = k.dehydrated !== null;
                                else {
                                    var E = h.memoizedProps;
                                    S = E.fallback === void 0 ? !1 : E.unstable_avoidThisFallback !== !0 ? !0 : !C;
                                }
                            }
                            if (S) {
                                var c = h.updateQueue;
                                if (c === null) {
                                    var a = new Set;
                                    a.add(d), h.updateQueue = a;
                                } else c.add(d);
                                if ((h.mode & 2) == 0) {
                                    if (h.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;
                                    else {
                                        var f = Me(-1, 1);
                                        f.tag = 2, Re(u, f);
                                    }
                                    u.lanes |= 1;
                                    break e;
                                }
                                s = void 0, u = n;
                                var p = i.pingCache;
                                if (p === null ? (p = i.pingCache = new rf, s = new Set, p.set(d, s)) : (s = p.get(d), s === void 0 && (s = new Set, p.set(d, s))), !s.has(u)) {
                                    s.add(u);
                                    var m = yf.bind(null, i, d, u);
                                    d.then(m, m);
                                }
                                h.flags |= 4096, h.lanes = n;
                                break e;
                            }
                            h = h.return;
                        }while (h !== null)
                        s = Error((tn(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
                    }
                    H !== 5 && (H = 2), s = si(s, u), h = o;
                    do {
                        switch(h.tag){
                            case 3:
                                i = s, h.flags |= 4096, n &= -n, h.lanes |= n;
                                var _ = bu(h, i, n);
                                vu(h, _);
                                break e;
                            case 1:
                                i = s;
                                var w = h.type, N = h.stateNode;
                                if ((h.flags & 64) == 0 && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (pe === null || !pe.has(N)))) {
                                    h.flags |= 4096, n &= -n, h.lanes |= n;
                                    var T = es(h, i, n);
                                    vu(h, T);
                                    break e;
                                }
                        }
                        h = h.return;
                    }while (h !== null)
                }
                hs(t);
            } catch (P) {
                n = P, j === t && t !== null && (j = t = t.return);
                continue;
            }
            break;
        }while (1)
    }
    function ps() {
        var e1 = Sr.current;
        return Sr.current = gr, e1 === null ? gr : e1;
    }
    function Et(e, n) {
        var t = x;
        x |= 16;
        var r = ps();
        X === e && $ === n || Ln(e, n);
        do try {
            cf();
            break;
        } catch (l) {
            ds(e, l);
        }
        while (1)
        if (Wl(), x = t, Sr.current = r, j !== null) throw Error(v(261));
        return X = null, $ = 0, H;
    }
    function cf() {
        for(; j !== null;)ms(j);
    }
    function df() {
        for(; j !== null && !Ya();)ms(j);
    }
    function ms(e) {
        var n = gs(e.alternate, e, be);
        e.memoizedProps = e.pendingProps, n === null ? hs(e) : j = n, pi.current = null;
    }
    function hs(e) {
        var n = e;
        do {
            var t = n.alternate;
            if (e = n.return, (n.flags & 2048) == 0) {
                if (t = nf(t, n, be), t !== null) {
                    j = t;
                    return;
                }
                if (t = n, t.tag !== 24 && t.tag !== 23 || t.memoizedState === null || (be & 1073741824) != 0 || (t.mode & 4) == 0) {
                    for(var r = 0, l = t.child; l !== null;)r |= l.lanes | l.childLanes, l = l.sibling;
                    t.childLanes = r;
                }
                e !== null && (e.flags & 2048) == 0 && (e.firstEffect === null && (e.firstEffect = n.firstEffect), n.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect), e.lastEffect = n.lastEffect), 1 < n.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = n : e.firstEffect = n, e.lastEffect = n));
            } else {
                if (t = tf(n), t !== null) {
                    t.flags &= 2047, j = t;
                    return;
                }
                e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
            }
            if (n = n.sibling, n !== null) {
                j = n;
                return;
            }
            j = n = e;
        }while (n !== null)
        H === 0 && (H = 5);
    }
    function en(e) {
        var n = Sn();
        return Ge(99, pf.bind(null, e, n)), null;
    }
    function pf(e, n) {
        do Ue();
        while (yt !== null)
        if ((x & 48) != 0) throw Error(v(327));
        var t = e.finishedWork;
        if (t === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(v(177));
        e.callbackNode = null;
        var r = t.lanes | t.childLanes, l1 = r, i = e.pendingLanes & ~l1;
        e.pendingLanes = l1, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= l1, e.mutableReadLanes &= l1, e.entangledLanes &= l1, l1 = e.entanglements;
        for(var o = e.eventTimes, u = e.expirationTimes; 0 < i;){
            var s = 31 - Ne(i), d = 1 << s;
            l1[s] = 0, o[s] = -1, u[s] = -1, i &= ~d;
        }
        if (ge !== null && (r & 24) == 0 && ge.has(e) && ge.delete(e), e === X && (j = X = null, $ = 0), 1 < t.flags ? t.lastEffect !== null ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, r !== null) {
            if (l1 = x, x |= 32, pi.current = null, zl = Bt, o = Ho(), Nl(o)) {
                if ("selectionStart" in o) u = {
                    start: o.selectionStart,
                    end: o.selectionEnd
                };
                else e: if (u = (u = o.ownerDocument) && u.defaultView || window, (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0) {
                    u = d.anchorNode, i = d.anchorOffset, s = d.focusNode, d = d.focusOffset;
                    try {
                        u.nodeType, s.nodeType;
                    } catch (P) {
                        u = null;
                        break e;
                    }
                    var y = 0, C = -1, h = -1, S = 0, k = 0, E = o, c = null;
                    n: for(;;){
                        for(var a; E !== u || i !== 0 && E.nodeType !== 3 || (C = y + i), E !== s || d !== 0 && E.nodeType !== 3 || (h = y + d), E.nodeType === 3 && (y += E.nodeValue.length), (a = E.firstChild) !== null;)c = E, E = a;
                        for(;;){
                            if (E === o) break n;
                            if (c === u && ++S === i && (C = y), c === s && ++k === d && (h = y), (a = E.nextSibling) !== null) break;
                            E = c, c = E.parentNode;
                        }
                        E = a;
                    }
                    u = C === -1 || h === -1 ? null : {
                        start: C,
                        end: h
                    };
                } else u = null;
                u = u || {
                    start: 0,
                    end: 0
                };
            } else u = null;
            Ol = {
                focusedElem: o,
                selectionRange: u
            }, Bt = !1, St = null, _r = !1, g = r;
            do try {
                mf();
            } catch (P) {
                if (g === null) throw Error(v(330));
                Ve(g, P), g = g.nextEffect;
            }
            while (g !== null)
            St = null, g = r;
            do try {
                for(o = e; g !== null;){
                    var f = g.flags;
                    if (f & 16 && jn(g.stateNode, ""), f & 128) {
                        var p = g.alternate;
                        if (p !== null) {
                            var m = p.ref;
                            m !== null && (typeof m == "function" ? m(null) : m.current = null);
                        }
                    }
                    switch(f & 1038){
                        case 2:
                            os(g), g.flags &= -3;
                            break;
                        case 6:
                            os(g), g.flags &= -3, di(g.alternate, g);
                            break;
                        case 1024:
                            g.flags &= -1025;
                            break;
                        case 1028:
                            g.flags &= -1025, di(g.alternate, g);
                            break;
                        case 4:
                            di(g.alternate, g);
                            break;
                        case 8:
                            u = g, us(o, u);
                            var _ = u.alternate;
                            ls(u), _ !== null && ls(_);
                    }
                    g = g.nextEffect;
                }
            } catch (P1) {
                if (g === null) throw Error(v(330));
                Ve(g, P1), g = g.nextEffect;
            }
            while (g !== null)
            if (m = Ol, p = Ho(), f = m.focusedElem, o = m.selectionRange, p !== f && f && f.ownerDocument && Bo(f.ownerDocument.documentElement, f)) {
                for(o !== null && Nl(f) && (p = o.start, m = o.end, m === void 0 && (m = p), ("selectionStart" in f) ? (f.selectionStart = p, f.selectionEnd = Math.min(m, f.value.length)) : (m = (p = f.ownerDocument || document) && p.defaultView || window, m.getSelection && (m = m.getSelection(), u = f.textContent.length, _ = Math.min(o.start, u), o = o.end === void 0 ? _ : Math.min(o.end, u), !m.extend && _ > o && (u = o, o = _, _ = u), u = Vo(f, _), i = Vo(f, o), u && i && (m.rangeCount !== 1 || m.anchorNode !== u.node || m.anchorOffset !== u.offset || m.focusNode !== i.node || m.focusOffset !== i.offset) && (p = p.createRange(), p.setStart(u.node, u.offset), m.removeAllRanges(), _ > o ? (m.addRange(p), m.extend(i.node, i.offset)) : (p.setEnd(i.node, i.offset), m.addRange(p)))))), p = [], m = f; m = m.parentNode;)m.nodeType === 1 && p.push({
                    element: m,
                    left: m.scrollLeft,
                    top: m.scrollTop
                });
                for(typeof f.focus == "function" && f.focus(), f = 0; f < p.length; f++)m = p[f], m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
            }
            Bt = !!zl, Ol = zl = null, e.current = t, g = r;
            do try {
                for(f = e; g !== null;){
                    var w = g.flags;
                    if (w & 36 && uf(f, g.alternate, g), w & 128) {
                        p = void 0;
                        var N = g.ref;
                        if (N !== null) {
                            var T = g.stateNode;
                            switch(g.tag){
                                case 5:
                                    p = T;
                                    break;
                                default:
                                    p = T;
                            }
                            typeof N == "function" ? N(p) : N.current = p;
                        }
                    }
                    g = g.nextEffect;
                }
            } catch (P2) {
                if (g === null) throw Error(v(330));
                Ve(g, P2), g = g.nextEffect;
            }
            while (g !== null)
            g = null, Ka(), x = l1;
        } else e.current = t;
        if (Ie) Ie = !1, yt = e, gt = n;
        else for(g = r; g !== null;)n = g.nextEffect, g.nextEffect = null, g.flags & 8 && (w = g, w.sibling = null, w.stateNode = null), g = n;
        if (r = e.pendingLanes, r === 0 && (pe = null), r === 1 ? e === ki ? wt++ : (wt = 0, ki = e) : wt = 0, t = t.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function") try {
            Ke.onCommitFiberRoot(Fl, t, void 0, (t.current.flags & 64) == 64);
        } catch (P) {
        }
        if (re(e, A()), kr) throw kr = !1, e = wi, wi = null, e;
        return (x & 8) != 0 || ae(), null;
    }
    function mf() {
        for(; g !== null;){
            var e = g.alternate;
            _r || St === null || ((g.flags & 8) != 0 ? uo(g, St) && (_r = !0) : g.tag === 13 && sf(e, g) && uo(g, St) && (_r = !0));
            var n = g.flags;
            (n & 256) != 0 && of(e, g), (n & 512) == 0 || Ie || (Ie = !0, rt(97, function() {
                return Ue(), null;
            })), g = g.nextEffect;
        }
    }
    function Ue() {
        if (gt !== 90) {
            var e = 97 < gt ? 97 : gt;
            return gt = 90, Ge(e, vf);
        }
        return !1;
    }
    function hf(e, n) {
        Si.push(n, e), Ie || (Ie = !0, rt(97, function() {
            return Ue(), null;
        }));
    }
    function vs(e, n) {
        Ei.push(n, e), Ie || (Ie = !0, rt(97, function() {
            return Ue(), null;
        }));
    }
    function vf() {
        if (yt === null) return !1;
        var e1 = yt;
        if (yt = null, (x & 48) != 0) throw Error(v(331));
        var n = x;
        x |= 32;
        var t = Ei;
        Ei = [];
        for(var r = 0; r < t.length; r += 2){
            var l = t[r], i = t[r + 1], o = l.destroy;
            if (l.destroy = void 0, typeof o == "function") try {
                o();
            } catch (s) {
                if (i === null) throw Error(v(330));
                Ve(i, s);
            }
        }
        for(t = Si, Si = [], r = 0; r < t.length; r += 2){
            l = t[r], i = t[r + 1];
            try {
                var u = l.create;
                l.destroy = u();
            } catch (s) {
                if (i === null) throw Error(v(330));
                Ve(i, s);
            }
        }
        for(u = e1.current.firstEffect; u !== null;)e1 = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e1;
        return x = n, ae(), !0;
    }
    function ys(e, n, t) {
        n = si(t, n), n = bu(e, n, 1), Re(e, n), n = b(), e = Nr(e, 1), e !== null && (Vt(e, 1, n), re(e, n));
    }
    function Ve(e, n) {
        if (e.tag === 3) ys(e, e, n);
        else for(var t = e.return; t !== null;){
            if (t.tag === 3) {
                ys(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pe === null || !pe.has(r))) {
                    e = si(n, e);
                    var l = es(t, e, 1);
                    if (Re(t, l), l = b(), t = Nr(t, 1), t !== null) Vt(t, 1, l), re(t, l);
                    else if (typeof r.componentDidCatch == "function" && (pe === null || !pe.has(r))) try {
                        r.componentDidCatch(n, e);
                    } catch (i) {
                    }
                    break;
                }
            }
            t = t.return;
        }
    }
    function yf(e, n, t) {
        var r = e.pingCache;
        r !== null && r.delete(n), n = b(), e.pingedLanes |= e.suspendedLanes & t, X === e && ($ & t) === t && (H === 4 || H === 3 && ($ & 62914560) === $ && 500 > A() - yi ? Ln(e, 0) : hi |= t), re(e, n);
    }
    function gf(e, n) {
        var t = e.stateNode;
        t !== null && t.delete(n), n = 0, n === 0 && (n = e.mode, (n & 2) == 0 ? n = 1 : (n & 4) == 0 ? n = Sn() === 99 ? 1 : 2 : (we === 0 && (we = _n), n = fn(62914560 & ~we), n === 0 && (n = 4194304))), t = b(), e = Nr(e, n), e !== null && (Vt(e, n, t), re(e, t));
    }
    var gs;
    gs = function(e, n, t) {
        var r = n.lanes;
        if (e !== null) if (e.memoizedProps !== n.pendingProps || K.current) ue = !0;
        else if ((t & r) != 0) ue = (e.flags & 16384) != 0;
        else {
            switch(ue = !1, n.tag){
                case 3:
                    Au(n), Gl();
                    break;
                case 5:
                    Cu(n);
                    break;
                case 1:
                    G(n.type) && nr(n);
                    break;
                case 4:
                    Yl(n, n.stateNode.containerInfo);
                    break;
                case 10:
                    r = n.memoizedProps.value;
                    var l = n.type._context;
                    R(lr, l._currentValue), l._currentValue = r;
                    break;
                case 13:
                    if (n.memoizedState !== null) return (t & n.child.childLanes) != 0 ? Qu(e, n, t) : (R(D, D.current & 1), n = ye(e, n, t), n !== null ? n.sibling : null);
                    R(D, D.current & 1);
                    break;
                case 19:
                    if (r = (t & n.childLanes) != 0, (e.flags & 64) != 0) {
                        if (r) return Gu(e, n, t);
                        n.flags |= 64;
                    }
                    if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), R(D, D.current), r) break;
                    return null;
                case 23:
                case 24:
                    return n.lanes = 0, ri(e, n, t);
            }
            return ye(e, n, t);
        }
        else ue = !1;
        switch(n.lanes = 0, n.tag){
            case 2:
                if (r = n.type, e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, l = wn(n, W.current), kn(n, t), l = ql(null, n, r, e, l, t), n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
                    if (n.tag = 1, n.memoizedState = null, n.updateQueue = null, G(r)) {
                        var i = !0;
                        nr(n);
                    } else i = !1;
                    n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ql(n);
                    var o = r.getDerivedStateFromProps;
                    typeof o == "function" && ur(n, r, o, e), l.updater = sr, n.stateNode = l, l._reactInternals = n, $l(n, r, e, t), n = ii(null, n, r, !0, i, t);
                } else n.tag = 0, J(null, n, l, t), n = n.child;
                return n;
            case 16:
                l = n.elementType;
                e: {
                    switch(e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, i = l._init, l = i(l._payload), n.type = l, i = n.tag = Sf(l), e = oe(l, e), i){
                        case 0:
                            n = li(null, n, l, e, t);
                            break e;
                        case 1:
                            n = Wu(null, n, l, e, t);
                            break e;
                        case 11:
                            n = Uu(null, n, l, e, t);
                            break e;
                        case 14:
                            n = Vu(null, n, l, oe(l.type, e), r, t);
                            break e;
                    }
                    throw Error(v(306, l, ""));
                }
                return n;
            case 0:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), li(e, n, r, l, t);
            case 1:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), Wu(e, n, r, l, t);
            case 3:
                if (Au(n), r = n.updateQueue, e === null || r === null) throw Error(v(282));
                if (r = n.pendingProps, l = n.memoizedState, l = l !== null ? l.element : null, hu(e, n), lt(n, r, null, t), r = n.memoizedState.element, r === l) Gl(), n = ye(e, n, t);
                else {
                    if (l = n.stateNode, (i = l.hydrate) && (De = hn(n.stateNode.containerInfo.firstChild), ve = n, i = ce = !0), i) {
                        if (e = l.mutableSourceEagerHydrationData, e != null) for(l = 0; l < e.length; l += 2)i = e[l], i._workInProgressVersionPrimary = e[l + 1], Cn.push(i);
                        for(t = xu(n, null, r, t), n.child = t; t;)t.flags = t.flags & -3 | 1024, t = t.sibling;
                    } else J(e, n, r, t), Gl();
                    n = n.child;
                }
                return n;
            case 5:
                return Cu(n), e === null && Kl(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ml(r, l) ? o = null : i !== null && Ml(r, i) && (n.flags |= 16), Hu(e, n), J(e, n, o, t), n.child;
            case 6:
                return e === null && Kl(n), null;
            case 13:
                return Qu(e, n, t);
            case 4:
                return Yl(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = cr(n, null, r, t) : J(e, n, r, t), n.child;
            case 11:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), Uu(e, n, r, l, t);
            case 7:
                return J(e, n, n.pendingProps, t), n.child;
            case 8:
                return J(e, n, n.pendingProps.children, t), n.child;
            case 12:
                return J(e, n, n.pendingProps.children, t), n.child;
            case 10:
                e: {
                    r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value;
                    var u = n.type._context;
                    if (R(lr, u._currentValue), u._currentValue = i, o !== null) if (u = o.value, i = ee(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
                        if (o.children === l.children && !K.current) {
                            n = ye(e, n, t);
                            break e;
                        }
                    } else for(u = n.child, u !== null && (u.return = n); u !== null;){
                        var s = u.dependencies;
                        if (s !== null) {
                            o = u.child;
                            for(var d = s.firstContext; d !== null;){
                                if (d.context === r && (d.observedBits & i) != 0) {
                                    u.tag === 1 && (d = Me(-1, t & -t), d.tag = 2, Re(u, d)), u.lanes |= t, d = u.alternate, d !== null && (d.lanes |= t), mu(u.return, t), s.lanes |= t;
                                    break;
                                }
                                d = d.next;
                            }
                        } else o = u.tag === 10 && u.type === n.type ? null : u.child;
                        if (o !== null) o.return = u;
                        else for(o = u; o !== null;){
                            if (o === n) {
                                o = null;
                                break;
                            }
                            if (u = o.sibling, u !== null) {
                                u.return = o.return, o = u;
                                break;
                            }
                            o = o.return;
                        }
                        u = o;
                    }
                    J(e, n, l.children, t), n = n.child;
                }
                return n;
            case 9:
                return l = n.type, i = n.pendingProps, r = i.children, kn(n, t), l = ne(l, i.unstable_observedBits), r = r(l), n.flags |= 1, J(e, n, r, t), n.child;
            case 14:
                return l = n.type, i = oe(l, n.pendingProps), i = oe(l.type, i), Vu(e, n, l, i, r, t);
            case 15:
                return Bu(e, n, n.type, n.pendingProps, r, t);
            case 17:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : oe(r, l), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, G(r) ? (e = !0, nr(n)) : e = !1, kn(n, t), Su(n, r, l), $l(n, r, l, t), ii(null, n, r, !0, e, t);
            case 19:
                return Gu(e, n, t);
            case 23:
                return ri(e, n, t);
            case 24:
                return ri(e, n, t);
        }
        throw Error(v(156, n.tag));
    };
    function wf(e, n, t, r) {
        this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function le(e, n, t, r) {
        return new wf(e, n, t, r);
    }
    function _i(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Sf(e) {
        if (typeof e == "function") return _i(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Nt) return 11;
            if (e === Tt) return 14;
        }
        return 2;
    }
    function Be(e, n) {
        var t = e.alternate;
        return t === null ? (t = le(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
    }
    function Tr(e, n, t, r, l, i) {
        var o = 2;
        if (r = e, typeof e == "function") _i(e) && (o = 1);
        else if (typeof e == "string") o = 5;
        else e: switch(e){
            case Ee:
                return zn(t.children, l, i, n);
            case Vi:
                o = 8, l |= 16;
                break;
            case Fr:
                o = 8, l |= 1;
                break;
            case Rn:
                return e = le(12, t, n, l | 8), e.elementType = Rn, e.type = Rn, e.lanes = i, e;
            case Dn:
                return e = le(13, t, n, l), e.type = Dn, e.elementType = Dn, e.lanes = i, e;
            case Pt:
                return e = le(19, t, n, l), e.elementType = Pt, e.lanes = i, e;
            case Wr:
                return Ni(t, l, i, n);
            case Ar:
                return e = le(24, t, n, l), e.elementType = Ar, e.lanes = i, e;
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case jr:
                        o = 10;
                        break e;
                    case Ur:
                        o = 9;
                        break e;
                    case Nt:
                        o = 11;
                        break e;
                    case Tt:
                        o = 14;
                        break e;
                    case Vr:
                        o = 16, r = null;
                        break e;
                    case Br:
                        o = 22;
                        break e;
                }
                throw Error(v(130, e == null ? e : typeof e, ""));
        }
        return n = le(o, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
    }
    function zn(e, n, t, r) {
        return e = le(7, e, r, n), e.lanes = t, e;
    }
    function Ni(e, n, t, r) {
        return e = le(23, e, r, n), e.elementType = Wr, e.lanes = t, e;
    }
    function Pi(e, n, t) {
        return e = le(6, e, null, n), e.lanes = t, e;
    }
    function Ti(e, n, t) {
        return n = le(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, n;
    }
    function Ef(e, n, t) {
        this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = hl(0), this.expirationTimes = hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.mutableSourceEagerHydrationData = null;
    }
    function kf(e, n, t) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Ae,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: n,
            implementation: t
        };
    }
    function Lr(e, n, t, r) {
        var l1 = n.current, i = b(), o = Fe(l1);
        e: if (t) {
            t = t._reactInternals;
            n: {
                if ($e(t) !== t || t.tag !== 1) throw Error(v(170));
                var u = t;
                do {
                    switch(u.tag){
                        case 3:
                            u = u.stateNode.context;
                            break n;
                        case 1:
                            if (G(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break n;
                            }
                    }
                    u = u.return;
                }while (u !== null)
                throw Error(v(171));
            }
            if (t.tag === 1) {
                var s = t.type;
                if (G(s)) {
                    t = lu(t, s, u);
                    break e;
                }
            }
            t = u;
        } else t = ze;
        return n.context === null ? n.context = t : n.pendingContext = t, n = Me(i, o), n.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (n.callback = r), Re(l1, n), je(l1, o, i), o;
    }
    function Li(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function ws(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var t = e.retryLane;
            e.retryLane = t !== 0 && t < n ? t : n;
        }
    }
    function zi(e, n) {
        ws(e, n), (e = e.alternate) && ws(e, n);
    }
    function xf() {
        return null;
    }
    function Oi(e, n, t) {
        var r = t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources || null;
        if (t = new Ef(e, n, t != null && t.hydrate === !0), n = le(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0), t.current = n, n.stateNode = t, Ql(n), e[vn] = t.current, Xo(e.nodeType === 8 ? e.parentNode : e), r) for(e = 0; e < r.length; e++){
            n = r[e];
            var l = n._getVersion;
            l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
                n,
                l
            ] : t.mutableSourceEagerHydrationData.push(n, l);
        }
        this._internalRoot = t;
    }
    Oi.prototype.render = function(e) {
        Lr(e, this._internalRoot, null, null);
    };
    Oi.prototype.unmount = function() {
        var e1 = this._internalRoot, n = e1.containerInfo;
        Lr(null, e1, null, function() {
            n[vn] = null;
        });
    };
    function kt(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Cf(e, n) {
        if (n || (n = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot"))), !n) for(var t; t = e.lastChild;)e.removeChild(t);
        return new Oi(e, 0, n ? {
            hydrate: !0
        } : void 0);
    }
    function zr(e, n, t, r, l) {
        var i = t._reactRootContainer;
        if (i) {
            var o = i._internalRoot;
            if (typeof l == "function") {
                var u = l;
                l = function() {
                    var d = Li(o);
                    u.call(d);
                };
            }
            Lr(n, o, e, l);
        } else {
            if (i = t._reactRootContainer = Cf(t, r), o = i._internalRoot, typeof l == "function") {
                var s = l;
                l = function() {
                    var d = Li(o);
                    s.call(d);
                };
            }
            cs(function() {
                Lr(n, o, e, l);
            });
        }
        return Li(o);
    }
    so = function(e) {
        if (e.tag === 13) {
            var n = b();
            je(e, 4, n), zi(e, 4);
        }
    };
    al = function(e) {
        if (e.tag === 13) {
            var n = b();
            je(e, 67108864, n), zi(e, 67108864);
        }
    };
    ao = function(e) {
        if (e.tag === 13) {
            var n = b(), t = Fe(e);
            je(e, t, n), zi(e, t);
        }
    };
    fo = function(e, n) {
        return n();
    };
    tl = function(e, n, t) {
        switch(n){
            case "input":
                if (Xr(e, t), n = t.name, t.type === "radio" && n != null) {
                    for(t = e; t.parentNode;)t = t.parentNode;
                    for(t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++){
                        var r = t[n];
                        if (r !== e && r.form === e.form) {
                            var l = bt(r);
                            if (!l) throw Error(v(90));
                            Wi(r), Xr(r, l);
                        }
                    }
                }
                break;
            case "textarea":
                Xi(e, t);
                break;
            case "select":
                n = t.value, n != null && rn(e, !!t.multiple, n, !1);
        }
    };
    rl = fs;
    to = function(e, n, t, r, l) {
        var i = x;
        x |= 4;
        try {
            return Ge(98, e.bind(null, n, t, r, l));
        } finally{
            x = i, x === 0 && (Pn(), ae());
        }
    };
    ll = function() {
        (x & 49) == 0 && (ff(), Ue());
    };
    ro = function(e, n) {
        var t = x;
        x |= 2;
        try {
            return e(n);
        } finally{
            x = t, x === 0 && (Pn(), ae());
        }
    };
    function Ss(e, n) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!kt(n)) throw Error(v(200));
        return kf(e, n, null, t);
    }
    var _f = {
        Events: [
            tt,
            yn,
            bt,
            eo,
            no,
            Ue,
            {
                current: !1
            }
        ]
    }, xt = {
        findFiberByHostInstance: Ye,
        bundleType: 0,
        version: "17.0.2",
        rendererPackageName: "react-dom"
    }, Nf = {
        bundleType: xt.bundleType,
        version: xt.version,
        rendererPackageName: xt.rendererPackageName,
        rendererConfig: xt.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: We.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = oo(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: xt.findFiberByHostInstance || xf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && (Ct = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Ct.isDisabled && Ct.supportsFiber)) try {
        Fl = Ct.inject(Nf), Ke = Ct;
    } catch (e1) {
    }
    var Ct;
    ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f;
    ie.createPortal = Ss;
    ie.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(v(188)) : Error(v(268, Object.keys(e)));
        return e = oo(n), e = e === null ? null : e.stateNode, e;
    };
    ie.flushSync = function(e, n) {
        var t = x;
        if ((t & 48) != 0) return e(n);
        x |= 1;
        try {
            if (e) return Ge(99, e.bind(null, n));
        } finally{
            x = t, ae();
        }
    };
    ie.hydrate = function(e, n, t) {
        if (!kt(n)) throw Error(v(200));
        return zr(null, e, n, !0, t);
    };
    ie.render = function(e, n, t) {
        if (!kt(n)) throw Error(v(200));
        return zr(null, e, n, !1, t);
    };
    ie.unmountComponentAtNode = function(e) {
        if (!kt(e)) throw Error(v(40));
        return e._reactRootContainer ? (cs(function() {
            zr(null, null, e, !1, function() {
                e._reactRootContainer = null, e[vn] = null;
            });
        }), !0) : !1;
    };
    ie.unstable_batchedUpdates = fs;
    ie.unstable_createPortal = function(e, n) {
        return Ss(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    ie.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
        if (!kt(t)) throw Error(v(200));
        if (e == null || e._reactInternals === void 0) throw Error(v(38));
        return zr(e, n, t, !1, r);
    };
    ie.version = "17.0.2";
});
var Mi = Ri((Of, xs)=>{
    "use strict";
    function ks() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ks);
        } catch (e) {
            console.error(e);
        }
    }
    ks(), xs.exports = Es();
});
var Pf = Di(Mi()), Tf = Di(Mi()), { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mf , createPortal: Rf , findDOMNode: Df , flushSync: If , hydrate: Ff , render: jf , unmountComponentAtNode: Uf , unstable_batchedUpdates: Vf , unstable_createPortal: Bf , unstable_renderSubtreeIntoContainer: Hf , version: Wf  } = Pf;
var export_default7 = Tf.default;
var process = window.process = {
};
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimeout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimeout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimeout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimeout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len){
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for(var i = 1; i < arguments.length; i++){
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = '';
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};
var __defProp = Object.defineProperty;
var __markAsModule = (target)=>__defProp(target, "__esModule", {
        value: true
    })
;
var __export = (target, all)=>{
    __markAsModule(target);
    for(var name in all){
        __defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    }
};
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) {
        throw TypeError("Cannot add the same private member more than once");
    }
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
var DenoStdInternalError = class extends Error {
    constructor(message){
        super(message);
        this.name = "DenoStdInternalError";
    }
};
function assert(expr, msg = "") {
    if (!expr) {
        throw new DenoStdInternalError(msg);
    }
}
var { Deno: Deno2  } = globalThis;
typeof Deno2?.noColor === "boolean" ? Deno2.noColor : true;
new RegExp([
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", 
].join("|"), "g");
var DiffType;
(function(DiffType2) {
    DiffType2["removed"] = "removed";
    DiffType2["common"] = "common";
    DiffType2["added"] = "added";
})(DiffType || (DiffType = {
}));
var AssertionError = class extends Error {
    constructor(message){
        super(message);
        this.name = "AssertionError";
    }
};
function unreachable() {
    throw new AssertionError("unreachable");
}
var osType = (()=>{
    const { Deno: Deno3  } = globalThis;
    if (typeof Deno3?.build?.os === "string") {
        return Deno3.build.os;
    }
    const { navigator  } = globalThis;
    if (navigator?.appVersion?.includes?.("Win") ?? false) {
        return "windows";
    }
    return "linux";
})();
var kCustomPromisifiedSymbol = Symbol.for("nodejs.util.promisify.custom");
var kCustomPromisifyArgsSymbol = Symbol.for("nodejs.util.promisify.customArgs");
var NodeInvalidArgTypeError = class extends TypeError {
    constructor(argumentName, type, received){
        super(`The "${argumentName}" argument must be of type ${type}. Received ${typeof received}`);
        this.code = "ERR_INVALID_ARG_TYPE";
    }
};
function promisify(original) {
    if (typeof original !== "function") {
        throw new NodeInvalidArgTypeError("original", "Function", original);
    }
    if (original[kCustomPromisifiedSymbol]) {
        const fn2 = original[kCustomPromisifiedSymbol];
        if (typeof fn2 !== "function") {
            throw new NodeInvalidArgTypeError("util.promisify.custom", "Function", fn2);
        }
        return Object.defineProperty(fn2, kCustomPromisifiedSymbol, {
            value: fn2,
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    const argumentNames = original[kCustomPromisifyArgsSymbol];
    function fn(...args) {
        return new Promise((resolve, reject)=>{
            original.call(this, ...args, (err, ...values)=>{
                if (err) {
                    return reject(err);
                }
                if (argumentNames !== void 0 && values.length > 1) {
                    const obj = {
                    };
                    for(let i = 0; i < argumentNames.length; i++){
                        obj[argumentNames[i]] = values[i];
                    }
                    resolve(obj);
                } else {
                    resolve(values[0]);
                }
            });
        });
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, Object.getOwnPropertyDescriptors(original));
}
promisify.custom = kCustomPromisifiedSymbol;
var util_types_exports = {
};
__export(util_types_exports, {
    isAnyArrayBuffer: ()=>isAnyArrayBuffer
    ,
    isArgumentsObject: ()=>isArgumentsObject
    ,
    isArrayBuffer: ()=>isArrayBuffer
    ,
    isArrayBufferView: ()=>isArrayBufferView
    ,
    isAsyncFunction: ()=>isAsyncFunction
    ,
    isBigInt64Array: ()=>isBigInt64Array
    ,
    isBigIntObject: ()=>isBigIntObject
    ,
    isBigUint64Array: ()=>isBigUint64Array
    ,
    isBooleanObject: ()=>isBooleanObject
    ,
    isBoxedPrimitive: ()=>isBoxedPrimitive
    ,
    isDataView: ()=>isDataView
    ,
    isDate: ()=>isDate
    ,
    isFloat32Array: ()=>isFloat32Array
    ,
    isFloat64Array: ()=>isFloat64Array
    ,
    isGeneratorFunction: ()=>isGeneratorFunction
    ,
    isGeneratorObject: ()=>isGeneratorObject
    ,
    isInt16Array: ()=>isInt16Array
    ,
    isInt32Array: ()=>isInt32Array
    ,
    isInt8Array: ()=>isInt8Array
    ,
    isMap: ()=>isMap
    ,
    isMapIterator: ()=>isMapIterator
    ,
    isModuleNamespaceObject: ()=>isModuleNamespaceObject
    ,
    isNativeError: ()=>isNativeError
    ,
    isNumberObject: ()=>isNumberObject
    ,
    isPromise: ()=>isPromise
    ,
    isRegExp: ()=>isRegExp
    ,
    isSet: ()=>isSet
    ,
    isSetIterator: ()=>isSetIterator
    ,
    isSharedArrayBuffer: ()=>isSharedArrayBuffer
    ,
    isStringObject: ()=>isStringObject
    ,
    isSymbolObject: ()=>isSymbolObject
    ,
    isTypedArray: ()=>isTypedArray
    ,
    isUint16Array: ()=>isUint16Array
    ,
    isUint32Array: ()=>isUint32Array
    ,
    isUint8Array: ()=>isUint8Array
    ,
    isUint8ClampedArray: ()=>isUint8ClampedArray
    ,
    isWeakMap: ()=>isWeakMap
    ,
    isWeakSet: ()=>isWeakSet
});
var _toString = Object.prototype.toString;
var _isObjectLike = (value)=>value !== null && typeof value === "object"
;
var _isFunctionLike = (value)=>value !== null && typeof value === "function"
;
function isAnyArrayBuffer(value) {
    return _isObjectLike(value) && (_toString.call(value) === "[object ArrayBuffer]" || _toString.call(value) === "[object SharedArrayBuffer]");
}
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value);
}
function isArgumentsObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Arguments]";
}
function isArrayBuffer(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object ArrayBuffer]";
}
function isAsyncFunction(value) {
    return _isFunctionLike(value) && _toString.call(value) === "[object AsyncFunction]";
}
function isBigInt64Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object BigInt64Array]";
}
function isBigUint64Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object BigUint64Array]";
}
function isBooleanObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Boolean]";
}
function isBoxedPrimitive(value) {
    return isBooleanObject(value) || isStringObject(value) || isNumberObject(value) || isSymbolObject(value) || isBigIntObject(value);
}
function isDataView(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object DataView]";
}
function isDate(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Date]";
}
function isFloat32Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Float32Array]";
}
function isFloat64Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Float64Array]";
}
function isGeneratorFunction(value) {
    return _isFunctionLike(value) && _toString.call(value) === "[object GeneratorFunction]";
}
function isGeneratorObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Generator]";
}
function isInt8Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Int8Array]";
}
function isInt16Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Int16Array]";
}
function isInt32Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Int32Array]";
}
function isMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Map]";
}
function isMapIterator(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Map Iterator]";
}
function isModuleNamespaceObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Module]";
}
function isNativeError(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Error]";
}
function isNumberObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Number]";
}
function isBigIntObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object BigInt]";
}
function isPromise(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Promise]";
}
function isRegExp(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object RegExp]";
}
function isSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Set]";
}
function isSetIterator(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Set Iterator]";
}
function isSharedArrayBuffer(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object SharedArrayBuffer]";
}
function isStringObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object String]";
}
function isSymbolObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Symbol]";
}
function isTypedArray(value) {
    const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
    return _isObjectLike(value) && reTypedTag.test(_toString.call(value));
}
function isUint8Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Uint8Array]";
}
function isUint8ClampedArray(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Uint8ClampedArray]";
}
function isUint16Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Uint16Array]";
}
function isUint32Array(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Uint32Array]";
}
function isWeakMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakMap]";
}
function isWeakSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakSet]";
}
function deferred() {
    let methods;
    let state = "pending";
    const promise = new Promise((resolve, reject)=>{
        methods = {
            async resolve (value) {
                await value;
                state = "fulfilled";
                resolve(value);
            },
            reject (reason) {
                state = "rejected";
                reject(reason);
            }
        };
    });
    Object.defineProperty(promise, "state", {
        get: ()=>state
    });
    return Object.assign(promise, methods);
}
(class {
    constructor(){
        this.iteratorCount = 0;
        this.yields = [];
        this.throws = [];
        this.signal = deferred();
    }
    add(iterable) {
        ++this.iteratorCount;
        this.callIteratorNext(iterable[Symbol.asyncIterator]());
    }
    async callIteratorNext(iterator) {
        try {
            const { value , done  } = await iterator.next();
            if (done) {
                --this.iteratorCount;
            } else {
                this.yields.push({
                    iterator,
                    value
                });
            }
        } catch (e) {
            this.throws.push(e);
        }
        this.signal.resolve();
    }
    async *iterate() {
        while(this.iteratorCount > 0){
            await this.signal;
            for(let i = 0; i < this.yields.length; i++){
                const { iterator , value  } = this.yields[i];
                yield value;
                this.callIteratorNext(iterator);
            }
            if (this.throws.length) {
                for (const e of this.throws){
                    throw e;
                }
                this.throws.length = 0;
            }
            this.yields.length = 0;
            this.signal = deferred();
        }
    }
    [Symbol.asyncIterator]() {
        return this.iterate();
    }
});
var noop1 = ()=>{
};
(class {
    constructor(){
        this.resolveCurrent = noop1;
        this.consume = noop1;
        this.currentPromise = new Promise((resolve)=>{
            this.resolveCurrent = resolve;
        });
        this.consumed = new Promise((resolve)=>{
            this.consume = resolve;
        });
    }
    reset() {
        this.currentPromise = new Promise((resolve)=>{
            this.resolveCurrent = resolve;
        });
        this.consumed = new Promise((resolve)=>{
            this.consume = resolve;
        });
    }
    async next() {
        const res = await this.currentPromise;
        this.consume();
        this.reset();
        return res;
    }
    async push(res) {
        this.resolveCurrent(res);
        await this.consumed;
    }
    [Symbol.asyncIterator]() {
        return this;
    }
});
function copy(src, dst, off = 0) {
    off = Math.max(0, Math.min(off, dst.byteLength));
    const dstBytesAvailable = dst.byteLength - off;
    if (src.byteLength > dstBytesAvailable) {
        src = src.subarray(0, dstBytesAvailable);
    }
    dst.set(src, off);
    return src.byteLength;
}
var MIN_READ = 32 * 1024;
var MAX_SIZE = 2 ** 32 - 2;
(class {
    #buf;
    #off = 0;
    constructor(ab){
        this.#buf = ab === void 0 ? new Uint8Array(0) : new Uint8Array(ab);
    }
    bytes(options = {
        copy: true
    }) {
        if (options.copy === false) return this.#buf.subarray(this.#off);
        return this.#buf.slice(this.#off);
    }
    empty() {
        return this.#buf.byteLength <= this.#off;
    }
    get length() {
        return this.#buf.byteLength - this.#off;
    }
    get capacity() {
        return this.#buf.buffer.byteLength;
    }
    truncate(n) {
        if (n === 0) {
            this.reset();
            return;
        }
        if (n < 0 || n > this.length) {
            throw Error("bytes.Buffer: truncation out of range");
        }
        this.#reslice(this.#off + n);
    }
    reset() {
        this.#reslice(0);
        this.#off = 0;
    }
     #tryGrowByReslice(n) {
        const l = this.#buf.byteLength;
        if (n <= this.capacity - l) {
            this.#reslice(l + n);
            return l;
        }
        return -1;
    }
     #reslice(len) {
        assert(len <= this.#buf.buffer.byteLength);
        this.#buf = new Uint8Array(this.#buf.buffer, 0, len);
    }
    readSync(p) {
        if (this.empty()) {
            this.reset();
            if (p.byteLength === 0) {
                return 0;
            }
            return null;
        }
        const nread = copy(this.#buf.subarray(this.#off), p);
        this.#off += nread;
        return nread;
    }
    read(p) {
        const rr = this.readSync(p);
        return Promise.resolve(rr);
    }
    writeSync(p) {
        const m = this.#grow(p.byteLength);
        return copy(p, this.#buf, m);
    }
    write(p) {
        const n = this.writeSync(p);
        return Promise.resolve(n);
    }
     #grow(n) {
        const m = this.length;
        if (m === 0 && this.#off !== 0) {
            this.reset();
        }
        const i = this.#tryGrowByReslice(n);
        if (i >= 0) {
            return i;
        }
        const c = this.capacity;
        if (n <= Math.floor(c / 2) - m) {
            copy(this.#buf.subarray(this.#off), this.#buf);
        } else if (c + n > MAX_SIZE) {
            throw new Error("The buffer cannot be grown beyond the maximum size.");
        } else {
            const buf = new Uint8Array(Math.min(2 * c + n, MAX_SIZE));
            copy(this.#buf.subarray(this.#off), buf);
            this.#buf = buf;
        }
        this.#off = 0;
        this.#reslice(Math.min(m + n, MAX_SIZE));
        return m;
    }
    grow(n) {
        if (n < 0) {
            throw Error("Buffer.grow: negative count");
        }
        const m = this.#grow(n);
        this.#reslice(m);
    }
    async readFrom(r) {
        let n = 0;
        const tmp = new Uint8Array(MIN_READ);
        while(true){
            const shouldGrow = this.capacity - this.length < MIN_READ;
            const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
            const nread = await r.read(buf);
            if (nread === null) {
                return n;
            }
            if (shouldGrow) this.writeSync(buf.subarray(0, nread));
            else this.#reslice(this.length + nread);
            n += nread;
        }
    }
    readFromSync(r) {
        let n = 0;
        const tmp = new Uint8Array(MIN_READ);
        while(true){
            const shouldGrow = this.capacity - this.length < MIN_READ;
            const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
            const nread = r.readSync(buf);
            if (nread === null) {
                return n;
            }
            if (shouldGrow) this.writeSync(buf.subarray(0, nread));
            else this.#reslice(this.length + nread);
            n += nread;
        }
    }
});
"\r".charCodeAt(0);
"\n".charCodeAt(0);
function notImplemented(msg) {
    const message = msg ? `Not implemented: ${msg}` : "Not implemented";
    throw new Error(message);
}
function normalizeEncoding(enc) {
    if (enc == null || enc === "utf8" || enc === "utf-8") return "utf8";
    return slowCases(enc);
}
function slowCases(enc) {
    switch(enc.length){
        case 4:
            if (enc === "UTF8") return "utf8";
            if (enc === "ucs2" || enc === "UCS2") return "utf16le";
            enc = `${enc}`.toLowerCase();
            if (enc === "utf8") return "utf8";
            if (enc === "ucs2") return "utf16le";
            break;
        case 3:
            if (enc === "hex" || enc === "HEX" || `${enc}`.toLowerCase() === "hex") {
                return "hex";
            }
            break;
        case 5:
            if (enc === "ascii") return "ascii";
            if (enc === "ucs-2") return "utf16le";
            if (enc === "UTF-8") return "utf8";
            if (enc === "ASCII") return "ascii";
            if (enc === "UCS-2") return "utf16le";
            enc = `${enc}`.toLowerCase();
            if (enc === "utf-8") return "utf8";
            if (enc === "ascii") return "ascii";
            if (enc === "ucs-2") return "utf16le";
            break;
        case 6:
            if (enc === "base64") return "base64";
            if (enc === "latin1" || enc === "binary") return "latin1";
            if (enc === "BASE64") return "base64";
            if (enc === "LATIN1" || enc === "BINARY") return "latin1";
            enc = `${enc}`.toLowerCase();
            if (enc === "base64") return "base64";
            if (enc === "latin1" || enc === "binary") return "latin1";
            break;
        case 7:
            if (enc === "utf16le" || enc === "UTF16LE" || `${enc}`.toLowerCase() === "utf16le") {
                return "utf16le";
            }
            break;
        case 8:
            if (enc === "utf-16le" || enc === "UTF-16LE" || `${enc}`.toLowerCase() === "utf-16le") {
                return "utf16le";
            }
            break;
        default:
            if (enc === "") return "utf8";
    }
}
function once(callback) {
    let called = false;
    return function(...args) {
        if (called) return;
        called = true;
        callback.apply(this, args);
    };
}
Number.isSafeInteger;
var DEFAULT_INSPECT_OPTIONS = {
    showHidden: false,
    depth: 2,
    colors: false,
    customInspect: true,
    showProxy: false,
    maxArrayLength: 100,
    maxStringLength: Infinity,
    breakLength: 80,
    compact: 3,
    sorted: false,
    getters: false
};
inspect.defaultOptions = DEFAULT_INSPECT_OPTIONS;
inspect.custom = Symbol.for("nodejs.util.inspect.custom");
function inspect(object, ...opts) {
    if (typeof object === "string" && !object.includes("'")) {
        return `'${object}'`;
    }
    opts = {
        ...DEFAULT_INSPECT_OPTIONS,
        ...opts
    };
    return Deno.inspect(object, {
        depth: opts.depth,
        iterableLimit: opts.maxArrayLength,
        compact: !!opts.compact,
        sorted: !!opts.sorted,
        showProxy: !!opts.showProxy
    });
}
var classRegExp = /^([A-Z][a-z0-9]*)+$/;
var kTypes = [
    "string",
    "function",
    "number",
    "object",
    "Function",
    "Object",
    "boolean",
    "bigint",
    "symbol", 
];
var NodeErrorAbstraction = class extends Error {
    constructor(name, code, message){
        super(message);
        this.code = code;
        this.name = name;
        this.stack = this.stack && `${name} [${this.code}]${this.stack.slice(20)}`;
    }
    toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
    }
};
var NodeError = class extends NodeErrorAbstraction {
    constructor(code, message){
        super(Error.prototype.name, code, message);
    }
};
var NodeRangeError = class extends NodeErrorAbstraction {
    constructor(code, message){
        super(RangeError.prototype.name, code, message);
        Object.setPrototypeOf(this, RangeError.prototype);
    }
};
var NodeTypeError = class extends NodeErrorAbstraction {
    constructor(code, message){
        super(TypeError.prototype.name, code, message);
        Object.setPrototypeOf(this, TypeError.prototype);
    }
};
var ERR_INVALID_ARG_TYPE = class extends NodeTypeError {
    constructor(name, expected, actual){
        expected = Array.isArray(expected) ? expected : [
            expected
        ];
        let msg = "The ";
        if (name.endsWith(" argument")) {
            msg += `${name} `;
        } else {
            const type = name.includes(".") ? "property" : "argument";
            msg += `"${name}" ${type} `;
        }
        msg += "must be ";
        const types = [];
        const instances = [];
        const other = [];
        for (const value of expected){
            if (kTypes.includes(value)) {
                types.push(value.toLocaleLowerCase());
            } else if (classRegExp.test(value)) {
                instances.push(value);
            } else {
                other.push(value);
            }
        }
        if (instances.length > 0) {
            const pos = types.indexOf("object");
            if (pos !== -1) {
                types.splice(pos, 1);
                instances.push("Object");
            }
        }
        if (types.length > 0) {
            if (types.length > 2) {
                const last = types.pop();
                msg += `one of type ${types.join(", ")}, or ${last}`;
            } else if (types.length === 2) {
                msg += `one of type ${types[0]} or ${types[1]}`;
            } else {
                msg += `of type ${types[0]}`;
            }
            if (instances.length > 0 || other.length > 0) {
                msg += " or ";
            }
        }
        if (instances.length > 0) {
            if (instances.length > 2) {
                const last = instances.pop();
                msg += `an instance of ${instances.join(", ")}, or ${last}`;
            } else {
                msg += `an instance of ${instances[0]}`;
                if (instances.length === 2) {
                    msg += ` or ${instances[1]}`;
                }
            }
            if (other.length > 0) {
                msg += " or ";
            }
        }
        if (other.length > 0) {
            if (other.length > 2) {
                const last = other.pop();
                msg += `one of ${other.join(", ")}, or ${last}`;
            } else if (other.length === 2) {
                msg += `one of ${other[0]} or ${other[1]}`;
            } else {
                if (other[0].toLowerCase() !== other[0]) {
                    msg += "an ";
                }
                msg += `${other[0]}`;
            }
        }
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper(actual)}`);
    }
};
function invalidArgTypeHelper(input) {
    if (input == null) {
        return ` Received ${input}`;
    }
    if (typeof input === "function" && input.name) {
        return ` Received function ${input.name}`;
    }
    if (typeof input === "object") {
        if (input.constructor && input.constructor.name) {
            return ` Received an instance of ${input.constructor.name}`;
        }
        return ` Received ${inspect(input, {
            depth: -1
        })}`;
    }
    let inspected = inspect(input, {
        colors: false
    });
    if (inspected.length > 25) {
        inspected = `${inspected.slice(0, 25)}...`;
    }
    return ` Received type ${typeof input} (${inspected})`;
}
var ERR_OUT_OF_RANGE = class extends RangeError {
    constructor(str, range, received){
        super(`The value of "${str}" is out of range. It must be ${range}. Received ${received}`);
        this.code = "ERR_OUT_OF_RANGE";
        const { name  } = this;
        this.name = `${name} [${this.code}]`;
        this.stack;
        this.name = name;
    }
};
var ERR_BUFFER_OUT_OF_BOUNDS = class extends NodeRangeError {
    constructor(name){
        super("ERR_BUFFER_OUT_OF_BOUNDS", name ? `"${name}" is outside of buffer bounds` : "Attempt to access memory outside buffer bounds");
    }
};
var windows = [
    [
        -4093,
        [
            "E2BIG",
            "argument list too long"
        ]
    ],
    [
        -4092,
        [
            "EACCES",
            "permission denied"
        ]
    ],
    [
        -4091,
        [
            "EADDRINUSE",
            "address already in use"
        ]
    ],
    [
        -4090,
        [
            "EADDRNOTAVAIL",
            "address not available"
        ]
    ],
    [
        -4089,
        [
            "EAFNOSUPPORT",
            "address family not supported"
        ]
    ],
    [
        -4088,
        [
            "EAGAIN",
            "resource temporarily unavailable"
        ]
    ],
    [
        -3000,
        [
            "EAI_ADDRFAMILY",
            "address family not supported"
        ]
    ],
    [
        -3001,
        [
            "EAI_AGAIN",
            "temporary failure"
        ]
    ],
    [
        -3002,
        [
            "EAI_BADFLAGS",
            "bad ai_flags value"
        ]
    ],
    [
        -3013,
        [
            "EAI_BADHINTS",
            "invalid value for hints"
        ]
    ],
    [
        -3003,
        [
            "EAI_CANCELED",
            "request canceled"
        ]
    ],
    [
        -3004,
        [
            "EAI_FAIL",
            "permanent failure"
        ]
    ],
    [
        -3005,
        [
            "EAI_FAMILY",
            "ai_family not supported"
        ]
    ],
    [
        -3006,
        [
            "EAI_MEMORY",
            "out of memory"
        ]
    ],
    [
        -3007,
        [
            "EAI_NODATA",
            "no address"
        ]
    ],
    [
        -3008,
        [
            "EAI_NONAME",
            "unknown node or service"
        ]
    ],
    [
        -3009,
        [
            "EAI_OVERFLOW",
            "argument buffer overflow"
        ]
    ],
    [
        -3014,
        [
            "EAI_PROTOCOL",
            "resolved protocol is unknown"
        ]
    ],
    [
        -3010,
        [
            "EAI_SERVICE",
            "service not available for socket type"
        ]
    ],
    [
        -3011,
        [
            "EAI_SOCKTYPE",
            "socket type not supported"
        ]
    ],
    [
        -4084,
        [
            "EALREADY",
            "connection already in progress"
        ]
    ],
    [
        -4083,
        [
            "EBADF",
            "bad file descriptor"
        ]
    ],
    [
        -4082,
        [
            "EBUSY",
            "resource busy or locked"
        ]
    ],
    [
        -4081,
        [
            "ECANCELED",
            "operation canceled"
        ]
    ],
    [
        -4080,
        [
            "ECHARSET",
            "invalid Unicode character"
        ]
    ],
    [
        -4079,
        [
            "ECONNABORTED",
            "software caused connection abort"
        ]
    ],
    [
        -4078,
        [
            "ECONNREFUSED",
            "connection refused"
        ]
    ],
    [
        -4077,
        [
            "ECONNRESET",
            "connection reset by peer"
        ]
    ],
    [
        -4076,
        [
            "EDESTADDRREQ",
            "destination address required"
        ]
    ],
    [
        -4075,
        [
            "EEXIST",
            "file already exists"
        ]
    ],
    [
        -4074,
        [
            "EFAULT",
            "bad address in system call argument"
        ]
    ],
    [
        -4036,
        [
            "EFBIG",
            "file too large"
        ]
    ],
    [
        -4073,
        [
            "EHOSTUNREACH",
            "host is unreachable"
        ]
    ],
    [
        -4072,
        [
            "EINTR",
            "interrupted system call"
        ]
    ],
    [
        -4071,
        [
            "EINVAL",
            "invalid argument"
        ]
    ],
    [
        -4070,
        [
            "EIO",
            "i/o error"
        ]
    ],
    [
        -4069,
        [
            "EISCONN",
            "socket is already connected"
        ]
    ],
    [
        -4068,
        [
            "EISDIR",
            "illegal operation on a directory"
        ]
    ],
    [
        -4067,
        [
            "ELOOP",
            "too many symbolic links encountered"
        ]
    ],
    [
        -4066,
        [
            "EMFILE",
            "too many open files"
        ]
    ],
    [
        -4065,
        [
            "EMSGSIZE",
            "message too long"
        ]
    ],
    [
        -4064,
        [
            "ENAMETOOLONG",
            "name too long"
        ]
    ],
    [
        -4063,
        [
            "ENETDOWN",
            "network is down"
        ]
    ],
    [
        -4062,
        [
            "ENETUNREACH",
            "network is unreachable"
        ]
    ],
    [
        -4061,
        [
            "ENFILE",
            "file table overflow"
        ]
    ],
    [
        -4060,
        [
            "ENOBUFS",
            "no buffer space available"
        ]
    ],
    [
        -4059,
        [
            "ENODEV",
            "no such device"
        ]
    ],
    [
        -4058,
        [
            "ENOENT",
            "no such file or directory"
        ]
    ],
    [
        -4057,
        [
            "ENOMEM",
            "not enough memory"
        ]
    ],
    [
        -4056,
        [
            "ENONET",
            "machine is not on the network"
        ]
    ],
    [
        -4035,
        [
            "ENOPROTOOPT",
            "protocol not available"
        ]
    ],
    [
        -4055,
        [
            "ENOSPC",
            "no space left on device"
        ]
    ],
    [
        -4054,
        [
            "ENOSYS",
            "function not implemented"
        ]
    ],
    [
        -4053,
        [
            "ENOTCONN",
            "socket is not connected"
        ]
    ],
    [
        -4052,
        [
            "ENOTDIR",
            "not a directory"
        ]
    ],
    [
        -4051,
        [
            "ENOTEMPTY",
            "directory not empty"
        ]
    ],
    [
        -4050,
        [
            "ENOTSOCK",
            "socket operation on non-socket"
        ]
    ],
    [
        -4049,
        [
            "ENOTSUP",
            "operation not supported on socket"
        ]
    ],
    [
        -4048,
        [
            "EPERM",
            "operation not permitted"
        ]
    ],
    [
        -4047,
        [
            "EPIPE",
            "broken pipe"
        ]
    ],
    [
        -4046,
        [
            "EPROTO",
            "protocol error"
        ]
    ],
    [
        -4045,
        [
            "EPROTONOSUPPORT",
            "protocol not supported"
        ]
    ],
    [
        -4044,
        [
            "EPROTOTYPE",
            "protocol wrong type for socket"
        ]
    ],
    [
        -4034,
        [
            "ERANGE",
            "result too large"
        ]
    ],
    [
        -4043,
        [
            "EROFS",
            "read-only file system"
        ]
    ],
    [
        -4042,
        [
            "ESHUTDOWN",
            "cannot send after transport endpoint shutdown"
        ]
    ],
    [
        -4041,
        [
            "ESPIPE",
            "invalid seek"
        ]
    ],
    [
        -4040,
        [
            "ESRCH",
            "no such process"
        ]
    ],
    [
        -4039,
        [
            "ETIMEDOUT",
            "connection timed out"
        ]
    ],
    [
        -4038,
        [
            "ETXTBSY",
            "text file is busy"
        ]
    ],
    [
        -4037,
        [
            "EXDEV",
            "cross-device link not permitted"
        ]
    ],
    [
        -4094,
        [
            "UNKNOWN",
            "unknown error"
        ]
    ],
    [
        -4095,
        [
            "EOF",
            "end of file"
        ]
    ],
    [
        -4033,
        [
            "ENXIO",
            "no such device or address"
        ]
    ],
    [
        -4032,
        [
            "EMLINK",
            "too many links"
        ]
    ],
    [
        -4031,
        [
            "EHOSTDOWN",
            "host is down"
        ]
    ],
    [
        -4030,
        [
            "EREMOTEIO",
            "remote I/O error"
        ]
    ],
    [
        -4029,
        [
            "ENOTTY",
            "inappropriate ioctl for device"
        ]
    ],
    [
        -4028,
        [
            "EFTYPE",
            "inappropriate file type or format"
        ]
    ],
    [
        -4027,
        [
            "EILSEQ",
            "illegal byte sequence"
        ]
    ], 
];
var darwin = [
    [
        -7,
        [
            "E2BIG",
            "argument list too long"
        ]
    ],
    [
        -13,
        [
            "EACCES",
            "permission denied"
        ]
    ],
    [
        -48,
        [
            "EADDRINUSE",
            "address already in use"
        ]
    ],
    [
        -49,
        [
            "EADDRNOTAVAIL",
            "address not available"
        ]
    ],
    [
        -47,
        [
            "EAFNOSUPPORT",
            "address family not supported"
        ]
    ],
    [
        -35,
        [
            "EAGAIN",
            "resource temporarily unavailable"
        ]
    ],
    [
        -3000,
        [
            "EAI_ADDRFAMILY",
            "address family not supported"
        ]
    ],
    [
        -3001,
        [
            "EAI_AGAIN",
            "temporary failure"
        ]
    ],
    [
        -3002,
        [
            "EAI_BADFLAGS",
            "bad ai_flags value"
        ]
    ],
    [
        -3013,
        [
            "EAI_BADHINTS",
            "invalid value for hints"
        ]
    ],
    [
        -3003,
        [
            "EAI_CANCELED",
            "request canceled"
        ]
    ],
    [
        -3004,
        [
            "EAI_FAIL",
            "permanent failure"
        ]
    ],
    [
        -3005,
        [
            "EAI_FAMILY",
            "ai_family not supported"
        ]
    ],
    [
        -3006,
        [
            "EAI_MEMORY",
            "out of memory"
        ]
    ],
    [
        -3007,
        [
            "EAI_NODATA",
            "no address"
        ]
    ],
    [
        -3008,
        [
            "EAI_NONAME",
            "unknown node or service"
        ]
    ],
    [
        -3009,
        [
            "EAI_OVERFLOW",
            "argument buffer overflow"
        ]
    ],
    [
        -3014,
        [
            "EAI_PROTOCOL",
            "resolved protocol is unknown"
        ]
    ],
    [
        -3010,
        [
            "EAI_SERVICE",
            "service not available for socket type"
        ]
    ],
    [
        -3011,
        [
            "EAI_SOCKTYPE",
            "socket type not supported"
        ]
    ],
    [
        -37,
        [
            "EALREADY",
            "connection already in progress"
        ]
    ],
    [
        -9,
        [
            "EBADF",
            "bad file descriptor"
        ]
    ],
    [
        -16,
        [
            "EBUSY",
            "resource busy or locked"
        ]
    ],
    [
        -89,
        [
            "ECANCELED",
            "operation canceled"
        ]
    ],
    [
        -4080,
        [
            "ECHARSET",
            "invalid Unicode character"
        ]
    ],
    [
        -53,
        [
            "ECONNABORTED",
            "software caused connection abort"
        ]
    ],
    [
        -61,
        [
            "ECONNREFUSED",
            "connection refused"
        ]
    ],
    [
        -54,
        [
            "ECONNRESET",
            "connection reset by peer"
        ]
    ],
    [
        -39,
        [
            "EDESTADDRREQ",
            "destination address required"
        ]
    ],
    [
        -17,
        [
            "EEXIST",
            "file already exists"
        ]
    ],
    [
        -14,
        [
            "EFAULT",
            "bad address in system call argument"
        ]
    ],
    [
        -27,
        [
            "EFBIG",
            "file too large"
        ]
    ],
    [
        -65,
        [
            "EHOSTUNREACH",
            "host is unreachable"
        ]
    ],
    [
        -4,
        [
            "EINTR",
            "interrupted system call"
        ]
    ],
    [
        -22,
        [
            "EINVAL",
            "invalid argument"
        ]
    ],
    [
        -5,
        [
            "EIO",
            "i/o error"
        ]
    ],
    [
        -56,
        [
            "EISCONN",
            "socket is already connected"
        ]
    ],
    [
        -21,
        [
            "EISDIR",
            "illegal operation on a directory"
        ]
    ],
    [
        -62,
        [
            "ELOOP",
            "too many symbolic links encountered"
        ]
    ],
    [
        -24,
        [
            "EMFILE",
            "too many open files"
        ]
    ],
    [
        -40,
        [
            "EMSGSIZE",
            "message too long"
        ]
    ],
    [
        -63,
        [
            "ENAMETOOLONG",
            "name too long"
        ]
    ],
    [
        -50,
        [
            "ENETDOWN",
            "network is down"
        ]
    ],
    [
        -51,
        [
            "ENETUNREACH",
            "network is unreachable"
        ]
    ],
    [
        -23,
        [
            "ENFILE",
            "file table overflow"
        ]
    ],
    [
        -55,
        [
            "ENOBUFS",
            "no buffer space available"
        ]
    ],
    [
        -19,
        [
            "ENODEV",
            "no such device"
        ]
    ],
    [
        -2,
        [
            "ENOENT",
            "no such file or directory"
        ]
    ],
    [
        -12,
        [
            "ENOMEM",
            "not enough memory"
        ]
    ],
    [
        -4056,
        [
            "ENONET",
            "machine is not on the network"
        ]
    ],
    [
        -42,
        [
            "ENOPROTOOPT",
            "protocol not available"
        ]
    ],
    [
        -28,
        [
            "ENOSPC",
            "no space left on device"
        ]
    ],
    [
        -78,
        [
            "ENOSYS",
            "function not implemented"
        ]
    ],
    [
        -57,
        [
            "ENOTCONN",
            "socket is not connected"
        ]
    ],
    [
        -20,
        [
            "ENOTDIR",
            "not a directory"
        ]
    ],
    [
        -66,
        [
            "ENOTEMPTY",
            "directory not empty"
        ]
    ],
    [
        -38,
        [
            "ENOTSOCK",
            "socket operation on non-socket"
        ]
    ],
    [
        -45,
        [
            "ENOTSUP",
            "operation not supported on socket"
        ]
    ],
    [
        -1,
        [
            "EPERM",
            "operation not permitted"
        ]
    ],
    [
        -32,
        [
            "EPIPE",
            "broken pipe"
        ]
    ],
    [
        -100,
        [
            "EPROTO",
            "protocol error"
        ]
    ],
    [
        -43,
        [
            "EPROTONOSUPPORT",
            "protocol not supported"
        ]
    ],
    [
        -41,
        [
            "EPROTOTYPE",
            "protocol wrong type for socket"
        ]
    ],
    [
        -34,
        [
            "ERANGE",
            "result too large"
        ]
    ],
    [
        -30,
        [
            "EROFS",
            "read-only file system"
        ]
    ],
    [
        -58,
        [
            "ESHUTDOWN",
            "cannot send after transport endpoint shutdown"
        ]
    ],
    [
        -29,
        [
            "ESPIPE",
            "invalid seek"
        ]
    ],
    [
        -3,
        [
            "ESRCH",
            "no such process"
        ]
    ],
    [
        -60,
        [
            "ETIMEDOUT",
            "connection timed out"
        ]
    ],
    [
        -26,
        [
            "ETXTBSY",
            "text file is busy"
        ]
    ],
    [
        -18,
        [
            "EXDEV",
            "cross-device link not permitted"
        ]
    ],
    [
        -4094,
        [
            "UNKNOWN",
            "unknown error"
        ]
    ],
    [
        -4095,
        [
            "EOF",
            "end of file"
        ]
    ],
    [
        -6,
        [
            "ENXIO",
            "no such device or address"
        ]
    ],
    [
        -31,
        [
            "EMLINK",
            "too many links"
        ]
    ],
    [
        -64,
        [
            "EHOSTDOWN",
            "host is down"
        ]
    ],
    [
        -4030,
        [
            "EREMOTEIO",
            "remote I/O error"
        ]
    ],
    [
        -25,
        [
            "ENOTTY",
            "inappropriate ioctl for device"
        ]
    ],
    [
        -79,
        [
            "EFTYPE",
            "inappropriate file type or format"
        ]
    ],
    [
        -92,
        [
            "EILSEQ",
            "illegal byte sequence"
        ]
    ], 
];
var linux = [
    [
        -7,
        [
            "E2BIG",
            "argument list too long"
        ]
    ],
    [
        -13,
        [
            "EACCES",
            "permission denied"
        ]
    ],
    [
        -98,
        [
            "EADDRINUSE",
            "address already in use"
        ]
    ],
    [
        -99,
        [
            "EADDRNOTAVAIL",
            "address not available"
        ]
    ],
    [
        -97,
        [
            "EAFNOSUPPORT",
            "address family not supported"
        ]
    ],
    [
        -11,
        [
            "EAGAIN",
            "resource temporarily unavailable"
        ]
    ],
    [
        -3000,
        [
            "EAI_ADDRFAMILY",
            "address family not supported"
        ]
    ],
    [
        -3001,
        [
            "EAI_AGAIN",
            "temporary failure"
        ]
    ],
    [
        -3002,
        [
            "EAI_BADFLAGS",
            "bad ai_flags value"
        ]
    ],
    [
        -3013,
        [
            "EAI_BADHINTS",
            "invalid value for hints"
        ]
    ],
    [
        -3003,
        [
            "EAI_CANCELED",
            "request canceled"
        ]
    ],
    [
        -3004,
        [
            "EAI_FAIL",
            "permanent failure"
        ]
    ],
    [
        -3005,
        [
            "EAI_FAMILY",
            "ai_family not supported"
        ]
    ],
    [
        -3006,
        [
            "EAI_MEMORY",
            "out of memory"
        ]
    ],
    [
        -3007,
        [
            "EAI_NODATA",
            "no address"
        ]
    ],
    [
        -3008,
        [
            "EAI_NONAME",
            "unknown node or service"
        ]
    ],
    [
        -3009,
        [
            "EAI_OVERFLOW",
            "argument buffer overflow"
        ]
    ],
    [
        -3014,
        [
            "EAI_PROTOCOL",
            "resolved protocol is unknown"
        ]
    ],
    [
        -3010,
        [
            "EAI_SERVICE",
            "service not available for socket type"
        ]
    ],
    [
        -3011,
        [
            "EAI_SOCKTYPE",
            "socket type not supported"
        ]
    ],
    [
        -114,
        [
            "EALREADY",
            "connection already in progress"
        ]
    ],
    [
        -9,
        [
            "EBADF",
            "bad file descriptor"
        ]
    ],
    [
        -16,
        [
            "EBUSY",
            "resource busy or locked"
        ]
    ],
    [
        -125,
        [
            "ECANCELED",
            "operation canceled"
        ]
    ],
    [
        -4080,
        [
            "ECHARSET",
            "invalid Unicode character"
        ]
    ],
    [
        -103,
        [
            "ECONNABORTED",
            "software caused connection abort"
        ]
    ],
    [
        -111,
        [
            "ECONNREFUSED",
            "connection refused"
        ]
    ],
    [
        -104,
        [
            "ECONNRESET",
            "connection reset by peer"
        ]
    ],
    [
        -89,
        [
            "EDESTADDRREQ",
            "destination address required"
        ]
    ],
    [
        -17,
        [
            "EEXIST",
            "file already exists"
        ]
    ],
    [
        -14,
        [
            "EFAULT",
            "bad address in system call argument"
        ]
    ],
    [
        -27,
        [
            "EFBIG",
            "file too large"
        ]
    ],
    [
        -113,
        [
            "EHOSTUNREACH",
            "host is unreachable"
        ]
    ],
    [
        -4,
        [
            "EINTR",
            "interrupted system call"
        ]
    ],
    [
        -22,
        [
            "EINVAL",
            "invalid argument"
        ]
    ],
    [
        -5,
        [
            "EIO",
            "i/o error"
        ]
    ],
    [
        -106,
        [
            "EISCONN",
            "socket is already connected"
        ]
    ],
    [
        -21,
        [
            "EISDIR",
            "illegal operation on a directory"
        ]
    ],
    [
        -40,
        [
            "ELOOP",
            "too many symbolic links encountered"
        ]
    ],
    [
        -24,
        [
            "EMFILE",
            "too many open files"
        ]
    ],
    [
        -90,
        [
            "EMSGSIZE",
            "message too long"
        ]
    ],
    [
        -36,
        [
            "ENAMETOOLONG",
            "name too long"
        ]
    ],
    [
        -100,
        [
            "ENETDOWN",
            "network is down"
        ]
    ],
    [
        -101,
        [
            "ENETUNREACH",
            "network is unreachable"
        ]
    ],
    [
        -23,
        [
            "ENFILE",
            "file table overflow"
        ]
    ],
    [
        -105,
        [
            "ENOBUFS",
            "no buffer space available"
        ]
    ],
    [
        -19,
        [
            "ENODEV",
            "no such device"
        ]
    ],
    [
        -2,
        [
            "ENOENT",
            "no such file or directory"
        ]
    ],
    [
        -12,
        [
            "ENOMEM",
            "not enough memory"
        ]
    ],
    [
        -64,
        [
            "ENONET",
            "machine is not on the network"
        ]
    ],
    [
        -92,
        [
            "ENOPROTOOPT",
            "protocol not available"
        ]
    ],
    [
        -28,
        [
            "ENOSPC",
            "no space left on device"
        ]
    ],
    [
        -38,
        [
            "ENOSYS",
            "function not implemented"
        ]
    ],
    [
        -107,
        [
            "ENOTCONN",
            "socket is not connected"
        ]
    ],
    [
        -20,
        [
            "ENOTDIR",
            "not a directory"
        ]
    ],
    [
        -39,
        [
            "ENOTEMPTY",
            "directory not empty"
        ]
    ],
    [
        -88,
        [
            "ENOTSOCK",
            "socket operation on non-socket"
        ]
    ],
    [
        -95,
        [
            "ENOTSUP",
            "operation not supported on socket"
        ]
    ],
    [
        -1,
        [
            "EPERM",
            "operation not permitted"
        ]
    ],
    [
        -32,
        [
            "EPIPE",
            "broken pipe"
        ]
    ],
    [
        -71,
        [
            "EPROTO",
            "protocol error"
        ]
    ],
    [
        -93,
        [
            "EPROTONOSUPPORT",
            "protocol not supported"
        ]
    ],
    [
        -91,
        [
            "EPROTOTYPE",
            "protocol wrong type for socket"
        ]
    ],
    [
        -34,
        [
            "ERANGE",
            "result too large"
        ]
    ],
    [
        -30,
        [
            "EROFS",
            "read-only file system"
        ]
    ],
    [
        -108,
        [
            "ESHUTDOWN",
            "cannot send after transport endpoint shutdown"
        ]
    ],
    [
        -29,
        [
            "ESPIPE",
            "invalid seek"
        ]
    ],
    [
        -3,
        [
            "ESRCH",
            "no such process"
        ]
    ],
    [
        -110,
        [
            "ETIMEDOUT",
            "connection timed out"
        ]
    ],
    [
        -26,
        [
            "ETXTBSY",
            "text file is busy"
        ]
    ],
    [
        -18,
        [
            "EXDEV",
            "cross-device link not permitted"
        ]
    ],
    [
        -4094,
        [
            "UNKNOWN",
            "unknown error"
        ]
    ],
    [
        -4095,
        [
            "EOF",
            "end of file"
        ]
    ],
    [
        -6,
        [
            "ENXIO",
            "no such device or address"
        ]
    ],
    [
        -31,
        [
            "EMLINK",
            "too many links"
        ]
    ],
    [
        -112,
        [
            "EHOSTDOWN",
            "host is down"
        ]
    ],
    [
        -121,
        [
            "EREMOTEIO",
            "remote I/O error"
        ]
    ],
    [
        -25,
        [
            "ENOTTY",
            "inappropriate ioctl for device"
        ]
    ],
    [
        -4028,
        [
            "EFTYPE",
            "inappropriate file type or format"
        ]
    ],
    [
        -84,
        [
            "EILSEQ",
            "illegal byte sequence"
        ]
    ], 
];
new Map(osType === "windows" ? windows : osType === "darwin" ? darwin : osType === "linux" ? linux : unreachable());
var ERR_INVALID_CALLBACK = class extends NodeTypeError {
    constructor(object){
        super("ERR_INVALID_CALLBACK", `Callback must be a function. Received ${JSON.stringify(object)}`);
    }
};
var ERR_METHOD_NOT_IMPLEMENTED = class extends NodeError {
    constructor(x){
        super("ERR_METHOD_NOT_IMPLEMENTED", `The ${x} method is not implemented`);
    }
};
var ERR_MISSING_ARGS = class extends NodeTypeError {
    constructor(...args){
        args = args.map((a)=>`"${a}"`
        );
        let msg = "The ";
        switch(args.length){
            case 1:
                msg += `${args[0]} argument`;
                break;
            case 2:
                msg += `${args[0]} and ${args[1]} arguments`;
                break;
            default:
                msg += args.slice(0, args.length - 1).join(", ");
                msg += `, and ${args[args.length - 1]} arguments`;
                break;
        }
        super("ERR_MISSING_ARGS", `${msg} must be specified`);
    }
};
var ERR_MULTIPLE_CALLBACK = class extends NodeError {
    constructor(){
        super("ERR_MULTIPLE_CALLBACK", `Callback called multiple times`);
    }
};
var ERR_STREAM_ALREADY_FINISHED = class extends NodeError {
    constructor(x){
        super("ERR_STREAM_ALREADY_FINISHED", `Cannot call ${x} after a stream was finished`);
    }
};
var ERR_STREAM_CANNOT_PIPE = class extends NodeError {
    constructor(){
        super("ERR_STREAM_CANNOT_PIPE", `Cannot pipe, not readable`);
    }
};
var ERR_STREAM_DESTROYED = class extends NodeError {
    constructor(x){
        super("ERR_STREAM_DESTROYED", `Cannot call ${x} after a stream was destroyed`);
    }
};
var ERR_STREAM_NULL_VALUES = class extends NodeTypeError {
    constructor(){
        super("ERR_STREAM_NULL_VALUES", `May not write null values to stream`);
    }
};
var ERR_STREAM_PREMATURE_CLOSE = class extends NodeError {
    constructor(){
        super("ERR_STREAM_PREMATURE_CLOSE", `Premature close`);
    }
};
var ERR_STREAM_PUSH_AFTER_EOF = class extends NodeError {
    constructor(){
        super("ERR_STREAM_PUSH_AFTER_EOF", `stream.push() after EOF`);
    }
};
var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = class extends NodeError {
    constructor(){
        super("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", `stream.unshift() after end event`);
    }
};
var ERR_STREAM_WRITE_AFTER_END = class extends NodeError {
    constructor(){
        super("ERR_STREAM_WRITE_AFTER_END", `write after end`);
    }
};
var ERR_UNKNOWN_ENCODING = class extends NodeTypeError {
    constructor(x){
        super("ERR_UNKNOWN_ENCODING", `Unknown encoding: ${x}`);
    }
};
var ERR_INVALID_OPT_VALUE = class extends NodeTypeError {
    constructor(name, value){
        super("ERR_INVALID_OPT_VALUE", `The value "${value}" is invalid for option "${name}"`);
    }
};
function buildReturnPropertyType(value) {
    if (value && value.constructor && value.constructor.name) {
        return `instance of ${value.constructor.name}`;
    } else {
        return `type ${typeof value}`;
    }
}
var ERR_INVALID_RETURN_VALUE = class extends NodeTypeError {
    constructor(input, name, value){
        super("ERR_INVALID_RETURN_VALUE", `Expected ${input} to be returned from the "${name}" function but got ${buildReturnPropertyType(value)}.`);
    }
};
function ensureArray(maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [
        maybeArray
    ];
}
function createIterResult(value, done) {
    return {
        value,
        done
    };
}
var defaultMaxListeners = 10;
function validateMaxListeners(n, name) {
    if (!Number.isInteger(n) || n < 0) {
        throw new ERR_OUT_OF_RANGE(name, "a non-negative number", inspect(n));
    }
}
var _init, init_fn;
var _EventEmitter = class {
    static get defaultMaxListeners() {
        return defaultMaxListeners;
    }
    static set defaultMaxListeners(value) {
        validateMaxListeners(value, "defaultMaxListeners");
        defaultMaxListeners = value;
    }
    constructor(){
        var _a4;
        __privateMethod(_a4 = _EventEmitter, _init, init_fn).call(_a4, this);
    }
    _addListener(eventName, listener, prepend) {
        var _a4;
        this.checkListenerArgument(listener);
        this.emit("newListener", eventName, this.unwrapListener(listener));
        if (this.hasListeners(eventName)) {
            let listeners = this._events[eventName];
            if (!Array.isArray(listeners)) {
                listeners = [
                    listeners
                ];
                this._events[eventName] = listeners;
            }
            if (prepend) {
                listeners.unshift(listener);
            } else {
                listeners.push(listener);
            }
        } else if (this._events) {
            this._events[eventName] = listener;
        } else {
            __privateMethod(_a4 = _EventEmitter, _init, init_fn).call(_a4, this);
            this._events[eventName] = listener;
        }
        const max = this.getMaxListeners();
        if (max > 0 && this.listenerCount(eventName) > max) {
            const warning = new MaxListenersExceededWarning(this, eventName);
            this.warnIfNeeded(eventName, warning);
        }
        return this;
    }
    addListener(eventName, listener) {
        return this._addListener(eventName, listener, false);
    }
    emit(eventName, ...args) {
        if (this.hasListeners(eventName)) {
            if (eventName === "error" && this.hasListeners(_EventEmitter.errorMonitor)) {
                this.emit(_EventEmitter.errorMonitor, ...args);
            }
            const listeners = ensureArray(this._events[eventName]).slice();
            for (const listener of listeners){
                try {
                    listener.apply(this, args);
                } catch (err) {
                    this.emit("error", err);
                }
            }
            return true;
        } else if (eventName === "error") {
            if (this.hasListeners(_EventEmitter.errorMonitor)) {
                this.emit(_EventEmitter.errorMonitor, ...args);
            }
            const errMsg = args.length > 0 ? args[0] : Error("Unhandled error.");
            throw errMsg;
        }
        return false;
    }
    eventNames() {
        return Reflect.ownKeys(this._events);
    }
    getMaxListeners() {
        return this.maxListeners == null ? _EventEmitter.defaultMaxListeners : this.maxListeners;
    }
    listenerCount(eventName) {
        if (this.hasListeners(eventName)) {
            const maybeListeners = this._events[eventName];
            return Array.isArray(maybeListeners) ? maybeListeners.length : 1;
        } else {
            return 0;
        }
    }
    static listenerCount(emitter, eventName) {
        return emitter.listenerCount(eventName);
    }
    _listeners(target, eventName, unwrap) {
        if (!target.hasListeners(eventName)) {
            return [];
        }
        const eventListeners = target._events[eventName];
        if (Array.isArray(eventListeners)) {
            return unwrap ? this.unwrapListeners(eventListeners) : eventListeners.slice(0);
        } else {
            return [
                unwrap ? this.unwrapListener(eventListeners) : eventListeners
            ];
        }
    }
    unwrapListeners(arr) {
        const unwrappedListeners = new Array(arr.length);
        for(let i = 0; i < arr.length; i++){
            unwrappedListeners[i] = this.unwrapListener(arr[i]);
        }
        return unwrappedListeners;
    }
    unwrapListener(listener) {
        return listener["listener"] ?? listener;
    }
    listeners(eventName) {
        return this._listeners(this, eventName, true);
    }
    rawListeners(eventName) {
        return this._listeners(this, eventName, false);
    }
    off(eventName, listener) {
    }
    on(eventName, listener) {
    }
    once(eventName, listener) {
        const wrapped = this.onceWrap(eventName, listener);
        this.on(eventName, wrapped);
        return this;
    }
    onceWrap(eventName, listener) {
        this.checkListenerArgument(listener);
        const wrapper = function(...args) {
            if (this.isCalled) {
                return;
            }
            this.context.removeListener(this.eventName, this.listener);
            this.isCalled = true;
            return this.listener.apply(this.context, args);
        };
        const wrapperContext = {
            eventName,
            listener,
            rawListener: wrapper,
            context: this
        };
        const wrapped = wrapper.bind(wrapperContext);
        wrapperContext.rawListener = wrapped;
        wrapped.listener = listener;
        return wrapped;
    }
    prependListener(eventName, listener) {
        return this._addListener(eventName, listener, true);
    }
    prependOnceListener(eventName, listener) {
        const wrapped = this.onceWrap(eventName, listener);
        this.prependListener(eventName, wrapped);
        return this;
    }
    removeAllListeners(eventName) {
        if (this._events === void 0) {
            return this;
        }
        if (eventName) {
            if (this.hasListeners(eventName)) {
                const listeners = ensureArray(this._events[eventName]).slice().reverse();
                for (const listener of listeners){
                    this.removeListener(eventName, this.unwrapListener(listener));
                }
            }
        } else {
            const eventList = this.eventNames();
            eventList.forEach((eventName2)=>{
                if (eventName2 === "removeListener") return;
                this.removeAllListeners(eventName2);
            });
            this.removeAllListeners("removeListener");
        }
        return this;
    }
    removeListener(eventName, listener) {
        this.checkListenerArgument(listener);
        if (this.hasListeners(eventName)) {
            const maybeArr = this._events[eventName];
            assert(maybeArr);
            const arr = ensureArray(maybeArr);
            let listenerIndex = -1;
            for(let i = arr.length - 1; i >= 0; i--){
                if (arr[i] == listener || arr[i] && arr[i]["listener"] == listener) {
                    listenerIndex = i;
                    break;
                }
            }
            if (listenerIndex >= 0) {
                arr.splice(listenerIndex, 1);
                if (arr.length === 0) {
                    delete this._events[eventName];
                } else if (arr.length === 1) {
                    this._events[eventName] = arr[0];
                }
                if (this._events.removeListener) {
                    this.emit("removeListener", eventName, listener);
                }
            }
        }
        return this;
    }
    setMaxListeners(n) {
        if (n !== Infinity) {
            validateMaxListeners(n, "n");
        }
        this.maxListeners = n;
        return this;
    }
    static once(emitter, name) {
        return new Promise((resolve, reject)=>{
            if (emitter instanceof EventTarget) {
                emitter.addEventListener(name, (...args)=>{
                    resolve(args);
                }, {
                    once: true,
                    passive: false,
                    capture: false
                });
                return;
            } else if (emitter instanceof _EventEmitter) {
                const eventListener = (...args)=>{
                    if (errorListener !== void 0) {
                        emitter.removeListener("error", errorListener);
                    }
                    resolve(args);
                };
                let errorListener;
                if (name !== "error") {
                    errorListener = (err)=>{
                        emitter.removeListener(name, eventListener);
                        reject(err);
                    };
                    emitter.once("error", errorListener);
                }
                emitter.once(name, eventListener);
                return;
            }
        });
    }
    static on(emitter, event) {
        const unconsumedEventValues = [];
        const unconsumedPromises = [];
        let error = null;
        let finished2 = false;
        const iterator = {
            next () {
                const value = unconsumedEventValues.shift();
                if (value) {
                    return Promise.resolve(createIterResult(value, false));
                }
                if (error) {
                    const p = Promise.reject(error);
                    error = null;
                    return p;
                }
                if (finished2) {
                    return Promise.resolve(createIterResult(void 0, true));
                }
                return new Promise(function(resolve, reject) {
                    unconsumedPromises.push({
                        resolve,
                        reject
                    });
                });
            },
            return () {
                emitter.removeListener(event, eventHandler);
                emitter.removeListener("error", errorHandler);
                finished2 = true;
                for (const promise of unconsumedPromises){
                    promise.resolve(createIterResult(void 0, true));
                }
                return Promise.resolve(createIterResult(void 0, true));
            },
            throw (err) {
                error = err;
                emitter.removeListener(event, eventHandler);
                emitter.removeListener("error", errorHandler);
            },
            [Symbol.asyncIterator] () {
                return this;
            }
        };
        emitter.on(event, eventHandler);
        emitter.on("error", errorHandler);
        return iterator;
        function eventHandler(...args) {
            const promise = unconsumedPromises.shift();
            if (promise) {
                promise.resolve(createIterResult(args, false));
            } else {
                unconsumedEventValues.push(args);
            }
        }
        function errorHandler(err) {
            finished2 = true;
            const toError = unconsumedPromises.shift();
            if (toError) {
                toError.reject(err);
            } else {
                error = err;
            }
            iterator.return();
        }
    }
    checkListenerArgument(listener) {
        if (typeof listener !== "function") {
            throw new ERR_INVALID_ARG_TYPE("listener", "function", listener);
        }
    }
    warnIfNeeded(eventName, warning) {
        const listeners = this._events[eventName];
        if (listeners.warned) {
            return;
        }
        listeners.warned = true;
        console.warn(warning);
        const maybeProcess = globalThis.process;
        if (maybeProcess instanceof _EventEmitter) {
            maybeProcess.emit("warning", warning);
        }
    }
    hasListeners(eventName) {
        return this._events && Boolean(this._events[eventName]);
    }
};
var EventEmitter = _EventEmitter;
_init = new WeakSet();
init_fn = function(emitter) {
    if (emitter._events == null || emitter._events === Object.getPrototypeOf(emitter)._events) {
        emitter._events = Object.create(null);
    }
};
__privateAdd(EventEmitter, _init);
EventEmitter.captureRejectionSymbol = Symbol.for("nodejs.rejection");
EventEmitter.errorMonitor = Symbol("events.errorMonitor");
EventEmitter.call = function call(thisArg) {
    var _a4;
    __privateMethod(_a4 = _EventEmitter, _init, init_fn).call(_a4, thisArg);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
var MaxListenersExceededWarning = class extends Error {
    constructor(emitter, type){
        const listenerCount2 = emitter.listenerCount(type);
        const message = `Possible EventEmitter memory leak detected. ${listenerCount2} ${type == null ? "null" : type.toString()} listeners added to [${emitter.constructor.name}].  Use emitter.setMaxListeners() to increase limit`;
        super(message);
        this.emitter = emitter;
        this.type = type;
        this.count = listenerCount2;
        this.name = "MaxListenersExceededWarning";
    }
};
var events_default = Object.assign(EventEmitter, {
    EventEmitter
});
var captureRejectionSymbol = EventEmitter.captureRejectionSymbol;
EventEmitter.errorMonitor;
EventEmitter.listenerCount;
EventEmitter.on;
var once2 = EventEmitter.once;
var hexTable = new TextEncoder().encode("0123456789abcdef");
function errInvalidByte(__byte) {
    return new TypeError(`Invalid byte '${String.fromCharCode(__byte)}'`);
}
function errLength() {
    return new RangeError("Odd length hex string");
}
function fromHexChar(__byte) {
    if (48 <= __byte && __byte <= 57) return __byte - 48;
    if (97 <= __byte && __byte <= 102) return __byte - 97 + 10;
    if (65 <= __byte && __byte <= 70) return __byte - 65 + 10;
    throw errInvalidByte(__byte);
}
function encode(src) {
    const dst = new Uint8Array(src.length * 2);
    for(let i = 0; i < dst.length; i++){
        const v = src[i];
        dst[i * 2] = hexTable[v >> 4];
        dst[i * 2 + 1] = hexTable[v & 15];
    }
    return dst;
}
function decode(src) {
    const dst = new Uint8Array(src.length / 2);
    for(let i = 0; i < dst.length; i++){
        const a = fromHexChar(src[i * 2]);
        const b = fromHexChar(src[i * 2 + 1]);
        dst[i] = a << 4 | b;
    }
    if (src.length % 2 == 1) {
        fromHexChar(src[dst.length * 2]);
        throw errLength();
    }
    return dst;
}
var base64abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/", 
];
function encode2(data) {
    const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
    let result = "", i;
    const l = uint8.length;
    for(i = 2; i < l; i += 3){
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
        result += base64abc[(uint8[i - 1] & 15) << 2 | uint8[i] >> 6];
        result += base64abc[uint8[i] & 63];
    }
    if (i === l + 1) {
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 3) << 4];
        result += "==";
    }
    if (i === l) {
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
        result += base64abc[(uint8[i - 1] & 15) << 2];
        result += "=";
    }
    return result;
}
function decode2(b64) {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        bytes[i] = binString.charCodeAt(i);
    }
    return bytes;
}
var notImplementedEncodings = [
    "ascii",
    "binary",
    "latin1",
    "ucs2",
    "utf16le"
];
function checkEncoding(encoding = "utf8", strict = true) {
    if (typeof encoding !== "string" || strict && encoding === "") {
        if (!strict) return "utf8";
        throw new TypeError(`Unknown encoding: ${encoding}`);
    }
    const normalized = normalizeEncoding(encoding);
    if (normalized === void 0) {
        throw new TypeError(`Unknown encoding: ${encoding}`);
    }
    if (notImplementedEncodings.includes(encoding)) {
        notImplemented(`"${encoding}" encoding`);
    }
    return normalized;
}
var encodingOps = {
    utf8: {
        byteLength: (string)=>new TextEncoder().encode(string).byteLength
    },
    ucs2: {
        byteLength: (string)=>string.length * 2
    },
    utf16le: {
        byteLength: (string)=>string.length * 2
    },
    latin1: {
        byteLength: (string)=>string.length
    },
    ascii: {
        byteLength: (string)=>string.length
    },
    base64: {
        byteLength: (string)=>base64ByteLength(string, string.length)
    },
    hex: {
        byteLength: (string)=>string.length >>> 1
    }
};
function base64ByteLength(str, bytes) {
    if (str.charCodeAt(bytes - 1) === 61) bytes--;
    if (bytes > 1 && str.charCodeAt(bytes - 1) === 61) bytes--;
    return bytes * 3 >>> 2;
}
var Buffer3 = class extends Uint8Array {
    static alloc(size, fill, encoding = "utf8") {
        if (typeof size !== "number") {
            throw new TypeError(`The "size" argument must be of type number. Received type ${typeof size}`);
        }
        const buf = new Buffer3(size);
        if (size === 0) return buf;
        let bufFill;
        if (typeof fill === "string") {
            const clearEncoding = checkEncoding(encoding);
            if (typeof fill === "string" && fill.length === 1 && clearEncoding === "utf8") {
                buf.fill(fill.charCodeAt(0));
            } else bufFill = Buffer3.from(fill, clearEncoding);
        } else if (typeof fill === "number") {
            buf.fill(fill);
        } else if (fill instanceof Uint8Array) {
            if (fill.length === 0) {
                throw new TypeError(`The argument "value" is invalid. Received ${fill.constructor.name} []`);
            }
            bufFill = fill;
        }
        if (bufFill) {
            if (bufFill.length > buf.length) {
                bufFill = bufFill.subarray(0, buf.length);
            }
            let offset = 0;
            while(offset < size){
                buf.set(bufFill, offset);
                offset += bufFill.length;
                if (offset + bufFill.length >= size) break;
            }
            if (offset !== size) {
                buf.set(bufFill.subarray(0, size - offset), offset);
            }
        }
        return buf;
    }
    static allocUnsafe(size) {
        return new Buffer3(size);
    }
    static byteLength(string, encoding = "utf8") {
        if (typeof string != "string") return string.byteLength;
        encoding = normalizeEncoding(encoding) || "utf8";
        return encodingOps[encoding].byteLength(string);
    }
    static concat(list, totalLength) {
        if (totalLength == void 0) {
            totalLength = 0;
            for (const buf of list){
                totalLength += buf.length;
            }
        }
        const buffer = Buffer3.allocUnsafe(totalLength);
        let pos = 0;
        for (const item of list){
            let buf;
            if (!(item instanceof Buffer3)) {
                buf = Buffer3.from(item);
            } else {
                buf = item;
            }
            buf.copy(buffer, pos);
            pos += buf.length;
        }
        return buffer;
    }
    static from(value, offsetOrEncoding, length) {
        const offset = typeof offsetOrEncoding === "string" ? void 0 : offsetOrEncoding;
        let encoding = typeof offsetOrEncoding === "string" ? offsetOrEncoding : void 0;
        if (typeof value == "string") {
            encoding = checkEncoding(encoding, false);
            if (encoding === "hex") {
                return new Buffer3(decode(new TextEncoder().encode(value)).buffer);
            }
            if (encoding === "base64") return new Buffer3(decode2(value).buffer);
            return new Buffer3(new TextEncoder().encode(value).buffer);
        }
        return new Buffer3(value, offset, length);
    }
    static isBuffer(obj) {
        return obj instanceof Buffer3;
    }
    static isEncoding(encoding) {
        return typeof encoding === "string" && encoding.length !== 0 && normalizeEncoding(encoding) !== void 0;
    }
    boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
            throw new ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) throw new ERR_BUFFER_OUT_OF_BOUNDS();
        throw new ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
    }
    readUIntBE(offset = 0, byteLength) {
        if (byteLength === 3 || byteLength === 5 || byteLength === 6) {
            notImplemented(`byteLength ${byteLength}`);
        }
        if (byteLength === 4) return this.readUInt32BE(offset);
        if (byteLength === 2) return this.readUInt16BE(offset);
        if (byteLength === 1) return this.readUInt8(offset);
        this.boundsError(byteLength, 4, "byteLength");
    }
    readUIntLE(offset = 0, byteLength) {
        if (byteLength === 3 || byteLength === 5 || byteLength === 6) {
            notImplemented(`byteLength ${byteLength}`);
        }
        if (byteLength === 4) return this.readUInt32LE(offset);
        if (byteLength === 2) return this.readUInt16LE(offset);
        if (byteLength === 1) return this.readUInt8(offset);
        this.boundsError(byteLength, 4, "byteLength");
    }
    copy(targetBuffer, targetStart = 0, sourceStart = 0, sourceEnd = this.length) {
        const sourceBuffer = this.subarray(sourceStart, sourceEnd).subarray(0, Math.max(0, targetBuffer.length - targetStart));
        if (sourceBuffer.length === 0) return 0;
        targetBuffer.set(sourceBuffer, targetStart);
        return sourceBuffer.length;
    }
    equals(otherBuffer) {
        if (!(otherBuffer instanceof Uint8Array)) {
            throw new TypeError(`The "otherBuffer" argument must be an instance of Buffer or Uint8Array. Received type ${typeof otherBuffer}`);
        }
        if (this === otherBuffer) return true;
        if (this.byteLength !== otherBuffer.byteLength) return false;
        for(let i = 0; i < this.length; i++){
            if (this[i] !== otherBuffer[i]) return false;
        }
        return true;
    }
    readBigInt64BE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getBigInt64(offset);
    }
    readBigInt64LE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getBigInt64(offset, true);
    }
    readBigUInt64BE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getBigUint64(offset);
    }
    readBigUInt64LE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getBigUint64(offset, true);
    }
    readDoubleBE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getFloat64(offset);
    }
    readDoubleLE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getFloat64(offset, true);
    }
    readFloatBE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getFloat32(offset);
    }
    readFloatLE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getFloat32(offset, true);
    }
    readInt8(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt8(offset);
    }
    readInt16BE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt16(offset);
    }
    readInt16LE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt16(offset, true);
    }
    readInt32BE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt32(offset);
    }
    readInt32LE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getInt32(offset, true);
    }
    readUInt8(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getUint8(offset);
    }
    readUInt16BE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getUint16(offset);
    }
    readUInt16LE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getUint16(offset, true);
    }
    readUInt32BE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getUint32(offset);
    }
    readUInt32LE(offset = 0) {
        return new DataView(this.buffer, this.byteOffset, this.byteLength).getUint32(offset, true);
    }
    slice(begin = 0, end = this.length) {
        return this.subarray(begin, end);
    }
    toJSON() {
        return {
            type: "Buffer",
            data: Array.from(this)
        };
    }
    toString(encoding = "utf8", start = 0, end = this.length) {
        encoding = checkEncoding(encoding);
        const b = this.subarray(start, end);
        if (encoding === "hex") return new TextDecoder().decode(encode(b));
        if (encoding === "base64") return encode2(b);
        return new TextDecoder(encoding).decode(b);
    }
    write(string, offset = 0, length = this.length) {
        return new TextEncoder().encodeInto(string, this.subarray(offset, offset + length)).written;
    }
    writeBigInt64BE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setBigInt64(offset, value);
        return offset + 4;
    }
    writeBigInt64LE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setBigInt64(offset, value, true);
        return offset + 4;
    }
    writeBigUInt64BE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setBigUint64(offset, value);
        return offset + 4;
    }
    writeBigUInt64LE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setBigUint64(offset, value, true);
        return offset + 4;
    }
    writeDoubleBE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat64(offset, value);
        return offset + 8;
    }
    writeDoubleLE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat64(offset, value, true);
        return offset + 8;
    }
    writeFloatBE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat32(offset, value);
        return offset + 4;
    }
    writeFloatLE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setFloat32(offset, value, true);
        return offset + 4;
    }
    writeInt8(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setInt8(offset, value);
        return offset + 1;
    }
    writeInt16BE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setInt16(offset, value);
        return offset + 2;
    }
    writeInt16LE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setInt16(offset, value, true);
        return offset + 2;
    }
    writeInt32BE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setUint32(offset, value);
        return offset + 4;
    }
    writeInt32LE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setInt32(offset, value, true);
        return offset + 4;
    }
    writeUInt8(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setUint8(offset, value);
        return offset + 1;
    }
    writeUInt16BE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setUint16(offset, value);
        return offset + 2;
    }
    writeUInt16LE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setUint16(offset, value, true);
        return offset + 2;
    }
    writeUInt32BE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setUint32(offset, value);
        return offset + 4;
    }
    writeUInt32LE(value, offset = 0) {
        new DataView(this.buffer, this.byteOffset, this.byteLength).setUint32(offset, value, true);
        return offset + 4;
    }
};
globalThis.atob;
globalThis.btoa;
var Stream = class extends events_default {
    constructor(){
        super();
    }
    pipe(dest, options) {
        const source = this;
        if (options?.end ?? true) {
            source.on("end", onend);
            source.on("close", onclose);
        }
        let didOnEnd = false;
        function onend() {
            if (didOnEnd) return;
            didOnEnd = true;
            dest.end();
        }
        function onclose() {
            if (didOnEnd) return;
            didOnEnd = true;
            if (typeof dest.destroy === "function") dest.destroy();
        }
        function onerror(er) {
            cleanup();
            if (this.listenerCount("error") === 0) {
                throw er;
            }
        }
        source.on("error", onerror);
        dest.on("error", onerror);
        function cleanup() {
            source.removeListener("end", onend);
            source.removeListener("close", onclose);
            source.removeListener("error", onerror);
            dest.removeListener("error", onerror);
            source.removeListener("end", cleanup);
            source.removeListener("close", cleanup);
            dest.removeListener("close", cleanup);
        }
        source.on("end", cleanup);
        source.on("close", cleanup);
        dest.on("close", cleanup);
        dest.emit("pipe", source);
        return dest;
    }
};
Stream._isUint8Array = util_types_exports.isUint8Array;
Stream._uint8ArrayToBuffer = (chunk)=>Buffer3.from(chunk)
;
var stream_default = Stream;
var BufferList = class {
    constructor(){
        this.head = null;
        this.tail = null;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(v) {
        const entry = {
            data: v,
            next: null
        };
        if (this.length > 0) {
            this.tail.next = entry;
        } else {
            this.head = entry;
        }
        this.tail = entry;
        ++this.length;
    }
    unshift(v) {
        const entry = {
            data: v,
            next: this.head
        };
        if (this.length === 0) {
            this.tail = entry;
        }
        this.head = entry;
        ++this.length;
    }
    shift() {
        if (this.length === 0) {
            return;
        }
        const ret = this.head.data;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }
        --this.length;
        return ret;
    }
    clear() {
        this.head = this.tail = null;
        this.length = 0;
    }
    join(s) {
        if (this.length === 0) {
            return "";
        }
        let p = this.head;
        let ret = "" + p.data;
        p = p.next;
        while(p){
            ret += s + p.data;
            p = p.next;
        }
        return ret;
    }
    concat(n) {
        if (this.length === 0) {
            return Buffer3.alloc(0);
        }
        const ret = Buffer3.allocUnsafe(n >>> 0);
        let p = this.head;
        let i = 0;
        while(p){
            ret.set(p.data, i);
            i += p.data.length;
            p = p.next;
        }
        return ret;
    }
    consume(n, hasStrings) {
        const data = this.head.data;
        if (n < data.length) {
            const slice = data.slice(0, n);
            this.head.data = data.slice(n);
            return slice;
        }
        if (n === data.length) {
            return this.shift();
        }
        return hasStrings ? this._getString(n) : this._getBuffer(n);
    }
    first() {
        return this.head.data;
    }
    *[Symbol.iterator]() {
        for(let p = this.head; p; p = p.next){
            yield p.data;
        }
    }
    _getString(n) {
        let ret = "";
        let p = this.head;
        let c = 0;
        p = p.next;
        do {
            const str = p.data;
            if (n > str.length) {
                ret += str;
                n -= str.length;
            } else {
                if (n === str.length) {
                    ret += str;
                    ++c;
                    if (p.next) {
                        this.head = p.next;
                    } else {
                        this.head = this.tail = null;
                    }
                } else {
                    ret += str.slice(0, n);
                    this.head = p;
                    p.data = str.slice(n);
                }
                break;
            }
            ++c;
            p = p.next;
        }while (p)
        this.length -= c;
        return ret;
    }
    _getBuffer(n) {
        const ret = Buffer3.allocUnsafe(n);
        const retLen = n;
        let p = this.head;
        let c = 0;
        p = p.next;
        do {
            const buf = p.data;
            if (n > buf.length) {
                ret.set(buf, retLen - n);
                n -= buf.length;
            } else {
                if (n === buf.length) {
                    ret.set(buf, retLen - n);
                    ++c;
                    if (p.next) {
                        this.head = p.next;
                    } else {
                        this.head = this.tail = null;
                    }
                } else {
                    ret.set(new Uint8Array(buf.buffer, buf.byteOffset, n), retLen - n);
                    this.head = p;
                    p.data = buf.slice(n);
                }
                break;
            }
            ++c;
            p = p.next;
        }while (p)
        this.length -= c;
        return ret;
    }
};
var NotImplemented;
(function(NotImplemented2) {
    NotImplemented2[NotImplemented2["ascii"] = 0] = "ascii";
    NotImplemented2[NotImplemented2["latin1"] = 1] = "latin1";
    NotImplemented2[NotImplemented2["utf16le"] = 2] = "utf16le";
})(NotImplemented || (NotImplemented = {
}));
function normalizeEncoding2(enc) {
    const encoding = normalizeEncoding(enc ?? null);
    if (encoding && encoding in NotImplemented) notImplemented(encoding);
    if (!encoding && typeof enc === "string" && enc.toLowerCase() !== "raw") {
        throw new Error(`Unknown encoding: ${enc}`);
    }
    return String(encoding);
}
function utf8CheckByte(__byte) {
    if (__byte <= 127) return 0;
    else if (__byte >> 5 === 6) return 2;
    else if (__byte >> 4 === 14) return 3;
    else if (__byte >> 3 === 30) return 4;
    return __byte >> 6 === 2 ? -1 : -2;
}
function utf8CheckIncomplete(self, buf, i) {
    let j = buf.length - 1;
    if (j < i) return 0;
    let nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
function utf8CheckExtraBytes(self, buf) {
    if ((buf[0] & 192) !== 128) {
        self.lastNeed = 0;
        return "\uFFFD";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
            self.lastNeed = 1;
            return "\uFFFD";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
                self.lastNeed = 2;
                return "\uFFFD";
            }
        }
    }
}
function utf8FillLastComplete(buf) {
    const p = this.lastTotal - this.lastNeed;
    const r = utf8CheckExtraBytes(this, buf);
    if (r !== void 0) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
function utf8FillLastIncomplete(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
}
function utf8Text(buf, i) {
    const total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    const end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
function utf8End(buf) {
    const r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "\uFFFD";
    return r;
}
function utf8Write(buf) {
    if (typeof buf === "string") {
        return buf;
    }
    if (buf.length === 0) return "";
    let r;
    let i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
}
function base64Text(buf, i) {
    const n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    const r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    }
    return r;
}
function simpleWrite(buf) {
    if (typeof buf === "string") {
        return buf;
    }
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}
var StringDecoderBase = class {
    constructor(encoding, nb){
        this.encoding = encoding;
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer3.allocUnsafe(nb);
    }
};
var Base64Decoder = class extends StringDecoderBase {
    constructor(encoding){
        super(normalizeEncoding2(encoding), 3);
        this.end = base64End;
        this.fillLast = utf8FillLastIncomplete;
        this.text = base64Text;
        this.write = utf8Write;
    }
};
var GenericDecoder = class extends StringDecoderBase {
    constructor(encoding){
        super(normalizeEncoding2(encoding), 4);
        this.end = simpleEnd;
        this.fillLast = void 0;
        this.text = utf8Text;
        this.write = simpleWrite;
    }
};
var Utf8Decoder = class extends StringDecoderBase {
    constructor(encoding){
        super(normalizeEncoding2(encoding), 4);
        this.end = utf8End;
        this.fillLast = utf8FillLastComplete;
        this.text = utf8Text;
        this.write = utf8Write;
    }
};
var StringDecoder = class {
    constructor(encoding){
        let decoder;
        switch(encoding){
            case "utf8":
                decoder = new Utf8Decoder(encoding);
                break;
            case "base64":
                decoder = new Base64Decoder(encoding);
                break;
            default:
                decoder = new GenericDecoder(encoding);
        }
        this.encoding = decoder.encoding;
        this.end = decoder.end;
        this.fillLast = decoder.fillLast;
        this.lastChar = decoder.lastChar;
        this.lastNeed = decoder.lastNeed;
        this.lastTotal = decoder.lastTotal;
        this.text = decoder.text;
        this.write = decoder.write;
    }
};
function isReadable(stream) {
    return typeof stream.readable === "boolean" || typeof stream.readableEnded === "boolean" || !!stream._readableState;
}
function isWritable(stream) {
    return typeof stream.writable === "boolean" || typeof stream.writableEnded === "boolean" || !!stream._writableState;
}
function isWritableFinished(stream) {
    if (stream.writableFinished) return true;
    const wState = stream._writableState;
    if (!wState || wState.errored) return false;
    return wState.finished || wState.ended && wState.length === 0;
}
function nop() {
}
function isReadableEnded(stream) {
    if (stream.readableEnded) return true;
    const rState = stream._readableState;
    if (!rState || rState.errored) return false;
    return rState.endEmitted || rState.ended && rState.length === 0;
}
function eos(stream, x, y) {
    let opts;
    let callback;
    if (!y) {
        if (typeof x !== "function") {
            throw new ERR_INVALID_ARG_TYPE("callback", "function", x);
        }
        opts = {
        };
        callback = x;
    } else {
        if (!x || Array.isArray(x) || typeof x !== "object") {
            throw new ERR_INVALID_ARG_TYPE("opts", "object", x);
        }
        opts = x;
        if (typeof y !== "function") {
            throw new ERR_INVALID_ARG_TYPE("callback", "function", y);
        }
        callback = y;
    }
    callback = once(callback);
    const readable = opts.readable ?? isReadable(stream);
    const writable = opts.writable ?? isWritable(stream);
    const wState = stream._writableState;
    const rState = stream._readableState;
    const validState = wState || rState;
    const onlegacyfinish = ()=>{
        if (!stream.writable) {
            onfinish();
        }
    };
    let willEmitClose = validState?.autoDestroy && validState?.emitClose && validState?.closed === false && isReadable(stream) === readable && isWritable(stream) === writable;
    let writableFinished = stream.writableFinished || wState?.finished;
    const onfinish = ()=>{
        writableFinished = true;
        if (stream.destroyed) {
            willEmitClose = false;
        }
        if (willEmitClose && (!stream.readable || readable)) {
            return;
        }
        if (!readable || readableEnded) {
            callback.call(stream);
        }
    };
    let readableEnded = stream.readableEnded || rState?.endEmitted;
    const onend = ()=>{
        readableEnded = true;
        if (stream.destroyed) {
            willEmitClose = false;
        }
        if (willEmitClose && (!stream.writable || writable)) {
            return;
        }
        if (!writable || writableFinished) {
            callback.call(stream);
        }
    };
    const onerror = (err)=>{
        callback.call(stream, err);
    };
    const onclose = ()=>{
        if (readable && !readableEnded) {
            if (!isReadableEnded(stream)) {
                return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
            }
        }
        if (writable && !writableFinished) {
            if (!isWritableFinished(stream)) {
                return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
            }
        }
        callback.call(stream);
    };
    if (writable && !wState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    const closed = wState?.closed || rState?.closed || wState?.errorEmitted || rState?.errorEmitted || (!writable || wState?.finished) && (!readable || rState?.endEmitted);
    if (closed) {
        queueMicrotask(callback);
    }
    return function() {
        callback = nop;
        stream.removeListener("aborted", onclose);
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
    };
}
function destroyer(stream, err) {
    if (typeof stream.destroy === "function") {
        return stream.destroy(err);
    }
    if (typeof stream.close === "function") {
        return stream.close();
    }
}
var kLastResolve = Symbol("lastResolve");
var kLastReject = Symbol("lastReject");
var kError = Symbol("error");
var kEnded = Symbol("ended");
var kLastPromise = Symbol("lastPromise");
var kHandlePromise = Symbol("handlePromise");
var kStream = Symbol("stream");
function initIteratorSymbols(o, symbols) {
    const properties = {
    };
    for(const sym in symbols){
        properties[sym] = {
            configurable: false,
            enumerable: false,
            writable: true
        };
    }
    Object.defineProperties(o, properties);
}
function createIterResult2(value, done) {
    return {
        value,
        done
    };
}
function readAndResolve(iter) {
    const resolve = iter[kLastResolve];
    if (resolve !== null) {
        const data = iter[kStream].read();
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult2(data, false));
        }
    }
}
function onReadable(iter) {
    queueMicrotask(()=>readAndResolve(iter)
    );
}
function wrapForNext(lastPromise, iter) {
    return (resolve, reject)=>{
        lastPromise.then(()=>{
            if (iter[kEnded]) {
                resolve(createIterResult2(void 0, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
function finish(self, err) {
    return new Promise((resolve, reject)=>{
        const stream = self[kStream];
        eos(stream, (err2)=>{
            if (err2 && err2.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                reject(err2);
            } else {
                resolve(createIterResult2(void 0, true));
            }
        });
        destroyer(stream, err);
    });
}
var AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {
}).prototype);
var _a, _b, _c, _d, _e2;
var ReadableStreamAsyncIterator = class {
    constructor(stream){
        this[_a] = null;
        this[_b] = (resolve, reject)=>{
            const data = this[kStream].read();
            if (data) {
                this[kLastPromise] = null;
                this[kLastResolve] = null;
                this[kLastReject] = null;
                resolve(createIterResult2(data, false));
            } else {
                this[kLastResolve] = resolve;
                this[kLastReject] = reject;
            }
        };
        this[_c] = null;
        this[_d] = null;
        this[_e2] = AsyncIteratorPrototype[Symbol.asyncIterator];
        this[kEnded] = stream.readableEnded || stream._readableState.endEmitted;
        this[kStream] = stream;
        initIteratorSymbols(this, [
            kEnded,
            kError,
            kHandlePromise,
            kLastPromise,
            kLastReject,
            kLastResolve,
            kStream, 
        ]);
    }
    get stream() {
        return this[kStream];
    }
    next() {
        const error = this[kError];
        if (error !== null) {
            return Promise.reject(error);
        }
        if (this[kEnded]) {
            return Promise.resolve(createIterResult2(void 0, true));
        }
        if (this[kStream].destroyed) {
            return new Promise((resolve, reject)=>{
                if (this[kError]) {
                    reject(this[kError]);
                } else if (this[kEnded]) {
                    resolve(createIterResult2(void 0, true));
                } else {
                    eos(this[kStream], (err)=>{
                        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                            reject(err);
                        } else {
                            resolve(createIterResult2(void 0, true));
                        }
                    });
                }
            });
        }
        const lastPromise = this[kLastPromise];
        let promise;
        if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
        } else {
            const data = this[kStream].read();
            if (data !== null) {
                return Promise.resolve(createIterResult2(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
    return() {
        return finish(this);
    }
    throw(err) {
        return finish(this, err);
    }
};
kEnded, _a = kError, _b = kHandlePromise, kLastPromise, _c = kLastReject, _d = kLastResolve, kStream, _e2 = Symbol.asyncIterator;
var createReadableStreamAsyncIterator = (stream)=>{
    if (typeof stream.read !== "function") {
        const src = stream;
        stream = new readable_default({
            objectMode: true
        }).wrap(src);
        eos(stream, (err)=>destroyer(src, err)
        );
    }
    const iterator = new ReadableStreamAsyncIterator(stream);
    iterator[kLastPromise] = null;
    eos(stream, {
        writable: false
    }, (err)=>{
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            const reject = iterator[kLastReject];
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        const resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult2(void 0, true));
        }
        iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
};
var async_iterator_default = createReadableStreamAsyncIterator;
function from(iterable, opts) {
    let iterator;
    if (typeof iterable === "string" || iterable instanceof Buffer3) {
        return new readable_default({
            objectMode: true,
            ...opts,
            read () {
                this.push(iterable);
                this.push(null);
            }
        });
    }
    if (Symbol.asyncIterator in iterable) {
        iterator = iterable[Symbol.asyncIterator]();
    } else if (Symbol.iterator in iterable) {
        iterator = iterable[Symbol.iterator]();
    } else {
        throw new ERR_INVALID_ARG_TYPE("iterable", [
            "Iterable"
        ], iterable);
    }
    const readable = new readable_default({
        objectMode: true,
        highWaterMark: 1,
        ...opts
    });
    let reading = false;
    let needToClose = false;
    readable._read = function() {
        if (!reading) {
            reading = true;
            next();
        }
    };
    readable._destroy = function(error, cb) {
        if (needToClose) {
            needToClose = false;
            close().then(()=>queueMicrotask(()=>cb(error)
                )
            , (e)=>queueMicrotask(()=>cb(error || e)
                )
            );
        } else {
            cb(error);
        }
    };
    async function close() {
        if (typeof iterator.return === "function") {
            const { value  } = await iterator.return();
            await value;
        }
    }
    async function next() {
        try {
            needToClose = false;
            const { value , done  } = await iterator.next();
            needToClose = !done;
            if (done) {
                readable.push(null);
            } else if (readable.destroyed) {
                await close();
            } else {
                const res = await value;
                if (res === null) {
                    reading = false;
                    throw new ERR_STREAM_NULL_VALUES();
                } else if (readable.push(res)) {
                    next();
                } else {
                    reading = false;
                }
            }
        } catch (err) {
            if (err instanceof Error) {
                readable.destroy(err);
            }
        }
    }
    return readable;
}
Symbol("kConstruct");
var kDestroy = Symbol("kDestroy");
var kPaused = Symbol("kPaused");
function _destroy(self, err, cb) {
    self._destroy(err || null, (err2)=>{
        const r = self._readableState;
        if (err2) {
            err2.stack;
            if (!r.errored) {
                r.errored = err2;
            }
        }
        r.closed = true;
        if (typeof cb === "function") {
            cb(err2);
        }
        if (err2) {
            queueMicrotask(()=>{
                if (!r.errorEmitted) {
                    r.errorEmitted = true;
                    self.emit("error", err2);
                }
                r.closeEmitted = true;
                if (r.emitClose) {
                    self.emit("close");
                }
            });
        } else {
            queueMicrotask(()=>{
                r.closeEmitted = true;
                if (r.emitClose) {
                    self.emit("close");
                }
            });
        }
    });
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        if (state.multiAwaitDrain) {
            state.awaitDrainWriters.clear();
        } else {
            state.awaitDrainWriters = null;
        }
        stream.emit("data", chunk);
    } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) {
            state.buffer.unshift(chunk);
        } else {
            state.buffer.push(chunk);
        }
        if (state.needReadable) {
            emitReadable(stream);
        }
    }
    maybeReadMore(stream, state);
}
var MAX_HWM = 1073741824;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
        n = MAX_HWM;
    } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
function emitReadable(stream) {
    const state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
        state.emittedReadable = true;
        queueMicrotask(()=>emitReadable_(stream)
        );
    }
}
function emitReadable_(stream) {
    const state = stream._readableState;
    if (!state.destroyed && !state.errored && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
    }
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
}
function endReadable(stream) {
    const state = stream._readableState;
    if (!state.endEmitted) {
        state.ended = true;
        queueMicrotask(()=>endReadableNT(state, stream)
        );
    }
}
function endReadableNT(state, stream) {
    if (!state.errorEmitted && !state.closeEmitted && !state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.emit("end");
        if (state.autoDestroy) {
            stream.destroy();
        }
    }
}
function errorOrDestroy(stream, err, sync = false) {
    const r = stream._readableState;
    if (r.destroyed) {
        return stream;
    }
    if (r.autoDestroy) {
        stream.destroy(err);
    } else if (err) {
        err.stack;
        if (!r.errored) {
            r.errored = err;
        }
        if (sync) {
            queueMicrotask(()=>{
                if (!r.errorEmitted) {
                    r.errorEmitted = true;
                    stream.emit("error", err);
                }
            });
        } else if (!r.errorEmitted) {
            r.errorEmitted = true;
            stream.emit("error", err);
        }
    }
}
function flow(stream) {
    const state = stream._readableState;
    while(state.flowing && stream.read() !== null);
}
function fromList(n, state) {
    if (state.length === 0) {
        return null;
    }
    let ret;
    if (state.objectMode) {
        ret = state.buffer.shift();
    } else if (!n || n >= state.length) {
        if (state.decoder) {
            ret = state.buffer.join("");
        } else if (state.buffer.length === 1) {
            ret = state.buffer.first();
        } else {
            ret = state.buffer.concat(state.length);
        }
        state.buffer.clear();
    } else {
        ret = state.buffer.consume(n, !!state.decoder);
    }
    return ret;
}
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) {
        return 0;
    }
    if (state.objectMode) {
        return 1;
    }
    if (Number.isNaN(n)) {
        if (state.flowing && state.length) {
            return state.buffer.first().length;
        }
        return state.length;
    }
    if (n <= state.length) {
        return n;
    }
    return state.ended ? state.length : 0;
}
function maybeReadMore(stream, state) {
    if (!state.readingMore && state.constructed) {
        state.readingMore = true;
        queueMicrotask(()=>maybeReadMore_(stream, state)
        );
    }
}
function maybeReadMore_(stream, state) {
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        const len = state.length;
        stream.read(0);
        if (len === state.length) {
            break;
        }
    }
    state.readingMore = false;
}
function nReadingNextTick(self) {
    self.read(0);
}
function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
        const chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) {
        emitReadable(stream);
    } else {
        state.needReadable = false;
        state.emittedReadable = true;
        emitReadable_(stream);
    }
}
function pipeOnDrain(src, dest) {
    return function pipeOnDrainFunctionResult() {
        const state = src._readableState;
        if (state.awaitDrainWriters === dest) {
            state.awaitDrainWriters = null;
        } else if (state.multiAwaitDrain) {
            state.awaitDrainWriters.delete(dest);
        }
        if ((!state.awaitDrainWriters || state.awaitDrainWriters.size === 0) && src.listenerCount("data")) {
            state.flowing = true;
            flow(src);
        }
    };
}
function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function") {
        return emitter.prependListener(event, fn);
    }
    if (emitter._events.get(event)?.length) {
        const listeners = [
            fn,
            ...emitter._events.get(event)
        ];
        emitter._events.set(event, listeners);
    } else {
        emitter.on(event, fn);
    }
}
function readableAddChunk(stream, chunk, encoding = void 0, addToFront) {
    const state = stream._readableState;
    let usedEncoding = encoding;
    let err;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            usedEncoding = encoding || state.defaultEncoding;
            if (state.encoding !== usedEncoding) {
                if (addToFront && state.encoding) {
                    chunk = Buffer3.from(chunk, usedEncoding).toString(state.encoding);
                } else {
                    chunk = Buffer3.from(chunk, usedEncoding);
                    usedEncoding = "";
                }
            }
        } else if (chunk instanceof Uint8Array) {
            chunk = Buffer3.from(chunk);
        }
    }
    if (err) {
        errorOrDestroy(stream, err);
    } else if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else if (state.objectMode || chunk.length > 0) {
        if (addToFront) {
            if (state.endEmitted) {
                errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            } else {
                addChunk(stream, state, chunk, true);
            }
        } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed || state.errored) {
            return false;
        } else {
            state.reading = false;
            if (state.decoder && !usedEncoding) {
                chunk = state.decoder.write(Buffer3.from(chunk));
                if (state.objectMode || chunk.length !== 0) {
                    addChunk(stream, state, chunk, false);
                } else {
                    maybeReadMore(stream, state);
                }
            } else {
                addChunk(stream, state, chunk, false);
            }
        }
    } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
    }
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        queueMicrotask(()=>resume_(stream, state)
        );
    }
}
function resume_(stream, state) {
    if (!state.reading) {
        stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) {
        stream.read(0);
    }
}
function updateReadableListening(self) {
    const state = self._readableState;
    state.readableListening = self.listenerCount("readable") > 0;
    if (state.resumeScheduled && state[kPaused] === false) {
        state.flowing = true;
    } else if (self.listenerCount("data") > 0) {
        self.resume();
    } else if (!state.readableListening) {
        state.flowing = null;
    }
}
var kOnFinished = Symbol("kOnFinished");
function _destroy2(self, err, cb) {
    self._destroy(err || null, (err2)=>{
        const w = self._writableState;
        if (err2) {
            err2.stack;
            if (!w.errored) {
                w.errored = err2;
            }
        }
        w.closed = true;
        if (typeof cb === "function") {
            cb(err2);
        }
        if (err2) {
            queueMicrotask(()=>{
                if (!w.errorEmitted) {
                    w.errorEmitted = true;
                    self.emit("error", err2);
                }
                w.closeEmitted = true;
                if (w.emitClose) {
                    self.emit("close");
                }
            });
        } else {
            queueMicrotask(()=>{
                w.closeEmitted = true;
                if (w.emitClose) {
                    self.emit("close");
                }
            });
        }
    });
}
function afterWrite(stream, state, count, cb) {
    const needDrain = !state.ending && !stream.destroyed && state.length === 0 && state.needDrain;
    if (needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
    while(count-- > 0){
        state.pendingcb--;
        cb();
    }
    if (state.destroyed) {
        errorBuffer(state);
    }
    finishMaybe(stream, state);
}
function afterWriteTick({ cb , count , state , stream  }) {
    state.afterWriteTickInfo = null;
    return afterWrite(stream, state, count, cb);
}
function clearBuffer(stream, state) {
    if (state.corked || state.bufferProcessing || state.destroyed || !state.constructed) {
        return;
    }
    const { buffered , bufferedIndex , objectMode  } = state;
    const bufferedLength = buffered.length - bufferedIndex;
    if (!bufferedLength) {
        return;
    }
    const i = bufferedIndex;
    state.bufferProcessing = true;
    if (bufferedLength > 1 && stream._writev) {
        state.pendingcb -= bufferedLength - 1;
        const callback = state.allNoop ? nop2 : (err)=>{
            for(let n = i; n < buffered.length; ++n){
                buffered[n].callback(err);
            }
        };
        const chunks = state.allNoop && i === 0 ? buffered : buffered.slice(i);
        doWrite(stream, state, true, state.length, chunks, "", callback);
        resetBuffer(state);
    } else {
        do {
            const { chunk , encoding , callback  } = buffered[i];
            const len = objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, callback);
        }while (i < buffered.length && !state.writing)
        if (i === buffered.length) {
            resetBuffer(state);
        } else if (i > 256) {
            buffered.splice(0, i);
            state.bufferedIndex = 0;
        } else {
            state.bufferedIndex = i;
        }
    }
    state.bufferProcessing = false;
}
function destroy(err, cb) {
    const w = this._writableState;
    if (w.destroyed) {
        if (typeof cb === "function") {
            cb();
        }
        return this;
    }
    if (err) {
        err.stack;
        if (!w.errored) {
            w.errored = err;
        }
    }
    w.destroyed = true;
    if (!w.constructed) {
        this.once(kDestroy, (er)=>{
            _destroy2(this, err || er, cb);
        });
    } else {
        _destroy2(this, err, cb);
    }
    return this;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) {
        state.onwrite(new ERR_STREAM_DESTROYED("write"));
    } else if (writev) {
        stream._writev(chunk, state.onwrite);
    } else {
        stream._write(chunk, encoding, state.onwrite);
    }
    state.sync = false;
}
function errorBuffer(state) {
    if (state.writing) {
        return;
    }
    for(let n = state.bufferedIndex; n < state.buffered.length; ++n){
        const { chunk , callback  } = state.buffered[n];
        const len = state.objectMode ? 1 : chunk.length;
        state.length -= len;
        callback(new ERR_STREAM_DESTROYED("write"));
    }
    for (const callback of state[kOnFinished].splice(0)){
        callback(new ERR_STREAM_DESTROYED("end"));
    }
    resetBuffer(state);
}
function errorOrDestroy2(stream, err, sync = false) {
    const w = stream._writableState;
    if (w.destroyed) {
        return stream;
    }
    if (w.autoDestroy) {
        stream.destroy(err);
    } else if (err) {
        err.stack;
        if (!w.errored) {
            w.errored = err;
        }
        if (sync) {
            queueMicrotask(()=>{
                if (w.errorEmitted) {
                    return;
                }
                w.errorEmitted = true;
                stream.emit("error", err);
            });
        } else {
            if (w.errorEmitted) {
                return;
            }
            w.errorEmitted = true;
            stream.emit("error", err);
        }
    }
}
function finish2(stream, state) {
    state.pendingcb--;
    if (state.errorEmitted || state.closeEmitted) {
        return;
    }
    state.finished = true;
    for (const callback of state[kOnFinished].splice(0)){
        callback();
    }
    stream.emit("finish");
    if (state.autoDestroy) {
        stream.destroy();
    }
}
function finishMaybe(stream, state, sync) {
    if (needFinish(state)) {
        prefinish(stream, state);
        if (state.pendingcb === 0 && needFinish(state)) {
            state.pendingcb++;
            if (sync) {
                queueMicrotask(()=>finish2(stream, state)
                );
            } else {
                finish2(stream, state);
            }
        }
    }
}
function needFinish(state) {
    return state.ending && state.constructed && state.length === 0 && !state.errored && state.buffered.length === 0 && !state.finished && !state.writing;
}
function nop2() {
}
function resetBuffer(state) {
    state.buffered = [];
    state.bufferedIndex = 0;
    state.allBuffers = true;
    state.allNoop = true;
}
function onwriteError(stream, state, er, cb) {
    --state.pendingcb;
    cb(er);
    errorBuffer(state);
    errorOrDestroy2(stream, er);
}
function onwrite(stream, er) {
    const state = stream._writableState;
    const sync = state.sync;
    const cb = state.writecb;
    if (typeof cb !== "function") {
        errorOrDestroy2(stream, new ERR_MULTIPLE_CALLBACK());
        return;
    }
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
    if (er) {
        er.stack;
        if (!state.errored) {
            state.errored = er;
        }
        if (sync) {
            queueMicrotask(()=>onwriteError(stream, state, er, cb)
            );
        } else {
            onwriteError(stream, state, er, cb);
        }
    } else {
        if (state.buffered.length > state.bufferedIndex) {
            clearBuffer(stream, state);
        }
        if (sync) {
            if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) {
                state.afterWriteTickInfo.count++;
            } else {
                state.afterWriteTickInfo = {
                    count: 1,
                    cb,
                    stream,
                    state
                };
                queueMicrotask(()=>afterWriteTick(state.afterWriteTickInfo)
                );
            }
        } else {
            afterWrite(stream, state, 1, cb);
        }
    }
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
            state.finalCalled = true;
            state.sync = true;
            state.pendingcb++;
            stream._final((err)=>{
                state.pendingcb--;
                if (err) {
                    for (const callback of state[kOnFinished].splice(0)){
                        callback(err);
                    }
                    errorOrDestroy2(stream, err, state.sync);
                } else if (needFinish(state)) {
                    state.prefinished = true;
                    stream.emit("prefinish");
                    state.pendingcb++;
                    queueMicrotask(()=>finish2(stream, state)
                    );
                }
            });
            state.sync = false;
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function writeOrBuffer(stream, state, chunk, encoding, callback) {
    const len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    if (state.writing || state.corked || state.errored || !state.constructed) {
        state.buffered.push({
            chunk,
            encoding,
            callback
        });
        if (state.allBuffers && encoding !== "buffer") {
            state.allBuffers = false;
        }
        if (state.allNoop && callback !== nop2) {
            state.allNoop = false;
        }
    } else {
        state.writelen = len;
        state.writecb = callback;
        state.writing = true;
        state.sync = true;
        stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
    }
    const ret = state.length < state.highWaterMark;
    if (!ret) {
        state.needDrain = true;
    }
    return ret && !state.errored && !state.destroyed;
}
var _a2;
var ReadableState = class {
    constructor(options){
        this[_a2] = null;
        this.awaitDrainWriters = null;
        this.buffer = new BufferList();
        this.closed = false;
        this.closeEmitted = false;
        this.decoder = null;
        this.destroyed = false;
        this.emittedReadable = false;
        this.encoding = null;
        this.ended = false;
        this.endEmitted = false;
        this.errored = null;
        this.errorEmitted = false;
        this.flowing = null;
        this.length = 0;
        this.multiAwaitDrain = false;
        this.needReadable = false;
        this.pipes = [];
        this.readable = true;
        this.readableListening = false;
        this.reading = false;
        this.readingMore = false;
        this.resumeScheduled = false;
        this.sync = true;
        this.objectMode = !!options?.objectMode;
        this.highWaterMark = options?.highWaterMark ?? (this.objectMode ? 16 : 16 * 1024);
        if (Number.isInteger(this.highWaterMark) && this.highWaterMark >= 0) {
            this.highWaterMark = Math.floor(this.highWaterMark);
        } else {
            throw new ERR_INVALID_OPT_VALUE("highWaterMark", this.highWaterMark);
        }
        this.emitClose = options?.emitClose ?? true;
        this.autoDestroy = options?.autoDestroy ?? true;
        this.defaultEncoding = options?.defaultEncoding || "utf8";
        if (options?.encoding) {
            this.decoder = new StringDecoder(options.encoding);
            this.encoding = options.encoding;
        }
        this.constructed = true;
    }
};
_a2 = kPaused;
var Readable = class extends stream_default {
    constructor(options){
        super();
        this.off = this.removeListener;
        if (options) {
            if (typeof options.read === "function") {
                this._read = options.read;
            }
            if (typeof options.destroy === "function") {
                this._destroy = options.destroy;
            }
        }
        this._readableState = new ReadableState(options);
    }
    static from(iterable, opts) {
        return from(iterable, opts);
    }
    read(n) {
        if (n === void 0) {
            n = NaN;
        }
        const state = this._readableState;
        const nOrig = n;
        if (n > state.highWaterMark) {
            state.highWaterMark = computeNewHighWaterMark(n);
        }
        if (n !== 0) {
            state.emittedReadable = false;
        }
        if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
            if (state.length === 0 && state.ended) {
                endReadable(this);
            } else {
                emitReadable(this);
            }
            return null;
        }
        n = howMuchToRead(n, state);
        if (n === 0 && state.ended) {
            if (state.length === 0) {
                endReadable(this);
            }
            return null;
        }
        let doRead = state.needReadable;
        if (state.length === 0 || state.length - n < state.highWaterMark) {
            doRead = true;
        }
        if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
            doRead = false;
        } else if (doRead) {
            state.reading = true;
            state.sync = true;
            if (state.length === 0) {
                state.needReadable = true;
            }
            this._read();
            state.sync = false;
            if (!state.reading) {
                n = howMuchToRead(nOrig, state);
            }
        }
        let ret;
        if (n > 0) {
            ret = fromList(n, state);
        } else {
            ret = null;
        }
        if (ret === null) {
            state.needReadable = state.length <= state.highWaterMark;
            n = 0;
        } else {
            state.length -= n;
            if (state.multiAwaitDrain) {
                state.awaitDrainWriters.clear();
            } else {
                state.awaitDrainWriters = null;
            }
        }
        if (state.length === 0) {
            if (!state.ended) {
                state.needReadable = true;
            }
            if (nOrig !== n && state.ended) {
                endReadable(this);
            }
        }
        if (ret !== null) {
            this.emit("data", ret);
        }
        return ret;
    }
    _read(_size) {
        throw new ERR_METHOD_NOT_IMPLEMENTED("_read()");
    }
    pipe(dest, pipeOpts) {
        const src = this;
        const state = this._readableState;
        if (state.pipes.length === 1) {
            if (!state.multiAwaitDrain) {
                state.multiAwaitDrain = true;
                state.awaitDrainWriters = new Set(state.awaitDrainWriters ? [
                    state.awaitDrainWriters
                ] : []);
            }
        }
        state.pipes.push(dest);
        const doEnd = !pipeOpts || pipeOpts.end !== false;
        const endFn = doEnd ? onend : unpipe;
        if (state.endEmitted) {
            queueMicrotask(endFn);
        } else {
            this.once("end", endFn);
        }
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
            if (readable === src) {
                if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                    unpipeInfo.hasUnpiped = true;
                    cleanup();
                }
            }
        }
        function onend() {
            dest.end();
        }
        let ondrain;
        let cleanedUp = false;
        function cleanup() {
            dest.removeListener("close", onclose);
            dest.removeListener("finish", onfinish);
            if (ondrain) {
                dest.removeListener("drain", ondrain);
            }
            dest.removeListener("error", onerror);
            dest.removeListener("unpipe", onunpipe);
            src.removeListener("end", onend);
            src.removeListener("end", unpipe);
            src.removeListener("data", ondata);
            cleanedUp = true;
            if (ondrain && state.awaitDrainWriters && (!dest._writableState || dest._writableState.needDrain)) {
                ondrain();
            }
        }
        this.on("data", ondata);
        function ondata(chunk) {
            const ret = dest.write(chunk);
            if (ret === false) {
                if (!cleanedUp) {
                    if (state.pipes.length === 1 && state.pipes[0] === dest) {
                        state.awaitDrainWriters = dest;
                        state.multiAwaitDrain = false;
                    } else if (state.pipes.length > 1 && state.pipes.includes(dest)) {
                        state.awaitDrainWriters.add(dest);
                    }
                    src.pause();
                }
                if (!ondrain) {
                    ondrain = pipeOnDrain(src, dest);
                    dest.on("drain", ondrain);
                }
            }
        }
        function onerror(er) {
            unpipe();
            dest.removeListener("error", onerror);
            if (dest.listenerCount("error") === 0) {
                const s = dest._writableState || dest._readableState;
                if (s && !s.errorEmitted) {
                    if (dest instanceof duplex_default) {
                        errorOrDestroy3(dest, er);
                    } else {
                        errorOrDestroy2(dest, er);
                    }
                } else {
                    dest.emit("error", er);
                }
            }
        }
        prependListener(dest, "error", onerror);
        function onclose() {
            dest.removeListener("finish", onfinish);
            unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
            dest.removeListener("close", onclose);
            unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
            src.unpipe(dest);
        }
        dest.emit("pipe", this);
        if (!state.flowing) {
            this.resume();
        }
        return dest;
    }
    isPaused() {
        return this._readableState[kPaused] === true || this._readableState.flowing === false;
    }
    setEncoding(enc) {
        const decoder = new StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        const buffer = this._readableState.buffer;
        let content = "";
        for (const data of buffer){
            content += decoder.write(data);
        }
        buffer.clear();
        if (content !== "") {
            buffer.push(content);
        }
        this._readableState.length = content.length;
        return this;
    }
    on(ev, fn) {
        const res = super.on.call(this, ev, fn);
        const state = this._readableState;
        if (ev === "data") {
            state.readableListening = this.listenerCount("readable") > 0;
            if (state.flowing !== false) {
                this.resume();
            }
        } else if (ev === "readable") {
            if (!state.endEmitted && !state.readableListening) {
                state.readableListening = state.needReadable = true;
                state.flowing = false;
                state.emittedReadable = false;
                if (state.length) {
                    emitReadable(this);
                } else if (!state.reading) {
                    queueMicrotask(()=>nReadingNextTick(this)
                    );
                }
            }
        }
        return res;
    }
    removeListener(ev, fn) {
        const res = super.removeListener.call(this, ev, fn);
        if (ev === "readable") {
            queueMicrotask(()=>updateReadableListening(this)
            );
        }
        return res;
    }
    destroy(err, cb) {
        const r = this._readableState;
        if (r.destroyed) {
            if (typeof cb === "function") {
                cb();
            }
            return this;
        }
        if (err) {
            err.stack;
            if (!r.errored) {
                r.errored = err;
            }
        }
        r.destroyed = true;
        if (!r.constructed) {
            this.once(kDestroy, (er)=>{
                _destroy(this, err || er, cb);
            });
        } else {
            _destroy(this, err, cb);
        }
        return this;
    }
    _undestroy() {
        const r = this._readableState;
        r.constructed = true;
        r.closed = false;
        r.closeEmitted = false;
        r.destroyed = false;
        r.errored = null;
        r.errorEmitted = false;
        r.reading = false;
        r.ended = false;
        r.endEmitted = false;
    }
    _destroy(error, callback) {
        callback(error);
    }
    [captureRejectionSymbol](err) {
        this.destroy(err);
    }
    push(chunk, encoding) {
        return readableAddChunk(this, chunk, encoding, false);
    }
    unshift(chunk, encoding) {
        return readableAddChunk(this, chunk, encoding, true);
    }
    unpipe(dest) {
        const state = this._readableState;
        const unpipeInfo = {
            hasUnpiped: false
        };
        if (state.pipes.length === 0) {
            return this;
        }
        if (!dest) {
            const dests = state.pipes;
            state.pipes = [];
            this.pause();
            for (const dest2 of dests){
                dest2.emit("unpipe", this, {
                    hasUnpiped: false
                });
            }
            return this;
        }
        const index = state.pipes.indexOf(dest);
        if (index === -1) {
            return this;
        }
        state.pipes.splice(index, 1);
        if (state.pipes.length === 0) {
            this.pause();
        }
        dest.emit("unpipe", this, unpipeInfo);
        return this;
    }
    removeAllListeners(ev) {
        const res = super.removeAllListeners(ev);
        if (ev === "readable" || ev === void 0) {
            queueMicrotask(()=>updateReadableListening(this)
            );
        }
        return res;
    }
    resume() {
        const state = this._readableState;
        if (!state.flowing) {
            state.flowing = !state.readableListening;
            resume(this, state);
        }
        state[kPaused] = false;
        return this;
    }
    pause() {
        if (this._readableState.flowing !== false) {
            this._readableState.flowing = false;
            this.emit("pause");
        }
        this._readableState[kPaused] = true;
        return this;
    }
    wrap(stream) {
        const state = this._readableState;
        let paused = false;
        stream.on("end", ()=>{
            if (state.decoder && !state.ended) {
                const chunk = state.decoder.end();
                if (chunk && chunk.length) {
                    this.push(chunk);
                }
            }
            this.push(null);
        });
        stream.on("data", (chunk)=>{
            if (state.decoder) {
                chunk = state.decoder.write(chunk);
            }
            if (state.objectMode && (chunk === null || chunk === void 0)) {
                return;
            } else if (!state.objectMode && (!chunk || !chunk.length)) {
                return;
            }
            const ret = this.push(chunk);
            if (!ret) {
                paused = true;
                stream.pause();
            }
        });
        for(const i in stream){
            if (this[i] === void 0 && typeof stream[i] === "function") {
                this[i] = (function methodWrap(method) {
                    return function methodWrapReturnFunction() {
                        return stream[method].apply(stream);
                    };
                })(i);
            }
        }
        stream.on("error", (err)=>{
            errorOrDestroy(this, err);
        });
        stream.on("close", ()=>{
            this.emit("close");
        });
        stream.on("destroy", ()=>{
            this.emit("destroy");
        });
        stream.on("pause", ()=>{
            this.emit("pause");
        });
        stream.on("resume", ()=>{
            this.emit("resume");
        });
        this._read = ()=>{
            if (paused) {
                paused = false;
                stream.resume();
            }
        };
        return this;
    }
    [Symbol.asyncIterator]() {
        return async_iterator_default(this);
    }
    get readable() {
        return this._readableState?.readable && !this._readableState?.destroyed && !this._readableState?.errorEmitted && !this._readableState?.endEmitted;
    }
    set readable(val) {
        if (this._readableState) {
            this._readableState.readable = val;
        }
    }
    get readableHighWaterMark() {
        return this._readableState.highWaterMark;
    }
    get readableBuffer() {
        return this._readableState && this._readableState.buffer;
    }
    get readableFlowing() {
        return this._readableState.flowing;
    }
    set readableFlowing(state) {
        if (this._readableState) {
            this._readableState.flowing = state;
        }
    }
    get readableLength() {
        return this._readableState.length;
    }
    get readableObjectMode() {
        return this._readableState ? this._readableState.objectMode : false;
    }
    get readableEncoding() {
        return this._readableState ? this._readableState.encoding : null;
    }
    get destroyed() {
        if (this._readableState === void 0) {
            return false;
        }
        return this._readableState.destroyed;
    }
    set destroyed(value) {
        if (!this._readableState) {
            return;
        }
        this._readableState.destroyed = value;
    }
    get readableEnded() {
        return this._readableState ? this._readableState.endEmitted : false;
    }
};
Readable.ReadableState = ReadableState;
Readable._fromList = fromList;
Object.defineProperties(Readable, {
    _readableState: {
        enumerable: false
    },
    destroyed: {
        enumerable: false
    },
    readableBuffer: {
        enumerable: false
    },
    readableEncoding: {
        enumerable: false
    },
    readableEnded: {
        enumerable: false
    },
    readableFlowing: {
        enumerable: false
    },
    readableHighWaterMark: {
        enumerable: false
    },
    readableLength: {
        enumerable: false
    },
    readableObjectMode: {
        enumerable: false
    }
});
var readable_default = Readable;
var _a3;
var WritableState = class {
    constructor(options, stream){
        this[_a3] = [];
        this.afterWriteTickInfo = null;
        this.allBuffers = true;
        this.allNoop = true;
        this.buffered = [];
        this.bufferedIndex = 0;
        this.bufferProcessing = false;
        this.closed = false;
        this.closeEmitted = false;
        this.corked = 0;
        this.destroyed = false;
        this.ended = false;
        this.ending = false;
        this.errored = null;
        this.errorEmitted = false;
        this.finalCalled = false;
        this.finished = false;
        this.length = 0;
        this.needDrain = false;
        this.pendingcb = 0;
        this.prefinished = false;
        this.sync = true;
        this.writecb = null;
        this.writable = true;
        this.writelen = 0;
        this.writing = false;
        this.objectMode = !!options?.objectMode;
        this.highWaterMark = options?.highWaterMark ?? (this.objectMode ? 16 : 16 * 1024);
        if (Number.isInteger(this.highWaterMark) && this.highWaterMark >= 0) {
            this.highWaterMark = Math.floor(this.highWaterMark);
        } else {
            throw new ERR_INVALID_OPT_VALUE("highWaterMark", this.highWaterMark);
        }
        this.decodeStrings = !options?.decodeStrings === false;
        this.defaultEncoding = options?.defaultEncoding || "utf8";
        this.onwrite = onwrite.bind(void 0, stream);
        resetBuffer(this);
        this.emitClose = options?.emitClose ?? true;
        this.autoDestroy = options?.autoDestroy ?? true;
        this.constructed = true;
    }
    getBuffer() {
        return this.buffered.slice(this.bufferedIndex);
    }
    get bufferedRequestCount() {
        return this.buffered.length - this.bufferedIndex;
    }
};
_a3 = kOnFinished;
var Writable = class extends stream_default {
    constructor(options){
        super();
        this._writev = null;
        this._writableState = new WritableState(options, this);
        if (options) {
            if (typeof options.write === "function") {
                this._write = options.write;
            }
            if (typeof options.writev === "function") {
                this._writev = options.writev;
            }
            if (typeof options.destroy === "function") {
                this._destroy = options.destroy;
            }
            if (typeof options.final === "function") {
                this._final = options.final;
            }
        }
    }
    [captureRejectionSymbol](err) {
        this.destroy(err);
    }
    get destroyed() {
        return this._writableState ? this._writableState.destroyed : false;
    }
    set destroyed(value) {
        if (this._writableState) {
            this._writableState.destroyed = value;
        }
    }
    get writable() {
        const w = this._writableState;
        return !w.destroyed && !w.errored && !w.ending && !w.ended;
    }
    set writable(val) {
        if (this._writableState) {
            this._writableState.writable = !!val;
        }
    }
    get writableFinished() {
        return this._writableState ? this._writableState.finished : false;
    }
    get writableObjectMode() {
        return this._writableState ? this._writableState.objectMode : false;
    }
    get writableBuffer() {
        return this._writableState && this._writableState.getBuffer();
    }
    get writableEnded() {
        return this._writableState ? this._writableState.ending : false;
    }
    get writableHighWaterMark() {
        return this._writableState && this._writableState.highWaterMark;
    }
    get writableCorked() {
        return this._writableState ? this._writableState.corked : 0;
    }
    get writableLength() {
        return this._writableState && this._writableState.length;
    }
    _undestroy() {
        const w = this._writableState;
        w.constructed = true;
        w.destroyed = false;
        w.closed = false;
        w.closeEmitted = false;
        w.errored = null;
        w.errorEmitted = false;
        w.ended = false;
        w.ending = false;
        w.finalCalled = false;
        w.prefinished = false;
        w.finished = false;
    }
    _destroy(err, cb) {
        cb(err);
    }
    destroy(err, cb) {
        const state = this._writableState;
        if (!state.destroyed) {
            queueMicrotask(()=>errorBuffer(state)
            );
        }
        destroy.call(this, err, cb);
        return this;
    }
    end(x, y, z) {
        const state = this._writableState;
        let chunk;
        let encoding;
        let cb;
        if (typeof x === "function") {
            chunk = null;
            encoding = null;
            cb = x;
        } else if (typeof y === "function") {
            chunk = x;
            encoding = null;
            cb = y;
        } else {
            chunk = x;
            encoding = y;
            cb = z;
        }
        if (chunk !== null && chunk !== void 0) {
            this.write(chunk, encoding);
        }
        if (state.corked) {
            state.corked = 1;
            this.uncork();
        }
        let err;
        if (!state.errored && !state.ending) {
            state.ending = true;
            finishMaybe(this, state, true);
            state.ended = true;
        } else if (state.finished) {
            err = new ERR_STREAM_ALREADY_FINISHED("end");
        } else if (state.destroyed) {
            err = new ERR_STREAM_DESTROYED("end");
        }
        if (typeof cb === "function") {
            if (err || state.finished) {
                queueMicrotask(()=>{
                    cb(err);
                });
            } else {
                state[kOnFinished].push(cb);
            }
        }
        return this;
    }
    _write(chunk, encoding, cb) {
        if (this._writev) {
            this._writev([
                {
                    chunk,
                    encoding
                }
            ], cb);
        } else {
            throw new ERR_METHOD_NOT_IMPLEMENTED("_write()");
        }
    }
    pipe(dest) {
        errorOrDestroy2(this, new ERR_STREAM_CANNOT_PIPE());
        return dest;
    }
    write(chunk, x, y) {
        const state = this._writableState;
        let encoding;
        let cb;
        if (typeof x === "function") {
            cb = x;
            encoding = state.defaultEncoding;
        } else {
            if (!x) {
                encoding = state.defaultEncoding;
            } else if (x !== "buffer" && !Buffer3.isEncoding(x)) {
                throw new ERR_UNKNOWN_ENCODING(x);
            } else {
                encoding = x;
            }
            if (typeof y !== "function") {
                cb = nop2;
            } else {
                cb = y;
            }
        }
        if (chunk === null) {
            throw new ERR_STREAM_NULL_VALUES();
        } else if (!state.objectMode) {
            if (typeof chunk === "string") {
                if (state.decodeStrings !== false) {
                    chunk = Buffer3.from(chunk, encoding);
                    encoding = "buffer";
                }
            } else if (chunk instanceof Buffer3) {
                encoding = "buffer";
            } else if (stream_default._isUint8Array(chunk)) {
                chunk = stream_default._uint8ArrayToBuffer(chunk);
                encoding = "buffer";
            } else {
                throw new ERR_INVALID_ARG_TYPE("chunk", [
                    "string",
                    "Buffer",
                    "Uint8Array", 
                ], chunk);
            }
        }
        let err;
        if (state.ending) {
            err = new ERR_STREAM_WRITE_AFTER_END();
        } else if (state.destroyed) {
            err = new ERR_STREAM_DESTROYED("write");
        }
        if (err) {
            queueMicrotask(()=>cb(err)
            );
            errorOrDestroy2(this, err, true);
            return false;
        }
        state.pendingcb++;
        return writeOrBuffer(this, state, chunk, encoding, cb);
    }
    cork() {
        this._writableState.corked++;
    }
    uncork() {
        const state = this._writableState;
        if (state.corked) {
            state.corked--;
            if (!state.writing) {
                clearBuffer(this, state);
            }
        }
    }
    setDefaultEncoding(encoding) {
        if (typeof encoding === "string") {
            encoding = encoding.toLowerCase();
        }
        if (!Buffer3.isEncoding(encoding)) {
            throw new ERR_UNKNOWN_ENCODING(encoding);
        }
        this._writableState.defaultEncoding = encoding;
        return this;
    }
};
Writable.WritableState = WritableState;
var writable_default = Writable;
function endDuplex(stream) {
    const state = stream._readableState;
    if (!state.endEmitted) {
        state.ended = true;
        queueMicrotask(()=>endReadableNT2(state, stream)
        );
    }
}
function endReadableNT2(state, stream) {
    if (!state.errorEmitted && !state.closeEmitted && !state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.emit("end");
        if (stream.writable && stream.allowHalfOpen === false) {
            queueMicrotask(()=>endWritableNT(state, stream)
            );
        } else if (state.autoDestroy) {
            const wState = stream._writableState;
            const autoDestroy = !wState || wState.autoDestroy && (wState.finished || wState.writable === false);
            if (autoDestroy) {
                stream.destroy();
            }
        }
    }
}
function endWritableNT(_state, stream) {
    const writable = stream.writable && !stream.writableEnded && !stream.destroyed;
    if (writable) {
        stream.end();
    }
}
function errorOrDestroy3(stream, err, sync = false) {
    const r = stream._readableState;
    const w = stream._writableState;
    if (w.destroyed || r.destroyed) {
        return this;
    }
    if (r.autoDestroy || w.autoDestroy) {
        stream.destroy(err);
    } else if (err) {
        err.stack;
        if (w && !w.errored) {
            w.errored = err;
        }
        if (r && !r.errored) {
            r.errored = err;
        }
        if (sync) {
            queueMicrotask(()=>{
                if (w.errorEmitted || r.errorEmitted) {
                    return;
                }
                w.errorEmitted = true;
                r.errorEmitted = true;
                stream.emit("error", err);
            });
        } else {
            if (w.errorEmitted || r.errorEmitted) {
                return;
            }
            w.errorEmitted = true;
            r.errorEmitted = true;
            stream.emit("error", err);
        }
    }
}
function finish3(stream, state) {
    state.pendingcb--;
    if (state.errorEmitted || state.closeEmitted) {
        return;
    }
    state.finished = true;
    for (const callback of state[kOnFinished].splice(0)){
        callback();
    }
    stream.emit("finish");
    if (state.autoDestroy) {
        stream.destroy();
    }
}
function finishMaybe2(stream, state, sync) {
    if (needFinish(state)) {
        prefinish(stream, state);
        if (state.pendingcb === 0 && needFinish(state)) {
            state.pendingcb++;
            if (sync) {
                queueMicrotask(()=>finish3(stream, state)
                );
            } else {
                finish3(stream, state);
            }
        }
    }
}
function onwrite2(stream, er) {
    const state = stream._writableState;
    const sync = state.sync;
    const cb = state.writecb;
    if (typeof cb !== "function") {
        errorOrDestroy3(stream, new ERR_MULTIPLE_CALLBACK());
        return;
    }
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
    if (er) {
        er.stack;
        if (!state.errored) {
            state.errored = er;
        }
        if (stream._readableState && !stream._readableState.errored) {
            stream._readableState.errored = er;
        }
        if (sync) {
            queueMicrotask(()=>onwriteError2(stream, state, er, cb)
            );
        } else {
            onwriteError2(stream, state, er, cb);
        }
    } else {
        if (state.buffered.length > state.bufferedIndex) {
            clearBuffer(stream, state);
        }
        if (sync) {
            if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) {
                state.afterWriteTickInfo.count++;
            } else {
                state.afterWriteTickInfo = {
                    count: 1,
                    cb,
                    stream,
                    state
                };
                queueMicrotask(()=>afterWriteTick(state.afterWriteTickInfo)
                );
            }
        } else {
            afterWrite(stream, state, 1, cb);
        }
    }
}
function onwriteError2(stream, state, er, cb) {
    --state.pendingcb;
    cb(er);
    errorBuffer(state);
    errorOrDestroy3(stream, er);
}
function readableAddChunk2(stream, chunk, encoding = void 0, addToFront) {
    const state = stream._readableState;
    let usedEncoding = encoding;
    let err;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            usedEncoding = encoding || state.defaultEncoding;
            if (state.encoding !== usedEncoding) {
                if (addToFront && state.encoding) {
                    chunk = Buffer3.from(chunk, usedEncoding).toString(state.encoding);
                } else {
                    chunk = Buffer3.from(chunk, usedEncoding);
                    usedEncoding = "";
                }
            }
        } else if (chunk instanceof Uint8Array) {
            chunk = Buffer3.from(chunk);
        }
    }
    if (err) {
        errorOrDestroy3(stream, err);
    } else if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else if (state.objectMode || chunk.length > 0) {
        if (addToFront) {
            if (state.endEmitted) {
                errorOrDestroy3(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            } else {
                addChunk(stream, state, chunk, true);
            }
        } else if (state.ended) {
            errorOrDestroy3(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed || state.errored) {
            return false;
        } else {
            state.reading = false;
            if (state.decoder && !usedEncoding) {
                chunk = state.decoder.write(Buffer3.from(chunk));
                if (state.objectMode || chunk.length !== 0) {
                    addChunk(stream, state, chunk, false);
                } else {
                    maybeReadMore(stream, state);
                }
            } else {
                addChunk(stream, state, chunk, false);
            }
        }
    } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
    }
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
var Duplex = class extends stream_default {
    constructor(options){
        super();
        this.allowHalfOpen = true;
        this._read = readable_default.prototype._read;
        this._undestroy = readable_default.prototype._undestroy;
        this.isPaused = readable_default.prototype.isPaused;
        this.off = this.removeListener;
        this.pause = readable_default.prototype.pause;
        this.pipe = readable_default.prototype.pipe;
        this.resume = readable_default.prototype.resume;
        this.setEncoding = readable_default.prototype.setEncoding;
        this.unpipe = readable_default.prototype.unpipe;
        this.wrap = readable_default.prototype.wrap;
        this._write = writable_default.prototype._write;
        this.write = writable_default.prototype.write;
        this.cork = writable_default.prototype.cork;
        this.uncork = writable_default.prototype.uncork;
        if (options) {
            if (options.allowHalfOpen === false) {
                this.allowHalfOpen = false;
            }
            if (typeof options.destroy === "function") {
                this._destroy = options.destroy;
            }
            if (typeof options.final === "function") {
                this._final = options.final;
            }
            if (typeof options.read === "function") {
                this._read = options.read;
            }
            if (options.readable === false) {
                this.readable = false;
            }
            if (options.writable === false) {
                this.writable = false;
            }
            if (typeof options.write === "function") {
                this._write = options.write;
            }
            if (typeof options.writev === "function") {
                this._writev = options.writev;
            }
        }
        const readableOptions = {
            autoDestroy: options?.autoDestroy,
            defaultEncoding: options?.defaultEncoding,
            destroy: options?.destroy,
            emitClose: options?.emitClose,
            encoding: options?.encoding,
            highWaterMark: options?.highWaterMark ?? options?.readableHighWaterMark,
            objectMode: options?.objectMode ?? options?.readableObjectMode,
            read: options?.read
        };
        const writableOptions = {
            autoDestroy: options?.autoDestroy,
            decodeStrings: options?.decodeStrings,
            defaultEncoding: options?.defaultEncoding,
            destroy: options?.destroy,
            emitClose: options?.emitClose,
            final: options?.final,
            highWaterMark: options?.highWaterMark ?? options?.writableHighWaterMark,
            objectMode: options?.objectMode ?? options?.writableObjectMode,
            write: options?.write,
            writev: options?.writev
        };
        this._readableState = new ReadableState(readableOptions);
        this._writableState = new WritableState(writableOptions, this);
        this._writableState.onwrite = onwrite2.bind(void 0, this);
    }
    [captureRejectionSymbol](err) {
        this.destroy(err);
    }
    [Symbol.asyncIterator]() {
        return async_iterator_default(this);
    }
    _destroy(error, callback) {
        callback(error);
    }
    destroy(err, cb) {
        const r = this._readableState;
        const w = this._writableState;
        if (w.destroyed || r.destroyed) {
            if (typeof cb === "function") {
                cb();
            }
            return this;
        }
        if (err) {
            err.stack;
            if (!w.errored) {
                w.errored = err;
            }
            if (!r.errored) {
                r.errored = err;
            }
        }
        w.destroyed = true;
        r.destroyed = true;
        this._destroy(err || null, (err2)=>{
            if (err2) {
                err2.stack;
                if (!w.errored) {
                    w.errored = err2;
                }
                if (!r.errored) {
                    r.errored = err2;
                }
            }
            w.closed = true;
            r.closed = true;
            if (typeof cb === "function") {
                cb(err2);
            }
            if (err2) {
                queueMicrotask(()=>{
                    const r2 = this._readableState;
                    const w2 = this._writableState;
                    if (!w2.errorEmitted && !r2.errorEmitted) {
                        w2.errorEmitted = true;
                        r2.errorEmitted = true;
                        this.emit("error", err2);
                    }
                    r2.closeEmitted = true;
                    if (w2.emitClose || r2.emitClose) {
                        this.emit("close");
                    }
                });
            } else {
                queueMicrotask(()=>{
                    const r2 = this._readableState;
                    const w2 = this._writableState;
                    r2.closeEmitted = true;
                    if (w2.emitClose || r2.emitClose) {
                        this.emit("close");
                    }
                });
            }
        });
        return this;
    }
    on(ev, fn) {
        const res = super.on.call(this, ev, fn);
        const state = this._readableState;
        if (ev === "data") {
            state.readableListening = this.listenerCount("readable") > 0;
            if (state.flowing !== false) {
                this.resume();
            }
        } else if (ev === "readable") {
            if (!state.endEmitted && !state.readableListening) {
                state.readableListening = state.needReadable = true;
                state.flowing = false;
                state.emittedReadable = false;
                if (state.length) {
                    emitReadable(this);
                } else if (!state.reading) {
                    queueMicrotask(()=>nReadingNextTick(this)
                    );
                }
            }
        }
        return res;
    }
    push(chunk, encoding) {
        return readableAddChunk2(this, chunk, encoding, false);
    }
    read(n) {
        if (n === void 0) {
            n = NaN;
        }
        const state = this._readableState;
        const nOrig = n;
        if (n > state.highWaterMark) {
            state.highWaterMark = computeNewHighWaterMark(n);
        }
        if (n !== 0) {
            state.emittedReadable = false;
        }
        if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
            if (state.length === 0 && state.ended) {
                endDuplex(this);
            } else {
                emitReadable(this);
            }
            return null;
        }
        n = howMuchToRead(n, state);
        if (n === 0 && state.ended) {
            if (state.length === 0) {
                endDuplex(this);
            }
            return null;
        }
        let doRead = state.needReadable;
        if (state.length === 0 || state.length - n < state.highWaterMark) {
            doRead = true;
        }
        if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
            doRead = false;
        } else if (doRead) {
            state.reading = true;
            state.sync = true;
            if (state.length === 0) {
                state.needReadable = true;
            }
            this._read();
            state.sync = false;
            if (!state.reading) {
                n = howMuchToRead(nOrig, state);
            }
        }
        let ret;
        if (n > 0) {
            ret = fromList(n, state);
        } else {
            ret = null;
        }
        if (ret === null) {
            state.needReadable = state.length <= state.highWaterMark;
            n = 0;
        } else {
            state.length -= n;
            if (state.multiAwaitDrain) {
                state.awaitDrainWriters.clear();
            } else {
                state.awaitDrainWriters = null;
            }
        }
        if (state.length === 0) {
            if (!state.ended) {
                state.needReadable = true;
            }
            if (nOrig !== n && state.ended) {
                endDuplex(this);
            }
        }
        if (ret !== null) {
            this.emit("data", ret);
        }
        return ret;
    }
    removeAllListeners(ev) {
        const res = super.removeAllListeners(ev);
        if (ev === "readable" || ev === void 0) {
            queueMicrotask(()=>updateReadableListening(this)
            );
        }
        return res;
    }
    removeListener(ev, fn) {
        const res = super.removeListener.call(this, ev, fn);
        if (ev === "readable") {
            queueMicrotask(()=>updateReadableListening(this)
            );
        }
        return res;
    }
    unshift(chunk, encoding) {
        return readableAddChunk2(this, chunk, encoding, true);
    }
    get readable() {
        return this._readableState?.readable && !this._readableState?.destroyed && !this._readableState?.errorEmitted && !this._readableState?.endEmitted;
    }
    set readable(val) {
        if (this._readableState) {
            this._readableState.readable = val;
        }
    }
    get readableHighWaterMark() {
        return this._readableState.highWaterMark;
    }
    get readableBuffer() {
        return this._readableState && this._readableState.buffer;
    }
    get readableFlowing() {
        return this._readableState.flowing;
    }
    set readableFlowing(state) {
        if (this._readableState) {
            this._readableState.flowing = state;
        }
    }
    get readableLength() {
        return this._readableState.length;
    }
    get readableObjectMode() {
        return this._readableState ? this._readableState.objectMode : false;
    }
    get readableEncoding() {
        return this._readableState ? this._readableState.encoding : null;
    }
    get readableEnded() {
        return this._readableState ? this._readableState.endEmitted : false;
    }
    setDefaultEncoding(encoding) {
        if (typeof encoding === "string") {
            encoding = encoding.toLowerCase();
        }
        if (!Buffer3.isEncoding(encoding)) {
            throw new ERR_UNKNOWN_ENCODING(encoding);
        }
        this._writableState.defaultEncoding = encoding;
        return this;
    }
    end(x, y, z) {
        const state = this._writableState;
        let chunk;
        let encoding;
        let cb;
        if (typeof x === "function") {
            chunk = null;
            encoding = null;
            cb = x;
        } else if (typeof y === "function") {
            chunk = x;
            encoding = null;
            cb = y;
        } else {
            chunk = x;
            encoding = y;
            cb = z;
        }
        if (chunk !== null && chunk !== void 0) {
            this.write(chunk, encoding);
        }
        if (state.corked) {
            state.corked = 1;
            this.uncork();
        }
        let err;
        if (!state.errored && !state.ending) {
            state.ending = true;
            finishMaybe2(this, state, true);
            state.ended = true;
        } else if (state.finished) {
            err = new ERR_STREAM_ALREADY_FINISHED("end");
        } else if (state.destroyed) {
            err = new ERR_STREAM_DESTROYED("end");
        }
        if (typeof cb === "function") {
            if (err || state.finished) {
                queueMicrotask(()=>{
                    cb(err);
                });
            } else {
                state[kOnFinished].push(cb);
            }
        }
        return this;
    }
    get destroyed() {
        if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
    }
    set destroyed(value) {
        if (this._readableState && this._writableState) {
            this._readableState.destroyed = value;
            this._writableState.destroyed = value;
        }
    }
    get writable() {
        const w = this._writableState;
        return !w.destroyed && !w.errored && !w.ending && !w.ended;
    }
    set writable(val) {
        if (this._writableState) {
            this._writableState.writable = !!val;
        }
    }
    get writableFinished() {
        return this._writableState ? this._writableState.finished : false;
    }
    get writableObjectMode() {
        return this._writableState ? this._writableState.objectMode : false;
    }
    get writableBuffer() {
        return this._writableState && this._writableState.getBuffer();
    }
    get writableEnded() {
        return this._writableState ? this._writableState.ending : false;
    }
    get writableHighWaterMark() {
        return this._writableState && this._writableState.highWaterMark;
    }
    get writableCorked() {
        return this._writableState ? this._writableState.corked : 0;
    }
    get writableLength() {
        return this._writableState && this._writableState.length;
    }
};
var duplex_default = Duplex;
var kCallback = Symbol("kCallback");
var Transform = class extends duplex_default {
    constructor(options){
        super(options);
        this._read = ()=>{
            if (this[kCallback]) {
                const callback = this[kCallback];
                this[kCallback] = null;
                callback();
            }
        };
        this._write = (chunk, encoding, callback)=>{
            const rState = this._readableState;
            const wState = this._writableState;
            const length = rState.length;
            this._transform(chunk, encoding, (err, val)=>{
                if (err) {
                    callback(err);
                    return;
                }
                if (val != null) {
                    this.push(val);
                }
                if (wState.ended || length === rState.length || rState.length < rState.highWaterMark || rState.length === 0) {
                    callback();
                } else {
                    this[kCallback] = callback;
                }
            });
        };
        this._readableState.sync = false;
        this[kCallback] = null;
        if (options) {
            if (typeof options.transform === "function") {
                this._transform = options.transform;
            }
            if (typeof options.flush === "function") {
                this._flush = options.flush;
            }
        }
        this.on("prefinish", function() {
            if (typeof this._flush === "function" && !this.destroyed) {
                this._flush((er, data)=>{
                    if (er) {
                        this.destroy(er);
                        return;
                    }
                    if (data != null) {
                        this.push(data);
                    }
                    this.push(null);
                });
            } else {
                this.push(null);
            }
        });
    }
    _transform(_chunk, _encoding, _callback) {
        throw new ERR_METHOD_NOT_IMPLEMENTED("_transform()");
    }
};
var PassThrough = class extends Transform {
    constructor(options){
        super(options);
    }
    _transform(chunk, _encoding, cb) {
        cb(null, chunk);
    }
};
function destroyer2(stream, reading, writing, callback) {
    callback = once(callback);
    let finished2 = false;
    stream.on("close", ()=>{
        finished2 = true;
    });
    eos(stream, {
        readable: reading,
        writable: writing
    }, (err)=>{
        finished2 = !err;
        const rState = stream?._readableState;
        if (err && err.code === "ERR_STREAM_PREMATURE_CLOSE" && reading && rState?.ended && !rState?.errored && !rState?.errorEmitted) {
            stream.once("end", callback).once("error", callback);
        } else {
            callback(err);
        }
    });
    return (err)=>{
        if (finished2) return;
        finished2 = true;
        destroyer(stream, err);
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
}
function popCallback(streams) {
    if (typeof streams[streams.length - 1] !== "function") {
        throw new ERR_INVALID_CALLBACK(streams[streams.length - 1]);
    }
    return streams.pop();
}
function isReadable2(obj) {
    return !!(obj && typeof obj.pipe === "function");
}
function isWritable2(obj) {
    return !!(obj && typeof obj.write === "function");
}
function isStream(obj) {
    return isReadable2(obj) || isWritable2(obj);
}
function isIterable(obj, isAsync) {
    if (!obj) return false;
    if (isAsync === true) return typeof obj[Symbol.asyncIterator] === "function";
    if (isAsync === false) return typeof obj[Symbol.iterator] === "function";
    return typeof obj[Symbol.asyncIterator] === "function" || typeof obj[Symbol.iterator] === "function";
}
function makeAsyncIterable(val) {
    if (isIterable(val)) {
        return val;
    } else if (isReadable2(val)) {
        return fromReadable(val);
    }
    throw new ERR_INVALID_ARG_TYPE("val", [
        "Readable",
        "Iterable",
        "AsyncIterable", 
    ], val);
}
async function* fromReadable(val) {
    yield* async_iterator_default(val);
}
async function pump(iterable, writable, finish4) {
    let error = null;
    try {
        for await (const chunk of iterable){
            if (!writable.write(chunk)) {
                if (writable.destroyed) return;
                await once2(writable, "drain");
            }
        }
        writable.end();
    } catch (err) {
        if (err instanceof NodeErrorAbstraction) {
            error = err;
        }
    } finally{
        finish4(error);
    }
}
function pipeline(...args) {
    const callback = once(popCallback(args));
    let streams;
    if (args.length > 1) {
        streams = args;
    } else {
        throw new ERR_MISSING_ARGS("streams");
    }
    let error;
    let value;
    const destroys = [];
    let finishCount = 0;
    function finish4(err) {
        const __final = --finishCount === 0;
        if (err && (!error || error.code === "ERR_STREAM_PREMATURE_CLOSE")) {
            error = err;
        }
        if (!error && !__final) {
            return;
        }
        while(destroys.length){
            destroys.shift()(error);
        }
        if (__final) {
            callback(error, value);
        }
    }
    let ret;
    for(let i = 0; i < streams.length; i++){
        const stream = streams[i];
        const reading = i < streams.length - 1;
        const writing = i > 0;
        if (isStream(stream)) {
            finishCount++;
            destroys.push(destroyer2(stream, reading, writing, finish4));
        }
        if (i === 0) {
            if (typeof stream === "function") {
                ret = stream();
                if (!isIterable(ret)) {
                    throw new ERR_INVALID_RETURN_VALUE("Iterable, AsyncIterable or Stream", "source", ret);
                }
            } else if (isIterable(stream) || isReadable2(stream)) {
                ret = stream;
            } else {
                throw new ERR_INVALID_ARG_TYPE("source", [
                    "Stream",
                    "Iterable",
                    "AsyncIterable",
                    "Function", 
                ], stream);
            }
        } else if (typeof stream === "function") {
            ret = makeAsyncIterable(ret);
            ret = stream(ret);
            if (reading) {
                if (!isIterable(ret, true)) {
                    throw new ERR_INVALID_RETURN_VALUE("AsyncIterable", `transform[${i - 1}]`, ret);
                }
            } else {
                const pt = new PassThrough({
                    objectMode: true
                });
                if (ret instanceof Promise) {
                    ret.then((val)=>{
                        value = val;
                        pt.end(val);
                    }, (err)=>{
                        pt.destroy(err);
                    });
                } else if (isIterable(ret, true)) {
                    finishCount++;
                    pump(ret, pt, finish4);
                } else {
                    throw new ERR_INVALID_RETURN_VALUE("AsyncIterable or Promise", "destination", ret);
                }
                ret = pt;
                finishCount++;
                destroys.push(destroyer2(ret, false, true, finish4));
            }
        } else if (isStream(stream)) {
            if (isReadable2(ret)) {
                ret.pipe(stream);
            } else {
                ret = makeAsyncIterable(ret);
                finishCount++;
                pump(ret, stream, finish4);
            }
            ret = stream;
        } else {
            const name = reading ? `transform[${i - 1}]` : "destination";
            throw new ERR_INVALID_ARG_TYPE(name, [
                "Stream",
                "Function"
            ], ret);
        }
    }
    return ret;
}
var promises_exports = {
};
__export(promises_exports, {
    finished: ()=>finished
    ,
    pipeline: ()=>pipeline2
});
function pipeline2(...streams) {
    return new Promise((resolve, reject)=>{
        pipeline(...streams, (err, value)=>{
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        });
    });
}
function finished(stream, opts) {
    return new Promise((resolve, reject)=>{
        eos(stream, opts || null, (err)=>{
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
stream_default.Readable = readable_default;
stream_default.Writable = writable_default;
stream_default.Duplex = duplex_default;
stream_default.Transform = Transform;
stream_default.PassThrough = PassThrough;
stream_default.pipeline = pipeline;
stream_default.finished = eos;
stream_default.promises = promises_exports;
stream_default.Stream = stream_default;
var stream_default2 = stream_default;
var { _isUint8Array , _uint8ArrayToBuffer  } = stream_default;
var _1 = Object.create;
var S1 = Object.defineProperty;
var g2 = Object.getOwnPropertyDescriptor;
var j5 = Object.getOwnPropertyNames;
var z2 = Object.getPrototypeOf, A = Object.prototype.hasOwnProperty;
var h4 = (e)=>S1(e, "__esModule", {
        value: !0
    })
;
var P = (e, o)=>()=>(o || e((o = {
            exports: {
            }
        }).exports, o), o.exports)
;
var L = (e, o, x)=>{
    if (o && typeof o == "object" || typeof o == "function") for (let s of j5(o))!A.call(e, s) && s !== "default" && S1(e, s, {
        get: ()=>o[s]
        ,
        enumerable: !(x = g2(o, s)) || x.enumerable
    });
    return e;
}, v1 = (e)=>L(h4(S1(e != null ? _1(z2(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var E1 = P((r)=>{
    "use strict";
    var t = typeof Symbol == "function" && Symbol.for, b = t ? Symbol.for("react.element") : 60103, $ = t ? Symbol.for("react.portal") : 60106, c = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, f = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, C = t ? Symbol.for("react.async_mode") : 60111, y = t ? Symbol.for("react.concurrent_mode") : 60111, m = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, R = t ? Symbol.for("react.suspense_list") : 60120, d = t ? Symbol.for("react.memo") : 60115, a = t ? Symbol.for("react.lazy") : 60116, q = t ? Symbol.for("react.block") : 60121, O = t ? Symbol.for("react.fundamental") : 60117, V = t ? Symbol.for("react.responder") : 60118, k = t ? Symbol.for("react.scope") : 60119;
    function n(e) {
        if (typeof e == "object" && e !== null) {
            var o = e.$$typeof;
            switch(o){
                case b:
                    switch(e = e.type, e){
                        case C:
                        case y:
                        case c:
                        case f:
                        case i:
                        case p:
                            return e;
                        default:
                            switch(e = e && e.$$typeof, e){
                                case l:
                                case m:
                                case a:
                                case d:
                                case u:
                                    return e;
                                default:
                                    return o;
                            }
                    }
                case $:
                    return o;
            }
        }
    }
    function w(e) {
        return n(e) === y;
    }
    r.AsyncMode = C;
    r.ConcurrentMode = y;
    r.ContextConsumer = l;
    r.ContextProvider = u;
    r.Element = b;
    r.ForwardRef = m;
    r.Fragment = c;
    r.Lazy = a;
    r.Memo = d;
    r.Portal = $;
    r.Profiler = f;
    r.StrictMode = i;
    r.Suspense = p;
    r.isAsyncMode = function(e) {
        return w(e) || n(e) === C;
    };
    r.isConcurrentMode = w;
    r.isContextConsumer = function(e) {
        return n(e) === l;
    };
    r.isContextProvider = function(e) {
        return n(e) === u;
    };
    r.isElement = function(e) {
        return typeof e == "object" && e !== null && e.$$typeof === b;
    };
    r.isForwardRef = function(e) {
        return n(e) === m;
    };
    r.isFragment = function(e) {
        return n(e) === c;
    };
    r.isLazy = function(e) {
        return n(e) === a;
    };
    r.isMemo = function(e) {
        return n(e) === d;
    };
    r.isPortal = function(e) {
        return n(e) === $;
    };
    r.isProfiler = function(e) {
        return n(e) === f;
    };
    r.isStrictMode = function(e) {
        return n(e) === i;
    };
    r.isSuspense = function(e) {
        return n(e) === p;
    };
    r.isValidElementType = function(e) {
        return typeof e == "string" || typeof e == "function" || e === c || e === y || e === f || e === i || e === p || e === R || typeof e == "object" && e !== null && (e.$$typeof === a || e.$$typeof === d || e.$$typeof === u || e.$$typeof === l || e.$$typeof === m || e.$$typeof === O || e.$$typeof === V || e.$$typeof === k || e.$$typeof === q);
    };
    r.typeOf = n;
});
var M = P((G, F)=>{
    "use strict";
    F.exports = E1();
});
var N = v1(M()), T1 = v1(M()), { AsyncMode: H1 , ConcurrentMode: I , ContextConsumer: J2 , ContextProvider: K1 , Element: Q1 , ForwardRef: U , Fragment: W1 , Lazy: X , Memo: Y1 , Portal: Z1 , Profiler: ee1 , StrictMode: re , Suspense: te1 , isAsyncMode: oe2 , isConcurrentMode: ne1 , isContextConsumer: se , isContextProvider: ce1 , isElement: ie1 , isForwardRef: fe2 , isFragment: ue1 , isLazy: le1 , isMemo: ye2 , isPortal: me2 , isProfiler: pe2 , isStrictMode: de2 , isSuspense: ae1 , isValidElementType: Se1 , typeOf: be1  } = N;
var export_default8 = T1.default;
var p1 = Object.create;
var u1 = Object.defineProperty;
var w1 = Object.getOwnPropertyDescriptor;
var g3 = Object.getOwnPropertyNames;
var o1 = Object.getPrototypeOf, q = Object.prototype.hasOwnProperty;
var P1 = (e)=>u1(e, "__esModule", {
        value: !0
    })
;
var k1 = (e, r)=>()=>(r || e((r = {
            exports: {
            }
        }).exports, r), r.exports)
;
var E2 = (e, r, t)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let f of g3(r))!q.call(e, f) && f !== "default" && u1(e, f, {
        get: ()=>r[f]
        ,
        enumerable: !(t = w1(r, f)) || t.enumerable
    });
    return e;
}, H2 = (e)=>E2(P1(u1(e != null ? p1(o1(e)) : {
    }, "default", e && e.__esModule && "default" in e ? {
        get: ()=>e.default
        ,
        enumerable: !0
    } : {
        value: e,
        enumerable: !0
    })), e)
;
var O2 = k1((F, y)=>{
    y.exports = function(r, t, f, i) {
        var l = f ? f.call(i, r, t) : void 0;
        if (l !== void 0) return !!l;
        if (r === t) return !0;
        if (typeof r != "object" || !r || typeof t != "object" || !t) return !1;
        var n = Object.keys(r), c = Object.keys(t);
        if (n.length !== c.length) return !1;
        for(var d = Object.prototype.hasOwnProperty.bind(t), s = 0; s < n.length; s++){
            var a = n[s];
            if (!d(a)) return !1;
            var v = r[a], h = t[a];
            if (l = f ? f.call(i, v, h, a) : void 0, l === !1 || l === void 0 && v !== h) return !1;
        }
        return !0;
    };
});
var z4 = H2(O2());
var export_default9 = z4.default;
function ue2(W) {
    function M(t, r, c, n, e) {
        for(var h = 0, a = 0, b = 0, u = 0, w, i, C = 0, z = 0, o, A = o = w = 0, l = 0, k = 0, S = 0, d = 0, L = c.length, D = L - 1, m, s = "", f = "", F = "", G = "", O; l < L;){
            if (i = c.charCodeAt(l), l === D && a + u + b + h !== 0 && (a !== 0 && (i = a === 47 ? 10 : 47), u = b = h = 0, L++, D++), a + u + b + h === 0) {
                if (l === D && (0 < k && (s = s.replace(R, "")), 0 < s.trim().length)) {
                    switch(i){
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;
                        default:
                            s += c.charAt(l);
                    }
                    i = 59;
                }
                switch(i){
                    case 123:
                        for(s = s.trim(), w = s.charCodeAt(0), o = 1, d = ++l; l < L;){
                            switch(i = c.charCodeAt(l)){
                                case 123:
                                    o++;
                                    break;
                                case 125:
                                    o--;
                                    break;
                                case 47:
                                    switch(i = c.charCodeAt(l + 1)){
                                        case 42:
                                        case 47:
                                            e: {
                                                for(A = l + 1; A < D; ++A)switch(c.charCodeAt(A)){
                                                    case 47:
                                                        if (i === 42 && c.charCodeAt(A - 1) === 42 && l + 2 !== A) {
                                                            l = A + 1;
                                                            break e;
                                                        }
                                                        break;
                                                    case 10:
                                                        if (i === 47) {
                                                            l = A + 1;
                                                            break e;
                                                        }
                                                }
                                                l = A;
                                            }
                                    }
                                    break;
                                case 91:
                                    i++;
                                case 40:
                                    i++;
                                case 34:
                                case 39:
                                    for(; (l++) < D && c.charCodeAt(l) !== i;);
                            }
                            if (o === 0) break;
                            l++;
                        }
                        switch(o = c.substring(d, l), w === 0 && (w = (s = s.replace(ee, "").trim()).charCodeAt(0)), w){
                            case 64:
                                switch(0 < k && (s = s.replace(R, "")), i = s.charCodeAt(1), i){
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        k = r;
                                        break;
                                    default:
                                        k = X;
                                }
                                if (o = M(r, k, o, i, e + 1), d = o.length, 0 < g && (k = y(X, s, S), O = j(3, o, k, r, x, v, d, i, e, n), s = k.join(""), O !== void 0 && (d = (o = O.trim()).length) === 0 && (i = 0, o = "")), 0 < d) switch(i){
                                    case 115:
                                        s = s.replace(ie, q);
                                    case 100:
                                    case 109:
                                    case 45:
                                        o = s + "{" + o + "}";
                                        break;
                                    case 107:
                                        s = s.replace(ce, "$1 $2"), o = s + "{" + o + "}", o = p === 1 || p === 2 && E("@" + o, 3) ? "@-webkit-" + o + "@" + o : "@" + o;
                                        break;
                                    default:
                                        o = s + o, n === 112 && (o = (f += o, ""));
                                }
                                else o = "";
                                break;
                            default:
                                o = M(r, y(r, s, S), o, n, e + 1);
                        }
                        F += o, o = S = k = A = w = 0, s = "", i = c.charCodeAt(++l);
                        break;
                    case 125:
                    case 59:
                        if (s = (0 < k ? s.replace(R, "") : s).trim(), 1 < (d = s.length)) switch(A === 0 && (w = s.charCodeAt(0), w === 45 || 96 < w && 123 > w) && (d = (s = s.replace(" ", ":")).length), 0 < g && (O = j(1, s, r, t, x, v, f.length, n, e, n)) !== void 0 && (d = (s = O.trim()).length) === 0 && (s = "\0\0"), w = s.charCodeAt(0), i = s.charCodeAt(1), w){
                            case 0:
                                break;
                            case 64:
                                if (i === 105 || i === 99) {
                                    G += s + c.charAt(l);
                                    break;
                                }
                            default:
                                s.charCodeAt(d - 1) !== 58 && (f += N(s, w, i, s.charCodeAt(2)));
                        }
                        S = k = A = w = 0, s = "", i = c.charCodeAt(++l);
                }
            }
            switch(i){
                case 13:
                case 10:
                    a === 47 ? a = 0 : 1 + w === 0 && n !== 107 && 0 < s.length && (k = 1, s += "\0"), 0 < g * J && j(0, s, r, t, x, v, f.length, n, e, n), v = 1, x++;
                    break;
                case 59:
                case 125:
                    if (a + u + b + h === 0) {
                        v++;
                        break;
                    }
                default:
                    switch(v++, m = c.charAt(l), i){
                        case 9:
                        case 32:
                            if (u + h + a === 0) switch(C){
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    m = "";
                                    break;
                                default:
                                    i !== 32 && (m = " ");
                            }
                            break;
                        case 0:
                            m = "\\0";
                            break;
                        case 12:
                            m = "\\f";
                            break;
                        case 11:
                            m = "\\v";
                            break;
                        case 38:
                            u + a + h === 0 && (k = S = 1, m = "\f" + m);
                            break;
                        case 108:
                            if (u + a + h + $ === 0 && 0 < A) switch(l - A){
                                case 2:
                                    C === 112 && c.charCodeAt(l - 3) === 58 && ($ = C);
                                case 8:
                                    z === 111 && ($ = z);
                            }
                            break;
                        case 58:
                            u + a + h === 0 && (A = l);
                            break;
                        case 44:
                            a + b + u + h === 0 && (k = 1, m += "\r");
                            break;
                        case 34:
                        case 39:
                            a === 0 && (u = u === i ? 0 : u === 0 ? i : u);
                            break;
                        case 91:
                            u + a + b === 0 && h++;
                            break;
                        case 93:
                            u + a + b === 0 && h--;
                            break;
                        case 41:
                            u + a + h === 0 && b--;
                            break;
                        case 40:
                            if (u + a + h === 0) {
                                if (w === 0) switch(2 * C + 3 * z){
                                    case 533:
                                        break;
                                    default:
                                        w = 1;
                                }
                                b++;
                            }
                            break;
                        case 64:
                            a + b + u + h + A + o === 0 && (o = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < u + h + b)) switch(a){
                                case 0:
                                    switch(2 * i + 3 * c.charCodeAt(l + 1)){
                                        case 235:
                                            a = 47;
                                            break;
                                        case 220:
                                            d = l, a = 42;
                                    }
                                    break;
                                case 42:
                                    i === 47 && C === 42 && d + 2 !== l && (c.charCodeAt(d + 2) === 33 && (f += c.substring(d, l + 1)), m = "", a = 0);
                            }
                    }
                    a === 0 && (s += m);
            }
            z = C, C = i, l++;
        }
        if (d = f.length, 0 < d) {
            if (k = r, 0 < g && (O = j(2, f, k, t, x, v, d, n, e, n), O !== void 0 && (f = O).length === 0)) return G + f + F;
            if (f = k.join(",") + "{" + f + "}", p * $ != 0) {
                switch(p !== 2 || E(f, 2) || ($ = 0), $){
                    case 111:
                        f = f.replace(se, ":-moz-$1") + f;
                        break;
                    case 112:
                        f = f.replace(U, "::-webkit-input-$1") + f.replace(U, "::-moz-$1") + f.replace(U, ":-ms-input-$1") + f;
                }
                $ = 0;
            }
        }
        return G + f + F;
    }
    function y(t, r, c) {
        var n = r.trim().split(te);
        r = n;
        var e = n.length, h = t.length;
        switch(h){
            case 0:
            case 1:
                var a = 0;
                for(t = h === 0 ? "" : t[0] + " "; a < e; ++a)r[a] = B(t, r[a], c).trim();
                break;
            default:
                var b = a = 0;
                for(r = []; a < e; ++a)for(var u = 0; u < h; ++u)r[b++] = B(t[u] + " ", n[a], c).trim();
        }
        return r;
    }
    function B(t, r, c) {
        var n = r.charCodeAt(0);
        switch(33 > n && (n = (r = r.trim()).charCodeAt(0)), n){
            case 38:
                return r.replace(T, "$1" + t.trim());
            case 58:
                return t.trim() + r.replace(T, "$1" + t.trim());
            default:
                if (0 < 1 * c && 0 < r.indexOf("\f")) return r.replace(T, (t.charCodeAt(0) === 58 ? "" : "$1") + t.trim());
        }
        return t + r;
    }
    function N(t, r, c, n) {
        var e = t + ";", h = 2 * r + 3 * c + 4 * n;
        if (h === 944) {
            t = e.indexOf(":", 9) + 1;
            var a = e.substring(t, e.length - 1).trim();
            return a = e.substring(0, t).trim() + a + ";", p === 1 || p === 2 && E(a, 1) ? "-webkit-" + a + a : a;
        }
        if (p === 0 || p === 2 && !E(e, 1)) return e;
        switch(h){
            case 1015:
                return e.charCodeAt(10) === 97 ? "-webkit-" + e + e : e;
            case 951:
                return e.charCodeAt(3) === 116 ? "-webkit-" + e + e : e;
            case 963:
                return e.charCodeAt(5) === 110 ? "-webkit-" + e + e : e;
            case 1009:
                if (e.charCodeAt(4) !== 100) break;
            case 969:
            case 942:
                return "-webkit-" + e + e;
            case 978:
                return "-webkit-" + e + "-moz-" + e + e;
            case 1019:
            case 983:
                return "-webkit-" + e + "-moz-" + e + "-ms-" + e + e;
            case 883:
                if (e.charCodeAt(8) === 45) return "-webkit-" + e + e;
                if (0 < e.indexOf("image-set(", 11)) return e.replace(he, "$1-webkit-$2") + e;
                break;
            case 932:
                if (e.charCodeAt(4) === 45) switch(e.charCodeAt(5)){
                    case 103:
                        return "-webkit-box-" + e.replace("-grow", "") + "-webkit-" + e + "-ms-" + e.replace("grow", "positive") + e;
                    case 115:
                        return "-webkit-" + e + "-ms-" + e.replace("shrink", "negative") + e;
                    case 98:
                        return "-webkit-" + e + "-ms-" + e.replace("basis", "preferred-size") + e;
                }
                return "-webkit-" + e + "-ms-" + e + e;
            case 964:
                return "-webkit-" + e + "-ms-flex-" + e + e;
            case 1023:
                if (e.charCodeAt(8) !== 99) break;
                return a = e.substring(e.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + a + "-webkit-" + e + "-ms-flex-pack" + a + e;
            case 1005:
                return ae.test(e) ? e.replace(K, ":-webkit-") + e.replace(K, ":-moz-") + e : e;
            case 1000:
                switch(a = e.substring(13).trim(), r = a.indexOf("-") + 1, a.charCodeAt(0) + a.charCodeAt(r)){
                    case 226:
                        a = e.replace(V, "tb");
                        break;
                    case 232:
                        a = e.replace(V, "tb-rl");
                        break;
                    case 220:
                        a = e.replace(V, "lr");
                        break;
                    default:
                        return e;
                }
                return "-webkit-" + e + "-ms-" + a + e;
            case 1017:
                if (e.indexOf("sticky", 9) === -1) break;
            case 975:
                switch(r = (e = t).length - 10, a = (e.charCodeAt(r) === 33 ? e.substring(0, r) : e).substring(t.indexOf(":", 7) + 1).trim(), h = a.charCodeAt(0) + (a.charCodeAt(7) | 0)){
                    case 203:
                        if (111 > a.charCodeAt(8)) break;
                    case 115:
                        e = e.replace(a, "-webkit-" + a) + ";" + e;
                        break;
                    case 207:
                    case 102:
                        e = e.replace(a, "-webkit-" + (102 < h ? "inline-" : "") + "box") + ";" + e.replace(a, "-webkit-" + a) + ";" + e.replace(a, "-ms-" + a + "box") + ";" + e;
                }
                return e + ";";
            case 938:
                if (e.charCodeAt(5) === 45) switch(e.charCodeAt(6)){
                    case 105:
                        return a = e.replace("-items", ""), "-webkit-" + e + "-webkit-box-" + a + "-ms-flex-" + a + e;
                    case 115:
                        return "-webkit-" + e + "-ms-flex-item-" + e.replace(I, "") + e;
                    default:
                        return "-webkit-" + e + "-ms-flex-line-pack" + e.replace("align-content", "").replace(I, "") + e;
                }
                break;
            case 973:
            case 989:
                if (e.charCodeAt(3) !== 45 || e.charCodeAt(4) === 122) break;
            case 931:
            case 953:
                if (le.test(t) === !0) return (a = t.substring(t.indexOf(":") + 1)).charCodeAt(0) === 115 ? N(t.replace("stretch", "fill-available"), r, c, n).replace(":fill-available", ":stretch") : e.replace(a, "-webkit-" + a) + e.replace(a, "-moz-" + a.replace("fill-", "")) + e;
                break;
            case 962:
                if (e = "-webkit-" + e + (e.charCodeAt(5) === 102 ? "-ms-" + e : "") + e, c + n === 211 && e.charCodeAt(13) === 105 && 0 < e.indexOf("transform", 10)) return e.substring(0, e.indexOf(";", 27) + 1).replace(re, "$1-webkit-$2") + e;
        }
        return e;
    }
    function E(t, r) {
        var c = t.indexOf(r === 1 ? ":" : "{"), n = t.substring(0, r !== 3 ? c : 10);
        return c = t.substring(c + 1, t.length - 1), Z(r !== 2 ? n : n.replace(oe, "$1"), c, r);
    }
    function q(t, r) {
        var c = N(r, r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2));
        return c !== r + ";" ? c.replace(ne, " or ($1)").substring(4) : "(" + r + ")";
    }
    function j(t, r, c, n, e, h, a, b, u, w) {
        for(var i = 0, C = r, z; i < g; ++i)switch(z = Y[i].call(H, t, C, c, n, e, h, a, b, u, w)){
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                C = z;
        }
        if (C !== r) return C;
    }
    function P(t) {
        switch(t){
            case void 0:
            case null:
                g = Y.length = 0;
                break;
            default:
                if (typeof t == "function") Y[g++] = t;
                else if (typeof t == "object") for(var r = 0, c = t.length; r < c; ++r)P(t[r]);
                else J = !!t | 0;
        }
        return P;
    }
    function Q(t) {
        return t = t.prefix, t !== void 0 && (Z = null, t ? typeof t != "function" ? p = 1 : (p = 2, Z = t) : p = 0), Q;
    }
    function H(t, r) {
        var c = t;
        if (33 > c.charCodeAt(0) && (c = c.trim()), _ = c, c = [
            _
        ], 0 < g) {
            var n = j(-1, r, c, c, x, v, 0, 0, 0, 0);
            n !== void 0 && typeof n == "string" && (r = n);
        }
        var e = M(X, c, r, 0, 0);
        return 0 < g && (n = j(-2, e, c, c, x, v, e.length, 0, 0, 0), n !== void 0 && (e = n)), _ = "", $ = 0, v = x = 1, e;
    }
    var ee = /^\0+/g, R = /[\0\r\f]/g, K = /: */g, ae = /zoo|gra/, re = /([,: ])(transform)/g, te = /,\r+?/g, T = /([\t\r\n ])*\f?&/g, ce = /@(k\w+)\s*(\S*)\s*/, U = /::(place)/g, se = /:(read-only)/g, V = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, ne = /([\s\S]*?);/g, I = /-self|flex-/g, oe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, le = /stretch|:\s*\w+\-(?:conte|avail)/, he = /([^-])(image-set\()/, v = 1, x = 1, $ = 0, p = 1, X = [], Y = [], g = 0, Z = null, J = 0, _ = "";
    return H.use = P, H.set = Q, W !== void 0 && Q(W), H;
}
var fe3 = ue2;
var o2 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}, r1 = o2;
function u2(t) {
    var n = {
    };
    return function(e) {
        return n[e] === void 0 && (n[e] = t(e)), n[e];
    };
}
var f1 = u2;
var i1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, r2 = f1(function(e) {
    return i1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), a1 = r2;
var N1 = Object.create;
var f2 = Object.defineProperty;
var b1 = Object.getOwnPropertyDescriptor;
var j6 = Object.getOwnPropertyNames;
var w2 = Object.getPrototypeOf, A1 = Object.prototype.hasOwnProperty;
var x1 = (r)=>f2(r, "__esModule", {
        value: !0
    })
;
var I1 = (r, e)=>()=>(e || r((e = {
            exports: {
            }
        }).exports, e), e.exports)
;
var R = (r, e, a)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let t of j6(e))!A1.call(r, t) && t !== "default" && f2(r, t, {
        get: ()=>e[t]
        ,
        enumerable: !(a = b1(e, t)) || a.enumerable
    });
    return r;
}, _2 = (r)=>R(x1(f2(r != null ? N1(w2(r)) : {
    }, "default", r && r.__esModule && "default" in r ? {
        get: ()=>r.default
        ,
        enumerable: !0
    } : {
        value: r,
        enumerable: !0
    })), r)
;
var d1 = I1((Y, l)=>{
    "use strict";
    var y = export_default8, $ = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }, m = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }, n = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, c = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }, i = {
    };
    i[y.ForwardRef] = n;
    i[y.Memo] = c;
    function T(r) {
        return y.isMemo(r) ? c : i[r.$$typeof] || $;
    }
    var E = Object.defineProperty, F = Object.getOwnPropertyNames, O = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, M = Object.getPrototypeOf, P = Object.prototype;
    function S(r, e, a) {
        if (typeof e != "string") {
            if (P) {
                var t = M(e);
                t && t !== P && S(r, t, a);
            }
            var p = F(e);
            O && (p = p.concat(O(e)));
            for(var s = T(r), v = T(e), o = 0; o < p.length; ++o){
                var u = p[o];
                if (!m[u] && !(a && a[u]) && !(v && v[u]) && !(s && s[u])) {
                    var g = h(e, u);
                    try {
                        E(r, u, g);
                    } catch (q) {
                    }
                }
            }
        }
        return r;
    }
    l.exports = S;
});
var W2 = _2(d1());
var export_default10 = W2.default;
process.env.NODE_ENV = "production";
function b2() {
    return (b2 = Object.assign || function(e) {
        for(var r = 1; r < arguments.length; r++){
            var t = arguments[r];
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
    }).apply(this, arguments);
}
var Re1 = function(e, r) {
    for(var t = [
        e[0]
    ], n = 0, o3 = r.length; n < o3; n += 1)t.push(r[n], e[n + 1]);
    return t;
}, ce2 = function(e) {
    return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !be1(e);
}, Z2 = Object.freeze([]), O3 = Object.freeze({
});
function L1(e) {
    return typeof e == "function";
}
function ue3(e) {
    return e.displayName || e.name || "Component";
}
function le2(e) {
    return e && typeof e.styledComponentId == "string";
}
var R1 = typeof process != "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", K2 = typeof window != "undefined" && "HTMLElement" in window, st = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : !1), it = {
};
function N3(e) {
    for(var r3 = arguments.length, t = new Array(r3 > 1 ? r3 - 1 : 0), n = 1; n < r3; n++)t[n - 1] = arguments[n];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var at = function() {
    function e(t) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
    }
    var r3 = e.prototype;
    return r3.indexOfGroup = function(t) {
        for(var n = 0, o = 0; o < t; o++)n += this.groupSizes[o];
        return n;
    }, r3.insertRules = function(t, n) {
        if (t >= this.groupSizes.length) {
            for(var o = this.groupSizes, s = o.length, i = s; t >= i;)(i <<= 1) < 0 && N3(16, "" + t);
            this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
            for(var a = s; a < i; a++)this.groupSizes[a] = 0;
        }
        for(var d = this.indexOfGroup(t + 1), c = 0, m = n.length; c < m; c++)this.tag.insertRule(d, n[c]) && (this.groupSizes[t]++, d++);
    }, r3.clearGroup = function(t) {
        if (t < this.length) {
            var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
            this.groupSizes[t] = 0;
            for(var i = o; i < s; i++)this.tag.deleteRule(o);
        }
    }, r3.getGroup = function(t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for(var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, a = s; a < i; a++)n += this.tag.getRule(a) + `/*!sc*/
`;
        return n;
    }, e;
}(), Q2 = new Map, ee2 = new Map, H3 = 1, te2 = function(e) {
    if (Q2.has(e)) return Q2.get(e);
    for(; ee2.has(H3);)H3++;
    var r3 = H3++;
    return Q2.set(e, r3), ee2.set(r3, e), r3;
}, ct = function(e) {
    return ee2.get(e);
}, ut = function(e, r) {
    r >= H3 && (H3 = r + 1), Q2.set(e, r), ee2.set(r, e);
}, lt = "style[" + R1 + '][data-styled-version="5.3.3"]', dt = new RegExp("^" + R1 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ht = function(e, r, t) {
    for(var n, o3 = t.split(","), s1 = 0, i2 = o3.length; s1 < i2; s1++)(n = o3[s1]) && e.registerName(r, n);
}, pt = function(e, r) {
    for(var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o3 = 0, s1 = t.length; o3 < s1; o3++){
        var i = t[o3].trim();
        if (i) {
            var a = i.match(dt);
            if (a) {
                var d = 0 | parseInt(a[1], 10), c = a[2];
                d !== 0 && (ut(c, d), ht(e, c, a[3]), e.getTag().insertRules(d, n)), n.length = 0;
            } else n.push(i);
        }
    }
}, de3 = function() {
    return typeof window != "undefined" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
}, De1 = function(e) {
    var r3 = document.head, t = e || r3, n = document.createElement("style"), o3 = function(a) {
        for(var d = a.childNodes, c = d.length; c >= 0; c--){
            var m = d[c];
            if (m && m.nodeType === 1 && m.hasAttribute(R1)) return m;
        }
    }(t), s1 = o3 !== void 0 ? o3.nextSibling : null;
    n.setAttribute(R1, "active"), n.setAttribute("data-styled-version", "5.3.3");
    var i2 = de3();
    return i2 && n.setAttribute("nonce", i2), t.insertBefore(n, s1), n;
}, ft = function() {
    function e(t) {
        var n = this.element = De1(t);
        n.appendChild(document.createTextNode("")), this.sheet = (function(o) {
            if (o.sheet) return o.sheet;
            for(var s = document.styleSheets, i = 0, a = s.length; i < a; i++){
                var d = s[i];
                if (d.ownerNode === o) return d;
            }
            N3(17);
        })(n), this.length = 0;
    }
    var r3 = e.prototype;
    return r3.insertRule = function(t, n) {
        try {
            return this.sheet.insertRule(n, t), this.length++, !0;
        } catch (o) {
            return !1;
        }
    }, r3.deleteRule = function(t) {
        this.sheet.deleteRule(t), this.length--;
    }, r3.getRule = function(t) {
        var n = this.sheet.cssRules[t];
        return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
    }, e;
}(), mt = function() {
    function e(t) {
        var n = this.element = De1(t);
        this.nodes = n.childNodes, this.length = 0;
    }
    var r3 = e.prototype;
    return r3.insertRule = function(t, n) {
        if (t <= this.length && t >= 0) {
            var o = document.createTextNode(n), s = this.nodes[t];
            return this.element.insertBefore(o, s || null), this.length++, !0;
        }
        return !1;
    }, r3.deleteRule = function(t) {
        this.element.removeChild(this.nodes[t]), this.length--;
    }, r3.getRule = function(t) {
        return t < this.length ? this.nodes[t].textContent : "";
    }, e;
}(), yt = function() {
    function e(t) {
        this.rules = [], this.length = 0;
    }
    var r3 = e.prototype;
    return r3.insertRule = function(t, n) {
        return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
    }, r3.deleteRule = function(t) {
        this.rules.splice(t, 1), this.length--;
    }, r3.getRule = function(t) {
        return t < this.length ? this.rules[t] : "";
    }, e;
}(), Te1 = K2, vt = {
    isServer: !K2,
    useCSSOMInjection: !st
}, F = function() {
    function e(t, n, o) {
        t === void 0 && (t = O3), n === void 0 && (n = {
        }), this.options = b2({
        }, vt, {
        }, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && K2 && Te1 && (Te1 = !1, (function(s) {
            for(var i = document.querySelectorAll(lt), a = 0, d = i.length; a < d; a++){
                var c = i[a];
                c && c.getAttribute(R1) !== "active" && (pt(s, c), c.parentNode && c.parentNode.removeChild(c));
            }
        })(this));
    }
    e.registerId = function(t) {
        return te2(t);
    };
    var r3 = e.prototype;
    return r3.reconstructWithOptions = function(t, n) {
        return n === void 0 && (n = !0), new e(b2({
        }, this.options, {
        }, t), this.gs, n && this.names || void 0);
    }, r3.allocateGSInstance = function(t) {
        return this.gs[t] = (this.gs[t] || 0) + 1;
    }, r3.getTag = function() {
        return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new yt(i) : s ? new ft(i) : new mt(i), new at(t)));
        var t, n, o, s, i;
    }, r3.hasNameForId = function(t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
    }, r3.registerName = function(t, n) {
        if (te2(t), this.names.has(t)) this.names.get(t).add(n);
        else {
            var o = new Set;
            o.add(n), this.names.set(t, o);
        }
    }, r3.insertRules = function(t, n, o) {
        this.registerName(t, n), this.getTag().insertRules(te2(t), o);
    }, r3.clearNames = function(t) {
        this.names.has(t) && this.names.get(t).clear();
    }, r3.clearRules = function(t) {
        this.getTag().clearGroup(te2(t)), this.clearNames(t);
    }, r3.clearTag = function() {
        this.tag = void 0;
    }, r3.toString = function() {
        return (function(t) {
            for(var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++){
                var a = ct(i);
                if (a !== void 0) {
                    var d = t.names.get(a), c = n.getGroup(i);
                    if (d && c && d.size) {
                        var m = R1 + ".g" + i + '[id="' + a + '"]', h = "";
                        d !== void 0 && d.forEach(function(y) {
                            y.length > 0 && (h += y + ",");
                        }), s += "" + c + m + '{content:"' + h + `"}/*!sc*/
`;
                    }
                }
            }
            return s;
        })(this);
    }, e;
}(), gt = /(a)(d)/gi, je2 = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function he2(e) {
    var r3, t = "";
    for(r3 = Math.abs(e); r3 > 52; r3 = r3 / 52 | 0)t = je2(r3 % 52) + t;
    return (je2(r3 % 52) + t).replace(gt, "$1-$2");
}
var Y2 = function(e, r) {
    for(var t = r.length; t;)e = 33 * e ^ r.charCodeAt(--t);
    return e;
}, xe2 = function(e) {
    return Y2(5381, e);
};
function ke2(e) {
    for(var r3 = 0; r3 < e.length; r3 += 1){
        var t = e[r3];
        if (L1(t) && !le2(t)) return !1;
    }
    return !0;
}
var St = xe2("5.3.3"), wt = function() {
    function e(r, t, n) {
        this.rules = r, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && ke2(r), this.componentId = t, this.baseHash = Y2(St, t), this.baseStyle = n, F.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(r, t, n) {
        var o = this.componentId, s = [];
        if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
        else {
            var i = x2(this.rules, r, t, n).join(""), a = he2(Y2(this.baseHash, i) >>> 0);
            if (!t.hasNameForId(o, a)) {
                var d = n(i, "." + a, void 0, o);
                t.insertRules(o, a, d);
            }
            s.push(a), this.staticRulesId = a;
        }
        else {
            for(var c = this.rules.length, m = Y2(this.baseHash, n.hash), h = "", y = 0; y < c; y++){
                var S = this.rules[y];
                if (typeof S == "string") h += S;
                else if (S) {
                    var l = x2(S, r, t, n), f = Array.isArray(l) ? l.join("") : l;
                    m = Y2(m, f + y), h += f;
                }
            }
            if (h) {
                var u = he2(m >>> 0);
                if (!t.hasNameForId(o, u)) {
                    var g = n(h, "." + u, void 0, o);
                    t.insertRules(o, u, g);
                }
                s.push(u);
            }
        }
        return s.join(" ");
    }, e;
}(), Et = /^\s*\/\/.*$/gm, bt = [
    ":",
    "[",
    ".",
    "#"
];
function Ve(e) {
    var r, t, n, o, s1 = e === void 0 ? O3 : e, i2 = s1.options, a2 = i2 === void 0 ? O3 : i2, d2 = s1.plugins, c = d2 === void 0 ? Z2 : d2, m1 = new fe3(a2), h = [], y1 = function(f) {
        function u(g) {
            if (g) try {
                f(g + "}");
            } catch (p) {
            }
        }
        return function(g, p, E, v, w, D, q, C, P, V) {
            switch(g){
                case 1:
                    if (P === 0 && p.charCodeAt(0) === 64) return f(p + ";"), "";
                    break;
                case 2:
                    if (C === 0) return p + "/*|*/";
                    break;
                case 3:
                    switch(C){
                        case 102:
                        case 112:
                            return f(E[0] + p), "";
                        default:
                            return p + (V === 0 ? "/*|*/" : "");
                    }
                case -2:
                    p.split("/*|*/}").forEach(u);
            }
        };
    }(function(f) {
        h.push(f);
    }), S = function(f, u, g) {
        return u === 0 && bt.indexOf(g[t.length]) !== -1 || g.match(o) ? f : "." + r;
    };
    function l(f, u, g, p) {
        p === void 0 && (p = "&");
        var E = f.replace(Et, ""), v = u && g ? g + " " + u + " { " + E + " }" : E;
        return r = p, t = u, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), m1(g || !u ? "" : u, v);
    }
    return m1.use([].concat(c, [
        function(f, u, g) {
            f === 2 && g.length && g[0].lastIndexOf(t) > 0 && (g[0] = g[0].replace(n, S));
        },
        y1,
        function(f) {
            if (f === -2) {
                var u = h;
                return h = [], u;
            }
        }
    ])), l.hash = c.length ? c.reduce(function(f, u) {
        return u.name || N3(15), Y2(f, u.name);
    }, 5381).toString() : "", l;
}
var pe3 = export_default1.createContext(), Ht = pe3.Consumer, fe5 = export_default1.createContext(), Me1 = (fe5.Consumer, new F), me3 = Ve();
function ye3() {
    return Oe(pe3) || Me1;
}
function ze() {
    return Oe(fe5) || me3;
}
function _t(e) {
    var r3 = qe(e.stylisPlugins), t = r3[0], n = r3[1], o = ye3(), s1 = Ae(function() {
        var a = o;
        return e.sheet ? a = e.sheet : e.target && (a = a.reconstructWithOptions({
            target: e.target
        }, !1)), e.disableCSSOMInjection && (a = a.reconstructWithOptions({
            useCSSOMInjection: !1
        })), a;
    }, [
        e.disableCSSOMInjection,
        e.sheet,
        e.target
    ]), i2 = Ae(function() {
        return Ve({
            options: {
                prefix: !e.disableVendorPrefixes
            },
            plugins: t
        });
    }, [
        e.disableVendorPrefixes,
        t
    ]);
    return xe(function() {
        export_default9(t, e.stylisPlugins) || n(e.stylisPlugins);
    }, [
        e.stylisPlugins
    ]), export_default1.createElement(pe3.Provider, {
        value: s1
    }, export_default1.createElement(fe5.Provider, {
        value: i2
    }, e.children));
}
var Be = function() {
    function e(r, t) {
        var n = this;
        this.inject = function(o, s) {
            s === void 0 && (s = me3);
            var i = n.name + s.hash;
            o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
        }, this.toString = function() {
            return N3(12, String(n.name));
        }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
    }
    return e.prototype.getName = function(r) {
        return r === void 0 && (r = me3), this.name + r.hash;
    }, e;
}(), Nt = /([A-Z])/, Ct = /([A-Z])/g, At = /^ms-/, Pt = function(e) {
    return "-" + e.toLowerCase();
};
function Ge(e) {
    return Nt.test(e) ? e.replace(Ct, Pt).replace(At, "-ms-") : e;
}
var Le1 = function(e) {
    return e == null || e === !1 || e === "";
};
function x2(e, r, t, n) {
    if (Array.isArray(e)) {
        for(var o, s = [], i = 0, a = e.length; i < a; i += 1)(o = x2(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
        return s;
    }
    if (Le1(e)) return "";
    if (le2(e)) return "." + e.styledComponentId;
    if (L1(e)) {
        if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !r) return e;
        var d = e(r);
        return x2(d, r, t, n);
    }
    var c;
    return e instanceof Be ? t ? (e.inject(t, n), e.getName(n)) : e : ce2(e) ? (function m(h, y) {
        var S, l, f = [];
        for(var u in h)h.hasOwnProperty(u) && !Le1(h[u]) && (Array.isArray(h[u]) && h[u].isCss || L1(h[u]) ? f.push(Ge(u) + ":", h[u], ";") : ce2(h[u]) ? f.push.apply(f, m(h[u], u)) : f.push(Ge(u) + ": " + (S = u, (l = h[u]) == null || typeof l == "boolean" || l === "" ? "" : typeof l != "number" || l === 0 || S in r1 ? String(l).trim() : l + "px") + ";"));
        return y ? [
            y + " {"
        ].concat(f, [
            "}"
        ]) : f;
    })(e) : e.toString();
}
var Fe1 = function(e) {
    return Array.isArray(e) && (e.isCss = !0), e;
};
function ve2(e) {
    for(var r4 = arguments.length, t = new Array(r4 > 1 ? r4 - 1 : 0), n = 1; n < r4; n++)t[n - 1] = arguments[n];
    return L1(e) || ce2(e) ? Fe1(x2(Re1(Z2, [
        e
    ].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Fe1(x2(Re1(e, t)));
}
new Set;
var ge2 = function(e, r, t) {
    return t === void 0 && (t = O3), e.theme !== t.theme && e.theme || r || t.theme;
}, It = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ot = /(^-|-$)/g;
function Se2(e) {
    return e.replace(It, "-").replace(Ot, "");
}
var we2 = function(e) {
    return he2(xe2(e) >>> 0);
};
function ne2(e) {
    return typeof e == "string" && !0;
}
var Ee1 = function(e) {
    return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Rt = function(e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Dt(e, r, t) {
    var n = e[t];
    Ee1(r) && Ee1(n) ? Ye(n, r) : e[t] = r;
}
function Ye(e) {
    for(var r4 = arguments.length, t = new Array(r4 > 1 ? r4 - 1 : 0), n = 1; n < r4; n++)t[n - 1] = arguments[n];
    for(var o3 = 0, s1 = t; o3 < s1.length; o3++){
        var i = s1[o3];
        if (Ee1(i)) for(var a in i)Rt(a) && Dt(e, i[a], a);
    }
    return e;
}
var k2 = export_default1.createContext(), Wt = k2.Consumer;
function Ut(e) {
    var r4 = Oe(k2), t = Ae(function() {
        return (function(n, o) {
            if (!n) return N3(14);
            if (L1(n)) {
                var s = n(o);
                return s;
            }
            return Array.isArray(n) || typeof n != "object" ? N3(8) : o ? b2({
            }, o, {
            }, n) : n;
        })(e.theme, r4);
    }, [
        e.theme,
        r4
    ]);
    return e.children ? export_default1.createElement(k2.Provider, {
        value: t
    }, e.children) : null;
}
var be3 = {
};
function qe1(e, r, t) {
    var n = le2(e), o3 = !ne2(e), s1 = r.attrs, i2 = s1 === void 0 ? Z2 : s1, a2 = r.componentId, d2 = a2 === void 0 ? function(p, E) {
        var v = typeof p != "string" ? "sc" : Se2(p);
        be3[v] = (be3[v] || 0) + 1;
        var w = v + "-" + we2("5.3.3" + v + be3[v]);
        return E ? E + "-" + w : w;
    }(r.displayName, r.parentComponentId) : a2, c = r.displayName, m1 = c === void 0 ? function(p) {
        return ne2(p) ? "styled." + p : "Styled(" + ue3(p) + ")";
    }(e) : c, h6 = r.displayName && r.componentId ? Se2(r.displayName) + "-" + r.componentId : r.componentId || d2, y1 = n && e.attrs ? Array.prototype.concat(e.attrs, i2).filter(Boolean) : i2, S4 = r.shouldForwardProp;
    n && e.shouldForwardProp && (S4 = r.shouldForwardProp ? function(p, E, v) {
        return e.shouldForwardProp(p, E, v) && r.shouldForwardProp(p, E, v);
    } : e.shouldForwardProp);
    var l1, f5 = new wt(t, h6, n ? e.componentStyle : void 0), u = f5.isStatic && i2.length === 0, g4 = function(p, E) {
        return (function(v, w, D, q) {
            var C = v.attrs, P = v.componentStyle, V = v.defaultProps, $ = v.foldedComponentIds, Ne = v.shouldForwardProp, Ce = v.styledComponentId, He = v.target, Ae = function(z, se, ie) {
                z === void 0 && (z = O3);
                var W = b2({
                }, se, {
                    theme: z
                }), B = {
                };
                return ie.forEach(function(U) {
                    var A, J, X, G = U;
                    for(A in L1(G) && (G = G(W)), G)W[A] = B[A] = A === "className" ? (J = B[A], X = G[A], J && X ? J + " " + X : J || X) : G[A];
                }), [
                    W,
                    B
                ];
            }(ge2(w, Oe(k2), V) || O3, w, C), $e = Ae[0], T = Ae[1], Pe = function(z, se, ie, W) {
                var B = ye3(), U = ze(), A = se ? z.generateAndInjectStyles(O3, B, U) : z.generateAndInjectStyles(ie, B, U);
                return A;
            }(P, q, $e, void 0), We = D, re = T.$as || w.$as || T.as || w.as || He, Ue = ne2(re), oe = T !== w ? b2({
            }, w, {
            }, T) : w, M = {
            };
            for(var I in oe)I[0] !== "$" && I !== "as" && (I === "forwardedAs" ? M.as = oe[I] : (Ne ? Ne(I, a1, re) : !Ue || a1(I)) && (M[I] = oe[I]));
            return w.style && T.style !== w.style && (M.style = b2({
            }, w.style, {
            }, T.style)), M.className = Array.prototype.concat($, Ce, Pe !== Ce ? Pe : null, w.className, T.className).filter(Boolean).join(" "), M.ref = We, Ee(re, M);
        })(l1, p, E, u);
    };
    return g4.displayName = m1, (l1 = export_default1.forwardRef(g4)).attrs = y1, l1.componentStyle = f5, l1.displayName = m1, l1.shouldForwardProp = S4, l1.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Z2, l1.styledComponentId = h6, l1.target = n ? e.target : e, l1.withComponent = function(p) {
        var E = r.componentId, v = function(D, q) {
            if (D == null) return {
            };
            var C, P, V = {
            }, $ = Object.keys(D);
            for(P = 0; P < $.length; P++)C = $[P], q.indexOf(C) >= 0 || (V[C] = D[C]);
            return V;
        }(r, [
            "componentId"
        ]), w = E && E + "-" + (ne2(p) ? p : Se2(ue3(p)));
        return qe1(p, b2({
        }, v, {
            attrs: y1,
            componentId: w
        }), t);
    }, Object.defineProperty(l1, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps;
        },
        set: function(p) {
            this._foldedDefaultProps = n ? Ye({
            }, e.defaultProps, p) : p;
        }
    }), l1.toString = function() {
        return "." + l1.styledComponentId;
    }, o3 && export_default10(l1, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), l1;
}
var _e3 = function(e) {
    return (function r(t, n, o) {
        if (o === void 0 && (o = O3), !Se1(n)) return N3(1, String(n));
        var s = function() {
            return t(n, o, ve2.apply(void 0, arguments));
        };
        return s.withConfig = function(i) {
            return r(t, n, b2({
            }, o, {
            }, i));
        }, s.attrs = function(i) {
            return r(t, n, b2({
            }, o, {
                attrs: Array.prototype.concat(o.attrs, i).filter(Boolean)
            }));
        }, s;
    })(qe1, e);
};
[
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "textPath",
    "tspan"
].forEach(function(e) {
    _e3[e] = _e3(e);
});
var Tt = function() {
    function e(t, n) {
        this.rules = t, this.componentId = n, this.isStatic = ke2(t), F.registerId(this.componentId + 1);
    }
    var r4 = e.prototype;
    return r4.createStyles = function(t, n, o, s) {
        var i = s(x2(this.rules, n, o, s).join(""), ""), a = this.componentId + t;
        o.insertRules(a, a, i);
    }, r4.removeStyles = function(t, n) {
        n.clearRules(this.componentId + t);
    }, r4.renderStyles = function(t, n, o, s) {
        t > 2 && F.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
    }, e;
}();
function Jt(e) {
    for(var r4 = arguments.length, t = new Array(r4 > 1 ? r4 - 1 : 0), n = 1; n < r4; n++)t[n - 1] = arguments[n];
    var o3 = ve2.apply(void 0, [
        e
    ].concat(t)), s1 = "sc-global-" + we2(JSON.stringify(o3)), i = new Tt(o3, s1);
    function a(c) {
        var m = ye3(), h = ze(), y = Oe(k2), S = Le(m.allocateGSInstance(s1)).current;
        return m.server && d(S, c, m, y, h), null;
    }
    function d(c, m, h, y, S) {
        if (i.isStatic) i.renderStyles(c, it, h, S);
        else {
            var l = b2({
            }, m, {
                theme: ge2(m, y, a.defaultProps)
            });
            i.renderStyles(c, l, h, S);
        }
    }
    return export_default1.memo(a);
}
var jt = /^\s*<\/[a-z]/i, Zt = function() {
    function e() {
        var t = this;
        this._emitSheetCSS = function() {
            var n = t.instance.toString();
            if (!n) return "";
            var o = de3();
            return "<style " + [
                o && 'nonce="' + o + '"',
                R1 + '="true"',
                'data-styled-version="5.3.3"'
            ].filter(Boolean).join(" ") + ">" + n + "</style>";
        }, this.getStyleTags = function() {
            return t.sealed ? N3(2) : t._emitSheetCSS();
        }, this.getStyleElement = function() {
            var n;
            if (t.sealed) return N3(2);
            var o = ((n = {
            })[R1] = "", n["data-styled-version"] = "5.3.3", n.dangerouslySetInnerHTML = {
                __html: t.instance.toString()
            }, n), s = de3();
            return s && (o.nonce = s), [
                export_default1.createElement("style", b2({
                }, o, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            t.sealed = !0;
        }, this.instance = new F({
            isServer: !0
        }), this.sealed = !1;
    }
    var r4 = e.prototype;
    return r4.collectStyles = function(t) {
        return this.sealed ? N3(2) : export_default1.createElement(_t, {
            sheet: this.instance
        }, t);
    }, r4.interleaveWithNodeStream = function(t) {
        if (K2) return N3(3);
        if (this.sealed) return N3(2);
        this.seal();
        var n = stream_default2, o = (n.Readable, n.Transform), s = t, i = this.instance, a = this._emitSheetCSS, d = new o({
            transform: function(c, m, h) {
                var y = c.toString(), S = a();
                if (i.clearTag(), jt.test(y)) {
                    var l = y.indexOf(">") + 1, f = y.slice(0, l), u = y.slice(l);
                    this.push(f + S + u);
                } else this.push(S + y);
                h();
            }
        });
        return s.on("error", function(c) {
            d.emit("error", c);
        }), s.pipe(d);
    }, e;
}(), tn = _e3;
const StyledListItem = tn.li`
  list-style: none;
  margin-left: 10px;
`;
const StyledLink = tn.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme  })=>theme.menuWordColor
};
  &.color {
    color: #19ce60;
  }
  &.mail:before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\658';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 5px;
  }

  &.live:after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\550';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-left: 5px;
  }
  &.tv:before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\04b';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 5px;
  }
`;
const HeaderMenuItem = ({ children , href , className  })=>{
    return export_default1.createElement(StyledListItem, null, export_default1.createElement(StyledLink, {
        href: href,
        className: className
    }, children));
};
const WeatherLink = tn.a`
  &:hover {
    color: black;
  }
  &:visited {
    color: black;
  }
`;
const StyledWeather = tn(WeatherLink)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  cursor: pointer;
  user-select: none;
`;
const StyledTempFont = tn.span`
  font-weight: 800;
  font-size: 15px;
  margin-right: 8px;
`;
const StyledCity = tn.span`
  font-weight: 500;
  font-size: 13px;
  color: grey;
`;
const weatherDescription = {
    'clear sky': '맑음',
    'few clouds': '구름 많음',
    'scattered clouds': '흐림',
    'broken clouds': '먹구름',
    'shower rain': '소나기',
    rain: '비',
    thunderstorm: '천둥번개',
    snow: '눈',
    mist: '안개'
};
function Weather() {
    const [weather, setWeather] = qe({
        icon: '',
        description: '',
        temp: 0,
        name: ''
    });
    async function getWeather() {
        const url = `http://localhost:3000/weather/Seoul`;
        const serverData = await fetch(url);
        const { data  } = await serverData.json();
        const { main: { temp  } , weather: [{ icon , description  }] , name ,  } = data;
        setWeather({
            ...weather,
            icon,
            description,
            temp,
            name
        });
    }
    xe(()=>{
        getWeather();
    }, []);
    try {
        console.log(weather);
    } catch (err) {
        console.error(err);
    }
    const { description , icon , temp , name: city  } = weather;
    return export_default1.createElement(StyledWeather, {
        href: "https://weather.naver.com/today/09650103"
    }, export_default1.createElement("img", {
        src: `http://openweathermap.org/img/wn/${icon}@2x.png`,
        width: "50",
        height: "50"
    }), export_default1.createElement(StyledTempFont, null, `${temp}º`), export_default1.createElement(StyledTempFont, null, weatherDescription[description]), export_default1.createElement(StyledCity, null, city));
}
const StyledBaseMenu = tn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  box-shadow: 0px 2px 4px 0px rgba(0 0 0 / 12%);
`;
const StyledMenu = tn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin: 0 auto;
  width: 1190px;
  height: 100%;
`;
const menuObjects = [
    {
        name: '메일',
        className: 'color mail',
        href: 'https://mail.naver.com/'
    },
    {
        name: '카페',
        className: 'color',
        href: 'https://section.cafe.naver.com/'
    },
    {
        name: '블로그',
        className: 'color',
        href: 'https://section.blog.naver.com/'
    },
    {
        name: '지식in',
        className: 'color',
        href: 'https://kin.naver.com/'
    },
    {
        name: '쇼핑',
        className: 'color',
        href: 'https://shopping.naver.com/'
    },
    {
        name: '쇼핑',
        className: 'color live',
        href: 'https://shoppinglive.naver.com/home'
    },
    {
        name: 'Pay',
        className: 'color',
        href: 'https://order.pay.naver.com/home'
    },
    {
        name: 'TV',
        className: 'color tv',
        href: 'https://tv.naver.com/'
    },
    {
        name: '사전',
        className: '',
        href: 'https://dict.naver.com/'
    },
    {
        name: '뉴스',
        className: '',
        href: 'https://news.naver.com/'
    },
    {
        name: '증권',
        className: '',
        href: 'https://finance.naver.com/'
    },
    {
        name: '부동산',
        className: '',
        href: 'https://land.naver.com/'
    },
    {
        name: '지도',
        className: '',
        href: 'https://map.naver.com/'
    },
    {
        name: 'VIBE',
        className: '',
        href: 'https://vibe.naver.com/'
    },
    {
        name: '책',
        className: '',
        href: 'https://book.naver.com/'
    },
    {
        name: '웹툰',
        className: '',
        href: 'https://comic.naver.com/'
    }, 
];
const StyledUnorderedList = tn.ul`
  display: flex;
  width: auto;
`;
const HeaderMenu = ()=>{
    const items = menuObjects.map((item, index)=>{
        return export_default1.createElement(HeaderMenuItem, {
            key: index,
            className: item.className,
            href: item.href
        }, item.name);
    });
    return export_default1.createElement(StyledBaseMenu, null, export_default1.createElement(StyledMenu, null, export_default1.createElement(StyledUnorderedList, null, items), export_default1.createElement(Weather, null)));
};
const Link = tn.a`
  user-select: none;
  margin: 20px;
`;
const Logo = ()=>{
    return export_default1.createElement(Link, {
        href: "/"
    }, export_default1.createElement("img", {
        alt: "logo",
        src: "/public/img/logo_green.png",
        width: 165,
        height: 32
    }));
};
const KeyboardStyle = tn.div`
  margin-right: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover > svg {
    fill: #b2babb;
  }
`;
const KeyboardIcon = ()=>{
    return export_default1.createElement(KeyboardStyle, null, export_default1.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        version: "1.1",
        id: "Capa_1",
        x: "0px",
        y: "0px",
        xmlSpace: "preserve",
        viewBox: "0 140.62 525.15 243.91",
        fill: "#CCD1D1",
        width: "25px",
        height: "15px"
    }, export_default1.createElement("g", null, export_default1.createElement("path", {
        d: "M0,140.621v243.911h525.153V140.621H0z M375.922,175.062h22.975h22.954v45.907h-22.954h-22.975V175.062z M387.409,243.922 v45.907h-22.975H341.48v-45.907h22.954C364.434,243.922,387.409,243.922,387.409,243.922z M307.039,175.062h22.975h22.975v45.907 h-22.975h-22.975V175.062z M318.549,243.922v45.907h-22.975H272.62v-45.907h22.954 C295.573,243.922,318.549,243.922,318.549,243.922z M238.2,175.062h22.954h22.932v45.907h-22.932H238.2V175.062z M249.644,243.922 v45.907h-22.932h-22.975v-45.907h22.975C226.713,243.922,249.644,243.922,249.644,243.922z M169.296,175.062h22.975h22.954v45.907 h-22.954h-22.975C169.296,220.969,169.296,175.062,169.296,175.062z M180.806,243.922v45.907H157.83h-22.954v-45.907h22.954 C157.83,243.922,180.806,243.922,180.806,243.922z M100.457,175.062h22.932h22.975v45.907h-22.975h-22.932V175.062z M31.553,220.969v-45.907h22.954h22.975v45.907H54.506H31.553z M66.016,289.829v-45.907H88.97h22.975v45.907H88.97 C88.97,289.829,66.016,289.829,66.016,289.829z M433.316,361.578h-34.419h-34.441h-34.419h-34.441h-34.419h-34.419h-34.485H157.83 h-34.441H88.948v-45.907h34.419h34.441h34.441h34.441h34.419h34.419h34.441h34.419h34.441h34.419v45.907H433.316z M456.292,289.829h-22.975h-22.954v-45.907h22.954h22.975V289.829z M490.711,220.969h-22.954h-22.975v-45.907h22.975h22.954 V220.969z"
    }))));
};
const EmptyInput = tn.input`
  display: none;

  :checked + label > svg {
    transition: 0.3s;
    transform: rotate(180deg);
  }
  + label > svg {
    transition: 0.3s;
    transform: rotate(0deg);
  }
`;
const ArrowStyle = tn.div`
  margin-right: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  label {
    cursor: pointer;
  }
`;
const EmptyLabel = tn.label`
  display: contents;
`;
const ToggleButton = ({ isOpen , toggleMenu  })=>{
    return export_default1.createElement(ArrowStyle, null, export_default1.createElement(EmptyInput, {
        type: "checkbox",
        id: "menu-button",
        onChange: toggleMenu,
        checked: isOpen
    }), export_default1.createElement(EmptyLabel, {
        htmlFor: "menu-button"
    }, export_default1.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        version: "1.1",
        x: "0px",
        y: "0px",
        xmlSpace: "preserve",
        viewBox: "96 160 320 191.9",
        width: "10px",
        height: "100%",
        fill: "#19ce60",
        id: "arrow-icon"
    }, export_default1.createElement("path", {
        d: "M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6 c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
    }))));
};
const SearchStyle = tn.button`
  width: 52px;
  height: 52px;
  background-color: #19ce60;
  cursor: pointer;
`;
const SearchButton = ()=>{
    return export_default1.createElement(SearchStyle, null, export_default1.createElement("svg", {
        version: "1.1",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 489.713 489.713",
        xmlSpace: "preserve",
        fill: "white",
        width: "25px",
        height: "25px"
    }, export_default1.createElement("g", null, export_default1.createElement("path", {
        d: "M483.4,454.444l-121.3-121.4c28.7-35.2,46-80,46-128.9c0-112.5-91.5-204.1-204.1-204.1S0,91.644,0,204.144 s91.5,204,204.1,204c48.8,0,93.7-17.3,128.9-46l121.3,121.3c8.3,8.3,20.9,8.3,29.2,0S491.8,462.744,483.4,454.444z M40.7,204.144 c0-90.1,73.2-163.3,163.3-163.3s163.4,73.3,163.4,163.4s-73.3,163.4-163.4,163.4S40.7,294.244,40.7,204.144z"
    }))));
};
const useOutsideAlerter = (ref, func)=>{
    xe(()=>{
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                func(e);
            }
        }
        if (!document) return;
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document?.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        ref,
        func
    ]);
};
const ATCSidebar = tn.div`
  position: relative;
  right: 2px;
`;
const Menu = tn.div`
  display: ${({ isOpen  })=>isOpen ? 'flex' : 'none'
};
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  position: absolute;
  z-index: 100;
  width: 620px;
  height: 40px;
  top: 26px;
  border-radius: 0 0 5px 5px;
  border: 1px solid ${({ theme  })=>theme.borderBottom
};
  background-color: ${({ theme  })=>theme.toolbarBackground
};
  a:hover {
    text-decoration: underline;
  }
  box-shadow: 0px 2px 3px 1px ${({ theme  })=>theme.toolbarShadow
};
`;
const UserTool = tn.div`
  padding-left: 10px;
  // 도움말 링크
  span:nth-child(1) a {
    color: ${({ theme  })=>theme.toolbar
};
  }
  // 신고 링크
  span:nth-child(2) a {
    padding-left: 10px;
    color: #03c75a;
  }
`;
const ACTOffMenu = tn.div`
  padding-right: 10px;
  // 자동완성 끄기 링크
  a {
    color: ${({ theme  })=>theme.toolbar
};
  }
`;
const CustomLink = ({ href , string  })=>{
    return export_default1.createElement("span", null, export_default1.createElement("a", {
        href: href
    }, string));
};
const Toolbar = ({ isOpen , setMenu  })=>{
    const toggleMenu = (e)=>{
        const arrow = document.getElementById('arrow-icon');
        if (e.target === arrow || e.target === arrow?.childNodes[0]) return;
        setMenu(false);
    };
    const wrapperRef = Le(null);
    useOutsideAlerter(wrapperRef, toggleMenu);
    return export_default1.createElement(ATCSidebar, null, export_default1.createElement(Menu, {
        isOpen: isOpen,
        ref: wrapperRef
    }, export_default1.createElement(UserTool, null, export_default1.createElement(CustomLink, {
        href: "https://help.naver.com/support/service/main.help?serviceNo=605&categoryNo=1987",
        string: "도움말"
    }), export_default1.createElement(CustomLink, {
        href: "https://help.naver.com/support/contents/contents.help?serviceNo=605&categoryNo=18215",
        string: "신고"
    })), export_default1.createElement(ACTOffMenu, null, export_default1.createElement(CustomLink, {
        href: "#",
        string: "자동완성 끄기"
    }))));
};
const MenuContext = he({
});
const MenuProvider = ({ children  })=>{
    const [isOpen, setMenu] = qe(false);
    const value = {
        isOpen,
        setMenu
    };
    return export_default1.createElement(MenuContext.Provider, {
        value: value
    }, children);
};
const useMenuContext = ()=>{
    const context = Oe(MenuContext);
    if (!context) {
        throw new Error('Cannot find MenuProvider');
    }
    return context;
};
const SearchStyle1 = tn.div`
  width: 620px;
  height: 52px;
  border: 2px solid #19ce60;
  display: flex;
  align-items: center;
  background-color: ${({ theme  })=>theme.header
};
  :focus-within {
    box-shadow: 0px 2px 9px 0px rgba(0 0 0/ 10%);
  }
`;
const Input = tn.input`
  background-color: inherit;
  height: 100%;
  outline: 0;
  font-size: 18px;
  margin: 0 12px;
  flex: 1;
  color: ${({ theme  })=>theme.inputColor
};
`;
const SearchForm = ()=>{
    const { isOpen , setMenu  } = useMenuContext();
    const toggleMenu = (e)=>{
        setMenu(e.target.checked);
    };
    return export_default1.createElement(SearchStyle1, null, export_default1.createElement(Toolbar, {
        isOpen: isOpen,
        setMenu: setMenu
    }), export_default1.createElement("form", {
        action: "/",
        method: "get",
        name: "serach"
    }), export_default1.createElement(Input, {
        type: "text",
        form: "search",
        id: "header-search",
        name: "search"
    }), export_default1.createElement(KeyboardIcon, null), export_default1.createElement(ToggleButton, {
        toggleMenu: toggleMenu,
        isOpen: isOpen
    }), export_default1.createElement(SearchButton, null));
};
const Contents = tn.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
const Junior = tn.a`
  color: #ccd1d1;
  font-family: 'Jua';
  font-size: 13px;
  margin: 5px 10px 0;

  :hover span:nth-child(1) {
    color: #03a9f4;
  }
  :hover span:nth-child(2) {
    color: #f44336;
  }
  :hover span:nth-child(3) {
    color: #ffc107;
  }
  :hover span:nth-child(4) {
    color: #19ce60;
  }
`;
const HappyBean = tn.a`
  color: #ccd1d1;
  font-family: 'Hahmlet';
  font-size: 12px;

  :hover {
    color: #19ce60;
  }
`;
const SetStartPageLink = tn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 11px;
    color: ${({ theme  })=>theme.startLinkColor
};
  }
  a:hover {
    text-decoration: underline;
  }
  a:after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\054';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin: 0 5px;
    box-shadow: 0px 2px 3px 1px ${({ theme  })=>theme.startLinkShadow
};
    border-radius: 100%;
    width: 15px;
    height: 15px;
    text-align: center;
    font-size: 0.5rem;
    line-height: 1.5;
    background-color: ${({ theme  })=>theme.bg_startLink
};
  }
`;
const ExternalServiceArea = ()=>{
    return export_default1.createElement(Contents, null, export_default1.createElement(SetStartPageLink, null, export_default1.createElement("a", {
        href: "https://help.naver.com/support/contents/contents.help?serviceNo=1074&categoryNo=16719"
    }, "네이버를 시작페이지로")), export_default1.createElement(Junior, {
        href: "https://jr.naver.com/"
    }, export_default1.createElement("span", null, "쥬"), export_default1.createElement("span", null, "니"), export_default1.createElement("span", null, "어"), export_default1.createElement("span", null, "네이버")), export_default1.createElement(HappyBean, {
        href: "https://happybean.naver.com/"
    }, "해피빈"));
};
const StyledHeader = tn.div`
  width: 100%;
  background-color: ${({ theme  })=>theme.header
};
`;
const WrapperTopHeader = tn.div`
  border-bottom: 1px solid ${({ theme  })=>theme.borderBottom
};
`;
const StyledTopHeader = tn.div`
  width: 1190px;
  height: 160px;
  margin: 0 auto;
  padding: 0 30px;
`;
const Contents1 = tn.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainHeader = ()=>{
    return export_default1.createElement(StyledHeader, null, export_default1.createElement(WrapperTopHeader, null, export_default1.createElement(StyledTopHeader, null, export_default1.createElement(Contents1, null, export_default1.createElement(Logo, null), export_default1.createElement(MenuProvider, null, export_default1.createElement(SearchForm, null)), export_default1.createElement(ExternalServiceArea, null)))), export_default1.createElement(HeaderMenu, null));
};
const lightTheme = {
    body: '#fff',
    header: '#fff',
    bg_startLink: '#fff',
    startLinkShadow: '#d0d3d9',
    startLinkColor: '#404040',
    borderBottom: '#e4e8eb',
    toolbar: 'grey',
    toolbarBackground: '#f8f9f9',
    toolbarShadow: '#d0d3d9',
    inputColor: '#000',
    menuWordColor: '#000',
    themeContent: '\f186',
    bg_themeBtn: '#fff',
    bg_themeBtnHover: '#404040',
    themeBtnImg: '#5e6267',
    themeBtnWordHover: '#d4d4d4',
    themeBtnWord: '#2c2c2c',
    themeBtnImgHover: '#fce303'
};
const darkTheme = {
    body: '#1e1f21',
    header: '#292a2d',
    bg_startLink: '#464646',
    startLinkShadow: '#202020',
    startLinkColor: '#a8a8a8',
    borderBottom: '#3a3b3d',
    toolbar: '#8f8f8f',
    toolbarBackground: '#242527',
    toolbarShadow: '#212121',
    inputColor: '#fff',
    menuWordColor: '#fff',
    themeContent: '\f185',
    bg_themeBtn: '#333638',
    bg_themeBtnHover: '#53575c',
    themeBtnImg: '#c2c9d1',
    themeBtnWordHover: '#d4d4d4',
    themeBtnWord: '#d5d5d5',
    themeBtnImgHover: '#00f557'
};
Jt`
  body{
    height: 100vh;
  }
  *{
    box-sizing : border-box;
    padding: 0px;
    margin: 0px;
  }
  button, input {
    border: 0;
  }
  a {
    user-select: none;
    text-decoration: none;
  }
`;
const ThemeContext = he({
});
const WrapperThemeProvider = ({ children  })=>{
    const [theme, setTheme] = qe('light');
    return export_default1.createElement(Ut, {
        theme: theme === 'light' ? lightTheme : darkTheme
    }, export_default1.createElement(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        }
    }, children));
};
const useThemeContext = ()=>{
    const context = Oe(ThemeContext);
    if (!context) {
        throw new Error('Cannot find WrapperThemeProvider');
    }
    return context;
};
const StyledThemeButton = tn.button`
  position: fixed;
  bottom: 19px;
  right: 78px;
  width: 130px;
  height: 40px;
  border: 0;
  border-radius: 30px;
  background-color: ${({ theme  })=>theme.bg_themeBtn
};
  color: ${({ theme  })=>theme.themeBtnWord
};
  font-size: 12px;
  box-shadow: 0px 3px 4px 0 rgba(0 0 0 / 12%);
  cursor: pointer;

  :before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '${({ theme  })=>theme.themeContent
}';
    color: ${({ theme  })=>theme.themeBtnImg
};
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 5px;
  }

  :hover {
    background-color: ${({ theme  })=>theme.bg_themeBtnHover
};
    color: ${({ theme  })=>theme.themeBtnWordHover
};
  }
  :hover:before {
    color: ${({ theme  })=>theme.themeBtnImgHover
};
  }
`;
const ThemeToggleButton = ()=>{
    const { setTheme , theme  } = useThemeContext();
    const themeToggler = ()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    return export_default1.createElement(StyledThemeButton, {
        onClick: themeToggler
    }, theme === 'light' ? '다크 모드로' : '라이트 모드로');
};
const StyledContents = tn.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 0 auto;
`;
const HomePageContainer = ()=>{
    return export_default1.createElement(StyledContents, null, export_default1.createElement(ThemeToggleButton, null));
};
function App() {
    return export_default1.createElement(WrapperThemeProvider, null, export_default1.createElement(MainHeader, null), export_default1.createElement(HomePageContainer, null));
}
export_default7.hydrate(export_default1.createElement(export_default1.StrictMode, null, export_default1.createElement(App, null)), document.getElementById('root'));
