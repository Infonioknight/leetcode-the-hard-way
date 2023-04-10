"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[67002],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>d});var n=t(67294);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,m=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=i(t),k=m,d=c["".concat(o,".").concat(k)]||c[k]||N[k]||r;return t?n.createElement(d,s(s({ref:a},l),{},{components:t})):n.createElement(d,s({ref:a},l))}));function d(e,a){var t=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var r=t.length,s=new Array(r);s[0]=k;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[c]="string"==typeof e?e:m,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9258:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(87462),m=(t(67294),t(3905));const r={description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/"},s="0346 - Moving Average from Data Stream (Easy)",p={unversionedId:"0300-0399/moving-average-from-data-stream-easy",id:"0300-0399/moving-average-from-data-stream-easy",title:"0346 - Moving Average from Data Stream (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/",source:"@site/solutions/0300-0399/0346-moving-average-from-data-stream-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/moving-average-from-data-stream-easy",permalink:"/solutions/0300-0399/moving-average-from-data-stream-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0346-moving-average-from-data-stream-easy.md",tags:[],version:"current",sidebarPosition:346,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/"},sidebar:"tutorialSidebar",previous:{title:"0345 - Reverse Vowels of a String (Easy)",permalink:"/solutions/0300-0399/reverse-vowels-of-a-string-easy"},next:{title:"0347 - Top K Frequent Elements (Medium)",permalink:"/solutions/0300-0399/top-k-frequent-elements-medium"}},o={},i=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Deque",id:"approach-1-deque",level:2}],l=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)});var c;const N={toc:i},k="wrapper";function d(e){let{components:a,...t}=e;return(0,m.kt)(k,(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"0346---moving-average-from-data-stream-easy"},"0346 - Moving Average from Data Stream (Easy)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/moving-average-from-data-stream/"},"https://leetcode.com/problems/moving-average-from-data-stream/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window."),(0,m.kt)("p",null,"Implement the ",(0,m.kt)("inlineCode",{parentName:"p"},"MovingAverage")," class:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"MovingAverage(int size)")," Initializes the object with the size of the window ",(0,m.kt)("inlineCode",{parentName:"li"},"size"),"."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"double next(int val)")," Returns the moving average of the last ",(0,m.kt)("inlineCode",{parentName:"li"},"size")," values of the stream.")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},'Input\n["MovingAverage", "next", "next", "next", "next"]\n[[3], [1], [10], [3], [5]]\nOutput\n[null, 1.0, 5.5, 4.66667, 6.0]\n\nExplanation\nMovingAverage movingAverage = new MovingAverage(3);\nmovingAverage.next(1); // return 1.0 = 1 / 1\nmovingAverage.next(10); // return 5.5 = (1 + 10) / 2\nmovingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3\nmovingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3\n')),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= size <= 1000")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"-10^5 <= val <= 10^5")),(0,m.kt)("li",{parentName:"ul"},"At most ",(0,m.kt)("inlineCode",{parentName:"li"},"10^4")," calls will be made to ",(0,m.kt)("inlineCode",{parentName:"li"},"next"),".")),(0,m.kt)("h2",{id:"approach-1-deque"},"Approach 1: Deque"),(0,m.kt)("p",null,"We define a deque ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"d")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," to store the values, ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," to store the sum. If this is not a sliding window problem, for every move, we add the current value to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," and output ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"z"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum / (int) d.size()")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord"},"/"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"deque<int> d;\nint sum = 0;\nfor (auto x : nums) {\n    sum += x;\n    d.push_back(x);\n    cout << (double) sum / (int) d.size() << endl;\n}\n")),(0,m.kt)("p",null,"In general, for sliding window, we have a pointer to track if it is within the window or not. Here we can check the size of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"d")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),". If it already has ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," elements, then we need to remove the one from the front (i.e. the leftmost one) before pushing the next one to the back. We also need to subtract the old value and add the new value to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),"."),(0,m.kt)(l,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class MovingAverage {\npublic:\n    deque<int> d;\n    int n, sum;\n    MovingAverage(int size) {\n        n = size;\n        sum = 0;\n    }\n    \n    double next(int val) {\n        // keep track the current sum to avoid recalculation\n        sum += val;\n        // window size is n. need to remove the first one\n        if (d.size() == n) {\n            // substract the first value\n            sum -= d.front();\n            // remove it from the deque\n            d.pop_front();\n        }\n        // add the new value\n        d.push_back(val);\n        // use double as '/' is integer division\n        return (double) sum / (int) d.size();\n    }\n};\n\n/**\n * Your MovingAverage object will be instantiated and called as such:\n * MovingAverage* obj = new MovingAverage(size);\n * double param_1 = obj->next(val);\n */\n")))}d.isMDXComponent=!0}}]);