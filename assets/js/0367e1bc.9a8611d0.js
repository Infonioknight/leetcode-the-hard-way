"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35066],{99088:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var t=i(85893),s=i(11151);const c={description:"Author: @wingkwong | https://leetcode.com/problems/connecting-cities-with-minimum-cost/"},o="1135 - Connecting Cities With Minimum Cost (Medium)",r={id:"1100-1199/connecting-cities-with-minimum-cost-medium",title:"1135 - Connecting Cities With Minimum Cost (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/connecting-cities-with-minimum-cost/",source:"@site/solutions/1100-1199/1135-connecting-cities-with-minimum-cost-medium.md",sourceDirName:"1100-1199",slug:"/1100-1199/connecting-cities-with-minimum-cost-medium",permalink:"/solutions/1100-1199/connecting-cities-with-minimum-cost-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1100-1199/1135-connecting-cities-with-minimum-cost-medium.md",tags:[],version:"current",sidebarPosition:1135,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/connecting-cities-with-minimum-cost/"},sidebar:"tutorialSidebar",previous:{title:"1125 - Smallest Sufficient Team (Hard)",permalink:"/solutions/1100-1199/smallest-sufficient-team-hard"},next:{title:"1137 - N-th Tribonacci Number (Easy)",permalink:"/solutions/1100-1199/n-th-tribonacci-number-easy"}},l={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: <strong>Kruskal&#39;s Algorithm</strong>",id:"approach-1-kruskals-algorithm",level:2}];function h(n){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...n.components},{SolutionAuthor:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"1135---connecting-cities-with-minimum-cost-medium",children:"1135 - Connecting Cities With Minimum Cost (Medium)"}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/connecting-cities-with-minimum-cost/",children:"https://leetcode.com/problems/connecting-cities-with-minimum-cost/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["There are ",(0,t.jsx)(e.code,{children:"n"})," cities labeled from ",(0,t.jsx)(e.code,{children:"1"})," to ",(0,t.jsx)(e.code,{children:"n"}),". You are given the integer ",(0,t.jsx)(e.code,{children:"n"})," and an array ",(0,t.jsx)(e.code,{children:"connections"})," where ",(0,t.jsx)(e.code,{children:"connections[i] = [xi, yi, costi]"})," indicates that the cost of connecting city ",(0,t.jsx)(e.code,{children:"xi"})," and city ",(0,t.jsx)(e.code,{children:"yi"})," (bidirectional connection) is ",(0,t.jsx)(e.code,{children:"costi"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Return ",(0,t.jsxs)(e.em,{children:["the minimum ",(0,t.jsx)(e.strong,{children:"cost"})," to connect all the"]})," ",(0,t.jsx)(e.code,{children:"n"})," ",(0,t.jsx)(e.em,{children:"cities such that there is at least one path between each pair of cities"}),". If it is impossible to connect all the ",(0,t.jsx)(e.code,{children:"n"})," cities, return ",(0,t.jsx)(e.code,{children:"-1"}),","]}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.strong,{children:"cost"})," is the sum of the connections' costs used."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2019/04/20/1314_ex2.png",alt:""})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]\nOutput: 6\nExplanation: Choosing any 2 edges will connect all cities so we choose the minimum 2.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2019/04/20/1314_ex1.png",alt:""})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 4, connections = [[1,2,3],[3,4,4]]\nOutput: -1\nExplanation: There is no way to connect all cities even if all edges are used. \n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= n <= 10^4"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= connections.length <= 10^4"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"connections[i].length == 3"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= xi, yi <= n"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"xi != yi"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"0 <= costi <= 10^5"})}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"approach-1-kruskals-algorithm",children:["Approach 1: ",(0,t.jsx)(e.strong,{children:"Kruskal's Algorithm"})]}),"\n",(0,t.jsx)(e.p,{children:"If we treat it as a graph problem, it is actually same as finding Minimum Spanning Tree. Hence, we can use Kruskal's Algorithm with DSU to solve it."}),"\n",(0,t.jsxs)(e.p,{children:["In order to get the MST, we sort the edges based on the weights in an increasing order. Then we iterate them one by one, and greedily pick edges which does not result in cycle with the previous edges. At the end, we should have ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"N"}),(0,t.jsx)(e.mo,{children:"\u2212"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"N - 1"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),"edges in MST. Otherwise, we return ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mo,{children:"\u2212"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"-1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,t.jsx)(i,{name:"@wingkwong"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nclass Solution {\npublic:\n    int minimumCost(int n, vector<vector<int>>& connections) {\n        vector<array<int, 3>> edges;\n        for (auto x : connections) {\n            edges.push_back({x[2], x[0], x[1]});\n        }\n        sort(edges.begin(), edges.end());\n        dsu d(n + 1);\n        int ans = 0, cnt = 0;\n        for (auto x : edges) {\n            if (d.unite(x[1], x[2])) {\n                ans += x[0];\n                cnt += 1;\n            }\n        }\n        return cnt == n - 1 ? ans : -1;\n    }\n};\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>o});var t=i(67294);const s={},c=t.createContext(s);function o(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);