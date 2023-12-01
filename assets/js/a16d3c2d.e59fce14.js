"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[62349],{32756:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(85893),t=r(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/"},o="2273 - Find Resultant Array After Removing Anagrams (Easy)",i={id:"2200-2299/find-resultant-array-after-removing-anagrams-easy",title:"2273 - Find Resultant Array After Removing Anagrams (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/",source:"@site/solutions/2200-2299/2273-find-resultant-array-after-removing-anagrams-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/find-resultant-array-after-removing-anagrams-easy",permalink:"/solutions/2200-2299/find-resultant-array-after-removing-anagrams-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2273-find-resultant-array-after-removing-anagrams-easy.md",tags:[],version:"current",sidebarPosition:2273,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/"},sidebar:"tutorialSidebar",previous:{title:"2267 - Check if There Is a Valid Parentheses String Path (Hard)",permalink:"/solutions/2200-2299/check-if-there-is-a-valid-parentheses-string-path-hard"},next:{title:"2274 - Maximum Consecutive Floors Without Special Floors (Medium)",permalink:"/solutions/2200-2299/maximum-consecutive-floors-without-special-floors-medium"}},d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"2273---find-resultant-array-after-removing-anagrams-easy",children:"2273 - Find Resultant Array After Removing Anagrams (Easy)"}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/",children:"https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given a ",(0,a.jsx)(n.strong,{children:"0-indexed"})," string array ",(0,a.jsx)(n.code,{children:"words"}),", where ",(0,a.jsx)(n.code,{children:"words[i]"})," consists of lowercase English letters."]}),"\n",(0,a.jsxs)(n.p,{children:["In one operation, select any index ",(0,a.jsx)(n.code,{children:"i"})," such that ",(0,a.jsx)(n.code,{children:"0 < i < words.length"})," and ",(0,a.jsx)(n.code,{children:"words[i - 1]"})," and ",(0,a.jsx)(n.code,{children:"words[i]"})," are ",(0,a.jsx)(n.strong,{children:"anagrams"}),", and ",(0,a.jsx)(n.strong,{children:"delete"})," ",(0,a.jsx)(n.code,{children:"words[i]"})," from ",(0,a.jsx)(n.code,{children:"words"}),". Keep performing this operation as long as you can select an index that satisfies the conditions."]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsx)(n.code,{children:"words"})," ",(0,a.jsx)(n.em,{children:"after performing all operations"}),". It can be shown that selecting the indices for each operation in ",(0,a.jsx)(n.strong,{children:"any"})," arbitrary order will lead to the same result."]}),"\n",(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.strong,{children:"Anagram"})," is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, ",(0,a.jsx)(n.code,{children:'"dacb"'})," is an anagram of ",(0,a.jsx)(n.code,{children:'"abdc"'}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: words = ["abba","baba","bbaa","cd","cd"]\nOutput: ["abba","cd"]\nExplanation:\nOne of the ways we can obtain the resultant array is by using the following operations:\n- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].\n  Now words = ["abba","baba","cd","cd"].\n- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].\n  Now words = ["abba","cd","cd"].\n- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].\n  Now words = ["abba","cd"].\nWe can no longer perform any operations, so ["abba","cd"] is the final answer.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: words = ["a","b","c","d","e"]\nOutput: ["a","b","c","d","e"]\nExplanation:\nNo two adjacent strings in words are anagrams of each other, so no operations are performed.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= words.length <= 100"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= words[i].length <= 10"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"words[i]"})," consists of lowercase English letters."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-sorting",children:"Approach 1: Sorting"}),"\n",(0,a.jsx)(n.p,{children:"To check if two strings are anagrams, we can sort them to see if they are same or count the frequency of each letter in both string. The first string cannot be deleted. Starting from the second one, if the current one and the previous one are not anagrams, then add the current one to answer."}),"\n",(0,a.jsx)(r,{name:"@wingkwong"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<string> removeAnagrams(vector<string>& words) {\n        vector<string> ans;\n        ans.push_back(words.front());\n        for (int i = 1; i < words.size(); i++) {\n            string s = words[i];\n            string t = words[i - 1];\n            sort(s.begin(), s.end());\n            sort(t.begin(), t.end());\n            if (s != t) ans.push_back(words[i]);\n        }\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var a=r(67294);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);