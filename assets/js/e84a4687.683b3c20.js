"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[56436],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,v=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return t?n.createElement(v,o(o({ref:r},c),{},{components:t})):n.createElement(v,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},24176:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={description:"Author: @TBC | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},p="0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",u={unversionedId:"0100-0199/binary-tree-zigzag-level-order-traversal-medium",id:"0100-0199/binary-tree-zigzag-level-order-traversal-medium",title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",description:"Author: @TBC | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",source:"@site/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/binary-tree-zigzag-level-order-traversal-medium",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},sidebar:"tutorialSidebar",previous:{title:"0102 - Binary Tree Level Order Traversal (Medium)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-level-order-traversal-medium"},next:{title:"0104 - Maximum Depth of Binary Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/maximum-depth-of-binary-tree-easy"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],s={toc:m};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"0103----binary-tree-zigzag-level-order-traversal-medium"},"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)"),(0,l.kt)("h2",{id:"problem-link"},"Problem Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/")),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"Given the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,l.kt)("em",{parentName:"p"},"the zigzag level order traversal of its nodes' values"),". (i.e., from left to right, then right to left for the next level and alternate between)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[20,9],[15,7]]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [1]\nOutput: [[1]]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = []\nOutput: []\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,l.kt)("inlineCode",{parentName:"li"},"[0, 2000]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,l.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0}}]);