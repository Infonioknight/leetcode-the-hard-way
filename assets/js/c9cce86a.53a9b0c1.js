"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[77064],{77541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=t(85893),o=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/"},i="2235 - Add Two Integers (Easy)",d={id:"2200-2299/add-two-integers-easy",title:"2235 - Add Two Integers (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/",source:"@site/solutions/2200-2299/2235-add-two-integers-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/add-two-integers-easy",permalink:"/solutions/2200-2299/add-two-integers-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2235-add-two-integers-easy.md",tags:[],version:"current",sidebarPosition:2235,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/add-two-integers/"},sidebar:"tutorialSidebar",previous:{title:"2233 - Maximum Product After K Increments (Medium)",permalink:"/solutions/2200-2299/maximum-product-after-k-increments-medium"},next:{title:"2237 - Count Positions on Street With Required Brightness (Medium)",permalink:"/solutions/2200-2299/count-positions-on-street-with-required-brightness-medium"}},l={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: A + B",id:"approach-1-a--b",level:2},{value:"Approach 2: Half Adder",id:"approach-2-half-adder",level:2},{value:"Approach 3: Log &amp; Exp",id:"approach-3-log--exp",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2235---add-two-integers-easy",children:"2235 - Add Two Integers (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/add-two-integers/",children:"https://leetcode.com/problems/add-two-integers/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given two integers ",(0,r.jsx)(n.code,{children:"num1"})," and ",(0,r.jsx)(n.code,{children:"num2"}),", return ",(0,r.jsxs)(n.em,{children:["the ",(0,r.jsx)(n.strong,{children:"sum"})," of the two integers"]}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: num1 = 12, num2 = 5\nOutput: 17\nExplanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: num1 = -10, num2 = 4\nOutput: -6\nExplanation: num1 + num2 = -6, so -6 is returned.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"-100 <= num1, num2 <= 100"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-a--b",children:"Approach 1: A + B"}),"\n",(0,r.jsx)(t,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return num1 + num2;\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"approach-2-half-adder",children:"Approach 2: Half Adder"}),"\n",(0,r.jsx)(t,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return num2 == 0 ? num1 : sum(num1 ^ num2, (unsigned) (num1 & num2) << 1);\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"approach-3-log--exp",children:"Approach 3: Log & Exp"}),"\n",(0,r.jsx)(t,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int sum(int num1, int num2) {\n        return log(exp(num1) * exp(num2)));\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);