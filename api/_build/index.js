var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React, init_react = __esm({
  "node_modules/@remix-run/dev/dist/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// empty-module:~/utils/gtags.client
var require_gtags = __commonJS({
  "empty-module:~/utils/gtags.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/gdavis/Project/mainSite/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_dist()), import_remix_utils = require("remix-utils"), import_react2 = require("react"), import_react_lottie_player = __toESM(require("react-lottie-player"));

// app/styles/global.css
var global_default = "/build/_assets/global-MDEQZ55V.css";

// app/styles/shared.css
var shared_default = "/build/_assets/shared-T5CB6MPG.css";

// app/components/TopNav/index.tsx
init_react();
var import_react = __toESM(require("react")), import_remix2 = __toESM(require_dist());

// app/utils/throttle.tsx
init_react();
function throttle(func, wait, options) {
  let context, args, result, timeout = null, previous = 0;
  options || (options = {});
  let later = function() {
    previous = (options == null ? void 0 : options.leading) === !1 ? 0 : Date.now(), timeout = null, result = func.apply(context, args), timeout || (context = args = null);
  };
  return function() {
    let now = Date.now();
    !previous && (options == null ? void 0 : options.leading) === !1 && (previous = now);
    let remaining = wait - (now - previous);
    return context = this, args = arguments, remaining <= 0 || remaining > wait ? (timeout && (clearTimeout(timeout), timeout = null), previous = now, result = func.apply(context, args), timeout || (context = args = null)) : !timeout && (options == null ? void 0 : options.trailing) !== !1 && (timeout = setTimeout(later, remaining)), result;
  };
}
var throttle_default = throttle;

// app/components/TopNav/index.tsx
var TopNav = () => {
  let [open, setOpen] = (0, import_react.useState)(!1), [showOrHideText, setShowOrHideText] = (0, import_react.useState)("show"), [scrollY, setScrollY] = (0, import_react.useState)(0), handleOnClick = () => {
    setOpen(!open), setShowOrHideText(open ? "show" : "hide");
  }, handleOnKeyDown = (e) => {
    (e.key === "Enter" || e.key === " ") && (setOpen(!open), setShowOrHideText(open ? "show" : "hide"));
  };
  (0, import_react.useEffect)(() => (open && document.addEventListener("keydown", handleOnEscKeyDown), () => {
    document.removeEventListener("keydown", handleOnEscKeyDown);
  }), [open]), (0, import_react.useEffect)(() => (document.addEventListener("scroll", handleOnScroll), () => {
    document.removeEventListener("scroll", handleOnScroll);
  }), [scrollY]);
  let handleOnEscKeyDown = (evt) => {
    evt.key === "Escape" && (setOpen(!open), setShowOrHideText("show"));
  }, handleOnScroll = () => {
    let scrollYValue = window.pageYOffset || document.documentElement.scrollTop;
    throttle_default(setScrollY(scrollYValue), 100);
  }, activeStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "4px"
  }, shouldShowWhite = scrollY > 1053 && scrollY < 2372;
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
    role: "button",
    "aria-pressed": open,
    "aria-haspopup": "dialog",
    tabIndex: 0,
    className: `hamburgerMenu-nav-${showOrHideText} ${shouldShowWhite ? `hamburgerMenu-nav-${showOrHideText}-svg` : ""}`,
    onClick: handleOnClick,
    onKeyDown: handleOnKeyDown
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    width: "auto",
    role: "img",
    "aria-labelledby": "title desc",
    xmlns: "http://www.w3.org/2000/svg",
    className: "svg-icon",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("title", {
    id: "title"
  }, "Hamburger Menu"), /* @__PURE__ */ import_react.default.createElement("desc", {
    id: "desc"
  }, "Three lines stacked on top of each other with space between each"), /* @__PURE__ */ import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))), open ? /* @__PURE__ */ import_react.default.createElement("div", {
    id: "myModal",
    className: "modal"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "modal-content"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    onClick: handleOnClick,
    className: "close modal-button-close"
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    width: "auto",
    xmlns: "http://www.w3.org/2000/svg",
    className: "svg-icon",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "hamburgerMenu-list-container"
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "/",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Home")), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "about",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "About")), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "skills",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Skills")), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "blogs",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Blogs")), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "hamburgerMenu-list-item"
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    onClick: handleOnClick,
    className: "hamburgerMenu-list-item-text",
    to: "contact",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Contact"))))) : "", /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "header-nav-hide",
    "data-primary-nav": !0
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    "data-primary-list": !0
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": !0
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    style: ({ isActive }) => isActive ? activeStyle : void 0,
    "data-primary-nav-text": !0,
    to: "/"
  }, "Home")), /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": !0
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    "data-primary-nav-text": !0,
    to: "about",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "About")), /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": !0
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    "data-primary-nav-text": !0,
    to: "skills",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Skills")), /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": !0
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    "data-primary-nav-text": !0,
    to: "blogs",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Blogs")), /* @__PURE__ */ import_react.default.createElement("li", {
    "data-primary-list-item": !0
  }, /* @__PURE__ */ import_react.default.createElement(import_remix2.NavLink, {
    "data-primary-nav-text": !0,
    to: "contact",
    style: ({ isActive }) => isActive ? activeStyle : void 0
  }, "Contact")))));
}, TopNav_default = TopNav;

// app/images/home/oops.json
var v = "5.8.1", fr = 30, ip = 0, op = 234, w = 1920, h = 1e3, nm = "Comp 1", ddd = 0, assets = [{ id: "image_0", w: 3455, h: 494, u: "", p: "data:image/png;base64,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", e: 1 }, { id: "image_1", w: 2544, h: 232, u: "", p: "data:image/png;base64,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", e: 1 }, { id: "image_2", w: 3658, h: 1873, u: "", p: "data:image/png;base64,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", e: 1 }, { layers: [{ ddd: 0, ind: 1, ty: 2, isAdjustment: !1, nm: "Error.png", cl: "png", refId: "image_2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 }, a: { a: 0, k: [1829, 936.5, 0], ix: 1, l: 2 }, s: { a: 0, k: [65.008, 55.152, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 233.000009490285, st: 0, bm: 0 }], id: 51, nm: "Error.png Comp 1", xt: 1, w: 1920, h: 1080 }, { layers: [{ ddd: 0, ind: 1, ty: 2, isAdjustment: !1, nm: "kereta.png", cl: "png", refId: "image_1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [-896, 840, 0], to: [661.667, 0, 0], ti: [-661.667, 0, 0] }, { t: 232.000009449554, s: [3074, 840, 0] }], ix: 2, l: 2 }, a: { a: 0, k: [1272, 116, 0], ix: 1, l: 2 }, s: { a: 0, k: [66.352, 63.793, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 233.000009490285, st: 0, bm: 0 }], id: 35, nm: "kereta.png Comp 1", xt: 1, w: 1920, h: 1080 }, { layers: [{ ddd: 0, ind: 1, ty: 2, isAdjustment: !1, nm: "pohon blur.png", cl: "png", refId: "image_0", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [832, 940, 0], ix: 2, l: 2 }, a: { a: 0, k: [1727.5, 247, 0], ix: 1, l: 2 }, s: { a: 0, k: [63.878, 63.878, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 234.000009531015, st: 0, bm: 0 }], id: 19, nm: "pohon blur.png Comp 1", xt: 1, w: 1920, h: 1080 }, { id: "comp_0", nm: "pohon blur.png Comp 1", fr: 29.9700012207031, layers: [{ ddd: 0, ind: 1, ty: 2, nm: "pohon blur.png", cl: "png", refId: "image_0", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [832, 940, 0], ix: 2, l: 2 }, a: { a: 0, k: [1727.5, 247, 0], ix: 1, l: 2 }, s: { a: 0, k: [63.878, 63.878, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 234.000009531015, st: 0, bm: 0 }] }, { id: "comp_1", nm: "kereta.png Comp 1", fr: 29.9700012207031, layers: [{ ddd: 0, ind: 1, ty: 2, nm: "kereta.png", cl: "png", refId: "image_1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [-896, 840, 0], to: [661.667, 0, 0], ti: [-661.667, 0, 0] }, { t: 232.000009449554, s: [3074, 840, 0] }], ix: 2, l: 2 }, a: { a: 0, k: [1272, 116, 0], ix: 1, l: 2 }, s: { a: 0, k: [66.352, 63.793, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 233.000009490285, st: 0, bm: 0 }] }, { id: "comp_2", nm: "Error.png Comp 1", fr: 29.9700012207031, layers: [{ ddd: 0, ind: 1, ty: 2, nm: "Error.png", cl: "png", refId: "image_2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 }, a: { a: 0, k: [1829, 936.5, 0], ix: 1, l: 2 }, s: { a: 0, k: [65.008, 55.152, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 233.000009490285, st: 0, bm: 0 }] }], layers = [{ ddd: 0, ind: 1, ty: 0, nm: "pohon blur.png Comp 1", cl: "png", refId: "comp_0", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 }, a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 92.5925925925926, 100], ix: 6, l: 2 } }, ao: 0, w: 1920, h: 1080, ip: 0, op: 242.000009856862, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 0, nm: "kereta.png Comp 1", cl: "png", refId: "comp_1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 }, a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 92.5925925925926, 100], ix: 6, l: 2 } }, ao: 0, w: 1920, h: 1080, ip: 1.00000004073083, op: 243.000009897593, st: 1.00000004073083, bm: 0 }, { ddd: 0, ind: 3, ty: 0, nm: "Error.png Comp 1", cl: "png", refId: "comp_2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 }, a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 92.5925925925926, 100], ix: 6, l: 2 } }, ao: 0, w: 1920, h: 1080, ip: 0, op: 243.000009897593, st: 0, bm: 0 }], markers = [], oops_default = { v, fr, ip, op, w, h, nm, ddd, assets, layers, markers };

