"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[42467],{44662:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=o(85893),t=o(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"},i="0452 - Minimum Number of Arrows to Burst Balloons (Medium)",l={id:"0400-0499/minimum-number-of-arrows-to-burst-balloons-medium",title:"0452 - Minimum Number of Arrows to Burst Balloons (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",source:"@site/solutions/0400-0499/0452-minimum-number-of-arrows-to-burst-balloons-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/minimum-number-of-arrows-to-burst-balloons-medium",permalink:"/solutions/0400-0499/minimum-number-of-arrows-to-burst-balloons-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0452-minimum-number-of-arrows-to-burst-balloons-medium.md",tags:[],version:"current",sidebarPosition:452,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"},sidebar:"tutorialSidebar",previous:{title:"0451 - Sort Characters By Frequency (Medium)",permalink:"/solutions/0400-0499/sort-characters-by-frequency-medium"},next:{title:"0464 - Can I Win (Medium)",permalink:"/solutions/0400-0499/can-i-win-medium"}},a={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"0452---minimum-number-of-arrows-to-burst-balloons-medium",children:"0452 - Minimum Number of Arrows to Burst Balloons (Medium)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",children:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array ",(0,r.jsx)(n.code,{children:"points"})," where ",(0,r.jsx)(n.code,{children:"points[i] = [xstart, xend]"})," denotes a balloon whose ",(0,r.jsx)(n.strong,{children:"horizontal diameter"})," stretches between ",(0,r.jsx)(n.code,{children:"xstart"})," and ",(0,r.jsx)(n.code,{children:"xend"}),". You do not know the exact y-coordinates of the balloons."]}),"\n",(0,r.jsxs)(n.p,{children:["Arrows can be shot up ",(0,r.jsx)(n.strong,{children:"directly vertically"})," (in the positive y-direction) from different points along the x-axis. A balloon with ",(0,r.jsx)(n.code,{children:"xstart"})," and ",(0,r.jsx)(n.code,{children:"xend"})," is ",(0,r.jsx)(n.strong,{children:"burst"})," by an arrow shot at ",(0,r.jsx)(n.code,{children:"x"})," if ",(0,r.jsx)(n.code,{children:"xstart <= x <= xend"}),". There is ",(0,r.jsx)(n.strong,{children:"no limit"})," to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path."]}),"\n",(0,r.jsxs)(n.p,{children:["Given the array ",(0,r.jsx)(n.code,{children:"points"}),", return ",(0,r.jsxs)(n.em,{children:["the ",(0,r.jsx)(n.strong,{children:"minimum"})," number of arrows that must be shot to burst all balloons"]}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: points = [[10,16],[2,8],[1,6],[7,12]]\nOutput: 2\nExplanation: The balloons can be burst by 2 arrows:\n- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].\n- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: points = [[1,2],[3,4],[5,6],[7,8]]\nOutput: 4\nExplanation: One arrow needs to be shot for each balloon for a total of 4 arrows.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: points = [[1,2],[2,3],[3,4],[4,5]]\nOutput: 2\nExplanation: The balloons can be burst by 2 arrows:\n- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].\n- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= points.length <= 10^5"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"points[i].length == 2"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"-2^31 <= xstart < xend <= 2^31 - 1"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,r.jsxs)(n.p,{children:["The answer is at least 1. First we sort the balloons by the end coordinate. Set the first end coordinate as ",(0,r.jsx)(n.code,{children:"cur_r"}),". Iterate over all balloons to check if the balloon starts after ",(0,r.jsx)(n.code,{children:"cur_r"}),". If so, increase answer by 1 and set ",(0,r.jsx)(n.code,{children:"cur_r = r"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findMinArrowShots(vector<vector<int>>& points) {\n        sort(points.begin(), points.end(), [&](const vector<int>& x, const vector<int>& y) {\n            return x[1] < y[1];  \n        });\n        int ans = 1, cur_r = points[0][1];\n        for (auto p : points) {\n            int l = p[0], r = p[1];\n            if (cur_r < l) ans++, cur_r = r;\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var r=o(67294);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);