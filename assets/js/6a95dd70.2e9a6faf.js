"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[13406],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),s=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,o(o({ref:e},c),{},{components:n})):r.createElement(h,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73291:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong, @ganajayant, @radojicic23| https://leetcode.com/problems/search-a-2d-matrix/",tags:["Array","Binary Search","Matrix"]},m="0074 - Search a 2D Matrix (Medium)",s={unversionedId:"0000-0099/search-a-2d-matrix-medium",id:"0000-0099/search-a-2d-matrix-medium",title:"0074 - Search a 2D Matrix (Medium)",description:"Author: @wingkwong, @ganajayant, @radojicic23| https://leetcode.com/problems/search-a-2d-matrix/",source:"@site/solutions/0000-0099/0074-search-a-2d-matrix-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/search-a-2d-matrix-medium",permalink:"/solutions/0000-0099/search-a-2d-matrix-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0074-search-a-2d-matrix-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Binary Search",permalink:"/solutions/tags/binary-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:74,frontMatter:{description:"Author: @wingkwong, @ganajayant, @radojicic23| https://leetcode.com/problems/search-a-2d-matrix/",tags:["Array","Binary Search","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0072 - Edit Distance (Hard)",permalink:"/solutions/0000-0099/edit-distance-hard"},next:{title:"0075 - Sort Colors (Medium)",permalink:"/solutions/0000-0099/sort-colors-medium"}},c={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Searching Row &amp; Column",id:"approach-1-searching-row--column",level:2},{value:"Approach 2: Binary Search",id:"approach-2-binary-search",level:2}],u=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}},d=u("Tabs"),h=u("TabItem"),g=u("SolutionAuthor"),f={toc:p};function b(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0074---search-a-2d-matrix-medium"},"0074 - Search a 2D Matrix (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/search-a-2d-matrix/"},"https://leetcode.com/problems/search-a-2d-matrix/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Write an efficient algorithm that searches for a value ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," in an ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," integer matrix ",(0,i.kt)("inlineCode",{parentName:"p"},"matrix"),". This matrix has the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integers in each row are sorted from left to right."),(0,i.kt)("li",{parentName:"ul"},"The first integer of each row is greater than the last integer of the previous row.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\nOutput: true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13\nOutput: false\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m == matrix.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == matrix[i].length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-10^4 <= matrix[i][j], target <= 10^4"))),(0,i.kt)("h2",{id:"approach-1-searching-row--column"},"Approach 1: Searching Row & Column"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int n = matrix.size(), m = matrix[0].size(), j = 0;\n        // search for the target row\n        for (int i = 0; i < n; i++) {\n            // if the target is within [matrix[i][0], matrix[i][m - 1]],\n            // the target is possible in row i\n            if (target >= matrix[i][0] && target <= matrix[i][m - 1]) {\n                j = i;\n                break;\n            }\n        }\n        // iterate each column on row j\n        for (int i = 0; i < m; i++) {\n            // check if target exists\n            if (matrix[j][i] == target) {\n                return true;\n            }\n        }\n        return false;\n    }\n};\n"))),(0,i.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(g,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        rows, cols = len(matrix), len(matrix[0])\n        r = 0\n        for i in range(rows):\n            if target >= matrix[i][0] and target <= matrix[i][-1]:\n                r = i\n                break\n        for i in range(cols):\n            if (matrix[r][i] == target):\n                return True\n        return False\n"))),(0,i.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(g,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    let rows = matrix.length, cols = matrix[0].length;\n    let r = 0;\n    for (let i = 0; i < rows; i++) {\n        if (target >= matrix[i][0] && target <= matrix[i][cols - 1]) {\n            r = i;\n            break;\n        }\n    }\n    for (let i = 0; i < cols; i++) {\n        if (matrix[r][i] == target) {\n            return true;\n        }\n    }\n    return false;\n};\n")))),(0,i.kt)("h2",{id:"approach-2-binary-search"},"Approach 2: Binary Search"),(0,i.kt)("p",null,"Find which row and coloumn the element belongs to by using Binary Search"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(g,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        for (int i = 0; i < matrix.length; i++) {\n            int low = 0;\n            int high = matrix[i].length - 1;\n            while (low <= high) {\n                int mid = (low + high) / 2;\n                if (matrix[i][mid] == target) {\n                    return true;\n                } else if (matrix[i][mid] > target) {\n                    high = mid - 1;\n                } else {\n                    low = mid + 1;\n                }\n            }\n        }\n        return false;\n    }\n}\n"))),(0,i.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(g,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Time Complexity: O(log n)\n# Space Complexity: O(1)\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # initialize rows and cols \n        rows, cols = len(matrix), len(matrix[0]) \n        # top row and bottom row\n        top, bot = 0, rows - 1\n        \n        # binary search\n        while top <= bot: \n            # compute the middle row\n            mid = (top + bot) // 2\n            # if this target value is greater then \n            # the largest value in the middle row\n            if target > matrix[mid][-1]:\n                # look at rows with larger value\n                top = mid + 1\n            # if this target value is smaller then \n            # the smallest value in this row\n            elif target < matrix[mid][0]:\n                # look at rows with smaller value\n                bot = mid - 1\n            else:\n                break \n            \n        if not (top <= bot):\n            return False\n        \n        # second binary search portion\n        # run binary search on the current (middle row)\n        mid = (top + bot) // 2\n        # leftmost value and rightmost value\n        l, r = 0, cols - 1\n        while l <= r:\n            # compute the middle value\n            m = (l + r) // 2\n            if target > matrix[mid][m]:\n                l = m + 1\n            elif target < matrix[mid][m]:\n                r = m - 1\n            else:\n                return True\n        \n        return False\n"))),(0,i.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(g,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    let row = matrix.length;\n    let col = matrix[0].length;\n    let top = 0;\n    let bottom = row - 1;\n    while (top <= bottom) {\n        let mid = Math.floor((top + bottom) / 2);\n        if (target > matrix[mid][col - 1]) {\n            top = mid + 1;\n        } else if (target < matrix[mid][0]) {\n            bottom = mid - 1;\n        } else {\n            break;\n        }\n    }\n    if (!(top <= bottom)) {\n        return false;\n    }\n    let l = 0;\n    let r = col - 1;\n    let mid = Math.floor((top + bottom) / 2);\n    while (l <= r) {\n        let m = Math.floor((l + r) / 2);\n        if (target > matrix[mid][m]) {\n            l = m + 1;\n        } else if (target < matrix[mid][m]) {\n            r = m - 1;\n        } else {\n            return true;\n        }\n    }\n    return false;\n};\n"))),(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(g,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int rows = matrix.size(), cols = matrix[0].size();\n        int top = 0, bottom = rows - 1;\n        while (top <= bottom) {\n            int mid = top + (bottom - top) / 2;\n            if (target > matrix[mid][cols - 1]) {\n                top = mid + 1;\n            } else if (target < matrix[mid][0]) {\n                bottom = mid - 1;\n            } else {\n                break;\n            }\n        }\n        if (!(top <= bottom)) {\n            return false;\n        }\n        int mid = top + (bottom - top) / 2;\n        int left = 0, right = cols - 1;\n        while (left <= right) {\n            int m = left + (right - left) / 2;\n            if (target > matrix[mid][m]) {\n                left = m + 1;\n            } else if (target < matrix[mid][m]) {\n                right = m - 1;\n            } else {\n                return true;\n            }\n        }\n        return false;\n    }\n};\n")))))}b.isMDXComponent=!0}}]);