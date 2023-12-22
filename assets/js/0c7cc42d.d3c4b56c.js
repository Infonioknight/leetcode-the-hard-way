"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[17495],{78417:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(85893),t=n(11151);const i={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/"},r="2192 - All Ancestors of a Node in a Directed Acyclic Graph (Medium)",l={id:"2100-2199/all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium",title:"2192 - All Ancestors of a Node in a Directed Acyclic Graph (Medium)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/",source:"@site/solutions/2100-2199/2192-all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium",permalink:"/solutions/2100-2199/all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2192-all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium.md",tags:[],version:"current",sidebarPosition:2192,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/"},sidebar:"tutorialSidebar",previous:{title:"2191 - Sort the Jumbled Numbers (Medium)",permalink:"/solutions/2100-2199/sort-the-jumbled-numbers-medium"},next:{title:"2193 - Minimum Number of Moves to Make Palindrome (Hard)",permalink:"/solutions/2100-2199/minimum-number-of-moves-to-make-palindrome-hard"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Topological Sort",id:"approach-1-topological-sort",level:2},{value:"Approach 2: DFS",id:"approach-2-dfs",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"2192---all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium",children:"2192 - All Ancestors of a Node in a Directed Acyclic Graph (Medium)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/",children:"https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["You are given a positive integer ",(0,a.jsx)(s.code,{children:"n"})," representing the number of nodes of a ",(0,a.jsx)(s.strong,{children:"Directed Acyclic Graph"})," (DAG). The nodes are numbered from ",(0,a.jsx)(s.code,{children:"0"})," to ",(0,a.jsx)(s.code,{children:"n - 1"})," (",(0,a.jsx)(s.strong,{children:"inclusive"}),")."]}),"\n",(0,a.jsxs)(s.p,{children:["You are also given a 2D integer array ",(0,a.jsx)(s.code,{children:"edges"}),", where ",(0,a.jsx)(s.code,{children:"edges[i] = [fromi, toi]"})," denotes that there is a ",(0,a.jsx)(s.strong,{children:"unidirectional"})," edge from ",(0,a.jsx)(s.code,{children:"fromi"})," to ",(0,a.jsx)(s.code,{children:"toi"})," in the graph."]}),"\n",(0,a.jsxs)(s.p,{children:["Return ",(0,a.jsx)(s.em,{children:"a list"})," ",(0,a.jsx)(s.code,{children:"answer"}),(0,a.jsx)(s.em,{children:", where"})," ",(0,a.jsx)(s.code,{children:"answer[i]"})," ",(0,a.jsxs)(s.em,{children:["is the ",(0,a.jsx)(s.strong,{children:"list of ancestors"})," of the"]})," ",(0,a.jsx)(s.code,{children:"ith"})," ",(0,a.jsxs)(s.em,{children:["node, sorted in ",(0,a.jsx)(s.strong,{children:"ascending order"})]}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["A node ",(0,a.jsx)(s.code,{children:"u"})," is an ",(0,a.jsx)(s.strong,{children:"ancestor"})," of another node ",(0,a.jsx)(s.code,{children:"v"})," if ",(0,a.jsx)(s.code,{children:"u"})," can reach ",(0,a.jsx)(s.code,{children:"v"})," via a set of edges."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2019/12/12/e1.png",alt:""})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]\nOutput: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]\nExplanation:\nThe above diagram represents the input graph.\n- Nodes 0, 1, and 2 do not have any ancestors.\n- Node 3 has two ancestors 0 and 1.\n- Node 4 has two ancestors 0 and 2.\n- Node 5 has three ancestors 0, 1, and 3.\n- Node 6 has five ancestors 0, 1, 2, 3, and 4.\n- Node 7 has four ancestors 0, 1, 2, and 3.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2019/12/12/e2.png",alt:""})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: n = 5, edgeList = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]\nOutput: [[],[0],[0,1],[0,1,2],[0,1,2,3]]\nExplanation:\nThe above diagram represents the input graph.\n- Node 0 does not have any ancestor.\n- Node 1 has one ancestor 0.\n- Node 2 has two ancestors 0 and 1.\n- Node 3 has three ancestors 0, 1, and 2.\n- Node 4 has four ancestors 0, 1, 2, and 3.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= n <= 1000"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"0 <= edges.length <= min(2000, n * (n - 1) / 2)"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"edges[i].length == 2"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"0 <= fromi, toi <= n - 1"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"fromi != toi"})}),"\n",(0,a.jsx)(s.li,{children:"There are no duplicate edges."}),"\n",(0,a.jsxs)(s.li,{children:["The graph is ",(0,a.jsx)(s.strong,{children:"directed"})," and ",(0,a.jsx)(s.strong,{children:"acyclic"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-topological-sort",children:"Approach 1: Topological Sort"}),"\n",(0,a.jsx)(s.p,{children:"This question is quite challenging, and there are multiple ways to do it. Topological sort is one of the less direct way, but the logic is as following:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Count the number of parents (In-Degree) of each node"}),"\n",(0,a.jsx)(s.li,{children:"Start from the nodes without any parent"}),"\n",(0,a.jsx)(s.li,{children:"For each child, remove one In-Degree of it, if it is zero, add it to the queue"}),"\n",(0,a.jsx)(s.li,{children:"When looking at a node, perform union to the set of ancestors of each of its parent"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"We observe that we can be sure that the ancestors of a node are all found until all of its parents are visited. This is the reason why we only visit a node when its In-Degree (number of unvisited parent) is 0."}),"\n",(0,a.jsx)(n,{name:"@heiheihang"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:\n        \n        #initialise the list of ancestors\n        ancestors = []\n        for i in range(n):\n            ancestors.append(set())\n        \n        #initialize bfs level\n        level = set()\n        \n        #initialize sets of parent, children, and in-degree\n        parents = defaultdict(list)\n        children = defaultdict(list)\n        degree = defaultdict(int)\n        \n        for parent,child in edges:\n            parents[child].append(parent)\n            children[parent].append(child)\n            degree[child] += 1\n            \n        #find the set of nodes without parents\n        for i in range(n):\n            if(i not in parents):\n                level.add(i)\n        \n        #perform bfs\n        while(level):\n            newLevel = set()\n            for node in level:\n                \n                #group all its parent's ancestors to node_ancestors\n                node_ancestors = set()\n                for parent in parents[node]:\n                    node_ancestors |= ancestors[parent]\n                \n                #need to include itself for its children to reference\n                node_ancestors.add(node)\n                \n                #set the node's ancestors \n                ancestors[node] = node_ancestors\n                \n                #update its child in-degree\n                for child in children[node]:\n                    degree[child] -= 1\n                    \n                    #if the child's parents have been visited, add it to next level\n                    if(degree[child] == 0):\n                        newLevel.add(child)\n            level = newLevel\n                \n        \n        ans = []\n        \n        #put all ancestors to the final answer list\n        for i in range(n):\n            s = res[i]\n            \n            #need to remove itself \n            s.remove(i)\n            l = list(s)\n            l.sort()\n            ans.append(l)\n            \n        return ans\n"})}),"\n",(0,a.jsx)(s.h2,{id:"approach-2-dfs",children:"Approach 2: DFS"}),"\n",(0,a.jsxs)(s.p,{children:["We can start from each node ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"u"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"})]})})]})," and perform DFS to find out all visited nodes. The ancestors of ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"u"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"})]})})]}),"would be those visited nodes excluding ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"u"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"})]})})]}),". Since the searching direction is opposite, we change it from ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"u"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"})]})})]})," -> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"v"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]})," to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"v"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]})," -> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"u"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"})]})})]}),". In Example 1, if ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"u"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"})]})})]})," is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"6"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"6"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"6"})]})})]}),", then ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"6"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"6"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"6"})]})})]}),"-> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"3"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"})]})})]})," -> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"0"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"0"})]})})]}),", ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"6"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"6"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"6"})]})})]})," -> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"3"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"})]})})]}),"-> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"1"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]})," and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"6"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"6"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"6"})]})})]}),"-> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"4"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"4"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"4"})]})})]})," -> ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"2"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})})]}),", so the visited nodes excluding itself are ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mo,{stretchy:"false",children:"["}),(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"3"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"4"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"[0, 1, 2, 3,4]"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mopen",children:"["}),(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"3"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"4"}),(0,a.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),"."]}),"\n",(0,a.jsx)(n,{name:"@wingkwong"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> g;\n    vector<int> vis;\n    void dfs(int u) {\n        // mark it visited\n        vis[u] = 1;\n        // from u, check the next node\n        // e.g. node 6 can go to node 3 and node 4\n        for (auto v : g[u]) {\n            // only perform dfs if node is not visited\n            if (!vis[v]) {\n                dfs(v);\n            }\n        }\n    }\n    vector<vector<int>> getAncestors(int n, vector<vector<int>>& edges) {\n        g.resize(n);\n        vis.resize(n);\n        // from x[1] to x[0]\n        for (auto x : edges) g[x[1]].push_back(x[0]);\n        vector<vector<int>> ans;\n        for (int i = 0; i < n; i++) {\n            // tmp array to hold answer for node i\n            vector<int> tmp;\n            // vis is used to check if node i is visited or not\n            // re-init for each node\n            vis = vector<int>(n, 0);\n            // dfs - start from node i\n            dfs(i);\n            // right here all nodes from node i have been visited\n            // iterate each node\n            for (int j = 0; j < n; j++) {\n                // ancestors = those visited nodes excluding itself\n                if (!vis[j] || i == j) continue;\n                // node j is one of the ancestors\n                tmp.push_back(j);\n            }\n            // push it to ans\n            ans.push_back(tmp);\n        }\n        return ans;\n    }\n};\n"})})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var a=n(67294);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);