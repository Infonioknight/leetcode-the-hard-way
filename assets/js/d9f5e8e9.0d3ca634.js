"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[86718],{73377:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(85893),o=s(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/"},i="2240 - Number of Ways to Buy Pens and Pencils (Medium)",r={id:"2200-2299/number-of-ways-to-buy-pens-and-pencils-medium",title:"2240 - Number of Ways to Buy Pens and Pencils (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/",source:"@site/solutions/2200-2299/2240-number-of-ways-to-buy-pens-and-pencils-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/number-of-ways-to-buy-pens-and-pencils-medium",permalink:"/solutions/2200-2299/number-of-ways-to-buy-pens-and-pencils-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2240-number-of-ways-to-buy-pens-and-pencils-medium.md",tags:[],version:"current",sidebarPosition:2240,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/"},sidebar:"tutorialSidebar",previous:{title:"2239 - Find Closest Number to Zero (Easy)",permalink:"/solutions/2200-2299/find-closest-number-to-zero-easy"},next:{title:"2241 - Design an ATM Machine (Medium)",permalink:"/solutions/2200-2299/design-an-atm-machine-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Math",id:"approach-1-math",level:2}];function m(n){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,o.a)(),...n.components},{SolutionAuthor:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"2240---number-of-ways-to-buy-pens-and-pencils-medium",children:"2240 - Number of Ways to Buy Pens and Pencils (Medium)"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/",children:"https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["You are given an integer ",(0,t.jsx)(e.code,{children:"total"})," indicating the amount of money you have. You are also given two integers ",(0,t.jsx)(e.code,{children:"cost1"})," and ",(0,t.jsx)(e.code,{children:"cost2"})," indicating the price of a pen and pencil respectively. You can spend ",(0,t.jsx)(e.strong,{children:"part or all"})," of your money to buy multiple quantities (or none) of each kind of writing utensil."]}),"\n",(0,t.jsxs)(e.p,{children:["Return ",(0,t.jsxs)(e.em,{children:["the ",(0,t.jsx)(e.strong,{children:"number of distinct ways"})," you can buy some number of pens and pencils."]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: total = 20, cost1 = 10, cost2 = 5\nOutput: 9\nExplanation: The price of a pen is 10 and the price of a pencil is 5.\n- If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.\n- If you buy 1 pen, you can buy 0, 1, or 2 pencils.\n- If you buy 2 pens, you cannot buy any pencils.\nThe total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: total = 5, cost1 = 10, cost2 = 10\nOutput: 1\nExplanation: The price of both pens and pencils are 10, which cost more than total, so you cannot buy any writing utensils. Therefore, there is only 1 way: buy 0 pens and 0 pencils.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= total, cost1, cost2 <= 10^6"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-math",children:"Approach 1: Math"}),"\n",(0,t.jsxs)(e.p,{children:["We try all the cases - if buy 0 pen to ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"t"}),(0,t.jsx)(e.mi,{children:"o"}),(0,t.jsx)(e.mi,{children:"t"}),(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsx)(e.mi,{children:"l"}),(0,t.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(e.mi,{children:"c"}),(0,t.jsx)(e.mi,{children:"o"}),(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mi,{children:"t"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"total / cost1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(e.span,{className:"mord",children:"/"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"cos"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]})," pens, how many pencils we can buy in each round?"]}),"\n",(0,t.jsx)(s,{name:"@wingkwong"}),"\n",(0,t.jsx)(s,{name:"@wingkwong"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long waysToBuyPensPencils(int total, int cost1, int cost2) {\n        long long ans = 0;\n        // we can buy 0 pen, 1 pen, 2 pens, ..., total / cost1 pens\n        for (int i = 0; i <= total / cost1; i++) {\n            // every time we buy i pen(s), the total become total - cost1 * i\n            // + 1 here means we buy none\n            ans += (total - cost1 * i) / cost2 + 1;\n        }\n        return ans;\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>r,a:()=>i});var t=s(67294);const o={},a=t.createContext(o);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);