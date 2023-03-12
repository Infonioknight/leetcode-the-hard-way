"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[57784],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return x},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/",tags:["Array","Breadth-First Search","Matrix"]},p="1926 - Nearest Exit from Entrance in Maze (Medium)",s={unversionedId:"1900-1999/nearest-exit-from-entrance-in-maze-medium",id:"1900-1999/nearest-exit-from-entrance-in-maze-medium",title:"1926 - Nearest Exit from Entrance in Maze (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/",source:"@site/solutions/1900-1999/1926-nearest-exit-from-entrance-in-maze-medium.md",sourceDirName:"1900-1999",slug:"/1900-1999/nearest-exit-from-entrance-in-maze-medium",permalink:"/solutions/1900-1999/nearest-exit-from-entrance-in-maze-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1926-nearest-exit-from-entrance-in-maze-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:1926,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/",tags:["Array","Breadth-First Search","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"1916 - Count Ways to Build Rooms in an Ant Colony (Hard)",permalink:"/solutions/1900-1999/count-ways-to-build-rooms-in-an-ant-colony"},next:{title:"1929 - Concatenation of Array (Easy)",permalink:"/solutions/1900-1999/concatenation-of-array-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},d=u("Tabs"),h=u("TabItem"),f=u("SolutionAuthor"),k={toc:c};function x(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1926---nearest-exit-from-entrance-in-maze-medium"},"1926 - Nearest Exit from Entrance in Maze (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/"},"https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," matrix ",(0,i.kt)("inlineCode",{parentName:"p"},"maze")," (",(0,i.kt)("strong",{parentName:"p"},"0-indexed"),") with empty cells (represented as ",(0,i.kt)("inlineCode",{parentName:"p"},"'.'"),") and walls (represented as ",(0,i.kt)("inlineCode",{parentName:"p"},"'+'"),"). You are also given the ",(0,i.kt)("inlineCode",{parentName:"p"},"entrance")," of the maze, where ",(0,i.kt)("inlineCode",{parentName:"p"},"entrance = [entrancerow, entrancecol]")," denotes the row and column of the cell you are initially standing at."),(0,i.kt)("p",null,"In one step, you can move one cell ",(0,i.kt)("strong",{parentName:"p"},"up"),", ",(0,i.kt)("strong",{parentName:"p"},"down"),", ",(0,i.kt)("strong",{parentName:"p"},"left"),", or ",(0,i.kt)("strong",{parentName:"p"},"right"),". You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the ",(0,i.kt)("strong",{parentName:"p"},"nearest exit")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"entrance"),". An ",(0,i.kt)("strong",{parentName:"p"},"exit")," is defined as an ",(0,i.kt)("strong",{parentName:"p"},"empty cell")," that is at the ",(0,i.kt)("strong",{parentName:"p"},"border")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"maze"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"entrance")," ",(0,i.kt)("strong",{parentName:"p"},"does not count")," as an exit."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"number of steps")," in the shortest path from the"),(0,i.kt)("inlineCode",{parentName:"p"},"entrance"),(0,i.kt)("em",{parentName:"p"},"to the nearest exit, or"),(0,i.kt)("inlineCode",{parentName:"p"},"-1"),(0,i.kt)("em",{parentName:"p"},"if no such path exists"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]\nOutput: 1\nExplanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].\nInitially, you are at the entrance cell [1,2].\n- You can reach [1,0] by moving 2 steps left.\n- You can reach [0,2] by moving 1 step up.\nIt is impossible to reach [2,3] from the entrance.\nThus, the nearest exit is [0,2], which is 1 step away.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]\nOutput: 2\nExplanation: There is 1 exit in this maze at [1,2].\n[1,0] does not count as an exit since it is the entrance cell.\nInitially, you are at the entrance cell [1,0].\n- You can reach [1,2] by moving 2 steps right.\nThus, the nearest exit is [1,2], which is 2 steps away.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: maze = [[".","+"]], entrance = [0,0]\nOutput: -1\nExplanation: There are no exits in this maze.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maze.length == m")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maze[i].length == n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maze[i][j]")," is either ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"'+'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entrance.length == 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= entrancerow < m")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= entrancecol < n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entrance")," will always be an empty cell.")),(0,i.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // 4 directions for x-axis and y-axis\n    int dirx[4] = { -1, 0, 0, 1 };\n    int diry[4] = { 0, 1, -1, 0 };\n    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {\n        int m = maze.size(), n = maze[0].size();\n        queue<array<int, 3>> q; // {i, j, steps}\n        // push the starting point (i, j) with initial step 0\n        q.push({entrance[0], entrance[1], 0});\n        // BFS\n        while (!q.empty()) {\n            auto [i, j, steps] = q.front(); q.pop();\n            // handle exit condition, we can exit if\n            // 1. the current position is not the entrance \n            bool isAtTheEntrance = i == entrance[0] && j == entrance[1];\n            // 2. and the current position is at the border\n            bool isAtTheBorder = i == 0 || j == 0 || i == m - 1 || j == n - 1;\n            if (!isAtTheEntrance && isAtTheBorder) return steps;\n            for (int d = 0; d < 4; d++) {\n                int next_i = i + dirx[d];\n                int next_j = j + diry[d];\n                // check if we can move to (next_i, next_j)\n                if (next_i >= 0 && next_j >= 0 && next_i < m && next_j < n && maze[next_i][next_j] == '.') {\n                    // if so, we mark the next cell to `+` so that we won't visit it again\n                    maze[next_i][next_j] = '+';\n                    // add the next position to the queue with steps + 1\n                    q.push({next_i, next_j, steps + 1});\n                }\n            }\n        }\n        return -1;\n    }\n};\n")))))}x.isMDXComponent=!0}}]);