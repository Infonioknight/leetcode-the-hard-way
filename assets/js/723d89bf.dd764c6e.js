"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[67869],{97934:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=i(85893),o=i(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/keep-multiplying-found-values-by-two/"},l="2154 - Keep Multiplying Found Values by Two (Easy)",r={id:"2100-2199/keep-multiplying-found-values-by-two-easy",title:"2154 - Keep Multiplying Found Values by Two (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/keep-multiplying-found-values-by-two/",source:"@site/solutions/2100-2199/2154-keep-multiplying-found-values-by-two-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/keep-multiplying-found-values-by-two-easy",permalink:"/solutions/2100-2199/keep-multiplying-found-values-by-two-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2154-keep-multiplying-found-values-by-two-easy.md",tags:[],version:"current",sidebarPosition:2154,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/keep-multiplying-found-values-by-two/"},sidebar:"tutorialSidebar",previous:{title:"2151 - Maximum Good People Based on Statements (Hard)",permalink:"/solutions/2100-2199/maximum-good-people-based-on-statements-hard"},next:{title:"2155 - All Divisions With the Highest Score of a Binary Array (Medium)",permalink:"/solutions/2100-2199/all-divisions-with-the-highest-score-of-a-binary-array-medium"}},u={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation with Set",id:"approach-1-simulation-with-set",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"2154---keep-multiplying-found-values-by-two-easy",children:"2154 - Keep Multiplying Found Values by Two (Easy)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/keep-multiplying-found-values-by-two/",children:"https://leetcode.com/problems/keep-multiplying-found-values-by-two/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given an array of integers ",(0,t.jsx)(n.code,{children:"nums"}),". You are also given an integer ",(0,t.jsx)(n.code,{children:"original"})," which is the first number that needs to be searched for in ",(0,t.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You then do the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"original"})," is found in ",(0,t.jsx)(n.code,{children:"nums"}),", ",(0,t.jsx)(n.strong,{children:"multiply"})," it by two (i.e., set ",(0,t.jsx)(n.code,{children:"original = 2 * original"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Otherwise, ",(0,t.jsx)(n.strong,{children:"stop"})," the process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Repeat"})," this process with the new number as long as you keep finding the number."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsxs)(n.em,{children:["the ",(0,t.jsx)(n.strong,{children:"final"})," value of"]})," ",(0,t.jsx)(n.code,{children:"original"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [5,3,6,1,12], original = 3\nOutput: 24\nExplanation: \n- 3 is found in nums. 3 is multiplied by 2 to obtain 6.\n- 6 is found in nums. 6 is multiplied by 2 to obtain 12.\n- 12 is found in nums. 12 is multiplied by 2 to obtain 24.\n- 24 is not found in nums. Thus, 24 is returned.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [2,7,9], original = 4\nOutput: 4\nExplanation:\n- 4 is not found in nums. Thus, 4 is returned.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length <= 1000"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums[i], original <= 1000"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-simulation-with-set",children:"Approach 1: Simulation with Set"}),"\n",(0,t.jsx)(i,{name:"@wingkwong"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findFinalValue(vector<int>& nums, int original) {\n        set<int> s(nums.begin(), nums.end());\n        while (s.count(original)) original *= 2;\n        return original;\n    }\n};\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(67294);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);