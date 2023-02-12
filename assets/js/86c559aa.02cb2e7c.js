"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[46867],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37671:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var r,o=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/average-of-levels-in-binary-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},u="0637 - Average of Levels in Binary Tree (Easy)",p={unversionedId:"0600-0699/average-of-levels-in-binary-tree-medium",id:"0600-0699/average-of-levels-in-binary-tree-medium",title:"0637 - Average of Levels in Binary Tree (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/average-of-levels-in-binary-tree/",source:"@site/solutions/0600-0699/0637-average-of-levels-in-binary-tree-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/average-of-levels-in-binary-tree-medium",permalink:"/solutions/0600-0699/average-of-levels-in-binary-tree-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0637-average-of-levels-in-binary-tree-medium.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:637,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/average-of-levels-in-binary-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0633 - Sum of Square Numbers (Medium)",permalink:"/solutions/0600-0699/sum-of-square-numbers-medium"},next:{title:"0653 - Two Sum IV - Input is a BST (Easy)",permalink:"/solutions/0600-0699/two-sum-IV-input-is-a-BST-easy"}},c={},h=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0637---average-of-levels-in-binary-tree-easy"},"0637 - Average of Levels in Binary Tree (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,i.kt)("em",{parentName:"p"},"the average value of the nodes on each level in the form of an array"),". Answers within ",(0,i.kt)("inlineCode",{parentName:"p"},"10-5")," of the actual answer will be accepted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: [3.00000,14.50000,11.00000]\nExplanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.\nHence return [3, 14.5, 11].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,15,7]\nOutput: [3.00000,14.50000,11.00000]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,i.kt)("inlineCode",{parentName:"li"},"[1, 10^4]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-231 <= Node.val <= 2^31 - 1"))),(0,i.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n// Time Complexity: O(N) where N is the number of nodes in the tree\n// Space Complexity: O(M): where N is the maximum number in the tree at any level\nclass Solution {\npublic:\n    // The idea is to use BFS, which is a common way to traverse the tree level by level\n    // For a standard BFS, we can use queue to push the first root node into a queue\n    // Then remove the front of the queue, add its children to back of the queue\n    // Do the above steps until the queue is empty\n    // In this question, we need to extra thing which is calculate the average value of the nodes on each level\n    // We can simply use `sum` to store the current sum of the nodes, \n    // and calculate the average after processing all the nodes on each level \n    vector<double> averageOfLevels(TreeNode* root) {\n        // Use a queue for perform BFS\n        queue<TreeNode*> q;\n        // Push the root node. \n        // Unlike some other questions, the number of nodes is guaranteed to be [1, 10 ^ 4]\n        // Hence, we don't need to check if it is null or not here\n        q.push(root);\n        // ans[i] is used to store the average values for each level i\n        vector<double> ans;\n        // Do the following logic until the queue is empty\n        while(!q.empty()) {\n            // n is the number of nodes in the current queue\n            int n = q.size();\n            // init the sum to store the total sum of the nodes on this level\n            double sum = 0;\n            // iterate each node on the current level\n            for(int i = 0; i < n; i++) {\n                // get the first node from the queue\n                TreeNode* node = q.front();\n                // then pop it\n                q.pop();\n                // add the value to sum\n                sum += node->val;\n                // add its children to back of the queue here\n                // add the left tree if possible\n                if(node->left) q.push(node->left);\n                // add the right tree if possible\n                if(node->right) q.push(node->right);\n            }\n            // the current level has been processed, calculate the average value for this level\n            ans.push_back(sum / n);\n        }\n        // return the final answer\n        return ans;\n    }\n};\n")))}f.isMDXComponent=!0}}]);