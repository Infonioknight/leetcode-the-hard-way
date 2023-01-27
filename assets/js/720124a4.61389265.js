"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85391],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22210:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r,o=t(87462),a=t(63366),i=(t(67294),t(3905)),p=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/monotonic-array/",tags:["Array"]},s="0896 - Monotonic Array (Easy)",u={unversionedId:"0800-0899/monotonic-array-easy",id:"0800-0899/monotonic-array-easy",title:"0896 - Monotonic Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/monotonic-array/",source:"@site/solutions/0800-0899/0896-monotonic-array-easy.md",sourceDirName:"0800-0899",slug:"/0800-0899/monotonic-array-easy",permalink:"/solutions/0800-0899/monotonic-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0896-monotonic-array-easy.md",tags:[{label:"Array",permalink:"/solutions/tags/array"}],version:"current",sidebarPosition:896,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/monotonic-array/",tags:["Array"]},sidebar:"tutorialSidebar",previous:{title:"0881 - Boats to Save People (Medium)",permalink:"/solutions/0800-0899/boats-to-save-people-medium"},next:{title:"0899 - Orderly Queue (Hard)",permalink:"/solutions/0800-0899/orderly-queue-hard"}},c={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Loops",id:"approach-1-two-loops",level:2},{value:"Approach 2: One Pass",id:"approach-2-one-pass",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:m};function y(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0896---monotonic-array-easy"},"0896 - Monotonic Array (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"An array is ",(0,i.kt)("strong",{parentName:"p"},"monotonic")," if it is either monotone increasing or monotone decreasing."),(0,i.kt)("p",null,"An array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," is monotone increasing if for all ",(0,i.kt)("inlineCode",{parentName:"p"},"i <= j"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nums[i] <= nums[j]"),". An array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," is monotone decreasing if for all ",(0,i.kt)("inlineCode",{parentName:"p"},"i <= j"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nums[i] >= nums[j]"),"."),(0,i.kt)("p",null,"Given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),(0,i.kt)("em",{parentName:"p"},"if the given array is monotonic, or"),(0,i.kt)("inlineCode",{parentName:"p"},"false"),(0,i.kt)("em",{parentName:"p"},"otherwise"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,2,3]\nOutput: true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [6,5,4,4]\nOutput: true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,3,2]\nOutput: false\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-10^5 <= nums[i] <= 10^5"))),(0,i.kt)("h2",{id:"approach-1-two-loops"},"Approach 1: Two Loops"),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isMonotonic(vector<int>& nums) {\n        int n = nums.size(), ok = 1;\n        // check for monotone increasing\n        for (int i = 1 ; i < n; i++) ok &= nums[i - 1] <= nums[i];\n        // if it is monotone increasing, return true\n        if (ok) return true;\n        // reset ok\n        ok = 1;\n        // check for monotone decreasing\n        for (int i = n - 2; i >= 0; i--) ok &= nums[i] >= nums[i + 1];\n        // return the answer\n        return ok;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-one-pass"},"Approach 2: One Pass"),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isMonotonic(vector<int>& nums) {\n        int n = nums.size(), inc = 1, dec = 1;\n        for (int i = 1 ; i < n; i++) {\n            // check for monotone increasing\n            inc &= nums[i - 1] <= nums[i];\n            // check for monotone decreasing\n            dec &= nums[i - 1] >= nums[i]; \n        }\n        // the given is monotonic if either one is true\n        return inc || dec;\n    }\n};\n")))}y.isMDXComponent=!0}}]);