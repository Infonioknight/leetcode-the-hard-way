"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[13891],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=o(t),N=r,h=c["".concat(l,".").concat(N)]||c[N]||k[N]||m;return t?n.createElement(h,s(s({ref:a},i),{},{components:t})):n.createElement(h,s({ref:a},i))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:r,s[1]=p;for(var o=2;o<m;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},56519:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const m={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-list/"},s="0061 - Rotate List (Medium)",p={unversionedId:"0000-0099/rotate-list-medium",id:"0000-0099/rotate-list-medium",title:"0061 - Rotate List (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-list/",source:"@site/solutions/0000-0099/0061-rotate-list-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/rotate-list-medium",permalink:"/solutions/0000-0099/rotate-list-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0061-rotate-list-medium.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-list/"},sidebar:"tutorialSidebar",previous:{title:"0058 - Length of Last Word",permalink:"/solutions/0000-0099/length-of-last-word-easy"},next:{title:"0062 - Unique Paths (Medium)",permalink:"/solutions/0000-0099/unique-paths-medium"}},l={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Connect and Cut",id:"approach-1-connect-and-cut",level:2}],i=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=i("Tabs"),k=i("TabItem"),N=i("SolutionAuthor"),h={toc:o},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0061---rotate-list-medium"},"0061 - Rotate List (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rotate-list/"},"https://leetcode.com/problems/rotate-list/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," of a linked list, rotate the list to the right by ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," places."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: head = [1,2,3,4,5], k = 2\nOutput: [4,5,1,2,3]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: head = [0,1,2], k = 4\nOutput: [2,0,1]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of nodes in the list is in the range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 500]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= k <= 2 * 10^9"))),(0,r.kt)("h2",{id:"approach-1-connect-and-cut"},"Approach 1: Connect and Cut"),(0,r.kt)("p",null,"First we iterate each node till the end and connect the tail to the head. At the same time we calculate how many nodes there, says ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". After that, we find a point to cut the list. The point to cut is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mspace",{parentName:"mrow"}),(0,r.kt)("mspace",{parentName:"mrow",width:"0.6667em"}),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"d")),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n - k \\mod n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mspace allowbreak"}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.6667em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathrm"},"mod"))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". As ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," can be greater or equal to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),", so the new head will be located at ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mspace",{parentName:"mrow"}),(0,r.kt)("mspace",{parentName:"mrow",width:"0.6667em"}),(0,r.kt)("mrow",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"m"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"o"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"d")),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n - k \\mod n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mspace allowbreak"}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.6667em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathrm"},"mod"))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),". Then we link the new tail->next to null and return the new head."),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(k,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    ListNode* rotateRight(ListNode* head, int k) {\n        if (!head) return NULL;\n        ListNode *p = head;\n        int n = 1;\n        while (p->next) {\n            p = p->next;\n            n++;\n        }\n        // connect tail to head - like a ring\n        p->next = head;\n        // find the location to cut\n        k = len - k % len;\n        // move to that location\n        while (k--) p = p->next;\n        // p->next is the new head\n        head = p->next;\n        // make it as the new tail\n        p->next = NULL;\n        // return the new head\n        return head;\n    }\n};\n"))),(0,r.kt)(k,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(N,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        curr = head\n        n = 1\n        if not head: return None\n        while curr.next:\n            curr = curr.next\n            n += 1\n        curr.next = head\n        k = n - k % n\n        while k:\n            curr = curr.next\n            k -= 1\n        head = curr.next\n        curr.next = None\n        return head\n"))),(0,r.kt)(k,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(N,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar rotateRight = function(head, k) {\n    let curr = head;\n    let n = 1;\n    if (!head) return null;\n    while (curr.next) {\n        curr = curr.next;\n        n++;\n    }\n    curr.next = head;\n    k = n - k % n;\n    while (k) {\n        curr = curr.next;\n        k--;\n    }\n    head = curr.next;\n    curr.next = null;\n    return head;\n}\n")))))}u.isMDXComponent=!0}}]);