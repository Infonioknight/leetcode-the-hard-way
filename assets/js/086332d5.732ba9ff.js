"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[88939],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(t),c=a,f=p["".concat(u,".").concat(c)]||p[c]||d[c]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var m={};for(var u in n)hasOwnProperty.call(n,u)&&(m[u]=n[u]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},73854:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/ways-to-make-a-fair-array/",tags:["Array","Dynamic Programming"]},u="1664 - Ways to Make a Fair Array (Medium)",l={unversionedId:"1600-1699/ways-to-make-a-fair-array-medium",id:"1600-1699/ways-to-make-a-fair-array-medium",title:"1664 - Ways to Make a Fair Array (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/ways-to-make-a-fair-array/",source:"@site/solutions/1600-1699/1664-ways-to-make-a-fair-array-medium.md",sourceDirName:"1600-1699",slug:"/1600-1699/ways-to-make-a-fair-array-medium",permalink:"/solutions/1600-1699/ways-to-make-a-fair-array-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1664-ways-to-make-a-fair-array-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:1664,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/ways-to-make-a-fair-array/",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"1662 - Check If Two String Arrays are Equivalent (Easy)",permalink:"/solutions/1600-1699/check-if-two-string-arrays-are-equivalent-easy"},next:{title:"1672 - Richest Customer Wealth (Easy)",permalink:"/solutions/1600-1699/richest-customer-wealth-easy"}},s={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Prefix Sum",id:"approach-1-prefix-sum",level:2}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)}},c=p("Tabs"),f=p("TabItem"),h=p("SolutionAuthor"),v={toc:d};function y(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1664---ways-to-make-a-fair-array-medium"},"1664 - Ways to Make a Fair Array (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/ways-to-make-a-fair-array/"},"https://leetcode.com/problems/ways-to-make-a-fair-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an integer array\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". You can choose ",(0,o.kt)("strong",{parentName:"p"},"exactly one")," index (",(0,o.kt)("strong",{parentName:"p"},"0-indexed"),") and remove the element. Notice that the index of the elements may change after the removal."),(0,o.kt)("p",null,"For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"nums = [6,1,7,4,1]"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choosing to remove index ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," results in ",(0,o.kt)("inlineCode",{parentName:"li"},"nums = [6,7,4,1]"),"."),(0,o.kt)("li",{parentName:"ul"},"Choosing to remove index ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," results in ",(0,o.kt)("inlineCode",{parentName:"li"},"nums = [6,1,4,1]"),"."),(0,o.kt)("li",{parentName:"ul"},"Choosing to remove index ",(0,o.kt)("inlineCode",{parentName:"li"},"4")," results in ",(0,o.kt)("inlineCode",{parentName:"li"},"nums = [6,1,7,4]"),".")),(0,o.kt)("p",null,"An array is ",(0,o.kt)("strong",{parentName:"p"},"fair")," if the sum of the odd-indexed values equals the sum of the even-indexed values."),(0,o.kt)("p",null,"Return the ",(0,o.kt)("strong",{parentName:"p"},"*number")," of indices that you could choose such that after the removal,",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"nums")),"is ",(0,o.kt)("strong",{parentName:"p"},"fair"),".*"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [2,1,6,4]\nOutput: 1\nExplanation:\nRemove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.\nRemove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.\nRemove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.\nRemove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.\nThere is 1 index that you can remove to make nums fair.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1]\nOutput: 3\nExplanation:\xa0You can remove any index and the remaining array is fair.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3]\nOutput: 0\nExplanation:\xa0You cannot make a fair array after removing any index.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 105")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 104"))),(0,o.kt)("h2",{id:"approach-1-prefix-sum"},"Approach 1: Prefix Sum"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int waysToMakeFair(vector<int>& nums) {\n        int ans = 0, odd = 0, even = 0, n = nums.size();\n        for (int i = 0; i < n; i++) {\n            // calculate the sum at odd index\n            if (i & 1) odd += nums[i];\n            // calculate the sum at even index\n            else even += nums[i];\n        }\n        // we want to simulate the removal and calculate the result on the fly\n        // if we remove a number at index i, \n        // then the parity of all numbers after nums[i] will be changed\n        // i.e. even -> odd and odd -> even\n        // while that of numbers before nums[i] will not changed\n        // we can calculate the prefix sum at odd index & even index for the calculation\n        int preOdd = 0, preEven = 0;\n        for (int i = 0; i < n; i++) {\n            if (i & 1) {\n                // 1. remove nums[i] at odd index -> `odd` would become `odd - nums[i]`\n                // 2. the odd sum after index i = `odd - nums[i] - preOdd`\n                // 3. since nums[i] is removed, all numbers after that will shift to the left by 1 position\n                //    `odd - nums[i] - preOdd` would contribute to even sum\n                // 4. since the parity of numbers before index i won't be changed,\n                //    the new even sum would be `preEven + (odd - nums[i] - preOdd)`\n                \n                // similarly, the new odd would be preOdd + even - preEven\n                // where preOdd doesn't change and (even - preEven) is the even sum after index i \n                \n                int new_even = preEven + (odd - nums[i] - preOdd);\n                int new_odd = preOdd + (even - preEven);\n                ans += new_odd == new_even;\n                // add the current number to preOdd\n                preOdd += nums[i];\n            } else {\n                // 1. remove nums[i] at even index -> `even` would become `even - nums[i]`\n                // 2. the even sum after index i = `even - nums[i] - preEven`\n                // 3. since nums[i] is removed, all numbers after that will shift to the left by 1 position\n                //    `even - nums[i] - preEven` would contribute to odd sum\n                // 4. since the parity of numbers before index i won't be changed,\n                //    the new odd sum would be `preOdd + even - nums[i] - preEven`\n                \n                // similarly, the new even would be preEven + odd - preOdd\n                // where preEven doesn't change and (odd - preOdd) is the even sum after index i \n                int new_odd = preOdd + (even - nums[i] - preEven);\n                int new_even = preEven + (odd - preOdd);\n                ans += new_odd == new_even;\n                // add the current number to preEven\n                preEven += nums[i];\n            }\n        }\n        return ans;\n    }\n};\n")))))}y.isMDXComponent=!0}}]);