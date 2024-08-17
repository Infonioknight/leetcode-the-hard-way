"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[30006],{51301:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var n=a(85893),l=a(11151);const i={description:"Author: @ColeB2, @kesava-karri | https://leetcode.com/problems/surrounded-regions/",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},r="0130 Surrounded Regions (Medium)",t={id:"0100-0199/surrounded-regions-medium",title:"0130 Surrounded Regions (Medium)",description:"Author: @ColeB2, @kesava-karri | https://leetcode.com/problems/surrounded-regions/",source:"@site/solutions/0100-0199/0130-surrounded-regions-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/surrounded-regions-medium",permalink:"/solutions/0100-0199/surrounded-regions-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0130-surrounded-regions-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{inline:!0,label:"Union Find",permalink:"/solutions/tags/union-find"},{inline:!0,label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:130,frontMatter:{description:"Author: @ColeB2, @kesava-karri | https://leetcode.com/problems/surrounded-regions/",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0129 - Sum Root to Leaf Numbers (Medium)",permalink:"/solutions/0100-0199/sum-root-to-leaf-numbers-medium"},next:{title:"0131 - Palindrome Partitioning (Medium)",permalink:"/solutions/0100-0199/palindrome-partitioning-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Breadth-First Search",id:"approach-1-breadth-first-search",level:2},{value:"Approach 2: Depth-First Search",id:"approach-2-depth-first-search",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components},{SolutionAuthor:a,TabItem:i,Tabs:r}=e;return a||o("SolutionAuthor",!0),i||o("TabItem",!0),r||o("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"0130-surrounded-regions-medium",children:"0130 Surrounded Regions (Medium)"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/surrounded-regions/",children:"https://leetcode.com/problems/surrounded-regions/"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(e.p,{children:["Given an ",(0,n.jsx)(e.code,{children:"m x n"})," matrix ",(0,n.jsx)(e.code,{children:"board"})," containing ",(0,n.jsx)(e.code,{children:"'X'"})," and ",(0,n.jsx)(e.code,{children:"'O'"}),", ",(0,n.jsx)(e.em,{children:"capture all regions that are 4-directionally surrounded by"})," ",(0,n.jsx)(e.code,{children:"'X'"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["A region is ",(0,n.jsx)(e.strong,{children:"captured"})," by flipping all ",(0,n.jsx)(e.code,{children:"'O'"}),"s into ",(0,n.jsx)(e.code,{children:"'X'"}),"s in that surrounded region."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg",alt:""})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]\nOutput: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]\nExplanation: Notice that an \'O\' should not be flipped if:\n- It is on the border, or\n- It is adjacent to an \'O\' that should not be flipped.\nThe bottom \'O\' is on the border, so it is not flipped.\nThe other three \'O\' form a surrounded region, so they are flipped.\n'})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'Input: board = [["X"]]\nOutput: [["X"]]\n'})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"m == board.length"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"n == board[i].length"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= m, n <= 200"})}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"board[i][j]"})," is ",(0,n.jsx)(e.code,{children:"'X'"})," or ",(0,n.jsx)(e.code,{children:"'O'"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"approach-1-breadth-first-search",children:"Approach 1: Breadth-First Search"}),"\n",(0,n.jsxs)(e.p,{children:["An island can only be converted if it is 4-directionally surrounded. Therefore any island that touches the edge, or comes in contact with an ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'O'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," that touches the edge can not be converted. Therefore we can simply search for all edge ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'O'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," values, and run a BFS on them to convert them and any neighbouring ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'O'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," values to a different value, (we will use ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'P'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]}),") thus protecting them from being converted to ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'X'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["After that, we can iterate over the board, convert any remaining ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'O'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," values into ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'X'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," values and convert back any ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'P'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," values to ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mrow,{}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"'O'"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," values."]}),"\n",(0,n.jsxs)(e.p,{children:["Time Complexity: ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," where m is the number of rows, and n is the number of columns. We are going to be iterating over the board a few times, and running our BFS which in the worst case will cover all values on the board."]}),"\n",(0,n.jsxs)(e.p,{children:["Space Complexity: ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),". We are editing our board in place, but in the worst case, our BFS queue can grow up to ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"m * n"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4653em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})]})]}),"."]}),"\n",(0,n.jsx)(r,{children:(0,n.jsxs)(i,{value:"python",label:"Python",children:[(0,n.jsx)(a,{name:"@ColeB2"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        \"\"\"\n        Do not return anything, modify board in-place instead.\n        \"\"\"\n        # Track our rows and columns which will be equal to m, n.\n        ROWS, COLS = len(board), len(board[0])\n        # BFS Algorithm, takes parameters of row, col which will be\n        # the position of the starting cell in our 2D array, board.\n        def bfs(row,col):\n            # initialize our queue with the row,col coordinate.\n            q = deque([(row,col)])\n            # while our q is not empty.\n            while q:\n                # pop the row, r and c, col from the queue.\n                r, c = q.popleft()\n                # boundary check, and make sure our cell is an 'O' cell.\n                if (r < 0 or r >= ROWS\n                    or c < 0 or c >= COLS\n                    or board[r][c] != 'O'\n                    ):\n                    continue\n                # In bounds, and an 'O' convert out 'O' to 'P' to 'protect' it.\n                board[r][c] = 'P'\n                # loop through the 4 directions and add them to the queue.\n                for (dr, dc) in ((1,0), (0,1), (-1,0), (0,-1)):\n                    q.append((r + dr, c + dc))\n        # iterate the board\n        for row in range(ROWS):\n            for col in range(COLS):\n                # cell is 'O' and an edge\n                if (board[row][col] == 'O' and \n                    (row == 0 or row == ROWS - 1 or \n                    col == 0 or col == COLS - 1\n                    )):\n                    # run our bfs algorithm\n                    bfs(row, col)\n        # Protected all edge Os and connecting islands.\n        # Convert all non-connecting Os to Xs and Ps back to Os.\n        for row in range(ROWS):\n            for col in range(COLS):\n                if board[row][col] == 'O':\n                    board[row][col] = 'X'\n                elif board[row][col] =='P':\n                    board[row][col] = 'O'\n"})})]})}),"\n",(0,n.jsx)(e.h2,{id:"approach-2-depth-first-search",children:"Approach 2: Depth-First Search"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"The Os not to flip are the ones which are on the borders"}),"\n",(0,n.jsx)(e.li,{children:"So go to each O on the borders & do a dfs to find the connected graph of Os and turn them into a new symbol for example *"}),"\n",(0,n.jsx)(e.li,{children:"Now Xs, Os, *s will be present and these leftover Os are the ones not connected to borders, so flip all these Os to Xs"}),"\n",(0,n.jsx)(e.li,{children:"Finally, turn all the *s back to O"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Time Complexity: ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mo,{children:"\u2217"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["Space Complexity: ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsx)(r,{children:(0,n.jsxs)(i,{value:"java",label:"Java",children:[(0,n.jsx)(a,{name:"@kesava-karri"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"class Solution {\n    int m, n;\n    public void solve(char[][] board) {\n        m = board.length;\n        n = board[0].length;\n        // Creating stars [*] :)\n        for(int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                // To not flip the Os on the edges & their Os graphs\n                // Change them to *s\n                if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {\n                     if (board[i][j] == 'O') {\n                        dfs(i, j, board);\n                    }\n                }\n            }\n        }\n        for(int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                // flip Os not connected to borders\n                if (board[i][j] == 'O') board[i][j] = 'X';\n                // bring back our 0s on the borders with its \n                // respective connected graphs\n                else if (board[i][j] == '*') board[i][j] = 'O';\n            }\n        }\n    }\n    private void dfs(int row, int col, char[][] board) {\n        // Return if out-of-bounds or when not a O\n        if (row >= m || row < 0 || col >= n || col < 0\n            || board[row][col] != 'O') {\n            return;\n        }\n        board[row][col] = '*';\n        // Navigate thru all directions to find our connected graph of Os\n        dfs(row + 1, col, board);\n        dfs(row - 1, col, board);\n        dfs(row, col + 1, board);\n        dfs(row, col - 1, board);\n    }\n}\n"})})]})})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,a)=>{a.d(e,{Z:()=>t,a:()=>r});var n=a(67294);const l={},i=n.createContext(l);function r(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);