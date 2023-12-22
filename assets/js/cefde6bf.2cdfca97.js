"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69576],{34042:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=s(85893),a=s(11151);const r={description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/same-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},l="0100 - Same Tree (Easy)",i={id:"0100-0199/same-tree-easy",title:"0100 - Same Tree (Easy)",description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/same-tree/",source:"@site/solutions/0100-0199/0100-same-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/same-tree-easy",permalink:"/solutions/0100-0199/same-tree-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0100-same-tree-easy.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:100,frontMatter:{description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/same-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0100 - 0199",permalink:"/solutions/category/0100---0199"},next:{title:"0101 - Symmetric Tree (Easy)",permalink:"/solutions/0100-0199/symmetric-tree-easy"}},h={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive Depth-First Search",id:"approach-1-recursive-depth-first-search",level:2},{value:"Approach 2: Iterative Depth-First Search",id:"approach-2-iterative-depth-first-search",level:2}];function c(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:s,TabItem:r,Tabs:l}=n;return s||m("SolutionAuthor",!0),r||m("TabItem",!0),l||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0100---same-tree-easy",children:"0100 - Same Tree (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/same-tree/",children:"https://leetcode.com/problems/same-tree/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given the roots of two binary trees ",(0,t.jsx)(n.code,{children:"p"})," and ",(0,t.jsx)(n.code,{children:"q"}),", write a function to check if they are the same or not."]}),"\n",(0,t.jsx)(n.p,{children:"Two binary trees are considered the same if they are structurally identical, and the nodes have the same value."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: p = [1,2,3], q = [1,2,3]\nOutput: true\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: p = [1,2], q = [1,null,2]\nOutput: false\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: p = [1,2,1], q = [1,1,2]\nOutput: false\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The number of nodes in both trees is in the range ",(0,t.jsx)(n.code,{children:"[0, 100]"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-10^4 <= Node.val <= 10^4"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-recursive-depth-first-search",children:"Approach 1: Recursive Depth-First Search"}),"\n",(0,t.jsxs)(n.p,{children:["Very simply, a tree, ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"p"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"p"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"p"})]})})]})," is the same as a tree, ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"q"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," if the structure of both trees is identical, and the values of the nodes are the same. Meaning at each step we must make sure:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"p and q are both currently nodes, and their values are equal. If so, we can continue to check their subtrees."}),"\n",(0,t.jsx)(n.li,{children:"If 1 isn't true. Then check if they are null nodes. If so we can return True. If one is null and the other isn't then we must return False."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We can do the above as a recursive DFS solution."}),"\n",(0,t.jsxs)(n.p,{children:["Time Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where n is the number of nodes in p/q. Since in the worst case, they will be completely similar trees, except for 1 child node, we will have to traverse each node in each tree."]}),"\n",(0,t.jsxs)(n.p,{children:["Space Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(h)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where h is the height of the tree. As by using a recursive DFS solution, we will only ever hold the current path inside our recursive call start, which will scale with the height of the tree."]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(r,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@ColeB2"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        # Check that p exists, q exists, and if they both exist that the values\n        # of the nodes are equal.\n        if p and q and p.val == q.val:\n            # If they are equal, recursively check left sub-tree of each node\n            # together and the right sub-tree of each node together.\n            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right,q.right)\n        # If above is false, we must check to see if they are either both null\n        # nodes, or if 1 is a child node and the other isn't\n        # In Python p is q will handle both cases.\n        # if both are None --\x3e return True\n        # if 1 is a node and the other is None, it will return False.\n        return p is q\n"})})]}),(0,t.jsxs)(r,{value:"js",label:"JavaScript",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function(p, q) {\n    // if both of them are empty\n    if (!p && !q) return true;\n    // if one of them is empty \n    // if the values are not the same\n    if (!p || !q || p.val != q.val) return false;\n    // recursive call\n    // are left and right subtree equal\n    return (isSameTree(p.left, q.left) && \n            isSameTree(p.right, q.right));\n};\n"})})]}),(0,t.jsxs)(r,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // if both of them are empty\n        if (!p && !q) {\n            return true;\n        }\n        // if one of them is empty \n        // if the values are not the same\n        if (!p || !q || p->val != q->val) {\n            return false;\n        }\n        // recursive call\n        // are left and right subtree equal\n        return (isSameTree(p->left, q->left) &&\n                isSameTree(p->right, q->right));\n    }\n};\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-iterative-depth-first-search",children:"Approach 2: Iterative Depth-First Search"}),"\n",(0,t.jsx)(n.p,{children:"Similar to the recursive approach above, we just have to create and maintain our own stack instead of utilizing the call stack."}),"\n",(0,t.jsxs)(n.p,{children:["Time Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," similar to above, we must traverse each node of p/q to check they are the same."]}),"\n",(0,t.jsxs)(n.p,{children:["Space Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"h"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(h)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," also similarly, although with our own stack, we will only ever have the current path we are traversing in the stack."]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(r,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@ColeB2"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        # initialize our own stack to maintain, start with tuple of (p,q)\n        stack = [(p,q)]\n        # while the stack contains values:\n        while stack:\n            # pop of the nodes and assign them to two variables, we will use n,m.\n            n,m = stack.pop()\n            # if n and m are both nodes and the values are equal:\n            if n and m and n.val == m.val:\n                # add left sub-tree of n and m to the stack\n                stack.append((n.left, m.left))\n                # add right sub-tree of n and m to the stack\n                stack.append((n.right, m.right))\n            # if n does not equal m. Meaning either:\n            # n/m is a null node and the other isn't\n            # or both n and m have different values.\n            elif n != m:\n                # terminate early, return False\n                return False\n        # made it through the loop with no termination, which means the trees are\n        # the same. return True.\n        return True\n"})})]}),(0,t.jsxs)(r,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        stack<pair<TreeNode*, TreeNode*>> st;\n        st.push({p, q});\n        while (!st.empty()) {\n            auto [node1, node2] = st.top();\n            st.pop();\n            if (!node1 && !node2) continue;\n            if (!node1 || !node2 || node1->val != node2->val) {\n                return false;\n            } else {\n                st.push({node1->left, node2->left});\n                st.push({node1->right, node2->right});\n            }\n        }\n        return true;\n    }\n};\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);