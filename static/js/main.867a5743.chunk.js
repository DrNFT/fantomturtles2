(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d,x,j,u,h,b,p,O,g,f=n(2),m=n(85),y=n.n(m),v=n(16),w=n.n(v),A=n(43),C=n(69),T=n(14),E=n(58),S=n(68),k=n.n(S),N=n(220),_=n.n(N),M=n(70),F=n(221),I=n(19),D={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},D),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},D),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},e),{},{account:t.payload.account});default:return e}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},K=Object(M.b)({blockchain:L,data:P}),U=[F.a],W=Object(M.c)(M.a.apply(void 0,U)),B=Object(M.d)(K,W),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},H=function(){return function(){var e=Object(A.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},z=function(e){return{type:"CONNECTION_FAILED",payload:e}},Q=function(e){return function(){var t=Object(A.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(H());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},G=n(15),X=G.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),q=G.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=G.a.div(a||(a=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=G.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=G.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=G.a.div(s||(s=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=G.a.p(l||(l=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=(G.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),G.a.p(x||(x=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ne=(G.a.div(j||(j=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(1)),ce=G.a.button(u||(u=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=G.a.button(h||(h=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ae=G.a.div(b||(b=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),oe=G.a.img(p||(p=Object(T.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ie=G.a.img(O||(O=Object(T.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),se=G.a.a(g||(g=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var le=function(){var e,t,n=Object(E.b)(),c=Object(E.c)((function(e){return e.blockchain})),r=Object(E.c)((function(e){return e.data})),a=Object(f.useState)(!1),o=Object(C.a)(a,2),i=o[0],s=o[1],l=Object(f.useState)("Click buy to mint your NFT."),d=Object(C.a)(l,2),x=d[0],j=d[1],u=Object(f.useState)(1),h=Object(C.a)(u,2),b=h[0],p=h[1],O=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(C.a)(O,2),m=g[0],y=g[1],v=function(){""!==c.account&&null!==c.smartContract&&n(H(c.account))},T=function(){var e=Object(A.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,y(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){T()}),[]),Object(f.useEffect)((function(){v()}),[c.account]),Object(ne.jsx)(X,{children:Object(ne.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ne.jsx)(oe,{alt:"logo",src:"/config/images/logo.png"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("b",{children:"A super secret society of 4444 3D turtles living in the metaverse on a low gas ERC-721 contract. This collection is here to turn up the heat and celebrate NFTs and collectors everywhere!"})}),Object(ne.jsx)(Z,{}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(ne.jsx)("u",{children:"Enroll Now:"}),Object(ne.jsx)("li",{children:"Pre-sale mint on Fantom: 15 FTM"}),Object(ne.jsx)("li",{children:"Public Sale: 20 FTM"})]}),Object(ne.jsxs)(ae,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ie,{alt:"example",src:"/config/images/example.gif"})}),Object(ne.jsx)(Z,{}),Object(ne.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",m.MAX_SUPPLY]}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)(se,{target:"_blank",href:m.SCAN_LINK,children:(e=m.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ne.jsx)(J,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(se,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(ne.jsx)(q,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ne.jsx)(J,{}),""===c.account||null===c.smartContract?Object(ne.jsxs)($,{ai:"center",jc:"center",children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(ce,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(A.a)(w.a.mark((function e(t){var n,c,r,a,o,i,s,l,d;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return k.a.setProvider(i),s=new _.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new k.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){t(Q(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(z("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(z("Something went wrong."));case 31:e.next=34;break;case 33:t(z("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:x}),Object(ne.jsx)(V,{}),Object(ne.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(ne.jsx)(re,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=b-1;e<1&&(e=1),p(e)}()},children:"-"}),Object(ne.jsx)(V,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(ne.jsx)(V,{}),Object(ne.jsx)(re,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=b+1;e>10&&(e=10),p(e)}()},children:"+"})]}),Object(ne.jsx)(J,{}),Object(ne.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(ne.jsx)(ce,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=m.WEI_COST,t=m.GAS_LIMIT,r=String(e*b),a=String(t*b);console.log("Cost: ",r),console.log("Gas limit: ",a),j("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(a),to:m.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),j("Sorry, something went wrong please try again later."),s(!1)})).then((function(e){console.log(e),j("WOW, the ".concat(m.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(H(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(ne.jsx)(V,{})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ie,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(ne.jsx)(V,{}),Object(ne.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",m.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",m.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(ie,{alt:"hidden",src:"/config/images/hiddenturtle.png"}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("u",{children:"Roadmap"})}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("b",{children:"Q1 2022:"})}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(ne.jsx)("li",{children:" initial renderings and marketing."}),Object(ne.jsx)("li",{children:"Fantom launch (60 NFTs allocated for giveaways and marketing)."}),Object(ne.jsx)("li",{children:"Mint cost for pre-sale is 15 FTM and public sale is 20 FTM."}),Object(ne.jsx)("li",{children:"Marketplace listings for Paintswap, NFTkey, and Artion."}),Object(ne.jsx)("li",{children:"Continued marketing and promotion on Fantom, as well as initial Ethereum marketing."})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("b",{children:"Q2 2022:"})}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(ne.jsx)("li",{children:"Launch of the Ethereum collection as a free mint (fee of 0.005 for permanent storage of metadata on Pinata, as well as for marketing). Buyers will pay for their own gas."}),Object(ne.jsx)("li",{children:"Continued marketing of both collections including collaborations."})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("b",{children:"Q3 2022:"})}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(ne.jsx)("li",{children:" Initial token launch. The token will serve dual purposes to reward holders as well as to serve as a transaction currency for a future NFT marketplace. "}),Object(ne.jsx)("li",{children:" Begin NFT marketplace work. "})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("b",{children:"Q4 2022:"})}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(ne.jsx)("li",{children:"   Beta launch of NFT marketplace with both collections as the initial listings. This will drive value, as well as allow the community to decide on which collections are featured."}),Object(ne.jsx)("li",{children:"    Alpha launch: percentages of transaction fees will be re-distrubted on a recurring basis to holders as native token currency."})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("u",{children:" Meet the Team "})}),Object(ne.jsx)(ie,{alt:"14",src:"/config/images/14.png"}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)("i",{children:"Hi, my name is Yoshi and I have been in crypto since 2018 and creating NFTs since 2019. I primarily work on the Fantom and Ethereum blockchains. This project was created independently by myself, with the community at the forefront. I hope you enjoy this collection and the many exciting things in store for you all! Paintswap will be the official marketplace for the FTM collection, and Opensea will be the official one for the ETH chain. However, the collection will be listed on as many marketplaces as possible, as well as our own in the future!"})})]})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(533);y.a.render(Object(ne.jsx)(E.a,{store:B,children:Object(ne.jsx)(le,{})}),document.getElementById("root")),de()}},[[534,1,2]]]);
//# sourceMappingURL=main.867a5743.chunk.js.map
