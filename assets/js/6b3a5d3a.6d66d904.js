"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29675],{84395:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(85893),r=s(11151);const t={description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/number-of-islands/",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},a="0200 - Number of Islands (Medium)",l={id:"0200-0299/number-of-islands-medium",title:"0200 - Number of Islands (Medium)",description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/number-of-islands/",source:"@site/solutions/0200-0299/0200-number-of-islands-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/number-of-islands-medium",permalink:"/solutions/0200-0299/number-of-islands-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0200-number-of-islands-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{inline:!0,label:"Union Find",permalink:"/solutions/tags/union-find"},{inline:!0,label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:200,frontMatter:{description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/number-of-islands/",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0200 - 0299",permalink:"/solutions/category/0200---0299"},next:{title:"0202 - Happy Number (Easy)",permalink:"/solutions/0200-0299/happy-number-easy"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Flood Fill",id:"approach-1-flood-fill",level:2}];function d(n){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...n.components},{SolutionAuthor:s,TabItem:t,Tabs:a}=e;return s||m("SolutionAuthor",!0),t||m("TabItem",!0),a||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"0200---number-of-islands-medium",children:"0200 - Number of Islands (Medium)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/number-of-islands/",children:"https://leetcode.com/problems/number-of-islands/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Given an ",(0,i.jsx)(e.code,{children:"m x n"})," 2D binary grid ",(0,i.jsx)(e.code,{children:"grid"})," which represents a map of ",(0,i.jsx)(e.code,{children:"'1'"}),"s (land) and ",(0,i.jsx)(e.code,{children:"'0'"}),"s (water), return ",(0,i.jsx)(e.em,{children:"the number of islands"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["An ",(0,i.jsx)(e.strong,{children:"island"})," is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: grid = [\n  ["1","1","1","1","0"],\n  ["1","1","0","1","0"],\n  ["1","1","0","0","0"],\n  ["0","0","0","0","0"]\n]\nOutput: 1\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]\nOutput: 3\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"m == grid.length"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"n == grid[i].length"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= m, n <= 300"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"grid[i][j]"})," is ",(0,i.jsx)(e.code,{children:"'0'"})," or ",(0,i.jsx)(e.code,{children:"'1'"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-flood-fill",children:"Approach 1: Flood Fill"}),"\n",(0,i.jsxs)(e.p,{children:["We can use ",(0,i.jsx)(e.a,{href:"../0700-0799/flood-fill-easy",children:"0733 - Flood Fill (Easy)"})," solution in this problem. The idea is to search for ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"1"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})})]})," and paint the entire island with different character that  does not exist in the grid (says ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"2"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"})]})})]}),"). Every time we start flood fill, we increase our answer by ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"1"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Time Complexity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(m*n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," where m is the number of rows, and n is the number of columns in the grid. We must traverse the whole grid in order to determine the number of islands."]}),"\n",(0,i.jsxs)(e.p,{children:["Space Complexity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"(m*n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," where m is the number of rows, and n is the number of columns in the grid. In the worst case, our queue/stack/recursive stack/visited set will grow in direct proportion to the size of the grid."]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsxs)(t,{value:"cpp",label:"C++",children:[(0,i.jsx)(s,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // Check out 0733 - Flood Fill (Easy)\n    // we need to find tune the type (int -> char) from that solution\n    int dirx[4] = { -1, 0, 0, 1};\n    int diry[4] = { 0, 1, -1, 0};\n    // the idea is to use bfs to paint the cell with value '1' starting from (sr, sc)\n    void floodFill(vector<vector<char>>& image, int sr, int sc, char newColor) {\n        // record the original color\n        int oriColor = image[sr][sc];\n        // if it is same as the one we want to paint, then skip\n        if (oriColor == newColor) return;\n        int n = image.size(), m = image[0].size();\n        // standard bfs\n        queue<pair<int, int>> q;\n        q.push({sr, sc});\n        while(!q.empty()) {\n            auto [x, y] = q.front(); q.pop();\n            // paint the new color here so that we won't visit it again\n            image[x][y] = newColor;\n            // after painting the cell at (x, y), we try four different directions\n            for(int i = 0; i < 4; i++) {\n                int next_x = x + dirx[i];\n                int next_y = y + diry[i];\n                // we need to make sure that the next cell is valid and the color isn't same as the orginal color\n                if(next_x < 0 || next_y < 0 || next_x > n - 1 || next_y > m - 1 || image[next_x][next_y] != oriColor) continue;\n                // paint it with the new color\n                image[next_x][next_y] = newColor;\n                // push the next color to the queue\n                q.push({next_x, next_y});\n            }\n        }\n        return;\n    }\n    \n    int numIslands(vector<vector<char>>& grid) {\n        int ans = 0;\n        // iterate each row\n        for(int row = 0; row < grid.size(); row++) {\n            // iterate each column\n            for(int col = 0; col < grid[0].size(); col++) {\n                // if it is land\n                if(grid[row][col] == '1'){\n                    // perform flood fill and make each cell to 2 or any number except 0 and 1\n                    // so that we won't visit it again\n                    floodFill(grid, row, col, '2');\n                    // after performing flood fill, we color one island \n                    ans++;\n                }\n            }\n       }\n       return ans; \n    }\n};\n"})})]}),(0,i.jsxs)(t,{value:"java",label:"Java",children:[(0,i.jsx)(s,{name:"@vigneshshiv"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"// r - # of rows\n// c - # of cols\n// Time complexity: O(rc)\n// Space complexity: O(rc)\nclass Solution {\n    \n    public final int NO_DIRS = 4;\n    public int[] DIRS = {0, 1, 0, -1, 0};\n    \n    public int numIslands(char[][] grid) {\n        int count = 0;\n        // Visited set for string row and col, like \"row # col\"\n        // This helps to avoid to revisiting the same cell again\n        Set<String> visited = new HashSet<>();\n        //\n        for (int r = 0; r < grid.length; r++) {\n            for (int c = 0; c < grid[0].length; c++) {\n                // Explore area only if it's a land, i.e '1'\n                if (grid[r][c] == '1' && exploreGrid(grid, r, c, visited)) {\n                    count += 1;\n                }\n            }\n        }\n        return count;\n    }\n    \n    public boolean exploreGrid(char[][] grid, int row, int col, Set<String> visited) {\n        boolean rowInbounds = 0 <= row && row < grid.length;\n        boolean colInbounds = 0 <= col && col < grid[0].length;\n        // If row or col out of range, then simply return\n        if (!rowInbounds || !colInbounds) {\n            return false;\n        }\n        // Current cell is water, so no need to explore surrounding cells\n        if (grid[row][col] == '0') {\n            return false;\n        }\n        String pos = row + \"#\" + col;\n        // Check for already visited cells, if found, then no need to traverse\n        if (visited.contains(pos)) {\n            return false;\n        }\n        // Mark as visited\n        visited.add(pos);\n        for (int dir = 0; dir < NO_DIRS; dir++) {\n            // Explore near by cells, by traversing all directions, move UP, DOWN, LEFT, RIGHT\n            // Directions can be formed by above mentioned array\n            exploreGrid(grid, row + DIRS[dir], col + DIRS[dir + 1], visited);\n        }\n        return true;\n    }\n}\n\n"})})]}),(0,i.jsxs)(t,{value:"python",label:"Python",children:[(0,i.jsx)(s,{name:"@ColeB2"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"class Solution:\n    # Time: O(m*n) as we must traverse each position in the grid.\n    # Space: O(m*n) our queue in worst case maybe all land and\n    # will grow in proportion to the size of the grid.\n    def bfs(self, r: int, c: int, grid: List[List[str]]) -> List[List[str]]:\n        # BFS implementation of flood fill, initialize queue with\n        # the row and column we passed as first starting point\n        q = deque([(r,c)])\n        while q:\n            # pop off our row and column\n            row, col = q.popleft()\n            # check we are in bounds, and land.\n            if (row < 0 or col < 0 \n                or row >= len(grid) or col >= len(grid[0])\n                or grid[row][col] != '1'\n                ):\n                # out of bounds/not land  -> continue\n                continue\n            # 'colour' our land a different colour. We will set it to -1\n            grid[row][col] = -1\n            # loop our directions, and add them to the queue\n            for (x,y) in ((1,0),(-1,0),(0,1),(0,-1)):\n                    q.append((row + x, col + y))\n        # return our grid since we changed it.\n        return grid\n\n\n    def numIslands(self, grid: List[List[str]]) -> int:\n        # initialize our row, cols and number of islands counter.\n        ROWS, COLS = len(grid), len(grid[0])\n        num_islands = 0\n        # loop through the grid.\n        for r in range(ROWS):\n            for c in range(COLS):\n                # if we find land\n                if grid[r][c] == '1':\n                    # flood fill it, making sure to overwrite our \n                    # grid as we will change it during our algorithm.\n                    grid = self.bfs(r, c, grid)\n                    num_islands += 1\n        \n        return num_islands\n"})})]})]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>a});var i=s(67294);const r={},t=i.createContext(r);function a(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);