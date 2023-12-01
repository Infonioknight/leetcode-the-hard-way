"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65500],{97646:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(85893),t=n(11151);const r={description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",tags:["Linked List","Stack"]},l="2487 - Remove Nodes From Linked List (Medium)",i={id:"2400-2499/remove-nodes-from-linked-list-medium",title:"2487 - Remove Nodes From Linked List (Medium)",description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",source:"@site/solutions/2400-2499/2487-remove-nodes-from-linked-list-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/remove-nodes-from-linked-list-medium",permalink:"/solutions/2400-2499/remove-nodes-from-linked-list-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2487-remove-nodes-from-linked-list-medium.md",tags:[{label:"Linked List",permalink:"/solutions/tags/linked-list"},{label:"Stack",permalink:"/solutions/tags/stack"}],version:"current",sidebarPosition:2487,frontMatter:{description:"Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/",tags:["Linked List","Stack"]},sidebar:"tutorialSidebar",previous:{title:"2486 - Append Characters to String to Make Subsequence (Medium)",permalink:"/solutions/2400-2499/append-characters-to-string-to-make-subsequence-medium"},next:{title:"2500 - 2599",permalink:"/solutions/category/2500---2599"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Straight Forward",id:"approach-1-straight-forward",level:2},{value:"Approach 2: Stack",id:"approach-2-stack",level:2}];function m(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:l}=s;return n||o("SolutionAuthor",!0),r||o("TabItem",!0),l||o("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"2487---remove-nodes-from-linked-list-medium",children:"2487 - Remove Nodes From Linked List (Medium)"}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/remove-nodes-from-linked-list/",children:"https://leetcode.com/problems/remove-nodes-from-linked-list/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsx)(s.p,{children:"You are given the head of a linked list."}),"\n",(0,a.jsx)(s.p,{children:"Remove every node which has a node with a strictly greater value anywhere to the right side of it."}),"\n",(0,a.jsx)(s.p,{children:"Return the head of the modified linked list."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: head = [5,2,13,3,8]\nOutput: [13,8]\nExplanation: The nodes that should be removed are 5, 2 and 3.\n- Node 13 is to the right of node 5.\n- Node 13 is to the right of node 2.\n- Node 8 is to the right of node 3.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Input: head = [1,1,1,1]\nOutput: [1,1,1,1]\nExplanation: Every node has value 1, so no nodes are removed.\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"The number of the nodes in the given list is in the range [1, 105]."}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:"N"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(s.mi,{children:"v"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mo,{children:"<"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mn,{children:"0"}),(0,a.jsx)(s.mn,{children:"5"})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 <= Node.val <= 10^5"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord",children:"."}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"<="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord",children:"0"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"5"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-straight-forward",children:"Approach 1: Straight Forward"}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(s.p,{children:["Space Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsx)(l,{children:(0,a.jsxs)(r,{value:"py",label:"Python",children:[(0,a.jsx)(n,{name:"@dhanu084"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:\n\n        '''\n            * If we see the question and expected answer we can always see that the tail of the linked list is included in the output.\n            * So reverse the linked list and connect nodes which are\n            less / equal than the current node.\n            * Since we have reversed the linked list , we do less / equal\n            checking instead of strictly increase check mentioned in the question\n            * finally reverse the linked list again and return to get the answer in expected order\n        '''\n        def reverse(node):\n            curr = node\n            prev = None\n\n            while curr:\n                next = curr.next\n                curr.next = prev\n                prev = curr\n                curr = next\n            return prev\n\n        reverse_head = reverse(head)\n        current_reverse_head = reverse_head\n\n        while current_reverse_head:\n            ch = current_reverse_head.next\n            '''\n                iterate till we find a node greater than current node\n                and connect it to current node\n            '''\n            while ch and ch.val < current_reverse_head.val:\n                ch = ch.next\n            current_reverse_head.next = ch\n            current_reverse_head = ch\n\n        head = reverse(reverse_head)\n        return head\n\n"})})]})}),"\n",(0,a.jsx)(s.h2,{id:"approach-2-stack",children:"Approach 2: Stack"}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(s.p,{children:["Space Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," if all nodes have same value"]}),"\n",(0,a.jsx)(l,{children:(0,a.jsxs)(r,{value:"py",label:"Python",children:[(0,a.jsx)(n,{name:"@dhanu084"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:\n\n        '''\n            * Idea here is to create a stack which is monotonously decreasing,\n            any thing that defers are popped from the stack\n            * as and when we append or remove from stack we update\n            next pointer appropriately\n        '''\n        dummy = ListNode(inf)\n        stack = [dummy]\n\n        while head:\n            while stack and stack[-1].val < head.val:\n                stack.pop()\n            stack[-1].next = head\n            stack.append(head)\n            head = head.next\n        return dummy.next\n"})})]})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function o(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var a=n(67294);const t={},r=a.createContext(t);function l(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);