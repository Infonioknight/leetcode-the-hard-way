"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[95456],{55813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=n(85893),o=n(11151);const s={description:"Author: @heiheihang | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"},i="0559 - Maximum Depth of N-ary Tree (Easy)",l={id:"0500-0599/maximum-depth-of-n-ary-tree-easy",title:"0559 - Maximum Depth of N-ary Tree (Easy)",description:"Author: @heiheihang | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",source:"@site/solutions/0500-0599/0559-maximum-depth-of-n-ary-tree-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/maximum-depth-of-n-ary-tree-easy",permalink:"/solutions/0500-0599/maximum-depth-of-n-ary-tree-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0559-maximum-depth-of-n-ary-tree-easy.md",tags:[],version:"current",sidebarPosition:559,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"},sidebar:"tutorialSidebar",previous:{title:"0557 - Reverse Words in a String III (Easy)",permalink:"/solutions/0500-0599/reverse-words-in-a-string-iii-easy"},next:{title:"0560 - Subarray Sum Equals K (Medium)",permalink:"/solutions/0500-0599/subarray-sum-equals-k-medium"}},a={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"0559---maximum-depth-of-n-ary-tree-easy",children:"0559 - Maximum Depth of N-ary Tree (Easy)"}),"\n",(0,r.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",children:"https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"})}),"\n",(0,r.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsx)(t.p,{children:"Given a n-ary tree, find its maximum depth."}),"\n",(0,r.jsx)(t.p,{children:"The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples)."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png",alt:""})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Input: root = [1,null,3,2,4,null,5,6]\nOutput: 3\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png",alt:""})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\nOutput: 5\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The total number of nodes is in the range ",(0,r.jsx)(t.code,{children:"[0, 10^4]"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The depth of the n-ary tree is less than or equal to ",(0,r.jsx)(t.code,{children:"1000"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,r.jsxs)(t.p,{children:["We should use the DFS template from ",(0,r.jsx)(t.a,{href:"../../tutorials/graph-theory/depth-first-search",children:"DFS Guide"}),". Instead of looking at the left and right child, we look at all children in an ",(0,r.jsx)(t.em,{children:"n-ary tree."})," We find the deepest child and set it to the current ",(0,r.jsx)(t.code,{children:"largestDepth"}),", then we add one for counting the depth of the current level."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Note: A ",(0,r.jsx)(t.strong,{children:"binary tree"})," means each node at most has ",(0,r.jsx)(t.strong,{children:"2 children"})," (binary means 2). An ",(0,r.jsx)(t.strong,{children:"n-ary"})," tree means each node at most has ",(0,r.jsx)(t.strong,{children:"n children"})]})}),"\n",(0,r.jsx)(n,{name:"@heiheihang"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def maxDepth(self, root: 'Node') -> int:\n        \n        def dfs(node):\n            #there is a possibility the root is None\n            if(node is None):\n                return 0\n                \n            #initialize the largest depth\n            largestDepth = 0\n            \n            #iterate each child, and update the largest depth if appropriate\n            for child in node.children:\n                largestDepth = max(largestDepth, dfs(child))\n            \n            #don't forget to add the current level height!    \n            return largestDepth + 1\n        \n        #we start iterating from the root\n        return dfs(root)\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);