"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[16838],{35681:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(85893),r=t(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-texts/"},o="2266 - Count Number of Texts (Medium)",d={id:"2200-2299/count-number-of-texts-medium",title:"2266 - Count Number of Texts (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-texts/",source:"@site/solutions/2200-2299/2266-count-number-of-texts-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/count-number-of-texts-medium",permalink:"/solutions/2200-2299/count-number-of-texts-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2266-count-number-of-texts-medium.md",tags:[],version:"current",sidebarPosition:2266,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-number-of-texts/"},sidebar:"tutorialSidebar",previous:{title:"2265 - Count Nodes Equal to Average of Subtree (Medium)",permalink:"/solutions/2200-2299/count-nodes-equal-to-average-of-subtree-medium"},next:{title:"2267 - Check if There Is a Valid Parentheses String Path (Hard)",permalink:"/solutions/2200-2299/check-if-there-is-a-valid-parentheses-string-path-hard"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2266---count-number-of-texts-medium",children:"2266 - Count Number of Texts (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/count-number-of-texts/",children:"https://leetcode.com/problems/count-number-of-texts/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Alice is texting Bob using her phone. The ",(0,s.jsx)(n.strong,{children:"mapping"})," of digits to letters is shown in the figure below."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["In order to ",(0,s.jsx)(n.strong,{children:"add"})," a letter, Alice has to ",(0,s.jsx)(n.strong,{children:"press"})," the key of the corresponding digit ",(0,s.jsx)(n.code,{children:"i"})," times, where ",(0,s.jsx)(n.code,{children:"i"})," is the position of the letter in the key."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example, to add the letter ",(0,s.jsx)(n.code,{children:"'s'"}),", Alice has to press ",(0,s.jsx)(n.code,{children:"'7'"})," four times. Similarly, to add the letter ",(0,s.jsx)(n.code,{children:"'k'"}),", Alice has to press ",(0,s.jsx)(n.code,{children:"'5'"})," twice."]}),"\n",(0,s.jsxs)(n.li,{children:["Note that the digits ",(0,s.jsx)(n.code,{children:"'0'"})," and ",(0,s.jsx)(n.code,{children:"'1'"})," do not map to any letters, so Alice ",(0,s.jsx)(n.strong,{children:"does not"})," use them."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["However, due to an error in transmission, Bob did not receive Alice's text message but received a ",(0,s.jsx)(n.strong,{children:"string of pressed keys"})," instead."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example, when Alice sent the message ",(0,s.jsx)(n.code,{children:'"bob"'}),", Bob received the string ",(0,s.jsx)(n.code,{children:'"2266622"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Given a string ",(0,s.jsx)(n.code,{children:"pressedKeys"})," representing the string received by Bob, return ",(0,s.jsxs)(n.em,{children:["the ",(0,s.jsx)(n.strong,{children:"total number of possible text messages"})," Alice could have sent"]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Since the answer may be very large, return it ",(0,s.jsx)(n.strong,{children:"modulo"})," ",(0,s.jsx)(n.code,{children:"109 + 7"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: pressedKeys = "22233"\nOutput: 8\nExplanation:\nThe possible text messages Alice could have sent are:\n"aaadd", "abdd", "badd", "cdd", "aaae", "abe", "bae", and "ce".\nSince there are 8 possible messages, we return 8.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: pressedKeys = "222222222222222222222222222222222222"\nOutput: 82876089\nExplanation:\nThere are 2082876103 possible text messages Alice could have sent.\nSince we need to return the answer modulo 109 + 7, we return 2082876103 % (109 + 7) = 82876089.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= pressedKeys.length <= 10^5"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pressedKeys"})," only consists of digits from ",(0,s.jsx)(n.code,{children:"'2'"})," - ",(0,s.jsx)(n.code,{children:"'9'"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,s.jsx)(n.p,{children:"Every digit except 7 and 9 has 3 keys. We can iterate the input and check previous 3 results. If it is 7 or 9, then check the previous 4 results."}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countTexts(string pressedKeys) {\n        int n = pressedKeys.size(), M = 1e9 + 7;\n        // dp[i]: total number of possible text messages ended at i-th character\n        vector<int> dp(n + 1);\n        // base case\n        dp[0] = 1;\n        for (int i = 1; i <= n; i++) {\n            // take the previous one\n            dp[i] = dp[i - 1] % M;\n            // check for the case like 77\n            if (i > 1 && pressedKeys[i - 1] == pressedKeys[i - 2]) {\n                dp[i] = (dp[i] + dp[i - 2]) % M;\n                // check for the case like 777\n                if (i > 2 && pressedKeys[i - 1] == pressedKeys[i - 3]) {\n                    dp[i] = (dp[i] + dp[i - 3]) % M;\n                    // check for the case like 7777\n                    if (i > 3 && (pressedKeys[i - 1] == '7' || pressedKeys[i - 1] == '9') \n                        && pressedKeys[i - 1] == pressedKeys[i - 4]) {\n                        dp[i] = (dp[i] + dp[i - 4]) % M;\n                    }\n                }\n            }\n        }\n        return dp[n];\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);