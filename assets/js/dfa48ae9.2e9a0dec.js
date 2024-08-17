"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1303],{10058:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(85893),o=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/combinations/",tags:["Backtracking"]},s="0077 - Combinations (Medium)",c={id:"0000-0099/combinations-medium",title:"0077 - Combinations (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/combinations/",source:"@site/solutions/0000-0099/0077-combinations-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/combinations-medium",permalink:"/solutions/0000-0099/combinations-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0077-combinations-medium.md",tags:[{inline:!0,label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:77,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/combinations/",tags:["Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"0076 - Minimum Window Substring (Hard)",permalink:"/solutions/0000-0099/minimum-window-substring-hard"},next:{title:"0078 - Subsets (Medium)",permalink:"/solutions/0000-0099/subsets-medium"}},a={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components},{SolutionAuthor:t,TabItem:r,Tabs:s}=e;return t||h("SolutionAuthor",!0),r||h("TabItem",!0),s||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"0077---combinations-medium",children:"0077 - Combinations (Medium)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/combinations/",children:"https://leetcode.com/problems/combinations/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Given two integers ",(0,i.jsx)(e.code,{children:"n"})," and ",(0,i.jsx)(e.code,{children:"k"}),", return ",(0,i.jsx)(e.em,{children:"all possible combinations of"})," ",(0,i.jsx)(e.code,{children:"k"})," ",(0,i.jsx)(e.em,{children:"numbers chosen from the range"})," ",(0,i.jsx)(e.code,{children:"[1, n]"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["You may return the answer in ",(0,i.jsx)(e.strong,{children:"any order"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: n = 4, k = 2\nOutput: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]\nExplanation: There are 4 choose 2 = 6 total combinations.\nNote that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: n = 1, k = 1\nOutput: [[1]]\nExplanation: There is 1 choose 1 = 1 total combination.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= n <= 20"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= k <= n"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-backtracking",children:"Approach 1: Backtracking"}),"\n",(0,i.jsxs)(e.p,{children:["This question can be solved by standard backtracking. Check out ",(0,i.jsx)(e.a,{href:"../../tutorials/basic-topics/backtracking",children:"Backtracking"})," section for the detailed explanation."]}),"\n",(0,i.jsx)(s,{children:(0,i.jsxs)(r,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> combine(int n, int k) {\n        vector<int> chosen;\n        vector<vector<int>> ans;\n        function<void(int)> backtrack = [&](int start) {\n            if (chosen.size() == k) {\n                ans.push_back(chosen);\n                return;\n            }\n            for (int i = start; i <= n; i++) {\n                chosen.push_back(i);\n                backtrack(i + 1);\n                chosen.pop_back();\n            } \n        };\n        backtrack(1);\n        return ans;\n    }\n};\n"})})]})})]})}function m(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}function h(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);