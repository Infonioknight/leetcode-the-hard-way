"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[86717],{84154:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>h,toc:()=>o});var t=n(85893),a=n(11151);const i={description:"Author: @ColeB2, @wingkwong | https://leetcode.com/problems/last-stone-weight/",tags:["Array","Heap (Priority Queue)"]},r="1046 - Last Stone Weight (Easy)",h={id:"1000-1099/last-stone-weight-easy",title:"1046 - Last Stone Weight (Easy)",description:"Author: @ColeB2, @wingkwong | https://leetcode.com/problems/last-stone-weight/",source:"@site/solutions/1000-1099/1046-last-stone-weight-easy.md",sourceDirName:"1000-1099",slug:"/1000-1099/last-stone-weight-easy",permalink:"/solutions/1000-1099/last-stone-weight-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1046-last-stone-weight-easy.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Heap (Priority Queue)",permalink:"/solutions/tags/heap-priority-queue"}],version:"current",sidebarPosition:1046,frontMatter:{description:"Author: @ColeB2, @wingkwong | https://leetcode.com/problems/last-stone-weight/",tags:["Array","Heap (Priority Queue)"]},sidebar:"tutorialSidebar",previous:{title:"1043 - Partition Array for Maximum Sum (Medium)",permalink:"/solutions/1000-1099/partition-array-for-maximum-sum-medium"},next:{title:"1047 - Remove All Adjacent Duplicates In String (Easy)",permalink:"/solutions/1000-1099/remove-all-adjacent-duplicates-in-string-easy"}},l={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Heap / Priority Queue",id:"approach-1-heap--priority-queue",level:2}];function c(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:n,TabItem:i,Tabs:r}=s;return n||d("SolutionAuthor",!0),i||d("TabItem",!0),r||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"1046---last-stone-weight-easy",children:"1046 - Last Stone Weight (Easy)"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/last-stone-weight/",children:"https://leetcode.com/problems/last-stone-weight/"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(s.p,{children:["You are given an array of integers ",(0,t.jsx)(s.code,{children:"stones"})," where ",(0,t.jsx)(s.code,{children:"stones[i]"})," is the weight of the ",(0,t.jsx)(s.code,{children:"ith"})," stone."]}),"\n",(0,t.jsxs)(s.p,{children:["We are playing a game with the stones. On each turn, we choose the ",(0,t.jsx)(s.strong,{children:"heaviest two stones"})," and smash them together. Suppose the heaviest two stones have weights ",(0,t.jsx)(s.code,{children:"x"})," and ",(0,t.jsx)(s.code,{children:"y"})," with ",(0,t.jsx)(s.code,{children:"x <= y"}),". The result of this smash is:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If ",(0,t.jsx)(s.code,{children:"x == y"}),", both stones are destroyed, and"]}),"\n",(0,t.jsxs)(s.li,{children:["If ",(0,t.jsx)(s.code,{children:"x != y"}),", the stone of weight ",(0,t.jsx)(s.code,{children:"x"})," is destroyed, and the stone of weight ",(0,t.jsx)(s.code,{children:"y"})," has new weight ",(0,t.jsx)(s.code,{children:"y - x"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["At the end of the game, there is ",(0,t.jsx)(s.strong,{children:"at most one"})," stone left."]}),"\n",(0,t.jsxs)(s.p,{children:["Return ",(0,t.jsx)(s.em,{children:"the weight of the last remaining stone"}),". If there are no stones left, return ",(0,t.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: stones = [2,7,4,1,8,1]\nOutput: 1\nExplanation: \nWe combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,\nwe combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,\nwe combine 2 and 1 to get 1 so the array converts to [1,1,1] then,\nwe combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: stones = [1]\nOutput: 1\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= stones.length <= 30"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= stones[i] <= 1000"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"approach-1-heap--priority-queue",children:"Approach 1: Heap / Priority Queue"}),"\n",(0,t.jsx)(s.p,{children:"We can see that after two stones break we need to replace them back in the array. Where depends on how much they broke down, and it isn't always guaranteed to be the end. This points toward a data structure that allows us to restructure efficiently, and that would be a Max Heap."}),"\n",(0,t.jsx)(s.p,{children:"A max heap is a tree structure that keeps the largest value on top, and for each child the same holds true. When we pop from a heap, the heap will restructure itself to maintain the same dynamics. So 2 pops from a max heap will result in us receiving the 2 largest stones. Pushing back on the heap will place the stones in their correct spot."}),"\n",(0,t.jsx)(s.p,{children:"Note: A lot of built-in heaps are min heap implementations, to utilize them, we must push the negative weights of the stones on the heap to maintain a max heap structure."}),"\n",(0,t.jsxs)(s.p,{children:["Time Complexity: ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"g"}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(nlogn)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Where ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"n"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the size of the heap/stones array. It will take ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{children:"\u2217"}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"g"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n*log(n)"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4653em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," time to create the initial heap, then up to ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"g"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"log(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time to place the broken-down stones back into the heap."]}),"\n",(0,t.jsxs)(s.p,{children:["Space Complexity: ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Where ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"n"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the size of the stones array, to maintain our heap data structure with up to ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"n"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," stones inside."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(i,{value:"python",label:"Python",children:[(0,t.jsx)(n,{name:"@ColeB2"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def lastStoneWeight(self, stones: List[int]) -> int:\n        # initialize an empty array to hold our heap, python uses\n        # arrays, and the heapq module to handle min Heaps. We will\n        # use negative values of the stones to convert to a max heap.\n        heap = []\n        # loop through each stone in our stones array\n        for stone in stones:\n            # push the negative value of the stone onto the heap.\n            # heappush takes the heap array, and the value to push\n            # onto the heap. -stone will allow the min heap to act\n            # as a max heap instead.\n            heapq.heappush(heap, -stone)\n        # We need at least 2 stones to smash together, so we loop while\n        # our heap has at least 2 stones inside.\n        while len(heap) >= 2:\n            # pop both stones off, the 1st is the largest stone.\n            stone1 = heapq.heappop(heap)\n            stone2 = heapq.heappop(heap)\n            # if the second stone is bigger, since we are using negative\n            # values, the second being bigger, means they are not\n            # the same size, and the first is larger. This means\n            # the stone won't be completely destroyed, so we need\n            # co calculate the difference to add onto the heap.\n            if stone2 > stone1:\n                # Add onto the heap the difference of stones 1 and 2.\n                heapq.heappush(heap, stone1 - stone2)\n        # remembering that we used negative values of the stones, we \n        # must return the absolute value of the remaining stone if it\n        # exists, else 0 as the question asks.\n        return abs(heap[0]) if heap else 0\n"})})]}),(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(n,{name:"@wingkwong"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int lastStoneWeight(vector<int>& stones) {\n        // initialize a priority_queue in c++\n        priority_queue<int> pq;\n        // push the positive value of the stone onto the priority_queue\n        for (int x : stones) pq.push(x); \n        // We need at least 2 stones to smash together, so we loop while\n        // our heap has at least 2 stones inside.\n        while (pq.size() >= 2) {\n            // pop both stones off, the 1st is the largest stone.\n            int y = pq.top(); pq.pop();\n            int x = pq.top(); pq.pop();\n            // if the stones are not same, then the stone of weight x is detroyed\n            // and the stone of weight y has new weight y - x.\n            if (x != y) pq.push(y - x);\n        }\n        // if there are no stones left, return 0\n        if (pq.size() == 0) return 0;\n        // return the weight of the last remaining stone\n        return pq.top();\n    }\n};\n"})})]})]})]})}function m(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>r});var t=n(67294);const a={},i=t.createContext(a);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);