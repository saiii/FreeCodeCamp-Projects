(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{19:function(t,e,o){t.exports=o(43)},2:function(t,e,o){t.exports={Quotes:"Quotes_Quotes__1uskm",Button:"Quotes_Button__2Ziqp",SocialMedia:"Quotes_SocialMedia__fQkK3",Author:"Quotes_Author__2mMDX",Text:"Quotes_Text__KhSWo"}},24:function(t,e,o){},25:function(t,e,o){},43:function(t,e,o){"use strict";o.r(e);var a=o(0),r=o.n(a),n=o(12),s=o.n(n),u=(o(24),o(25),o(13)),l=o(14),i=o(17),c=o(15),h=o(18),m=o(16),d=o.n(m),b=o(2),v=o.n(b),f=function(t){function e(){var t,o;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(o=Object(i.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(r)))).state={quotes:null,color:null,randomNumber:null,colors:["#fa3c5a","#447ac4","#5e73d1","#194052","#2d999f","#ff7142","#db7164","#aabec2","#e3c5fd","#84d8f1"],randomColor:null,hover:!1,hoverTwitter:!1,hoverTumber:!1},o.randomHandler=function(){o.setState({randomNumber:Math.floor(Math.random()*o.state.quotes.length)}),o.setState({randomColor:o.state.colors[Math.floor(Math.random()*o.state.colors.length)]})},o.hoverHandler=function(){o.setState((function(t){return{hover:!t.hover}}))},o.hoverTwitterHandler=function(){o.setState((function(t){return{hoverTwitter:!t.hoverTwitter}}))},o.hoverTumblrHandler=function(){o.setState((function(t){return{hoverTumblr:!t.hoverTumblr}}))},o}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;d.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){t.setState({quotes:e.data.quotes}),t.setState({randomNumber:Math.floor(Math.random()*t.state.quotes.length)})})),this.setState({randomColor:this.state.colors[Math.floor(Math.random()*this.state.colors.length)]})}},{key:"shouldComponentUpdate",value:function(t,e){if(this.state.randomNumber!==t.randomNumber)return!0}},{key:"render",value:function(){var t=r.a.createElement("p",{id:"text"},"Loading"),e=r.a.createElement("p",{id:"author"},"Loading"),o=null,a=null,n=null,s=null,u=null;return this.state.quotes&&(document.body.style.backgroundColor=this.state.randomColor,t=r.a.createElement("p",{id:"text",className:v.a.Text,style:{color:this.state.randomColor}},r.a.createElement("span",null,'"'),this.state.quotes[Number(this.state.randomNumber)].quote),e=r.a.createElement("p",{id:"author",className:v.a.Author,style:{color:this.state.randomColor}},"- ",this.state.quotes[Number(this.state.randomNumber)].author),o='https://twitter.com/intent/tweet?hashtags=quotes&text="'+this.state.quotes[Number(this.state.randomNumber)].quote+'" '+this.state.quotes[Number(this.state.randomNumber)].author,a="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption="+this.state.quotes[Number(this.state.randomNumber)].author+"&content="+this.state.quotes[Number(this.state.randomNumber)].quote+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",document.getElementsByTagName("button").onmouseover=function(){},n=this.state.hover?{opacity:"0.6",backgroundColor:this.state.randomColor}:{opacity:"1",backgroundColor:this.state.randomColor},s=this.state.hoverTwitter?{opacity:"0.6",backgroundColor:this.state.randomColor}:{opacity:"1",backgroundColor:this.state.randomColor},u=this.state.hoverTumblr?{opacity:"0.6",backgroundColor:this.state.randomColor}:{opacity:"1",backgroundColor:this.state.randomColor}),r.a.createElement("div",{id:"quote-box",className:v.a.Quotes},t,e,r.a.createElement("div",{className:v.a.Button},r.a.createElement("div",{className:v.a.SocialMedia},r.a.createElement("a",{id:"tweet-quote",href:o,target:"_blank",style:s,onMouseOver:this.hoverTwitterHandler,onMouseOut:this.hoverTwitterHandler},r.a.createElement("div",null,r.a.createElement("i",{class:"fab fa-twitter"}))),r.a.createElement("a",{href:a,target:"_blank",style:u,onMouseOver:this.hoverTumblrHandler,onMouseOut:this.hoverTumblrHandler},r.a.createElement("div",null,r.a.createElement("i",{class:"fab fa-tumblr"})))),r.a.createElement("div",null,r.a.createElement("button",{id:"new-quote",onClick:this.randomHandler,onMouseOver:this.hoverHandler,onMouseOut:this.hoverHandler,style:n},"New quote"))))}}]),e}(r.a.Component);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.4d2138af.chunk.js.map