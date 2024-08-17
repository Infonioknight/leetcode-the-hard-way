"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[71188],{52240:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var a=n(85893),l=n(11151);const r={description:"Author: @heder | https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/",tags:["Array","Matrix","Simulation"]},i="2482 - Difference Between Ones and Zeros in Row and Column (Medium)",c={id:"2400-2499/difference-between-ones-and-zeros-in-row-and-column-medium",title:"2482 - Difference Between Ones and Zeros in Row and Column (Medium)",description:"Author: @heder | https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/",source:"@site/solutions/2400-2499/2482-difference-between-ones-and-zeros-in-row-and-column-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/difference-between-ones-and-zeros-in-row-and-column-medium",permalink:"/solutions/2400-2499/difference-between-ones-and-zeros-in-row-and-column-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2482-difference-between-ones-and-zeros-in-row-and-column-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Matrix",permalink:"/solutions/tags/matrix"},{inline:!0,label:"Simulation",permalink:"/solutions/tags/simulation"}],version:"current",sidebarPosition:2482,frontMatter:{description:"Author: @heder | https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/",tags:["Array","Matrix","Simulation"]},sidebar:"tutorialSidebar",previous:{title:"2477 - Minimum Fuel Cost to Report to the Capital (Medium)",permalink:"/solutions/2400-2499/minimum-fuel-cost-to-report-to-the-capital-medium"},next:{title:"2485 - Find the Pivot Integer (Easy)",permalink:"/solutions/2400-2499/find-the-pivot-integer-easy"}},m={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Row and Column Sum",id:"approach-1-row-and-column-sum",level:2},{value:"Complexity Analysis",id:"complexity-analysis",level:4}];function o(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components},{SolutionAuthor:n,TabItem:r,Tabs:i}=e;return n||d("SolutionAuthor",!0),r||d("TabItem",!0),i||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"2482---difference-between-ones-and-zeros-in-row-and-column-medium",children:"2482 - Difference Between Ones and Zeros in Row and Column (Medium)"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/",children:"https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["You are given a ",(0,a.jsx)(e.strong,{children:"0-indexed"})," ",(0,a.jsx)(e.code,{children:"m x n"})," binary matrix ",(0,a.jsx)(e.code,{children:"grid"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["A ",(0,a.jsx)(e.strong,{children:"0-indexed"})," ",(0,a.jsx)(e.code,{children:"m x n"})," difference matrix ",(0,a.jsx)(e.code,{children:"diff"})," is created with the following procedure:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Let the number of ones in the ",(0,a.jsx)(e.code,{children:"ith"})," row be ",(0,a.jsx)(e.code,{children:"onesRowi"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Let the number of ones in the ",(0,a.jsx)(e.code,{children:"jth"})," column be ",(0,a.jsx)(e.code,{children:"onesColj"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Let the number of zeros in the ",(0,a.jsx)(e.code,{children:"ith"})," row be ",(0,a.jsx)(e.code,{children:"zerosRowi"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Let the number of zeros in the ",(0,a.jsx)(e.code,{children:"jth"})," column be ",(0,a.jsx)(e.code,{children:"zerosColj"}),"."]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj"})}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Return ",(0,a.jsx)(e.em,{children:"the difference matrix"}),(0,a.jsx)(e.code,{children:"diff"}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: grid = [[0,1,1],[1,0,1],[0,0,1]]\nOutput: [[0,0,4],[0,0,4],[-2,-2,2]]\nExplanation:\n- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0 \n- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0 \n- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4 \n- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0 \n- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0 \n- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4 \n- diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2\n- diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2\n- diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: grid = [[1,1,1],[1,1,1]]\nOutput: [[5,5,5],[5,5,5]]\nExplanation:\n- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5\n- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5\n- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5\n- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5\n- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5\n- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{children:"l"}),(0,a.jsx)(e.mi,{children:"e"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsx)(e.mi,{children:"h"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"m == grid.length"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"=="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(e.span,{className:"mord",children:"."}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})]})]})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{children:"l"}),(0,a.jsx)(e.mi,{children:"e"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsx)(e.mi,{children:"h"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n == grid[i].length"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"=="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mord",children:"."}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})]})]})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mn,{children:"5"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= m, n <= 10 ^ 5"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"5"})})]})})})})})]})]})]})]})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mn,{children:"5"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= m * n <= 10 ^ 5"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4653em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"5"})})]})})})})})]})]})]})]})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"r"}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mi,{children:"d"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"j"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"grid[i][j]"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," is either ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"0"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"0"})]})})]})," or ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mn,{children:"1"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-row-and-column-sum",children:"Approach 1: Row and Column Sum"}),"\n",(0,a.jsx)(e.p,{children:"We compute the sum of each row and column, which is equal to the number of ones and from that we can reason about the number of zeros. Note that we are rewriting the input."}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(r,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@heder"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    static vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) noexcept {\n        const int rows = size(grid);\n        const int cols = size(grid[0]);\n\n        vector<int> rs(rows);\n        vector<int> cs(cols);\n        for (int r = 0; r < rows; ++r)\n            for (int c = 0; c < cols; ++c) {\n                rs[r] += grid[r][c];\n                cs[c] += grid[r][c];\n            }\n        \n        for (int r = 0; r < rows; ++r)\n            for (int c = 0; c < cols; ++c)\n                grid[r][c] = rs[r] + cs[c] - (rows - rs[r]) - (cols - cs[c]);\n\n        return grid;\n    }\n};\n"})})]})}),"\n",(0,a.jsx)(e.p,{children:"For the second pass over the grid we can factor out some invariants and make it:"}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(r,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@heder"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"for (int r = 0; r < rows; ++r) {\n    const int k = 2 * rs[r] - rows - cols;\n    for (int c = 0; c < cols; ++c)\n        grid[r][c] = k + 2 * cs[c];\n}\n"})})]})}),"\n",(0,a.jsxs)(e.p,{children:["This generated different code (",(0,a.jsx)(e.a,{href:"https://godbolt.org/z/G7xoWGqj9",children:"https://godbolt.org/z/G7xoWGqj9"}),") and is faster than the version above."]}),"\n",(0,a.jsxs)(e.p,{children:["Bonus Variant: using the Elvis operator ",(0,a.jsx)(e.code,{children:"?:"})]}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(r,{value:"cpp",label:"C++",children:[(0,a.jsx)(n,{name:"@heder"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    static vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) noexcept {\n        const int rows = size(grid);\n        const int cols = size(grid[0]);\n\n        vector<int> rs(rows);\n        vector<int> cs(cols);\n        for (int r = 0; r < rows; ++r)\n            for (int c = 0; c < cols; ++c) {\n                rs[r] += grid[r][c] ?: -1;\n                cs[c] += grid[r][c] ?: -1;\n            }\n        \n        for (int r = 0; r < rows; ++r)\n            for (int c = 0; c < cols; ++c)\n                grid[r][c] = rs[r] + cs[c];\n\n        return grid;\n    }\n};\n"})})]})}),"\n",(0,a.jsx)(e.p,{children:"Unfortunatly this variant seems quite a bit slower, but if you turn your head to the left you might see the King of Rock'n'Roll. :)"}),"\n",(0,a.jsx)(e.h4,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,a.jsxs)(e.p,{children:["Let ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," be the number of rows and ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"m"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," be the number of columns then the"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Time complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"\u2217"}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * m)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," as we need to compute the row and column sums and the fill the grid."]}),"\n",(0,a.jsxs)(e.li,{children:["Space complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n + m)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," for the row and column sums."]}),"\n"]})]})}function h(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(o,{...s})}):o(s)}function d(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,n)=>{n.d(e,{Z:()=>c,a:()=>i});var a=n(67294);const l={},r=a.createContext(l);function i(s){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),a.createElement(r.Provider,{value:e},s.children)}}}]);