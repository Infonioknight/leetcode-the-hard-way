"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[21007],{17166:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var n=a(85893),l=a(11151);const t={description:"Author: @ColeB2 | https://leetcode.com/problems/task-scheduler/",tags:["Array","Hash Table","Greedy","Sorting","Heap (Priority Queue)","Counting"]},i="0621 - Task Scheduler (Medium)",r={id:"0600-0699/task-scheduler-medium",title:"0621 - Task Scheduler (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/task-scheduler/",source:"@site/solutions/0600-0699/0621-task-scheduler-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/task-scheduler-medium",permalink:"/solutions/0600-0699/task-scheduler-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0621-task-scheduler-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"Greedy",permalink:"/solutions/tags/greedy"},{inline:!0,label:"Sorting",permalink:"/solutions/tags/sorting"},{inline:!0,label:"Heap (Priority Queue)",permalink:"/solutions/tags/heap-priority-queue"},{inline:!0,label:"Counting",permalink:"/solutions/tags/counting"}],version:"current",sidebarPosition:621,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/task-scheduler/",tags:["Array","Hash Table","Greedy","Sorting","Heap (Priority Queue)","Counting"]},sidebar:"tutorialSidebar",previous:{title:"0609 - Find Duplicate File in System (Medium)",permalink:"/solutions/0600-0699/find-duplicate-file-in-system-medium"},next:{title:"0622 - Design Circular Queue (Medium)",permalink:"/solutions/0600-0699/design-circular-queue-medium"}},m={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Heap and Queue",id:"approach-1-heap-and-queue",level:2},{value:"Approach 2: Greedy",id:"approach-2-greedy",level:2}];function c(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{SolutionAuthor:a,TabItem:t,Tabs:i}=s;return a||d("SolutionAuthor",!0),t||d("TabItem",!0),i||d("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"0621---task-scheduler-medium",children:"0621 - Task Scheduler (Medium)"}),"\n",(0,n.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://leetcode.com/problems/task-scheduler/",children:"https://leetcode.com/problems/task-scheduler/"})}),"\n",(0,n.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(s.p,{children:["Given a characters array ",(0,n.jsx)(s.code,{children:"tasks"}),", representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle."]}),"\n",(0,n.jsxs)(s.p,{children:["However, there is a non-negative integer ",(0,n.jsx)(s.code,{children:"n"})," that represents the cooldown period between two ",(0,n.jsx)(s.strong,{children:"same tasks"})," (the same letter in the array), that is that there must be at least ",(0,n.jsx)(s.code,{children:"n"})," units of time between any two same tasks."]}),"\n",(0,n.jsxs)(s.p,{children:["Return ",(0,n.jsx)(s.em,{children:"the least number of units of times that the CPU will take to finish all the given tasks"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'Input: tasks = ["A","A","A","B","B","B"], n = 2\nOutput: 8\nExplanation: \nA -> B -> idle -> A -> B -> idle -> A -> B\nThere is at least 2 units of time between any two same tasks.\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'Input: tasks = ["A","A","A","B","B","B"], n = 0\nOutput: 6\nExplanation: On this case any permutation of size 6 would work since n = 0.\n["A","A","A","B","B","B"]\n["A","B","A","B","A","B"]\n["B","B","B","A","A","A"]\n...\nAnd so on.\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2\nOutput: 16\nExplanation: \nOne possible solution is\nA -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"1 <= task.length <= 10^4"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"tasks[i]"})," is upper-case English letter."]}),"\n",(0,n.jsxs)(s.li,{children:["The integer ",(0,n.jsx)(s.code,{children:"n"})," is in the range ",(0,n.jsx)(s.code,{children:"[0, 100]"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"approach-1-heap-and-queue",children:"Approach 1: Heap and Queue"}),"\n",(0,n.jsx)(s.p,{children:"Reading the question we see we have 3 prime issues. Being able  totrack which task has the most times it needs to be completed, A way to track the time, and a way to track the cooldown of each task."}),"\n",(0,n.jsxs)(s.p,{children:["We can track the number of times a task needs to be completed in a heap. The heap can be created in ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mi,{children:"l"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"g"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(nlogn)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time, and will update itself when we push tasks back onto the heap in ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"l"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"g"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(logk)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time, where k is the size of the heap."]}),"\n",(0,n.jsxs)(s.p,{children:["We can use an integer to track the time and increment it during each step of a while loop. We can also use a queue to track the cooldown of each task as we know the first task completed, will be the first task off cooldown, and a queue gives us ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," access to appending and popping off the left side."]}),"\n",(0,n.jsxs)(s.p,{children:["Time Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsx)(s.mi,{children:"l"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"g"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mn,{children:"26"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m*log(26))"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord",children:"26"}),(0,n.jsx)(s.span,{className:"mclose",children:"))"})]})]})]})," Where m is length of tasks, and 26 is the max size of our priority queue, being all 26 Uppercase English letters."]}),"\n",(0,n.jsxs)(s.p,{children:["Space Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," to maintain our n sized heap, and up to n sized queue, where n is the length of tasks. Where n can reach up to 26."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(t,{value:"python",label:"Python",children:[(0,n.jsx)(a,{name:"@ColeB2"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        # Base cases, return early. No idle time\n        if n == 0:\n            return len(tasks)\n        # Get count, push onto heap array. Don't need to track letter\n        # just the actual number of tasks as values.\n        # -val as python utilizes a min heap.\n        # O(n) time to count tasks and put into our list.\n        count = Counter(tasks).values()\n        heap = [-val for val in count]\n        # Heapify our heap array.\n        # O(klogk) time k number of unique tasks.\n        heapq.heapify(heap)\n        # initilize our timer integer, and our cooldown queue.\n        time = 0\n        q = deque([])\n        # while we have values in our heap and queue, run the loop.\n        # O(klogk) N is number of tasks and logk time to push to heap.\n        while heap or q:\n            # increment time.\n            time += 1\n            # if our heap has values, run a task\n            if heap:\n                # pop our task value off heap and add 1.\n                val = 1 + heapq.heappop(heap)\n                # if our value is non 0 --\x3e add it to the cooldown queue.\n                if val:\n                    # q formatted as (time, value) where the time is\n                    # the time when the cooldown ends, and the value\n                    # is the number of tasks left for the letter.\n                    q.append((time + n, val))\n            # If our heap is empty, skip the cooldown. You can imagine\n            # if our cooldown it 10+ or so, we have no need to wait\n            # that out for several loops.\n            else:\n                time = q[0][0]\n\n            # Check our queue isn't empty and that the first task's\n            # cooldown is up.\n            if q and q[0][0] == time:\n                # cooldown is over, pop the time and value\n                t, val = q.popleft()\n                #  add the value back to the heap.\n                heapq.heappush(heap, val)\n        # loop finished -> return our time.\n        return time\n"})})]})}),"\n",(0,n.jsx)(s.h2,{id:"approach-2-greedy",children:"Approach 2: Greedy"}),"\n",(0,n.jsxs)(s.p,{children:["We know that the task we have to do the most will take the longest and assuming the length of the tasks list isn't larger than the time it takes to finish the mode(most frequent task) task that the answer will be some sort of multiple of ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"e"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"n * mode"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4653em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"})]})]})]})," where n is the idle time and mode is the most frequent task."]}),"\n",(0,n.jsxs)(s.p,{children:["In the 3rd example, given ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mn,{children:"6"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"6"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"6"})]})})]})," A's ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mn,{children:"1"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})})]})," of each B through G and an ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mn,{children:"2"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"n=2"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"2"})]})]})]}),", that we are going to have at least 6 chunks of 3, where we can perform task A, then we have to sit around until A can come up again. Inside these chunks we can perform the other tasks."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"A _ _ A _ _ A _ _ A _ _ A _ _ A _ _\nA B C|A D E|A F G|A _ _ A _ _ A\n"})}),"\n",(0,n.jsxs)(s.p,{children:["We also can see that if we run out of letters, the last chunk would not be a full chunk. So that means we will have at least ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"mode - 1"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," chunks of ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"n + 1"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," size. (We can see each chunk of ",(0,n.jsx)(s.code,{children:"A _ _"})," is ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"n + 1"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})]})]}),"). We can also see the last chunk will be the count of the mode. In example 3, we only have a 1 mode of 6, but you can see in example 1, we have 2 values that are the mode."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"A B _ | A B _ | A B |\n"})}),"\n",(0,n.jsx)(s.p,{children:"This leaves us with a formula:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"_"}),(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"u"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mi,{children:"t"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"(mode - 1) * (n + 1) + mode\\_count"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mord",style:{marginRight:"0.02778em"},children:"_"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"co"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})]})]})," where our ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"_"}),(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"u"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mi,{children:"t"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"mode\\_count"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mord",style:{marginRight:"0.02778em"},children:"_"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"co"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," is at least one."]}),"\n",(0,n.jsx)(s.p,{children:"Now obviously if we had more tasks to keep filling chunks beyond A, ie if A was 6, but we still had tasks B-Z instead, then our answer would be the length of tasks."}),"\n",(0,n.jsx)(s.p,{children:"So we can see all we have to do is count the tasks, find the mode, and find how often the mode occurs in our task list."}),"\n",(0,n.jsxs)(s.p,{children:["Time Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," where m is the number of tasks."]}),"\n",(0,n.jsxs)(s.p,{children:["Space Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(k)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," where k is the number of unique tasks to maintain a Counter/Hash map."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(t,{value:"python",label:"Python",children:[(0,n.jsx)(a,{name:"@ColeB2"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def leastInterval(self, tasks: List[str], n: int) -> int:\n        # Create our counter, and convert to a list.\n        # O(m) time to counter unique tasks then O(k) time to convert\n        # k unique values into a list.\n        counter = list(Counter(tasks).values())\n        # O(k) time to find the mode\n        mode = max(counter)\n        # O(k) time to count the occurences of the mode.\n        mode_count = counter.count(mode)\n        # find our answer using our formula\n        ans = (mode - 1) * (n + 1) + mode_count\n        # return larger of our answer, and length of the task list.\n        return max(len(tasks), ans)\n"})})]})})]})}function o(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>i});var n=a(67294);const l={},t=n.createContext(l);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);