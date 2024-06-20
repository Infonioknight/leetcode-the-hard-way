"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[89082],{81759:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(85893),s=r(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/"},a="2190 - Most Frequent Number Following Key In an Array (Easy)",o={id:"2100-2199/most-frequent-number-following-key-in-an-array-easy",title:"2190 - Most Frequent Number Following Key In an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/",source:"@site/solutions/2100-2199/2190-most-frequent-number-following-key-in-an-array-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/most-frequent-number-following-key-in-an-array-easy",permalink:"/solutions/2100-2199/most-frequent-number-following-key-in-an-array-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2190-most-frequent-number-following-key-in-an-array-easy.md",tags:[],version:"current",sidebarPosition:2190,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/"},sidebar:"tutorialSidebar",previous:{title:"2188 - Minimum Time to Finish the Race (Hard)",permalink:"/solutions/2100-2199/minimum-time-to-finish-the-race-hard"},next:{title:"2191 - Sort the Jumbled Numbers (Medium)",permalink:"/solutions/2100-2199/sort-the-jumbled-numbers-medium"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2}];function m(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2190---most-frequent-number-following-key-in-an-array-easy",children:"2190 - Most Frequent Number Following Key In an Array (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/",children:"https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given a ",(0,t.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,t.jsx)(n.code,{children:"nums"}),". **** You are also given an integer ",(0,t.jsx)(n.code,{children:"key"}),", which is present in ",(0,t.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For every unique integer ",(0,t.jsx)(n.code,{children:"target"})," in ",(0,t.jsx)(n.code,{children:"nums"}),", ",(0,t.jsx)(n.strong,{children:"count"})," the number of times ",(0,t.jsx)(n.code,{children:"target"})," immediately follows an occurrence of ",(0,t.jsx)(n.code,{children:"key"})," in ",(0,t.jsx)(n.code,{children:"nums"}),". In other words, count the number of indices ",(0,t.jsx)(n.code,{children:"i"})," such that:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"0 <= i <= n - 2"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nums[i] == key"})," and,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nums[i + 1] == target"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.em,{children:"the"})," ",(0,t.jsx)(n.code,{children:"target"})," ",(0,t.jsxs)(n.em,{children:["with the ",(0,t.jsx)(n.strong,{children:"maximum"})," count"]}),". The test cases will be generated such that the ",(0,t.jsx)(n.code,{children:"target"})," with maximum count is unique."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1,100,200,1,100], key = 1\nOutput: 100\nExplanation: For target = 100, there are 2 occurrences at indices 1 and 4 which follow an occurrence of key.\nNo other integers follow an occurrence of key, so we return 100.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [2,2,2,2,3], key = 2\nOutput: 2\nExplanation: For target = 2, there are 3 occurrences at indices 1, 2, and 3 which follow an occurrence of key.\nFor target = 3, there is only one occurrence at index 4 which follows an occurrence of key.\ntarget = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"2 <= nums.length <= 1000"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums[i] <= 1000"})}),"\n",(0,t.jsx)(n.li,{children:"The test cases will be generated such that the answer is unique."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-counting",children:"Approach 1: Counting"}),"\n",(0,t.jsxs)(n.p,{children:["We iterate the input to find the possible ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"g"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"t"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"target"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]})," and store its occurrence. Return the maximum one."]}),"\n",(0,t.jsx)(r,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int mostFrequent(vector<int>& nums, int key) {\n        int n = nums.size(), ans = 0;\n        // use hash map to store the occurrence of a possible target\n        unordered_map<int, int> m;\n        for (int i = 1; i < n; i++) {\n            // the previous one is key\n            // nums[i] is target\n            if (nums[i - 1] == key) {\n                // count occurrence\n                m[nums[i]]++;\n            }\n        }\n        int mx = 0;\n        for (auto x : m) {\n            // check if it is greater than the current max count\n            if (x.second > mx) {\n                // store the number\n                ans = x.first;\n                // update the max count\n                mx = x.second;\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once we get the idea, we can further optimise the above solution a bit. We only set answer if the current number is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"r"}),(0,t.jsx)(n.mi,{children:"g"}),(0,t.jsx)(n.mi,{children:"e"}),(0,t.jsx)(n.mi,{children:"t"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"target"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]})," and its occurrence is greater than the current max count."]}),"\n",(0,t.jsx)(r,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int mostFrequent(vector<int>& nums, int key) {\n        int n = nums.size(), ans = 0;\n        unordered_map<int, int> m;\n        for (int i = 1; i < n; i++) {\n            if (nums[i - 1] == key && ++m[nums[i]] > m[ans]) {\n                ans = nums[i];\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(67294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);