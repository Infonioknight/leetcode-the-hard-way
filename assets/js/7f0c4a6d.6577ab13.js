"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},i="501 - Find Mode in Binary Search Tree (Easy)",l={unversionedId:"0500-0599/find-mode-in-binary-search-tree-easy",id:"0500-0599/find-mode-in-binary-search-tree-easy",title:"501 - Find Mode in Binary Search Tree (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/",source:"@site/solutions/0500-0599/0501-find-mode-in-binary-search-tree-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/find-mode-in-binary-search-tree-easy",permalink:"/solutions/0500-0599/find-mode-in-binary-search-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0501-find-mode-in-binary-search-tree-easy.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Binary Search Tree",permalink:"/solutions/tags/binary-search-tree"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:501,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-mode-in-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0500 - 0599",permalink:"/solutions/category/0500---0599"},next:{title:"0508 - Most Frequent Subtree Sum (Medium)",permalink:"/solutions/0500-0599/most-frequent-subtree-sum-medium"}},s={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + Counting",id:"approach-1-dfs--counting",level:2},{value:"Approach 2: DFS Iterative",id:"approach-2-dfs-iterative",level:2},{value:"Approach 3: Breadth First Search (BFS)",id:"approach-3-breadth-first-search-bfs",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("Tabs"),c=d("TabItem"),h=d("SolutionAuthor"),m={toc:u},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"501---find-mode-in-binary-search-tree-easy"},"501 - Find Mode in Binary Search Tree (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-mode-in-binary-search-tree/"},"https://leetcode.com/problems/find-mode-in-binary-search-tree/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of a binary search tree (BST) with duplicates, return ",(0,a.kt)("em",{parentName:"p"},"all the mode(s) (i.e., the most frequently occurred element) in it"),"."),(0,a.kt)("p",null,"If the tree has more than one mode, return them in ",(0,a.kt)("strong",{parentName:"p"},"any order"),"."),(0,a.kt)("p",null,"Assume a BST is defined as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The left subtree of a node contains only nodes with keys ",(0,a.kt)("strong",{parentName:"li"},"less than or equal to")," the node's key."),(0,a.kt)("li",{parentName:"ul"},"The right subtree of a node contains only nodes with keys ",(0,a.kt)("strong",{parentName:"li"},"greater than or equal to")," the node's key."),(0,a.kt)("li",{parentName:"ul"},"Both the left and right subtrees must also be binary search trees.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,null,2,2]\nOutput: [2]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [0]\nOutput: [0]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 10 ^ 4]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10 ^ 5 <= Node.val <= 10 ^ 5"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count)."),(0,a.kt)("h2",{id:"approach-1-dfs--counting"},"Approach 1: DFS + Counting"),(0,a.kt)("p",null,"We can perform DFS to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result."),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    unordered_map<int, int> m;\n    void dfs(TreeNode* root) {\n        // base case\n        if (!root) return;\n        // increase the frequency of root->val by 1\n        m[root->val] += 1;\n        // traverse the left tree\n        dfs(root->left);\n        // traverse the right tree\n        dfs(root->right);\n    }\n    vector<int> findMode(TreeNode* root) {\n        vector<int> ans;\n        // traverse the tree\n        dfs(root);\n        // find the maximum frequency\n        int mx = 0;\n        for (auto &x : m) mx = max(mx, x.second);\n        // build the final answer\n        for (auto &x : m) if (x.second == mx) ans.push_back(x.first);\n        return ans;\n    }\n};\n"))),(0,a.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int[] findMode(TreeNode root) {\n        Map<Integer, Integer> frequency = new HashMap<>();\n        findModeRecursive(root, frequency);\n        // Leetcode compilation issue for Optional class, so used java.util package directly here\n        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);\n        return max.isPresent() \n            ? frequency.entrySet().stream()\n                .filter(entry -> entry.getValue() == max.get())\n                .mapToInt(Map.Entry::getKey)\n                .toArray() \n            : null;\n    }\n\n    private void findModeRecursive(TreeNode node, Map<Integer, Integer> frequency) {\n        if (node == null) return;\n        // Count the frequency\n        frequency.put(node.val, frequency.getOrDefault(node.val, 0) + 1);\n        findModeRecursive(node.left, frequency);\n        findModeRecursive(node.right, frequency);\n    }\n}\n")))),(0,a.kt)("h2",{id:"approach-2-dfs-iterative"},"Approach 2: DFS Iterative"),(0,a.kt)("p",null,"We can perform DFS Iterative to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result."),(0,a.kt)("p",null,"Both DFS Recursive and Iterative approach follows In-Order Traversal techniques."),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int[] findMode(TreeNode root) {\n        Map<Integer, Integer> frequency = new HashMap<>();\n        Stack<TreeNode> stack = new Stack<>();\n        while (root != null || !stack.isEmpty()) {\n            if (root != null) {\n                stack.push(root);\n                root = root.left;\n            } else {\n                int key = stack.peek().val;\n                frequency.put(key, frequency.getOrDefault(key, 0) + 1);\n                root = stack.pop().right;\n            }\n        }\n        // Leetcode compilation issue for Optional class, so used java.util package directly here\n        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);\n        return max.isPresent() \n            ? frequency.entrySet().stream()\n                .filter(entry -> entry.getValue() == max.get())\n                .mapToInt(Map.Entry::getKey)\n                .toArray()\n            : null;\n    }\n}\n")))),(0,a.kt)("h2",{id:"approach-3-breadth-first-search-bfs"},"Approach 3: Breadth First Search (BFS)"),(0,a.kt)("p",null,"We can perform BFS to traverse the tree to get each node value and store in a HashMap. After that, we know the frequencies for each node value and we can find the maximum one and build the final result."),(0,a.kt)("p",null,"Since BFS approach follows Pre-Order Traversal so Queue is used to handle First-In, First-Out (FIFO) technique."),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int[] findMode(TreeNode root) {\n        Map<Integer, Integer> frequency = new HashMap<>();\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.offer(root);\n        while (!queue.isEmpty()) {\n            TreeNode node = queue.poll();\n            frequency.put(node.val, frequency.getOrDefault(node.val, 0) + 1);\n            if (node.left != null) {\n                queue.offer(node.left);\n            }\n            if (node.right != null) {\n                queue.offer(node.right);\n            }\n        }\n        // Leetcode compilation issue for Optional class, so used java.util package directly here\n        java.util.Optional<Integer> max = frequency.values().stream().max(Integer::compare);\n        return max.isPresent() \n            ? frequency.entrySet().stream()\n                .filter(entry -> entry.getValue() == max.get())\n                .mapToInt(Map.Entry::getKey)\n                .toArray()\n            : null;\n    }\n}\n")))))}y.isMDXComponent=!0}}]);