"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[55622],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>h});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,h=c["".concat(l,".").concat(k)]||c[k]||N[k]||r;return t?n.createElement(h,m(m({ref:e},o),{},{components:t})):n.createElement(h,m({ref:e},o))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[c]="string"==typeof a?a:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},73656:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const r={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/find-the-difference/",tags:["Hash Table","String","Bit Manipulation","Sorting"]},m="0389 - Find the Difference (Easy)",p={unversionedId:"0300-0399/find-the-difference-easy",id:"0300-0399/find-the-difference-easy",title:"0389 - Find the Difference (Easy)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/find-the-difference/",source:"@site/solutions/0300-0399/0389-find-the-difference-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/find-the-difference-easy",permalink:"/solutions/0300-0399/find-the-difference-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0389-find-the-difference-easy.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"String",permalink:"/solutions/tags/string"},{label:"Bit Manipulation",permalink:"/solutions/tags/bit-manipulation"},{label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:389,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/find-the-difference/",tags:["Hash Table","String","Bit Manipulation","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0383 - Ransom Note (Easy)",permalink:"/solutions/0300-0399/ransom-note-easy"},next:{title:"0392 - Is Subsequence (Easy)",permalink:"/solutions/0300-0399/is-subsequence-easy"}},l={},i=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Manipulation",id:"approach-1-bit-manipulation",level:2},{value:"Approach 2: Hash Map",id:"approach-2-hash-map",level:2},{value:"Approach 3: Sorting",id:"approach-3-sorting",level:2}],o=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},c=o("Tabs"),N=o("TabItem"),k=o("SolutionAuthor"),h={toc:i},u="wrapper";function d(a){let{components:e,...t}=a;return(0,s.kt)(u,(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0389---find-the-difference-easy"},"0389 - Find the Difference (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-the-difference/"},"https://leetcode.com/problems/find-the-difference/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given two strings ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,s.kt)("p",null,"String ",(0,s.kt)("inlineCode",{parentName:"p"},"t")," is generated by random shuffling string ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," and then add one more letter at a random position."),(0,s.kt)("p",null,"Return the letter that was added to ",(0,s.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "abcd", t = "abcde"\nOutput: "e"\nExplanation: \'e\' is the letter that was added.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "", t = "y"\nOutput: "y"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= s.length <= 1000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"t.length == s.length + 1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"t")," consist of lowercase English letters.")),(0,s.kt)("h2",{id:"approach-1-bit-manipulation"},"Approach 1: Bit Manipulation"),(0,s.kt)("p",null,"Same idea as ",(0,s.kt)("a",{parentName:"p",href:"../0100-0199/single-number-easy"},"0136 - Single Number (Easy)"),"."),(0,s.kt)("p",null,"Prerequisite: You should understand properties of XOR."),(0,s.kt)("p",null,"Let's have a quick review."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If we take XOR of a number and a zero, the result will be that number, i.e. ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\oplus 0 = a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"))))),"."),(0,s.kt)("li",{parentName:"ul"},"If we take XOR of two same numbers, it will return 0, i.e. ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\oplus a = 0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,s.kt)("li",{parentName:"ul"},"If we take XOR of multiple numbers, the order doesn't affect the result, i.e. ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow"},"\u2295"),(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\oplus b \\oplus c = a \\oplus c \\oplus b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),".")),(0,s.kt)("p",null,"Therefore, we apply XOR on each character. The same characters will cancel out each other. What's left is the answer."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        char ans = 0;\n        // take XOR for each character: ans = ans ^ x\n        for (auto x : s) ans ^= x;\n        for (auto x : t) ans ^= x;\n        return ans;\n    }\n};\n"))),(0,s.kt)(N,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kt"},"class Solution {\n    fun findTheDifference(s: String, t: String): Char {\n        var ans = 0\n        for (x in s + t) ans = ans xor x.toInt()\n        return ans.toChar()\n    }\n}\n")))),(0,s.kt)("h2",{id:"approach-2-hash-map"},"Approach 2: Hash Map"),(0,s.kt)("p",null,"We can store the occurrence for each character. As ",(0,s.kt)("inlineCode",{parentName:"p"},"t")," has one more character, we can count ",(0,s.kt)("inlineCode",{parentName:"p"},"t")," first, iterate ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," to subtract the occurrences. The answer will be the one which has one occurrence."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        unordered_map<char, int> m;\n        // count the occurrence for t\n        for (auto x : t) m[x]++;\n        // instead of using an extra hash map,\n        // we decrease the occurrence\n        for (auto x : s) m[x]--;\n        for (auto x : m) {\n            // the answer will be the one with occurrence = 1\n            if (x.second == 1) {\n                return x.first;\n            }\n        }\n        // returning any character would work as it never reaches here\n        return 'a';\n    }\n};\n")))),(0,s.kt)("h2",{id:"approach-3-sorting"},"Approach 3: Sorting"),(0,s.kt)("p",null,"We can sort both input and compare each character one by one. If there is a difference, then return ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". Otherwise, return the last character of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," as the first ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"len(s)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," characters are same."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    char findTheDifference(string s, string t) {\n        // sort s in ascending order\n        sort(s.begin(), s.end());\n        // sort t in ascending order\n        sort(t.begin(), t.end());\n        for (int i = 0; i < s.size(); i++) {\n            // s = "abcde"\n            // t = "abcdde"\n            // "e" is not same as "d" at position 4 (0-base)\n            // hence, return t[i], i.e. "d"\n            if (s[i] != t[i]) {\n                return t[i];\n            }\n        }\n        // for the case like\n        // s = "abcd"\n        // t = "abcde"\n        return t.back();\n    }\n};\n'))),(0,s.kt)(N,{value:"py",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def findTheDifference(self, s: str, t: str) -> str:\n        s = "".join(sorted(list(s)))\n        t = "".join(sorted(list(t)))\n        for i in range(len(s)):\n            if s[i] != t[i]:\n                return t[i]\n        return t[-1]\n'))),(0,s.kt)(N,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(k,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} s\n * @param {string} t\n * @return {character}\n */\nvar findTheDifference = function (s, t) {\n  const sortedS = s.split("").sort().join("");\n  const sortedT = t.split("").sort().join("");\n  for (let i = 0; i < s.length; i++) {\n    if (sortedS[i] != sortedT[i]) {\n      return sortedT[i];\n    }\n  }\n  return sortedT[sortedT.length - 1];\n};\n')))))}d.isMDXComponent=!0}}]);