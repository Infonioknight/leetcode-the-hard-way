"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[56436],{54604:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=n(85893),i=n(11151);const l={description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",tags:["Tree","Breadth-First Search","Binary Tree"]},o="0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",a={id:"0100-0199/binary-tree-zigzag-level-order-traversal-medium",title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",source:"@site/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/binary-tree-zigzag-level-order-traversal-medium",permalink:"/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:103,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",tags:["Tree","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0102 - Binary Tree Level Order Traversal (Medium)",permalink:"/solutions/0100-0199/binary-tree-level-order-traversal-medium"},next:{title:"0104 - Maximum Depth of Binary Tree (Easy)",permalink:"/solutions/0100-0199/maximum-depth-of-binary-tree-easy"}},s={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:n,TabItem:l,Tabs:o}=r;return n||u("SolutionAuthor",!0),l||u("TabItem",!0),o||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"0103----binary-tree-zigzag-level-order-traversal-medium",children:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)"}),"\n",(0,t.jsx)(r.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",children:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"})}),"\n",(0,t.jsx)(r.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(r.p,{children:["Given the ",(0,t.jsx)(r.code,{children:"root"})," of a binary tree, return ",(0,t.jsx)(r.em,{children:"the zigzag level order traversal of its nodes' values"}),". (i.e., from left to right, then right to left for the next level and alternate between)."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg",alt:""})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[20,9],[15,7]]\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Input: root = [1]\nOutput: [[1]]\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Input: root = []\nOutput: []\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The number of nodes in the tree is in the range ",(0,t.jsx)(r.code,{children:"[0, 2000]"}),"."]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"-100 <= Node.val <= 100"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"approach-1-bfs",children:"Approach 1: BFS"}),"\n",(0,t.jsx)(o,{children:(0,t.jsxs)(l,{value:"py",label:"Python",children:[(0,t.jsx)(n,{name:"@wingkwong"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    # Level traversal -> BFS\n    # reverse the list for odd-index level\n    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        # if there is no root, then return []\n        if not root: return []\n        # init ans and queue with initial node `root`\n        ans, q = [], [root]\n        # BFS\n        while q:\n            # direction - 1 for even-index level and -1 for odd-index level\n            d = -1 if len(ans) % 2 == 1 else 1\n            # put all node values to a list with the correct direction \n            # and add to `ans` \n            ans.append([n.val for n in q][::d])\n            # for each node in the queue, \n            # we add the left or right node to the queue if applicable\n            q = [n for node in q for n in (node.left, node.right) if n]\n        return ans\n"})})]})})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>o});var t=n(67294);const i={},l=t.createContext(i);function o(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);