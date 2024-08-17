"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54481],{2406:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(85893),t=r(11151);const a={description:"Author: @wingkwong, @jit | https://leetcode.com/problems/largest-local-values-in-a-matrix/",tags:["Array","Matrix"]},l="2373 - Largest Local Values in a Matrix (Easy)",s={id:"2300-2399/largest-local-values-in-a-matrix-easy",title:"2373 - Largest Local Values in a Matrix (Easy)",description:"Author: @wingkwong, @jit | https://leetcode.com/problems/largest-local-values-in-a-matrix/",source:"@site/solutions/2300-2399/2373-largest-local-values-in-a-matrix-easy.md",sourceDirName:"2300-2399",slug:"/2300-2399/largest-local-values-in-a-matrix-easy",permalink:"/solutions/2300-2399/largest-local-values-in-a-matrix-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2373-largest-local-values-in-a-matrix-easy.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:2373,frontMatter:{description:"Author: @wingkwong, @jit | https://leetcode.com/problems/largest-local-values-in-a-matrix/",tags:["Array","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"2360 - Longest Cycle in a Graph (Hard)",permalink:"/solutions/2300-2399/longest-cycle-in-a-graph-hard"},next:{title:"2376 - Count Special Integers (Hard)",permalink:"/solutions/2300-2399/count-special-integers-hard"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:r,TabItem:a,Tabs:l}=n;return r||x("SolutionAuthor",!0),a||x("TabItem",!0),l||x("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2373---largest-local-values-in-a-matrix-easy",children:"2373 - Largest Local Values in a Matrix (Easy)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/largest-local-values-in-a-matrix/",children:"https://leetcode.com/problems/largest-local-values-in-a-matrix/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given an ",(0,i.jsx)(n.code,{children:"n x n"})," integer matrix ",(0,i.jsx)(n.code,{children:"grid"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Generate an integer matrix ",(0,i.jsx)(n.code,{children:"maxLocal"})," of size ",(0,i.jsx)(n.code,{children:"(n - 2) x (n - 2)"})," such that:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"maxLocal[i][j]"})," is equal to the ",(0,i.jsx)(n.strong,{children:"largest"})," value of the ",(0,i.jsx)(n.code,{children:"3 x 3"})," matrix in ",(0,i.jsx)(n.code,{children:"grid"})," centered around row ",(0,i.jsx)(n.code,{children:"i + 1"})," and column ",(0,i.jsx)(n.code,{children:"j + 1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In other words, we want to find the largest value in every contiguous ",(0,i.jsx)(n.code,{children:"3 x 3"})," matrix in ",(0,i.jsx)(n.code,{children:"grid"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsx)(n.em,{children:"the generated matrix"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]\nOutput: [[9,9],[8,6]]\nExplanation: The diagram above shows the original matrix and the generated matrix.\nNotice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]\nOutput: [[2,2,2],[2,2,2],[2,2,2]]\nExplanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"n == grid.length == grid[i].length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"3 <= n <= 100"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= grid[i][j] <= 100"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-simulation",children:"Approach 1: Simulation"}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsxs)(a,{value:"py",label:"Python",children:[(0,i.jsx)(r,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:\n        n = len(grid)\n        # the result matrix is always (n - 2) * (n - 2)\n        res = [[0] * (n - 2) for _ in range(n - 2)]\n        # iterate all possible 3 x 3 grids\n        for i in range(n - 2):\n            for j in range(n - 2):\n                # for (i, j) being at top-left, \n                # iterate to check the max in this 3 x 3 grid\n                for ii in range(i, i + 3):\n                    for jj in range(j, j + 3):\n                        res[i][j] = max(res[i][j], grid[ii][jj])\n        return res\n"})})]}),(0,i.jsxs)(a,{value:"scala",label:"scala",children:[(0,i.jsx)(r,{name:"@jit"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"object Solution:\n  def largestLocal(grid: Array[Array[Int]]): Array[Array[Int]] =\n    Array.tabulate(grid.size - 2, grid.size - 2): (i, j) =>\n      grid.slice(i, i + 3).map(_.slice(j, j + 3).max).max\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>l});var i=r(67294);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);