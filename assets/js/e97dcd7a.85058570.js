"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29331],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/partition-array-according-to-given-pivot/"},p="2161 - Partition Array According to Given Pivot (Medium)",s={unversionedId:"2100-2199/partition-array-according-to-given-pivot-medium",id:"2100-2199/partition-array-according-to-given-pivot-medium",title:"2161 - Partition Array According to Given Pivot (Medium)",description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/partition-array-according-to-given-pivot/",source:"@site/solutions/2100-2199/2161-partition-array-according-to-given-pivot-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/partition-array-according-to-given-pivot-medium",permalink:"/solutions/2100-2199/partition-array-according-to-given-pivot-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2161-partition-array-according-to-given-pivot-medium.md",tags:[],version:"current",sidebarPosition:2161,frontMatter:{description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/partition-array-according-to-given-pivot/"},sidebar:"tutorialSidebar",previous:{title:"2160 - Minimum Sum of Four Digit Number After Splitting Digits (Easy)",permalink:"/solutions/2100-2199/minimum-sum-of-four-digit-number-after-splitting-digits-easy"},next:{title:"2162 - Minimum Cost to Set Cooking Time (Medium)",permalink:"/solutions/2100-2199/minimum-cost-to-set-cooking-time-medium"}},m={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Push elements to 3 arrays",id:"approach-1-push-elements-to-3-arrays",level:2},{value:"Approach 2: 3 Passes with 1 array",id:"approach-2-3-passes-with-1-array",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},c=d("Tabs"),h=d("TabItem"),v=d("SolutionAuthor"),k={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2161---partition-array-according-to-given-pivot-medium"},"2161 - Partition Array According to Given Pivot (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/partition-array-according-to-given-pivot/"},"https://leetcode.com/problems/partition-array-according-to-given-pivot/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a ",(0,i.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"pivot"),". Rearrange ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," such that the following conditions are satisfied:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every element less than ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot")," appears ",(0,i.kt)("strong",{parentName:"li"},"before")," every element greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot"),"."),(0,i.kt)("li",{parentName:"ul"},"Every element equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot")," appears ",(0,i.kt)("strong",{parentName:"li"},"in between")," the elements less than and greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"relative order")," of the elements less than ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot")," and the elements greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot")," is maintained.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"More formally, consider every ",(0,i.kt)("inlineCode",{parentName:"li"},"pi"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pj")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"pi")," is the new position of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ith")," element and ",(0,i.kt)("inlineCode",{parentName:"li"},"pj")," is the new position of the ",(0,i.kt)("inlineCode",{parentName:"li"},"jth")," element. For elements less than ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot"),", if ",(0,i.kt)("inlineCode",{parentName:"li"},"i < j")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nums[i] < pivot")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nums[j] < pivot"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"pi < pj"),". Similarly for elements greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"pivot"),", if ",(0,i.kt)("inlineCode",{parentName:"li"},"i < j")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nums[i] > pivot")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nums[j] > pivot"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"pi < pj"),".")))),(0,i.kt)("p",null,"Return ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," ",(0,i.kt)("em",{parentName:"p"},"after the rearrangement.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [9,12,5,10,14,3,10], pivot = 10\nOutput: [9,5,3,10,10,12,14]\nExplanation: \nThe elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.\nThe elements 12 and 14 are greater than the pivot so they are on the right side of the array.\nThe relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [-3,4,3,2], pivot = 2\nOutput: [-3,2,4,3]\nExplanation: \nThe element -3 is less than the pivot so it is on the left side of the array.\nThe elements 4 and 3 are greater than the pivot so they are on the right side of the array.\nThe relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings. \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 105")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-10^6 <= nums[i] <= 10^6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pivot")," equals to an element of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums"),".")),(0,i.kt)("h2",{id:"approach-1-push-elements-to-3-arrays"},"Approach 1: Push elements to 3 arrays"),(0,i.kt)("p",null,"It is same as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pushing the elements less the pivot."),(0,i.kt)("li",{parentName:"ul"},"Pushing the elements equal to the pivot"),(0,i.kt)("li",{parentName:"ul"},"Pushing the elements greater than the pivot")),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(v,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> pivotArray(vector<int>& nums, int p) {\n        vector<int> l, r, m;\n        for (auto x : nums) {\n            if (x < p) l.push_back(x);\n            else if (x > p) r.push_back(x);\n            else m.push_back(x);\n        }\n        l.insert(l.end(), m.begin(), m.end());\n        l.insert(l.end(), r.begin(), r.end());\n        return l;\n    }\n};\n"))),(0,i.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(v,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] pivotArray(int[] nums, int pivot) {\n        LinkedList<Integer> l = new LinkedList<>();\n        LinkedList<Integer> r = new LinkedList<>();\n        LinkedList<Integer> m = new LinkedList<>();\n        for (int x : nums) {\n            if (x < pivot) {\n                l.add(x);\n            } else if (x > pivot) {\n                m.add(x);\n            } else {\n                r.add(x);\n            }\n        }\n        l.addAll(r);\n        l.addAll(m);\n        return l.stream().mapToInt(i -> i).toArray();\n    }\n}\n")))),(0,i.kt)("h2",{id:"approach-2-3-passes-with-1-array"},"Approach 2: 3 Passes with 1 array"),(0,i.kt)("p",null,"Same idea as Approach 1 but we only use one array."),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(v,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> pivotArray(vector<int>& nums, int p) {\n        vector<int> ans;\n        for (auto x : nums) if (x < p) ans.push_back(x);\n        for (auto x : nums) if (x == p) ans.push_back(x);\n        for (auto x : nums) if (x > p) ans.push_back(x);\n        return ans;\n    }\n};\n"))),(0,i.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(v,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] pivotArray(int[] nums, int pivot) {\n        LinkedList<Integer> ll = new LinkedList<>();\n        for (int x : nums)\n            if (x < pivot)\n                ll.add(x);\n        for (int x : nums)\n            if (x == pivot)\n                ll.add(x);\n        for (int x : nums)\n            if (x > pivot)\n                ll.add(x);\n        return ll.stream().mapToInt(i -> i).toArray();\n    }\n}\n")))))}g.isMDXComponent=!0}}]);