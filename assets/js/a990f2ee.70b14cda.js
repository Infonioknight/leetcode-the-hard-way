"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[39872],{32945:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=s(85893),a=s(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/01-matrix/",tags:["Array","Dynamic Programming","Breadth-First Search","Matrix"]},r="0542 - 01 Matrix (Medium)",l={id:"0500-0599/0542-01-matrix-medium",title:"0542 - 01 Matrix (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/01-matrix/",source:"@site/solutions/0500-0599/0542-01-matrix-medium.md",sourceDirName:"0500-0599",slug:"/0500-0599/0542-01-matrix-medium",permalink:"/solutions/0500-0599/0542-01-matrix-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0542-01-matrix-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/01-matrix/",tags:["Array","Dynamic Programming","Breadth-First Search","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0589 - N-ary Tree Preorder Traversal (Easy)",permalink:"/solutions/0500-0599/n-ary-tree-preorder-traversal-easy"},next:{title:"0600 - 0699",permalink:"/solutions/category/0600---0699"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}];function o(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Tabs:r}=n;return s||d("SolutionAuthor",!0),i||d("TabItem",!0),r||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0542---01-matrix-medium",children:"0542 - 01 Matrix (Medium)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/01-matrix/",children:"https://leetcode.com/problems/01-matrix/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given an ",(0,t.jsx)(n.code,{children:"m x n"})," binary matrix ",(0,t.jsx)(n.code,{children:"mat"}),", return ",(0,t.jsx)(n.em,{children:"the distance of the nearest"}),(0,t.jsx)(n.code,{children:"0"}),(0,t.jsx)(n.em,{children:"for each cell"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The distance between two adjacent cells is ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: mat = [[0,0,0],[0,1,0],[0,0,0]]\nOutput: [[0,0,0],[0,1,0],[0,0,0]]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: mat = [[0,0,0],[0,1,0],[1,1,1]]\nOutput: [[0,0,0],[0,1,0],[1,2,1]]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"m == mat.length"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"n == mat[i].length"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= m, n <= 10^4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= m * n <= 10^4"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mat[i][j]"})," is either ",(0,t.jsx)(n.code,{children:"0"})," or ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["There is at least one ",(0,t.jsx)(n.code,{children:"0"})," in ",(0,t.jsx)(n.code,{children:"mat"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-bfs",children:"Approach 1: BFS"}),"\n",(0,t.jsxs)(n.p,{children:["The first observation is that if ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"m"}),(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"["}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"["}),(0,t.jsx)(n.mi,{children:"j"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"mat[i][j]"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"ma"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mopen",children:"["}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(n.span,{className:"mclose",children:"]"}),(0,t.jsx)(n.span,{className:"mopen",children:"["}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,t.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"0"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})})]}),", then the output ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"a"}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{children:"s"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"["}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"["}),(0,t.jsx)(n.mi,{children:"j"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"ans[i][j]"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"an"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(n.span,{className:"mopen",children:"["}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(n.span,{className:"mclose",children:"]"}),(0,t.jsx)(n.span,{className:"mopen",children:"["}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,t.jsx)(n.span,{className:"mclose",children:"]"})]})})]})," would be also 0 because the nearest ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"0"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})})]})," for that cell is itself. When it comes to shortest paths on grid, we may think of BFS. We can apply the standard BFS by putting all cells with ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"0"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})})]})," as starting point, then walk to the possible adjacent cells in four directions and update the distance in place."]}),"\n",(0,t.jsx)(r,{children:(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {\n        int m = mat.size(), n = mat[0].size();\n        // queue for BFS\n        queue<pair<int, int>> q;\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (mat[i][j] == 0) {\n                    // we need to start from all 0s\n                    q.push({i, j});\n                } else {\n                    // otherwise, we set it to -1 as unvisited\n                    mat[i][j] = -1;\n                }\n            }\n        }\n        // BFS\n        int dir_x[4] = {-1, 0, 0, 1};\n        int dir_y[4] = {0, 1, -1, 0};\n        while (!q.empty()) {\n            auto [x, y] = q.front(); q.pop();\n            for (int d = 0; d < 4; d++) {\n                int next_x = x + dir_x[d];\n                int next_y = y + dir_y[d];\n                // check boundary\n                if (0 <= next_x && next_x < m && \n                    0 <= next_y && next_y < n && \n                    // mat[next_x][next_y] needs to be unvisited\n                    mat[next_x][next_y] == -1) {\n                    // push next position to the queue\n                    q.push({next_x, next_y});\n                    // set distance\n                    mat[next_x][next_y] = mat[x][y] + 1;\n                }\n            }\n        }\n        return mat;\n    }\n};\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(67294);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);