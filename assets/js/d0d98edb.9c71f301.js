"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[30932],{64114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(85893),i=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/subarrays-with-k-different-integers/",tags:["Array","Hash Table","Sliding Window","Counting"]},a="0992 - Subarrays with K Different Integers (Hard)",o={id:"0900-0999/subarrays-with-k-different-integers-hard",title:"0992 - Subarrays with K Different Integers (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/subarrays-with-k-different-integers/",source:"@site/solutions/0900-0999/0992-subarrays-with-k-different-integers-hard.md",sourceDirName:"0900-0999",slug:"/0900-0999/subarrays-with-k-different-integers-hard",permalink:"/solutions/0900-0999/subarrays-with-k-different-integers-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0992-subarrays-with-k-different-integers-hard.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"Sliding Window",permalink:"/solutions/tags/sliding-window"},{inline:!0,label:"Counting",permalink:"/solutions/tags/counting"}],version:"current",sidebarPosition:992,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/subarrays-with-k-different-integers/",tags:["Array","Hash Table","Sliding Window","Counting"]},sidebar:"tutorialSidebar",previous:{title:"0991 - Broken Calculator (Medium)",permalink:"/solutions/0900-0999/broken-calculator-medium"},next:{title:"0994 - Rotting Oranges (Medium)",permalink:"/solutions/0900-0999/rotting-oranges-medium"}},d={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:s,Tabs:a}=n;return t||u("SolutionAuthor",!0),s||u("TabItem",!0),a||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0992---subarrays-with-k-different-integers-hard",children:"0992 - Subarrays with K Different Integers (Hard)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/subarrays-with-k-different-integers/",children:"https://leetcode.com/problems/subarrays-with-k-different-integers/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given an integer array ",(0,r.jsx)(n.code,{children:"nums"})," and an integer ",(0,r.jsx)(n.code,{children:"k"}),", return ",(0,r.jsxs)(n.em,{children:["the number of ",(0,r.jsx)(n.strong,{children:"good subarrays"})," of"]})," ",(0,r.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"good array"})," is an array where the number of different integers in that array is exactly ",(0,r.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example, ",(0,r.jsx)(n.code,{children:"[1,2,3,1,2]"})," has ",(0,r.jsx)(n.code,{children:"3"})," different integers: ",(0,r.jsx)(n.code,{children:"1"}),", ",(0,r.jsx)(n.code,{children:"2"}),", and ",(0,r.jsx)(n.code,{children:"3"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"subarray"})," is a ",(0,r.jsx)(n.strong,{children:"contiguous"})," part of an array."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [1,2,1,2,3], k = 2\nOutput: 7\nExplanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [1,2,1,3,4], k = 3\nOutput: 3\nExplanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= nums.length <= 2 * 10^4"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= nums[i], k <= nums.length"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-sliding-window",children:"Approach 1: Sliding Window"}),"\n",(0,r.jsx)(a,{children:(0,r.jsxs)(s,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int atMost(vector<int>& nums, int k) {\n        // standard sliding window pattern\n        int n = nums.size(), i = 0, ans = 0;\n        unordered_map<int, int> m;\n        for (int j = 0; j < n; j++) {\n            // step 1: make the condition invalid\n            k -= !m[nums[j]]++;\n            // step 2: if the condition is failed, \n            // it means we need to shrink the window\n            // by adding k to make the condition valid\n            while(k < 0) k += !(--m[nums[i++]]);\n            // step 3: add the distance to ans\n            ans += j - i + 1;\n        }\n        return ans;\n    }\n    \n    int subarraysWithKDistinct(vector<int>& nums, int k) {\n        // exactky k = at most k - at most (k - 1)\n        return atMost(nums, k) - atMost(nums, k - 1);\n    }\n};\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);