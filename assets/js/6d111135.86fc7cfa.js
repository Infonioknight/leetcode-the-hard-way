"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),f=u(r),p=o,h=f["".concat(s,".").concat(p)]||f[p]||c[p]||l;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/symmetric-tree/"},i="0101 - Symmetric Tree (Easy)",a={unversionedId:"0100-0199/symmetric-tree-easy",id:"0100-0199/symmetric-tree-easy",title:"0101 - Symmetric Tree (Easy)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/symmetric-tree/",source:"@site/solutions/0100-0199/0101-symmetric-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/symmetric-tree-easy",permalink:"/solutions/0100-0199/symmetric-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0101-symmetric-tree-easy.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/symmetric-tree/"},sidebar:"tutorialSidebar",previous:{title:"0100 - Same Tree (Easy)",permalink:"/solutions/0100-0199/same-tree-easy"},next:{title:"0102 - Binary Tree Level Order Traversal (Medium)",permalink:"/solutions/0100-0199/binary-tree-level-order-traversal-medium"}},s={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2},{value:"Approach 2: Iterative",id:"approach-2-iterative",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},f=m("Tabs"),c=m("TabItem"),p=m("SolutionAuthor"),h={toc:u},d="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0101---symmetric-tree-easy"},"0101 - Symmetric Tree (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/symmetric-tree/"},"https://leetcode.com/problems/symmetric-tree/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, ",(0,o.kt)("em",{parentName:"p"},"check whether it is a mirror of itself")," (i.e., symmetric around its center)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,3,4,4,3]\nOutput: true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,null,3,null,3]\nOutput: false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, 1000]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow up:")," Could you solve it both recursively and iteratively?"),(0,o.kt)("h2",{id:"approach-1-recursive"},"Approach 1: Recursive"),(0,o.kt)("p",null,"A tree is symmetric if the following conditions are satisfied"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"two nodes should have the value "),(0,o.kt)("li",{parentName:"ul"},"the left sub-tree is a reflection of the right sub-tree of the other tree")),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(c,{value:"c++",label:"C++",mdxType:"TabItem"},(0,o.kt)(p,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool f(TreeNode* r1, TreeNode* r2){\n        // if two nodes r null, they are same\n        if(!r1 && !r2) return true;\n        // if one of them r null, they are not same\n        if(!r1 || !r2) return false;\n        // if their values are same, and the sub-nodes are same\n        return (r1->val == r2->val) && f(r1->left, r2->right) && f(r1->right, r2->left);\n    }\n    \n    bool isSymmetric(TreeNode* root) {\n        return f(root, root);\n    }\n};\n"))),(0,o.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(p,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # nodes in the tree\n// Space complexity: O(log(n))\n// Suppose, we have perfectly balanced binary tree, we start with root that N, \n// then next layer we have left & right subtrees so N/2, then next layer is N/4 and so on... \n// Roughly the pattern is (N)+(N/2)+(N/4) +... + (N/N) which is O(logN) same as height O(h) of the tree. \nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        return areSymmetric(root.left, root.right);\n    }\n    \n    public boolean areSymmetric(TreeNode root1, TreeNode root2) {\n        if (root1 == null && root2 == null) return true;\n        // Both nodes should not be null and values should be equal\n        // If not, both are not a valid symmetric tree\n        if (!(root1 != null && root2 != null) || root1.val != root2.val) {\n            return false;\n        }\n        return areSymmetric(root1.left, root2.right) && areSymmetric(root1.right, root2.left);\n    }\n}\n"))),(0,o.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\n        if not root:\n            return True \n        def is_mirror(left, right):\n            # if both nodes are None\n            if not left and not right: return True\n            # if one of them are None\n            if not left or not right: return False\n            # if their values and sub nodes are same\n            if left.val == right.val:\n                return (is_mirror(left.left, right.right) and \n                        is_mirror(left.right, right.left))\n            return False\n        return is_mirror(root.left, root.right)\n"))),(0,o.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(p,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isSymmetric = function(root) {\n    if (!root) {\n        return false;\n    }\n    function is_mirror(left, right) {\n        // if both nodes are None\n        if (!left && !right) return true;\n        // if one of them is None \n        if (!left || !right) return false;\n        // if their values and sub nodes are same\n        if (left.val == right.val) {\n            return (is_mirror(left.left, right.right) &&\n                    is_mirror(left.right, right.left));\n        }\n        return false;   \n    }\n    return is_mirror(root.left, root.right);\n};\n")))),(0,o.kt)("h2",{id:"approach-2-iterative"},"Approach 2: Iterative"),(0,o.kt)("p",null,"A tree is symmetric if the following conditions are satisfied"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"two nodes should have the value "),(0,o.kt)("li",{parentName:"ul"},"the left sub-tree is a reflection of the right sub-tree of the other tree")),(0,o.kt)(f,{mdxType:"Tabs"},(0,o.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(p,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # nodes in the tree\n// Space complexity: O(n)\nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        // ArrayDeque acts as head & tail pointers\n        // Add and remove elements from both sides\n        Deque<TreeNode> stack = new ArrayDeque<>();\n        if (root.left == null && root.right == null) {\n            return true;\n        }\n        if (root.left == null || root.right == null) {\n            return false;\n        }\n        // Add left to head & right to tail in deque\n        stack.offerFirst(root.left);\n        stack.offerLast(root.right);\n        while (!stack.isEmpty()) {\n            TreeNode left = stack.pollFirst();\n            TreeNode right = stack.pollLast();\n            // Compare the value, if not same, not a valid symmetric tree\n            if (left.val != right.val) return false;\n            // Mirror view elements check of both left and right subtree's\n            // If any left and right has one node exists and other doesn't, then it's not valid symmetric tree\n            if ((left.left == null && right.right != null) || (left.left != null && right.right == null)\n                    || (left.right != null && right.left == null) || (left.right == null && right.left != null)) {\n                return false;\n            }\n            if (left.right != null && right.left != null) {\n                stack.offerFirst(left.right);\n                stack.offerLast(right.left);\n            }\n            if (left.left != null && right.right != null) {\n                stack.offerFirst(left.left);\n                stack.offerLast(right.right);\n            }\n        }\n        return true;    \n    }\n}\n")))))}g.isMDXComponent=!0}}]);