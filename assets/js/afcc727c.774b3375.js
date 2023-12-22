"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65083],{22336:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(85893),s=i(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/"},a="2200 - Find All K-Distant Indices in an Array (Easy)",d={id:"2100-2199/find-all-k-distant-indices-in-an-array-easy",title:"2200 - Find All K-Distant Indices in an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/",source:"@site/solutions/2100-2199/2200-find-all-k-distant-indices-in-an-array-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/find-all-k-distant-indices-in-an-array-easy",permalink:"/solutions/2100-2199/find-all-k-distant-indices-in-an-array-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2200-find-all-k-distant-indices-in-an-array-easy.md",tags:[],version:"current",sidebarPosition:2200,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/"},sidebar:"tutorialSidebar",previous:{title:"2197 - Replace Non-Coprime Numbers in Array (Hard)",permalink:"/solutions/2100-2199/replace-non-coprime-numbers-in-array-hard"},next:{title:"2201 - Count Artifacts That Can Be Extracted (Medium)",permalink:"/solutions/2100-2199/count-artifacts-that-can-be-extracted-medium"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function l(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components},{SolutionAuthor:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2200---find-all-k-distant-indices-in-an-array-easy",children:"2200 - Find All K-Distant Indices in an Array (Easy)"}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/",children:"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["You are given a ",(0,t.jsx)(e.strong,{children:"0-indexed"})," integer array ",(0,t.jsx)(e.code,{children:"nums"})," and two integers ",(0,t.jsx)(e.code,{children:"key"})," and ",(0,t.jsx)(e.code,{children:"k"}),". A ",(0,t.jsx)(e.strong,{children:"k-distant index"})," is an index ",(0,t.jsx)(e.code,{children:"i"})," of ",(0,t.jsx)(e.code,{children:"nums"})," for which there exists at least one index ",(0,t.jsx)(e.code,{children:"j"})," such that ",(0,t.jsx)(e.code,{children:"|i - j| <= k"})," and ",(0,t.jsx)(e.code,{children:"nums[j] == key"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Return ",(0,t.jsxs)(e.em,{children:["a list of all k-distant indices sorted in ",(0,t.jsx)(e.strong,{children:"increasing order"})]}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1\nOutput: [1,2,3,4,5,6]\nExplanation: Here, nums[2] == key and nums[5] == key.\n- For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.\n- For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.\n- For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.\n- For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.\n- For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.\n- For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.\n- For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.\nThus, we return [1,2,3,4,5,6] which is sorted in increasing order. \n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: nums = [2,2,2,2,2], key = 2, k = 2\nOutput: [0,1,2,3,4]\nExplanation: For all indices i in nums, there exists some index j such that |i - j| <= k and nums[j] == key, so every index is a k-distant index. \nHence, we return [0,1,2,3,4].\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= nums.length <= 1000"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= nums[i] <= 1000"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"key"})," is an integer from the array ",(0,t.jsx)(e.code,{children:"nums"}),"."]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= k <= nums.length"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,t.jsx)(e.p,{children:"Just do what it says."}),"\n",(0,t.jsx)(i,{name:"@wingkwong"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {\n        vector<int> ans;\n        int n = nums.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (abs(i - j) <= k && nums[j] == key) {\n                    ans.push_back(i);\n                    break;\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>a});var t=i(67294);const s={},r=t.createContext(s);function a(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);