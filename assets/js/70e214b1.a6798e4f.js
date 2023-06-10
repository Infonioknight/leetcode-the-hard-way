"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[63206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var m=2;m<i;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const i={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/keys-and-rooms/",tags:["Depth-First Search","Breadth-First Search","Graph"]},a="0841 - Keys and Rooms (Medium)",s={unversionedId:"0800-0899/keys-and-rooms-medium",id:"0800-0899/keys-and-rooms-medium",title:"0841 - Keys and Rooms (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/keys-and-rooms/",source:"@site/solutions/0800-0899/0841-keys-and-rooms-medium.md",sourceDirName:"0800-0899",slug:"/0800-0899/keys-and-rooms-medium",permalink:"/solutions/0800-0899/keys-and-rooms-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0841-keys-and-rooms-medium.md",tags:[{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Graph",permalink:"/solutions/tags/graph"}],version:"current",sidebarPosition:841,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/keys-and-rooms/",tags:["Depth-First Search","Breadth-First Search","Graph"]},sidebar:"tutorialSidebar",previous:{title:"0838 - Push Dominoes (Medium)",permalink:"/solutions/0800-0899/push-dominoes-medium"},next:{title:"0844 - Backspace String Compare (Easy)",permalink:"/solutions/0800-0899/backspace-string-compare-easy"}},l={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Tabs"),c=p("TabItem"),d=p("SolutionAuthor"),k={toc:m},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0841---keys-and-rooms-medium"},"0841 - Keys and Rooms (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/keys-and-rooms/"},"https://leetcode.com/problems/keys-and-rooms/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"There are ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," rooms labeled from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"n - 1"),"\xa0and all the rooms are locked except for room ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key."),(0,r.kt)("p",null,"When you visit a room, you may find a set of ",(0,r.kt)("strong",{parentName:"p"},"distinct keys")," in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms."),(0,r.kt)("p",null,"Given an array ",(0,r.kt)("inlineCode",{parentName:"p"},"rooms")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"rooms[i]")," is the set of keys that you can obtain if you visited room ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),", return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)("em",{parentName:"p"},"if you can visit ",(0,r.kt)("strong",{parentName:"em"},"all")," the rooms, or")," ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ",(0,r.kt)("em",{parentName:"p"},"otherwise"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: rooms = [[1],[2],[3],[]]\nOutput: true\nExplanation: \nWe visit room 0 and pick up key 1.\nWe then visit room 1 and pick up key 2.\nWe then visit room 2 and pick up key 3.\nWe then visit room 3.\nSince we were able to visit every room, we return true.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: rooms = [[1,3],[3,0,1],[2],[0]]\nOutput: false\nExplanation: We can not enter room number 2 since the only key that unlocks it is in that room.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == rooms.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2 <= n <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= rooms[i].length <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= sum(rooms[i].length) <= 3000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= rooms[i][j] < n")),(0,r.kt)("li",{parentName:"ul"},"All the values of ",(0,r.kt)("inlineCode",{parentName:"li"},"rooms[i]")," are ",(0,r.kt)("strong",{parentName:"li"},"unique"),".")),(0,r.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,r.kt)("p",null,"We can use DFS to traverse from the first room and mark every room that we could visit. At the end, we check if all rooms have been visited or not."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void dfs(vector<vector<int>>& rooms, int i, vector<int>& vis) {\n        // mark the room i visited\n        vis[i] = 1;\n        // for each room we can go from the current room\n        for(auto r : rooms[i]) {\n            // if it is not visited\n            if(!vis[r]) {\n                // we go to that room\n                dfs(rooms, r, vis);\n            }\n        }\n    }\n    \n    bool canVisitAllRooms(vector<vector<int>>& rooms) {\n        int n = (int) rooms.size();\n        vector<int> vis(n, 0);\n        dfs(rooms, 0, vis);\n        int ok = 1;\n        for(int i = 0; i < n; i++) ok &= vis[i];\n        return ok;\n    }\n};\n"))),(0,r.kt)(c,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"impl Solution {\n    fn dfs(i: usize, vis: &mut Vec<bool>, rooms: &Vec<Vec<i32>>) {\n        vis[i] = true;\n        for next in rooms[i].iter().map(|&next| next as usize) {\n            if !vis[next] {\n                Self::dfs(next, vis, rooms);\n            }\n        }\n    }\n    \n    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {\n        let mut vis = vec![false; rooms.len()];\n        Self::dfs(0, &mut vis, &rooms);\n        vis.iter().all(|&x| x)\n    }\n}\n"))),(0,r.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[][]} rooms\n * @return {boolean}\n */\nvar canVisitAllRooms = function(rooms) {\n    let visited = new Set();\n    dfs(0);\n    return visited.size == rooms.length;\n    \n    function dfs(room) {\n        if (!visited.has(room)) {\n            visited.add(room);\n            for (i of rooms[room]) {\n                dfs(i);\n            }\n        }\n    }\n};\n"))),(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:\n        visited = set()\n        def dfs(room):\n            if room not in visited:\n                visited.add(room)\n                for i in rooms[room]:\n                    dfs(i)\n        dfs(0)\n        return len(rooms) == len(visited)\n")))))}f.isMDXComponent=!0}}]);