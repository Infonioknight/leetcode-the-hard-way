"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8734],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>N});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c="mdxType",h={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=o(t),u=s,N=c["".concat(i,".").concat(u)]||c[u]||h[u]||r;return t?n.createElement(N,m(m({ref:e},l),{},{components:t})):n.createElement(N,m({ref:e},l))}));function N(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[c]="string"==typeof a?a:s,m[1]=p;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5678:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(87462),s=(t(67294),t(3905));const r={description:"Author: @ColeB2 | https://leetcode.com/problems/detect-squares/",tags:["Array","Hash Table","Design","Counting"]},m="2013 - Detect Squares (Medium)",p={unversionedId:"2000-2099/detect-squares-medium",id:"2000-2099/detect-squares-medium",title:"2013 - Detect Squares (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/detect-squares/",source:"@site/solutions/2000-2099/2013-detect-squares-medium.md",sourceDirName:"2000-2099",slug:"/2000-2099/detect-squares-medium",permalink:"/solutions/2000-2099/detect-squares-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2013-detect-squares-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Design",permalink:"/solutions/tags/design"},{label:"Counting",permalink:"/solutions/tags/counting"}],version:"current",sidebarPosition:2013,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/detect-squares/",tags:["Array","Hash Table","Design","Counting"]},sidebar:"tutorialSidebar",previous:{title:"2007 - Find Original Array From Doubled Array (Medium)",permalink:"/solutions/2000-2099/find-original-array-from-doubled-array-medium"},next:{title:"2017 - Grid Game (Medium)",permalink:"/solutions/2000-2099/grid-game-medium"}},i={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Checking for Diagonal Points",id:"approach-1-checking-for-diagonal-points",level:2}],l=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},c=l("Tabs"),h=l("TabItem"),u=l("SolutionAuthor"),N={toc:o},k="wrapper";function d(a){let{components:e,...t}=a;return(0,s.kt)(k,(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2013---detect-squares-medium"},"2013 - Detect Squares (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/detect-squares/"},"https://leetcode.com/problems/detect-squares/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given a stream of points on the X-Y plane. Design an algorithm that:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Adds")," new points from the stream into a data structure. ",(0,s.kt)("strong",{parentName:"li"},"Duplicate")," points are allowed and should be treated as different points."),(0,s.kt)("li",{parentName:"ul"},"Given a query point, ",(0,s.kt)("strong",{parentName:"li"},"counts")," the number of ways to choose three points from the data structure such that the three points and the query point form an ",(0,s.kt)("strong",{parentName:"li"},"axis-aligned square")," with ",(0,s.kt)("strong",{parentName:"li"},"positive area"),".\nAn ",(0,s.kt)("strong",{parentName:"li"},"axis-aligned square")," is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.")),(0,s.kt)("p",null,"Implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"DetectSquares")," class:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"DetectSquares()")," Initializes the object with an empty data structure."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"void add(int[] point)")," Adds a new point ",(0,s.kt)("inlineCode",{parentName:"li"},"point = [x, y]")," to the data structure."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"int count(int[] point)")," Counts the number of ways to form ",(0,s.kt)("strong",{parentName:"li"},"axis-aligned squares")," with point ",(0,s.kt)("inlineCode",{parentName:"li"},"point = [x, y]")," as described above.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/09/01/image.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input\n["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]\n[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]\nOutput\n[null, null, null, null, 1, 0, null, 2]\n\nExplanation\nDetectSquares detectSquares = new DetectSquares();\ndetectSquares.add([3, 10]);\ndetectSquares.add([11, 2]);\ndetectSquares.add([3, 2]);\ndetectSquares.count([11, 10]); // return 1. You can choose:\n                               //   - The first, second, and third points\ndetectSquares.count([14, 8]);  // return 0. The query point cannot form a square with any points in the data structure.\ndetectSquares.add([11, 2]);    // Adding duplicate points is allowed.\ndetectSquares.count([11, 10]); // return 2. You can choose:\n                               //   - The first, second, and third points\n                               //   - The first, third, and fourth points\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"point.length == 2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= x, y <= 1000")),(0,s.kt)("li",{parentName:"ul"},"At most ",(0,s.kt)("inlineCode",{parentName:"li"},"3000")," calls in total will be made to ",(0,s.kt)("inlineCode",{parentName:"li"},"add")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"count"),".")),(0,s.kt)("h2",{id:"approach-1-checking-for-diagonal-points"},"Approach 1: Checking for Diagonal Points"),(0,s.kt)("p",null,"This a tricky problem that can be greatly simplified by knowing what to do. If for any given count call, we can check all points inside our hash map and only continue with our algorithm if the point is directly diagonal with the point we are given, then we know we can only create a square with those two points, if there are 2 points that are adjacent to those points, to create the other 2 corners."),(0,s.kt)("p",null,"Meaning during our search for diagonal points, we want a difference in ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x,y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," that is a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dx, dy")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dx != dy")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," and the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," values of our potential diagonal points aren't equal, otherwise, that means they are on the same axis."),(0,s.kt)("p",null,"When we find a suitable corner, we can check the adjacent positions where a corner would need to exist to create a square and multiply the number of points of all three corners to add to our total result. Obviously, if any of those corners don't exist, we will multiply by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),", not creating a square."),(0,s.kt)("p",null,"Time Complexity:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", we can add points to our data structure in constant time."),(0,s.kt)("li",{parentName:"ul"},"Count: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the number of unique points. We are going to check through all unique points once, doing constant time work to determine if we can create a square, and increment our count for the number of squares we find.")),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the number of unique points. We are going to maintain a hash map for our data structure, only creating keys for unique points, and incrementing a value for those points if we find duplicates."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class DetectSquares:\n    # DetectSquares\n    # add O(1) time\n    # count O(n) time\n    # class will maintain a hashmap of O(n) size.\n    def __init__(self):\n        # intiialize our hashmap of points\n        # key: tuple (x,y) coordinate\n        # value: number of times point exists in the plane.\n        self.points = {}\n        \n    def add(self, point: List[int]) -> None:\n        # convert our point to a tuple, so it is hashable in python\n        point = tuple(point)\n        # check point exists in our hash map.\n        if point not in self.points:\n            # doesn't create the key and initialize value to 0\n            self.points[point] = 0\n        # increment the value of the given point\n        self.points[point] += 1\n        \n    def count(self, point: List[int]) -> int:\n        # initialize square, which is the number of squares\n        # we can create with the given point, point.\n        squares = 0\n        # initialize a px, py to represent the x and y coordinates of\n        # the given point, point.\n        px, py = point\n        # loop through all unique points in our hash map, tracking x, y.\n        for (x, y) in self.points.keys():\n            # calculate the absolute distance between given point and\n            # the unique points in our hash map.\n            dx, dy = abs(px - x), abs(py - y)\n            # check if points are diagonal apart, if not continue\n            # if the dy and dx aren't the same, or if the points exist\n            # on the same x/y axis, then they can't be diagonal apart.\n            if (dy != dx) or  px == x or py == y:\n                continue\n            # points are diagonal apart --\x3e check adj corners exist.\n            # if a corner exists, we will use the count from our \n            # self.points hash map, otherwise initialize it with 0.\n            corner1 = self.points[(x, py)] if (x, py) in self.points else 0\n            corner2 = self.points[(px, y)] if (px, y) in self.points else 0\n            # add the values of all 3 points that exist in the hash map\n            # multiplied together. If one of the corners is a 0, we can't\n            # make a square, so it will add 0 to our squares variable.\n            squares += corner1 * corner2 * self.points[(x,y)]\n        return squares\n")))))}d.isMDXComponent=!0}}]);