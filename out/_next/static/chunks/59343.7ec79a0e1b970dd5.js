"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59343],{47822:function(n,e,t){t.d(e,{e:function(){return a}});let a=(0,t(85738).ax)({id:56,name:"BNB Smart Chain Mainnet",nativeCurrency:{name:"BNB Chain Native Token",symbol:"BNB",decimals:18},blockExplorers:[{name:"bscscan",url:"https://bscscan.com"}]})},71027:function(n,e,t){t.d(e,{F:function(){return a}});let a=(0,t(85738).ax)({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}],testnet:!0})},81604:function(n,e,t){t.d(e,{M1:function(){return s}});var a=t(94293);let r=[{type:"address",name:"owner"},{type:"address",name:"spender"}],c=[{type:"uint256"}];async function s(n){return(0,a.readContract)({contract:n.contract,method:["0xdd62ed3e",r,c],params:[n.owner,n.spender]})}},46188:function(n,e,t){t.d(e,{B:function(){return c}});var a=t(71551),r=t(46510);async function c(n){let e=await (0,a.sendTransaction)(n);return(0,r.h)(e)}}}]);