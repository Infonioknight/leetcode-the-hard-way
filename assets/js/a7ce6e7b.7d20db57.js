"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54126],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>u});var n=t(67294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},c="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,s=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=l(t),h=r,u=c["".concat(i,".").concat(h)]||c[h]||d[h]||s;return t?n.createElement(u,m(m({ref:e},o),{},{components:t})):n.createElement(u,m({ref:e},o))}));function u(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var s=t.length,m=new Array(s);m[0]=h;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[c]="string"==typeof a?a:r,m[1]=p;for(var l=2;l<s;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},41937:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={description:"Author: @ColeB2, wingkwong | https://leetcode.com/problems/max-area-of-island/",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},m="0695 - Max Area of Island (Medium)",p={unversionedId:"0600-0699/max-area-of-island-medium",id:"0600-0699/max-area-of-island-medium",title:"0695 - Max Area of Island (Medium)",description:"Author: @ColeB2, wingkwong | https://leetcode.com/problems/max-area-of-island/",source:"@site/solutions/0600-0699/0695-max-area-of-island-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/max-area-of-island-medium",permalink:"/solutions/0600-0699/max-area-of-island-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0695-max-area-of-island-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Union Find",permalink:"/solutions/tags/union-find"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:695,frontMatter:{description:"Author: @ColeB2, wingkwong | https://leetcode.com/problems/max-area-of-island/",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0692 - Top K Frequent Words (Medium)",permalink:"/solutions/0600-0699/top-k-frequent-words-medium"},next:{title:"0698 - Partition to K Equal Sum Subsets (Medium)",permalink:"/solutions/0600-0699/partition-to-k-equal-sum-subsets-medium"}},i={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Breadth-First Search",id:"approach-1-breadth-first-search",level:2},{value:"Approach 2: Depth-First Search",id:"approach-2-depth-first-search",level:2}],o=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},c=o("Tabs"),d=o("TabItem"),h=o("SolutionAuthor"),u={toc:l},k="wrapper";function N(a){let{components:e,...t}=a;return(0,r.kt)(k,(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0695---max-area-of-island-medium"},"0695 - Max Area of Island (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/max-area-of-island/"},"https://leetcode.com/problems/max-area-of-island/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given an ",(0,r.kt)("inlineCode",{parentName:"p"},"m x n")," binary matrix ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),". An island is a group of ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"'s (representing land) connected ",(0,r.kt)("strong",{parentName:"p"},"4-directionally")," (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"area")," of an island is the number of cells with a value ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," in the island."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the maximum ",(0,r.kt)("strong",{parentName:"em"},"area")," of an island in")," ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),". If there is no island, return ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\nOutput: 6\nExplanation: The answer is not 11, because the island must be connected 4-directionally.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: grid = [[0,0,0,0,0,0,0,0]]\nOutput: 0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m == grid.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 50")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is either ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,r.kt)("h2",{id:"approach-1-breadth-first-search"},"Approach 1: Breadth-First Search"),(0,r.kt)("p",null,"We can traverse the grid, and when we find an island, run our BFS on the island. For every ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," we find we can increment our area counter, as well as update a global max area variable."),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m * n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," must traverse each cell in the grid."),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m * n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),". For the size of our queue."),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(h,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:\n        # intiialize rows, cols, and a global max area to track\n        # the size of the largest island.\n        ROWS, COLS = len(grid), len(grid[0])\n        self.max_area = 0\n        # BFS function, takes to parameters, row, r and column, c.\n        def bfs(r, c):\n            # initialize our queue with current row, r and column, c\n            q = deque([(r,c)])\n            # initialize area starting at 0.\n            area = 0\n\n            while q:\n                # pop row and col off the queue\n                row, col = q.popleft()\n                # check that it is inbounds, and a 1/land\n                if (row < 0 or row >= ROWS\n                    or col < 0 or col >= COLS\n                    or grid[row][col] != 1\n                    ):\n                    continue\n                # It is in bounds and land, we will mark it as visited\n                # we can re-use the grid by just setting the spot to -1.\n                grid[row][col] = -1\n                # update our area and global max area.\n                area += 1\n                self.max_area = max(area, self.max_area)\n                # loop through 4 adjacent directions\n                for dr, dc in ((1,0), (0,1), (-1,0), (0, -1)):\n                    # add 4 adjacent cells to our queue.\n                    q.append((row + dr, col + dc))\n        # Loop through our board\n        for r in range(ROWS):\n            for c in range(COLS):\n                # find land, run bfs at that position\n                if grid[r][c] == 1:\n                    bfs(r, c)\n        return self.max_area\n")))),(0,r.kt)("h2",{id:"approach-2-depth-first-search"},"Approach 2: Depth-First Search"),(0,r.kt)("p",null,"For each land, we can run DFS to calculate the area of the current island. We set the visited cell to other value so that it won't re-calculate. Get the maximum area and return it."),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m * n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," must traverse each cell in the grid."),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(m * n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),". "),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int ans = 0;\n    int maxAreaOfIsland(vector<vector<int>>& grid) {\n        for(int i = 0; i < grid.size(); i++) {\n            for(int j = 0; j < grid[0].size(); j++) {\n                if(grid[i][j] == 1) {\n                    // if it is 1, then we can start from this cell\n                    ans = max(ans, dfs(grid, i, j));\n                }\n            }\n        }\n        return ans;\n    }\n    \n    int dfs(vector<vector<int>>& grid, int i, int j) {\n        // if it is 0 or out of bound, return 0\n        if(i < 0 || j < 0 || i > grid.size() - 1 || j > grid[0].size() - 1 || grid[i][j] != 1) return 0;\n        // set it to 0 so that we won't visit it again\n        grid[i][j] = 0;\n        // 1 (current cell) + the result from four directions\n        return 1 +\n            dfs(grid, i + 1, j) +\n            dfs(grid, i, j + 1) +\n            dfs(grid, i - 1, j) +\n            dfs(grid, i, j - 1);\n    }\n};\n")))))}N.isMDXComponent=!0}}]);