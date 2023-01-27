"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35230],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25052:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r,o=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/decode-the-slanted-ciphertext"},d="2075 - Decode the Slanted Ciphertext (Medium)",s={unversionedId:"2000-2099/decode-the-slanted-ciphertext-medium",id:"2000-2099/decode-the-slanted-ciphertext-medium",title:"2075 - Decode the Slanted Ciphertext (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/decode-the-slanted-ciphertext",source:"@site/solutions/2000-2099/2075-decode-the-slanted-ciphertext-medium.md",sourceDirName:"2000-2099",slug:"/2000-2099/decode-the-slanted-ciphertext-medium",permalink:"/solutions/2000-2099/decode-the-slanted-ciphertext-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2075-decode-the-slanted-ciphertext-medium.md",tags:[],version:"current",sidebarPosition:2075,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/decode-the-slanted-ciphertext"},sidebar:"tutorialSidebar",previous:{title:"2032 - Two Out of Three (Easy)",permalink:"/solutions/2000-2099/two-out-of-three-easy"},next:{title:"2100 - 2199",permalink:"/solutions/category/2100---2199"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],u=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2075---decode-the-slanted-ciphertext-medium"},"2075 - Decode the Slanted Ciphertext (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/decode-the-slanted-ciphertext"},"https://leetcode.com/problems/decode-the-slanted-ciphertext")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"A string ",(0,i.kt)("inlineCode",{parentName:"p"},"originalText")," is encoded using a ",(0,i.kt)("strong",{parentName:"p"},"slanted transposition cipher")," to a string ",(0,i.kt)("inlineCode",{parentName:"p"},"encodedText")," with the help of a matrix having a ",(0,i.kt)("strong",{parentName:"p"},"fixed number of rows")," ",(0,i.kt)("inlineCode",{parentName:"p"},"rows"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"originalText")," is placed first in a top-left to bottom-right manner."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/11/07/exa11.png",alt:null})),(0,i.kt)("p",null,"The blue cells are filled first, followed by the red cells, then the yellow cells, and so on, until we reach the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"originalText"),". The arrow indicates the order in which the cells are filled. All empty cells are filled with ",(0,i.kt)("inlineCode",{parentName:"p"},"' '"),". The number of columns is chosen such that the rightmost column will ",(0,i.kt)("strong",{parentName:"p"},"not be empty")," after filling in ",(0,i.kt)("inlineCode",{parentName:"p"},"originalText"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"encodedText")," is then formed by appending all characters of the matrix in a row-wise fashion."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/11/07/exa12.png",alt:null})),(0,i.kt)("p",null,"The characters in the blue cells are appended first to ",(0,i.kt)("inlineCode",{parentName:"p"},"encodedText"),", then the red cells, and so on, and finally the yellow cells. The arrow indicates the order in which the cells are accessed."),(0,i.kt)("p",null,"For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},'originalText = "cipher"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rows = 3"),", then we encode it in the following manner:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/10/25/desc2.png",alt:null})),(0,i.kt)("p",null,"The blue arrows depict how ",(0,i.kt)("inlineCode",{parentName:"p"},"originalText")," is placed in the matrix, and the red arrows denote the order in which ",(0,i.kt)("inlineCode",{parentName:"p"},"encodedText")," is formed. In the above example, ",(0,i.kt)("inlineCode",{parentName:"p"},'encodedText = "ch ie pr"'),"."),(0,i.kt)("p",null,"Given the encoded string ",(0,i.kt)("inlineCode",{parentName:"p"},"encodedText")," and number of rows ",(0,i.kt)("inlineCode",{parentName:"p"},"rows"),", return ",(0,i.kt)("em",{parentName:"p"},"the original string")," ",(0,i.kt)("inlineCode",{parentName:"p"},"originalText"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"originalText")," ",(0,i.kt)("strong",{parentName:"p"},"does not")," have any trailing spaces ",(0,i.kt)("inlineCode",{parentName:"p"},"' '"),". The test cases are generated such that there is only one possible ",(0,i.kt)("inlineCode",{parentName:"p"},"originalText"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: encodedText = "ch   ie   pr", rows = 3\nOutput: "cipher"\nExplanation: This is the same example described in the problem description.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/10/26/exam1.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: encodedText = "iveo    eed   l te   olc", rows = 4\nOutput: "i love leetcode"\nExplanation: The figure above denotes the matrix that was used to encode originalText. \nThe blue arrows show how we can find originalText from encodedText.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/10/26/eg2.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: encodedText = "coding", rows = 1\nOutput: "coding"\nExplanation: Since there is only 1 row, both originalText and encodedText are the same.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= encodedText.length <= 10^6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encodedText")," consists of lowercase English letters and ",(0,i.kt)("inlineCode",{parentName:"li"},"' '")," only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encodedText")," is a valid encoding of some ",(0,i.kt)("inlineCode",{parentName:"li"},"originalText")," that ",(0,i.kt)("strong",{parentName:"li"},"does not")," have trailing spaces."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= rows <= 1000")),(0,i.kt)("li",{parentName:"ul"},"The testcases are generated such that there is ",(0,i.kt)("strong",{parentName:"li"},"only one")," possible ",(0,i.kt)("inlineCode",{parentName:"li"},"originalText"),".")),(0,i.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,i.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string decodeCiphertext(string encodedText, int rows) {\n        string ans;\n        int n = encodedText.size(), col = n / rows;\n        // iterate each col\n        for (int i = 0; i < col; i++) {\n            // starting from the first character,\n            // we traverse encodedText diagonally\n            for (int j = i; j < n; j += col + 1) {\n                ans += encodedText[j];\n            }\n        }\n        // remove all the spaces at the end\n        while (ans.back() == ' ') ans.pop_back();\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0}}]);