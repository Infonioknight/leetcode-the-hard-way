"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6050],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>N});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),l=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(t),k=r,N=u["".concat(o,".").concat(k)]||u[k]||c[k]||s;return t?n.createElement(N,m(m({ref:a},i),{},{components:t})):n.createElement(N,m({ref:a},i))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=k;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:r,m[1]=p;for(var l=2;l<s;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9229:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={description:"Author: @wingkwong | https://leetcode.com/problems/a-number-after-a-double-reversal/"},m="2119 - A Number After a Double Reversal (Easy)",p={unversionedId:"2100-2199/a-number-after-a-double-reversal-easy",id:"2100-2199/a-number-after-a-double-reversal-easy",title:"2119 - A Number After a Double Reversal (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/a-number-after-a-double-reversal/",source:"@site/solutions/2100-2199/2119-a-number-after-a-double-reversal-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/a-number-after-a-double-reversal-easy",permalink:"/solutions/2100-2199/a-number-after-a-double-reversal-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2119-a-number-after-a-double-reversal-easy.md",tags:[],version:"current",sidebarPosition:2119,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/a-number-after-a-double-reversal/"},sidebar:"tutorialSidebar",previous:{title:"2111 - Minimum Operations to Make the Array K-Increasing (Hard)",permalink:"/solutions/2100-2199/minimum-operations-to-make-the-array-k-increasing-hard"},next:{title:"2120 - Execution of All Suffix Instructions Staying in a Grid (Medium)",permalink:"/solutions/2100-2199/execution-of-all-suffix-instructions-staying-in-a-grid-medium"}},o={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Just do what it says",id:"approach-1-just-do-what-it-says",level:2},{value:"Approach 2: Check Trailing Zero",id:"approach-2-check-trailing-zero",level:2}],i=(u="SolutionAuthor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const c={toc:l},k="wrapper";function N(e){let{components:a,...t}=e;return(0,r.kt)(k,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2119---a-number-after-a-double-reversal-easy"},"2119 - A Number After a Double Reversal (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/a-number-after-a-double-reversal/"},"https://leetcode.com/problems/a-number-after-a-double-reversal/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reversing")," an integer means to reverse all its digits."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, reversing ",(0,r.kt)("inlineCode",{parentName:"li"},"2021")," gives ",(0,r.kt)("inlineCode",{parentName:"li"},"1202"),". Reversing ",(0,r.kt)("inlineCode",{parentName:"li"},"12300")," gives ",(0,r.kt)("inlineCode",{parentName:"li"},"321")," as the ",(0,r.kt)("strong",{parentName:"li"},"leading zeros are not retained"),".")),(0,r.kt)("p",null,"Given an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"num"),", ",(0,r.kt)("strong",{parentName:"p"},"reverse")," ",(0,r.kt)("inlineCode",{parentName:"p"},"num")," to get ",(0,r.kt)("inlineCode",{parentName:"p"},"reversed1"),", ",(0,r.kt)("strong",{parentName:"p"},"then reverse")," ",(0,r.kt)("inlineCode",{parentName:"p"},"reversed1")," to get ",(0,r.kt)("inlineCode",{parentName:"p"},"reversed2"),". Return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)("em",{parentName:"p"},"if")," ",(0,r.kt)("inlineCode",{parentName:"p"},"reversed2")," ",(0,r.kt)("em",{parentName:"p"},"equals")," ",(0,r.kt)("inlineCode",{parentName:"p"},"num"),". Otherwise return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: num = 526\nOutput: true\nExplanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: num = 1800\nOutput: false\nExplanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: num = 0\nOutput: true\nExplanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= num <= 10^6"))),(0,r.kt)("h2",{id:"approach-1-just-do-what-it-says"},"Approach 1: Just do what it says"),(0,r.kt)(i,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isSameAfterReversals(int num) {\n        if (num == 0) return 1;\n        string s = to_string(num);\n        int n = s.size(), j = 0;\n        while (s[n - 1 - j] == '0') j++;\n        string t = s.substr(0, n - j);\n        return s == t;\n    }\n};\n")),(0,r.kt)("h2",{id:"approach-2-check-trailing-zero"},"Approach 2: Check Trailing Zero"),(0,r.kt)("p",null,"However, a better way to solve this is to check if there is any trailing zero. No matter how many zeros at the end, after removing them all, it won't be same if you reverse it. The only exceptional case is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"num=0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"))))),"."),(0,r.kt)(i,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isSameAfterReversals(int num) {\n        return num == 0 || num % 10;\n    }\n};\n")),(0,r.kt)("p",null,"Time Complexity : ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))))}N.isMDXComponent=!0}}]);