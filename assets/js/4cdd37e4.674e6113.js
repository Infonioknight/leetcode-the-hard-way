"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[42837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @wingkowng | https://leetcode.com/problems/peak-index-in-a-mountain-array/"},o="0852 - Peak Index in a Mountain Array (Easy)",l={unversionedId:"0800-0899/peak-index-in-a-mountain-array-easy",id:"0800-0899/peak-index-in-a-mountain-array-easy",title:"0852 - Peak Index in a Mountain Array (Easy)",description:"Author: @wingkowng | https://leetcode.com/problems/peak-index-in-a-mountain-array/",source:"@site/solutions/0800-0899/0852-peak-index-in-a-mountain-array-easy.md",sourceDirName:"0800-0899",slug:"/0800-0899/peak-index-in-a-mountain-array-easy",permalink:"/solutions/0800-0899/peak-index-in-a-mountain-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0852-peak-index-in-a-mountain-array-easy.md",tags:[],version:"current",sidebarPosition:852,frontMatter:{description:"Author: @wingkowng | https://leetcode.com/problems/peak-index-in-a-mountain-array/"},sidebar:"tutorialSidebar",previous:{title:"0847 - Shortest Path Visiting All Nodes (Hard)",permalink:"/solutions/0800-0899/shortest-path-visiting-all-nodes-hard"},next:{title:"0853 - Car Fleet (Medium)",permalink:"/solutions/0800-0899/car-fleet-medium"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],m=(s="SolutionAuthor",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var s;const c={toc:u},d="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0852---peak-index-in-a-mountain-array-easy"},"0852 - Peak Index in a Mountain Array (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/peak-index-in-a-mountain-array/"},"https://leetcode.com/problems/peak-index-in-a-mountain-array/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Let's call an array ",(0,a.kt)("inlineCode",{parentName:"p"},"arr")," a ",(0,a.kt)("strong",{parentName:"p"},"mountain")," if the following properties hold:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arr.length >= 3")),(0,a.kt)("li",{parentName:"ul"},"There exists some ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"0 < i < arr.length - 1")," such that:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arr[0] < arr[1] < ... arr[i-1] < arr[i]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arr[i] > arr[i+1] > ... > arr[arr.length - 1]"))))),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"arr")," that is ",(0,a.kt)("strong",{parentName:"p"},"guaranteed")," to be a mountain, return any ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," such that ",(0,a.kt)("inlineCode",{parentName:"p"},"arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: arr = [0,1,0]\nOutput: 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: arr = [0,2,1,0]\nOutput: 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: arr = [0,10,5,2]\nOutput: 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3 <= arr.length <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= arr[i] <= 10^6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arr")," is ",(0,a.kt)("strong",{parentName:"li"},"guaranteed")," to be a mountain array.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Finding the ",(0,a.kt)("inlineCode",{parentName:"p"},"O(n)")," is straightforward, could you find an ",(0,a.kt)("inlineCode",{parentName:"p"},"O(log(n))")," solution?\\"),(0,a.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,a.kt)("admonition",{title:"Prerequisite",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")))),(0,a.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int peakIndexInMountainArray(vector<int>& arr) {\n        // arr[i] < arr[i + 1]\n        // [T, T, T, .., T, F, F, F, .., F]\n        int l = 0, r = arr.size() - 1;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            if (arr[m] < arr[m + 1]) l = m + 1;\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}k.isMDXComponent=!0}}]);