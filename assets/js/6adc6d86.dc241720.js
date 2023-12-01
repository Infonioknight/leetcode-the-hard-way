"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29707],{81464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(85893),a=t(11151);const r={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",tags:["Hash Map"]},o="1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)",i={id:"1300-1399/minimum-number-of-steps-to-make-two-strings-anagram-medium",title:"1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",source:"@site/solutions/1300-1399/1347-minimum-number-of-steps-to-make-two-strings-anagram-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/minimum-number-of-steps-to-make-two-strings-anagram-medium",permalink:"/solutions/1300-1399/minimum-number-of-steps-to-make-two-strings-anagram-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1347-minimum-number-of-steps-to-make-two-strings-anagram-medium.md",tags:[{label:"Hash Map",permalink:"/solutions/tags/hash-map"}],version:"current",sidebarPosition:1347,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"1346 - Check If N and Its Double Exist (Easy)",permalink:"/solutions/1300-1399/check-if-n-and-its-double-exist-easy"},next:{title:"1349 - Maximum Students Taking Exam (Hard)",permalink:"/solutions/1300-1399/maximum-students-taking-exam-hard"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1347---minimum-number-of-steps-to-make-two-strings-anagram-easy",children:"1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",children:"https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given two strings of the same length ",(0,s.jsx)(n.code,{children:"s"})," and ",(0,s.jsx)(n.code,{children:"t"}),". In one step you can choose ",(0,s.jsx)(n.strong,{children:"any character"})," of ",(0,s.jsx)(n.code,{children:"t"})," and replace it with ",(0,s.jsx)(n.strong,{children:"another character"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsx)(n.em,{children:"the minimum number of steps"})," to make ",(0,s.jsx)(n.code,{children:"t"})," an anagram of ",(0,s.jsx)(n.code,{children:"s"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.strong,{children:"Anagram"})," of a string is a string that contains the same characters with a different (or the same) ordering."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "bab", t = "aba"\nOutput: 1\nExplanation: Replace the first \'a\' in t with b, t = "bba" which is anagram of s.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: s = \"leetcode\", t = \"practice\"\nOutput: 5\nExplanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "anagram", t = "mangaar"\nOutput: 0\nExplanation: "anagram" and "mangaar" are anagrams. \n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= s.length <= 5 * 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"s.length == t.length"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," and ",(0,s.jsx)(n.code,{children:"t"})," consist of lowercase English letters only."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minSteps(string s, string t) {\n        int ans = 0;\n        unordered_map<int, int> m;\n        // Count the frequency of characters of each string.\n        // Loop over all characters if the frequency of a character in t is less than the frequency of the same character in s\n        // then add the difference between the frequencies to the answer.\n        for (auto x : s) m[x - 'a']++;\n        for (auto x : t) m[x - 'a']--;\n        for (auto x : m) if (x.second > 0) ans += x.second;\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(67294);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);