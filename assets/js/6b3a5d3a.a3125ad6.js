"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29675],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58549:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-islands/"},s="0200 - Number of Islands (Medium)",p={unversionedId:"0200-0299/number-of-islands-medium",id:"0200-0299/number-of-islands-medium",title:"0200 - Number of Islands (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-islands/",source:"@site/solutions/0200-0299/0200-number-of-islands-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/number-of-islands-medium",permalink:"/solutions/0200-0299/number-of-islands-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0200-number-of-islands-medium.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-islands/"},sidebar:"tutorialSidebar",previous:{title:"0200 - 0299",permalink:"/solutions/category/0200---0299"},next:{title:"0202 - Happy Number (Easy)",permalink:"/solutions/0200-0299/happy-number-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Flood Fill",id:"approach-1-flood-fill",level:2}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)}},u=d("Tabs"),h=d("TabItem"),f=d("SolutionAuthor"),k={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0200---number-of-islands-medium"},"0200 - Number of Islands (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-islands/"},"https://leetcode.com/problems/number-of-islands/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an ",(0,o.kt)("inlineCode",{parentName:"p"},"m x n")," 2D binary grid ",(0,o.kt)("inlineCode",{parentName:"p"},"grid")," which represents a map of ",(0,o.kt)("inlineCode",{parentName:"p"},"'1'"),"s (land) and ",(0,o.kt)("inlineCode",{parentName:"p"},"'0'"),"s (water), return ",(0,o.kt)("em",{parentName:"p"},"the number of islands"),"."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"island")," is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: grid = [\n  ["1","1","1","1","0"],\n  ["1","1","0","1","0"],\n  ["1","1","0","0","0"],\n  ["0","0","0","0","0"]\n]\nOutput: 1\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]\nOutput: 3\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"m == grid.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 300")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"'0'")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"'1'"),".")),(0,o.kt)("h2",{id:"approach-1-flood-fill"},"Approach 1: Flood Fill"),(0,o.kt)("p",null,"We can use ",(0,o.kt)("a",{parentName:"p",href:"../0700-0799/flood-fill-easy"},"0733 - Flood Fill (Easy)")," solution in this problem. The idea is to search for ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"1")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"1")))))," and paint the entire island with different character that  does not exist in the grid (says ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"2")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"2"))))),"). Every time we start flood fill, we increase our answer by ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"1")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // Check out 0733 - Flood Fill (Easy)\n    // we need to find tune the type (int -> char) from that solution\n    int dirx[4] = { -1, 0, 0, 1};\n    int diry[4] = { 0, 1, -1, 0};\n    // the idea is to use bfs to paint the cell with value '1' starting from (sr, sc)\n    void floodFill(vector<vector<char>>& image, int sr, int sc, char newColor) {\n        // record the original color\n        int oriColor = image[sr][sc];\n        // if it is same as the one we want to paint, then skip\n        if (oriColor == newColor) return;\n        int n = image.size(), m = image[0].size();\n        // standard bfs\n        queue<pair<int, int>> q;\n        q.push({sr, sc});\n        while(!q.empty()) {\n            auto [x, y] = q.front(); q.pop();\n            // paint the new color here so that we won't visit it again\n            image[x][y] = newColor;\n            // after painting the cell at (x, y), we try four different directions\n            for(int i = 0; i < 4; i++) {\n                int next_x = x + dirx[i];\n                int next_y = y + diry[i];\n                // we need to make sure that the next cell is valid and the color isn't same as the orginal color\n                if(next_x < 0 || next_y < 0 || next_x > n - 1 || next_y > m - 1 || image[next_x][next_y] != oriColor) continue;\n                // paint it with the new color\n                image[next_x][next_y] = newColor;\n                // push the next color to the queue\n                q.push({next_x, next_y});\n            }\n        }\n        return;\n    }\n    \n    int numIslands(vector<vector<char>>& grid) {\n        int ans = 0;\n        // iterate each row\n        for(int row = 0; row < grid.size(); row++) {\n            // iterate each column\n            for(int col = 0; col < grid[0].size(); col++) {\n                // if it is land\n                if(grid[row][col] == '1'){\n                    // perform flood fill and make each cell to 2 or any number except 0 and 1\n                    // so that we won't visit it again\n                    floodFill(grid, row, col, '2');\n                    // after performing flood fill, we color one island \n                    ans++;\n                }\n            }\n       }\n       return ans; \n    }\n};\n"))),(0,o.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(f,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// r - # of rows\n// c - # of cols\n// Time complexity: O(rc)\n// Space complexity: O(rc)\nclass Solution {\n    \n    public final int NO_DIRS = 4;\n    public int[] DIRS = {0, 1, 0, -1, 0};\n    \n    public int numIslands(char[][] grid) {\n        int count = 0;\n        // Visited set for string row and col, like \"row # col\"\n        // This helps to avoid to revisiting the same cell again\n        Set<String> visited = new HashSet<>();\n        //\n        for (int r = 0; r < grid.length; r++) {\n            for (int c = 0; c < grid[0].length; c++) {\n                // Explore area only if it's a land, i.e '1'\n                if (grid[r][c] == '1' && exploreGrid(grid, r, c, visited)) {\n                    count += 1;\n                }\n            }\n        }\n        return count;\n    }\n    \n    public boolean exploreGrid(char[][] grid, int row, int col, Set<String> visited) {\n        boolean rowInbounds = 0 <= row && row < grid.length;\n        boolean colInbounds = 0 <= col && col < grid[0].length;\n        // If row or col out of range, then simply return\n        if (!rowInbounds || !colInbounds) {\n            return false;\n        }\n        // Current cell is water, so no need to explore surrounding cells\n        if (grid[row][col] == '0') {\n            return false;\n        }\n        String pos = row + \"#\" + col;\n        // Check for already visited cells, if found, then no need to traverse\n        if (visited.contains(pos)) {\n            return false;\n        }\n        // Mark as visited\n        visited.add(pos);\n        for (int dir = 0; dir < NO_DIRS; dir++) {\n            // Explore near by cells, by traversing all directions, move UP, DOWN, LEFT, RIGHT\n            // Directions can be formed by above mentioned array\n            exploreGrid(grid, row + DIRS[dir], col + DIRS[dir + 1], visited);\n        }\n        return true;\n    }\n}\n\n")))))}g.isMDXComponent=!0}}]);