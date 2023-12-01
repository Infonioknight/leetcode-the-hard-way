"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64969],{62158:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var n=a(85893),r=a(11151);const t={description:"Author: @ColeB2 | https://leetcode.com/problems/word-search/",tags:["Array","Backtracking","Matrix"]},i="0079 - Word Search (Medium)",l={id:"0000-0099/word-search-medium",title:"0079 - Word Search (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/word-search/",source:"@site/solutions/0000-0099/0079-word-search-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/word-search-medium",permalink:"/solutions/0000-0099/word-search-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0079-word-search-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:79,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/word-search/",tags:["Array","Backtracking","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0078 - Subsets (Medium)",permalink:"/solutions/0000-0099/subsets-medium"},next:{title:"0084 - Largest Rectangle in Histogram (Hard)",permalink:"/solutions/0000-0099/largest-rectangle-in-histogram-hard"}},c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:a,TabItem:t,Tabs:i}=s;return a||m("SolutionAuthor",!0),t||m("TabItem",!0),i||m("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"0079---word-search-medium",children:"0079 - Word Search (Medium)"}),"\n",(0,n.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://leetcode.com/problems/word-search/",children:"https://leetcode.com/problems/word-search/"})}),"\n",(0,n.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(s.p,{children:["Given an ",(0,n.jsx)(s.code,{children:"m x n"})," grid of characters ",(0,n.jsx)(s.code,{children:"board"})," and a string ",(0,n.jsx)(s.code,{children:"word"}),", return ",(0,n.jsx)(s.code,{children:"true"})," if ",(0,n.jsx)(s.code,{children:"word"})," ",(0,n.jsx)(s.em,{children:"exists in the grid"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2020/11/04/word2.jpg",alt:""})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"\nOutput: true\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg",alt:""})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"\nOutput: true\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2020/10/15/word3.jpg",alt:""})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"\nOutput: false\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"m == board.length"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"n = board[i].length"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"1 <= m, n <= 6"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"1 <= word.length <= 15"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"board"})," and ",(0,n.jsx)(s.code,{children:"word"})," consists of only lowercase and uppercase English letters."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Follow up"}),": Could you use search pruning to make your solution faster with a larger ",(0,n.jsx)(s.code,{children:"board"}),"?"]}),"\n",(0,n.jsx)(s.h2,{id:"approach-1-backtracking",children:"Approach 1: Backtracking"}),"\n",(0,n.jsx)(s.p,{children:"To solve this, we can very simply traverse the board, and when we find our starting letter, run our backtracking/DFS function at that letter, and if we find the word, return True."}),"\n",(0,n.jsx)(s.p,{children:"Inside our DFS, we would need to track some edge cases, if our position on the board is within bounds, if we have visited that position on the board before, and that the character we are looking at is the letter we need, and if everything checks out, we can check all 4 adjacent corners."}),"\n",(0,n.jsx)(s.p,{children:"Depending on how it is implemented though, the backtracking solution will be very slow, or even TLE. That is where the follow-up of search pruning comes into play."}),"\n",(0,n.jsx)(s.p,{children:"There are 3 things we can edge cases we can check to ensure our algorithm is efficient."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"First, we can check if the word is larger than the number of characters on the board. If so we have no reason to continue."}),"\n",(0,n.jsx)(s.li,{children:"Second, we can count both the characters on the board and in the word and compare the 2. If a character in the word isn't on the board, or there isn't enough of them on the board, we can terminate early again."}),"\n",(0,n.jsxs)(s.li,{children:["Finally, we can flip the word if there are fewer characters on the board of the word's last letter, than its first we can flip the word. For example: If we have the word ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"t"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"cat"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6151em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," and our board has a lot of ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"c"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"})]})})]})," characters, and only 1 ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"t"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"t"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6151em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," character, it makes more sense to search for the ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"t"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"t"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6151em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," character, as we will only have to run our DFS algorithm once, instead of several times for each ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"c"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"})]})})]})," we find."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Time Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mn,{children:"3"}),(0,n.jsx)(s.mi,{children:"L"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m*n*3^L)"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4653em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0913em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:"3"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"L"})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," Where m is the number of rows, n is the number of columns, and L is the length of the word. Note it is ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mn,{children:"3"}),(0,n.jsx)(s.mi,{children:"L"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"3^L"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8413em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:"3"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"L"})})]})})})})})]})]})})]})," instead of 4, as after the first DFS call, we only check 3 paths, as the 4th path would be a visited position that will terminate early."]}),"\n",(0,n.jsxs)(s.p,{children:["Space Complexity: ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"L"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(L)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," for our DFS call stack and our visited set, where L is the length of the word as the size of those will depend on the length of our word. The pruning also adds ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"O"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"L"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mo,{children:"\u2217"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(L + m*n)"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4653em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," to create Counters for the word, and the board."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(t,{value:"python",label:"Python",children:[(0,n.jsx)(a,{name:"@ColeB2"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        ROWS, COLS = len(board), len(board[0])\n        # 1st search pruning: word is larger than the board.\n        if len(word) > ROWS*COLS:\n            return False\n        # get counter of all characters on the board\n        board_chars = {}\n        for r in range(ROWS):\n            for c in range(COLS):\n                if board[r][c] not in board_chars:\n                    board_chars[board[r][c]] = 0\n                board_chars[board[r][c]] += 1\n        # counter of all characters in word\n        word_chars = Counter(word)\n        # 2nd search pruning: For each letter in our word, there\n        # isn't enough on the board to create the word.\n        for ch in word_chars:\n            if ch not in board_chars or board_chars[ch] < word_chars[ch]:\n                return False\n        # 3rd search pruning: If there are less characters on the\n        # board of the character than the first, flip the word.\n        if (word[0] in board_chars and word[-1] in board_chars\n            and board_chars[word[0]] > board_chars[word[-1]]\n            ):\n            word = word[::-1]\n        # DFS function\n        def dfs(row, col, idx, visited):\n            # Reached end of word, found the word statement\n            if idx == len(word):\n                return True\n            # False clauses, boundary check, already visited, wrong letter.\n            if (row < 0 or col < 0\n                or row == ROWS or col == COLS\n                or (row,col) in visited\n                or board[row][col] != word[idx]\n                ):\n                return False\n            # add the position to the visited set\n            visited.add((row,col))\n            # check all 4 positions\n            if (dfs(row + 1, col, idx + 1, visited) or\n                dfs(row - 1, col, idx + 1, visited) or\n                dfs(row, col + 1, idx + 1, visited) or\n                dfs(row, col - 1, idx + 1, visited)\n                ):\n                # if 1 is true, we found the word.\n                return True\n            # backtrack, remove the current position from set.\n            visited.remove((row,col))\n        # search the board looking for first character to start DFS.\n        for r in range(ROWS):\n            for c in range(COLS):\n                if board[r][c] == word[0]:\n                    if dfs(r,c, 0, set()):\n                        return True\n        # Reach the end, didn't find the word, return False.\n        return False\n        \n"})})]})})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>i});var n=a(67294);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);