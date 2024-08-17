"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29901],{52796:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var a=s(85893),i=s(11151);const t={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-split-of-positive-even-integers/"},r="2178 - Maximum Split of Positive Even Integers (Medium)",l={id:"2100-2199/maximum-split-of-positive-even-integers-medium",title:"2178 - Maximum Split of Positive Even Integers (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-split-of-positive-even-integers/",source:"@site/solutions/2100-2199/2178-maximum-split-of-positive-even-integers-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/maximum-split-of-positive-even-integers-medium",permalink:"/solutions/2100-2199/maximum-split-of-positive-even-integers-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2178-maximum-split-of-positive-even-integers-medium.md",tags:[],version:"current",sidebarPosition:2178,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-split-of-positive-even-integers/"},sidebar:"tutorialSidebar",previous:{title:"2177 - Find Three Consecutive Integers That Sum to a Given Number (Medium)",permalink:"/solutions/2100-2199/find-three-consecutive-integers-that-sum-to-a-given-number-medium"},next:{title:"2179 - Count Good Triplets in an Array (Hard)",permalink:"/solutions/2100-2199/count-good-triplets-in-an-array-hard"}},m={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function c(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"2178---maximum-split-of-positive-even-integers-medium",children:"2178 - Maximum Split of Positive Even Integers (Medium)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-split-of-positive-even-integers/",children:"https://leetcode.com/problems/maximum-split-of-positive-even-integers/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given an integer ",(0,a.jsx)(n.code,{children:"finalSum"}),". Split it into a sum of a ",(0,a.jsx)(n.strong,{children:"maximum"})," number of ",(0,a.jsx)(n.strong,{children:"unique"})," positive even integers."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For example, given ",(0,a.jsx)(n.code,{children:"finalSum = 12"}),", the following splits are ",(0,a.jsx)(n.strong,{children:"valid"})," (unique positive even integers summing up to ",(0,a.jsx)(n.code,{children:"finalSum"}),"): ",(0,a.jsx)(n.code,{children:"(2 + 10)"}),", ",(0,a.jsx)(n.code,{children:"(2 + 4 + 6)"}),", and ",(0,a.jsx)(n.code,{children:"(4 + 8)"}),". Among them, ",(0,a.jsx)(n.code,{children:"(2 + 4 + 6)"})," contains the maximum number of integers. Note that ",(0,a.jsx)(n.code,{children:"finalSum"})," cannot be split into ",(0,a.jsx)(n.code,{children:"(2 + 2 + 4 + 4)"})," as all the numbers should be unique."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsxs)(n.em,{children:["a list of integers that represent a valid split containing a ",(0,a.jsx)(n.strong,{children:"maximum"})," number of integers"]}),". If no valid split exists for ",(0,a.jsx)(n.code,{children:"finalSum"}),", return ",(0,a.jsxs)(n.em,{children:["an ",(0,a.jsx)(n.strong,{children:"empty"})," list"]}),". You may return the integers in ",(0,a.jsx)(n.strong,{children:"any"})," order."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: finalSum = 12\nOutput: [2,4,6]\nExplanation: The following are some valid splits: (2 + 10), (2 + 4 + 6), and (4 + 8).\n(2 + 4 + 6) has the maximum number of integers, which is 3. Thus, we return [2,4,6].\nNote that [2,6,4], [6,2,4], etc. are also accepted.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: finalSum = 7\nOutput: []\nExplanation: There are no valid splits for the given finalSum.\nThus, we return an empty array.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: finalSum = 28\nOutput: [6,8,2,12]\nExplanation: The following are some valid splits: (2 + 26), (6 + 8 + 2 + 12), and (4 + 24). \n(6 + 8 + 2 + 12) has the maximum number of integers, which is 4. Thus, we return [6,8,2,12].\nNote that [10,2,4,12], [6,2,4,16], etc. are also accepted.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= finalSum <= 10^10"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"S"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"m"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"finalSum"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"ina"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"lS"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]})," is odd, then return empty array."]}),"\n",(0,a.jsxs)(n.p,{children:["Otherwise, we start from the lowest even number ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"x = 2"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"2"})]})]})]}),". Then add it to our final array. Subtract ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mi,{children:"i"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"a"}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"S"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"m"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"finalSum"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"ina"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"lS"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]})," from ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"x"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})})]})," and set ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"x"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})})]})," to the next even number. Do the same logic until ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"x"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})})]})," cannot be used. At the end, add the remainder to the last element of the array."]}),"\n",(0,a.jsx)(s,{name:"@wingkwong"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<long long> maximumEvenSplit(long long finalSum) {\n        vector<long long> ans;\n        // final sum is odd, return empty array\n        if (finalSum & 1) return ans;\n        // add lowest even number\n        long long x = 2;\n        // check if we can use x\n        while (x <= finalSum) {\n            // add it to answer\n            ans.push_back(x);\n            // update finalSum and set x to the next even number\n            finalSum -= x, x += 2;\n        }\n        // add the remainder to the last element\n        ans.back() += finalSum;\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var a=s(67294);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);