"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6514],{64357:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var a=n(85893),r=n(11151);const t={description:"Author: @ColeB2 | https://leetcode.com/problems/design-add-and-search-words-data-structure/",tags:["String","Depth-First Search","Design","Trie"]},i="0211 - Design Add and Search Words Data Structure (Medium)",l={id:"0200-0299/design-add-and-search-words-data-structure-medium",title:"0211 - Design Add and Search Words Data Structure (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/design-add-and-search-words-data-structure/",source:"@site/solutions/0200-0299/0211-design-add-and-search-words-data-structure-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/design-add-and-search-words-data-structure-medium",permalink:"/solutions/0200-0299/design-add-and-search-words-data-structure-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0211-design-add-and-search-words-data-structure-medium.md",tags:[{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Design",permalink:"/solutions/tags/design"},{inline:!0,label:"Trie",permalink:"/solutions/tags/trie"}],version:"current",sidebarPosition:211,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/design-add-and-search-words-data-structure/",tags:["String","Depth-First Search","Design","Trie"]},sidebar:"tutorialSidebar",previous:{title:"0210 - Course Schedule II (Medium)",permalink:"/solutions/0200-0299/course-schedule-ii-medium"},next:{title:"0212 - Word Search II (Hard)",permalink:"/solutions/0200-0299/word-search-ii-hard"}},d={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Trie - Depth-First Search",id:"approach-1-trie---depth-first-search",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:n,TabItem:t,Tabs:i}=s;return n||m("SolutionAuthor",!0),t||m("TabItem",!0),i||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"0211---design-add-and-search-words-data-structure-medium",children:"0211 - Design Add and Search Words Data Structure (Medium)"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/design-add-and-search-words-data-structure/",children:"https://leetcode.com/problems/design-add-and-search-words-data-structure/"})}),"\n",(0,a.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsx)(s.p,{children:"Design a data structure that supports adding new words and finding if a string matches any previously added string."}),"\n",(0,a.jsxs)(s.p,{children:["Implement the ",(0,a.jsx)(s.code,{children:"WordDictionary"})," class:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"WordDictionary()"})," Initializes the object."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"void addWord(word)"})," Adds ",(0,a.jsx)(s.code,{children:"word"})," to the data structure, it can be matched later."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"bool search(word)"})," Returns ",(0,a.jsx)(s.code,{children:"true"})," if there is any string in the data structure that matches ",(0,a.jsx)(s.code,{children:"word"})," or ",(0,a.jsx)(s.code,{children:"false"})," otherwise. ",(0,a.jsx)(s.code,{children:"word"})," may contain dots ",(0,a.jsx)(s.code,{children:"'.'"})," where dots can be matched with any letter."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'Input\n["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]\nOutput\n[null,null,null,null,false,true,true,true]\n\nExplanation\nWordDictionary wordDictionary = new WordDictionary();\nwordDictionary.addWord("bad");\nwordDictionary.addWord("dad");\nwordDictionary.addWord("mad");\nwordDictionary.search("pad"); // return False\nwordDictionary.search("bad"); // return True\nwordDictionary.search(".ad"); // return True\nwordDictionary.search("b.."); // return True\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"1 <= word.length <= 25"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"word"})," in ",(0,a.jsx)(s.code,{children:"addWord"})," consists of lowercase English letters."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"word"})," in ",(0,a.jsx)(s.code,{children:"search"})," consist of ",(0,a.jsx)(s.code,{children:"'.'"})," or lowercase English letters."]}),"\n",(0,a.jsxs)(s.li,{children:["There will be at most ",(0,a.jsx)(s.code,{children:"3"})," dots in ",(0,a.jsx)(s.code,{children:"word"})," for ",(0,a.jsx)(s.code,{children:"search"})," queries."]}),"\n",(0,a.jsxs)(s.li,{children:["At most ",(0,a.jsx)(s.code,{children:"10^4"})," calls will be made to ",(0,a.jsx)(s.code,{children:"addWord"})," and ",(0,a.jsx)(s.code,{children:"search"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"approach-1-trie---depth-first-search",children:"Approach 1: Trie - Depth-First Search"}),"\n",(0,a.jsxs)(s.p,{children:["If you haven't heard of a ",(0,a.jsx)(s.a,{href:"https://leetcodethehardway.com/solutions/0200-0299/implement-trie-medium",children:"trie"}),", then this question will be extremely hard. But basically, a trie is a linked tree structure, which will have some way to denote which character you are currently looking at, and for each character in the trie, it will link to the next characters if they exist. So you can imagine a tree, but instead of numbers, we use letters, and each path from the root to the leaf will form a word."]}),"\n",(0,a.jsxs)(s.p,{children:["The only adjustment we have to make is to the search method. Since we are introducing a wild card character, ",(0,a.jsx)(s.code,{children:"'.'"}),", it means instead of just following a singular path down the tree, at that level we will have to search every path, as the answer can be down any one of the paths."]}),"\n",(0,a.jsx)(s.p,{children:"This is where we can use depth-first search, meaning we will follow from the leaf, all the way down to the node, and if we found our word, we can return, otherwise, we must backtrack, using our stack/call stack, and continue on from the next character in the level."}),"\n",(0,a.jsxs)(s.p,{children:["Time Complexity: ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mo,{children:"\u2217"}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mn,{children:"6"}),(0,a.jsx)(s.mi,{children:"n"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(w * 26^n)"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord",children:"6"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"w"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"w"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"})]})})]})," is the length of the ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"d"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"word"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"})]})})]})," we are searching for, ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"26"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"26"})]})})]})," is the max number of characters for each level as we are using only lowercase English characters, and ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"n"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," being the number of dots in the ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"d"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"word"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"})]})})]}),"."]}),"\n",(0,a.jsx)(s.p,{children:"You can imagine, if we have a full trie, with all levels having all 26 characters, and we search for a word of all dots, that in the worst case, we to process through each node in the trie, and each node can have 26 other nodes to follow."}),"\n",(0,a.jsxs)(s.p,{children:["Space Complexity ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mn,{children:"2"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mn,{children:"6"}),(0,a.jsx)(s.mi,{children:"n"})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(26^n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord",children:"2"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord",children:"6"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.6644em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})," where ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mi,{children:"n"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of dot characters. You can imagine how we will have the current level we are at inside our stack and the whole of the current path We know that the current path, each node can also have up to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsx)(s.mn,{children:"26"})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"26"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(s.span,{className:"mord",children:"26"})]})})]})," children nodes as well."]}),"\n",(0,a.jsx)(i,{children:(0,a.jsxs)(t,{value:"python",label:"Python",children:[(0,a.jsx)(n,{name:"@ColeB2"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:"class TrieNode:\n    # Utilize a linked list DS --\x3e One where the next\n    # nodes can be reached via a hash map\n    # Contains a char as an optional parameter\n    # Also utilizes attributes of is_word to denote\n    # whether it is a word. \n    # Ex: If we have the word apple in our trie. a->p->p->l->e\n    # 'e' node will have is_word = True, to denote that\n    # apple is a word in our map. Letters, a,p,p,l,e won't be True\n    # as they are not complete words in our Trie.\n    def __init__(self, char=None) -> None:\n        # Char is the character the trie has. Default to None above,\n        # as the root node won't have a character associated with it.\n        self.char = char\n        # hash map of children nodes\n        self.nodes = {}\n        # boolean to denote whether the node we are at is the end of a word.\n        self.is_word = False\n\n\nclass WordDictionary:\n\n    def __init__(self):\n        # initialize our root node as a TrieNode with char = None\n        self.root = TrieNode()\n        # max_length variable to speed searching.\n        self.max_length = 0\n        \n\n    def addWord(self, word: str) -> None:\n        # Time: O(l) where l is the length of the word.\n        # a current node pointer to trace our linked list\n        node = self.root\n        # iterate through every character in the word, word.\n        for ch in word:\n            # current character is not in current TrieNode's\n            # hashmap of nodes -> create that node and add\n            # it to the hash map.\n            if ch not in node.nodes:\n                node.nodes[ch] = TrieNode(ch)\n            # move our current node pointer to the character\n            # we are looking at's node.\n            node = node.nodes[ch]\n        # When we reached the end set the is_word boolean to True.\n        node.is_word = True\n        # update max length to simplify searching.\n        self.max_length = max(self.max_length, len(word))\n        \n\n    def search(self, word: str) -> bool:\n        # Time WC: O(w * 26^n) where w is length of word, 26 being\n        # the max number of chararacters at each level in our trie, and\n        # n being the number of '.' characters in word.\n        # Space WC: O(26^n) for our DFS stack.\n        # Base Case: if word we search for > length of largest word,\n        # we know it doesn't exist, so we have no need to run our large\n        # algorithm\n        if len(word) > self.max_length:\n            return False\n        # initialize stack,\n        # tuple of values, 0 being the index of the first letter of 'word'\n        # root being the root node of our trie.\n        stack = [(0, self.root)]\n        # while we have values inside our stack\n        while stack:\n            # get the index of character we are looking at\n            # and get the node of current level we are on.\n            i, node = stack.pop()\n            # if i is > then length of word, we reach end.\n            if i >= len(word):\n                # if node we are looking at is a word return True\n                if node.is_word:\n                    return True\n                # else, node is not a word, continue our algorithm.\n                continue\n            # character we are looking at.\n            ch = word[i]\n            if ch == '.':\n                # loop through all nodes in current level\n                for key, val in node.nodes.items():\n                    # add them to the stack, increment the index\n                    # note items() return k,v pairs. key = character\n                    # and the value = TrieNode\n                    stack.append((i+1, val))\n            # ch isn't in current level. continue our algorithm\n            elif ch not in node.nodes:\n                continue\n            # We found character in node.nodes\n            else:\n                # add it to our stack: (i+1, TrieNode)\n                stack.append((i+1, node.nodes[ch]))\n        # Search our Trie and didn't find the word -> return False\n        return False\n"})})]})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function m(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var a=n(67294);const r={},t=a.createContext(r);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);