"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[716],{88917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(85893),o=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/walls-and-gates/",tags:["Array","Breadth-First Search","Matrix"]},i="0286 - Walls and Gates (Medium)",l={id:"0200-0299/walls-and-gates-medium",title:"0286 - Walls and Gates (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/walls-and-gates/",source:"@site/solutions/0200-0299/0286-walls-and-gates-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/walls-and-gates-medium",permalink:"/solutions/0200-0299/walls-and-gates-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0286-walls-and-gates-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:286,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/walls-and-gates/",tags:["Array","Breadth-First Search","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0283 - Move Zeroes (Easy)",permalink:"/solutions/0200-0299/move-zeroes-easy"},next:{title:"0287 - Find the Duplicate Number (Medium)",permalink:"/solutions/0200-0299/find-the-duplicate-number-medium"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Multi-Source BFS",id:"approach-1-multi-source-bfs",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:i}=n;return t||m("SolutionAuthor",!0),r||m("TabItem",!0),i||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0286---walls-and-gates-medium",children:"0286 - Walls and Gates (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/walls-and-gates/",children:"https://leetcode.com/problems/walls-and-gates/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given an ",(0,s.jsx)(n.code,{children:"m x n"})," grid ",(0,s.jsx)(n.code,{children:"rooms"}),"\xa0initialized with these three possible values."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-1"}),"\xa0A wall or an obstacle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0"})," A gate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"INF"})," Infinity means an empty room. We use the value ",(0,s.jsx)(n.code,{children:"231 - 1 = 2147483647"})," to represent ",(0,s.jsx)(n.code,{children:"INF"})," as you may assume that the distance to a gate is less than ",(0,s.jsx)(n.code,{children:"2147483647"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Fill each empty room with the distance to ",(0,s.jsx)(n.em,{children:"its nearest gate"}),". If it is impossible to reach a gate, it should be filled with ",(0,s.jsx)(n.code,{children:"INF"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]\nOutput: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: rooms = [[-1]]\nOutput: [[-1]]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"m == rooms.length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"n == rooms[i].length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= m, n <= 250"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rooms[i][j]"})," is ",(0,s.jsx)(n.code,{children:"-1"}),", ",(0,s.jsx)(n.code,{children:"0"}),", or ",(0,s.jsx)(n.code,{children:"231 - 1"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-multi-source-bfs",children:"Approach 1: Multi-Source BFS"}),"\n",(0,s.jsx)(i,{children:(0,s.jsxs)(r,{value:"py",label:"Python",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'class Solution:\n    def wallsAndGates(self, rooms: List[List[int]]) -> None:\n        """\n        Do not return anything, modify rooms in-place instead.\n        """\n        # Multi-source BFS\n        # We can see each gate as a source, then we start from each gate\n        # If the next room `rooms[next_x][next_y` is empty, \n        # we update the value rooms[x][y] + 1 and\n        # we push (next_x, next_y) to the queue\n        \n        n, m = len(rooms), len(rooms[0])\n        q = deque()\n        for i in range(n):\n            for j in range(m):\n                if rooms[i][j] == 0:\n                    q.append((i, j))\n        while q:\n            x, y = q.popleft()\n            for dx, dy in (0, 1), (1, 0), (0, -1), (-1, 0):\n                next_x, next_y = dx + x, dy + y\n                if 0 <= next_x < n and 0 <= next_y < m and rooms[next_x][next_y] == 2147483647:\n                    rooms[next_x][next_y] = rooms[x][y] + 1\n                    q.append((next_x, next_y))\n                    \n'})})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);