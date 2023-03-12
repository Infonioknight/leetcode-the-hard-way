"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5887],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),m=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=m(e.components);return n.createElement(i.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,u=c["".concat(i,".").concat(d)]||c[d]||h[d]||s;return t?n.createElement(u,o(o({ref:a},l),{},{components:t})):n.createElement(u,o({ref:a},l))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=c;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<s;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15721:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],p={description:"Author: @ColeB2 | https://leetcode.com/problems/clone-graph/",tags:["Hash Table","Depth-First Search","Breadth-First Search","Graph"]},i="0133 - Clone Graph (Medium)",m={unversionedId:"0100-0199/clone-graph-medium",id:"0100-0199/clone-graph-medium",title:"0133 - Clone Graph (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/clone-graph/",source:"@site/solutions/0100-0199/0133-clone-graph-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/clone-graph-medium",permalink:"/solutions/0100-0199/clone-graph-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0133-clone-graph-medium.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Graph",permalink:"/solutions/tags/graph"}],version:"current",sidebarPosition:133,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/clone-graph/",tags:["Hash Table","Depth-First Search","Breadth-First Search","Graph"]},sidebar:"tutorialSidebar",previous:{title:"0131 - Palindrome Partitioning (Medium)",permalink:"/solutions/0100-0199/palindrome-partitioning-medium"},next:{title:"0134 - Gas Station (Medium)",permalink:"/solutions/0100-0199/gas-station-medium"}},l={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterative Depth/Breadth-First Search",id:"approach-1-iterative-depthbreadth-first-search",level:2}],c=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}},d=c("Tabs"),u=c("TabItem"),k=c("SolutionAuthor"),N={toc:h};function g(e){var a=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0133---clone-graph-medium"},"0133 - Clone Graph (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/clone-graph/"},"https://leetcode.com/problems/clone-graph/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given a reference of a node in a ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph"},(0,s.kt)("strong",{parentName:"a"},"connected"))," undirected graph."),(0,s.kt)("p",null,"Return a ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object_copying#Deep_copy"},(0,s.kt)("strong",{parentName:"a"},"deep copy"))," (clone) of the graph."),(0,s.kt)("p",null,"Each node in the graph contains a value (",(0,s.kt)("inlineCode",{parentName:"p"},"int"),") and a list (",(0,s.kt)("inlineCode",{parentName:"p"},"List[Node]"),") of its neighbors."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"class Node {\n    public int val;\n    public List<Node> neighbors;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Test case format:")),(0,s.kt)("p",null,"For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with ",(0,s.kt)("inlineCode",{parentName:"p"},"val == 1"),", the second node with ",(0,s.kt)("inlineCode",{parentName:"p"},"val == 2"),", and so on. The graph is represented in the test case using an adjacency list."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"An adjacency list")," is a collection of unordered ",(0,s.kt)("strong",{parentName:"p"},"lists")," used to represent a finite graph. Each list describes the set of neighbors of a node in the graph."),(0,s.kt)("p",null,"The given node will always be the first node with ",(0,s.kt)("inlineCode",{parentName:"p"},"val = 1"),". You must return the ",(0,s.kt)("strong",{parentName:"p"},"copy of the given node")," as a reference to the cloned graph."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: adjList = [[2,4],[1,3],[2,4],[1,3]]\nOutput: [[2,4],[1,3],[2,4],[1,3]]\nExplanation: There are 4 nodes in the graph.\n1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/01/07/graph.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: adjList = [[]]\nOutput: [[]]\nExplanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: adjList = []\nOutput: []\nExplanation: This an empty graph, it does not have any nodes.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of nodes in the graph is in the range ",(0,s.kt)("inlineCode",{parentName:"li"},"[0, 100]"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= Node.val <= 100")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Node.val")," is unique for each node."),(0,s.kt)("li",{parentName:"ul"},"There are no repeated edges and no self-loops in the graph."),(0,s.kt)("li",{parentName:"ul"},"The Graph is connected and all nodes can be visited starting from the given node.")),(0,s.kt)("h2",{id:"approach-1-iterative-depthbreadth-first-search"},"Approach 1: Iterative Depth/Breadth-First Search"),(0,s.kt)("p",null,"We need to traverse all the nodes in the graph, create copies, and connect the copies. Iteratively we can use a stack or a queue to traverse nodes we haven't visited already."),(0,s.kt)("p",null,"Starting at the first node, we will traverse by checking all the neighbors of the nodes. For each neighbor, we will get/create ae copy of that neighbor and add the copied neighbour to the neighbour of the node we are looking at."),(0,s.kt)("p",null,"We will also want to check if the neighbour has been added to our hash map. If not, we can add it to our queue/stack to visit it and its neighbors, as well as add it to the hash map with its copy."),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"V"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(V + E)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"V")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V")))))," is the number of nodes, and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"E")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E")))))," is the number of edges in the graph. We will visit each vertex/node once during our BFS/DFS, and while looking through the neighbors, we will check on each edge twice. Once for each neighbor."),(0,s.kt)("p",null,"Space: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"V"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(V)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," Our hash map, and stack/queue will take ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"V"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(V)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," space."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def cloneGraph(self, node: 'Node') -> 'Node':\n        # Base case, return early\n        if not node:\n            return None\n        # initialize our nodes hash map. This track whether we have\n        # visited a node or node, as well as gives us access to the \n        # copies. Key: Value -> node.val, node copy.\n        nodes = {node.val : Node(node.val)}\n        # Stack/Queue containing node we are traversing and the copy.\n        stack = [(node, nodes[node.val])]\n        while stack:\n            # pop off the node, and the copy\n            n1, c1 = stack.pop()\n            # traverse the node we popped, neighbors.\n            for n in n1.neighbors:\n                # Get our copy from our hash map, if it doesn't exist\n                # we will create it based on the neighbors value.\n                c2 = nodes.get(n.val, Node(n.val))\n                # if neighbor hasn't been visited yet.\n                if n.val not in nodes:\n                    # add it to the stack to process later\n                    stack.append((n, c2))\n                    # add it to our visited hash map, with reference\n                    # to the copy.\n                    nodes[n.val] = c2\n                # add the neighbor copies to our node copy.\n                c1.neighbors.append(c2)\n        # return the copy of our node. Above we created an undirected\n        # graph, and the copies should all now point to the proper copies.\n        return nodes[node.val]\n")))))}g.isMDXComponent=!0}}]);