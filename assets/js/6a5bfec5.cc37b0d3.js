"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[37476],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(a),h=r,d=c["".concat(o,".").concat(h)]||c[h]||u[h]||s;return a?n.createElement(d,i(i({ref:t},l),{},{components:a})):n.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<s;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},38828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={description:"Author: @wingkwong | https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"},i="2231 -  Largest Number After Digit Swaps by Parity (Easy)",p={unversionedId:"2200-2299/largest-number-after-digit-swaps-by-parity-easy",id:"2200-2299/largest-number-after-digit-swaps-by-parity-easy",title:"2231 -  Largest Number After Digit Swaps by Parity (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/",source:"@site/solutions/2200-2299/2231-largest-number-after-digit-swaps-by-parity-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/largest-number-after-digit-swaps-by-parity-easy",permalink:"/solutions/2200-2299/largest-number-after-digit-swaps-by-parity-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2231-largest-number-after-digit-swaps-by-parity-easy.md",tags:[],version:"current",sidebarPosition:2231,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"},sidebar:"tutorialSidebar",previous:{title:"2229 - Check if an Array is Consecutive (Easy)",permalink:"/solutions/2200-2299/check-if-an-array-is-consecutive-easy"},next:{title:"2232 -  Minimize Result by Adding Parentheses to Expression (Medium)",permalink:"/solutions/2200-2299/minimize-result-by-adding-parentheses-to-expression-medium"}},o={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Swapping",id:"approach-2-swapping",level:2}],l=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:m},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2231----largest-number-after-digit-swaps-by-parity-easy"},"2231 -  Largest Number After Digit Swaps by Parity (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"},"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given a positive integer ",(0,r.kt)("inlineCode",{parentName:"p"},"num"),". You may swap any two digits of ",(0,r.kt)("inlineCode",{parentName:"p"},"num")," that have the same ",(0,r.kt)("strong",{parentName:"p"},"parity")," (i.e. both odd digits or both even digits)."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"largest")," possible value of")," ",(0,r.kt)("inlineCode",{parentName:"p"},"num")," ",(0,r.kt)("em",{parentName:"p"},"after ",(0,r.kt)("strong",{parentName:"em"},"any")," number of swaps.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: num = 1234\nOutput: 3412\nExplanation: Swap the digit 3 with the digit 1, this results in the number 3214.\nSwap the digit 2 with the digit 4, this results in the number 3412.\nNote that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.\nAlso note that we may not swap the digit 4 with the digit 1 since they are of different parities.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: num = 65875\nOutput: 87655\nExplanation: Swap the digit 8 with the digit 6, this results in the number 85675.\nSwap the first digit 5 with the digit 7, this results in the number 87655.\nNote that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= num <= 10^9"))),(0,r.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,r.kt)("p",null,"Put all digits with the same parity together. Sort them. Build the result."),(0,r.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int largestInteger(int num) {\n        int tmp = num;\n        vector<int> odd, even;\n        // iterate each digit \n        // and put the digit to the corresponding parity vector\n        while (tmp) {\n            int d = tmp % 10;\n            if (d % 2 == 0) even.push_back(d);\n            else odd.push_back(d);\n            tmp /= 10;\n        }\n        // sort both vectors\n        sort(even.begin(), even.end());\n        sort(odd.begin(),odd.end());\n        // build the ans\n        int ans = 0, i = 0, j = 0, k = 0;\n        while (num) {\n            int d = num % 10;\n            ans = (d % 2 == 0 ? even[j++] : odd[i++]) * pow(10, k++) + ans;\n            num /= 10;\n        }\n        return ans;\n    }\n};\n")),(0,r.kt)("h2",{id:"approach-2-swapping"},"Approach 2: Swapping"),(0,r.kt)("p",null,"We cast the number as a string. Compare each pair the number and check its parity. If they have the same parity and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[i]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," is smaller, then swap it with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"j"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[j]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". Return the value as integer."),(0,r.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int largestInteger(int num) {\n        string s = to_string(num);\n        int n = s.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (\n                    // 1. check if they hv the same parity \n                    !((s[i] ^ s[j]) & 1) && \n                    // 2. check if it's worth swapping\n                    s[i] < s[j]\n                ) {\n                    swap(s[i], s[j]);\n                }\n            }\n        }\n        return stoi(s);\n    }\n};\n")))}d.isMDXComponent=!0}}]);