"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=o(a),k=r,h=u["".concat(p,".").concat(k)]||u[k]||c[k]||s;return a?n.createElement(h,m(m({ref:t},l),{},{components:a})):n.createElement(h,m({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,m[1]=i;for(var o=2;o<s;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const s={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/"},m="2914 - Minimum Number of Changes to Make Binary String Beautiful (Medium)",i={unversionedId:"2900-2999/minimum-number-of-changes-to-make-binary-string-beautiful-medium",id:"2900-2999/minimum-number-of-changes-to-make-binary-string-beautiful-medium",title:"2914 - Minimum Number of Changes to Make Binary String Beautiful (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/",source:"@site/solutions/2900-2999/2914-minimum-number-of-changes-to-make-binary-string-beautiful-medium.md",sourceDirName:"2900-2999",slug:"/2900-2999/minimum-number-of-changes-to-make-binary-string-beautiful-medium",permalink:"/solutions/2900-2999/minimum-number-of-changes-to-make-binary-string-beautiful-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2900-2999/2914-minimum-number-of-changes-to-make-binary-string-beautiful-medium.md",tags:[],version:"current",sidebarPosition:2914,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/"},sidebar:"tutorialSidebar",previous:{title:"2913 - Subarrays Distinct Element Sum of Squares I (Easy)",permalink:"/solutions/2900-2999/subarrays-distinct-element-sum-of-squares-i-easy"}},p={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=l("Tabs"),c=l("TabItem"),k=l("SolutionAuthor"),h={toc:o},N="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2914---minimum-number-of-changes-to-make-binary-string-beautiful-medium"},"2914 - Minimum Number of Changes to Make Binary String Beautiful (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/"},"https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given a ",(0,r.kt)("strong",{parentName:"p"},"0-indexed")," binary string ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," having an even length."),(0,r.kt)("p",null,"A string is ",(0,r.kt)("strong",{parentName:"p"},"beautiful")," if it's possible to partition it into one or more substrings such that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each substring has an ",(0,r.kt)("strong",{parentName:"li"},"even length"),"."),(0,r.kt)("li",{parentName:"ul"},"Each substring contains ",(0,r.kt)("strong",{parentName:"li"},"only")," ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"'s or ",(0,r.kt)("strong",{parentName:"li"},"only")," ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"'s.")),(0,r.kt)("p",null,"You can change any character in ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"minimum")," number of changes required to make the string"),(0,r.kt)("inlineCode",{parentName:"p"},"s")," ",(0,r.kt)("em",{parentName:"p"},"beautiful"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "1001"\nOutput: 2\nExplanation: We change s[1] to 1 and s[3] to 0 to get string "1100".\nIt can be seen that the string "1100" is beautiful because we can partition it into "11|00".\nIt can be proven that 2 is the minimum number of changes needed to make the string beautiful.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "10"\nOutput: 1\nExplanation: We change s[1] to 1 to get string "11".\nIt can be seen that the string "11" is beautiful because we can partition it into "11".\nIt can be proven that 1 is the minimum number of changes needed to make the string beautiful.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "0000"\nOutput: 0\nExplanation: We don\'t need to make any changes as the string "0000" is beautiful already.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2 <= s.length <= 105")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," has an even length."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s[i]")," is either ",(0,r.kt)("inlineCode",{parentName:"li"},"'0'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'1'"),".")),(0,r.kt)("h2",{id:"approach-1-counting"},"Approach 1: Counting"),(0,r.kt)("p",null,"Given each substring has an even length and each substring contains only 1's or only 0's, we can simply check how many pairs of adjacent differences for every 2 characters. If we have ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"01")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"01")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"01")))))," or ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"10")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"10"))))),", we need ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," action to make it beautiful by converting it to either ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"00")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"00")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"00")))))," or ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"11")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"11")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"11"))))),". Therefore, we can simply count the differences for every 2 characters."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minChanges(string s) {\n        int ans = 0;\n        for (int i = 1; i < s.size(); i += 2) ans += s[i] ^ s[i - 1];\n        return ans;\n    }\n};\n")))))}g.isMDXComponent=!0}}]);