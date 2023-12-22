"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85551],{84171:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>v,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=r(85893),a=r(11151);const i={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/insert-interval/",tags:["Array"]},l="0057 - Insert Interval (Medium)",s={id:"0000-0099/insert-interval-medium",title:"0057 - Insert Interval (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/insert-interval/",source:"@site/solutions/0000-0099/0057-insert-interval-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/insert-interval-medium",permalink:"/solutions/0000-0099/insert-interval-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0057-insert-interval-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"}],version:"current",sidebarPosition:57,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/insert-interval/",tags:["Array"]},sidebar:"tutorialSidebar",previous:{title:"0056 - Merge Intervals (Medium)",permalink:"/solutions/0000-0099/merge-intervals-medium"},next:{title:"0058 - Length of Last Word",permalink:"/solutions/0000-0099/length-of-last-word-easy"}},v={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: One Pass",id:"approach-1-one-pass",level:2}];function c(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components},{SolutionAuthor:r,TabItem:i,Tabs:l}=e;return r||h("SolutionAuthor",!0),i||h("TabItem",!0),l||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"0057---insert-interval-medium",children:"0057 - Insert Interval (Medium)"}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/insert-interval/",children:"https://leetcode.com/problems/insert-interval/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["You are given an array of non-overlapping intervals ",(0,t.jsx)(e.code,{children:"intervals"})," where ",(0,t.jsx)(e.code,{children:"intervals[i] = [starti, endi]"})," represent the start and the end of the ",(0,t.jsx)(e.code,{children:"ith"})," interval and ",(0,t.jsx)(e.code,{children:"intervals"})," is sorted in ascending order by ",(0,t.jsx)(e.code,{children:"starti"}),". You are also given an interval ",(0,t.jsx)(e.code,{children:"newInterval = [start, end]"})," that represents the start and end of another interval."]}),"\n",(0,t.jsxs)(e.p,{children:["Insert ",(0,t.jsx)(e.code,{children:"newInterval"})," into ",(0,t.jsx)(e.code,{children:"intervals"})," such that ",(0,t.jsx)(e.code,{children:"intervals"})," is still sorted in ascending order by ",(0,t.jsx)(e.code,{children:"starti"})," and ",(0,t.jsx)(e.code,{children:"intervals"})," still does not have any overlapping intervals (merge overlapping intervals if necessary)."]}),"\n",(0,t.jsxs)(e.p,{children:["Return ",(0,t.jsx)(e.code,{children:"intervals"}),(0,t.jsx)(e.em,{children:"after the insertion"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: intervals = [[1,3],[6,9]], newInterval = [2,5]\nOutput: [[1,5],[6,9]]\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\nOutput: [[1,2],[3,10],[12,16]]\nExplanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"0 <= intervals.length <= 10^4"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"intervals[i].length == 2"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"0 <= start_i <= endi <= 10^5"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"intervals"})," is sorted by ",(0,t.jsx)(e.code,{children:"start_i"})," in ",(0,t.jsx)(e.strong,{children:"ascending"})," order."]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"newInterval.length == 2"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"0 <= start <= end <= 10^5"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-one-pass",children:"Approach 1: One Pass"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        vector<vector<int>> ans;\n        int n = intervals.size();\n        for (int i = 0; i < n; i++) {\n            if (intervals[i][1] < newInterval[0]) {\n                // current interval starts first & not covered by newInterval, add intervals[i] to ans\n                // [curInterval]\n                //                      [newInterval]\n                ans.push_back(intervals[i]);\n            } else if (intervals[i][0] > newInterval[1]) {\n                // newInterval starts first and not covered by current interval\n                // add newInterval to ans and set newInterval = curInterval\n                //                       [curInterval]\n                // [newInterval]\n                ans.push_back(newInterval);\n                newInterval = intervals[i];\n            } else if (intervals[i][1] >= newInterval[0] || intervals[i][0] <= newInterval[1]) {\n                // they are overlapped, merge them\n                // [curInterval]\n                //        [newInterval]\n                // or\n                // [newInterval]\n                //        [curInterval]\n                newInterval[0] = min(newInterval[0], intervals[i][0]);\n                newInterval[1] = max(newInterval[1], intervals[i][1]);\n            }\n        }\n        // add the last interval\n        ans.push_back(newInterval);\n        return ans;\n    }\n};\n"})})]}),(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int[][] insert(int[][] intervals, int[] newInterval) {\n        List<int[]> ans = new ArrayList<>();\n        int n = intervals.length;\n        for (int i = 0; i < n; i++) {\n            int[] curInterval = intervals[i];\n            if (intervals[i][1] < newInterval[0]) {\n                // current interval starts first & not covered by newInterval, add intervals[i] to ans\n                // [curInterval]\n                //                      [newInterval]\n                ans.add(intervals[i]);\n            } else if (intervals[i][0] > newInterval[1]) {\n                // newInterval starts first and not covered by current interval\n                // add newInterval to ans and set newInterval = curInterval\n                //                       [curInterval]\n                // [newInterval]\n                ans.add(newInterval);\n                newInterval = intervals[i];\n            } else if (intervals[i][1] >= newInterval[0] || intervals[i][0] <= newInterval[1]) {\n                // they are overlapped, merge them\n                // [curInterval]\n                //        [newInterval]\n                // or\n                // [newInterval]\n                //        [curInterval]\n                newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n                newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\n            }\n        }\n        // add the last interval\n        ans.add(newInterval);\n        return ans.toArray(new int[ans.size()][]);\n    }\n}\n\n"})})]}),(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        ans = []\n        n = len(intervals)\n        for i in range(n):\n            if intervals[i][1] < newInterval[0]:\n                # current interval starts first & not covered by newInterval, add intervals[i] to ans\n                # [curInterval]\n                #                      [newInterval]\n                ans.append(intervals[i])\n            elif intervals[i][0] > newInterval[1]:\n                # newInterval starts first and not covered by current interval\n                # Add newInterval to ans and set newInterval = curInterval\n                #                       [curInterval]\n                # [newInterval]\n                ans.append(newInterval)\n                newInterval = intervals[i]\n            elif intervals[i][1] >= newInterval[0] or intervals[i][0] <= newInterval[1]:\n                # They are overlapped, merge them\n                # [curInterval]\n                #        [newInterval]\n                # or\n                # [newInterval]\n                #        [curInterval]\n                newInterval[0] = min(newInterval[0], intervals[i][0])\n                newInterval[1] = max(newInterval[1], intervals[i][1])\n        # add the last interval\n        ans.append(newInterval)\n        return ans\n\n"})})]}),(0,t.jsxs)(i,{value:"rs",label:"Rust",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rs",children:"use std::cmp::min;\nuse std::cmp::max;\n\nimpl Solution {\n    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {\n        let mut ans = vec![];\n        let n = intervals.len();\n        let mut new_interval = new_interval;\n        for i in 0 .. n {\n            if intervals[i][1] < new_interval[0] {\n                // current interval starts first & not covered by newInterval, add intervals[i] to ans\n                // [curInterval]\n                //                      [newInterval]\n                ans.push(intervals[i].clone());\n            } else if intervals[i][0] > new_interval[1] {\n                // NewInterval starts first and not covered by current interval\n                // Add newInterval to ans and set newInterval = curInterval\n                //                       [curInterval]\n                // [newInterval]\n                ans.push(new_interval.clone());\n                new_interval = intervals[i].clone();\n            } else if intervals[i][1] >= new_interval[0] || intervals[i][0] <= new_interval[1] {\n                // they are overlapped, merge them\n                // [curInterval]\n                //        [newInterval]\n                // or\n                // [newInterval]\n                //        [curInterval]\n                new_interval[0] = min(new_interval[0], intervals[i][0]);\n                new_interval[1] = max(new_interval[1], intervals[i][1]);\n            }\n        }\n        // add the last interval\n        ans.push(new_interval.clone());\n        ans\n    }\n}\n"})})]}),(0,t.jsxs)(i,{value:"js",label:"JavaScript",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"/**\n * @param {number[][]} intervals\n * @param {number[]} newInterval\n * @return {number[][]}\n */\nvar insert = function (intervals, newInterval) {\n  let res = [];\n  for (i = 0; i < intervals.length; i++) {\n    if (newInterval[1] < intervals[i][0]) {\n      res.push(newInterval);\n      return res.concat(intervals.slice(i, intervals.length));\n    } else if (newInterval[0] > intervals[i][1]) {\n      res.push(intervals[i]);\n    } else {\n      newInterval[0] = [Math.min(newInterval[0], intervals[i][0])];\n      newInterval[1] = [Math.max(newInterval[1], intervals[i][1])];\n    }\n  }\n  res.push(newInterval);\n  return res;\n};\n"})})]})]})]})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}function h(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>l});var t=r(67294);const a={},i=t.createContext(a);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);