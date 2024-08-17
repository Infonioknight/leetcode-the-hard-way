"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[75167],{49205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(85893),a=t(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/",tags:["Array","Dynamic Programming","Greedy"]},o="1326 - Minimum Number of Taps to Open to Water a Garden (Hard)",s={id:"1300-1399/minimum-number-of-taps-to-open-to-water-a-garden-hard",title:"1326 - Minimum Number of Taps to Open to Water a Garden (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/",source:"@site/solutions/1300-1399/1326-minimum-number-of-taps-to-open-to-water-a-garden-hard.md",sourceDirName:"1300-1399",slug:"/1300-1399/minimum-number-of-taps-to-open-to-water-a-garden-hard",permalink:"/solutions/1300-1399/minimum-number-of-taps-to-open-to-water-a-garden-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1326-minimum-number-of-taps-to-open-to-water-a-garden-hard.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{inline:!0,label:"Greedy",permalink:"/solutions/tags/greedy"}],version:"current",sidebarPosition:1326,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/",tags:["Array","Dynamic Programming","Greedy"]},sidebar:"tutorialSidebar",previous:{title:"1305 - All Elements in Two Binary Search Trees (Medium)",permalink:"/solutions/1300-1399/all-elements-in-two-binary-search-trees-medium"},next:{title:"1328 - Break a Palindrome (Medium)",permalink:"/solutions/1300-1399/break-a-palindrome-medium"}},d={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:t,TabItem:i,Tabs:o}=n;return t||p("SolutionAuthor",!0),i||p("TabItem",!0),o||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1326---minimum-number-of-taps-to-open-to-water-a-garden-hard",children:"1326 - Minimum Number of Taps to Open to Water a Garden (Hard)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/",children:"https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["There is a one-dimensional garden on the x-axis. The garden starts at the point ",(0,r.jsx)(n.code,{children:"0"})," and ends at the point ",(0,r.jsx)(n.code,{children:"n"}),". (i.e The length of the garden is ",(0,r.jsx)(n.code,{children:"n"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["There are ",(0,r.jsx)(n.code,{children:"n + 1"})," taps located at points ",(0,r.jsx)(n.code,{children:"[0, 1, ..., n]"})," in the garden."]}),"\n",(0,r.jsxs)(n.p,{children:["Given an integer ",(0,r.jsx)(n.code,{children:"n"})," and an integer array ",(0,r.jsx)(n.code,{children:"ranges"})," of length ",(0,r.jsx)(n.code,{children:"n + 1"})," where ",(0,r.jsx)(n.code,{children:"ranges[i]"})," (0-indexed) means the ",(0,r.jsx)(n.code,{children:"i-th"})," tap can water the area ",(0,r.jsx)(n.code,{children:"[i - ranges[i], i + ranges[i]]"})," if it was open."]}),"\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.em,{children:"the minimum number of taps"})," that should be open to water the whole garden, If the garden cannot be watered return ",(0,r.jsx)(n.strong,{children:"-1"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 5, ranges = [3,4,1,1,0,0]\nOutput: 1\nExplanation: The tap at point 0 can cover the interval [-3,3]\nThe tap at point 1 can cover the interval [-3,5]\nThe tap at point 2 can cover the interval [1,3]\nThe tap at point 3 can cover the interval [2,4]\nThe tap at point 4 can cover the interval [4,4]\nThe tap at point 5 can cover the interval [5,5]\nOpening Only the second tap will water the whole garden [0,5]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 3, ranges = [0,0,0,0]\nOutput: -1\nExplanation: Even if you activate all the four taps you cannot water the whole garden.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= n <= 10^4"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ranges.length == n + 1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= ranges[i] <= 100"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,r.jsx)(o,{children:(0,r.jsxs)(i,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// TC: O(n * m) where m is ranges[i]\n// SC: O(n)\nclass Solution {\npublic:\n    int minTaps(int n, vector<int>& ranges) {\n        // dp[i]: min number of taps that should be open to water garden [0 .. i]\n        // init with some max values\n        vector<int> dp(n + 1, n + 1);\n        // no tap is needed to water no garden\n        dp[0] = 0;\n        for (int i = 0; i <= n; i++) {\n            // we can water garden [i - ranges[i] .. i + ranges[i]] with tap i\n            // rmb to handle the boundary ...\n            int l = max(0, i - ranges[i]), r = min(i + ranges[i], n);\n            for (int j = l; j <= r; j++) {\n                // check we can use less number of taps from [l .. r]\n                // i.e. can i water [0 .. j] just using dp[j] taps\n                // or I need to water dp[0 .. l] `dp[l]` times \n                // and use one more tap to water [l + 1 .. j]\n                dp[j] = min(dp[j], dp[l] + 1);\n            }\n        }\n        // if min number of taps not found, return -1, else return dp[n]\n        return dp[n] == n + 1 ? -1 : dp[n];\n    }\n};\n"})})]})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);