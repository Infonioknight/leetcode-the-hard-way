"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92310],{88441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(85893),s=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/"},i="2239 - Find Closest Number to Zero (Easy)",l={id:"2200-2299/find-closest-number-to-zero-easy",title:"2239 - Find Closest Number to Zero (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/",source:"@site/solutions/2200-2299/2239-find-closest-number-to-zero-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/find-closest-number-to-zero-easy",permalink:"/solutions/2200-2299/find-closest-number-to-zero-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2239-find-closest-number-to-zero-easy.md",tags:[],version:"current",sidebarPosition:2239,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-closest-number-to-zero/"},sidebar:"tutorialSidebar",previous:{title:"2237 - Count Positions on Street With Required Brightness (Medium)",permalink:"/solutions/2200-2299/count-positions-on-street-with-required-brightness-medium"},next:{title:"2240 - Number of Ways to Buy Pens and Pencils (Medium)",permalink:"/solutions/2200-2299/number-of-ways-to-buy-pens-and-pencils-medium"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1:",id:"approach-1",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2239---find-closest-number-to-zero-easy",children:"2239 - Find Closest Number to Zero (Easy)"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/find-closest-number-to-zero/",children:"https://leetcode.com/problems/find-closest-number-to-zero/"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["Given an integer array ",(0,o.jsx)(n.code,{children:"nums"})," of size ",(0,o.jsx)(n.code,{children:"n"}),", return ",(0,o.jsxs)(n.em,{children:["the number with the value ",(0,o.jsx)(n.strong,{children:"closest"})," to"]})," ",(0,o.jsx)(n.code,{children:"0"})," ",(0,o.jsx)(n.em,{children:"in"})," ",(0,o.jsx)(n.code,{children:"nums"}),". If there are multiple answers, return ",(0,o.jsxs)(n.em,{children:["the number with the ",(0,o.jsx)(n.strong,{children:"largest"})," value"]}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums = [-4,-2,1,4,8]\nOutput: 1\nExplanation:\nThe distance from -4 to 0 is |-4| = 4.\nThe distance from -2 to 0 is |-2| = 2.\nThe distance from 1 to 0 is |1| = 1.\nThe distance from 4 to 0 is |4| = 4.\nThe distance from 8 to 0 is |8| = 8.\nThus, the closest number to 0 in the array is 1.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums = [2,-1,1]\nOutput: 1\nExplanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= n <= 1000"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"-105 <= nums[i] <= 10^5"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1",children:"Approach 1:"}),"\n",(0,o.jsx)(n.p,{children:"If we sort the input and check if the absolute value is minimal, the answer would be found in the last round. However, it is not necessary to sort it here. We just need to check if the number is greater that answer or not."}),"\n",(0,o.jsx)(t,{name:"@wingkwong"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findClosestNumber(vector<int>& nums) {\n        int ans = INT_MAX, mi = INT_MAX;\n        for (auto x : nums) {\n            int d = abs(x);\n            if (d < mi || (d == mi && x > ans)) {\n                mi = d;\n                ans = x;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var o=t(67294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);