// app/images/home/404.json
var v2 = "5.7.0", fr2 = 30, ip2 = 0, op2 = 150, w2 = 1200, h2 = 800, nm2 = "Composi\xE7\xE3o 1", ddd2 = 0, assets2 = [], fonts = { list: [{ fName: "FjallaOne-Regular", fFamily: "Fjalla One", fStyle: "Regular", ascent: 88.818359375 }] }, layers2 = [{ ddd: 0, ind: 4, ty: 5, nm: "<camada de texto vazia>", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-552, 860, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 46, f: "FjallaOne-Regular", t: "", j: 0, tr: 0, lh: 55.2, ls: 0, fc: [0.305, 0.011, 0.449] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 6, ty: 5, nm: "found", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 64, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 88, s: [15.739] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 96, s: [170.887] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 105, s: [37.304] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 113, s: [143.04] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 120, s: [49.404] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 129, s: [113.633] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 140, s: [81] }, { t: 149, s: [90] }], ix: 10 }, p: { a: 0, k: [684, 598, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 83, f: "FjallaOne-Regular", t: "found", j: 0, tr: 0, lh: 99.6, ls: 0, fc: [0, 0, 0] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 7, ty: 5, nm: "page ", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 360, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 63, s: [370, 595.439, 0], to: [0, 3.922, 0], ti: [0, -8.126, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 68, s: [370, 697.149, 0], to: [0, 2.369, 0], ti: [0, -1.4, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 73, s: [370, 607.761, 0], to: [0, 4.709, 0], ti: [0, -11.531, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 78, s: [370, 697.845, 0], to: [0, 7.57, 0], ti: [0, 0.807, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 83, s: [370, 651.406, 0], to: [0, -1.018, 0], ti: [0, -12.736, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 87, s: [370, 698.083, 0], to: [0, 2.833, 0], ti: [0, 0.384, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 92, s: [370, 681.161, 0], to: [0, -0.369, 0], ti: [0, -3.29, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 95, s: [370, 695.852, 0], to: [0, 0.305, 0], ti: [0, -0.215, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 98, s: [370, 698.369, 0], to: [0, 1.014, 0], ti: [0, 0.559, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 101, s: [370, 692.369, 0], to: [0, -0.875, 0], ti: [0, -0.466, 0] }, { t: 107, s: [370, 696.439, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 83, f: "FjallaOne-Regular", t: "page ", j: 0, tr: 0, lh: 99.6, ls: 0, fc: [0, 0, 0] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 8, ty: 5, nm: "not", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [548, 594, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 83, f: "FjallaOne-Regular", t: "not", j: 0, tr: 0, lh: 99.6, ls: 0, fc: [0, 0, 0] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 9, ty: 5, nm: "error", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 62, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 72, s: [365.114] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 84, s: [213.226] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 94, s: [-1.445] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 108, s: [167.416] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 124, s: [54.924] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 137, s: [133.462] }, { t: 150, s: [90] }], ix: 10 }, p: { a: 0, k: [304, 174, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 46, f: "FjallaOne-Regular", t: "error", j: 0, tr: 0, lh: 55.2, ls: 0, fc: [0.305, 0.011, 0.449] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 10, ty: 5, nm: "0", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 11, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 33, s: [-6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 40, s: [8] }, { t: 58, s: [-8] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [571, 760, 0], to: [0, 0, 0], ti: [0, 14.688, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 11, s: [551, 738.13, 0], to: [0, -13.14, 0], ti: [0, -34.452, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 37, s: [542, 713, 0], to: [0, 40.149, 0], ti: [0, -62.184, 0] }, { t: 59, s: [542, 1352, 0] }], ix: 2 }, a: { a: 0, k: [0, 23, 0], ix: 1 }, s: { a: 0, k: [1001.988, 1001.988, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 36, f: "FjallaOne-Regular", t: "0", j: 0, tr: 0, lh: 43.2, ls: 0, fc: [0.424, 7e-3, 0.629] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 151, st: 0, bm: 0 }, { ddd: 0, ind: 11, ty: 5, nm: "4", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 58, s: [2.826] }, { t: 73, s: [-56.647] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [314, 808, 0], to: [0.19, 0.011, 0], ti: [-0.216, -0.013, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 1, s: [314.609, 764.037, 0], to: [9.232, 0.554, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 73, s: [232.609, 689.037, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 77, s: [232.609, 646.037, 0] }], ix: 2 }, a: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [0, 23, 0], to: [0, -2.262, 0], ti: [0, 5.469, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 58, s: [0, 23.822, 0], to: [0, -0.804, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 73, s: [0, -17, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 77, s: [0, -16, 0] }], ix: 1 }, s: { a: 0, k: [1295.347, 1174.638, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 36, f: "FjallaOne-Regular", t: "4", j: 0, tr: 0, lh: 43.2, ls: 0, fc: [0.545, 0.02, 0.802] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 151, st: 0, bm: 0 }, { ddd: 0, ind: 12, ty: 5, nm: "5", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 73, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 91, s: [45] }, { t: 97, s: [42] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [707, 563, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 1, s: [708.774, 517.317, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 22, s: [746, 526, 0], to: [0, 0, 0], ti: [5, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 39, s: [710, 545, 0], to: [-2.036, 0, 0], ti: [4.985, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 69, s: [649.455, 590, 0], to: [-7.257, 0, 0], ti: [0, 0.667, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 91, s: [649.455, 554, 0], to: [0, -0.667, 0], ti: [0, 0, 0] }, { t: 97, s: [649.455, 538, 0] }], ix: 2 }, a: { a: 0, k: [0, -1, 0], ix: 1 }, s: { a: 0, k: [1295.347, 1174.638, 100], ix: 6 } }, ao: 0, t: { d: { k: [{ s: { s: 36, f: "FjallaOne-Regular", t: "4", j: 0, tr: 0, lh: 43.2, ls: 0, fc: [0.545, 0.02, 0.8] }, t: 0 }] }, p: {}, m: { g: 1, a: { a: 0, k: [0, 0], ix: 2 } }, a: [] }, ip: 0, op: 151, st: 0, bm: 0 }, { ddd: 0, ind: 13, ty: 4, nm: "Camada de forma 1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [23] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 10, s: [-17.556] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 23, s: [12.297] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 43, s: [-36.374] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 59, s: [25.009] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 72, s: [-22.479] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 101, s: [10] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 114, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 128, s: [9] }, { t: 145, s: [-4] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [600, -168, 0], to: [0, 1.981, 0], ti: [0, -2.225, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 1, s: [600, -205.689, 0], to: [0, 104.08, 0], ti: [0, -92.686, 0] }, { t: 90, s: [600, 325, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[22.25, 7], [-29.289, -9.395], [-28.597, 1.486], [2, 1], [14, 6]], o: [[-1.669, -0.525], [26.5, 8.5], [19.25, -1], [-10.733, -5.367], [-14, -6]], v: [[-78, 151], [-44.25, 169.25], [10.75, 173.25], [56.25, 155.5], [-4.25, 160.25]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0, 0, 0, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0, ix: 5 }, lc: 1, lj: 1, ml: 4, bm: 0, nm: "Tra\xE7ado 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.5686274509803921, 0.8431372549019608, 0.9372549019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Preenchimento 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, -1.75], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Forma 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 14, ty: 4, nm: "ta\xE7a teste 1 contornos", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [23] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 10, s: [-17.556] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 23, s: [12.297] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 43, s: [-36.374] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 59, s: [25.009] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 72, s: [-22.479] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 101, s: [10] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 110, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 123, s: [9] }, { t: 137, s: [-4] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [600, -168, 0], to: [0, 1.981, 0], ti: [0, -2.225, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 1, s: [600, -205.689, 0], to: [0, 104.08, 0], ti: [0, -92.686, 0] }, { t: 90, s: [600, 325, 0] }], ix: 2 }, a: { a: 0, k: [400, 400, 0], ix: 1 }, s: { a: 0, k: [48.461, 48.461, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[15.207, 5.785], [6.76, 37.55], [-3.099, 35.604], [-15.809, 79.851], [-13.222, 0.395], [-1.295, -1.743], [-0.149, -0.209], [-37.476, -110.761], [14.445, -22.207]], o: [[-22.803, -8.675], [-6.216, -34.531], [2.866, -32.933], [18.671, -94.31], [4.714, -0.141], [1e-3, 0], [5.339, 7.532], [16.087, 47.544], [-8.545, 13.137]], v: [[-9.053, 218.94], [-44.909, 141.968], [-47.876, 41.094], [-25.624, -87.966], [14.072, -224.584], [24.511, -217.438], [24.813, -217.026], [-0.406, 107.849], [36.68, 207.24]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0, ix: 5 }, lc: 1, lj: 1, ml: 10, bm: 0, nm: "Tra\xE7ado 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [172.906, 377.039], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Grupo 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[15.207, 5.785], [6.76, 37.55], [-3.099, 35.604], [-15.809, 79.851], [-13.222, 0.395], [-1.295, -1.743], [-0.149, -0.209], [-37.476, -110.761], [14.445, -22.207]], o: [[-22.803, -8.675], [-6.216, -34.531], [2.866, -32.933], [18.671, -94.31], [4.714, -0.141], [1e-3, 0], [5.339, 7.532], [16.087, 47.544], [-8.545, 13.137]], v: [[-4.103, 220.328], [-39.959, 143.356], [-42.926, 42.482], [-20.674, -86.578], [19.022, -223.196], [29.461, -216.05], [29.763, -215.638], [4.544, 109.237], [41.63, 208.628]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.735294103622, 0.72961717844, 0.72961717844, 1], ix: 4 }, o: { a: 0, k: 72, ix: 5 }, r: 1, bm: 0, nm: "Preenchimento 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [167.956, 375.651], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Grupo 2", np: 2, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -19.731], [118.967, 0], [0, 19.731], [-118.967, 0]], o: [[0, 19.731], [-118.967, 0], [0, -19.731], [118.967, 0]], v: [[215.409, 0], [0, 35.727], [-215.409, 0], [0, -35.727]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.569000004787, 0.569000004787, 0.569000004787, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 10, bm: 0, nm: "Tra\xE7ado 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [383.366, 76.726], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Grupo 3", np: 2, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[44.993, 181.043], [118.967, 0], [0, 19.731], [2.116, -32.987], [-0.48, -6.899], [-0.321, -4.424], [-0.165, -1.786], [-0.044, -0.491], [-143.964, 0], [-15.562, 138.458], [-0.172, 8.69], [-0.143, 32.753]], o: [[0, 19.731], [-118.967, 0], [-39.353, 177.955], [-1.236, 19.284], [0.023, 0.333], [0.131, 1.796], [0.048, 0.551], [13.755, 140.349], [142.615, 0], [0.953, -8.475], [0, -1e-3], [0.147, -34.077]], v: [[214.917, -345.706], [-0.492, -309.979], [-215.901, -345.706], [-277.807, -2.59], [-278.017, 78.809], [-277.265, 88.754], [-276.81, 94.124], [-276.671, 95.688], [-0.612, 345.706], [275.023, 99.62], [276.723, 73.866], [278.895, 5.253]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.569000004787, 0.569000004787, 0.569000004787, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 2, lj: 2, bm: 0, nm: "Tra\xE7ado 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "tr", p: { a: 0, k: [383.198, 422.432], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Grupo 4", np: 2, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 17, ty: 4, nm: "fundo contornos", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [600, 320, 0], ix: 2 }, a: { a: 0, k: [640, 400, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[5.05, 3.758], [0, 0], [-0.196, -6.031], [-16.443, -2.329], [-37.95, -7.396], [-30.101, -6.149], [-39.078, 5.365], [-55.283, -2.169], [-82.899, -10.789], [-34.476, -9.956], [-16.176, 13.964], [-10.841, 10.553], [-58.529, 5.489], [-1.849, 10.033]], o: [[0, 0], [-11.518, 3.588], [0.273, 8.434], [47.793, 6.77], [29.81, 5.81], [35.293, 7.21], [44.109, -6.056], [91.908, 3.605], [14.766, 1.922], [52.481, 15.156], [10.634, -9.18], [16.603, -16.16], [12.788, -1.199], [0.916, -4.97]], v: [[450.392, -37.982], [-435.86, -37.982], [-460.86, -22.982], [-416.86, -5.982], [-317.86, -9.982], [-261.86, 14.018], [-168.86, 2.018], [-65.86, 12.018], [124.14, -10.982], [203.14, 6.018], [302.14, 24.018], [315.14, -6.982], [418.14, -9.982], [460.14, -23.982]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.757000014361, 0.757000014361, 0.757000014361, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Preenchimento 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [648.86, 514.982], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Grupo 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[7.014, 7.452], [0, 0], [0.596, -6.985], [-11.565, -28.437], [-12.669, -21.46], [-34.158, -8.355], [-68.274, 0.786], [-97.228, 1.391], [-97.204, -4.021], [-40.571, 8.675], [-0.258, 13.758], [-7.599, 17.388], [-9.644, 21.539]], o: [[0, 0], [-36.862, 11.707], [-1.819, 21.305], [7.941, 19.525], [1.743, 2.953], [42.061, 10.287], [111.552, -1.284], [105.473, -1.509], [78.845, 3.261], [35.479, -7.585], [0.439, -23.409], [8.977, -20.539], [5.803, -12.958]], v: [[459.469, -89.486], [-426.967, -89.486], [-472.573, -60.793], [-395.456, -5.269], [-402.919, 42.057], [-355.654, 72.614], [-209.711, 62.552], [13.349, 85.656], [233.92, 57.335], [384.009, 80.811], [428.787, 31.995], [412.202, -11.976], [468.589, -57.439]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.827000038297, 0.827000038297, 0.827000038297, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Preenchimento 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [639.783, 566.486], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Grupo 2", np: 2, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[7.014, -16.583], [0, 0], [0.596, 15.544], [-11.565, 63.279], [-12.67, 47.753], [-34.158, 18.59], [-68.274, -1.749], [-97.228, -3.096], [-97.204, 8.947], [-40.571, -19.303], [-0.257, -30.615], [-7.599, -38.693], [-9.644, -47.929]], o: [[0, 0], [-36.862, -26.051], [-1.818, -47.408], [7.94, -43.448], [1.743, -6.573], [42.061, -22.892], [111.552, 2.857], [105.472, 3.358], [78.845, -7.258], [35.479, 16.88], [0.44, 52.092], [8.976, 45.703], [5.803, 28.836]], v: [[459.469, 199.128], [-426.967, 199.128], [-472.575, 135.278], [-395.456, 11.724], [-402.919, -93.586], [-355.654, -161.582], [-209.711, -139.193], [13.349, -190.605], [233.92, -127.584], [384.009, -179.825], [428.786, -71.198], [412.202, 26.65], [468.589, 127.815]], c: !0 }, ix: 2 }, nm: "Caminho 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.917999985639, 0.917999985639, 0.917999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Preenchimento 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [639.696, 277.872], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transformar" }], nm: "Grupo 3", np: 2, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 300, st: 0, bm: 0 }], markers2 = [], chars = [{ ch: "4", size: 36, style: "Regular", w: 53.71, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[3.955, -14.941], [31.592, -14.941], [31.592, 0], [43.359, 0], [43.359, -14.941], [51.074, -14.941], [51.074, -24.854], [43.359, -24.854], [43.359, -83.398], [28.271, -83.398], [3.955, -21.582]], c: !0 }, ix: 2 }, nm: "4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[16.846, -24.854], [31.299, -68.604], [32.764, -68.604], [31.592, -37.158], [31.592, -24.854]], c: !0 }, ix: 2 }, nm: "4", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "4", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "0", size: 36, style: "Regular", w: 51.12, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-0.652, -2.669], [-1.074, -1.855], [-1.416, -1.139], [-1.53, -0.635], [-1.53, -0.228], [-1.302, 0], [-1.482, 0.227], [-1.498, 0.635], [-1.433, 1.156], [-1.107, 1.855], [-0.668, 2.654], [0, 3.646], [0, 0], [0.667, 2.67], [1.09, 1.823], [1.416, 1.091], [1.514, 0.57], [1.481, 0.179], [1.204, 0], [1.514, -0.195], [1.514, -0.602], [1.432, -1.106], [1.09, -1.807], [0.667, -2.653], [0, -3.645]], o: [[0, 3.646], [0.651, 2.67], [1.074, 1.855], [1.416, 1.14], [1.53, 0.635], [1.53, 0.227], [1.172, 0], [1.481, -0.228], [1.497, -0.635], [1.432, -1.155], [1.106, -1.855], [0.667, -2.653], [0, 0], [0, -3.711], [-0.668, -2.669], [-1.091, -1.823], [-1.416, -1.09], [-1.514, -0.569], [-1.482, -0.179], [-1.27, 0], [-1.514, 0.195], [-1.514, 0.603], [-1.433, 1.107], [-1.091, 1.807], [-0.668, 2.654], [0, 0]], v: [[5.127, -24.316], [6.104, -14.844], [8.691, -8.057], [12.427, -3.564], [16.846, -0.903], [21.436, 0.391], [25.684, 0.732], [29.663, 0.391], [34.131, -0.903], [38.525, -3.589], [42.334, -8.105], [44.995, -14.868], [45.996, -24.316], [45.996, -59.57], [44.995, -69.141], [42.358, -75.879], [38.599, -80.249], [34.204, -82.739], [29.712, -83.862], [25.684, -84.131], [21.509, -83.838], [16.968, -82.642], [12.549, -80.078], [8.765, -75.708], [6.128, -69.019], [5.127, -59.57]], c: !0 }, ix: 2 }, nm: "0", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [-1.254, 1.66], [-2.572, 0], [-1.237, -1.66], [0, -3.645], [0, 0], [1.237, -1.562], [2.506, 0], [1.253, 1.562], [0, 3.451]], o: [[0, -3.645], [1.253, -1.66], [2.506, 0], [1.237, 1.66], [0, 0], [0, 3.451], [-1.237, 1.562], [-2.572, 0], [-1.254, -1.562], [0, 0]], v: [[18.066, -64.16], [19.946, -72.119], [25.684, -74.609], [31.299, -72.119], [33.154, -64.16], [33.154, -18.994], [31.299, -11.475], [25.684, -9.131], [19.946, -11.475], [18.066, -18.994]], c: !0 }, ix: 2 }, nm: "0", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "0", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "e", size: 46, style: "Regular", w: 45.02, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-3.044, 2.914], [0, 6.38], [0, 0], [0, 0], [0, 0], [0.325, -1.188], [0.537, -0.716], [0.716, -0.309], [0.748, 0], [0.928, 0.537], [0.537, 1.221], [0.227, 2.002], [0, 2.93], [0, 0], [0, 0], [-0.212, 1.27], [-0.13, 1.351], [-0.082, 1.4], [0, 1.367], [0.928, 2.702], [1.562, 1.611], [2.051, 0.668], [2.213, 0], [1.416, -0.179], [1.432, -0.635], [1.35, -1.204], [1.025, -2.067], [0.635, -3.043], [0, -4.264], [0, 0], [-0.781, -3.564], [-1.53, -2.278], [-2.23, -1.074], [-2.898, 0]], o: [[3.043, -2.913], [0, 0], [0, 0], [0, 0], [0, 1.758], [-0.326, 1.189], [-0.537, 0.716], [-0.716, 0.31], [-1.4, 0], [-0.928, -0.537], [-0.537, -1.221], [-0.228, -2.002], [0, 0], [0, 0], [0.227, -1.074], [0.211, -1.27], [0.13, -1.35], [0.081, -1.399], [0, -4.036], [-0.928, -2.702], [-1.562, -1.611], [-2.051, -0.667], [-1.205, 0], [-1.416, 0.179], [-1.433, 0.635], [-1.351, 1.205], [-1.025, 2.068], [-0.635, 3.044], [0, 0], [0, 5.013], [0.781, 3.564], [1.53, 2.279], [2.229, 1.074], [5.762, 0]], v: [[35.767, -3.638], [40.332, -17.578], [40.332, -20.166], [30.029, -20.166], [30.029, -18.066], [29.541, -13.647], [28.247, -10.791], [26.367, -9.253], [24.17, -8.789], [20.679, -9.595], [18.481, -12.231], [17.334, -17.065], [16.992, -24.463], [16.992, -31.299], [39.307, -31.299], [39.966, -34.814], [40.479, -38.745], [40.796, -42.871], [40.918, -47.021], [39.526, -57.129], [35.791, -63.599], [30.371, -67.017], [23.975, -68.018], [20.044, -67.749], [15.771, -66.528], [11.597, -63.77], [8.032, -58.862], [5.542, -51.196], [4.59, -40.234], [4.59, -27.539], [5.762, -14.673], [9.229, -5.908], [14.868, -0.879], [22.559, 0.732]], c: !0 }, ix: 2 }, nm: "e", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-0.261, 1.953], [-0.521, 1.189], [-0.814, 0.505], [-1.074, 0], [-1.042, -1.953], [0, -4.427], [0, -0.635], [0.016, -0.651], [0.032, -0.602], [0.032, -0.358]], o: [[0, 0], [0, -2.897], [0.26, -1.953], [0.52, -1.188], [0.813, -0.504], [2.051, 0], [1.041, 1.953], [0, 0.456], [0, 0.635], [-0.017, 0.652], [-0.033, 0.603], [0, 0]], v: [[16.992, -39.6], [16.992, -43.701], [17.383, -50.977], [18.555, -55.688], [20.557, -58.228], [23.389, -58.984], [28.027, -56.055], [29.59, -46.484], [29.59, -44.849], [29.565, -42.92], [29.492, -41.04], [29.395, -39.6]], c: !0 }, ix: 2 }, nm: "e", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "e", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "r", size: 46, style: "Regular", w: 38.48, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-0.83, 0.635], [-0.977, 0], [-0.391, -0.211], [-0.293, -0.537], [-0.179, -0.879], [0, -1.367], [0, 0], [0, 0], [-0.212, 0.83], [-0.146, 0.83], [-0.082, 0.765], [0, 0.554], [1.692, 2.181], [3.548, 0], [1.774, -1.27], [1.367, -2.539], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0.553, -1.139], [0.83, -0.635], [0.455, 0], [0.391, 0.212], [0.293, 0.537], [0.179, 0.879], [0, 0], [0, 0], [0.227, -0.684], [0.211, -0.83], [0.146, -0.83], [0.081, -0.764], [0, -4.362], [-1.693, -2.18], [-1.855, 0], [-1.775, 1.27], [0, 0], [0, 0], [0, 0]], v: [[6.348, 0], [18.701, 0], [18.701, -55.371], [20.776, -58.032], [23.486, -58.984], [24.756, -58.667], [25.781, -57.544], [26.489, -55.42], [26.758, -52.051], [26.758, -45.801], [35.352, -45.801], [36.011, -48.071], [36.548, -50.562], [36.89, -52.954], [37.012, -54.932], [34.473, -64.746], [26.611, -68.018], [21.167, -66.113], [16.455, -60.4], [15.381, -67.236], [6.348, -67.236]], c: !0 }, ix: 2 }, nm: "r", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "r", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "o", size: 46, style: "Regular", w: 46.39, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-1.416, 0.244], [-1.367, 0.749], [-1.237, 1.351], [-0.945, 2.181], [-0.554, 3.158], [0, 4.362], [0, 0], [0.537, 3.142], [0.928, 2.116], [1.221, 1.254], [1.367, 0.635], [1.432, 0.195], [1.334, 0], [1.465, -0.211], [1.383, -0.667], [1.237, -1.253], [0.928, -2.116], [0.537, -3.108], [0, -4.362], [0, 0], [-0.521, -3.19], [-0.912, -2.18], [-1.221, -1.334], [-1.384, -0.716], [-1.482, -0.228], [-1.433, 0]], o: [[1.416, -0.244], [1.367, -0.748], [1.237, -1.35], [0.944, -2.18], [0.553, -3.157], [0, 0], [0, -4.395], [-0.537, -3.141], [-0.928, -2.116], [-1.221, -1.253], [-1.367, -0.635], [-1.433, -0.195], [-1.4, 0], [-1.465, 0.212], [-1.384, 0.668], [-1.237, 1.254], [-0.928, 2.116], [-0.537, 3.109], [0, 0], [0, 4.427], [0.52, 3.191], [0.911, 2.181], [1.221, 1.335], [1.383, 0.716], [1.481, 0.227], [1.302, 0]], v: [[27.368, 0.366], [31.543, -1.123], [35.449, -4.272], [38.721, -9.57], [40.967, -17.578], [41.797, -28.857], [41.797, -39.404], [40.991, -50.708], [38.794, -58.594], [35.571, -63.647], [31.689, -66.479], [27.49, -67.725], [23.34, -68.018], [19.043, -67.7], [14.771, -66.382], [10.84, -63.501], [7.593, -58.447], [5.396, -50.61], [4.59, -39.404], [4.59, -28.857], [5.371, -17.432], [7.52, -9.375], [10.718, -4.102], [14.624, -1.025], [18.921, 0.391], [23.291, 0.732]], c: !0 }, ix: 2 }, nm: "o", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.797, 0.57], [0.52, 1.302], [0.227, 2.132], [0, 3.158], [0, 0], [-0.228, 2.148], [-0.521, 1.318], [-0.798, 0.586], [-1.172, 0], [-0.765, -0.586], [-0.472, -1.318], [-0.212, -2.148], [0, -3.157], [0, 0], [0.211, -2.132], [0.471, -1.302], [0.764, -0.569], [1.106, 0]], o: [[-0.798, -0.569], [-0.521, -1.302], [-0.228, -2.132], [0, 0], [0, -3.157], [0.227, -2.148], [0.52, -1.318], [0.797, -0.586], [1.106, 0], [0.764, 0.586], [0.471, 1.318], [0.211, 2.148], [0, 0], [0, 3.158], [-0.212, 2.132], [-0.472, 1.302], [-0.765, 0.57], [-1.172, 0]], v: [[20.435, -9.644], [18.457, -12.451], [17.334, -17.603], [16.992, -25.537], [16.992, -42.09], [17.334, -50.049], [18.457, -55.249], [20.435, -58.105], [23.389, -58.984], [26.196, -58.105], [28.052, -55.249], [29.077, -50.049], [29.395, -42.09], [29.395, -25.537], [29.077, -17.603], [28.052, -12.451], [26.196, -9.644], [23.389, -8.789]], c: !0 }, ix: 2 }, nm: "o", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "o", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "n", size: 83, style: "Regular", w: 49.8, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-1.221, 0.814], [-1.237, 0], [-0.912, -1.155], [0, -2.962], [0, 0], [0, 0], [0, 0], [2.132, 2.751], [3.938, 0], [1.253, -0.26], [1.204, -0.618], [1.123, -1.025], [0.977, -1.53], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0.944, -1.432], [1.221, -0.813], [1.758, 0], [0.911, 1.156], [0, 0], [0, 0], [0, 0], [0, -5.501], [-2.132, -2.75], [-1.237, 0], [-1.254, 0.261], [-1.205, 0.619], [-1.123, 1.025], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[6.348, 0], [18.701, 0], [18.701, -54.395], [21.948, -57.764], [25.635, -58.984], [29.639, -57.251], [31.006, -51.074], [31.006, 0], [43.359, 0], [43.359, -51.514], [40.161, -63.892], [31.055, -68.018], [27.319, -67.627], [23.633, -66.309], [20.142, -63.843], [16.992, -60.01], [16.992, -60.059], [15.869, -67.236], [6.348, -67.236]], c: !0 }, ix: 2 }, nm: "n", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "n", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "t", size: 83, style: "Regular", w: 32.96, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-0.732, -2.278], [-1.237, -1.286], [-1.595, -0.455], [-1.726, 0], [-0.912, 0.13], [-0.879, 0.342], [-0.83, 0.554], [-0.716, 0.879], [0, 0], [0.928, -0.293], [1.204, 0], [0.651, 0.163], [0.488, 0.505], [0.276, 0.896], [0, 1.465], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 3.646], [0.732, 2.279], [1.237, 1.286], [1.595, 0.455], [0.879, 0], [0.911, -0.13], [0.879, -0.342], [0.83, -0.553], [0, 0], [-0.847, 0.521], [-0.928, 0.293], [-0.716, 0], [-0.652, -0.163], [-0.488, -0.504], [-0.277, -0.895], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[7.764, -16.748], [8.862, -7.861], [11.816, -2.515], [16.064, 0.098], [21.045, 0.781], [23.73, 0.586], [26.416, -0.122], [28.979, -1.465], [31.299, -3.613], [31.299, -10.449], [28.638, -9.229], [25.439, -8.789], [23.389, -9.033], [21.68, -10.034], [20.532, -12.134], [20.117, -15.674], [20.117, -58.447], [30.859, -58.447], [30.859, -67.236], [20.117, -67.236], [20.117, -84.668], [11.328, -84.668], [8.838, -67.236], [2.539, -67.236], [2.539, -58.447], [7.764, -58.447]], c: !0 }, ix: 2 }, nm: "t", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "t", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "p", size: 83, style: "Regular", w: 48.34, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-1.742, -1.009], [-2.605, 0], [-1.009, 0.146], [-1.074, 0.52], [-1.042, 1.042], [-0.814, 1.791], [-0.505, 2.67], [0, 3.809], [0, 0], [0.504, 2.67], [0.797, 1.791], [1.025, 1.025], [1.025, 0.521], [0.96, 0.13], [0.684, 0], [1.286, -0.471], [1.025, -0.732], [0.764, -0.944], [0.553, -0.911], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[1.106, 1.433], [1.741, 1.009], [0.748, 0], [1.009, -0.146], [1.074, -0.52], [1.041, -1.041], [0.813, -1.79], [0.504, -2.669], [0, 0], [0, -3.809], [-0.505, -2.669], [-0.798, -1.79], [-1.025, -1.025], [-1.025, -0.52], [-0.961, -0.13], [-1.595, 0], [-1.286, 0.472], [-1.025, 0.732], [-0.765, 0.945], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[18.311, -4.443], [22.583, -0.781], [29.102, 0.732], [31.738, 0.513], [34.863, -0.488], [38.037, -2.832], [40.82, -7.08], [42.798, -13.77], [43.555, -23.486], [43.555, -43.848], [42.798, -53.564], [40.845, -60.254], [38.11, -64.478], [35.034, -66.797], [32.056, -67.773], [29.59, -67.969], [25.269, -67.261], [21.802, -65.454], [19.116, -62.939], [17.139, -60.156], [16.016, -67.236], [6.348, -67.236], [6.348, 21.729], [18.701, 21.729], [18.701, 3.809]], c: !0 }, ix: 2 }, nm: "p", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [-0.993, 0.928], [-1.562, 0], [-0.749, -0.325], [-0.537, -0.911], [-0.31, -1.579], [0, -2.506], [0, 0], [0.309, -1.595], [0.553, -0.895], [0.748, -0.342], [0.911, 0], [0.635, 0.277], [0.504, 0.456], [0.374, 0.586], [0.26, 0.652]], o: [[0.618, -1.237], [0.993, -0.928], [0.911, 0], [0.748, 0.326], [0.537, 0.912], [0.309, 1.579], [0, 0], [0, 2.507], [-0.31, 1.595], [-0.554, 0.896], [-0.749, 0.342], [-0.847, 0], [-0.635, -0.276], [-0.505, -0.455], [-0.375, -0.586], [0, 0]], v: [[18.701, -54.346], [21.118, -57.593], [24.951, -58.984], [27.441, -58.496], [29.37, -56.641], [30.64, -52.905], [31.104, -46.777], [31.104, -21.045], [30.64, -14.893], [29.346, -11.157], [27.393, -9.302], [24.902, -8.789], [22.681, -9.204], [20.972, -10.303], [19.653, -11.865], [18.701, -13.721]], c: !0 }, ix: 2 }, nm: "p", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "p", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "a", size: 83, style: "Regular", w: 45.12, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-2.23, 1.204], [-1.335, 1.921], [0, 0], [0, 0], [0, 0], [0.537, 2.214], [1.318, 1.465], [2.213, 0.732], [3.352, 0], [2.148, -0.667], [1.546, -1.302], [0.862, -1.92], [0, -2.506], [-0.146, -1.057], [-0.293, -1.27], [0, 0], [0, 0], [-0.375, 1.302], [-0.635, 0.781], [-0.83, 0.326], [-0.879, 0], [-0.749, -0.471], [-0.375, -0.83], [-0.098, -1.123], [0, -1.302], [0, 0], [1.546, -0.635], [1.237, -0.618], [1.953, -1.416], [1.318, -1.725], [0.684, -2.148], [0, -2.766], [-0.57, -1.969], [-1.107, -1.432], [-1.611, -0.83], [-2.084, 0]], o: [[2.229, -1.204], [0, 0], [0, 0], [0, 0], [0, -2.962], [-0.537, -2.213], [-1.318, -1.465], [-2.214, -0.732], [-2.572, 0], [-2.148, 0.668], [-1.546, 1.302], [-0.863, 1.921], [0, 1.042], [0.146, 1.058], [0, 0], [0, 0], [0, -1.92], [0.374, -1.302], [0.635, -0.781], [0.83, -0.325], [1.302, 0], [0.748, 0.472], [0.374, 0.83], [0.098, 1.123], [0, 0], [-1.205, 0.456], [-1.546, 0.635], [-2.572, 1.27], [-1.953, 1.416], [-1.318, 1.726], [-0.684, 2.148], [0, 2.312], [0.569, 1.97], [1.106, 1.433], [1.611, 0.83], [2.864, 0]], v: [[23.267, -1.074], [28.613, -5.762], [29.492, 0], [38.672, 0], [38.672, -50.342], [37.866, -58.105], [35.083, -63.623], [29.785, -66.919], [21.436, -68.018], [14.355, -67.017], [8.813, -64.062], [5.2, -59.229], [3.906, -52.588], [4.126, -49.438], [4.785, -45.947], [14.209, -45.947], [14.209, -48.877], [14.771, -53.711], [16.284, -56.836], [18.481, -58.496], [21.045, -58.984], [24.121, -58.276], [25.806, -56.323], [26.514, -53.394], [26.66, -49.756], [26.66, -40.869], [22.534, -39.233], [18.359, -37.354], [11.572, -33.325], [6.665, -28.613], [3.662, -22.803], [2.637, -15.43], [3.491, -9.009], [6.006, -3.906], [10.083, -0.513], [15.625, 0.732]], c: !0 }, ix: 2 }, nm: "a", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[1.009, 1.562], [0, 2.572], [-0.407, 1.351], [-0.668, 1.074], [-0.847, 0.781], [-0.879, 0.554], [-0.814, 0.359], [-0.652, 0.261], [0, 0], [0.993, -0.537], [1.041, 0]], o: [[-1.009, -1.562], [0, -1.66], [0.407, -1.35], [0.667, -1.074], [0.846, -0.781], [0.944, -0.586], [0.813, -0.358], [0, 0], [-0.684, 0.781], [-0.993, 0.537], [-2.214, 0]], v: [[16.26, -11.133], [14.746, -17.334], [15.356, -21.851], [16.968, -25.488], [19.238, -28.271], [21.826, -30.273], [24.463, -31.689], [26.66, -32.617], [26.66, -11.572], [24.146, -9.595], [21.094, -8.789]], c: !0 }, ix: 2 }, nm: "a", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "a", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "g", size: 83, style: "Regular", w: 48.49, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0.098, -0.684], [0, -0.456], [-0.847, -1.709], [-1.465, -0.993], [-1.953, -0.391], [-2.214, 0], [-2.361, 1.139], [-1.53, 2.132], [-0.716, 3.011], [0, 3.743], [0, 0], [0, 0], [0, 0], [0.651, 0.879], [0.928, 0.7], [1.253, 0.423], [1.627, 0], [1.041, -0.13], [1.09, -0.504], [1.057, -0.977], [0.813, -1.725], [0.504, -2.555], [0, -3.645], [0, 0], [-0.505, -2.686], [-0.814, -1.79], [-1.042, -1.057], [-1.074, -0.52], [-1.009, -0.146], [-0.749, 0], [-1.742, 1.025], [-1.107, 1.433], [0, 0], [0.391, -1.302], [0.635, -0.732], [0.846, -0.277], [0.911, 0], [1.074, 1.204], [0, 2.897]], o: [[-0.228, 0.781], [-0.098, 0.684], [0, 2.637], [0.846, 1.709], [1.465, 0.993], [1.953, 0.391], [3.288, 0], [2.36, -1.14], [1.53, -2.132], [0.716, -3.011], [0, 0], [0, 0], [0, 0], [-0.456, -0.879], [-0.652, -0.879], [-0.928, -0.7], [-1.254, -0.423], [-0.814, 0], [-1.042, 0.13], [-1.091, 0.505], [-1.058, 0.977], [-0.814, 1.726], [-0.505, 2.556], [0, 0], [0, 3.809], [0.504, 2.686], [0.813, 1.791], [1.041, 1.058], [1.074, 0.521], [1.009, 0.146], [2.571, 0], [1.741, -1.025], [0, 0], [0, 2.051], [-0.391, 1.302], [-0.635, 0.732], [-0.847, 0.276], [-2.246, 0], [-1.074, -1.205], [0, 0]], v: [[7.666, 4.59], [7.178, 6.787], [7.031, 8.496], [8.301, 15.015], [11.768, 19.067], [16.895, 21.143], [23.145, 21.729], [31.616, 20.02], [37.451, 15.112], [40.82, 7.397], [41.895, -2.734], [41.895, -67.285], [32.275, -67.285], [31.152, -60.645], [29.492, -63.281], [27.124, -65.649], [23.853, -67.334], [19.531, -67.969], [16.748, -67.773], [13.55, -66.821], [10.327, -64.6], [7.52, -60.547], [5.542, -54.126], [4.785, -44.824], [4.785, -27.148], [5.542, -17.407], [7.52, -10.693], [10.303, -6.421], [13.477, -4.053], [16.602, -3.052], [19.238, -2.832], [25.708, -4.37], [29.98, -8.057], [29.98, 2.539], [29.395, 7.568], [27.856, 10.62], [25.635, 12.134], [22.998, 12.549], [18.018, 10.742], [16.406, 4.59]], c: !0 }, ix: 2 }, nm: "g", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.764, 0.342], [0.553, 0.912], [0.309, 1.595], [0, 2.507], [0, 0], [-0.31, 1.579], [-0.554, 0.896], [-0.749, 0.326], [-0.912, 0], [-1.025, -0.96], [-0.619, -1.367], [0, 0], [0.374, -0.586], [0.504, -0.455], [0.635, -0.276], [0.813, 0]], o: [[-0.765, -0.342], [-0.554, -0.911], [-0.31, -1.595], [0, 0], [0, -2.506], [0.309, -1.579], [0.553, -0.895], [0.748, -0.325], [1.465, 0], [1.025, 0.961], [0, 0], [-0.261, 0.619], [-0.375, 0.586], [-0.505, 0.456], [-0.635, 0.277], [-0.912, 0]], v: [[20.923, -12.915], [18.945, -14.795], [17.651, -18.555], [17.188, -24.707], [17.188, -46.826], [17.651, -52.954], [18.945, -56.665], [20.898, -58.496], [23.389, -58.984], [27.124, -57.544], [29.59, -54.053], [29.59, -17.285], [28.638, -15.479], [27.319, -13.916], [25.61, -12.817], [23.438, -12.402]], c: !0 }, ix: 2 }, nm: "g", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "g", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: " ", size: 83, style: "Regular", w: 21.39, data: {}, fFamily: "Fjalla One" }, { ch: "f", size: 83, style: "Regular", w: 30.08, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.326, 0.993], [-0.554, 0.603], [-0.732, 0.261], [-0.814, 0], [-1.367, -0.358], [0, 0], [0.7, 0.195], [0.732, 0.146], [0.732, 0.066], [0.586, 0], [1.774, -0.455], [1.318, -1.286], [0.748, -2.295], [0, -3.645], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1.465], [0.325, -0.993], [0.553, -0.602], [0.732, -0.26], [1.692, 0], [0, 0], [-0.554, -0.293], [-0.7, -0.195], [-0.732, -0.146], [-0.732, -0.065], [-2.051, 0], [-1.775, 0.456], [-1.318, 1.286], [-0.749, 2.295], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[8.008, 0], [20.166, 0], [20.166, -58.447], [29.492, -58.447], [29.492, -67.236], [20.166, -67.236], [20.166, -72.07], [20.654, -75.757], [21.973, -78.149], [23.901, -79.443], [26.221, -79.834], [30.811, -79.297], [30.811, -87.988], [28.931, -88.721], [26.782, -89.233], [24.585, -89.551], [22.607, -89.648], [16.87, -88.965], [12.231, -86.353], [9.131, -80.981], [8.008, -72.07], [8.008, -67.236], [2.197, -67.236], [2.197, -58.447], [8.008, -58.447]], c: !0 }, ix: 2 }, nm: "f", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "f", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "u", size: 83, style: "Regular", w: 49.85, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-2.132, -2.734], [-3.939, 0], [-1.237, 0.26], [-1.189, 0.603], [-1.091, 1.025], [-0.977, 1.53], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.172, -0.684], [1.237, 0], [0.911, 1.156], [0, 2.962], [0, 0], [0, 0]], o: [[0, 5.534], [2.132, 2.734], [1.237, 0], [1.237, -0.261], [1.188, -0.602], [1.09, -1.025], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.945, 1.27], [-1.172, 0.684], [-1.758, 0], [-0.912, -1.155], [0, 0], [0, 0], [0, 0]], v: [[6.445, -15.723], [9.644, -3.32], [18.75, 0.781], [22.461, 0.391], [26.099, -0.903], [29.517, -3.345], [32.617, -7.178], [32.666, -7.178], [33.887, 0], [43.311, 0], [43.311, -67.236], [30.957, -67.236], [30.957, -12.744], [27.783, -9.814], [24.17, -8.789], [20.166, -10.522], [18.799, -16.699], [18.799, -67.236], [6.445, -67.236]], c: !0 }, ix: 2 }, nm: "u", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "u", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }, { ch: "d", size: 83, style: "Regular", w: 48.24, data: { shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-1.237, 0.391], [-0.977, 0.668], [-0.716, 0.847], [-0.554, 0.879], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.684, 0.668], [0.879, 0.537], [1.074, 0.326], [1.204, 0], [0.993, -0.098], [1.09, -0.455], [1.09, -0.96], [0.879, -1.709], [0.537, -2.604], [0, -3.776], [0, 0], [-0.505, -2.669], [-0.814, -1.807], [-1.042, -1.041], [-1.074, -0.52], [-1.009, -0.146], [-0.749, 0]], o: [[1.237, -0.391], [0.977, -0.667], [0.716, -0.846], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.456, -0.684], [-0.684, -0.667], [-0.879, -0.537], [-1.074, -0.325], [-0.652, 0], [-0.993, 0.098], [-1.091, 0.456], [-1.091, 0.961], [-0.879, 1.709], [-0.537, 2.605], [0, 0], [0, 3.809], [0.504, 2.67], [0.813, 1.807], [1.041, 1.042], [1.074, 0.52], [1.009, 0.146], [1.562, 0]], v: [[23.438, 0.195], [26.758, -1.392], [29.297, -3.662], [31.201, -6.25], [32.275, 0], [41.895, 0], [41.895, -88.818], [29.59, -88.818], [29.59, -70.898], [29.98, -62.402], [29.932, -62.354], [28.223, -64.38], [25.879, -66.187], [22.949, -67.48], [19.531, -67.969], [17.065, -67.822], [13.94, -66.992], [10.669, -64.868], [7.715, -60.864], [5.591, -54.395], [4.785, -44.824], [4.785, -23.486], [5.542, -13.77], [7.52, -7.056], [10.303, -2.783], [13.477, -0.439], [16.602, 0.562], [19.238, 0.781]], c: !0 }, ix: 2 }, nm: "d", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.764, 0.342], [0.553, 0.896], [0.309, 1.595], [0, 2.507], [0, 0], [-0.31, 1.579], [-0.554, 0.896], [-0.749, 0.326], [-0.912, 0], [-1.025, -0.96], [-0.619, -1.367], [0, 0], [0.374, -0.586], [0.504, -0.439], [0.635, -0.276], [0.813, 0]], o: [[-0.765, -0.342], [-0.554, -0.895], [-0.31, -1.595], [0, 0], [0, -2.506], [0.309, -1.579], [0.553, -0.895], [0.748, -0.325], [1.465, 0], [1.025, 0.961], [0, 0], [-0.261, 0.619], [-0.375, 0.586], [-0.505, 0.439], [-0.635, 0.277], [-0.912, 0]], v: [[20.923, -9.302], [18.945, -11.157], [17.651, -14.893], [17.188, -21.045], [17.188, -46.826], [17.651, -52.954], [18.945, -56.665], [20.898, -58.496], [23.389, -58.984], [27.124, -57.544], [29.59, -54.053], [29.59, -13.623], [28.638, -11.816], [27.319, -10.278], [25.61, -9.204], [23.438, -8.789]], c: !0 }, ix: 2 }, nm: "d", mn: "ADBE Vector Shape - Group", hd: !1 }], nm: "d", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }] }, fFamily: "Fjalla One" }], __default = { v: v2, fr: fr2, ip: ip2, op: op2, w: w2, h: h2, nm: nm2, ddd: ddd2, assets: assets2, fonts, layers: layers2, markers: markers2, chars };

// route:/Users/gdavis/Project/mainSite/app/root.tsx
var gtag = __toESM(require_gtags()), links = () => [
  {
    rel: "icon",
    href: "/favicon.svg",
    type: "image/svg+xml"
  },
  {
    rel: "stylesheet",
    href: global_default
  },
  { rel: "stylesheet", href: shared_default },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
  }
], loader = async () => ({
  gaTrackingId: process.env.GA_TRACKING_ID,
  nodeEnv: "development"
});
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(TopNav_default, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_lottie_player.default, {
    loop: !0,
    animationData: oops_default,
    play: !0,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    style: { height: "100%" }
  })));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, /* @__PURE__ */ React.createElement(import_react_lottie_player.default, {
        loop: !0,
        animationData: oops_default,
        play: !0,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        style: { height: "100%" }
      }));
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, /* @__PURE__ */ React.createElement(import_react_lottie_player.default, {
        loop: !0,
        animationData: __default,
        play: !0,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        style: { height: "100%" }
      }));
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, message, /* @__PURE__ */ React.createElement("a", {
    "aria-label": "Go back to home page",
    className: "error-back-link",
    href: "/"
  }, "\u21A9 Go Back")));
}
function Document({
  children,
  title
}) {
  let location = (0, import_remix3.useLocation)(), [nodeEnv, setNodeEnv] = (0, import_react2.useState)("");
  return (0, import_react2.useEffect)(() => {
    setNodeEnv("development"), gtag.pageview(location.pathname, "GTM-KC2Z5C7");
  }, [location]), /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix_utils.ExternalScripts, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), nodeEnv === "development" ? null : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("script", {
    id: "gtag-init",
    dangerouslySetInnerHTML: {
      __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GTM-KC2Z5C7', {
                  page_path: window.location.pathname,
                });
              `
    }
  }), /* @__PURE__ */ React.createElement("script", {
    defer: !0,
    src: "https://www.googletagmanager.com/gtag/js?id=GTM-KC2Z5C7"
  })), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(import_react2.Fragment, null, children);
}

// route:/Users/gdavis/Project/mainSite/app/routes/contact/index.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => contact_default2,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta,
  unstable_shouldReload: () => unstable_shouldReload
});
init_react();
var import_react4 = __toESM(require("react")), import_remix5 = __toESM(require_dist());

// app/components/MyMap/index.tsx
init_react();
var import_react3 = __toESM(require("react")), import_api = require("@react-google-maps/api"), import_remix4 = __toESM(require_dist());

// app/images/home/g32.png
var g32_default = "/build/_assets/g32-BVGBIJLV.png";

// app/components/MyMap/index.tsx
var containerStyle = {
  width: "100%",
  height: "100vh"
}, center = {
  lat: 40.7561,
  lng: -74.0035
}, MyMap = (props) => {
  let { customOptions } = props, data = (0, import_remix4.useLoaderData)(), { GOOGLE_MAP_ID, GOOGLE_MAP_API_KEY } = data, { isLoaded } = (0, import_api.useJsApiLoader)({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY
  }), [map, setMap] = (0, import_react3.useState)(null), onLoad = (0, import_react3.useCallback)(function(map2) {
    setMap(map2);
  }, []), onUnmount = (0, import_react3.useCallback)(function(map2) {
    setMap(null);
  }, []), mapOptions = {
    mapTypeControl: !1,
    zoom: 15,
    clickableIcons: !1,
    panControl: !1,
    rotateControl: !1,
    scaleControl: !1,
    streetViewControl: !1,
    zoomControl: !1,
    fullscreenControl: !1,
    mapId: GOOGLE_MAP_ID
  }, modifiedCustomOptions = __spreadProps(__spreadValues({}, customOptions), { mapId: GOOGLE_MAP_ID }), options = customOptions ? modifiedCustomOptions : mapOptions, gText = "M 10.384 3.44 L 10.064 3.44 Q 9.552 2.032 8.312 1.16 A 4.782 4.782 0 0 0 6.046 0.324 A 6.101 6.101 0 0 0 5.376 0.288 Q 3.968 0.288 2.816 0.952 Q 1.664 1.616 1 2.856 A 5.547 5.547 0 0 0 0.415 4.659 A 7.244 7.244 0 0 0 0.336 5.744 A 6.921 6.921 0 0 0 0.492 7.245 A 5.398 5.398 0 0 0 1 8.632 Q 1.664 9.872 2.816 10.536 A 5.015 5.015 0 0 0 5.288 11.2 A 5.921 5.921 0 0 0 5.376 11.2 Q 6.752 11.2 7.896 10.56 Q 9.04 9.92 9.728 8.712 A 5.436 5.436 0 0 0 10.364 6.866 A 6.946 6.946 0 0 0 10.448 5.904 L 5.136 5.904 L 5.136 5.616 L 10.752 5.616 L 10.752 5.744 A 6.888 6.888 0 0 1 10.54 7.482 A 5.794 5.794 0 0 1 10.064 8.72 Q 9.376 10.032 8.152 10.76 A 5.212 5.212 0 0 1 5.806 11.474 A 6.339 6.339 0 0 1 5.376 11.488 A 5.661 5.661 0 0 1 3.649 11.232 A 5.032 5.032 0 0 1 2.6 10.76 Q 1.376 10.032 0.688 8.72 Q 0 7.408 0 5.744 A 6.888 6.888 0 0 1 0.212 4.006 A 5.794 5.794 0 0 1 0.688 2.768 Q 1.376 1.456 2.6 0.728 A 5.212 5.212 0 0 1 4.946 0.015 A 6.339 6.339 0 0 1 5.376 0 A 5.981 5.981 0 0 1 6.958 0.201 A 4.786 4.786 0 0 1 8.496 0.928 A 5.254 5.254 0 0 1 10.342 3.33 A 6.36 6.36 0 0 1 10.384 3.44 Z", gregText = "M 10.384 3.44 L 10.064 3.44 Q 9.552 2.032 8.312 1.16 A 4.782 4.782 0 0 0 6.046 0.324 A 6.101 6.101 0 0 0 5.376 0.288 Q 3.968 0.288 2.816 0.952 Q 1.664 1.616 1 2.856 A 5.547 5.547 0 0 0 0.415 4.659 A 7.244 7.244 0 0 0 0.336 5.744 A 6.921 6.921 0 0 0 0.492 7.245 A 5.398 5.398 0 0 0 1 8.632 Q 1.664 9.872 2.816 10.536 A 5.015 5.015 0 0 0 5.288 11.2 A 5.921 5.921 0 0 0 5.376 11.2 Q 6.752 11.2 7.896 10.56 Q 9.04 9.92 9.728 8.712 A 5.436 5.436 0 0 0 10.364 6.866 A 6.946 6.946 0 0 0 10.448 5.904 L 5.136 5.904 L 5.136 5.616 L 10.752 5.616 L 10.752 5.744 A 6.888 6.888 0 0 1 10.54 7.482 A 5.794 5.794 0 0 1 10.064 8.72 Q 9.376 10.032 8.152 10.76 A 5.212 5.212 0 0 1 5.806 11.474 A 6.339 6.339 0 0 1 5.376 11.488 A 5.661 5.661 0 0 1 3.649 11.232 A 5.032 5.032 0 0 1 2.6 10.76 Q 1.376 10.032 0.688 8.72 Q 0 7.408 0 5.744 A 6.888 6.888 0 0 1 0.212 4.006 A 5.794 5.794 0 0 1 0.688 2.768 Q 1.376 1.456 2.6 0.728 A 5.212 5.212 0 0 1 4.946 0.015 A 6.339 6.339 0 0 1 5.376 0 A 5.981 5.981 0 0 1 6.958 0.201 A 4.786 4.786 0 0 1 8.496 0.928 A 5.254 5.254 0 0 1 10.342 3.33 A 6.36 6.36 0 0 1 10.384 3.44 Z M 36.24 5.328 L 36.24 2.72 L 36.544 2.72 L 36.544 11.68 A 4.611 4.611 0 0 1 36.428 12.737 A 3.628 3.628 0 0 1 36.016 13.768 Q 35.488 14.656 34.616 15.12 Q 33.744 15.584 32.72 15.584 A 5.322 5.322 0 0 1 31.545 15.461 A 3.776 3.776 0 0 1 30.12 14.824 A 3.816 3.816 0 0 1 28.716 12.809 A 4.702 4.702 0 0 1 28.704 12.768 L 29.024 12.768 Q 29.392 13.936 30.328 14.616 Q 31.233 15.274 32.625 15.295 A 6.125 6.125 0 0 0 32.72 15.296 Q 33.712 15.296 34.512 14.848 Q 35.312 14.4 35.776 13.584 A 3.525 3.525 0 0 0 36.195 12.334 A 4.565 4.565 0 0 0 36.24 11.68 L 36.24 8.736 Q 35.888 9.936 34.856 10.704 A 3.849 3.849 0 0 1 33.105 11.416 A 5.126 5.126 0 0 1 32.336 11.472 A 4.83 4.83 0 0 1 31.07 11.312 A 4.074 4.074 0 0 1 30.144 10.936 Q 29.184 10.4 28.656 9.4 A 4.457 4.457 0 0 1 28.215 8.086 A 6.005 6.005 0 0 1 28.128 7.04 A 5.906 5.906 0 0 1 28.237 5.882 A 4.408 4.408 0 0 1 28.656 4.68 Q 29.184 3.68 30.144 3.144 A 4.233 4.233 0 0 1 31.774 2.638 A 5.26 5.26 0 0 1 32.336 2.608 A 4.788 4.788 0 0 1 33.571 2.76 A 3.743 3.743 0 0 1 34.856 3.376 Q 35.888 4.144 36.24 5.328 Z M 25.888 8.432 L 26.208 8.432 Q 25.984 9.792 24.936 10.632 Q 23.888 11.472 22.24 11.472 A 4.668 4.668 0 0 1 20.971 11.305 A 4.01 4.01 0 0 1 20.096 10.944 Q 19.152 10.416 18.616 9.408 Q 18.08 8.4 18.08 7.04 A 5.815 5.815 0 0 1 18.198 5.843 A 4.412 4.412 0 0 1 18.616 4.672 A 3.803 3.803 0 0 1 19.572 3.492 A 3.646 3.646 0 0 1 20.096 3.136 A 4.168 4.168 0 0 1 21.763 2.63 A 5.126 5.126 0 0 1 22.24 2.608 A 4.975 4.975 0 0 1 23.276 2.711 A 3.652 3.652 0 0 1 24.4 3.144 A 3.78 3.78 0 0 1 25.329 3.913 A 3.396 3.396 0 0 1 25.752 4.528 Q 26.208 5.376 26.208 6.32 Q 26.208 6.761 26.199 7.033 A 7.23 7.23 0 0 1 26.192 7.184 L 18.4 7.184 Q 18.416 8.512 18.952 9.408 A 3.609 3.609 0 0 0 19.739 10.34 A 3.289 3.289 0 0 0 20.352 10.744 A 4.086 4.086 0 0 0 22.176 11.184 A 4.733 4.733 0 0 0 22.24 11.184 A 4.766 4.766 0 0 0 23.406 11.048 A 3.604 3.604 0 0 0 24.688 10.448 A 3.006 3.006 0 0 0 25.885 8.452 A 3.91 3.91 0 0 0 25.888 8.432 Z M 16.8 2.528 L 16.8 2.88 L 16.656 2.88 Q 15.296 2.88 14.344 3.672 A 2.43 2.43 0 0 0 13.608 4.767 Q 13.466 5.173 13.418 5.674 A 5.686 5.686 0 0 0 13.392 6.224 L 13.392 11.36 L 13.072 11.36 L 13.072 2.72 L 13.392 2.72 L 13.392 4.816 A 2.865 2.865 0 0 1 14.026 3.514 Q 14.9 2.528 16.8 2.528 Z M 36.24 7.04 Q 36.24 5.808 35.736 4.872 Q 35.232 3.936 34.344 3.416 A 3.821 3.821 0 0 0 32.63 2.905 A 4.636 4.636 0 0 0 32.336 2.896 A 4.757 4.757 0 0 0 31.295 3.005 A 3.655 3.655 0 0 0 30.28 3.392 Q 29.408 3.888 28.928 4.824 A 4.248 4.248 0 0 0 28.53 6.039 A 5.815 5.815 0 0 0 28.448 7.04 Q 28.448 8.32 28.928 9.256 Q 29.408 10.192 30.28 10.688 A 3.742 3.742 0 0 0 31.542 11.123 A 4.953 4.953 0 0 0 32.336 11.184 A 4.14 4.14 0 0 0 33.584 11.001 A 3.686 3.686 0 0 0 34.344 10.664 Q 35.232 10.144 35.736 9.208 A 4.187 4.187 0 0 0 36.188 7.799 A 5.397 5.397 0 0 0 36.24 7.04 Z M 18.4 6.896 L 25.92 6.896 A 5.919 5.919 0 0 0 25.931 6.542 Q 25.931 6.066 25.849 5.651 A 3.277 3.277 0 0 0 25.496 4.672 A 3.306 3.306 0 0 0 24.611 3.642 A 3.189 3.189 0 0 0 24.12 3.336 Q 23.248 2.896 22.24 2.896 Q 21.216 2.896 20.352 3.336 A 3.388 3.388 0 0 0 19.056 4.508 A 4.107 4.107 0 0 0 18.952 4.672 A 3.695 3.695 0 0 0 18.529 5.746 Q 18.423 6.208 18.404 6.742 A 6.532 6.532 0 0 0 18.4 6.896 Z";
  return isLoaded ? /* @__PURE__ */ import_react3.default.createElement(import_api.GoogleMap, {
    mapContainerStyle: containerStyle,
    center,
    options,
    onLoad,
    onUnmount
  }, /* @__PURE__ */ import_react3.default.createElement(import_api.Marker, {
    icon: g32_default,
    animation: google.maps.Animation.DROP,
    position: center,
    title: "I'm from NYC!"
  })) : /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "defaultMapImg",
    "aria-label": "gregory location"
  });
}, MyMap_default = MyMap;

// app/utils/sendEmail.tsx
init_react();
var import_browser = __toESM(require("@emailjs/browser")), import_sweetalert2 = __toESM(require("sweetalert2")), sendEmail = async (options) => {
  let { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_API_KEY } = options;
  try {
    return (await import_browser.default.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, ".form-element", EMAIL_API_KEY)).text === "OK" ? import_sweetalert2.default.fire({
      title: "Thank you!",
      text: "I received your message and will get back to you as soon as possible.",
      icon: "success",
      background: "#1696e0",
      color: "#fff"
    }) : import_sweetalert2.default.fire({
      title: "Oops...",
      text: "Something went wrong!",
      background: "#1696e0",
      color: "#fff",
      icon: "error",
      footer: "Try again."
    });
  } catch {
    return import_sweetalert2.default.fire({
      title: "Yikes...",
      text: "Something went wrong!",
      background: "#1696e0",
      color: "#fff",
      icon: "error",
      footer: "Try again."
    });
  }
}, sendEmail_default = sendEmail;

// app/components/SocialFooter/index.tsx
init_react();
var import_react_simple_icons = require("@icons-pack/react-simple-icons"), SocialFooter = () => /* @__PURE__ */ React.createElement("div", {
  className: "social-footer"
}, /* @__PURE__ */ React.createElement("div", {
  className: "social-footer-item"
}, /* @__PURE__ */ React.createElement("a", {
  href: "https://www.linkedin.com/in/gregdavisdeveloper/",
  target: "_blank"
}, /* @__PURE__ */ React.createElement(import_react_simple_icons.Linkedin, null))), /* @__PURE__ */ React.createElement("div", {
  className: "social-footer-item"
}, /* @__PURE__ */ React.createElement("a", {
  href: "https://github.com/davisgreg1",
  target: "_blank"
}, /* @__PURE__ */ React.createElement(import_react_simple_icons.Github, null))), /* @__PURE__ */ React.createElement("div", {
  className: "social-footer-item"
}, /* @__PURE__ */ React.createElement("a", {
  href: "https://www.facebook.com/moneycaptainapp",
  target: "_blank"
}, /* @__PURE__ */ React.createElement(import_react_simple_icons.Facebook, null)))), SocialFooter_default = SocialFooter;

// app/styles/contact.css
var contact_default = "/build/_assets/contact-PTTCLVEY.css";

// route:/Users/gdavis/Project/mainSite/app/routes/contact/index.tsx
var links2 = () => [
  {
    rel: "stylesheet",
    href: contact_default
  }
], meta = () => ({
  title: "Contact - Greg | FullStack Developer",
  description: "Contact Greg"
});
function loader2() {
  return {
    GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY
  };
}
var unstable_shouldReload = () => !1, action = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), subject = formData.get("subject"), message = formData.get("message"), errors = {};
  return name || (errors.name = !0), email || (errors.email = !0), subject || (errors.subject = !0), message || (errors.message = !0), Object.keys(errors).length ? (0, import_remix5.json)(errors, { status: 422 }) : (0, import_remix5.redirect)("/contact");
}, Contact = () => {
  let errors = (0, import_remix5.useActionData)(), transition = (0, import_remix5.useTransition)(), loaderData = (0, import_remix5.useLoaderData)(), { EMAIL_API_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } = loaderData, options = {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY
  }, { state } = transition, [isDisabled, setIsDisabled] = (0, import_react4.useState)(!0), [name, setName] = (0, import_react4.useState)(""), [email, setEmail] = (0, import_react4.useState)(""), [subject, setSubject] = (0, import_react4.useState)(""), [message, setMessage] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    setIsDisabled(!(name && email && subject && message));
  }, [name, email, subject, message]), (0, import_react4.useEffect)(() => {
    transition.state === "submitting" && clearForm();
  }, [transition]);
  let portfolioBackImgStyle = {
    backgroundColor: "#ecf0f3",
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex"
  }, clearForm = () => {
    setName(""), setEmail(""), setSubject(""), setMessage("");
  }, handleOnInputChange = (e, inputName) => {
    let value = e.target.value;
    inputName === "name" && setName(value), inputName === "email" && setEmail(value), inputName === "subject" && setSubject(value), inputName === "message" && setMessage(value);
  }, text = !email || !subject || !message || !name ? "Complete the form" : transition.state === "submitting" ? "Sending..." : transition.state === "loading" ? "Thank you!" : "Send message";
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ import_react4.default.createElement("section", {
    id: "section-contactMe",
    className: "section-content section section-child ",
    style: portfolioBackImgStyle
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "contact-container"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-container"
  }, /* @__PURE__ */ import_react4.default.createElement(import_remix5.Form, {
    method: "post",
    className: "form-element",
    onSubmit: () => sendEmail_default(options)
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "contact-div"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "title"
  }, "Contact me"), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "fields"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-name"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    type: "username",
    className: "user-input",
    name: "name",
    value: name,
    placeholder: name || "Name",
    onChange: (e) => handleOnInputChange(e, "name"),
    autoFocus: !0
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-email"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    type: "email",
    name: "email",
    className: "user-input",
    value: email,
    placeholder: email || "Email",
    onChange: (e) => handleOnInputChange(e, "email")
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-subject"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    type: "username",
    name: "subject",
    className: "user-input",
    value: subject,
    placeholder: subject || "Subject",
    onChange: (e) => handleOnInputChange(e, "subject")
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "form-message"
  }, /* @__PURE__ */ import_react4.default.createElement("textarea", {
    id: "message",
    className: "user-input",
    name: "message",
    rows: 3,
    value: message,
    placeholder: message || "Email body",
    onChange: (e) => handleOnInputChange(e, "message")
  }))), /* @__PURE__ */ import_react4.default.createElement("button", {
    className: isDisabled ? "send-msg-btn-disabled" : "send-msg-btn",
    disabled: isDisabled,
    type: "submit"
  }, /* @__PURE__ */ import_react4.default.createElement("span", null, text))))), /* @__PURE__ */ import_react4.default.createElement(MyMap_default, {
    customOptions: {
      mapTypeControl: !1,
      zoom: 15,
      clickableIcons: !1,
      panControl: !1,
      rotateControl: !1,
      scaleControl: !1,
      streetViewControl: !1,
      zoomControl: !1,
      fullscreenControl: !1
    }
  }))), /* @__PURE__ */ import_react4.default.createElement("footer", {
    className: "contact-footer-container"
  }, /* @__PURE__ */ import_react4.default.createElement(SocialFooter_default, null))));
}, contact_default2 = Contact;

// route:/Users/gdavis/Project/mainSite/app/routes/skills/index.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => skills_default2,
  links: () => links3,
  meta: () => meta2
});
init_react();

// app/components/CloudTagComp/index.tsx
init_react();
var import_react5 = __toESM(require("react")), import_react_icon_cloud = require("react-icon-cloud"), import_react_responsive = require("react-responsive"), import_icons = require("simple-icons/icons"), CloudTagComp = (props) => {
  let { ssrID, skillsRoute } = props, icons = [
    import_icons.siJavascript,
    import_icons.siTypescript,
    import_icons.siNextdotjs,
    import_icons.siNodedotjs,
    import_icons.siCss3,
    import_icons.siHtml5,
    import_icons.siReact,
    import_icons.siGit,
    import_icons.siExpress,
    import_icons.siPostgresql,
    import_icons.siAmazonaws,
    import_icons.siJest,
    import_icons.siVisualstudiocode,
    import_icons.siSequelize,
    import_icons.siJson,
    import_icons.siTrello,
    import_icons.siJquery,
    import_icons.siNpm,
    import_icons.siJira,
    import_icons.siRedis,
    import_icons.siMacos
  ], [skillSelectedDescription, setSkillSelectedDescription] = (0, import_react5.useState)("Select Skill to see a description"), isDesktopOrLaptop = (0, import_react_responsive.useMediaQuery)({ minWidth: 1241 }), renderSkillDescription = (skill) => {
    switch (skill) {
      case "JavaScript":
        return `Javascript is my primary language. I have experience with ES6,
        TypeScript, React, Redux, Node.js, Express, and many other
        technologies.
        `;
      case "Jest":
        return "Jest is a testing framework for JavaScript I use. Lately, I find myself really enjoying react-testing-library to test my components.";
      case "Visual Studio Code":
        return "Visual Studio Code is a code editor that I enjoy using daily.";
      case "JSON":
        return "JSON is a data format that I use daily.";
      case "Trello":
        return "Trello is a project management tool that I use for my team over at Money Captain.";
      case "jQuery":
        return "JQuery is a JavaScript library. Although I have much experience with it, I don't use it as much lately.";
      case "npm":
        return "NPM is a package manager for JavaScript. I use it daily. I also use yarn for managing dependencies.";
      case "Jira":
        return "Jira is a project management tool that I use daily for my main job over at AutoZone.com.";
      case "Redis":
        return "Redis is a key-value store. I use it for caching data.";
      case "macOS":
        return "MacOS is a platform that I use daily. Windows is OK, but I prefer macOS.";
      case "React":
        return "React is a JavaScript library that I use daily.";
      case "CSS3":
        return "CSS3 is a style sheet language. It's pretty much required to use CSS if you are a dev.";
      case "HTML5":
        return "HTML5 is a markup language. One may not have a website without HTML.";
      case "Git":
        return "Git is a version control system that I use daily. I use GitLab and GitHub.";
      case "Express":
        return "Express is a web framework that I use daily. I really enjoy using it for those full stack projects.";
      case "PostgreSQL":
        return "PostgreSQL is a database that I have a lot of experience with. I recently started trying out Sequelize to help work faster.";
      case "Amazon AWS":
        return "Amazon AWS is a cloud platform that I use with my personal projects.";
      case "TypeScript":
        return "TypeScript is a JavaScript library. It's awesome. We use it over at AutoZone.com";
      case "Node.js":
        return "Node.js is a JavaScript runtime. It's pretty amazing with everything it has to offer.";
      case "Sequelize":
        return "Sequelize is a database ORM. I just recently started using it and it's already positively impacted my work efficiency.";
      case "Next.js":
        return "Next.js is a web framework that I use daily. I built this website with Remix, but NextJS would have been just as much fun to use.";
    }
  }, makeProps = () => ({
    root: {
      top: 0,
      left: 0,
      right: 0,
      height: "200vh",
      position: "absolute"
    },
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40,
        backgroundImage: "radial-gradient( circle, rgb(11, 34, 238) 0%, rgb(15, 120, 181) 100%, rgb(17, 216, 251) 50% )",
        borderRadius: "777px"
      }
    },
    options: {
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: !1,
      tooltip: isDesktopOrLaptop && !skillsRoute ? "div" : "native",
      tooltipDelay: 0,
      wheelZoom: !1,
      radiusX: 0.7,
      radiusY: 0.7,
      radiusZ: 0.7,
      maxSpeed: 0.06,
      tooltipClass: "icon-title",
      freezeActive: !!skillsRoute
    }
  }), makeIcons = () => icons.map((icon) => {
    let description = renderSkillDescription(icon.title);
    return (0, import_react_icon_cloud.renderSimpleIcon)({
      icon,
      minContrastRatio: 3,
      bgHex: "#fff",
      size: 42,
      fallbackHex: "#fff",
      aProps: {
        href: void 0,
        target: void 0,
        rel: void 0,
        onClick: (e) => {
          e.preventDefault(), skillsRoute && setSkillSelectedDescription(description);
        }
      }
    });
  }), constructedProps = makeProps(), cloudIcons = makeIcons();
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, skillsRoute && /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "skills-description"
  }, skillSelectedDescription), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "cloudTagComp-container"
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_icon_cloud.Cloud, {
    containerProps: constructedProps.containerProps,
    options: constructedProps.options,
    id: ssrID
  }, cloudIcons)));
}, CloudTagComp_default = CloudTagComp;

// route:/Users/gdavis/Project/mainSite/app/routes/skills/index.tsx
var import_icons2 = require("simple-icons/icons");

// app/styles/skills.css
var skills_default = "/build/_assets/skills-ER6WAQBQ.css";

// route:/Users/gdavis/Project/mainSite/app/routes/skills/index.tsx
var meta2 = () => ({
  title: "Skills - Greg | FullStack Developer",
  description: "Greg's Skills"
}), links3 = () => [
  {
    rel: "stylesheet",
    href: skills_default
  }
], Skills = () => {
  let icons = [
    import_icons2.siJavascript,
    import_icons2.siTypescript,
    import_icons2.siNextdotjs,
    import_icons2.siNodedotjs,
    import_icons2.siCss3,
    import_icons2.siHtml5,
    import_icons2.siReact,
    import_icons2.siGit,
    import_icons2.siExpress,
    import_icons2.siPostgresql,
    import_icons2.siAmazonaws,
    import_icons2.siJest,
    import_icons2.siVisualstudiocode,
    import_icons2.siSequelize,
    import_icons2.siJson,
    import_icons2.siTrello,
    import_icons2.siJquery,
    import_icons2.siNpm,
    import_icons2.siJira,
    import_icons2.siRedis,
    import_icons2.siMacos
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "content",
    id: "cloud-container"
  }, /* @__PURE__ */ React.createElement(CloudTagComp_default, {
    ssrID: "skillsSSRCloud",
    skillsRoute: !0
  }));
}, skills_default2 = Skills;

// route:/Users/gdavis/Project/mainSite/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default2,
  links: () => links4,
  meta: () => meta3
});
init_react();
var import_react_typist = __toESM(require("react-typist"));

// app/styles/about.css
var about_default = "/build/_assets/about-TWCU74E7.css";

// route:/Users/gdavis/Project/mainSite/app/routes/about/index.tsx
var import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2");
import_chart.Chart.register(import_chart.CategoryScale, import_chart.LinearScale, import_chart.BarElement, import_chart.Title, import_chart.Tooltip, import_chart.Legend);
var links4 = () => [
  {
    rel: "stylesheet",
    href: about_default
  }
], meta3 = () => ({
  title: "About - Greg | FullStack Developer",
  description: "About Greg"
}), About = () => /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement("div", {
  className: "content"
}, /* @__PURE__ */ React.createElement("div", {
  className: "skill-bar-container"
}, /* @__PURE__ */ React.createElement(import_react_chartjs_2.Bar, {
  options: {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: !0,
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: !0,
        text: "About Me"
      }
    }
  },
  data: {
    labels: ["Front End", "Back End", "React JS", "Design"],
    datasets: [
      {
        label: "Rating",
        data: [87, 79, 88, 60, 100],
        borderColor: "rgba(15, 120, 181)",
        backgroundColor: "rgba(15, 120, 181,0.2)"
      }
    ]
  },
  datasetIdKey: "abks"
})), /* @__PURE__ */ React.createElement("div", {
  className: "skill-text-container"
}, /* @__PURE__ */ React.createElement(import_react_typist.default, {
  cursor: {
    show: !1,
    blink: !0,
    element: "_",
    hideWhenDone: !0,
    hideWhenDoneDelay: 1e3
  }
}, "I'm a software engineer with a passion for building products that are:", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
  ms: 500
}), " accessible,", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
  ms: 500
}), " performant,", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
  ms: 500
}), " intuitive,", " ", " and", /* @__PURE__ */ React.createElement(import_react_typist.default.Delay, {
  ms: 500
}), " user-friendly.")))), about_default2 = About;

// route:/Users/gdavis/Project/mainSite/app/routes/blogs/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  loader: () => loader3,
  meta: () => meta4
});
init_react();
var import_snarkdown = __toESM(require("snarkdown")), import_react_router_dom = require("react-router-dom"), import_remix6 = __toESM(require_dist());

// app/components/KofiButton/index.tsx
init_react();
var import_kofi_button = __toESM(require("kofi-button")), StyledKofiButton = (props) => {
  let { color, title } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "kofi-btn"
  }, /* @__PURE__ */ React.createElement(import_kofi_button.default, {
    color,
    title: title || "Buy me a coffee",
    kofiID: "davisgreg1"
  }));
};

// route:/Users/gdavis/Project/mainSite/app/routes/blogs/$slug.tsx
var import_dayjs = __toESM(require("dayjs"));

// app/utils/fetchContentfulData.tsx
init_react();
var contentful = require("contentful"), fetchContentfulData = async (CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN) => {
  let client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_TOKEN
  });
  try {
    return await client.getEntries().then(function(entries) {
      return entries.items.map((item) => ({
        fields: item.fields,
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt ?? "",
        id: item.sys.id
      }));
    });
  } catch (error) {
    console.error("GREG LOOK!  ~ file: index.tsx ~ line 87 ~ useEffect ~ error", error);
  }
};

// app/utils/isEmptyObj.tsx
init_react();
var isEmptyObj = (obj) => {
  for (let prop in obj)
    if (obj.hasOwnProperty(prop))
      return !1;
  return !0;
}, isEmptyObj_default = isEmptyObj;

// route:/Users/gdavis/Project/mainSite/app/routes/blogs/$slug.tsx
var meta4 = () => ({
  title: "Blog | FullStack Developer",
  description: "Greg's Blogs"
}), loader3 = async ({ params }) => {
  let blogs = await fetchContentfulData(process.env.CONTENTFUL_SPACE_ID, process.env.CONTENTFUL_DELIVERY_TOKEN);
  return {
    slug: params.slug,
    blogs
  };
}, BlogSlug = () => {
  var _a, _b, _c;
  let navigate = (0, import_react_router_dom.useNavigate)(), data = (0, import_remix6.useLoaderData)(), { blogs, slug } = data, specificBlog = isEmptyObj_default(blogs) ? {} : blogs == null ? void 0 : blogs.filter((blog) => blog.id === slug)[0], contentText = (0, import_snarkdown.default)((_a = specificBlog.fields) == null ? void 0 : _a.body), updatedAvailable = specificBlog == null ? void 0 : specificBlog.updatedAt;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "uniq-blog-container"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => navigate(-1),
    className: "uniq-blog-goBackBtn"
  }, " ", "\u21A9 Go back"), /* @__PURE__ */ React.createElement("div", {
    className: "uniq-blog-header"
  }, /* @__PURE__ */ React.createElement("h1", {
    tabIndex: 0,
    "aria-label": (_b = specificBlog == null ? void 0 : specificBlog.fields) == null ? void 0 : _b.title,
    className: "uniq-blog-sub"
  }, (_c = specificBlog == null ? void 0 : specificBlog.fields) == null ? void 0 : _c.title), /* @__PURE__ */ React.createElement("h4", {
    tabIndex: 0,
    "aria-label": "Author: Gregory Davis",
    className: "uniq-blog-sub"
  }, "By: Gregory Davis"), updatedAvailable ? /* @__PURE__ */ React.createElement("h5", {
    tabIndex: 0,
    "aria-label": "content updated",
    className: "uniq-blog-sub"
  }, "Last updated:", " ", (0, import_dayjs.default)(specificBlog.updatedAt).format("MMMM DD, YYYY")) : /* @__PURE__ */ React.createElement("h5", {
    tabIndex: 0,
    "aria-label": "content created",
    className: "uniq-blog-sub"
  }, "Created: ", (0, import_dayjs.default)(specificBlog == null ? void 0 : specificBlog.createdAt).format("MMMM DD, YYYY"))), /* @__PURE__ */ React.createElement("div", {
    className: "uniq-blog-content-container"
  }, /* @__PURE__ */ React.createElement("div", {
    tabIndex: 0,
    "aria-label": "blog content",
    className: "uniq-blog-content",
    dangerouslySetInnerHTML: { __html: contentText }
  }), /* @__PURE__ */ React.createElement(StyledKofiButton, {
    color: "0D47A1"
  }))));
}, slug_default = BlogSlug;

// route:/Users/gdavis/Project/mainSite/app/routes/blogs/index.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => blogs_default2,
  links: () => links5,
  loader: () => loader4,
  meta: () => meta5
});
init_react();
var import_remix8 = __toESM(require_dist());

// app/components/BlogWall/index.tsx
init_react();
var import_react6 = __toESM(require("react"));

// app/components/Card/index.tsx
init_react();
var import_remix7 = __toESM(require_dist()), import_snarkdown2 = __toESM(require("snarkdown"));

// app/utils/ellipsisText.tsx
init_react();
var ellipseText = (value, length) => {
  let hasImg = value.includes("<img src="), hasShortText = value.length < 200;
  return hasImg && hasShortText ? `${value.substring(0, 50).trim()}...` : value && value.length <= length ? value : `${value.substring(0, length).trim()}...`;
}, ellipsisText_default = ellipseText;

// app/components/Card/index.tsx
var import_dayjs2 = __toESM(require("dayjs")), Card = (props) => {
  let { blog, blogPage } = props, content = (0, import_snarkdown2.default)(blog.fields.body), contentToDisplay = blogPage ? ellipsisText_default(content, 300) : ellipsisText_default(content, 200);
  return /* @__PURE__ */ React.createElement(import_remix7.Link, {
    "aria-describedby": "contentToDisplay",
    to: blogPage ? blog.id : `/blogs/${blog.id}`,
    className: "card-link"
  }, /* @__PURE__ */ React.createElement("div", {
    className: blogPage ? " individual-card-container container-color-black" : "individual-card-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "individual-card-title"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "card-title-text"
  }, blog.fields.title)), /* @__PURE__ */ React.createElement("div", {
    id: "contentToDisplay",
    className: "individual-card-content",
    dangerouslySetInnerHTML: { __html: contentToDisplay }
  }), /* @__PURE__ */ React.createElement("footer", {
    className: "individual-card-footer"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "individual-card-footer-text"
  }, "Greg Davis ", /* @__PURE__ */ React.createElement("span", {
    className: "individual-card-footer-span"
  }, "|"), " ", (0, import_dayjs2.default)(blog.createdAt).format("MMMM DD, YYYY")))));
}, Card_default = Card;

// app/components/BlogWall/index.tsx
var import_react_carousel = require("@trendyol-js/react-carousel"), import_ai = require("react-icons/ai"), BlogWall = (props) => {
  let { blogs, blogPage, isMobile } = props;
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "blog-card-container"
  }, blogs.length <= 0 ? /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, "Blogs Coming Soon!") : isMobile ? /* @__PURE__ */ import_react6.default.createElement(import_react_carousel.Carousel, {
    responsive: !0,
    leftArrow: /* @__PURE__ */ import_react6.default.createElement("div", {
      className: "carousel-arrow"
    }, " ", /* @__PURE__ */ import_react6.default.createElement(import_ai.AiFillLeftCircle, null), " "),
    rightArrow: /* @__PURE__ */ import_react6.default.createElement("div", {
      className: "carousel-arrow"
    }, " ", /* @__PURE__ */ import_react6.default.createElement(import_ai.AiFillRightCircle, null), " "),
    swipeOn: 0.25,
    transition: 0.5,
    show: 1,
    slide: 1,
    swiping: !0
  }, blogs.map((blog, idx) => /* @__PURE__ */ import_react6.default.createElement(Card_default, {
    blogPage,
    key: blog.id,
    blog
  }))) : blogs.map((blog, idx) => /* @__PURE__ */ import_react6.default.createElement(Card_default, {
    blogPage,
    key: blog.id,
    blog
  })));
}, BlogWall_default = BlogWall;

// app/styles/blogs.css
var blogs_default = "/build/_assets/blogs-CDXQUP3U.css";

// route:/Users/gdavis/Project/mainSite/app/routes/blogs/index.tsx
var links5 = () => [
  {
    rel: "stylesheet",
    href: blogs_default
  }
], meta5 = () => ({
  title: "Blogs - Greg | FullStack Developer",
  description: "Greg's Blogs"
}), loader4 = async () => ({
  blogs: await fetchContentfulData(process.env.CONTENTFUL_SPACE_ID, process.env.CONTENTFUL_DELIVERY_TOKEN)
}), Blogs = () => {
  let loaderData = (0, import_remix8.useLoaderData)(), { blogs } = loaderData;
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog-route-container"
  }, /* @__PURE__ */ React.createElement(BlogWall_default, {
    blogPage: !0,
    blogs
  }));
}, blogs_default2 = Blogs;

// route:/Users/gdavis/Project/mainSite/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => IndexRoute,
  links: () => links6,
  loader: () => loader5,
  meta: () => meta6,
  unstable_shouldReload: () => unstable_shouldReload2
});
init_react();
var import_react11 = __toESM(require("react")), import_remix10 = __toESM(require_dist()), import_react_responsive3 = require("react-responsive");

// app/styles/index.css
var styles_default = "/build/_assets/index-IBUKNIO6.css";

// route:/Users/gdavis/Project/mainSite/app/routes/index.tsx
var import_react_tsparticles = __toESM(require("react-tsparticles"));

// app/particlesConfig.tsx
init_react();
var particlesConfig = {
  autoPlay: !0,
  background: {
    color: {
      value: "#0d47a1"
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: !1
  },
  fullScreen: {
    enable: !0,
    zIndex: 1
  },
  detectRetina: !0,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: !0,
        mode: "push"
      },
      onDiv: {
        selectors: [],
        enable: !1,
        mode: [],
        type: "circle"
      },
      onHover: {
        enable: !0,
        mode: "repulse",
        parallax: {
          enable: !1,
          force: 60,
          smooth: 10
        }
      },
      resize: !0
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: !1,
        opacity: 0.8,
        size: 40
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        links: {
          blink: !1,
          consent: !1,
          opacity: 1
        }
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff"
            },
            stop: {
              value: "#000000"
            }
          },
          radius: 1e3
        },
        shadow: {
          color: {
            value: "#000000"
          },
          length: 2e3
        }
      },
      push: {
        default: !0,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 113,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 19,
        easing: "ease-out-quad"
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        pauseOnStop: !1,
        quantity: 1
      }
    }
  },
  manualParticles: [],
  motion: {
    disable: !1,
    reduce: {
      factor: 4,
      value: !0
    }
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: !1,
          minimumValue: 0.1
        },
        value: 1
      },
      vertical: {
        random: {
          enable: !1,
          minimumValue: 0.1
        },
        value: 1
      }
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: !1,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: !1,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      enable: !1,
      mode: "bounce",
      overlap: {
        enable: !0,
        retries: 0
      }
    },
    color: {
      value: "#ffffff",
      animation: {
        h: {
          count: 0,
          enable: !1,
          offset: 0,
          speed: 1,
          sync: !0
        },
        s: {
          count: 0,
          enable: !1,
          offset: 0,
          speed: 1,
          sync: !0
        },
        l: {
          count: 0,
          enable: !1,
          offset: 0,
          speed: 1,
          sync: !0
        }
      }
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: !1,
            minimumValue: 0
          },
          value: 3
        },
        rate: {
          random: {
            enable: !1,
            minimumValue: 0
          },
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: !0
      }
    },
    gradient: [],
    groups: {},
    life: {
      count: 0,
      delay: {
        random: {
          enable: !1,
          minimumValue: 0
        },
        value: 0,
        sync: !1
      },
      duration: {
        random: {
          enable: !1,
          minimumValue: 1e-4
        },
        value: 0,
        sync: !1
      }
    },
    links: {
      blink: !1,
      color: {
        value: "#ffffff"
      },
      consent: !1,
      distance: 150,
      enable: !0,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "#00ff00"
        },
        enable: !1
      },
      triangles: {
        enable: !1,
        frequency: 1
      },
      width: 1,
      warp: !1
    },
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: !1,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: !0,
      gravity: {
        acceleration: 9.81,
        enable: !1,
        inverse: !1,
        maxSpeed: 50
      },
      path: {
        clamp: !0,
        delay: {
          random: {
            enable: !1,
            minimumValue: 0
          },
          value: 0
        },
        enable: !1,
        options: {}
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      },
      random: !1,
      size: !1,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: !1
      },
      straight: !1,
      trail: {
        enable: !1,
        length: 10,
        fillColor: {
          value: "#000000"
        }
      },
      vibrate: !1,
      warp: !1
    },
    number: {
      density: {
        enable: !0,
        area: 800,
        factor: 1e3
      },
      limit: 0,
      value: 80
    },
    opacity: {
      random: {
        enable: !1,
        minimumValue: 0.1
      },
      value: {
        min: 0.1,
        max: 0.5
      },
      animation: {
        count: 0,
        enable: !0,
        speed: 1,
        sync: !1,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: !1,
        speed: 1,
        sync: !1
      },
      enable: !1,
      opacity: 1,
      rotation: {
        random: {
          enable: !1,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    reduceDuplicates: !1,
    repulse: {
      random: {
        enable: !1,
        minimumValue: 0
      },
      value: 0,
      enabled: !1,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    },
    roll: {
      darken: {
        enable: !1,
        value: 0
      },
      enable: !1,
      enlighten: {
        enable: !1,
        value: 0
      },
      mode: "vertical",
      speed: 25
    },
    rotate: {
      random: {
        enable: !1,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: !1,
        speed: 0,
        sync: !1
      },
      direction: "clockwise",
      path: !1
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000"
      },
      enable: !1,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {
        character: {
          value: ["w", "e", "l", "c", "o", "m", "e"],
          font: "Poppins",
          style: "",
          weight: "400",
          fill: !0
        },
        char: {
          value: ["w", "e", "l", "c", "o", "m", "e"],
          font: "Poppins",
          style: "",
          weight: "400",
          fill: !0
        }
      },
      type: "char"
    },
    size: {
      random: {
        enable: !1,
        minimumValue: 1
      },
      value: 16,
      animation: {
        count: 0,
        enable: !1,
        speed: 10,
        sync: !1,
        destroy: "none",
        startValue: "random",
        minimumValue: 10
      }
    },
    stroke: {
      width: 1,
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: !1,
            offset: 0,
            speed: 1,
            sync: !0
          },
          s: {
            count: 0,
            enable: !1,
            offset: 0,
            speed: 1,
            sync: !0
          },
          l: {
            count: 0,
            enable: !1,
            offset: 0,
            speed: 1,
            sync: !0
          }
        }
      }
    },
    tilt: {
      random: {
        enable: !1,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: !1,
        speed: 0,
        sync: !1
      },
      direction: "clockwise",
      enable: !1
    },
    twinkle: {
      lines: {
        enable: !1,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: !1,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: !1,
      speed: 50
    },
    zIndex: {
      random: {
        enable: !1,
        minimumValue: 0
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1
    }
  },
  pauseOnBlur: !0,
  pauseOnOutsideViewport: !0,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100
}, particlesConfig_default = particlesConfig;

// app/components/MyFlipBook/index.tsx
init_react();
var import_react10 = require("react"), import_react_lazy_load_image_component = require("react-lazy-load-image-component"), import_react_lottie_player2 = __toESM(require("react-lottie-player")), import_remix9 = __toESM(require_dist()), import_react_pageflip = __toESM(require("react-pageflip")), import_react_responsive2 = require("react-responsive");

// app/components/Page/index.tsx
init_react();
var import_react7 = __toESM(require("react")), Page = import_react7.default.forwardRef((props, ref) => {
  let { number, pageHeader, isSlides, children } = props, strToNumber = parseInt(number), isOddPage = strToNumber % 2 !== 0;
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `${isSlides ? "bookPage-slides bookPage" : "bookPage"} ${isOddPage ? "leftPage" : "rightPage"}`,
    ref
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "page-content-container"
  }, /* @__PURE__ */ import_react7.default.createElement("h1", null, pageHeader), /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, children), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `page-content-page-number ${isOddPage ? "page-number-flexStart" : "page-number-flexEnd"}`
  }, strToNumber - 1 === 0 || strToNumber === 6 ? "" : `${strToNumber - 1}.`)));
}), Page_default = Page;

// app/components/PageCover/index.tsx
init_react();
var import_react8 = __toESM(require("react"));

// app/images/home/myHorse.png
var myHorse_default = "/build/_assets/myHorse-MILBP5MW.png";

// app/components/PageCover/index.tsx
var PageCover = import_react8.default.forwardRef((props, ref) => {
  let { number, backCover, frontCover, children } = props, myHorseImgStyle = {
    backgroundImage: `url(${myHorse_default})`,
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex"
  };
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    className: `${backCover ? "back-cover" : ""} ${frontCover ? "front-cover" : ""} page-cover page`,
    style: myHorseImgStyle,
    ref,
    "data-density": "hard"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: `${backCover ? "shimmer" : ""} ${frontCover ? "shimmer" : ""} page-content`
  }, /* @__PURE__ */ import_react8.default.createElement("h2", null, props.children)));
}), PageCover_default = PageCover;

// app/components/MySlides/index.tsx
init_react();
var import_react9 = __toESM(require("react")), import_react_slick = __toESM(require("react-slick"));
var MySlides = (props) => {
  let { slides } = props;
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "mobile-slides-container"
  }, /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "section-main-heading"
  }, "Work"), /* @__PURE__ */ import_react9.default.createElement(import_react_slick.default, __spreadValues({}, {
    dots: !1,
    infinite: !1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }), slides.map((slide) => slide)));
}, MySlides_default = MySlides;

// app/images/home/help.json
var v3 = "5.6.9", fr3 = 24, ip3 = 0, op3 = 168, w3 = 670, h3 = 505, nm3 = "AE", ddd3 = 0, assets3 = [], layers3 = [{ ddd: 0, ind: 1, ty: 3, nm: "me", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [256.233, 321.346, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Path_30_1_", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.376, 133.461, 0], ix: 2 }, a: { a: 0, k: [32.745, 21.96, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -8.19], [0, 0], [6.97, 0], [0, 0], [0, 8.18], [0, 0], [-6.96, 0]], o: [[6.97, 0], [0, 0], [0, 8.18], [0, 0], [-6.95, 0], [0, 0], [0, -8.18], [0, 0]], v: [[52.87, 0], [65.49, 14.8], [65.49, 29.11], [52.87, 43.92], [12.61, 43.92], [0, 29.11], [0, 14.8], [12.61, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.345098039216, 0.349019607843, 0.356862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_30_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Path_29_1_", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.751, 170.311, 0], ix: 2 }, a: { a: 0, k: [7.49, 22.67, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [4.15, 0], [0, -5.5], [0, 0]], o: [[0, 0], [0, -5.49], [-4.13, 0], [0, 0], [0, 0]], v: [[14.98, 45.34], [14.98, 9.95], [7.48, 0], [0, 9.95], [0, 45.34]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.345098039216, 0.349019607843, 0.356862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_29_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "Path_28_1_", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.386, 102.636, 0], ix: 2 }, a: { a: 0, k: [111.875, 90.995, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-0.03, 1.24], [0, 0], [20.35, 0], [0, 0], [0, -32.58], [0, 0], [-0.62, -1.08]], o: [[0.62, -1.09], [0, 0], [0, -32.58], [0, 0], [-20.36, 0], [0, 0], [0.02, 1.25], [0, 0]], v: [[222.77, 181.99], [223.75, 178.44], [205.31, 58.97], [168.45, 0], [58.42, 0], [21.53, 58.97], [0, 178.44], [0.98, 181.99]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.760784313725, 0.709803921569, 0.607843137255, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_28_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "Path_27_1_", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-1.452, -126.306, 0], ix: 2 }, a: { a: 0, k: [48.049, 67.325, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.44, 16.2], [5.85, 5.22], [6.33, 0.49], [0, 0], [-2.06, 1.78], [4.75, -2.6], [0, 0], [-0.63, 2.12], [0, 0], [6.41, -7], [-3.99, -12.06], [0, 0], [0, 0], [-5, -5.77], [-3.67, -1.78], [-4.18, 0.03], [-3.93, 2.08], [-3.43, 4.02], [0, 0], [0, 0]], o: [[-1.1, -7.49], [-5.85, -5.22], [-6.34, -0.49], [0, 0], [2.08, -1.79], [-4.75, 2.6], [0, 0], [0.63, -2.1], [0, 0], [-15.37, 16.77], [0, 0], [0, 0], [0, 0], [3.06, 3.52], [3.81, 1.84], [4.38, -0.01], [4.05, -2.15], [4.23, -4.96], [0, 0], [0.56, -1.14]], v: [[95.46, 36.73], [87.66, 16.06], [66.79, 5.73], [51.91, 4.93], [53.32, 1.66], [47.96, 1.66], [36.87, 7.51], [34.02, 8], [39.26, 0], [9.5, 16.46], [5.08, 72.91], [5.08, 72.91], [5.81, 95.18], [18.66, 121.01], [30.78, 131.97], [47.5, 134.65], [65.02, 131.77], [77.93, 118.67], [92.03, 97.27], [92.04, 75.27]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.137254901961, 0.121568627451, 0.125490196078, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_27_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 6, ty: 4, nm: "Path 281", parent: 7, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [91.913, -0.951, 0], ix: 2 }, a: { a: 0, k: [42.298, 28.23, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-2.49, 0.457], [0.385, -5.33], [0, 0], [8.642, 0.36], [0, 0], [0, 0], [0, 0], [0, 0], [-0.335, -3.32], [0, 0], [-0.619, -2.82], [0, 0], [-0.68, -3.15], [0, 0], [3.51, -4.84]], o: [[2.533, -0.062], [8.348, -1.66], [0, 0], [-8.043, 1.83], [-6.847, -0.29], [0, 0], [0, 0], [0, 0], [1.775, -1.9], [0, 0], [2.455, -2.02], [0, 0], [2.566, -2.14], [0, 0], [2.242, 0.74], [0, 0]], v: [[57.825, 42.92], [65.372, 42.14], [79.136, 48.51], [70.464, 48.6], [44.325, 54.56], [7.607, 56.46], [0, 35.68], [28.005, 35.94], [45.867, 14.07], [51.182, 15.91], [54.499, 13.18], [60.28, 15.62], [61.933, 14.24], [67.897, 16.73], [82.047, 0], [82.645, 8.75]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 281", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 7, ty: 4, nm: "arm-l", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 36, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 39, s: [-5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 41, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 46, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 49, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 53, s: [-6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 55, s: [-2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 58, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 61, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 66, s: [-5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 68, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 73, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 76, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 80, s: [-6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 82, s: [-2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 85, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 88, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 96, s: [-5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 98, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 103, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 106, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 110, s: [-6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 112, s: [-2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 115, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 118, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 124, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 129, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 132, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 136, s: [-6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 138, s: [-2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 141, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 144, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 149, s: [-5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 151, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 156, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 159, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 163, s: [-6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 165, s: [-2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 168, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 171, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 179, s: [-5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 181, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 186, s: [-8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 189, s: [-4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 193, s: [-6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 195, s: [-2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 198, s: [-4] }, { t: 201, s: [0] }], ix: 10 }, p: { a: 0, k: [-158.694, 84.95, 0], ix: 2 }, a: { a: 0, k: [2.75, 15.615, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[77.5, 25.19], [0, 31.23], [0, 0], [77.5, 7.19]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "arm-l", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 8, ty: 4, nm: "shirt", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.745, 62.846, 0], ix: 2 }, a: { a: 0, k: [95.365, 115.865, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [7.89, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-30.04, -0.63], [0, 0], [-0.55, 0], [-0.52, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [-7.92, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.52, 0], [0.53, 0], [0, 0], [30.08, -0.63], [0, 0], [0, 0]], v: [[163.31, 5.36], [121.31, 0], [96.77, 3.86], [74.9, 0], [32.94, 5.36], [38.67, 37.55], [38.67, 55.55], [16.49, 95.2], [0, 231.57], [96.47, 231.68], [96.47, 231.73], [98.1, 231.71], [99.71, 231.73], [99.71, 231.68], [190.73, 231.73], [179.75, 95.21]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "shirt", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 9, ty: 4, nm: "upper-armR", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [84.054, 7.528, 0], ix: 2 }, a: { a: 0, k: [50.5, 55, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[72, 110], [23, 70], [0, 29], [32, 0], [101, 67]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "upper-armR", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 10, ty: 4, nm: "armR", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [135.908, 56.103, 0], ix: 2 }, a: { a: 0, k: [34.964, 44.455, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [13.73, -12.08], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [-7.05, 6.2], [0, 0], [0, 0], [0, 0]], v: [[66.47, 59.78], [62.65, 85.86], [44.23, 86.89], [0, 41.85], [19.93, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "armR", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 11, ty: 4, nm: "neck", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0.277, -43.528, 0], ix: 2 }, a: { a: 0, k: [24.49, 27.94, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[2.27, 55.87], [0, 0], [47.17, 0.52], [48.98, 55.88]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "neck", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 12, ty: 4, nm: "upper-armL", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-83.95, 7.528, 0], ix: 2 }, a: { a: 0, k: [50.5, 55, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[29, 110], [78, 70], [101, 29], [69, 0], [0, 67]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "upper-armL", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 13, ty: 4, nm: "armL", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-135.921, 56.103, 0], ix: 2 }, a: { a: 0, k: [34.951, 44.455, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-13.74, -12.08], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [7.04, 6.2], [0, 0], [0, 0], [0, 0]], v: [[3.463, 59.78], [7.283, 85.86], [25.693, 86.89], [69.903, 41.85], [49.973, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "armL", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 14, ty: 4, nm: "hand-r", parent: 15, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-16.41, -1.951, 0], ix: 2 }, a: { a: 0, k: [41.702, 28.23, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [2.455, 0.457], [-0.38, -5.33], [0, 0], [-8.52, 0.36], [0, 0], [0, 0], [0, 0], [0, 0], [0.33, -3.32], [0, 0], [0.61, -2.82], [0, 0], [0.67, -3.15], [0, 0], [-3.46, -4.84]], o: [[-2.497, -0.062], [-8.23, -1.66], [0, 0], [7.93, 1.83], [6.75, -0.29], [0, 0], [0, 0], [0, 0], [-1.75, -1.9], [0, 0], [-2.42, -2.02], [0, 0], [-2.53, -2.14], [0, 0], [-2.21, 0.74], [0, 0]], v: [[26.394, 42.92], [18.954, 42.14], [5.384, 48.51], [13.934, 48.6], [39.704, 54.56], [75.904, 56.46], [83.404, 35.68], [55.794, 35.94], [38.184, 14.07], [32.944, 15.91], [29.674, 13.18], [23.974, 15.62], [22.344, 14.24], [16.464, 16.73], [2.514, 0], [1.924, 8.75]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "hand-r", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 15, ty: 4, nm: "arm-r", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 27, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 32, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 37, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 39, s: [1] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 44, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 46, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 49, s: [8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 52, s: [4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 54, s: [6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 56, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 68, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 70, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 75, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 77, s: [1] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 82, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 84, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 87, s: [8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 92, s: [6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 94, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 105, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 107, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 112, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 114, s: [1] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 119, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 121, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 124, s: [8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 127, s: [4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 129, s: [6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 131, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 136, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 138, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 143, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 145, s: [1] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 150, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 152, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 155, s: [8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 158, s: [4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 160, s: [6] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 162, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 173, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 175, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 180, s: [5] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 182, s: [1] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 187, s: [3] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 189, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 192, s: [8] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 195, s: [4] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 197, s: [6] }, { t: 199, s: [0] }], ix: 10 }, p: { a: 0, k: [154.296, 83.839, 0], ix: 2 }, a: { a: 0, k: [77.75, 15.615, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 7.19], [77.5, 0], [77.5, 31.23], [0, 25.19]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "arm-r", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 16, ty: 4, nm: "face", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.381, -78.382, 0], ix: 2 }, a: { a: 0, k: [53.873, 78.514, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.43, 4.16], [1.65, -4.18], [0.47, 8.8], [15.22, 0], [9.63, -8.13], [-0.02, -1.02], [1.4, -2.4], [-3.86, -7.68], [-2.66, 2.89], [-0.18, 0.76], [-5, -5.77], [0, 0], [0.86, -2.67], [0, 0], [-6.85, -2.26], [2.14, 5.08], [-0.29, 9.73], [-3.43, 4.02], [0, 0], [-0.21, 0.53], [-0.38, -0.44], [-3.87, 7.69]], o: [[-1.44, -2.5], [-0.86, -1.49], [-9.4, -9.99], [-16.69, 0], [-0.54, 10.8], [-1.64, -4.02], [-2.42, 4.16], [3.86, 7.7], [0.49, -0.6], [0, 0], [3.36, 3.87], [0.88, 9.08], [-1.85, 5.61], [58.7, 1.63], [6.12, 2.01], [-1.12, -2.67], [0, 0], [4.23, -4.96], [0.2, -0.52], [0.18, 0.55], [2.67, 2.9], [3.91, -7.7]], v: [[104.091, 34.88], [97.621, 41.82], [92.871, 11.27], [56.151, 0], [11.191, 10.64], [9.561, 40.97], [3.661, 34.88], [1.761, 52.35], [9.501, 60.5], [10.521, 58.44], [23.371, 84.27], [37.161, 95.94], [37.651, 119.54], [22.011, 154.39], [87.671, 156.94], [70.781, 121.11], [69.721, 95.04], [82.631, 81.94], [96.731, 60.54], [97.361, 59.01], [98.211, 60.51], [105.951, 52.37]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.4117647058823529, 0.2549019607843137, 0.12156862745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "face", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 17, ty: 4, nm: "Rectangle_92_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [522.28, 374.615, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [64.24, 1.88], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_92_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 18, ty: 4, nm: "Rectangle_91_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [526.482, 368.469, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [53.44, 1.88], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0.682352941176, 0.937254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_91_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 19, ty: 4, nm: "Path_21_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [499.76200000000006, 368.459, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0]], o: [[0, 0]], v: [[0, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0.682352941176, 0.937254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_21_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 20, ty: 4, nm: "Rectangle_90_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [522.28, 363.291, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [64.24, 1.88], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_90_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 21, ty: 4, nm: "Rectangle_89_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [520.061, 357.139, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [52.42, 1.88], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0.682352941176, 0.937254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_89_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 22, ty: 4, nm: "Path_20_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [493.851, 357.129, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0]], o: [[0, 0]], v: [[0, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0.682352941176, 0.937254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_20_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 23, ty: 4, nm: "Rectangle_88_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [508, 351.975, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [35.68, 1.88], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_88_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 24, ty: 4, nm: "Rectangle_87_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [512.488, 346.064, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [44.66, 1.88], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.152941176471, 0.666666666667, 0.882352941176, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_87_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 25, ty: 4, nm: "Path_19_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [490.158, 346.054, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0]], o: [[0, 0]], v: [[0, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.109803921569, 0.458823529412, 0.737254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_19_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 26, ty: 4, nm: "Rectangle_86_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [502.2180000000001, 339.919, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [24.12, 1.88], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.152941176471, 0.666666666667, 0.882352941176, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_86_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 27, ty: 4, nm: "Rectangle_85_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [532.848, 356.255, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [103.16, 69.46], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.337254901961, 0.372549019608, 0.4, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_85_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 28, ty: 4, nm: "Rectangle_84_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [532.851, 356.259, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [109.89, 73.98], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098039216, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_84_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 29, ty: 4, nm: "Rectangle_83_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [535.65, 355.075, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [166.86, 81.94], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.192156862745, 0.643137254902, 0.6, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_83_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 30, ty: 4, nm: "bookscreen", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [535.713, 355.781, 0], ix: 2 }, a: { a: 0, k: [91.63, 48.564, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 1.05], [0, 0], [-7.74, 0], [0, 0], [0, -7.7]], o: [[0, 1.05], [0, 0], [0, -8.27], [0, 0], [7.86, 0], [0, 0]], v: [[183.26, 96.34], [0, 96.34], [0, 10.59], [9.86, 0], [173.4, 0], [183.26, 10.59]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.337254901961, 0.372549019608, 0.4, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_16_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 31, ty: 4, nm: "Rectangle_82_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [535.697, 408.414, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [194.1, 5.42], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098039216, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_82_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 32, ty: 4, nm: "Path_17_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [535.697, 414.01500000000004, 0], ix: 2 }, a: { a: 0, k: [97.05, 3.425, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-2.45, 0], [0, 0], [-0.26, 3.85]], o: [[0.26, 3.85], [0, 0], [2.45, 0], [0, 0]], v: [[0, 0], [4.71, 6.85], [189.39, 6.85], [194.1, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.854901960784, 0.827450980392, 0.839215686275, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_17_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 33, ty: 4, nm: "Rectangle_16_1_ 2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [259.265, 248.081, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 1, s: [100, 100, 100] }, { i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 2, s: [100, 30, 100] }, { t: 3, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [324.7, 194.49], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_16_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 34, ty: 4, nm: "Path_15_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [535.706, 357.577, 0], ix: 2 }, a: { a: 0, k: [93.205, 52.064, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 1.09], [0, 0], [-7.87, 0], [0, 0], [0, -7.83]], o: [[0, 1.09], [0, 0], [0, -8.41], [0, 0], [8, 0], [0, 0]], v: [[186.41, 103.31], [0, 103.31], [0, 10.77], [10.03, 0], [176.38, 0], [186.41, 10.77]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098039216, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_15_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 35, ty: 4, nm: "Rectangle_57_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [374.811, 343.976, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [374.811, 287.976, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [20.38, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_57_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 36, ty: 4, nm: "Rectangle_56_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [374.811, 336.78, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [374.811, 280.78, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [20.38, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_56_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 37, ty: 4, nm: "Rectangle_55_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [374.811, 322.286, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [374.811, 266.286, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [20.38, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_55_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 38, ty: 4, nm: "Rectangle_54_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [374.811, 314.803, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [374.811, 258.803, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [20.38, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_54_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 39, ty: 4, nm: "Rectangle_53_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [374.811, 306.839, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [374.811, 250.839, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [20.38, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_53_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 40, ty: 4, nm: "Rectangle_52_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [367.541, 351.371, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [367.541, 295.371, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [23.23, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_52_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 41, ty: 4, nm: "Rectangle_51_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [367.541, 299.229, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [367.541, 243.229, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [23.23, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_51_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 42, ty: 4, nm: "Rectangle_50_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [371.877, 328.724, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [371.877, 272.724, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [30.07, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_50_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 43, ty: 4, nm: "Rectangle_49_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [368.257, 291.968, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [368.257, 235.968, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [22.83, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_49_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 44, ty: 4, nm: "Rectangle_48_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [364.622, 285.252, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [364.622, 229.252, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [15.56, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_48_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 45, ty: 4, nm: "Rectangle_47_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [360.063, 322.286, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [360.063, 266.286, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_47_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 46, ty: 4, nm: "Rectangle_46_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [355.922, 343.976, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [355.922, 287.976, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.24, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_46_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 47, ty: 4, nm: "Rectangle_45_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [355.922, 336.78, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [355.922, 280.78, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.24, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_45_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 48, ty: 4, nm: "Rectangle_44_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [360.063, 314.324, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [360.063, 258.324, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_44_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 49, ty: 4, nm: "Rectangle_43_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [360.063, 306.839, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [360.063, 250.839, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_43_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 50, ty: 4, nm: "Rectangle_42_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [350.461, 351.371, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [350.461, 295.371, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_42_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 51, ty: 4, nm: "Rectangle_41_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [350.461, 328.724, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [350.461, 272.724, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_41_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 52, ty: 4, nm: "Rectangle_40_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [350.461, 299.229, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [350.461, 243.229, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_40_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 53, ty: 4, nm: "Group_33_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [350.461, 292.737, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [350.461, 236.73699999999997, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 54, ty: 4, nm: "Rectangle_39_3_", parent: 53, sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [0, 56, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [0, 0, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_39_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 55, ty: 4, nm: "Rectangle_38_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 18, s: [0] }, { t: 25, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 18, s: [350.461, 285.252, 0], to: [0, -9.333, 0], ti: [0, 9.333, 0] }, { t: 25, s: [350.461, 229.252, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [4.26, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_38_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 14, op: 194, st: 14, bm: 0 }, { ddd: 0, ind: 56, ty: 4, nm: "Path_12_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 4, s: [0] }, { t: 7, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [337.829, 208.89, 0], ix: 2 }, a: { a: 0, k: [2.715, 2.715, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.49], [1.5, 0.01], [-0.01, 1.5], [-1.5, -0.01], [0, 0]], o: [[0, 1.5], [-1.5, 0], [0, -1.5], [0, 0], [1.49, 0.01]], v: [[5.43, 2.72], [2.71, 5.43], [0, 2.71], [2.72, 0], [2.72, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.607843137255, 0.741176470588, 0.18431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_12_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 57, ty: 4, nm: "Path_11_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 8, s: [0] }, { t: 11, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [353.286, 208.895, 0], ix: 2 }, a: { a: 0, k: [2.72, 2.72, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.5], [1.5, 0], [0, 1.5], [-1.51, 0]], o: [[0, 1.5], [-1.5, 0], [0, -1.5], [1.5, 0]], v: [[5.44, 2.72], [2.72, 5.44], [0, 2.72], [2.72, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.964705882353, 0.882352941176, 0.611764705882, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_11_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 4, op: 184, st: 4, bm: 0 }, { ddd: 0, ind: 58, ty: 4, nm: "Path_10_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 6, s: [0] }, { t: 9, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [345.649, 208.89, 0], ix: 2 }, a: { a: 0, k: [2.715, 2.715, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.5], [1.5, 0], [0, 1.5], [-1.5, 0.01]], o: [[0, 1.5], [-1.5, 0], [0, -1.49], [1.5, 0.01]], v: [[5.43, 2.72], [2.71, 5.43], [0, 2.71], [2.71, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.890196078431, 0.38431372549, 0.188235294118, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_10_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 2, op: 182, st: 2, bm: 0 }, { ddd: 0, ind: 59, ty: 4, nm: "Rectangle_21_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [371.431, 208.901, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [81.02, 8.74], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.345098039216, 0.349019607843, 0.356862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_21_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 60, ty: 4, nm: "Rectangle_19_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [371.663, 265.546, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [80.56, 122.03], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.266666666667, 0.223529411765, 0.278431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_19_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 61, ty: 4, nm: "Rectangle_37_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [209.01100000000002, 317.36, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [209.01100000000002, 277.36, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [64.77, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96862745098, 0.580392156863, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_37_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 62, ty: 4, nm: "Rectangle_36_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [145.04, 317.36, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [145.04, 277.36, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [44.54, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.843137254902, 0.874509803922, 0.137254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_36_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 63, ty: 4, nm: "Rectangle_35_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [218.669, 305.995, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [218.669, 265.995, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [54.54, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.937254901961, 0.254901960784, 0.211764705882, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_35_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 64, ty: 4, nm: "Rectangle_34_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [161.4, 305.995, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [161.4, 265.995, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [41.81, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96862745098, 0.580392156863, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_34_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 65, ty: 4, nm: "Rectangle_33_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [128.335, 305.995, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [128.335, 265.995, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [11.13, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96862745098, 0.580392156863, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_33_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 66, ty: 4, nm: "Rectangle_32_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [202.531, 296.451, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [202.531, 256.451, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [66.81, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.843137254902, 0.874509803922, 0.137254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_32_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 67, ty: 4, nm: "Rectangle_31_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [155.718, 296.451, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [155.718, 256.451, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [10.45, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96862745098, 0.580392156863, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_31_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 68, ty: 4, nm: "Rectangle_30_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [133.905, 296.451, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [133.905, 256.451, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [22.27, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.937254901961, 0.254901960784, 0.211764705882, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_30_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 69, ty: 4, nm: "Rectangle_29_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [213.669, 285.084, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [213.669, 245.084, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [44.54, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.937254901961, 0.254901960784, 0.211764705882, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_29_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 70, ty: 4, nm: "Rectangle_28_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [176.627, 285.084, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [176.627, 245.084, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [11.37, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96862745098, 0.580392156863, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_28_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 71, ty: 4, nm: "Rectangle_27_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [147.312, 285.084, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [147.312, 245.084, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [35.46, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.843137254902, 0.874509803922, 0.137254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_27_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 72, ty: 4, nm: "Rectangle_26_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [211.165, 275.539, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [211.165, 235.539, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [30.45, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96862745098, 0.580392156863, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_26_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 73, ty: 4, nm: "Rectangle_25_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [155.72, 275.539, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [155.72, 235.539, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [65.9, 2.79], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.937254901961, 0.254901960784, 0.211764705882, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_25_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 74, ty: 4, nm: "Rectangle_24_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [159.356, 264.63, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [159.356, 224.62999999999997, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [11.37, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.96862745098, 0.580392156863, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_24_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 75, ty: 4, nm: "Rectangle_23_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [135.49, 264.63, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [135.49, 224.62999999999997, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [25.44, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.843137254902, 0.874509803922, 0.137254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_23_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 76, ty: 4, nm: "Rectangle_22_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [0] }, { t: 21, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [145.04, 253.27, 0], to: [0, -6.667, 0], ti: [0, 6.667, 0] }, { t: 21, s: [145.04, 213.27000000000004, 0] }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [44.54, 2.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.843137254902, 0.874509803922, 0.137254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_22_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 77, ty: 4, nm: "Path_9_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 7, s: [0] }, { t: 10, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [131.744, 183.671, 0], ix: 2 }, a: { a: 0, k: [2.715, 2.715, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [1.5, 0.01], [-0.01, 1.5], [-1.5, -0.01], [0, 0], [0, -1.5]], o: [[0, 1.5], [-1.5, 0], [0, -1.5], [0, 0], [1.49, 0.01], [0, 0]], v: [[5.43, 2.72], [2.71, 5.43], [0, 2.71], [2.72, 0], [2.72, 0], [5.43, 2.72]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.607843137255, 0.741176470588, 0.18431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_9_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 78, ty: 4, nm: "Path_8_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 9, s: [0] }, { t: 12, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [124.102, 183.676, 0], ix: 2 }, a: { a: 0, k: [2.72, 2.72, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [1.5, 0], [0, 1.5], [-1.5, 0], [0, 0], [0, -1.5]], o: [[0, 1.5], [-1.5, 0], [0, -1.5], [0, 0], [1.5, 0], [0, 0.01]], v: [[5.44, 2.72], [2.72, 5.44], [0, 2.72], [2.72, 0], [2.72, 0], [5.44, 2.71]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.964705882353, 0.882352941176, 0.611764705882, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_8_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 2, op: 182, st: 2, bm: 0 }, { ddd: 0, ind: 79, ty: 4, nm: "Path_7_3_", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 11, s: [0] }, { t: 14, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [116.453, 183.676, 0], ix: 2 }, a: { a: 0, k: [2.72, 2.72, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [1.5, 0], [0, 1.5], [-1.5, 0], [0, 0], [0, -1.5]], o: [[0, 1.5], [-1.5, 0], [0, -1.5], [0, 0], [1.5, 0], [0, 0]], v: [[5.44, 2.72], [2.72, 5.44], [0, 2.72], [2.72, 0], [2.72, 0], [5.44, 2.72]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.890196078431, 0.38431372549, 0.188235294118, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_7_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 4, op: 184, st: 4, bm: 0 }, { ddd: 0, ind: 80, ty: 4, nm: "Rectangle_20_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [209.632, 183.675, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [206.58, 8.73], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.345098039216, 0.349019607843, 0.356862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_20_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 81, ty: 4, nm: "Rectangle_18_3_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [209.632, 255.235, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [206.58, 151.85], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.258823529412, 0.286274509804, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_18_3_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 82, ty: 4, nm: "Path_6_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [110.452, 159.843, 0], ix: 2 }, a: { a: 0, k: [4.1, 4.1, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [2.26, 0], [0, 2.26], [-2.26, 0], [0, -2.26]], o: [[0, 2.26], [-2.26, 0], [0, -2.26], [2.27, 0], [0, 0]], v: [[8.2, 4.1], [4.1, 8.2], [0, 4.1], [4.1, 0], [8.2, 4.1]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.254901960784, 0.494117647059, 0.560784313725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_6_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 83, ty: 4, nm: "Rectangle_17_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [259.265, 159.846, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [324.7, 18.02], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.388235294118, 0.78431372549, 0.780392156863, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_17_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 84, ty: 4, nm: "Rectangle_16_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [259.265, 248.081, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [324.7, 194.49], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.192156862745, 0.643137254902, 0.6, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_16_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 85, ty: 4, nm: "screebMacBack_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [259.273, 248, 0], ix: 2 }, a: { a: 0, k: [170.46, 107.56, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [7.61, 0], [0, 0], [0, -7.61], [0, 0]], o: [[0, 0], [0, -7.6], [0, 0], [-7.6, 0], [0, 0], [0, 0]], v: [[340.92, 215.12], [340.92, 11.07], [327.14, 0], [13.77, 0], [0, 11.07], [0, 215.12]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.18431372549, 0.160784313725, 0.16862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "screebMacBack_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 86, ty: 4, nm: "Path_4_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [259.268, 362.415, 0], ix: 2 }, a: { a: 0, k: [170.465, 15.43, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-7.6, 0], [0, 0], [0, 7.61], [0, 0]], o: [[0, 0], [0, 7.61], [0, 0], [7.61, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 19.79], [13.77, 30.86], [327.15, 30.86], [340.93, 19.79], [340.93, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.929411764706, 0.925490196078, 0.913725490196, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_4_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 87, ty: 4, nm: "Path_3_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [259.273, 415.64, 0], ix: 2 }, a: { a: 0, k: [62.45, 3.695, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [3.61, 0], [0, 0], [0, 1.8], [0, 0], [-3.61, 0], [0, 0], [0, -1.8], [0, 0]], o: [[0, 1.8], [0, 0], [-3.61, 0], [0, 0], [0, -1.8], [0, 0], [3.61, 0], [0, 0], [0, 0]], v: [[124.9, 4.12], [118.37, 7.39], [6.52, 7.39], [0, 4.12], [0, 3.25], [6.52, 0], [118.36, 0], [124.89, 3.25], [124.89, 4.12]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.901960784314, 0.905882352941, 0.909803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_3_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 88, ty: 4, nm: "Path_2_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [259.273, 392.98, 0], ix: 2 }, a: { a: 0, k: [37.92, 24.895, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[5.42, 0], [70.42, 0], [75.84, 49.79], [0, 49.79]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.737254901961, 0.745098039216, 0.752941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path_2_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 89, ty: 4, nm: "Rectangle_15_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [644.277, 469.01400000000007, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [33.94, 91.92], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098039216, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_15_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 90, ty: 4, nm: "Rectangle_14_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [80.817, 465.88400000000007, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [33.94, 91.92], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098039216, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_14_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 91, ty: 4, nm: "Rectangle_13_1_", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [362.552, 433.119, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [597.41, 30.89], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098039216, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle_13_1_", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 92, ty: 4, nm: "Path 278", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.832, -4.338, 0], ix: 2 }, a: { a: 0, k: [6.809, 6.126, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.064, 0.205], [0, 0], [0, 0], [0, 0], [-0.056, -0.129], [-0.088, -0.088], [-0.135, -0.053], [-0.17, 0], [-0.158, 0.047], [-0.129, 0.091], [-0.082, 0.135], [0, 0.182], [0.021, 0.094], [0.07, 0.199], [0, 0], [0, 0], [0.053, 0.094], [0.056, 0.076], [0.07, 0.07], [0.226, 0.079], [0.334, 0], [0.226, -0.079], [0.152, -0.152], [0.056, -0.076], [0.053, -0.094], [0.047, -0.114], [0, 0], [0, 0], [0.026, -0.094], [0, -0.094], [-0.076, -0.129], [-0.123, -0.088], [-0.149, -0.047], [-0.152, 0], [-0.129, 0.05], [-0.082, 0.082], [-0.059, 0.138]], o: [[0, 0], [0, 0], [0, 0], [0.064, 0.199], [0.056, 0.129], [0.094, 0.094], [0.135, 0.053], [0.152, 0], [0.158, -0.047], [0.129, -0.091], [0.082, -0.135], [0, -0.082], [-0.021, -0.094], [0, 0], [0, 0], [-0.047, -0.114], [-0.053, -0.094], [-0.056, -0.076], [-0.152, -0.152], [-0.226, -0.079], [-0.334, 0], [-0.226, 0.079], [-0.07, 0.07], [-0.056, 0.076], [-0.053, 0.094], [0, 0], [0, 0], [-0.064, 0.193], [-0.026, 0.094], [0, 0.164], [0.076, 0.129], [0.123, 0.088], [0.149, 0.047], [0.17, 0], [0.129, -0.05], [0.088, -0.088], [0.059, -0.138]], v: [[2.443, 11.127], [3.032, 9.316], [7.479, 9.316], [8.104, 11.136], [8.284, 11.628], [8.499, 11.953], [8.842, 12.173], [9.299, 12.252], [9.765, 12.182], [10.195, 11.975], [10.512, 11.637], [10.635, 11.162], [10.604, 10.898], [10.468, 10.459], [7.374, 1.635], [7.225, 1.252], [7.075, 0.94], [6.913, 0.686], [6.724, 0.466], [6.157, 0.119], [5.317, 0], [4.478, 0.119], [3.911, 0.466], [3.722, 0.686], [3.56, 0.94], [3.41, 1.252], [3.261, 1.635], [0.176, 10.503], [0.04, 10.934], [0, 11.215], [0.114, 11.654], [0.413, 11.979], [0.822, 12.182], [1.274, 12.252], [1.723, 12.177], [2.039, 11.979], [2.259, 11.641]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-0.059, 0.208], [0, 0], [-0.041, 0.164], [0, 0], [-0.059, -0.188], [0, 0], [-0.082, -0.24]], o: [[0, 0], [0, 0], [0.076, -0.24], [0, 0], [0.053, -0.188], [0, 0], [0.041, 0.164], [0, 0], [0.064, 0.208], [0, 0]], v: [[6.899, 7.444], [3.577, 7.444], [4.676, 3.981], [4.878, 3.309], [5.036, 2.751], [5.177, 2.224], [5.212, 2.224], [5.361, 2.751], [5.528, 3.309], [5.748, 3.981]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 2, ty: "sh", ix: 3, ks: { a: 0, k: { i: [[0, -0.223], [0, 0], [-0.131, -0.123], [-0.27, 0], [-0.131, 0.123], [0, 0.223], [0, 0], [0.131, 0.123], [0.27, 0], [0.131, -0.123]], o: [[0, 0], [0, 0.223], [0.131, 0.123], [0.27, 0], [0.131, -0.123], [0, 0], [0, -0.223], [-0.131, -0.123], [-0.27, 0], [-0.131, 0.123]], v: [[11.865, 6.867], [11.865, 11.502], [12.062, 12.021], [12.662, 12.205], [13.263, 12.021], [13.459, 11.502], [13.459, 6.867], [13.263, 6.349], [12.662, 6.164], [12.062, 6.349]], c: !0 }, ix: 2 }, nm: "Path 3", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 3, ty: "sh", ix: 4, ks: { a: 0, k: { i: [[0, -0.129], [-0.047, -0.107], [-0.084, -0.08], [-0.115, -0.047], [-0.137, 0], [-0.117, 0.047], [-0.086, 0.082], [-0.047, 0.111], [0, 0.129], [0.047, 0.107], [0.084, 0.08], [0.115, 0.047], [0.137, 0], [0.119, -0.047], [0.084, -0.082], [0.047, -0.111]], o: [[0, 0.125], [0.047, 0.107], [0.084, 0.08], [0.115, 0.047], [0.145, 0], [0.117, -0.047], [0.086, -0.082], [0.047, -0.111], [0, -0.125], [-0.047, -0.107], [-0.084, -0.08], [-0.115, -0.047], [-0.145, 0], [-0.119, 0.047], [-0.084, 0.082], [-0.047, 0.111]], v: [[11.707, 4.447], [11.777, 4.796], [11.974, 5.077], [12.272, 5.268], [12.65, 5.338], [13.043, 5.268], [13.348, 5.074], [13.547, 4.784], [13.617, 4.424], [13.547, 4.075], [13.351, 3.794], [13.052, 3.604], [12.674, 3.533], [12.278, 3.604], [11.974, 3.797], [11.777, 4.087]], c: !0 }, ix: 2 }, nm: "Path 4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 278", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 93, ty: 4, nm: "Path 122", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-15.55, -7.058, 0], ix: 2 }, a: { a: 0, k: [1.812, 16.342, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-1.208, 0], [0, 0], [0, -1.283], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, -1.283], [0, 0], [-1.283, 0], [0, 0], [0, 0], [0, 0]], v: [[1.51, 32.609], [1.51, 32.609], [1.51, 2.491], [3.623, 0], [2.642, 0], [0, 2.491], [0, 32.685], [1.51, 32.609]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.898039215686, 0.63137254902, 0.243137254902, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 122", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 94, ty: 4, nm: "Path 121", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-9.813, 16.305, 0], ix: 2 }, a: { a: 0, k: [7.548, 7.095, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [14.946, 14.191], [15.097, 14.191], [15.097, 2.114]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.823529411765, 0.952941176471, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 121", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 95, ty: 4, nm: "Path 120", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-9.813, 16.229, 0], ix: 2 }, a: { a: 0, k: [7.548, 7.171, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [1.283, 0], [0, 0]], o: [[0, 0], [0, 0], [0, -1.283], [0, 0], [0, 0]], v: [[14.946, 14.342], [15.097, 14.342], [15.097, 2.491], [12.681, 0], [0, 0.151]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 120", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 96, ty: 4, nm: "Path 119", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.302, 16.569, 0], ix: 2 }, a: { a: 0, k: [4.227, 6.831, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -0.151], [0, 0], [-0.151, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0.151], [0, 0], [0.151, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 11.323], [0.151, 11.775], [1.963, 13.512], [2.415, 13.663], [8.454, 13.663], [1.585, 2.265]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.709803921569, 0.447058823529, 0.03137254902, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 119", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 97, ty: 4, nm: "Path 118", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [2.604, 16.606, 0], ix: 2 }, a: { a: 0, k: [7.133, 6.794, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -0.151], [0, 0], [-0.151, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0.151], [0, 0], [0.151, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 11.247], [0.151, 11.7], [1.963, 13.436], [2.415, 13.587], [14.266, 13.587], [0.302, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.694117647059, 0.250980392157, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 118", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 98, ty: 4, nm: "Path 117", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [6.794, -5.284, 0], ix: 2 }, a: { a: 0, k: [10.568, 18.116, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [1.283, 0], [0, 0]], o: [[0, 0], [0, -1.283], [0, 0], [0, 0]], v: [[21.135, 36.232], [21.135, 2.491], [18.494, 0], [0, 0]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.709803921569, 0.447058823529, 0.03137254902, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 117", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 99, ty: 4, nm: "Path 116", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0.113, -5.284, 0], ix: 2 }, a: { a: 0, k: [17.248, 18.116, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [1.283, 0], [0, 0], [0, -1.208]], o: [[0, 0], [0, -1.283], [0, 0], [-1.283, 0], [0, 0]], v: [[34.496, 36.232], [34.496, 2.491], [31.854, 0], [2.415, 0], [0, 2.265]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.839215686275, 0.545098039216, 0.117647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 116", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 100, ty: 4, nm: "Path 115", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [17.361, 23.4, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.283, 0], [0, 0], [0, -1.283], [0, 0], [0, 0], [0, 0], [0, 1.283], [0, 0]], o: [[0, 0], [-1.283, 0], [0, 0], [0, 0], [0, 0], [1.283, 0], [0, 0], [0, -1.283]], v: [[32.081, 0], [2.642, 0], [0, 2.491], [0, 32.685], [14.946, 46.8], [32.081, 46.8], [34.723, 44.309], [34.723, 2.491]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.619607843137, 0.090196078431, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 115", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 101, ty: 4, nm: "Path 114", parent: 155, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [17.361, 23.4, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.283, 0], [0, 0], [0, -1.283], [0, 0], [0, 0], [0, 0], [0, 1.283], [0, 0]], o: [[0, 0], [-1.283, 0], [0, 0], [0, 0], [0, 0], [1.283, 0], [0, 0], [0, -1.283]], v: [[32.081, 0], [2.642, 0], [0, 2.491], [0, 32.685], [14.946, 46.8], [32.081, 46.8], [34.723, 44.309], [34.723, 2.491]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.054901960784, 0.878431372549, 0.721568627451, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 114", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 102, ty: 4, nm: "Path 113", parent: 154, sr: 1, ks: { o: { a: 0, k: 1, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [5.835, -0.793, 0], ix: 2 }, a: { a: 0, k: [3.6, 5.548, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.963, 0.755], [0, 0.528], [-0.755, 0], [-0.302, -0.226], [-0.076, 0.075], [0, 0.075], [0, 0], [0.151, 0.075], [0.981, 0], [0, -1.887], [-2.34, -0.906], [0, -0.528], [0.981, 0], [0.453, 0.377], [0.075, 0], [0, -0.075], [0, 0], [-0.151, -0.075], [-1.057, 0], [0, 2.038]], o: [[-1.283, -0.453], [0, -0.604], [0.906, 0], [0.075, 0.075], [0.075, -0.076], [0, 0], [0.076, -0.151], [-0.679, -0.377], [-2.189, 0], [0, 0.981], [1.359, 0.528], [0, 0.679], [-0.83, 0], [-0.076, -0.075], [-0.076, 0.075], [0, 0], [-0.075, 0.151], [0.755, 0.453], [2.491, 0], [0, -1.585]], v: [[4.332, 4.378], [2.672, 3.095], [3.955, 2.114], [5.766, 2.642], [6.068, 2.642], [6.295, 2.415], [6.748, 1.132], [6.597, 0.679], [3.955, 0], [0.181, 3.246], [3.049, 6.416], [4.634, 7.85], [3.124, 8.907], [1.011, 8.228], [0.709, 8.152], [0.483, 8.379], [0.03, 9.888], [0.181, 10.341], [3.124, 11.096], [7.201, 7.775]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 113", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 103, ty: 4, nm: "Path 112", parent: 154, sr: 1, ks: { o: { a: 0, k: 1, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.868, -2.755, 0], ix: 2 }, a: { a: 0, k: [4.68, 7.284, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.83, 0.755], [1.812, 0], [0.679, -0.151], [0, -0.151], [0, 0], [-0.226, 0], [0, 0], [0, 0.226], [0, 0], [-0.377, 0], [-1.057, 1.057], [0, 1.283]], o: [[-0.906, -0.83], [-1.585, 0], [-0.151, 0], [0, 0], [0, 0.226], [0, 0], [0.226, 0], [0, 0], [0.226, 0], [1.812, 0], [0.755, -0.755], [0, -1.283]], v: [[8.001, 1.208], [3.85, 0], [0.302, 0.302], [0, 0.679], [0, 14.191], [0.377, 14.568], [2.642, 14.568], [3.019, 14.191], [3.019, 9.134], [3.925, 9.134], [8.228, 7.548], [9.36, 4.378]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[1.359, 0], [0.151, 0.075], [0, 0], [-0.453, 0], [0, -1.585]], o: [[-0.377, 0], [0, 0], [0.226, 0], [1.812, 0], [0.075, 2.114]], v: [[3.925, 7.02], [3.019, 6.945], [3.019, 2.189], [4.152, 2.114], [6.869, 4.454]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 112", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 104, ty: 4, nm: "Path 111", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [5.156, -2.151, 0], ix: 2 }, a: { a: 0, k: [3.6, 5.473, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.491, 0], [0.755, 0.528], [-0.075, 0.151], [0, 0], [-0.076, 0], [-0.076, -0.076], [-0.755, 0], [0, 0.679], [1.359, 0.453], [0, 0.981], [-2.189, 0], [-0.755, -0.453], [0.076, -0.151], [0, 0], [0.075, 0], [0.075, 0], [0.906, 0], [0, -0.604], [-1.283, -0.453], [0, -1.585]], o: [[-1.132, 0], [-0.151, -0.075], [0, 0], [0, -0.076], [0.075, -0.075], [0.528, 0.302], [0.981, 0], [0, -0.604], [-2.34, -0.83], [0, -1.887], [0.906, 0], [0.151, 0.075], [0, 0], [0, 0.076], [-0.076, 0.075], [-0.302, -0.226], [-0.755, 0], [0, 0.528], [1.963, 0.755], [0, 2.038]], v: [[3.124, 10.945], [0.181, 10.19], [0.03, 9.737], [0.483, 8.379], [0.709, 8.152], [1.011, 8.228], [3.124, 8.907], [4.634, 7.85], [3.049, 6.416], [0.181, 3.246], [3.955, 0], [6.597, 0.679], [6.748, 1.132], [6.37, 2.34], [6.144, 2.566], [5.842, 2.566], [4.03, 2.038], [2.747, 3.019], [4.408, 4.303], [7.201, 7.624]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [-0.906, 0], [0, 1.585], [1.661, 0.679], [0, 1.132], [-1.208, 0], [-0.453, -0.151], [0, 0], [0.679, 0], [0, -1.434], [-1.585, -0.528], [0, -1.208], [1.661, 0], [0.528, 0.302]], o: [[0.604, 0.302], [2.038, 0], [0, -1.208], [-1.208, -0.453], [0, -0.981], [0.755, 0], [0, 0], [-0.528, -0.226], [-1.812, 0], [0, 1.057], [1.283, 0.453], [0, 0.83], [-0.83, 0], [0, 0]], v: [[0.86, 9.737], [3.2, 10.19], [6.521, 7.624], [4.181, 4.982], [2.068, 2.944], [4.106, 1.208], [5.917, 1.585], [6.144, 0.981], [4.181, 0.604], [1.162, 3.095], [3.502, 5.51], [5.615, 7.699], [3.351, 9.511], [1.237, 8.983]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 111", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 105, ty: 4, nm: "Path 110", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [5.133, -2.151, 0], ix: 2 }, a: { a: 0, k: [3.246, 5.095, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-0.906, 0], [0, 0.755], [1.283, 0.528], [0, 1.132], [-2.114, 0], [-0.528, -0.302], [0, 0], [0.906, 0], [0, -0.755], [-1.283, -0.453], [0, -1.434], [2.34, 0], [0.755, 0.377]], o: [[0.528, 0.377], [1.283, 0], [0, -0.83], [-1.736, -0.604], [0, -1.585], [0.981, 0], [0, 0], [-0.377, -0.226], [-1.057, 0], [0, 0.83], [1.736, 0.679], [0, 1.736], [-1.057, 0], [0, 0]], v: [[0.528, 8.152], [2.868, 8.832], [4.755, 7.397], [2.944, 5.586], [0.377, 2.868], [3.774, 0], [6.19, 0.604], [5.737, 1.887], [3.699, 1.283], [2.038, 2.642], [3.925, 4.303], [6.492, 7.246], [2.793, 10.19], [0, 9.511]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 110", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 106, ty: 4, nm: "Path 109", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-3.585, -4.227, 0], ix: 2 }, a: { a: 0, k: [4.718, 7.246, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.226, 0], [0, 0], [0, 0.226], [0, 0], [-0.151, 0.075], [-1.359, 0], [-0.906, -0.755], [0, -1.283], [0.755, -0.755], [1.812, 0], [0.226, 0], [0, 0]], o: [[0, 0], [-0.226, 0], [0, 0], [0, -0.151], [0.906, -0.151], [1.812, 0], [0.906, 0.755], [0, 1.359], [-0.981, 1.057], [-0.377, 0], [0, 0], [-0.076, 0.302]], v: [[2.642, 14.493], [0.377, 14.493], [0, 14.115], [0, 0.679], [0.302, 0.302], [3.925, 0], [8.077, 1.208], [9.435, 4.378], [8.303, 7.548], [4.001, 9.134], [3.095, 9.134], [3.095, 14.04]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-0.226, -0.151], [-0.604, 0], [-0.83, 0.906], [0, 1.132], [0.755, 0.604], [1.585, 0], [0.679, -0.151], [0, 0]], o: [[0, 0], [0, 0], [0, -0.302], [0.151, 0], [1.661, 0], [0.604, -0.679], [0, -1.057], [-0.755, -0.679], [-1.359, 0], [0, 0], [0, 0]], v: [[0.755, 13.738], [2.265, 13.738], [2.265, 8.756], [2.868, 8.454], [3.925, 8.53], [7.699, 7.171], [8.605, 4.529], [7.473, 1.963], [3.85, 0.906], [0.679, 1.132], [0.679, 13.738]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 2, ty: "sh", ix: 3, ks: { a: 0, k: { i: [[2.34, 0], [0, 0.453], [0, 0], [-1.887, 0], [0, -1.963]], o: [[-1.359, 0], [0, 0], [0, -0.302], [2.265, 0], [0, 1.963]], v: [[4.001, 7.85], [2.265, 7.322], [2.265, 2.038], [4.227, 1.51], [7.775, 4.605]], c: !0 }, ix: 2 }, nm: "Path 3", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 3, ty: "sh", ix: 4, ks: { a: 0, k: { i: [[0, 0], [-0.453, 0], [0, 2.114], [1.887, 0], [0.226, -0.075], [0, 0]], o: [[0.226, 0], [1.359, 0], [0, -1.51], [-0.528, 0], [0, 0], [0, 0]], v: [[3.019, 7.02], [4.001, 7.095], [7.02, 4.529], [4.227, 2.189], [3.019, 2.265], [3.019, 7.02]], c: !0 }, ix: 2 }, nm: "Path 4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 109", np: 6, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 107, ty: 4, nm: "Path 108", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-3.586, -4.265, 0], ix: 2 }, a: { a: 0, k: [4.34, 6.831, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-1.434, 0], [-0.83, -0.755], [0, -1.208], [0.679, -0.755], [1.736, 0], [0, 0.151], [0, 0], [0, 0]], o: [[0.755, -0.151], [1.736, 0], [0.755, 0.679], [0, 1.208], [-0.906, 0.981], [-0.528, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0.302], [3.548, 0], [7.473, 1.132], [8.681, 4.001], [7.624, 6.945], [3.548, 8.454], [2.265, 8.303], [2.265, 13.663], [0, 13.663]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [-0.604, 0], [0, 1.887], [1.963, 0], [0, -0.075], [0, 0]], o: [[0, 0.075], [2.114, 0], [0, -1.812], [-0.755, 0], [0, 0], [0, 0]], v: [[2.265, 6.945], [3.623, 7.095], [7.02, 4.152], [3.85, 1.434], [2.265, 1.585], [2.265, 6.945]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 108", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 108, ty: 4, nm: "Path 107", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-15.55, -7.058, 0], ix: 2 }, a: { a: 0, k: [1.812, 16.342, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-1.208, 0], [0, 0], [0, -1.283], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, -1.283], [0, 0], [-1.283, 0], [0, 0], [0, 0], [0, 0]], v: [[1.51, 32.609], [1.51, 32.609], [1.51, 2.491], [3.623, 0], [2.642, 0], [0, 2.491], [0, 32.685], [1.51, 32.609]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.239215686275, 0.721568627451, 0.988235294118, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 107", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 109, ty: 4, nm: "Path 106", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-9.813, 16.305, 0], ix: 2 }, a: { a: 0, k: [7.548, 7.095, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [14.946, 14.191], [15.097, 14.191], [15.097, 2.114]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.823529411765, 0.952941176471, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 106", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 110, ty: 4, nm: "Path 105", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-9.813, 16.229, 0], ix: 2 }, a: { a: 0, k: [7.548, 7.171, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [1.283, 0], [0, 0]], o: [[0, 0], [0, 0], [0, -1.283], [0, 0], [0, 0]], v: [[14.946, 14.342], [15.097, 14.342], [15.097, 2.491], [12.681, 0], [0, 0.151]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 105", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 111, ty: 4, nm: "Path 104", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.302, 16.569, 0], ix: 2 }, a: { a: 0, k: [4.227, 6.831, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -0.151], [0, 0], [-0.151, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0.151], [0, 0], [0.151, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 11.323], [0.151, 11.775], [1.963, 13.512], [2.415, 13.663], [8.454, 13.663], [1.585, 2.265]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.023529411765, 0.403921568627, 0.717647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 104", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 112, ty: 4, nm: "Path 103", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [2.604, 16.606, 0], ix: 2 }, a: { a: 0, k: [7.133, 6.794, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -0.151], [0, 0], [-0.151, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0.151], [0, 0], [0.151, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 11.247], [0.151, 11.7], [1.963, 13.436], [2.415, 13.587], [14.266, 13.587], [0.302, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0.439215686275, 0.8, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 103", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 113, ty: 4, nm: "Path 102", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [6.794, -5.284, 0], ix: 2 }, a: { a: 0, k: [10.568, 18.116, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [1.283, 0], [0, 0]], o: [[0, 0], [0, -1.283], [0, 0], [0, 0]], v: [[21.135, 36.232], [21.135, 2.491], [18.494, 0], [0, 0]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.023529411765, 0.403921568627, 0.717647058824, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 102", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 114, ty: 4, nm: "Path 101", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0.113, -5.284, 0], ix: 2 }, a: { a: 0, k: [17.248, 18.116, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [1.283, 0], [0, 0], [0, -1.208]], o: [[0, 0], [0, -1.283], [0, 0], [-1.283, 0], [0, 0]], v: [[34.496, 36.232], [34.496, 2.491], [31.854, 0], [2.415, 0], [0, 2.265]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0.439215686275, 0.8, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 101", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 115, ty: 4, nm: "Path 100", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [17.361, 23.4, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.283, 0], [0, 0], [0, -1.283], [0, 0], [0, 0], [0, 0], [0, 1.283], [0, 0]], o: [[0, 0], [-1.283, 0], [0, 0], [0, 0], [0, 0], [1.283, 0], [0, 0], [0, -1.283]], v: [[32.081, 0], [2.642, 0], [0, 2.491], [0, 32.685], [14.946, 46.8], [32.081, 46.8], [34.723, 44.309], [34.723, 2.491]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.062745098039, 0.501960784314, 0.866666666667, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 100", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 116, ty: 4, nm: "Path 99", parent: 154, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [17.361, 23.4, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.283, 0], [0, 0], [0, -1.283], [0, 0], [0, 0], [0, 0], [0, 1.283], [0, 0]], o: [[0, 0], [-1.283, 0], [0, 0], [0, 0], [0, 0], [1.283, 0], [0, 0], [0, -1.283]], v: [[32.081, 0], [2.642, 0], [0, 2.491], [0, 32.685], [14.946, 46.8], [32.081, 46.8], [34.723, 44.309], [34.723, 2.491]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.054901960784, 0.878431372549, 0.721568627451, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 99", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 117, ty: 4, nm: "Ellipse 7", parent: 149, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 3.265, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [8.974, 8.974], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.949019607843, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 7", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 118, ty: 4, nm: "Path 91", parent: 149, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 2.89, 0], ix: 2 }, a: { a: 0, k: [14.907, 20.959, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.507, 1.448], [4.005, -3.18], [0.611, -0.572], [0.531, -0.561], [1.308, -1.822], [0.543, -0.85], [0.454, -0.787], [0.41, -0.791], [0.404, -0.893], [0.578, -1.946], [0.166, -0.716], [0.114, -0.774], [-0.353, -1.629], [-3.145, -0.795], [-1.473, 1.17], [-0.612, 0.571], [-0.531, 0.561], [-1.307, 1.822], [-0.544, 0.851], [-0.454, 0.787], [-0.41, 0.791], [-0.405, 0.894], [-0.578, 1.946], [-0.166, 0.716], [-0.116, 0.774]], o: [[-2.507, -1.447], [-0.613, 0.487], [-0.537, 0.501], [-1.397, 1.474], [-0.571, 0.797], [-0.481, 0.75], [-0.454, 0.787], [-0.465, 0.897], [-0.925, 2.044], [-0.221, 0.742], [-0.189, 0.815], [-0.341, 2.3], [2.531, 1.877], [1.326, -0.557], [0.613, -0.487], [0.537, -0.501], [1.396, -1.474], [0.571, -0.797], [0.481, -0.75], [0.455, -0.786], [0.465, -0.897], [0.924, -2.043], [0.22, -0.741], [0.19, -0.815], [0.751, -5.059]], v: [[26.844, 0.659], [16.746, 3.347], [14.908, 4.937], [13.303, 6.532], [9.228, 11.5], [7.554, 13.973], [6.151, 16.279], [4.855, 18.648], [3.551, 21.335], [1.285, 27.347], [0.705, 29.535], [0.248, 31.921], [0.273, 37.845], [8.853, 41.918], [13.068, 39.323], [14.908, 37.733], [16.511, 36.139], [20.586, 31.17], [22.261, 28.696], [23.664, 26.39], [24.96, 24.022], [26.265, 21.334], [28.529, 15.322], [29.109, 13.135], [29.567, 10.748]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.221, -0.743], [0.543, -1.331], [0.43, -0.902], [0.754, -1.305], [0.819, -1.192], [0.588, -0.758], [0.915, -0.967], [0.537, -0.498], [0.546, -0.434], [1.343, -0.411], [0.767, 0.444], [0.292, 1.263], [-0.305, 2.051], [-0.166, 0.727], [-0.221, 0.743], [-0.543, 1.331], [-0.43, 0.901], [-0.754, 1.305], [-0.82, 1.192], [-0.588, 0.757], [-0.914, 0.967], [-0.536, 0.497], [-0.546, 0.434], [-1.343, 0.41], [-0.474, 0], [-0.414, -0.239], [-0.292, -1.263], [0.305, -2.051], [0.167, -0.727]], o: [[-0.381, 1.274], [-0.362, 0.889], [-0.622, 1.306], [-0.753, 1.304], [-0.566, 0.823], [-0.882, 1.136], [-0.531, 0.562], [-0.546, 0.508], [-1.625, 1.29], [-1.24, 0.378], [-0.767, -0.443], [-0.316, -1.369], [0.102, -0.69], [0.163, -0.714], [0.381, -1.274], [0.361, -0.889], [0.622, -1.306], [0.753, -1.305], [0.565, -0.822], [0.883, -1.137], [0.532, -0.563], [0.547, -0.508], [1.625, -1.289], [0.57, -0.175], [0.555, 0], [0.768, 0.443], [0.316, 1.369], [-0.102, 0.69], [-0.162, 0.714]], v: [[26.348, 14.73], [24.96, 18.647], [23.772, 21.335], [21.705, 25.26], [19.341, 29.011], [17.607, 31.384], [14.907, 34.545], [13.303, 36.138], [11.663, 37.551], [7.126, 40.15], [4.101, 40.052], [2.503, 37.48], [2.485, 32.253], [2.889, 30.125], [3.466, 27.939], [4.855, 24.022], [6.043, 21.335], [8.109, 17.41], [10.475, 13.657], [12.207, 11.286], [14.907, 8.124], [16.511, 6.532], [18.152, 5.118], [22.688, 2.52], [24.257, 2.258], [25.714, 2.618], [27.311, 5.189], [27.329, 10.416], [26.924, 12.544]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.949019607843, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 91", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 119, ty: 4, nm: "Path 90", parent: 149, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 3.265, 0], ix: 2 }, a: { a: 0, k: [23.875, 10.111, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[4.757, 1.878], [0.801, 0.245], [0.752, 0.18], [2.232, 0.221], [1.008, 0.045], [0.909, 0], [0.891, -0.041], [0.975, -0.096], [1.974, -0.472], [0.703, -0.214], [0.728, -0.287], [0, -2.895], [-4.756, -1.879], [-0.801, -0.245], [-0.752, -0.179], [-2.233, -0.222], [-1.009, -0.046], [-0.909, 0], [-0.89, 0.041], [-0.976, 0.096], [-1.974, 0.473], [-0.703, 0.215], [-0.728, 0.287], [0, 2.895]], o: [[-0.728, -0.287], [-0.703, -0.214], [-1.974, -0.472], [-0.975, -0.097], [-0.89, -0.041], [-0.909, 0], [-1.009, 0.045], [-2.232, 0.221], [-0.752, 0.18], [-0.801, 0.244], [-4.756, 1.878], [0, 2.895], [0.728, 0.287], [0.703, 0.214], [1.974, 0.473], [0.975, 0.096], [0.89, 0.041], [0.909, 0], [1.009, -0.046], [2.232, -0.221], [0.752, -0.18], [0.8, -0.244], [4.757, -1.879], [0, -2.895]], v: [[40.372, 2.71], [38.076, 1.912], [35.892, 1.32], [29.553, 0.276], [26.575, 0.062], [23.875, 0], [21.174, 0.062], [18.195, 0.276], [11.857, 1.32], [9.673, 1.912], [7.377, 2.71], [0, 10.111], [7.377, 17.513], [9.672, 18.311], [11.856, 18.902], [18.196, 19.947], [21.175, 20.161], [23.875, 20.222], [26.574, 20.161], [29.553, 19.947], [35.893, 18.902], [38.077, 18.311], [40.372, 17.513], [47.749, 10.111]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.948, -0.885], [1.929, -0.762], [0.713, -0.219], [0.753, -0.179], [1.425, -0.196], [0.995, -0.077], [1.507, 0], [1.443, 0.114], [0.95, 0.132], [1.294, 0.308], [0.7, 0.216], [0.65, 0.256], [1.026, 0.959], [0, 0.887], [-0.948, 0.885], [-1.929, 0.762], [-0.713, 0.219], [-0.753, 0.179], [-1.425, 0.196], [-0.995, 0.078], [-1.507, 0], [-1.443, -0.116], [-0.95, -0.132], [-1.294, -0.308], [-0.7, -0.216], [-0.65, -0.256], [-1.026, -0.959], [0, -0.887]], o: [[-1.026, 0.959], [-0.65, 0.256], [-0.7, 0.216], [-1.294, 0.308], [-0.95, 0.132], [-1.443, 0.115], [-1.507, 0], [-0.995, -0.078], [-1.425, -0.196], [-0.753, -0.179], [-0.713, -0.219], [-1.929, -0.762], [-0.948, -0.885], [0, -0.887], [1.026, -0.959], [0.65, -0.256], [0.7, -0.216], [1.294, -0.308], [0.95, -0.132], [1.443, -0.114], [1.507, 0], [0.995, 0.077], [1.425, 0.196], [0.753, 0.179], [0.713, 0.219], [1.929, 0.762], [0.948, 0.885], [0, 0.886]], v: [[44.059, 12.78], [39.542, 15.41], [37.496, 16.124], [35.316, 16.716], [31.228, 17.473], [28.308, 17.787], [23.875, 17.961], [19.442, 17.788], [16.521, 17.473], [12.433, 16.716], [10.253, 16.124], [8.207, 15.41], [3.69, 12.78], [2.261, 10.111], [3.69, 7.442], [8.207, 4.813], [10.253, 4.099], [12.433, 3.506], [16.521, 2.749], [19.442, 2.434], [23.875, 2.261], [28.308, 2.435], [31.228, 2.749], [35.316, 3.506], [37.496, 4.099], [39.542, 4.813], [44.059, 7.442], [45.488, 10.111]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.949019607843, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 90", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 120, ty: 4, nm: "Path 89", parent: 149, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 2.89, 0], ix: 2 }, a: { a: 0, k: [14.907, 20.959, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.341, 2.301], [0.189, 0.815], [0.22, 0.741], [0.924, 2.044], [0.465, 0.897], [0.455, 0.786], [0.481, 0.75], [0.572, 0.797], [1.397, 1.474], [0.537, 0.501], [0.614, 0.487], [2.507, -1.447], [-0.751, -5.06], [-0.19, -0.815], [-0.221, -0.741], [-0.925, -2.043], [-0.465, -0.897], [-0.454, -0.787], [-0.481, -0.75], [-0.571, -0.797], [-1.397, -1.474], [-0.537, -0.501], [-0.613, -0.487], [-1.326, -0.557], [-2.531, 1.876]], o: [[-0.115, -0.774], [-0.167, -0.716], [-0.578, -1.946], [-0.405, -0.894], [-0.41, -0.79], [-0.454, -0.787], [-0.543, -0.85], [-1.307, -1.822], [-0.531, -0.561], [-0.611, -0.572], [-4.005, -3.18], [-2.507, 1.448], [0.114, 0.774], [0.165, 0.716], [0.578, 1.946], [0.404, 0.894], [0.41, 0.791], [0.454, 0.787], [0.544, 0.851], [1.307, 1.822], [0.531, 0.561], [0.611, 0.572], [1.473, 1.17], [3.145, -0.795], [0.353, -1.628]], v: [[29.566, 31.921], [29.11, 29.534], [28.529, 27.347], [26.265, 21.335], [24.96, 18.647], [23.663, 16.279], [22.261, 13.973], [20.586, 11.5], [16.511, 6.532], [14.908, 4.937], [13.068, 3.347], [2.97, 0.659], [0.248, 10.749], [0.706, 13.135], [1.286, 15.322], [3.551, 21.335], [4.855, 24.022], [6.151, 26.39], [7.554, 28.697], [9.229, 31.171], [13.303, 36.138], [14.908, 37.733], [16.746, 39.323], [20.961, 41.918], [29.541, 37.846]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.316, -1.369], [0.768, -0.443], [1.24, 0.378], [1.625, 1.29], [0.547, 0.507], [0.532, 0.563], [0.882, 1.136], [0.565, 0.822], [0.753, 1.305], [0.622, 1.306], [0.361, 0.889], [0.381, 1.274], [0.162, 0.714], [0.102, 0.69], [-0.316, 1.369], [-0.767, 0.443], [-0.555, 0], [-0.57, -0.175], [-1.625, -1.289], [-0.546, -0.509], [-0.531, -0.562], [-0.883, -1.137], [-0.565, -0.822], [-0.753, -1.304], [-0.622, -1.306], [-0.361, -0.889], [-0.381, -1.274], [-0.163, -0.714], [-0.102, -0.69]], o: [[-0.292, 1.263], [-0.767, 0.444], [-1.343, -0.411], [-0.546, -0.434], [-0.536, -0.498], [-0.914, -0.967], [-0.588, -0.758], [-0.82, -1.192], [-0.754, -1.305], [-0.43, -0.901], [-0.543, -1.331], [-0.221, -0.743], [-0.167, -0.727], [-0.305, -2.051], [0.292, -1.263], [0.415, -0.239], [0.474, 0], [1.343, 0.41], [0.546, 0.434], [0.537, 0.497], [0.915, 0.967], [0.588, 0.758], [0.819, 1.192], [0.754, 1.305], [0.43, 0.902], [0.543, 1.331], [0.221, 0.743], [0.166, 0.727], [0.305, 2.051]], v: [[27.311, 37.48], [25.714, 40.052], [22.688, 40.15], [18.152, 37.552], [16.511, 36.139], [14.907, 34.545], [12.208, 31.385], [10.475, 29.012], [8.109, 25.26], [6.043, 21.335], [4.855, 18.648], [3.466, 14.73], [2.89, 12.544], [2.485, 10.416], [2.503, 5.189], [4.101, 2.618], [5.558, 2.258], [7.126, 2.52], [11.662, 5.118], [13.303, 6.533], [14.907, 8.124], [17.608, 11.286], [19.341, 13.659], [21.705, 17.41], [23.772, 21.335], [24.959, 24.023], [26.348, 27.94], [26.925, 30.126], [27.329, 32.253]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.949019607843, 0.949019607843, 0.949019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 89", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 121, ty: 4, nm: "Path 88", parent: 149, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [24.6, 24.6, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -13.586], [6.047, -4.482], [3.145, -0.795], [2.089, 0], [1.937, 0.491], [2.531, 1.877], [0, 8.104], [-13.586, 0]], o: [[0, 8.105], [-2.531, 1.876], [-1.937, 0.491], [-2.089, 0], [-3.145, -0.795], [-6.047, -4.482], [0, -13.586], [13.586, 0]], v: [[49.2, 24.6], [39.233, 44.376], [30.654, 48.449], [24.6, 49.2], [18.545, 48.449], [9.966, 44.375], [0, 24.6], [24.6, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.352941176471, 0.854901960784, 0.992156862745, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 88", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 122, ty: 4, nm: "Path 98", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-9.221, -13.275, 0], ix: 2 }, a: { a: 0, k: [2.797, 3.432, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 2.2], [2.306, 0], [0, 0], [0, 0], [0, 0]], o: [[0, -2.225], [0, 0], [0, 0], [0, 0], [2.174, -1e-3]], v: [[5.594, 3.401], [2.07, 0], [0, 0], [0, 6.864], [2.173, 6.864]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.753, 0], [0, 0], [0, -1.564]], o: [[0, 0], [0.839, 0], [0, 1.631]], v: [[1.969, 5.243], [1.969, 1.621], [3.585, 3.401]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 98", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 123, ty: 4, nm: "Path 97", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-15.658, -13.275, 0], ix: 2 }, a: { a: 0, k: [3.079, 3.433, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-0.12, 0.329], [-0.133, -0.284], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.122, -0.352], [0.036, 0.087], [0.088, 0.186], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0.118, -0.286], [0.139, 0.344], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.102, 0.256], [-0.039, -0.094], [-0.098, -0.238], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[2.124, 6.863], [2.642, 5.612], [3.001, 4.702], [3.394, 5.615], [3.953, 6.864], [6.159, 6.864], [4.3, 3.421], [6.053, 0], [3.928, 0], [3.516, 1.15], [3.173, 2.061], [3.06, 1.789], [2.786, 1.15], [2.309, 1e-3], [0.103, 1e-3], [1.858, 3.341], [0, 6.865], [2.124, 6.865]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 97", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 124, ty: 4, nm: "Rectangle 110", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-20.704, -11.2, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [1, 2], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 110", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 125, ty: 4, nm: "Path 96", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [4.92, 15.744, 0], ix: 2 }, a: { a: 0, k: [5.631, 4.928, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[11.263, 9.856], [9.023, 9.856], [8.583, 9.133], [5.631, 3.966], [3.391, 7.888], [5.631, 7.895], [6.193, 7.896], [7.369, 9.856], [0, 9.856], [5.631, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 96", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 126, ty: 4, nm: "Path 95", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [19.188, -19.188, 0], ix: 2 }, a: { a: 0, k: [5.412, 5.412, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-2.174, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 2.174], [0, 0], [0, 0], [0, 0]], v: [[0.984, 0], [0, 0], [0, 6.888], [3.936, 10.824], [10.824, 10.824], [10.824, 9.84]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.549019607843, 0.854901960784, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 95", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 127, ty: 4, nm: "Path 94", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [4.92, 15.744, 0], ix: 2 }, a: { a: 0, k: [9.84, 8.856, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.174, 0], [0, 0], [0, 2.174], [0, 0], [-2.174, 0], [0, 0], [0, -2.174], [0, 0]], o: [[0, 0], [-2.174, 0], [0, 0], [0, -2.174], [0, 0], [2.174, 0], [0, 0], [0, 2.174]], v: [[15.744, 17.712], [3.936, 17.712], [0, 13.776], [0, 3.936], [3.936, 0], [15.744, 0], [19.68, 3.936], [19.68, 13.776]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.247058823529, 0.760784313725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 94", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 128, ty: 4, nm: "Path 93", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-7.872, -13.284, 0], ix: 2 }, a: { a: 0, k: [16.728, 6.396, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -2.174], [0, 0], [2.174, 0], [0, 0], [0, 2.174], [0, 0], [-2.174, 0], [0, 0]], o: [[0, 0], [0, 2.174], [0, 0], [-2.174, 0], [0, 0], [0, -2.174], [0, 0], [2.174, 0]], v: [[33.456, 3.936], [33.456, 8.856], [29.52, 12.792], [3.936, 12.792], [0, 8.856], [0, 3.936], [3.936, 0], [29.52, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.247058823529, 0.760784313725, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 93", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 129, ty: 4, nm: "Path 92", parent: 152, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [24.6, 24.6, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -2.174], [0, 0], [0, 0], [0, -2.174], [0, 0], [-2.174, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-2.175, 0], [0, 0], [0, 0], [-2.174, 0], [0, 0], [0, 2.174], [0, 0], [0, 0], [0, 2.174], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [-2.174, 0], [0, 0], [0, 0], [-2.174, 0], [0, 0], [0, 2.174], [0, 0], [0, 0], [0, 0], [0, 0], [0, 2.175], [0, 0], [0, 0], [0, 2.174], [0, 0], [2.174, 0], [0, 0], [0, 0], [2.174, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[38.376, 0], [13.776, 0], [9.84, 3.936], [9.84, 4.92], [3.936, 4.92], [0, 8.856], [0, 13.776], [3.936, 17.712], [9.84, 17.712], [9.84, 24.6], [9.84, 37.392], [9.84, 41.328], [13.776, 45.264], [16.728, 45.264], [19.68, 45.264], [23.616, 49.2], [35.424, 49.2], [39.36, 45.264], [42.312, 45.264], [45.264, 45.264], [49.2, 41.328], [49.2, 10.824], [49.2, 9.84], [39.36, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, -2.175], [2.174, 0]], o: [[0, -2.174], [2.175, 0]], v: [[33.456, 8.856], [29.52, 4.92]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 2, ty: "sh", ix: 3, ks: { a: 0, k: { i: [[0, 2.174], [2.175, 0]], o: [[0, 2.175], [2.174, 0]], v: [[33.456, 13.776], [29.52, 17.712]], c: !0 }, ix: 2 }, nm: "Path 3", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.850980392157, 0.952941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 92", np: 5, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 130, ty: 4, nm: "Path 87", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.62, -4.021, 0], ix: 2 }, a: { a: 0, k: [3.336, 6.442, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.672, 0], [0.179, 0.063], [-0.3, 0.848], [0, 0], [-0.848, -0.301], [0.3, -0.848], [0, 0]], o: [[-0.18, 0], [-0.848, -0.3], [0, 0], [0.3, -0.848], [0.848, 0.301], [0, 0], [-0.236, 0.669]], v: [[1.631, 12.884], [1.088, 12.791], [0.094, 10.707], [3.501, 1.087], [5.584, 0.094], [6.577, 2.177], [3.17, 11.797]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.057, 0], [0.075, -0.212], [0, 0], [-0.269, -0.096], [-0.095, 0.269], [0, 0], [0.269, 0.096]], o: [[-0.214, 0], [0, 0], [-0.096, 0.27], [0.27, 0.096], [0, 0], [0.095, -0.27], [-0.057, -0.02]], v: [[5.04, 1.113], [4.55, 1.459], [1.143, 11.079], [1.459, 11.741], [2.121, 11.425], [5.528, 1.806], [5.212, 1.143]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 87", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 131, ty: 4, nm: "Path 86", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-8.666, -4.02, 0], ix: 2 }, a: { a: 0, k: [4.013, 5.21, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.077, 0], [0.286, 0.215], [0, 0], [0, 0.518], [-0.414, 0.311], [0, 0], [-0.432, -0.061], [-0.262, -0.348], [0.061, -0.432], [0.348, -0.262], [0, 0], [0, 0], [-0.061, -0.432], [0.262, -0.348], [0.432, -0.061]], o: [[-0.351, 0], [0, 0], [-0.414, -0.311], [0, -0.518], [0, 0], [0.348, -0.262], [0.432, 0.061], [0.262, 0.348], [-0.061, 0.432], [0, 0], [0, 0], [0.349, 0.262], [0.061, 0.431], [-0.262, 0.348], [-0.078, 0.011]], v: [[6.391, 10.421], [5.414, 10.093], [0.651, 6.515], [0, 5.21], [0.651, 3.905], [5.413, 0.327], [6.623, 0.017], [7.699, 0.652], [8.01, 1.862], [7.375, 2.937], [4.349, 5.21], [7.375, 7.483], [8.011, 8.56], [7.699, 9.769], [6.624, 10.404]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.025, 0], [0.09, -0.068], [0, 0], [0, -0.167], [-0.133, -0.1], [0, 0], [-0.138, 0.02], [-0.083, 0.111], [0.019, 0.137], [0.111, 0.084], [0, 0], [0, 0.175], [-0.14, 0.105], [0, 0], [-0.02, 0.137], [0.083, 0.111], [0.138, 0.02]], o: [[-0.112, 0], [0, 0], [-0.133, 0.1], [0, 0.167], [0, 0], [0.111, 0.083], [0.137, -0.019], [0.083, -0.111], [-0.019, -0.137], [0, 0], [-0.14, -0.105], [0, -0.175], [0, 0], [0.111, -0.083], [0.02, -0.137], [-0.083, -0.111], [-0.025, -3e-3]], v: [[6.392, 1.113], [6.083, 1.217], [1.32, 4.795], [1.114, 5.21], [1.321, 5.625], [6.083, 9.203], [6.467, 9.302], [6.809, 9.1], [6.909, 8.715], [6.706, 8.373], [3.088, 5.655], [2.866, 5.21], [3.088, 4.765], [6.706, 2.047], [6.908, 1.705], [6.809, 1.32], [6.467, 1.119]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 86", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 132, ty: 4, nm: "Path 85", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [3.512, -4.021, 0], ix: 2 }, a: { a: 0, k: [4.013, 5.21, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.341, 0], [0.321, 0.426], [-0.719, 0.541], [0, 0], [0, 0], [0.061, 0.432], [-0.262, 0.348], [-0.432, 0.061], [-0.348, -0.261], [0, 0], [0, -0.518], [0.414, -0.311], [0, 0]], o: [[-0.496, 0], [-0.541, -0.719], [0, 0], [0, 0], [-0.348, -0.262], [-0.061, -0.432], [0.263, -0.349], [0.431, -0.06], [0, 0], [0.414, 0.311], [0, 0.518], [0, 0], [-0.293, 0.22]], v: [[1.634, 10.42], [0.327, 9.769], [0.651, 7.484], [3.677, 5.21], [0.652, 2.937], [0.017, 1.861], [0.327, 0.652], [1.405, 0.016], [2.612, 0.327], [7.375, 3.906], [8.026, 5.21], [7.375, 6.515], [2.612, 10.093]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0.112, 0], [0.024, -3e-3], [0.083, -0.111], [-0.02, -0.137], [-0.11, -0.083], [0, 0], [0, -0.175], [0.14, -0.105], [0, 0], [-0.172, -0.229], [-0.228, 0.171], [0, 0], [0, 0.165], [0.132, 0.099], [0, 0]], o: [[-0.024, 0], [-0.137, 0.019], [-0.083, 0.11], [0.02, 0.138], [0, 0], [0.14, 0.105], [0, 0.175], [0, 0], [-0.229, 0.172], [0.172, 0.229], [0, 0], [0.132, -0.099], [0, -0.165], [0, 0], [-0.091, -0.068]], v: [[1.633, 1.113], [1.56, 1.118], [1.217, 1.32], [1.119, 1.705], [1.32, 2.047], [4.938, 4.765], [5.16, 5.21], [4.938, 5.655], [1.32, 8.374], [1.217, 9.1], [1.943, 9.203], [6.706, 5.625], [6.913, 5.21], [6.706, 4.795], [1.944, 1.217]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 85", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 133, ty: 4, nm: "Path 84", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.62, -4.021, 0], ix: 2 }, a: { a: 0, k: [2.779, 5.886, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.559, 0.198], [0.201, -0.566], [0, 0], [-0.56, -0.199], [-0.197, 0.558], [0, 0]], o: [[-0.554, -0.196], [0, 0], [-0.198, 0.56], [0.563, 0.199], [0, 0], [0.199, -0.562]], v: [[4.842, 0.062], [3.469, 0.716], [0.062, 10.336], [0.717, 11.709], [2.089, 11.054], [5.496, 1.435]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.396078431373, 0.494117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 84", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 134, ty: 4, nm: "Path 83", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-8.666, -4.02, 0], ix: 2 }, a: { a: 0, k: [3.457, 4.653, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.476, 0.358], [0, 0], [0, 0], [0.357, 0.475], [0.474, -0.356], [0, 0], [0, -0.341], [-0.273, -0.205], [0, 0], [-0.357, 0.475]], o: [[0, 0], [0, 0], [0.475, -0.357], [-0.356, -0.474], [0, 0], [-0.273, 0.205], [0, 0.341], [0, 0], [0.475, 0.357], [0.357, -0.474]], v: [[6.484, 7.371], [2.866, 4.653], [6.484, 1.935], [6.697, 0.429], [5.191, 0.215], [0.429, 3.793], [0, 4.653], [0.429, 5.513], [5.191, 9.091], [6.697, 8.877]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.396078431373, 0.494117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 83", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 135, ty: 4, nm: "Path 82", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [3.513, -4.021, 0], ix: 2 }, a: { a: 0, k: [3.456, 4.653, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.573, 0.431], [0, 0], [0.358, -0.477], [-0.474, -0.356], [0, 0], [0, 0], [-0.356, -0.474], [-0.472, 0.355], [0, 0]], o: [[0, 0], [-0.473, -0.356], [-0.356, 0.474], [0, 0], [0, 0], [-0.474, 0.356], [0.358, 0.476], [0, 0], [0.572, -0.43]], v: [[6.483, 3.794], [1.721, 0.216], [0.215, 0.43], [0.429, 1.935], [4.047, 4.654], [0.429, 7.372], [0.215, 8.878], [1.721, 9.091], [6.483, 5.513]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.396078431373, 0.494117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 82", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 136, ty: 4, nm: "Path 81", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-15.142, -20.078, 0], ix: 2 }, a: { a: 0, k: [6.087, 6.056, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.822, 0], [0, 0], [0, 0.307], [-0.307, 0], [0, 0], [0, 1.208], [0, 0], [-0.307, 0], [0, -0.307], [0, 0]], o: [[0, 0], [-0.307, 0], [0, -0.307], [0, 0], [1.208, 0], [0, 0], [0, -0.307], [0.307, 0], [0, 0], [0, 1.822]], v: [[8.869, 12.113], [0.557, 12.113], [0, 11.556], [0.557, 10.999], [8.869, 10.999], [11.06, 8.808], [11.06, 0.557], [11.616, 0], [12.173, 0.557], [12.173, 8.809]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 81", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 137, ty: 4, nm: "Path 80", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.676, -8.224, 0], ix: 2 }, a: { a: 0, k: [18.715, 18.133, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.307, 0], [0, 0], [0, 0.307], [0, 0], [-0.104, 0.104], [0, 0], [-0.148, 0], [0, 0], [0, -1.822], [0, 0]], o: [[0, 0], [-0.307, 0], [0, 0], [0, -0.148], [0, 0], [0.104, -0.104], [0, 0], [1.822, 0], [0, 0], [0, 0.307]], v: [[36.874, 36.265], [0.557, 36.265], [0, 35.708], [0, 11.779], [0.163, 11.385], [11.385, 0.163], [11.779, 0], [34.126, 0], [37.431, 3.304], [37.431, 35.708]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [1.208, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, -1.208], [0, 0], [0, 0], [0, 0]], v: [[1.113, 35.152], [36.317, 35.152], [36.317, 3.304], [34.126, 1.113], [12.009, 1.113], [1.113, 12.009]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 80", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 138, ty: 4, nm: "Ellipse 6", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-9.048, 26.19, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [1.504, 1.504], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.960784313725, 0.78431372549, 0.298039215686, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 6", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 139, ty: 4, nm: "Path 79", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-17.332, -25.554, 0], ix: 2 }, a: { a: 0, k: [1.507, 1.507, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.304, 0], [0, 0], [0, 0], [0.304, 0], [0, -0.304], [0, 0], [0, 0], [0, -0.304], [-0.304, 0], [0, 0], [0, 0], [-0.304, 0], [0, 0.304], [0, 0], [0, 0], [0, 0.304]], o: [[0, 0], [0, 0], [0, -0.304], [-0.304, 0], [0, 0], [0, 0], [-0.304, 0], [0, 0.304], [0, 0], [0, 0], [0, 0.304], [0.304, 0], [0, 0], [0, 0], [0.304, 0], [0, -0.304]], v: [[2.464, 0.957], [2.058, 0.957], [2.058, 0.551], [1.507, 0], [0.957, 0.551], [0.957, 0.957], [0.551, 0.957], [0, 1.507], [0.551, 2.058], [0.957, 2.058], [0.957, 2.464], [1.507, 3.015], [2.058, 2.464], [2.058, 2.058], [2.464, 2.058], [3.015, 1.507]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.439215686275, 0.839215686275, 0.976470588235, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 79", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 140, ty: 4, nm: "Ellipse 5", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [18.476, -5.705, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [1.504, 1.504], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.529411764706, 0.819607843137, 0.278431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 5", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 141, ty: 4, nm: "Ellipse 4", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-12.028, -27.748, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [1.504, 1.504], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.396078431373, 0.494117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 4", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 142, ty: 4, nm: "Path 78", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-3.222, 27.193, 0], ix: 2 }, a: { a: 0, k: [1.335, 1.307, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.033, -6e-3], [0.123, -0.635], [6e-3, 0.032], [0.648, 0.121], [-0.033, 6e-3], [-0.123, 0.635], [-6e-3, -0.032], [-0.648, -0.121]], o: [[-0.648, 0.121], [-6e-3, 0.032], [-0.123, -0.635], [-0.033, -6e-3], [0.648, -0.121], [6e-3, -0.032], [0.123, 0.635], [0.033, 6e-3]], v: [[2.645, 1.335], [1.363, 2.591], [1.306, 2.591], [0.024, 1.335], [0.024, 1.28], [1.306, 0.024], [1.363, 0.024], [2.645, 1.28]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.396078431373, 0.494117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 78", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 143, ty: 4, nm: "Path 77", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [19.489, 0.751, 0], ix: 2 }, a: { a: 0, k: [1.903, 1.864, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.046, -9e-3], [0.176, -0.905], [9e-3, 0.045], [0.924, 0.172], [-0.046, 9e-3], [-0.176, 0.905], [-9e-3, -0.045], [-0.924, -0.172]], o: [[-0.924, 0.172], [-9e-3, 0.045], [-0.176, -0.905], [-0.046, -9e-3], [0.924, -0.172], [9e-3, -0.045], [0.176, 0.905], [0.046, 9e-3]], v: [[3.771, 1.904], [1.943, 3.694], [1.862, 3.694], [0.035, 1.904], [0.035, 1.824], [1.862, 0.034], [1.943, 0.034], [3.771, 1.824]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.960784313725, 0.78431372549, 0.298039215686, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 77", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 144, ty: 4, nm: "Path 76", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-15.224, -20.189, 0], ix: 2 }, a: { a: 0, k: [5.611, 5.611, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 1.511], [0, 0]], o: [[0, 0], [1.511, 0], [0, 0], [0, 0]], v: [[0, 11.222], [8.475, 11.222], [11.222, 8.474], [11.222, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.396078431373, 0.494117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 76", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 145, ty: 4, nm: "Path 75", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.676, 16.463, 0], ix: 2 }, a: { a: 0, k: [18.715, 7.668, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.822, 0], [0, 0], [0, 1.822], [0, 0], [-0.307, 0], [0, -0.307], [0, 0], [-1.208, 0], [0, 0], [0, 1.208], [0, 0], [-0.307, 0], [0, -0.307], [0, 0]], o: [[0, 0], [-1.822, 0], [0, 0], [0, -0.307], [0.307, 0], [0, 0], [0, 1.208], [0, 0], [1.208, 0], [0, 0], [0, -0.307], [0.307, 0], [0, 0], [0, 1.822]], v: [[34.126, 15.335], [3.304, 15.335], [0, 12.031], [0, 0.557], [0.557, 0], [1.113, 0.557], [1.113, 12.031], [3.304, 14.222], [34.126, 14.222], [36.317, 12.031], [36.317, 0.557], [36.874, 0], [37.43, 0.557], [37.43, 12.031]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 75", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 146, ty: 4, nm: "Path 74", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.176, 16.499, 0], ix: 2 }, a: { a: 0, k: [2.455, 3.706, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.831, 0.986], [-1.23, 0], [-0.098, -0.514], [-0.053, 0], [0, 0], [8e-3, 0.067], [1.49, 0], [0.425, -0.673], [-0.367, -0.503], [0, -1.519], [0.765, 0], [0.06, 0.599], [0.057, 0], [0, 0], [-6e-3, -0.065], [-1.363, 0], [0, 1.08]], o: [[-0.35, -0.415], [0.736, 0], [0.01, 0.053], [0, 0], [0.067, 0], [-0.134, -1.047], [-0.796, 0], [-0.417, 0.66], [0.974, 1.332], [0, 0.578], [-0.82, 0], [-6e-3, -0.057], [0, 0], [-0.065, 0], [0.112, 1.281], [1.486, 0], [0, -2.323]], v: [[1.39, 2.517], [2.296, 0.951], [3.563, 1.917], [3.672, 2.007], [4.649, 2.007], [4.76, 1.882], [2.296, 0], [0.283, 0.929], [0.307, 3.049], [3.721, 5.436], [2.596, 6.461], [1.221, 5.325], [1.11, 5.225], [0.143, 5.225], [0.032, 5.346], [2.625, 7.412], [4.91, 5.406]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 74", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 147, ty: 4, nm: "Path 73", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-5.643, 16.544, 0], ix: 2 }, a: { a: 0, k: [2.071, 3.661, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.061, 0], [0, 0], [0, -0.061], [0, 0], [0.608, 0], [0, 0.713], [0.061, 0], [0, 0], [0, -0.061], [-1.314, 0], [0, 1.195], [0, 0]], o: [[0, 0], [-0.061, 0], [0, 0], [0, 0.575], [-0.708, 0], [0, -0.061], [0, 0], [-0.061, 0], [0, 1.445], [1.27, 0], [0, 0], [0, -0.061]], v: [[4.03, 0], [3.122, 0], [3.011, 0.111], [3.011, 5.336], [2.115, 6.272], [1.13, 5.067], [1.018, 4.955], [0.111, 4.955], [0, 5.067], [2.155, 7.322], [4.141, 5.336], [4.141, 0.111]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 73", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 148, ty: 4, nm: "Path 72", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.676, 16.463, 0], ix: 2 }, a: { a: 0, k: [18.159, 7.111, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-1.511, 0], [0, 0], [0, 1.511], [0, 0]], o: [[0, 0], [0, 1.511], [0, 0], [1.511, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 11.474], [2.748, 14.222], [33.57, 14.222], [36.317, 11.474], [36.317, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.988235294118, 0.396078431373, 0.494117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 72", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 149, ty: 4, nm: "react", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 34, s: [257, 249.5, 0], to: [-0.566, -22.467, 0], ti: [0.566, 22.467, 0] }, { t: 53, s: [253.60400000000004, 114.7, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [49.2, 49.2], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 34, op: 214, st: 34, bm: 0 }, { ddd: 0, ind: 150, ty: 4, nm: "css-3", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 28, s: [257, 249.5, 0], to: [34.622, -18.333, 0], ti: [-34.622, 18.333, 0] }, { t: 47, s: [464.729, 139.5, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [40.95, 46.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 28, op: 208, st: 28, bm: 0 }, { ddd: 0, ind: 151, ty: 4, nm: "html-5", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 25, s: [257, 249.5, 0], to: [26.664, -26.467, 0], ti: [-26.664, 26.467, 0] }, { t: 44, s: [416.985, 90.7, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [43.05, 49.2], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 25, op: 205, st: 25, bm: 0 }, { ddd: 0, ind: 152, ty: 4, nm: "xd", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 22, s: [257, 249.5, 0], to: [13.701, -32.3, 0], ti: [-13.701, 32.3, 0] }, { t: 41, s: [339.204, 55.7, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [49.2, 49.2], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 22, op: 202, st: 22, bm: 0 }, { ddd: 0, ind: 153, ty: 4, nm: "js", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 19, s: [257, 249.5, 0], to: [-0.057, -33.917, 0], ti: [0.057, 33.917, 0] }, { t: 38, s: [256.657, 46, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [42.783, 57], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 19, op: 199, st: 19, bm: 0 }, { ddd: 0, ind: 154, ty: 4, nm: "ps", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 16, s: [257, 249.5, 0], to: [-15.506, -31.333, 0], ti: [15.506, 31.333, 0] }, { t: 35, s: [163.965, 61.5, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [34.723, 46.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 16, op: 196, st: 16, bm: 0 }, { ddd: 0, ind: 155, ty: 4, nm: "Ai", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 13, s: [257, 249.5, 0], to: [-26.226, -26.5, 0], ti: [26.226, 26.5, 0] }, { t: 32, s: [99.643, 90.5, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [34.723, 46.8], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 13, op: 193, st: 13, bm: 0 }, { ddd: 0, ind: 156, ty: 4, nm: "ae", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 10, s: [257, 249.5, 0], to: [-35.896, -18.967, 0], ti: [35.896, 18.967, 0] }, { t: 29, s: [41.623, 135.7, 0] }], ix: 2, x: `var $bm_rt;
function doIt() {
    var easingEquation, val1, val2, val3;
    var ew_one = backOut;
    var ew_two = expoIn;
    var n = 0;
    if (numKeys > 0) {
        n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n < 2) {
            easingEquation = ew_one;
        } else if (n >= $bm_sub(numKeys, 1)) {
            easingEquation = ew_two;
        } else {
            return null;
        }
    }
    try {
        var key1 = key(n);
        var key2 = key($bm_sum(n, 1));
    } catch (e) {
        return null;
    }
    var dim = 1;
    try {
        key(1)[1].length;
        dim = 2;
        key(1)[2].length;
        dim = 3;
    } catch (e) {
    }
    var t = $bm_sub(time, key1.time);
    var d = $bm_sub(key2.time, key1.time);
    var sX = key1[0];
    var eX = $bm_sub(key2[0], key1[0]);
    if (dim >= 2) {
        var sY = key1[1];
        var eY = $bm_sub(key2[1], key1[1]);
        if (dim >= 3) {
            var sZ = key1[2];
            var eZ = $bm_sub(key2[2], key1[2]);
        }
    }
    if (time < key1.time || time > key2.time) {
        return value;
    } else {
        val1 = easingEquation(t, sX, eX, d);
        switch (dim) {
        case 1:
            return val1;
            break;
        case 2:
            val2 = easingEquation(t, sY, eY, d);
            return [
                val1,
                val2
            ];
            break;
        case 3:
            val2 = easingEquation(t, sY, eY, d);
            val3 = easingEquation(t, sZ, eZ, d);
            return [
                val1,
                val2,
                val3
            ];
            break;
        default:
            return null;
        }
    }
}
var IN_EXPO_CORRECTION = 0.000976563;
var OUT_EXPO_CORRECTION = 1.000976563;
var s = 1.70158;
var p = 0.81;
var a = 50;
function bounceOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_mul($bm_mul(7.5625, t), t)), b);
    } else if (t < 2 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);
    } else if (t < 2.5 / 2.75) {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);
    } else {
        return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);
    }
}
function bounceIn(t, b, c, d) {
    return $bm_sum($bm_sub(c, bounceOut($bm_sub(d, t), 0, c, d)), b);
}
function bounceInOut(t, b, c, d) {
    if (t < $bm_div(d, 2))
        return $bm_sum($bm_mul(bounceIn($bm_mul(t, 2), 0, c, d), 0.5), b);
    else
        return bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}
function backIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul(c, t /= d), t), $bm_sub($bm_mul($bm_sum(s, 1), t), s)), b);
}
function backInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div(c, 2), $bm_mul($bm_mul(t, t), $bm_sub($bm_mul($bm_sum(s *= 1.525, 1), t), s))), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul(t -= 2, t), $bm_sum($bm_mul($bm_sum(s *= 1.525, 1), t), s)), 2)), b);
}
function backOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul(t = t / d - 1, t), $bm_sum($bm_mul($bm_sum(s, 1), t), s)), 1)), b);
}
function circIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t /= d, t))), 1)), b);
}
function circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.sqrt($bm_sub(1, $bm_mul(t, t))), 1)), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum(Math.sqrt($bm_sub(1, $bm_mul(t -= 2, t))), 1)), b);
}
function circOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sqrt($bm_sub(1, $bm_mul(t = t / d - 1, t)))), b);
}
function elasticIn(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_neg($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
}
function elasticInOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d / 2) == 2)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    if (t < 1)
        return $bm_sum($bm_mul(-0.5, $bm_mul($bm_mul(a, Math.pow(2, $bm_mul(10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p)))), b);
    return $bm_sum($bm_sum($bm_mul($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t -= 1))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), 0.5), c), b);
}
function elasticOut(t, b, c, d) {
    if (t == 0)
        return b;
    if ((t /= d) == 1)
        return $bm_sum(b, c);
    if (!p)
        p = $bm_mul(d, 0.3);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = $bm_div(p, 4);
    } else
        s = $bm_mul($bm_div(p, $bm_mul(2, Math.PI)), Math.asin($bm_div(c, a)));
    return $bm_sum($bm_sum($bm_mul($bm_mul(a, Math.pow(2, $bm_mul(-10, t))), Math.sin($bm_div($bm_mul($bm_sub($bm_mul(t, d), s), $bm_mul(2, Math.PI)), p))), c), b);
}
function expoIn(t, b, c, d) {
    return t == 0 ? b : c * (Math.pow(2, 10 * (t / d - 1)) - IN_EXPO_CORRECTION) + b;
}
function expoInOut(t, b, c, d) {
    var v;
    if ((t /= d / 2) < 1) {
        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), IN_EXPO_CORRECTION);
    } else {
        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), IN_EXPO_CORRECTION);
    }
    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));
}
function expoOut(t, b, c, d) {
    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;
}
function quadIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul(c, t /= d), t), b);
}
function quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_div(c, 2), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul(--t, $bm_sub(t, 2)), 1)), b);
}
function quadOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_neg(c), t /= d), $bm_sub(t, 2)), b);
}
function quartIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), b);
}
function quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), 2)), b);
}
function quartOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_neg(c), $bm_sub($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), 1)), b);
}
function quintIn(t, b, c, d) {
    return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul(c, t /= d), t), t), t), t), b);
}
function quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
        return $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul($bm_mul($bm_div(c, 2), t), t), t), t), t), b);
    return $bm_sum($bm_mul($bm_div(c, 2), $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t -= 2, t), t), t), t), 2)), b);
}
function quintOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, $bm_sum($bm_mul($bm_mul($bm_mul($bm_mul(t = t / d - 1, t), t), t), t), 1)), b);
}
function sineIn(t, b, c, d) {
    return $bm_sum($bm_sum($bm_mul($bm_neg(c), Math.cos($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), c), b);
}
function sineInOut(t, b, c, d) {
    return $bm_sum($bm_mul($bm_div($bm_neg(c), 2), $bm_sub(Math.cos($bm_div($bm_mul(Math.PI, t), d)), 1)), b);
}
function sineOut(t, b, c, d) {
    return $bm_sum($bm_mul(c, Math.sin($bm_mul($bm_div(t, d), $bm_div(Math.PI, 2)))), b);
}
$bm_rt = doIt() || value;` }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "rc", d: 1, s: { a: 0, k: [36.503, 49.2], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }], ip: 10, op: 190, st: 10, bm: 0 }, { ddd: 0, ind: 157, ty: 4, nm: "Path 71", parent: 153, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2.676, -8.224, 0], ix: 2 }, a: { a: 0, k: [18.159, 17.576, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [1.511, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, -1.511], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[36.317, 35.152], [36.317, 2.748], [33.57, 0], [11.222, 0], [0, 11.222], [0, 35.152]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.929411764706, 0.956862745098, 0.988235294118, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 71", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 158, ty: 4, nm: "Path 68", parent: 156, sr: 1, ks: { o: { a: 0, k: 10, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [7.102, -0.436, 0], ix: 2 }, a: { a: 0, k: [4.96, 5.753, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.492, 0], [0, -3.492], [-3.333, 0], [-0.714, 0.317], [0, 0.238], [0, 0], [0.159, 0], [0.079, -0.079], [1.27, 0], [0.159, 2.619], [0, 0], [0, 0.555]], o: [[-3.095, 0], [0, 3.412], [1.666, 0], [0.159, -0.079], [0, 0], [0, -0.079], [-0.079, -0.079], [-0.714, 0.317], [-1.508, 0], [0, 0], [0.476, 0], [0, -2.301]], v: [[5.237, 0], [0, 5.952], [5.475, 11.506], [9.046, 10.792], [9.285, 10.316], [8.967, 9.046], [8.729, 8.808], [8.412, 8.808], [5.714, 9.205], [2.619, 6.19], [9.443, 6.19], [9.919, 5.079]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[-1.666, 0], [-0.317, -0.397], [-0.079, -0.794], [0, 0]], o: [[0.714, 0], [0.397, 0.397], [0, 0], [0.159, -0.952]], v: [[5.079, 2.381], [6.666, 2.936], [7.301, 4.682], [2.698, 4.682]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 68", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 159, ty: 4, nm: "Path 67", parent: 156, sr: 1, ks: { o: { a: 0, k: 10, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-4.523, -2.42, 0], ix: 2 }, a: { a: 0, k: [6.428, 7.896, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0.159, 0], [0, 0], [0.079, -0.159], [0, 0], [-0.079, -0.079], [-0.159, 0], [0, 0], [-0.079, 0.238], [0, 0], [0, 0], [0, 0], [-0.159, 0], [0, 0], [0, 0], [0, 0.238], [0.079, 0.079]], o: [[-0.079, -0.159], [0, 0], [-0.159, 0], [0, 0], [0, 0.159], [0.079, 0.079], [0, 0], [0.159, 0], [0, 0], [0, 0], [0, 0], [0.079, 0.159], [0, 0], [0, 0], [0.238, 0], [0, -0.079], [0, 0]], v: [[7.936, 0.238], [7.539, 0], [5.317, 0], [4.92, 0.238], [0, 15.315], [0.079, 15.633], [0.397, 15.792], [2.301, 15.792], [2.698, 15.474], [4.126, 11.03], [8.65, 11.03], [10.078, 15.554], [10.475, 15.792], [12.459, 15.792], [12.459, 15.792], [12.855, 15.395], [12.776, 15.157]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0.159], [-0.079, 0.159], [-0.079, -0.159], [0, -0.238]], o: [[0, 0], [0, 0], [0.079, -0.238], [0.079, -0.159], [0.079, 0.159], [0.079, 0.159], [0, 0]], v: [[8.015, 8.729], [4.761, 8.729], [6.031, 4.92], [6.19, 4.365], [6.348, 3.888], [6.586, 4.444], [6.745, 4.999]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 67", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 160, ty: 4, nm: "Path 66", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [6.467, -1.825, 0], ix: 2 }, a: { a: 0, k: [4.96, 5.793, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.746, 0], [0, 3.412], [-3.095, 0], [0, -1.984], [0, -0.159], [0.079, -0.397], [0.238, 0], [0, 0], [-1.746, 0], [-0.714, 0.317], [-0.079, -0.079], [-0.079, -0.079], [0, 0], [0.159, -0.079]], o: [[-3.333, 0], [0, -3.492], [3.65, 0], [0, 0.159], [0, 0.079], [0, 0.238], [0, 0], [0.159, 1.666], [1.27, 0], [0.079, -0.079], [0.079, 0.079], [0, 0], [0.079, 0.159], [-0.635, 0.317]], v: [[5.475, 11.586], [0, 5.952], [5.237, 0], [9.919, 5.396], [9.919, 5.793], [9.84, 6.428], [9.443, 6.825], [2.619, 6.825], [5.714, 9.443], [8.412, 8.888], [8.729, 8.888], [8.967, 9.126], [9.285, 10.475], [9.046, 10.951]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[3.73, 0], [0, -3.015], [-2.857, 0], [-0.555, 0.238], [0, 0], [1.19, 0], [0.079, 2.301], [-0.079, 0.079], [-0.159, 0], [0, 0], [0, 0.079], [0, 0.079]], o: [[-2.619, 0], [0, 2.936], [1.428, 0], [0, 0], [-0.635, 0.238], [-2.381, 0], [0, -0.079], [0.079, -0.079], [0, 0], [0, -0.159], [0, -0.079], [0.079, -0.555]], v: [[5.237, 0.794], [0.794, 5.952], [5.475, 10.792], [8.412, 10.316], [8.253, 9.761], [5.634, 10.237], [1.666, 6.428], [1.746, 6.11], [2.063, 6.031], [8.967, 6.031], [8.967, 5.714], [8.967, 5.475]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 2, ty: "sh", ix: 3, ks: { a: 0, k: { i: [[0.159, 0], [0, 0], [0.079, 0.079], [0, 0.159], [-1.825, 0], [-0.476, -0.555], [0, -1.19]], o: [[0, 0], [-0.079, 0], [-0.079, -0.079], [0.238, -2.143], [0.952, 0], [0.555, 0.555], [0, 0.238]], v: [[7.697, 5.237], [2.222, 5.237], [1.905, 5.079], [1.825, 4.761], [5.079, 1.349], [7.221, 2.143], [8.094, 4.841]], c: !0 }, ix: 2 }, nm: "Path 3", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 3, ty: "sh", ix: 4, ks: { a: 0, k: { i: [[0.159, -0.873], [0, 0], [0.397, 0.397], [0.714, 0]], o: [[0, 0], [-0.079, -0.794], [-0.317, -0.397], [-1.666, 0.079]], v: [[2.619, 4.444], [7.221, 4.444], [6.586, 2.698], [4.999, 2.143]], c: !0 }, ix: 2 }, nm: "Path 4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 66", np: 6, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 161, ty: 4, nm: "Path 65", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [6.467, -1.825, 0], ix: 2 }, a: { a: 0, k: [4.563, 5.396, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-1.905, 0], [-0.714, 0.317], [0, 0], [1.587, 0], [0, 3.174], [-3.016, 0], [0, -1.905], [0, -0.794]], o: [[0.079, 2.381], [1.349, 0], [0, 0], [-0.635, 0.317], [-3.174, 0], [0, -3.095], [3.412, 0], [0, 0.397], [0, 0]], v: [[1.746, 6.031], [5.317, 9.443], [8.174, 8.808], [8.491, 10.157], [5.079, 10.792], [0, 5.555], [4.841, 0], [9.126, 4.999], [9.046, 6.031]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [2.143, 0], [0.159, -1.587]], o: [[0, -1.587], [-1.905, 0], [0, 0]], v: [[7.301, 4.444], [4.682, 1.428], [1.825, 4.444]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 65", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 162, ty: 4, nm: "Path 64", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-5.23, -3.571, 0], ix: 2 }, a: { a: 0, k: [6.436, 7.539, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.159, 0], [-0.079, 0], [0, 0], [0.079, 0.159], [0, 0], [0, 0], [0, 0], [0.159, 0], [0, 0], [0.079, 0.079], [0, 0.159], [0, 0], [-0.159, 0], [0, 0], [-0.079, -0.159], [0, 0], [0, -0.079]], o: [[-0.079, 0], [0, 0], [-0.159, 0], [0, 0], [0, 0], [0, 0], [-0.079, 0.159], [0, 0], [-0.159, 0], [-0.079, -0.079], [0, 0], [0.079, -0.159], [0, 0], [0.159, 0], [0, 0], [0.079, 0.079], [0.079, 0.238]], v: [[12.538, 15.077], [12.538, 15.077], [10.554, 15.077], [10.157, 14.839], [8.65, 10.316], [4.126, 10.316], [2.698, 14.76], [2.301, 15.077], [0.397, 15.077], [0.079, 14.919], [0, 14.522], [4.92, 0.238], [5.317, 0], [7.539, 0], [7.935, 0.238], [12.776, 14.443], [12.855, 14.681]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.159, 0], [0, 0], [-0.079, -0.159]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.079, -0.159], [0, 0], [0.159, 0], [0, 0]], v: [[10.792, 14.284], [11.903, 14.284], [7.301, 0.794], [5.634, 0.794], [1.032, 14.284], [2.143, 14.284], [3.571, 9.84], [3.968, 9.523], [9.046, 9.523], [9.443, 9.761]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 2, ty: "sh", ix: 3, ks: { a: 0, k: { i: [[0.159, 0], [0, 0], [0.079, 0.079], [0, 0.159], [0, 0], [-0.159, 0.714], [-0.159, 0], [0, 0], [-0.079, -0.159], [-0.317, -0.952], [0, 0], [0.079, -0.159]], o: [[0, 0], [-0.159, 0], [-0.079, -0.079], [0, 0], [0.238, -0.714], [0.079, -0.159], [0, 0], [0.159, 0], [0.238, 0.794], [0, 0], [0.079, 0.159], [-0.079, 0.159]], v: [[8.57, 8.729], [4.206, 8.729], [3.888, 8.57], [3.809, 8.174], [5.317, 3.888], [5.952, 1.825], [6.348, 1.508], [6.428, 1.508], [6.825, 1.825], [7.539, 4.206], [8.967, 8.094], [8.888, 8.491]], c: !0 }, ix: 2 }, nm: "Path 3", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 3, ty: "sh", ix: 4, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0.079, 0.317], [0.079, -0.317], [0, 0]], o: [[0, 0], [0, 0], [-0.159, -0.476], [-0.079, 0.317], [0, 0], [0, 0]], v: [[4.841, 7.935], [8.015, 7.935], [6.825, 4.523], [6.428, 3.333], [6.19, 4.206], [6.11, 4.523]], c: !0 }, ix: 2 }, nm: "Path 4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 64", np: 6, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 163, ty: 4, nm: "Path 63", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-5.158, -3.571, 0], ix: 2 }, a: { a: 0, k: [6.031, 7.142, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[3.412, 9.523], [1.905, 14.284], [0, 14.284], [4.92, 0], [7.142, 0], [12.062, 14.284], [10.078, 14.284], [8.57, 9.523]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0.159, 0.794], [0, 0], [0.238, -0.873], [0, 0]], o: [[0, 0], [-0.317, -0.952], [0, 0], [-0.238, 0.794], [0, 0], [0, 0]], v: [[8.094, 7.935], [6.666, 3.968], [5.952, 1.587], [5.872, 1.587], [5.158, 3.968], [3.73, 7.935]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 63", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 164, ty: 4, nm: "Path 62", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-16.347, -7.42, 0], ix: 2 }, a: { a: 0, k: [1.905, 17.18, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-1.27, 0], [0, 0], [0, -1.349], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, -1.349], [0, 0], [-1.349, 0], [0, 0], [0, 0], [0, 0]], v: [[1.587, 34.281], [1.587, 34.281], [1.587, 2.619], [3.809, 0], [2.777, 0], [0, 2.619], [0, 34.361], [1.587, 34.281]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.772549019608, 0.533333333333, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 62", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 165, ty: 4, nm: "Path 61", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-10.316, 17.141, 0], ix: 2 }, a: { a: 0, k: [7.935, 7.459, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [15.712, 14.919], [15.871, 14.919], [15.871, 2.222]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.925490196078, 0.894117647059, 0.976470588235, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 61", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 166, ty: 4, nm: "Path 60", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-10.316, 17.061, 0], ix: 2 }, a: { a: 0, k: [7.935, 7.539, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [1.349, 0], [0, 0]], o: [[0, 0], [0, 0], [0, -1.349], [0, 0], [0, 0]], v: [[15.712, 15.077], [15.871, 15.077], [15.871, 2.619], [13.332, 0], [0, 0.159]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 60", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 167, ty: 4, nm: "Path 59", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-0.317, 17.418, 0], ix: 2 }, a: { a: 0, k: [4.444, 7.182, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -0.159], [0, 0], [-0.159, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0.159], [0, 0], [0.159, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 11.903], [0.159, 12.379], [2.063, 14.205], [2.539, 14.363], [8.888, 14.363], [1.666, 2.381]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.333333333333, 0.211764705882, 0.529411764706, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 59", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 168, ty: 4, nm: "Path 58", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [2.738, 17.458, 0], ix: 2 }, a: { a: 0, k: [7.499, 7.142, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -0.159], [0, 0], [-0.159, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0.159], [0, 0], [0.159, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [0, 11.824], [0.159, 12.3], [2.063, 14.125], [2.539, 14.284], [14.998, 14.284], [0.317, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.396078431373, 0.243137254902, 0.576470588235, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 58", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 169, ty: 4, nm: "Path 57", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [7.142, -5.555, 0], ix: 2 }, a: { a: 0, k: [11.11, 19.045, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [1.349, 0], [0, 0]], o: [[0, 0], [0, -1.349], [0, 0], [0, 0]], v: [[22.219, 38.09], [22.219, 2.619], [19.442, 0], [0, 0]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.333333333333, 0.211764705882, 0.529411764706, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 57", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 170, ty: 4, nm: "Path 56", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0.119, -5.555, 0], ix: 2 }, a: { a: 0, k: [18.133, 19.045, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [1.349, 0], [0, 0], [0, -1.27]], o: [[0, 0], [0, -1.349], [0, 0], [-1.349, 0], [0, 0]], v: [[36.265, 38.09], [36.265, 2.619], [33.488, 0], [2.539, 0], [0, 2.381]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.396078431373, 0.243137254902, 0.576470588235, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 56", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 171, ty: 4, nm: "Path 55", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [18.252, 24.6, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.349, 0], [0, 0], [0, -1.349], [0, 0], [0, 0], [0, 0], [0, 1.349], [0, 0]], o: [[0, 0], [-1.349, 0], [0, 0], [0, 0], [0, 0], [1.349, 0], [0, 0], [0, -1.349]], v: [[33.726, 0], [2.777, 0], [0, 2.619], [0, 34.361], [15.712, 49.2], [33.726, 49.2], [36.503, 46.581], [36.503, 2.619]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486274509804, 0.305882352941, 0.658823529412, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 55", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 172, ty: 4, nm: "Path 54", parent: 156, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [18.252, 24.6, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.349, 0], [0, 0], [0, -1.349], [0, 0], [0, 0], [0, 0], [0, 1.349], [0, 0]], o: [[0, 0], [-1.349, 0], [0, 0], [0, 0], [0, 0], [1.349, 0], [0, 0], [0, -1.349]], v: [[33.726, 0], [2.777, 0], [0, 2.619], [0, 34.361], [15.712, 49.2], [33.726, 49.2], [36.503, 46.581], [36.503, 2.619]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.054901960784, 0.878431372549, 0.721568627451, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 54", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 173, ty: 4, nm: "Path 53", parent: 150, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, -0.162, 0], ix: 2 }, a: { a: 0, k: [12.964, 14.626, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[25.465, 5.163], [24.994, 10.454], [23.573, 26.316], [12.964, 29.25], [12.955, 29.253], [2.352, 26.316], [1.612, 18.021], [6.806, 18.021], [7.193, 22.324], [12.958, 23.88], [12.961, 23.877], [18.735, 22.321], [19.521, 15.151], [1.363, 15.201], [0.848, 10.299], [19.957, 10.074], [20.343, 4.826], [0.336, 4.882], [0, 0], [12.964, 0], [25.927, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.980392156863, 0.980392156863, 0.980392156863, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 53", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 174, ty: 4, nm: "Path 52", parent: 150, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [20.475, 23.4, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [3.729, 42.12], [20.475, 46.8], [37.215, 42.123], [40.95, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.129411764706, 0.588235294118, 0.952941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 52", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 175, ty: 4, nm: "Path 51", parent: 151, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-2e-3, -0.169, 0], ix: 2 }, a: { a: 0, k: [13.504, 15.378, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[26.528, 5.427], [13.505, 5.427], [5.895, 5.427], [6.387, 10.99], [13.505, 10.99], [26.036, 10.99], [24.557, 27.669], [13.505, 30.753], [13.496, 30.756], [2.451, 27.669], [1.679, 18.945], [7.091, 18.945], [7.494, 23.471], [13.499, 25.104], [13.505, 25.101], [13.505, 25.101], [19.517, 23.468], [20.144, 16.424], [13.505, 16.424], [13.505, 16.424], [1.458, 16.424], [0, 0], [13.505, 0], [27.008, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.980392156863, 0.980392156863, 0.980392156863, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 51", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }, { ddd: 0, ind: 176, ty: 4, nm: "Path 50", parent: 151, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [0, 0, 0], ix: 2 }, a: { a: 0, k: [21.525, 24.6, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[0, 0], [3.921, 44.28], [21.525, 49.2], [39.123, 44.283], [43.05, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.341176470588, 0.133333333333, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path 50", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 180, st: 0, bm: 0 }], markers3 = [], help_default = { v: v3, fr: fr3, ip: ip3, op: op3, w: w3, h: h3, nm: nm3, ddd: ddd3, assets: assets3, layers: layers3, markers: markers3 };

// app/components/MyFlipBook/index.tsx
var MyFlipBook = (props) => {
  let isDesktopOrLaptop = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1241 }), isTabletVal = (0, import_react_responsive2.useMediaQuery)({ minWidth: 720, maxWidth: 1240 }), isMobileVal = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 719 }), [isMobile, setIsMobile] = (0, import_react10.useState)(isMobileVal), [isTablet, setIsTablet] = (0, import_react10.useState)(isTabletVal), [isDesktop, setIsDesktop] = (0, import_react10.useState)(isDesktopOrLaptop);
  (0, import_react10.useEffect)(() => {
    setIsMobile(isMobileVal), setIsTablet(isTabletVal), setIsDesktop(isDesktopOrLaptop);
  }, [isMobileVal, isTabletVal, isDesktopOrLaptop]);
  let [page, setPage] = (0, import_react10.useState)(0), pageFlip = (0, import_react10.useRef)(null);
  return isTablet || isDesktop ? /* @__PURE__ */ React.createElement(import_react_pageflip.default, {
    width: isDesktop ? 500 : 350,
    height: 733,
    style: {
      width: isTablet ? "350px" : "500px",
      height: "733px"
    },
    size: "fixed",
    minWidth: 300,
    maxWidth: 1e3,
    minHeight: 400,
    maxHeight: 1533,
    maxShadowOpacity: 0.7,
    showCover: !0,
    mobileScrollSupport: !0,
    className: "demo-book",
    startPage: 1,
    drawShadow: !0,
    flippingTime: 1e3,
    usePortrait: !1,
    startZIndex: 0,
    autoSize: !1,
    clickEventForward: !1,
    useMouseEvents: !0,
    swipeDistance: 0,
    showPageCorners: !1,
    disableFlipByClick: !1,
    ref: pageFlip,
    onFlip: (e) => setPage(e.data)
  }, /* @__PURE__ */ React.createElement(PageCover_default, {
    number: "0",
    frontCover: !0
  }, "Book Of Jobs"), /* @__PURE__ */ React.createElement(Page_default, {
    pageHeader: "List Of Projects",
    number: "1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ React.createElement("span", null, "Pursuit"), /* @__PURE__ */ React.createElement("span", null, "Page 1")), /* @__PURE__ */ React.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ React.createElement("span", null, "Cognizant"), /* @__PURE__ */ React.createElement("span", null, "Page 2")), /* @__PURE__ */ React.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ React.createElement("span", null, "AutoZone"), /* @__PURE__ */ React.createElement("span", null, "Page 3")), /* @__PURE__ */ React.createElement("div", {
    className: "toc-container"
  }, /* @__PURE__ */ React.createElement("span", null, "MoneyCaptain Labs"), /* @__PURE__ */ React.createElement("span", null, "Page 4"))), /* @__PURE__ */ React.createElement(Page_default, {
    number: "2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ React.createElement(import_react_lazy_load_image_component.LazyLoadImage, {
    alt: "pursuit",
    height: 50,
    src: "data:image/png;base64,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",
    width: 150
  })), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D4DE}"), "nce upon a time, I mentored a group of prospective students interested in learning web fundamentals at a wonderful school called Pursuit."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "I mentored them in pair-programming, debugging, whiteboarding, Node.js and how to use shell terminals."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "Ultimately, they were able to build a command line game!"), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "They went on to add these skills to their toolboxes as they became successful web developers."))), /* @__PURE__ */ React.createElement(Page_default, {
    number: "3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Cognizant_Logo",
    x: "0px",
    y: "0px",
    width: "100%",
    height: "auto",
    viewBox: "0 0 820 189.56",
    enableBackground: "new 0 0 820 189.56",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "#0033A1",
    d: "M469.219,114.094l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155h48.485v21.815h-81.749  L469.219,114.094z M435.418,16.295h24.783v22.429h-24.783V16.295z M435.082,46.217h24.785v90.146h-24.785V46.217z M135.318,91.019  c0.099-25.767,21.121-46.583,46.974-46.518c25.854,0.066,46.771,20.989,46.737,46.756c-0.032,25.765-21.001,46.638-46.855,46.638  c-12.465,0.018-24.42-4.922-33.217-13.722C140.16,115.372,135.25,103.438,135.318,91.019z M204.963,91.019  c0-12.801-10.132-23.453-22.79-23.453c-12.844,0-22.617,10.64-22.617,23.453c0,12.813,9.773,23.454,22.617,23.454  c12.658-0.02,22.796-10.653,22.796-23.454H204.963z M340.874,45.945h24.612v10.097c5.783-7.405,14.646-11.899,24.956-11.899  c21.354,0,34.198,13.702,34.198,36.957v54.991h-25.148V84.347c0-12.079-5.612-19.133-16.643-19.133  c-9.406,0-17.185,6.486-17.185,21.602v49.22h-24.771L340.874,45.945z M552.397,91.019c0-31.915,23.534-46.906,43.971-46.906  c11.766,0,20.986,4.32,26.951,10.641v-8.808h24.771v90.146h-24.771v-10.097c-5.965,7.03-15.557,11.9-27.311,11.9  C576.828,137.895,552.397,122.771,552.397,91.019z M624.031,90.84c0-13.344-9.768-24.163-23.155-24.163  c-13.75,0-24.239,10.275-24.239,24.163c0,13.885,10.489,24.335,24.239,24.335c13.401,0,23.167-10.998,23.167-24.335H624.031z   M658.111,45.945h24.605v10.097c5.791-7.405,14.652-11.899,24.965-11.899c21.346,0,34.191,13.702,34.191,36.957v54.991h-25.15  V84.347c0-12.079-5.574-19.133-16.64-19.133c-9.408,0-17.187,6.486-17.187,21.602v49.22h-24.771L658.111,45.945z M469.219,136.091  v-21.997l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155 M108.879,90.234l-0.341,0.716  c-6.843,14.375-19.426,22.62-34.525,22.62c-21.893,0-39.016-17.243-39.016-39.253c0-22.571,17.005-39.586,39.56-39.586  c14.616,0,25.719,6.82,33.01,20.281l0.389,0.716l22.06-14.053l-0.371-0.618C118.186,21.61,97.588,10,74.557,10  C37.751,10,10,37.656,10,74.33c0,37.277,27.151,64.334,64.557,64.334c24.108,0,45.407-13.335,56.976-35.672l0.347-0.675  L108.879,90.234z M235.272,91.019c0-31.915,23.534-46.906,43.971-46.906c11.766,0,20.982,4.87,26.951,11.535v-9.702h24.771v87.64  c0,25.423-16.102,45.976-46.676,45.976c-22.976,0-39.797-11.906-47.066-25.966l21.893-12.257c4.7,9.374,13.005,15.325,25.143,15.325  c13.39,0,21.887-10.456,21.887-22.177v-8.492c-5.972,7.03-15.557,11.9-27.312,11.9C259.692,137.895,235.272,122.771,235.272,91.019z   M306.906,90.84c0-13.344-9.766-24.163-23.156-24.163c-13.749,0-24.238,10.275-24.238,24.163c0,13.885,10.489,24.335,24.238,24.335  C297.141,115.175,306.906,104.177,306.906,90.84z M802.908,68.12V45.945h-17.005V16.209h-24.771v29.736h-15.391V68.12h15.359v28.849  c0,29.391,9.406,39.122,38.173,39.122h3.617v-23.076c-15.197,0-17.005-2.165-17.005-16.226V68.12H802.908z M808.167,26.967  c-1.184,1.188-2.796,1.857-4.478,1.857c-1.681,0-3.293-0.669-4.477-1.857c-1.21-1.175-1.883-2.793-1.859-4.475  c0.006-2.851,1.933-5.343,4.698-6.076c2.765-0.733,5.679,0.476,7.105,2.947c1.427,2.472,1.011,5.59-1.014,7.604H808.167z   M799.844,18.666c-1.037,1.006-1.609,2.396-1.586,3.839c-0.023,1.448,0.545,2.842,1.574,3.864c1.019,1.023,2.405,1.599,3.852,1.599  s2.834-0.576,3.852-1.599c1.038-1.017,1.61-2.414,1.585-3.864c0.02-2.203-1.305-4.196-3.347-5.04  c-2.04-0.843-4.391-0.368-5.941,1.201H799.844z M803.56,19.018c0.642-0.033,1.284,0.051,1.895,0.247  c0.71,0.282,1.148,0.996,1.079,1.753c0.035,0.544-0.221,1.067-0.677,1.371c-0.308,0.177-0.649,0.29-1.002,0.333  c0.476,0.047,0.907,0.294,1.189,0.679c0.234,0.308,0.365,0.681,0.377,1.067v0.512c0,0.155,0,0.328,0,0.512  c0.002,0.121,0.02,0.243,0.055,0.358l0.044,0.087h-1.145c-0.004-0.023-0.004-0.045,0-0.068v-0.074v-0.222v-0.549  c0.083-0.608-0.168-1.214-0.657-1.586c-0.43-0.181-0.897-0.257-1.363-0.222h-0.965v2.722h-1.239v-6.919H803.56z M804.88,20.104  c-0.466-0.202-0.975-0.289-1.482-0.252h-1.046v2.505h1.109c0.395,0.019,0.787-0.033,1.164-0.154  c0.395-0.178,0.669-0.548,0.721-0.978C805.399,20.795,805.221,20.37,804.88,20.104z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D598}"), "oon after Pursuit, I joined Cognizant as a Software Engineer."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "At Cognizant I am responsible for building and maintaining web applications for one of the company's clients."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "I'm able to use many different technologies and frameworks to build a robust web application."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "On a daily basis I use React.js, Next.js, CSS3, HTML 5, JavaScript ES6, Node.js, Express.js, TypeScript, Jest, Cypress, Oracle ATG Business Control Center, and many more!"))), /* @__PURE__ */ React.createElement(Page_default, {
    number: "4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "300",
    height: "68",
    viewBox: "0 0 238 29"
  }, /* @__PURE__ */ React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "#FFFFFE",
    d: "M103.5 3.842C106.56.745 110.913.356 112.9.356c5.406 0 9.05 2.436 8.894 6.172h15.707l1.534-2.673h10.357l-1.559 2.714h3.573l-.428.746c2.067-1.228 4.132-1.797 6.477-1.734 5.355.143 7.945 4.541 5.701 10.69-.098.27-.2.537-.305.8l11.06-8.056h-7.646l4.92-8.568h22.762l-3.506 6.108c1.616-.68 2.843-.915 4.591-.915 5.839 0 6.983 4.498 6.745 7.01l3.496-6.072h8.346c5.695-1.11 6.915 3.5 6.98 3.717 2.738-3.141 6.25-4.853 9.993-4.655 2.855.153 9.527 1.942 3.766 14.078-1.824 3.842-6.007 8.737-12.55 8.37-4.6-.26-6.424-3.48-6.071-6.54l-3.354 5.854-19.096-.005.739-1.283c-2.04 1.372-4.819 2.156-7.41 1.968-4.32-.314-5.425-2.496-5.991-4.417l-2.148 3.732h-22.802l1.001-1.73c-2.246 1.64-4.87 2.477-7.811 2.315-3.054-.168-5.913-1.659-6.26-5.417l-2.776 4.832h-5.06c-3.622 0-4.867-3.345-5.069-4.003-2.679 4.145-7.575 4.611-9.6 4.611-6.168 0-7.613-3.276-7.797-3.72l-1.788 3.104H0V.453h105.446l-1.946 3.39z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#0A0B09",
    d: "M235.602 3.778v-.674h.455c.234 0 .478.045.478.319 0 .335-.254.355-.536.355h-.397zm0 .274h.383l.58.953h.37l-.624-.968c.32-.03.569-.207.569-.593 0-.437-.253-.623-.771-.623h-.828v2.184h.321v-.953zm-1.131-.147c0-.898.664-1.572 1.543-1.572.845 0 1.525.674 1.525 1.572 0 .913-.68 1.583-1.525 1.583-.879 0-1.543-.67-1.543-1.583zm1.543 1.902c1.027 0 1.911-.802 1.911-1.902 0-1.084-.884-1.885-1.911-1.885-1.05 0-1.93.8-1.93 1.885 0 1.1.88 1.902 1.93 1.902z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#D52B1E",
    d: "M230.517 7.072c4.686.25 5.55 4.066 3.883 8.795-.317.9-.664 1.736-1.035 2.515h-9.584c-.603 1.512-.858 2.95-.096 3.1.818.161 1.668-.691 2.567-2.074h6.591c-2.86 5.271-6.68 7.477-10.98 7.248-5.11-.274-5.487-4.247-3.82-8.976 2.328-6.607 7.073-10.897 12.474-10.608zm-2.676 8.722c.805-1.684 1.14-2.858.128-3.042-.958-.175-2.075 1.107-3.166 3.042h3.038zM216.656 8.015c-3.162-.772-5.24 1.22-5.24 1.22l.692-1.224h-6.005l-10.335 17.953h6.598l6.21-10.811c.435-.766 1.027-1.646 1.913-1.457.79.169 1.025.894.765 1.38l-6.25 10.893h6.55l7.497-13.09c1.034-1.9-.667-4.443-2.395-4.864M193.006 16.15c-1.606 3.106-2.702 4.654-4.054 4.388-.984-.193-.616-1.594.353-3.47 1.354-2.62 2.807-4.527 4.017-4.316 1.132.197.653 1.523-.316 3.398zm2.435-9.078c-5.4-.289-10.472 4-12.8 10.608-1.667 4.729-.963 8.702 4.146 8.976 5.162.275 10.104-2.955 12.864-10.789 1.667-4.73.476-8.545-4.21-8.795z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#D52B1E",
    d: "M187.662 8.519l3.81-6.639h-19.456l-3.274 5.7h9.573l-16.45 11.984-3.704 6.4h19.488l3.259-5.665h-9.148l15.902-11.78M155.16 16.075c-1.605 3.097-2.702 4.64-4.053 4.375-.985-.193-.617-1.59.352-3.46 1.354-2.612 2.806-4.514 4.016-4.304 1.133.197.653 1.519-.315 3.389zm2.435-9.053c-5.401-.289-10.473 3.988-12.8 10.577-1.666 4.716-.962 8.678 4.147 8.952 5.162.275 10.103-2.946 12.863-10.758 1.667-4.716.475-8.521-4.21-8.771zM142.393 13.159h3.588l2.953-5.157h-3.577l1.559-2.713h-7.05L131.42 20c-.77 1.408-.698 2.986.425 4.41.8 1.036 1.642 1.553 3.158 1.553H139l2.771-4.825h-3.017c-.232 0-.495.038-.593-.181-.05-.135-.08-.277-.019-.403l4.251-7.396M130.303 8.002l-6.708 11.927c-.548.986-1.116 1.266-1.986 1.095-1.086-.213-.632-1.044-.318-1.612l6.61-11.41h-6.573s-7.474 13.004-7.47 13.01c-1.332 2.443.417 4.89 4.745 5.43 2.461.307 7.622.012 10.053-4.15l.013-.01 8.176-14.28h-6.542M111.83 9.954l-2.844 4.959h-3.463l3.116-5.435c.41-.72 1.205-1.357 2.454-1.237 1.046.1 1.384.635.736 1.713zm2.776-8.064c-2.867-.358-8.959 0-11.63 5.082L92.068 25.954h7.109l3.042-5.3h3.457l-3.045 5.3h7.055l10.049-17.435c1.672-3.073.062-5.98-5.13-6.629z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#F37100",
    d: "M101.957 1.887L88.13 25.952h.817l13.823-24.065h-.812zm-5 0L83.134 25.952h1.689L98.65 1.887h-1.693zm-3.017 0h-2.87L77.24 25.952h2.866l4.985-8.65 8.85-15.415zm-9.859 0L70.248 25.952h4.634L88.728 1.887h-4.647zm-8.975 0L61.277 25.952h7.281L82.393 1.887h-7.287zm-11.046 0L50.232 25.952h9.635L73.702 1.887H64.06zm-12.849 0l-13.84 24.065h11.705l13.83-24.065H51.21zm-49.822 0v24.065h35.044L50.257 1.887H1.389z"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D4DE}"), "ne project I'm really excited about is AutoZone."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "I've been a member of the AutoZone Dev team since 2018!"), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "We migrated this amazing e-commerce site from an older stack to a new blazing fast modernized stack."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "We use an agile scrum methodology to get work done efficiently.", " "), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "We use many technologies here as the giant e-commerce site serves millions of people a year, generates billions in revenue and supports 6,767 stores!"))), /* @__PURE__ */ React.createElement(Page_default, {
    number: "5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ React.createElement(import_react_lazy_load_image_component.LazyLoadImage, {
    alt: "money captain labs",
    height: 50,
    src: "https://www.moneycaptainlabs.com/wp-content/uploads/2021/02/logo-b.png",
    width: 150
  })), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D578}"), "oneycaptain is a family affair!"), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "My sister (who's also a dev) and I started this company because we feel confident we can use tech to help battle financial illiteracy."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "We use React Native, Express.js, Postgres, Git, Trello, GraphQL and other technologies in our work flow."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "We are currently working on HypePerks! HypePerks is designed for children to earn incentives for doing chores or just achieving goals set up!"), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "With our help, you can be the Captain of your Money Ship!"))), /* @__PURE__ */ React.createElement(Page_default, {
    number: "6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "data-logo"
  }, /* @__PURE__ */ React.createElement(import_react_lottie_player2.default, {
    loop: !0,
    animationData: help_default,
    play: !0,
    style: { height: 400, width: 300 }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "back-cover-first-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shimmer-fancy-letter fancy-letter"
  }, "\u{1D4E3}"), /* @__PURE__ */ React.createElement("div", null, "his story doesn't end here.")), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, "I'm available to consult about your prospective project/idea."), /* @__PURE__ */ React.createElement("div", {
    className: "data-container-text"
  }, /* @__PURE__ */ React.createElement(import_remix9.NavLink, {
    className: "contact-link-color shimmer font22",
    to: "contact"
  }, "Send me a message!"), /* @__PURE__ */ React.createElement(StyledKofiButton, {
    color: "#785e3a"
  })))), /* @__PURE__ */ React.createElement(PageCover_default, {
    backCover: !0,
    number: "7"
  })) : /* @__PURE__ */ React.createElement(MySlides_default, {
    slides: [
      /* @__PURE__ */ React.createElement(Page_default, {
        isSlides: !0,
        key: "1",
        number: "1"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-logo"
      }, /* @__PURE__ */ React.createElement(import_react_lazy_load_image_component.LazyLoadImage, {
        alt: "pursuit",
        height: 50,
        src: "data:image/png;base64,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",
        width: 150
      })), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "shimmer-fancy-letter fancy-letter"
      }, "\u{1D4DE}"), "nce upon a time, I mentored a group of prospective students interested in learning web fundamentals at a wonderful school called Pursuit."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "I mentored them in pair-programming, debugging, whiteboarding, Node.js and how to use shell terminals."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "Ultimately, they were able to build a command line game!"), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "They went on to add these skills to their toolboxes as they became successful web developers."))),
      /* @__PURE__ */ React.createElement(Page_default, {
        isSlides: !0,
        key: "2",
        number: "2"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-logo"
      }, /* @__PURE__ */ React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        version: "1.1",
        id: "Cognizant_Logo",
        x: "0px",
        y: "0px",
        width: "100%",
        height: "auto",
        viewBox: "0 0 820 189.56",
        enableBackground: "new 0 0 820 189.56",
        xmlSpace: "preserve"
      }, /* @__PURE__ */ React.createElement("path", {
        fill: "#0033A1",
        d: "M469.219,114.094l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155h48.485v21.815h-81.749  L469.219,114.094z M435.418,16.295h24.783v22.429h-24.783V16.295z M435.082,46.217h24.785v90.146h-24.785V46.217z M135.318,91.019  c0.099-25.767,21.121-46.583,46.974-46.518c25.854,0.066,46.771,20.989,46.737,46.756c-0.032,25.765-21.001,46.638-46.855,46.638  c-12.465,0.018-24.42-4.922-33.217-13.722C140.16,115.372,135.25,103.438,135.318,91.019z M204.963,91.019  c0-12.801-10.132-23.453-22.79-23.453c-12.844,0-22.617,10.64-22.617,23.453c0,12.813,9.773,23.454,22.617,23.454  c12.658-0.02,22.796-10.653,22.796-23.454H204.963z M340.874,45.945h24.612v10.097c5.783-7.405,14.646-11.899,24.956-11.899  c21.354,0,34.198,13.702,34.198,36.957v54.991h-25.148V84.347c0-12.079-5.612-19.133-16.643-19.133  c-9.406,0-17.185,6.486-17.185,21.602v49.22h-24.771L340.874,45.945z M552.397,91.019c0-31.915,23.534-46.906,43.971-46.906  c11.766,0,20.986,4.32,26.951,10.641v-8.808h24.771v90.146h-24.771v-10.097c-5.965,7.03-15.557,11.9-27.311,11.9  C576.828,137.895,552.397,122.771,552.397,91.019z M624.031,90.84c0-13.344-9.768-24.163-23.155-24.163  c-13.75,0-24.239,10.275-24.239,24.163c0,13.885,10.489,24.335,24.239,24.335c13.401,0,23.167-10.998,23.167-24.335H624.031z   M658.111,45.945h24.605v10.097c5.791-7.405,14.652-11.899,24.965-11.899c21.346,0,34.191,13.702,34.191,36.957v54.991h-25.15  V84.347c0-12.079-5.574-19.133-16.64-19.133c-9.408,0-17.187,6.486-17.187,21.602v49.22h-24.771L658.111,45.945z M469.219,136.091  v-21.997l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155 M108.879,90.234l-0.341,0.716  c-6.843,14.375-19.426,22.62-34.525,22.62c-21.893,0-39.016-17.243-39.016-39.253c0-22.571,17.005-39.586,39.56-39.586  c14.616,0,25.719,6.82,33.01,20.281l0.389,0.716l22.06-14.053l-0.371-0.618C118.186,21.61,97.588,10,74.557,10  C37.751,10,10,37.656,10,74.33c0,37.277,27.151,64.334,64.557,64.334c24.108,0,45.407-13.335,56.976-35.672l0.347-0.675  L108.879,90.234z M235.272,91.019c0-31.915,23.534-46.906,43.971-46.906c11.766,0,20.982,4.87,26.951,11.535v-9.702h24.771v87.64  c0,25.423-16.102,45.976-46.676,45.976c-22.976,0-39.797-11.906-47.066-25.966l21.893-12.257c4.7,9.374,13.005,15.325,25.143,15.325  c13.39,0,21.887-10.456,21.887-22.177v-8.492c-5.972,7.03-15.557,11.9-27.312,11.9C259.692,137.895,235.272,122.771,235.272,91.019z   M306.906,90.84c0-13.344-9.766-24.163-23.156-24.163c-13.749,0-24.238,10.275-24.238,24.163c0,13.885,10.489,24.335,24.238,24.335  C297.141,115.175,306.906,104.177,306.906,90.84z M802.908,68.12V45.945h-17.005V16.209h-24.771v29.736h-15.391V68.12h15.359v28.849  c0,29.391,9.406,39.122,38.173,39.122h3.617v-23.076c-15.197,0-17.005-2.165-17.005-16.226V68.12H802.908z M808.167,26.967  c-1.184,1.188-2.796,1.857-4.478,1.857c-1.681,0-3.293-0.669-4.477-1.857c-1.21-1.175-1.883-2.793-1.859-4.475  c0.006-2.851,1.933-5.343,4.698-6.076c2.765-0.733,5.679,0.476,7.105,2.947c1.427,2.472,1.011,5.59-1.014,7.604H808.167z   M799.844,18.666c-1.037,1.006-1.609,2.396-1.586,3.839c-0.023,1.448,0.545,2.842,1.574,3.864c1.019,1.023,2.405,1.599,3.852,1.599  s2.834-0.576,3.852-1.599c1.038-1.017,1.61-2.414,1.585-3.864c0.02-2.203-1.305-4.196-3.347-5.04  c-2.04-0.843-4.391-0.368-5.941,1.201H799.844z M803.56,19.018c0.642-0.033,1.284,0.051,1.895,0.247  c0.71,0.282,1.148,0.996,1.079,1.753c0.035,0.544-0.221,1.067-0.677,1.371c-0.308,0.177-0.649,0.29-1.002,0.333  c0.476,0.047,0.907,0.294,1.189,0.679c0.234,0.308,0.365,0.681,0.377,1.067v0.512c0,0.155,0,0.328,0,0.512  c0.002,0.121,0.02,0.243,0.055,0.358l0.044,0.087h-1.145c-0.004-0.023-0.004-0.045,0-0.068v-0.074v-0.222v-0.549  c0.083-0.608-0.168-1.214-0.657-1.586c-0.43-0.181-0.897-0.257-1.363-0.222h-0.965v2.722h-1.239v-6.919H803.56z M804.88,20.104  c-0.466-0.202-0.975-0.289-1.482-0.252h-1.046v2.505h1.109c0.395,0.019,0.787-0.033,1.164-0.154  c0.395-0.178,0.669-0.548,0.721-0.978C805.399,20.795,805.221,20.37,804.88,20.104z"
      }))), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "shimmer-fancy-letter fancy-letter"
      }, "\u{1D598}"), "oon after Pursuit, I joined Cognizant as a Software Engineer."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "At Cognizant I am responsible for building and maintaining web applications for one of the company's clients."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "I'm able to use many different technologies and frameworks to build a robust web application."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "On a daily basis I use React.js, Next.js, CSS3, HTML 5, JavaScript ES6, Node.js, Express.js, TypeScript, Jest, Cypress, Oracle ATG Business Control Center, and many more!"))),
      /* @__PURE__ */ React.createElement(Page_default, {
        isSlides: !0,
        key: "3",
        number: "3"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-logo"
      }, /* @__PURE__ */ React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "175",
        height: "68",
        viewBox: "0 0 238 29"
      }, /* @__PURE__ */ React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /* @__PURE__ */ React.createElement("path", {
        fill: "#FFFFFE",
        d: "M103.5 3.842C106.56.745 110.913.356 112.9.356c5.406 0 9.05 2.436 8.894 6.172h15.707l1.534-2.673h10.357l-1.559 2.714h3.573l-.428.746c2.067-1.228 4.132-1.797 6.477-1.734 5.355.143 7.945 4.541 5.701 10.69-.098.27-.2.537-.305.8l11.06-8.056h-7.646l4.92-8.568h22.762l-3.506 6.108c1.616-.68 2.843-.915 4.591-.915 5.839 0 6.983 4.498 6.745 7.01l3.496-6.072h8.346c5.695-1.11 6.915 3.5 6.98 3.717 2.738-3.141 6.25-4.853 9.993-4.655 2.855.153 9.527 1.942 3.766 14.078-1.824 3.842-6.007 8.737-12.55 8.37-4.6-.26-6.424-3.48-6.071-6.54l-3.354 5.854-19.096-.005.739-1.283c-2.04 1.372-4.819 2.156-7.41 1.968-4.32-.314-5.425-2.496-5.991-4.417l-2.148 3.732h-22.802l1.001-1.73c-2.246 1.64-4.87 2.477-7.811 2.315-3.054-.168-5.913-1.659-6.26-5.417l-2.776 4.832h-5.06c-3.622 0-4.867-3.345-5.069-4.003-2.679 4.145-7.575 4.611-9.6 4.611-6.168 0-7.613-3.276-7.797-3.72l-1.788 3.104H0V.453h105.446l-1.946 3.39z"
      }), /* @__PURE__ */ React.createElement("path", {
        fill: "#0A0B09",
        d: "M235.602 3.778v-.674h.455c.234 0 .478.045.478.319 0 .335-.254.355-.536.355h-.397zm0 .274h.383l.58.953h.37l-.624-.968c.32-.03.569-.207.569-.593 0-.437-.253-.623-.771-.623h-.828v2.184h.321v-.953zm-1.131-.147c0-.898.664-1.572 1.543-1.572.845 0 1.525.674 1.525 1.572 0 .913-.68 1.583-1.525 1.583-.879 0-1.543-.67-1.543-1.583zm1.543 1.902c1.027 0 1.911-.802 1.911-1.902 0-1.084-.884-1.885-1.911-1.885-1.05 0-1.93.8-1.93 1.885 0 1.1.88 1.902 1.93 1.902z"
      }), /* @__PURE__ */ React.createElement("path", {
        fill: "#D52B1E",
        d: "M230.517 7.072c4.686.25 5.55 4.066 3.883 8.795-.317.9-.664 1.736-1.035 2.515h-9.584c-.603 1.512-.858 2.95-.096 3.1.818.161 1.668-.691 2.567-2.074h6.591c-2.86 5.271-6.68 7.477-10.98 7.248-5.11-.274-5.487-4.247-3.82-8.976 2.328-6.607 7.073-10.897 12.474-10.608zm-2.676 8.722c.805-1.684 1.14-2.858.128-3.042-.958-.175-2.075 1.107-3.166 3.042h3.038zM216.656 8.015c-3.162-.772-5.24 1.22-5.24 1.22l.692-1.224h-6.005l-10.335 17.953h6.598l6.21-10.811c.435-.766 1.027-1.646 1.913-1.457.79.169 1.025.894.765 1.38l-6.25 10.893h6.55l7.497-13.09c1.034-1.9-.667-4.443-2.395-4.864M193.006 16.15c-1.606 3.106-2.702 4.654-4.054 4.388-.984-.193-.616-1.594.353-3.47 1.354-2.62 2.807-4.527 4.017-4.316 1.132.197.653 1.523-.316 3.398zm2.435-9.078c-5.4-.289-10.472 4-12.8 10.608-1.667 4.729-.963 8.702 4.146 8.976 5.162.275 10.104-2.955 12.864-10.789 1.667-4.73.476-8.545-4.21-8.795z"
      }), /* @__PURE__ */ React.createElement("path", {
        fill: "#D52B1E",
        d: "M187.662 8.519l3.81-6.639h-19.456l-3.274 5.7h9.573l-16.45 11.984-3.704 6.4h19.488l3.259-5.665h-9.148l15.902-11.78M155.16 16.075c-1.605 3.097-2.702 4.64-4.053 4.375-.985-.193-.617-1.59.352-3.46 1.354-2.612 2.806-4.514 4.016-4.304 1.133.197.653 1.519-.315 3.389zm2.435-9.053c-5.401-.289-10.473 3.988-12.8 10.577-1.666 4.716-.962 8.678 4.147 8.952 5.162.275 10.103-2.946 12.863-10.758 1.667-4.716.475-8.521-4.21-8.771zM142.393 13.159h3.588l2.953-5.157h-3.577l1.559-2.713h-7.05L131.42 20c-.77 1.408-.698 2.986.425 4.41.8 1.036 1.642 1.553 3.158 1.553H139l2.771-4.825h-3.017c-.232 0-.495.038-.593-.181-.05-.135-.08-.277-.019-.403l4.251-7.396M130.303 8.002l-6.708 11.927c-.548.986-1.116 1.266-1.986 1.095-1.086-.213-.632-1.044-.318-1.612l6.61-11.41h-6.573s-7.474 13.004-7.47 13.01c-1.332 2.443.417 4.89 4.745 5.43 2.461.307 7.622.012 10.053-4.15l.013-.01 8.176-14.28h-6.542M111.83 9.954l-2.844 4.959h-3.463l3.116-5.435c.41-.72 1.205-1.357 2.454-1.237 1.046.1 1.384.635.736 1.713zm2.776-8.064c-2.867-.358-8.959 0-11.63 5.082L92.068 25.954h7.109l3.042-5.3h3.457l-3.045 5.3h7.055l10.049-17.435c1.672-3.073.062-5.98-5.13-6.629z"
      }), /* @__PURE__ */ React.createElement("path", {
        fill: "#F37100",
        d: "M101.957 1.887L88.13 25.952h.817l13.823-24.065h-.812zm-5 0L83.134 25.952h1.689L98.65 1.887h-1.693zm-3.017 0h-2.87L77.24 25.952h2.866l4.985-8.65 8.85-15.415zm-9.859 0L70.248 25.952h4.634L88.728 1.887h-4.647zm-8.975 0L61.277 25.952h7.281L82.393 1.887h-7.287zm-11.046 0L50.232 25.952h9.635L73.702 1.887H64.06zm-12.849 0l-13.84 24.065h11.705l13.83-24.065H51.21zm-49.822 0v24.065h35.044L50.257 1.887H1.389z"
      })))), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "shimmer-fancy-letter fancy-letter"
      }, "\u{1D4DE}"), "ne project I'm really excited about is AutoZone."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "I've been a member of the AutoZone Dev team since 2018!"), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "We migrated this amazing e-commerce site from an older stack to a new blazing fast modernized stack."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "We use an agile scrum methodology to get work done efficiently.", " "), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "We use many technologies here as the giant e-commerce site serves millions of people a year, generates billions in revenue and supports 6,767 stores!")),
      /* @__PURE__ */ React.createElement(Page_default, {
        isSlides: !0,
        key: "4",
        number: "4"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-logo"
      }, /* @__PURE__ */ React.createElement(import_react_lazy_load_image_component.LazyLoadImage, {
        alt: "money captain labs",
        height: 50,
        src: "https://www.moneycaptainlabs.com/wp-content/uploads/2021/02/logo-w.png",
        width: 150
      })), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "shimmer-fancy-letter fancy-letter"
      }, "\u{1D578}"), "oneycaptain is a family affair!"), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "My sister (who's also a dev) and I started this company because we feel confident we can use tech to help battle financial illiteracy."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "We use React Native, Express.js, Postgres, Git, Trello, GraphQL and other technologies in our work flow."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "We are currently working on HypePerks! HypePerks is designed for children to earn incentives for doing chores or just achieving goals set up!"), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "With our help, you can be the Captain of your Money Ship!"))),
      /* @__PURE__ */ React.createElement(Page_default, {
        isSlides: !0,
        key: "5",
        number: "5"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "data-logo"
      }, /* @__PURE__ */ React.createElement(import_react_lottie_player2.default, {
        loop: !0,
        animationData: help_default,
        play: !0,
        style: { height: 200, width: 200 }
      })), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "shimmer-fancy-letter fancy-letter"
      }, "\u{1D4E3}"), "his story doesn't end here."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, "I'm available to consult about your prospective project/idea."), /* @__PURE__ */ React.createElement("div", {
        className: "flipbook-slide-text"
      }, /* @__PURE__ */ React.createElement(import_remix9.NavLink, {
        className: "contact-link-color shimmer",
        to: "contact"
      }, "Send me a message!")), /* @__PURE__ */ React.createElement(StyledKofiButton, {
        color: "black"
      })))
    ]
  });
}, MyFlipBook_default = MyFlipBook;

// route:/Users/gdavis/Project/mainSite/app/routes/index.tsx
var action2 = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), subject = formData.get("subject"), message = formData.get("message"), errors = {};
  return name || (errors.name = !0), email || (errors.email = !0), subject || (errors.subject = !0), message || (errors.message = !0), Object.keys(errors).length ? (0, import_remix10.json)(errors, { status: 422 }) : (0, import_remix10.redirect)("/");
}, links6 = () => [
  {
    rel: "stylesheet",
    href: styles_default
  },
  {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  },
  {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  }
], meta6 = () => ({
  title: "Home - Greg | FullStack Developer",
  description: "Welcome to my site"
});
async function loader5() {
  let blogs = await fetchContentfulData(process.env.CONTENTFUL_SPACE_ID, process.env.CONTENTFUL_DELIVERY_TOKEN);
  return {
    GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    blogs
  };
}
var unstable_shouldReload2 = () => !1;
function IndexRoute() {
  let transition = (0, import_remix10.useTransition)(), loaderData = (0, import_remix10.useLoaderData)(), { EMAIL_API_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, blogs } = loaderData, options = {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY
  }, isDesktopOrLaptop = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1241 }), isTabletVal = (0, import_react_responsive3.useMediaQuery)({ minWidth: 720, maxWidth: 1240 }), isMobileVal = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 719 }), [isMobile, setIsMobile] = (0, import_react11.useState)(isMobileVal), [isTablet, setIsTablet] = (0, import_react11.useState)(isTabletVal), [isDesktop, setIsDesktop] = (0, import_react11.useState)(isDesktopOrLaptop), [isDisabled, setIsDisabled] = (0, import_react11.useState)(!0), [name, setName] = (0, import_react11.useState)(""), [email, setEmail] = (0, import_react11.useState)(""), [subject, setSubject] = (0, import_react11.useState)(""), [message, setMessage] = (0, import_react11.useState)("");
  (0, import_react11.useEffect)(() => {
    transition.state === "submitting" && clearForm();
  }, [transition]), (0, import_react11.useEffect)(() => {
    setIsMobile(isMobileVal), setIsTablet(isTabletVal), setIsDesktop(isDesktopOrLaptop);
  }), (0, import_react11.useEffect)(() => {
    setIsDisabled(!(name && email && subject && message));
  }, [name, email, subject, message]);
  let clearForm = () => {
    setName(""), setEmail(""), setSubject(""), setMessage("");
  }, portfolioBackImgStyleContact = {
    backgroundColor: "#ecf0f3",
    display: "flex"
  }, customOptions = {
    mapTypeControl: !1,
    zoom: 15,
    clickableIcons: !1,
    panControl: !1,
    rotateControl: !1,
    scaleControl: !1,
    streetViewControl: !1,
    zoomControl: !1,
    fullscreenControl: !1
  }, handleOnInputChange = (e, inputName) => {
    let value = e.target.value;
    inputName === "name" && setName(value), inputName === "email" && setEmail(value), inputName === "subject" && setSubject(value), inputName === "message" && setMessage(value);
  }, text = !email || !subject || !message || !name ? "Complete the form" : transition.state === "submitting" ? "Sending..." : transition.state === "loading" ? "Thank you!" : "Send message";
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ import_react11.default.createElement("section", {
    id: "section-home",
    className: "section-content section section-child"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "heading-subtexts-container"
  }, /* @__PURE__ */ import_react11.default.createElement("h1", {
    className: "heading-h1-container"
  }, /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "heading-text"
  }, "Hi,"), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "heading-text"
  }, "I'm Greg,"), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "heading-h1-lastItem heading-text"
  }, "Web Developer")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "headings-paragraph-container"
  }, /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "headings-paragraph-item"
  }, "Software Engineer"), /* @__PURE__ */ import_react11.default.createElement("span", {
    className: "headings-pipe"
  }, "|"), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "headings-paragraph-item"
  }, "FullStack Developer"), /* @__PURE__ */ import_react11.default.createElement("span", {
    className: "headings-pipe"
  }, "|"), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "headings-paragraph-item"
  }, "Dad"))), /* @__PURE__ */ import_react11.default.createElement(import_react_tsparticles.default, {
    id: "tsparticles",
    options: particlesConfig_default
  })), /* @__PURE__ */ import_react11.default.createElement("section", {
    className: "section-child portfolio-container",
    id: "section-portfolio"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "section-big-word section-big-word-work"
  }, "Work"), /* @__PURE__ */ import_react11.default.createElement(MyFlipBook_default, null)), /* @__PURE__ */ import_react11.default.createElement("section", {
    className: "section-child",
    id: "section-skills"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "section-big-word section-big-word-skills section-bigWord-zIndex"
  }, "Skills"), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "section-main-heading"
  }, "Skills"), /* @__PURE__ */ import_react11.default.createElement(CloudTagComp_default, {
    ssrID: "homeSSRCloud"
  })), /* @__PURE__ */ import_react11.default.createElement("section", {
    className: "section-blog",
    id: "section-blog"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "section-big-word section-big-word-blog section-bigWord-zIndex"
  }, "Blogs"), /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "section-main-heading"
  }, "Blogs"), /* @__PURE__ */ import_react11.default.createElement(BlogWall_default, {
    blogs,
    isMobile
  })), /* @__PURE__ */ import_react11.default.createElement("section", {
    id: "section-contactMe",
    className: "section-content section section-child ",
    style: portfolioBackImgStyleContact
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "contact-container"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "form-container"
  }, /* @__PURE__ */ import_react11.default.createElement(import_remix10.Form, {
    method: "post",
    className: "form-element",
    onSubmit: () => sendEmail_default(options)
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "contact-div"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "title"
  }, "Contact me"), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "fields"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "form-name"
  }, /* @__PURE__ */ import_react11.default.createElement("input", {
    type: "username",
    className: "user-input",
    name: "name",
    value: name,
    placeholder: name || "Name",
    onChange: (e) => handleOnInputChange(e, "name")
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "form-email"
  }, /* @__PURE__ */ import_react11.default.createElement("input", {
    type: "email",
    name: "email",
    className: "user-input",
    value: email,
    placeholder: email || "Email",
    onChange: (e) => handleOnInputChange(e, "email")
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "form-subject"
  }, /* @__PURE__ */ import_react11.default.createElement("input", {
    type: "username",
    name: "subject",
    className: "user-input",
    value: subject,
    placeholder: subject || "Subject",
    onChange: (e) => handleOnInputChange(e, "subject")
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "form-message"
  }, /* @__PURE__ */ import_react11.default.createElement("textarea", {
    id: "message",
    className: "user-input",
    name: "message",
    rows: 3,
    value: message,
    placeholder: message || "Email body",
    onChange: (e) => handleOnInputChange(e, "message")
  }))), /* @__PURE__ */ import_react11.default.createElement("button", {
    className: isDisabled ? "send-msg-btn-disabled" : "send-msg-btn",
    disabled: isDisabled,
    type: "submit"
  }, /* @__PURE__ */ import_react11.default.createElement("span", null, text))))), /* @__PURE__ */ import_react11.default.createElement(MyMap_default, {
    customOptions
  }))), /* @__PURE__ */ import_react11.default.createElement("footer", {
    className: "footer-home"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "footer-container"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "footer-content"
  }, "Made with ", /* @__PURE__ */ import_react11.default.createElement("span", null, "\u2764\uFE0F"), " in New York"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "73db48d7", entry: { module: "/build/entry.client-EPJXEUAV.js", imports: ["/build/_shared/chunk-VIU3M2OR.js", "/build/_shared/chunk-XF226XJT.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SFLET2NJ.js", imports: ["/build/_shared/chunk-FF5MTKSJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about/index": { id: "routes/about/index", parentId: "root", path: "about", index: !0, caseSensitive: void 0, module: "/build/routes/about/index-UU45IRWT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/$slug": { id: "routes/blogs/$slug", parentId: "root", path: "blogs/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs/$slug-SLQKNY7H.js", imports: ["/build/_shared/chunk-R43KNHA3.js", "/build/_shared/chunk-XCHPDHQY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/index": { id: "routes/blogs/index", parentId: "root", path: "blogs", index: !0, caseSensitive: void 0, module: "/build/routes/blogs/index-SUPLOVFT.js", imports: ["/build/_shared/chunk-XIU2PQZL.js", "/build/_shared/chunk-XCHPDHQY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact/index": { id: "routes/contact/index", parentId: "root", path: "contact", index: !0, caseSensitive: void 0, module: "/build/routes/contact/index-YGYXGRZV.js", imports: ["/build/_shared/chunk-JGDFT6RW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZPPQIY3J.js", imports: ["/build/_shared/chunk-JGDFT6RW.js", "/build/_shared/chunk-D45K2LMO.js", "/build/_shared/chunk-R43KNHA3.js", "/build/_shared/chunk-XIU2PQZL.js", "/build/_shared/chunk-XCHPDHQY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills/index": { id: "routes/skills/index", parentId: "root", path: "skills", index: !0, caseSensitive: void 0, module: "/build/routes/skills/index-I63G2DZ7.js", imports: ["/build/_shared/chunk-D45K2LMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-73DB48D7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: !0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/skills/index": {
    id: "routes/skills/index",
    parentId: "root",
    path: "skills",
    index: !0,
    caseSensitive: void 0,
    module: skills_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: !0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/blogs/$slug": {
    id: "routes/blogs/$slug",
    parentId: "root",
    path: "blogs/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blogs/index": {
    id: "routes/blogs/index",
    parentId: "root",
    path: "blogs",
    index: !0,
    caseSensitive: void 0,
    module: blogs_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.6.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.6.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.6.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
