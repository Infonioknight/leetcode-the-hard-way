"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35314],{96973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(85893),s=r(11151);const l={description:"Author: @wingkwong | https://leetcode.com/problems/find-smallest-letter-greater-than-target"},a="0744 - Find Smallest Letter Greater Than Target (Easy)",i={id:"0700-0799/find-smallest-letter-greater-than-target-easy",title:"0744 - Find Smallest Letter Greater Than Target (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-smallest-letter-greater-than-target",source:"@site/solutions/0700-0799/0744-find-smallest-letter-greater-than-target-easy.md",sourceDirName:"0700-0799",slug:"/0700-0799/find-smallest-letter-greater-than-target-easy",permalink:"/solutions/0700-0799/find-smallest-letter-greater-than-target-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0744-find-smallest-letter-greater-than-target-easy.md",tags:[],version:"current",sidebarPosition:744,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-smallest-letter-greater-than-target"},sidebar:"tutorialSidebar",previous:{title:"0743 - Network Delay Time (Medium)",permalink:"/solutions/0700-0799/network-delay-time-medium"},next:{title:"0746 - Min Cost Climbing Stairs (Easy)",permalink:"/solutions/0700-0799/min-cost-climbing-stairs-easy"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"0744---find-smallest-letter-greater-than-target-easy",children:"0744 - Find Smallest Letter Greater Than Target (Easy)"}),"\n",(0,n.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/find-smallest-letter-greater-than-target",children:"https://leetcode.com/problems/find-smallest-letter-greater-than-target"})}),"\n",(0,n.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(t.p,{children:["Given a characters array ",(0,n.jsx)(t.code,{children:"letters"})," that is sorted in ",(0,n.jsx)(t.strong,{children:"non-decreasing"})," order and a character ",(0,n.jsx)(t.code,{children:"target"}),", return ",(0,n.jsx)(t.em,{children:"the smallest character in the array that is larger than"})," ",(0,n.jsx)(t.code,{children:"target"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," that the letters wrap around."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For example, if ",(0,n.jsx)(t.code,{children:"target == 'z'"})," and ",(0,n.jsx)(t.code,{children:"letters == ['a', 'b']"}),", the answer is ",(0,n.jsx)(t.code,{children:"'a'"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'Input: letters = ["c","f","j"], target = "a"\nOutput: "c"\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'Input: letters = ["c","f","j"], target = "c"\nOutput: "f"\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'Input: letters = ["c","f","j"], target = "d"\nOutput: "f"\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"2 <= letters.length <= 10^4"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"letters[i]"})," is a lowercase English letter."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"letters"})," is sorted in ",(0,n.jsx)(t.strong,{children:"non-decreasing"})," order."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"letters"})," contains at least two different characters."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"target"})," is a lowercase English letter."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,n.jsx)(t.admonition,{title:"Prerequisite",type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../../tutorials/basic-topics/binary-search",children:"Binary Search"})}),"\n"]})}),"\n",(0,n.jsx)(r,{name:"@wingkwong"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    char nextGreatestLetter(vector<char>& letters, char target) {\n        // init possible range\n        int l = 0, r = letters.size() - 1;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (target >= letters[m]) l = m + 1;\n            // include m\n            else r = m;\n        }\n        // handle letter wrap case\n        return letters[l] > target ? letters[l] : letters[0];\n    }\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(67294);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);