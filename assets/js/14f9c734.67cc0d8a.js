"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[78019],{79047:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(85893),s=i(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",tags:["Array","Dynamic Programming"]},o="1335 - Minimum Difficulty of a Job Schedule (Hard)",l={id:"1300-1399/minimum-difficulty-of-a-job-schedule-hard",title:"1335 - Minimum Difficulty of a Job Schedule (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",source:"@site/solutions/1300-1399/1335-minimum-difficulty-of-a-job-schedule-hard.md",sourceDirName:"1300-1399",slug:"/1300-1399/minimum-difficulty-of-a-job-schedule-hard",permalink:"/solutions/1300-1399/minimum-difficulty-of-a-job-schedule-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1335-minimum-difficulty-of-a-job-schedule-hard.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:1335,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",permalink:"/solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"},next:{title:"1337 - The K Weakest Rows in a Matrix (Easy)",permalink:"/solutions/1300-1399/the-k-weakest-rows-in-a-matrix-easy"}},r={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:i,TabItem:a,Tabs:o}=n;return i||m("SolutionAuthor",!0),a||m("TabItem",!0),o||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"1335---minimum-difficulty-of-a-job-schedule-hard",children:"1335 - Minimum Difficulty of a Job Schedule (Hard)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",children:"https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You want to schedule a list of jobs in ",(0,t.jsx)(n.code,{children:"d"})," days. Jobs are dependent (i.e To work on the ",(0,t.jsx)(n.code,{children:"ith"})," job, you have to finish all the jobs ",(0,t.jsx)(n.code,{children:"j"})," where ",(0,t.jsx)(n.code,{children:"0 <= j < i"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["You have to finish ",(0,t.jsx)(n.strong,{children:"at least"})," one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the ",(0,t.jsx)(n.code,{children:"d"})," days. The difficulty of a day is the maximum difficulty of a job done on that day."]}),"\n",(0,t.jsxs)(n.p,{children:["You are given an integer array ",(0,t.jsx)(n.code,{children:"jobDifficulty"})," and an integer ",(0,t.jsx)(n.code,{children:"d"}),". The difficulty of the ",(0,t.jsx)(n.code,{children:"ith"})," job is ",(0,t.jsx)(n.code,{children:"jobDifficulty[i]"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.em,{children:"the minimum difficulty of a job schedule"}),". If you cannot find a schedule for the jobs return ",(0,t.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: jobDifficulty = [6,5,4,3,2,1], d = 2\nOutput: 7\nExplanation: First day you can finish the first 5 jobs, total difficulty = 6.\nSecond day you can finish the last job, total difficulty = 1.\nThe difficulty of the schedule = 6 + 1 = 7\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: jobDifficulty = [9,9,9], d = 4\nOutput: -1\nExplanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: jobDifficulty = [1,1,1], d = 3\nOutput: 3\nExplanation: The schedule is one job per day. total difficulty will be 3.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= jobDifficulty.length <= 300"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= jobDifficulty[i] <= 1000"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= d <= 10"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,t.jsxs)(n.p,{children:["Visualization for ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsx)(n.mn,{children:"6"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mi,{children:"d"}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsx)(n.mn,{children:"3"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n = 6, d = 3"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord",children:"6"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"3"})]})]})]}),". (by @liangyong0411)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/users/images/73fd2807-5852-40ed-bbdb-ea2850fa5083_1665905141.513028.png",alt:"img"})}),"\n",(0,t.jsx)(o,{children:(0,t.jsxs)(a,{value:"py",label:"Python",children:[(0,t.jsx)(i,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:\n        n = len(jobDifficulty)\n    \n        @cache\n        # dp(i, k): min difficulty when you start working on i-th job at day `k`\n        def dp(i, k):\n            # reach the last day\n            # we put all the remaining jobs on this day\n            # so we return the one with max difficulty\n            if k == d: return max(jobDifficulty[i:])\n            # init min difficulty with inf \n            res = float('inf')\n            # cur is the max difficulty we've seen so far\n            # init current max with 0\n            cur = 0\n            # for jobDifficulty like 6 5 4 3 2 1, \n            # we can have following ways to distribute them into two days\n            # 6 | 5 4 3 2 1\n            # 6 5 | 4 3 2 1 \n            # 6 5 4 | 3 2 1\n            # 6 5 4 3 | 2 1\n            # 6 5 4 3 2 | 1\n            # notice that each day we must have at least one task\n            # given the starting index `i`, \n            # we can only at most choose the jobs till the position `n - d + k - 1`\n            for j in range(i, n - d + k):\n                cur = max(cur, jobDifficulty[j])\n                # if j-th job is the last job on day `k`, \n                # the max difficulty for day `k` is `cur`\n                # and we need to start (j + 1)-th job on the next day\n                # the result would be `cur + dp(j + 1, k + 1)`\n                # then we take the min\n                res = min(res, cur + dp(j + 1, k + 1))\n            return res\n        # n < d : you will have free days. hence you cannot find a schedule for the given jobs\n        # e.g. Example 2\n        # otherwise, we start working on 0-th job at day 1\n        return -1 if n < d else dp(0, 1)\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(67294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);