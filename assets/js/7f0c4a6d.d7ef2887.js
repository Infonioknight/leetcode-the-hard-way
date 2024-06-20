"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2462],{77722:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(85893),a=r(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},o="0501 - Find Mode in Binary Search Tree (Easy)",s={id:"0500-0599/find-mode-in-binary-search-tree-easy",title:"0501 - Find Mode in Binary Search Tree (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/",source:"@site/solutions/0500-0599/0501-find-mode-in-binary-search-tree-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/find-mode-in-binary-search-tree-easy",permalink:"/solutions/0500-0599/find-mode-in-binary-search-tree-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0501-find-mode-in-binary-search-tree-easy.md",tags:[{inline:!0,label:"Tree",permalink:"/solutions/tags/tree"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Binary Search Tree",permalink:"/solutions/tags/binary-search-tree"},{inline:!0,label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:501,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0500 - 0599",permalink:"/solutions/category/0500---0599"},next:{title:"0508 - Most Frequent Subtree Sum (Medium)",permalink:"/solutions/0500-0599/most-frequent-subtree-sum-medium"}},l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + Counting",id:"approach-1-dfs--counting",level:2},{value:"Approach 2: DFS Iterative",id:"approach-2-dfs-iterative",level:2},{value:"Approach 3: Breadth First Search (BFS)",id:"approach-3-breadth-first-search-bfs",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:r,TabItem:i,Tabs:o}=n;return r||u("SolutionAuthor",!0),i||u("TabItem",!0),o||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0501---find-mode-in-binary-search-tree-easy",children:"0501 - Find Mode in Binary Search Tree (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/find-mode-in-binary-search-tree/",children:"https://leetcode.com/problems/find-mode-in-binary-search-tree/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given the ",(0,t.jsx)(n.code,{children:"root"})," of a binary search tree (BST) with duplicates, return ",(0,t.jsx)(n.em,{children:"all the mode(s) (i.e., the most frequently occurred element) in it"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If the tree has more than one mode, return them in ",(0,t.jsx)(n.strong,{children:"any order"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Assume a BST is defined as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The left subtree of a node contains only nodes with keys ",(0,t.jsx)(n.strong,{children:"less than or equal to"})," the node's key."]}),"\n",(0,t.jsxs)(n.li,{children:["The right subtree of a node contains only nodes with keys ",(0,t.jsx)(n.strong,{children:"greater than or equal to"})," the node's key."]}),"\n",(0,t.jsx)(n.li,{children:"Both the left and right subtrees must also be binary search trees."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: root = [1,null,2,2]\nOutput: [2]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: root = [0]\nOutput: [0]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The number of nodes in the tree is in the range ",(0,t.jsx)(n.code,{children:"[1, 10 ^ 4]"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-10 ^ 5 <= Node.val <= 10 ^ 5"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Follow up:"})," Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count)."]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-dfs--counting",children:"Approach 1: DFS + Counting"}),"\n",(0,t.jsx)(n.p,{children:"We can perform DFS to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result."}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    unordered_map<int, int> m;\n    void dfs(TreeNode* root) {\n        // base case\n        if (!root) return;\n        // increase the frequency of root->val by 1\n        m[root->val] += 1;\n        // traverse the left tree\n        dfs(root->left);\n        // traverse the right tree\n        dfs(root->right);\n    }\n    vector<int> findMode(TreeNode* root) {\n        vector<int> ans;\n        // traverse the tree\n        dfs(root);\n        // find the maximum frequency\n        int mx = 0;\n        for (auto &x : m) mx = max(mx, x.second);\n        // build the final answer\n        for (auto &x : m) if (x.second == mx) ans.push_back(x.first);\n        return ans;\n    }\n};\n"})})]}),(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(r,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int[] findMode(TreeNode root) {\n        Map<Integer, Integer> frequency = new HashMap<>();\n        findModeRecursive(root, frequency);\n        // Leetcode compilation issue for Optional class, so used java.util package directly here\n        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);\n        return max.isPresent() \n            ? frequency.entrySet().stream()\n                .filter(entry -> entry.getValue() == max.get())\n                .mapToInt(Map.Entry::getKey)\n                .toArray() \n            : null;\n    }\n\n    private void findModeRecursive(TreeNode node, Map<Integer, Integer> frequency) {\n        if (node == null) return;\n        // Count the frequency\n        frequency.put(node.val, frequency.getOrDefault(node.val, 0) + 1);\n        findModeRecursive(node.left, frequency);\n        findModeRecursive(node.right, frequency);\n    }\n}\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-dfs-iterative",children:"Approach 2: DFS Iterative"}),"\n",(0,t.jsx)(n.p,{children:"We can perform DFS Iterative to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result."}),"\n",(0,t.jsx)(n.p,{children:"Both DFS Recursive and Iterative approach follows In-Order Traversal techniques."}),"\n",(0,t.jsx)(o,{children:(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(r,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int[] findMode(TreeNode root) {\n        Map<Integer, Integer> frequency = new HashMap<>();\n        Stack<TreeNode> stack = new Stack<>();\n        while (root != null || !stack.isEmpty()) {\n            if (root != null) {\n                stack.push(root);\n                root = root.left;\n            } else {\n                int key = stack.peek().val;\n                frequency.put(key, frequency.getOrDefault(key, 0) + 1);\n                root = stack.pop().right;\n            }\n        }\n        // Leetcode compilation issue for Optional class, so used java.util package directly here\n        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);\n        return max.isPresent() \n            ? frequency.entrySet().stream()\n                .filter(entry -> entry.getValue() == max.get())\n                .mapToInt(Map.Entry::getKey)\n                .toArray()\n            : null;\n    }\n}\n"})})]})}),"\n",(0,t.jsx)(n.h2,{id:"approach-3-breadth-first-search-bfs",children:"Approach 3: Breadth First Search (BFS)"}),"\n",(0,t.jsx)(n.p,{children:"We can perform BFS to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result."}),"\n",(0,t.jsx)(n.p,{children:"Since BFS approach follows Pre-Order Traversal so Queue is used to handle First-In, First-Out (FIFO) technique."}),"\n",(0,t.jsx)(o,{children:(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(r,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int[] findMode(TreeNode root) {\n        Map<Integer, Integer> frequency = new HashMap<>();\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.offer(root);\n        while (!queue.isEmpty()) {\n            TreeNode node = queue.poll();\n            frequency.put(node.val, frequency.getOrDefault(node.val, 0) + 1);\n            if (node.left != null) {\n                queue.offer(node.left);\n            }\n            if (node.right != null) {\n                queue.offer(node.right);\n            }\n        }\n        // Leetcode compilation issue for Optional class, so used java.util package directly here\n        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);\n        return max.isPresent() \n            ? frequency.entrySet().stream()\n                .filter(entry -> entry.getValue() == max.get())\n                .mapToInt(Map.Entry::getKey)\n                .toArray()\n            : null;\n    }\n}\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);