"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85112],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/sign-of-the-product-of-an-array/"},i="1822 - Sign of the Product of an Array (Easy)",l={unversionedId:"1800-1899/sign-of-the-product-of-an-array-easy",id:"1800-1899/sign-of-the-product-of-an-array-easy",title:"1822 - Sign of the Product of an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/sign-of-the-product-of-an-array/",source:"@site/solutions/1800-1899/1822-sign-of-the-product-of-an-array-easy.md",sourceDirName:"1800-1899",slug:"/1800-1899/sign-of-the-product-of-an-array-easy",permalink:"/solutions/1800-1899/sign-of-the-product-of-an-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1822-sign-of-the-product-of-an-array-easy.md",tags:[],version:"current",sidebarPosition:1822,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sign-of-the-product-of-an-array/"},sidebar:"tutorialSidebar",previous:{title:"1800 - Maximum Ascending Subarray Sum (Easy)",permalink:"/solutions/1800-1899/maximum-ascending-subarray-sum-easy"},next:{title:"1833 - Maximum Ice Cream Bars (Medium)",permalink:"/solutions/1800-1899/maximum-ice-cream-bars-medium"}},s={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check the sign",id:"approach-1-check-the-sign",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},c=p("Tabs"),m=p("TabItem"),d=p("SolutionAuthor"),f={toc:u},h="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1822---sign-of-the-product-of-an-array-easy"},"1822 - Sign of the Product of an Array (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sign-of-the-product-of-an-array/"},"https://leetcode.com/problems/sign-of-the-product-of-an-array/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"There is a function ",(0,a.kt)("inlineCode",{parentName:"p"},"signFunc(x)")," that returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is positive."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-1")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is negative."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,a.kt)("p",null,"You are given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),". Let ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," be the product of all values in the array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,a.kt)("p",null,"Return ",(0,a.kt)("inlineCode",{parentName:"p"},"signFunc(product)"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [-1,-2,-3,-4,3,2,1]\nOutput: 1\nExplanation: The product of all values in the array is 144, and signFunc(144) = 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,5,0,2,-3]\nOutput: 0\nExplanation: The product of all values in the array is 0, and signFunc(0) = 0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [-1,1,-1,1,-1]\nOutput: -1\nExplanation: The product of all values in the array is -1, and signFunc(-1) = -1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-100 <= nums[i] <= 100"))),(0,a.kt)("h2",{id:"approach-1-check-the-sign"},"Approach 1: Check the sign"),(0,a.kt)("p",null,"The first thought probably is just to simulate it by calculating the product of nums and check the sign like what problem statement says. However, We don't need to do that since we are not interested in the value but the sign. Therefore, we can just check the sign only. If we meet a zero, we can exit early since the final sign must be 0 anyway."),(0,a.kt)(c,{mdxType:"Tabs"},(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int arraySign(vector<int>& nums) {\n        int ans = 1;\n        for (auto x : nums) {\n            if (x > 0) ans *= 1;\n            else if (x < 0) ans *= -1;\n            else {\n                ans = 0;\n                break;\n            }\n        }\n        // You may notice that when the number is positive, basically it won't change the sign. \n        // Hence, we can just focus on negative numbers and flip the sign when we meet one. \n        // Zero case remain unchanged.\n        // ----\n        // for (auto x : nums) {\n        //     if (x == 0) return 0;\n        //     if (x < 0) ans = -ans;\n        // }\n        return ans;\n    }\n};\n"))),(0,a.kt)(m,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"impl Solution {\n    pub fn array_sign(nums: Vec<i32>) -> i32 {\n        let mut ans = 1;\n        for x in nums.into_iter() {\n            if x == 0 {\n                return 0;\n            } \n            ans *= x.signum();\n        }\n        ans\n    }\n}\n")))))}y.isMDXComponent=!0}}]);