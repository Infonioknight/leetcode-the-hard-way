"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96077],{31281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=r(85893),i=r(11151);const o={description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/symmetric-tree/"},l="0101 - Symmetric Tree (Easy)",s={id:"0100-0199/symmetric-tree-easy",title:"0101 - Symmetric Tree (Easy)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/symmetric-tree/",source:"@site/solutions/0100-0199/0101-symmetric-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/symmetric-tree-easy",permalink:"/solutions/0100-0199/symmetric-tree-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0101-symmetric-tree-easy.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/symmetric-tree/"},sidebar:"tutorialSidebar",previous:{title:"0100 - Same Tree (Easy)",permalink:"/solutions/0100-0199/same-tree-easy"},next:{title:"0102 - Binary Tree Level Order Traversal (Medium)",permalink:"/solutions/0100-0199/binary-tree-level-order-traversal-medium"}},a={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2},{value:"Approach 2: Iterative",id:"approach-2-iterative",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:r,TabItem:o,Tabs:l}=t;return r||u("SolutionAuthor",!0),o||u("TabItem",!0),l||u("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"0101---symmetric-tree-easy",children:"0101 - Symmetric Tree (Easy)"})}),"\n",(0,n.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/symmetric-tree/",children:"https://leetcode.com/problems/symmetric-tree/"})}),"\n",(0,n.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(t.p,{children:["Given the ",(0,n.jsx)(t.code,{children:"root"})," of a binary tree, ",(0,n.jsx)(t.em,{children:"check whether it is a mirror of itself"})," (i.e., symmetric around its center)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg",alt:""})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Input: root = [1,2,2,3,4,4,3]\nOutput: true\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg",alt:""})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Input: root = [1,2,2,null,3,null,3]\nOutput: false\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The number of nodes in the tree is in the range ",(0,n.jsx)(t.code,{children:"[1, 1000]"}),"."]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"-100 <= Node.val <= 100"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Follow up:"})," Could you solve it both recursively and iteratively?"]}),"\n",(0,n.jsx)(t.h2,{id:"approach-1-recursive",children:"Approach 1: Recursive"}),"\n",(0,n.jsx)(t.p,{children:"A tree is symmetric if the following conditions are satisfied"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"two nodes should have the value"}),"\n",(0,n.jsx)(t.li,{children:"the left sub-tree is a reflection of the right sub-tree of the other tree"}),"\n"]}),"\n",(0,n.jsxs)(l,{children:[(0,n.jsxs)(o,{value:"c++",label:"C++",children:[(0,n.jsx)(r,{name:"@wingkwong"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool f(TreeNode* r1, TreeNode* r2){\n        // if two nodes r null, they are same\n        if(!r1 && !r2) return true;\n        // if one of them r null, they are not same\n        if(!r1 || !r2) return false;\n        // if their values are same, and the sub-nodes are same\n        return (r1->val == r2->val) && f(r1->left, r2->right) && f(r1->right, r2->left);\n    }\n    \n    bool isSymmetric(TreeNode* root) {\n        return f(root, root);\n    }\n};\n"})})]}),(0,n.jsxs)(o,{value:"java",label:"Java",children:[(0,n.jsx)(r,{name:"@vigneshshiv"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # nodes in the tree\n// Space complexity: O(log(n))\n// Suppose, we have perfectly balanced binary tree, we start with root that N, \n// then next layer we have left & right subtrees so N/2, then next layer is N/4 and so on... \n// Roughly the pattern is (N)+(N/2)+(N/4) +... + (N/N) which is O(logN) same as height O(h) of the tree. \nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        return areSymmetric(root.left, root.right);\n    }\n    \n    public boolean areSymmetric(TreeNode root1, TreeNode root2) {\n        if (root1 == null && root2 == null) return true;\n        // Both nodes should not be null and values should be equal\n        // If not, both are not a valid symmetric tree\n        if (!(root1 != null && root2 != null) || root1.val != root2.val) {\n            return false;\n        }\n        return areSymmetric(root1.left, root2.right) && areSymmetric(root1.right, root2.left);\n    }\n}\n"})})]}),(0,n.jsxs)(o,{value:"python",label:"Python",children:[(0,n.jsx)(r,{name:"@radojicic23"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\n        if not root:\n            return True \n        def is_mirror(left, right):\n            # if both nodes are None\n            if not left and not right: return True\n            # if one of them are None\n            if not left or not right: return False\n            # if their values and sub nodes are same\n            if left.val == right.val:\n                return (is_mirror(left.left, right.right) and \n                        is_mirror(left.right, right.left))\n            return False\n        return is_mirror(root.left, root.right)\n"})})]}),(0,n.jsxs)(o,{value:"javascript",label:"JavaScript",children:[(0,n.jsx)(r,{name:"@radojicic23"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isSymmetric = function(root) {\n    if (!root) {\n        return false;\n    }\n    function is_mirror(left, right) {\n        // if both nodes are None\n        if (!left && !right) return true;\n        // if one of them is None \n        if (!left || !right) return false;\n        // if their values and sub nodes are same\n        if (left.val == right.val) {\n            return (is_mirror(left.left, right.right) &&\n                    is_mirror(left.right, right.left));\n        }\n        return false;   \n    }\n    return is_mirror(root.left, root.right);\n};\n"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"approach-2-iterative",children:"Approach 2: Iterative"}),"\n",(0,n.jsx)(t.p,{children:"A tree is symmetric if the following conditions are satisfied"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"two nodes should have the value"}),"\n",(0,n.jsx)(t.li,{children:"the left sub-tree is a reflection of the right sub-tree of the other tree"}),"\n"]}),"\n",(0,n.jsx)(l,{children:(0,n.jsxs)(o,{value:"java",label:"Java",children:[(0,n.jsx)(r,{name:"@vigneshshiv"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # nodes in the tree\n// Space complexity: O(n)\nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        // ArrayDeque acts as head & tail pointers\n        // Add and remove elements from both sides\n        Deque<TreeNode> stack = new ArrayDeque<>();\n        if (root.left == null && root.right == null) {\n            return true;\n        }\n        if (root.left == null || root.right == null) {\n            return false;\n        }\n        // Add left to head & right to tail in deque\n        stack.offerFirst(root.left);\n        stack.offerLast(root.right);\n        while (!stack.isEmpty()) {\n            TreeNode left = stack.pollFirst();\n            TreeNode right = stack.pollLast();\n            // Compare the value, if not same, not a valid symmetric tree\n            if (left.val != right.val) return false;\n            // Mirror view elements check of both left and right subtree's\n            // If any left and right has one node exists and other doesn't, then it's not valid symmetric tree\n            if ((left.left == null && right.right != null) || (left.left != null && right.right == null)\n                    || (left.right != null && right.left == null) || (left.right == null && right.left != null)) {\n                return false;\n            }\n            if (left.right != null && right.left != null) {\n                stack.offerFirst(left.right);\n                stack.offerLast(right.left);\n            }\n            if (left.left != null && right.right != null) {\n                stack.offerFirst(left.left);\n                stack.offerLast(right.right);\n            }\n        }\n        return true;    \n    }\n}\n"})})]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>l});var n=r(67294);const i={},o=n.createContext(i);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);