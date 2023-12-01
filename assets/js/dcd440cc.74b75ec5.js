"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[49328],{94358:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(85893),r=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/longest-nice-subarray/",tags:["Array","Bit Manipulation","Sliding Window"]},o="2401 - Longest Nice Subarray (Medium)",a={id:"2400-2499/longest-nice-subarray-medium",title:"2401 - Longest Nice Subarray (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/longest-nice-subarray/",source:"@site/solutions/2400-2499/2401-longest-nice-subarray-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/longest-nice-subarray-medium",permalink:"/solutions/2400-2499/longest-nice-subarray-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2401-longest-nice-subarray-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Bit Manipulation",permalink:"/solutions/tags/bit-manipulation"},{label:"Sliding Window",permalink:"/solutions/tags/sliding-window"}],version:"current",sidebarPosition:2401,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/longest-nice-subarray/",tags:["Array","Bit Manipulation","Sliding Window"]},sidebar:"tutorialSidebar",previous:{title:"2400 - Number of Ways to Reach a Position After Exactly k Steps (Medium)",permalink:"/solutions/2400-2499/number-of-ways-to-reach-a-position-after-exactly-k-steps-medium"},next:{title:"2404 - Most Frequent Even Element (Easy)",permalink:"/solutions/2400-2499/most-frequent-even-element-easy"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window + Bit Manipulation",id:"approach-1-sliding-window--bit-manipulation",level:2}];function u(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components},{SolutionAuthor:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2401---longest-nice-subarray-medium",children:"2401 - Longest Nice Subarray (Medium)"}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["You are given an array ",(0,i.jsx)(e.code,{children:"nums"})," consisting of ",(0,i.jsx)(e.strong,{children:"positive"})," integers."]}),"\n",(0,i.jsxs)(e.p,{children:["We call a subarray of ",(0,i.jsx)(e.code,{children:"nums"})," ",(0,i.jsx)(e.strong,{children:"nice"})," if the bitwise ",(0,i.jsx)(e.strong,{children:"AND"})," of every pair of elements that are in ",(0,i.jsx)(e.strong,{children:"different"})," positions in the subarray is equal to ",(0,i.jsx)(e.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Return ",(0,i.jsxs)(e.em,{children:["the length of the ",(0,i.jsx)(e.strong,{children:"longest"})," nice subarray"]}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.strong,{children:"subarray"})," is a ",(0,i.jsx)(e.strong,{children:"contiguous"})," part of an array."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note"})," that subarrays of length ",(0,i.jsx)(e.code,{children:"1"})," are always considered nice."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [1,3,8,48,10]\nOutput: 3\nExplanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:\n- 3 AND 8 = 0.\n- 3 AND 48 = 0.\n- 8 AND 48 = 0.\nIt can be proven that no longer nice subarray can be obtained, so we return 3.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [3,1,5,11,13]\nOutput: 1\nExplanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= nums.length <= 105"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= nums[i] <= 10^9"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-sliding-window--bit-manipulation",children:"Approach 1: Sliding Window + Bit Manipulation"}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int longestNiceSubarray(vector<int>& nums) {\n        // the observation is that each number has unique bits in the nice array\n        // finding a subarray of something -> a hint to use sliding window\n        int l = 0, n = nums.size(), x = 0, ans = 0;\n        // iterate right pointer\n        for (int r = 0; r < n; r++) {\n            // x is the current AND value of current window at this point\n            // now we want to include nums[r] in the window\n            // however, if we include it, the current window may become not nice (i.e. x_new != 0)\n            // therefore, in this case, we need to remove some bits using XOR, \n            // i.e shrinking the window from the left\n            while ((x & nums[r]) != 0) x ^= nums[l++];\n            // here we are good to include nums[r], we use OR to set the bits\n            x |= nums[r];\n            // record the max length\n            ans = max(ans, r - l + 1);\n        }\n        return ans;\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);