"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/count-prefixes-of-a-given-string/"},i="2255 - Count Prefixes of a Given String (Easy)",s={unversionedId:"2200-2299/count-prefixes-of-a-given-string-easy",id:"2200-2299/count-prefixes-of-a-given-string-easy",title:"2255 - Count Prefixes of a Given String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/count-prefixes-of-a-given-string/",source:"@site/solutions/2200-2299/2255-count-prefixes-of-a-given-string-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/count-prefixes-of-a-given-string-easy",permalink:"/solutions/2200-2299/count-prefixes-of-a-given-string-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2255-count-prefixes-of-a-given-string-easy.md",tags:[],version:"current",sidebarPosition:2255,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-prefixes-of-a-given-string/"},sidebar:"tutorialSidebar",previous:{title:"2251 - Number of Flowers in Full Bloom (Hard)",permalink:"/solutions/2200-2299/number-of-flowers-in-full-bloom-hard"},next:{title:"2256 - Minimum Average Difference (Medium)",permalink:"/solutions/2200-2299/minimum-average-difference-medium"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: STL",id:"approach-1-stl",level:2}],c=(u="SolutionAuthor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:p},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2255---count-prefixes-of-a-given-string-easy"},"2255 - Count Prefixes of a Given String (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-prefixes-of-a-given-string/"},"https://leetcode.com/problems/count-prefixes-of-a-given-string/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a string array ",(0,o.kt)("inlineCode",{parentName:"p"},"words")," and a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"words[i]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," comprise only of ",(0,o.kt)("strong",{parentName:"p"},"lowercase English letters"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"number of strings")," in")," ",(0,o.kt)("inlineCode",{parentName:"p"},"words")," ",(0,o.kt)("em",{parentName:"p"},"that are a ",(0,o.kt)("strong",{parentName:"em"},"prefix")," of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"prefix")," of a string is a substring that occurs at the beginning of the string. A ",(0,o.kt)("strong",{parentName:"p"},"substring")," is a contiguous sequence of characters within a string."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: words = ["a","b","c","ab","bc","abc"], s = "abc"\nOutput: 3\nExplanation:\nThe strings in words which are a prefix of s = "abc" are:\n"a", "ab", and "abc".\nThus the number of strings in words which are a prefix of s is 3.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: words = ["a","a"], s = "aa"\nOutput: 2\nExplanation:\nBoth of the strings are a prefix of s. \nNote that the same string can occur multiple times in words, and it should be counted each time.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length, s.length <= 10")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"words[i]")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," consist of lowercase English letters ",(0,o.kt)("strong",{parentName:"li"},"only"),".")),(0,o.kt)("h2",{id:"approach-1-stl"},"Approach 1: STL"),(0,o.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int countPrefixes(vector<string>& words, string s) {\n        int ans = 0;\n        // if it returns index 0, then it means t is the prefix of s \n        for (auto& t : words) ans += s.find(t) == 0;\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);