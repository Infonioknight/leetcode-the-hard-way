"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1902],{56256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(85893),r=t(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/sorting-the-sentence/",tags:["Sorting"]},o="1859 - Sorting the Sentence (Easy)",a={id:"1800-1899/sorting-the-sentence-easy",title:"1859 - Sorting the Sentence (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/sorting-the-sentence/",source:"@site/solutions/1800-1899/1859-sorting-the-sentence-easy.md",sourceDirName:"1800-1899",slug:"/1800-1899/sorting-the-sentence-easy",permalink:"/solutions/1800-1899/sorting-the-sentence-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1859-sorting-the-sentence-easy.md",tags:[{inline:!0,label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:1859,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sorting-the-sentence/",tags:["Sorting"]},sidebar:"tutorialSidebar",previous:{title:"1855 - Maximum Distance Between a Pair of Values (Medium)",permalink:"/solutions/1800-1899/maximum-distance-between-a-pair-of-values-medium"},next:{title:"1866 - Number of Ways to Rearrange Sticks With K Sticks Visible (Hard)",permalink:"/solutions/1800-1899/number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting with Comparator",id:"approach-1-sorting-with-comparator",level:2},{value:"Approach 2: Sorting without Comparator",id:"approach-2-sorting-without-comparator",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1859---sorting-the-sentence-easy",children:"1859 - Sorting the Sentence (Easy)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/sorting-the-sentence/",children:"https://leetcode.com/problems/sorting-the-sentence/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"sentence"})," is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters."]}),"\n",(0,s.jsxs)(n.p,{children:["A sentence can be ",(0,s.jsx)(n.strong,{children:"shuffled"})," by appending the ",(0,s.jsx)(n.strong,{children:"1-indexed word position"})," to each word then rearranging the words in the sentence."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example, the sentence ",(0,s.jsx)(n.code,{children:'"This is a sentence"'})," can be shuffled as ",(0,s.jsx)(n.code,{children:'"sentence4 a3 is2 This1"'})," or ",(0,s.jsx)(n.code,{children:'"is2 sentence4 This1 a3"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Given a ",(0,s.jsx)(n.strong,{children:"shuffled sentence"})," ",(0,s.jsx)(n.code,{children:"s"})," containing no more than ",(0,s.jsx)(n.code,{children:"9"})," words, reconstruct and return ",(0,s.jsx)(n.em,{children:"the original sentence"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "is2 sentence4 This1 a3"\nOutput: "This is a sentence"\nExplanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "Myself2 Me1 I4 and3"\nOutput: "Me Myself and I"\nExplanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"2 <= s.length <= 200"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," consists of lowercase and uppercase English letters, spaces, and digits from ",(0,s.jsx)(n.code,{children:"1"})," to ",(0,s.jsx)(n.code,{children:"9"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The number of words in ",(0,s.jsx)(n.code,{children:"s"})," is between ",(0,s.jsx)(n.code,{children:"1"})," and ",(0,s.jsx)(n.code,{children:"9"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The words in ",(0,s.jsx)(n.code,{children:"s"})," are separated by a single space."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," contains no leading or trailing spaces."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-sorting-with-comparator",children:"Approach 1: Sorting with Comparator"}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    // split template\n    vector<string> split(string str, char delim) {\n        string line;\n        vector<string> res;\n        stringstream ss(str);\n        while(getline(ss, line, delim)) res.push_back(line);\n        return res;\n    }\n    \n    string sortSentence(string s) {\n        string ans;\n        // split the string by space\n        // "is2 sentence4 This1 a3" -> ["is2", "sentence4", "This1", "a3"]\n        vector<string> ss = split(s, \' \');\n        // we need to sort a pair of words with orders -> {word, order}\n        // so we use vector<pair<string, int>>\n        vector<pair<string, int>> v((int) ss.size());\n        // we put word in the first place\n        for (auto& x : ss) {\n            v.push_back({\n                x.substr(0, (int) x.size() - 1), // word\n                x.back() // order\n            });\n        }\n        // by default, sort() would sort the first element first, then sort the second one\n        // in this case, we would like to sort by the order which is the second element \n        // hence, we need to define a custom comparator\n        sort(v.begin(), v.end(), [&](const pair<string, int> &x, const pair<string, int>& y) {\n            // compare the second element\n            return x.second < y.second;\n        });\n        // build the final string\n        for (auto& x : v) {\n            if ((int) ans.size() > 0) ans += \' \'; \n            ans += x.first;\n        }\n        return ans;\n    }\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-sorting-without-comparator",children:"Approach 2: Sorting without Comparator"}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    // split template\n    vector<string> split(string str, char delim) {\n        string line;\n        vector<string> res;\n        stringstream ss(str);\n        while(getline(ss, line, delim)) res.push_back(line);\n        return res;\n    }\n    \n    string sortSentence(string s) {\n        string ans;\n        // split the string by space\n        // "is2 sentence4 This1 a3" -> ["is2", "sentence4", "This1", "a3"]\n        vector<string> ss = split(s, \' \');\n        // we need to sort a pair of words with orders -> {order, word}\n        // so we use vector<pair<int, string>>\n        vector<pair<int, string>> v((int) ss.size());\n        // we put order in the first place \n        // so that we don\'t need to write a custom comparator in sorting\n        for (auto& x : ss) {\n            v.push_back({\n                x.back(), // order\n                x.substr(0, (int) x.size() - 1) // word\n            });\n        }\n        // sort it without a custom comparator\n        sort(v.begin(), v.end());\n        // build the final string\n        for (auto& x : v) {\n            if ((int) ans.size() > 0) ans += \' \'; \n            ans += x.second;\n        }\n        return ans;\n    }\n};\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);