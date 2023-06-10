"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/can-i-win/",tags:["Math","Dynamic Programming","Bit Manipulation","Memoization","Game Theory","Bitmask"]},i="0464 - Can I Win (Medium)",l={unversionedId:"0400-0499/can-i-win-medium",id:"0400-0499/can-i-win-medium",title:"0464 - Can I Win (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/can-i-win/",source:"@site/solutions/0400-0499/0464-can-i-win-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/can-i-win-medium",permalink:"/solutions/0400-0499/can-i-win-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0464-can-i-win-medium.md",tags:[{label:"Math",permalink:"/solutions/tags/math"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Bit Manipulation",permalink:"/solutions/tags/bit-manipulation"},{label:"Memoization",permalink:"/solutions/tags/memoization"},{label:"Game Theory",permalink:"/solutions/tags/game-theory"},{label:"Bitmask",permalink:"/solutions/tags/bitmask"}],version:"current",sidebarPosition:464,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/can-i-win/",tags:["Math","Dynamic Programming","Bit Manipulation","Memoization","Game Theory","Bitmask"]},sidebar:"tutorialSidebar",previous:{title:"0452 - Minimum Number of Arrows to Burst Balloons (Medium)",permalink:"/solutions/0400-0499/minimum-number-of-arrows-to-burst-balloons-medium"},next:{title:"0465 - Optimal Account Balancing (Hard)",permalink:"/solutions/0400-0499/optimal-account-balancing-hard"}},s={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bitmask",id:"approach-1-bitmask",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Tabs"),c=p("TabItem"),d=p("SolutionAuthor"),h={toc:m},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0464---can-i-win-medium"},"0464 - Can I Win (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/can-i-win/"},"https://leetcode.com/problems/can-i-win/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,'In the "100 game" two players take turns adding, to a running total, any integer from ',(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),". The player who first causes the running total to ",(0,r.kt)("strong",{parentName:"p"},"reach or exceed")," 100 wins."),(0,r.kt)("p",null,"What if we change the game so that players ",(0,r.kt)("strong",{parentName:"p"},"cannot")," re-use integers?"),(0,r.kt)("p",null,"For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100."),(0,r.kt)("p",null,"Given two integers ",(0,r.kt)("inlineCode",{parentName:"p"},"maxChoosableInteger")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"desiredTotal"),", return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the first player to move can force a win, otherwise, return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Assume both players play ",(0,r.kt)("strong",{parentName:"p"},"optimally"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: maxChoosableInteger = 10, desiredTotal = 11\nOutput: false\nExplanation:\nNo matter which integer the first player choose, the first player will lose.\nThe first player can choose an integer from 1 up to 10.\nIf the first player choose 1, the second player can only choose integers from 2 up to 10.\nThe second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.\nSame with other integers chosen by the first player, the second player will always win.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: maxChoosableInteger = 10, desiredTotal = 0\nOutput: true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: maxChoosableInteger = 10, desiredTotal = 1\nOutput: true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= maxChoosableInteger <= 20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= desiredTotal <= 300"))),(0,r.kt)("h2",{id:"approach-1-bitmask"},"Approach 1: Bitmask"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    @lru_cache(None)\n    def canIWin(self, maxChoosableInteger: int, desiredTotal: int, b = 0) -> bool:\n        # 1 + 2 + 3 + .. maxChoosableInteger < desiredTotal -> no one can win\n        # desiredTotal <= 0 and b is set -> can't make a move\n        if maxChoosableInteger * (maxChoosableInteger + 1) // 2 < desiredTotal or desiredTotal <= 0 and b:\n            return False\n        # try each number in [1, maxChoosableInteger]\n        for i in range(1, maxChoosableInteger + 1):\n            # if this number is not used\n            if not (1 << i) & b:\n                # then mark it used -> b | (1 << i)\n                # update desiredTotal to desiredTotal - i\n                if not self.canIWin(maxChoosableInteger, desiredTotal - i, b | (1 << i)):\n                    return True\n")))))}g.isMDXComponent=!0}}]);