"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[28029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Fenwick Tree",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","fenwick tree"]},a=void 0,c={unversionedId:"fenwick-tree",id:"fenwick-tree",title:"Fenwick Tree",description:"",source:"@site/templates/fenwick-tree.md",sourceDirName:".",slug:"/fenwick-tree",permalink:"/templates/fenwick-tree",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/fenwick-tree.md",tags:[],version:"current",frontMatter:{title:"Fenwick Tree",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","fenwick tree"]},sidebar:"tutorialSidebar",previous:{title:"Euler Path",permalink:"/templates/euler"},next:{title:"Graph Theory",permalink:"/templates/graph-theory"}},l={},p=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},s=u("Tabs"),d=u("TabItem"),f={toc:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"Tabs"},(0,i.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class T>\nstruct BIT { //1-indexed\n  int n; vector<T> t;\n  BIT() {}\n  BIT(int _n) {\n    n = _n; t.assign(n + 1, 0);\n  }\n  T query(int i) {\n    T ans = 0;\n    for (; i >= 1; i -= (i & -i)) ans += t[i];\n    return ans;\n  }\n  void upd(int i, T val) {\n    if (i <= 0) return;\n    for (; i <= n; i += (i & -i)) t[i] += val;\n  }\n  void upd(int l, int r, T val) {\n    upd(l, val);\n    upd(r + 1, -val);\n  }\n  T query(int l, int r) {\n    return query(r) - query(l - 1);\n  }\n};\n\n\n// BIT bit = BIT<int>(n);\n")))))}y.isMDXComponent=!0}}]);