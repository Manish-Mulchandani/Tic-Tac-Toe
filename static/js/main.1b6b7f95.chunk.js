(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,function(e,t,r){e.exports=r(17)},,,,,function(e,t,r){},function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(8),l=r.n(i),s=(r(14),r(15),r(16),r(6)),u=r(1),o=r(2),c=r(3),h=r(4),f=r(5);function m(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(f.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"border-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"border-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"border-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(a.Component),v=function(e){Object(f.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).state={xIsNext:!0,stepNumber:0,difficulty:"Easy",history:[{squares:Array(9).fill(null)}]},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a}return Object(o.a)(r,[{key:"handleChange",value:function(e){this.setState({difficulty:e.target.value,stepNumber:0,history:[{squares:Array(9).fill(null)}]})}},{key:"handleClick",value:function(e){console.log(e);var t=this.state.stepNumber,r=this.state.history.slice(0,t+1),a=r[r.length-1].squares.slice(),n=p(a);if(!n&&!a[e])if(a[e]="X",n=p(a))this.setState({history:r.concat({squares:a}),xIsNext:!this.state.xIsNext,stepNumber:r.length});else{var i=function e(t,r,a){if(1===r){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]],i=0;i<n.length;i++){var l=Object(s.a)(n[i],3),u=l[0],o=l[1],c=l[2];if(t[u]&&t[u]===t[o]&&!t[c]&&"O"===t[u])return c;if(t[u]&&t[u]===t[c]&&!t[o]&&"O"===t[c])return o;if(t[o]&&t[o]===t[c]&&!t[u]&&"O"===t[o])return u}for(var h=0;h<n.length;h++){var f=Object(s.a)(n[h],3),m=f[0],d=f[1],v=f[2];if(t[m]&&t[m]===t[d]&&!t[v]&&"X"===t[m])return v;if(t[m]&&t[m]===t[v]&&!t[d]&&"X"===t[v])return d;if(t[d]&&t[d]===t[v]&&!t[m]&&"X"===t[d])return m}}if(2===r&&"Easy"===a||4===r&&"Medium"===a||6===r&&"Hard"===a){for(var E=0;E<9;E++)if(!t[E]){t[E]="X";var b=p(t);if(b&&"X"===b)return t[E]=null,null;t[E]=null}return-1}for(var y=[],g=[],N=0,q=0;q<9;q++)if(!t[q]){if(N=1,r%2===1){t[q]="O";var k=p(t);if(k&&"O"===k)y.push(q);else{var O=e(t,r+1,a);O&&(-1===O?g.push(q):y.push(q))}}else{t[q]="X";var x=p(t);if(x&&"X"===x)return t[q]=null,null;var C=e(t,r+1,a);if(!C)return t[q]=null,null;-1===C&&g.push(q)}t[q]=null}if(0===N)return-1;if(0!==y.length){var S=y.length,j=Math.floor(Math.random()*S);return y[j]}if(0!==g.length){if(r%2===1){var w=g.length,X=Math.floor(Math.random()*w);return g[X]}return-1}if(3===r)return null;for(var M=0;M<9;M++)if(!t[M])return M}(a,1,this.state.difficulty);a[i]="O",this.setState({history:r.concat({squares:a}),xIsNext:!this.state.xIsNext,stepNumber:r.length})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],i=p(a.squares),l=r.map((function(e,r){var a=r?"Go to #"+r:"Start new game";return n.a.createElement("li",{key:r},n.a.createElement("button",{onClick:function(){t.jumpTo(r)}},a))})),s=this.state.stepNumber;return e=i?"Winner is "+i:s<5?"Next Player is X":"Game Drawn",n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"difficulty"},n.a.createElement("label",null,"Choose the difficulty:"," ",n.a.createElement("select",{value:this.state.difficulty,onChange:this.handleChange},n.a.createElement("option",{value:"Easy"},"Easy"),n.a.createElement("option",{value:"Medium"},"Medium"),n.a.createElement("option",{value:"Hard"},"Hard"),n.a.createElement("option",{value:"Expert"},"Expert")))),n.a.createElement("div",{className:"game-board"},n.a.createElement(d,{onClick:function(e){t.handleClick(e)},squares:a.squares})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ul",null,l)))}}]),r}(a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),n=a[0],i=a[1],l=a[2];if(e[n]&&e[n]===e[i]&&e[n]===e[l])return e[n]}return null}var E=function(){return n.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1b6b7f95.chunk.js.map