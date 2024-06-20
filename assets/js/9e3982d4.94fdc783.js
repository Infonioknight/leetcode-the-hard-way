"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32049],{6867:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=s(85893),a=s(11151);const r={description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/"},c="0020 - Valid Parentheses (Easy)",i={id:"0000-0099/valid-parentheses-easy",title:"0020 - Valid Parentheses (Easy)",description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/",source:"@site/solutions/0000-0099/0020-valid-parentheses-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/valid-parentheses-easy",permalink:"/solutions/0000-0099/valid-parentheses-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0020-valid-parentheses-easy.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/valid-parentheses/"},sidebar:"tutorialSidebar",previous:{title:"0019 - Remove Nth Node From End of List (Easy)",permalink:"/solutions/0000-0099/remove-nth-node-from-end-of-list-medium"},next:{title:"0021 - Merge Two Sorted Lists (Easy)",permalink:"/solutions/0000-0099/merge-two-sorted-lists-easy"}},l={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:s,TabItem:r,Tabs:c}=n;return s||p("SolutionAuthor",!0),r||p("TabItem",!0),c||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0020---valid-parentheses-easy",children:"0020 - Valid Parentheses (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/valid-parentheses/",children:"https://leetcode.com/problems/valid-parentheses/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given a string ",(0,t.jsx)(n.code,{children:"s"})," containing just the characters ",(0,t.jsx)(n.code,{children:"'('"}),", ",(0,t.jsx)(n.code,{children:"')'"}),", ",(0,t.jsx)(n.code,{children:"'{'"}),", ",(0,t.jsx)(n.code,{children:"'}'"}),", ",(0,t.jsx)(n.code,{children:"'['"})," and ",(0,t.jsx)(n.code,{children:"']'"}),", determine if the input string is valid."]}),"\n",(0,t.jsx)(n.p,{children:"An input string is valid if:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open brackets must be closed by the same type of brackets."}),"\n",(0,t.jsx)(n.li,{children:"Open brackets must be closed in the correct order."}),"\n",(0,t.jsx)(n.li,{children:"Every close bracket has a corresponding open bracket of the same type."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "()"\nOutput: true\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "()[]{}"\nOutput: true\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "(]"\nOutput: false\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= s.length <= 10^4"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s"})," consists of parentheses only ",(0,t.jsx)(n.code,{children:"'()[]{}'"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-stack",children:"Approach 1: Stack"}),"\n",(0,t.jsxs)(n.p,{children:["Stack is widely known as ",(0,t.jsx)(n.code,{children:"LIFO (last-in, first-out)"})," data structure."]}),"\n",(0,t.jsxs)(n.p,{children:["It's commonly used in ",(0,t.jsx)(n.code,{children:"undo mechanisms in text editors"})," and ",(0,t.jsx)(n.code,{children:"compiler syntax checking for matching brackets and braces"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Parentheses/braces can be in this order ",(0,t.jsx)(n.code,{children:"'()()'"})," or ",(0,t.jsx)(n.code,{children:"'(())'"}),", since the last open ",(0,t.jsx)(n.code,{children:"'('"})," brace next sequence could be either ",(0,t.jsx)(n.code,{children:"')'"})," or ",(0,t.jsx)(n.code,{children:"'('"})," another open brace to nested open braces."]}),"\n",(0,t.jsxs)(n.p,{children:["If the input has any of the open ",(0,t.jsx)(n.code,{children:"'('"})," or ",(0,t.jsx)(n.code,{children:"'{'"})," or ",(0,t.jsx)(n.code,{children:"'['"})," we can push onto a stack. If any close braces/parentheses comes then validate with last inserted character which is on the stack pop, should match corresponding open braces/paranetheses."]}),"\n",(0,t.jsxs)(n.p,{children:["Time Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," - # of characters in the string"]}),"\n",(0,t.jsxs)(n.p,{children:["Space complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsxs)(c,{children:[(0,t.jsxs)(r,{value:"java",label:"Java",children:[(0,t.jsx)(s,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public boolean isValid(String s) {\n        if (Objects.isNull(s) || s.isEmpty() || s.length() < 2) {\n            return false;\n        }\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (Objects.equals(c, '(') || Objects.equals(c, '[') || Objects.equals(c, '{')) {\n                stack.push(c);\n            } else {\n                if (stack.isEmpty()) {\n                    return false;\n                }\n                char last = stack.pop();\n                if (Objects.equals(c, ')') && !Objects.equals(last, '(')) {\n                    return false;\n                }\n                if (Objects.equals(c, ']') && !Objects.equals(last, '[')) {\n                    return false;\n                }\n                if (Objects.equals(c, '}') && !Objects.equals(last, '{')) {\n                    return false;\n                }\n            }\n        }\n        return stack.isEmpty();\n    }\n}\n"})})]}),(0,t.jsxs)(r,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@vale-c"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isValid(self, s: str) -> bool:\n        # if string is empty or has only one character\n        if not s or len(s) < 2:\n            return False\n        stack = []\n        # iterate over the string\n        for c in s:\n            # if the character is an opening bracket\n            if c in ['(', '[', '{']:\n                # push it to the stack\n                stack.append(c)\n            else:\n                # if the stack is empty there is no opening bracket to match\n                if not stack:\n                    return False\n                last = stack.pop()\n                # if the character is a closing bracket and the last element\n                # in the stack is not the corresponding opening bracket\n                if c == ')' and last != '(':\n                    return False\n                if c == ']' and last != '[':\n                    return False\n                if c == '}' and last != '{':\n                    return False\n        # if the stack is empty it means\n        # that all the brackets were matched\n        return not stack\n"})})]}),(0,t.jsxs)(r,{value:"javascript",label:"JavaScript",children:[(0,t.jsx)(s,{name:"@vale-c"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function(s) {\n    // if string is empty or has only one character\n    if (!s || s.length < 2) {\n        return false;\n    }\n    let stack = [];\n    // iterate over the string\n    for (let c of s) {\n        // if the character is an opening bracket\n        if (c === '(' || c === '[' || c === '{') {\n            // push it to the stack\n            stack.push(c);\n        } else {\n            // if the stack is empty there is no opening bracket to match\n            if (!stack.length) {\n                return false;\n            }\n            let last = stack.pop();\n            // if the character is a closing bracket and the last element\n            // in the stack is not the corresponding opening bracket\n            if (c === ')' && last !== '(') {\n                return false;\n            }\n            if (c === ']' && last !== '[') {\n                return false;\n            }\n            if (c === '}' && last !== '{') {\n                return false;\n            }\n        }\n    }\n    // if the stack is empty it means\n    // that all the brackets were matched\n    return !stack.length;\n};\n"})})]}),(0,t.jsxs)(r,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@vale-c"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isValid(string s) {\n        // if string is empty or has only one character\n        if (s.empty() || s.length() < 2) {\n            return false;\n        }\n        stack<char> stack;\n        // iterate over the string\n        for (char c : s) {\n            // if the character is an opening bracket\n            if (c == '(' || c == '[' || c == '{') {\n                // push it to the stack\n                stack.push(c); \n            } else {\n                // if the stack is empty there is no opening bracket to match\n                if (stack.empty()) {\n                    return false;\n                }\n                char last = stack.top();\n                stack.pop();\n                // if the character is a closing bracket and the last element \n                // in the stack is not the corresponding opening bracket\n                if (c == ')' && last != '(') { \n                    return false;\n                }\n                if (c == ']' && last != '[') {\n                    return false;\n                }\n                if (c == '}' && last != '{') {\n                    return false;\n                }\n            }\n        }\n        // if the stack is empty it means\n        // that all the brackets were matched\n        return stack.empty();\n    }\n};\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(67294);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);