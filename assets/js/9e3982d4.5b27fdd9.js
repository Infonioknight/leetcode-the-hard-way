"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32049],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(a),h=r,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<s;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51407:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),p=["components"],o={description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/"},l="0020 - Valid Parentheses (Easy)",i={unversionedId:"0000-0099/valid-parentheses-easy",id:"0000-0099/valid-parentheses-easy",title:"0020 - Valid Parentheses (Easy)",description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/",source:"@site/solutions/0000-0099/0020-valid-parentheses-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/valid-parentheses-easy",permalink:"/leetcode-the-hard-way/solutions/0000-0099/valid-parentheses-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0020-valid-parentheses-easy.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/"},sidebar:"tutorialSidebar",previous:{title:"0019 - Remove Nth Node From End of List (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/remove-nth-node-from-end-of-list-medium"},next:{title:"0021 - Merge Two Sorted Lists (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/merge-two-sorted-lists-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},h=u("Tabs"),k=u("TabItem"),d=u("SolutionAuthor"),N={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0020---valid-parentheses-easy"},"0020 - Valid Parentheses (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-parentheses/"},"https://leetcode.com/problems/valid-parentheses/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given a string ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," containing just the characters ",(0,s.kt)("inlineCode",{parentName:"p"},"'('"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"')'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'{'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'}'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'['")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"']'"),", determine if the input string is valid."),(0,s.kt)("p",null,"An input string is valid if:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open brackets must be closed by the same type of brackets."),(0,s.kt)("li",{parentName:"ol"},"Open brackets must be closed in the correct order."),(0,s.kt)("li",{parentName:"ol"},"Every close bracket has a corresponding open bracket of the same type.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "()"\nOutput: true\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "()[]{}"\nOutput: true\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "(]"\nOutput: false\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," consists of parentheses only ",(0,s.kt)("inlineCode",{parentName:"li"},"'()[]{}'"),".")),(0,s.kt)("h2",{id:"approach-1-stack"},"Approach 1: Stack"),(0,s.kt)("p",null,"Stack is widely known as ",(0,s.kt)("inlineCode",{parentName:"p"},"LIFO (last-in, first-out)")," data structure. "),(0,s.kt)("p",null,"It's commonly used in ",(0,s.kt)("inlineCode",{parentName:"p"},"undo mechanisms in text editors")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"compiler syntax checking for matching brackets and braces"),"."),(0,s.kt)("p",null,"Parentheses/braces can be in this order ",(0,s.kt)("inlineCode",{parentName:"p"},"'()()'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'(())'"),", since the last open ",(0,s.kt)("inlineCode",{parentName:"p"},"'('")," brace next sequence could be either ",(0,s.kt)("inlineCode",{parentName:"p"},"')'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'('")," another open brace to nested open braces. "),(0,s.kt)("p",null,"If the input has any of the open ",(0,s.kt)("inlineCode",{parentName:"p"},"'('")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'{'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'['")," we can push onto a stack. If any close braces/parentheses comes then validate with last inserted character which is on the stack pop, should match corresponding open braces/paranetheses. "),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of characters in the string"),(0,s.kt)("p",null,"Space complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isValid(String s) {\n        if (Objects.isNull(s) || s.isEmpty() || s.length() < 2) {\n            return false;\n        }\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (Objects.equals(c, '(') || Objects.equals(c, '[') || Objects.equals(c, '{')) {\n                stack.push(c);\n            } else {\n                if (stack.isEmpty()) {\n                    return false;\n                }\n                char last = stack.pop();\n                if (Objects.equals(c, ')') && !Objects.equals(last, '(')) {\n                    return false;\n                }\n                if (Objects.equals(c, ']') && !Objects.equals(last, '[')) {\n                    return false;\n                }\n                if (Objects.equals(c, '}') && !Objects.equals(last, '{')) {\n                    return false;\n                }\n            }\n        }\n        return stack.isEmpty();\n    }\n}\n")))))}f.isMDXComponent=!0}}]);