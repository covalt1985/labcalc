(this.webpackJsonplabcalc=this.webpackJsonplabcalc||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(8),r=n.n(i),c=(n(13),n(3)),u=n(4),l=n(2),o=n(6),h=n(5),d=(n(14),n(15),{homa:function(){var t=document.getElementsByClassName("homa");return(t[0].value*t[1].value/405).toFixed(1)},caCor:function(){var t=document.getElementsByClassName("caCor");return(.08*(40-t[1].value)+ +t[0].value).toFixed(2)},caCr:function(){var t=document.getElementsByClassName("caCr");return Math.floor(1e3*t[0].value/t[1].value)},prl:function(){var t=document.getElementsByClassName("prl");return Math.round(2*t[1].value*100/t[0].value)}}),m=function(t,e){var n=0===e;return{homa:n?"Glukoza mg/dl":"Insulina uIU/ml",caCor:n?"Wap\u0144 mg/dl":"Albumina g/l",caCr:n?"Wap\u0144 w moczu mg/dl":"Kreat. w moczu mg/dl",prl:n?"Prolaktyna":"Prolaktyna po precypitacji"}[t]},p=(n(16),n(0)),v=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={},s.handleKeyPress=s.handleKeyPress.bind(Object(l.a)(s)),s}return Object(u.a)(n,[{key:"handleKeyPress",value:function(t){return isNaN(t.key)&&"."!==t.key&&t.preventDefault(),"Enter"===t.key?this.props.enter():""}},{key:"createInputs",value:function(){for(var t=[],e=0;t.length<this.props.inputsNum;)t.push(Object(p.jsx)(a.a.Fragment,{children:Object(p.jsxs)("div",{style:{width:"100%"},children:[Object(p.jsx)("input",{type:"number",className:this.props.menuTest,onKeyPress:this.handleKeyPress,disabled:this.props.menuTest!==this.props.activeTest}),Object(p.jsx)("span",{children:m(this.props.menuTest,e)})," "]})},"".concat(this.props.menuTest).concat(e))),e+=1;return t}},{key:"render",value:function(){return Object(p.jsx)("div",{style:{display:"flex"},children:this.createInputs()})}}]),n}(s.Component),b=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={activeTest:"",result:"",unit:""},s.handleTestClick=s.handleTestClick.bind(Object(l.a)(s)),s.handleButtonClick=s.handleButtonClick.bind(Object(l.a)(s)),s.reset=s.reset.bind(Object(l.a)(s)),s}return Object(u.a)(n,[{key:"handleTestClick",value:function(t){if(!this.props.isClicked){var e=document.querySelectorAll("li");e.forEach((function(e){return e!==t.target?void e.classList.add("goodbye"):e.classList.add("hello")})),this.props.renderClickedItem(t.target.innerText)}}},{key:"handleButtonClick",value:function(){this.restartResultAnimation();var t=this.props.activeItem(),e=Array.from(document.getElementsByClassName(this.state.activeTest)),n=d[this.state.activeTest]();e.some((function(t){return!t.value}))&&(n="brak danych"),this.setState({result:n,unit:n&&!isNaN(n)?t[0].unit:""})}},{key:"restartResultAnimation",value:function(){var t=document.querySelector("h1");t.classList.remove("clicked"),t.offsetWidth,t.classList.add("clicked")}},{key:"componentDidUpdate",value:function(t){var e=this.props.activeItem();return t.isClicked!==this.props.isClicked?this.setState({activeTest:e?e[0].shorthand:"",result:"",unit:""}):""}},{key:"reset",value:function(){document.querySelectorAll("li").forEach((function(t){t.classList.remove("goodbye","hello")})),document.querySelectorAll("input").forEach((function(t){t.value=""})),this.props.resetState()}},{key:"render",value:function(){var t=this,e="count ".concat(this.props.isClicked?"clicked":"");return Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsxs)("ul",{className:"menu",children:[this.props.menuItems.map((function(e){return Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsx)("li",{onClick:t.handleTestClick,children:e.name}),Object(p.jsx)(v,{enter:t.handleButtonClick,menuTest:e.shorthand,inputsNum:e.inputsNum,activeTest:t.state.activeTest})]},e.name)})),Object(p.jsxs)("section",{className:"buttonContainer",children:[Object(p.jsx)("button",{className:e,onClick:this.handleButtonClick,children:"Oblicz"}),Object(p.jsx)("button",{className:e,onClick:this.reset,children:"Wr\xf3\u0107"})]}),Object(p.jsx)("h1",{className:this.props.isClicked?"clicked":"",children:"Wynik: ".concat(this.state.result," ").concat(this.state.unit)})]})})}}]),n}(s.Component),j=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={item:"",isClicked:!1},s.renderMenuItem=s.renderMenuItem.bind(Object(l.a)(s)),s.passShorthand=s.passShorthand.bind(Object(l.a)(s)),s.resetState=s.resetState.bind(Object(l.a)(s)),s}return Object(u.a)(n,[{key:"renderMenuItem",value:function(t){this.setState({item:[t],isClicked:!0})}},{key:"passShorthand",value:function(){var t=this,e=this.props.tests.filter((function(e){return e.testName===t.state.item[0]?{shorthand:e.shorthand,unit:e.unit}:""}));return this.state.isClicked?e:""}},{key:"resetState",value:function(){this.setState({isClicked:!1,item:""})}},{key:"render",value:function(){var t=this.state.isClicked;return Object(p.jsx)("div",{children:Object(p.jsx)(b,{menuItems:this.props.tests.map((function(t){return{name:t.testName,shorthand:t.shorthand,inputsNum:t.inputs}})),renderClickedItem:this.renderMenuItem,activeItem:this.passShorthand,isClicked:t,resetState:this.resetState})})}}]),n}(s.Component);j.defaultProps={tests:[{testName:"HOMA IR",shorthand:"homa",inputs:2,unit:""},{testName:"Wap\u0144 Skorygowany",shorthand:"caCor",inputs:2,unit:"mg/dl"},{testName:"Wap\u0144 / g Kreatyniny",shorthand:"caCr",inputs:2,unit:"mg/g"},{testName:"Odzysk Prolaktyny",shorthand:"prl",inputs:2,unit:"%"}]};var k=j,f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),s(t),a(t),i(t),r(t)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.2acaa213.chunk.js.map