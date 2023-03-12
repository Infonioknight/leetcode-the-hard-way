"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[62336],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),N=i(t),k=r,h=N["".concat(o,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,s(s({ref:a},l),{},{components:t})):n.createElement(h,s({ref:a},l))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=N;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<m;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},51730:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return N}});var n,r=t(87462),m=t(63366),s=(t(67294),t(3905)),p=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/grid-game/"},i="2017 - Grid Game (Medium)",l={unversionedId:"2000-2099/grid-game-medium",id:"2000-2099/grid-game-medium",title:"2017 - Grid Game (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/grid-game/",source:"@site/solutions/2000-2099/2017-grid-game-medium.md",sourceDirName:"2000-2099",slug:"/2000-2099/grid-game-medium",permalink:"/solutions/2000-2099/grid-game-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2017-grid-game-medium.md",tags:[],version:"current",sidebarPosition:2017,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/grid-game/"},sidebar:"tutorialSidebar",previous:{title:"2007 - Find Original Array From Doubled Array (Medium)",permalink:"/solutions/2000-2099/find-original-array-from-doubled-array-medium"},next:{title:"2032 - Two Out of Three (Easy)",permalink:"/solutions/2000-2099/two-out-of-three-easy"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix &amp; Suffix Sum",id:"approach-1-prefix--suffix-sum",level:2}],k=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),h={toc:N};function u(e){var a=e.components,t=(0,m.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2017---grid-game-medium"},"2017 - Grid Game (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/grid-game/"},"https://leetcode.com/problems/grid-game/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given a ",(0,s.kt)("strong",{parentName:"p"},"0-indexed")," 2D array ",(0,s.kt)("inlineCode",{parentName:"p"},"grid")," of size ",(0,s.kt)("inlineCode",{parentName:"p"},"2 x n"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"grid[r][c]")," represents the number of points at position ",(0,s.kt)("inlineCode",{parentName:"p"},"(r, c)")," on the matrix. Two robots are playing a game on this matrix."),(0,s.kt)("p",null,"Both robots initially start at ",(0,s.kt)("inlineCode",{parentName:"p"},"(0, 0)")," and want to reach ",(0,s.kt)("inlineCode",{parentName:"p"},"(1, n-1)"),". Each robot may only move to the ",(0,s.kt)("strong",{parentName:"p"},"right")," (",(0,s.kt)("inlineCode",{parentName:"p"},"(r, c)")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"(r, c + 1)"),") or ",(0,s.kt)("strong",{parentName:"p"},"down")," (",(0,s.kt)("inlineCode",{parentName:"p"},"(r, c)")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"(r + 1, c)"),")."),(0,s.kt)("p",null,"At the start of the game, the ",(0,s.kt)("strong",{parentName:"p"},"first")," robot moves from ",(0,s.kt)("inlineCode",{parentName:"p"},"(0, 0)")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"(1, n-1)"),", collecting all the points from the cells on its path. For all cells ",(0,s.kt)("inlineCode",{parentName:"p"},"(r, c)")," traversed on the path, ",(0,s.kt)("inlineCode",{parentName:"p"},"grid[r][c]")," is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),". Then, the ",(0,s.kt)("strong",{parentName:"p"},"second")," robot moves from ",(0,s.kt)("inlineCode",{parentName:"p"},"(0, 0)")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"(1, n-1)"),", collecting the points on its path. Note that their paths may intersect with one another."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"first")," robot wants to ",(0,s.kt)("strong",{parentName:"p"},"minimize")," the number of points collected by the ",(0,s.kt)("strong",{parentName:"p"},"second")," robot. In contrast, the ",(0,s.kt)("strong",{parentName:"p"},"second")," robot wants to ",(0,s.kt)("strong",{parentName:"p"},"maximize")," the number of points it collects. If both robots play ",(0,s.kt)("strong",{parentName:"p"},"optimally"),", return ",(0,s.kt)("em",{parentName:"p"},"the ",(0,s.kt)("strong",{parentName:"em"},"number of points")," collected by the ",(0,s.kt)("strong",{parentName:"em"},"second")," robot.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/09/08/a1.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: grid = [[2,5,4],[1,5,1]]\nOutput: 4\nExplanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.\nThe cells visited by the first robot are set to 0.\nThe second robot will collect 0 + 0 + 4 + 0 = 4 points.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/09/08/a2.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: grid = [[3,3,1],[8,5,2]]\nOutput: 4\nExplanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.\nThe cells visited by the first robot are set to 0.\nThe second robot will collect 0 + 3 + 1 + 0 = 4 points.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/09/08/a3.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: grid = [[1,3,1,15],[1,3,3,1]]\nOutput: 7\nExplanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.\nThe cells visited by the first robot are set to 0.\nThe second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"grid.length == 2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"n == grid[r].length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= n <= 5 * 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= grid[r][c] <= 10^5"))),(0,s.kt)("h2",{id:"approach-1-prefix--suffix-sum"},"Approach 1: Prefix & Suffix Sum"),(0,s.kt)("p",null,"The first observation is that the first point on the top row and the last point on the bottom row would be collected by robot 1. Therefore, robot 2 can only collect some from the top or from the bottom. In this case, we can use prefix sum and suffix sum to get how many points robot 2 can collect at a certain index."),(0,s.kt)("p",null,"For each index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),", robot 2 could either"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"get from the top row, i.e. ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"pref[n - 1] - pref[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),", or"),(0,s.kt)("li",{parentName:"ul"},"get from the bottom row, i.e. ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"suff[0] - suff[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"ff"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"ff"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))))),(0,s.kt)("p",null,"We take the maximum one at each ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," and compare with the current answer. As robot 1 plays optimally, which means it would get the maximum point. We take the minimum here."),(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    long long gridGame(vector<vector<int>>& grid) {\n        int n = grid[0].size();\n        // build pref sum\n        vector<long long> pref(n);\n        pref[0] = grid[0][0];\n        for (int i = 1; i < n; i++) {\n            pref[i] = pref[i - 1] + grid[0][i];\n        }\n        // build suffix sum\n        vector<long long> suff(n);\n        suff[n - 1] = grid[1][n - 1];\n        for (int i = n - 2; i >= 0; i--) {\n            suff[i] = suff[i + 1] + grid[1][i];\n        }\n        // robot 1 would get the max point\n        long long ans = 1e18;\n        // iterate each index\n        for (int i = 0; i < n; i++) {\n            // either take \n            ans = min({\n                // take the min one with ans\n                ans, \n                // choose the best one\n                max(\n                    // take from the top row\n                    pref[n - 1] - pref[i], \n                    // take from the bottom row\n                    suff[0] - suff[i])}\n                );\n        }\n        return ans;\n    }\n};\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Further Question 1: What is the maximum points collected by robot 1?")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Check Answer"),(0,s.kt)("p",null,"The idea is similar. Robot 1 can collect all points till ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),", then move to the bottom row and go till the end. We can simply check ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"pref[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," (collected on the top row) plus ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"suff[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"ff"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," (collected on the bottom row)."),(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    long long gridGame(vector<vector<int>>& grid) {\n        int n = grid[0].size();\n        vector<int> pref(n);\n        pref[0] = grid[0][0];\n        for (int i = 1; i < n; i++) {\n            pref[i] = pref[i - 1] + grid[0][i];\n        }\n        vector<int> suff(n);\n        suff[n - 1] = grid[1][n - 1];\n        for (int i = n - 2; i >= 0; i--) {\n            suff[i] = suff[i + 1] + grid[1][i];\n        }\n        int ans = 0;\n        for (int i = 0; i < n; i++) {\n            ans = max(ans, pref[i] + suff[i]);\n        }\n        return ans;\n    }\n};\n"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Further Question 2: Are you able to optimise the above solution?")))}u.isMDXComponent=!0}}]);