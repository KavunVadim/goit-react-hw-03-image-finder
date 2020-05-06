(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,a,t){e.exports=t(68)},27:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=(t(27),t(7)),s=t.n(o),m=t(8),i=t(19),u=t(3),g=t(4),h=t(5),p=t(6),d=t(20),f=t.n(d),v=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:""},e.inputChange=function(a){e.setState({name:a.target.value})},e.formSubmit=function(a){var t=e.state.name;a.preventDefault(),t&&(e.props.onSubmit(e.state.name),e.setState({name:""}))},e}return Object(g.a)(t,[{key:"render",value:function(){var e=this.state.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.formSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.inputChange}))))}}]),t}(n.Component),E=function(e){var a=e.image,t=e.openModal,n=a.webformatURL,c=a.largeImageURL,l=a.tags;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{className:"ImageGalleryItem-image",src:n,alt:l,onClick:function(){return t(c,l)}})))},b=function(e){var a=e.images,t=e.openModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},a.map((function(e){return r.a.createElement(E,{key:e.id,image:e,openModal:t})}))))},S=function(e){var a=e.largeImageUrl,t=e.tags,c=e.closeModal;Object(n.useEffect)((function(){return window.addEventListener("keydown",l),function(){window.removeEventListener("keydown",l)}}),[]);var l=function(e){"Escape"===e.code&&c()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Overlay",onClick:function(e){"IMG"!==e.target.tagName&&c()}},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:a,alt:t}))))},y=function(e){var a=e.loadMore;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"Button",onClick:a},"Load more"))},O=t(21),w=t.n(O);t(67);function N(){return r.a.createElement(w.a,{type:"Oval",color:"#00BFFF",height:200,width:200,timeout:3e3,style:{marginTop:"10%"}})}var I="15710546-4d802d844bffb0342b908b572",M=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={images:[],searchName:"",currentPage:1,largeImageUrl:"",tags:"",loader:!1,error:!1,isOpen:!1},e.getImages=Object(i.a)(s.a.mark((function a(){var t,n,r,c,l,o=arguments;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=e.state,r=n.searchName,c=n.images,e.setState({loader:!0}),a.prev=3,a.next=6,f.a.get("https://pixabay.com/api/?q=".concat(r,"&page=").concat(t,"&per_page=12&lang=ru&key=").concat(I));case 6:l=a.sent,e.setState({images:[].concat(Object(m.a)(c),Object(m.a)(l.data.hits))}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),console.log("ERROR GET");case 13:return a.prev=13,e.setState({loader:!1}),a.finish(13);case 16:case"end":return a.stop()}}),a,null,[[3,10,13,16]])}))),e.openModal=function(a,t){e.setState({tags:t,largeImageUrl:a,isOpen:!0})},e.closeModal=function(){e.setState({largeImageUrl:"",isOpen:!1})},e.onSubmit=function(a){e.state.searchName!==a&&e.setState({searchName:a,images:[],currentPage:1})},e.loadMore=function(){var a=e.state.currentPage+1;e.getImages(a),e.setState({currentPage:a})},e}return Object(g.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.searchName,r=t.images;a.searchName!==n&&this.getImages(),a.images===r&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isOpen,n=e.loader;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onSubmit:this.onSubmit}),n&&r.a.createElement(N,null),!n&&a.length>0&&r.a.createElement(b,{images:a,openModal:this.openModal}),t&&r.a.createElement(S,{closeModal:this.closeModal,largeImageUrl:this.state.largeImageUrl,tags:this.state.tags}),!!a.length&&!n&&r.a.createElement(y,{loadMore:this.loadMore}))}}]),t}(n.Component);var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.31641def.chunk.js.map