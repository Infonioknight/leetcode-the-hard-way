"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93993],{69107:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>h,toc:()=>d});var t=n(85893),i=n(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"},a="2203 - Minimum Weighted Subgraph With the Required Paths (Hard)",h={id:"2100-2199/minimum-weighted-subgraph-with-the-required-paths-hard",title:"2203 - Minimum Weighted Subgraph With the Required Paths (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/",source:"@site/solutions/2100-2199/2203-minimum-weighted-subgraph-with-the-required-paths-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-weighted-subgraph-with-the-required-paths-hard",permalink:"/solutions/2100-2199/minimum-weighted-subgraph-with-the-required-paths-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2203-minimum-weighted-subgraph-with-the-required-paths-hard.md",tags:[],version:"current",sidebarPosition:2203,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"},sidebar:"tutorialSidebar",previous:{title:"2202 - Maximize the Topmost Element After K Moves (Medium)",permalink:"/solutions/2100-2199/maximize-the-topmost-element-after-k-moves-medium"},next:{title:"2206 - Divide Array Into Equal Pairs (Easy)",permalink:"/solutions/2100-2199/divide-array-into-equal-pairs-easy"}},l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dijkstra x 3",id:"approach-1-dijkstra-x-3",level:2}];function c(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"2203---minimum-weighted-subgraph-with-the-required-paths-hard",children:"2203 - Minimum Weighted Subgraph With the Required Paths (Hard)"}),"\n",(0,t.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/",children:"https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(s.p,{children:["You are given an integer ",(0,t.jsx)(s.code,{children:"n"})," denoting the number of nodes of a ",(0,t.jsx)(s.strong,{children:"weighted directed"})," graph. The nodes are numbered from ",(0,t.jsx)(s.code,{children:"0"})," to ",(0,t.jsx)(s.code,{children:"n - 1"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["You are also given a 2D integer array ",(0,t.jsx)(s.code,{children:"edges"})," where ",(0,t.jsx)(s.code,{children:"edges[i] = [fromi, toi, weighti]"})," denotes that there exists a ",(0,t.jsx)(s.strong,{children:"directed"})," edge from ",(0,t.jsx)(s.code,{children:"fromi"})," to ",(0,t.jsx)(s.code,{children:"toi"})," with weight ",(0,t.jsx)(s.code,{children:"weighti"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Lastly, you are given three ",(0,t.jsx)(s.strong,{children:"distinct"})," integers ",(0,t.jsx)(s.code,{children:"src1"}),", ",(0,t.jsx)(s.code,{children:"src2"}),", and ",(0,t.jsx)(s.code,{children:"dest"})," denoting three distinct nodes of the graph."]}),"\n",(0,t.jsxs)(s.p,{children:["Return ",(0,t.jsxs)(s.em,{children:["the ",(0,t.jsx)(s.strong,{children:"minimum weight"})," of a subgraph of the graph such that it is ",(0,t.jsx)(s.strong,{children:"possible"})," to reach"]})," ",(0,t.jsx)(s.code,{children:"dest"})," ",(0,t.jsx)(s.em,{children:"from both"})," ",(0,t.jsx)(s.code,{children:"src1"})," ",(0,t.jsx)(s.em,{children:"and"})," ",(0,t.jsx)(s.code,{children:"src2"})," ",(0,t.jsx)(s.em,{children:"via a set of edges of this subgraph"}),". In case such a subgraph does not exist, return ",(0,t.jsx)(s.code,{children:"-1"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.strong,{children:"subgraph"})," is a graph whose vertices and edges are subsets of the original graph. The ",(0,t.jsx)(s.strong,{children:"weight"})," of a subgraph is the sum of weights of its constituent edges."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2022/02/17/example1drawio.png",alt:""})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: n = 6, edges = [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], src1 = 0, src2 = 1, dest = 5\nOutput: 9\nExplanation:\nThe above figure represents the input graph.\nThe blue edges represent one of the subgraphs that yield the optimal answer.\nNote that the subgraph [[1,0,3],[0,5,6]] also yields the optimal answer. It is not possible to get a subgraph with less weight satisfying all the constraints.\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2022/02/17/example2-1drawio.png",alt:""})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: n = 3, edges = [[0,1,1],[2,1,1]], src1 = 0, src2 = 1, dest = 2\nOutput: -1\nExplanation:\nThe above figure represents the input graph.\nIt can be seen that there does not exist any path from node 1 to node 2, hence there are no subgraphs satisfying all the constraints.\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"3 <= n <= 10^5"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"0 <= edges.length <= 10^5"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"edges[i].length == 3"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"0 <= fromi, toi, src1, src2, dest <= n - 1"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"fromi != toi"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"src1"}),", ",(0,t.jsx)(s.code,{children:"src2"}),", and ",(0,t.jsx)(s.code,{children:"dest"})," are pairwise distinct."]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= weight[i] <= 10^5"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"approach-1-dijkstra-x-3",children:"Approach 1: Dijkstra x 3"}),"\n",(0,t.jsxs)(s.p,{children:["We calculate the shortest paths for each node from ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mn,{children:"1"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"src1"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"src"}),(0,t.jsx)(s.span,{className:"mord",children:"1"})]})})]}),", ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"src2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"src"}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]})," and ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"dest"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),". For ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"dest"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),", we need to do it in a reversed order. If we cannot reach ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mn,{children:"1"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"src1"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"src"}),(0,t.jsx)(s.span,{className:"mord",children:"1"})]})})]})," or ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"src2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"src"}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]})," from ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"dest"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),", then the answer is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{children:"\u2212"}),(0,t.jsx)(s.mn,{children:"1"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"-1"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,t.jsx)(s.span,{className:"mord",children:"1"})]})})]}),". Otherwise, we iterate each node to find the distances and sum them together to take the minimal one."]}),"\n",(0,t.jsx)(n,{name:"@wingkwong"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"using ll = long long;\n\nclass Solution {\npublic:\n    template<typename T_pair, typename T_vector>\n    void dijkstra(T_pair &g, T_vector &dist, ll start) {\n      priority_queue<pair<ll, ll>, vector<pair<ll, ll>>, greater<pair<ll, ll>>> pq;\n      dist[start] = 0;\n      pq.push({start, 0});\n      while (!pq.empty()) {\n        auto [u_node, u_cost] = pq.top(); pq.pop();\n        if (u_cost > dist[u_node]) continue;\n        for (auto [v_node, v_cost] : g[u_node]) {\n          if (dist[v_node] > dist[u_node] + v_cost) {\n            dist[v_node] = dist[u_node] + v_cost;\n            pq.push({v_node, dist[v_node]});\n          }\n        }\n      }\n    }\n\n    long long minimumWeight(int n, vector<vector<int>>& edges, int src1, int src2, int dest) {\n        ll inf = 1e18;\n        vector<ll> d1(n, inf), d2(n, inf), d3(n, inf);\n        vector<vector<pair<ll, ll>>> g(n);\n        vector<vector<pair<ll, ll>>> rev_g(n);\n        for (auto x : edges) {\n            g[x[0]].push_back({x[1], x[2]});\n            // reversed order\n            rev_g[x[1]].push_back({x[0], x[2]});\n        }\n        // calculate shortest paths for each node from src1\n        dijkstra(g, d1, src1);\n        // calculate shortest paths for each node from src2\n        dijkstra(g, d2, src2);\n        // calculate shortest paths for each node from dest\n        dijkstra(rev_g, d3, dest);\n        // cannot reach src1 / src2 from dest\n        if (d3[src1] == inf || d3[src2] == inf) return -1;\n        ll ans = inf;\n        for (int i = 0; i < n; i++) {\n            ans = min(ans, d1[i] + d2[i] + d3[i]);\n        }\n        return ans;\n    }\n};\n"})})]})}function o(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>a});var t=n(67294);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);