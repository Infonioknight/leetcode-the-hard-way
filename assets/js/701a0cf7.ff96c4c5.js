"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[57523],{30191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(85893),i=t(11151);const r={description:"Author: @yashh0903 | https://leetcode.com/problems/next-greater-node-in-linked-list/",tags:["Array","Linked List","Stack","Monotonic Stack"]},o="1019 - Next Greater Node In Linked List (Medium)",l={id:"1000-1099/next-greater-node-in-linked-list",title:"1019 - Next Greater Node In Linked List (Medium)",description:"Author: @yashh0903 | https://leetcode.com/problems/next-greater-node-in-linked-list/",source:"@site/solutions/1000-1099/1019-next-greater-node-in-linked-list.md",sourceDirName:"1000-1099",slug:"/1000-1099/next-greater-node-in-linked-list",permalink:"/solutions/1000-1099/next-greater-node-in-linked-list",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1019-next-greater-node-in-linked-list.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Linked List",permalink:"/solutions/tags/linked-list"},{inline:!0,label:"Stack",permalink:"/solutions/tags/stack"},{inline:!0,label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:1019,frontMatter:{description:"Author: @yashh0903 | https://leetcode.com/problems/next-greater-node-in-linked-list/",tags:["Array","Linked List","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"1011 - Capacity to Ship Packages within d days (Medium)",permalink:"/solutions/1000-1099/capacity-to-ship-packages-within-d-days-medium"},next:{title:"1029 - Two City Scheduling (Medium)",permalink:"/solutions/1000-1099/two-city-scheduling-medium"}},a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:o}=n;return t||p("SolutionAuthor",!0),r||p("TabItem",!0),o||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1019---next-greater-node-in-linked-list-medium",children:"1019 - Next Greater Node In Linked List (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-node-in-linked-list/",children:"https://leetcode.com/problems/next-greater-node-in-linked-list/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given the ",(0,s.jsx)(n.code,{children:"head"})," of a linked list with ",(0,s.jsx)(n.code,{children:"n"})," nodes."]}),"\n",(0,s.jsxs)(n.p,{children:["For each node in the list, find the value of the ",(0,s.jsx)(n.strong,{children:"next greater node"}),". That is, for each node, find the value of the first node that is next to it and has a ",(0,s.jsx)(n.strong,{children:"strictly larger"})," value than it."]}),"\n",(0,s.jsxs)(n.p,{children:["Return an integer array ",(0,s.jsx)(n.code,{children:"answer"})," where ",(0,s.jsx)(n.code,{children:"answer[i]"})," is the value of the next greater node of the ",(0,s.jsx)(n.code,{children:"ith"})," node (",(0,s.jsx)(n.strong,{children:"1-indexed"}),"). If the ",(0,s.jsx)(n.code,{children:"ith"})," node does not have a next greater node, set ",(0,s.jsx)(n.code,{children:"answer[i] = 0"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: head = [2,1,5]\nOutput: [5,5,0]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: head = [2,7,4,3,5]\nOutput: [7,0,5,5,0]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The number of nodes in the list is ",(0,s.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= n <= 1e4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= Node.val <= 1e9"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-stack",children:"Approach 1: Stack"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Initialize an empty stack and an empty answer vector."}),"\n",(0,s.jsx)(n.li,{children:"Reverse the given linked list."}),"\n",(0,s.jsx)(n.li,{children:"Traverse the reversed linked list."}),"\n",(0,s.jsxs)(n.li,{children:["For each node:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"While the stack is not empty and the top element is less than or equal to the current node's value, pop elements from the stack."}),"\n",(0,s.jsx)(n.li,{children:"If the stack is empty, append 0 to the answer vector."}),"\n",(0,s.jsx)(n.li,{children:"If the stack is not empty, append the top element to the answer vector."}),"\n",(0,s.jsx)(n.li,{children:"Push the current node's value onto the stack."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Reverse the answer vector to obtain the correct order of next larger elements."}),"\n",(0,s.jsx)(n.li,{children:"Return the answer vector."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Time Complexity: O(n), where n is the number of nodes in the linked list."}),"\n",(0,s.jsx)(n.li,{children:"Space Complexity: O(n), as we use a stack to store elements and an answer vector to store the"}),"\n"]}),"\n",(0,s.jsx)(o,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@yashh0903"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> nextLargerNodes(ListNode* head) {\n        // Stores the result\n        vector<int> ans;\n        // Stack to keep track of elements\n        stack<int> st;\n\n        ListNode* newHead = NULL;\n\n        // Reversing the linked list\n        while (head != NULL) {\n            ListNode* next = head->next;\n            head->next = newHead;\n            newHead = head;\n            head = next;\n        }\n\n        while (newHead != nullptr) {\n            if (st.empty()) ans.push_back(0);\n            else if (!st.empty() && st.top() > newHead->val) ans.push_back(st.top());\n            else if (!st.empty() && st.top() <= newHead->val) {\n                // Pop elements from the stack until finding an element \n                // greater than the current node's value or the stack becomes empty\n                while (!st.empty() && st.top() <= newHead->val) st.pop();\n                // Append the top element to the answer vector\n                if (!st.empty()) ans.push_back(st.top());\n                // If the stack becomes empty, \n                // there is no larger element, so append 0 to the answer vector\n                else ans.push_back(0);\n            }\n            // Push the current node's value onto the stack\n            st.push(newHead->val);\n            // Move to the next node\n            newHead = newHead->next;\n        }\n        // Reversing the answer vector to restore the correct order\n        reverse(ans.begin(), ans.end());\n        return ans;\n    }\n};\n\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);