"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34275],{35263:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=r(85893),t=r(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",tags:["Depth-First Search","Breadth-First Search","Graph","Topological Sort"]},s="0210 - Course Schedule II (Medium)",c={id:"0200-0299/course-schedule-ii-medium",title:"0210 - Course Schedule II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",source:"@site/solutions/0200-0299/0210-course-schedule-ii-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/course-schedule-ii-medium",permalink:"/solutions/0200-0299/course-schedule-ii-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0210-course-schedule-ii-medium.md",tags:[{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{inline:!0,label:"Graph",permalink:"/solutions/tags/graph"},{inline:!0,label:"Topological Sort",permalink:"/solutions/tags/topological-sort"}],version:"current",sidebarPosition:210,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",tags:["Depth-First Search","Breadth-First Search","Graph","Topological Sort"]},sidebar:"tutorialSidebar",previous:{title:"0208 - Implement Trie (Prefix Tree) (Medium)",permalink:"/solutions/0200-0299/implement-trie-medium"},next:{title:"0211 - Design Add and Search Words Data Structure (Medium)",permalink:"/solutions/0200-0299/design-add-and-search-words-data-structure-medium"}},l={},a=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Topological Sorting",id:"approach-1-topological-sorting",level:2}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:r,TabItem:i,Tabs:s}=n;return r||h("SolutionAuthor",!0),i||h("TabItem",!0),s||h("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"0210---course-schedule-ii-medium",children:"0210 - Course Schedule II (Medium)"}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["There are a total of ",(0,o.jsx)(n.code,{children:"numCourses"})," courses you have to take, labeled from ",(0,o.jsx)(n.code,{children:"0"})," to ",(0,o.jsx)(n.code,{children:"numCourses - 1"}),". You are given an array ",(0,o.jsx)(n.code,{children:"prerequisites"})," where ",(0,o.jsx)(n.code,{children:"prerequisites[i] = [ai, bi]"})," indicates that you ",(0,o.jsx)(n.strong,{children:"must"})," take course ",(0,o.jsx)(n.code,{children:"bi"})," first if you want to take course ",(0,o.jsx)(n.code,{children:"ai"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For example, the pair ",(0,o.jsx)(n.code,{children:"[0, 1]"}),", indicates that to take course ",(0,o.jsx)(n.code,{children:"0"})," you have to first take course ",(0,o.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsx)(n.em,{children:"the ordering of courses you should take to finish all courses"}),". If there are many valid answers, return ",(0,o.jsx)(n.strong,{children:"any"})," of them. If it is impossible to finish all courses, return ",(0,o.jsx)(n.strong,{children:"an empty array"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: numCourses = 2, prerequisites = [[1,0]]\nOutput: [0,1]\nExplanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\nOutput: [0,2,1,3]\nExplanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: numCourses = 1, prerequisites = []\nOutput: [0]\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= numCourses <= 2000"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"0 <= prerequisites.length <= numCourses * (numCourses - 1)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"prerequisites[i].length == 2"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"0 <= ai, bi < numCourses"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ai != bi"})}),"\n",(0,o.jsxs)(n.li,{children:["All the pairs ",(0,o.jsx)(n.code,{children:"[ai, bi]"})," are ",(0,o.jsx)(n.strong,{children:"distinct"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1-topological-sorting",children:"Approach 1: Topological Sorting"}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsxs)(i,{value:"cpp",label:"C++",children:[(0,o.jsx)(r,{name:"@wingkwong"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"// for topological sorting tutorial,\n// see https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/topological-sorting\nstruct TopologicalSort {\n    int n;\n    vector<int> indegree;\n    vector<int> orders;\n    vector<vector<int>> G;\n    bool isTopologicalSorted = false;\n\n    TopologicalSort(vector<vector<int>>& g, vector<int>& in) {\n        G = g;\n        n = (int) G.size();\n        indegree = in;\n\n        int res = 0;\n        queue<int> q;\n        for(int i = 0; i < n; i++) {\n            if(indegree[i] == 0) {\n                q.push(i);\n            }\n        }\n        while(!q.empty()) {\n            auto u = q.front(); q.pop();\n            orders.push_back(u);\n            for(auto v : G[u]) {\n                if(--indegree[v] == 0) {\n                    q.push(v);\n                }\n            }\n            res++;\n        }\n        isTopologicalSorted = res == n;\n    }\n};\n\nclass Solution {\npublic:\n    vector<int> findOrder(int n, vector<vector<int>>& prerequisites) {\n        // define the graph\n        vector<vector<int>> g(n);\n        // define indegree\n        vector<int> indegree(n);\n        // build the graph\n        for(auto p : prerequisites) {\n            // we have to take p[1] in order to take p[0]\n            g[p[1]].push_back(p[0]);\n            // increase indegree by 1 for p[0]\n            indegree[p[0]]++;\n        }\n        // init topological sort\n        TopologicalSort ts(g, indegree);\n        // we can finish all courses only if we can topologically sort\n        // hence, return an empty array if it cannot be sorted\n        if (!ts.isTopologicalSorted) return {};\n        // else return the order\n        return ts.orders;\n    }\n};\n"})})]}),(0,o.jsxs)(i,{value:"python",label:"Python",children:[(0,o.jsx)(r,{name:"@ColeB2"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"class Solution:\n    # Time Complexity: O(V + E) where v is number of vertexes/courses and\n    # E is the number of edges in our graph, preqrequisite connections.\n    # Space Complexity: O(V + E). V size indegrees, V+E adj_list, \n    # V sized top_sort list, and our queue could reach size V\n    # in the worst case scenario.\n    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:\n        # initialize our indegrees -> idx = course, value = number of\n        # courses we must take before we can take that course.\n        indegrees = [0] * numCourses\n        # adjacency list -> idx = course, list = courses we can take\n        # we we take this one.\n        adj_list = [[] for _ in range(numCourses)]\n        # loop our courses in prerequisites\n        for c1, c2 in prerequisites:\n            # must take c2 before c1, increment c1's indegrees\n            indegrees[c1] += 1\n            # after we take c2, we can take c1, add c1 to c2's adj_list.\n            adj_list[c2].append(c1)\n        # initialize queue, and find all courses without prerequisites.\n        q = deque()\n        for i in range(numCourses):\n            if indegrees[i] == 0:\n                q.append(i)\n        # topological sort\n        top_sort = []\n        while q:\n            # pop the course off the queue\n            course = q.popleft()\n            # add it to our top_sort list\n            top_sort.append(course)\n            # loop all courses we can take after this course in adj_list.\n            for c in adj_list[course]:\n                # decrement indegrees and check if it reached 0.\n                indegrees[c] -= 1\n                if indegrees[c] == 0:\n                    # reached 0, we can take the courses\n                    q.append(c)\n        # return our top sort list if we completed all courses\n        return top_sort if len(top_sort) == numCourses else []\n\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var o=r(67294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);