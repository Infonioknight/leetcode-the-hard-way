"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[63206],{87288:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=o(85893),i=o(11151);const r={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/keys-and-rooms/",tags:["Depth-First Search","Breadth-First Search","Graph"]},t="0841 - Keys and Rooms (Medium)",l={id:"0800-0899/keys-and-rooms-medium",title:"0841 - Keys and Rooms (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/keys-and-rooms/",source:"@site/solutions/0800-0899/0841-keys-and-rooms-medium.md",sourceDirName:"0800-0899",slug:"/0800-0899/keys-and-rooms-medium",permalink:"/solutions/0800-0899/keys-and-rooms-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0841-keys-and-rooms-medium.md",tags:[{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{inline:!0,label:"Graph",permalink:"/solutions/tags/graph"}],version:"current",sidebarPosition:841,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/keys-and-rooms/",tags:["Depth-First Search","Breadth-First Search","Graph"]},sidebar:"tutorialSidebar",previous:{title:"0838 - Push Dominoes (Medium)",permalink:"/solutions/0800-0899/push-dominoes-medium"},next:{title:"0844 - Backspace String Compare (Easy)",permalink:"/solutions/0800-0899/backspace-string-compare-easy"}},a={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:o,TabItem:r,Tabs:t}=n;return o||h("SolutionAuthor",!0),r||h("TabItem",!0),t||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"0841---keys-and-rooms-medium",children:"0841 - Keys and Rooms (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/keys-and-rooms/",children:"https://leetcode.com/problems/keys-and-rooms/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["There are ",(0,s.jsx)(n.code,{children:"n"})," rooms labeled from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"n - 1"}),"\xa0and all the rooms are locked except for room ",(0,s.jsx)(n.code,{children:"0"}),". Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key."]}),"\n",(0,s.jsxs)(n.p,{children:["When you visit a room, you may find a set of ",(0,s.jsx)(n.strong,{children:"distinct keys"})," in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms."]}),"\n",(0,s.jsxs)(n.p,{children:["Given an array ",(0,s.jsx)(n.code,{children:"rooms"})," where ",(0,s.jsx)(n.code,{children:"rooms[i]"})," is the set of keys that you can obtain if you visited room ",(0,s.jsx)(n.code,{children:"i"}),", return ",(0,s.jsx)(n.code,{children:"true"})," ",(0,s.jsxs)(n.em,{children:["if you can visit ",(0,s.jsx)(n.strong,{children:"all"})," the rooms, or"]})," ",(0,s.jsx)(n.code,{children:"false"})," ",(0,s.jsx)(n.em,{children:"otherwise"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: rooms = [[1],[2],[3],[]]\nOutput: true\nExplanation: \nWe visit room 0 and pick up key 1.\nWe then visit room 1 and pick up key 2.\nWe then visit room 2 and pick up key 3.\nWe then visit room 3.\nSince we were able to visit every room, we return true.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: rooms = [[1,3],[3,0,1],[2],[0]]\nOutput: false\nExplanation: We can not enter room number 2 since the only key that unlocks it is in that room.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"n == rooms.length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"2 <= n <= 1000"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= rooms[i].length <= 1000"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= sum(rooms[i].length) <= 3000"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= rooms[i][j] < n"})}),"\n",(0,s.jsxs)(n.li,{children:["All the values of ",(0,s.jsx)(n.code,{children:"rooms[i]"})," are ",(0,s.jsx)(n.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,s.jsx)(n.p,{children:"We can use DFS to traverse from the first room and mark every room that we could visit. At the end, we check if all rooms have been visited or not."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(o,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void dfs(vector<vector<int>>& rooms, int i, vector<int>& vis) {\n        // mark the room i visited\n        vis[i] = 1;\n        // for each room we can go from the current room\n        for(auto r : rooms[i]) {\n            // if it is not visited\n            if(!vis[r]) {\n                // we go to that room\n                dfs(rooms, r, vis);\n            }\n        }\n    }\n    \n    bool canVisitAllRooms(vector<vector<int>>& rooms) {\n        int n = (int) rooms.size();\n        vector<int> vis(n, 0);\n        dfs(rooms, 0, vis);\n        int ok = 1;\n        for(int i = 0; i < n; i++) ok &= vis[i];\n        return ok;\n    }\n};\n"})})]}),(0,s.jsxs)(r,{value:"rs",label:"Rust",children:[(0,s.jsx)(o,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rs",children:"impl Solution {\n    fn dfs(i: usize, vis: &mut Vec<bool>, rooms: &Vec<Vec<i32>>) {\n        vis[i] = true;\n        for next in rooms[i].iter().map(|&next| next as usize) {\n            if !vis[next] {\n                Self::dfs(next, vis, rooms);\n            }\n        }\n    }\n    \n    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {\n        let mut vis = vec![false; rooms.len()];\n        Self::dfs(0, &mut vis, &rooms);\n        vis.iter().all(|&x| x)\n    }\n}\n"})})]}),(0,s.jsxs)(r,{value:"javascript",label:"JavaScript",children:[(0,s.jsx)(o,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[][]} rooms\n * @return {boolean}\n */\nvar canVisitAllRooms = function(rooms) {\n    let visited = new Set();\n    dfs(0);\n    return visited.size == rooms.length;\n    \n    function dfs(room) {\n        if (!visited.has(room)) {\n            visited.add(room);\n            for (i of rooms[room]) {\n                dfs(i);\n            }\n        }\n    }\n};\n"})})]}),(0,s.jsxs)(r,{value:"python",label:"Python",children:[(0,s.jsx)(o,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:\n        visited = set()\n        def dfs(room):\n            if room not in visited:\n                visited.add(room)\n                for i in rooms[room]:\n                    dfs(i)\n        dfs(0)\n        return len(rooms) == len(visited)\n"})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>t});var s=o(67294);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);