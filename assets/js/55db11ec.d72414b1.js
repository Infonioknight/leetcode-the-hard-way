"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[33429],{11650:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>h,suggestedProblems:()=>d,toc:()=>l});var a=s(85893),n=s(11151);const i={title:"Dijkstra's Algorithm",description:"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","dijkstra","algorithm"]},r=void 0,h={id:"graph-theory/dijkstra",title:"Dijkstra's Algorithm",description:"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph.",source:"@site/tutorials/graph-theory/dijkstra.md",sourceDirName:"graph-theory",slug:"/graph-theory/dijkstra",permalink:"/tutorials/graph-theory/dijkstra",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/dijkstra.md",tags:[],version:"current",frontMatter:{title:"Dijkstra's Algorithm",description:"Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","dijkstra","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Depth First Search (DFS)",permalink:"/tutorials/graph-theory/depth-first-search"},next:{title:"Disjoint Set Union (DSU)",permalink:"/tutorials/graph-theory/disjoint-set-union"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Implementation",id:"implementation",level:2}],d=[{problemName:"0743 - Network Delay Time",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/network-delay-time/",solutionLink:"../../solutions/0700-0799/network-delay-time-medium"},{problemName:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",solutionLink:"../../solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"}];function c(e){const t={annotation:"annotation",code:"code",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,n.a)(),...e.components},{SolutionAuthor:s,TabItem:i,Table:r,Tabs:h,TutorialAuthors:o}=t;return s||p("SolutionAuthor",!0),i||p("TabItem",!0),r||p("Table",!0),h||p("Tabs",!0),o||p("TutorialAuthors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{names:"@wingkwong"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Dijkstra's algorithm is a popular graph search algorithm that is used to find the shortest path between two nodes in a graph. It is a greedy algorithm that uses a priority queue to prioritize the nodes that have the shortest distance from the starting node. The algorithm starts with the starting node and visits the neighboring nodes, updating their distances and adding them to the priority queue. The process is repeated until the destination node is reached."}),"\n",(0,a.jsx)(t.p,{children:"The algorithm works by maintaining a priority queue of unvisited nodes, where the priority of a node is determined by the shortest distance from the starting node. The algorithm initializes the starting node with a distance of zero and all other nodes with a distance of infinity. It then repeatedly selects the node with the smallest distance that has not yet been visited and updates the distances of its unvisited neighbors, adding them to the priority queue if they are not already in it. The algorithm terminates when the destination node is dequeued from the priority queue."}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(t.p,{children:["Let ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"d"}),(0,a.jsx)(t.mi,{children:"i"}),(0,a.jsx)(t.mi,{children:"s"}),(0,a.jsx)(t.mi,{children:"t"}),(0,a.jsx)(t.mo,{stretchy:"false",children:"["}),(0,a.jsx)(t.mi,{children:"u"}),(0,a.jsx)(t.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"dist[u]"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(t.span,{className:"mopen",children:"["}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(t.span,{className:"mclose",children:"]"})]})})]})," be the distance / cost / weight to reach node ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"u"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"u"})]})})]}),". Initially, we use a priority queue to maintain the pair ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mi,{children:"p"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"p"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"p"})]})})]})," where ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"p"}),(0,a.jsx)(t.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(t.mi,{children:"f"}),(0,a.jsx)(t.mi,{children:"i"}),(0,a.jsx)(t.mi,{children:"r"}),(0,a.jsx)(t.mi,{children:"s"}),(0,a.jsx)(t.mi,{children:"t"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"p.first"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(t.span,{className:"mord",children:"."}),(0,a.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"rs"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"t"})]})})]})," is the node and ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsxs)(t.mrow,{children:[(0,a.jsx)(t.mi,{children:"p"}),(0,a.jsx)(t.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(t.mi,{children:"s"}),(0,a.jsx)(t.mi,{children:"e"}),(0,a.jsx)(t.mi,{children:"c"}),(0,a.jsx)(t.mi,{children:"o"}),(0,a.jsx)(t.mi,{children:"n"}),(0,a.jsx)(t.mi,{children:"d"})]}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"p.second"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(t.span,{className:"mord",children:"."}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"seco"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(t.span,{className:"mord mathnormal",children:"d"})]})})]})," is the cost. We set the distance from source to source is ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"0"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"0"})]})})]})," with ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mn,{children:"0"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(t.span,{className:"mord",children:"0"})]})})]})," cost and push the starting point to the priority queue."]}),"\n",(0,a.jsx)(t.p,{children:"The first run, the vertex is the source node. We remove it and check its neighbors. If the distance to the neighbor is greater than the current distance plus the cost, then it means a shorter path is found. Hence, we update it and push it to the priority queue for further process."}),"\n",(0,a.jsx)(h,{children:(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"template<typename T_pair, typename T_vector>\nvoid dijkstra(T_pair &g, T_vector &dist, int start) {\n  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n  dist[start] = 0;\n  pq.push({start, 0});\n  while (!pq.empty()) {\n    auto [u_node, u_cost] = pq.top(); pq.pop();\n    if (u_cost > dist[u_node]) continue;\n    for (auto [v_node, v_cost] : g[u_node]) {\n      if (dist[v_node] > dist[u_node] + v_cost) {\n        dist[v_node] = dist[u_node] + v_cost;\n        pq.push({v_node, dist[v_node]});\n      }\n    }\n  }\n}\n"})})]})}),"\n",(0,a.jsx)(t.p,{children:"Dijkstra's algorithm is guaranteed to find the shortest path between two nodes in a graph if all the edge weights are non-negative. If the graph contains negative edge weights, Bellman-Ford algorithm should be used instead."}),"\n","\n",(0,a.jsx)(r,{title:"Suggested Problems",data:d})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,s)=>{s.d(t,{Z:()=>h,a:()=>r});var a=s(67294);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);