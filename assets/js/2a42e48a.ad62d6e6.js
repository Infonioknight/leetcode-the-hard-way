"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[99366],{36633:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=n(85893),r=n(11151);const t={description:"Author: @ColeB2 | https://leetcode.com/problems/word-search-ii/",tags:["Array","String","Backtracking","Trie","Matrix"]},i="0212 - Word Search II (Hard)",o={id:"0200-0299/word-search-ii-hard",title:"0212 - Word Search II (Hard)",description:"Author: @ColeB2 | https://leetcode.com/problems/word-search-ii/",source:"@site/solutions/0200-0299/0212-word-search-ii-hard.md",sourceDirName:"0200-0299",slug:"/0200-0299/word-search-ii-hard",permalink:"/solutions/0200-0299/word-search-ii-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0212-word-search-ii-hard.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Backtracking",permalink:"/solutions/tags/backtracking"},{inline:!0,label:"Trie",permalink:"/solutions/tags/trie"},{inline:!0,label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:212,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/word-search-ii/",tags:["Array","String","Backtracking","Trie","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0211 - Design Add and Search Words Data Structure (Medium)",permalink:"/solutions/0200-0299/design-add-and-search-words-data-structure-medium"},next:{title:"0213 - House Robber II (Medium)",permalink:"/solutions/0200-0299/house-robber-ii-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterative DFS using a Trie",id:"approach-1-iterative-dfs-using-a-trie",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:n,TabItem:t,Tabs:i}=s;return n||m("SolutionAuthor",!0),t||m("TabItem",!0),i||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"0212---word-search-ii-hard",children:"0212 - Word Search II (Hard)"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/word-search-ii/",children:"https://leetcode.com/problems/word-search-ii/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(s.p,{children:["Given an ",(0,a.jsx)(s.code,{children:"m x n"})," ",(0,a.jsx)(s.code,{children:"board"})," of characters and a list of strings ",(0,a.jsx)(s.code,{children:"words"}),", return ",(0,a.jsx)(s.em,{children:"all words on the board"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Each word must be constructed from letters of sequentially adjacent cells, where ",(0,a.jsx)(s.strong,{children:"adjacent cells"})," are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2020/11/07/search1.jpg",alt:""})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]\nOutput: ["eat","oath"]\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input: board = [["a","b"],["c","d"]], words = ["abcb"]\nOutput: []\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"m == board.length"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"n == board[i].length"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= m, n <= 12"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"board[i][j]"})," is a lowercase English letter."]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= words.length <= 3 * 10^4"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= words[i].length <= 10"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"words[i]"})," consists of lowercase English letters."]}),"\n",(0,a.jsxs)(s.li,{children:["All the strings of ",(0,a.jsx)(s.code,{children:"words"})," are unique."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-iterative-dfs-using-a-trie",children:"Approach 1: Iterative DFS using a Trie"}),"\n",(0,a.jsx)(s.p,{children:"If you solved Word Search I, you know we can run a DFS on each cell of the matrix, checking that the cell location is inbounds, the cell letter matches the letter in the word we are looking at, and that we haven't already visited the cell in the current DFS."}),"\n",(0,a.jsxs)(s.p,{children:["Repeating the above, but for each word, would be way too costly though, so we can use a Trie instead of a list of words. A Trie would give us access to the first letter of all the words so for each cell in the matrix we can check if it is worthwhile to run DFS in ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time. Then if the letter is in our Trie, we can run our DFS. Still costly, but using a trie prevents us from having to run our algorithm for each word."]}),"\n",(0,a.jsx)(s.p,{children:"This also will be costly, as you can imagine if we find our word, every time we run across the first letter of that word, we are going to run our DFS again even if we don't need to. So we can add a counter of characters to our Trie, and a remove word method, so that we can decrement the number of times a character appears in our Trie, and then during the check to see if we should run DFS, check that our counter hasn't reached 0."}),"\n",(0,a.jsxs)(s.p,{children:["Note we use a counter instead of removing the letters, as if we had to words, ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"t"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"bat"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ba"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"l"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"ball"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ba"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"})]})})]}),", removing one of them, would remove the b, and therefore the whole word from our trie."]}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mo,{children:"\u2217"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2217"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mn,{children:"4"}),(0,a.jsx)(s.mi,{children:"L"})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m*n*4^L"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4653em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4653em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8413em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord",children:"4"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8413em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"L"})})]})})})})})]})]})]})]}),". Where ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"m"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"})]})})]})," is the number of rows, ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"n"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of columns, and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"L"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"L"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"L"})]})})]})," is the max length of the longest word. We have to loop through each cell in the matrix (",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"n"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"mn"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"mn"})]})})]}),"), and then when we match the first letter of one of our words, we have to run our DFS, which can take 4 directions at each turn, and can run as long as the longest word in our Trie."]}),"\n",(0,a.jsxs)(s.p,{children:["Space Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"N"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"L"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"N+mn+L"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"mn"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"L"})]})]})]}),". Where ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"N"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," is the size of our Trie, ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"n"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"mn"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"mn"})]})})]})," is length of our stack to hold each cell since we are doing it iteratively, our stack will contain each node in it at the start, and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"L"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"L"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"L"})]})})]})," is the length of our current DFS route, which can run as long as the longest word in our Trie."]}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(t,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class TrieNode:\n    # Create our trie,\n    # nodes to track the next level of nodes in our trie\n    # is_word denotes whether the at the current node, we created a word\n    # num is the counter for number of time the current node has been\n    # use in our trie. Ex: bat, ball -> b node will have num count of 2.\n    def __init__(self):\n        self.nodes = {}\n        self.is_word = False\n        self.num = 0\n\n    def addWord(self, word):\n        # Time: O(L) L is length of word.\n        # current node, starts as self.\n        node = self\n        # increase the count of the node.\n        node.num += 1\n        # loop throuhg characters in word\n        for ch in word:\n            if ch not in node.nodes:\n                # create the node and set key to be character.\n                node.nodes[ch] = TrieNode()\n            # move our current node pointer\n            node = node.nodes[ch]\n            # increment the counter on the node we moved to.\n            node.num += 1\n        # reached end, update is_word boolean.\n        node.is_word = True\n\n    def removeWord(self, word):\n        # Time: O(l) L is the length of the word\n        # remove word, decrements the node counters.\n        # don't remove nodes, as nodes may be shared by multiple words\n        # We could remove nodes if the .num counter every reached 0.\n        # current node pointer, starts as self.\n        # Both options could remove the mn from our space complexity.\n        node = self\n        # decrement count of the node\n        node.num -= 1\n        # loop through all the letters in word we are removing\n        for ch in word:\n            # make sure it is in our Trie\n            if ch in node.nodes:\n                # update our node to the node of character we\n                # are looking at\n                node = node.nodes[ch]\n                # decrement the nodes count.\n                node.num -= 1\n\nclass Solution:\n    # Some Potential Improvements\n    # Recursive DFS --\x3e Call stack wouldn't initialize with all\n    # values of our matrix inside our stack to start.\n    # Iterative DFS with DFS function: We wouldn't have to initialize\n    # a stack with all cells of the matrix, we could just call the\n    # DFS and save a bit of space.\n    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:\n        # track our Trie root.\n        root = TrieNode()\n        # loop through all our words\n        for word in words:\n            # add the words to our Trie\n            root.addWord(word)\n        # get length of our rows and columns\n        ROWS, COLS = len(board), len(board[0])\n        # create a list of words. Note since we are removing words\n        # from our Trie, we don't need a set to prevent repeats.\n        words_made = []\n        # stack to perform iterative DFS\n        stack = []\n        # loop through the matrix, O(mn) to loop through each cell.\n        for r in range(ROWS):\n            for c in range(COLS):\n                # add the cells to the stack\n                # r,c to denote position in matrix\n                # pass root as our current node position in Trie\n                # \"\" empty string value to track word we at creating\n                # empty set to denote if we have visited the cell or not.\n                stack.append((r,c,root,\"\", set()))\n        # while our stack has values\n        while stack:\n            # pop row, col position\n            # node to denote current node\n            # word we are creating\n            # set to track if we have visited a node before\n            row, col, node, word, visit = stack.pop()\n            # Check if we are out of  bounds\n            # board[row][col] -> ch is NOT in our Trie\n            # Count of that Character is < 1 -> Word removed previously\n            if (row < 0 or col < 0\n                or row == ROWS or col == COLS\n                or board[row][col] not in node.nodes\n                or node.nodes[board[row][col]].num < 1\n                or (row,col) in visit):\n                # if any of above is True, no need to run DFS, continue\n                continue\n            # Passed above condition, we can run DFS on node.\n            # add to our set that we visited the cell\n            visit.add((row,col))\n            # move our current node to proper node in True.\n            node = node.nodes[board[row][col]]\n            # add the character of cell to the word.\n            word += board[row][col]\n            # If current node is_word, we found a word!\n            if node.is_word:\n                # Remove word from Trie\n                node.is_word = False\n                root.removeWord(word)\n                # add word to our return list\n                words_made.append(word)\n                \n            # Check 4 adjacent directions to add those cells to our\n            # stack for iterative DFS.\n            for x,y in ((1,0), (0,1), (-1,0), (0,-1)):\n                # Note we need a copy of visit for iterative DFS\n                # as if we just passed visit, it would be a reference\n                # and would be updated by all 4 directions during the\n                # DFS, so each direction needs it's own copy.\n                stack.append((row + x, col + y, node, word, visit.copy()))\n        # return list of words we found during our search\n        return words_made\n"})})]})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var a=n(67294);const r={},t=a.createContext(r);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);