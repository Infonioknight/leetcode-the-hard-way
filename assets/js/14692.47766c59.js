(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[14692],{59047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var s=n(67294),a=n(85893);function r(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:r.length>0?(0,a.jsx)(a.Fragment,{children:r}):null}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:n}}var o=n(90512),c=n(95999),i=n(35281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function u(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,o.Z)(i.k.common.admonition,i.k.common.admonitionType(t),l.admonition,n),children:s})}function d(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:r,className:o}=e;return(0,a.jsxs)(u,{type:t,className:o,children:[(0,a.jsx)(d,{title:s,icon:n}),(0,a.jsx)(m,{children:r})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,a.jsx)(h,{...f,...e,className:(0,o.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const x={icon:(0,a.jsx)(g,{}),title:(0,a.jsx)(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(h,{...x,...e,className:(0,o.Z)("alert alert--success",e.className),children:e.children})}function j(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,a.jsx)(h,{...y,...e,className:(0,o.Z)("alert alert--info",e.className),children:e.children})}function N(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,a.jsx)(N,{}),title:(0,a.jsx)(c.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Z={icon:(0,a.jsx)(N,{}),title:(0,a.jsx)(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:b,tip:v,info:k,warning:function(e){return(0,a.jsx)(h,{...w,...e,className:(0,o.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,o.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(b,{title:"secondary",...e}),important:e=>(0,a.jsx)(k,{title:"important",...e}),success:e=>(0,a.jsx)(v,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...Z,...e,className:(0,o.Z)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=r(e),n=(s=t.type,_[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),_.info));var s;return(0,a.jsx)(n,{...t})}},84881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(67294);var s=n(95999),a=n(35281),r=n(33692),o=n(90512);const c={iconEdit:"iconEdit_Z9Sw"};var i=n(85893);function l(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function u(e){let{editUrl:t}=e;return(0,i.jsxs)(r.Z,{to:t,className:a.k.common.editThisPage,children:[(0,i.jsx)(l,{}),(0,i.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},90801:(e,t,n)=>{"use strict";n.d(t,{Z:()=>re});var s=n(67294),a=n(35742),r=n(72389),o=n(90512),c=n(92949),i=n(86668);function l(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(35281),d=n(87594),m=n.n(d);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(f);function x(e,t){const n=e.map((e=>{const{start:n,end:s}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:r}=t;if(r&&p.test(r)){const e=r.match(p).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"],t);case"jsx":case"tsx":return x(["js","jsBlock","jsx"],t);case"html":return x(["js","jsBlock","html"],t);case"python":case"py":case"bash":return x(["bash"],t);case"markdown":case"md":return x(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return x(["tex"],t);case"lua":case"haskell":case"sql":return x(["lua"],t);case"wasm":return x(["wasm"],t);case"vb":case"vba":case"visual-basic":return x(["vb","rem"],t);case"vbnet":return x(["vbnet","rem"],t);case"batch":return x(["rem"],t);case"basic":return x(["rem","f90"],t);case"fsharp":return x(["js","ml"],t);case"ocaml":case"sml":return x(["ml"],t);case"fortran":return x(["f90"],t);case"cobol":return x(["cobol"],t);default:return x(g,t)}}(s,a),c=n.split("\n"),i=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<c.length;){const e=c[m].match(o);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${m},`:u[t]?i[u[t]].start=m:d[t]&&(i[d[t]].range+=`${i[d[t]].start}-${m-1},`),c.splice(m,1)}n=c.join("\n");const h={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var y=n(85893);function k(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const r=t[s];r&&"string"==typeof a&&(n[r]=a)})),n}(l());return(0,y.jsx)(t,{...n,style:s,className:(0,o.Z)(n.className,j.codeBlockContainer,u.k.common.codeBlock)})}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function w(e){let{children:t,className:n}=e;return(0,y.jsx)(k,{as:"pre",tabIndex:0,className:(0,o.Z)(N.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:N.codeBlockLines,children:t})})}var C=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Z(e,t){const[n,a]=(0,s.useState)(),r=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=B);const a=(0,C.zX)(t),r=(0,C.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,r),()=>t.disconnect()}),[e,a,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(42573);const E={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function L(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=a({line:t,className:(0,o.Z)(n,s&&E.codeLine)}),i=t.map(((e,t)=>(0,y.jsx)("span",{...r({token:e,key:t})},t)));return(0,y.jsxs)("span",{...c,children:[s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:E.codeLineNumber}),(0,y.jsx)("span",{className:E.codeLineContent,children:i})]}):i,(0,y.jsx)("br",{})]})}var T=n(95999);function I(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const V={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function A(e){let{code:t,className:n}=e;const[a,r]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),i=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const r=document.getSelection(),o=r.rangeCount>0&&r.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}s.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":a?(0,T.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,T.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,T.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,V.copyButton,a&&V.copyButtonCopied),onClick:i,children:(0,y.jsxs)("span",{className:V.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(I,{className:V.copyButtonIcon}),(0,y.jsx)(S,{className:V.copyButtonSuccessIcon})]})})}function z(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const M={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function R(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,T.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,o.Z)("clean-btn",t,s&&M.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,y.jsx)(z,{className:M.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){let{children:t,className:n="",metastring:a,title:r,showLineNumbers:c,language:u}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,i.L)(),p=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),f=l(),b=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),r=(0,s.useRef)(null),o=(0,s.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");a(n)}),[r]);return Z(r,c),(0,s.useEffect)((()=>{c()}),[e,c]),(0,s.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:o}}(),g=function(e){return e?.match(h)?.groups.title??""}(a)||r,{lineClassNames:x,code:j}=v(t,{metastring:a,language:p,magicComments:m}),w=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,y.jsxs)(k,{as:"div",className:(0,o.Z)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[g&&(0,y.jsx)("div",{className:N.codeBlockTitle,children:g}),(0,y.jsxs)("div",{className:N.codeBlockContent,children:[(0,y.jsx)(_.y$,{theme:f,code:j,language:p??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:r}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,o.Z)(t,N.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,o.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,y.jsx)(L,{line:e,getLineProps:a,getTokenProps:r,classNames:x[t],showLineNumbers:w},t)))})})}}),(0,y.jsxs)("div",{className:N.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,y.jsx)(R,{className:N.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,y.jsx)(A,{className:N.codeButton,code:j})]})]})]})}function $(e){let{children:t,...n}=e;const a=(0,r.Z)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof o?H:w;return(0,y.jsx)(c,{...n,children:o},String(a))}function q(e){return(0,y.jsx)("code",{...e})}var W=n(33692);var D=n(28138),P=n(86043);const O={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function U(e,t){return!!e&&(e===t||U(e.parentElement,t))}function G(e){let{summary:t,children:n,...a}=e;(0,D.Z)().collectAnchor(a.id);const c=(0,r.Z)(),i=(0,s.useRef)(null),{collapsed:l,setCollapsed:u}=(0,P.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,y.jsx)("summary",{children:t??"Details"});return(0,y.jsxs)("details",{...a,ref:i,open:d,"data-collapsed":l,className:(0,o.Z)(O.details,c&&O.isBrowser,a.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&U(t,i.current)&&(e.preventDefault(),l?(u(!1),m(!0)):u(!0))},children:[h,(0,y.jsx)(P.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),m(!e)},children:(0,y.jsx)("div",{className:O.collapsibleContent,children:n})})]})}const Y={details:"details_b_Ee"},J="alert alert--info";function X(e){let{...t}=e;return(0,y.jsx)(G,{...t,className:(0,o.Z)(J,Y.details,t.className)})}function K(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,y.jsx)(y.Fragment,{children:t.filter((e=>e!==n))});return(0,y.jsx)(X,{...e,summary:n,children:a})}var Q=n(92503);function ee(e){return(0,y.jsx)(Q.Z,{...e})}const te={containsTaskList:"containsTaskList_mC6p"};function ne(e){if(void 0!==e)return(0,o.Z)(e,e?.includes("contains-task-list")&&te.containsTaskList)}const se={img:"img_ev3q"};var ae=n(59047);const re={Head:a.Z,details:K,Details:K,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,y.jsx)(q,{...e}):(0,y.jsx)($,{...e})},a:function(e){return(0,y.jsx)(W.Z,{...e})},pre:function(e){return(0,y.jsx)(y.Fragment,{children:e.children})},ul:function(e){return(0,y.jsx)("ul",{...e,className:ne(e.className)})},li:function(e){return(0,D.Z)().collectAnchor(e.id),(0,y.jsx)("li",{...e})},img:function(e){return(0,y.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,o.Z)(t,se.img))});var t},h1:e=>(0,y.jsx)(ee,{as:"h1",...e}),h2:e=>(0,y.jsx)(ee,{as:"h2",...e}),h3:e=>(0,y.jsx)(ee,{as:"h3",...e}),h4:e=>(0,y.jsx)(ee,{as:"h4",...e}),h5:e=>(0,y.jsx)(ee,{as:"h5",...e}),h6:e=>(0,y.jsx)(ee,{as:"h6",...e}),admonition:ae.Z,mermaid:()=>null}},45042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(67294);var s=n(11151),a=n(30476),r=n(85893);function o(e){let{children:t}=e;return(0,r.jsx)(s.Z,{components:a.Z,children:t})}},32244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(67294);var s=n(90512),a=n(33692),r=n(85893);function o(e){const{permalink:t,title:n,subLabel:o,isNext:c}=e;return(0,r.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(67294);var s=n(90512);const a={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var s=n(67294),a=n(90512),r=n(12466),o=n(16550),c=n(20469),i=n(91980),l=n(67392),u=n(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[l,d]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=l??f;return h({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==s&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},13008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(67294);var s=n(90512),a=n(33692);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=n(85893);function c(e){let{permalink:t,label:n,count:c}=e;return(0,o.jsxs)(a.Z,{href:t,className:(0,s.Z)(r.tag,c?r.tagWithCount:r.tagRegular),children:[n,c&&(0,o.jsx)("span",{children:c})]})}},71526:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(67294);var s=n(90512),a=n(95999),r=n(13008);const o={tags:"tags_jXut",tag:"tag_QGVx"};var c=n(85893);function i(e){let{tags:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,s.Z)(o.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,c.jsx)("li",{className:o.tag,children:(0,c.jsx)(r.Z,{label:t,permalink:n})},n)}))})]})}},87594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,r]=t;if(s&&r){s=parseInt(s),r=parseInt(r);const e=s<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=s;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},11151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);