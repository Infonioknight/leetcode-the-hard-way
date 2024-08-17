"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[65635],{71258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=t(85893),r=t(11151);const s={description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",tags:["Array","Stack","Greedy","Sorting","Monotonic Stack"]},i="1996 - The Number of Weak Characters in the Game (Medium)",o={id:"1900-1999/the-number-of-weak-characters-in-the-game-medium",title:"1996 - The Number of Weak Characters in the Game (Medium)",description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",source:"@site/solutions/1900-1999/1996-the-number-of-weak-characters-in-the-game-medium.md",sourceDirName:"1900-1999",slug:"/1900-1999/the-number-of-weak-characters-in-the-game-medium",permalink:"/solutions/1900-1999/the-number-of-weak-characters-in-the-game-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1996-the-number-of-weak-characters-in-the-game-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Stack",permalink:"/solutions/tags/stack"},{inline:!0,label:"Greedy",permalink:"/solutions/tags/greedy"},{inline:!0,label:"Sorting",permalink:"/solutions/tags/sorting"},{inline:!0,label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:1996,frontMatter:{description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/",tags:["Array","Stack","Greedy","Sorting","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"1992 - Find All Groups of Farmland (Medium)",permalink:"/solutions/1900-1999/find-all-groups-of-farmland-medium"},next:{title:"2000 - 2099",permalink:"/solutions/category/2000---2099"}},c={},h=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2},{value:"Approach 2: Sort with custom comparator",id:"approach-2-sort-with-custom-comparator",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"1996---the-number-of-weak-characters-in-the-game-medium",children:"1996 - The Number of Weak Characters in the Game (Medium)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are playing a game that contains multiple characters, and each of the characters has ",(0,a.jsx)(n.strong,{children:"two"})," main properties: ",(0,a.jsx)(n.strong,{children:"attack"})," and ",(0,a.jsx)(n.strong,{children:"defense"}),". You are given a 2D integer array ",(0,a.jsx)(n.code,{children:"properties"})," where ",(0,a.jsx)(n.code,{children:"properties[i] = [attacki, defensei]"})," represents the properties of the ",(0,a.jsx)(n.code,{children:"ith"})," character in the game."]}),"\n",(0,a.jsxs)(n.p,{children:["A character is said to be ",(0,a.jsx)(n.strong,{children:"weak"})," if any other character has ",(0,a.jsx)(n.strong,{children:"both"})," attack and defense levels ",(0,a.jsx)(n.strong,{children:"strictly greater"})," than this character's attack and defense levels. More formally, a character ",(0,a.jsx)(n.code,{children:"i"})," is said to be ",(0,a.jsx)(n.strong,{children:"weak"})," if there exists another character ",(0,a.jsx)(n.code,{children:"j"})," where ",(0,a.jsx)(n.code,{children:"attackj > attacki"})," and ",(0,a.jsx)(n.code,{children:"defensej > defensei"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsxs)(n.em,{children:["the number of ",(0,a.jsx)(n.strong,{children:"weak"})," characters"]}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: properties = [[5,5],[6,3],[3,6]]\nOutput: 0\nExplanation: No character has strictly greater attack and defense than the other.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: properties = [[2,2],[3,3]]\nOutput: 1\nExplanation: The first character is weak because the second character has a strictly greater attack and defense.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Input: properties = [[1,5],[10,4],[4,3]]\nOutput: 1\nExplanation: The third character is weak because the second character has a strictly greater attack and defense.\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"2 <= properties.length <= 105"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"properties[i].length == 2"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= attacki, defensei <= 105"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,a.jsx)(t,{name:"@wingkwong"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // the idea is to\n    // 1. rearrange the order of attack and defense\n    // 2. count weak characters (those defenses less than the current maximum defense)\n    // 3. update the maximum defense\n    int numberOfWeakCharacters(vector<vector<int>>& p) {\n        // the final answer to be returned\n        int weakCharacters = 0;\n        // record maximum defense. since 1 <= defense_i <= 10 ^ 5\n        // we can set the init value to x where x < 1\n        int maxDefense = 0;\n        // use a hash map to map the attack and defense with greater<int> as a key_compare\n        map<int, vector<int>, greater<int>> m;\n        for(auto x : p) m[x[0]].push_back(x[1]);\n        // for each attack\n        for(auto x : m) {\n            // we count the number of weak characters \n            // and add it to `weakCharacters`\n            weakCharacters += count_if(x.second.begin(), x.second.end(), [&](int curDefense){ return curDefense < maxDefense;});\n            // then update `maxDefense` which is the maximum value in current defenses\n            maxDefense = max(maxDefense, *max_element(x.second.begin(), x.second.end()));\n        }\n        return weakCharacters;\n    }\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"approach-2-sort-with-custom-comparator",children:"Approach 2: Sort with custom comparator"}),"\n",(0,a.jsx)(t,{name:"@wingkwong"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // the idea is to\n    // 1. rearrange the order of attack and defense\n    // 2. count weak characters (those defenses less than the current maximum defense)\n    // 3. update the maximum defense\n    int numberOfWeakCharacters(vector<vector<int>>& p) {\n        // the final answer to be returned\n        int weakCharacters = 0;\n        // record maximum defense. since 1 <= defense_i <= 10 ^ 5\n        // we can set the init value to x where x < 1\n        int maxDefense = 0;\n        // sort properties with custom sort comparator\n        sort(p.begin(), p.end(), [](const vector<int>& x, const vector<int>& y) {\n            // if the attack is same, then sort defense in ascending order  \n            // otherwise, sort attack in in descending order \n           return x[0] == y[0] ? x[1] < y[1] : x[0] > y[0];\n        });\n        // by doing so, we don't need to compare starting from the back\n        for (auto& x : p) {\n            // x[1] is defense of properties[i]\n            // if it is less than current maxDefense, then it means it is a weak character\n            weakCharacters += x[1] < maxDefense;\n            // update maxDefense\n            maxDefense = max(maxDefense, x[1]);\n        }\n        return weakCharacters;\n    }\n};\n"})}),"\n",(0,a.jsx)(t,{name:"@wingkwong"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    # the idea is to\n    # 1. rearrange the order of attack and defense\n    # 2. count weak characters (those defenses less than the current maximum defense)\n    # 3. update the maximum defense\n    def numberOfWeakCharacters(self, p: List[List[int]]) -> int:\n        # the final answer to be returned\n        weakCharacters = 0\n        # record maximum defense. since 1 <= defense_i <= 10 ^ 5\n        # we can set the init value to x where x < 1\n        maxDefense = 0\n        # sort properties with custom sort comparator\n        # if the attack is same, then sort defense in descending order  \n        # otherwise, sort attack in in ascending order \n        p.sort(key = lambda x: (x[0], -x[1]), reverse = True)\n\t\t# or we can do it like \n\t\t# p.sort(key = lambda x: (-x[0], x[1]))\n        for _, defense in p:\n            # if it is less than current maxDefense, then it means it is a weak character\n            if defense < maxDefense: weakCharacters += 1\n            # update maxDefense\n            else: maxDefense = defense\n        return weakCharacters\n"})}),"\n",(0,a.jsx)(t,{name:"@iraycd"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-golang",children:"// the idea is to\n// 1. rearrange the order of attack and defense\n// 2. count weak characters (those defenses less than the current maximum defense)\n// 3. update the maximum defense\nfunc numberOfWeakCharacters(properties [][]int) int {\n    \n    // Weak starts at 0, this is the variable which is going to be returned\n    weekCharacterCount := 0\n    maxDefence := 0\n    \n    // Sorting the order of the desending order of the attack\n    sort.Sort(ByAttack(properties))\n    for _, elem := range properties {\n        // Appending the count if the current element is less than the max defense \n        // Else change the max defence\n        if(elem[1] < maxDefence){\n            weekCharacterCount++;\n        }else {\n            maxDefence = elem[1]\n        }\n    }\n    return weekCharacterCount\n}\n\n// Custom sorting Logic by attack\ntype ByAttack [][]int\nfunc (a ByAttack) Len() int           { return len(a) }\nfunc (a ByAttack) Less(i, j int) bool { \n    if(a[i][0] == a[j][0]){\n        return a[i][1] < a[j][1]\n    }\n    return a[i][0] > a[j][0] \n}\nfunc (a ByAttack) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);