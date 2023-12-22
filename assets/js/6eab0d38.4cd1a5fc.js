"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4640],{40604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var l=t(85893),o=t(11151);const r={description:"Author: @TBC | https://leetcode.com/problems/where-will-the-ball-fall/",tags:["Array","Dynamic Programming","Depth-First Search","Matrix","Simulation"]},c="1706 - Where Will the Ball Fall (Medium)",i={id:"1700-1799/where-will-the-ball-fall-medium",title:"1706 - Where Will the Ball Fall (Medium)",description:"Author: @TBC | https://leetcode.com/problems/where-will-the-ball-fall/",source:"@site/solutions/1700-1799/1706-where-will-the-ball-fall-medium.md",sourceDirName:"1700-1799",slug:"/1700-1799/where-will-the-ball-fall-medium",permalink:"/solutions/1700-1799/where-will-the-ball-fall-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1706-where-will-the-ball-fall-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"},{label:"Simulation",permalink:"/solutions/tags/simulation"}],version:"current",sidebarPosition:1706,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/where-will-the-ball-fall/",tags:["Array","Dynamic Programming","Depth-First Search","Matrix","Simulation"]},sidebar:"tutorialSidebar",previous:{title:"1700 - 1799",permalink:"/solutions/category/1700---1799"},next:{title:"1727 - Largest Submatrix With Rearrangements (Medium)",permalink:"/solutions/1700-1799/largest-submatrix-with-rearrangements-medium"}},a={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}];function s(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:c}=n;return t||u("SolutionAuthor",!0),r||u("TabItem",!0),c||u("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"1706---where-will-the-ball-fall-medium",children:"1706 - Where Will the Ball Fall (Medium)"}),"\n",(0,l.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/where-will-the-ball-fall/",children:"https://leetcode.com/problems/where-will-the-ball-fall/"})}),"\n",(0,l.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(n.p,{children:["You have a 2-D ",(0,l.jsx)(n.code,{children:"grid"})," of size ",(0,l.jsx)(n.code,{children:"m x n"})," representing a box, and you have ",(0,l.jsx)(n.code,{children:"n"})," balls. The box is open on the top and bottom sides."]}),"\n",(0,l.jsx)(n.p,{children:"Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as ",(0,l.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as ",(0,l.jsx)(n.code,{children:"-1"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:'We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box.'}),"\n",(0,l.jsxs)(n.p,{children:["Return ",(0,l.jsx)(n.em,{children:"an array"}),(0,l.jsx)(n.code,{children:"answer"}),(0,l.jsx)(n.em,{children:"of size"}),(0,l.jsx)(n.code,{children:"n"}),(0,l.jsx)(n.em,{children:"where"}),(0,l.jsx)(n.code,{children:"answer[i]"}),(0,l.jsx)(n.em,{children:"is the column that the ball falls out of at the bottom after dropping the ball from the"}),(0,l.jsx)(n.code,{children:"ith"}),(0,l.jsx)(n.em,{children:"column at the top, or -1 if the ball gets stuck in the box."})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]\nOutput: [1,-1,-1,-1,-1]\nExplanation: This example is shown in the photo.\nBall b0 is dropped at column 0 and falls out of the box at column 1.\nBall b1 is dropped at column 1 and will get stuck in the box between column 2 and 3 and row 1.\nBall b2 is dropped at column 2 and will get stuck on the box between column 2 and 3 and row 0.\nBall b3 is dropped at column 3 and will get stuck on the box between column 2 and 3 and row 0.\nBall b4 is dropped at column 4 and will get stuck on the box between column 2 and 3 and row 1.\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: grid = [[-1]]\nOutput: [-1]\nExplanation: The ball gets stuck against the left wall.\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Input: grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]\nOutput: [0,1,2,3,4,-1]\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"m == grid.length"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"n == grid[i].length"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"1 <= m, n <= 100"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"grid[i][j]"})," is ",(0,l.jsx)(n.code,{children:"1"})," or ",(0,l.jsx)(n.code,{children:"-1"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"approach-1-simulation",children:"Approach 1: Simulation"}),"\n",(0,l.jsxs)(c,{children:[(0,l.jsxs)(r,{value:"cpp",label:"C++",children:[(0,l.jsx)(t,{name:"@wingkwong"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// Time Complexity: O(m * n)\n// Space Complexity: O(n)\nclass Solution {\npublic:\n    // idea: we can simulate the movement of each ball\n    // if a ball is stuck at some point, then it would be -1\n    // otherwise, get the final destination column\n    vector<int> findBall(vector<vector<int>>& grid) {\n        int m = grid.size(), n = grid[0].size();\n        vector<int> ans;\n        // iterate each column\n        for (int col = 0; col < n; col++) {\n            int cur_col = col;\n            // iterate each row\n            for (int cur_row = 0; cur_row < m; cur_row++) {\n                // the next column would be the current column + the value of the current cell\n                // e.g. column 0 + 1 = column 1 (move to the right)\n                // e.g. column 3 - 1 = column 2 (move to the left)\n                int next_col = cur_col + grid[cur_row][cur_col];\n                // after that we need to check if the ball gets stuck at the same column\n                // and there are three cases\n                // 1. the ball on the leftmost column is moving to the left\n                // hence, we check `next_col < 0`\n                // 2. the ball on the rightmost column is moving to the right\n                // hence, we check `next_col >= n`\n                // 3. the ball is stuck at a V shape position\n                // e.g. ball 2 and ball 3 in column 2 and column 3 in row 0\n                // hence, we check if the if grid[cur_row][cur_col] is different than grid[cur_row][next_col]\n                if (next_col < 0 || next_col >= n || grid[cur_row][cur_col] ^ grid[cur_row][next_col]) {\n                    // the ball is stuck at some point, which means it couldn't reach to the end\n                    // hence, we can set -1 and break here\n                    cur_col = -1;\n                    break;\n                }\n                // continue the above process with the updated cur_col\n                cur_col = next_col;\n            }\n            // the ball reaches to the end,\n            // cur_col is the final destination\n            ans.push_back(cur_col);\n        }\n        return ans;\n    }\n};\n"})})]}),(0,l.jsxs)(r,{value:"py",label:"Python",children:[(0,l.jsx)(t,{name:"@wingkwong"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"# Time Complexity: O(m * n)\n# Space Complexity: O(n)\nclass Solution:\n    # idea: we can simulate the movement of each ball\n    # if a ball is stuck at some point, then it would be -1\n    # otherwise, get the final destination column\n    def findBall(self, grid: List[List[int]]) -> List[int]:\n        m, n = len(grid), len(grid[0])\n        ans = []\n        # iterate each column\n        for col in range(n):\n            cur_col = col\n            # iterate each row\n            for cur_row in range(m):\n                # the next column would be the current column + the value of the current cell\n                # e.g. column 0 + 1 = column 1 (move to the right)\n                # e.g. column 3 - 1 = column 2 (move to the left)\n                next_col = cur_col + grid[cur_row][cur_col]\n                # after that we need to check if the ball gets stuck at the same column\n                # and there are three cases\n                # 1. the ball on the leftmost column is moving to the left\n                # hence, we check `next_col < 0`\n                # 2. the ball on the rightmost column is moving to the right\n                # hence, we check `next_col >= n`\n                # 3. the ball is stuck at a V shape position\n                # e.g. ball 2 and ball 3 in column 2 and column 3 in row 0\n                # hence, we check if the if grid[cur_row][cur_col] is different than grid[cur_row][next_col]\n                if next_col < 0 or next_col >= n or grid[cur_row][cur_col] ^ grid[cur_row][next_col]:\n                    # the ball is stuck at some point, which means it couldn't reach to the end\n                    # hence, we can set -1 and break here\n                    cur_col = -1\n                    break\n                # continue the above process with the updated cur_col\n                cur_col = next_col\n            # the ball reaches to the end,\n            # cur_col is the final destination\n            ans.append(cur_col)\n        return ans\n        \n"})})]}),(0,l.jsxs)(r,{value:"go",label:"Go",children:[(0,l.jsx)(t,{name:"@wingkwong"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"// Time Complexity: O(m * n)\n// Space Complexity: O(n)\n\n// idea: we can simulate the movement of each ball\n// if a ball is stuck at some point, then it would be -1\n// otherwise, get the final destination column\nfunc findBall(grid [][]int) []int {\n    m, n := len(grid), len(grid[0])\n    ans := []int{}\n    // iterate each column\n    for col := 0; col < n; col++ {\n        cur_col := col\n        // iterate each row\n        for cur_row := 0; cur_row < m; cur_row++ {\n            // the next column would be the current column + the value of the current cell\n            // e.g. column 0 + 1 = column 1 (move to the right)\n            // e.g. column 3 - 1 = column 2 (move to the left)\n            next_col := cur_col + grid[cur_row][cur_col]\n            // after that we need to check if the ball gets stuck at the same column\n            // and there are three cases\n            // 1. the ball on the leftmost column is moving to the left\n            // hence, we check `next_col < 0`\n            // 2. the ball on the rightmost column is moving to the right\n            // hence, we check `next_col >= n`\n            // 3. the ball is stuck at a V shape position\n            // e.g. ball 2 and ball 3 in column 2 and column 3 in row 0\n            // hence, we check if the if grid[cur_row][cur_col] is different than grid[cur_row][next_col]\n            if next_col < 0 || next_col >= n || grid[cur_row][cur_col] != grid[cur_row][next_col] {\n                // the ball is stuck at some point, which means it couldn't reach to the end\n                // hence, we can set -1 and break here\n                cur_col = -1\n                break;\n            }\n            // continue the above process with the updated cur_col\n            cur_col = next_col\n        }\n        // the ball reaches to the end,\n        // cur_col is the final destination\n        ans = append(ans, cur_col);\n    }\n    return ans\n}\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var l=t(67294);const o={},r=l.createContext(o);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);