"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[74154],{20605:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=s(85893),t=s(11151);const r={description:"Author: @wingkwong, @ganajayant, @radojicic23 | https://leetcode.com/problems/group-anagrams/",tags:["Array","Hash Table","String","Sorting"]},i="0049 - Group Anagrams (Medium)",o={id:"0000-0099/group-anagrams-medium",title:"0049 - Group Anagrams (Medium)",description:"Author: @wingkwong, @ganajayant, @radojicic23 | https://leetcode.com/problems/group-anagrams/",source:"@site/solutions/0000-0099/0049-group-anagrams-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/group-anagrams-medium",permalink:"/solutions/0000-0099/group-anagrams-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0049-group-anagrams-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"String",permalink:"/solutions/tags/string"},{label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:49,frontMatter:{description:"Author: @wingkwong, @ganajayant, @radojicic23 | https://leetcode.com/problems/group-anagrams/",tags:["Array","Hash Table","String","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0048 - Rotate Image (Medium)",permalink:"/solutions/0000-0099/rotate-image-medium"},next:{title:"0050 - Pow(x, n) (Medium)",permalink:"/solutions/0000-0099/pow-x-n-medium"}},l={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting + Hash Map",id:"approach-1-sorting--hash-map",level:2},{value:"Approach 2: Hash Map with Prime Numbers",id:"approach-2-hash-map-with-prime-numbers",level:2}];function c(n){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...n.components},{SolutionAuthor:s,TabItem:r,Tabs:i}=e;return s||m("SolutionAuthor",!0),r||m("TabItem",!0),i||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"0049---group-anagrams-medium",children:"0049 - Group Anagrams (Medium)"}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/group-anagrams/",children:"https://leetcode.com/problems/group-anagrams/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["Given an array of strings ",(0,a.jsx)(e.code,{children:"strs"}),", group ",(0,a.jsx)(e.strong,{children:"the anagrams"})," together. You can return the answer in ",(0,a.jsx)(e.strong,{children:"any order"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["An ",(0,a.jsx)(e.strong,{children:"Anagram"})," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: strs = ["eat","tea","tan","ate","nat","bat"]\nOutput: [["bat"],["nat","tan"],["ate","eat","tea"]]\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: strs = [""]\nOutput: [[""]]\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: strs = ["a"]\nOutput: [["a"]]\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"1 <= strs.length <= 10^4"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"0 <= strs[i].length <= 100"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"strs[i]"})," consists of lowercase English letters."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-sorting--hash-map",children:"Approach 1: Sorting + Hash Map"}),"\n",(0,a.jsxs)(e.p,{children:["To check if ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"s"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," and ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"t"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"t"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})})]})," are anagrams, one of the ways is to sort them both and check if they are equal. For example, if we sort ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsx)(e.mi,{children:"a"}),(0,a.jsx)(e.mi,{children:"n"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"tan"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"an"})]})})]})," and ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"a"}),(0,a.jsx)(e.mi,{children:"t"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"nat"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"na"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})})]}),", we will get ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"a"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"t"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"ant"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})})]}),". Therefore, we can group them together."]}),"\n",(0,a.jsx)(e.p,{children:"We can use a hash map to store the sorted string as a key, and push the original value to an array. At the end, we iterate the hash map and push the corresponding array to our final answer."}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsxs)(r,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    // all anagrams in the same group would have the same frequency for each character\n    // e.g. ["nat","tan"] - both have 1 \'a\', 1\'t\', and 1\'n\'\n    // in other words, we can group the anagrams by their frequencies\n    // another observation is that after sorting all anagrams in the group,\n    // they would have the same result (because they have same frequency of each word)\n    // ["nat","tan"] -> "ant"\n    // so we can also group the anagrams by its sorted key\n    // below it the group by sorted key version\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // we need to a hashmap to store an array of the anagrams\n        // with its sorted string as the key\n        // e.g. "ant":  ["nat","tan"]\n        unordered_map<string, vector<string>> m;\n        // iterate each string\n        for(auto& x : strs) {\n            // since we need to know the original value,\n            // we copy `x` to `t` for sorting\n            string t = x;\n            // sort it to make the key\n            sort(t.begin(), t.end());\n            // push the orginal the value under its sorted key\n            m[t].push_back(x);\n        }\n        // build the final anwser\n        vector<vector<string>> ans;\n        // x.second is the array of the anagrams under the key `x.first`\n        for(auto& x : m) ans.push_back(x.second);\n        return ans;\n    }\n};\n'})})]}),(0,a.jsxs)(r,{value:"java",label:"Java",children:[(0,a.jsx)(s,{name:"@ganajayant"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"class Solution {\n    private String sortString(String str) {\n        char[] chars = str.toCharArray();\n        java.util.Arrays.sort(chars);\n        return new String(chars);\n    }\n\n    public List<List<String>> groupAnagrams(String[] strs) {\n        HashMap<String, LinkedList<String>> hm = new HashMap<>();\n        for (int i = 0; i < strs.length; i++) {\n            String sortedstring = sortString(strs[i]);\n            if (hm.containsKey(sortedstring)) {\n                hm.get(sortedstring).add(strs[i]);\n            } else {\n                hm.put(sortedstring, new LinkedList<String>());\n                hm.get(sortedstring).add(strs[i]);\n            }\n        }\n        List<List<String>> ll = new LinkedList<List<String>>();\n        for (Map.Entry<String, LinkedList<String>> entry : hm.entrySet()) {\n            ll.add((List<String>) entry.getValue());\n        }\n        return ll;\n    }\n}\n"})})]}),(0,a.jsxs)(r,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        hashmap = defaultdict(list)\n        res = []\n\n        for word in strs:\n            sorted_word = ''.join(sorted(word))\n            hashmap[sorted_word].append(word)\n\n        for i in hashmap:\n            res.append(hashmap[i])\n        return res\n"})})]}),(0,a.jsxs)(r,{value:"js",label:"JavaScript",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function(strs) {\n    let ans = [];\n    let hashMap = {};\n    for (let i = 0; i < strs.length; i++) {\n        let word = strs[i];\n        let sortedWord = word.split("").sort().join("");\n        if (hashMap[sortedWord]) {\n            hashMap[sortedWord].push(word);\n        } else {\n            hashMap[sortedWord] = [word];\n        }\n    }\n    for (let i in hashMap) {\n        ans.push(hashMap[i]);\n    }\n    return ans;\n};\n'})})]})]}),"\n",(0,a.jsx)(e.h2,{id:"approach-2-hash-map-with-prime-numbers",children:"Approach 2: Hash Map with Prime Numbers"}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(r,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        int M = 1e9 + 9;\n        vector<int> primes = {\n            2, 3, 5, 7, 11,\n            13, 17, 19, 23, 29,\n            31, 37, 41, 43, 47,\n            53, 59, 61, 67, 71,\n            73, 79, 83, 89, 97, \n            101\n        };\n\t\t// hacked by ["djrw", "beisx", "ceflvx", "anp"] :D\n        // for (int i = 0; i < 26; i++)  primes[i] = i * i + i + 41;\n        unordered_map<long long, vector<string>> m;\n        for (int i = 0; i < strs.size(); i++) {\n            long long k = 1;\n            for (int j = 0; j < strs[i].size(); j++) {\n                k *= 1LL * primes[strs[i][j] - \'a\'];\n                k %= M;\n            }\n            m[k].push_back(strs[i]);\n        }\n        vector<vector<string>> ans;\n        for (auto x : m) ans.push_back(x.second);\n        return ans;\n    }\n};\n'})})]})})]})}function d(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>i});var a=s(67294);const t={},r=a.createContext(t);function i(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);