(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(4186)}])},8573:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);let SearchButton=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{...props,className:"h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-green bg-gradient-to-r from-lightGreen to-lightBlue hover:text-darkBlue inline-flex justify-center items-center",children:[" ","Search"]});__webpack_exports__.default=SearchButton},5203:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);let SearchInput=param=>{let{forwardRef,props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{...props,type:"text",ref:forwardRef,className:"w-full h-11 rounded-[8rem] outline-none px-5 py-3 placeholder:text-slate-500 text-[1.1rem] text-black/50",placeholder:"Search for a movie, tv show, person......"})};__webpack_exports__.default=SearchInput},5202:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294);let Switch=param=>{let{items,onToggle}=param,[isToggled,setToggle]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[item1Width,setItem1Width]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),[item2Width,setItem2Width]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),item1Ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),item2Ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),handleToggle=toggleState=>{setToggle(toggleState)};(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{setItem1Width(item1Ref.current.offsetWidth),setItem2Width(item2Ref.current.offsetWidth)},[]),Array.isArray(items)&&onToggle(isToggled?items[1]:items[0]);let activeTextColor="bg-clip-text text-transparent text-green bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"hover: cursor-pointer h-8 border-solid border-darkBlue rounded-[30px] border-[1px] font-semibold flex items-center relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:item1Ref,onClick:handleToggle.bind(null,!1),className:"py-1 px-5 h-8 rounded-[30px] ".concat(isToggled||activeTextColor),children:null==items?void 0:items[0]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:item2Ref,onClick(){handleToggle(!0)},className:"py-1 px-5 h-8 rounded-[30px] ".concat(isToggled&&activeTextColor),children:null==items?void 0:items[1]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-8 w-20 bg-darkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in",style:isToggled?{left:"".concat(item1Width,"px"),width:"".concat(item2Width+2,"px")}:{left:"0",width:"".concat(item1Width,"px")}})]})};__webpack_exports__.default=Switch},3024:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_baseUI_Input_SearchInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5203),_baseUI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8573);let Banner=()=>{let searchInputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),handleSearch=()=>{alert("You typed ".concat(searchInputRef.current.value))},handleKeyDown=event=>{"Enter"===event.key&&handleSearch()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-[300px] bg-banner bg-cover py-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col gap-10 px-10 py-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"font-extrabold text-5xl",children:"Welcome."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"font-semibold text-[2rem] leading-1",children:"Millions of movies, TV shows and people to discover. Explore now."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_baseUI_Input_SearchInput__WEBPACK_IMPORTED_MODULE_2__.default,{ref:searchInputRef,onKeyDown:handleKeyDown}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute top-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_baseUI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_3__.default,{onClick:handleSearch})})]})]})})};__webpack_exports__.default=Banner},3924:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var _layouts_Directory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(154);let Header=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{className:"p-8 bg-darkBlue text-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_Directory__WEBPACK_IMPORTED_MODULE_2__.default,{})});__webpack_exports__.default=Header},4220:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var _layouts_NavBar_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1940);let Header=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{className:"bg-darkBlue",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_NavBar_index__WEBPACK_IMPORTED_MODULE_2__.default,{})});__webpack_exports__.default=Header},2427:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);let getPosterURL=posterpath=>"https://www.themoviedb.org/t/p/w220_and_h330_face/".concat(posterpath),MovieCard=param=>{let{poster_path,name,first_air_date}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col pl-5 gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:getPosterURL(poster_path),alt:name,className:"w-[150px] h-[225px] shadow-sm rounded-md"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col px-3 w-[150px]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:"font-bold",children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-normal text-slate400",children:first_air_date})]})]})};__webpack_exports__.default=MovieCard},2630:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_MovieCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2427);let MovieList=()=>{let[movies,setMovies]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let fetchMovies=async()=>{let response=await fetch("https://api.themoviedb.org/3/tv/popular?api_key=7c68e1cb1635d0fc032672a17095c7fe&language=en-US&page=1"),data=await response.json();setMovies(data.results)};fetchMovies()},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex pb-5 px-5 overflow-x-scroll",children:movies.map((movie,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MovieCard__WEBPACK_IMPORTED_MODULE_2__.default,{...movie},index))})};__webpack_exports__.default=MovieList},4186:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_components_Banner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3024),_components_Footer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3924),_components_Header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4220),_components_Movies_MovieList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2630),_layouts_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8123),_layouts_Section__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2456);function Home(){let handleToggledValue=selectedValue=>{console.log(selectedValue)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("head",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:"The Movie Database (TMDB)"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Container__WEBPACK_IMPORTED_MODULE_5__.default,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Banner__WEBPACK_IMPORTED_MODULE_1__.default,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_Section__WEBPACK_IMPORTED_MODULE_6__.default,{title:"Free To Watch",items:["Movies","TV Shows"],onToggle:handleToggledValue,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Movies_MovieList__WEBPACK_IMPORTED_MODULE_4__.default,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default,{})]})}},8123:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);let Container=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"max-w-[1300px] mx-auto",children:children})};__webpack_exports__.default=Container},154:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);let Directory=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"md:flex md:justify-center flex items-end mb-6 md:mb-10 max-w-[1300px] mx-auto",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mr-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"#",className:"flex items-end mb-10",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"The Movie Databse (TMDB)",width:"130",height:"130"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"rounded p-2.5 px-5 font-sans font-bold text-lightBlue bg-white ",children:"JOIN THE COMMUNITY"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-start ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mr-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"font-bold ",children:"THE BASICS "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:""}),"About TMDB"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Contact Us"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Support Forum"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"API"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"System Status"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mr-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"font-bold",children:"GET INVOLVED "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Contribution Bible"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Add New Movie"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Add New TV Show"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mr-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"font-bold",children:"COMMUNITY "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Guidelines"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Discussions"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Leaderboad"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Twitter"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mr-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"font-bold",children:"LEGAL "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Term of Use"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"API Terms of Use"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Provacy Policy"})]})]})]})]});__webpack_exports__.default=Directory},1940:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9603),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9417);let NavBar=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:"h-16 bg-darkBlue flex text-white font-semibold justify-between items-center gap max-w-[1300px] mx-auto px-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-7 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"http://localhost:3000/",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"h-5 min-w-[154px]",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"logo"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"overflow-hidden float-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"peer relative flex ",children:"Movies"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Popular"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Now Playing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Upcoming"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Top Rated"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"overflow-hidden float-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"peer relative flex ",children:"TV Shows"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"#",children:"Popular"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Airing Today"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"On TV"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Top Rated"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"overflow-hidden float-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"peer relative flex ",children:"People"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Popular People"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"overflow-hidden float-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"peer relative flex ",children:"More"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Discussions"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Leaderboard"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"Support"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex",href:"",children:"API"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-7 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.r8p,size:"lg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"border-white rounded-[3px] py-[3px] px-[5px] border-[1px] hover:bg-white hover:text-darkBlue",children:"EN"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"",children:"Login"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"",children:"Join TMDB"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.wn1})})]})]});__webpack_exports__.default=NavBar},2456:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_baseUI_Switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5202);let Section=param=>{let{title,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{className:"pt-[30px]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center gap-5 px-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"font-semibold text-2xl",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_baseUI_Switch__WEBPACK_IMPORTED_MODULE_1__.default,{...props})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"pt-5",children:children})]})};__webpack_exports__.default=Section}},function(__webpack_require__){__webpack_require__.O(0,[976,603,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);