"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[57331],{5614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(85893),i=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/count-integers-with-even-digit-sum/"},o="2180 - Count Integers With Even Digit Sum (Easy)",a={id:"2100-2199/count-integers-with-even-digit-sum-easy",title:"2180 - Count Integers With Even Digit Sum (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/count-integers-with-even-digit-sum/",source:"@site/solutions/2100-2199/2180-count-integers-with-even-digit-sum-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/count-integers-with-even-digit-sum-easy",permalink:"/solutions/2100-2199/count-integers-with-even-digit-sum-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2180-count-integers-with-even-digit-sum-easy.md",tags:[],version:"current",sidebarPosition:2180,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-integers-with-even-digit-sum/"},sidebar:"tutorialSidebar",previous:{title:"2179 - Count Good Triplets in an Array (Hard)",permalink:"/solutions/2100-2199/count-good-triplets-in-an-array-hard"},next:{title:"2183 -  Count Array Pairs Divisible by K (Hard)",permalink:"/solutions/2100-2199/count-array-pairs-divisible-by-k-hard"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2180---count-integers-with-even-digit-sum-easy",children:"2180 - Count Integers With Even Digit Sum (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/count-integers-with-even-digit-sum/",children:"https://leetcode.com/problems/count-integers-with-even-digit-sum/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given a positive integer ",(0,s.jsx)(n.code,{children:"num"}),", return ",(0,s.jsxs)(n.em,{children:["the number of positive integers ",(0,s.jsx)(n.strong,{children:"less than or equal to"})]})," ",(0,s.jsx)(n.code,{children:"num"})," ",(0,s.jsxs)(n.em,{children:["whose digit sums are ",(0,s.jsx)(n.strong,{children:"even"})]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"digit sum"})," of a positive integer is the sum of all its digits."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: num = 4\nOutput: 2\nExplanation:\nThe only integers less than or equal to 4 whose digit sums are even are 2 and 4.    \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: num = 30\nOutput: 14\nExplanation:\nThe 14 integers less than or equal to 30 whose digit sums are even are\n2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= num <= 1000"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,s.jsxs)(n.p,{children:["We try all numbers in ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mo,{stretchy:"false",children:"["}),(0,s.jsx)(n.mn,{children:"1"}),(0,s.jsx)(n.mo,{separator:"true",children:","}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mi,{children:"u"}),(0,s.jsx)(n.mi,{children:"m"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"[1, num]"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mopen",children:"["}),(0,s.jsx)(n.span,{className:"mord",children:"1"}),(0,s.jsx)(n.span,{className:"mpunct",children:","}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,s.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," to see its digit sum is even or not."]}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int ds(int x) {\n        int res = 0;\n        while (x) {\n            // get the last digit\n            res += x % 10;\n            // erase the last digit\n            x /= 10;\n        }\n        return res;\n    }\n    int countEven(int num) {\n        int ans = 0;\n        // try all possible numbers and calculate its digit sum\n        // add 1 to ans if it is even\n        for (int i = 1; i <= num; i++) ans += ds(i) % 2 == 0;\n        return ans;\n    }\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);