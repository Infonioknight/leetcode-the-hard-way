"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94241],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,y=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"Binary Search",description:"Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.",hide_table_of_contents:!1,keywords:["leetcode","template","binary search"]},l=void 0,u={unversionedId:"binary-search",id:"binary-search",title:"Binary Search",description:"Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.",source:"@site/templates/binary-search.md",sourceDirName:".",slug:"/binary-search",permalink:"/leetcode-the-hard-way/templates/binary-search",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/binary-search.md",tags:[],version:"current",frontMatter:{title:"Binary Search",description:"Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.",hide_table_of_contents:!1,keywords:["leetcode","template","binary search"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/leetcode-the-hard-way/templates/"},next:{title:"Bit Manipulation",permalink:"/leetcode-the-hard-way/templates/bit-manipulation"}},s={},p=[],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// ---------------------------------\n// target < nums[m]\n// ---------------------------------\n\nint search(vector<int>& nums, int target) {\n    // init possible boundary\n    int n = nums.size(), l = 0, r = n - 1;\n    while (l < r) {\n        // get the middle one\n        // for even number of elements, take the upper one\n        int m = l + (r - l + 1) / 2;\n        // exclude m\n        if (target < nums[m]) r = m - 1;\n        // include m\n        else l = m;\n    }\n    return nums[l] == target ? l : -1;\n}\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// ---------------------------------\n// target > nums[m]\n// ---------------------------------\n\nint search(vector<int>& nums, int target) {\n    // init possible boundary\n    int n = nums.size(), l = 0, r = n - 1;\n    while (l < r) {\n        // get the middle one\n        // for even number of elements, take the lower one\n        int m = l + (r - l) / 2;\n        // exclude m\n        if (target > nums[m]) l = m + 1;\n        // include m\n        else r = m;\n    }\n    return nums[l] == target ? l : -1;\n}\n")))}h.isMDXComponent=!0}}]);