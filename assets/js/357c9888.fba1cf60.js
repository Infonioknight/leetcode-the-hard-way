"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[52239],{3905:(n,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>m});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},g=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,s=n.originalType,l=n.parentName,g=o(n,["components","mdxType","originalType","parentName"]),c=p(t),h=i,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return t?r.createElement(m,a(a({ref:e},g),{},{components:t})):r.createElement(m,a({ref:e},g))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=t.length,a=new Array(s);a[0]=h;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o[c]="string"==typeof n?n:i,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7248:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const s={title:"Manacher's Algorithm",description:"A famous algorithm and the fastest known technique to find palindromic substrings of even or odd length.",hide_table_of_contents:!1,keywords:["leetcode","template","manachers"]},a=void 0,o={unversionedId:"manachers-algorithm",id:"manachers-algorithm",title:"Manacher's Algorithm",description:"A famous algorithm and the fastest known technique to find palindromic substrings of even or odd length.",source:"@site/templates/manachers-algorithm.md",sourceDirName:".",slug:"/manachers-algorithm",permalink:"/templates/manachers-algorithm",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/manachers-algorithm.md",tags:[],version:"current",frontMatter:{title:"Manacher's Algorithm",description:"A famous algorithm and the fastest known technique to find palindromic substrings of even or odd length.",hide_table_of_contents:!1,keywords:["leetcode","template","manachers"]},sidebar:"tutorialSidebar",previous:{title:"Linked List",permalink:"/templates/linked-list"},next:{title:"Ordered Set and GNU C++ PBDS",permalink:"/templates/ordered-set"}},l={},p=[],g=n=>function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)},c=g("Tabs"),d=g("TabItem"),h={toc:p},m="wrapper";function u(n){let{components:e,...t}=n;return(0,i.kt)(m,(0,r.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Please refer the ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/strings/manachers-algorithm"},"tutorial")," guide for more details. "),(0,i.kt)("p",null,"The function takes input of a string and returns all possible palindromic strings at each center, possible in the string."),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'vector<string> palindromicSubstrings(string s) {\n    if (s.empty()) return {};\n\n    // Convert odd/even strings to odd\n    string str = "";\n    for (int i = 0; i < s.length() - 1; i++) {\n        str += s[i];\n        str += "#";\n    }\n    str += s[s.length() - 1];\n\n    // Initializing variables\n    int len = str.length();\n    vector<int> pLengths(len, 0);\n    int c = 0;\n    int R = 0;\n\n    for (int i = 0; i < len; i++) {\n        // Mirroring the palindromic length\n        if (i < R) {\n            int mirror = 2 * c - i;\n            pLengths[i] = min(R - i, pLengths[mirror]);\n        }\n\n        // Exploring beyond bounds\n        while (i - pLengths[i] - 1 >= 0 && i + pLengths[i] + 1 < len &&\n               str[i + pLengths[i] + 1] == str[i - pLengths[i] - 1]) {\n            pLengths[i]++;\n        }\n\n        // Update center and bound\n        if (pLengths[i] + i > R) {\n            c = i;\n            R = i + pLengths[i];\n        }\n    }\n\n    // Return all possible palindromic strings\n    vector<string> strings;\n    for (int i = 0; i < len; i++) {\n        string palindrome = str.substr(i - pLengths[i], 2 * pLengths[i] + 1);\n        string result = "";\n        for (char ch : palindrome) {\n            if (ch != \'#\') {\n                result += ch;\n            }\n        }\n        strings.push_back(result);\n    }\n\n    return strings;\n}\n\n'))),(0,i.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public List<String> palindromicSubstrings(String s) {\n    if (s.length() == 0) return new ArrayList<>();\n\n    // Convert odd/even strings to odd\n    StringBuilder str = new StringBuilder();\n    for (int i = 0; i < s.length() - 1; i++) {\n        str.append(s.charAt(i));\n        str.append("#");\n    }\n    str.append(s.charAt(s.length() - 1));\n\n    // Initializing variables\n    int len = str.length();\n    int[] pLengths = new int[len];\n    int c = 0;\n    int R = 0;\n\n    for (int i = 0; i < len; i++) {\n        // Mirroring the palindromic length\n        if (i < R) {\n            int mirror = 2 * c - i;\n            pLengths[i] = Math.min(R - i, pLengths[mirror]);\n        }\n\n        // Exploring beyond bounds\n        while (i - pLengths[i] - 1 >= 0 && i + pLengths[i] + 1 < len &&\n               str.charAt(i + pLengths[i] + 1) == str.charAt(i - pLengths[i] - 1)) {\n            pLengths[i]++;\n        }\n\n        // Update center and bound\n        if (pLengths[i] + i > R) {\n            c = i;\n            R = i + pLengths[i];\n        }\n    }\n\n    // Return all possible palindromic strings\n    List<String> strings = new ArrayList<>();\n    for (int i = 0; i < len; i++) {\n        String palindrome = str.substring(i - pLengths[i], i + pLengths[i] + 1).replace("#", "");\n        if (!palindrome.isEmpty()) {\n            strings.add(palindrome);\n        }\n    }\n\n    return strings;\n}\n\n'))),(0,i.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def palindromicSubstrings(self, s: str) -> list[str]:\n    if len(s) == 0:\n        return []\n\n    # Convert odd/even strings to odd\n    string = ""\n    for i in range(len(s) - 1):\n        string += s[i] + "#"\n    string += s[len(s) - 1]\n\n    # Initializing variables\n    pLengths = [0] * len(string)\n    c = 0\n    R = 0\n\n    for i in range(len(string)):\n        # Mirroring the palindromic length\n        if i < R:\n            mirror = 2 * c - i\n            pLengths[i] = min(R - i, pLengths[mirror])\n\n        # Exploring beyond bounds\n        while (i - pLengths[i] - 1 >= 0 and i + pLengths[i] + 1 < len(string)\n               and string[i + pLengths[i] + 1] == string[i - pLengths[i] - 1]):\n            pLengths[i] += 1\n\n        # Update center and bound\n        if pLengths[i] + i > R:\n            c = i\n            R = i + pLengths[i]\n\n    # Return all possible palindromic strings\n    strings = []\n    for i in range(len(pLengths)):\n        strings.append(string[i - pLengths[i]:i + pLengths[i] + 1].replace("#", ""))\n    while "" in strings:\n        strings.remove("")  # Remove empty palindromes\n    return strings\n           \n')))))}u.isMDXComponent=!0}}]);