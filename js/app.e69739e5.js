(function (e) {
  function t(t) {
    for (var a, s, r = t[0], l = t[1], c = t[2], p = 0, d = [];
      p < r.length;
      p++
    )
      (s = r[p]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && d.push(n[s][0]),
        (n[s] = 0);
    for (a in l) 
      Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    u && u(t);
    while (d.length) 
      d.shift()();
    return o.push.apply(o, c || []), 
    i();
  }
  function i() {
    for (var e, t = 0; t < o.length; t++) {
      for (var i = o[t], a = !0, r = 1; r < i.length; r++) {
        var l = i[r];
        0 !== n[l] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = s((s.s = i[0]))));
    }
    return e;
  }
  var a = {},
    n = {
      app: 0,
    },
    o = [];
  function s(t) {
    if (a[t]) return a[t].exports;
    var i = (a[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return e[t].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function (e, t, i) {
      s.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: i,
        });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          s.d(
            i,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return i;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var c = 0; c < r.length; c++) t(r[c]);
  var u = l;
  o.push([0, "chunk-vendors"]), i();
})({
  0: function (e, t, i) {
    e.exports = i("cd49");
  },
  "00d9": function (e, t, i) {
    e.exports = i.p + "img/organization.ad0f077d.png";
  },
  "031a": function (e, t, i) {},
  "04d3": function (e, t, i) {
    e.exports = i.p + "img/product.c7858dc2.png";
  },
  "0b94": function (e, t, i) {
    "use strict";
    var a;
    i.d(t, "a", function () {
      return a;
    }),
      (function (e) {
        (e[(e["Section"] = 0)] = "Section"),
          (e[(e["StringProperty"] = 1)] = "StringProperty"),
          (e[(e["FloatProperty"] = 2)] = "FloatProperty"),
          (e[(e["IntegerProperty"] = 3)] = "IntegerProperty"),
          (e[(e["EnumProperty"] = 4)] = "EnumProperty"),
          (e[(e["DateProperty"] = 5)] = "DateProperty"),
          (e[(e["TimeProperty"] = 6)] = "TimeProperty"),
          (e[(e["DateTimeProperty"] = 7)] = "DateTimeProperty"),
          (e[(e["BasicTableProperty"] = 8)] = "BasicTableProperty"),
          (e[(e["ComplexTableProperty"] = 9)] = "ComplexTableProperty");
      })(a || (a = {}));
  },
  "0ca7": function (e, t, i) {
    "use strict";
    i("6325");
  },
  "0da8": function (e, t, i) {},
  "0e2b": function (e, t, i) {},
  "0f97": function (e, t, i) {},
  "13be": function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return o;
    });
    var a = i("f139");
    class n {
      constructor() {
        this._listeners = new Map();
      }
      emit(e, ...t) {
        if (this._listeners.has(e)) {
          let i = this._listeners.get(e);
          for (let e = i.length - 1; 0 <= e; e--) i[e](...t);
        }
      }
      on(e, t) {
        this._listeners.has(e) || this._listeners.set(e, []),
          this._listeners.get(e).unshift(t);
      }
      once(e, t) {
        this._listeners.has(e) || this._listeners.set(e, []);
        let i = (...a) => {
          let n = this._listeners.get(e);
          n.splice(n.indexOf(i), 1), t(...a);
        };
        this._listeners.get(e).unshift(i);
      }
      off(e, t) {
        if (this._listeners.has(e)) {
          let i = this._listeners.get(e);
          i.splice(i.indexOf(t), 1);
        }
      }
    }
    class o extends n {
      constructor() {
        super(), (this.instance = a["c"]()), (this._parent = null);
      }
      get rootInstance() {
        return this.root.instance;
      }
      get root() {
        let e = this;
        while (null !== e._parent) e = e._parent;
        return e;
      }
      emitUpward(e, ...t) {
        var i;
        this.emit(e, ...t),
          null === (i = this._parent) || void 0 === i || i.emitUpward(e, ...t);
      }
    }
  },
  "14d9": function (e) {
    e.exports = JSON.parse(
      '{"hotkeys":{"file":{"new_file":"Control+N","open_file":"Control+O","save_file":"Control+S"},"edit":{"undo":"Control+Z","redo":"Control+Y"},"layout":{},"view":{"fullscreen":""}}}'
    );
  },
  "174a": function (e, t, i) {
    "use strict";
    i.d(t, "k", function () {
      return r;
    }),
      i.d(t, "l", function () {
        return s;
      }),
      i.d(t, "a", function () {
        return a;
      }),
      i.d(t, "b", function () {
        return l;
      }),
      i.d(t, "e", function () {
        return p;
      }),
      i.d(t, "r", function () {
        return d;
      }),
      i.d(t, "f", function () {
        return u;
      }),
      i.d(t, "n", function () {
        return h;
      }),
      i.d(t, "h", function () {
        return g;
      }),
      i.d(t, "i", function () {
        return x;
      }),
      i.d(t, "j", function () {
        return m;
      }),
      i.d(t, "g", function () {
        return b;
      }),
      i.d(t, "m", function () {
        return v;
      }),
      i.d(t, "p", function () {
        return y;
      }),
      i.d(t, "q", function () {
        return f;
      }),
      i.d(t, "c", function () {
        return O;
      }),
      i.d(t, "d", function () {
        return S;
      }),
      i.d(t, "o", function () {
        return w;
      });
    var a,
      n = i("13be"),
      o = i("b4d3");
    class s {
      constructor() {
        (this._accessor = null), (this._parentAssembler = null);
      }
      get property() {
        return this.accessor.property;
      }
      get parent() {
        return this._parentAssembler;
      }
      get accessor() {
        if (null === this._accessor)
          throw new Error("Assembler is not configured with a property.");
        return this._accessor;
      }
      __injectAccessor(e) {
        this._accessor = e;
      }
      attachToSection(e) {
        this.belongsToParent(e) ||
          (this.belongsToParent() && this.detachFromParent(),
          this.accessor.setParent(e.section),
          (this._parentAssembler = e),
          e.attachProperty(this));
      }
      attachToTabularProperty(e) {
        this.belongsToParent(e) ||
          (this.belongsToParent() && this.detachFromParent(),
          this.accessor.setParent(e.property),
          (this._parentAssembler = e));
      }
      detachFromParent() {
        if (!this.belongsToParent()) return;
        let e = this._parentAssembler;
        this.accessor.setParent(null),
          (this._parentAssembler = null),
          e instanceof o["a"] && e.detachProperty(this);
      }
      belongsToParent(e) {
        let t,
          i = this.accessor.getParent();
        return (
          null !== i &&
          (void 0 === e ||
            (e instanceof o["a"]
              ? (t = e.section.instance)
              : e.property.instance,
            i.instance === t))
        );
      }
    }
    class r extends n["a"] {
      constructor(e, t) {
        var i, a;
        super(),
          (this.id = e.id),
          (this.path = null !== (i = e.path) && void 0 !== i ? i : e.id),
          (this.name = e.name),
          (this.link = null !== (a = e.link) && void 0 !== a ? a : null),
          (this.row = e.row),
          (this.col = e.col),
          (this._parent = null),
          (this._actions = null),
          t && this.__prepareAssembler(t);
      }
      get actions() {
        return this._actions;
      }
      registerAction(e, t, i) {
        null === this._actions && (this._actions = new Map()),
          this._actions.set(e, {
            text: t,
            function: i,
          });
      }
      invokeAction(e) {
        if (null === this._actions || !this._actions.has(e))
          throw new Error(`'${e}' is not a registered action.`);
        this._actions.get(e).function();
      }
      __prepareAssembler(e = new s()) {
        return (
          e.__injectAccessor({
            property: this,
            getParent: () => this._parent,
            setParent: (e) => (this._parent = e),
          }),
          e
        );
      }
    }
    (function (e) {
      (e[(e["TopLeft"] = 0)] = "TopLeft"),
        (e[(e["TopCenter"] = 1)] = "TopCenter"),
        (e[(e["TopRight"] = 2)] = "TopRight"),
        (e[(e["MiddleLeft"] = 3)] = "MiddleLeft"),
        (e[(e["MiddleCenter"] = 4)] = "MiddleCenter"),
        (e[(e["MiddleRight"] = 5)] = "MiddleRight"),
        (e[(e["BottomLeft"] = 6)] = "BottomLeft"),
        (e[(e["BottomCenter"] = 7)] = "BottomCenter"),
        (e[(e["BottomRight"] = 8)] = "BottomRight");
    })(a || (a = {}));
    class l extends r {
      constructor(e, t) {
        var i, n;
        super(e, t),
          (this.required = null !== (i = e.required) && void 0 !== i && i),
          (this.alignment =
            null !== (n = e.alignment) && void 0 !== n ? n : a.TopLeft),
          (this._metrics = new Map());
      }
      get metrics() {
        return this._metrics;
      }
      registerMetric(e, t, i) {
        this._metrics.set(e, {
          text: t,
          value: i,
        });
      }
      updateMetric(e, t) {
        if (!this._metrics.has(e))
          throw new Error(`'${e}' is not a registered metric.`);
        this._metrics.get(e).value = t;
      }
    }
    var c = i("a966");
    class u extends l {
      constructor(e, t) {
        super(e, t), (this._value = null), (this._plugins = null);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        let t = this._value;
        this._value =
          null === e ? null : "string" === typeof e ? new Date(e) : e;
        let i = null === t ? null : new Date(t);
        this.emit("update", this, i);
      }
      clone(e, t = !1) {
        var i;
        let a = new u(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
          },
          e
        );
        return (
          t ||
            null === (i = this._plugins) ||
            void 0 === i ||
            i.forEach(({ plugin: e }) => a.tryInstallPlugin(e)),
          (a.value = this._value),
          a
        );
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new c["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
      toString() {
        return null !== this._value ? "" + this._value : "";
      }
    }
    class p extends u {
      constructor(e, t) {
        super(e, t);
      }
      clone(e, t = !1) {
        var i;
        let a = new p(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
          },
          e
        );
        return (
          t ||
            null === (i = this._plugins) ||
            void 0 === i ||
            i.forEach(({ plugin: e }) => a.tryInstallPlugin(e)),
          (a.value = this.value),
          a
        );
      }
    }
    class d extends u {
      constructor(e, t) {
        super(e, t);
      }
      clone(e, t = !1) {
        var i;
        let a = new d(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
          },
          e
        );
        return (
          t ||
            null === (i = this._plugins) ||
            void 0 === i ||
            i.forEach(({ plugin: e }) => a.tryInstallPlugin(e)),
          (a.value = this.value),
          a
        );
      }
    }
    class h extends l {
      constructor(e, t) {
        super(e, t),
          (this.suggestions = []),
          (this._value = null),
          (this._plugins = null);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        let t = this._value;
        (this._value = e), this.emit("update", this, t);
      }
      clone(e, t = !1) {
        var i;
        let a = new h(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
          },
          e
        );
        return (
          (a.suggestions = [...this.suggestions]),
          t ||
            null === (i = this._plugins) ||
            void 0 === i ||
            i.forEach(({ plugin: e }) => a.tryInstallPlugin(e)),
          (a.value = this._value),
          a
        );
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new c["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
      toString() {
        var e;
        return null !== (e = this._value) && void 0 !== e ? e : "";
      }
    }
    var v,
      T = i("f139");
    class m extends l {
      constructor(e, t) {
        var i, a;
        super(e, t),
          (this.min = null !== (i = e.min) && void 0 !== i ? i : -1 / 0),
          (this.max = null !== (a = e.max) && void 0 !== a ? a : 1 / 0),
          (this._value = null);
      }
      toString() {
        return null !== this.value ? "" + this.value : void 0;
      }
    }
    class g extends m {
      constructor(e, t) {
        super(e, t), (this._plugins = null);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        let t = this._value;
        (this._value = null === e ? e : Object(T["b"])(e, this.min, this.max)),
          this.emit("update", this, t);
      }
      clone(e, t = !1) {
        var i;
        let a = new g(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
            min: this.min,
            max: this.max,
          },
          e
        );
        return (
          t ||
            null === (i = this._plugins) ||
            void 0 === i ||
            i.forEach(({ plugin: e }) => a.tryInstallPlugin(e)),
          (a.value = this._value),
          a
        );
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new c["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
    }
    class x extends m {
      constructor(e, t) {
        super(e, t), (this._plugins = null);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        let t = this.value;
        (this._value =
          null === e ? e : Math.round(Object(T["b"])(e, this.min, this.max))),
          this.emit("update", this, t);
      }
      clone(e, t = !1) {
        var i;
        let a = new x(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            required: this.required,
            alignment: this.alignment,
            min: this.min,
            max: this.max,
          },
          e
        );
        return (
          t ||
            null === (i = this._plugins) ||
            void 0 === i ||
            i.forEach(({ plugin: e }) => a.tryInstallPlugin(e)),
          (a.value = this.value),
          a
        );
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new c["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
    }
    class b extends l {
      constructor(e, t) {
        super(e, t);
        let i = new Map();
        for (let a of e.options) {
          let { value: e, text: t } = a;
          if (i.has(e)) throw new Error("All enum values must be unique.");
          i.set(e, t);
        }
        (this.options = i),
          (this._value = null),
          (this._plugins = null),
          (this._validOptions = null);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        let t = this._value;
        if (null === e) this._value = null;
        else {
          if (!this.validOptions.has(e))
            throw new Error(`Enum value '${e}' is not a valid option.`);
          this._value = e;
        }
        this.emit("update", this, t);
      }
      get validOptions() {
        return null === this._validOptions ? this.options : this._validOptions;
      }
      clone(e, t = !1) {
        var i;
        let a = [...this.options.entries()].map(([e, t]) => ({
            value: e,
            text: t,
          })),
          n = new b(
            {
              id: this.id,
              name: this.name,
              path: this.path,
              link: this.link,
              row: this.row,
              col: this.col,
              required: this.required,
              alignment: this.alignment,
              options: a,
            },
            e
          );
        return (
          t ||
            null === (i = this._plugins) ||
            void 0 === i ||
            i.forEach(({ plugin: e }) => n.tryInstallPlugin(e)),
          (n.value = this._value),
          n
        );
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new c["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
      toString() {
        return null !== this._value ? this.options.get(this._value) : "";
      }
      restrictOptions(e) {
        this._validOptions = new Map();
        for (let t of e) {
          let e = this.options.get(t);
          e && this._validOptions.set(t, e);
        }
        this._value &&
          !this._validOptions.has(this._value) &&
          (this.value = null);
      }
      unrestrictOptions() {
        this._validOptions = null;
      }
    }
    (function (e) {
      (e[(e["Descending"] = 0)] = "Descending"),
        (e[(e["None"] = 1)] = "None"),
        (e[(e["Ascending"] = 2)] = "Ascending");
    })(v || (v = {}));
    class f extends s {
      constructor() {
        super(), (this._tabularAccessor = null);
      }
      get property() {
        return this.tabularAccessor.property;
      }
      get tabularAccessor() {
        if (null === this._tabularAccessor)
          throw new Error(
            "Assembler is not configured with a tabular property."
          );
        return this._tabularAccessor;
      }
      __injectTabularAccessor(e) {
        this._tabularAccessor = e;
      }
      setDefaultRow(e) {
        this.tabularAccessor.setDefaultRow(e);
      }
    }
    class y extends r {
      constructor(e, t) {
        super(e, t),
          (this._value = new Map()),
          (this._defaultRow = []),
          (this._columnState = []),
          t && this.__prepareAssembler(t);
      }
      get value() {
        return this._value;
      }
      get defaultRow() {
        return this._defaultRow;
      }
      get columnState() {
        return this._columnState;
      }
      getRowId(e) {
        return [...this._value.keys()][e];
      }
      getRowIndex(e) {
        return [...this._value.keys()].findIndex((t) => t === e);
      }
      getRow(e) {
        let t;
        return this._value.has(e) && (t = [e, this._value.get(e)]), t;
      }
      createRow(e) {
        let t = [];
        for (let i of this._defaultRow) {
          let a = new s(),
            n = i.clone(a);
          e && i.id in e && (n.value = e[i.id]), t.push(n);
        }
        return [T["c"](), t];
      }
      insertRow(e, t) {
        let i = this.__prepareAssembler(),
          a = [];
        for (let n of this._defaultRow) {
          let t = e[1].find(
            (e) => e.id === n.id && e.constructor.name === n.constructor.name
          );
          if (!t) throw Error("Row does not match the table's structure.");
          a.push(t);
        }
        for (let n of a) n.__prepareAssembler().attachToTabularProperty(i);
        if (void 0 === t) this._value.set(e[0], a);
        else {
          let i = [...this._value.entries()];
          i.splice(t, 0, [e[0], a]), (this._value = new Map(i));
        }
        this.emit("insert-row", this, [...a], e[0]);
      }
      moveRow(e, t) {
        let i = [...this._value.entries()];
        i.splice(t, 0, i.splice(e, 1)[0]),
          (this._value = new Map(i)),
          this.emit("move-row", this, e, t);
      }
      deleteRow(e) {
        if (
          ("number" === typeof e && (e = [...this._value.keys()][e]),
          void 0 === e || !this._value.has(e))
        )
          return !1;
        let t = this._value.get(e);
        for (let i of t) i.__prepareAssembler().detachFromParent();
        return this._value.delete(e), this.emit("delete-row", this, t, e), !0;
      }
      captureColumnSnapshot(e, t) {
        let i,
          a,
          n = this._columnState.findIndex((t) => t.id === e);
        if (-1 === n) throw new Error(`Column '${e}' does not exist.`);
        if (void 0 === t)
          return {
            id: this._columnState[n].id,
            sort: this._columnState[n].sort,
            ids: [...this._value.keys()],
          };
        switch (t) {
          case v.Descending:
            a = 1;
            break;
          case v.Ascending:
            a = -1;
            break;
          case v.None:
            a = 0;
            break;
        }
        switch (this._defaultRow[n].constructor.name) {
          case h.name:
            i = [...this._value.keys()].sort((e, t) => {
              var i, o;
              let s = this._value.get(e)[n],
                r = this._value.get(t)[n];
              if (s instanceof h && r instanceof h) {
                let e = null !== (i = s.value) && void 0 !== i ? i : "",
                  t = null !== (o = r.value) && void 0 !== o ? o : "";
                return e.localeCompare(t) * a;
              }
              throw new Error("Properties mismatch column type.");
            });
            break;
          case g.name:
          case x.name:
            i = [...this._value.keys()].sort((e, t) => {
              var i, o;
              let s = this._value.get(e)[n],
                r = this._value.get(t)[n];
              if (s instanceof m && r instanceof m) {
                let e = null !== (i = s.value) && void 0 !== i ? i : 0,
                  t = null !== (o = r.value) && void 0 !== o ? o : 0;
                return (e - t) * a;
              }
              throw new Error("Properties mismatch column type.");
            });
            break;
          case p.name:
          case d.name:
          case u.name:
            i = [...this._value.keys()].sort((e, t) => {
              var i, o;
              let s = this._value.get(e)[n],
                r = this._value.get(t)[n];
              if (s instanceof u && r instanceof u) {
                let e =
                    null !== (i = s.value) && void 0 !== i ? i : new Date(0),
                  t = null !== (o = r.value) && void 0 !== o ? o : new Date(0);
                return (e.getTime() - t.getTime()) * a;
              }
              throw new Error("Properties mismatch column type.");
            });
            break;
          case b.name:
            i = [...this._value.keys()].sort((e, t) => {
              var i, o, s, r;
              let l = this._value.get(e)[n],
                c = this._value.get(t)[n];
              if (l instanceof b && c instanceof b) {
                let e =
                    null !==
                      (o =
                        null === (i = l.value) || void 0 === i
                          ? void 0
                          : i.toString()) && void 0 !== o
                      ? o
                      : "",
                  t =
                    null !==
                      (r =
                        null === (s = c.value) || void 0 === s
                          ? void 0
                          : s.toString()) && void 0 !== r
                      ? r
                      : "";
                return e.localeCompare(t) * a;
              }
              throw new Error("Properties mismatch column type.");
            });
            break;
          default:
            throw new Error("Cannot sort non-atomic property type.");
        }
        return {
          id: this._defaultRow[n].id,
          sort: t,
          ids: i,
        };
      }
      applyColumnSnapshot(e) {
        let t = this._value.size === e.ids.length;
        for (let o of e.ids) t && (t = this._value.has(o));
        if (!t) throw new Error("Invalid snapshot.");
        let i = e.id,
          a = this._columnState.find((e) => e.id === i);
        if (!a) throw new Error(`Column '${i}' does not exist.`);
        a.sort = e.sort;
        let n = [];
        for (let o of e.ids) n.push([o, this._value.get(o)]);
        (this._value = new Map(n)), this.emit("reorder-row", this);
      }
      toString() {
        return "[ Not Supported ]";
      }
      __prepareAssembler(e = new f()) {
        return (
          super.__prepareAssembler(e),
          e.__injectTabularAccessor({
            property: this,
            setDefaultRow: (e) => {
              (this._value = new Map()), (this._defaultRow = e);
              for (let t of this._defaultRow)
                this._columnState.push({
                  id: t.id,
                  name: t.name,
                  sort: v.None,
                  col: Array.isArray(t.col) ? [...t.col] : t.col,
                  row: Array.isArray(t.row) ? [...t.row] : t.row,
                });
            },
          }),
          e
        );
      }
    }
    class O extends y {
      constructor(e, t) {
        super(e, t),
          (this.layout = {
            cols: e.layout.cols,
          }),
          (this._plugins = null);
      }
      clone(e, t = !1) {
        var i;
        let a = new O(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            layout: {
              cols: this.layout.cols,
            },
          },
          e
        );
        t ||
          null === (i = this._plugins) ||
          void 0 === i ||
          i.forEach(({ plugin: e }) => a.tryInstallPlugin(e));
        for (let [n, o] of this._value)
          a.insertRow([n, o.map((e) => e.clone())]);
        return a;
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new c["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
    }
    class S extends y {
      constructor(e, t) {
        super(e, t),
          (this.layout = {
            summary: e.layout.summary,
            rows: e.layout.rows,
            cols: e.layout.cols,
          }),
          (this._collapsed = new Map()),
          (this._plugins = null);
      }
      get collapsed() {
        return this._collapsed;
      }
      insertRow(e, t) {
        this._collapsed.set(e[0], !0), super.insertRow(e, t);
      }
      deleteRow(e) {
        return (
          "number" === typeof e && (e = [...this._value.keys()][e]),
          void 0 !== e && this._collapsed.delete(e),
          super.deleteRow(e)
        );
      }
      setRowCollapse(e, t) {
        this._collapsed.has(e) && this._collapsed.set(e, t);
      }
      clone(e, t = !1) {
        var i;
        let a = new S(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            link: this.link,
            row: this.row,
            col: this.col,
            layout: {
              cols: this.layout.cols,
              rows: this.layout.rows,
              summary: this.layout.summary,
            },
          },
          e
        );
        t ||
          null === (i = this._plugins) ||
          void 0 === i ||
          i.forEach(({ plugin: e }) => a.tryInstallPlugin(e));
        for (let [n, o] of this._value)
          a.insertRow([n, o.map((e) => e.clone())]),
            a.setRowCollapse(n, this._collapsed.get(n));
        return a;
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new c["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
    }
    class w {
      static parse(e, t) {
        let i = [];
        return (
          this.parseExpression(t, e.split(this.RESERVED).filter(Boolean), i), i
        );
      }
      static parseExpression(e, t, i) {
        this.SYMBOLS.BOLD.test(t[0])
          ? (i.push({
              text: "",
              format: "bold",
            }),
            this.parseBold(e, t, i),
            this.parseExpression(e, t, i))
          : 0 < t.length &&
            (i.push({
              text: "",
              format: "normal",
            }),
            this.parseText(e, t, i),
            this.parseExpression(e, t, i));
      }
      static parseBold(e, t, i) {
        this.accept(t, this.SYMBOLS.BOLD),
          this.parseText(e, t, i),
          this.accept(t, this.SYMBOLS.BOLD);
      }
      static parseText(e, t, i) {
        this.SYMBOLS.BEG_ID.test(t[0])
          ? (this.parseIdentifier(e, t, i), this.parseText(e, t, i))
          : this.RESERVED.test(t[0]) ||
            ((i.at(-1).text += t[0]), t.shift(), this.parseText(e, t, i));
      }
      static parseIdentifier(e, t, i) {
        if (!this.accept(t, this.SYMBOLS.BEG_ID))
          throw new Error(`Unexpected token: '${t[0]}'`);
        let a = t[0].trim(),
          n = e.find((e) => e.id === a);
        if (void 0 === n) i.at(-1).text += `[Error: Unknown property '${a}']`;
        else {
          let e = n.toString() || n.name;
          i.at(-1).text += e.replace(/\n/g, "");
        }
        if ((t.shift(), !this.accept(t, this.SYMBOLS.END_ID)))
          throw new Error(`Unexpected token: '${t[0]}'`);
      }
      static accept(e, t) {
        return !!t.test(e[0]) && (e.shift(), !0);
      }
    }
    (w.SYMBOLS = {
      BEG_ID: /(?<!\\)\{\{/,
      END_ID: /(?<!\\)\}\}/,
      BOLD: /(?<!\\)\*\*/,
    }),
      (w.RESERVED = new RegExp(
        `(${Object.values(w.SYMBOLS)
          .map((e) => e.source)
          .join("|")})`
      ));
  },
  "1afa": function (e, t, i) {},
  "1c81": function (e, t, i) {
    "use strict";
    i.d(t, "m", function () {
      return a["l"];
    }),
      i.d(t, "a", function () {
        return a["a"];
      }),
      i.d(t, "b", function () {
        return a["b"];
      }),
      i.d(t, "e", function () {
        return a["e"];
      }),
      i.d(t, "u", function () {
        return a["r"];
      }),
      i.d(t, "f", function () {
        return a["f"];
      }),
      i.d(t, "q", function () {
        return a["n"];
      }),
      i.d(t, "h", function () {
        return a["h"];
      }),
      i.d(t, "i", function () {
        return a["i"];
      }),
      i.d(t, "j", function () {
        return a["j"];
      }),
      i.d(t, "g", function () {
        return a["g"];
      }),
      i.d(t, "s", function () {
        return a["p"];
      }),
      i.d(t, "t", function () {
        return a["q"];
      }),
      i.d(t, "c", function () {
        return a["c"];
      }),
      i.d(t, "d", function () {
        return a["d"];
      }),
      i.d(t, "r", function () {
        return a["o"];
      }),
      i.d(t, "o", function () {
        return n["a"];
      }),
      i.d(t, "p", function () {
        return n["b"];
      }),
      i.d(t, "k", function () {
        return l;
      }),
      i.d(t, "l", function () {
        return s;
      }),
      i.d(t, "n", function () {
        return c["a"];
      });
    var a = i("174a"),
      n = i("8096"),
      o = i("13be");
    class s {
      constructor() {
        (this._accessor = null), (this._sectionAssemblers = new Map());
      }
      get page() {
        return this.accessor.page;
      }
      get sections() {
        return this._sectionAssemblers;
      }
      get accessor() {
        if (null === this._accessor)
          throw new Error("Assembler is not configured with a page.");
        return this._accessor;
      }
      __injectAccessor(e) {
        (this._accessor = e), (this._sectionAssemblers = new Map());
      }
      attachSection(e) {
        if (this.includesSection(e)) return;
        let t = e.section.id;
        this.includesSection(t) && this.detachSection(t),
          this.accessor.sections.set(t, e.section),
          this._sectionAssemblers.set(t, e),
          e.attachToPage(this);
      }
      detachSection(e) {
        if (!this.includesSection(e)) return;
        "string" === typeof e && (e = this.sections.get(e));
        let t = e.section.id;
        this.accessor.sections.delete(t),
          this._sectionAssemblers.delete(t),
          e.detachFromPage();
      }
      includesSection(e) {
        let t = this.accessor.sections;
        if ("string" === typeof e) return t.has(e);
        let i = e.section.id;
        if (!t.has(i)) return !1;
        let a = t.get(i);
        return a.instance === e.section.instance;
      }
    }
    var r = i("a966");
    class l extends o["a"] {
      constructor(e, t) {
        var i;
        super();
        let a = new Map();
        (this.id = e.id),
          (this.path = null !== (i = e.path) && void 0 !== i ? i : e.id),
          (this.sections = a),
          (this._plugins = null),
          t && this.__prepareAssembler(t);
      }
      clone(e) {
        (null !== e && void 0 !== e) || (e = new s());
        let t = new l(
          {
            id: this.id,
            path: this.path,
          },
          e
        );
        for (let i of this.sections.values()) {
          let t = new n["b"]();
          i.clone(t), e.attachSection(t);
        }
        return t;
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new r["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
      __prepareAssembler(e = new s()) {
        return (
          e.__injectAccessor({
            page: this,
            sections: this.sections,
          }),
          e
        );
      }
    }
    i("f112");
    var c = i("2576");
  },
  "1dc6": function (e, t, i) {},
  2137: function (e, t, i) {
    "use strict";
    var a = i("991e");
    i.d(t, "a", function () {
      return a["a"];
    });
    var n = i("7770");
    i.d(t, "b", function () {
      return n["a"];
    }),
      i.d(t, "c", function () {
        return n["b"];
      });
  },
  2337: function (e, t, i) {
    "use strict";
    i("fa88");
  },
  2576: function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return a;
    });
    class a {}
  },
  "28d3": function (e, t, i) {},
  2975: function (e, t, i) {},
  "34aa": function (e, t, i) {},
  "39d4": function (e, t, i) {
    "use strict";
    i("880a");
  },
  "3bd1": function (e, t, i) {
    "use strict";
    i("5aff");
  },
  "3c3e": function (e, t, i) {},
  "3cef": function (e, t, i) {
    "use strict";
    i("1afa");
  },
  4771: function (e, t, i) {},
  "50e3": function (e, t, i) {},
  5475: function (e, t, i) {
    "use strict";
    i("031a");
  },
  5800: function (e, t, i) {
    "use strict";
    i.r(t);
    var a = i("7a23");
    const n = {
        class: "field-name",
      },
      o = ["href"];
    function s(e, t, i, s, r, l) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "div",
          {
            class: "field-grid-control",
            style: Object(a["o"])(e.grid),
          },
          [
            (Object(a["p"])(!0),
            Object(a["f"])(
              a["a"],
              null,
              Object(a["u"])(
                e.properties,
                (i) => (
                  Object(a["p"])(),
                  Object(a["f"])(
                    a["a"],
                    {
                      key: i.id,
                    },
                    [
                      Object(a["g"])(
                        "div",
                        {
                          class: "field-info",
                          style: Object(a["o"])(e.propTitleGridStyle(i)),
                        },
                        [
                          Object(a["g"])("p", n, Object(a["y"])(i.name), 1),
                          i.help
                            ? (Object(a["p"])(),
                              Object(a["f"])(
                                "a",
                                {
                                  key: 0,
                                  class: "field-help",
                                  href: i.help,
                                  target: "”_blank”",
                                },
                                "",
                                8,
                                o
                              ))
                            : Object(a["e"])("", !0),
                        ],
                        4
                      ),
                      (Object(a["p"])(),
                      Object(a["d"])(
                        Object(a["x"])(e.getField(i)),
                        {
                          class: "field-value",
                          style: Object(a["o"])(e.propFieldGridStyle(i)),
                          property: i,
                          onExecute:
                            t[0] || (t[0] = (t) => e.$emit("execute", t)),
                        },
                        null,
                        40,
                        ["style", "property"]
                      )),
                    ],
                    64
                  )
                )
              ),
              128
            )),
          ],
          4
        )
      );
    }
    const r = {
        class: "options-container",
      },
      l = {
        class: "value",
      };
    function c(e, t, i, n, o, s) {
      const c = Object(a["w"])("OptionsList"),
        u = Object(a["w"])("FocusBox");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          u,
          {
            class: Object(a["n"])(["text-field-control", e.alignment]),
            tabindex: "0",
            pointerEvent: "click",
            onFocusin: e.onFocusIn,
            onFocusout: e.onFocusOut,
          },
          {
            default: Object(a["C"])(() => [
              Object(a["g"])("div", r, [
                null !== e.select
                  ? (Object(a["p"])(),
                    Object(a["d"])(
                      c,
                      {
                        key: 0,
                        class: "options-list",
                        align: e.property.alignment,
                        select: e.select,
                        options: e.suggestions,
                        maxHeight: e.maxHeight,
                        onSelect: e.updatePropertyFromSuggestion,
                      },
                      null,
                      8,
                      ["align", "select", "options", "maxHeight", "onSelect"]
                    ))
                  : Object(a["e"])("", !0),
              ]),
              Object(a["g"])("div", l, [
                Object(a["D"])(
                  Object(a["g"])(
                    "textarea",
                    {
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (t) => (e.value = t)),
                      ref: "field",
                      placeholder: "None",
                      onInput:
                        t[1] || (t[1] = (...t) => e.onInput && e.onInput(...t)),
                      onKeyup:
                        t[2] || (t[2] = Object(a["E"])(() => {}, ["stop"])),
                      onKeydown:
                        t[3] ||
                        (t[3] = Object(a["E"])(
                          (...t) => e.onKeyDown && e.onKeyDown(...t),
                          ["stop"]
                        )),
                    },
                    null,
                    544
                  ),
                  [[a["z"], e.value]]
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ["class", "onFocusin", "onFocusout"]
        )
      );
    }
    var u = i("7aa9"),
      p = i("9ae2"),
      d = i("f139"),
      h = i("1c81"),
      v = i("e0ac");
    const T = {
        key: 0,
        class: "options",
      },
      m = ["list-id", "onClick", "onMouseenter"],
      g = {
        key: 1,
        class: "no-options",
      };
    function x(e, t, i, n, o, s) {
      const r = Object(a["w"])("ScrollBox");
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "div",
          {
            class: Object(a["n"])([
              "options-list-field-control",
              e.alignment,
              {
                flip: e.flip,
              },
            ]),
          },
          [
            Object(a["i"])(
              r,
              {
                top: e.scrollTop,
                style: Object(a["o"])(e.style),
                propagateScroll: !1,
              },
              {
                default: Object(a["C"])(() => [
                  e.hasOptions
                    ? (Object(a["p"])(),
                      Object(a["f"])("ul", T, [
                        (Object(a["p"])(!0),
                        Object(a["f"])(
                          a["a"],
                          null,
                          Object(a["u"])(
                            e.options,
                            (t) => (
                              Object(a["p"])(),
                              Object(a["f"])(
                                "li",
                                {
                                  ref_for: !0,
                                  ref: "items",
                                  key: t.value,
                                  "list-id": t.value,
                                  class: Object(a["n"])({
                                    active: e.isActive(t),
                                    null: e.isNull(t),
                                  }),
                                  onClick: (i) => e.$emit("select", t.value),
                                  onMouseenter: (i) => (e.active = t.value),
                                  "exit-focus-box": "",
                                },
                                Object(a["y"])(t.text),
                                43,
                                m
                              )
                            )
                          ),
                          128
                        )),
                      ]))
                    : Object(a["e"])("", !0),
                  e.hasOptions
                    ? Object(a["e"])("", !0)
                    : (Object(a["p"])(),
                      Object(a["f"])("div", g, " No matches ")),
                ]),
                _: 1,
              },
              8,
              ["top", "style"]
            ),
          ],
          2
        )
      );
    }
    var b = i("6f01"),
      f = Object(a["j"])({
        name: "EnumField",
        props: {
          maxHeight: {
            type: Number,
            required: !0,
          },
          options: {
            type: Array,
            required: !0,
          },
          select: {
            type: String,
          },
          align: {
            type: Number,
          },
        },
        data() {
          return {
            flip: !1,
            active: this.select,
            scrollTop: 0,
          };
        },
        computed: {
          alignment() {
            switch (this.align) {
              case h["a"].TopLeft:
              case h["a"].MiddleLeft:
              case h["a"].BottomLeft:
              default:
                return "align-left";
              case h["a"].TopCenter:
              case h["a"].MiddleCenter:
              case h["a"].BottomCenter:
                return "align-center";
              case h["a"].TopRight:
              case h["a"].MiddleRight:
              case h["a"].BottomRight:
                return "align-right";
            }
          },
          style() {
            return {
              maxHeight: this.maxHeight + "px",
            };
          },
          hasOptions() {
            return 0 < this.options.length;
          },
        },
        emits: ["select"],
        methods: {
          isNull(e) {
            return null === e.value;
          },
          isActive(e) {
            return this.active === e.value;
          },
          focusActive() {
            let e;
            for (let t of this.$refs.items)
              if (this.select === t.getAttribute("list-id")) {
                e = t;
                break;
              }
            e && (this.scrollTop = e.offsetTop - 6);
          },
        },
        watch: {
          select() {
            (this.active = this.select), this.focusActive();
          },
          options() {
            this.$nextTick(() => {
              this.focusActive();
            });
          },
        },
        mounted() {
          let e = "scroll-content",
            t = this.$el,
            i = this.$el.parentElement,
            a = document.body;
          while (i !== a && !i.classList.contains(e)) i = i.parentElement;
          let { bottom: n } = i.getBoundingClientRect(),
            { bottom: o } = t.getBoundingClientRect();
          (this.flip = n < o), this.focusActive();
        },
        components: {
          ScrollBox: b["a"],
        },
      }),
      y = (i("655e"), i("6b0d")),
      O = i.n(y);
    const S = O()(f, [
      ["render", x],
      ["__scopeId", "data-v-7ebe2dc2"],
    ]);
    var w = S,
      j = Object(a["j"])({
        name: "TextField",
        setup() {
          return {
            field: Object(a["t"])(null),
          };
        },
        props: {
          property: {
            type: Object,
            required: !0,
          },
          maxHeight: {
            type: Number,
            default: 200,
          },
        },
        data() {
          return {
            value: "",
            select: null,
            onResizeObserver: null,
          };
        },
        computed: {
          alignment() {
            switch (this.property.alignment) {
              case h["a"].TopLeft:
                return "align-top align-left";
              case h["a"].TopCenter:
                return "align-top align-center";
              case h["a"].TopRight:
                return "align-top align-right";
              case h["a"].MiddleLeft:
                return "align-middle align-left";
              case h["a"].MiddleCenter:
                return "align-middle align-center";
              case h["a"].MiddleRight:
                return "align-middle align-right";
              case h["a"].BottomLeft:
                return "align-bottom align-left";
              case h["a"].BottomCenter:
                return "align-bottom align-center";
              case h["a"].BottomRight:
                return "align-bottom align-right";
            }
          },
          suggestions() {
            let e = [],
              t = this.value.toLocaleLowerCase();
            for (let i = 0; i < this.property.suggestions.length; i++) {
              let a = this.property.suggestions[i];
              a.toLocaleLowerCase().includes(t) &&
                e.push({
                  id: Object(d["a"])(a),
                  text: a,
                });
            }
            return e;
          },
        },
        emits: ["execute"],
        methods: {
          onFocusIn() {
            this.field.focus(), "" === this.value && this.promptSuggestions();
            let e = p["j"](this.property);
            this.$emit("execute", e);
          },
          onFocusOut() {
            this.stopSuggestions();
            let e = p["f"](this.property);
            this.$emit("execute", e);
          },
          onInput() {
            this.updateProperty(this.value), this.promptSuggestions();
          },
          onKeyDown(e) {
            let t = e.target;
            if (t.selectionStart !== t.selectionEnd) return;
            let i,
              a = this.suggestions,
              n = a.findIndex((e) => e.id === this.select);
            switch (e.key) {
              case "ArrowUp":
                0 < n && (this.select = a[n - 1].id),
                  null !== this.select && e.preventDefault();
                break;
              case "ArrowDown":
                n < a.length - 1 && (this.select = a[n + 1].id),
                  null !== this.select && e.preventDefault();
                break;
              case "Tab":
                (i = -1 !== n),
                  i && (i = "" !== this.value),
                  i && (i = this.value !== a[n].text),
                  i &&
                    (this.updatePropertyFromSuggestion(a[n].id),
                    this.stopSuggestions(),
                    e.preventDefault());
                break;
              case "Enter":
                (i = -1 !== n),
                  i && (i = this.value !== a[n].text),
                  i &&
                    (this.updatePropertyFromSuggestion(a[n].id),
                    this.stopSuggestions(),
                    e.preventDefault());
                break;
            }
          },
          promptSuggestions() {
            var e;
            let t =
                this.value ===
                (null === (e = this.suggestions[0]) || void 0 === e
                  ? void 0
                  : e.text),
              i = 1 === this.suggestions.length;
            if (t && i) return void (this.select = null);
            this.select = null;
            let a = this.value.toLocaleLowerCase();
            for (let n of this.suggestions)
              if (n.text.toLocaleLowerCase().includes(a))
                return void (this.select = n.id);
          },
          stopSuggestions() {
            this.select = null;
          },
          updatePropertyFromSuggestion(e) {
            let t = this.suggestions.find((t) => t.id === e);
            t && this.updateProperty(t.text);
          },
          updateProperty(e) {
            if (this.property.value !== e) {
              let t = e || null,
                i = p["n"](this.property, t);
              this.$emit("execute", i);
            }
            this.refreshValue();
          },
          refreshValue() {
            var e;
            (this.value =
              null !== (e = this.property.value) && void 0 !== e ? e : ""),
              this.$nextTick(() => {
                this.refreshHeight();
              });
          },
          refreshHeight() {
            null !== this.field &&
              ((this.field.style.height = "0px"),
              (this.field.style.height = this.field.scrollHeight + "px"));
          },
        },
        watch: {
          property() {
            this.refreshValue();
          },
          "property.value"() {
            this.refreshValue();
          },
        },
        mounted() {
          (this.onResizeObserver = new ResizeObserver(() => {
            this.refreshHeight();
          })),
            this.onResizeObserver.observe(this.field),
            this.refreshValue();
          let e = u["g"](this.property, this.$el);
          this.$emit("execute", e);
        },
        unmounted() {
          this.onResizeObserver.disconnect();
          let e = u["a"](this.property);
          this.$emit("execute", e);
        },
        components: {
          FocusBox: v["a"],
          OptionsList: w,
        },
      });
    i("821d");
    const A = O()(j, [
      ["render", c],
      ["__scopeId", "data-v-5a7fd553"],
    ]);
    var _ = A;
    const C = (e) => (
        Object(a["r"])("data-v-337bd2bd"), (e = e()), Object(a["q"])(), e
      ),
      I = {
        class: "options-container",
      },
      P = {
        class: "value-container",
      },
      k = C(() =>
        Object(a["g"])(
          "div",
          {
            class: "dropdown-arrow",
          },
          "▼",
          -1
        )
      );
    function M(e, t, i, n, o, s) {
      const r = Object(a["w"])("OptionsList"),
        l = Object(a["w"])("FocusBox");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          l,
          {
            class: Object(a["n"])(["enum-field-control", e.alignment]),
            tabindex: "0",
            pointerEvent: "click",
            onFocusin: e.onFocusIn,
            onFocusout: e.onFocusOut,
          },
          {
            default: Object(a["C"])(() => [
              Object(a["g"])("div", I, [
                e.showMenu
                  ? (Object(a["p"])(),
                    Object(a["d"])(
                      r,
                      {
                        key: 0,
                        class: "options-list",
                        align: e.property.alignment,
                        select: e.select,
                        options: e.options,
                        maxHeight: e.maxHeight,
                        onSelect: e.updateProperty,
                      },
                      null,
                      8,
                      ["align", "select", "options", "maxHeight", "onSelect"]
                    ))
                  : Object(a["e"])("", !0),
              ]),
              Object(a["g"])("div", P, [
                Object(a["D"])(
                  Object(a["g"])(
                    "div",
                    {
                      class: Object(a["n"])([
                        "value-text",
                        {
                          "is-null": e.isNull,
                        },
                      ]),
                    },
                    Object(a["y"])(e.selectText),
                    3
                  ),
                  [[a["A"], !e.showSearch]]
                ),
                Object(a["D"])(
                  Object(a["g"])(
                    "input",
                    {
                      type: "text",
                      ref: "search",
                      class: "value-search",
                      placeholder: "Search",
                      onInput:
                        t[0] ||
                        (t[0] = (...t) =>
                          e.onSearchInput && e.onSearchInput(...t)),
                      onKeyup:
                        t[1] || (t[1] = Object(a["E"])(() => {}, ["stop"])),
                      onKeydown:
                        t[2] ||
                        (t[2] = Object(a["E"])(
                          (...t) =>
                            e.onSearchKeyDown && e.onSearchKeyDown(...t),
                          ["stop"]
                        )),
                      "onUpdate:modelValue":
                        t[3] || (t[3] = (t) => (e.searchTerm = t)),
                    },
                    null,
                    544
                  ),
                  [
                    [a["z"], e.searchTerm],
                    [a["A"], e.showSearch],
                  ]
                ),
                k,
              ]),
            ]),
            _: 1,
          },
          8,
          ["class", "onFocusin", "onFocusout"]
        )
      );
    }
    var E = Object(a["j"])({
      name: "EnumField",
      setup() {
        return {
          search: Object(a["t"])(null),
        };
      },
      props: {
        property: {
          type: Object,
          required: !0,
        },
        maxHeight: {
          type: Number,
          default: 200,
        },
      },
      data() {
        return {
          select: this.property.value,
          showMenu: !1,
          showSearch: !1,
          searchTerm: "",
        };
      },
      computed: {
        alignment() {
          switch (this.property.alignment) {
            case h["a"].TopLeft:
            case h["a"].MiddleLeft:
            case h["a"].BottomLeft:
              return "align-left";
            case h["a"].TopCenter:
            case h["a"].MiddleCenter:
            case h["a"].BottomCenter:
              return "align-center";
            case h["a"].TopRight:
            case h["a"].MiddleRight:
            case h["a"].BottomRight:
              return "align-right";
          }
        },
        isNull() {
          return null === this.property.value;
        },
        options() {
          let e = [];
          "" === this.searchTerm &&
            e.push({
              value: null,
              text: "None",
            });
          let t = this.searchTerm.toLocaleLowerCase();
          for (let [i, a] of this.property.validOptions)
            ("" === t || a.toLocaleLowerCase().includes(t)) &&
              e.push({
                value: i,
                text: a,
              });
          return e;
        },
        selectText() {
          return null !== this.select
            ? this.property.options.get(this.select)
            : "None";
        },
        style() {
          return {
            maxHeight: this.maxHeight + "px",
          };
        },
      },
      emits: ["execute"],
      methods: {
        onFocusIn() {
          (this.showMenu = !0),
            (this.showSearch = !0),
            setTimeout(() => {
              var e;
              null === (e = this.search) || void 0 === e || e.focus();
            }, 0);
          let e = p["j"](this.property);
          this.$emit("execute", e);
        },
        onFocusOut() {
          (this.showMenu = !1),
            (this.showSearch = !1),
            (this.searchTerm = ""),
            this.refreshValue();
          let e = p["f"](this.property);
          this.$emit("execute", e);
        },
        onSearchInput() {
          if (((this.select = null), "" === this.searchTerm))
            return void (this.select = this.property.value);
          let e = this.searchTerm.toLocaleLowerCase();
          for (let [t, i] of this.property.validOptions)
            if (i.toLocaleLowerCase().includes(e))
              return void (this.select = t);
        },
        onSearchKeyDown(e) {
          let t,
            i = e.target;
          if (i.selectionStart !== i.selectionEnd) return;
          let a = this.options;
          switch (e.key) {
            case "ArrowUp":
              (t = a.findIndex((e) => e.value === this.select)),
                0 < t && (this.select = a[t - 1].value);
              break;
            case "ArrowDown":
              (t = a.findIndex((e) => e.value === this.select)),
                t < a.length - 1 && (this.select = a[t + 1].value);
              break;
            case "Tab":
            case "Enter":
              this.updateProperty(this.select), this.search.blur();
              break;
          }
        },
        updateProperty(e) {
          if (this.property.value !== e) {
            let t = p["l"](this.property, e);
            this.$emit("execute", t);
          }
        },
        refreshValue() {
          this.select = this.property.value;
        },
      },
      watch: {
        property() {
          this.refreshValue();
        },
        "property.value"() {
          this.refreshValue();
        },
      },
      mounted() {
        this.refreshValue();
        let e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted() {
        let e = u["a"](this.property);
        this.$emit("execute", e);
      },
      components: {
        FocusBox: v["a"],
        OptionsList: w,
      },
    });
    i("fc86");
    const D = O()(E, [
      ["render", M],
      ["__scopeId", "data-v-337bd2bd"],
    ]);
    var R = D;
    const N = {
      class: "increment-arrows",
    };
    function F(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "div",
          {
            class: Object(a["n"])(["number-field-control", e.alignment]),
            tabindex: "0",
            onFocus: t[8] || (t[8] = (t) => e.onFocus()),
          },
          [
            Object(a["D"])(
              Object(a["g"])(
                "input",
                {
                  "onUpdate:modelValue": t[0] || (t[0] = (t) => (e.value = t)),
                  type: "text",
                  ref: "field",
                  placeholder: "None",
                  onFocus:
                    t[1] || (t[1] = (...t) => e.onSelect && e.onSelect(...t)),
                  onInput:
                    t[2] || (t[2] = (...t) => e.onInput && e.onInput(...t)),
                  onKeyup: t[3] || (t[3] = Object(a["E"])(() => {}, ["stop"])),
                  onKeydown:
                    t[4] ||
                    (t[4] = Object(a["E"])(
                      (...t) => e.onKeyDown && e.onKeyDown(...t),
                      ["stop"]
                    )),
                  onBlur:
                    t[5] ||
                    (t[5] = (...t) => e.onDeselect && e.onDeselect(...t)),
                },
                null,
                544
              ),
              [[a["z"], e.value]]
            ),
            Object(a["g"])("div", N, [
              Object(a["g"])(
                "div",
                {
                  class: "up-arrow",
                  onClick: t[6] || (t[6] = (t) => e.updateProperty(1)),
                },
                "▲"
              ),
              Object(a["g"])(
                "div",
                {
                  class: "down-arrow",
                  onClick: t[7] || (t[7] = (t) => e.updateProperty(-1)),
                },
                "▼"
              ),
            ]),
          ],
          34
        )
      );
    }
    var L = Object(a["j"])({
      name: "NumberField",
      setup() {
        return {
          field: Object(a["t"])(null),
        };
      },
      props: {
        property: {
          type: Object,
          required: !0,
        },
      },
      data() {
        return {
          value: "",
        };
      },
      computed: {
        alignment() {
          switch (this.property.alignment) {
            case h["a"].TopLeft:
            case h["a"].MiddleLeft:
            case h["a"].BottomLeft:
              return "align-left";
            case h["a"].TopCenter:
            case h["a"].MiddleCenter:
            case h["a"].BottomCenter:
              return "align-center";
            case h["a"].TopRight:
            case h["a"].MiddleRight:
            case h["a"].BottomRight:
              return "align-right";
          }
        },
      },
      emits: ["execute"],
      methods: {
        onFocus() {
          this.field.focus();
        },
        onInput() {
          "" === this.value && this.updateProperty(0);
        },
        onSelect() {
          let e = p["j"](this.property);
          this.$emit("execute", e);
        },
        onDeselect() {
          this.updateProperty(0);
          let e = p["f"](this.property);
          this.$emit("execute", e);
        },
        onKeyDown(e) {
          switch (e.key) {
            case "ArrowUp":
              e.preventDefault(), this.updateProperty(1);
              break;
            case "ArrowDown":
              e.preventDefault(), this.updateProperty(-1);
              break;
          }
        },
        updateProperty(e = 0) {
          let t;
          if ("" === this.value && 0 === e) t = null;
          else {
            (t = parseFloat(this.value)), Number.isNaN(t) ? (t = 0) : (t += e);
            let { min: i, max: a } = this.property;
            (t = Object(d["b"])(t, i, a)),
              this.property instanceof h["i"] && (t = Math.round(t));
          }
          if (this.property.value !== t) {
            let e = p["m"](this.property, t);
            this.$emit("execute", e);
          }
          this.refreshValue();
        },
        refreshValue() {
          null === this.property.value
            ? (this.value = "")
            : (this.value = "" + this.property.value);
        },
      },
      watch: {
        property() {
          this.refreshValue();
        },
        "property.value"() {
          this.refreshValue();
        },
      },
      mounted() {
        this.refreshValue();
        let e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted() {
        let e = u["a"](this.property);
        this.$emit("execute", e);
      },
    });
    i("995e");
    const B = O()(L, [
      ["render", F],
      ["__scopeId", "data-v-7b9638de"],
    ]);
    var H = B;
    const G = (e) => (
        Object(a["r"])("data-v-2ec8e16a"), (e = e()), Object(a["q"])(), e
      ),
      U = {
        class: "grid-container",
      },
      V = {
        class: "value",
      },
      z = {
        key: 0,
        class: "null-value",
      },
      $ = {
        key: 1,
        class: "date-value",
      },
      Y = {
        class: "editor",
      },
      W = G(() => Object(a["g"])("span", null, "/", -1)),
      q = G(() => Object(a["g"])("span", null, "/", -1)),
      K = {
        key: 1,
        class: "space",
      },
      Z = G(() => Object(a["g"])("span", null, ":", -1)),
      J = G(() => Object(a["g"])("span", null, ":", -1)),
      X = G(() =>
        Object(a["g"])(
          "span",
          {
            class: "timezone",
          },
          "Z",
          -1
        )
      );
    function Q(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "div",
          {
            class: Object(a["n"])(["datetime-field-control", e.alignment]),
            tabindex: "0",
            onFocus: t[24] || (t[24] = (t) => e.onFocus()),
          },
          [
            Object(a["g"])("div", U, [
              Object(a["D"])(
                Object(a["g"])(
                  "div",
                  V,
                  [
                    null === e.property.value
                      ? (Object(a["p"])(), Object(a["f"])("p", z, " None "))
                      : (Object(a["p"])(),
                        Object(a["f"])("p", $, [
                          e.includeDate
                            ? (Object(a["p"])(),
                              Object(a["f"])(
                                a["a"],
                                {
                                  key: 0,
                                },
                                [
                                  Object(a["h"])(
                                    Object(a["y"])(e.prop_M) +
                                      " " +
                                      Object(a["y"])(e.prop_D) +
                                      ", " +
                                      Object(a["y"])(e.prop_Y),
                                    1
                                  ),
                                ],
                                64
                              ))
                            : Object(a["e"])("", !0),
                          e.includeDate && e.includeTime
                            ? (Object(a["p"])(),
                              Object(a["f"])(
                                a["a"],
                                {
                                  key: 1,
                                },
                                [Object(a["h"])(" - ")],
                                64
                              ))
                            : Object(a["e"])("", !0),
                          e.includeTime
                            ? (Object(a["p"])(),
                              Object(a["f"])(
                                a["a"],
                                {
                                  key: 2,
                                },
                                [
                                  Object(a["h"])(
                                    Object(a["y"])(e.prop_H) +
                                      ":" +
                                      Object(a["y"])(e.prop_m) +
                                      ":" +
                                      Object(a["y"])(e.prop_s),
                                    1
                                  ),
                                ],
                                64
                              ))
                            : Object(a["e"])("", !0),
                        ])),
                  ],
                  512
                ),
                [[a["A"], !e.showEditor]]
              ),
              Object(a["D"])(
                Object(a["g"])(
                  "div",
                  Y,
                  [
                    e.includeDate
                      ? (Object(a["p"])(),
                        Object(a["f"])(
                          a["a"],
                          {
                            key: 0,
                          },
                          [
                            Object(a["D"])(
                              Object(a["g"])(
                                "input",
                                {
                                  type: "text",
                                  maxlength: "2",
                                  segment: "M",
                                  ref: "M",
                                  class: "M",
                                  placeholder: "MM",
                                  onBlur:
                                    t[0] ||
                                    (t[0] = (...t) =>
                                      e.onDeselect && e.onDeselect(...t)),
                                  onKeyup:
                                    t[1] ||
                                    (t[1] = Object(a["E"])(() => {}, ["stop"])),
                                  onKeydown:
                                    t[2] ||
                                    (t[2] = Object(a["E"])(
                                      (...t) =>
                                        e.onKeyDown && e.onKeyDown(...t),
                                      ["stop"]
                                    )),
                                  "onUpdate:modelValue":
                                    t[3] || (t[3] = (t) => (e.value_M = t)),
                                },
                                null,
                                544
                              ),
                              [[a["z"], e.value_M]]
                            ),
                            W,
                            Object(a["D"])(
                              Object(a["g"])(
                                "input",
                                {
                                  type: "text",
                                  maxlength: "2",
                                  segment: "D",
                                  ref: "D",
                                  class: "D",
                                  placeholder: "DD",
                                  onBlur:
                                    t[4] ||
                                    (t[4] = (...t) =>
                                      e.onDeselect && e.onDeselect(...t)),
                                  onKeyup:
                                    t[5] ||
                                    (t[5] = Object(a["E"])(() => {}, ["stop"])),
                                  onKeydown:
                                    t[6] ||
                                    (t[6] = Object(a["E"])(
                                      (...t) =>
                                        e.onKeyDown && e.onKeyDown(...t),
                                      ["stop"]
                                    )),
                                  "onUpdate:modelValue":
                                    t[7] || (t[7] = (t) => (e.value_D = t)),
                                },
                                null,
                                544
                              ),
                              [[a["z"], e.value_D]]
                            ),
                            q,
                            Object(a["D"])(
                              Object(a["g"])(
                                "input",
                                {
                                  type: "text",
                                  maxlength: "4",
                                  segment: "Y",
                                  ref: "Y",
                                  class: "Y",
                                  placeholder: "YYYY",
                                  onBlur:
                                    t[8] ||
                                    (t[8] = (...t) =>
                                      e.onDeselect && e.onDeselect(...t)),
                                  onKeyup:
                                    t[9] ||
                                    (t[9] = Object(a["E"])(() => {}, ["stop"])),
                                  onKeydown:
                                    t[10] ||
                                    (t[10] = Object(a["E"])(
                                      (...t) =>
                                        e.onKeyDown && e.onKeyDown(...t),
                                      ["stop"]
                                    )),
                                  "onUpdate:modelValue":
                                    t[11] || (t[11] = (t) => (e.value_Y = t)),
                                },
                                null,
                                544
                              ),
                              [[a["z"], e.value_Y]]
                            ),
                          ],
                          64
                        ))
                      : Object(a["e"])("", !0),
                    e.includeDate && e.includeTime
                      ? (Object(a["p"])(), Object(a["f"])("span", K))
                      : Object(a["e"])("", !0),
                    e.includeTime
                      ? (Object(a["p"])(),
                        Object(a["f"])(
                          a["a"],
                          {
                            key: 2,
                          },
                          [
                            Object(a["D"])(
                              Object(a["g"])(
                                "input",
                                {
                                  type: "text",
                                  maxlength: "2",
                                  segment: "H",
                                  ref: "H",
                                  class: "H",
                                  placeholder: "HH",
                                  onBlur:
                                    t[12] ||
                                    (t[12] = (...t) =>
                                      e.onDeselect && e.onDeselect(...t)),
                                  onKeyup:
                                    t[13] ||
                                    (t[13] = Object(a["E"])(() => {}, [
                                      "stop",
                                    ])),
                                  onKeydown:
                                    t[14] ||
                                    (t[14] = Object(a["E"])(
                                      (...t) =>
                                        e.onKeyDown && e.onKeyDown(...t),
                                      ["stop"]
                                    )),
                                  "onUpdate:modelValue":
                                    t[15] || (t[15] = (t) => (e.value_H = t)),
                                },
                                null,
                                544
                              ),
                              [[a["z"], e.value_H]]
                            ),
                            Z,
                            Object(a["D"])(
                              Object(a["g"])(
                                "input",
                                {
                                  type: "text",
                                  maxlength: "2",
                                  segment: "m",
                                  ref: "m",
                                  class: "m",
                                  placeholder: "mm",
                                  onBlur:
                                    t[16] ||
                                    (t[16] = (...t) =>
                                      e.onDeselect && e.onDeselect(...t)),
                                  onKeyup:
                                    t[17] ||
                                    (t[17] = Object(a["E"])(() => {}, [
                                      "stop",
                                    ])),
                                  onKeydown:
                                    t[18] ||
                                    (t[18] = Object(a["E"])(
                                      (...t) =>
                                        e.onKeyDown && e.onKeyDown(...t),
                                      ["stop"]
                                    )),
                                  "onUpdate:modelValue":
                                    t[19] || (t[19] = (t) => (e.value_m = t)),
                                },
                                null,
                                544
                              ),
                              [[a["z"], e.value_m]]
                            ),
                            J,
                            Object(a["D"])(
                              Object(a["g"])(
                                "input",
                                {
                                  type: "text",
                                  maxlength: "2",
                                  segment: "s",
                                  ref: "s",
                                  class: "s",
                                  placeholder: "ss",
                                  onBlur:
                                    t[20] ||
                                    (t[20] = (...t) =>
                                      e.onDeselect && e.onDeselect(...t)),
                                  onKeyup:
                                    t[21] ||
                                    (t[21] = Object(a["E"])(() => {}, [
                                      "stop",
                                    ])),
                                  onKeydown:
                                    t[22] ||
                                    (t[22] = Object(a["E"])(
                                      (...t) =>
                                        e.onKeyDown && e.onKeyDown(...t),
                                      ["stop"]
                                    )),
                                  "onUpdate:modelValue":
                                    t[23] || (t[23] = (t) => (e.value_s = t)),
                                },
                                null,
                                544
                              ),
                              [[a["z"], e.value_s]]
                            ),
                            X,
                          ],
                          64
                        ))
                      : Object(a["e"])("", !0),
                  ],
                  512
                ),
                [[a["A"], e.showEditor]]
              ),
            ]),
          ],
          34
        )
      );
    }
    const ee = ["M", "D", "Y", "H", "m", "s"],
      te = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    var ie = Object(a["j"])({
      name: "DateTimeField",
      setup() {
        return {
          M: Object(a["t"])(null),
          D: Object(a["t"])(null),
          Y: Object(a["t"])(null),
          H: Object(a["t"])(null),
          m: Object(a["t"])(null),
          s: Object(a["t"])(null),
        };
      },
      props: {
        property: {
          type: Object,
          required: !0,
        },
      },
      data() {
        return {
          value_M: "",
          value_D: "",
          value_Y: "",
          value_H: "",
          value_m: "",
          value_s: "",
          showEditor: !1,
        };
      },
      computed: {
        alignment() {
          switch (this.property.alignment) {
            case h["a"].TopLeft:
            case h["a"].MiddleLeft:
            case h["a"].BottomLeft:
              return "align-left";
            case h["a"].TopCenter:
            case h["a"].MiddleCenter:
            case h["a"].BottomCenter:
              return "align-center";
            case h["a"].TopRight:
            case h["a"].MiddleRight:
            case h["a"].BottomRight:
              return "align-right";
          }
        },
        prop_M() {
          let e = this.property.value;
          return e ? te[e.getUTCMonth()] : "?";
        },
        prop_D() {
          var e;
          let t = this.property.value;
          return (
            "" +
            (null !==
              (e = null === t || void 0 === t ? void 0 : t.getUTCDate()) &&
            void 0 !== e
              ? e
              : "?")
          );
        },
        prop_Y() {
          var e;
          let t = this.property.value;
          return (
            "" +
            (null !==
              (e = null === t || void 0 === t ? void 0 : t.getUTCFullYear()) &&
            void 0 !== e
              ? e
              : "?")
          );
        },
        prop_H() {
          let e = this.property.value;
          return e ? ("" + e.getUTCHours()).padStart(2, "0") : "?";
        },
        prop_m() {
          let e = this.property.value;
          return e ? ("" + e.getUTCMinutes()).padStart(2, "0") : "?";
        },
        prop_s() {
          let e = this.property.value;
          return e ? ("" + e.getUTCSeconds()).padStart(2, "0") : "?";
        },
        includeTime() {
          switch (this.property.constructor.name) {
            case h["u"].name:
            case h["f"].name:
              return !0;
            case h["e"].name:
            default:
              return !1;
          }
        },
        includeDate() {
          switch (this.property.constructor.name) {
            case h["e"].name:
            case h["f"].name:
              return !0;
            case h["u"].name:
            default:
              return !1;
          }
        },
        segments() {
          return ee.filter((e) => null !== this[e]);
        },
      },
      emits: ["execute"],
      methods: {
        onFocus() {
          this.enterEditMode();
          let e = p["j"](this.property);
          this.$emit("execute", e);
        },
        onDeselect(e) {
          this.$el.contains(e.relatedTarget) || this.exitEditMode();
          let t = p["f"](this.property);
          this.$emit("execute", t);
        },
        onKeyDown(e) {
          let t = e.target;
          if (t.selectionStart === t.selectionEnd)
            switch (e.key) {
              case "Backspace":
                0 === t.selectionEnd && this.shiftFocus(-1, !1);
                break;
              case "ArrowLeft":
                0 === t.selectionEnd &&
                  (this.shiftFocus(-1, !1), e.preventDefault());
                break;
              case "ArrowRight":
                t.selectionEnd === t.maxLength &&
                  (this.shiftFocus(1, !0), e.preventDefault());
                break;
              case "Tab":
                break;
              default:
                t.selectionEnd === t.maxLength && this.shiftFocus(1, !0);
            }
        },
        enterEditMode() {
          (this.showEditor = !0),
            this.$nextTick(() => {
              let e;
              for (let t of this.segments) if (((e = this[t]), !e.value)) break;
              e.focus(), (e.selectionEnd = e.value.length);
            });
        },
        exitEditMode() {
          this.updateProperty(), (this.showEditor = !1);
        },
        shiftFocus(e, t = !0) {
          let i = document.activeElement,
            a = this.segments.indexOf(i.getAttribute("segment")) + e;
          0 <= a &&
            a < this.segments.length &&
            this.$nextTick(() => {
              let e = this[this.segments[a]];
              e.focus(), (e.selectionEnd = t ? 0 : e.value.length);
            });
        },
        updateProperty() {
          var e;
          let t = `${this.value_Y.padStart(4, "0")}-${this.value_M.padStart(
              2,
              "0"
            )}-${this.value_D.padStart(2, "0")}`,
            i = `${this.value_H.padStart(2, "0")}:${this.value_m.padStart(
              2,
              "0"
            )}:${this.value_s.padStart(2, "0")}.000Z`;
          this.property instanceof h["e"]
            ? (i = "00:00:00.000Z")
            : this.property instanceof h["u"] &&
              (t = "00:00:00.000Z" === i ? "0000-00-00" : "1970-01-01");
          let a,
            n = `${t}T${i}`,
            o = new Date(n);
          if (
            ((a =
              "0000-00-00T00:00:00.000Z" === n || Number.isNaN(o.getTime())
                ? null
                : o),
            (null === (e = this.property.value) || void 0 === e
              ? void 0
              : e.getTime()) !==
              (null === a || void 0 === a ? void 0 : a.getTime()))
          ) {
            let e = p["k"](this.property, a);
            this.$emit("execute", e);
          }
          this.refreshValue();
        },
        refreshValue() {
          var e, t;
          let i =
              null !==
                (t =
                  null === (e = this.property.value) || void 0 === e
                    ? void 0
                    : e.toISOString()) && void 0 !== t
                ? t
                : "--T::",
            [a, n, o, s, r, l] = i.split(/[-T:\.]/);
          (this.value_Y = a),
            (this.value_M = n),
            (this.value_D = o),
            (this.value_H = s),
            (this.value_m = r),
            (this.value_s = l);
        },
      },
      watch: {
        property() {
          this.refreshValue();
        },
        "property.value"() {
          this.refreshValue();
        },
      },
      mounted() {
        this.refreshValue();
        let e = u["g"](this.property, this.$el);
        this.$emit("execute", e);
      },
      unmounted() {
        let e = u["a"](this.property);
        this.$emit("execute", e);
      },
    });
    i("5475");
    const ae = O()(ie, [
      ["render", Q],
      ["__scopeId", "data-v-2ec8e16a"],
    ]);
    var ne = ae;
    const oe = ["colspan", "onClick"],
      se = {
        class: "text",
      },
      re = {
        class: "arrow",
      },
      le = ["colspan"];
    function ce(e, t, i, n, o, s) {
      const r = Object(a["w"])("TabularField");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          r,
          {
            class: "basic-table-field-control",
            property: e.property,
            onExecute: t[1] || (t[1] = (t) => e.$emit("execute", t)),
          },
          {
            "table-header": Object(a["C"])(({ columns: t }) => [
              (Object(a["p"])(!0),
              Object(a["f"])(
                a["a"],
                null,
                Object(a["u"])(
                  t,
                  (t) => (
                    Object(a["p"])(),
                    Object(a["f"])(
                      "th",
                      {
                        key: t.id,
                        class: "head-cell data-column",
                        colspan: e.getColspan(t),
                        onClick: (i) => e.onSort(t),
                      },
                      [
                        Object(a["g"])("span", se, [
                          Object(a["g"])(
                            "span",
                            re,
                            Object(a["y"])(e.getSortArrow(t)),
                            1
                          ),
                          Object(a["g"])(
                            "span",
                            null,
                            Object(a["y"])(t.name),
                            1
                          ),
                        ]),
                      ],
                      8,
                      oe
                    )
                  )
                ),
                128
              )),
            ]),
            "table-row": Object(a["C"])(({ row: i }) => [
              (Object(a["p"])(!0),
              Object(a["f"])(
                a["a"],
                null,
                Object(a["u"])(
                  i,
                  (i) => (
                    Object(a["p"])(),
                    Object(a["f"])(
                      "td",
                      {
                        key: i.id,
                        class: "data-column",
                        colspan: e.getColspan(i),
                      },
                      [
                        (Object(a["p"])(),
                        Object(a["d"])(
                          Object(a["x"])(e.getField(i)),
                          {
                            class: "data-field",
                            property: i,
                            onExecute:
                              t[0] || (t[0] = (t) => e.$emit("execute", t)),
                          },
                          null,
                          40,
                          ["property"]
                        )),
                      ],
                      8,
                      le
                    )
                  )
                ),
                128
              )),
            ]),
            _: 1,
          },
          8,
          ["property"]
        )
      );
    }
    var ue = i("174a");
    const pe = (e) => (
        Object(a["r"])("data-v-11cc5b88"), (e = e()), Object(a["q"])(), e
      ),
      de = {
        class: "tabular-field-control",
      },
      he = {
        class: "head-row",
      },
      ve = {
        class: "head-cell move-column",
      },
      Te = {
        class: "icon",
      },
      me = pe(() =>
        Object(a["g"])(
          "th",
          {
            class: "head-cell",
          },
          "[Table-Header]",
          -1
        )
      ),
      ge = {
        class: "head-cell duplicate-column",
      },
      xe = {
        class: "icon",
      },
      be = {
        class: "head-cell delete-column",
      },
      fe = {
        class: "icon",
      },
      ye = {
        ref: "table",
      },
      Oe = ["onPointerdown"],
      Se = {
        class: "icon",
      },
      we = pe(() =>
        Object(a["g"])(
          "td",
          {
            class: "data-column",
          },
          "[Table-Row]",
          -1
        )
      ),
      je = ["onClick"],
      Ae = {
        class: "icon",
      },
      _e = ["onClick"],
      Ce = pe(() =>
        Object(a["g"])(
          "span",
          {
            class: "icon",
          },
          "✗",
          -1
        )
      ),
      Ie = [Ce],
      Pe = {
        class: "actions",
      },
      ke = {
        class: "builtin",
      },
      Me = pe(() => Object(a["g"])("span", null, null, -1)),
      Ee = {
        class: "registered",
      },
      De = ["onClick"];
    function Re(e, t, i, n, o, s) {
      const r = Object(a["w"])("MoveArrow"),
        l = Object(a["w"])("Duplicate"),
        c = Object(a["w"])("Trash"),
        u = Object(a["w"])("MoveDots");
      return (
        Object(a["p"])(),
        Object(a["f"])("div", de, [
          Object(a["g"])("table", null, [
            Object(a["g"])("thead", he, [
              Object(a["g"])("th", ve, [
                Object(a["g"])("span", Te, [Object(a["i"])(r)]),
              ]),
              Object(a["v"])(
                e.$slots,
                "table-header",
                {
                  columns: e.columns,
                },
                () => [me],
                !0
              ),
              Object(a["g"])("th", ge, [
                Object(a["g"])("span", xe, [Object(a["i"])(l)]),
              ]),
              Object(a["g"])("th", be, [
                Object(a["g"])("span", fe, [Object(a["i"])(c)]),
              ]),
            ]),
            Object(a["g"])(
              "tbody",
              ye,
              [
                (Object(a["p"])(!0),
                Object(a["f"])(
                  a["a"],
                  null,
                  Object(a["u"])(
                    e.property.value,
                    ([t, i]) => (
                      Object(a["p"])(),
                      Object(a["f"])(
                        "tr",
                        {
                          class: "body-row",
                          key: t,
                        },
                        [
                          Object(a["g"])(
                            "td",
                            {
                              class: "move-column",
                              onPointerdown: (i) => e.onStartDrag(t, i),
                            },
                            [Object(a["g"])("span", Se, [Object(a["i"])(u)])],
                            40,
                            Oe
                          ),
                          Object(a["v"])(
                            e.$slots,
                            "table-row",
                            {
                              key: t,
                              row: i,
                            },
                            () => [we],
                            !0
                          ),
                          Object(a["g"])(
                            "td",
                            {
                              class: "duplicate-column",
                              onClick: (i) => e.onDuplicate(t),
                            },
                            [Object(a["g"])("span", Ae, [Object(a["i"])(l)])],
                            8,
                            je
                          ),
                          Object(a["g"])(
                            "td",
                            {
                              class: "delete-column",
                              onClick: (i) => e.onDelete(t),
                            },
                            Ie,
                            8,
                            _e
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ],
              512
            ),
          ]),
          Object(a["g"])("div", Pe, [
            Object(a["g"])("div", ke, [
              Object(a["g"])(
                "button",
                {
                  onClick:
                    t[0] || (t[0] = (...t) => e.onCreate && e.onCreate(...t)),
                },
                "+ Add"
              ),
            ]),
            null !== e.property.actions && 0 !== e.property.actions.size
              ? (Object(a["p"])(),
                Object(a["f"])(
                  a["a"],
                  {
                    key: 0,
                  },
                  [
                    Me,
                    Object(a["g"])("div", Ee, [
                      (Object(a["p"])(!0),
                      Object(a["f"])(
                        a["a"],
                        null,
                        Object(a["u"])(
                          e.property.actions,
                          ([t, i]) => (
                            Object(a["p"])(),
                            Object(a["f"])(
                              "button",
                              {
                                key: t,
                                onClick: (i) => e.onAction(t),
                              },
                              Object(a["y"])(i.text),
                              9,
                              De
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  64
                ))
              : Object(a["e"])("", !0),
          ]),
        ])
      );
    }
    var Ne = i("ce8b");
    const Fe = ["fill"],
      Le = Object(a["g"])(
        "path",
        {
          d: "m1.0583 0v0.26458h0.79375v-0.26458zm-1.0583 0.52917v0.52917h2.9104v-0.52917zm0.26458 0.79375v2.6458h2.3812v-2.6458zm0.52917 0.52917h0.26458v1.5875h-0.26458zm0.52917 0h0.26458v1.5875h-0.26458zm0.52917 0h0.26458v1.5875h-0.26458z",
        },
        null,
        -1
      ),
      Be = [Le];
    function He(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "svg",
          {
            width: "11",
            height: "15",
            version: "1.1",
            viewBox: "0 0 2.9104 3.9688",
            xmlns: "http://www.w3.org/2000/svg",
            fill: e.color,
          },
          Be,
          8,
          Fe
        )
      );
    }
    var Ge = Object(a["j"])({
      name: "Trash",
      props: {
        color: {
          type: String,
          default: "#808080",
        },
      },
    });
    const Ue = O()(Ge, [["render", He]]);
    var Ve = Ue;
    const ze = ["fill"],
      $e = Object(a["g"])(
        "path",
        {
          d: "m0 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm-2.3812 1.0583v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917zm0.79375 0v0.52917h0.52917v-0.52917z",
          "stroke-width": ".26458",
        },
        null,
        -1
      ),
      Ye = [$e];
    function We(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "svg",
          {
            width: "11",
            height: "6",
            version: "1.1",
            viewBox: "0 0 2.9104 1.5875",
            xmlns: "http://www.w3.org/2000/svg",
            fill: e.color,
          },
          Ye,
          8,
          ze
        )
      );
    }
    var qe = Object(a["j"])({
      name: "MoveDots",
      props: {
        color: {
          type: String,
          default: "#808080",
        },
      },
    });
    const Ke = O()(qe, [["render", We]]);
    var Ze = Ke;
    const Je = ["fill"],
      Xe = Object(a["g"])(
        "path",
        {
          transform: "matrix(.30441 0 0 .19528 -4.0986 -9.6401)",
          d: "m17.375 49.366-3.9113 6.7745h2.6075v6.7745h-2.6075l3.9113 6.7745 3.9113-6.7745h-2.6075v-6.7745h2.6075z",
          "stroke-width": "1.0852",
        },
        null,
        -1
      ),
      Qe = [Xe];
    function et(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "svg",
          {
            width: "9",
            height: "15",
            version: "1.1",
            viewBox: "0 0 2.3812 3.9688",
            xmlns: "http://www.w3.org/2000/svg",
            fill: e.color,
          },
          Qe,
          8,
          Je
        )
      );
    }
    var tt = Object(a["j"])({
      name: "MoveArrow",
      props: {
        color: {
          type: String,
          default: "#808080",
        },
      },
    });
    const it = O()(tt, [["render", et]]);
    var at = it;
    const nt = ["fill"],
      ot = Object(a["g"])(
        "path",
        {
          d: "m0 0v2.6458h0.52917v-2.1167h2.1167v-0.52917h-2.1167zm0.79272 0.79272v2.6469h2.6469v-2.6469zm0.52968 0.52968h1.5875v1.5875h-1.5875z",
        },
        null,
        -1
      ),
      st = [ot];
    function rt(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "svg",
          {
            width: "13",
            height: "13",
            version: "1.1",
            viewBox: "0 0 3.4396 3.4396",
            xmlns: "http://www.w3.org/2000/svg",
            fill: e.color,
          },
          st,
          8,
          nt
        )
      );
    }
    var lt = Object(a["j"])({
      name: "Duplicate",
      props: {
        color: {
          type: String,
          default: "#808080",
        },
      },
    });
    const ct = O()(lt, [["render", rt]]);
    var ut = ct,
      pt = Object(a["j"])({
        name: "TabularField",
        setup() {
          return {
            table: Object(a["t"])(null),
          };
        },
        props: {
          property: {
            type: Object,
            required: !0,
          },
        },
        data() {
          return {
            pointer: Object(a["m"])(new Ne["a"]()),
            onResizeObserver: null,
          };
        },
        computed: {
          columns() {
            return this.property.columnState;
          },
        },
        emits: ["execute"],
        methods: {
          onCreate() {
            let e = p["d"](this.property);
            this.$emit("execute", e);
          },
          onDuplicate(e) {
            let t = p["g"](this.property, e);
            this.$emit("execute", t);
          },
          onDelete(e) {
            let t = p["e"](this.property, e);
            this.$emit("execute", t);
          },
          onAction(e) {
            let t = u["c"](this.property, e);
            this.$emit("execute", t);
          },
          onStartDrag(e, t) {
            let i = t.target.closest("tr");
            for (let l of this.table.children)
              l === i
                ? l.classList.add("grabbed")
                : l.classList.add("not-grabbed");
            let a = [];
            for (let l of this.table.children) {
              let e = l.getBoundingClientRect();
              a.push({
                el: l,
                minY: e.y,
                maxY: e.y + e.height,
              });
            }
            let n = [...this.table.children].indexOf(i),
              o = a.at(0).minY - a[n].minY,
              s = a.at(-1).maxY - a[n].maxY,
              r = {
                id: e,
                src: n,
                dst: n,
                min: o,
                max: s,
                rows: a,
              };
            this.pointer.capture(
              t,
              (e, t) => {
                this.onDrag(t, r);
              },
              (e, t) => {
                this.onStopDrag(r);
              }
            );
          },
          onDrag(e, t) {
            let { src: i, min: a, max: n, rows: o } = t,
              s = o[i].el,
              r = Object(d["b"])(e.deltaY, a, n);
            s.style.transform = `translate(0px, ${r}px)`;
            let l = s.getBoundingClientRect(),
              c = l.y,
              u = c + l.height,
              p = u - c + 8;
            t.dst = t.src;
            for (let d = 0, h = !1; d < i; d++) {
              let e = o[d];
              !h && c <= e.maxY && u >= e.minY && ((t.dst = d), (h = !0));
              let i = h ? `translate(0px, ${p}px)` : "";
              e.el.style.transform = i;
            }
            for (let d = o.length - 1, h = !1; d > i; d--) {
              let e = o[d];
              !h && c <= e.maxY && u >= e.minY && ((t.dst = d), (h = !0));
              let i = h ? `translate(0px, -${p}px)` : "";
              e.el.style.transform = i;
            }
          },
          onStopDrag(e) {
            let { id: t, src: i, dst: a, rows: n } = e;
            for (let s of n)
              s.el.classList.remove("grabbed", "not-grabbed"),
                (s.el.style.transform = "");
            if (i === a) return;
            let o = p["h"](this.property, t, a);
            this.$emit("execute", o);
          },
        },
        mounted() {
          let e = u["g"](this.property, this.$el);
          this.$emit("execute", e);
        },
        unmounted() {
          let e = u["a"](this.property);
          this.$emit("execute", e);
        },
        components: {
          Trash: Ve,
          MoveDots: Ze,
          MoveArrow: at,
          Duplicate: ut,
        },
      });
    i("9a27");
    const dt = O()(pt, [
      ["render", Re],
      ["__scopeId", "data-v-11cc5b88"],
    ]);
    var ht = dt,
      vt = Object(a["j"])({
        name: "BasicTableField",
        props: {
          property: {
            type: Object,
            required: !0,
          },
        },
        emits: ["execute"],
        methods: {
          getColspan(e) {
            return Array.isArray(e.col) ? e.col[1] + 1 - e.col[0] : 1;
          },
          getSortArrow(e) {
            switch (e.sort) {
              case ue["m"].Descending:
              case ue["m"].None:
                return "▼";
              case ue["m"].Ascending:
                return "▲";
              default:
                return "?";
            }
          },
          getField(e) {
            switch (e.constructor.name) {
              case ue["n"].name:
                return "TextField";
              case ue["h"].name:
              case ue["i"].name:
                return "NumberField";
              case ue["e"].name:
              case ue["r"].name:
              case ue["f"].name:
                return "DateTimeField";
              case ue["g"].name:
                return "EnumField";
            }
          },
          onSort(e) {
            let t;
            switch (e.sort) {
              case ue["m"].Descending:
                t = ue["m"].Ascending;
                break;
              case ue["m"].Ascending:
              case ue["m"].None:
              default:
                t = ue["m"].Descending;
                break;
            }
            let i = p["i"](this.property, e.id, t);
            this.$emit("execute", i);
          },
        },
        components: {
          TabularField: ht,
          TextField: _,
          EnumField: R,
          NumberField: H,
          DateTimeField: ne,
        },
      });
    i("39d4");
    const Tt = O()(vt, [
      ["render", ce],
      ["__scopeId", "data-v-f7ac7554"],
    ]);
    var mt = Tt;
    const gt = (e) => (
        Object(a["r"])("data-v-cd76efc0"), (e = e()), Object(a["q"])(), e
      ),
      xt = {
        class: "head-cell data-column",
      },
      bt = {
        class: "text",
      },
      ft = ["onClick"],
      yt = gt(() =>
        Object(a["g"])(
          "p",
          {
            class: "arrow",
          },
          null,
          -1
        )
      ),
      Ot = {
        class: "text",
      };
    function St(e, t, i, n, o, s) {
      const r = Object(a["w"])("FieldGrid"),
        l = Object(a["w"])("TabularField");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          l,
          {
            class: "complex-table-field-control",
            property: e.property,
            onExecute: t[1] || (t[1] = (t) => e.$emit("execute", t)),
          },
          {
            "table-header": Object(a["C"])(() => [
              Object(a["g"])("th", xt, [
                Object(a["g"])("span", bt, [
                  Object(a["g"])(
                    "span",
                    null,
                    Object(a["y"])(e.property.name),
                    1
                  ),
                ]),
              ]),
            ]),
            "table-row": Object(a["C"])(({ key: i, row: n }) => [
              Object(a["g"])(
                "td",
                {
                  class: Object(a["n"])([
                    "data-column",
                    {
                      collapsed: e.property.collapsed.get(i),
                    },
                  ]),
                },
                [
                  Object(a["g"])(
                    "div",
                    {
                      class: "data-region-header",
                      onClick: (t) => e.onCollapse(i),
                    },
                    [
                      yt,
                      Object(a["g"])("p", Ot, [
                        (Object(a["p"])(!0),
                        Object(a["f"])(
                          a["a"],
                          null,
                          Object(a["u"])(
                            e.summarize(e.property.layout.summary, n),
                            (e, t) => (
                              Object(a["p"])(),
                              Object(a["f"])(
                                "span",
                                {
                                  key: t,
                                  class: Object(a["n"])(e.format),
                                },
                                Object(a["y"])(e.text),
                                3
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ],
                    8,
                    ft
                  ),
                  e.property.collapsed.get(i)
                    ? Object(a["e"])("", !0)
                    : (Object(a["p"])(),
                      Object(a["d"])(
                        r,
                        {
                          key: 0,
                          class: "data-region-body",
                          rows: e.property.layout.rows,
                          cols: e.property.layout.cols,
                          properties: n,
                          onExecute:
                            t[0] || (t[0] = (t) => e.$emit("execute", t)),
                        },
                        null,
                        8,
                        ["rows", "cols", "properties"]
                      )),
                ],
                2
              ),
            ]),
            _: 1,
          },
          8,
          ["property"]
        )
      );
    }
    var wt = Object(a["j"])({
      name: "ComplexTableField",
      props: {
        property: {
          type: Object,
          required: !0,
        },
      },
      emits: ["execute"],
      methods: {
        summarize(e, t) {
          return h["r"].parse(e, t);
        },
        onCollapse(e) {
          let t = !this.property.collapsed.get(e),
            i = p["c"](this.property, e, t);
          this.$emit("execute", i);
        },
      },
      beforeCreate() {
        this.$options.components.FieldGrid = i("5800").default;
      },
      components: {
        TabularField: ht,
      },
    });
    i("3cef");
    const jt = O()(wt, [
      ["render", St],
      ["__scopeId", "data-v-cd76efc0"],
    ]);
    var At = jt,
      _t = Object(a["j"])({
        name: "FieldGrid",
        props: {
          rows: {
            type: Number,
            required: !0,
          },
          cols: {
            type: Number,
            required: !0,
          },
          properties: {
            type: Array,
            required: !0,
          },
        },
        computed: {
          grid() {
            return {
              gridTemplateRows: new Array(this.rows)
                .fill("22px auto")
                .join(" 18px "),
              gridTemplateColumns: `repeat(${this.cols}, minmax(0, 1fr))`,
            };
          },
        },
        emits: ["execute"],
        methods: {
          propTitleGridStyle(e) {
            let { row: t, col: i } = e,
              a = Array.isArray(t)
                ? {
                    gridRowStart: 3 * t[0] - 2,
                  }
                : {
                    gridRowStart: 3 * t - 2,
                  },
              n = Array.isArray(i)
                ? {
                    gridColumnStart: i[0],
                    gridColumnEnd: i[1] + 1,
                  }
                : {
                    gridColumnStart: i,
                  };
            return Object.assign(Object.assign({}, a), n);
          },
          propFieldGridStyle(e) {
            let { row: t, col: i } = e,
              a = Array.isArray(t)
                ? {
                    gridRowStart: 3 * t[0] - 1,
                    gridRowEnd: 3 * t[1],
                  }
                : {
                    gridRowStart: 3 * t - 1,
                  },
              n = Array.isArray(i)
                ? {
                    gridColumnStart: i[0],
                    gridColumnEnd: i[1] + 1,
                  }
                : {
                    gridColumnStart: i,
                  };
            return Object.assign(Object.assign({}, a), n);
          },
          getField(e) {
            switch (e.constructor.name) {
              case h["q"].name:
                return "TextField";
              case h["h"].name:
              case h["i"].name:
                return "NumberField";
              case h["e"].name:
              case h["u"].name:
              case h["f"].name:
                return "DateTimeField";
              case h["g"].name:
                return "EnumField";
              case h["c"].name:
                return "BasicTableField";
              case h["d"].name:
                return "ComplexTableField";
            }
          },
        },
        components: {
          TextField: _,
          EnumField: R,
          NumberField: H,
          DateTimeField: ne,
          BasicTableField: mt,
          ComplexTableField: At,
        },
      });
    i("fbc8");
    const Ct = O()(_t, [
      ["render", s],
      ["__scopeId", "data-v-46004f45"],
    ]);
    t["default"] = Ct;
  },
  "5aff": function (e, t, i) {},
  "5b62": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAKCAYAAACwoK7bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0xOFQxNTowMzowNi0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDYtMTBUMTY6MTY6MzQtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDYtMTBUMTY6MTY6MzQtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmFlM2Y5MWFiLTc0Y2ItMGY0MS04YjFmLTBlZDFlMWI3MmMyNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmMxZDA5ODUyLTQ2NjctNzA0YS05ZDcxLTljMGNmZWJjNmFjNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc2ZDc3MWYxLTc1ODAtNGY0Yi04MmNmLTIyNDA2ZjgyNmU2OCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzZkNzcxZjEtNzU4MC00ZjRiLTgyY2YtMjI0MDZmODI2ZTY4IiBzdEV2dDp3aGVuPSIyMDIzLTAxLTE4VDE1OjAzOjA2LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuNSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwZjQ5MGQ2LThkMmYtZGY0Yy1hZTM1LTA0MTc1YzU3OGJkZiIgc3RFdnQ6d2hlbj0iMjAyMy0wNi0xMFQxNjowMjowMi0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjUgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZTNmOTFhYi03NGNiLTBmNDEtOGIxZi0wZWQxZTFiNzJjMjciIHN0RXZ0OndoZW49IjIwMjMtMDYtMTBUMTY6MTY6MzQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DYt1sAAAALElEQVQokWPM95n3nwECGKE0sXy8gIkYReQAFjL0MBJWMshcPBrGpIGhF8YAt+EHdB8FpVIAAAAASUVORK5CYII=";
  },
  "5d84": function (e, t, i) {
    "use strict";
    i("0f97");
  },
  6325: function (e, t, i) {},
  "647e": function (e, t, i) {},
  "655e": function (e, t, i) {
    "use strict";
    i("cea5");
  },
  "6f01": function (e, t, i) {
    "use strict";
    var a = i("7a23");
    const n = {
      class: "scrollbox-container",
    };
    function o(e, t, i, o, s, r) {
      return (
        Object(a["p"])(),
        Object(a["f"])("div", n, [
          Object(a["g"])(
            "div",
            {
              ref: "content",
              class: "scroll-content",
              onWheelPassive:
                t[0] ||
                (t[0] = (...t) => e.onScrollWheel && e.onScrollWheel(...t)),
              onScroll:
                t[1] ||
                (t[1] = (...t) => e.onScrollContent && e.onScrollContent(...t)),
            },
            [Object(a["v"])(e.$slots, "default", {}, void 0, !0)],
            544
          ),
          Object(a["D"])(
            Object(a["g"])(
              "div",
              {
                class: "scroll-bar",
                style: Object(a["o"])(e.scroll.sty),
                onWheelPassive:
                  t[4] ||
                  (t[4] = (...t) => e.onScrollWheel && e.onScrollWheel(...t)),
              },
              [
                Object(a["D"])(
                  Object(a["g"])(
                    "div",
                    {
                      class: "scroll-handle",
                      style: Object(a["o"])(e.handle.sty),
                      onPointerdown:
                        t[2] ||
                        (t[2] = (...t) => e.startDrag && e.startDrag(...t)),
                      onPointerup:
                        t[3] ||
                        (t[3] = (...t) => e.stopDrag && e.stopDrag(...t)),
                    },
                    null,
                    36
                  ),
                  [[a["A"], e.showScrollbar]]
                ),
              ],
              36
            ),
            [[a["A"], e.alwaysShowScrollBar || e.showScrollbar]]
          ),
        ])
      );
    }
    var s = i("f139"),
      r = i("ce8b"),
      l = Object(a["j"])({
        name: "ScrollBox",
        setup() {
          return {
            content: Object(a["t"])(null),
          };
        },
        props: {
          resetScrollOnChange: {
            type: Boolean,
            default: !1,
          },
          alwaysShowScrollBar: {
            type: Boolean,
            default: !1,
          },
          propagateScroll: {
            type: Boolean,
            default: !0,
          },
          handleColor: {
            type: String,
            default: "#d9d9d9",
          },
          scrollColor: {
            type: String,
            default: "#ffffff",
          },
          borderColor: {
            type: String,
            default: "#bfbfbf",
          },
          width: {
            type: Number,
            default: 17,
          },
          top: {
            type: Number,
            default: 0,
          },
        },
        data() {
          return {
            scrollTop: 0,
            windowMax: 0,
            scroll: {
              sty: {
                width: this.width + "px",
                background: this.scrollColor,
              },
            },
            handle: {
              trk: Object(a["m"])(new r["a"]()),
              hei: 0,
              max: 0,
              pos: 0,
              sty: {
                height: "0px",
                transform: "translateY(0px)",
                background: this.handleColor,
                borderColor: this.borderColor,
              },
            },
            showScrollbar: !1,
            onResizeObserver: null,
            onMutateObserver: null,
          };
        },
        emits: ["scroll"],
        methods: {
          onScrollWheel(e) {
            this.moveScrollPosition(this.scrollTop + e.deltaY, e);
          },
          startDrag(e) {
            this.handle.trk.capture(e, this.onDrag);
          },
          onDrag(e, t) {
            this.moveScrollPosition(
              this.handleTopToTop(this.handle.pos + t.movementY)
            );
          },
          onScrollContent() {
            this.content &&
              (this.content.scrollTop != this.scrollTop &&
                ((this.scrollTop = this.content.scrollTop),
                (this.handle.pos = this.topToHandleTop(this.scrollTop)),
                (this.handle.sty.transform = `translateY(${this.handle.pos}px)`)),
              this.$emit("scroll", this.scrollTop));
          },
          recalculateScrollState(e = !0) {
            let t = this.showScrollbar,
              i = this.content;
            if (!i || 0 === i.clientHeight)
              return void (this.showScrollbar = !1);
            let a = i.clientHeight / i.scrollHeight;
            (this.handle.hei = Math.max(
              15,
              Math.round((i.clientHeight - 4) * a)
            )),
              (this.handle.max = i.clientHeight - this.handle.hei - 4),
              (this.windowMax = i.scrollHeight - i.clientHeight),
              (this.showScrollbar = 1 !== a),
              (this.handle.sty.height = this.handle.hei + "px"),
              this.moveScrollPosition(e ? 0 : i.scrollTop),
              !t &&
                this.showScrollbar &&
                setTimeout(() => this.recalculateScrollState(e), 0);
          },
          moveScrollPosition(e, t = null) {
            if (!this.content) return;
            let i = this.scrollTop;
            (this.scrollTop = Object(s["b"])(Math.round(e), 0, this.windowMax)),
              (this.handle.pos = this.topToHandleTop(this.scrollTop)),
              (this.handle.sty.transform = `translateY(${this.handle.pos}px)`),
              (this.content.scrollTop = this.scrollTop);
            let a = 0 < this.scrollTop && this.scrollTop < this.windowMax,
              n = i - this.scrollTop !== 0;
            (!this.propagateScroll || n || a) &&
              (null === t || void 0 === t || t.stopPropagation());
          },
          topToHandleTop(e) {
            return (e / this.windowMax) * this.handle.max;
          },
          handleTopToTop(e) {
            return (e / this.handle.max) * this.windowMax;
          },
        },
        watch: {
          top() {
            this.moveScrollPosition(this.top);
          },
        },
        mounted() {
          let e = {
            childList: !0,
            characterData: !0,
            subtree: !0,
          };
          (this.onMutateObserver = new MutationObserver(() =>
            this.recalculateScrollState(this.resetScrollOnChange)
          )),
            (this.onResizeObserver = new ResizeObserver(() =>
              this.recalculateScrollState(!1)
            )),
            this.onResizeObserver.observe(this.$el),
            this.onMutateObserver.observe(this.content, e),
            this.recalculateScrollState(!1),
            this.moveScrollPosition(this.top);
        },
        unmounted() {
          this.onResizeObserver.disconnect(),
            this.onMutateObserver.disconnect();
        },
      }),
      c = (i("c049"), i("6b0d")),
      u = i.n(c);
    const p = u()(l, [
      ["render", o],
      ["__scopeId", "data-v-77cb89ca"],
    ]);
    t["a"] = p;
  },
  7028: function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return a;
    });
    class a {
      constructor(e) {
        this.page = e;
      }
    }
    a.NullPage = "$__null_page";
  },
  "73a2": function (e, t, i) {
    "use strict";
    i.r(t);
    var a = i("2137");
    const n = {
        id: "cve_number",
        name: "CVE Number",
        type: a["c"].String,
      },
      o = {
        id: "attribution",
        name: "Attribution",
        type: a["c"].String,
      },
      s = {
        id: "cve_cvss_score",
        name: "CVSS Score",
        type: a["c"].Float,
        min: 0,
        max: 10,
      },
      r = {
        id: "date_reported",
        name: "Date Reported",
        type: a["c"].Date,
      },
      l = {
        id: "cve_remediation",
        name: "Other Remediation",
        type: a["c"].String,
      },
      c = {
        id: "cve_patch_applied",
        name: "Patch Applied",
        type: a["c"].Enum,
        options: [
          {
            value: "Yes",
            text: "Yes",
          },
          {
            value: "No",
            text: "No",
          },
          {
            value: "UNK",
            text: "Unknown",
          },
          {
            value: "NA",
            text: "Not Applicable",
          },
        ],
      },
      u = {
        id: "cve_patch_available",
        name: "Patch Available",
        type: a["c"].Enum,
        options: [
          {
            value: "Yes",
            text: "Yes",
          },
          {
            value: "No",
            text: "No",
          },
        ],
      },
      p = {
        id: "cves",
        name: "EMPTY3(4)",
        path: "*.iocs.cves",
        type: a["c"].String,
        layout: {
          summary: "{{ attribution }}\n**{{ cve_number }}**",
          rows: 1,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, o), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, n), {
            row: 1,
            col: 2,
          }),
          Object.assign(Object.assign({}, u), {
            row: 2,
            col: 1,
          }),
          Object.assign(Object.assign({}, s), {
            row: 2,
            col: 2,
          }),
          Object.assign(Object.assign({}, c), {
            row: 3,
            col: 1,
          }),
          Object.assign(Object.assign({}, r), {
            row: 4,
            col: 1,
          }),
          Object.assign(Object.assign({}, l), {
            row: [3, 4],
            col: 2,
          }),
        ],
      },
      d = {
        id: "last_reported",
        name: "Last Reported",
        type: a["c"].DateTime,
      },
      h = {
        id: "first_reported",
        name: "First Reported",
        type: a["c"].DateTime,
      },
      v = {
        id: "ioc_malware_hash",
        name: "File Hash",
        type: a["c"].String,
      },
      T = {
        id: "ioc_malware_name",
        name: "Malicious Tool Name",
        type: a["c"].String,
      },
      m = {
        id: "ioc_malware_sandbox",
        name: "Malware Analysis Report",
        type: a["c"].String,
      },
      g = {
        id: "ioc_malware_hash_type",
        name: "Hash Type",
        type: a["c"].Enum,
        options: [
          {
            value: "MD5",
            text: "MD5",
          },
          {
            value: "SHA1",
            text: "SHA1",
          },
          {
            value: "SHA256",
            text: "SHA256",
          },
        ],
      },
      x = {
        id: "ioc_associated_file_hash",
        name: "Associated File Hash",
        type: a["c"].String,
      },
      b = {
        id: "ioc_malware_description",
        name: "Brief Description",
        type: a["c"].String,
      },
      f = {
        id: "ioc_malware",
        name: "EMPTY3(1)",
        path: "*.iocs.malware",
        type: a["c"].String,
        layout: {
          summary: "{{ attribution }}\n**{{ ioc_malware_name }}**",
          rows: 6,
          cols: 10,
        },
        properties: [
          Object.assign(Object.assign({}, o), {
            row: 1,
            col: [1, 5],
          }),
          Object.assign(Object.assign({}, T), {
            row: 1,
            col: [6, 10],
          }),
          Object.assign(Object.assign({}, m), {
            row: 2,
            col: [1, 8],
          }),
          Object.assign(Object.assign({}, g), {
            row: 2,
            col: [9, 10],
          }),
          Object.assign(Object.assign({}, v), {
            row: 3,
            col: [1, 10],
          }),
          Object.assign(Object.assign({}, x), {
            row: 4,
            col: [1, 10],
          }),
          Object.assign(Object.assign({}, b), {
            row: 5,
            col: [1, 10],
          }),
          Object.assign(Object.assign({}, h), {
            row: 6,
            col: [1, 5],
          }),
          Object.assign(Object.assign({}, d), {
            row: 6,
            col: [6, 10],
          }),
        ],
      },
      y = {
        id: "artifact",
        name: "Artifact",
        type: a["c"].String,
      },
      O = {
        id: "network_intrusion_phase",
        name: "Intrusion Phase",
        type: a["c"].Enum,
        options: [
          {
            value: "TA0001",
            text: "Initial Access",
          },
          {
            value: "TA0011",
            text: "Command and Control",
          },
          {
            value: "TA0010",
            text: "Exfiltration",
          },
        ],
      },
      S = {
        id: "details",
        name: "Details",
        type: a["c"].String,
      },
      w = {
        id: "ioc_network",
        name: "EMPTY3(2)",
        path: "*.iocs.network",
        type: a["c"].String,
        layout: {
          summary: "{{ attribution }}\n**{{ artifact }}**",
          cols: 2,
          rows: 4,
        },
        properties: [
          Object.assign(Object.assign({}, o), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, O), {
            row: 1,
            col: 2,
          }),
          Object.assign(Object.assign({}, y), {
            name: "Network Artifact",
            row: 2,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, S), {
            row: 3,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, h), {
            row: 4,
            col: 1,
          }),
          Object.assign(Object.assign({}, d), {
            row: 4,
            col: 2,
          }),
        ],
      },
      j = {
        id: "tactic",
        name: "Tactic",
        type: a["c"].Enum,
        options: [
          {
            value: "TA0001",
            text: "TA0001 - Initial Access",
          },
          {
            value: "TA0002",
            text: "TA0002 - Execution",
          },
          {
            value: "TA0003",
            text: "TA0003 - Persistence",
          },
          {
            value: "TA0004",
            text: "TA0004 - Privilege Escalation",
          },
          {
            value: "TA0005",
            text: "TA0005 - Defense Evasion",
          },
          {
            value: "TA0006",
            text: "TA0006 - Credential Access",
          },
          {
            value: "TA0007",
            text: "TA0007 - Discovery",
          },
          {
            value: "TA0008",
            text: "TA0008 - Lateral Movement",
          },
          {
            value: "TA0009",
            text: "TA0009 - Collection",
          },
          {
            value: "TA0010",
            text: "TA0010 - Exfiltration",
          },
          {
            value: "TA0011",
            text: "TA0011 - Command and Control",
          },
          {
            value: "TA0040",
            text: "TA0040 - Impact",
          },
          {
            value: "TA0042",
            text: "TA0042 - Resource Development",
          },
          {
            value: "TA0043",
            text: "TA0043 - Reconnaissance",
          },
        ],
      },
      A = {
        id: "type",
        name: "Type",
        type: a["c"].String,
      },
      _ = {
        id: "system_artifacts",
        name: "EMPTY3(3)",
        path: "*.iocs.system_artifacts",
        type: a["c"].String,
        layout: {
          summary: "{{ attribution }}\n**{{ artifact }}**",
          rows: 4,
          cols: 2,
        },
        properties: [
          Object.assign(Object.assign({}, o), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, j), {
            row: 1,
            col: 2,
          }),
          Object.assign(Object.assign({}, y), {
            name: "Host Artifact",
            row: 2,
            col: 1,
          }),
          Object.assign(Object.assign({}, A), {
            row: 2,
            col: 2,
          }),
          Object.assign(Object.assign({}, S), {
            row: 3,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, h), {
            row: 4,
            col: 1,
          }),
          Object.assign(Object.assign({}, d), {
            row: 4,
            col: 2,
          }),
        ],
      },
      I = {
        id: "criticality",
        name: "Criticality",
        path: "*.criticality",
        type: a["c"].Enum,
        options: [
          {
            value: "fysa",
            text: "FYSA",
          },
          {
            value: "low",
            text: "Low",
          },
          {
            value: "medium",
            text: "Medium",
          },
          {
            value: "high",
            text: "High",
          },
          {
            value: "critical",
            text: "Critical",
          },
        ],
      },
      P = {
        id: "report_title",
        name: "Report Title",
        path: "*.report_title",
        type: a["c"].String,
        is_primary: !0,
      },
      k = {
        id: "sensitivity",
        name: "Sensitivity",
        path: "*.sensitivity",
        type: a["c"].String,
      },
      M = {
        id: "report_number",
        name: "Report Number",
        path: "*.report_number",
        type: a["c"].String,
      },
      E = {
        id: "traffic_light_protocol",
        name: "Traffic Light Protocol",
        path: "*.traffic_light_protocol",
        type: a["c"].Enum,
        options: [
          {
            value: "red",
            text: "Red",
          },
          {
            value: "amber_strict",
            text: "Amber+Strict",
          },
          {
            value: "amber",
            text: "Amber",
          },
          {
            value: "green",
            text: "Green",
          },
          {
            value: "clear",
            text: "Clear",
          },
        ],
      },
      D = {
        id: "general",
        layout: {
          rows: 2,
          cols: 3,
        },
        properties: [
          Object.assign(Object.assign({}, P), {
            row: 1,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, M), {
            row: 1,
            col: 3,
          }),
          Object.assign(Object.assign({}, k), {
            row: 2,
            col: 2,
          }),
          Object.assign(Object.assign({}, E), {
            row: 2,
            col: 3,
          }),
          Object.assign(Object.assign({}, I), {
            row: 2,
            col: 1,
          }),
        ],
        is_name_displayed: !1,
        is_primary: !0,
      },
      R = {
        id: "sector",
        name: "Sector",
        type: a["c"].Enum,
        options: [
          {
            value: "NAICS 721",
            text: "Government ",
          },
          {
            value: "NAICS 72",
            text: "National Defence and Security ",
          },
          {
            value: "NAICS 561",
            text: "Banking and Finance ",
          },
          {
            value: "NAICS 56",
            text: "Information and Communications ",
          },
          {
            value: "NAICS 11",
            text: "Energy ",
          },
          {
            value: "NAICS 481",
            text: "Transportation ",
          },
          {
            value: "NAICS 621",
            text: "Emergency Services ",
          },
          {
            value: "NAICS 713",
            text: "Waters ",
          },
          {
            value: "NAICS 112",
            text: "Health Services ",
          },
          {
            value: "NAICS 315",
            text: "Agriculture and Plantation ",
          },
          {
            value: "NAICS 71",
            text: "Trade, Industry and Economy ",
          },
          {
            value: "NAICS 723",
            text: "Education ",
          },
        ],
      },
      N = {
        id: "activity",
        name: "Activity",
        type: a["c"].String,
      },
      F = {
        id: "location",
        name: "Location",
        type: a["c"].String,
        options: [
          {
            value: "ALB",
            text: "Albania",
          },
          {
            value: "DZA",
            text: "Algeria",
          },
          {
            value: "ASM",
            text: "American Samoa",
          },
          {
            value: "AND",
            text: "Andorra",
          },
          {
            value: "AGO",
            text: "Angola",
          },
          {
            value: "AIA",
            text: "Anguila",
          },
          {
            value: "ATG",
            text: "Antigua and Barbuda",
          },
          {
            value: "ARG",
            text: "Argentina",
          },
          {
            value: "ARM",
            text: "Armenia",
          },
          {
            value: "ABW",
            text: "Aruba",
          },
          {
            value: "AUS",
            text: "Australia",
          },
          {
            value: "AUT",
            text: "Austria",
          },
          {
            value: "AZE",
            text: "Azerbaijan",
          },
          {
            value: "BHS",
            text: "Bahamas, The",
          },
          {
            value: "BHR",
            text: "Bahrain",
          },
          {
            value: "BGD",
            text: "Bangladesh",
          },
          {
            value: "BRB",
            text: "Barbados",
          },
          {
            value: "BLR",
            text: "Belarus",
          },
          {
            value: "BEL",
            text: "Belgium",
          },
          {
            value: "BLX",
            text: "Belgium-Luxembourg",
          },
          {
            value: "BLZ",
            text: "Belize",
          },
          {
            value: "BEN",
            text: "Benin",
          },
          {
            value: "BMU",
            text: "Bermuda",
          },
          {
            value: "BTN",
            text: "Bhutan",
          },
          {
            value: "BOL",
            text: "Bolivia",
          },
          {
            value: "BIH",
            text: "Bosnia and Herzegovina",
          },
          {
            value: "BWA",
            text: "Botswana",
          },
          {
            value: "BAT",
            text: "Br. Antr. Terr",
          },
          {
            value: "BRA",
            text: "Brazil",
          },
          {
            value: "IOT",
            text: "British Indian Ocean Ter.",
          },
          {
            value: "VGB",
            text: "British Virgin Islands",
          },
          {
            value: "BRN",
            text: "Brunei",
          },
          {
            value: "BGR",
            text: "Bulgaria",
          },
          {
            value: "BFA",
            text: "Burkina Faso",
          },
          {
            value: "BDI",
            text: "Burundi",
          },
          {
            value: "KHM",
            text: "Cambodia",
          },
          {
            value: "CMR",
            text: "Cameroon",
          },
          {
            value: "CAN",
            text: "Canada",
          },
          {
            value: "CPV",
            text: "Cape Verde",
          },
          {
            value: "CYM",
            text: "Cayman Islands",
          },
          {
            value: "CAF",
            text: "Central African Republic",
          },
          {
            value: "TCD",
            text: "Chad",
          },
          {
            value: "CHL",
            text: "Chile",
          },
          {
            value: "CHN",
            text: "China",
          },
          {
            value: "CXR",
            text: "Christmas Island",
          },
          {
            value: "CCK",
            text: "Cocos (Keeling) Islands",
          },
          {
            value: "COL",
            text: "Colombia",
          },
          {
            value: "COM",
            text: "Comoros",
          },
          {
            value: "ZAR",
            text: "Congo, Dem. Rep.",
          },
          {
            value: "COG",
            text: "Congo, Rep.",
          },
          {
            value: "COK",
            text: "Cook Islands",
          },
          {
            value: "CRI",
            text: "Costa Rica",
          },
          {
            value: "CIV",
            text: "Cote d'Ivoire",
          },
          {
            value: "HRV",
            text: "Croatia",
          },
          {
            value: "CUB",
            text: "Cuba",
          },
          {
            value: "CYP",
            text: "Cyprus",
          },
          {
            value: "CZE",
            text: "Czech Republic",
          },
          {
            value: "CSK",
            text: "Czechoslovakia",
          },
          {
            value: "DNK",
            text: "Denmark",
          },
          {
            value: "DJI",
            text: "Djibouti",
          },
          {
            value: "DMA",
            text: "Dominica",
          },
          {
            value: "DOM",
            text: "Dominican Republic",
          },
          {
            value: "TMP",
            text: "East Timor",
          },
          {
            value: "ECU",
            text: "Ecuador",
          },
          {
            value: "EGY",
            text: "Egypt, Arab Rep.",
          },
          {
            value: "SLV",
            text: "El Salvador",
          },
          {
            value: "GNQ",
            text: "Equatorial Guinea",
          },
          {
            value: "ERI",
            text: "Eritrea",
          },
          {
            value: "EST",
            text: "Estonia",
          },
          {
            value: "ETH",
            text: "Ethiopia (excludes Eritrea)",
          },
          {
            value: "ETF",
            text: "Ethiopia (includes Eritrea)",
          },
          {
            value: "EUN",
            text: "European Union",
          },
          {
            value: "FRO",
            text: "Faeroe Islands",
          },
          {
            value: "FLK",
            text: "Falkland Island",
          },
          {
            value: "FJI",
            text: "Fiji",
          },
          {
            value: "FIN",
            text: "Finland",
          },
          {
            value: "PCZ",
            text: "Fm Panama Cz",
          },
          {
            value: "ZW1",
            text: "Fm Rhod Nyas",
          },
          {
            value: "TAN",
            text: "Fm Tanganyik",
          },
          {
            value: "VDR",
            text: "Fm Vietnam Dr",
          },
          {
            value: "SVR",
            text: "Fm Vietnam Rp",
          },
          {
            value: "ZPM",
            text: "Fm Zanz-Pemb",
          },
          {
            value: "ATF",
            text: "Fr. So. Ant. Tr",
          },
          {
            value: "FRA",
            text: "France",
          },
          {
            value: "FRE",
            text: "Free Zones",
          },
          {
            value: "GUF",
            text: "French Guiana",
          },
          {
            value: "PYF",
            text: "French Polynesia",
          },
          {
            value: "GAB",
            text: "Gabon",
          },
          {
            value: "GMB",
            text: "Gambia, The",
          },
          {
            value: "GAZ",
            text: "Gaza Strip",
          },
          {
            value: "GEO",
            text: "Georgia",
          },
          {
            value: "DDR",
            text: "German Democratic Republic",
          },
          {
            value: "DEU",
            text: "Germany",
          },
          {
            value: "GHA",
            text: "Ghana",
          },
          {
            value: "GIB",
            text: "Gibraltar",
          },
          {
            value: "GRC",
            text: "Greece",
          },
          {
            value: "GRL",
            text: "Greenland",
          },
          {
            value: "GRD",
            text: "Grenada",
          },
          {
            value: "GLP",
            text: "Guadeloupe",
          },
          {
            value: "GUM",
            text: "Guam",
          },
          {
            value: "GTM",
            text: "Guatemala",
          },
          {
            value: "GIN",
            text: "Guinea",
          },
          {
            value: "GNB",
            text: "Guinea-Bissau",
          },
          {
            value: "GUY",
            text: "Guyana",
          },
          {
            value: "HTI",
            text: "Haiti",
          },
          {
            value: "VAT",
            text: "Holy See",
          },
          {
            value: "HND",
            text: "Honduras",
          },
          {
            value: "HKG",
            text: "Hong Kong, China",
          },
          {
            value: "HUN",
            text: "Hungary",
          },
          {
            value: "ISL",
            text: "Iceland",
          },
          {
            value: "IND",
            text: "India",
          },
          {
            value: "valueN",
            text: "Indonesia",
          },
          {
            value: "IRN",
            text: "Iran, Islamic Rep.",
          },
          {
            value: "IRQ",
            text: "Iraq",
          },
          {
            value: "IRL",
            text: "Ireland",
          },
          {
            value: "ISR",
            text: "Israel",
          },
          {
            value: "ITA",
            text: "Italy",
          },
          {
            value: "JAM",
            text: "Jamaica",
          },
          {
            value: "JPN",
            text: "Japan",
          },
          {
            value: "JTN",
            text: "Jhonston Island",
          },
          {
            value: "JOR",
            text: "Jordan",
          },
          {
            value: "KAZ",
            text: "Kazakhstan",
          },
          {
            value: "KEN",
            text: "Kenya",
          },
          {
            value: "KIR",
            text: "Kiribati",
          },
          {
            value: "PRK",
            text: "Korea, Dem. Rep.",
          },
          {
            value: "KOR",
            text: "Korea, Rep.",
          },
          {
            value: "KWT",
            text: "Kuwait",
          },
          {
            value: "KGZ",
            text: "Kyrgyz Republic",
          },
          {
            value: "LAO",
            text: "Lao PDR",
          },
          {
            value: "LVA",
            text: "Latvia",
          },
          {
            value: "LBN",
            text: "Lebanon",
          },
          {
            value: "LSO",
            text: "Lesotho",
          },
          {
            value: "LBR",
            text: "Liberia",
          },
          {
            value: "LBY",
            text: "Libya",
          },
          {
            value: "LIE",
            text: "Liechtenstein",
          },
          {
            value: "LTU",
            text: "Lithuania",
          },
          {
            value: "LUX",
            text: "Luxembourg",
          },
          {
            value: "MAC",
            text: "Macao",
          },
          {
            value: "MKD",
            text: "Macedonia, FYR",
          },
          {
            value: "MDG",
            text: "Madagascar",
          },
          {
            value: "MWI",
            text: "Malawi",
          },
          {
            value: "MYS",
            text: "Malaysia",
          },
          {
            value: "MDV",
            text: "Maldives",
          },
          {
            value: "MLI",
            text: "Mali",
          },
          {
            value: "MLT",
            text: "Malta",
          },
          {
            value: "MHL",
            text: "Marshall Islands",
          },
          {
            value: "MTQ",
            text: "Martinique",
          },
          {
            value: "MRT",
            text: "Mauritania",
          },
          {
            value: "MUS",
            text: "Mauritius",
          },
          {
            value: "MEX",
            text: "Mexico",
          },
          {
            value: "FSM",
            text: "Micronesia, Fed. Sts.",
          },
          {
            value: "Mvalue",
            text: "Mvalueway Islands",
          },
          {
            value: "MDA",
            text: "Moldova",
          },
          {
            value: "MCO",
            text: "Monaco",
          },
          {
            value: "MNG",
            text: "Mongolia",
          },
          {
            value: "MSR",
            text: "Montserrat",
          },
          {
            value: "MAR",
            text: "Morocco",
          },
          {
            value: "MOZ",
            text: "Mozambique",
          },
          {
            value: "MMR",
            text: "Myanmar",
          },
          {
            value: "NAM",
            text: "Namibia",
          },
          {
            value: "NRU",
            text: "Nauru",
          },
          {
            value: "NPL",
            text: "Nepal",
          },
          {
            value: "NLD",
            text: "Netherlands",
          },
          {
            value: "ANT",
            text: "Netherlands Antilles",
          },
          {
            value: "NZE",
            text: "Neutral Zone",
          },
          {
            value: "NCL",
            text: "New Caledonia",
          },
          {
            value: "NZL",
            text: "New Zealand",
          },
          {
            value: "NIC",
            text: "Nicaragua",
          },
          {
            value: "NER",
            text: "Niger",
          },
          {
            value: "NGA",
            text: "Nigeria",
          },
          {
            value: "NIU",
            text: "Niue",
          },
          {
            value: "NFK",
            text: "Norfolk Island",
          },
          {
            value: "MNP",
            text: "Northern Mariana Islands",
          },
          {
            value: "NOR",
            text: "Norway",
          },
          {
            value: "OMN",
            text: "Oman",
          },
          {
            value: "PCE",
            text: "Pacific Islands",
          },
          {
            value: "PAK",
            text: "Pakistan",
          },
          {
            value: "PLW",
            text: "Palau",
          },
          {
            value: "PAN",
            text: "Panama",
          },
          {
            value: "PNG",
            text: "Papua New Guinea",
          },
          {
            value: "PRY",
            text: "Paraguay",
          },
          {
            value: "PMY",
            text: "Pen Malaysia",
          },
          {
            value: "PER",
            text: "Peru",
          },
          {
            value: "PHL",
            text: "Philippines",
          },
          {
            value: "PCN",
            text: "Pitcairn",
          },
          {
            value: "POL",
            text: "Poland",
          },
          {
            value: "PRT",
            text: "Portugal",
          },
          {
            value: "PRI",
            text: "Puerto Rico",
          },
          {
            value: "QAT",
            text: "Qatar",
          },
          {
            value: "REU",
            text: "Reunion",
          },
          {
            value: "ROM",
            text: "Romania",
          },
          {
            value: "RUS",
            text: "Russian Federation",
          },
          {
            value: "RWA",
            text: "Rwanda",
          },
          {
            value: "RYU",
            text: "Ryukyu Is",
          },
          {
            value: "SBH",
            text: "Sabah",
          },
          {
            value: "SHN",
            text: "Saint Helena",
          },
          {
            value: "KN1",
            text: "Saint Kitts-Nevis-Anguilla-Aru",
          },
          {
            value: "SPM",
            text: "Saint Pierre and Miquelon",
          },
          {
            value: "WSM",
            text: "Samoa",
          },
          {
            value: "SMR",
            text: "San Marino",
          },
          {
            value: "STP",
            text: "Sao Tome and Principe",
          },
          {
            value: "SWK",
            text: "Sarawak",
          },
          {
            value: "SAU",
            text: "Saudi Arabia",
          },
          {
            value: "SEN",
            text: "Senegal",
          },
          {
            value: "SYC",
            text: "Seychelles",
          },
          {
            value: "SLE",
            text: "Sierra Leone",
          },
          {
            value: "SIK",
            text: "SIKKIM",
          },
          {
            value: "SGP",
            text: "Singapore",
          },
          {
            value: "SVK",
            text: "Slovak Republic",
          },
          {
            value: "SVN",
            text: "Slovenia",
          },
          {
            value: "SLB",
            text: "Solomon Islands",
          },
          {
            value: "SOM",
            text: "Somalia",
          },
          {
            value: "ZAF",
            text: "South Africa",
          },
          {
            value: "SVU",
            text: "Soviet Union",
          },
          {
            value: "ESP",
            text: "Spain",
          },
          {
            value: "SPE",
            text: "Special Categories",
          },
          {
            value: "LKA",
            text: "Sri Lanka",
          },
          {
            value: "KNA",
            text: "St. Kitts and Nevis",
          },
          {
            value: "LCA",
            text: "St. Lucia",
          },
          {
            value: "VCT",
            text: "St. Vincent and the Grenadines",
          },
          {
            value: "SDN",
            text: "Sudan",
          },
          {
            value: "SUR",
            text: "Suriname",
          },
          {
            value: "SJM",
            text: "Svalbard and Jan Mayen Is",
          },
          {
            value: "SWZ",
            text: "Swaziland",
          },
          {
            value: "SWE",
            text: "Sweden",
          },
          {
            value: "CHE",
            text: "Switzerland",
          },
          {
            value: "SYR",
            text: "Syrian Arab Republic",
          },
          {
            value: "TWN",
            text: "Taiwan",
          },
          {
            value: "TJK",
            text: "Tajikistan",
          },
          {
            value: "TZA",
            text: "Tanzania",
          },
          {
            value: "THA",
            text: "Thailand",
          },
          {
            value: "TGO",
            text: "Togo",
          },
          {
            value: "TKL",
            text: "Tokelau",
          },
          {
            value: "TON",
            text: "Tonga",
          },
          {
            value: "TTO",
            text: "Trinvaluead and Tobago",
          },
          {
            value: "TUN",
            text: "Tunisia",
          },
          {
            value: "TUR",
            text: "Turkey",
          },
          {
            value: "TKM",
            text: "Turkmenistan",
          },
          {
            value: "TCA",
            text: "Turks and Caicos Isl.",
          },
          {
            value: "TUV",
            text: "Tuvalu",
          },
          {
            value: "UGA",
            text: "Uganda",
          },
          {
            value: "UKR",
            text: "Ukraine",
          },
          {
            value: "ARE",
            text: "United Arab Emirates",
          },
          {
            value: "GBR",
            text: "United Kingdom",
          },
          {
            value: "USA",
            text: "United States",
          },
          {
            value: "UNS",
            text: "Unspecified",
          },
          {
            value: "URY",
            text: "Uruguay",
          },
          {
            value: "USP",
            text: "Us Msc.Pac.I",
          },
          {
            value: "UZB",
            text: "Uzbekistan",
          },
          {
            value: "VUT",
            text: "Vanuatu",
          },
          {
            value: "VEN",
            text: "Venezuela",
          },
          {
            value: "VNM",
            text: "Vietnam",
          },
          {
            value: "VIR",
            text: "Virgin Islands (U.S.)",
          },
          {
            value: "WAK",
            text: "Wake Island",
          },
          {
            value: "WLF",
            text: "Wallis and Futura Isl.",
          },
          {
            value: "ESH",
            text: "Western Sahara",
          },
          {
            value: "WLD",
            text: "World",
          },
          {
            value: "YDR",
            text: "Yemen Democratic",
          },
          {
            value: "YEM",
            text: "Yemen, Rep.",
          },
          {
            value: "SER",
            text: "Yugoslavia",
          },
          {
            value: "YUG",
            text: "Yugoslavia, FR (Serbia/Montenegro)",
          },
          {
            value: "ZMB",
            text: "Zambia",
          },
          {
            value: "ZWE",
            text: "Zimbabwe",
          },
          {
            value: "APAC",
            text: "Asia Pacific",
          },
          {
            value: "Europe",
            text: "Europe",
          },
          {
            value: "Africa",
            text: "Africa",
          },
          {
            value: "MENA",
            text: "Mvaluedle East North Africa",
          },
          {
            value: "SouthA",
            text: "South America",
          },
          {
            value: "NorthA",
            text: "North America",
          },
        ],
      },
      L = {
        id: "end_date",
        name: "End Date",
        type: a["c"].DateTime,
      },
      B = {
        id: "start_date",
        name: "Start Date",
        type: a["c"].DateTime,
      },
      H = {
        id: "timeline",
        name: "Timeline of Activity",
        path: "*.timeline",
        type: a["c"].ComplexTable,
        layout: {
          summary: "{{ attribution }}\n**{{ location }} :: {{ sector }}**",
          rows: 4,
          cols: 3,
        },
        properties: [
          Object.assign(Object.assign({}, o), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, B), {
            row: 1,
            col: 2,
          }),
          Object.assign(Object.assign({}, L), {
            row: 1,
            col: 3,
          }),
          Object.assign(Object.assign({}, F), {
            row: 2,
            col: [1, 3],
          }),
          Object.assign(Object.assign({}, R), {
            row: 3,
            col: [1, 3],
          }),
          Object.assign(Object.assign({}, N), {
            row: 4,
            col: [1, 3],
          }),
        ],
      },
      G = {
        id: "timeline_of_activity",
        name: "Timeline of Activity",
        layout: {
          rows: 1,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, H), {
            row: 1,
            col: 1,
          }),
        ],
      };
    var U = i("9ae2"),
      V = i("8c0f"),
      z = i("1c81");
    class $ {
      constructor(e, t) {
        (this.property = e),
          e.registerAction("import-csv", "Import from CSV", () => {
            V["a"].openTextFileDialog().then((i) => {
              let { contents: a } = i;
              (null !== a && void 0 !== a) ||
                console.error(
                  `Error: could not contents of file: '${i.filename}'.`
                );
              let n = this.parseCsv(a),
                o = [];
              for (let t of n) (t = this.tryParseRow(t)), o.push(U["d"](e, t));
              t.emit("execute", ...o);
            });
          });
      }
      parseCsv(e) {
        var t;
        let i = [],
          a = e.split(/\r?\n/g),
          n = this.segmentCsvLine(a[0]);
        for (let o = 1; o < a.length; o++) {
          if (/^\s*$/.test(a[o])) continue;
          let e = [],
            s = this.segmentCsvLine(a[o]);
          for (let i = 0; i < n.length; i++)
            e.push([n[i], null !== (t = s[i]) && void 0 !== t ? t : ""]);
          i.push(Object.fromEntries(e));
        }
        return i;
      }
      segmentCsvLine(e) {
        e = e.trim();
        let t = [],
          i = 0,
          a = -1,
          n = 0;
        while (i < e.length)
          (a = -1),
            (n = 0),
            '"' === e[i] && (a = this.indexOf(e, /"\s*,|"$/, i)),
            -1 === a ? (a = this.indexOf(e, /,/g, i)) : ((i += 1), (n += 1)),
            -1 === a ? (a = e.length) : (n += 1),
            t.push(e.slice(i, a)),
            (i = a + n);
        return "," === e[e.length - 1] && t.push(""), t;
      }
      indexOf(e, t, i = 0) {
        let a = e.slice(i).search(t);
        return (a < 0 ? 0 : i) + a;
      }
      tryParseRow(e) {
        let t = {};
        for (let i in e) {
          let a = this.normalize(i),
            n = this.property.defaultRow.find((e) => {
              let t = this.normalize(e.name);
              return e.id === i.trim() || t === a;
            });
          n && (t[n.id] = this.tryParseValue(e[i], n));
        }
        return t;
      }
      tryParseValue(e, t) {
        if (void 0 === e) return null;
        if (((e = e.trim()), "" === e)) return null;
        if (t instanceof z["q"]) return e;
        if (t instanceof z["j"]) return parseFloat(e);
        if (t instanceof z["f"]) return new Date(e);
        if (t instanceof z["g"]) {
          if (t.options.has(e)) return e;
          for (let [i, a] of t.options)
            if (this.normalize(a) === this.normalize(e)) return i;
          return null;
        }
      }
      normalize(e) {
        return e
          .trim()
          .toLocaleLowerCase()
          .normalize("NFKD")
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/, " ");
      }
    }
    const Y = {
        id: "key_points",
        name: "Key Findings",
        path: "*.key_points",
        type: a["c"].String,
      },
      W = {
        id: "key_points",
        name: "Key Findings",
        layout: {
          rows: 4,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, Y), {
            row: [1, 4],
            col: 1,
          }),
        ],
      };
    class q {
      constructor(e) {
        e.registerMetric("word-count", "Words", 0),
          e.on("update", () => {
            e.updateMetric("word-count", this.getWordCount(e.value));
          });
      }
      getWordCount(e) {
        var t, i;
        let a =
          (null !==
            (i =
              null ===
                (t = null === e || void 0 === e ? void 0 : e.match(/\s+\S/g)) ||
              void 0 === t
                ? void 0
                : t.length) && void 0 !== i
            ? i
            : -1) + 1;
        return !a && e ? 1 : a;
      }
    }
    const K = {
        id: "assessment",
        name: "Assessment",
        path: "*.assessment",
        type: a["c"].String,
      },
      Z = {
        id: "assessment",
        name: "Assessment",
        layout: {
          rows: 7,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, K), {
            row: [1, 7],
            col: 1,
          }),
        ],
      },
      J = {
        id: "signature_description",
        name: "EMPTY-GONE",
        type: a["c"].String,
      },
      X = {
        id: "signatures",
        name: "EMPTY4(1)",
        path: "*.signatures",
        type: a["c"].String,
        layout: {
          summary: "{{ attribution }}\n**{{ ioc_malware_name }}**",
          rows: 2,
          cols: 2,
        },
        properties: [
          Object.assign(Object.assign({}, o), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, T), {
            row: 1,
            col: 2,
          }),
          Object.assign(Object.assign({}, J), {
            row: 2,
            col: [1, 2],
          }),
        ],
      },
      ee = {
        id: "report_citations",
        name: "Report References",
        path: "*.data_sources.report_citations",
        type: a["c"].BasicTable,
        layout: {
          cols: 3,
        },
        properties: [
          {
            id: "description",
            name: "Description",
            type: a["c"].String,
            row: 0,
            col: [1, 2],
          },
          {
            id: "hyperlink",
            name: "Hyperlink",
            type: a["c"].String,
            row: 0,
            col: 3,
          },
        ],
      },
      te = {
        id: "internal_telemetry",
        name: "Remarks",
        type: a["c"].String,
      },
      ie = {
        id: "internal_telemetry",
        name: "Remarks",
        path: "*.data_sources.internal_telemetry",
        type: a["c"].String,
        layout: {
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, te), {
            row: 0,
            col: 1,
          }),
        ],
      },
      ae = {
        id: "data_sources",
        name: "Resources ",
        layout: {
          rows: 2,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, ee), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, ie), {
            row: 2,
            col: 1,
          }),
        ],
      },
      ne = {
        id: "defend",
        name: "D3FEND",
        type: a["c"].String,
      },
      oe = {
        id: "control",
        name: "Deployed Control",
        type: a["c"].String,
      },
      se = {
        id: "procedure",
        name: "Procedure",
        type: a["c"].String,
      },
      re = {
        id: "technique",
        name: "Technique",
        type: a["c"].Enum,
        options: [
          {
            value: "T1001",
            text: "T1001 - Data Obfuscation",
          },
          {
            value: "T1003",
            text: "T1003 - OS Credential Dumping",
          },
          {
            value: "T1005",
            text: "T1005 - Data from Local System",
          },
          {
            value: "T1006",
            text: "T1006 - Direct Volume Access",
          },
          {
            value: "T1007",
            text: "T1007 - System Service Discovery",
          },
          {
            value: "T1008",
            text: "T1008 - Fallback Channels",
          },
          {
            value: "T1010",
            text: "T1010 - Application Window Discovery",
          },
          {
            value: "T1011",
            text: "T1011 - Exfiltration Over Other Network Medium",
          },
          {
            value: "T1012",
            text: "T1012 - Query Registry",
          },
          {
            value: "T1014",
            text: "T1014 - Rootkit",
          },
          {
            value: "T1016",
            text: "T1016 - System Network Configuration Discovery",
          },
          {
            value: "T1018",
            text: "T1018 - Remote System Discovery",
          },
          {
            value: "T1020",
            text: "T1020 - Automated Exfiltration",
          },
          {
            value: "T1021",
            text: "T1021 - Remote Services",
          },
          {
            value: "T1025",
            text: "T1025 - Data from Removable Media",
          },
          {
            value: "T1027",
            text: "T1027 - Obfuscated Files or Information",
          },
          {
            value: "T1029",
            text: "T1029 - Scheduled Transfer",
          },
          {
            value: "T1030",
            text: "T1030 - Data Transfer Size Limits",
          },
          {
            value: "T1033",
            text: "T1033 - System Owner/User Discovery",
          },
          {
            value: "T1036",
            text: "T1036 - Masquerading",
          },
          {
            value: "T1037",
            text: "T1037 - Boot or Logon Initialization Scripts",
          },
          {
            value: "T1039",
            text: "T1039 - Data from Network Shared Drive",
          },
          {
            value: "T1040",
            text: "T1040 - Network Sniffing",
          },
          {
            value: "T1041",
            text: "T1041 - Exfiltration Over C2 Channel",
          },
          {
            value: "T1046",
            text: "T1046 - Network Service Discovery",
          },
          {
            value: "T1047",
            text: "T1047 - Windows Management Instrumentation",
          },
          {
            value: "T1048",
            text: "T1048 - Exfiltration Over Alternative Protocol",
          },
          {
            value: "T1049",
            text: "T1049 - System Network Connections Discovery",
          },
          {
            value: "T1052",
            text: "T1052 - Exfiltration Over Physical Medium",
          },
          {
            value: "T1053",
            text: "T1053 - Scheduled Task/Job",
          },
          {
            value: "T1055",
            text: "T1055 - Process Injection",
          },
          {
            value: "T1056",
            text: "T1056 - Input Capture",
          },
          {
            value: "T1057",
            text: "T1057 - Process Discovery",
          },
          {
            value: "T1059",
            text: "T1059 - Command and Scripting Interpreter",
          },
          {
            value: "T1068",
            text: "T1068 - Exploitation for Privilege Escalation",
          },
          {
            value: "T1069",
            text: "T1069 - Permission Groups Discovery",
          },
          {
            value: "T1070",
            text: "T1070 - Indicator Removal",
          },
          {
            value: "T1071",
            text: "T1071 - Application Layer Protocol",
          },
          {
            value: "T1072",
            text: "T1072 - Software Deployment Tools",
          },
          {
            value: "T1074",
            text: "T1074 - Data Staged",
          },
          {
            value: "T1078",
            text: "T1078 - Valid Accounts",
          },
          {
            value: "T1080",
            text: "T1080 - Taint Shared Content",
          },
          {
            value: "T1082",
            text: "T1082 - System Information Discovery",
          },
          {
            value: "T1083",
            text: "T1083 - File and Directory Discovery",
          },
          {
            value: "T1087",
            text: "T1087 - Account Discovery",
          },
          {
            value: "T1090",
            text: "T1090 - Proxy",
          },
          {
            value: "T1091",
            text: "T1091 - Replication Through Removable Media",
          },
          {
            value: "T1092",
            text: "T1092 - Communication Through Removable Media",
          },
          {
            value: "T1095",
            text: "T1095 - Non-Application Layer Protocol",
          },
          {
            value: "T1098",
            text: "T1098 - Account Manipulation",
          },
          {
            value: "T1102",
            text: "T1102 - Web Service",
          },
          {
            value: "T1104",
            text: "T1104 - Multi-Stage Channels",
          },
          {
            value: "T1105",
            text: "T1105 - Ingress Tool Transfer",
          },
          {
            value: "T1106",
            text: "T1106 - Native API",
          },
          {
            value: "T1110",
            text: "T1110 - Brute Force",
          },
          {
            value: "T1111",
            text: "T1111 - Multi-Factor Authentication Interception",
          },
          {
            value: "T1112",
            text: "T1112 - Modify Registry",
          },
          {
            value: "T1113",
            text: "T1113 - Screen Capture",
          },
          {
            value: "T1114",
            text: "T1114 - Email Collection",
          },
          {
            value: "T1115",
            text: "T1115 - Clipboard Data",
          },
          {
            value: "T1119",
            text: "T1119 - Automated Collection",
          },
          {
            value: "T1120",
            text: "T1120 - Peripheral Device Discovery",
          },
          {
            value: "T1123",
            text: "T1123 - Audio Capture",
          },
          {
            value: "T1124",
            text: "T1124 - System Time Discovery",
          },
          {
            value: "T1125",
            text: "T1125 - Video Capture",
          },
          {
            value: "T1127",
            text: "T1127 - Trusted Developer Utilities Proxy Execution",
          },
          {
            value: "T1129",
            text: "T1129 - Shared Modules",
          },
          {
            value: "T1132",
            text: "T1132 - Data Encoding",
          },
          {
            value: "T1133",
            text: "T1133 - External Remote Services",
          },
          {
            value: "T1134",
            text: "T1134 - Access Token Manipulation",
          },
          {
            value: "T1135",
            text: "T1135 - Network Share Discovery",
          },
          {
            value: "T1136",
            text: "T1136 - Create Account",
          },
          {
            value: "T1137",
            text: "T1137 - Office Application Startup",
          },
          {
            value: "T1140",
            text: "T1140 - Deobfuscate/Decode Files or Information",
          },
          {
            value: "T1176",
            text: "T1176 - Browser Extensions",
          },
          {
            value: "T1185",
            text: "T1185 - Browser Session Hijacking",
          },
          {
            value: "T1187",
            text: "T1187 - Forced Authentication",
          },
          {
            value: "T1189",
            text: "T1189 - Drive-by Compromise",
          },
          {
            value: "T1190",
            text: "T1190 - Exploit Public-Facing Application",
          },
          {
            value: "T1195",
            text: "T1195 - Supply Chain Compromise",
          },
          {
            value: "T1197",
            text: "T1197 - BITS Jobs",
          },
          {
            value: "T1199",
            text: "T1199 - Trusted Relationship",
          },
          {
            value: "T1200",
            text: "T1200 - Hardware Additions",
          },
          {
            value: "T1201",
            text: "T1201 - Password Policy Discovery",
          },
          {
            value: "T1202",
            text: "T1202 - Indirect Command Execution",
          },
          {
            value: "T1203",
            text: "T1203 - Exploitation for Client Execution",
          },
          {
            value: "T1204",
            text: "T1204 - User Execution",
          },
          {
            value: "T1205",
            text: "T1205 - Traffic Signaling",
          },
          {
            value: "T1207",
            text: "T1207 - Rogue Domain Controller",
          },
          {
            value: "T1210",
            text: "T1210 - Exploitation of Remote Services",
          },
          {
            value: "T1211",
            text: "T1211 - Exploitation for Defense Evasion",
          },
          {
            value: "T1212",
            text: "T1212 - Exploitation for Credential Access",
          },
          {
            value: "T1213",
            text: "T1213 - Data from Information Repositories",
          },
          {
            value: "T1216",
            text: "T1216 - System Script Proxy Execution",
          },
          {
            value: "T1217",
            text: "T1217 - Browser Bookmark Discovery",
          },
          {
            value: "T1218",
            text: "T1218 - System Binary Proxy Execution",
          },
          {
            value: "T1219",
            text: "T1219 - Remote Access Software",
          },
          {
            value: "T1220",
            text: "T1220 - XSL Script Processing",
          },
          {
            value: "T1221",
            text: "T1221 - Template Injection",
          },
          {
            value: "T1222",
            text: "T1222 - File and Directory Permissions Modification",
          },
          {
            value: "T1480",
            text: "T1480 - Execution Guardrails",
          },
          {
            value: "T1482",
            text: "T1482 - Domain Trust Discovery",
          },
          {
            value: "T1484",
            text: "T1484 - Domain Policy Modification",
          },
          {
            value: "T1485",
            text: "T1485 - Data Destruction",
          },
          {
            value: "T1486",
            text: "T1486 - Data Encrypted for Impact",
          },
          {
            value: "T1489",
            text: "T1489 - Service Stop",
          },
          {
            value: "T1490",
            text: "T1490 - Inhibit System Recovery",
          },
          {
            value: "T1491",
            text: "T1491 - Defacement",
          },
          {
            value: "T1495",
            text: "T1495 - Firmware Corruption",
          },
          {
            value: "T1496",
            text: "T1496 - Resource Hijacking",
          },
          {
            value: "T1497",
            text: "T1497 - Virtualization/Sandbox Evasion",
          },
          {
            value: "T1498",
            text: "T1498 - Network Denial of Service",
          },
          {
            value: "T1499",
            text: "T1499 - Endpoint Denial of Service",
          },
          {
            value: "T1505",
            text: "T1505 - Server Software Component",
          },
          {
            value: "T1518",
            text: "T1518 - Software Discovery",
          },
          {
            value: "T1525",
            text: "T1525 - Implant Internal Image",
          },
          {
            value: "T1526",
            text: "T1526 - Cloud Service Discovery",
          },
          {
            value: "T1528",
            text: "T1528 - Steal Application Access Token",
          },
          {
            value: "T1529",
            text: "T1529 - System Shutdown/Reboot",
          },
          {
            value: "T1530",
            text: "T1530 - Data from Cloud Storage",
          },
          {
            value: "T1531",
            text: "T1531 - Account Access Removal",
          },
          {
            value: "T1534",
            text: "T1534 - Internal Spearphishing",
          },
          {
            value: "T1535",
            text: "T1535 - Unused/Unsupported Cloud Regions",
          },
          {
            value: "T1537",
            text: "T1537 - Transfer Data to Cloud Account",
          },
          {
            value: "T1538",
            text: "T1538 - Cloud Service Dashboard",
          },
          {
            value: "T1539",
            text: "T1539 - Steal Web Session Cookie",
          },
          {
            value: "T1542",
            text: "T1542 - Pre-OS Boot",
          },
          {
            value: "T1543",
            text: "T1543 - Create or Modify System Process",
          },
          {
            value: "T1546",
            text: "T1546 - Event Triggered Execution",
          },
          {
            value: "T1547",
            text: "T1547 - Boot or Logon Autostart Execution",
          },
          {
            value: "T1548",
            text: "T1548 - Abuse Elevation Control Mechanism",
          },
          {
            value: "T1550",
            text: "T1550 - Use Alternate Authentication Material",
          },
          {
            value: "T1552",
            text: "T1552 - Unsecured Credentials",
          },
          {
            value: "T1553",
            text: "T1553 - Subvert Trust Controls",
          },
          {
            value: "T1554",
            text: "T1554 - Compromise Client Software Binary",
          },
          {
            value: "T1555",
            text: "T1555 - Credentials from Password Stores",
          },
          {
            value: "T1556",
            text: "T1556 - Modify Authentication Process",
          },
          {
            value: "T1557",
            text: "T1557 - Adversary-in-the-Middle",
          },
          {
            value: "T1558",
            text: "T1558 - Steal or Forge Kerberos Tickets",
          },
          {
            value: "T1559",
            text: "T1559 - Inter-Process Communication",
          },
          {
            value: "T1560",
            text: "T1560 - Archive Collected Data",
          },
          {
            value: "T1561",
            text: "T1561 - Disk Wipe",
          },
          {
            value: "T1562",
            text: "T1562 - Impair Defenses",
          },
          {
            value: "T1563",
            text: "T1563 - Remote Service Session Hijacking",
          },
          {
            value: "T1564",
            text: "T1564 - Hide Artifacts",
          },
          {
            value: "T1565",
            text: "T1565 - Data Manipulation",
          },
          {
            value: "T1566",
            text: "T1566 - Phishing",
          },
          {
            value: "T1567",
            text: "T1567 - Exfiltration Over Web Service",
          },
          {
            value: "T1568",
            text: "T1568 - Dynamic Resolution",
          },
          {
            value: "T1569",
            text: "T1569 - System Services",
          },
          {
            value: "T1570",
            text: "T1570 - Lateral Tool Transfer",
          },
          {
            value: "T1571",
            text: "T1571 - Non-Standard Port",
          },
          {
            value: "T1572",
            text: "T1572 - Protocol Tunneling",
          },
          {
            value: "T1573",
            text: "T1573 - Encrypted Channel",
          },
          {
            value: "T1574",
            text: "T1574 - Hijack Execution Flow",
          },
          {
            value: "T1578",
            text: "T1578 - Modify Cloud Compute Infrastructure",
          },
          {
            value: "T1580",
            text: "T1580 - Cloud Infrastructure Discovery",
          },
          {
            value: "T1583",
            text: "T1583 - Acquire Infrastructure",
          },
          {
            value: "T1584",
            text: "T1584 - Compromise Infrastructure",
          },
          {
            value: "T1585",
            text: "T1585 - Establish Accounts",
          },
          {
            value: "T1586",
            text: "T1586 - Compromise Accounts",
          },
          {
            value: "T1587",
            text: "T1587 - Develop Capabilities",
          },
          {
            value: "T1588",
            text: "T1588 - Obtain Capabilities",
          },
          {
            value: "T1589",
            text: "T1589 - Gather Victim Identity Information",
          },
          {
            value: "T1590",
            text: "T1590 - Gather Victim Network Information",
          },
          {
            value: "T1591",
            text: "T1591 - Gather Victim Org Information",
          },
          {
            value: "T1592",
            text: "T1592 - Gather Victim Host Information",
          },
          {
            value: "T1593",
            text: "T1593 - Search Open Websites/Domains",
          },
          {
            value: "T1594",
            text: "T1594 - Search Victim-Owned Websites",
          },
          {
            value: "T1595",
            text: "T1595 - Active Scanning",
          },
          {
            value: "T1596",
            text: "T1596 - Search Open Technical Databases",
          },
          {
            value: "T1597",
            text: "T1597 - Search Closed Sources",
          },
          {
            value: "T1598",
            text: "T1598 - Phishing for Information",
          },
          {
            value: "T1599",
            text: "T1599 - Network Boundary Bridging",
          },
          {
            value: "T1600",
            text: "T1600 - Weaken Encryption",
          },
          {
            value: "T1601",
            text: "T1601 - Modify System Image",
          },
          {
            value: "T1602",
            text: "T1602 - Data from Configuration Repository",
          },
          {
            value: "T1606",
            text: "T1606 - Forge Web Credentials",
          },
          {
            value: "T1608",
            text: "T1608 - Stage Capabilities",
          },
          {
            value: "T1609",
            text: "T1609 - Container Administration Command",
          },
          {
            value: "T1610",
            text: "T1610 - Deploy Container",
          },
          {
            value: "T1611",
            text: "T1611 - Escape to Host",
          },
          {
            value: "T1612",
            text: "T1612 - Build Image on Host",
          },
          {
            value: "T1613",
            text: "T1613 - Container and Resource Discovery",
          },
          {
            value: "T1614",
            text: "T1614 - System Location Discovery",
          },
          {
            value: "T1615",
            text: "T1615 - Group Policy Discovery",
          },
          {
            value: "T1619",
            text: "T1619 - Cloud Storage Object Discovery",
          },
          {
            value: "T1620",
            text: "T1620 - Reflective Code Loading",
          },
          {
            value: "T1621",
            text: "T1621 - Multi-Factor Authentication Request Generation",
          },
          {
            value: "T1622",
            text: "T1622 - Debugger Evasion",
          },
          {
            value: "T1647",
            text: "T1647 - Plist File Modification",
          },
          {
            value: "T1648",
            text: "T1648 - Serverless Execution",
          },
          {
            value: "T1649",
            text: "T1649 - Steal or Forge Authentication Certificates",
          },
        ],
      },
      le = {
        id: "sub_technique",
        name: "Sub-technique",
        type: a["c"].Enum,
        options: [
          {
            value: "T1001.001",
            text: "T1001.001 - Data Obfuscation: Junk Data",
          },
          {
            value: "T1001.002",
            text: "T1001.002 - Data Obfuscation: Steganography",
          },
          {
            value: "T1001.003",
            text: "T1001.003 - Data Obfuscation: Protocol Impersonation",
          },
          {
            value: "T1003.001",
            text: "T1003.001 - OS Credential Dumping: LSASS Memory",
          },
          {
            value: "T1003.002",
            text: "T1003.002 - OS Credential Dumping: Security Account Manager",
          },
          {
            value: "T1003.003",
            text: "T1003.003 - OS Credential Dumping: NTDS",
          },
          {
            value: "T1003.004",
            text: "T1003.004 - OS Credential Dumping: LSA Secrets",
          },
          {
            value: "T1003.005",
            text: "T1003.005 - OS Credential Dumping: Cached Domain Credentials",
          },
          {
            value: "T1003.006",
            text: "T1003.006 - OS Credential Dumping: DCSync",
          },
          {
            value: "T1003.007",
            text: "T1003.007 - OS Credential Dumping: Proc Filesystem",
          },
          {
            value: "T1003.008",
            text: "T1003.008 - OS Credential Dumping: /etc/passwd and /etc/shadow",
          },
          {
            value: "T1011.001",
            text: "T1011.001 - Exfiltration Over Other Network Medium: Exfiltration Over Bluetooth",
          },
          {
            value: "T1016.001",
            text: "T1016.001 - System Network Configuration Discovery: Internet Connection Discovery",
          },
          {
            value: "T1020.001",
            text: "T1020.001 - Automated Exfiltration: Traffic Duplication",
          },
          {
            value: "T1021.001",
            text: "T1021.001 - Remote Services: Remote Desktop Protocol",
          },
          {
            value: "T1021.002",
            text: "T1021.002 - Remote Services: SMB/Windows Admin Shares",
          },
          {
            value: "T1021.003",
            text: "T1021.003 - Remote Services: Distributed Component Object Model",
          },
          {
            value: "T1021.004",
            text: "T1021.004 - Remote Services: SSH",
          },
          {
            value: "T1021.005",
            text: "T1021.005 - Remote Services: VNC",
          },
          {
            value: "T1021.006",
            text: "T1021.006 - Remote Services: Windows Remote Management",
          },
          {
            value: "T1027.001",
            text: "T1027.001 - Obfuscated Files or Information: Binary Padding",
          },
          {
            value: "T1027.002",
            text: "T1027.002 - Obfuscated Files or Information: Software Packing",
          },
          {
            value: "T1027.003",
            text: "T1027.003 - Obfuscated Files or Information: Steganography",
          },
          {
            value: "T1027.004",
            text: "T1027.004 - Obfuscated Files or Information: Compile After Delivery",
          },
          {
            value: "T1027.005",
            text: "T1027.005 - Obfuscated Files or Information: Indicator Removal from Tools",
          },
          {
            value: "T1027.006",
            text: "T1027.006 - Obfuscated Files or Information: HTML Smuggling",
          },
          {
            value: "T1027.007",
            text: "T1027.007 - Obfuscated Files or Information: Dynamic API Resolution",
          },
          {
            value: "T1027.008",
            text: "T1027.008 - Obfuscated Files or Information: Stripped Payloads",
          },
          {
            value: "T1027.009",
            text: "T1027.009 - Obfuscated Files or Information: Embedded Payloads",
          },
          {
            value: "T1036.001",
            text: "T1036.001 - Masquerading: Invalid Code Signature",
          },
          {
            value: "T1036.002",
            text: "T1036.002 - Masquerading: Right-to-Left Override",
          },
          {
            value: "T1036.003",
            text: "T1036.003 - Masquerading: Rename System Utilities",
          },
          {
            value: "T1036.004",
            text: "T1036.004 - Masquerading: Masquerade Task or Service",
          },
          {
            value: "T1036.005",
            text: "T1036.005 - Masquerading: Match Legitimate Name or Location",
          },
          {
            value: "T1036.006",
            text: "T1036.006 - Masquerading: Space after Filename",
          },
          {
            value: "T1036.007",
            text: "T1036.007 - Masquerading: Double File Extension",
          },
          {
            value: "T1037.001",
            text: "T1037.001 - Boot or Logon Initialization Scripts: Logon Script (Windows)",
          },
          {
            value: "T1037.002",
            text: "T1037.002 - Boot or Logon Initialization Scripts: Login Hook",
          },
          {
            value: "T1037.003",
            text: "T1037.003 - Boot or Logon Initialization Scripts: Network Logon Script",
          },
          {
            value: "T1037.004",
            text: "T1037.004 - Boot or Logon Initialization Scripts: RC Scripts",
          },
          {
            value: "T1037.005",
            text: "T1037.005 - Boot or Logon Initialization Scripts: Startup Items",
          },
          {
            value: "T1048.001",
            text: "T1048.001 - Exfiltration Over Alternative Protocol: Exfiltration Over Symmetric Encrypted Non-C2 Protocol",
          },
          {
            value: "T1048.002",
            text: "T1048.002 - Exfiltration Over Alternative Protocol: Exfiltration Over Asymmetric Encrypted Non-C2 Protocol",
          },
          {
            value: "T1048.003",
            text: "T1048.003 - Exfiltration Over Alternative Protocol: Exfiltration Over Unencrypted Non-C2 Protocol",
          },
          {
            value: "T1052.001",
            text: "T1052.001 - Exfiltration Over Physical Medium: Exfiltration over USB",
          },
          {
            value: "T1053.002",
            text: "T1053.002 - Scheduled Task/Job: At",
          },
          {
            value: "T1053.003",
            text: "T1053.003 - Scheduled Task/Job: Cron",
          },
          {
            value: "T1053.005",
            text: "T1053.005 - Scheduled Task/Job: Scheduled Task",
          },
          {
            value: "T1053.006",
            text: "T1053.006 - Scheduled Task/Job: Systemd Timers",
          },
          {
            value: "T1053.007",
            text: "T1053.007 - Scheduled Task/Job: Container Orchestration Job",
          },
          {
            value: "T1055.001",
            text: "T1055.001 - Process Injection: Dynamic-link Library Injection",
          },
          {
            value: "T1055.002",
            text: "T1055.002 - Process Injection: Portable Executable Injection",
          },
          {
            value: "T1055.003",
            text: "T1055.003 - Process Injection: Thread Execution Hijacking",
          },
          {
            value: "T1055.004",
            text: "T1055.004 - Process Injection: Asynchronous Procedure Call",
          },
          {
            value: "T1055.005",
            text: "T1055.005 - Process Injection: Thread Local Storage",
          },
          {
            value: "T1055.008",
            text: "T1055.008 - Process Injection: Ptrace System Calls",
          },
          {
            value: "T1055.009",
            text: "T1055.009 - Process Injection: Proc Memory",
          },
          {
            value: "T1055.011",
            text: "T1055.011 - Process Injection: Extra Window Memory Injection",
          },
          {
            value: "T1055.012",
            text: "T1055.012 - Process Injection: Process Hollowing",
          },
          {
            value: "T1055.013",
            text: "T1055.013 - Process Injection: Process Doppelgänging",
          },
          {
            value: "T1055.014",
            text: "T1055.014 - Process Injection: VDSO Hijacking",
          },
          {
            value: "T1055.015",
            text: "T1055.015 - Process Injection: ListPlanting",
          },
          {
            value: "T1056.001",
            text: "T1056.001 - Input Capture: Keylogging",
          },
          {
            value: "T1056.002",
            text: "T1056.002 - Input Capture: GUI Input Capture",
          },
          {
            value: "T1056.003",
            text: "T1056.003 - Input Capture: Web Portal Capture",
          },
          {
            value: "T1056.004",
            text: "T1056.004 - Input Capture: Credential API Hooking",
          },
          {
            value: "T1059.001",
            text: "T1059.001 - Command and Scripting Interpreter: PowerShell",
          },
          {
            value: "T1059.002",
            text: "T1059.002 - Command and Scripting Interpreter: AppleScript",
          },
          {
            value: "T1059.003",
            text: "T1059.003 - Command and Scripting Interpreter: Windows Command Shell",
          },
          {
            value: "T1059.004",
            text: "T1059.004 - Command and Scripting Interpreter: Unix Shell",
          },
          {
            value: "T1059.005",
            text: "T1059.005 - Command and Scripting Interpreter: Visual Basic",
          },
          {
            value: "T1059.006",
            text: "T1059.006 - Command and Scripting Interpreter: Python",
          },
          {
            value: "T1059.007",
            text: "T1059.007 - Command and Scripting Interpreter: JavaScript",
          },
          {
            value: "T1059.008",
            text: "T1059.008 - Command and Scripting Interpreter: Network Device CLI",
          },
          {
            value: "T1069.001",
            text: "T1069.001 - Permission Groups Discovery: Local Groups",
          },
          {
            value: "T1069.002",
            text: "T1069.002 - Permission Groups Discovery: Domain Groups",
          },
          {
            value: "T1069.003",
            text: "T1069.003 - Permission Groups Discovery: Cloud Groups",
          },
          {
            value: "T1070.001",
            text: "T1070.001 - Indicator Removal: Clear Windows Event Logs",
          },
          {
            value: "T1070.002",
            text: "T1070.002 - Indicator Removal: Clear Linux or Mac System Logs",
          },
          {
            value: "T1070.003",
            text: "T1070.003 - Indicator Removal: Clear Command History",
          },
          {
            value: "T1070.004",
            text: "T1070.004 - Indicator Removal: File Deletion",
          },
          {
            value: "T1070.005",
            text: "T1070.005 - Indicator Removal: Network Share Connection Removal",
          },
          {
            value: "T1070.006",
            text: "T1070.006 - Indicator Removal: Timestomp",
          },
          {
            value: "T1070.007",
            text: "T1070.007 - Indicator Removal: Clear Network Connection History and Configurations",
          },
          {
            value: "T1070.008",
            text: "T1070.008 - Indicator Removal: Clear Mailbox Data",
          },
          {
            value: "T1070.009",
            text: "T1070.009 - Indicator Removal: Clear Persistence",
          },
          {
            value: "T1071.001",
            text: "T1071.001 - Application Layer Protocol: Web Protocols",
          },
          {
            value: "T1071.002",
            text: "T1071.002 - Application Layer Protocol: File Transfer Protocols",
          },
          {
            value: "T1071.003",
            text: "T1071.003 - Application Layer Protocol: Mail Protocols",
          },
          {
            value: "T1071.004",
            text: "T1071.004 - Application Layer Protocol: DNS",
          },
          {
            value: "T1074.001",
            text: "T1074.001 - Data Staged: Local Data Staging",
          },
          {
            value: "T1074.002",
            text: "T1074.002 - Data Staged: Remote Data Staging",
          },
          {
            value: "T1078.001",
            text: "T1078.001 - Valid Accounts: Default Accounts",
          },
          {
            value: "T1078.002",
            text: "T1078.002 - Valid Accounts: Domain Accounts",
          },
          {
            value: "T1078.003",
            text: "T1078.003 - Valid Accounts: Local Accounts",
          },
          {
            value: "T1078.004",
            text: "T1078.004 - Valid Accounts: Cloud Accounts",
          },
          {
            value: "T1087.001",
            text: "T1087.001 - Account Discovery: Local Account",
          },
          {
            value: "T1087.002",
            text: "T1087.002 - Account Discovery: Domain Account",
          },
          {
            value: "T1087.003",
            text: "T1087.003 - Account Discovery: Email Account",
          },
          {
            value: "T1087.004",
            text: "T1087.004 - Account Discovery: Cloud Account",
          },
          {
            value: "T1090.001",
            text: "T1090.001 - Proxy: Internal Proxy",
          },
          {
            value: "T1090.002",
            text: "T1090.002 - Proxy: External Proxy",
          },
          {
            value: "T1090.003",
            text: "T1090.003 - Proxy: Multi-hop Proxy",
          },
          {
            value: "T1090.004",
            text: "T1090.004 - Proxy: Domain Fronting",
          },
          {
            value: "T1098.001",
            text: "T1098.001 - Account Manipulation: Additional Cloud Credentials",
          },
          {
            value: "T1098.002",
            text: "T1098.002 - Account Manipulation: Additional Email Delegate Permissions",
          },
          {
            value: "T1098.003",
            text: "T1098.003 - Account Manipulation: Additional Cloud Roles",
          },
          {
            value: "T1098.004",
            text: "T1098.004 - Account Manipulation: SSH Authorized Keys",
          },
          {
            value: "T1098.005",
            text: "T1098.005 - Account Manipulation: Device Registration",
          },
          {
            value: "T1102.001",
            text: "T1102.001 - Web Service: Dead Drop Resolver",
          },
          {
            value: "T1102.002",
            text: "T1102.002 - Web Service: Bidirectional Communication",
          },
          {
            value: "T1102.003",
            text: "T1102.003 - Web Service: One-Way Communication",
          },
          {
            value: "T1110.001",
            text: "T1110.001 - Brute Force: Password Guessing",
          },
          {
            value: "T1110.002",
            text: "T1110.002 - Brute Force: Password Cracking",
          },
          {
            value: "T1110.003",
            text: "T1110.003 - Brute Force: Password Spraying",
          },
          {
            value: "T1110.004",
            text: "T1110.004 - Brute Force: Credential Stuffing",
          },
          {
            value: "T1114.001",
            text: "T1114.001 - Email Collection: Local Email Collection",
          },
          {
            value: "T1114.002",
            text: "T1114.002 - Email Collection: Remote Email Collection",
          },
          {
            value: "T1114.003",
            text: "T1114.003 - Email Collection: Email Forwarding Rule",
          },
          {
            value: "T1127.001",
            text: "T1127.001 - Trusted Developer Utilities Proxy Execution: MSBuild",
          },
          {
            value: "T1132.001",
            text: "T1132.001 - Data Encoding: Standard Encoding",
          },
          {
            value: "T1132.002",
            text: "T1132.002 - Data Encoding: Non-Standard Encoding",
          },
          {
            value: "T1134.001",
            text: "T1134.001 - Access Token Manipulation: Token Impersonation/Theft",
          },
          {
            value: "T1134.002",
            text: "T1134.002 - Access Token Manipulation: Create Process with Token",
          },
          {
            value: "T1134.003",
            text: "T1134.003 - Access Token Manipulation: Make and Impersonate Token",
          },
          {
            value: "T1134.004",
            text: "T1134.004 - Access Token Manipulation: Parent PID Spoofing",
          },
          {
            value: "T1134.005",
            text: "T1134.005 - Access Token Manipulation: SID-History Injection",
          },
          {
            value: "T1136.001",
            text: "T1136.001 - Create Account: Local Account",
          },
          {
            value: "T1136.002",
            text: "T1136.002 - Create Account: Domain Account",
          },
          {
            value: "T1136.003",
            text: "T1136.003 - Create Account: Cloud Account",
          },
          {
            value: "T1137.001",
            text: "T1137.001 - Office Application Startup: Office Template Macros",
          },
          {
            value: "T1137.002",
            text: "T1137.002 - Office Application Startup: Office Test",
          },
          {
            value: "T1137.003",
            text: "T1137.003 - Office Application Startup: Outlook Forms",
          },
          {
            value: "T1137.004",
            text: "T1137.004 - Office Application Startup: Outlook Home Page",
          },
          {
            value: "T1137.005",
            text: "T1137.005 - Office Application Startup: Outlook Rules",
          },
          {
            value: "T1137.006",
            text: "T1137.006 - Office Application Startup: Add-ins",
          },
          {
            value: "T1195.001",
            text: "T1195.001 - Supply Chain Compromise: Compromise Software Dependencies and Development Tools",
          },
          {
            value: "T1195.002",
            text: "T1195.002 - Supply Chain Compromise: Compromise Software Supply Chain",
          },
          {
            value: "T1195.003",
            text: "T1195.003 - Supply Chain Compromise: Compromise Hardware Supply Chain",
          },
          {
            value: "T1204.001",
            text: "T1204.001 - User Execution: Malicious Link",
          },
          {
            value: "T1204.002",
            text: "T1204.002 - User Execution: Malicious File",
          },
          {
            value: "T1204.003",
            text: "T1204.003 - User Execution: Malicious Image",
          },
          {
            value: "T1205.001",
            text: "T1205.001 - Traffic Signaling: Port Knocking",
          },
          {
            value: "T1205.002",
            text: "T1205.002 - Traffic Signaling: Socket Filters",
          },
          {
            value: "T1213.001",
            text: "T1213.001 - Data from Information Repositories: Confluence",
          },
          {
            value: "T1213.002",
            text: "T1213.002 - Data from Information Repositories: Sharepoint",
          },
          {
            value: "T1213.003",
            text: "T1213.003 - Data from Information Repositories: Code Repositories",
          },
          {
            value: "T1216.001",
            text: "T1216.001 - System Script Proxy Execution: PubPrn",
          },
          {
            value: "T1218.001",
            text: "T1218.001 - System Binary Proxy Execution: Compiled HTML File",
          },
          {
            value: "T1218.002",
            text: "T1218.002 - System Binary Proxy Execution: Control Panel",
          },
          {
            value: "T1218.003",
            text: "T1218.003 - System Binary Proxy Execution: CMSTP",
          },
          {
            value: "T1218.004",
            text: "T1218.004 - System Binary Proxy Execution: InstallUtil",
          },
          {
            value: "T1218.005",
            text: "T1218.005 - System Binary Proxy Execution: Mshta",
          },
          {
            value: "T1218.007",
            text: "T1218.007 - System Binary Proxy Execution: Msiexec",
          },
          {
            value: "T1218.008",
            text: "T1218.008 - System Binary Proxy Execution: Odbcconf",
          },
          {
            value: "T1218.009",
            text: "T1218.009 - System Binary Proxy Execution: Regsvcs/Regasm",
          },
          {
            value: "T1218.010",
            text: "T1218.010 - System Binary Proxy Execution: Regsvr32",
          },
          {
            value: "T1218.011",
            text: "T1218.011 - System Binary Proxy Execution: Rundll32",
          },
          {
            value: "T1218.012",
            text: "T1218.012 - System Binary Proxy Execution: Verclsid",
          },
          {
            value: "T1218.013",
            text: "T1218.013 - System Binary Proxy Execution: Mavinject",
          },
          {
            value: "T1218.014",
            text: "T1218.014 - System Binary Proxy Execution: MMC",
          },
          {
            value: "T1222.001",
            text: "T1222.001 - File and Directory Permissions Modification: Windows File and Directory Permissions Modification",
          },
          {
            value: "T1222.002",
            text: "T1222.002 - File and Directory Permissions Modification: Linux and Mac File and Directory Permissions Modification",
          },
          {
            value: "T1480.001",
            text: "T1480.001 - Execution Guardrails: Environmental Keying",
          },
          {
            value: "T1484.001",
            text: "T1484.001 - Domain Policy Modification: Group Policy Modification",
          },
          {
            value: "T1484.002",
            text: "T1484.002 - Domain Policy Modification: Domain Trust Modification",
          },
          {
            value: "T1491.001",
            text: "T1491.001 - Defacement: Internal Defacement",
          },
          {
            value: "T1491.002",
            text: "T1491.002 - Defacement: External Defacement",
          },
          {
            value: "T1497.001",
            text: "T1497.001 - Virtualization/Sandbox Evasion: System Checks",
          },
          {
            value: "T1497.002",
            text: "T1497.002 - Virtualization/Sandbox Evasion: User Activity Based Checks",
          },
          {
            value: "T1497.003",
            text: "T1497.003 - Virtualization/Sandbox Evasion: Time Based Evasion",
          },
          {
            value: "T1498.001",
            text: "T1498.001 - Network Denial of Service: Direct Network Flood",
          },
          {
            value: "T1498.002",
            text: "T1498.002 - Network Denial of Service: Reflection Amplification",
          },
          {
            value: "T1499.001",
            text: "T1499.001 - Endpoint Denial of Service: OS Exhaustion Flood",
          },
          {
            value: "T1499.002",
            text: "T1499.002 - Endpoint Denial of Service: Service Exhaustion Flood",
          },
          {
            value: "T1499.003",
            text: "T1499.003 - Endpoint Denial of Service: Application Exhaustion Flood",
          },
          {
            value: "T1499.004",
            text: "T1499.004 - Endpoint Denial of Service: Application or System Exploitation",
          },
          {
            value: "T1505.001",
            text: "T1505.001 - Server Software Component: SQL Stored Procedures",
          },
          {
            value: "T1505.002",
            text: "T1505.002 - Server Software Component: Transport Agent",
          },
          {
            value: "T1505.003",
            text: "T1505.003 - Server Software Component: Web Shell",
          },
          {
            value: "T1505.004",
            text: "T1505.004 - Server Software Component: IIS Components",
          },
          {
            value: "T1505.005",
            text: "T1505.005 - Server Software Component: Terminal Services DLL",
          },
          {
            value: "T1518.001",
            text: "T1518.001 - Software Discovery: Security Software Discovery",
          },
          {
            value: "T1542.001",
            text: "T1542.001 - Pre-OS Boot: System Firmware",
          },
          {
            value: "T1542.002",
            text: "T1542.002 - Pre-OS Boot: Component Firmware",
          },
          {
            value: "T1542.003",
            text: "T1542.003 - Pre-OS Boot: Bootkit",
          },
          {
            value: "T1542.004",
            text: "T1542.004 - Pre-OS Boot: ROMMONkit",
          },
          {
            value: "T1542.005",
            text: "T1542.005 - Pre-OS Boot: TFTP Boot",
          },
          {
            value: "T1543.001",
            text: "T1543.001 - Create or Modify System Process: Launch Agent",
          },
          {
            value: "T1543.002",
            text: "T1543.002 - Create or Modify System Process: Systemd Service",
          },
          {
            value: "T1543.003",
            text: "T1543.003 - Create or Modify System Process: Windows Service",
          },
          {
            value: "T1543.004",
            text: "T1543.004 - Create or Modify System Process: Launch Daemon",
          },
          {
            value: "T1546.001",
            text: "T1546.001 - Event Triggered Execution: Change Default File Association",
          },
          {
            value: "T1546.002",
            text: "T1546.002 - Event Triggered Execution: Screensaver",
          },
          {
            value: "T1546.003",
            text: "T1546.003 - Event Triggered Execution: Windows Management Instrumentation Event Subscription",
          },
          {
            value: "T1546.004",
            text: "T1546.004 - Event Triggered Execution: Unix Shell Configuration Modification",
          },
          {
            value: "T1546.005",
            text: "T1546.005 - Event Triggered Execution: Trap",
          },
          {
            value: "T1546.006",
            text: "T1546.006 - Event Triggered Execution: LC_LOAD_DYLIB Addition",
          },
          {
            value: "T1546.007",
            text: "T1546.007 - Event Triggered Execution: Netsh Helper DLL",
          },
          {
            value: "T1546.008",
            text: "T1546.008 - Event Triggered Execution: Accessibility Features",
          },
          {
            value: "T1546.009",
            text: "T1546.009 - Event Triggered Execution: AppCert DLLs",
          },
          {
            value: "T1546.010",
            text: "T1546.010 - Event Triggered Execution: AppInit DLLs",
          },
          {
            value: "T1546.011",
            text: "T1546.011 - Event Triggered Execution: Application Shimming",
          },
          {
            value: "T1546.012",
            text: "T1546.012 - Event Triggered Execution: Image File Execution Options Injection",
          },
          {
            value: "T1546.013",
            text: "T1546.013 - Event Triggered Execution: PowerShell Profile",
          },
          {
            value: "T1546.014",
            text: "T1546.014 - Event Triggered Execution: Emond",
          },
          {
            value: "T1546.015",
            text: "T1546.015 - Event Triggered Execution: Component Object Model Hijacking",
          },
          {
            value: "T1546.016",
            text: "T1546.016 - Event Triggered Execution: Installer Packages",
          },
          {
            value: "T1547.001",
            text: "T1547.001 - Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder",
          },
          {
            value: "T1547.002",
            text: "T1547.002 - Boot or Logon Autostart Execution: Authentication Package",
          },
          {
            value: "T1547.003",
            text: "T1547.003 - Boot or Logon Autostart Execution: Time Providers",
          },
          {
            value: "T1547.004",
            text: "T1547.004 - Boot or Logon Autostart Execution: Winlogon Helper DLL",
          },
          {
            value: "T1547.005",
            text: "T1547.005 - Boot or Logon Autostart Execution: Security Support Provider",
          },
          {
            value: "T1547.006",
            text: "T1547.006 - Boot or Logon Autostart Execution: Kernel Modules and Extensions",
          },
          {
            value: "T1547.007",
            text: "T1547.007 - Boot or Logon Autostart Execution: Re-opened Applications",
          },
          {
            value: "T1547.008",
            text: "T1547.008 - Boot or Logon Autostart Execution: LSASS Driver",
          },
          {
            value: "T1547.009",
            text: "T1547.009 - Boot or Logon Autostart Execution: Shortcut Modification",
          },
          {
            value: "T1547.010",
            text: "T1547.010 - Boot or Logon Autostart Execution: Port Monitors",
          },
          {
            value: "T1547.012",
            text: "T1547.012 - Boot or Logon Autostart Execution: Print Processors",
          },
          {
            value: "T1547.013",
            text: "T1547.013 - Boot or Logon Autostart Execution: XDG Autostart Entries",
          },
          {
            value: "T1547.014",
            text: "T1547.014 - Boot or Logon Autostart Execution: Active Setup",
          },
          {
            value: "T1547.015",
            text: "T1547.015 - Boot or Logon Autostart Execution: Login Items",
          },
          {
            value: "T1548.001",
            text: "T1548.001 - Abuse Elevation Control Mechanism: Setuid and Setgid",
          },
          {
            value: "T1548.002",
            text: "T1548.002 - Abuse Elevation Control Mechanism: Bypass User Account Control",
          },
          {
            value: "T1548.003",
            text: "T1548.003 - Abuse Elevation Control Mechanism: Sudo and Sudo Caching",
          },
          {
            value: "T1548.004",
            text: "T1548.004 - Abuse Elevation Control Mechanism: Elevated Execution with Prompt",
          },
          {
            value: "T1550.001",
            text: "T1550.001 - Use Alternate Authentication Material: Application Access Token",
          },
          {
            value: "T1550.002",
            text: "T1550.002 - Use Alternate Authentication Material: Pass the Hash",
          },
          {
            value: "T1550.003",
            text: "T1550.003 - Use Alternate Authentication Material: Pass the Ticket",
          },
          {
            value: "T1550.004",
            text: "T1550.004 - Use Alternate Authentication Material: Web Session Cookie",
          },
          {
            value: "T1552.001",
            text: "T1552.001 - Unsecured Credentials: Credentials In Files",
          },
          {
            value: "T1552.002",
            text: "T1552.002 - Unsecured Credentials: Credentials in Registry",
          },
          {
            value: "T1552.003",
            text: "T1552.003 - Unsecured Credentials: Bash History",
          },
          {
            value: "T1552.004",
            text: "T1552.004 - Unsecured Credentials: Private Keys",
          },
          {
            value: "T1552.005",
            text: "T1552.005 - Unsecured Credentials: Cloud Instance Metadata API",
          },
          {
            value: "T1552.006",
            text: "T1552.006 - Unsecured Credentials: Group Policy Preferences",
          },
          {
            value: "T1552.007",
            text: "T1552.007 - Unsecured Credentials: Container API",
          },
          {
            value: "T1553.001",
            text: "T1553.001 - Subvert Trust Controls: Gatekeeper Bypass",
          },
          {
            value: "T1553.002",
            text: "T1553.002 - Subvert Trust Controls: Code Signing",
          },
          {
            value: "T1553.003",
            text: "T1553.003 - Subvert Trust Controls: SIP and Trust Provider Hijacking",
          },
          {
            value: "T1553.004",
            text: "T1553.004 - Subvert Trust Controls: Install Root Certificate",
          },
          {
            value: "T1553.005",
            text: "T1553.005 - Subvert Trust Controls: Mark-of-the-Web Bypass",
          },
          {
            value: "T1553.006",
            text: "T1553.006 - Subvert Trust Controls: Code Signing Policy Modification",
          },
          {
            value: "T1555.001",
            text: "T1555.001 - Credentials from Password Stores: Keychain",
          },
          {
            value: "T1555.002",
            text: "T1555.002 - Credentials from Password Stores: Securityd Memory",
          },
          {
            value: "T1555.003",
            text: "T1555.003 - Credentials from Password Stores: Credentials from Web Browsers",
          },
          {
            value: "T1555.004",
            text: "T1555.004 - Credentials from Password Stores: Windows Credential Manager",
          },
          {
            value: "T1555.005",
            text: "T1555.005 - Credentials from Password Stores: Password Managers",
          },
          {
            value: "T1556.001",
            text: "T1556.001 - Modify Authentication Process: Domain Controller Authentication",
          },
          {
            value: "T1556.002",
            text: "T1556.002 - Modify Authentication Process: Password Filter DLL",
          },
          {
            value: "T1556.003",
            text: "T1556.003 - Modify Authentication Process: Pluggable Authentication Modules",
          },
          {
            value: "T1556.004",
            text: "T1556.004 - Modify Authentication Process: Network Device Authentication",
          },
          {
            value: "T1556.005",
            text: "T1556.005 - Modify Authentication Process: Reversible Encryption",
          },
          {
            value: "T1556.006",
            text: "T1556.006 - Modify Authentication Process: Multi-Factor Authentication",
          },
          {
            value: "T1556.007",
            text: "T1556.007 - Modify Authentication Process: Hybrid Identity",
          },
          {
            value: "T1557.001",
            text: "T1557.001 - Adversary-in-the-Middle: LLMNR/NBT-NS Poisoning and SMB Relay",
          },
          {
            value: "T1557.002",
            text: "T1557.002 - Adversary-in-the-Middle: ARP Cache Poisoning",
          },
          {
            value: "T1557.003",
            text: "T1557.003 - Adversary-in-the-Middle: DHCP Spoofing",
          },
          {
            value: "T1558.001",
            text: "T1558.001 - Steal or Forge Kerberos Tickets: Golden Ticket",
          },
          {
            value: "T1558.002",
            text: "T1558.002 - Steal or Forge Kerberos Tickets: Silver Ticket",
          },
          {
            value: "T1558.003",
            text: "T1558.003 - Steal or Forge Kerberos Tickets: Kerberoasting",
          },
          {
            value: "T1558.004",
            text: "T1558.004 - Steal or Forge Kerberos Tickets: AS-REP Roasting",
          },
          {
            value: "T1559.001",
            text: "T1559.001 - Inter-Process Communication: Component Object Model",
          },
          {
            value: "T1559.002",
            text: "T1559.002 - Inter-Process Communication: Dynamic Data Exchange",
          },
          {
            value: "T1559.003",
            text: "T1559.003 - Inter-Process Communication: XPC Services",
          },
          {
            value: "T1560.001",
            text: "T1560.001 - Archive Collected Data: Archive via Utility",
          },
          {
            value: "T1560.002",
            text: "T1560.002 - Archive Collected Data: Archive via Library",
          },
          {
            value: "T1560.003",
            text: "T1560.003 - Archive Collected Data: Archive via Custom Method",
          },
          {
            value: "T1561.001",
            text: "T1561.001 - Disk Wipe: Disk Content Wipe",
          },
          {
            value: "T1561.002",
            text: "T1561.002 - Disk Wipe: Disk Structure Wipe",
          },
          {
            value: "T1562.001",
            text: "T1562.001 - Impair Defenses: Disable or Modify Tools",
          },
          {
            value: "T1562.002",
            text: "T1562.002 - Impair Defenses: Disable Windows Event Logging",
          },
          {
            value: "T1562.003",
            text: "T1562.003 - Impair Defenses: Impair Command History Logging",
          },
          {
            value: "T1562.004",
            text: "T1562.004 - Impair Defenses: Disable or Modify System Firewall",
          },
          {
            value: "T1562.006",
            text: "T1562.006 - Impair Defenses: Indicator Blocking",
          },
          {
            value: "T1562.007",
            text: "T1562.007 - Impair Defenses: Disable or Modify Cloud Firewall",
          },
          {
            value: "T1562.008",
            text: "T1562.008 - Impair Defenses: Disable Cloud Logs",
          },
          {
            value: "T1562.009",
            text: "T1562.009 - Impair Defenses: Safe Mode Boot",
          },
          {
            value: "T1562.010",
            text: "T1562.010 - Impair Defenses: Downgrade Attack",
          },
          {
            value: "T1563.001",
            text: "T1563.001 - Remote Service Session Hijacking: SSH Hijacking",
          },
          {
            value: "T1563.002",
            text: "T1563.002 - Remote Service Session Hijacking: RDP Hijacking",
          },
          {
            value: "T1564.001",
            text: "T1564.001 - Hide Artifacts: Hidden Files and Directories",
          },
          {
            value: "T1564.002",
            text: "T1564.002 - Hide Artifacts: Hidden Users",
          },
          {
            value: "T1564.003",
            text: "T1564.003 - Hide Artifacts: Hidden Window",
          },
          {
            value: "T1564.004",
            text: "T1564.004 - Hide Artifacts: NTFS File Attributes",
          },
          {
            value: "T1564.005",
            text: "T1564.005 - Hide Artifacts: Hidden File System",
          },
          {
            value: "T1564.006",
            text: "T1564.006 - Hide Artifacts: Run Virtual Instance",
          },
          {
            value: "T1564.007",
            text: "T1564.007 - Hide Artifacts: VBA Stomping",
          },
          {
            value: "T1564.008",
            text: "T1564.008 - Hide Artifacts: Email Hiding Rules",
          },
          {
            value: "T1564.009",
            text: "T1564.009 - Hide Artifacts: Resource Forking",
          },
          {
            value: "T1564.010",
            text: "T1564.010 - Hide Artifacts: Process Argument Spoofing",
          },
          {
            value: "T1565.001",
            text: "T1565.001 - Data Manipulation: Stored Data Manipulation",
          },
          {
            value: "T1565.002",
            text: "T1565.002 - Data Manipulation: Transmitted Data Manipulation",
          },
          {
            value: "T1565.003",
            text: "T1565.003 - Data Manipulation: Runtime Data Manipulation",
          },
          {
            value: "T1566.001",
            text: "T1566.001 - Phishing: Spearphishing Attachment",
          },
          {
            value: "T1566.002",
            text: "T1566.002 - Phishing: Spearphishing Link",
          },
          {
            value: "T1566.003",
            text: "T1566.003 - Phishing: Spearphishing via Service",
          },
          {
            value: "T1567.001",
            text: "T1567.001 - Exfiltration Over Web Service: Exfiltration to Code Repository",
          },
          {
            value: "T1567.002",
            text: "T1567.002 - Exfiltration Over Web Service: Exfiltration to Cloud Storage",
          },
          {
            value: "T1568.001",
            text: "T1568.001 - Dynamic Resolution: Fast Flux DNS",
          },
          {
            value: "T1568.002",
            text: "T1568.002 - Dynamic Resolution: Domain Generation Algorithms",
          },
          {
            value: "T1568.003",
            text: "T1568.003 - Dynamic Resolution: DNS Calculation",
          },
          {
            value: "T1569.001",
            text: "T1569.001 - System Services: Launchctl",
          },
          {
            value: "T1569.002",
            text: "T1569.002 - System Services: Service Execution",
          },
          {
            value: "T1573.001",
            text: "T1573.001 - Encrypted Channel: Symmetric Cryptography",
          },
          {
            value: "T1573.002",
            text: "T1573.002 - Encrypted Channel: Asymmetric Cryptography",
          },
          {
            value: "T1574.001",
            text: "T1574.001 - Hijack Execution Flow: DLL Search Order Hijacking",
          },
          {
            value: "T1574.002",
            text: "T1574.002 - Hijack Execution Flow: DLL Side-Loading",
          },
          {
            value: "T1574.004",
            text: "T1574.004 - Hijack Execution Flow: Dylib Hijacking",
          },
          {
            value: "T1574.005",
            text: "T1574.005 - Hijack Execution Flow: Executable Installer File Permissions Weakness",
          },
          {
            value: "T1574.006",
            text: "T1574.006 - Hijack Execution Flow: Dynamic Linker Hijacking",
          },
          {
            value: "T1574.007",
            text: "T1574.007 - Hijack Execution Flow: Path Interception by PATH Environment Variable",
          },
          {
            value: "T1574.008",
            text: "T1574.008 - Hijack Execution Flow: Path Interception by Search Order Hijacking",
          },
          {
            value: "T1574.009",
            text: "T1574.009 - Hijack Execution Flow: Path Interception by Unquoted Path",
          },
          {
            value: "T1574.010",
            text: "T1574.010 - Hijack Execution Flow: Services File Permissions Weakness",
          },
          {
            value: "T1574.011",
            text: "T1574.011 - Hijack Execution Flow: Services Registry Permissions Weakness",
          },
          {
            value: "T1574.012",
            text: "T1574.012 - Hijack Execution Flow: COR_PROFILER",
          },
          {
            value: "T1574.013",
            text: "T1574.013 - Hijack Execution Flow: KernelCallbackTable",
          },
          {
            value: "T1578.001",
            text: "T1578.001 - Modify Cloud Compute Infrastructure: Create Snapshot",
          },
          {
            value: "T1578.002",
            text: "T1578.002 - Modify Cloud Compute Infrastructure: Create Cloud Instance",
          },
          {
            value: "T1578.003",
            text: "T1578.003 - Modify Cloud Compute Infrastructure: Delete Cloud Instance",
          },
          {
            value: "T1578.004",
            text: "T1578.004 - Modify Cloud Compute Infrastructure: Revert Cloud Instance",
          },
          {
            value: "T1583.001",
            text: "T1583.001 - Acquire Infrastructure: Domains",
          },
          {
            value: "T1583.002",
            text: "T1583.002 - Acquire Infrastructure: DNS Server",
          },
          {
            value: "T1583.003",
            text: "T1583.003 - Acquire Infrastructure: Virtual Private Server",
          },
          {
            value: "T1583.004",
            text: "T1583.004 - Acquire Infrastructure: Server",
          },
          {
            value: "T1583.005",
            text: "T1583.005 - Acquire Infrastructure: Botnet",
          },
          {
            value: "T1583.006",
            text: "T1583.006 - Acquire Infrastructure: Web Services",
          },
          {
            value: "T1583.007",
            text: "T1583.007 - Acquire Infrastructure: Serverless",
          },
          {
            value: "T1584.001",
            text: "T1584.001 - Compromise Infrastructure: Domains",
          },
          {
            value: "T1584.002",
            text: "T1584.002 - Compromise Infrastructure: DNS Server",
          },
          {
            value: "T1584.003",
            text: "T1584.003 - Compromise Infrastructure: Virtual Private Server",
          },
          {
            value: "T1584.004",
            text: "T1584.004 - Compromise Infrastructure: Server",
          },
          {
            value: "T1584.005",
            text: "T1584.005 - Compromise Infrastructure: Botnet",
          },
          {
            value: "T1584.006",
            text: "T1584.006 - Compromise Infrastructure: Web Services",
          },
          {
            value: "T1584.007",
            text: "T1584.007 - Compromise Infrastructure: Serverless",
          },
          {
            value: "T1585.001",
            text: "T1585.001 - Establish Accounts: Social Media Accounts",
          },
          {
            value: "T1585.002",
            text: "T1585.002 - Establish Accounts: Email Accounts",
          },
          {
            value: "T1585.003",
            text: "T1585.003 - Establish Accounts: Cloud Accounts",
          },
          {
            value: "T1586.001",
            text: "T1586.001 - Compromise Accounts: Social Media Accounts",
          },
          {
            value: "T1586.002",
            text: "T1586.002 - Compromise Accounts: Email Accounts",
          },
          {
            value: "T1586.003",
            text: "T1586.003 - Compromise Accounts: Cloud Accounts",
          },
          {
            value: "T1587.001",
            text: "T1587.001 - Develop Capabilities: Malware",
          },
          {
            value: "T1587.002",
            text: "T1587.002 - Develop Capabilities: Code Signing Certificates",
          },
          {
            value: "T1587.003",
            text: "T1587.003 - Develop Capabilities: Digital Certificates",
          },
          {
            value: "T1587.004",
            text: "T1587.004 - Develop Capabilities: Exploits",
          },
          {
            value: "T1588.001",
            text: "T1588.001 - Obtain Capabilities: Malware",
          },
          {
            value: "T1588.002",
            text: "T1588.002 - Obtain Capabilities: Tool",
          },
          {
            value: "T1588.003",
            text: "T1588.003 - Obtain Capabilities: Code Signing Certificates",
          },
          {
            value: "T1588.004",
            text: "T1588.004 - Obtain Capabilities: Digital Certificates",
          },
          {
            value: "T1588.005",
            text: "T1588.005 - Obtain Capabilities: Exploits",
          },
          {
            value: "T1588.006",
            text: "T1588.006 - Obtain Capabilities: Vulnerabilities",
          },
          {
            value: "T1589.001",
            text: "T1589.001 - Gather Victim Identity Information: Credentials",
          },
          {
            value: "T1589.002",
            text: "T1589.002 - Gather Victim Identity Information: Email Addresses",
          },
          {
            value: "T1589.003",
            text: "T1589.003 - Gather Victim Identity Information: Employee Names",
          },
          {
            value: "T1590.001",
            text: "T1590.001 - Gather Victim Network Information: Domain Properties",
          },
          {
            value: "T1590.002",
            text: "T1590.002 - Gather Victim Network Information: DNS",
          },
          {
            value: "T1590.003",
            text: "T1590.003 - Gather Victim Network Information: Network Trust Dependencies",
          },
          {
            value: "T1590.004",
            text: "T1590.004 - Gather Victim Network Information: Network Topology",
          },
          {
            value: "T1590.005",
            text: "T1590.005 - Gather Victim Network Information: IP Addresses",
          },
          {
            value: "T1590.006",
            text: "T1590.006 - Gather Victim Network Information: Network Security Appliances",
          },
          {
            value: "T1591.001",
            text: "T1591.001 - Gather Victim Org Information: Determine Physical Locations",
          },
          {
            value: "T1591.002",
            text: "T1591.002 - Gather Victim Org Information: Business Relationships",
          },
          {
            value: "T1591.003",
            text: "T1591.003 - Gather Victim Org Information: Identify Business Tempo",
          },
          {
            value: "T1591.004",
            text: "T1591.004 - Gather Victim Org Information: Identify Roles",
          },
          {
            value: "T1592.001",
            text: "T1592.001 - Gather Victim Host Information: Hardware",
          },
          {
            value: "T1592.002",
            text: "T1592.002 - Gather Victim Host Information: Software",
          },
          {
            value: "T1592.003",
            text: "T1592.003 - Gather Victim Host Information: Firmware",
          },
          {
            value: "T1592.004",
            text: "T1592.004 - Gather Victim Host Information: Client Configurations",
          },
          {
            value: "T1593.001",
            text: "T1593.001 - Search Open Websites/Domains: Social Media",
          },
          {
            value: "T1593.002",
            text: "T1593.002 - Search Open Websites/Domains: Search Engines",
          },
          {
            value: "T1593.003",
            text: "T1593.003 - Search Open Websites/Domains: Code Repositories",
          },
          {
            value: "T1595.001",
            text: "T1595.001 - Active Scanning: Scanning IP Blocks",
          },
          {
            value: "T1595.002",
            text: "T1595.002 - Active Scanning: Vulnerability Scanning",
          },
          {
            value: "T1595.003",
            text: "T1595.003 - Active Scanning: Wordlist Scanning",
          },
          {
            value: "T1596.001",
            text: "T1596.001 - Search Open Technical Databases: DNS/Passive DNS",
          },
          {
            value: "T1596.002",
            text: "T1596.002 - Search Open Technical Databases: WHOIS",
          },
          {
            value: "T1596.003",
            text: "T1596.003 - Search Open Technical Databases: Digital Certificates",
          },
          {
            value: "T1596.004",
            text: "T1596.004 - Search Open Technical Databases: CDNs",
          },
          {
            value: "T1596.005",
            text: "T1596.005 - Search Open Technical Databases: Scan Databases",
          },
          {
            value: "T1597.001",
            text: "T1597.001 - Search Closed Sources: Threat Intel Vendors",
          },
          {
            value: "T1597.002",
            text: "T1597.002 - Search Closed Sources: Purchase Technical Data",
          },
          {
            value: "T1598.001",
            text: "T1598.001 - Phishing for Information: Spearphishing Service",
          },
          {
            value: "T1598.002",
            text: "T1598.002 - Phishing for Information: Spearphishing Attachment",
          },
          {
            value: "T1598.003",
            text: "T1598.003 - Phishing for Information: Spearphishing Link",
          },
          {
            value: "T1599.001",
            text: "T1599.001 - Network Boundary Bridging: Network Address Translation Traversal",
          },
          {
            value: "T1600.001",
            text: "T1600.001 - Weaken Encryption: Reduce Key Space",
          },
          {
            value: "T1600.002",
            text: "T1600.002 - Weaken Encryption: Disable Crypto Hardware",
          },
          {
            value: "T1601.001",
            text: "T1601.001 - Modify System Image: Patch System Image",
          },
          {
            value: "T1601.002",
            text: "T1601.002 - Modify System Image: Downgrade System Image",
          },
          {
            value: "T1602.001",
            text: "T1602.001 - Data from Configuration Repository: SNMP (MIB Dump)",
          },
          {
            value: "T1602.002",
            text: "T1602.002 - Data from Configuration Repository: Network Device Configuration Dump",
          },
          {
            value: "T1606.001",
            text: "T1606.001 - Forge Web Credentials: Web Cookies",
          },
          {
            value: "T1606.002",
            text: "T1606.002 - Forge Web Credentials: SAML Tokens",
          },
          {
            value: "T1608.001",
            text: "T1608.001 - Stage Capabilities: Upload Malware",
          },
          {
            value: "T1608.002",
            text: "T1608.002 - Stage Capabilities: Upload Tool",
          },
          {
            value: "T1608.003",
            text: "T1608.003 - Stage Capabilities: Install Digital Certificate",
          },
          {
            value: "T1608.004",
            text: "T1608.004 - Stage Capabilities: Drive-by Target",
          },
          {
            value: "T1608.005",
            text: "T1608.005 - Stage Capabilities: Link Target",
          },
          {
            value: "T1608.006",
            text: "T1608.006 - Stage Capabilities: SEO Poisoning",
          },
          {
            value: "T1614.001",
            text: "T1614.001 - System Location Discovery: System Language Discovery",
          },
        ],
      };
    class ce {
      constructor(e) {
        (this.property = e),
          (this.onTechniqueUpdate = this._onTechniqueUpdate.bind(this)),
          e.on("insert-row", (e, t) => this.subscribeRow(t)),
          e.on("delete-row", (e, t) => this.unsubscribeRow(t));
      }
      subscribeRow(e) {
        let [t, i] = this.getAttackFieldsFromRow(e);
        t.on("update", this.onTechniqueUpdate),
          i.on("update", this.onTechniqueUpdate),
          this._onTechniqueUpdate(e[0]);
      }
      unsubscribeRow(e) {
        let [t, i] = this.getAttackFieldsFromRow(e);
        t.off("update", this.onTechniqueUpdate),
          i.off("update", this.onTechniqueUpdate);
      }
      _onTechniqueUpdate(e) {
        let [t, i, a] = this.lookupAttackFields(e);
        i.value
          ? (a.value = `https://d3fend.mitre.org/offensive-technique/attack/${i.value}/`)
          : t.value
          ? (a.value = `https://d3fend.mitre.org/offensive-technique/attack/${t.value}/`)
          : (a.value = "");
      }
      lookupAttackFields(e) {
        let t;
        for (let i of this.property.value.values())
          if (i.includes(e)) {
            t = i;
            break;
          }
        return this.getAttackFieldsFromRow(t);
      }
      getAttackFieldsFromRow(e) {
        return [
          e.find((e) => "technique" === e.id),
          e.find((e) => "sub_technique" === e.id),
          e.find((e) => "defend" === e.id),
        ];
      }
    }
    const ue = {
        TA0001: [
          "T1078",
          "T1091",
          "T1133",
          "T1189",
          "T1190",
          "T1195",
          "T1199",
          "T1200",
          "T1566",
        ],
        TA0002: [
          "T1047",
          "T1053",
          "T1059",
          "T1072",
          "T1106",
          "T1129",
          "T1203",
          "T1204",
          "T1559",
          "T1569",
          "T1609",
          "T1610",
          "T1648",
        ],
        TA0003: [
          "T1037",
          "T1053",
          "T1078",
          "T1098",
          "T1133",
          "T1136",
          "T1137",
          "T1176",
          "T1197",
          "T1205",
          "T1505",
          "T1525",
          "T1542",
          "T1543",
          "T1546",
          "T1547",
          "T1554",
          "T1556",
          "T1574",
        ],
        TA0004: [
          "T1037",
          "T1053",
          "T1055",
          "T1068",
          "T1078",
          "T1134",
          "T1484",
          "T1543",
          "T1546",
          "T1547",
          "T1548",
          "T1574",
          "T1611",
        ],
        TA0005: [
          "T1006",
          "T1014",
          "T1027",
          "T1036",
          "T1055",
          "T1070",
          "T1078",
          "T1112",
          "T1127",
          "T1134",
          "T1140",
          "T1197",
          "T1202",
          "T1205",
          "T1207",
          "T1211",
          "T1216",
          "T1218",
          "T1220",
          "T1221",
          "T1222",
          "T1480",
          "T1484",
          "T1497",
          "T1535",
          "T1542",
          "T1548",
          "T1550",
          "T1553",
          "T1556",
          "T1562",
          "T1564",
          "T1574",
          "T1578",
          "T1599",
          "T1600",
          "T1601",
          "T1610",
          "T1612",
          "T1620",
          "T1622",
          "T1647",
        ],
        TA0006: [
          "T1003",
          "T1040",
          "T1056",
          "T1110",
          "T1111",
          "T1187",
          "T1212",
          "T1528",
          "T1539",
          "T1552",
          "T1555",
          "T1556",
          "T1557",
          "T1558",
          "T1606",
          "T1621",
          "T1649",
        ],
        TA0007: [
          "T1007",
          "T1010",
          "T1012",
          "T1016",
          "T1018",
          "T1033",
          "T1040",
          "T1046",
          "T1049",
          "T1057",
          "T1069",
          "T1082",
          "T1083",
          "T1087",
          "T1120",
          "T1124",
          "T1135",
          "T1201",
          "T1217",
          "T1482",
          "T1497",
          "T1518",
          "T1526",
          "T1538",
          "T1580",
          "T1613",
          "T1614",
          "T1615",
          "T1619",
          "T1622",
        ],
        TA0008: [
          "T1021",
          "T1072",
          "T1080",
          "T1091",
          "T1210",
          "T1534",
          "T1550",
          "T1563",
          "T1570",
        ],
        TA0009: [
          "T1005",
          "T1025",
          "T1039",
          "T1056",
          "T1074",
          "T1113",
          "T1114",
          "T1115",
          "T1119",
          "T1123",
          "T1125",
          "T1185",
          "T1213",
          "T1530",
          "T1557",
          "T1560",
          "T1602",
        ],
        TA0010: [
          "T1011",
          "T1020",
          "T1029",
          "T1030",
          "T1041",
          "T1048",
          "T1052",
          "T1537",
          "T1567",
        ],
        TA0011: [
          "T1001",
          "T1008",
          "T1071",
          "T1090",
          "T1092",
          "T1095",
          "T1102",
          "T1104",
          "T1105",
          "T1132",
          "T1205",
          "T1219",
          "T1568",
          "T1571",
          "T1572",
          "T1573",
        ],
        TA0040: [
          "T1485",
          "T1486",
          "T1489",
          "T1490",
          "T1491",
          "T1495",
          "T1496",
          "T1498",
          "T1499",
          "T1529",
          "T1531",
          "T1561",
          "T1565",
        ],
        TA0042: ["T1583", "T1584", "T1585", "T1586", "T1587", "T1588", "T1608"],
        TA0043: [
          "T1589",
          "T1590",
          "T1591",
          "T1592",
          "T1593",
          "T1594",
          "T1595",
          "T1596",
          "T1597",
          "T1598",
        ],
      },
      pe = {
        T1595: ["001", "002", "003"],
        T1592: ["001", "002", "003", "004"],
        T1589: ["001", "002", "003"],
        T1590: ["001", "002", "003", "004", "005", "006"],
        T1591: ["001", "002", "003", "004"],
        T1598: ["001", "002", "003"],
        T1597: ["001", "002"],
        T1596: ["001", "002", "003", "004", "005"],
        T1593: ["001", "002", "003"],
        T1583: ["001", "002", "003", "004", "005", "006", "007"],
        T1586: ["001", "002", "003"],
        T1584: ["001", "002", "003", "004", "005", "006", "007"],
        T1587: ["001", "002", "003", "004"],
        T1585: ["001", "002", "003"],
        T1588: ["001", "002", "003", "004", "005", "006"],
        T1608: ["001", "002", "003", "004", "005", "006"],
        T1566: ["001", "002", "003"],
        T1195: ["001", "002", "003"],
        T1078: ["001", "002", "003", "004"],
        T1059: ["001", "002", "003", "004", "005", "006", "007", "008"],
        T1559: ["001", "002", "003"],
        T1053: ["002", "003", "005", "006", "007"],
        T1569: ["001", "002"],
        T1204: ["001", "002", "003"],
        T1098: ["001", "002", "003", "004", "005"],
        T1547: [
          "001",
          "002",
          "003",
          "004",
          "005",
          "006",
          "007",
          "008",
          "009",
          "01",
          "010",
          "012",
          "013",
          "014",
          "015",
        ],
        T1037: ["001", "002", "003", "004", "005"],
        T1136: ["001", "002", "003"],
        T1543: ["001", "002", "003", "004"],
        T1546: [
          "001",
          "002",
          "003",
          "004",
          "005",
          "006",
          "007",
          "008",
          "009",
          "01",
          "011",
          "012",
          "013",
          "014",
          "015",
          "016",
        ],
        T1574: [
          "001",
          "002",
          "004",
          "005",
          "006",
          "007",
          "008",
          "009",
          "01",
          "011",
          "012",
          "013",
        ],
        T1556: ["001", "002", "003", "004", "005", "006", "007"],
        T1137: ["001", "002", "003", "004", "005", "006"],
        T1542: ["001", "002", "003", "004", "005"],
        T1505: ["001", "002", "003", "004", "005"],
        T1205: ["001", "002"],
        T1548: ["001", "002", "003", "004"],
        T1134: ["001", "002", "003", "004", "005"],
        T1484: ["001", "002"],
        T1055: [
          "001",
          "002",
          "003",
          "004",
          "005",
          "008",
          "009",
          "011",
          "012",
          "013",
          "014",
          "015",
        ],
        T1480: ["001"],
        T1222: ["001", "002"],
        T1564: [
          "001",
          "002",
          "003",
          "004",
          "005",
          "006",
          "007",
          "008",
          "009",
          "01",
        ],
        T1562: ["001", "002", "003", "004", "006", "007", "008", "009", "01"],
        T1070: ["001", "002", "003", "004", "005", "006", "007", "008", "009"],
        T1036: ["001", "002", "003", "004", "005", "006", "007"],
        T1578: ["001", "002", "003", "004"],
        T1601: ["001", "002"],
        T1599: ["001"],
        T1027: ["001", "002", "003", "004", "005", "006", "007", "008", "009"],
        T1553: ["001", "002", "003", "004", "005", "006"],
        T1218: [
          "001",
          "002",
          "003",
          "004",
          "005",
          "007",
          "008",
          "009",
          "01",
          "011",
          "012",
          "013",
          "014",
        ],
        T1216: ["001"],
        T1127: ["001"],
        T1550: ["001", "002", "003", "004"],
        T1497: ["001", "002", "003"],
        T1600: ["001", "002"],
        T1557: ["001", "002", "003"],
        T1110: ["001", "002", "003", "004"],
        T1555: ["001", "002", "003", "004", "005"],
        T1606: ["001", "002"],
        T1056: ["001", "002", "003", "004"],
        T1003: ["001", "002", "003", "004", "005", "006", "007", "008"],
        T1558: ["001", "002", "003", "004"],
        T1552: ["001", "002", "003", "004", "005", "006", "007"],
        T1087: ["001", "002", "003", "004"],
        T1069: ["001", "002", "003"],
        T1518: ["001"],
        T1614: ["001"],
        T1016: ["001"],
        T1563: ["001", "002"],
        T1021: ["001", "002", "003", "004", "005", "006"],
        T1560: ["001", "002", "003"],
        T1602: ["001", "002"],
        T1213: ["001", "002", "003"],
        T1074: ["001", "002"],
        T1114: ["001", "002", "003"],
        T1071: ["001", "002", "003", "004"],
        T1132: ["001", "002"],
        T1001: ["001", "002", "003"],
        T1568: ["001", "002", "003"],
        T1573: ["001", "002"],
        T1090: ["001", "002", "003", "004"],
        T1102: ["001", "002", "003"],
        T1020: ["001"],
        T1048: ["001", "002", "003"],
        T1011: ["001"],
        T1052: ["001"],
        T1567: ["001", "002"],
        T1565: ["001", "002", "003"],
        T1491: ["001", "002"],
        T1561: ["001", "002"],
        T1499: ["001", "002", "003", "004"],
        T1498: ["001", "002"],
      };
    function de(e) {
      for (let t in ue) if (ue[t].includes(e)) return t;
    }
    function he(e) {
      let t;
      return (t = /(T[0-9]{4})\.[0-9]{3}/i.exec(e)) ? t[1] : void 0;
    }
    class ve {
      constructor(e, t) {
        e.registerAction(
          "import-attack-flow",
          "Import from Attack Flow",
          () => {
            V["a"].openTextFileDialog().then((i) => {
              let { contents: a } = i;
              (null !== a && void 0 !== a) ||
                console.error(
                  `Error: could not contents of file: '${i.filename}'.`
                );
              let n = JSON.parse(a),
                o = this.extractMitreAttackData(n),
                s = [];
              for (let t of o) s.push(U["d"](e, t));
              t.emit("execute", ...s);
            });
          }
        );
      }
      extractMitreAttackData(e) {
        var t;
        let i,
          a = ve.TACTIC_REGEX,
          n = ve.TECHNIQUE_REGEX,
          o = [];
        for (let s of null !== (t = e.objects) && void 0 !== t ? t : [])
          if ("attack-action" === s.type) {
            if (s.technique_id && (i = n.exec(s.technique_id))) {
              if (i[1]) {
                let e = i[1].toLocaleUpperCase(),
                  t = he(e),
                  a = de(t);
                o.push({
                  tactic: a,
                  technique: t,
                  sub_technique: e,
                });
                continue;
              }
              if (i[2]) {
                let e = i[2].toLocaleUpperCase(),
                  t = de(e);
                o.push({
                  tactic: t,
                  technique: e,
                });
                continue;
              }
            }
            s.tactic_id &&
              (i = a.exec(s.tactic_id)) &&
              o.push({
                tactic: i[0].toLocaleUpperCase(),
              });
          }
        return o;
      }
    }
    (ve.TACTIC_REGEX = /TA[0-9]{4}/i),
      (ve.TECHNIQUE_REGEX = /(T[0-9]{4}\.[0-9]{3})|(T[0-9]{4})/i);
    class Te {
      constructor(e) {
        (this.property = e),
          (this.onTacticUpdate = this._onTacticUpdate.bind(this)),
          (this.onTechniqueUpdate = this._onTechniqueUpdate.bind(this)),
          e.on("insert-row", (e, t) => this.subscribeRow(t)),
          e.on("delete-row", (e, t) => this.unsubscribeRow(t));
      }
      subscribeRow(e) {
        let [t, i] = this.getAttackFieldsFromRow(e);
        t.on("update", this.onTacticUpdate),
          i.on("update", this.onTechniqueUpdate),
          this._onTacticUpdate(e[0]),
          this._onTechniqueUpdate(e[0]);
      }
      unsubscribeRow(e) {
        let [t, i] = this.getAttackFieldsFromRow(e);
        t.off("update", this.onTacticUpdate),
          i.off("update", this.onTechniqueUpdate);
      }
      _onTacticUpdate(e) {
        let [t, i, a] = this.lookupAttackFields(e);
        this.updateTechniqueRestrictions(t, i),
          this.updateSubTechniqueRestrictions(t, i, a);
      }
      _onTechniqueUpdate(e) {
        let [t, i, a] = this.lookupAttackFields(e);
        this.updateSubTechniqueRestrictions(t, i, a);
      }
      updateTechniqueRestrictions(e, t) {
        if (null !== e.value) {
          let i = ue[e.value];
          t.restrictOptions(i);
        } else t.unrestrictOptions();
      }
      updateSubTechniqueRestrictions(e, t, i) {
        if (null !== t.value) {
          let e = pe[t.value];
          e
            ? ((e = e.map((e) => `${t.value}.${e}`)), i.restrictOptions(e))
            : i.restrictOptions([]);
        } else if (null !== e.value) {
          let a = ue[e.value];
          t.restrictOptions(a);
          let n = [];
          for (let e of a)
            e in pe && (n = n.concat(pe[e].map((t) => `${e}.${t}`)));
          i.restrictOptions(n);
        } else i.unrestrictOptions();
      }
      lookupAttackFields(e) {
        let t;
        for (let i of this.property.value.values())
          if (i.includes(e)) {
            t = i;
            break;
          }
        return this.getAttackFieldsFromRow(t);
      }
      getAttackFieldsFromRow(e) {
        return [
          e.find((e) => "tactic" === e.id),
          e.find((e) => "technique" === e.id),
          e.find((e) => "sub_technique" === e.id),
        ];
      }
    }
    const me = {
        id: "mitre_attack_table",
        name: "EMPTY1(1)",
        path: "*.mitre_attack_table",
        type: a["c"].String,
        layout: {
          summary: "{{ attribution }}\n**{{ tactic }} :: {{ technique }}**",
          rows: 5,
          cols: 2,
        },
        plugins: [
          {
            module: Te,
          },
          {
            module: ve,
          },
          {
            module: ce,
          },
        ],
        properties: [
          Object.assign(Object.assign({}, o), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, j), {
            row: 1,
            col: 2,
          }),
          Object.assign(Object.assign({}, re), {
            row: 2,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, le), {
            row: 3,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, se), {
            row: [4, 5],
            col: 1,
          }),
          Object.assign(Object.assign({}, oe), {
            row: 4,
            col: 2,
          }),
          Object.assign(Object.assign({}, ne), {
            row: 5,
            col: 2,
          }),
        ],
      },
      xe = {
        id: "executive_summary",
        name: "Executive Summary",
        path: "*.executive_summary",
        type: a["c"].String,
      },
      be = {
        id: "executive_summary",
        name: "Executive Summary",
        layout: {
          rows: 4,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, xe), {
            row: [1, 4],
            col: 1,
          }),
        ],
      },
      fe = {
        id: "infrastructure",
        name: "Infrastructure",
        type: a["c"].String,
      },
      ye = {
        id: "threat_actor_motivation",
        name: "Motivation",
        type: a["c"].Enum,
        options: [
          {
            value: "Espionage",
            text: "Cyber Espionage",
          },
          {
            value: "Data Theft",
            text: "Data Theft",
          },
          {
            value: "Cyber Crime",
            text: "Cyber Crime",
          },
          {
            value: "Ransomware",
            text: "Ransomware",
          },
          {
            value: "Destructive Attack",
            text: "Destructive Attack",
          },
          {
            value: "Hacktivism",
            text: "Hacktivism",
          },
          {
            value: "Unknown",
            text: "Unknown",
          },
        ],
      },
      Oe = {
        id: "threat_actor_name",
        name: "Threat Actor Name",
        type: a["c"].String,
      },
      Se = {
        id: "threat_actor_aliases",
        name: "Threat Actor Aliases",
        type: a["c"].String,
      },
      we = {
        id: "threat_actors",
        name: "Threat Actors",
        type: a["c"].BasicTable,
        layout: {
          cols: 3,
        },
        properties: [
          Object.assign(Object.assign({}, Oe), {
            row: 0,
            col: 1,
          }),
          Object.assign(Object.assign({}, Se), {
            row: 0,
            col: [2, 3],
          }),
        ],
      },
      je = {
        id: "metadata",
        name: "Metadata",
        path: "*.metadata",
        layout: {
          rows: 5,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, we), {
            row: 1,
            col: 1,
          }),
          {
            id: "victim_location",
            name: "Victim Location",
            type: a["c"].String,
          },
          {
            id: "sectors",
            name: "Sectors",
            type: a["c"].BasicTable,
            row: 3,
            col: 1,
            layout: {
              cols: 1,
            },
            properties: [
              Object.assign(Object.assign({}, R), {
                row: 0,
                col: 1,
              }),
            ],
          },
          {
            id: "infrastructure_used",
            name: "Infrastructure Used",
            type: a["c"].BasicTable,
            row: 4,
            col: 1,
            layout: {
              cols: 1,
            },
            properties: [
              Object.assign(Object.assign({}, fe), {
                row: 0,
                col: 1,
              }),
            ],
          },
          {
            id: "threat_actor_motivation",
            name: "Threat Actor Motivation",
            type: a["c"].BasicTable,
            row: 5,
            col: 1,
            layout: {
              cols: 1,
            },
            properties: [
              Object.assign(Object.assign({}, ye), {
                row: 0,
                col: 1,
              }),
            ],
          },
        ],
      },
      Ae = {
        id: "intelligence_gaps",
        name: "Key Intelligence Gaps",
        path: "*.intelligence_gaps",
        type: a["c"].String,
      },
      _e = {
        id: "key_intelligence_gaps",
        name: "Key Intelligence Gaps",
        layout: {
          rows: 1,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, Ae), {
            row: 1,
            col: 1,
          }),
        ],
      },
      Ce = {
        id: "intelligence_requirement",
        name: "Intelligence Requirement",
        type: a["c"].String,
        options: [
          {
            value: "S-TA-1",
            text: "S-TA-1 Nation state activity related to China",
          },
          {
            value: "S-TA-2",
            text: "S-TA-2 Nation state activity related to Russia",
          },
          {
            value: "S-TA-3",
            text: "S-TA-2 Nation state activity related to Iran",
          },
          {
            value: "S-TA-4",
            text: "S-TA-2 Nation state activity related to DPRK",
          },
          {
            value: "OP-1",
            text: "OP-1 Operational Activity related to Ransomware",
          },
          {
            value: "OP-2",
            text: "OP-2 Operational Activity related to Banking Trojans",
          },
          {
            value: "OP-3",
            text: "OP-3 Operational Activity related to Initial Access Brokers",
          },
          {
            value: "TAC-1",
            text: "TAC-1 New technical developments related to initial access",
          },
          {
            value: "TAC-2",
            text: "TAC-2 New technical developments related to 0day vulnerabilities",
          },
          {
            value: "TAC-3",
            text: "TAC-3 New technical developments related to MFA bypass",
          },
        ],
      },
      Ie = {
        id: "intelligence_requirements",
        name: "Intelligence Requirements",
        path: "*.intelligence_requirements",
        type: a["c"].BasicTable,
        layout: {
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, Ce), {
            row: 0,
            col: 1,
          }),
        ],
      },
      Pe = {
        id: "intelligence_requirements",
        name: "Intelligence Requirements",
        layout: {
          rows: 1,
          cols: 1,
        },
        properties: [
          Object.assign(
            {
              row: 1,
              col: 1,
            },
            Ie
          ),
        ],
      },
      ke = {
        id: "a2d30a3c-49b5-42e5-a4cb-649009fa4c9d",
        name: "Campaign Report",
        keys: ["general.report_title"],
        plugins: {
          global: {
            [a["b"].StringProperty]: [
              {
                module: q,
              },
            ],
            [a["b"].BasicTableProperty]: [
              {
                module: $,
              },
            ],
            [a["b"].ComplexTableProperty]: [
              {
                module: $,
              },
            ],
          },
        },
        sections: [
          Object.assign(
            {
              name: "Campaign Report",
            },
            D
          ),
          be,
          W,
          Z,
          _e,
          G,
          Pe,
          ae,
          je,
        ],
        description:
          "Change: The Campaign Report is designed to highlight new information related to a threat actor or capabilities. This should focus on new information and highlight how it poses a changed risk to your organization.",
      },
      Me = {
        id: "outlook",
        name: "Outlook",
        path: "*.outlook",
        type: a["c"].String,
      },
      Ee = {
        id: "outlook",
        name: "Outlook",
        layout: {
          rows: 1,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, Me), {
            row: 1,
            col: 1,
          }),
        ],
      },
      De = {
        id: "790fc5be-f24c-4fd7-a7e1-20a761c37812",
        name: "Executive Report",
        keys: ["general.report_title"],
        plugins: {
          global: {
            [a["b"].StringProperty]: [
              {
                module: q,
              },
            ],
            [a["b"].BasicTableProperty]: [
              {
                module: $,
              },
            ],
            [a["b"].ComplexTableProperty]: [
              {
                module: $,
              },
            ],
          },
        },
        sections: [
          Object.assign(
            {
              name: "Executive Report",
            },
            D
          ),
          be,
          W,
          Z,
          Ee,
          _e,
          Pe,
          ae,
        ],
        description:
          "Inform: The Executive Report is designed to inform senior decision makers about a particular risk. This should be focused on executive audiences and in support of strategic problems. It will focus on why and how, rather than what and when.",
      },
      Re = {
        id: "indicator_analysis",
        path: "*.indicator_analysis",
        name: "Indicator Analysis",
        type: a["c"].String,
      },
      Ne = {
        id: "indicator_analysis",
        name: "Indicator Analysis",
        layout: {
          rows: 7,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, Re), {
            row: [1, 7],
            col: 1,
          }),
        ],
      },
      Fe = {
        id: "mitre_attack_table",
        name: "MITRE ATT&CK Table",
        type: a["c"].ComplexTable,
        layout: {
          summary: "{{ tactic }}\n**{{ technique }}**",
          rows: 4,
          cols: 2,
        },
        plugins: [
          {
            module: Te,
          },
          {
            module: ve,
          },
          {
            module: ce,
          },
        ],
        properties: [
          Object.assign(Object.assign({}, j), {
            row: 1,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, re), {
            row: 2,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, le), {
            row: 3,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, se), {
            row: 4,
            col: 1,
          }),
          Object.assign(Object.assign({}, ne), {
            row: 4,
            col: 2,
          }),
        ],
      },
      Le = {
        id: "mitre_attack",
        name: "MITRE ATT&CK",
        layout: {
          rows: 2,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, me), {
            id: "mitre_attack_table_likely_in_network",
            path: "*.mitre_attack_table.likely_in_network",
            name: "TTPs Likely to Be in the Network",
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, Fe), {
            id: "mitre_attack_table_observed",
            path: "*.mitre_attack_table.observed",
            name: "TTPs Observed in the Intrusion",
            row: 2,
            col: 1,
          }),
        ],
      },
      Be = {
        id: "metadata",
        name: "Metadata",
        path: "*.metadata",
        layout: {
          rows: 2,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, we), {
            row: 1,
            col: 1,
          }),
          {
            id: "threat_actor_motivation",
            name: "Threat Actor Motivation",
            type: a["c"].BasicTable,
            row: 2,
            col: 1,
            layout: {
              cols: 1,
            },
            properties: [
              Object.assign(Object.assign({}, ye), {
                row: 0,
                col: 1,
              }),
            ],
          },
        ],
      },
      He = {
        id: "99664720-25a7-474f-b4ea-a6db68039203",
        name: "Intrusion Analysis Report",
        keys: ["general.report_title"],
        plugins: {
          global: {
            [a["b"].StringProperty]: [
              {
                module: q,
              },
            ],
            [a["b"].BasicTableProperty]: [
              {
                module: $,
              },
            ],
            [a["b"].ComplexTableProperty]: [
              {
                module: $,
              },
            ],
          },
        },
        sections: [
          Object.assign(
            {
              name: "Intrusion Analysis Report",
            },
            D
          ),
          be,
          W,
          Ne,
          Le,
          Pe,
          ae,
          Be,
        ],
        description:
          "Find: The Intrusion Analysis Report is designed to be used in support of active hunting and incident response operations. This report should be treated as an iterative document that focuses more on speed to publication than completeness of information.",
      },
      Ge = {
        id: "victim_name",
        name: "Victim Name",
        type: a["c"].String,
      },
      Ue = {
        id: "location",
        name: "Location",
        type: a["c"].String,
      },
      Ve = {
        id: "victims",
        name: "EMPTY2(1)",
        path: "*.victims",
        type: a["c"].ComplexTable,
        layout: {
          summary:
            "{{ victim_name }}\n**{{ location_region }} :: {{ sector }}**",
          rows: 3,
          cols: 2,
        },
        properties: [
          Object.assign(Object.assign({}, Ge), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, r), {
            row: 1,
            col: 2,
          }),
          Object.assign(Object.assign({}, R), {
            row: 2,
            col: [1, 2],
          }),
          Object.assign(Object.assign({}, Ue), {
            id: "location_granular",
            name: "City / State / Province / etc.",
            row: 3,
            col: 1,
          }),
          Object.assign(Object.assign({}, F), {
            id: "location_region",
            name: "Country / Region",
            row: 3,
            col: 2,
          }),
        ],
      },
       We = {
        id: "threat_actor_summary",
        name: "Threat Actor Summary",
        path: "*.threat_actor.summary",
        type: a["c"].String,
      },
      $e = {
        id: "threat_actor_ttp",
        name: "Tactics, Techniques, & Procedures",
        path: "*.threat_actor.ttp",
        type: a["c"].String,
      },
      Ye = {
        id: "threat_actor_victims",
        name: "Victims",
        path: "*.threat_actor.victims",
        type: a["c"].String,
      },
     
      qe = {
        id: "threat_actor_attribution",
        name: "Attribution",
        path: "*.threat_actor.attribution",
        type: a["c"].String,
      },
      Ke = {
        id: "threat_actor_infrastructure",
        name: "Infrastructure",
        path: "*.threat_actor.infrastructure",
        type: a["c"].String,
      },
      Ze = {
        id: "threat_actor_summary",
        name: "Threat Actor Summary",
        layout: {
          rows: 5,
          cols: 1,
        },
        properties: [
          Object.assign(Object.assign({}, We), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, $e), {
            row: 2,
            col: 1,
          }),
          Object.assign(Object.assign({}, Ke), {
            row: 3,
            col: 1,
          }),
          Object.assign(Object.assign({}, Ye), {
            row: 4,
            col: 1,
          }),
          Object.assign(Object.assign({}, qe), {
            row: 5,
            col: 1,
          }),
        ],
      },
      Je = {
        id: "metadata",
        name: "Threat Actor Profile",
        path: "*.metadata",
        layout: {
          rows: 5,
          cols: 3,
        },
        properties: [
          Object.assign(Object.assign({}, Oe), {
            row: 1,
            col: 1,
          }),
          Object.assign(Object.assign({}, Se), {
            row: 1,
            col: [2, 3],
          }),
          {
            id: "victim_location",
            name: "Victim Location",
            type: a["c"].String,
            row: 2,
            col: [1, 3],
            layout: {
              cols: 1,
            },
            properties: [
              Object.assign(Object.assign({}, F), {
                row: 0,
                col: 1,
              }),
            ],
          },
          {
            id: "sectors",
            name: "Sectors",
            type: a["c"].BasicTable,
            row: 3,
            col: [1, 3],
            layout: {
              cols: 1,
            },
            properties: [
              Object.assign(Object.assign({}, R), {
                row: 0,
                col: 1,
              }),
            ],
          },
          {
            id: "threat_actor_motivation",
            name: "Threat Actor Motivation",
            type: a["c"].String,
            row: 4,
            col: [1, 3],
            layout: {
              cols: 1,
            },
            properties: [
              Object.assign(Object.assign({}, fe), {
                row: 0,
                col: 1,
              }),
            ],
          },
        ],
      },
      Xe = {
        id: "e4e907ac-f845-4b51-a73f-ab511456ce74",
        name: "Threat Actor Profile",
        keys: ["general.report_title"],
        plugins: {
          global: {
            [a["b"].StringProperty]: [
              {
                module: q,
              },
            ],
            [a["b"].BasicTableProperty]: [
              {
                module: $,
              },
            ],
            [a["b"].ComplexTableProperty]: [
              {
                module: $,
              },
            ],
          },
        },
        sections: [
          Object.assign(
            {
              name: "Threat Actor Report ",
            },
            D
          ),
          be,
          W,
          Z,
          Ze,
          G,
          _e,
          Pe,
          ae,
          Je,
        ],
        description:
          "Know: The Threat Actor Report is designed to be an encyclopedia for the organization for a given threat actor or category of activity. This report should be treated as a living document that should be maintained on a periodic basis by the intelligence team.",
      },
      Qe = {
        is_web_hosted: !1,
        file_type_name: "CTI Template",
        file_type_extension: "json",
        branding: {
          product: "./product.png",
          organization: "./organization.png",
        },
        templates: [Xe, ke, He, De],
        menus: {
          help_menu: {
            help_links: [
              {
                text: "GitHub Repository",
                url: "https://github.com/center-for-threat-informed-defense/cti-blueprints",
              },
              {
                text: "Change Log",
                url: "https://github.com/center-for-threat-informed-defense/cti-blueprints/blob/main/src/cti_authoring_tool/CHANGELOG.md",
              },
            ],
          },
        },
      };
    t["default"] = Qe;
  },
  7770: function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n["a"];
    }),
      i.d(t, "b", function () {
        return a;
      });
    var a,
      n = i("0b94");
    (function (e) {
      (e[(e["String"] = 0)] = "String"),
        (e[(e["Integer"] = 1)] = "Integer"),
        (e[(e["Float"] = 2)] = "Float"),
        (e[(e["Time"] = 3)] = "Time"),
        (e[(e["Date"] = 4)] = "Date"),
        (e[(e["DateTime"] = 5)] = "DateTime"),
        (e[(e["Enum"] = 6)] = "Enum"),
        (e[(e["BasicTable"] = 7)] = "BasicTable"),
        (e[(e["ComplexTable"] = 8)] = "ComplexTable");
    })(a || (a = {}));
  },
  "7aa9": function (e, t, i) {
    "use strict";
    i.d(t, "f", function () {
      return o;
    }),
      i.d(t, "d", function () {
        return v;
      }),
      i.d(t, "e", function () {
        return m;
      }),
      i.d(t, "o", function () {
        return g;
      }),
      i.d(t, "l", function () {
        return x;
      }),
      i.d(t, "k", function () {
        return b;
      }),
      i.d(t, "n", function () {
        return O;
      }),
      i.d(t, "j", function () {
        return S;
      }),
      i.d(t, "g", function () {
        return _;
      }),
      i.d(t, "a", function () {
        return C;
      }),
      i.d(t, "c", function () {
        return I;
      }),
      i.d(t, "h", function () {
        return M;
      }),
      i.d(t, "b", function () {
        return E;
      }),
      i.d(t, "i", function () {
        return N;
      }),
      i.d(t, "m", function () {
        return F;
      });
    class a {
      constructor() {}
    }
    class n extends a {
      constructor(e, t) {
        super(), (this._context = e), (this._settings = t);
      }
      execute() {
        this._context.settings = this._settings;
      }
    }
    function o(e, t) {
      return new n(e, t);
    }
    var s = i("9ab4"),
      r = i("73a2"),
      l = i("8c0f");
    class c extends a {
      constructor(e, t) {
        super(), (this._context = e), (this._editor = t);
      }
      execute() {
        this._context.editors.set(this._editor.id, this._editor),
          (this._context.activeEditor = this._editor);
      }
    }
    var u = i("2137");
    class p extends a {
      constructor(e, t) {
        super(), (this._context = e);
        let i = e.editors.get(t);
        if (!i) throw new Error(`Editor '${t}' not found.`);
        if (i.id === u["a"].Phantom.id)
          throw new Error("The phantom editor cannot be unloaded.");
        this._editor = i;
      }
      execute() {
        let e = this._context.editors,
          t = [...e.keys()],
          i = t.indexOf(this._editor.id);
        i === e.size - 1 ? (i -= 1) : (i += 1);
        let a = e.get(t[i]);
        (this._context.activeEditor = a), e.delete(this._editor.id);
      }
    }
    class d extends a {
      constructor(e, t) {
        super(), (this._context = e);
        let i = e.editors.get(t);
        if (!i) throw new Error(`Editor '${t}' not found.`);
        this._editor = i;
      }
      execute() {
        this._context.activeEditor = this._editor;
      }
    }
    class h extends a {
      constructor(e, t) {
        super();
        let i = e.editors.get(t);
        if (!i) throw new Error(`Page '${t}' not found.`);
        this._editor = i;
      }
      execute() {
        l["a"].downloadTextFile(
          this._editor.name,
          this._editor.toFile(),
          r["default"].file_type_extension
        );
      }
    }
    function v(e, t) {
      let i = u["a"].createNew(t);
      return new c(e, i);
    }
    function T(e, t) {
      let i = JSON.parse(t),
        a = i.__document.template_identifier;
      if (void 0 === a) throw new Error("Malformed export file.");
      let n = r["default"].templates.find((e) => e.id === a);
      if (!n)
        throw new Error(`Application does not support file template '${a}'.`);
      let o = u["a"].fromFile(n, i);
      return new c(e, o);
    }
    function m(e) {
      return Object(s["a"])(this, void 0, void 0, function* () {
        return T(e, (yield l["a"].openTextFileDialog()).contents);
      });
    }
    function g(e, t) {
      return new p(e, t);
    }
    function x(e, t) {
      return new d(e, t);
    }
    function b(e, t) {
      return new h(e, t);
    }
    class f extends a {
      constructor(e, t) {
        super();
        let i = e.editors.get(t);
        if (!i) throw new Error(`Editor '${t}' not found.`);
        this._editor = i;
      }
      execute() {
        this._editor.undo();
      }
    }
    class y extends a {
      constructor(e, t) {
        super();
        let i = e.editors.get(t);
        if (!i) throw new Error(`Editor '${t}' not found.`);
        this._editor = i;
      }
      execute() {
        this._editor.redo();
      }
    }
    function O(e, t) {
      return new f(e, t);
    }
    function S(e, t) {
      return new y(e, t);
    }
    class w extends a {
      constructor(e, t) {
        super(), (this._property = e), (this._el = t);
      }
      execute() {
        this._property.emit("mount", this._property, this._el);
      }
    }
    class j extends a {
      constructor(e) {
        super(), (this._property = e);
      }
      execute() {
        this._property.emit("destroy", this._property);
      }
    }
    class A extends a {
      constructor(e, t) {
        super(), (this._property = e), (this._id = t);
      }
      execute() {
        this._property.invokeAction(this._id);
      }
    }
    function _(e, t) {
      return new w(e, t);
    }
    function C(e) {
      return new j(e);
    }
    function I(e, t) {
      return new A(e, t);
    }
    class P extends a {
      constructor(e, t) {
        super(), (this._section = e), (this._el = t);
      }
      execute() {
        this._section.emit("mount", this._section, this._el);
      }
    }
    class k extends a {
      constructor(e) {
        super(), (this._section = e);
      }
      execute() {
        this._section.emit("destroy", this._section);
      }
    }
    function M(e, t) {
      return new P(e, t);
    }
    function E(e) {
      return new k(e);
    }
    class D extends a {
      constructor(e) {
        super(), (this._url = e);
      }
      execute() {
        window.open(this._url, "_blank");
      }
    }
    class R extends a {
      constructor() {
        super();
      }
      execute() {
        let e = document.body;
        e.requestFullscreen
          ? e.requestFullscreen()
          : e.webkitRequestFullscreen
          ? e.webkitRequestFullscreen()
          : e.msRequestFullscreen && e.msRequestFullscreen();
      }
    }
    function N(e) {
      return new D(e);
    }
    function F() {
      return new R();
    }
  },
  8096: function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return r;
    }),
      i.d(t, "b", function () {
        return n["a"];
      });
    var a = i("13be"),
      n = i("b4d3"),
      o = i("a966"),
      s = i("174a");
    class r extends a["a"] {
      constructor(e, t) {
        var i, a;
        super(),
          (this.id = e.id),
          (this.name = null !== (i = e.name) && void 0 !== i ? i : null),
          (this.path = null !== (a = e.path) && void 0 !== a ? a : e.id),
          (this.layout = {
            rows: e.layout.rows,
            cols: e.layout.cols,
          }),
          (this.properties = new Map()),
          (this._parent = null),
          (this._plugins = null),
          t && this.__prepareAssembler(t);
      }
      clone(e) {
        var t;
        (null !== e && void 0 !== e) || (e = new n["a"]());
        let i = new r(
          {
            id: this.id,
            name: this.name,
            path: this.path,
            layout: {
              rows: this.layout.rows,
              cols: this.layout.cols,
            },
          },
          e
        );
        for (let a of this.properties.values()) {
          let t = new s["l"]();
          a.clone(t), e.attachProperty(t);
        }
        return (
          null === (t = this._plugins) ||
            void 0 === t ||
            t.forEach(({ plugin: e }) => {
              i.tryInstallPlugin(e);
            }),
          i
        );
      }
      tryInstallPlugin(e) {
        let t;
        return (
          null === this._plugins &&
            (this._plugins = new o["a"](this, this.root)),
          (t = this._plugins.tryInstallPlugin(e)),
          0 === this._plugins.length && (this._plugins = null),
          t
        );
      }
      tryInstallPlugins(e) {
        let t = !0;
        for (let i of e) t && (t = this.tryInstallPlugin(i));
        return t;
      }
      __prepareAssembler(e = new n["a"]()) {
        return (
          e.__injectAccessor({
            section: this,
            getParent: () => this._parent,
            setParent: (e) => (this._parent = e),
            properties: this.properties,
          }),
          e
        );
      }
    }
  },
  "821d": function (e, t, i) {
    "use strict";
    i("1dc6");
  },
  "880a": function (e, t, i) {},
  "8c0f": function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return a;
    });
    class a {
      static downloadTextFile(e, t, i = "txt") {
        let a = new Blob([t], {
            type: "octet/stream",
          }),
          n = window.URL.createObjectURL(a);
        (this._aLink.href = n),
          (this._aLink.download = `${e}.${i}`),
          this._aLink.click(),
          window.URL.revokeObjectURL(n);
      }
      static downloadImageFile(e, t) {
        t.toBlob((t) => {
          if (!t) return;
          let i = window.URL.createObjectURL(t);
          (this._aLink.href = i),
            (this._aLink.download = e + ".png"),
            this._aLink.click(),
            window.URL.revokeObjectURL(i);
        }, "image/octet-stream");
      }
      static openTextFileDialog() {
        let e = document.createElement("input");
        e.type = "file";
        let t = new Promise((t) => {
          e.addEventListener("change", (e) => {
            let i = e.target.files[0],
              a = new FileReader();
            (a.onload = (e) => {
              var a;
              t({
                filename: i.name,
                contents:
                  null === (a = e.target) || void 0 === a ? void 0 : a.result,
              });
            }),
              a.readAsText(i);
          });
        });
        return e.click(), t;
      }
      static fullscreen(e = document.body) {
        let t = e;
        t.requestFullscreen
          ? t.requestFullscreen()
          : t.webkitRequestFullscreen
          ? t.webkitRequestFullscreen()
          : t.msRequestFullscreen && t.msRequestFullscreen();
      }
    }
    a._aLink = document.createElement("a");
  },
  "8c7f": function (e, t, i) {},
  9224: function (e) {
    e.exports = JSON.parse('{"a":"1.0.0"}');
  },
  "991e": function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return S;
    });
    class a extends Map {
      constructor() {
        super();
      }
    }
    class n extends a {
      constructor(e) {
        super(), (this.value = e);
      }
      toObject() {
        return this.value;
      }
    }
    class o extends a {
      constructor() {
        super();
      }
      toObject() {
        let e = [];
        for (let [t, i] of this) e.push([t, i.toObject()]);
        return Object.fromEntries(e);
      }
    }
    var s = i("f139");
    class r extends a {
      constructor() {
        super();
      }
      push(e) {
        let t;
        do {
          t = s["c"]();
        } while (this.has(t));
        return this.set(t, e), t;
      }
      toObject() {
        let e = [];
        for (let t of this.values()) e.push(t.toObject());
        return e;
      }
    }
    var l = i("1c81");
    const c = "*";
    function u(e) {
      let t = new o();
      return p(t, c, e), t;
    }
    function p(e, t, i) {
      var a, s;
      if (
        ((t = i.path.startsWith(c) ? i.path : `${t}.${i.path}`),
        i instanceof l["k"])
      )
        for (let n of i.sections.values()) p(e, t, n);
      else if (i instanceof l["o"])
        for (let n of i.properties.values()) p(e, t, n);
      else if (i instanceof l["s"]) {
        let a = new r();
        for (let e of i.value.values()) {
          let t = new o();
          for (let i of e) p(t, "*", i);
          a.push(t);
        }
        d(e, a, t);
      } else if (i instanceof l["b"]) {
        let o;
        if (i instanceof l["q"]) o = new n(i.value);
        else if (i instanceof l["f"])
          o = new n(
            null !==
              (s =
                null === (a = i.value) || void 0 === a
                  ? void 0
                  : a.toISOString()) && void 0 !== s
              ? s
              : null
          );
        else if (i instanceof l["j"]) o = new n(i.value);
        else {
          if (!(i instanceof l["g"]))
            throw new Error(
              `Unexpected property type: '${i.constructor.name}'`
            );
          o = new n(i.value);
        }
        d(e, o, t);
      }
    }
    function d(e, t, i) {
      let a = i.split(/\./g);
      if (a.length < 2) throw new Error(`'${i}' is invalid.`);
      if (a.shift() !== c) throw new Error(`'${i}' is not absolute.`);
      let n = e;
      for (let r = 0; r < a.length - 1; r++)
        if (
          (n.has(a[r]) || n.set(a[r], new o()),
          (n = n.get(a[r])),
          !(n instanceof o))
        ) {
          let e = n.constructor.name,
            t = `${c}.${a.slice(0, r + 1).join(".")}`;
          throw new Error(`'${t}' (${e}) is not an object map.`);
        }
      let s = a.at(-1);
      if (n.has(s)) throw new Error(`'${i}' is already assigned.`);
      n.set(s, t);
    }
    var h = i("9224"),
      v = i("7028"),
      T = i("9ae2"),
      m = i("7770"),
      g = i("a742"),
      x = i("8096"),
      b = i("0b94");
    const f = {
      [b["a"].Section]: x["a"],
      [b["a"].StringProperty]: l["q"],
      [b["a"].FloatProperty]: l["h"],
      [b["a"].IntegerProperty]: l["i"],
      [b["a"].EnumProperty]: l["g"],
      [b["a"].DateProperty]: l["e"],
      [b["a"].TimeProperty]: l["u"],
      [b["a"].DateTimeProperty]: l["f"],
      [b["a"].BasicTableProperty]: l["c"],
      [b["a"].ComplexTableProperty]: l["d"],
    };
    class y {
      constructor(e, t) {
        (this._values = null !== t && void 0 !== t ? t : {}),
          (this._pageTemplate = e),
          (this._sectionIndex = new Map()),
          (this._propertyIndex = new Map()),
          (this._pageAssembler = this.createPage(e));
      }
      createPage(e) {
        let t = new l["l"]();
        new l["k"](e, t);
        for (let i of e.sections.values()) {
          let e = this.createSection(i);
          t.attachSection(e);
        }
        return (this._pageTemplate = e), t;
      }
      createSection(e) {
        let t = new l["p"]();
        new l["o"](e, t);
        for (let i of e.properties) {
          let e = this.createProperty(i);
          t.attachProperty(e);
        }
        return this._sectionIndex.set(t.section.instance, e), t;
      }
      createProperty(e) {
        let t;
        switch (e.type) {
          case m["b"].String:
            t = new l["m"]();
            let i = new l["q"](e, t);
            e.suggestions && (i.suggestions = e.suggestions);
            break;
          case m["b"].Float:
            (t = new l["m"]()), new l["h"](e, t);
            break;
          case m["b"].Integer:
            (t = new l["m"]()), new l["i"](e, t);
            break;
          case m["b"].Date:
            (t = new l["m"]()), new l["e"](e, t);
            break;
          case m["b"].Time:
            (t = new l["m"]()), new l["u"](e, t);
            break;
          case m["b"].DateTime:
            (t = new l["m"]()), new l["f"](e, t);
            break;
          case m["b"].Enum:
            (t = new l["m"]()), new l["g"](e, t);
            break;
          case m["b"].BasicTable:
            (t = new l["t"]()),
              new l["c"](e, t),
              t.setDefaultRow(
                this.createTabularPropertyDefaultRow(e.properties)
              );
            break;
          case m["b"].ComplexTable:
            (t = new l["t"]()),
              new l["d"](e, t),
              t.setDefaultRow(
                this.createTabularPropertyDefaultRow(e.properties)
              );
            break;
        }
        return this._propertyIndex.set(t.property.instance, e), t;
      }
      createTabularPropertyDefaultRow(e) {
        let t = [];
        for (let i of e) {
          let e = this.createProperty(i);
          if (!(e.property instanceof l["b"])) {
            let t = e.property.id;
            throw new Error(`Tabular subproperty '${t}' is non-atomic.`);
          }
          t.push(e.property);
        }
        return t;
      }
      initialize(e = !0) {
        return (
          e && this.initializePlugins(this._pageAssembler.page),
          this.initializeValues(this._pageAssembler.page),
          this
        );
      }
      initializePlugins(e) {
        if (e instanceof l["k"]) {
          let t = this._pageTemplate.plugins;
          t && this.installElementPlugins(e, t);
          for (let i of e.sections.values()) this.initializePlugins(i);
          return;
        }
        if (e instanceof l["o"]) {
          let t = this._sectionIndex.get(e.instance),
            i = t.plugins;
          i && this.installElementPlugins(e, i);
          for (let a of e.properties.values()) this.initializePlugins(a);
          return;
        }
        let t = this._propertyIndex.get(e.instance),
          i = t.plugins;
        if ((i && this.installElementPlugins(e, i), e instanceof l["s"])) {
          for (let t of e.defaultRow) this.initializePlugins(t);
          for (let t of e.value.values())
            for (let e of t) this.initializePlugins(e);
        }
      }
      installElementPlugins(e, t) {
        if (Array.isArray(t)) return void e.tryInstallPlugins(t);
        if ((t.local && e.tryInstallPlugins(t.local), !t.global)) return;
        let i = t.global;
        for (let a in i) {
          let t = parseInt(a);
          if (t in f) {
            let a = f[t];
            this.installGlobalPlugins(e, i[t], a);
          }
        }
      }
      installGlobalPlugins(e, t, i, a = !1) {
        if (
          (a && e.constructor === i && e.tryInstallPlugins(t),
          e instanceof l["k"])
        )
          for (let n of e.sections.values())
            this.installGlobalPlugins(n, t, i, !0);
        if (e instanceof l["o"])
          for (let n of e.properties.values())
            this.installGlobalPlugins(n, t, i, !0);
        if (e instanceof l["s"]) {
          for (let a of e.defaultRow) this.installGlobalPlugins(a, t, i, !0);
          for (let a of e.value.values())
            for (let e of a) this.installGlobalPlugins(e, t, i, !0);
        }
      }
      initializeValues(e, t) {
        if (((t = this.resolveLookupPath(t, e.path)), e instanceof l["k"])) {
          for (let i of e.sections.values()) this.initializeValues(i, t);
          return;
        }
        if (e instanceof l["o"]) {
          for (let i of e.properties.values()) this.initializeValues(i, t);
          return;
        }
        let i = g["a"](t, this._values),
          a = this._propertyIndex.get(e.instance);
        if (e instanceof l["s"]) {
          for (let i of e.defaultRow) this.initializeValues(i, t);
          if (void 0 !== i) {
            let t;
            for (let a of i) {
              t = {};
              for (let i of e.defaultRow) {
                let e = this.resolveLookupPath(void 0, i.path);
                t[i.id] = g["a"](e, a);
              }
              e.insertRow(e.createRow(t));
            }
          } else if (void 0 !== a.default)
            for (let t of a.default) e.insertRow(e.createRow(t));
        } else
          e instanceof l["b"] &&
            (void 0 !== i
              ? (e.value = i)
              : void 0 !== a.default && (e.value = a.default));
      }
      resolveLookupPath(e, t) {
        let i;
        return (
          (i = t.startsWith(c)) && (t = t.substring((c + ".").length)),
          void 0 === e || i ? t : `${e}.${t}`
        );
      }
      getPage() {
        return this._pageAssembler.page;
      }
    }
    var O;
    class S {
      constructor(e, t, i) {
        (this.id = i.instance),
          (this.page = i),
          (this.template = e),
          (this._undoStack = []),
          (this._redoStack = []),
          (this._selected = null);
        let a = [];
        for (let o of t) {
          let e,
            t,
            [n, s] = o.split(/\./g);
          (t = i.sections.get(n)) && (e = t.properties.get(s)), e && a.push(e);
        }
        this.keys = a;
        let n = this;
        l["n"].makeReactive && (n = l["n"].makeReactive(this)),
          this.page.on("select", (e) => {
            n._selected = e;
          }),
          this.page.on("deselect", () => {
            n._selected = null;
          }),
          this.page.on("execute", (...e) => {
            n.execute(...e);
          });
      }
      get name() {
        let e = this.keys
          .map((e) => e.toString())
          .filter((e) => "" !== e)
          .join(" - ");
        return e || "Untitled " + this.template;
      }
      get selected() {
        return this._selected;
      }
      execute(...e) {
        let t;
        if (0 !== e.length) {
          if (1 === e.length) t = e[0];
          else {
            let i = new T["a"]();
            for (let t of e) i.add(t);
            t = i;
          }
          if (t.page !== v["a"].NullPage) {
            if (t.page !== this.page.instance)
              throw new Error(
                "Command is not configured to operate on this page."
              );
            t.execute() && ((this._redoStack = []), this._undoStack.push(t));
          }
        }
      }
      undo() {
        this._undoStack.length &&
          (this._undoStack.at(-1).undo(),
          this._redoStack.push(this._undoStack.pop()));
      }
      canUndo() {
        return 0 < this._undoStack.length;
      }
      redo() {
        this._redoStack.length &&
          (this._redoStack.at(-1).execute(),
          this._undoStack.push(this._redoStack.pop()));
      }
      canRedo() {
        return 0 < this._redoStack.length;
      }
      static createNew(e) {
        let t = new y(e).initialize().getPage();
        return new this(e.name, e.keys, t);
      }
      static fromFile(e, t) {
        let i = new y(e, t).initialize().getPage();
        return new this(e.name, e.keys, i);
      }
      toFile() {
        return JSON.stringify(
          Object.assign(Object.assign({}, u(this.page).toObject()), {
            report_date: new Date().toISOString(),
            __document: {
              authoring_tool_version: h["a"],
              template_name: this.template,
              template_version: "0.1.0",
              template_identifier: this.page.id,
            },
          }),
          null,
          4
        );
      }
      isPhantom() {
        return this.id === S.Phantom.id;
      }
    }
    (O = S),
      (S.Phantom = new O(
        "",
        [],
        new l["k"]({
          id: "phantom_template",
        })
      ));
  },
  "995e": function (e, t, i) {
    "use strict";
    i("34aa");
  },
  "9a27": function (e, t, i) {
    "use strict";
    i("4771");
  },
  "9ae2": function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    }),
      i.d(t, "j", function () {
        return r;
      }),
      i.d(t, "f", function () {
        return l;
      }),
      i.d(t, "c", function () {
        return u;
      }),
      i.d(t, "k", function () {
        return d;
      }),
      i.d(t, "l", function () {
        return v;
      }),
      i.d(t, "m", function () {
        return m;
      }),
      i.d(t, "n", function () {
        return x;
      }),
      i.d(t, "d", function () {
        return S;
      }),
      i.d(t, "g", function () {
        return w;
      }),
      i.d(t, "e", function () {
        return j;
      }),
      i.d(t, "h", function () {
        return A;
      }),
      i.d(t, "i", function () {
        return _;
      }),
      i.d(t, "b", function () {
        return a["a"];
      });
    var a = i("7028");
    class n extends a["a"] {
      constructor() {
        super(a["a"].NullPage), (this._commands = []);
      }
      add(e) {
        if (this.page !== a["a"].NullPage && this.page !== e.page)
          throw new Error("Commands must operate on the same page.");
        (this.page = e.page), this._commands.push(e);
      }
      execute() {
        let e = 0,
          t = this._commands.length,
          i = !1;
        try {
          for (; e < t; e++) {
            let t = this._commands[e].execute();
            i || (i = t);
          }
        } catch (a) {
          for (e--; 0 <= e; e--) this._commands[e].undo();
          throw a;
        }
        return i;
      }
      undo() {
        let e = this._commands.length - 1;
        for (let t = e; 0 <= t; t--) this._commands[t].undo();
      }
    }
    class o extends a["a"] {
      constructor(e) {
        super(e.rootInstance), (this._property = e);
      }
      execute() {
        return this._property.emitUpward("select", this._property), !1;
      }
      undo() {}
    }
    class s extends a["a"] {
      constructor(e) {
        super(e.rootInstance), (this._property = e);
      }
      execute() {
        return this._property.emitUpward("deselect", this._property), !1;
      }
      undo() {}
    }
    function r(e) {
      return new o(e);
    }
    function l(e) {
      return new s(e);
    }
    class c extends a["a"] {
      constructor(e, t, i) {
        if ((super(e.rootInstance), !e.value.has(t)))
          throw new Error(`Row '${t}' does not exist in '${e.id}'.`);
        (this._property = e),
          (this._id = t),
          (this._lastValue = e.collapsed.get(t)),
          (this._nextValue = i);
      }
      execute() {
        return this._property.setRowCollapse(this._id, this._nextValue), !1;
      }
      undo() {
        this._property.setRowCollapse(this._id, this._lastValue);
      }
    }
    function u(e, t, i) {
      return new c(e, t, i);
    }
    class p extends a["a"] {
      constructor(e, t) {
        super(e.rootInstance),
          (this._property = e),
          (this._lastValue = e.value),
          (this._nextValue = t);
      }
      execute() {
        return (this._property.value = this._nextValue), !0;
      }
      undo() {
        this._property.value = this._lastValue;
      }
    }
    function d(e, t) {
      return new p(e, t);
    }
    class h extends a["a"] {
      constructor(e, t) {
        super(e.rootInstance),
          (this._property = e),
          (this._lastValue = e.value),
          (this._nextValue = t);
      }
      execute() {
        return (this._property.value = this._nextValue), !0;
      }
      undo() {
        this._property.value = this._lastValue;
      }
    }
    function v(e, t) {
      return new h(e, t);
    }
    class T extends a["a"] {
      constructor(e, t) {
        super(e.rootInstance),
          (this._property = e),
          (this._lastValue = e.value),
          (this._nextValue = t);
      }
      execute() {
        return (this._property.value = this._nextValue), !0;
      }
      undo() {
        this._property.value = this._lastValue;
      }
    }
    function m(e, t) {
      return new T(e, t);
    }
    class g extends a["a"] {
      constructor(e, t) {
        super(e.rootInstance),
          (this._property = e),
          (this._lastValue = e.value),
          (this._nextValue = t);
      }
      execute() {
        return (this._property.value = this._nextValue), !0;
      }
      undo() {
        this._property.value = this._lastValue;
      }
    }
    function x(e, t) {
      return new g(e, t);
    }
    class b extends a["a"] {
      constructor(e, t, i) {
        if ((super(e.rootInstance), -1 === e.getRowIndex(t)))
          throw new Error(`Table row '${t}' does not exist in '${e.id}'.`);
        (this._property = e),
          (this._src = this._property.getRowIndex(t)),
          (this._dst = i);
      }
      execute() {
        return this._property.moveRow(this._src, this._dst), !0;
      }
      undo() {
        this._property.moveRow(this._dst, this._src);
      }
    }
    class f extends a["a"] {
      constructor(e, t, i) {
        if ((super(e.rootInstance), !e.columnState.find((e) => e.id === t)))
          throw new Error(`Table column '${t}' does not exist in '${e.id}'.`);
        (this._property = e),
          (this._prevSnapshot = this._property.captureColumnSnapshot(t)),
          (this._nextSnapshot = this._property.captureColumnSnapshot(t, i));
      }
      execute() {
        return this._property.applyColumnSnapshot(this._nextSnapshot), !0;
      }
      undo() {
        this._property.applyColumnSnapshot(this._prevSnapshot);
      }
    }
    class y extends a["a"] {
      constructor(e, t, i) {
        super(e.rootInstance),
          (this._property = e),
          (this._row = e.createRow(t)),
          (this._index = i);
      }
      execute() {
        return this._property.insertRow(this._row, this._index), !0;
      }
      undo() {
        this._property.deleteRow(this._row[0]);
      }
    }
    class O extends a["a"] {
      constructor(e, t) {
        if ((super(e.rootInstance), -1 === e.getRowIndex(t)))
          throw new Error(`Table row '${t}' does not exist in '${e.id}'.`);
        (this._property = e),
          (this._row = e.getRow(t)),
          (this._index = e.getRowIndex(t));
      }
      execute() {
        return this._property.deleteRow(this._index), !0;
      }
      undo() {
        this._property.insertRow(this._row, this._index);
      }
    }
    function S(e, t, i) {
      return new y(e, t, i);
    }
    function w(e, t) {
      let i = e.getRowIndex(t);
      if (-1 === i)
        throw new Error(`Table row '${t}' does not exist in '${e.id}'.`);
      let a = {};
      for (let n of e.getRow(t)[1]) a[n.id] = n.value;
      return new y(e, a, i + 1);
    }
    function j(e, t) {
      return new O(e, t);
    }
    function A(e, t, i) {
      return new b(e, t, i);
    }
    function _(e, t, i) {
      return new f(e, t, i);
    }
  },
  a017: function (e, t, i) {},
  a742: function (e, t, i) {
    "use strict";
    function a(e, t) {
      let i = e.split(/\./g),
        a = t;
      for (let n of i) {
        if (!(a instanceof Object && n in a)) return;
        a = a[n];
      }
      return a;
    }
    i.d(t, "a", function () {
      return a;
    });
  },
  a966: function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return n;
    });
    i("f112");
    var a = i("2576");
    class n extends Array {
      constructor(e, t) {
        super(),
          (this._root = t),
          (this.element = e),
          a["a"].makeReactive &&
            ((this._root = a["a"].makeReactive(this._root)),
            (this.element = a["a"].makeReactive(this.element)));
      }
      tryInstallPlugin(e) {
        let t,
          i = e.module.name;
        if (this.find((e) => e.plugin.module.name === i))
          throw new Error(`Plugin '${i}' is already installed.`);
        try {
          t = e.options
            ? new e.module(this.element, this._root, e.options())
            : new e.module(this.element, this._root);
        } catch (a) {
          let t = e.module.name;
          return (
            console.error(`Failed to install plugin '${t}':`),
            console.error(a),
            !1
          );
        }
        return (
          this.push({
            plugin: e,
            instance: t,
          }),
          !0
        );
      }
    }
  },
  b4d3: function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return a;
    });
    class a {
      constructor() {
        (this._accessor = null),
          (this._parentAssembler = null),
          (this._propertyAssemblers = new Map());
      }
      get section() {
        return this.accessor.section;
      }
      get parent() {
        return this._parentAssembler;
      }
      get properties() {
        return this._propertyAssemblers;
      }
      get accessor() {
        if (null === this._accessor)
          throw new Error("Assembler is not configured with a section.");
        return this._accessor;
      }
      __injectAccessor(e) {
        (this._accessor = e),
          (this._parentAssembler = null),
          (this._propertyAssemblers = new Map());
      }
      attachToPage(e) {
        this.belongsToPage(e) ||
          (this.belongsToPage() && this.detachFromPage(),
          this.accessor.setParent(e.page),
          (this._parentAssembler = e),
          e.attachSection(this));
      }
      detachFromPage() {
        if (!this.belongsToPage()) return;
        let e = this._parentAssembler;
        this.accessor.setParent(null),
          (this._parentAssembler = null),
          e.detachSection(this);
      }
      belongsToPage(e) {
        let t = this.accessor.getParent();
        return null !== t && (void 0 === e || t.instance === e.page.instance);
      }
      attachProperty(e) {
        if (this.includesProperty(e)) return;
        let t = e.property.id;
        this.includesProperty(t) && this.detachProperty(t),
          this.accessor.properties.set(t, e.property),
          this._propertyAssemblers.set(t, e),
          e.attachToSection(this);
      }
      detachProperty(e) {
        if (!this.includesProperty(e)) return;
        "string" === typeof e && (e = this.properties.get(e));
        let t = e.property.id;
        this.accessor.properties.delete(t),
          this._propertyAssemblers.delete(t),
          e.detachFromParent();
      }
      includesProperty(e) {
        let t = this.accessor.properties;
        if ("string" === typeof e) return t.has(e);
        let i = e.property.id;
        if (!t.has(i)) return !1;
        let a = t.get(i);
        return a.instance === e.property.instance;
      }
    }
  },
  b550: function (e, t, i) {
    "use strict";
    i("3c3e");
  },
  b7b5: function (e, t, i) {
    var a = {
      "./app.config": "73a2",
      "./app.config.ts": "73a2",
      "./organization.png": "00d9",
      "./product.png": "04d3",
    };
    function n(e) {
      var t = o(e);
      return i(t);
    }
    function o(e) {
      if (!i.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (n.keys = function () {
      return Object.keys(a);
    }),
      (n.resolve = o),
      (e.exports = n),
      (n.id = "b7b5");
  },
  bac6: function (e, t, i) {
    "use strict";
    i("50e3");
  },
  bdb4: function (e, t, i) {},
  c049: function (e, t, i) {
    "use strict";
    i("e681");
  },
  c881: function (e, t, i) {
    "use strict";
    i("a017");
  },
  caac: function (e, t, i) {},
  cd49: function (e, t, i) {
    "use strict";
    i.r(t);
    var a = i("7a23");
    const n = {
      id: "app-body",
    };
    function o(e, t, i, o, s, r) {
      const l = Object(a["w"])("AppTitleBar"),
        c = Object(a["w"])("SplashMenu"),
        u = Object(a["w"])("PageEditorControl"),
        p = Object(a["w"])("ScrollBox"),
        d = Object(a["w"])("FileSelect"),
        h = Object(a["w"])("AppMetricsBar"),
        v = Object(a["w"])("AppHotkeyBox");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          v,
          {
            id: "main",
          },
          {
            default: Object(a["C"])(() => [
              Object(a["i"])(l, {
                id: "app-title-bar",
              }),
              Object(a["g"])("div", n, [
                Object(a["i"])(
                  p,
                  {
                    id: "page-container",
                    alwaysShowScrollBar: !0,
                  },
                  {
                    default: Object(a["C"])(() => [
                      e.editor.isPhantom()
                        ? (Object(a["p"])(),
                          Object(a["d"])(
                            c,
                            {
                              key: 0,
                              id: "splash-menu",
                              templates: e.templates,
                              onNew: e.onNewDocument,
                              onOpen: e.onOpenDocument,
                            },
                            null,
                            8,
                            ["templates", "onNew", "onOpen"]
                          ))
                        : (Object(a["p"])(),
                          Object(a["d"])(
                            u,
                            {
                              key: 1,
                              id: "page",
                              page: e.editor.page,
                              onExecute: e.onExecute,
                            },
                            null,
                            8,
                            ["page", "onExecute"]
                          )),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              Object(a["D"])(
                Object(a["i"])(
                  d,
                  {
                    id: "file-select",
                    active: e.editor.id,
                    editors: e.editors,
                    onClose: e.onEditorClose,
                    onSwitch: e.onEditorSwitch,
                  },
                  null,
                  8,
                  ["active", "editors", "onClose", "onSwitch"]
                ),
                [[a["A"], 0 < e.editors.size]]
              ),
              Object(a["i"])(h, {
                id: "metrics-bar",
              }),
            ]),
            _: 1,
          }
        )
      );
    }
    var s = i("9ab4"),
      r = i("7aa9"),
      l = i("73a2"),
      c = i("5502"),
      u = i("6f01");
    const p = (e) => (
        Object(a["r"])("data-v-774cd2ef"), (e = e()), Object(a["q"])(), e
      ),
      d = {
        class: "splash-menu-control",
      },
      h = {
        class: "splash-menu-container",
      },
      v = {
        class: "header",
      },
      T = ["src"],
      m = ["src"],
      g = {
        class: "sections",
      },
      x = {
        class: "section new-file",
      },
      b = p(() =>
        Object(a["g"])(
          "p",
          {
            class: "section-title",
          },
          " Create a new file... ",
          -1
        )
      ),
      f = {
        class: "section-grid",
      },
      y = ["onClick"],
      O = {
        class: "name",
      },
      S = {
        class: "description",
      },
      w = {
        class: "section open-file",
      },
      j = p(() =>
        Object(a["g"])(
          "p",
          {
            class: "section-title",
          },
          " Open an existing file... ",
          -1
        )
      ),
      A = {
        class: "section-grid",
      },
      _ = p(() =>
        Object(a["g"])(
          "h1",
          {
            class: "name",
          },
          "+ Open a File",
          -1
        )
      ),
      C = p(() =>
        Object(a["g"])(
          "p",
          {
            class: "description",
          },
          "Open an existing file.",
          -1
        )
      ),
      I = [_, C];
    function P(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])("div", d, [
          Object(a["g"])("div", h, [
            Object(a["g"])("div", v, [
              Object(a["g"])(
                "img",
                {
                  class: "product",
                  src: e.product,
                },
                null,
                8,
                T
              ),
              e.organization
                ? (Object(a["p"])(),
                  Object(a["f"])(
                    "img",
                    {
                      key: 0,
                      class: "organization",
                      src: e.organization,
                    },
                    null,
                    8,
                    m
                  ))
                : Object(a["e"])("", !0),
            ]),
            Object(a["g"])("div", g, [
              Object(a["g"])("div", x, [
                b,
                Object(a["g"])("div", f, [
                  (Object(a["p"])(!0),
                  Object(a["f"])(
                    a["a"],
                    null,
                    Object(a["u"])(
                      e.templates,
                      (t) => (
                        Object(a["p"])(),
                        Object(a["f"])(
                          "div",
                          {
                            class: "template",
                            key: t.id,
                            onClick: (i) => e.$emit("new", t),
                          },
                          [
                            Object(a["g"])(
                              "h1",
                              O,
                              "+ " + Object(a["y"])(t.name),
                              1
                            ),
                            Object(a["g"])(
                              "p",
                              S,
                              Object(a["y"])(t.description),
                              1
                            ),
                          ],
                          8,
                          y
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              Object(a["g"])("div", w, [
                j,
                Object(a["g"])("div", A, [
                  Object(a["g"])(
                    "div",
                    {
                      class: "template",
                      onClick: t[0] || (t[0] = (t) => e.$emit("open")),
                    },
                    I
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    const k = i("b7b5");
    var M = Object(a["j"])({
        name: "SplashMenu",
        props: {
          templates: {
            type: Array,
            required: !0,
          },
        },
        data() {
          let e;
          return (
            l["default"].branding.organization &&
              (e = k(l["default"].branding.organization)),
            {
              product: k(l["default"].branding.product),
              organization: e,
            }
          );
        },
        emits: ["new", "open"],
      }),
      E = (i("0ca7"), i("6b0d")),
      D = i.n(E);
    const R = D()(M, [
      ["render", P],
      ["__scopeId", "data-v-774cd2ef"],
    ]);
    var N = R;
    const F = {
        class: "app-file-select-element",
      },
      L = ["onClick"],
      B = {
        class: "file-title",
      },
      H = ["onClick"];
    function G(e, t, i, n, o, s) {
      const r = Object(a["w"])("File");
      return (
        Object(a["p"])(),
        Object(a["f"])("div", F, [
          (Object(a["p"])(!0),
          Object(a["f"])(
            a["a"],
            null,
            Object(a["u"])(
              e.editors,
              ([t, i]) => (
                Object(a["p"])(),
                Object(a["f"])(
                  "div",
                  {
                    key: t,
                    class: Object(a["n"])([
                      "file",
                      {
                        active: t === this.active,
                      },
                    ]),
                    onClick: (i) => e.$emit("switch", t),
                  },
                  [
                    Object(a["i"])(r, {
                      class: "file-icon",
                    }),
                    Object(a["g"])("p", B, Object(a["y"])(i.name), 1),
                    Object(a["g"])(
                      "p",
                      {
                        class: "file-close",
                        onClick: Object(a["E"])(
                          (i) => e.$emit("close", t),
                          ["stop"]
                        ),
                      },
                      "✗",
                      8,
                      H
                    ),
                  ],
                  10,
                  L
                )
              )
            ),
            128
          )),
        ])
      );
    }
    const U = ["fill"],
      V = Object(a["g"])(
        "path",
        {
          d: "m0 0v3.176h2.6464v-2.1193l-1.0563-1.0568zm0.26355 0.26355h1.0594v1.0594h1.0578v1.587h-2.1172zm1.324 0.10697 0.68626 0.68781h-0.68626z",
        },
        null,
        -1
      ),
      z = [V];
    function $(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "svg",
          {
            width: "10",
            height: "12",
            version: "1.1",
            viewBox: "0 0 2.6458 3.175",
            xmlns: "http://www.w3.org/2000/svg",
            fill: e.color,
          },
          z,
          8,
          U
        )
      );
    }
    var Y = Object(a["j"])({
      name: "File",
      props: {
        color: {
          type: String,
          default: "#666666",
        },
      },
    });
    const W = D()(Y, [["render", $]]);
    var q = W,
      K = Object(a["j"])({
        name: "FileSelect",
        props: {
          active: {
            type: String,
            required: !0,
          },
          editors: {
            type: Object,
            required: !0,
          },
        },
        emits: ["switch", "close"],
        components: {
          File: q,
        },
      });
    i("fed5");
    const Z = D()(K, [
      ["render", G],
      ["__scopeId", "data-v-11dfc9fa"],
    ]);
    var J = Z;
    const X = {
        class: "logo",
      },
      Q = ["src"];
    function ee(e, t, n, o, s, r) {
      const l = Object(a["w"])("TitleBar");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          l,
          {
            class: "app-title-bar-element",
            menus: e.menus,
            onSelect: e.onItemSelect,
          },
          {
            icon: Object(a["C"])(() => [
              Object(a["g"])("span", X, [
                Object(a["g"])(
                  "img",
                  {
                    src: i("5b62"),
                  },
                  null,
                  8,
                  Q
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ["menus", "onSelect"]
        )
      );
    }
    const te = {
        class: "icon",
      },
      ie = ["onClick", "onMouseenter"];
    function ae(e, t, i, n, o, s) {
      const r = Object(a["w"])("ContextMenuListing"),
        l = Object(a["w"])("FocusBox");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          l,
          {
            class: "title-bar-control",
            pointerEvent: "click",
            onFocusout: e.menuClose,
          },
          {
            default: Object(a["C"])(() => [
              Object(a["g"])("li", te, [
                Object(a["v"])(e.$slots, "icon", {}, void 0, !0),
              ]),
              (Object(a["p"])(!0),
              Object(a["f"])(
                a["a"],
                null,
                Object(a["u"])(
                  e.menus,
                  (t) => (
                    Object(a["p"])(),
                    Object(a["f"])(
                      "li",
                      {
                        key: t.text,
                        class: Object(a["n"])({
                          active: e.isActive(t),
                        }),
                        onClick: (i) => e.menuOpen(t.text),
                        onMouseenter: (i) => e.menuEnter(t.text),
                      },
                      [
                        Object(a["g"])("p", null, Object(a["y"])(t.text), 1),
                        e.isActive(t)
                          ? (Object(a["p"])(),
                            Object(a["d"])(
                              r,
                              {
                                key: 0,
                                class: "menu-listing",
                                sections: t.sections,
                                onSelect: e.menuSelect,
                              },
                              null,
                              8,
                              ["sections", "onSelect"]
                            ))
                          : Object(a["e"])("", !0),
                      ],
                      42,
                      ie
                    )
                  )
                ),
                128
              )),
            ]),
            _: 3,
          },
          8,
          ["onFocusout"]
        )
      );
    }
    var ne = i("e0ac");
    const oe = (e) => (
        Object(a["r"])("data-v-5475d14e"), (e = e()), Object(a["q"])(), e
      ),
      se = ["onMouseenter", "onMouseleave"],
      re = {
        class: "item",
      },
      le = {
        class: "text",
      },
      ce = oe(() =>
        Object(a["g"])(
          "span",
          {
            class: "more-arrow",
          },
          null,
          -1
        )
      ),
      ue = {
        key: 0,
        class: "submenu",
      },
      pe = ["exit-focus-box", "onClick"],
      de = ["href"],
      he = {
        class: "check",
      },
      ve = {
        class: "text",
      },
      Te = {
        key: 0,
        class: "shortcut",
      },
      me = {
        key: 0,
        class: "section-divider",
      };
    function ge(e, t, i, n, o, s) {
      const r = Object(a["w"])("ContextMenuListing", !0);
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "div",
          {
            class: "context-menu-listing-control",
            style: Object(a["o"])(e.offset),
            onContextmenu:
              t[0] || (t[0] = Object(a["E"])(() => {}, ["prevent"])),
          },
          [
            (Object(a["p"])(!0),
            Object(a["f"])(
              a["a"],
              null,
              Object(a["u"])(
                e.sections,
                (t, i) => (
                  Object(a["p"])(),
                  Object(a["f"])(
                    "div",
                    {
                      class: "section",
                      key: t.id,
                    },
                    [
                      (Object(a["p"])(!0),
                      Object(a["f"])(
                        a["a"],
                        null,
                        Object(a["u"])(
                          t.items,
                          (t) => (
                            Object(a["p"])(),
                            Object(a["f"])(
                              a["a"],
                              {
                                key: t.text,
                              },
                              [
                                t.type === e.MenuType.Submenu
                                  ? (Object(a["p"])(),
                                    Object(a["f"])(
                                      "li",
                                      {
                                        key: 0,
                                        class: Object(a["n"])({
                                          disabled: t.disabled,
                                        }),
                                        onMouseenter: (i) => e.submenuEnter(t),
                                        onMouseleave: (i) => e.submenuLeave(t),
                                      },
                                      [
                                        Object(a["g"])("a", re, [
                                          Object(a["g"])(
                                            "span",
                                            le,
                                            Object(a["y"])(t.text),
                                            1
                                          ),
                                          ce,
                                        ]),
                                        e.isActive(t)
                                          ? (Object(a["p"])(),
                                            Object(a["f"])("div", ue, [
                                              Object(a["i"])(
                                                r,
                                                {
                                                  root: !1,
                                                  sections: t.sections,
                                                  on_select:
                                                    e.onChildItemSelect,
                                                },
                                                null,
                                                8,
                                                ["sections", "on_select"]
                                              ),
                                            ]))
                                          : Object(a["e"])("", !0),
                                      ],
                                      42,
                                      se
                                    ))
                                  : (Object(a["p"])(),
                                    Object(a["f"])(
                                      "li",
                                      {
                                        key: 1,
                                        class: Object(a["n"])({
                                          disabled: t.disabled,
                                        }),
                                        "exit-focus-box":
                                          !t.keepMenuOpenOnSelect,
                                        onClick: (i) => e.onItemClick(t),
                                      },
                                      [
                                        Object(a["g"])(
                                          "a",
                                          {
                                            class: "item",
                                            href: t.disabled ? null : t.link,
                                            target: "_blank",
                                          },
                                          [
                                            Object(a["D"])(
                                              Object(a["g"])(
                                                "span",
                                                he,
                                                " ✓ ",
                                                512
                                              ),
                                              [[a["A"], t.value]]
                                            ),
                                            Object(a["g"])(
                                              "span",
                                              ve,
                                              Object(a["y"])(t.text),
                                              1
                                            ),
                                            t.shortcut
                                              ? (Object(a["p"])(),
                                                Object(a["f"])(
                                                  "span",
                                                  Te,
                                                  Object(a["y"])(
                                                    e.formatShortcut(t.shortcut)
                                                  ),
                                                  1
                                                ))
                                              : Object(a["e"])("", !0),
                                          ],
                                          8,
                                          de
                                        ),
                                      ],
                                      10,
                                      pe
                                    )),
                              ],
                              64
                            )
                          )
                        ),
                        128
                      )),
                      i < e.sections.length - 1
                        ? (Object(a["p"])(), Object(a["f"])("a", me))
                        : Object(a["e"])("", !0),
                    ]
                  )
                )
              ),
              128
            )),
          ],
          36
        )
      );
    }
    var xe;
    (function (e) {
      (e[(e["Item"] = 0)] = "Item"),
        (e[(e["Toggle"] = 1)] = "Toggle"),
        (e[(e["Submenu"] = 2)] = "Submenu");
    })(xe || (xe = {}));
    const be = {
      Control: "Ctrl",
      Escape: "Esc",
      ArrowLeft: "←",
      ArrowUp: "↑",
      ArrowRight: "→",
      ArrowDown: "↓",
      Delete: "Del",
    };
    var fe = Object(a["j"])({
      name: "ContextMenuListing",
      props: {
        root: {
          type: Boolean,
          default: !0,
        },
        sections: {
          type: Array,
          required: !0,
        },
        forceInsideWindow: {
          type: Boolean,
          default: !0,
        },
      },
      data() {
        return {
          xOffset: 0,
          yOffset: 0,
          activeSubMenu: null,
          leaveTimeout: 500,
          leaveTimeoutId: 0,
          MenuType: xe,
        };
      },
      computed: {
        offset() {
          return {
            marginTop: this.yOffset + "px",
            marginLeft: this.xOffset + "px",
          };
        },
      },
      emits: ["select", "_select"],
      methods: {
        isActive(e) {
          return e.text === this.activeSubMenu;
        },
        submenuEnter(e) {
          e.disabled ||
            (clearTimeout(this.leaveTimeoutId), (this.activeSubMenu = e.text));
        },
        submenuLeave(e) {
          e.disabled ||
            (this.leaveTimeoutId = setTimeout(() => {
              this.activeSubMenu = null;
            }, this.leaveTimeout));
        },
        onItemClick(e) {
          e.disabled ||
            (this.root
              ? this.$emit("select", e.data)
              : this.$emit("_select", e));
        },
        onChildItemSelect(e) {
          this.root ? this.$emit("select", e.data) : this.$emit("_select", e),
            e.keepMenuOpenOnSelect || (this.activeSubMenu = null);
        },
        formatShortcut(e) {
          return e
            ? e
                .split("+")
                .map((e) => (e in be ? be[e] : e))
                .join("+")
            : e;
        },
      },
      mounted() {
        if (!this.forceInsideWindow) return;
        let e = window.innerWidth,
          t = window.innerHeight,
          {
            top: i,
            left: a,
            bottom: n,
            right: o,
          } = this.$el.getBoundingClientRect();
        (this.xOffset = o > e ? -Math.min(a, o - e) : 0),
          (this.yOffset = n > t ? -Math.min(i, n - t) : 0);
      },
    });
    i("3bd1");
    const ye = D()(fe, [
      ["render", ge],
      ["__scopeId", "data-v-5475d14e"],
    ]);
    var Oe = ye,
      Se = Object(a["j"])({
        name: "TitleBar",
        props: {
          menus: {
            type: Array,
            default: [],
          },
        },
        data() {
          return {
            activeMenu: null,
          };
        },
        emits: ["select"],
        methods: {
          isActive(e) {
            return e.text === this.activeMenu;
          },
          menuOpen(e) {
            this.activeMenu = e;
          },
          menuEnter(e) {
            null !== this.activeMenu && (this.activeMenu = e);
          },
          menuClose() {
            this.activeMenu = null;
          },
          menuSelect(e) {
            this.$emit("select", e);
          },
        },
        components: {
          FocusBox: ne["a"],
          ContextMenuListing: Oe,
        },
      });
    i("bac6");
    const we = D()(Se, [
      ["render", ae],
      ["__scopeId", "data-v-54d0bff4"],
    ]);
    var je = we,
      Ae = Object(a["j"])({
        name: "AppTitleBar",
        computed: Object.assign(
          Object.assign(
            {},
            Object(c["b"])("ContextMenuStore", [
              "fileMenu",
              "editMenu",
              "layoutMenu",
              "viewMenu",
              "helpMenu",
            ])
          ),
          {
            menus() {
              return [
                this.fileMenu,
                this.editMenu,
                this.viewMenu,
                this.helpMenu,
              ];
            },
          }
        ),
        methods: Object.assign(
          Object.assign({}, Object(c["c"])("ApplicationStore", ["execute"])),
          {
            onItemSelect(e) {
              return Object(s["a"])(this, void 0, void 0, function* () {
                try {
                  let t = e();
                  t instanceof Promise
                    ? this.execute(yield t)
                    : this.execute(t);
                } catch (t) {
                  console.error(t);
                }
              });
            },
          }
        ),
        components: {
          TitleBar: je,
        },
      });
    i("d974");
    const _e = D()(Ae, [
      ["render", ee],
      ["__scopeId", "data-v-7bf9ab7d"],
    ]);
    var Ce = _e;
    function Ie(e, t, i, n, o, s) {
      const r = Object(a["w"])("HotkeyBox");
      return (
        Object(a["p"])(),
        Object(a["d"])(
          r,
          {
            class: "app-hotkey-box-element",
            hotkeys: e.hotkeys,
            global: !0,
            onFire: e.onHotkeyFired,
          },
          {
            default: Object(a["C"])(() => [
              Object(a["v"])(e.$slots, "default"),
            ]),
            _: 3,
          },
          8,
          ["hotkeys", "onFire"]
        )
      );
    }
    const Pe = {
      class: "hotkey-box-container",
      tabindex: "0",
    };
    function ke(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])("div", Pe, [
          Object(a["v"])(e.$slots, "default", {}, void 0, !0),
        ])
      );
    }
    class Me {
      constructor(e, t) {
        (this._boundAdvanceKeyState = this.advanceKeyState.bind(this)),
          (this._boundReverseKeyState = this.reverseKeyState.bind(this)),
          (this._callback = e),
          (this._container = null),
          (this._hotkeyIdMap = new Map()),
          (this._keyState = ".");
      }
      observe(e) {
        (this._container = e),
          this._container.addEventListener(
            "keydown",
            this._boundAdvanceKeyState
          ),
          this._container.addEventListener("keyup", this._boundReverseKeyState);
      }
      disconnect() {
        var e, t;
        null === (e = this._container) ||
          void 0 === e ||
          e.removeEventListener("keydown", this._boundAdvanceKeyState),
          null === (t = this._container) ||
            void 0 === t ||
            t.removeEventListener("keyup", this._boundReverseKeyState);
      }
      setHotkeys(e) {
        this._hotkeyIdMap = new Map();
        for (let t of e) {
          if ("" === t.shortcut) continue;
          let e = this.keySequenceToHotKeyId(t.shortcut);
          for (let t of this._hotkeyIdMap.keys())
            if (t.startsWith(e) || e.startsWith(t))
              throw new Ee(
                `Overlapping key sequences ('${t}' and '${e}') are not allowed.`
              );
          this._hotkeyIdMap.set(e, t);
        }
      }
      isHotkeyActive(e, t = !0) {
        let i = this.keySequenceToHotKeyId(e);
        return t ? this._keyState === i : this._keyState.includes(i);
      }
      advanceKeyState(e) {
        let t = e.key.toLocaleLowerCase();
        if ("INPUT" === e.target.tagName) return;
        let i = this._keyState.endsWith(`.${t}.`);
        if (
          (i || (this._keyState += t + "."),
          this._hotkeyIdMap.has(this._keyState))
        ) {
          let t = this._hotkeyIdMap.get(this._keyState);
          if (t.disabled || (i && !t.repeatable))
            return void e.preventDefault();
          t.allowBrowserBehavior || e.preventDefault(), this._callback(t.data);
        } else e.preventDefault();
      }
      reverseKeyState(e) {
        let t = e.key.toLocaleLowerCase();
        this._keyState = this._keyState.replace(`.${t}.`, ".");
      }
      keySequenceToHotKeyId(e) {
        let t = e.toLocaleLowerCase().replace(/\s+/g, "").split("+").join(".");
        return `.${t}.`;
      }
    }
    class Ee extends Error {
      constructor(e) {
        super(e);
      }
    }
    var De = Object(a["j"])({
      name: "HotkeyBox",
      provide() {
        return {
          isHotkeyActive: (e, t = !0) => this.observer.isHotkeyActive(e, t),
        };
      },
      props: {
        hotkeys: {
          type: Array,
          default: [],
        },
        global: {
          type: Boolean,
          default: !1,
        },
      },
      data() {
        return {
          observer: Object(a["m"])(
            new Me((e, t) => this.$emit("fire", e, t), 0)
          ),
        };
      },
      emits: ["fire"],
      watch: {
        hotkeys() {
          this.observer.setHotkeys(this.hotkeys);
        },
      },
      mounted() {
        this.observer.observe(this.global ? document.body : this.$el),
          this.observer.setHotkeys(this.hotkeys);
      },
      unmounted() {
        this.observer.disconnect();
      },
    });
    i("e2cf");
    const Re = D()(De, [
      ["render", ke],
      ["__scopeId", "data-v-09ff9750"],
    ]);
    var Ne = Re,
      Fe = Object(a["j"])({
        name: "AppHotkeyBox",
        computed: Object.assign(
          Object.assign(
            {},
            Object(c["b"])("HotkeyStore", [
              "nativeHotkeys",
              "fileHotkeys",
              "editHotKeys",
              "layoutHotkeys",
              "viewHotkeys",
            ])
          ),
          {
            hotkeys() {
              return [
                ...this.nativeHotkeys,
                ...this.fileHotkeys,
                ...this.editHotKeys,
                ...this.layoutHotkeys,
                ...this.viewHotkeys,
              ];
            },
          }
        ),
        methods: Object.assign(
          Object.assign({}, Object(c["c"])("ApplicationStore", ["execute"])),
          {
            onHotkeyFired(e) {
              return Object(s["a"])(this, void 0, void 0, function* () {
                try {
                  let t = e();
                  if (t instanceof Promise) {
                    let e = yield t;
                    this.execute(e);
                  } else this.execute(t);
                } catch (t) {
                  console.error(t);
                }
              });
            },
          }
        ),
        components: {
          HotkeyBox: Ne,
        },
      });
    const Le = D()(Fe, [["render", Ie]]);
    var Be = Le;
    const He = {
      class: "app-metrics-bar-element",
    };
    function Ge(e, t, i, n, o, s) {
      return (
        Object(a["p"])(),
        Object(a["f"])("div", He, [
          e.propertyMetrics
            ? (Object(a["p"])(!0),
              Object(a["f"])(
                a["a"],
                {
                  key: 0,
                },
                Object(a["u"])(
                  e.propertyMetrics,
                  ([e, t]) => (
                    Object(a["p"])(),
                    Object(a["f"])(
                      "p",
                      {
                        class: "property-metric",
                        key: e,
                      },
                      Object(a["y"])(t.text) + ": " + Object(a["y"])(t.value),
                      1
                    )
                  )
                ),
                128
              ))
            : Object(a["e"])("", !0),
        ])
      );
    }
    var Ue = Object(a["j"])({
      name: "AppMetricsBar",
      computed: Object.assign(
        Object.assign(
          {},
          Object(c["d"])("ApplicationStore", {
            editor(e) {
              return e.activeEditor;
            },
          })
        ),
        {
          propertyMetrics() {
            var e, t;
            return null !==
              (t =
                null === (e = this.editor.selected) || void 0 === e
                  ? void 0
                  : e.metrics) && void 0 !== t
              ? t
              : null;
          },
        }
      ),
    });
    i("c881");
    const Ve = D()(Ue, [
      ["render", Ge],
      ["__scopeId", "data-v-a24a6250"],
    ]);
    var ze = Ve;
    const $e = {
      class: "page-editor-element",
    };
    function Ye(e, t, i, n, o, s) {
      const r = Object(a["w"])("PageEditorSection");
      return (
        Object(a["p"])(),
        Object(a["f"])("div", $e, [
          (Object(a["p"])(!0),
          Object(a["f"])(
            a["a"],
            null,
            Object(a["u"])(
              e.page.sections,
              ([i, n]) => (
                Object(a["p"])(),
                Object(a["d"])(
                  r,
                  {
                    class: "page-section",
                    key: i,
                    section: n,
                    onExecute: t[0] || (t[0] = (t) => e.$emit("execute", t)),
                  },
                  null,
                  8,
                  ["section"]
                )
              )
            ),
            128
          )),
        ])
      );
    }
    const We = {
        class: "page-editor-section-control",
      },
      qe = {
        key: 0,
        class: "section-name",
      };
    function Ke(e, t, i, n, o, s) {
      const r = Object(a["w"])("FieldGrid");
      return (
        Object(a["p"])(),
        Object(a["f"])("div", We, [
          null !== e.section.name
            ? (Object(a["p"])(),
              Object(a["f"])("div", qe, Object(a["y"])(e.section.name), 1))
            : Object(a["e"])("", !0),
          Object(a["i"])(
            r,
            {
              class: "fields",
              rows: e.section.layout.rows,
              cols: e.section.layout.cols,
              properties: e.properties,
              onExecute: t[0] || (t[0] = (t) => e.$emit("execute", t)),
            },
            null,
            8,
            ["rows", "cols", "properties"]
          ),
        ])
      );
    }
    var Ze = i("5800"),
      Je = Object(a["j"])({
        name: "PageSection",
        props: {
          section: {
            type: Object,
            required: !0,
          },
        },
        computed: {
          properties() {
            return [...this.section.properties.values()];
          },
        },
        emits: ["execute"],
        mounted() {
          let e = r["h"](this.section, this.$el);
          this.$emit("execute", e);
        },
        unmounted() {
          let e = r["b"](this.section);
          this.$emit("execute", e);
        },
        components: {
          FieldGrid: Ze["default"],
        },
      });
    i("f6b1");
    const Xe = D()(Je, [
      ["render", Ke],
      ["__scopeId", "data-v-5ad23cba"],
    ]);
    var Qe = Xe,
      et = Object(a["j"])({
        name: "PageEditor",
        props: {
          page: {
            type: Object,
            required: !0,
          },
        },
        emits: ["execute"],
        components: {
          PageEditorSection: Qe,
        },
      });
    i("b550");
    const tt = D()(et, [
      ["render", Ye],
      ["__scopeId", "data-v-005b2b18"],
    ]);
    var it = tt,
      at = Object(a["j"])({
        name: "App",
        computed: Object.assign(
          Object.assign(
            {},
            Object(c["d"])("ApplicationStore", {
              ctx(e) {
                return e;
              },
              editor(e) {
                return e.activeEditor;
              },
              editors(e) {
                let t = [...e.editors.entries()].filter(
                  (e) => !e[1].isPhantom()
                );
                return new Map(t);
              },
            })
          ),
          {
            templates() {
              return l["default"].templates;
            },
          }
        ),
        methods: Object.assign(
          Object.assign({}, Object(c["c"])("ApplicationStore", ["execute"])),
          {
            onExecute(e) {
              return Object(s["a"])(this, void 0, void 0, function* () {
                try {
                  e instanceof Promise
                    ? this.execute(yield e)
                    : this.execute(e);
                } catch (t) {
                  console.error(t);
                }
              });
            },
            onEditorSwitch(e) {
              this.execute(r["l"](this.ctx, e));
            },
            onEditorClose(e) {
              this.execute(r["o"](this.ctx, e));
            },
            onNewDocument(e) {
              this.execute(r["d"](this.ctx, e));
            },
            onOpenDocument() {
              return Object(s["a"])(this, void 0, void 0, function* () {
                this.execute(yield r["e"](this.ctx));
              });
            },
          }
        ),
        created() {
          return Object(s["a"])(this, void 0, void 0, function* () {
            let e;
            (e = l["default"].is_web_hosted
              ? yield (yield fetch("./settings.json")).json()
              : i("14d9")),
              this.execute(r["f"](this.ctx, e));
          });
        },
        components: {
          ScrollBox: u["a"],
          AppTitleBar: Ce,
          AppHotkeyBox: Be,
          AppMetricsBar: ze,
          FileSelect: J,
          PageEditorControl: it,
          SplashMenu: N,
        },
      });
    i("2337");
    const nt = D()(at, [["render", o]]);
    var ot = nt,
      st = i("991e"),
      rt = i("9ae2");
    const lt = {
      hotkeys: {
        file: {
          new_file: "",
          open_file: "",
          save_file: "",
        },
        edit: {
          undo: "",
          redo: "",
        },
        layout: {},
        view: {
          fullscreen: "",
        },
      },
    };
    var ct = {
        namespaced: !0,
        state: {
          editors: new Map([[st["a"].Phantom.id, st["a"].Phantom]]),
          activeEditor: st["a"].Phantom,
          activeProperty: null,
          settings: lt,
        },
        getters: {
          canUndo(e) {
            return e.activeEditor.canUndo();
          },
          canRedo(e) {
            return e.activeEditor.canRedo();
          },
        },
        mutations: {
          execute(e, t) {
            if (t instanceof rt["b"]) {
              let i = e.editors.get(t.page);
              if (!i) throw new Error(`'${t.page}' is not a page.`);
              i.execute(t);
            } else t.execute();
          },
        },
      },
      ut = {
        namespaced: !0,
        getters: {
          fileMenu(e, t, i) {
            let a = [t.openFileMenu, t.saveFileMenu].filter(Boolean);
            return {
              text: "File",
              type: xe.Submenu,
              sections: a,
            };
          },
          openFileMenu(e, t, i) {
            let a = i.ApplicationStore,
              n = a.settings.hotkeys.file,
              o = l["default"].templates.map((e) => ({
                text: e.name,
                type: xe.Item,
                data: () => r["d"](a, e),
              }));
            return {
              id: "open_file_options",
              items: [
                {
                  text: "New File",
                  type: xe.Submenu,
                  sections: [
                    {
                      id: "new_file_options",
                      items: o,
                    },
                  ],
                },
                {
                  text: "Open File...",
                  type: xe.Item,
                  data: () => r["e"](a),
                  shortcut: n.open_file,
                },
              ],
            };
          },
          saveFileMenu(e, t, i) {
            let a = i.ApplicationStore,
              n = a.settings.hotkeys.file,
              o = a.activeEditor;
            return {
              id: "save_file_options",
              items: [
                {
                  text: "Save",
                  type: xe.Item,
                  data: () => r["k"](a, o.id),
                  shortcut: n.save_file,
                  disabled: o.id === st["a"].Phantom.id,
                },
              ],
            };
          },
          editMenu(e, t) {
            return {
              text: "Edit",
              type: xe.Submenu,
              sections: [t.undoRedoMenu],
            };
          },
          undoRedoMenu(e, t, i, a) {
            let n = i.ApplicationStore,
              o = n.activeEditor.page,
              s = n.settings.hotkeys.edit,
              l = a["ApplicationStore/canUndo"],
              c = a["ApplicationStore/canRedo"];
            return {
              id: "undo_redo_options",
              items: [
                {
                  text: "Undo",
                  type: xe.Item,
                  data: () => r["n"](n, o.instance),
                  shortcut: s.undo,
                  disabled: !l,
                },
                {
                  text: "Redo",
                  type: xe.Item,
                  data: () => r["j"](n, o.instance),
                  shortcut: s.redo,
                  disabled: !c,
                },
              ],
            };
          },
          layoutMenu(e, t) {
            return {
              text: "Layout",
              type: xe.Submenu,
              sections: [],
            };
          },
          viewMenu(e, t) {
            return {
              text: "View",
              type: xe.Submenu,
              sections: [t.fullscreenMenu],
            };
          },
          fullscreenMenu(e, t, i) {
            let a = i.ApplicationStore,
              n = a.settings.hotkeys.view;
            return {
              id: "fullscreen_options",
              items: [
                {
                  text: "Fullscreen",
                  type: xe.Item,
                  data: () => r["m"](),
                  shortcut: n.fullscreen,
                },
              ],
            };
          },
          helpMenu(e, t, i) {
            i.ApplicationStore;
            let a = l["default"].menus.help_menu.help_links,
              n = a.map((e) => ({
                text: e.text,
                type: xe.Item,
                data: () => r["i"](e.url),
              }));
            return {
              text: "",
              type: xe.Submenu,
              sections: [
                {
                  id: "help_links",
                  items: n,
                },
              ],
            };
          },
        },
      },
      pt = {
        namespaced: !0,
        getters: {
          nativeHotkeys() {
            return [
              {
                shortcut: "Control+C",
                repeatable: !0,
                allowBrowserBehavior: !0,
              },
              {
                shortcut: "Control+V",
                repeatable: !0,
                allowBrowserBehavior: !0,
              },
              {
                shortcut: "Control+X",
                repeatable: !0,
                allowBrowserBehavior: !0,
              },
              {
                shortcut: "Control+R",
                repeatable: !0,
                allowBrowserBehavior: !0,
              },
              {
                shortcut: "Control+Shift+R",
                repeatable: !0,
                allowBrowserBehavior: !0,
              },
            ];
          },
          fileHotkeys(e, t, i, a) {
            let n = i.ApplicationStore,
              o = n.activeEditor,
              s = n.settings.hotkeys.file;
            return [
              {
                data: () => r["e"](n),
                shortcut: s.open_file,
                repeatable: !1,
              },
              {
                data: () => r["k"](n, o.id),
                shortcut: s.save_file,
                repeatable: !1,
                disabled: o.id === st["a"].Phantom.id,
              },
            ];
          },
          editHotKeys(e, t, i) {
            let a = i.ApplicationStore,
              n = a.activeEditor.page,
              o = a.settings.hotkeys.edit;
            return [
              {
                data: () => r["n"](a, n.instance),
                shortcut: o.undo,
                repeatable: !0,
              },
              {
                data: () => r["j"](a, n.instance),
                shortcut: o.redo,
                repeatable: !0,
              },
            ];
          },
          layoutHotkeys(e, t, i) {
            i.ApplicationStore;
            return [];
          },
          viewHotkeys(e, t, i) {
            let a = i.ApplicationStore,
              n = a.settings.hotkeys.view;
            return [
              {
                data: () => r["m"](),
                shortcut: n.fullscreen,
                repeatable: !1,
              },
            ];
          },
        },
      },
      dt = Object(c["a"])({
        modules: {
          ApplicationStore: ct,
          ContextMenuStore: ut,
          HotkeyStore: pt,
        },
      }),
      ht = (i("0da8"), i("2975"), i("1c81"));
    (ht["n"].makeReactive = (e) => Object(a["t"])(e).value),
      Object(a["c"])(ot).use(dt).mount("#app");
  },
  ce8b: function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return a;
    });
    class a {
      constructor() {
        (this.deltaX = 0),
          (this.deltaY = 0),
          (this.movementX = 0),
          (this.movementY = 0),
          (this.target = null),
          (this._originX = 0),
          (this._originY = 0),
          (this._lastX = 0),
          (this._lastY = 0);
      }
      capture(e, t, i) {
        (this._originX = e.clientX),
          (this._originY = e.clientY),
          (this._lastX = this._originX),
          (this._lastY = this._originY),
          (this.target = e.target),
          this.target.setPointerCapture(e.pointerId),
          (this.target.onpointermove = (e) => {
            this.update(e), t(e, this);
          }),
          document.addEventListener(
            "pointerup",
            (e) => {
              this.release(e), i && i(e, this);
            },
            {
              once: !0,
            }
          );
      }
      update(e) {
        (this.deltaX = e.clientX - this._originX),
          (this.deltaY = e.clientY - this._originY),
          (this.movementX = e.clientX - this._lastX),
          (this.movementY = e.clientY - this._lastY),
          (this._lastX = e.clientX),
          (this._lastY = e.clientY);
      }
      release(e) {
        null !== this.target &&
          (this.target.releasePointerCapture(e.pointerId),
          (this.target.onpointermove = null),
          (this.target = null));
      }
    }
  },
  cea5: function (e, t, i) {},
  d974: function (e, t, i) {
    "use strict";
    i("caac");
  },
  e0ac: function (e, t, i) {
    "use strict";
    var a = i("7a23");
    const n = ["tabindex"];
    function o(e, t, i, o, s, r) {
      return (
        Object(a["p"])(),
        Object(a["f"])(
          "div",
          {
            class: "focus-box-container",
            tabindex: e.tabindex,
            onFocusin:
              t[0] || (t[0] = (...t) => e.onFocusIn && e.onFocusIn(...t)),
            onFocusout:
              t[1] || (t[1] = (...t) => e.onFocusOut && e.onFocusOut(...t)),
          },
          [Object(a["v"])(e.$slots, "default", {}, void 0, !0)],
          40,
          n
        )
      );
    }
    var s = Object(a["j"])({
        name: "FocusBox",
        props: {
          tabindex: {
            type: String,
            default: "-1",
          },
          pointerEvent: {
            type: String,
            default: null,
          },
        },
        data() {
          return {
            focus: !1,
          };
        },
        emits: ["focusin", "focusout"],
        methods: {
          onFocusIn() {
            (this.focus = !0), this.$emit("focusin");
          },
          onFocusOut(e) {
            this.focus &&
              !this.$el.contains(e.relatedTarget) &&
              ((this.focus = !1), this.$emit("focusout"));
          },
          onPointerEvent(e) {
            let t = e.target;
            while (this.$el !== t) {
              if (t.hasAttribute("exit-focus-box"))
                return (
                  (this.focus = !1),
                  this.$emit("focusout"),
                  void this.$el.blur()
                );
              t = t.parentElement;
            }
          },
        },
        mounted() {
          this.pointerEvent &&
            this.$el.addEventListener(this.pointerEvent, this.onPointerEvent);
        },
        unmounted() {
          this.$el.removeEventListener(this.pointerEvent, this.onPointerEvent);
        },
      }),
      r = (i("5d84"), i("6b0d")),
      l = i.n(r);
    const c = l()(s, [
      ["render", o],
      ["__scopeId", "data-v-8472a79c"],
    ]);
    t["a"] = c;
  },
  e2cf: function (e, t, i) {
    "use strict";
    i("bdb4");
  },
  e681: function (e, t, i) {},
  f112: function (e, t, i) {},
  f139: function (e, t, i) {
    "use strict";
    function a() {
      return crypto.randomUUID
        ? crypto.randomUUID()
        : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) =>
            (
              parseInt(e) ^
              (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (parseInt(e) / 4)))
            ).toString(16)
          );
    }
    i.d(t, "c", function () {
      return a;
    }),
      i.d(t, "a", function () {
        return v;
      }),
      i.d(t, "b", function () {
        return m;
      });
    const n = "0123456789abcdef";
    function o(e) {
      let t = "";
      for (let i = 0; i <= 3; i++)
        t += n.charAt((e >> (8 * i + 4)) & 15) + n.charAt((e >> (8 * i)) & 15);
      return t;
    }
    function s(e) {
      let t,
        i = 1 + ((e.length + 8) >> 6),
        a = new Array(16 * i).fill(0);
      for (t = 0; t < e.length; t++)
        a[t >> 2] |= e.charCodeAt(t) << ((t % 4) * 8);
      return (
        (a[t >> 2] |= 128 << ((t % 4) * 8)), (a[16 * i - 2] = 8 * e.length), a
      );
    }
    function r(e, t) {
      var i = (65535 & e) + (65535 & t),
        a = (e >> 16) + (t >> 16) + (i >> 16);
      return (a << 16) | (65535 & i);
    }
    function l(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function c(e, t, i, a, n, o) {
      return r(l(r(r(t, e), r(a, o)), n), i);
    }
    function u(e, t, i, a, n, o, s) {
      return c((t & i) | (~t & a), e, t, n, o, s);
    }
    function p(e, t, i, a, n, o, s) {
      return c((t & a) | (i & ~a), e, t, n, o, s);
    }
    function d(e, t, i, a, n, o, s) {
      return c(t ^ i ^ a, e, t, n, o, s);
    }
    function h(e, t, i, a, n, o, s) {
      return c(i ^ (t | ~a), e, t, n, o, s);
    }
    function v(e) {
      let t = s(e),
        i = 1732584193,
        a = -271733879,
        n = -1732584194,
        l = 271733878;
      for (let o = 0; o < t.length; o += 16) {
        let e = i,
          s = a,
          c = n,
          v = l;
        (i = u(i, a, n, l, t[o + 0], 7, -680876936)),
          (l = u(l, i, a, n, t[o + 1], 12, -389564586)),
          (n = u(n, l, i, a, t[o + 2], 17, 606105819)),
          (a = u(a, n, l, i, t[o + 3], 22, -1044525330)),
          (i = u(i, a, n, l, t[o + 4], 7, -176418897)),
          (l = u(l, i, a, n, t[o + 5], 12, 1200080426)),
          (n = u(n, l, i, a, t[o + 6], 17, -1473231341)),
          (a = u(a, n, l, i, t[o + 7], 22, -45705983)),
          (i = u(i, a, n, l, t[o + 8], 7, 1770035416)),
          (l = u(l, i, a, n, t[o + 9], 12, -1958414417)),
          (n = u(n, l, i, a, t[o + 10], 17, -42063)),
          (a = u(a, n, l, i, t[o + 11], 22, -1990404162)),
          (i = u(i, a, n, l, t[o + 12], 7, 1804603682)),
          (l = u(l, i, a, n, t[o + 13], 12, -40341101)),
          (n = u(n, l, i, a, t[o + 14], 17, -1502002290)),
          (a = u(a, n, l, i, t[o + 15], 22, 1236535329)),
          (i = p(i, a, n, l, t[o + 1], 5, -165796510)),
          (l = p(l, i, a, n, t[o + 6], 9, -1069501632)),
          (n = p(n, l, i, a, t[o + 11], 14, 643717713)),
          (a = p(a, n, l, i, t[o + 0], 20, -373897302)),
          (i = p(i, a, n, l, t[o + 5], 5, -701558691)),
          (l = p(l, i, a, n, t[o + 10], 9, 38016083)),
          (n = p(n, l, i, a, t[o + 15], 14, -660478335)),
          (a = p(a, n, l, i, t[o + 4], 20, -405537848)),
          (i = p(i, a, n, l, t[o + 9], 5, 568446438)),
          (l = p(l, i, a, n, t[o + 14], 9, -1019803690)),
          (n = p(n, l, i, a, t[o + 3], 14, -187363961)),
          (a = p(a, n, l, i, t[o + 8], 20, 1163531501)),
          (i = p(i, a, n, l, t[o + 13], 5, -1444681467)),
          (l = p(l, i, a, n, t[o + 2], 9, -51403784)),
          (n = p(n, l, i, a, t[o + 7], 14, 1735328473)),
          (a = p(a, n, l, i, t[o + 12], 20, -1926607734)),
          (i = d(i, a, n, l, t[o + 5], 4, -378558)),
          (l = d(l, i, a, n, t[o + 8], 11, -2022574463)),
          (n = d(n, l, i, a, t[o + 11], 16, 1839030562)),
          (a = d(a, n, l, i, t[o + 14], 23, -35309556)),
          (i = d(i, a, n, l, t[o + 1], 4, -1530992060)),
          (l = d(l, i, a, n, t[o + 4], 11, 1272893353)),
          (n = d(n, l, i, a, t[o + 7], 16, -155497632)),
          (a = d(a, n, l, i, t[o + 10], 23, -1094730640)),
          (i = d(i, a, n, l, t[o + 13], 4, 681279174)),
          (l = d(l, i, a, n, t[o + 0], 11, -358537222)),
          (n = d(n, l, i, a, t[o + 3], 16, -722521979)),
          (a = d(a, n, l, i, t[o + 6], 23, 76029189)),
          (i = d(i, a, n, l, t[o + 9], 4, -640364487)),
          (l = d(l, i, a, n, t[o + 12], 11, -421815835)),
          (n = d(n, l, i, a, t[o + 15], 16, 530742520)),
          (a = d(a, n, l, i, t[o + 2], 23, -995338651)),
          (i = h(i, a, n, l, t[o + 0], 6, -198630844)),
          (l = h(l, i, a, n, t[o + 7], 10, 1126891415)),
          (n = h(n, l, i, a, t[o + 14], 15, -1416354905)),
          (a = h(a, n, l, i, t[o + 5], 21, -57434055)),
          (i = h(i, a, n, l, t[o + 12], 6, 1700485571)),
          (l = h(l, i, a, n, t[o + 3], 10, -1894986606)),
          (n = h(n, l, i, a, t[o + 10], 15, -1051523)),
          (a = h(a, n, l, i, t[o + 1], 21, -2054922799)),
          (i = h(i, a, n, l, t[o + 8], 6, 1873313359)),
          (l = h(l, i, a, n, t[o + 15], 10, -30611744)),
          (n = h(n, l, i, a, t[o + 6], 15, -1560198380)),
          (a = h(a, n, l, i, t[o + 13], 21, 1309151649)),
          (i = h(i, a, n, l, t[o + 4], 6, -145523070)),
          (l = h(l, i, a, n, t[o + 11], 10, -1120210379)),
          (n = h(n, l, i, a, t[o + 2], 15, 718787259)),
          (a = h(a, n, l, i, t[o + 9], 21, -343485551)),
          (i = r(i, e)),
          (a = r(a, s)),
          (n = r(n, c)),
          (l = r(l, v));
      }
      return o(i) + o(a) + o(n) + o(l);
    }
    var T;
    i("a742");
    function m(e, t, i) {
      return Math.min(Math.max(e, t), i);
    }
    (function (e) {
      (e[(e["Left"] = 0)] = "Left"),
        (e[(e["Middle"] = 1)] = "Middle"),
        (e[(e["Right"] = 2)] = "Right");
    })(T || (T = {}));
  },
  f6b1: function (e, t, i) {
    "use strict";
    i("0e2b");
  },
  fa88: function (e, t, i) {},
  fbc8: function (e, t, i) {
    "use strict";
    i("8c7f");
  },
  fc86: function (e, t, i) {
    "use strict";
    i("647e");
  },
  fed5: function (e, t, i) {
    "use strict";
    i("28d3");
  },
});
//# sourceMappingURL=app.e69739e5.js.map
