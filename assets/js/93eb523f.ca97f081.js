"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/two-city-scheduling/",tags:["Array","Sorting","Greedy"]},i="1029 - Two City Scheduling (Medium)",s={unversionedId:"1000-1099/two-city-scheduling-medium",id:"1000-1099/two-city-scheduling-medium",title:"1029 - Two City Scheduling (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/two-city-scheduling/",source:"@site/solutions/1000-1099/1029-two-city-scheduling-medium.md",sourceDirName:"1000-1099",slug:"/1000-1099/two-city-scheduling-medium",permalink:"/solutions/1000-1099/two-city-scheduling-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1029-two-city-scheduling-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Sorting",permalink:"/solutions/tags/sorting"},{label:"Greedy",permalink:"/solutions/tags/greedy"}],version:"current",sidebarPosition:1029,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/two-city-scheduling/",tags:["Array","Sorting","Greedy"]},sidebar:"tutorialSidebar",previous:{title:"1019 - Next Greater Node In Linked List (Medium)",permalink:"/solutions/1000-1099/next-greater-node-in-linked-list"},next:{title:"1043 - Partition Array for Maximum Sum (Medium)",permalink:"/solutions/1000-1099/partition-array-for-maximum-sum-medium"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting + Greedy",id:"approach-1-sorting--greedy",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1029---two-city-scheduling-medium"},"1029 - Two City Scheduling (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-city-scheduling/"},"https://leetcode.com/problems/two-city-scheduling/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"A company is planning to interview ",(0,o.kt)("inlineCode",{parentName:"p"},"2n")," people. Given the array ",(0,o.kt)("inlineCode",{parentName:"p"},"costs")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"costs[i] = [aCosti, bCosti]"),", the cost of flying the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," person to city ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"aCosti"),", and the cost of flying the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," person to city ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"bCosti"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the minimum cost to fly every person to a city")," such that exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," people arrive in each city."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: costs = [[10,20],[30,200],[400,50],[30,20]]\nOutput: 110\nExplanation: \nThe first person goes to city A for a cost of 10.\nThe second person goes to city A for a cost of 30.\nThe third person goes to city B for a cost of 50.\nThe fourth person goes to city B for a cost of 20.\n\nThe total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]\nOutput: 1859\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]\nOutput: 3086\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 * n == costs.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= costs.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"costs.length")," is even."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= aCosti, bCosti <= 1000"))),(0,o.kt)("h2",{id:"approach-1-sorting--greedy"},"Approach 1: Sorting + Greedy"),(0,o.kt)("p",null,"If we need to spend more money to fly to city B, then it's better to send it to city A, and vice versa. Therefore, we sort the input by their difference (i.e. how much a company can save) and take the first ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"n")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," to city A and the rest of them to city B."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int twoCitySchedCost(vector<vector<int>>& costs) {\n        int n = costs.size(), ans = 0;\n        // sort by the diff\n        sort(costs.begin(), costs.end(), [&](const vector<int>& x, const vector<int>& y) {\n           return x[1] - x[0] > y[1] - y[0]; \n        });\n        for (int i = 0; i < n / 2; i++) {\n            // cost to fly i-th person to city A\n            ans += costs[i][0];\n            // cost to fly (n - 1 - i)-th person to city B\n            ans += costs[n - 1 - i][1];\n        }\n        return ans;\n    }\n};\n")))}u.isMDXComponent=!0}}]);