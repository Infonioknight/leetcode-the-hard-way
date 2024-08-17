"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3845],{5473:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=s(85893),t=s(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem"},l="0365 - Water and Jug Problem (Medium)",r={id:"0300-0399/water-and-jug-problem-medium",title:"0365 - Water and Jug Problem (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem",source:"@site/solutions/0300-0399/0365-water-and-jug-problem-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/water-and-jug-problem-medium",permalink:"/solutions/0300-0399/water-and-jug-problem-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0365-water-and-jug-problem-medium.md",tags:[],version:"current",sidebarPosition:365,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/water-and-jug-problem"},sidebar:"tutorialSidebar",previous:{title:"0355 - Design Twitter (Medium)",permalink:"/solutions/0300-0399/design-twitter-medium"},next:{title:"0367 - Valid Perfect Square (Easy)",permalink:"/solutions/0300-0399/valid-perfect-square-easy"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: B\xe9zout&#39;s identity",id:"approach-1-b\xe9zouts-identity",level:2}];function m(e){const a={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"0365---water-and-jug-problem-medium",children:"0365 - Water and Jug Problem (Medium)"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://leetcode.com/problems/water-and-jug-problem",children:"https://leetcode.com/problems/water-and-jug-problem"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(a.p,{children:["You are given two jugs with capacities ",(0,n.jsx)(a.code,{children:"jug1Capacity"})," and ",(0,n.jsx)(a.code,{children:"jug2Capacity"})," liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly ",(0,n.jsx)(a.code,{children:"targetCapacity"})," liters using these two jugs."]}),"\n",(0,n.jsxs)(a.p,{children:["If ",(0,n.jsx)(a.code,{children:"targetCapacity"})," liters of water are measurable, you must have ",(0,n.jsx)(a.code,{children:"targetCapacity"})," liters of water contained ",(0,n.jsx)(a.strong,{children:"within one or both buckets"})," by the end."]}),"\n",(0,n.jsx)(a.p,{children:"Operations allowed:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Fill any of the jugs with water."}),"\n",(0,n.jsx)(a.li,{children:"Empty any of the jugs."}),"\n",(0,n.jsx)(a.li,{children:"Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4\nOutput: true\nExplanation: The famous Die Hard example \n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5\nOutput: false\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3\nOutput: true \n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= jug1Capacity, jug2Capacity, targetCapacity <= 10^6"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"approach-1-b\xe9zouts-identity",children:"Approach 1: B\xe9zout's identity"}),"\n",(0,n.jsxs)(a.p,{children:["It's obvious that it is impossible to measure if the target capacity ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"z"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"z"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]})," is greater than the total capacity of jug ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," and jug ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"y"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]}),". Otherwise, we can express it as a linear combination of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"y"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," and check if ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"z"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"z"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]})," is a linear combination of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"y"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]}),". In order to do so, ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"z"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"z"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]})," has to be a multiple of the gcd of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"y"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]}),"."]}),"\n",(0,n.jsx)(s,{name:"@wingkwong"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool canMeasureWater(int x, int y, int z) {\n        // impossible case\n        if (x + y < z) return false;\n        // check if z is a multiple of GCD(x, y) \n        return z % gcd(x, y) == 0;\n    }\n};\n"})})]})}function o(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>r,a:()=>l});var n=s(67294);const t={},i=n.createContext(t);function l(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);