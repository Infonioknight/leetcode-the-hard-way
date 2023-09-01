"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2135],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>N});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=i(t),k=r,N=c["".concat(o,".").concat(k)]||c[k]||h[k]||s;return t?n.createElement(N,m(m({ref:a},l),{},{components:t})):n.createElement(N,m({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=k;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[c]="string"==typeof e?e:r,m[1]=p;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},32380:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const s={description:"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/longest-common-prefix/"},m="0014 - Longest Common Prefix (Easy)",p={unversionedId:"0000-0099/longest-common-prefix-easy",id:"0000-0099/longest-common-prefix-easy",title:"0014 - Longest Common Prefix (Easy)",description:"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/longest-common-prefix/",source:"@site/solutions/0000-0099/0014-longest-common-prefix-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/longest-common-prefix-easy",permalink:"/solutions/0000-0099/longest-common-prefix-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0014-longest-common-prefix-easy.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{description:"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/longest-common-prefix/"},sidebar:"tutorialSidebar",previous:{title:"0013 - Roman to Integer (Easy)",permalink:"/solutions/0000-0099/roman-to-integer-easy"},next:{title:"0017 - Letter Combinations of a Phone Number (Medium)",permalink:"/solutions/0000-0099/letter-combinations-of-a-phone-number-medium"}},o={},i=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Linear Search",id:"approach-2-linear-search",level:2}],l=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=l("Tabs"),h=l("TabItem"),k=l("SolutionAuthor"),N={toc:i},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0014---longest-common-prefix-easy"},"0014 - Longest Common Prefix (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-common-prefix/"},"https://leetcode.com/problems/longest-common-prefix/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Write a function to find the longest common prefix string amongst an array of strings."),(0,r.kt)("p",null,"If there is no common prefix, return an empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: strs = ["flower","flow","flight"]\nOutput: "fl"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: strs = ["dog","racecar","car"]\nOutput: ""\nExplanation: There is no common prefix among the input strings.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= strs.length <= 200")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= strs[i].length <= 200")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strs[i]")," consists of only lowercase English letters.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,r.kt)("p",null,"Sorting becomes handy to solve this problem, after sorting strings ordered in lexicographic order. "),(0,r.kt)("p",null,"Since we need to find the longest common prefix of the all words, The first char of ",(0,r.kt)("strong",{parentName:"p"},"each word in the array"),", should be same. Following that the 2nd char and 3rd char and it continues till last char. "),(0,r.kt)("p",null,"In the example 1, all of first char starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"'f'")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"'l'"),", but next char ",(0,r.kt)("inlineCode",{parentName:"p"},"'o'")," match with 2 words, not with ",(0,r.kt)("inlineCode",{parentName:"p"},"flight"),". The same goes to example 2, the very first character of each word is not matching, so there is no common prefix found. "),(0,r.kt)("p",null,"Instead of comparing every word with other words in the array, starting from first, which makes algorithm to run ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," time. We can do better by comparing first and last word in the array to find the common prefix. "),(0,r.kt)("p",null,"Since strings are ordered, the least common prefix we can find with first and last word in the array. "),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n log(n))")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"))"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of words in the array"),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        int n = strs.length;\n        if (n == 0) return "";\n        // Sorting provides lexicographic order of strings.\n        Arrays.sort(strs);\n        String first = strs[0], last = strs[n - 1];\n        int i = 0;\n        while (i < first.length()) {\n            if (first.charAt(i) == last.charAt(i)) {\n                i += 1;\n            } else {\n                break;\n            }\n        }\n        return i == 0 ? "" : first.substring(0, i);\n    }\n}\n'))),(0,r.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string[]} strs\n * @return {string}\n */\nvar longestCommonPrefix = function(strs) {\n    if (strs.length == 0) return "";\n    strs.sort();\n    let first = strs[0];\n    let last = strs[strs.length - 1];\n    let i = 0;\n    while (i < first.length) {\n        if (first.charAt(i) == last.charAt(i)) {\n            i += 1;\n        } else {\n            break;\n        }\n    }\n    return i == 0 ? "" : first.slice(0, i);\n};\n'))),(0,r.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        if len(strs) == 0: return \n        strs.sort()\n        first, last = strs[0], strs[-1]\n        i = 0\n        while i < len(first):\n            if first[i] == last[i]:\n                i += 1\n            else:\n                break\n        return "" if i == 0 else first[:i]\n'))),(0,r.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        if (!strs.size()) {\n            return "";\n        }\n        sort(strs.begin(), strs.end());\n        string ans = "";\n        string first = strs[0];\n        string last = strs[strs.size() - 1];\n        for (int i = 0; i < first.size(); i++) {\n            if (first[i] == last[i]) {\n                ans += first[i];\n            } else {\n                break;\n            }\n        }\n        return ans;\n    }\n};\n')))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"approach-2-linear-search"},"Approach 2: Linear Search"),(0,r.kt)("p",null,"Compare any two words, find the common prefix and keep moving forward with the next word in the array, at the end we have found the common prefix. "),(0,r.kt)("p",null,"In the middle, if we find a common prefix is ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," then break the loop and return it.  "),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n * s)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where n - # of elements in the array, s - length of the substring"),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(k,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        if (strs.length == 0) return "";\n        String word = strs[0];\n        for (int i = 1; i < strs.length; i++) {\n            // Keep minimize the prefix word (previous) which match starting position with the current word.\n            while (!strs[i].startsWith(word)) {\n                word = word.substring(0, word.length() - 1);\n            }\n            // If word has no matching prefix with the current word, then there is no common prefix,\n            // which implies there won\'t be any common prefix in the subsequent non-processed words.\n            if ("".equals(word)) {\n                return "";\n            }\n        }\n        return word;\n    }\n}\n')))))}u.isMDXComponent=!0}}]);