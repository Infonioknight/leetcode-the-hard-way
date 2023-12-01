"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93003],{99808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(85893),a=t(11151);const i={description:"Author: @heiheihang, @ColeB2 | https://leetcode.com/problems/min-stack/"},l="0155 - Min Stack (Medium)",o={id:"0100-0199/min-stack-medium",title:"0155 - Min Stack (Medium)",description:"Author: @heiheihang, @ColeB2 | https://leetcode.com/problems/min-stack/",source:"@site/solutions/0100-0199/0155-min-stack-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/min-stack-medium",permalink:"/solutions/0100-0199/min-stack-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0155-min-stack-medium.md",tags:[],version:"current",sidebarPosition:155,frontMatter:{description:"Author: @heiheihang, @ColeB2 | https://leetcode.com/problems/min-stack/"},sidebar:"tutorialSidebar",previous:{title:"0154 - Find Minimum in Rotated Sorted Array II (Hard)",permalink:"/solutions/0100-0199/find-minimum-in-rotated-sorted-array-ii-hard"},next:{title:"0162 - Find Peak Element (Medium)",permalink:"/solutions/0100-0199/find-peak-element-medium"}},r={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Implementation",id:"approach-1-implementation",level:2},{value:"Approach 2: Singly Linked List",id:"approach-2-singly-linked-list",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:t,TabItem:i,Tabs:l}=n;return t||m("SolutionAuthor",!0),i||m("TabItem",!0),l||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0155---min-stack-medium",children:"0155 - Min Stack (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/min-stack/",children:"https://leetcode.com/problems/min-stack/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsx)(n.p,{children:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time."}),"\n",(0,s.jsxs)(n.p,{children:["Implement the ",(0,s.jsx)(n.code,{children:"MinStack"})," class:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MinStack()"})," initializes the stack object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"void push(int val)"})," pushes the element ",(0,s.jsx)(n.code,{children:"val"})," onto the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"void pop()"})," removes the element on the top of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int top()"})," gets the top element of the stack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int getMin()"})," retrieves the minimum element in the stack."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input\n["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\nOutput\n[null,null,null,null,-3,null,0,-2]\n\nExplanation\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // return -3\nminStack.pop();\nminStack.top();    // return 0\nminStack.getMin(); // return -2\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-2^31 <= val <= 2^31 - 1"})}),"\n",(0,s.jsxs)(n.li,{children:["Methods ",(0,s.jsx)(n.code,{children:"pop"}),", ",(0,s.jsx)(n.code,{children:"top"})," and ",(0,s.jsx)(n.code,{children:"getMin"})," operations will always be called on ",(0,s.jsx)(n.strong,{children:"non-empty"})," stacks."]}),"\n",(0,s.jsxs)(n.li,{children:["At most ",(0,s.jsx)(n.code,{children:"3 * 10^4"})," calls will be made to ",(0,s.jsx)(n.code,{children:"push"}),", ",(0,s.jsx)(n.code,{children:"pop"}),", ",(0,s.jsx)(n.code,{children:"top"}),", and ",(0,s.jsx)(n.code,{children:"getMin"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-implementation",children:"Approach 1: Implementation"}),"\n",(0,s.jsxs)(n.p,{children:["The general approach is to keep track of the ",(0,s.jsx)(n.code,{children:"current_min"})," at each level of the stack."]}),"\n",(0,s.jsxs)(n.p,{children:["When we add a new element to the stack, we need to check if the new element is smaller than ",(0,s.jsx)(n.code,{children:"current_min"}),". If yes, we need to update the value. We also need to attach a label of ",(0,s.jsx)(n.code,{children:"current_min"})," when we ",(0,s.jsx)(n.code,{children:"push"}),", so we can keep track of the smallest element ",(0,s.jsx)(n.strong,{children:"BEFORE"})," that entry."]}),"\n",(0,s.jsxs)(n.p,{children:["Similarly, when we ",(0,s.jsx)(n.code,{children:"pop"})," an element from the stack, we need to update ",(0,s.jsx)(n.code,{children:"current_min"}),". A simple example is that the last element in the stack is the smallest. When we ",(0,s.jsx)(n.code,{children:"pop"})," that element, ",(0,s.jsx)(n.code,{children:"current_min"})," is still not updated. Hence, we need to set ",(0,s.jsx)(n.code,{children:"current_min"})," to the new last element's label."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"top"})," and ",(0,s.jsx)(n.code,{children:"getMin"})," are very straightforward implementations."]}),"\n",(0,s.jsx)(l,{children:(0,s.jsxs)(i,{value:"python",label:"Python",children:[(0,s.jsx)(t,{name:"@heiheihang"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MinStack:\n\n    def __init__(self):\n        \n        #initialize stack\n        self.stack = []\n        \n        #we need to have a label to keep track of the current smallest number\n        self.current_min = None\n        \n    def push(self, val: int) -> None:\n        \n        #update current_min if new value is smaller\n        if(self.current_min == None or val < self.current_min):\n            self.current_min = val\n        \n        #besides adding val, we also need to add current_min to keep track of current_min\n        self.stack.append([val, self.current_min])\n        \n\n    def pop(self) -> None:\n        \n        #remove last element\n        self.stack.pop()\n        \n        #update current_min after popping\n        if(self.stack):\n            self.current_min = self.stack[-1][1]\n        else:\n            self.current_min = None\n\n    def top(self) -> int:\n        \n        #if stack is not empty, return the last element's value (not label)\n        if(self.stack):\n            return self.stack[-1][0]\n\n    def getMin(self) -> int:\n        \n        #return current_min\n        if(self.stack):\n            return self.current_min\n\n"})})]})}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-singly-linked-list",children:"Approach 2: Singly Linked List"}),"\n",(0,s.jsxs)(n.p,{children:["We can also implement a Min Stack using a singly linked list. It will use a similar approach to approach 1, but instead of using arrays, with array values to track current and minimum value at each level of the stack, we will use list nodes. The list nodes will have 3 attributes, a value, ",(0,s.jsx)(n.code,{children:"val"})," a minimum value, ",(0,s.jsx)(n.code,{children:"min_val"}),", and a pointer to the node next to it, ",(0,s.jsx)(n.code,{children:"next_node"}),". To make out linked list work more like a stack, we need to track the head of the linked list and only insert and pop on the head side of our linked list."]}),"\n",(0,s.jsxs)(n.p,{children:["We can take some liberties to simplify it, as the question states that all ",(0,s.jsx)(n.code,{children:"pop"}),", ",(0,s.jsx)(n.code,{children:"top"})," and ",(0,s.jsx)(n.code,{children:"getMin"})," calls will be done on non-empty stacks, we can ignore error checkings, and just return the value we need from the top of the stack, or pop in those cases."]}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mn,{children:"1"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord",children:"1"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," for each method implemented."]}),"\n",(0,s.jsxs)(n.p,{children:["Space Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," n is the number of items we put onto the stack."]}),"\n",(0,s.jsx)(l,{children:(0,s.jsxs)(i,{value:"py",label:"Python",children:[(0,s.jsx)(t,{name:"@ColeB2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class ListNode:\n    # Create our own singly linked list, using classes to create\n    # list nodes. They will have a value, val, a minimum value,\n    # min_val and a pointer to the next node, next_node/self.next.\n    # Note: we use next_node in init as next is a python keyword, and\n    # it is good practice to not overwrite python's keywords.\n    # A singly linked list works, by having node objects that contain data,\n    # and a pointer to point to the next node. The tail will point to None,\n    # signalling the end of the list. We will also need a variable of some\n    # kind to track the head of our linked list. Inside our MinStack,\n    # we will use self.head.\n    def __init__(self, val, min_val, next_node=None):\n        self.val = val\n        self.min_val = min_val\n        self.next = next_node\n\nclass MinStack:\n    # Whether you use a linked list like this solution or an array\n    # the trick for implementing a min stack is using the idea that\n    # we can use a little bit extra space to track the minimum value\n    # as we push each element onto the stack. That way we don't need\n    # to use O(n) time to search for the min, we can check it in \n    # constant time.\n    def __init__(self):\n        # No values, so we will initialize the head of our linked\n        # list as None to signal that.\n        self.head = None\n        \n\n    def push(self, val: int) -> None:\n        # Time: O(1)\n        # get the min value to add to our stack\n        min_val = min(val, self.head.min_val) if self.head else val\n        # create the node using val, min_val, and head as next_node.\n        node = ListNode(val, min_val, next_node=self.head)\n        # make sure to make the node we created the new head, to\n        # make it the 'top' node, of the stack, and 'push' the other\n        # nodes down below it.\n        self.head = node\n        \n    def pop(self) -> None:\n        # Time: O(1)\n        # only called on non-empty stacks, so we can just\n        # set the current head to head.next, as we know\n        # there will always be a current head node.\n        # Ex. headNode -> 2ndNode\n        #     move pointer---^\n        # we will have no way to go back and access headNode\n        # python will handle the removal of our head node, and\n        # our the new head of our stack will be the 2ndNode.\n        self.head = self.head.next\n\n    def top(self) -> int:\n        # Time: O(1)\n        # only called on non-empty stacks, we can just\n        # return head.val, since we know there will always\n        # be a head node with a value we can return.\n        return self.head.val\n        \n\n    def getMin(self) -> int:\n        # Time: O(1)\n        # only called on non-empty stacks, we can just\n        # return head.min_val, since we know there will\n        # always be a head node with a min_value we can return.\n        return self.head.min_val\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(67294);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);