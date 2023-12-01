"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92166],{6378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=n(85893),r=n(11151);const o={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-time-to-complete-trips/"},s="2187 - Minimum Time to Complete Trips (Medium)",l={id:"2100-2199/minimum-time-to-complete-trips-medium",title:"2187 - Minimum Time to Complete Trips (Medium)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-time-to-complete-trips/",source:"@site/solutions/2100-2199/2187-minimum-time-to-complete-trips-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-time-to-complete-trips-medium",permalink:"/solutions/2100-2199/minimum-time-to-complete-trips-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2187-minimum-time-to-complete-trips-medium.md",tags:[],version:"current",sidebarPosition:2187,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-time-to-complete-trips/"},sidebar:"tutorialSidebar",previous:{title:"2186 - Minimum Number of Steps to Make Two Strings Anagram II (Medium)",permalink:"/solutions/2100-2199/minimum-number-of-steps-to-make-two-strings-anagram-ii-medium"},next:{title:"2188 - Minimum Time to Finish the Race (Hard)",permalink:"/solutions/2100-2199/minimum-time-to-finish-the-race-hard"}},m={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"2187---minimum-time-to-complete-trips-medium",children:"2187 - Minimum Time to Complete Trips (Medium)"}),"\n",(0,i.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/minimum-time-to-complete-trips/",children:"https://leetcode.com/problems/minimum-time-to-complete-trips/"})}),"\n",(0,i.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(t.p,{children:["You are given an array ",(0,i.jsx)(t.code,{children:"time"})," where ",(0,i.jsx)(t.code,{children:"time[i]"})," denotes the time taken by the ",(0,i.jsx)(t.code,{children:"ith"})," bus to complete ",(0,i.jsx)(t.strong,{children:"one trip"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Each bus can make multiple trips ",(0,i.jsx)(t.strong,{children:"successively"}),"; that is, the next trip can start ",(0,i.jsx)(t.strong,{children:"immediately after"})," completing the current trip. Also, each bus operates ",(0,i.jsx)(t.strong,{children:"independently"}),"; that is, the trips of one bus do not influence the trips of any other bus."]}),"\n",(0,i.jsxs)(t.p,{children:["You are also given an integer ",(0,i.jsx)(t.code,{children:"totalTrips"}),", which denotes the number of trips all buses should make ",(0,i.jsx)(t.strong,{children:"in total"}),". Return _the ",(0,i.jsx)(t.strong,{children:"minimum time"})," required for all buses to complete ",(0,i.jsx)(t.strong,{children:"at least"})," _ ",(0,i.jsx)(t.code,{children:"totalTrips"})," ",(0,i.jsx)(t.em,{children:"trips"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Input: time = [1,2,3], totalTrips = 5\nOutput: 3\nExplanation:\n- At time t = 1, the number of trips completed by each bus are [1,0,0]. \n  The total number of trips completed is 1 + 0 + 0 = 1.\n- At time t = 2, the number of trips completed by each bus are [2,1,0]. \n  The total number of trips completed is 2 + 1 + 0 = 3.\n- At time t = 3, the number of trips completed by each bus are [3,1,1]. \n  The total number of trips completed is 3 + 1 + 1 = 5.\nSo the minimum time needed for all buses to complete at least 5 trips is 3.\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Input: time = [2], totalTrips = 1\nOutput: 2\nExplanation:\nThere is only one bus, and it will complete its first trip at t = 2.\nSo the minimum time needed to complete 1 trip is 2. \n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"1 <= time.length <= 10^5"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"1 <= time[i], totalTrips <= 10^7"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,i.jsx)(t.p,{children:"This is a classic problem of finding the smallest integer given a bound under a monotonic function."}),"\n",(0,i.jsxs)(t.p,{children:["We can perform binary search on the ",(0,i.jsx)(t.code,{children:"time"})," needed to finish the trips, and we check that if we are able to complete ",(0,i.jsx)(t.code,{children:"totalTrips"})," within the given amount of time. There are two components to this solution:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Binary Searching the smallest amount of time"}),"\n",(0,i.jsxs)(t.li,{children:["Checking if ",(0,i.jsx)(t.code,{children:"totalTrips"})," can be completed given a time"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["There are many similar problems to this question, and you should know this: ",(0,i.jsx)(t.a,{href:"https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems",children:"https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems"})]}),"\n",(0,i.jsx)(n,{name:"@heiheihang"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def minimumTime(self, time: List[int], totalTrips: int) -> int:\n        \n        #checker function\n        def check(x):\n            nonlocal totalTrips\n            \n            #keep track of how many trips we have visited\n            trips = 0\n            for t in time:\n            \n                #we can visit x//t trips (rounded down)\n                trips += x // t\n                \n                #return true when we have fulfilled the requirement\n                if(trips >= totalTrips):\n                    return True\n            #return false if the requirement has not been fulfilled\n            return False\n        \n        #standard binary search setting of left pointer and right pointer\n        lp = 0\n        rp = time[0] * totalTrips + 1\n        res = rp\n        \n        while(lp <= rp):\n            \n            #standard middle point of binary search\n            mid = (lp+rp) // 2\n            \n            #check if the middle point satisfies the requirement\n            if(check(mid)):\n                #if it satisfies, update the result\n                #also decrease the right pointer to look at smaller times\n                res = mid\n                rp = mid - 1\n            else:\n                #increase the left pointer to look at bigger times otherwise\n                lp = mid + 1\n                \n        return res\n"})}),"\n",(0,i.jsx)(n,{name:"@wingkwong"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long minimumTime(vector<int>& time, int totalTrips) {\n        long long l = *min_element(time.begin(), time.end());\n        long long r = accumulate(time.begin(), time.end(), 0LL) * totalTrips;\n        while (l < r) {\n            long long m = l + (r - l) / 2, trips = 0;\n            for (auto x : time) trips += (m / x);\n            if (trips < totalTrips) l = m + 1;\n            else r = m;\n        }\n        return l;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var i=n(67294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);