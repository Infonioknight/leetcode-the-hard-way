"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[55675],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var h=n.createContext({}),s=function(e){var t=n.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(h.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,h=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(h,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,suggestedProblems:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Depth First Search (DFS)",description:"In DFS, we aim to finish one branch before looking at other branches.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","depth first search","dfs","algorithm"]},i=void 0,l={unversionedId:"graph-theory/depth-first-search",id:"graph-theory/depth-first-search",title:"Depth First Search (DFS)",description:"In DFS, we aim to finish one branch before looking at other branches.",source:"@site/tutorials/graph-theory/depth-first-search.md",sourceDirName:"graph-theory",slug:"/graph-theory/depth-first-search",permalink:"/tutorials/graph-theory/depth-first-search",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/depth-first-search.md",tags:[],version:"current",frontMatter:{title:"Depth First Search (DFS)",description:"In DFS, we aim to finish one branch before looking at other branches.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","depth first search","dfs","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Breadth First Search (BFS)",permalink:"/tutorials/graph-theory/breadth-first-search"},next:{title:"Dijkstra's Algorithm",permalink:"/tutorials/graph-theory/dijkstra"}},h={},s=[{value:"Overview",id:"overview",level:2}],p=[{problemName:"0404 - Sum of Left Leaves",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/sum-of-left-leaves/",solutionLink:"../../solutions/0400-0499/sum-of-left-leaves-easy"},{problemName:"0110 - Balanced Binary Tree",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/balanced-binary-tree/",solutionLink:"../../solutions/0100-0199/balanced-binary-tree-easy"},{problemName:"0559 - Maximum Depth of N-ary Tree",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",solutionLink:"../../solutions/0500-0599/maximum-depth-of-n-ary-tree-easy"}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=d("TutorialAuthors"),m=d("Table"),f={toc:s,suggestedProblems:p},u="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{names:"@heiheihang",mdxType:"TutorialAuthors"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In Depth-First Search (DFS), we aim to finish one branch before looking at other branches."),(0,o.kt)("p",null,"A good example of DFS is the following problem (",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},"LeetCode Link"),"):"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,o.kt)("em",{parentName:"p"},"its maximum depth"),"."),(0,o.kt)("p",{parentName:"blockquote"},"A binary tree's ",(0,o.kt)("strong",{parentName:"p"},"maximum depth")," is the number of nodes along the longest path from the root node down to the farthest leaf node.")),(0,o.kt)("p",null,"We want to know how ",(0,o.kt)("strong",{parentName:"p"},"far")," we can travel from the root, so we try one path at a time. (Of course, this problem can be solved by Breadth-First-Search , but DFS is more intuitive)"),(0,o.kt)("p",null,"DFS can be implemented in the following way"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def dfs(node):\n    if(node == None):\n        # we stop when node is invalid\n        return\n        \n    # explore left branch first\n    dfs(node.left)\n    \n    # evalute current node\n    print("I just visited the left branch!")\n    print("I am number: " + str(node.val))\n    print("I am visiting the right branch now!")\n    \n    # explore right branch\n    dfs(node.right)\n')),(0,o.kt)("p",null,"With this template of DFS, we can modify the function above to obtain the depth of each branch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def findMaximumDepth(root):\n\n    def dfs(node):\n        if(node == None):\n            # we stop when node is invalid\n            return 0\n            \n        # explore left branch first\n        left_branch_depth = dfs(node.left)\n        \n        print("I just visited the left branch!")\n        print("I am visiting the right branch now!")\n        \n        # explore right branch\n        right_branch_depth = dfs(node.right)\n        \n        # return the larger depth of the two branches\n        return max(left_branch_depth, right_branch_depth) + 1\n    \n    return dfs(root)\n')),(0,o.kt)("p",null,"There we go! This is a simple DFS problem. We are going to work through a few more DFS problems together."),(0,o.kt)("p",null,"Let's look at another problem (",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/diameter-of-binary-tree/"},"LeetCode Link"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,o.kt)("em",{parentName:"p"},"the length of the ",(0,o.kt)("strong",{parentName:"em"},"diameter")," of the tree"),"."),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("strong",{parentName:"p"},"diameter")," of a binary tree is the ",(0,o.kt)("strong",{parentName:"p"},"length")," of the longest path between any two nodes in a tree. This path may or may not pass through the ",(0,o.kt)("inlineCode",{parentName:"p"},"root"),"."),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("strong",{parentName:"p"},"length")," of a path between two nodes is represented by the number of edges between them.")),(0,o.kt)("p",null,"This problem may seem difficult at first glance. However it is just a minor tweak from the previous problem. The longest path between two nodes would be the sum of the maximum depth of the left branch and that of the right branch. Modify the code above before you look at the solution below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def findTreeDiameter(root):\n    diameter = 0\n\n    def dfs(node):\n        if(node == None):\n            # we stop when node is invalid\n            return 0\n            \n        # explore left branch first\n        left_branch_depth = dfs(node.left)\n        \n        print("I just visited the left branch!")\n        print("I am visiting the right branch now!")\n        \n        # explore right branch\n        right_branch_depth = dfs(node.right)\n        \n        #the longest path at the current node is the maximum depth of left and right\n        local_diameter = left_brach_depth + right_branch_depth + 1\n        \n        #update the global variable\n        nonlocal diameter\n        diameter = max(diameter, local_diameter)\n        \n        # return the larger depth of the two branches\n        return max(left_branch_depth, right_branch_depth) + 1\n    \n    dfs(root)\n    \n    return diameter\n')),(0,o.kt)("p",null,"Here are some similar problems in which you can tweak the template above to obtain a solution."),(0,o.kt)(m,{title:"Suggested Problems",data:p,mdxType:"Table"}))}b.isMDXComponent=!0}}]);