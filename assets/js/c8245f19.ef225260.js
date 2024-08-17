"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34624],{15293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(85893),r=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/largest-3-same-digit-number-in-string/"},o="2264 - Largest 3-Same-Digit Number in String (Easy)",l={id:"2200-2299/largest-3-same-digit-number-in-string-easy",title:"2264 - Largest 3-Same-Digit Number in String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/largest-3-same-digit-number-in-string/",source:"@site/solutions/2200-2299/2264-largest-3-same-digit-number-in-string-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/largest-3-same-digit-number-in-string-easy",permalink:"/solutions/2200-2299/largest-3-same-digit-number-in-string-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2264-largest-3-same-digit-number-in-string-easy.md",tags:[],version:"current",sidebarPosition:2264,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/largest-3-same-digit-number-in-string/"},sidebar:"tutorialSidebar",previous:{title:"2262 - Total Appeal of A String (Hard)",permalink:"/solutions/2200-2299/total-appeal-of-a-string-hard"},next:{title:"2265 - Count Nodes Equal to Average of Subtree (Medium)",permalink:"/solutions/2200-2299/count-nodes-equal-to-average-of-subtree-medium"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check the max digit",id:"approach-1-check-the-max-digit",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2264---largest-3-same-digit-number-in-string-easy",children:"2264 - Largest 3-Same-Digit Number in String (Easy)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/largest-3-same-digit-number-in-string/",children:"https://leetcode.com/problems/largest-3-same-digit-number-in-string/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given a string ",(0,i.jsx)(n.code,{children:"num"})," representing a large integer. An integer is ",(0,i.jsx)(n.strong,{children:"good"})," if it meets the following conditions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It is a ",(0,i.jsx)(n.strong,{children:"substring"})," of ",(0,i.jsx)(n.code,{children:"num"})," with length ",(0,i.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"It consists of only one unique digit."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsxs)(n.em,{children:["the ",(0,i.jsx)(n.strong,{children:"maximum good"})," integer as a ",(0,i.jsx)(n.strong,{children:"string"})," or an empty string"]})," ",(0,i.jsx)(n.code,{children:'""'})," ",(0,i.jsx)(n.em,{children:"if no such integer exists"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.strong,{children:"substring"})," is a contiguous sequence of characters within a string."]}),"\n",(0,i.jsxs)(n.li,{children:["There may be ",(0,i.jsx)(n.strong,{children:"leading zeroes"})," in ",(0,i.jsx)(n.code,{children:"num"})," or a good integer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: num = "6777133339"\nOutput: "777"\nExplanation: There are two distinct good integers: "777" and "333".\n"777" is the largest, so we return "777".\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: num = "2300019"\nOutput: "000"\nExplanation: "000" is the only good integer.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: num = "42352338"\nOutput: ""\nExplanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"3 <= num.length <= 1000"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num"})," only consists of digits."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-check-the-max-digit",children:"Approach 1: Check the max digit"}),"\n",(0,i.jsx)(n.p,{children:"Iterate num and check if the current character is same as the previous two. If so, store the maximum digit and render at the end."}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string largestGoodInteger(string num) {\n        int mx = -1;\n        for (int i = 2; i < num.size(); i++) {\n            // check if has one unique digit\n            if (num[i] == num[i - 1] && num[i - 1] == num[i - 2]) {\n                // if so, record the max digit\n                mx = max(mx, num[i] - '0');\n            }\n        }\n        // if mx is -1, then no such substring exists\n        // otherwise, render the ans with the max digit\n        return mx == -1 ? \"\" : string(3, mx + '0');\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);