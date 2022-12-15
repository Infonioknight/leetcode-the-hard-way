"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2651],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39270:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},suggestedProblems:function(){return d},toc:function(){return m}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","minimum spanning tree","mst","algorithm"]},l=void 0,u={unversionedId:"graph-theory/minimum-spanning-tree",id:"graph-theory/minimum-spanning-tree",title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",source:"@site/tutorials/graph-theory/minimum-spanning-tree.md",sourceDirName:"graph-theory",slug:"/graph-theory/minimum-spanning-tree",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/minimum-spanning-tree",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/minimum-spanning-tree.md",tags:[],version:"current",frontMatter:{title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","minimum spanning tree","mst","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Lowest Common Ancestor(LCA)",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/lca"},next:{title:"Tarjan's Algorithm",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/tarjans-algorithm"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Kruskal&#39;s Algorithm",id:"kruskals-algorithm",level:3},{value:"C++ Implementation",id:"c-implementation",level:4}],d=[{problemName:"1135 - Connecting Cities With Minimum Cost",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/connecting-cities-with-minimum-cost/",solutionLink:"../../solutions/1100-1199/connecting-cities-with-minimum-cost-medium"},{problemName:"1168 - Optimize Water Distribution in a Village",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/optimize-water-distribution-in-a-village/",solutionLink:"../../solutions/1100-1199/optimize-water-distribution-in-a-village-hard"}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)}},g=p("TutorialAuthors"),h=p("Table"),f={toc:m,suggestedProblems:d};function y(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(g,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles."),(0,o.kt)("h3",{id:"kruskals-algorithm"},"Kruskal's Algorithm"),(0,o.kt)("p",null,"We sort the edges based on the weights in ascending order. Then we iterate them one by one, and greedily pick edges which does not result in cycle with the previous edges."),(0,o.kt)("h4",{id:"c-implementation"},"C++ Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nint mst(vector<vector<int>>& g) {\n    int n = (int) g.size();\n    vector<array<int, 3>> edges;\n    // g[i] = {from, to, weight}\n    for (auto x : g) edges.push_back({x[2], x[0], x[1]}); \n    sort(edges.begin(), edges.end());\n    dsu d(n + 1);\n    int minimum_weight = 0;\n    for (auto x : edges) {\n        if (d.unite(x[1], x[2])) {\n            minimum_weight += x[0];\n        }\n    }\n    return minimum_weight;\n}\n")),(0,o.kt)(h,{title:"Suggested Problems",data:d,mdxType:"Table"}))}y.isMDXComponent=!0}}]);