"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[15825],{5195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(85893),i=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/graph-valid-tree/",tags:["DSU","Graph","DFS","BFS"]},o="0261 - Graph Valid Tree (Medium)",l={id:"0200-0299/graph-valid-tree-medium",title:"0261 - Graph Valid Tree (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/graph-valid-tree/",source:"@site/solutions/0200-0299/0261-graph-valid-tree-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/graph-valid-tree-medium",permalink:"/solutions/0200-0299/graph-valid-tree-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0261-graph-valid-tree-medium.md",tags:[{label:"DSU",permalink:"/solutions/tags/dsu"},{label:"Graph",permalink:"/solutions/tags/graph"},{label:"DFS",permalink:"/solutions/tags/dfs"},{label:"BFS",permalink:"/solutions/tags/bfs"}],version:"current",sidebarPosition:261,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/graph-valid-tree/",tags:["DSU","Graph","DFS","BFS"]},sidebar:"tutorialSidebar",previous:{title:"0258 - Add Digits (Easy)",permalink:"/solutions/0200-0299/add-digits-easy"},next:{title:"0263 - Ugly Number",permalink:"/solutions/0200-0299/ugly-number-easy"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DSU",id:"approach-1-dsu",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"0261---graph-valid-tree-medium",children:"0261 - Graph Valid Tree (Medium)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/graph-valid-tree/",children:"https://leetcode.com/problems/graph-valid-tree/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["You have a graph of ",(0,r.jsx)(n.code,{children:"n"})," nodes labeled from ",(0,r.jsx)(n.code,{children:"0"})," to ",(0,r.jsx)(n.code,{children:"n - 1"}),". You are given an integer n and a list of ",(0,r.jsx)(n.code,{children:"edges"})," where ",(0,r.jsx)(n.code,{children:"edges[i] = [ai, bi]"})," indicates that there is an undirected edge between nodes ",(0,r.jsx)(n.code,{children:"ai"})," and ",(0,r.jsx)(n.code,{children:"bi"})," in the graph."]}),"\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.code,{children:"true"})," ",(0,r.jsx)(n.em,{children:"if the edges of the given graph make up a valid tree, and"})," ",(0,r.jsx)(n.code,{children:"false"})," ",(0,r.jsx)(n.em,{children:"otherwise"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/03/12/tree1-graph.jpg",alt:""})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]\nOutput: true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/03/12/tree2-graph.jpg",alt:""})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]\nOutput: false\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= n <= 2000"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= edges.length <= 5000"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"edges[i].length == 2"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= ai, bi < n"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ai != bi"})}),"\n",(0,r.jsx)(n.li,{children:"There are no self-loops or repeated edges."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-dsu",children:"Approach 1: DSU"}),"\n",(0,r.jsxs)(n.p,{children:["If a graph is a valid tree, it must have exactly ",(0,r.jsx)(n.code,{children:"n - 1"})," edges. Besides, it cannot be fully connected and contain any cycles. Therefore, we just need check if there are n - 1 edges and any cycles. We can use DSU to check if element A and element B share the same parent. If so, it means that they are united, a cycle wound be there. Hence, we can return false immediately as a valid tree cannot have a  cycle. Otherwise, we unite both element. If there is no cycle after iterating all elements, then we can simply check if there are ",(0,r.jsx)(n.code,{children:"n - 1"})," edges. There are other ways such as DFS and BFS to solve it."]}),"\n",(0,r.jsx)(t,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nclass Solution {\npublic:\n    bool validTree(int n, vector<vector<int>>& edges) {\n        dsu d(n);\n        for (auto x : edges) {\n            if (!d.unite(x[0], x[1])) {\n                return false;\n            }\n        }\n        return (int) edges.size() == n - 1;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);