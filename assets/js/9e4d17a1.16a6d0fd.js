"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[99374],{17134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(85893),i=t(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/",tags:["String","Dynamic Programming","Simulation"]},s="2380 - Time Needed to Rearrange a Binary String (Medium)",c={id:"2300-2399/time-needed-to-rearrange-a-binary-string-medium",title:"2380 - Time Needed to Rearrange a Binary String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/",source:"@site/solutions/2300-2399/2380-time-needed-to-rearrange-a-binary-string-medium.md",sourceDirName:"2300-2399",slug:"/2300-2399/time-needed-to-rearrange-a-binary-string-medium",permalink:"/solutions/2300-2399/time-needed-to-rearrange-a-binary-string-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2380-time-needed-to-rearrange-a-binary-string-medium.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Simulation",permalink:"/solutions/tags/simulation"}],version:"current",sidebarPosition:2380,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/",tags:["String","Dynamic Programming","Simulation"]},sidebar:"tutorialSidebar",previous:{title:"2379 - Minimum Recolors to Get K Consecutive Black Blocks (Easy)",permalink:"/solutions/2300-2399/minimum-recolors-to-get-k-consecutive-black-blocks-easy"},next:{title:"2381 - Shifting Letters II (Medium)",permalink:"/solutions/2300-2399/shifting-letters-ii-medium"}},a={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2380---time-needed-to-rearrange-a-binary-string-medium",children:"2380 - Time Needed to Rearrange a Binary String (Medium)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["You are given a binary string ",(0,r.jsx)(n.code,{children:"s"}),". In one second, ",(0,r.jsx)(n.strong,{children:"all"})," occurrences of ",(0,r.jsx)(n.code,{children:'"01"'})," are ",(0,r.jsx)(n.strong,{children:"simultaneously"})," replaced with ",(0,r.jsx)(n.code,{children:'"10"'}),". This process ",(0,r.jsx)(n.strong,{children:"repeats"})," until no occurrences of ",(0,r.jsx)(n.code,{children:'"01"'})," exist."]}),"\n",(0,r.jsxs)(n.p,{children:["Return",(0,r.jsx)(n.em,{children:"the number of seconds needed to complete this process."})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: s = "0110101"\nOutput: 4\nExplanation: \nAfter one second, s becomes "1011010".\nAfter another second, s becomes "1101100".\nAfter the third second, s becomes "1110100".\nAfter the fourth second, s becomes "1111000".\nNo occurrence of "01" exists any longer, and the process needed 4 seconds to complete,\nso we return 4.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: s = "11100"\nOutput: 0\nExplanation:\nNo occurrence of "01" exists in s, and the processes needed 0 seconds to complete,\nso we return 0.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= s.length <= 1000"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s[i]"})," is either ",(0,r.jsx)(n.code,{children:"'0'"})," or ",(0,r.jsx)(n.code,{children:"'1'"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Follow up:"})}),"\n",(0,r.jsx)(n.p,{children:"Can you solve this problem in O(n) time complexity?"}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,r.jsx)(t,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int secondsToRemoveOccurrences(string s) {\n        int n = s.size(), need = 1, ans = 0;\n        // bruce force approach as n <= 1000\n        while (need) {\n            // unset need\n            need = 0;\n            // iterate the string\n            for (int i = 1; i < n; i++) {\n                // check if there is 01\n                if (s[i - 1] == '0' && s[i] == '1') {\n                    // if so, swap them to become 10\n                    swap(s[i], s[i - 1]);\n                    // skip this character\n                    i += 1;\n                    // after swapping, it could possibly produce another 01\n                    // hence set it to 1\n                    need = 1;\n                }                \n            }\n            // if we swapped it, then we need 1 second for the action\n            ans += need;\n        }\n        return ans;\n    }\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(67294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);