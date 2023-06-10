"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"},i="1502 - Can Make Arithmetic Progression From Sequence (Easy)",s={unversionedId:"1500-1599/can-make-arithmetic-progression-from-sequence-easy",id:"1500-1599/can-make-arithmetic-progression-from-sequence-easy",title:"1502 - Can Make Arithmetic Progression From Sequence (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",source:"@site/solutions/1500-1599/1502-can-make-arithmetic-progression-from-sequence-easy.md",sourceDirName:"1500-1599",slug:"/1500-1599/can-make-arithmetic-progression-from-sequence-easy",permalink:"/solutions/1500-1599/can-make-arithmetic-progression-from-sequence-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1502-can-make-arithmetic-progression-from-sequence-easy.md",tags:[],version:"current",sidebarPosition:1502,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"},sidebar:"tutorialSidebar",previous:{title:"1500 - 1599",permalink:"/solutions/category/1500---1599"},next:{title:"1510 - Stone Game IV (Hard)",permalink:"/solutions/1500-1599/stone-game-iv-hard"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("Tabs"),u=p("TabItem"),f=p("SolutionAuthor"),d={toc:l},h="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1502---can-make-arithmetic-progression-from-sequence-easy"},"1502 - Can Make Arithmetic Progression From Sequence (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"},"https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"A sequence of numbers is called an ",(0,a.kt)("strong",{parentName:"p"},"arithmetic progression")," if the difference between any two consecutive elements is the same."),(0,a.kt)("p",null,"Given an array of numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"arr"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," ",(0,a.kt)("em",{parentName:"p"},"if the array can be rearranged to form an ",(0,a.kt)("strong",{parentName:"em"},"arithmetic progression"),". Otherwise, return")," ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: arr = [3,5,1]\nOutput: true\nExplanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: arr = [1,2,4]\nOutput: false\nExplanation: There is no way to reorder the elements to obtain an arithmetic progression.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= arr.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10^6 <= arr[i] <= 10^6"))),(0,a.kt)("h2",{id:"approach-1-sorting"},"Approach 1: Sorting"),(0,a.kt)("p",null,"We sort the array and calculate the first difference. Iterate the rest of the elements to check if they have the same difference between two elements."),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool canMakeArithmeticProgression(vector<int>& arr) {\n        // reorder first\n        sort(arr.begin(), arr.end());\n        // calculate the first difference\n        int d = arr[1] - arr[0];\n        // check the rest of the differences\n        // if there is a new difference, then it is false\n        // else it is true\n        for (int i = 2; i < arr.size(); i++) {\n            if (arr[i] - arr[i - 1] != d) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n"))),(0,a.kt)(u,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"impl Solution {\n    pub fn can_make_arithmetic_progression(mut arr: Vec<i32>) -> bool {\n        // sort the arr first\n        arr.sort();\n        // then we focus on a window of size of 3\n        for w in arr.windows(3) {\n            // check if the difference between w[0] and w[1] and that between w[1] and w[2]  is same\n            // if not, then we cannot make an AP\n            if w[2] - w[1] != w[1] - w[0] {\n                return false;\n            }\n        }\n        true\n    }\n}\n")))))}k.isMDXComponent=!0}}]);