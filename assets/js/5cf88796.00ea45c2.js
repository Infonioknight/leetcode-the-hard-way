"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[78302],{69807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(85893),o=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",tags:["Tree","Depth-First Search","Binary Tree"]},i="0298 - Binary Tree Longest Consecutive Sequence (Medium)",l={id:"0200-0299/binary-tree-longest-consecutive-sequence-medium",title:"0298 - Binary Tree Longest Consecutive Sequence (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",source:"@site/solutions/0200-0299/0298-binary-tree-longest-consecutive-sequence-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/binary-tree-longest-consecutive-sequence-medium",permalink:"/solutions/0200-0299/binary-tree-longest-consecutive-sequence-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0298-binary-tree-longest-consecutive-sequence-medium.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:298,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",tags:["Tree","Depth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0297 - Serialize and Deserialize Binary Tree (Hard)",permalink:"/solutions/0200-0299/serialize-and-deserialize-binary-tree-hard"},next:{title:"0299 - Bulls and Cows (Medium)",permalink:"/solutions/0200-0299/bulls-and-cows-medium"}},a={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"0298---binary-tree-longest-consecutive-sequence-medium",children:"0298 - Binary Tree Longest Consecutive Sequence (Medium)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given the ",(0,r.jsx)(n.code,{children:"root"})," of a binary tree, return ",(0,r.jsxs)(n.em,{children:["the length of the longest ",(0,r.jsx)(n.strong,{children:"consecutive sequence path"})]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"consecutive sequence path"})," is a path where the values ",(0,r.jsx)(n.strong,{children:"increase by one"})," along the path."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that the path can start ",(0,r.jsx)(n.strong,{children:"at any node"})," in the tree, and you cannot go from a node to its parent in the path."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: root = [1,null,3,2,4,null,null,null,5]\nOutput: 3\nExplanation: Longest consecutive sequence path is 3-4-5, so return 3.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: root = [2,null,3,2,null,1]\nOutput: 2\nExplanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The number of nodes in the tree is in the range ",(0,r.jsx)(n.code,{children:"[1, 3 * 10^4]"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"-3 * 104 <= Node.val <= 3 * 10^4"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,r.jsx)(t,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n// Time Complexity: O(N) where N is the number of node\n// Space Complexity: O(H) where H is the number of the level. In worst case, H would be N if there is only one path\nclass Solution {\npublic:\n    int longestConsecutive(TreeNode* root, int len = 0, TreeNode* parent = nullptr) {\n        // if root is nullptr, we return the current length\n        if (!root) return len;\n        // if the current node has a parent node,\n        // and the value of the current node is that of parent node plus one\n        // then we increase len\n        if (parent && root->val == parent->val + 1) len += 1;\n        // otherwise, we need to reset the len\n        else len = 1;\n        // then we calculate the result of left sub-tree and right sub-tree\n        // compare with the current len and take the maximum one\n        return max({\n            // max len at current level\n            len,\n            // max len from left sub-tree\n            longestConsecutive(root->left, len, root),\n            // max len from right sub-tree\n            longestConsecutive(root->right, len, root)\n        });\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);