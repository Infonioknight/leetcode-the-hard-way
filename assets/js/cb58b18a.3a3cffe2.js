"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[20572],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,d=u["".concat(p,".").concat(c)]||u[c]||h[c]||s;return a?n.createElement(d,m(m({ref:t},i),{},{components:a})):n.createElement(d,m({ref:t},i))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var l=2;l<s;l++)m[l]=a[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96155:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),m=["components"],o={description:"Author: @ColeB2 | https://leetcode.com/problems/binary-tree-maximum-path-sum/",tags:["Dynamic Programming","Tree","Depth-First Search","Binary Tree"]},p="0124 - Binary Tree Maximum Path Sum (Hard)",l={unversionedId:"0100-0199/binary-tree-maximum-path-sum-hard",id:"0100-0199/binary-tree-maximum-path-sum-hard",title:"0124 - Binary Tree Maximum Path Sum (Hard)",description:"Author: @ColeB2 | https://leetcode.com/problems/binary-tree-maximum-path-sum/",source:"@site/solutions/0100-0199/0124-binary-tree-maximum-path-sum-hard.md",sourceDirName:"0100-0199",slug:"/0100-0199/binary-tree-maximum-path-sum-hard",permalink:"/solutions/0100-0199/binary-tree-maximum-path-sum-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0124-binary-tree-maximum-path-sum-hard.md",tags:[{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:124,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/binary-tree-maximum-path-sum/",tags:["Dynamic Programming","Tree","Depth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0121 - Best Time to Buy and Sell Stock (Easy)",permalink:"/solutions/0100-0199/best-time-to-buy-and-sell-stock-easy"},next:{title:"0125 - Valid Palindrome (Easy)",permalink:"/solutions/0100-0199/valid-palindrome"}},i={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Depth-First Search",id:"approach-1-depth-first-search",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},c=u("Tabs"),d=u("TabItem"),k=u("SolutionAuthor"),N={toc:h};function f(e){var t=e.components,a=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0124---binary-tree-maximum-path-sum-hard"},"0124 - Binary Tree Maximum Path Sum (Hard)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-maximum-path-sum/"},"https://leetcode.com/problems/binary-tree-maximum-path-sum/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"path")," in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence ",(0,s.kt)("strong",{parentName:"p"},"at most once"),". Note that the path does not need to pass through the root."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"path sum")," of a path is the sum of the node's values in the path."),(0,s.kt)("p",null,"Given the ",(0,s.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,s.kt)("em",{parentName:"p"},"the maximum ",(0,s.kt)("strong",{parentName:"em"},"path sum")," of any non-empty path"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: root = [1,2,3]\nOutput: 6\nExplanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: root = [-10,9,20,null,null,15,7]\nOutput: 42\nExplanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,s.kt)("inlineCode",{parentName:"li"},"[1, 3 * 10^4]"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-1000 <= Node.val <= 1000"))),(0,s.kt)("h2",{id:"approach-1-depth-first-search"},"Approach 1: Depth-First Search"),(0,s.kt)("p",null,"The easiest approach is going to be able to pass up values from the bottom up. That makes this a good reason to use a recursive depth-first search. We can reach the bottom of the tree, then pass up the max path from the left and right nodes."),(0,s.kt)("p",null,"The only other little trick is knowing that the max path sum can only contain 2 edges means the path may not reach straight up to the root. So we must also update a global max with our local max. This would be the current node, plus both subtrees values. We won't pass this one up, but it may still possibly be the max path."),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", we must process each node in the binary tree."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(h)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", we are using a recursive DFS, so it will scale with the high of the tree to track our recursive call stack. This means in the worst case ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," will be equal to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        # initialize a variable to track max path. We will start with our root\n        # value, as that is a possible path.\n        max_path_sum = root.val\n        def helper(node: Optional[TreeNode]) -> int:\n            #base case - reach null node, return 0.\n            if not node:\n                return 0\n            # nonlocal brings our max_path_sum variable into function\n            nonlocal max_path_sum\n            # recursively get max path of our left and right subtrees\n            left = helper(node.left)\n            right = helper(node.right)\n            # select the larger path of the left/right trees.\n            local_max_path = max(left, right)\n            # return path value --\x3e update it with our node value\n            # if and only if our local max is positive. Otherwise\n            # we will just use our node value as local max.\n            path = local_max_path + node.val if local_max_path > 0 else node.val\n            # Update our global max, we will use 3 parameters. Local max that we are\n            # going to pass up, the global max, and lastly, the path from the\n            # current node that goes both left and right.\n            max_path_sum = max(path, max_path_sum, (left+right+node.val))\n            # we can't pass up the value that goes both left and right,\n            # so we pass up our path variable which is the current node\n            # and/or the max path of the left/right trees, if non-negative.\n            return path\n        # call our helper function and return our answer.\n        helper(root)\n        return max_path_sum\n")))))}f.isMDXComponent=!0}}]);