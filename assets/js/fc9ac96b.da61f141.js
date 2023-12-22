"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[82989],{81304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(85893),o=s(11151);const a={description:"Author: @ColeB2 | https://leetcode.com/problems/copy-list-with-random-pointer/",tags:["Hash Table","Linked List"]},i="0138 - Copy List with Random Pointer (Medium)",l={id:"0100-0199/copy-list-with-random-pointer-medium",title:"0138 - Copy List with Random Pointer (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/copy-list-with-random-pointer/",source:"@site/solutions/0100-0199/0138-copy-list-with-random-pointer-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/copy-list-with-random-pointer-medium",permalink:"/solutions/0100-0199/copy-list-with-random-pointer-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0138-copy-list-with-random-pointer-medium.md",tags:[{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Linked List",permalink:"/solutions/tags/linked-list"}],version:"current",sidebarPosition:138,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/copy-list-with-random-pointer/",tags:["Hash Table","Linked List"]},sidebar:"tutorialSidebar",previous:{title:"0136 - Single Number (Easy)",permalink:"/solutions/0100-0199/single-number-easy"},next:{title:"0139 - Word Break (Medium)",permalink:"/solutions/0100-0199/word-break-medium"}},r={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: 2 Passes",id:"approach-1-2-passes",level:2},{value:"Approach 2: Single Pass",id:"approach-2-single-pass",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:i}=n;return s||m("SolutionAuthor",!0),a||m("TabItem",!0),i||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0138---copy-list-with-random-pointer-medium",children:"0138 - Copy List with Random Pointer (Medium)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/copy-list-with-random-pointer/",children:"https://leetcode.com/problems/copy-list-with-random-pointer/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["A linked list of length ",(0,t.jsx)(n.code,{children:"n"})," is given such that each node contains an additional random pointer, which could point to any node in the list, or ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Construct a deep copy of the list. The ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Object_copying#Deep_copy",children:"deep copy"})," should consist of exactly ",(0,t.jsx)(n.code,{children:"n"})," ",(0,t.jsx)(n.strong,{children:"brand new"})," nodes, where each new node has its value set to the value of its corresponding original node. Both the ",(0,t.jsx)(n.code,{children:"next"})," and ",(0,t.jsx)(n.code,{children:"random"})," pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. ",(0,t.jsx)(n.strong,{children:"None of the pointers in the new list should point to nodes in the original list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if there are two nodes ",(0,t.jsx)(n.code,{children:"X"})," and ",(0,t.jsx)(n.code,{children:"Y"})," in the original list, where ",(0,t.jsx)(n.code,{children:"X.random --\x3e Y"}),", then for the corresponding two nodes x and y in the copied list, ",(0,t.jsx)(n.code,{children:"x.random --\x3e y"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.em,{children:"the head of the copied linked list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The linked list is represented in the input/output as a list of ",(0,t.jsx)(n.code,{children:"n"})," nodes. Each node is represented as a pair of ",(0,t.jsx)(n.code,{children:"[val, random_index]"})," where:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"val"}),": an integer representing Node.val"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"random_index"}),": the index of the node (range from ",(0,t.jsx)(n.code,{children:"0"})," to ",(0,t.jsx)(n.code,{children:"n-1"}),") that the ",(0,t.jsx)(n.code,{children:"random"})," pointer points to, or ",(0,t.jsx)(n.code,{children:"null"})," if it does not point to any node."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Your code will ",(0,t.jsx)(n.strong,{children:"only"})," be given the ",(0,t.jsx)(n.code,{children:"head"})," of the original linked list."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2019/12/18/e1.png",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2019/12/18/e2.png",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: head = [[1,1],[2,1]]\nOutput: [[1,1],[2,1]]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2019/12/18/e3.png",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: head = [[3,null],[3,0],[3,null]]\nOutput: [[3,null],[3,0],[3,null]]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= n <= 1000"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-10^4 <= Node.val <= 10^4"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Node.random"})," is ",(0,t.jsx)(n.code,{children:"null"})," or is pointing to some node in the linked list."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-2-passes",children:"Approach 1: 2 Passes"}),"\n",(0,t.jsx)(n.p,{children:"We can break this problem down into 2 easy steps."}),"\n",(0,t.jsxs)(n.p,{children:["Step 1 is to loop through the linked list and make a copy of each node, we will place the nodes into a hash map with the original node as the key and the created node as the value. We do this for ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," access later."]}),"\n",(0,t.jsx)(n.p,{children:"Step 2 is to loop through the linked list a second time, this time knowing that all the nodes have been created, we can access the nodes inside our hash map, and then set our pointers."}),"\n",(0,t.jsxs)(n.p,{children:["Time Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," we are going to do 2 passes through our linked list of size n."]}),"\n",(0,t.jsxs)(n.p,{children:["Space Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," we need to create a hash map of size n, to map each node to."]}),"\n",(0,t.jsx)(i,{children:(0,t.jsxs)(a,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@ColeB2"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'"""\n# Definition for a Node.\nclass Node:\n    def __init__(self, x: int, next: \'Node\' = None, random: \'Node\' = None):\n        self.val = int(x)\n        self.next = next\n        self.random = random\n"""\nclass Solution:\n    def copyRandomList(self, head: "Node") -> "Node":\n        # Base case, return early\n        if not head:\n            return head\n        # Hash map, default with None for when we reach a null node.\n        # {key:value} --\x3e {original_node: copy_node}\n        original_to_copy = {None: None}\n        # node variable to loop through each node in the linked list\n        node = head\n        # while our node exists, ie. we haven\'t reached the end.\n        while node:\n            # create a copy node, using the original linked lists value\n            copy = Node(node.val)\n            # put the copied node into our hash map\n            original_to_copy[node] = copy\n            # move forward in our linked list\n            node = node.next\n        # node variable to loop through each node in the linked list\n        node = head\n        # while our node exists, ie. we haven\'t reached the end.\n        while node:\n            # get the copy, next and random nodes we created in the above loop.\n            copy = original_to_copy[node]\n            nxt = original_to_copy[node.next]\n            random = original_to_copy[node.random]\n            # set the next, and random for our copied node to proper nodes.\n            copy.next, copy.random = nxt, random\n            # more vorward in our linked list\n            node = node.next\n        # return head of our linked list. Since it exists in hash map, we can\n        # retrieve it using the original head as the key.\n        return original_to_copy[head]\n'})})]})}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-single-pass",children:"Approach 2: Single Pass"}),"\n",(0,t.jsxs)(n.p,{children:["Now a slightly trickier approach, is it possible to do the above in a single pass? Of course. To do that though, we are going to have to be careful to make sure we are reusing any node that has already been created, and creating nodes that don't exist. That can simply be done though by using a hash map again for ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," access to see if the node exists, and then creating the node if it doesn't exist."]}),"\n",(0,t.jsx)(n.p,{children:"We can do all this, by making sure at each iteration of our loop through the list that all nodes exists and then setting the pointers."}),"\n",(0,t.jsx)(n.p,{children:"To do that, we check if the node as been created before, if not create it and put it in the hash map, with the key as the original node, and the value as the created node. Note that we are looping only through valid nodes, so while for our current node we don't need to check if it is a null node, we will have to handle null node cases for our next and random nodes."}),"\n",(0,t.jsxs)(n.p,{children:["Time Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," we are going to do a single pass through all nodes in the linked list."]}),"\n",(0,t.jsxs)(n.p,{children:["Space Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," we need to create a hash map of size n, to map each node to."]}),"\n",(0,t.jsx)(i,{children:(0,t.jsxs)(a,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@ColeB2"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"\"\"\"\n# Definition for a Node.\nclass Node:\n    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):\n        self.val = int(x)\n        self.next = next\n        self.random = random\n\"\"\"\n\nclass Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        # Base case, given empty head\n        if not head:\n            return head\n        # Create our hash map for O(1) access\n        # {key:value} --\x3e {original_node: copy_node}\n        original_to_copy = {}\n        # Set a node variable to loop through all the nodes in linked list.\n        node = head\n        while node:\n            #Get/Create current node.\n            if node in original_to_copy:\n                # Node exists, get the node\n                n = original_to_copy[node]\n            else:\n                # node doesn't exist, create it, add to the hash map.\n                n = Node(node.val)\n                original_to_copy[node] = n\n            #Get/Create node.next. Default it to None to handle the case in which\n            # the node actually is a null node.\n            nxt = None\n            if node.next in original_to_copy:\n                # Next copy exists, get the node\n                nxt = original_to_copy[node.next]\n            elif node.next:\n                # next copy doesn't exist, create it and add it to the hash map.\n                nxt = Node(node.next.val)\n                original_to_copy[node.next] = nxt\n            #Get/Create node.random. Default it to None to handle the case in which\n            # the node actually is a null node.\n            rand = None\n            if node.random in original_to_copy:\n                # random copy exists, get the node.\n                rand = original_to_copy[node.random]\n            elif node.random:\n                # random copy doesn't exist, create it and add it to the hash map.\n                rand = Node(node.random.val)\n                original_to_copy[node.random] = rand\n            # Got/Created all our nodes, now set the pointers\n            n.next = nxt\n            n.random = rand\n            # move our pointer up.\n            node = node.next\n        # return head of our linked list. Since it exists in the hash map, we can\n        # retrieve it using the original head as the key.\n        return original_to_copy[head]\n"})})]})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(67294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);