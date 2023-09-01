"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[81586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/"},a="2521 - Distinct Prime Factors of Product of Array (Medium)",l={unversionedId:"2500-2599/distinct-prime-factors-of-product-of-array-medium",id:"2500-2599/distinct-prime-factors-of-product-of-array-medium",title:"2521 - Distinct Prime Factors of Product of Array (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/",source:"@site/solutions/2500-2599/2521-distinct-prime-factors-of-product-of-array-medium.md",sourceDirName:"2500-2599",slug:"/2500-2599/distinct-prime-factors-of-product-of-array-medium",permalink:"/solutions/2500-2599/distinct-prime-factors-of-product-of-array-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2521-distinct-prime-factors-of-product-of-array-medium.md",tags:[],version:"current",sidebarPosition:2521,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/"},sidebar:"tutorialSidebar",previous:{title:"2520 - Count the Digits That Divide a Number (Easy)",permalink:"/solutions/2500-2599/count-the-digits-that-divide-a-number-easy"},next:{title:"2523 - Closest Prime Numbers in Range (Medium)",permalink:"/solutions/2500-2599/closest-prime-numbers-in-range-medium"}},p={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prime Factorization + Set",id:"approach-1-prime-factorization--set",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=c("Tabs"),u=c("TabItem"),d=c("SolutionAuthor"),f={toc:s},k="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(k,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2521---distinct-prime-factors-of-product-of-array-medium"},"2521 - Distinct Prime Factors of Product of Array (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/"},"https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array of positive integers ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,o.kt)("em",{parentName:"p"},"the number of ",(0,o.kt)("strong",{parentName:"em"},"distinct prime factors")," in the product of the elements of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A number greater than ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," is called ",(0,o.kt)("strong",{parentName:"li"},"prime")," if it is divisible by only ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," and itself."),(0,o.kt)("li",{parentName:"ul"},"An integer ",(0,o.kt)("inlineCode",{parentName:"li"},"val1")," is a factor of another integer ",(0,o.kt)("inlineCode",{parentName:"li"},"val2")," if ",(0,o.kt)("inlineCode",{parentName:"li"},"val2 / val1")," is an integer.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [2,4,3,7,10,6]\nOutput: 4\nExplanation:\nThe product of all the elements in nums is: 2 * 4 * 3 * 7 * 10 * 6 = 10080 = 25 * 32 * 5 * 7.\nThere are 4 distinct prime factors so we return 4.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [2,4,8,16]\nOutput: 1\nExplanation:\nThe product of all the elements in nums is: 2 * 4 * 8 * 16 = 1024 = 210.\nThere is 1 distinct prime factor so we return 1.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= nums[i] <= 1000"))),(0,o.kt)("h2",{id:"approach-1-prime-factorization--set"},"Approach 1: Prime Factorization + Set"),(0,o.kt)("p",null,"For each number, we can prime-factorize it and insert it to a Set. The answer would be the number of the size of set."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<pair<long long, int>> prime_factorize(long long n) {\n        assert(n >= 1);\n        vector<pair<long long, int>> result;\n\n        auto extract = [&](long long p) {\n            if (n % p == 0) {\n                result.emplace_back(p, 0);\n\n                do {\n                    n /= p;\n                    result.back().second++;\n                } while (n % p == 0);\n            }\n        };\n\n        for (long long p = 2; p * p <= n; p += p % 2 + 1)\n            extract(p);\n\n        if (n > 1)\n            result.emplace_back(n, 1);\n\n        return result;\n    }\n\n    int distinctPrimeFactors(vector<int>& nums) {\n        set<int> s;\n        for (auto x : nums) {\n            for (auto x : prime_factorize(x)) {\n                s.insert(x.first);\n            }\n        }\n        return s.size();\n    }\n};\n")))))}b.isMDXComponent=!0}}]);