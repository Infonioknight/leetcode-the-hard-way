"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[91590],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(b,i(i({ref:n},p),{},{components:t})):a.createElement(b,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48809:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/orderly-queue/",tags:["Math","String","Sorting"]},l="0899 - Orderly Queue (Hard)",c={unversionedId:"0800-0899/orderly-queue-hard",id:"0800-0899/orderly-queue-hard",title:"0899 - Orderly Queue (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/orderly-queue/",source:"@site/solutions/0800-0899/0899-orderly-queue-hard.md",sourceDirName:"0800-0899",slug:"/0800-0899/orderly-queue-hard",permalink:"/leetcode-the-hard-way/solutions/0800-0899/orderly-queue-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0899-orderly-queue-hard.md",tags:[{label:"Math",permalink:"/leetcode-the-hard-way/solutions/tags/math"},{label:"String",permalink:"/leetcode-the-hard-way/solutions/tags/string"},{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"}],version:"current",sidebarPosition:899,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/orderly-queue/",tags:["Math","String","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0896 - Monotonic Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/0800-0899/monotonic-array-easy"},next:{title:"0900 - 0999",permalink:"/leetcode-the-hard-way/solutions/category/0900---0999"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Rotate or Sort",id:"approach-1-rotate-or-sort",level:2},{value:"Approach 2: Booth&#39;s Algorithm",id:"approach-2-booths-algorithm",level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)}},d=m("Tabs"),b=m("TabItem"),h=m("SolutionAuthor"),g={toc:u};function y(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0899---orderly-queue-hard"},"0899 - Orderly Queue (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/orderly-queue/"},"https://leetcode.com/problems/orderly-queue/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," and an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),". You can choose one of the first ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," letters of ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," and append it at the end of the string.."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the lexicographically smallest string you could have after applying the mentioned step any number of moves"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "cba", k = 1\nOutput: "acb"\nExplanation: \nIn the first move, we move the 1st character \'c\' to the end, obtaining the string "bac".\nIn the second move, we move the 1st character \'b\' to the end, obtaining the final result "acb".\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "baaca", k = 3\nOutput: "aaabc"\nExplanation: \nIn the first move, we move the 1st character \'b\' to the end, obtaining the string "aacab".\nIn the second move, we move the 3rd character \'c\' to the end, obtaining the final result "aaabc".\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= k <= s.length <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consist of lowercase English letters.")),(0,o.kt)("h2",{id:"approach-1-rotate-or-sort"},"Approach 1: Rotate or Sort"),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Time Complexity: O(N ^ 2)\n// Space Complexity: O(N)\nclass Solution {\npublic:\n    // just a refresher ...\n    void bubbleSort(string& s) {\n        int n = s.size();\n        bool swapped;\n        for (int i = 0; i < n; i++) {\n            swapped = false;\n            for (int j = 0; j < n - 1; j++) {\n                if (s[j] > s[j + 1]) {\n                    swap(s[j], s[j + 1]);\n                    swapped = true;\n                }\n            }\n            if (!swapped) break;\n        }\n    }\n    \n    string orderlyQueue(string s, int k) {\n        string ans = s;\n        if (k == 1) {\n            // "cba" -> "bac" -> "acb" -> "cba" -> ...\n            // we only have N swaps here \n            // as it will become the original string after N swaps\n            // hence, we can try all N possible swaps and find the lexicographically smallest one\n            for (int i = 1; i < s.size(); i++) {\n                ans = min(ans, s.substr(i) + s.substr(0, i));\n            }\n        } else {\n            // if k > 1, we can move any character to any position by swapping two adjacent characters\n            // By swapping a number of times, \n            // e.g. "cab" \n            // eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)\n            // so the lexicographically smallest string would be the sorted string using bubble sort\n            bubbleSort(ans);\n            // alternatively, you can use `sort(ans.begin(), ans.end());`\n        }\n        return ans;\n    }\n};\n'))),(0,o.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Time Complexity: O(N ^ 2)\n// Space Complexity: O(N)\nclass Solution {\n    public String orderlyQueue(String s, int k) {\n        String ans = s;\n        if (k == 1) {\n            // "cba" -> "bac" -> "acb" -> "cba" -> ...\n            // we only have N swaps here \n            // as it will become the original string after N swaps\n            // hence, we can try all N possible swaps and find the lexicographically smallest one\n            for (int i = 0; i < s.length(); i++) {\n                String t = s.substring(i) + s.substring(0, i);\n                if (ans.compareTo(t) > 0) {\n                    ans = t;\n                }\n            }\n        } else {\n            // if k > 1, we can move any character to any position by swapping two adjacent characters\n            // By swapping a number of times, \n            // e.g. "cab" \n            // eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)\n            // so the lexicographically smallest string would be the sorted string\n            char[] ca = ans.toCharArray();\n            Arrays.sort(ca);\n            ans = new String(ca);\n        }\n        return ans;\n    }\n}\n'))),(0,o.kt)(b,{value:"go",label:"Go",mdxType:"TabItem"},(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Time Complexity: O(N ^ 2)\n// Space Complexity: O(N)\nfunc orderlyQueue(s string, k int) string {\n    ans := s\n    if k == 1 {\n        // "cba" -> "bac" -> "acb" -> "cba" -> ...\n        // we only have N swaps here \n        // as it will become the original string after N swaps\n        // hence, we can try all N possible swaps and find the lexicographically smallest one\n        for i := 0; i < len(s); i++ {\n            t := s[i:] + s[:i]\n            if t < ans {\n                ans = t\n            }\n        }\n    } else {\n        // if k > 1, we can move any character to any position by swapping two adjacent characters\n        // By swapping a number of times, \n        // e.g. "cab" \n        // eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)\n        // so the lexicographically smallest string would be the sorted string\n        r := []rune(ans)\n        sort.Slice(r, func(i int, j int) bool { return r[i] < r[j] })\n        ans = string(r)\n    }\n    return ans\n}\n'))),(0,o.kt)(b,{value:"py",label:"Python3",mdxType:"TabItem"},(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Time Complexity: O(N ^ 2)\n# Space Complexity: O(N)\nclass Solution:\n    def orderlyQueue(self, s: str, k: int) -> str:\n        # "cba" -> "bac" -> "acb" -> "cba" -> ...\n        # we only have N swaps here \n        # as it will become the original string after N swaps\n        # hence, we can try all N possible swaps and find the lexicographically smallest one\n        if k == 1: return min(s[i:] + s[:i] for i in range(len(s)))\n        # if k > 1, we can move any character to any position by swapping two adjacent characters\n        # By swapping a number of times, \n        # e.g. "cab" \n        # eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)\n        # so the lexicographically smallest string would be the sorted string\n        return "".join(sorted(s))\n')))),(0,o.kt)("h2",{id:"approach-2-booths-algorithm"},"Approach 2: Booth's Algorithm"),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string orderlyQueue(string s, int k) {\n        if (k > 1) {\n            sort(s.begin(), s.end());\n            return s;\n        }\n        // case: k == 1\n        // Booth's algorithm uses a modified preprocessing function from KMP\n        // and it runs in O(N) time\n        // ref: https://en.wikipedia.org/wiki/Lexicographically_minimal_string_rotation\n        int n = s.size();\n        s += s;\n        vector<int> f(s.size(), -1);\n        k = 0;\n        for (int j = 1; j < s.size(); j++) {\n            char sj = s[j];\n            int i = f[j - k - 1];\n            while (i != -1 && sj != s[k + i + 1]) {\n                if (sj < s[k + i + 1]) k = j - i - 1;\n                i = f[i];\n            }\n            if (sj != s[k + i + 1]) {\n                if (sj < s[k]) {\n                    k = j;\n                }\n                f[j - k] = -1;\n            } else {\n                f[j - k] = i + 1;\n            }\n        }\n        return s.substr(k, s.size() / 2);\n    }\n};\n")))))}y.isMDXComponent=!0}}]);