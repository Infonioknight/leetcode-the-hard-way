"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[255],{82839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=t(85893),s=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/create-binary-tree-from-descriptions/"},a="2196 - Create Binary Tree From Descriptions (Medium)",o={id:"2100-2199/create-binary-tree-from-descriptions-medium",title:"2196 - Create Binary Tree From Descriptions (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/create-binary-tree-from-descriptions/",source:"@site/solutions/2100-2199/2196-create-binary-tree-from-descriptions-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/create-binary-tree-from-descriptions-medium",permalink:"/solutions/2100-2199/create-binary-tree-from-descriptions-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2196-create-binary-tree-from-descriptions-medium.md",tags:[],version:"current",sidebarPosition:2196,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/create-binary-tree-from-descriptions/"},sidebar:"tutorialSidebar",previous:{title:"2195 - Append K Integers With Minimal Sum (Medium)",permalink:"/solutions/2100-2199/append-k-integers-with-minimal-sum-medium"},next:{title:"2197 - Replace Non-Coprime Numbers in Array (Hard)",permalink:"/solutions/2100-2199/replace-non-coprime-numbers-in-array-hard"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function l(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2196---create-binary-tree-from-descriptions-medium",children:"2196 - Create Binary Tree From Descriptions (Medium)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/create-binary-tree-from-descriptions/",children:"https://leetcode.com/problems/create-binary-tree-from-descriptions/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given a 2D integer array ",(0,i.jsx)(n.code,{children:"descriptions"})," where ",(0,i.jsx)(n.code,{children:"descriptions[i] = [parent_i, child_i, isLeft_i]"})," indicates that ",(0,i.jsx)(n.code,{children:"parent_i"})," is the ",(0,i.jsx)(n.strong,{children:"parent"})," of ",(0,i.jsx)(n.code,{children:"child_i"})," in a ",(0,i.jsx)(n.strong,{children:"binary"})," tree of ",(0,i.jsx)(n.strong,{children:"unique"})," values. Furthermore,"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"isLeft_i == 1"}),", then ",(0,i.jsx)(n.code,{children:"child_i"})," is the left child of ",(0,i.jsx)(n.code,{children:"parent_i"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"isLeft_i == 0"}),", then ",(0,i.jsx)(n.code,{children:"child_i"})," is the right child of ",(0,i.jsx)(n.code,{children:"parent_i"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Construct the binary tree described by ",(0,i.jsx)(n.code,{children:"descriptions"})," and return ",(0,i.jsxs)(n.em,{children:["its ",(0,i.jsx)(n.strong,{children:"root"})]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The test cases will be generated such that the binary tree is ",(0,i.jsx)(n.strong,{children:"valid"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/02/09/example1drawio.png",alt:""})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]\nOutput: [50,20,80,15,17,19]\nExplanation: The root node is the node with value 50 since it has no parent.\nThe resulting binary tree is shown in the diagram.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/02/09/example2drawio.png",alt:""})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]\nOutput: [1,2,null,null,3,4]\nExplanation: The root node is the node with value 1 since it has no parent.\nThe resulting binary tree is shown in the diagram.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= descriptions.length <= 10^4"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"descriptions[i].length == 3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= parent_i, child_i <= 10^5"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= isLeft_i <= 1"})}),"\n",(0,i.jsxs)(n.li,{children:["The binary tree described by ",(0,i.jsx)(n.code,{children:"descriptions"})," is valid."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,i.jsxs)(n.p,{children:["We use a hash map to store the TreeNode* for the key ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mi,{children:"i"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"i"})]})})]})," and another hash map to store if this TreeNode* has a parent."]}),"\n",(0,i.jsx)(n.p,{children:"We iterate the input to get the values of parent, child and isLeft. Then we check if the parent and the child are in the hash map. If not, we create a new TreeNode for it and store it in hash map."}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mi,{children:"i"}),(0,i.jsx)(n.mi,{children:"s"}),(0,i.jsx)(n.mi,{children:"L"}),(0,i.jsx)(n.mi,{children:"e"}),(0,i.jsx)(n.mi,{children:"f"}),(0,i.jsx)(n.mi,{children:"t"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"isLeft"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]})," is ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsx)(n.mn,{children:"1"})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(n.span,{className:"mord",children:"1"})]})})]}),", that means the child is the left child of parent. Else, the child is the right child of parent."]}),"\n",(0,i.jsx)(n.p,{children:"At the end, we find out the node without parent, return that TreeNode because that is the root."}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    TreeNode* createBinaryTree(vector<vector<int>>& descriptions) {\n        unordered_map<int, TreeNode*> m;\n        unordered_map<TreeNode*, int> hasParent;\n        TreeNode* p = nullptr;\n        TreeNode* c = nullptr;\n        for (auto x : descriptions) {\n            int parent = x[0], child = x[1], isLeft = x[2];\n            // check if TreeNode* for parent is in hash map or not\n            if (m.count(parent)) {\n                // if so, store it in p\n                p = m[parent];\n            } else {\n                // if not, create a new one\n                p = new TreeNode(parent);\n                // and store it in hash map\n                m[parent] = p;\n            }\n            // check if TreeNode* for child is in hash map or not\n            if (m.count(child)) {\n                // if so, store it in c\n                c = m[child];\n            } else {\n                // if not, create a new one\n                c = new TreeNode(child);\n                // and store it in hash map\n                m[child] = c;\n            }\n            // if isLeft is 1, then this child is the left child of this parent\n            if (isLeft) p->left = c;\n            // else this child is the right child of this parent\n            else p->right = c;\n            // mark this child has a parent\n            hasParent[c] = 1;\n        }\n        // search for a TreeNode* without parent\n        for (auto x : m) {\n            // found -> return this TreeNode* as this is the root\n            if (!hasParent.count(x.second)) {\n                return m[x.first];\n            }\n        }\n        // never reach here\n        return nullptr;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);