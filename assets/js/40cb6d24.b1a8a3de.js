"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",tags:["Depth-First Search","Breadth-First Search","Graph","Topological Sort"]},a="0210 - Course Schedule II (Medium)",s={unversionedId:"0200-0299/course-schedule-ii-medium",id:"0200-0299/course-schedule-ii-medium",title:"0210 - Course Schedule II (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",source:"@site/solutions/0200-0299/0210-course-schedule-ii-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/course-schedule-ii-medium",permalink:"/solutions/0200-0299/course-schedule-ii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0210-course-schedule-ii-medium.md",tags:[{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Graph",permalink:"/solutions/tags/graph"},{label:"Topological Sort",permalink:"/solutions/tags/topological-sort"}],version:"current",sidebarPosition:210,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/",tags:["Depth-First Search","Breadth-First Search","Graph","Topological Sort"]},sidebar:"tutorialSidebar",previous:{title:"0208 - Implement Trie (Prefix Tree) (Medium)",permalink:"/solutions/0200-0299/implement-trie-medium"},next:{title:"0211 - Design Add and Search Words Data Structure (Medium)",permalink:"/solutions/0200-0299/design-add-and-search-words-data-structure-medium"}},l={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Topological Sorting",id:"approach-1-topological-sorting",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=p("Tabs"),d=p("TabItem"),m=p("SolutionAuthor"),h={toc:u},g="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0210---course-schedule-ii-medium"},"0210 - Course Schedule II (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"There are a total of ",(0,o.kt)("inlineCode",{parentName:"p"},"numCourses")," courses you have to take, labeled from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"numCourses - 1"),". You are given an array ",(0,o.kt)("inlineCode",{parentName:"p"},"prerequisites")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"prerequisites[i] = [ai, bi]")," indicates that you ",(0,o.kt)("strong",{parentName:"p"},"must")," take course ",(0,o.kt)("inlineCode",{parentName:"p"},"bi")," first if you want to take course ",(0,o.kt)("inlineCode",{parentName:"p"},"ai"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For example, the pair ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 1]"),", indicates that to take course ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," you have to first take course ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ordering of courses you should take to finish all courses"),". If there are many valid answers, return ",(0,o.kt)("strong",{parentName:"p"},"any")," of them. If it is impossible to finish all courses, return ",(0,o.kt)("strong",{parentName:"p"},"an empty array"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: numCourses = 2, prerequisites = [[1,0]]\nOutput: [0,1]\nExplanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\nOutput: [0,2,1,3]\nExplanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: numCourses = 1, prerequisites = []\nOutput: [0]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= numCourses <= 2000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= prerequisites.length <= numCourses * (numCourses - 1)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prerequisites[i].length == 2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= ai, bi < numCourses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ai != bi")),(0,o.kt)("li",{parentName:"ul"},"All the pairs ",(0,o.kt)("inlineCode",{parentName:"li"},"[ai, bi]")," are ",(0,o.kt)("strong",{parentName:"li"},"distinct"),".")),(0,o.kt)("h2",{id:"approach-1-topological-sorting"},"Approach 1: Topological Sorting"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// for topological sorting tutorial,\n// see https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/topological-sorting\nstruct TopologicalSort {\n    int n;\n    vector<int> indegree;\n    vector<int> orders;\n    vector<vector<int>> G;\n    bool isTopologicalSorted = false;\n\n    TopologicalSort(vector<vector<int>>& g, vector<int>& in) {\n        G = g;\n        n = (int) G.size();\n        indegree = in;\n\n        int res = 0;\n        queue<int> q;\n        for(int i = 0; i < n; i++) {\n            if(indegree[i] == 0) {\n                q.push(i);\n            }\n        }\n        while(!q.empty()) {\n            auto u = q.front(); q.pop();\n            orders.push_back(u);\n            for(auto v : G[u]) {\n                if(--indegree[v] == 0) {\n                    q.push(v);\n                }\n            }\n            res++;\n        }\n        isTopologicalSorted = res == n;\n    }\n};\n\nclass Solution {\npublic:\n    vector<int> findOrder(int n, vector<vector<int>>& prerequisites) {\n        // define the graph\n        vector<vector<int>> g(n);\n        // define indegree\n        vector<int> indegree(n);\n        // build the graph\n        for(auto p : prerequisites) {\n            // we have to take p[1] in order to take p[0]\n            g[p[1]].push_back(p[0]);\n            // increase indegree by 1 for p[0]\n            indegree[p[0]]++;\n        }\n        // init topological sort\n        TopologicalSort ts(g, indegree);\n        // we can finish all courses only if we can topologically sort\n        // hence, return an empty array if it cannot be sorted\n        if (!ts.isTopologicalSorted) return {};\n        // else return the order\n        return ts.orders;\n    }\n};\n"))),(0,o.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    # Time Complexity: O(V + E) where v is number of vertexes/courses and\n    # E is the number of edges in our graph, preqrequisite connections.\n    # Space Complexity: O(V + E). V size indegrees, V+E adj_list, \n    # V sized top_sort list, and our queue could reach size V\n    # in the worst case scenario.\n    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:\n        # initialize our indegrees -> idx = course, value = number of\n        # courses we must take before we can take that course.\n        indegrees = [0] * numCourses\n        # adjacency list -> idx = course, list = courses we can take\n        # we we take this one.\n        adj_list = [[] for _ in range(numCourses)]\n        # loop our courses in prerequisites\n        for c1, c2 in prerequisites:\n            # must take c2 before c1, increment c1's indegrees\n            indegrees[c1] += 1\n            # after we take c2, we can take c1, add c1 to c2's adj_list.\n            adj_list[c2].append(c1)\n        # initialize queue, and find all courses without prerequisites.\n        q = deque()\n        for i in range(numCourses):\n            if indegrees[i] == 0:\n                q.append(i)\n        # topological sort\n        top_sort = []\n        while q:\n            # pop the course off the queue\n            course = q.popleft()\n            # add it to our top_sort list\n            top_sort.append(course)\n            # loop all courses we can take after this course in adj_list.\n            for c in adj_list[course]:\n                # decrement indegrees and check if it reached 0.\n                indegrees[c] -= 1\n                if indegrees[c] == 0:\n                    # reached 0, we can take the courses\n                    q.append(c)\n        # return our top sort list if we completed all courses\n        return top_sort if len(top_sort) == numCourses else []\n\n")))))}f.isMDXComponent=!0}}]);