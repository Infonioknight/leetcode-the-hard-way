"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[50770],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return s},metadata:function(){return l},suggestedProblems:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Kruskal's Algorithm",description:"Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree of a connected, undirected graph.",keywords:["leetcode","tutorial","kruskals","algorithm"]},m=void 0,l={unversionedId:"graph-theory/kruskals-algorithm",id:"graph-theory/kruskals-algorithm",title:"Kruskal's Algorithm",description:"Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree of a connected, undirected graph.",source:"@site/tutorials/graph-theory/kruskals-algorithm.md",sourceDirName:"graph-theory",slug:"/graph-theory/kruskals-algorithm",permalink:"/tutorials/graph-theory/kruskals-algorithm",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/kruskals-algorithm.md",tags:[],version:"current",frontMatter:{title:"Kruskal's Algorithm",description:"Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree of a connected, undirected graph.",keywords:["leetcode","tutorial","kruskals","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Disjoint Set Union (DSU)",permalink:"/tutorials/graph-theory/disjoint-set-union"},next:{title:"Lowest Common Ancestor(LCA)",permalink:"/tutorials/graph-theory/lca"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Implementation",id:"implementation",level:4}],u=[{problemName:"1135 - Connecting Cities With Minimum Cost",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/connecting-cities-with-minimum-cost/",solutionLink:"../../solutions/1100-1199/connecting-cities-with-minimum-cost-medium"},{problemName:"1168 - Optimize Water Distribution in a Village",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/optimize-water-distribution-in-a-village/",solutionLink:"../../solutions/1100-1199/optimize-water-distribution-in-a-village-hard"}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=d("TutorialAuthors"),g=d("Tabs"),k=d("TabItem"),f=d("SolutionAuthor"),y=d("Table"),N={toc:c,suggestedProblems:u};function w(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(h,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Kruskal's algorithm is a greedy algorithm used to find the minimum spanning tree of a connected, undirected graph. The algorithm starts with each vertex in its own separate connected component, and iteratively adds edges to the MST in increasing order of weight, while ensuring that adding the edge does not form a cycle."),(0,i.kt)("p",null,"Here are the steps to find the MST using Kruskal's algorithm:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sort all the edges in non-decreasing order of their weight."),(0,i.kt)("li",{parentName:"ol"},"Initialize the MST as an empty set."),(0,i.kt)("li",{parentName:"ol"},"For each edge in the sorted list of edges:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If adding the edge does not form a cycle in the MST, add the edge to the MST."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, discard the edge."))),(0,i.kt)("li",{parentName:"ol"},"Repeat steps 3 until all the vertices are included in the MST.")),(0,i.kt)("p",null,"The time complexity of Kruskal's algorithm is ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"E"),(0,i.kt)("mi",{parentName:"mrow"},"l"),(0,i.kt)("mi",{parentName:"mrow"},"o"),(0,i.kt)("mi",{parentName:"mrow"},"g"),(0,i.kt)("mi",{parentName:"mrow"},"E"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(E log E)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"El"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"E")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E")))))," is the number of edges in the graph. It is more efficient than Prim's algorithm when the number of edges is much larger than the number of vertices."),(0,i.kt)("h4",{id:"implementation"},"Implementation"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisite")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../graph-theory/disjoint-set-union"},"Disjoint Set Union"))))),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(k,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nint mst(vector<vector<int>>& g) {\n    int n = (int) g.size();\n    vector<array<int, 3>> edges;\n    // g[i] = {from, to, weight}\n    for (auto x : g) edges.push_back({x[2], x[0], x[1]}); \n    sort(edges.begin(), edges.end());\n    dsu d(n + 1);\n    int minimum_weight = 0;\n    for (auto x : edges) {\n        if (d.unite(x[1], x[2])) {\n            minimum_weight += x[0];\n        }\n    }\n    return minimum_weight;\n}\n")))),(0,i.kt)(y,{title:"Suggested Problems",data:u,mdxType:"Table"}))}w.isMDXComponent=!0}}]);