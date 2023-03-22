"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45766],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,m=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),d=i,g=s["".concat(m,".").concat(d)]||s[d]||c[d]||o;return n?r.createElement(g,a(a({ref:e},u),{},{components:n})):r.createElement(g,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66374:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-image/",tags:["Array","Math","Matrix"]},m="0048 - Rotate Image (Medium)",p={unversionedId:"0000-0099/rotate-image-medium",id:"0000-0099/rotate-image-medium",title:"0048 - Rotate Image (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-image/",source:"@site/solutions/0000-0099/0048-rotate-image-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/rotate-image-medium",permalink:"/solutions/0000-0099/rotate-image-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0048-rotate-image-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Math",permalink:"/solutions/tags/math"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:48,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-image/",tags:["Array","Math","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0046 - Permutations (Medium)",permalink:"/solutions/0000-0099/permutations-medium"},next:{title:"0049 - Group Anagrams (Medium)",permalink:"/solutions/0000-0099/group-anagrams-medium"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Rotate 4 Cells in a Round",id:"approach-1-rotate-4-cells-in-a-round",level:2}],s=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}},d=s("Tabs"),g=s("TabItem"),f=s("SolutionAuthor"),h={toc:c};function b(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0048---rotate-image-medium"},"0048 - Rotate Image (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rotate-image/"},"https://leetcode.com/problems/rotate-image/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an ",(0,o.kt)("inlineCode",{parentName:"p"},"n x n")," 2D ",(0,o.kt)("inlineCode",{parentName:"p"},"matrix")," representing an image, rotate the image by ",(0,o.kt)("strong",{parentName:"p"},"90")," degrees (clockwise)."),(0,o.kt)("p",null,"You have to rotate the image ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/In-place_algorithm"},(0,o.kt)("strong",{parentName:"a"},"in-place")),", which means you have to modify the input 2D matrix directly. ",(0,o.kt)("strong",{parentName:"p"},"DO NOT")," allocate another 2D matrix and do the rotation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\nOutput: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == matrix.length == matrix[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-1000 <= matrix[i][j] <= 1000"))),(0,o.kt)("h2",{id:"approach-1-rotate-4-cells-in-a-round"},"Approach 1: Rotate 4 Cells in a Round"),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        // round 1:\n        // -------------------\n        // tmp <- 1\n        // top left cell matrix[i][j] (1) <- bottom left 7 cell (matrix[n - j - 1][i])\n        // bottom left 7 cell (matrix[n - j - 1][i]) <- bottom right cell 9 (matrix[n - i - 1][n - j - 1])\n        // bottom right cell 9 (matrix[n - i - 1][n - j - 1]) <- top right cell 3 (matrix[j][n - i - 1])\n        // top right cell 3 (matrix[j][n - i - 1]) <- 1 (tmp)\n\n        // 1 2 3    7 2 1\n        // 4 5 6 => 4 5 6\n        // 7 8 9    9 8 7\n\n        // // round 2:\n        // -------------------\n        // tmp <- 2\n        // 2 (matrix[i][j]) <- 4 (matrix[n - j - 1][i])\n        // 4 (matrix[n - j - 1][i]) <- 8 (matrix[n - i - 1][n - j - 1])\n        // 8 (matrix[n - i - 1][n - j - 1]) <- 6 (matrix[j][n - i - 1])\n        // 6 (matrix[j][n - i - 1]) <- 2 (tmp)\n\n        // 1 2 3    7 2 1    7 4 1\n        // 4 5 6 => 4 5 6 => 8 5 2\n        // 7 8 9    9 8 7    9 6 3\n        int n = matrix.size(), tmp;\n        for(int i = 0; i < n / 2; i++) {\n            for(int j = i; j < n - i - 1; j++) {\n                tmp = matrix[i][j];\n                matrix[i][j] = matrix[n - j - 1][i];\n                matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];\n                matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];\n                matrix[j][n - i - 1] = tmp;\n            }\n        }\n\n    }\n};\n\n"))),(0,o.kt)(g,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        left, right = 0, len(matrix) - 1\n\n        while left < right:\n            for i in range(right - left):\n                top, bottom = left, right\n                # save the top left value\n                topleft = matrix[top][left + i]\n                # move bottom left into top left\n                matrix[top][left + i] = matrix[bottom - i][left]\n                # move bottom right into bottom left\n                matrix[bottom - i][left] = matrix[bottom][right - i]\n                # move top right into bottom right\n                matrix[bottom][right - i] = matrix[top + i][right]\n                # move top left into top right\n                matrix[top + i][right] = topleft\n            left += 1\n            right -= 1\n"))),(0,o.kt)(g,{value:"js",label:"JavaScrip",mdxType:"TabItem"},(0,o.kt)(f,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function (matrix) {\n  let left = 0;\n  let right = matrix.length - 1;\n  while (left < right) {\n    for (i = 0; i < right - left; i++) {\n      let top = left;\n      let bottom = right;\n      // save the top left value\n      let top_left = matrix[top][left + i];\n      // move bottom left into top left\n      matrix[top][left + i] = matrix[bottom - i][left];\n      // move bottom right into bottom left\n      matrix[bottom - i][left] = matrix[bottom][right - i];\n      // move top right into bottom right\n      matrix[bottom][right - i] = matrix[top + i][right];\n      // move top left into top right\n      matrix[top + i][right] = top_left;\n    }\n    // update pointers\n    left++;\n    right--;\n  }\n};\n")))))}b.isMDXComponent=!0}}]);