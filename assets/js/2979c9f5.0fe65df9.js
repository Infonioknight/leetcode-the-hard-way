"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[81539],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=i(t),d=r,N=h["".concat(o,".").concat(d)]||h[d]||c[d]||s;return t?n.createElement(N,m(m({ref:a},l),{},{components:t})):n.createElement(N,m({ref:a},l))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=h;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},43354:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),m=["components"],p={description:"Author: @ColeB2 | https://leetcode.com/problems/redundant-connection/",tags:["Depth-First Search","Breadth-First Search","Union Find","Graph"]},o="0684 - Redundant Connection (Medium)",i={unversionedId:"0600-0699/redundant-connection-medium",id:"0600-0699/redundant-connection-medium",title:"0684 - Redundant Connection (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/redundant-connection/",source:"@site/solutions/0600-0699/0684-redundant-connection-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/redundant-connection-medium",permalink:"/solutions/0600-0699/redundant-connection-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0684-redundant-connection-medium.md",tags:[{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Union Find",permalink:"/solutions/tags/union-find"},{label:"Graph",permalink:"/solutions/tags/graph"}],version:"current",sidebarPosition:684,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/redundant-connection/",tags:["Depth-First Search","Breadth-First Search","Union Find","Graph"]},sidebar:"tutorialSidebar",previous:{title:"0682 - Baseball Game (Easy)",permalink:"/solutions/0600-0699/baseball-game-easy"},next:{title:"0692 - Top K Frequent Words (Medium)",permalink:"/solutions/0600-0699/top-k-frequent-words-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Union Find",id:"approach-1-union-find",level:2}],h=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}},d=h("Tabs"),N=h("TabItem"),k=h("SolutionAuthor"),u={toc:c};function g(e){var a=e.components,t=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0684---redundant-connection-medium"},"0684 - Redundant Connection (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/redundant-connection/"},"https://leetcode.com/problems/redundant-connection/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"In this problem, a tree is an ",(0,s.kt)("strong",{parentName:"p"},"undirected graph")," that is connected and has no cycles."),(0,s.kt)("p",null,"You are given a graph that started as a tree with ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," nodes labeled from ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", with one additional edge added. The added edge has two ",(0,s.kt)("strong",{parentName:"p"},"different")," vertices chosen from ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", and was not an edge that already existed. The graph is represented as an array ",(0,s.kt)("inlineCode",{parentName:"p"},"edges")," of length ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"edges[i] = [ai, bi]")," indicates that there is an edge between nodes ",(0,s.kt)("inlineCode",{parentName:"p"},"ai")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"bi")," in the graph."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"an edge that can be removed so that the resulting graph is a tree of")," ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," ",(0,s.kt)("em",{parentName:"p"},"nodes"),". If there are multiple answers, return the answer that occurs last in the input."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/05/02/reduntant1-1-graph.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: edges = [[1,2],[1,3],[2,3]]\nOutput: [2,3]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/05/02/reduntant1-2-graph.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]\nOutput: [1,4]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"n == edges.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"3 <= n <= 1000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"edges[i].length == 2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= ai < bi <= edges.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ai != bi")),(0,s.kt)("li",{parentName:"ul"},"There are no repeated edges."),(0,s.kt)("li",{parentName:"ul"},"The given graph is connected.")),(0,s.kt)("h2",{id:"approach-1-union-find"},"Approach 1: Union Find"),(0,s.kt)("p",null,"We can create ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," graphs of size 1, and combine the graphs based on each edge given in edges. To do this we would need to track the parent nodes of each node, which can be done in an array where the index is the node, and the value is the index of the node's parent. We can similarily track the size of each graph using an array, where the index of the array is the node, and the value is the size of the graph."),(0,s.kt)("p",null,"Then for each edge in edges we can combine those graphs which share an edge. We do that by finding the root of each graph, using a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"find()")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," algorithm, and then combining the smaller graph with the larger graph. If we ever run into an edge that combines two nodes that are already connected, we know that this edge would cause a cycle, and be the edge we would want to remove."),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where n is the number of edges. It ends up being about ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n*\u03b1(n))")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"))")))))," where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\u03b1(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," is the inverse Ackerman function, which for our worst case, will only ever be a constant, and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," will be the number of calls to our ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"find()")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," algorithm."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," to maintain our ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"parent")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"rank")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"ank")))))," arrays."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(N,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\n        # initialize parent, and rank\n        # The index of each value is the node number, the value is\n        # the index of the nodes parent.\n        # Initialize it so each node is it's own parent.\n        parent = [i for i in range(len(edges) + 1)]\n        # Size of each 'graph\\tree'. Starting out each graph will be\n        # a graph of its own self, so initialize all as size 1.\n        rank = [1] * (len(edges) + 1)\n        # Find algorithm, finds' the parent given a node.\n        def find(n):\n            # Initialize node to be the parent of n.\n            node = parent[n]\n            # while node isn't it's own parent\n            # Walk up the nodes graph of ancestors until we reach the root.\n            while node != parent[node]:\n                # Path Compression: update the parent of current node to be\n                # parent of the parent to make subsequent find on node faster.\n                parent[node] = parent[parent[node]]\n                node = parent[node]\n            # node which is the root.\n            return node\n        # Union algorithm: Combines the graphs of n1 and n2.\n        def union(n1, n2):\n            # find roots of both n1 and n2.\n            p1, p2 = find(n1), find(n2)\n            # if roots of both n1, n2 are equal, it means both\n            # nodes are already in the same graph.\n            if p1 == p2:\n                return False\n            # p1 is part of the bigger graph:\n            if rank[p1] > rank[p2]:\n                # Change p2 parent to be p1\n                parent[p2] = p1\n                # update p1 graph size with additional values of p2.\n                rank[p1] += rank[p2]\n            else:\n                # p2 is the bigger/equal size graph\n                # set p1 parent to be p2\n                parent[p1] = p2\n                # update size of graph of p2.\n                rank[p2] += rank[p1]\n            # Graphs are joined, return True.\n            return True\n        # Loop each each in edges\n        for n1, n2 in edges:\n            # union of both edges returns false, it means both\n            # edges were already apart of the same graph, so \n            # the next edge would cause a cycle. So we would return\n            # that edge.\n            if not union(n1, n2):\n                return [n1, n2]\n            # Otherwise continue looping through the edges.\n")))))}g.isMDXComponent=!0}}]);