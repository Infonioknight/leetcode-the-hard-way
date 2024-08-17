"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64414],{73731:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(85893),t=s(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/k-divisible-elements-subarrays/"},l="2261 - K Divisible Elements Subarrays (Medium)",o={id:"2200-2299/k-divisible-elements-subarrays-medium",title:"2261 - K Divisible Elements Subarrays (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/k-divisible-elements-subarrays/",source:"@site/solutions/2200-2299/2261-k-divisible-elements-subarrays-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/k-divisible-elements-subarrays-medium",permalink:"/solutions/2200-2299/k-divisible-elements-subarrays-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2261-k-divisible-elements-subarrays-medium.md",tags:[],version:"current",sidebarPosition:2261,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/k-divisible-elements-subarrays/"},sidebar:"tutorialSidebar",previous:{title:"2260 - Minimum Consecutive Cards to Pick Up (Medium)",permalink:"/solutions/2200-2299/minimum-consecutive-cards-to-pick-up-medium"},next:{title:"2262 - Total Appeal of A String (Hard)",permalink:"/solutions/2200-2299/total-appeal-of-a-string-hard"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2261---k-divisible-elements-subarrays-medium",children:"2261 - K Divisible Elements Subarrays (Medium)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/k-divisible-elements-subarrays/",children:"https://leetcode.com/problems/k-divisible-elements-subarrays/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["Given an integer array ",(0,i.jsx)(n.code,{children:"nums"})," and two integers ",(0,i.jsx)(n.code,{children:"k"})," and ",(0,i.jsx)(n.code,{children:"p"}),", return ",(0,i.jsxs)(n.em,{children:["the number of ",(0,i.jsx)(n.strong,{children:"distinct subarrays"})," which have ",(0,i.jsx)(n.strong,{children:"at most"})]})," ",(0,i.jsx)(n.code,{children:"k"})," ",(0,i.jsx)(n.em,{children:"elements divisible by"})," ",(0,i.jsx)(n.code,{children:"p"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Two arrays ",(0,i.jsx)(n.code,{children:"nums1"})," and ",(0,i.jsx)(n.code,{children:"nums2"})," are said to be ",(0,i.jsx)(n.strong,{children:"distinct"})," if:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["They are of ",(0,i.jsx)(n.strong,{children:"different"})," lengths, or"]}),"\n",(0,i.jsxs)(n.li,{children:["There exists ",(0,i.jsx)(n.strong,{children:"at least"})," one index ",(0,i.jsx)(n.code,{children:"i"})," where ",(0,i.jsx)(n.code,{children:"nums1[i] != nums2[i]"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"subarray"})," is defined as a ",(0,i.jsx)(n.strong,{children:"non-empty"})," contiguous sequence of elements in an array."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [2,3,3,2,2], k = 2, p = 2\nOutput: 11\nExplanation:\nThe elements at indices 0, 3, and 4 are divisible by p = 2.\nThe 11 distinct subarrays which have at most k = 2 elements divisible by 2 are:\n[2], [2,3], [2,3,3], [2,3,3,2], [3], [3,3], [3,3,2], [3,3,2,2], [3,2], [3,2,2], and [2,2].\nNote that the subarrays [2] and [3] occur more than once in nums, but they should each be counted only once.\nThe subarray [2,3,3,2,2] should not be counted because it has 3 elements that are divisible by 2.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [1,2,3,4], k = 4, p = 1\nOutput: 10\nExplanation:\nAll element of nums are divisible by p = 1.\nAlso, every subarray of nums will have at most 4 elements that are divisible by 1.\nSince all subarrays are distinct, the total number of subarrays satisfying all the constraints is 10. \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= nums.length <= 200"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= nums[i], p <= 200"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= k <= nums.length"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,i.jsx)(n.p,{children:"Build all subarrays and insert them to set. The answer would be the size of the set."}),"\n",(0,i.jsx)(s,{name:"@wingkwong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    int countDistinct(vector<int>& nums, int k, int p) {\n        int ans = 0, n = nums.size();\n        set<string> s;\n        for (int i = 0; i < n; i++) {\n            int cnt = 0;\n            string t;\n            for (int j = i; j < n; j++) {\n                // below line will cause TLE\n                // cnt += nums[j] % p == 0;\n                // use below instead\n                cnt += nums[j] % p == 0 ? 1 : 0;\n                // or \n                // if (nums[j] % p == 0) cnt += 1;\n                if (cnt <= k) {\n                    t = t + to_string(nums[j]) + "|";\n                    s.insert(t);\n                } else {\n                    break;\n                }\n            }\n        }\n        return (int) s.size();\n    }\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(67294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);