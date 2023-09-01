"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[77598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=n(87462),a=(n(67294),n(3905));const r={description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-ii/",tags:["Array","Math","Dynamic Programming","Game Theory"]},o="1140 - Stone Game II (Medium)",s={unversionedId:"1100-1199/stone-game-ii-medium",id:"1100-1199/stone-game-ii-medium",title:"1140 - Stone Game II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-ii/",source:"@site/solutions/1100-1199/1140-stone-game-ii-medium.md",sourceDirName:"1100-1199",slug:"/1100-1199/stone-game-ii-medium",permalink:"/solutions/1100-1199/stone-game-ii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1140-stone-game-ii-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Math",permalink:"/solutions/tags/math"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Game Theory",permalink:"/solutions/tags/game-theory"}],version:"current",sidebarPosition:1140,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-ii/",tags:["Array","Math","Dynamic Programming","Game Theory"]},sidebar:"tutorialSidebar",previous:{title:"1137 - N-th Tribonacci Number (Easy)",permalink:"/solutions/1100-1199/n-th-tribonacci-number-easy"},next:{title:"1143 - Longest Common Subsequence (Medium)",permalink:"/solutions/1100-1199/longest-common-subsequence-medium"}},l={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("Tabs"),c=p("TabItem"),d=p("SolutionAuthor"),h={toc:m},g="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1140---stone-game-ii-medium"},"1140 - Stone Game II (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Alice and Bob continue their\xa0games with piles of stones.\xa0 There are a number of\xa0piles\xa0",(0,a.kt)("strong",{parentName:"p"},"arranged in a row"),", and each pile has a positive integer number of stones\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"piles[i]"),".\xa0 The objective of the game is to end with the most\xa0stones."),(0,a.kt)("p",null,"Alice\xa0and Bob take turns, with Alice starting first.\xa0 Initially, ",(0,a.kt)("inlineCode",{parentName:"p"},"M = 1"),"."),(0,a.kt)("p",null,"On each player's turn, that player\xa0can take ",(0,a.kt)("strong",{parentName:"p"},"all the stones")," in the ",(0,a.kt)("strong",{parentName:"p"},"first")," ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," remaining piles, where ",(0,a.kt)("inlineCode",{parentName:"p"},"1 <= X <= 2M"),".\xa0 Then, we set\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"M = max(M, X)"),"."),(0,a.kt)("p",null,"The game continues until all the stones have been taken."),(0,a.kt)("p",null,"Assuming Alice and Bob play optimally, return the maximum number of stones Alice\xa0can get."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: piles = [2,7,9,4,4]\nOutput: 10\nExplanation:  If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 piles in total. If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 piles in total. So we return 10 since it's larger.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: piles = [1,2,3,4,5,100]\nOutput: 104\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= piles.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= piles[i]\xa0<= 10^4"))),(0,a.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // dp[i][j] = max stones you can get from piles[i:] with M = j\n    int dp[101][200], n;\n    int dfs(vector<int>& piles, int i, int m, int total) {\n        // if we calculated the result before, use it directly\n        if (dp[i][m] != -1) return dp[i][m];\n        // res: used to compare the max number of stones\n        // taken: used to record how many stones we've taken\n        int res = 0, taken = 0;\n        // i is the starting position\n        // we can take at most i + 2 * m piles\n        // however, it may exceed the size of piles \n        // hence use min to get the max limit\n        for (int j = i; j < min(i + 2 * m, n); j++) {\n            // take this pile of stones\n            taken += piles[j];\n            // move to the next position\n            // with the new M = max(M, X)\n            // where X is how many piles we've taken so far which is j - i + 1\n            res = max(res, total - dfs(piles, j + 1, max(m, j - i + 1), total - taken));\n        }\n        // memoize the result\n        return dp[i][m] = res;\n    }\n    \n    int stoneGameII(vector<int>& piles) {\n        // init dp with value -1\n        memset(dp, -1, sizeof(dp));\n        n = piles.size();\n        return dfs(piles, 0, 1, accumulate(piles.begin(), piles.end(), 0));\n    }\n};\n"))),(0,a.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def stoneGameII(self, piles: List[int]) -> int:\n        n = len(piles)\n        @cache\n        def dfs(i, m, total):\n            # used to compare the max number of stones\n            res = 0\n            # used to record how many stones we've taken\n            taken = 0\n            # i is the starting position\n            # we can take at most i + 2 * m piles\n            # however, it may exceed the size of piles \n            # hence use min to get the max limit\n            for j in range(i, min(i + 2 * m, n)):\n                # take this pile of stones\n                taken += piles[j]\n                # move to the next position\n                # with the new M = max(M, X)\n                # where X is how many piles we've taken so far which is j - i + 1\n                res = max(res, total - dfs(j + 1, max(m, j - i + 1), total - taken))\n            return res\n        return dfs(0, 1, sum(piles))\n")))))}k.isMDXComponent=!0}}]);