"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32049],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=o(n),k=r,u=h["".concat(p,".").concat(k)]||h[k]||m[k]||s;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],l={description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/"},p="0020 - Valid Parentheses (Easy)",o={unversionedId:"0000-0099/valid-parentheses-easy",id:"0000-0099/valid-parentheses-easy",title:"0020 - Valid Parentheses (Easy)",description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/",source:"@site/solutions/0000-0099/0020-valid-parentheses-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/valid-parentheses-easy",permalink:"/leetcode-the-hard-way/solutions/0000-0099/valid-parentheses-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0020-valid-parentheses-easy.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/"},sidebar:"tutorialSidebar",previous:{title:"0019 - Remove Nth Node From End of List (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/remove-nth-node-from-end-of-list-medium"},next:{title:"0021 - Merge Two Sorted Lists (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/merge-two-sorted-lists-easy"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},k=h("Tabs"),u=h("TabItem"),d=h("SolutionAuthor"),f={toc:m};function N(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0020---valid-parentheses-easy"},"0020 - Valid Parentheses (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-parentheses/"},"https://leetcode.com/problems/valid-parentheses/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given a string ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," containing just the characters ",(0,s.kt)("inlineCode",{parentName:"p"},"'('"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"')'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'{'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'}'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'['")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"']'"),", determine if the input string is valid."),(0,s.kt)("p",null,"An input string is valid if:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open brackets must be closed by the same type of brackets."),(0,s.kt)("li",{parentName:"ol"},"Open brackets must be closed in the correct order."),(0,s.kt)("li",{parentName:"ol"},"Every close bracket has a corresponding open bracket of the same type.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "()"\nOutput: true\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "()[]{}"\nOutput: true\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "(]"\nOutput: false\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," consists of parentheses only ",(0,s.kt)("inlineCode",{parentName:"li"},"'()[]{}'"),".")),(0,s.kt)("h2",{id:"approach-1-stack"},"Approach 1: Stack"),(0,s.kt)("p",null,"Stack is widely known as ",(0,s.kt)("inlineCode",{parentName:"p"},"LIFO (last-in, first-out)")," data structure. "),(0,s.kt)("p",null,"It's commonly used in ",(0,s.kt)("inlineCode",{parentName:"p"},"undo mechanisms in text editors")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"compiler syntax checking for matching brackets and braces"),"."),(0,s.kt)("p",null,"Parentheses/braces can be in this order ",(0,s.kt)("inlineCode",{parentName:"p"},"'()()'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'(())'"),", since the last open ",(0,s.kt)("inlineCode",{parentName:"p"},"'('")," brace next sequence could be either ",(0,s.kt)("inlineCode",{parentName:"p"},"')'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'('")," another open brace to nested open braces. "),(0,s.kt)("p",null,"If the input has any of the open ",(0,s.kt)("inlineCode",{parentName:"p"},"'('")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'{'")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"'['")," we can push onto a stack. If any close braces/parentheses comes then validate with last inserted character which is on the stack pop, should match corresponding open braces/paranetheses. "),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," - # of characters in the string"),(0,s.kt)("p",null,"Space complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isValid(String s) {\n        if (Objects.isNull(s) || s.isEmpty() || s.length() < 2) {\n            return false;\n        }\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (Objects.equals(c, '(') || Objects.equals(c, '[') || Objects.equals(c, '{')) {\n                stack.push(c);\n            } else {\n                if (stack.isEmpty()) {\n                    return false;\n                }\n                char last = stack.pop();\n                if (Objects.equals(c, ')') && !Objects.equals(last, '(')) {\n                    return false;\n                }\n                if (Objects.equals(c, ']') && !Objects.equals(last, '[')) {\n                    return false;\n                }\n                if (Objects.equals(c, '}') && !Objects.equals(last, '{')) {\n                    return false;\n                }\n            }\n        }\n        return stack.isEmpty();\n    }\n}\n"))),(0,s.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vale-c",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isValid(self, s: str) -> bool:\n        # if string is empty or has only one character\n        if not s or len(s) < 2:\n            return False\n        stack = []\n        # iterate over the string\n        for c in s:\n            # if the character is an opening bracket\n            if c in ['(', '[', '{']:\n                # push it to the stack\n                stack.append(c)\n            else:\n                # if the stack is empty there is no opening bracket to match\n                if not stack:\n                    return False\n                last = stack.pop()\n                # if the character is a closing bracket and the last element\n                # in the stack is not the corresponding opening bracket\n                if c == ')' and last != '(':\n                    return False\n                if c == ']' and last != '[':\n                    return False\n                if c == '}' and last != '{':\n                    return False\n        # if the stack is empty it means\n        # that all the brackets were matched\n        return not stack\n"))),(0,s.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vale-c",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function(s) {\n    // if string is empty or has only one character\n    if (!s || s.length < 2) {\n        return false;\n    }\n    let stack = [];\n    // iterate over the string\n    for (let c of s) {\n        // if the character is an opening bracket\n        if (c === '(' || c === '[' || c === '{') {\n            // push it to the stack\n            stack.push(c);\n        } else {\n            // if the stack is empty there is no opening bracket to match\n            if (!stack.length) {\n                return false;\n            }\n            let last = stack.pop();\n            // if the character is a closing bracket and the last element\n            // in the stack is not the corresponding opening bracket\n            if (c === ')' && last !== '(') {\n                return false;\n            }\n            if (c === ']' && last !== '[') {\n                return false;\n            }\n            if (c === '}' && last !== '{') {\n                return false;\n            }\n        }\n    }\n    // if the stack is empty it means\n    // that all the brackets were matched\n    return !stack.length;\n};\n"))),(0,s.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(d,{name:"@vale-c",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isValid(string s) {\n        // if string is empty or has only one character\n        if (s.empty() || s.length() < 2) {\n            return false;\n        }\n        stack<char> stack;\n        // iterate over the string\n        for (char c : s) {\n            // if the character is an opening bracket\n            if (c == '(' || c == '[' || c == '{') {\n                // push it to the stack\n                stack.push(c); \n            } else {\n                // if the stack is empty there is no opening bracket to match\n                if (stack.empty()) {\n                    return false;\n                }\n                char last = stack.top();\n                stack.pop();\n                // if the character is a closing bracket and the last element \n                // in the stack is not the corresponding opening bracket\n                if (c == ')' && last != '(') { \n                    return false;\n                }\n                if (c == ']' && last != '[') {\n                    return false;\n                }\n                if (c == '}' && last != '{') {\n                    return false;\n                }\n            }\n        }\n        // if the stack is empty it means\n        // that all the brackets were matched\n        return stack.empty();\n    }\n};\n")))))}N.isMDXComponent=!0}}]);