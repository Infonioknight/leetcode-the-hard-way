"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58478],{25570:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var s=r(85893),i=r(11151);const a={description:"Author: @vigneshshiv | https://leetcode.com/problems/find-the-original-array-of-prefix-xor/"},t="2433 - Find the Original array of prefix XOR (Medium)",l={id:"2400-2499/find-the-original-array-of-prefix-xor-medium",title:"2433 - Find the Original array of prefix XOR (Medium)",description:"Author: @vigneshshiv | https://leetcode.com/problems/find-the-original-array-of-prefix-xor/",source:"@site/solutions/2400-2499/2433-find-the-original-array-of-prefix-xor-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/find-the-original-array-of-prefix-xor-medium",permalink:"/solutions/2400-2499/find-the-original-array-of-prefix-xor-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2433-find-the-original-array-of-prefix-xor-medium.md",tags:[],version:"current",sidebarPosition:2433,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/find-the-original-array-of-prefix-xor/"},sidebar:"tutorialSidebar",previous:{title:"2432 - The Employee That Worked on the Longest Task (Easy)",permalink:"/solutions/2400-2499/the-employee-that-worked-on-the-longest-task-easy"},next:{title:"2439 - Minimize Maximum of Array (Medium)",permalink:"/solutions/2400-2499/minimize-maximum-of-array-medium"}},o={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: STL",id:"approach-1-stl",level:2}];function c(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:r,TabItem:a,Tabs:t}=n;return r||m("SolutionAuthor",!0),a||m("TabItem",!0),t||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2433---find-the-original-array-of-prefix-xor-medium",children:"2433 - Find the Original array of prefix XOR (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-original-array-of-prefix-xor/",children:"https://leetcode.com/problems/find-the-original-array-of-prefix-xor/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given an ",(0,s.jsx)(n.strong,{children:"integer"})," array ",(0,s.jsx)(n.code,{children:"pref"})," of size ",(0,s.jsx)(n.code,{children:"n"}),". Find and return ",(0,s.jsxs)(n.em,{children:["the array ",(0,s.jsx)(n.code,{children:"arr"})," of size ",(0,s.jsx)(n.code,{children:"n"})," that satisfies"]}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]"}),".\nNote that ",(0,s.jsx)(n.code,{children:"^"})," denotes the ",(0,s.jsx)(n.strong,{children:"bitwise-xor"})," operation."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["It can be proven that the answer is ",(0,s.jsx)(n.strong,{children:"unique"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: pref = [5,2,0,3,1]\nOutput: [5,7,2,3,2]\nExplanation: From the array [5,7,2,3,2] we have the following:\n- pref[0] = 5.\n- pref[1] = 5 ^ 7 = 2.\n- pref[2] = 5 ^ 7 ^ 2 = 0.\n- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.\n- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: pref = [13]\nOutput: [13]\nExplanation: We have pref[0] = arr[0] = 13.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= pref.length <= 10^5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= pref[i] <= 10^6"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-stl",children:"Approach 1: STL"}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"n"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," - # of elements in the array"]}),"\n",(0,s.jsxs)(n.p,{children:["Space Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,s.jsx)(t,{children:(0,s.jsxs)(a,{value:"java",label:"Java",children:[(0,s.jsx)(r,{name:"@vigneshshiv"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public int[] findArray(int[] pref) {\n        int[] nums = new int[pref.length];\n        nums[0] = pref[0];\n        for (int i = 1; i < pref.length; i++) {\n            nums[i] = pref[i] ^ pref[i - 1];\n        }\n        return nums;\n    }\n}\n"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var s=r(67294);const i={},a=s.createContext(i);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);