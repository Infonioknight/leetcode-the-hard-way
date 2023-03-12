"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[20333],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=i.createContext({}),l=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=l(t.components);return i.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=l(n),u=r,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||o;return n?i.createElement(d,a(a({ref:e},c),{},{components:n})):i.createElement(d,a({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56763:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/cheapest-flights-within-k-stops/"},p="0787 - Cheapest Flights Within K Stops (Medium)",l={unversionedId:"0700-0799/cheapest-flights-within-k-stops-medium",id:"0700-0799/cheapest-flights-within-k-stops-medium",title:"0787 - Cheapest Flights Within K Stops (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/cheapest-flights-within-k-stops/",source:"@site/solutions/0700-0799/0787-cheapest-flights-within-k-stops-medium.md",sourceDirName:"0700-0799",slug:"/0700-0799/cheapest-flights-within-k-stops-medium",permalink:"/solutions/0700-0799/cheapest-flights-within-k-stops-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0787-cheapest-flights-within-k-stops-medium.md",tags:[],version:"current",sidebarPosition:787,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/cheapest-flights-within-k-stops/"},sidebar:"tutorialSidebar",previous:{title:"0785 -  Is Graph Bipartite? (Medium)",permalink:"/solutions/0700-0799/is-graph-bipartite-medium"},next:{title:"0799 - Champagne Tower (Medium)",permalink:"/solutions/0700-0799/champagne-tower-medium"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2},{value:"Approach 1: Bellman Ford",id:"approach-1-bellman-ford",level:2}],h=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}},u=h("Tabs"),d=h("TabItem"),f=h("SolutionAuthor"),k={toc:m};function g(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0787---cheapest-flights-within-k-stops-medium"},"0787 - Cheapest Flights Within K Stops (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/cheapest-flights-within-k-stops/"},"https://leetcode.com/problems/cheapest-flights-within-k-stops/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"There are ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," cities connected by some number of flights. You are given an array ",(0,o.kt)("inlineCode",{parentName:"p"},"flights")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"flights[i] = [fromi, toi, pricei]")," indicates that there is a flight from city ",(0,o.kt)("inlineCode",{parentName:"p"},"fromi")," to city ",(0,o.kt)("inlineCode",{parentName:"p"},"toi")," with cost ",(0,o.kt)("inlineCode",{parentName:"p"},"pricei"),"."),(0,o.kt)("p",null,"You are also given three integers ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dst"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"the cheapest price")," from")," ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," ",(0,o.kt)("em",{parentName:"p"},"to")," ",(0,o.kt)("inlineCode",{parentName:"p"},"dst")," ",(0,o.kt)("em",{parentName:"p"},"with at most")," ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," ",(0,o.kt)("em",{parentName:"p"},"stops.")," If there is no such route, return __ ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1\nOutput: 700\nExplanation:\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.\nNote that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1\nOutput: 200\nExplanation:\nThe graph is shown above.\nThe optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0\nOutput: 500\nExplanation:\nThe graph is shown above.\nThe optimal path with no stops from city 0 to 2 is marked in red and has cost 500.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= flights.length <= (n * (n - 1) / 2)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flights[i].length == 3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= fromi, toi < n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fromi != toi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= pricei <= 10^4")),(0,o.kt)("li",{parentName:"ul"},"There will not be any multiple flights between two cities."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= src, dst, k < n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src != dst"))),(0,o.kt)("h2",{id:"approach-1-dp"},"Approach 1: DP"),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// TC: O(F * K)\n// SC: O(N * K) \n// where \n// - F is the number of flights\n// - K is the number of stops\n// - N is the number of cities and K is the number of stops\nclass Solution {\npublic:\n    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {\n        // dp[i][j]: min cost to reach city j using at most i edges from src\n        vector<vector<int>> dp(k + 2, vector<int>(n, INT_MAX));\n        // base case\n        for (int i = 0; i <= k + 1; i++) dp[i][src] = 0;\n        // iterate each stop\n        for (int i = 1; i <= k + 1; i++) {\n            // iterate each flight\n            for (auto f : flights) {\n                int from = f[0], to = f[1], cost = f[2];\n                // ensure city `from` is reachable \n                if (dp[i - 1][from] != INT_MAX) {\n                    // from + cost -> to\n                    dp[i][to] = min(dp[i][to], dp[i - 1][from] + cost);   \n                }\n            }\n        }\n        // if dp[k + 1][dst] == INT_MAX, it means it is unreachable\n        // else return the cost\n        return dp[k + 1][dst] == INT_MAX ? -1 : dp[k + 1][dst];\n    }\n};\n")))),(0,o.kt)("h2",{id:"approach-1-bellman-ford"},"Approach 1: Bellman Ford"),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// TC: O(F * K + N * K)\n// SC: O(F) \n// where \n// - F is the number of flights\n// - K is the number of stops\n// - N is the number of cities and K is the number of stops\nclass Solution {\npublic:\n    // https://leetcodethehardway.com/tutorials/graph-theory/bellman-ford-algorithm\n    template<typename T_a3, typename T_vector>\n    void bellman_ford(T_a3 &g, T_vector &dist, int src, int mx_edges) {\n        dist[src] = 0;\n        for (int i = 0; i <= mx_edges; i++) {\n            T_vector ndist = dist;\n            for (auto x : g) {\n                auto [from, to, cost] = x;\n                ndist[to] = min(ndist[to], dist[from] + cost);\n            }\n            dist = ndist;\n        }\n    }\n    \n    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {\n        // we can directly use bellman ford template here (prerequisite: you need to understand bellman ford algo)\n        // bellman ford algo is used to find the shortest paths from source node to other nodes in a weighted graph\n        vector<array<int, 3>> g;\n        // initially cost with a large value\n        // cost[i] means the cheapest price from src to city i\n        vector<int> cost(n, 1e9);\n        // reconstruct a bit - {src, dst, cost}\n        for (auto f : flights) g.push_back({f[0], f[1], f[2]});\n        bellman_ford(g, cost, src, k);\n        // if cost[dst] == 1e9, it means it is unreachable\n        // else we can show cost[dst]\n        return cost[dst] == 1e9 ? -1 : cost[dst];\n    }\n};\n")))))}g.isMDXComponent=!0}}]);