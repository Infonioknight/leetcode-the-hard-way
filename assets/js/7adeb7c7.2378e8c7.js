"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[80627],{15426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(85893),s=t(11151);const r={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/"},o="2186 - Minimum Number of Steps to Make Two Strings Anagram II (Medium)",a={id:"2100-2199/minimum-number-of-steps-to-make-two-strings-anagram-ii-medium",title:"2186 - Minimum Number of Steps to Make Two Strings Anagram II (Medium)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/",source:"@site/solutions/2100-2199/2186-minimum-number-of-steps-to-make-two-strings-anagram-ii-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-number-of-steps-to-make-two-strings-anagram-ii-medium",permalink:"/solutions/2100-2199/minimum-number-of-steps-to-make-two-strings-anagram-ii-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2186-minimum-number-of-steps-to-make-two-strings-anagram-ii-medium.md",tags:[],version:"current",sidebarPosition:2186,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/"},sidebar:"tutorialSidebar",previous:{title:"2185 - Counting Words With a Given Prefix (Easy)",permalink:"/solutions/2100-2199/counting-words-with-a-given-prefix-easy"},next:{title:"2187 - Minimum Time to Complete Trips (Medium)",permalink:"/solutions/2100-2199/minimum-time-to-complete-trips-medium"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: 2 Dictionaries",id:"approach-1-2-dictionaries",level:2},{value:"Approach 2: 1 Dictionary",id:"approach-2-1-dictionary",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2186---minimum-number-of-steps-to-make-two-strings-anagram-ii-medium",children:"2186 - Minimum Number of Steps to Make Two Strings Anagram II (Medium)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/",children:"https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given two strings ",(0,i.jsx)(n.code,{children:"s"})," and ",(0,i.jsx)(n.code,{children:"t"}),". In one step, you can append ",(0,i.jsx)(n.strong,{children:"any character"})," to either ",(0,i.jsx)(n.code,{children:"s"})," or ",(0,i.jsx)(n.code,{children:"t"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsx)(n.em,{children:"the minimum number of steps to make"})," ",(0,i.jsx)(n.code,{children:"s"})," ",(0,i.jsx)(n.em,{children:"and"})," ",(0,i.jsx)(n.code,{children:"t"})," _ ",(0,i.jsx)(n.strong,{children:"anagrams"})," of each other._"]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.strong,{children:"anagram"})," of a string is a string that contains the same characters with a different (or the same) ordering."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: s = "leetcode", t = "coats"\nOutput: 7\nExplanation: \n- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".\n- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".\n"leetcodeas" and "coatsleede" are now anagrams of each other.\nWe used a total of 2 + 5 = 7 steps.\nIt can be shown that there is no way to make them anagrams of each other with less than 7 steps.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: s = "night", t = "thing"\nOutput: 0\nExplanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= s.length, t.length <= 2 * 10^5"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s"})," and ",(0,i.jsx)(n.code,{children:"t"})," consist of lowercase English letters."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-2-dictionaries",children:"Approach 1: 2 Dictionaries"}),"\n",(0,i.jsx)(n.p,{children:"We can store the characters of both strings into two dictionaries, and we make the following observation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To make the number of any character ",(0,i.jsx)(n.code,{children:"c"})," equal in string ",(0,i.jsx)(n.code,{children:"s"})," and ",(0,i.jsx)(n.code,{children:"t"}),", we must add the difference between ",(0,i.jsx)(n.code,{children:"s.count(c)"})," and ",(0,i.jsx)(n.code,{children:"t.count(c)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In python ",(0,i.jsx)(n.code,{children:"defaultdict"}),", if we simply perform ",(0,i.jsx)(n.code,{children:"for key in d1"})," , we will miss out the ",(0,i.jsx)(n.code,{children:"keys"})," in ",(0,i.jsx)(n.code,{children:"d2"}),". If we iterate both dictionaries, we will need to cancel out double counts."]}),"\n",(0,i.jsx)(n.p,{children:"Hence, The simplest way is to visit each character once (by iterating from 0 to 25) and find the differences of characters between 2 dicts."}),"\n",(0,i.jsx)(t,{name:"@heiheihang"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def minSteps(self, s: str, t: str) -> int:\n\n    # initialize the dictionaries\n    d1 = defaultdict(int)\n    d2 = defaultdict(int)\n\n    # count the number of characters in each string\n    for c in s:\n        d1[c] += 1\n\n    for c in t:\n        d2[c] += 1\n\n    # initialize result\n    res = 0\n\n    # iterate all 26 lowercase characters\n    for i in range(26):\n        # generate the character from i\n        c = chr(ord('a') + i)\n\n        # add the difference of character count to result\n        res += abs(d1[c] - d2[c])\n\n    return res\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"approach-2-1-dictionary",children:"Approach 2: 1 Dictionary"}),"\n",(0,i.jsxs)(n.p,{children:["We can actually use 1 dictionary with less code. The main idea is that we are only concerned with the ",(0,i.jsx)(n.strong,{children:"difference"})," of each characters in both strings, so we can simply take the count of character of ",(0,i.jsx)(n.code,{children:"s"})," as positive and that of ",(0,i.jsx)(n.code,{children:"t"})," as negative."]}),"\n",(0,i.jsx)(t,{name:"@heiheihang"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def minSteps(self, s: str, t: str) -> int:\n\n    # initialize the dictionary\n    d = defaultdict(int)\n\n    # count c in s as positive\n    for c in s:\n        d[c] += 1\n        \n    #count c in t as negative\n    for c in t:\n        d[c] -= 1\n    # initialize result\n    res = 0\n\n    # iterate all characters present in both strings\n    for key in d:\n\n        # add the difference of character count to result\n        res += abs(d[key])\n\n    return res\n"})}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minSteps(string s, string t) {\n        int ans = 0;\n        unordered_map<int, int> m;\n        for (auto x : s) m[x - 'a']++;\n        for (auto x : t) m[x - 'a']--;\n        for (int i = 0; i < 26; i++) ans += abs(m[i]);\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);