"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[95983],{55174:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=i(85893),t=i(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/maximal-score-after-applying-k-operations/"},s="2530 - Maximal Score After Applying K Operations (Medium)",a={id:"2500-2599/maximal-score-after-applying-k-operations-medium",title:"2530 - Maximal Score After Applying K Operations (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/maximal-score-after-applying-k-operations/",source:"@site/solutions/2500-2599/2530-maximal-score-after-applying-k-operations-medium.md",sourceDirName:"2500-2599",slug:"/2500-2599/maximal-score-after-applying-k-operations-medium",permalink:"/solutions/2500-2599/maximal-score-after-applying-k-operations-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2530-maximal-score-after-applying-k-operations-medium.md",tags:[],version:"current",sidebarPosition:2530,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximal-score-after-applying-k-operations/"},sidebar:"tutorialSidebar",previous:{title:"2529 - Maximum Count of Positive Integer and Negative Integer (Easy)",permalink:"/solutions/2500-2599/maximum-count-of-positive-integer-and-negative-integer-easy"},next:{title:"2531 - Make Number of Distinct Characters Equal (Medium)",permalink:"/solutions/2500-2599/make-number-of-distinct-characters-equal-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Priority Queue",id:"approach-1-priority-queue",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:i,TabItem:r,Tabs:s}=n;return i||m("SolutionAuthor",!0),r||m("TabItem",!0),s||m("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2530---maximal-score-after-applying-k-operations-medium",children:"2530 - Maximal Score After Applying K Operations (Medium)"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/maximal-score-after-applying-k-operations/",children:"https://leetcode.com/problems/maximal-score-after-applying-k-operations/"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["You are given a ",(0,o.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,o.jsx)(n.code,{children:"nums"})," and an integer ",(0,o.jsx)(n.code,{children:"k"}),". You have a ",(0,o.jsx)(n.strong,{children:"starting score"})," of ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In one ",(0,o.jsx)(n.strong,{children:"operation"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["choose an index ",(0,o.jsx)(n.code,{children:"i"})," such that ",(0,o.jsx)(n.code,{children:"0 <= i < nums.length"}),","]}),"\n",(0,o.jsxs)(n.li,{children:["increase your ",(0,o.jsx)(n.strong,{children:"score"})," by ",(0,o.jsx)(n.code,{children:"nums[i]"}),", and"]}),"\n",(0,o.jsxs)(n.li,{children:["replace ",(0,o.jsx)(n.code,{children:"nums[i]"})," with ",(0,o.jsx)(n.code,{children:"ceil(nums[i] / 3)"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsxs)(n.em,{children:["the maximum possible ",(0,o.jsx)(n.strong,{children:"score"})," you can attain after applying ",(0,o.jsx)(n.strong,{children:"exactly"})]})," ",(0,o.jsx)(n.code,{children:"k"})," ",(0,o.jsx)(n.em,{children:"operations"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ceiling function ",(0,o.jsx)(n.code,{children:"ceil(val)"})," is the least integer greater than or equal to ",(0,o.jsx)(n.code,{children:"val"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums = [10,10,10,10,10], k = 5\nOutput: 50\nExplanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: nums = [1,10,3,3,3], k = 3\nOutput: 17\nExplanation: You can do the following operations:\nOperation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.\nOperation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.\nOperation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.\nThe final score is 10 + 4 + 3 = 17.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= nums.length, k <= 10^5"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= nums[i] <= 10^9"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1-priority-queue",children:"Approach 1: Priority Queue"}),"\n",(0,o.jsx)(s,{children:(0,o.jsxs)(r,{value:"cpp",label:"C++",children:[(0,o.jsx)(i,{name:"@wingkwong"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long maxKelements(vector<int>& nums, int k) {\n        long long ans = 0;\n        // we want to take the max one in each round\n        priority_queue<int> pq(nums.begin(), nums.end());\n        // perform k rounds\n        while (k--) {\n            // get the max one\n            int t = pq.top(); \n            // pop it out\n            pq.pop();\n            // add to answer\n            ans += t; \n            // add the ceil value\n            // ceil(x / y) = (x + y - 1) / y\n            // ceil(t / 3) = (t + 3 - 1) / 3 = (t + 2) / 3\n            pq.push((t + 2) / 3);\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var o=i(67294);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);