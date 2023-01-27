"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92877],{3905:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return d}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(o),d=i,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return o?n.createElement(f,l(l({ref:t},m),{},{components:o})):n.createElement(f,l({ref:t},m))}));function d(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,l=new Array(r);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},41880:function(e,t,o){o.r(t),o.d(t,{DPBitManipulationProblems:function(){return d},assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var n,i=o(87462),r=o(63366),l=(o(67294),o(3905)),a=["components"],s={title:"LTHW - Dynamic Programming",description:"Collections of DP Problems in different categories",hide_table_of_contents:!0,sidebar_position:4,keywords:["leetcode","collection","dynamic programming"]},c=void 0,m={unversionedId:"dynamic-programming",id:"dynamic-programming",title:"LTHW - Dynamic Programming",description:"Collections of DP Problems in different categories",source:"@site/collections/dynamic-programming.md",sourceDirName:".",slug:"/dynamic-programming",permalink:"/collections/dynamic-programming",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/collections/dynamic-programming.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"LTHW - Dynamic Programming",description:"Collections of DP Problems in different categories",hide_table_of_contents:!0,sidebar_position:4,keywords:["leetcode","collection","dynamic programming"]},sidebar:"tutorialSidebar",previous:{title:"LTHW - Heap (Priority Queue)",permalink:"/collections/heap"},next:{title:"Study Plan - Programming Skills - I",permalink:"/collections/programming-skills-i"}},u={},p=[],d=[{problemName:"0464 - Can I Win",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/can-i-win/",solutionLink:""},{problemName:"0691 - Stickers to Spell Word",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/stickers-to-spell-word/",solutionLink:""},{problemName:"0698 - Partition to K Equal Sum Subsets",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",solutionLink:""},{problemName:"0847 -  Shortest Path Visiting All Nodes",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/shortest-path-visiting-all-nodes/",solutionLink:"../solutions/0800-0899/shortest-path-visiting-all-nodes-hard"},{problemName:"1125 -  Smallest Sufficient Team",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/smallest-sufficient-team/",solutionLink:"../solutions/1100-1199/smallest-sufficient-team-hard"},{problemName:"1349 - Maximum Students Taking Exam",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/maximum-students-taking-exam/",solutionLink:"../solutions/1300-1399/maximum-students-taking-exam-hard"},{problemName:"1434 - Number of Ways to Wear Different Hats to Each Other",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/",solutionLink:""},{problemName:"1595 - Minimum Cost to Connect Two Groups of Points",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/",solutionLink:""},{problemName:"1601 - Maximum Number of Achievable Transfer Requests",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/",solutionLink:""},{problemName:"1655 - Distribute Repeating Integers",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/distribute-repeating-integers/",solutionLink:""},{problemName:"1659 - Maximize Grid Happiness",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/maximize-grid-happiness/",solutionLink:""},{problemName:"1723 - Find Minimum Time to Finish All Jobs",difficulty:"Hard",leetCodeLink:"https://leetcode.com/problems/distribute-repeating-integers/",solutionLink:""}],f=(n="Table",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),b={toc:p,DPBitManipulationProblems:d};function y(e){var t=e.components,o=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(f,{title:"Bit Manipulation",data:d,collectionLink:"https://leetcode.com/list/eeo6ays7",mdxType:"Table"}))}y.isMDXComponent=!0}}]);