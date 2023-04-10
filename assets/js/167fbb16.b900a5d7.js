"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[61156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=i(n),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||p;return n?a.createElement(d,o(o({ref:t},l),{},{components:n})):a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=k;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[c]="string"==typeof e?e:r,o[1]=m;for(var i=2;i<p;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>m,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const p={description:"Author: @wingkwong | https://leetcode.com/problems/powx-n/"},o="0050 - Pow(x, n) (Medium)",m={unversionedId:"0000-0099/pow-x-n-medium",id:"0000-0099/pow-x-n-medium",title:"0050 - Pow(x, n) (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/powx-n/",source:"@site/solutions/0000-0099/0050-pow-x-n-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/pow-x-n-medium",permalink:"/solutions/0000-0099/pow-x-n-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0050-pow-x-n-medium.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/powx-n/"},sidebar:"tutorialSidebar",previous:{title:"0049 - Group Anagrams (Medium)",permalink:"/solutions/0000-0099/group-anagrams-medium"},next:{title:"0051 - N-Queens (Hard)",permalink:"/solutions/0000-0099/n-queens-hard"}},s={},i=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Exponentiation",id:"approach-1-binary-exponentiation",level:2}],l=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:i},k="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0050---powx-n-medium"},"0050 - Pow(x, n) (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/powx-n/"},"https://leetcode.com/problems/powx-n/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Implement ",(0,r.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/valarray/pow/"},"pow(x, n)"),", which calculates ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," raised to the power ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," (i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"x^n"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: x = 2.00000, n = 10\nOutput: 1024.00000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: x = 2.10000, n = 3\nOutput: 9.26100\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: x = 2.00000, n = -2\nOutput: 0.25000\nExplanation: 2-2 = 1/22 = 1/4 = 0.25\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-100.0 < x < 100.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-2^31 <= n <= 2^31 - 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^4 <= x^n <= 10^4"))),(0,r.kt)("h2",{id:"approach-1-binary-exponentiation"},"Approach 1: Binary Exponentiation"),(0,r.kt)("p",null,"If the exponent ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is negative, we need to change it to positive exponent ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"- n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," and make the base  to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 / x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1/"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),". Then apply ",(0,r.kt)("a",{parentName:"p",href:"../../tutorials/math/number-theory/binary-exponentiation"},"Binary Exponentiation"),"."),(0,r.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    double myPow(double x, int N) {\n        long long n = N;\n        if (n < 0) n = -n, x = 1 / x;\n        // Binary Exponentiation\n        double ans = 1;\n        if (n == 0) return 1;\n        while (n > 0) {\n            if(n & 1) ans *= x;\n            x *= x;\n            n >>= 1;\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);