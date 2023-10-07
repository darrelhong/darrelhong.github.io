import{S as te,i as se,s as le,k as x,J as Z,a as H,l as E,m as p,K as ee,h as o,c as j,n as i,b as z,G as n,L as oe,H as Q,C as he,p as ne,D as ie,E as ce,F as fe,g as P,d as R,q as d,r as _,M as ue,y as G,N as ge,z as L,A as S,B as C}from"../chunks/index.e51c1892.js";const me=()=>{console.log(),document.documentElement.getAttribute("data-theme")==="dark"?(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light")):(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark"))};function de(c){let e,t,a,r,l,h,m,f;return{c(){e=x("button"),t=Z("svg"),a=Z("path"),r=H(),l=Z("svg"),h=Z("path"),this.h()},l(v){e=E(v,"BUTTON",{class:!0});var g=p(e);t=ee(g,"svg",{class:!0,xmlns:!0,viewBox:!0});var T=p(t);a=ee(T,"path",{d:!0}),p(a).forEach(o),T.forEach(o),r=j(g),l=ee(g,"svg",{xmlns:!0,viewBox:!0,class:!0});var $=p(l);h=ee($,"path",{d:!0}),p(h).forEach(o),$.forEach(o),g.forEach(o),this.h()},h(){i(a,"d","M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"),i(t,"class","sun svelte-11yjtjg"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"viewBox","0 0 16 16"),i(h,"d","M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"),i(l,"xmlns","http://www.w3.org/2000/svg"),i(l,"viewBox","0 0 16 16"),i(l,"class","moon svelte-11yjtjg"),i(e,"class","dark-mode-button svelte-11yjtjg")},m(v,g){z(v,e,g),n(e,t),n(t,a),n(e,r),n(e,l),n(l,h),m||(f=oe(e,"click",me),m=!0)},p:Q,i:Q,o:Q,d(v){v&&o(e),m=!1,f()}}}class _e extends te{constructor(e){super(),se(this,e,null,de,le,{})}}function $e(c){let e,t;const a=c[3].default,r=he(a,c,c[2],null);return{c(){e=x("a"),r&&r.c(),this.h()},l(l){e=E(l,"A",{rel:!0,href:!0,class:!0,style:!0});var h=p(e);r&&r.l(h),h.forEach(o),this.h()},h(){i(e,"rel","external"),i(e,"href",c[0]),i(e,"class","highlight svelte-1c2au3s"),ne(e,"--highlight-color","var("+c[1]+")")},m(l,h){z(l,e,h),r&&r.m(e,null),t=!0},p(l,[h]){r&&r.p&&(!t||h&4)&&ie(r,a,l,l[2],t?fe(a,l[2],h,null):ce(l[2]),null),(!t||h&1)&&i(e,"href",l[0]),(!t||h&2)&&ne(e,"--highlight-color","var("+l[1]+")")},i(l){t||(P(r,l),t=!0)},o(l){R(r,l),t=!1},d(l){l&&o(e),r&&r.d(l)}}}function pe(c,e,t){let{$$slots:a={},$$scope:r}=e,{href:l}=e,{colorVar:h}=e;return c.$$set=m=>{"href"in m&&t(0,l=m.href),"colorVar"in m&&t(1,h=m.colorVar),"$$scope"in m&&t(2,r=m.$$scope)},[l,h,r,a]}class K extends te{constructor(e){super(),se(this,e,pe,$e,le,{href:0,colorVar:1})}}function ve(c){let e,t,a,r,l,h,m,f,v,g,T,$,A,k,B,M;return{c(){e=x("footer"),t=x("p"),a=x("a"),r=d("Twitter"),l=d(`
		•
		`),h=x("a"),m=d("Résumé"),f=H(),v=x("p"),g=d("© All rights reserved."),T=H(),$=x("p"),A=x("a"),k=d(`Built with
			`),B=x("img"),this.h()},l(q){e=E(q,"FOOTER",{class:!0});var y=p(e);t=E(y,"P",{class:!0});var w=p(t);a=E(w,"A",{class:!0,href:!0});var N=p(a);r=_(N,"Twitter"),N.forEach(o),l=_(w,`
		•
		`),h=E(w,"A",{class:!0,href:!0});var V=p(h);m=_(V,"Résumé"),V.forEach(o),w.forEach(o),f=j(y),v=E(y,"P",{class:!0});var U=p(v);g=_(U,"© All rights reserved."),U.forEach(o),T=j(y),$=E(y,"P",{});var I=p($);A=E(I,"A",{class:!0,href:!0});var J=p(A);k=_(J,`Built with
			`),B=E(J,"IMG",{src:!0,alt:!0,height:!0}),J.forEach(o),I.forEach(o),y.forEach(o),this.h()},h(){i(a,"class","link svelte-1oz7x3f"),i(a,"href","https://twitter.com/darrelhong"),i(h,"class","link svelte-1oz7x3f"),i(h,"href","https://drive.google.com/file/d/1GMBJHTfao0U6FabaA8RytJdRhRAT041S/view?usp=sharing"),i(t,"class","links"),i(v,"class","copyright svelte-1oz7x3f"),ue(B.src,M="/svelte_horizontal.svg")||i(B,"src",M),i(B,"alt","svelte-logo"),i(B,"height","15"),i(A,"class","built-with svelte-1oz7x3f"),i(A,"href","https://svelte.dev/"),i(e,"class","svelte-1oz7x3f")},m(q,y){z(q,e,y),n(e,t),n(t,a),n(a,r),n(t,l),n(t,h),n(h,m),n(e,f),n(e,v),n(v,g),n(e,T),n(e,$),n($,A),n(A,k),n(A,B)},p:Q,i:Q,o:Q,d(q){q&&o(e)}}}class we extends te{constructor(e){super(),se(this,e,null,ve,le,{})}}function xe(c){let e;return{c(){e=d("software engineer")},l(t){e=_(t,"software engineer")},m(t,a){z(t,e,a)},d(t){t&&o(e)}}}function Ee(c){let e;return{c(){e=d("building")},l(t){e=_(t,"building")},m(t,a){z(t,e,a)},d(t){t&&o(e)}}}function be(c){let e;return{c(){e=d("useful")},l(t){e=_(t,"useful")},m(t,a){z(t,e,a)},d(t){t&&o(e)}}}function ze(c){let e;return{c(){e=d("products")},l(t){e=_(t,"products")},m(t,a){z(t,e,a)},d(t){t&&o(e)}}}function Ae(c){let e;return{c(){e=d("GitHub")},l(t){e=_(t,"GitHub")},m(t,a){z(t,e,a)},d(t){t&&o(e)}}}function ke(c){let e;return{c(){e=d("LinkedIn")},l(t){e=_(t,"LinkedIn")},m(t,a){z(t,e,a)},d(t){t&&o(e)}}}function ye(c){let e,t,a,r,l,h,m,f,v,g,T,$,A,k,B,M,q,y,w,N,V,U,I,J,X,O,Y;return t=new _e({}),g=new K({props:{href:"https://github.com/darrelhong",colorVar:"--highlight-green",$$slots:{default:[xe]},$$scope:{ctx:c}}}),$=new K({props:{href:"https://hdb-resale-prices.fly.dev/resale/resale_prices",colorVar:"--highlight-blue",$$slots:{default:[Ee]},$$scope:{ctx:c}}}),k=new K({props:{href:"https://pizza-dough-calculator.pages.dev",colorVar:"--highlight-pink",$$slots:{default:[be]},$$scope:{ctx:c}}}),M=new K({props:{href:"https://supportlocal-sg.pages.dev",colorVar:"--highlight-purple",$$slots:{default:[ze]},$$scope:{ctx:c}}}),V=new K({props:{colorVar:"--highlight-github",href:"https://github.com/darrelhong",$$slots:{default:[Ae]},$$scope:{ctx:c}}}),I=new K({props:{colorVar:"--highlight-linkedin",href:"https://www.linkedin.com/in/darrelhong/",$$slots:{default:[ke]},$$scope:{ctx:c}}}),O=new we({}),{c(){e=H(),G(t.$$.fragment),a=H(),r=x("div"),l=x("h1"),h=d("Hi, I'm Darrel"),m=H(),f=x("p"),v=d("I'm an aspiring "),G(g.$$.fragment),T=d(` interested in
		`),G($.$$.fragment),A=H(),G(k.$$.fragment),B=H(),G(M.$$.fragment),q=d("."),y=H(),w=x("p"),N=d("Find me on "),G(V.$$.fragment),U=d(` and
		`),G(I.$$.fragment),J=d("."),X=H(),G(O.$$.fragment),this.h()},l(s){ge("svelte-jsf7bw",document.head).forEach(o),e=j(s),L(t.$$.fragment,s),a=j(s),r=E(s,"DIV",{class:!0});var F=p(r);l=E(F,"H1",{class:!0});var W=p(l);h=_(W,"Hi, I'm Darrel"),W.forEach(o),m=j(F),f=E(F,"P",{class:!0});var b=p(f);v=_(b,"I'm an aspiring "),L(g.$$.fragment,b),T=_(b,` interested in
		`),L($.$$.fragment,b),A=j(b),L(k.$$.fragment,b),B=j(b),L(M.$$.fragment,b),q=_(b,"."),b.forEach(o),y=j(F),w=E(F,"P",{class:!0});var D=p(w);N=_(D,"Find me on "),L(V.$$.fragment,D),U=_(D,` and
		`),L(I.$$.fragment,D),J=_(D,"."),D.forEach(o),F.forEach(o),X=j(s),L(O.$$.fragment,s),this.h()},h(){document.title="@darrelhong",i(l,"class","svelte-1syqci8"),i(f,"class","sentence svelte-1syqci8"),i(w,"class","find-me sentence svelte-1syqci8"),i(r,"class","container svelte-1syqci8")},m(s,u){z(s,e,u),S(t,s,u),z(s,a,u),z(s,r,u),n(r,l),n(l,h),n(r,m),n(r,f),n(f,v),S(g,f,null),n(f,T),S($,f,null),n(f,A),S(k,f,null),n(f,B),S(M,f,null),n(f,q),n(r,y),n(r,w),n(w,N),S(V,w,null),n(w,U),S(I,w,null),n(w,J),z(s,X,u),S(O,s,u),Y=!0},p(s,[u]){const F={};u&1&&(F.$$scope={dirty:u,ctx:s}),g.$set(F);const W={};u&1&&(W.$$scope={dirty:u,ctx:s}),$.$set(W);const b={};u&1&&(b.$$scope={dirty:u,ctx:s}),k.$set(b);const D={};u&1&&(D.$$scope={dirty:u,ctx:s}),M.$set(D);const ae={};u&1&&(ae.$$scope={dirty:u,ctx:s}),V.$set(ae);const re={};u&1&&(re.$$scope={dirty:u,ctx:s}),I.$set(re)},i(s){Y||(P(t.$$.fragment,s),P(g.$$.fragment,s),P($.$$.fragment,s),P(k.$$.fragment,s),P(M.$$.fragment,s),P(V.$$.fragment,s),P(I.$$.fragment,s),P(O.$$.fragment,s),Y=!0)},o(s){R(t.$$.fragment,s),R(g.$$.fragment,s),R($.$$.fragment,s),R(k.$$.fragment,s),R(M.$$.fragment,s),R(V.$$.fragment,s),R(I.$$.fragment,s),R(O.$$.fragment,s),Y=!1},d(s){s&&o(e),C(t,s),s&&o(a),s&&o(r),C(g),C($),C(k),C(M),C(V),C(I),s&&o(X),C(O,s)}}}class Me extends te{constructor(e){super(),se(this,e,null,ye,le,{})}}export{Me as component};