"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3403],{2586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(85893),i=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/longest-cycle-in-a-graph"},r="2360 - Longest Cycle in a Graph (Hard)",c={id:"2300-2399/longest-cycle-in-a-graph-hard",title:"2360 - Longest Cycle in a Graph (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/longest-cycle-in-a-graph",source:"@site/solutions/2300-2399/2360-longest-cycle-in-a-graph-hard.md",sourceDirName:"2300-2399",slug:"/2300-2399/longest-cycle-in-a-graph-hard",permalink:"/solutions/2300-2399/longest-cycle-in-a-graph-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2360-longest-cycle-in-a-graph-hard.md",tags:[],version:"current",sidebarPosition:2360,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/longest-cycle-in-a-graph"},sidebar:"tutorialSidebar",previous:{title:"2359 - Find Closest Node to Given Two Nodes (Medium)",permalink:"/solutions/2300-2399/find-closest-node-to-given-two-nodes-medium"},next:{title:"2376 - Count Special Integers (Hard)",permalink:"/solutions/2300-2399/count-special-integers-hard"}},l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach: Strongly Connected Component",id:"approach-strongly-connected-component",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"2360---longest-cycle-in-a-graph-hard",children:"2360 - Longest Cycle in a Graph (Hard)"}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/longest-cycle-in-a-graph",children:"https://leetcode.com/problems/longest-cycle-in-a-graph"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["You are given a ",(0,o.jsx)(n.strong,{children:"directed"})," graph of ",(0,o.jsx)(n.code,{children:"n"})," nodes numbered from ",(0,o.jsx)(n.code,{children:"0"})," to ",(0,o.jsx)(n.code,{children:"n - 1"}),", where each node has ",(0,o.jsx)(n.strong,{children:"at most one"})," outgoing edge."]}),"\n",(0,o.jsxs)(n.p,{children:["The graph is represented with a given ",(0,o.jsx)(n.strong,{children:"0-indexed"})," array ",(0,o.jsx)(n.code,{children:"edges"})," of size ",(0,o.jsx)(n.code,{children:"n"}),", indicating that there is a directed edge from node ",(0,o.jsx)(n.code,{children:"i"})," to node ",(0,o.jsx)(n.code,{children:"edges[i]"}),". If there is no outgoing edge from node ",(0,o.jsx)(n.code,{children:"i"}),", then ",(0,o.jsx)(n.code,{children:"edges[i] == -1"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsxs)(n.em,{children:["the length of the ",(0,o.jsx)(n.strong,{children:"longest"})," cycle in the graph"]}),". If no cycle exists, return ",(0,o.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A cycle is a path that starts and ends at the ",(0,o.jsx)(n.strong,{children:"same"})," node."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/06/08/graph4drawio-5.png",alt:""})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: edges = [3,3,4,2,3]\nOutput: 3\nExplanation: The longest cycle in the graph is the cycle: 2 -> 4 -> 3 -> 2.\nThe length of this cycle is 3, so 3 is returned.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/06/07/graph4drawio-1.png",alt:""})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: edges = [2,-1,3,1]\nOutput: -1\nExplanation: There are no cycles in this graph.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"n == edges.length"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"2 <= n <= 10^5"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"-1 <= edges[i] < n"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"edges[i] != i"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-strongly-connected-component",children:"Approach: Strongly Connected Component"}),"\n",(0,o.jsx)(n.p,{children:"We can compute Strongly Connected Component on the graph and find the maximum one."}),"\n",(0,o.jsx)(t,{name:"@wingkwong"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    struct SCC : vector<int> {\n      vector<vector<int>> comps;\n      vector<int> S;\n\n      SCC() {}\n      SCC(vector<vector<int>>& G) : vector<int>((int)G.size(), -1), S((int)G.size()) {\n        for(int i = 0; i < (int)G.size(); i++) if(!S[i]) dfs(G, i);\n      }\n\n      int dfs(vector<vector<int>>& G, int v) {\n        int low = S[v] = (int)S.size();\n        S.push_back(v);\n        for(auto e : G[v]) if(at(e) < 0) low = min(low, S[e] ?: dfs(G, e));\n        if(low == S[v]) {\n          comps.push_back({});\n          for(int i = S[v]; i < (int)S.size(); i++) {\n            at(S[i]) = (int)comps.size() - 1;\n            comps.back().push_back(S[i]);\n          }\n          S.resize(S[v]);\n        }\n        return low;\n      }\n    };\n    \n    int longestCycle(vector<int>& edges) {\n        int n = edges.size(), ans = -1;\n        vector<vector<int>> g(n);\n\t\t// we only need those nodes with outgoing edge\n        for (int i = 0; i < n; i++) if (edges[i] != -1) g[i].push_back(edges[i]);\n\t\t// compute strongly connected components\n        SCC s = SCC(g);\n\t\t// if the size is greater than 1, that means there is a cycle (which has at least two nodes)\n\t\t// so iterate each possible answer and find the max one\n        for (auto &x : s.comps) if ((int) x.size() > 1) ans = max(ans, (int) x.size());\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);