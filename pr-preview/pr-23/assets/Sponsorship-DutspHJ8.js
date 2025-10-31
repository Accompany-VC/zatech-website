import{d as c,j as s,P as a}from"./index-CecB_qOM.js";import{u as d}from"./useTranslation-C8By5bXO.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],N=c("award",u);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],b=c("check",v);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],M=c("heart",f);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],_=c("medal",g);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],q=c("trophy",C);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],l=c("user",z),A={Trophy:q,Award:N,Medal:_,Heart:M,User:l};function h({title:e,price:n,period:r,benefits:t,buttonText:i,accentColor:p,icon:m}){const{t:o}=d("sponsorshipSection"),k="https://zatech.slack.com/team/U896THM5J",x=A[m]||l;return s.jsxs("div",{className:"sponsorship-card",children:[s.jsx("div",{className:"accent-bar",style:{backgroundColor:p}}),s.jsxs("div",{className:"card-header","aria-label":e,children:[s.jsx(x,{className:"tier-icon",size:28,strokeWidth:2,"aria-hidden":"true"}),s.jsx("h2",{className:"tier-title",children:e})]}),s.jsxs("div",{className:"price-section",children:[s.jsx("span",{className:"price",children:n}),s.jsxs("span",{className:"period",children:["/",r]})]}),s.jsx("div",{className:"card-separator"}),s.jsx("ul",{className:"benefits-list",children:t.map((y,j)=>s.jsxs("li",{className:"benefit-item",children:[s.jsx(b,{className:"checkmark-icon",size:16,strokeWidth:3,"aria-hidden":"true"}),y]},j))}),s.jsx("p",{className:"sponsor-button-description",children:o("contactDescription")}),s.jsx("a",{className:"sponsor-button",href:k,target:"_blank",rel:"noopener noreferrer",children:i||o("button")})]})}h.propTypes={title:a.string.isRequired,price:a.string.isRequired,period:a.string.isRequired,benefits:a.arrayOf(a.string).isRequired,buttonText:a.string,accentColor:a.string,icon:a.string};function $(){const{t:e}=d("sponsorship"),r=`https://zatech.slack.com/team/${e("config.slackContactId")}`,t=e("tiers",{returnObjects:!0});return s.jsxs("div",{className:"sponsorship-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:e("header.title")}),s.jsx("p",{className:"subtitle",children:e("header.subtitle")})]}),s.jsxs("div",{className:"mission-section",children:[s.jsx("h2",{children:e("mission.title")}),s.jsx("p",{children:e("mission.description")})]}),s.jsx("div",{className:"tiers-container",children:Array.isArray(t)&&t.map(i=>s.jsx(h,{...i},i.title))}),s.jsxs("div",{className:"bottom-cta",children:[s.jsx("h2",{children:e("cta.title")}),s.jsx("p",{children:e("cta.description")}),s.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"cta-link",children:e("cta.linkText")})]})]})}export{$ as default};
