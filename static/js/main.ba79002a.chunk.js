(this["webpackJsonptest2-app"]=this["webpackJsonptest2-app"]||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),r=n.n(a),c=n(16),s=n.n(c),o=n(12),l=(n(76),n(77),n(10)),d=(n(78),n(22)),u=n(13),j=n(17),m=n(66),h=function(){var e=Object(a.useContext)(Q).cart;return Object(i.jsxs)("nav",{className:"navbar sticky-top navbar-expand-sm bg-primary",children:[Object(i.jsx)("h3",{className:"font-weight-bold text-white",children:"DigiMall"}),Object(i.jsx)("ul",{className:"navbar-nav align-item-center",children:Object(i.jsx)("li",{className:"navbar-item ml-5",children:Object(i.jsx)(o.b,{to:"/",className:"nav-link bg-dark text-white rounded m-2 p-1",children:"Products"})})}),Object(i.jsx)(o.b,{to:"/cart",className:"ml-auto",children:Object(i.jsxs)(m.a,{variant:"dark",className:"rounded",children:[" My Cart ",Object(i.jsx)("span",{className:"border bg-danger rounded-circle px-2",children:e.length})]})})]})},b=r.a.memo(h),p=n(18),g=n(100),x=n(95),O=n(99),f=n(96),y=n(94),C=n(70),v=function(e){var t=e.quantity,n=e.setQuantity,a=e.availableQuantity,r=[];if(a<3)for(var c=1;c<=a;c++)r.push(c);else r=[1,2,3];return Object(i.jsxs)(i.Fragment,{children:["Select Quantity:",Object(i.jsx)(y.a,{size:"sm",variant:"dark",title:t,children:r.map((function(e){return Object(i.jsx)(C.a.Item,{onClick:function(){return n(e)},children:e},e)}))})]})},w=r.a.memo(v),k=n(98);function N(){var e=Object(j.a)(["\n  border-radius: 20px;\n  width:200px;\n  height:200px;\n"]);return N=function(){return e},e}var P=p.a.img(N()),S=function(e){var t=e.show,n=e.setShow,a=e.imgUrl,r=e.title,c=e.price,s=e.quantity,l=function(){return n(!1)};return Object(i.jsxs)(k.a,{show:t,onHide:l,size:"sm",className:"b-secondary",children:[Object(i.jsx)(k.a.Header,{closeButton:!0,children:Object(i.jsx)(x.a,{variant:"success",children:"Item Addedd To Cart"})}),Object(i.jsxs)(k.a.Body,{children:[Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)(P,{src:a})}),Object(i.jsx)(k.a.Title,{className:"text-center border m-1 rounded",children:r.toUpperCase()}),Object(i.jsx)("h6",{className:"text-center",children:Object(i.jsxs)("i",{children:["Rate: \u20b9",c]})}),Object(i.jsx)("h6",{className:"text-center",children:Object(i.jsxs)("i",{children:["No Of Items: ",s]})}),Object(i.jsx)("h5",{className:"text-center",children:Object(i.jsxs)("i",{children:["Total Price: \u20b9",c*s]})})]}),Object(i.jsxs)(k.a.Footer,{className:"d-flex justify-content-between bg-light",children:[Object(i.jsx)(o.b,{to:"/",children:Object(i.jsx)(m.a,{variant:"secondary",onClick:l,size:"sm",children:"Continue Shopping"})}),Object(i.jsx)(o.b,{to:"/cart",children:Object(i.jsx)(m.a,{variant:"primary",size:"sm",children:"Go To Cart"})})]})]})},M=r.a.memo(S);function I(){var e=Object(j.a)(["\n  border-radius: 20px;\n  width:200px;\n  height:200px;\n  margin: 0 auto 1em auto;\n"]);return I=function(){return e},e}function T(){var e=Object(j.a)(["\n  border-radius: 20px;\n  width:600px;\n"]);return T=function(){return e},e}var B=Object(p.a)(g.a)(T()),q=Object(p.a)(g.a.Img)(I()),U=function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(u.a)(c,2),l=s[0],j=s[1],h=Object(a.useContext)(Q),b=h.productDetails,p=h.cart,y=h.setCart,C=h.setTotal,v=h.total,k=b.id,N=b.imgUrl,P=b.title,S=b.price,I=b.quantity,T=b.info,U=p.find((function(e){return e.product.id==k})),A=function(e,t){var n=Object(d.a)(p),i={product:e,quantity:t,total:e.price*t};n.push(i),y(n),C(v+i.total),j(!0)};return Object.keys(b).length?Object(i.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(i.jsx)(M,{show:l,setShow:j,imgUrl:N,price:S,title:P,quantity:n}),Object(i.jsx)(B,{className:"m-2 bg-secondary",children:Object(i.jsxs)(g.a.Body,{children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)(q,{src:N,className:"bg-white mt-1 col border p-0"}),Object(i.jsxs)("h4",{className:"border text-center mx-5 py-1 bg-success rounded",children:[" \u20b9",S]})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)(g.a.Title,{children:P.toUpperCase()}),Object(i.jsx)(g.a.Text,{children:T})]})]}),Object(i.jsxs)("div",{className:"d-flex justify-content-around border py-1 bg-info rounded",children:[Object(i.jsxs)("h5",{children:[" Available Quantity : ",I]}),Object(i.jsx)(w,{quantity:n,availableQuantity:I,setQuantity:r})]}),Object(i.jsxs)(g.a.Footer,{children:[Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)(o.b,{to:"/",children:Object(i.jsx)(m.a,{children:"Back To Product List"})})}),Object(i.jsx)("div",{className:"text-center mt-2",children:U?Object(i.jsx)(O.a,{placement:"top",delay:{show:250,hide:400},overlay:Object(i.jsx)(f.a,{children:"Item Is Already In Cart"}),children:Object(i.jsx)(o.b,{to:"/cart",children:Object(i.jsx)("label",{className:" bg-warning p-2 rounded text-dark",children:"Go To Cart"})})}):Object(i.jsx)(m.a,{variant:"warning",onClick:function(){return A(b,n)},children:" Add To Cart"})})]})]})})]}):Object(i.jsx)(x.a,{variant:"danger",className:"text-center mt-2",children:"Product Not Selected"})},A=r.a.memo(U);function D(){var e=Object(j.a)(["\n  border-radius: 20px;\n  height: 300px;\n  margin: 0 auto 1em auto;\n\n"]);return D=function(){return e},e}function R(){var e=Object(j.a)(["\n  border-radius: 20px;\n  width:300px;\n  height: 500px;\n"]);return R=function(){return e},e}var F=Object(p.a)(g.a)(R()),_=Object(p.a)(g.a.Img)(D()),E=function(e){var t=e.product,n=t.id,r=t.title,c=t.price,s=t.imgUrl,l=Object(a.useState)(!1),j=Object(u.a)(l,2),h=j[0],b=j[1],p=Object(a.useContext)(Q),x=p.setProductDetails,y=p.setCart,C=p.cart,v=p.total,w=p.setTotal,k=C.find((function(e){return e.product.id==n})),N=function(e,t){var n=Object(d.a)(C),i={product:e,quantity:t,total:e.price*t};n.push(i),y(n),w(v+i.total),b(!0)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(M,{show:h,setShow:b,imgUrl:s,price:c,title:r,quantity:1}),Object(i.jsxs)(F,{className:" m-2 bg-info",children:[Object(i.jsx)(o.b,{to:"/details",children:Object(i.jsx)(_,{variant:"top",src:s,className:"p-1",onClick:function(){x(t)}})}),Object(i.jsxs)(g.a.Body,{children:[Object(i.jsx)(g.a.Title,{children:r.toUpperCase()}),Object(i.jsxs)("h5",{children:[" \u20b9",c]}),Object(i.jsx)(g.a.Footer,{className:"d-flex justify-content-around",children:k?Object(i.jsx)(O.a,{placement:"top",delay:{show:250,hide:400},overlay:Object(i.jsx)(f.a,{children:"Item Is Already In Cart"}),children:Object(i.jsx)("label",{className:" bg-primary p-2 rounded text-white",children:"In Cart"})}):Object(i.jsx)(m.a,{onClick:function(){return N(t,1)},children:" Add To Cart"})})]})]})]})},G=r.a.memo(E),z=function(){var e=Object(a.useContext)(Q),t=e.products,n=e.setProductName,r=e.setCategory,c=e.category,s=e.setProducts;return Object(i.jsx)("div",{className:"sticky-top bg-dark p-2",children:Object(i.jsxs)("div",{className:"d-flex flex-wrap justify-content-center",children:[Object(i.jsx)("input",{className:"rounded",onChange:function(e){return n(e.target.value)},placeholder:"search product"}),Object(i.jsxs)(y.a,{className:"m-2 ",title:"all"==c?"select category":c,children:[Object(i.jsx)(C.a.Item,{onClick:function(){return r("mobile")},children:" mobile "}),Object(i.jsx)(C.a.Item,{onClick:function(){return r("fashion")},children:" fashion "}),Object(i.jsx)(C.a.Item,{onClick:function(){return r("home")},children:" home "}),Object(i.jsx)(C.a.Item,{onClick:function(){return r("electronics")},children:" electronics "}),Object(i.jsx)(C.a.Item,{onClick:function(){return r("sport")},children:" sport "}),Object(i.jsx)(C.a.Item,{onClick:function(){return r("all")},children:" all "})]}),Object(i.jsxs)(y.a,{className:"mt-2",title:"sort",children:[Object(i.jsx)(C.a.Item,{onClick:function(){var e=Object(d.a)(t);s(e.sort((function(e,t){return e.price-t.price})))},children:" price -- low to high "}),Object(i.jsx)(C.a.Item,{onClick:function(){var e=Object(d.a)(t);s(e.sort((function(e,t){return t.price-e.price})))},children:" price -- high to low "})]})]})})},L=function(){var e=Object(a.useContext)(Q).products;return Object(i.jsxs)("div",{className:"bg-secondary",children:[Object(i.jsx)(z,{}),Object(i.jsx)("div",{className:"d-flex flex-wrap justify-content-center m-auto",children:e.length?e.map((function(e){return Object(i.jsx)(G,{product:e},e.id)})):Object(i.jsx)(x.a,{variant:"danger",children:"sorry ! no results found!"})})]})},H=[{id:1,category:"mobile",title:"iphone X",imgUrl:"https://s.yimg.com/os/creatr-uploaded-images/2018-10/e0186290-d3a1-11e8-a877-3edaad41fc41",quantity:5,price:74e3,inCart:!1,info:"64 GB ROM \n      14.73 cm (5.8 inch) \n      Super Retina HD Display \n      12MP + 12MP | 7MP Front Camera \n      A11 Bionic Chip with 64-bit Architecture,\n      Neural Engine,\n      Embedded M11 Motion Coprocessor Processor\n      iOS 13 Compatible"},{id:2,category:"mobile",title:"redmi note 9",imgUrl:"https://i01.appmifile.com/webfile/globalimg/in/cms/8CF60072-6762-E5F5-BA0D-1F4BB6AE26C4.jpg",quantity:2,price:12e3,inCart:!1,info:"4 GB RAM | 128 GB ROM | Expandable Upto 512 GB\n      16.94 cm (6.67 inch) Full HD+ Display\n      48MP + 8MP + 5MP + 2MP | 16MP Front Camera\n      5020 mAh Battery\n      Qualcomm\xae Snapdragon\u2122 720G Processor"},{id:3,category:"mobile",title:"realme 7",imgUrl:"https://static.toiimg.com/thumb/msid-78107023,width-1200,resizemode-4/78107023.jpg",quantity:10,price:14e3,inCart:!1,info:"6 GB RAM | 64 GB ROM | Expandable Upto 256 GB\n      16.51 cm (6.5 inch) Full HD+ Display\n      64MP + 8MP + 2MP + 2MP | 16MP Front Camera\n      5000 mAh Lithium-ion Battery\n      MediaTek Helio G95 Processor"},{id:4,category:"mobile",title:"poco m2 pro",imgUrl:"https://www.gizmochina.com/wp-content/uploads/2020/07/POCO-M2-Pro-featured.png",quantity:1,price:1e4,inCart:!1,info:"4 GB RAM | 64 GB ROM | Expandable Upto 512 GB\n      16.94 cm (6.67 inch) Full HD+ Display\n      48MP + 8MP + 5MP + 2MP | 16MP Front Camera\n      5000 mAh Lithium-ion Polymer Battery\n      Qualcomm Snapdragon 720G Processor"},{id:5,category:"fashion",title:"men shirt",imgUrl:"https://www.dhresource.com/0x0/f2/albu/g8/M00/27/59/rBVaV13oWXuAPSh_AAJO6__js5M100.jpg/spring-light-blue-men-shirt-fashion-mens.jpg",quantity:5,price:400,inCart:!1,info:"Care Instructions: Machine Wash\n      Fit Type: Regular Fit\n      Regular fit\n      Regular classic collar\n      Checkered long sleeve casual shirt\n      Don't dry dark colors in direct sunlight\n      Machine wash\n      Made in India\n      "},{id:6,category:"fashion",title:"men t-shirt",imgUrl:"https://i.pinimg.com/736x/e9/8d/44/e98d449dca79f830ec0f0e242397d8ae.jpg",quantity:2,price:350,inCart:!1,info:"Fit Type: Regular Fit\n      Fabric: Cotton\n      Easy hand wash\n      Half Sleeve\n      Made In India\n      Quality: All garments are subjected to the \n      following tests Fabric dimensional stability\n      test and quality inspection for colours \n      and wash fastness"},{id:7,category:"fashion",title:"nike shoes",imgUrl:"https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102",quantity:3,price:2e3,inCart:!1,info:"Sole: Rubber\n      Closure: Lace-Up\n      Shoe Width: Regular\n      Outer Material: Synthetic\n      Closure Type: Lace-Up\n      Toe Style: Round Toe\n      Warranty Type: Manufacturer & Seller\n      Warranty Description: 30 days "},{id:8,category:"fashion",title:"women jacket",imgUrl:"https://i.pinimg.com/originals/73/f8/57/73f857050959990f6af9f2a9175b765e.png",quantity:1,price:1200,inCart:!1,info:"Care Instructions: hand wash\n      Color Name: Pink\n      100% Nylon\n      Hand wash\n      Quilted\n      Plain\n      Zip fly with button closure"},{id:9,category:"sport",title:"bat",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71qjE2I%2BO7L._SL1500_.jpg",quantity:5,price:900,inCart:!1,info:"Brand\tKansal Traders\n      Color\tRed\n      Included Components\tCricket Bat\n      Length\t88 Centimeters\n      Width\t8 Centimeters\n      Height\t4 Centimeters\n      Size\tFULL\n      Style\tBat With Ball and Bat Cover\n      Manufacturer\tKansal Traders\n      Country of Origin\tIndia"},{id:10,category:"sport",title:"foot ball",imgUrl:"https://cdn.insidesport.co/wp-content/uploads/2020/10/07193932/fifa.jpg",quantity:2,price:650,inCart:!1,info:"Colour : Multicolor\n      Ensures Good Performance\n      Package Content :1 Piece Replica Football AND A PUMP\n      The Ball Is Meant For Very Light Play And Not For Playing On Rough Ground\n      VOODANIA is a registered TM of Thok Adda"},{id:11,category:"sport",title:"badminton",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/61cGtO5ieML._SL1500_.jpg",quantity:3,price:800,inCart:!1,info:"Ideal for junior, age group above 4 years,\n      playing level practice for beginners and not for professional play\n      Durable product\n      Shaft Material: Steel\n      Contains: Pack of 2 badminton Rackets, \n      1 badminton cover + 1 Shuttle box (Pack of 3)\n      Lightweight Racket with Excellent Grip"},{id:12,category:"sport",title:"dumbbells",imgUrl:"https://5.imimg.com/data5/QT/ME/MY-24863451/dumbell-500x500.jpg",quantity:2,price:1200,inCart:!1,info:"Included Components: Two 10kg rubber coated round dumbbells\n      Material: Rubber; Color: Black; Size - Item Length: 27.5cm, \n      Item Width: 28.4cm, Item Height: 14.2cm; Item Weight: 20kg\n      Dumbbells offer the ability to target specific muscle\n      groups or perform a full body workout; "},{id:13,category:"electronics",title:"trimmer",imgUrl:"https://images.philips.com/is/image/PhilipsConsumer/BT3102_15-IMS-en_IN?$jpglarge$&wid=1250",quantity:5,price:900,inCart:!1,info:"This trimmer has high precision blades Please use\n      it gently without applying too much pressure on \n      the skin while operating it without the comb\n      This beard trimmer comes with a USB cable for\n      more flexible charging via your computer or\n      any USB adaptor The adaptor is not included"},{id:14,category:"electronics",title:"digital watch",imgUrl:"https://www.skmei-watch.com/wp-content/uploads/2019/10/16016-8o0yas.jpg",quantity:2,price:650,inCart:!1,info:"Dial color: black, case shape: round, dial glass material: mineral\n      Band color: black, band material: plastic, Shock Resistant\n      Watch movement type: watch movement type: , watch display type: digital\n      Case material: plastic, case diameter: 49 millimeters\n      Water resistance depth: 50 meters"},{id:15,category:"electronics",title:"camera",imgUrl:"https://media.wired.com/photos/5b64db3717c26f0496f4d62d/master/w_1982,h_1486,c_limit/Canon-G7XII-SOURCE-Canon.jpg",quantity:3,price:25e3,inCart:!1,info:"Sensor: APS-C CMOS Sensor with 24.1 MP \n      (high resolution for large prints and image cropping)\n      ISO: 100-6400 sensitivity range \n      (critical for obtaining grain-free pictures, especially in low light)\n      Image Processor: DIGIC 4+ with 9 autofocus points"},{id:16,category:"electronics",title:"tablets",imgUrl:"https://m.media-amazon.com/images/I/61uHJ+pWHSL.jpg",quantity:2,price:12e3,inCart:!1,info:"26.31 Centimeters (10.4-inch) ,\n      16M color support\n      Ergonomic S-Pen included in box\n      8MP primary camera | 5MP front facing camera\n      Dual Speaker with Dolby Atmos\n      Andoid 10 operating system with 2.3GHz Exynos9611 Octa Core processor\n      4GB RAM, 64GB internal memory expandable up to 1TB"},{id:17,category:"home",title:"bean bag",imgUrl:"https://5.imimg.com/data5/PE/AS/MY-37550917/gabbroo-bean-bag-brown-500x500.jpeg",quantity:5,price:900,inCart:!1,info:"Pack Contents - 1 Bean Bag Cover without beans\n      Fade resistant Leatherette fabric with superior seam and tear strength\n      Double stitched for extra strength\n      Double protection with velcro and zipper to prevent beans from spilling\n      Handle strap for ease of holding or carrying around\n      Beans requirement: XXL - 1.5kg - 2kg."},{id:18,category:"home",title:"table",imgUrl:"https://www.ikea.com/ca/en/images/products/ingo-table-pine__0737092_PE740877_S5.JPG",quantity:2,price:3e3,inCart:!1,info:"Specification: Package Content:-Set of 6 table mats & 1 Long Runner,\n      Size:13 X 72 Inch, placement size (13 x 19 inch ) Color: Multicolor, Material:100% cotton\n      Set of 6 Table Mats Protects Your Dining Table from Water Marks, Heat, \n      Spills, Stains and Scratches."},{id:19,category:"home",title:"curtains",imgUrl:"https://www.meijer.com/content/dam/meijer/product/0088/53/0846/60/0088530846601_1_A1C1_1200.png",quantity:3,price:500,inCart:!1,info:"Color: ivory & ivory, size name: standard\n      Material: polyester\n      Package contents: 2 curtains; size: 2.5 x 5 feet (w x h); care instructions: \n      gentle machine wash, do not bleach, \n      iron in medium temperature, can be dry cleaned"},{id:20,category:"home",title:"wall clocks",imgUrl:"https://www.ikea.com/in/en/images/products/bravur-wall-clock-black__0633568_PE695902_S5.JPG",quantity:2,price:700,inCart:!1,info:'Dial size: 11.75 inches in diameter\n      Material of the frame: Plastic\n      Uses 1 "AA" battery - not included (Note: Plus side of your battery should be inserted first)\n      Ideal for Home, living room, bedroom, Kitchen & offices\n      18 months replacement warranty on movement machine'}],W=n(97),Q=r.a.createContext(),Y=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),o=Object(u.a)(s,2),l=o[0],d=o[1],j=Object(a.useState)(!1),m=Object(u.a)(j,2),h=m[0],b=m[1],p=Object(a.useState)("all"),g=Object(u.a)(p,2),O=g[0],f=g[1],y=Object(a.useState)(""),C=Object(u.a)(y,2),v=C[0],w=C[1],k=Object(a.useState)({}),N=Object(u.a)(k,2),P=N[0],S=N[1],M=Object(a.useState)([]),I=Object(u.a)(M,2),T=I[0],B=I[1],q=Object(a.useState)(0),U=Object(u.a)(q,2),A=U[0],D=U[1];return Object(a.useEffect)((function(){new Promise((function(e,t){setTimeout(e(H),2e3)})).then((function(e){d(!1),c("all"==O?e.filter((function(e){return e.title.includes(v)})):e.filter((function(e){return e.category==O&&e.title.includes(v)})))})).catch((function(e){console.log(e),d(!1),b(!0)}))}),[O,v]),l?Object(i.jsx)(W.a,{animation:"border"}):h?Object(i.jsx)(x.a,{variant:"danger",children:"oops ! something went wrong"}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(Q.Provider,{value:{products:r,setCategory:f,setProductName:w,category:O,setProducts:c,productDetails:P,setProductDetails:S,cart:T,setCart:B,total:A,setTotal:D},children:e.children})})},J=function(e){var t=e.show,n=e.setShow,a=function(){return n(!1)};return Object(i.jsxs)(k.a,{show:t,onHide:a,size:"sm",className:"b-secondary",children:[Object(i.jsx)(k.a.Header,{closeButton:!0,children:Object(i.jsx)(x.a,{variant:"success",children:"Your Order Has Been Placed"})}),Object(i.jsx)(k.a.Body,{children:"Thank Your For Shopping..."}),Object(i.jsx)(k.a.Footer,{className:"d-flex justify-content-center bg-light",children:Object(i.jsx)(o.b,{to:"/",children:Object(i.jsx)(m.a,{onClick:a,size:"sm",children:"Continue Shopping"})})})]})},X=r.a.memo(J);function V(){var e=Object(j.a)(["\n  border-radius: 20px;\n  width:70px;\n  height:70px;\n  \n"]);return V=function(){return e},e}var K=p.a.img(V()),$=function(){var e=Object(a.useContext)(Q),t=e.cart,n=e.setCart,r=e.total,c=e.setTotal,s=e.setProductDetails,l=Object(a.useState)(!1),j=Object(u.a)(l,2),h=j[0],b=j[1],p=function(e){var t=0;return e.map((function(e){return t+=e.total})),t},g=function(e){var i=Object(d.a)(t);i.map((function(t){return t.product.id==e?(t.quantity=t.quantity<=1?t.quantity:t.quantity-1,t.total=t.quantity*t.product.price,t):t})),n(i),c(p(t))},O=function(e){var i=Object(d.a)(t);i.map((function(t){return t.product.id==e?(t.quantity=t.quantity<3&&t.quantity<t.product.quantity?t.quantity+1:t.quantity,t.total=t.quantity*t.product.price,t):t})),n(i),c(p(t))},f=function(e){var i=t.filter((function(t){return t.product.id!=e}));n(i),c(p(i))};return Object(i.jsxs)("div",{children:[Object(i.jsx)(X,{show:h,setShow:b}),Object(i.jsxs)("div",{className:"w-100 mt-2 d-none d-sm-block",children:[Object(i.jsxs)("div",{className:"d-flex justify-content-around border rounded mx-4 py-2 bg-dark text-white",children:[Object(i.jsx)("h4",{children:"PRODUCT"}),Object(i.jsx)("h4",{children:"PRODUCT NAME"}),Object(i.jsx)("h4",{children:"PRICE"}),Object(i.jsx)("h4",{children:"QUANTITY"}),Object(i.jsx)("h4",{children:"REMOVE"}),Object(i.jsx)("h4",{children:"TOTAL"})]}),t.length?t.map((function(e){var t=e.product,n=e.quantity,a=e.total;return Object(i.jsxs)("div",{className:"d-flex justify-content-around py-2 border rounded mx-4 my-2 align-items-center bg-info font-weight-bold",children:[Object(i.jsx)(o.b,{to:"/details",children:Object(i.jsx)(K,{src:t.imgUrl,onClick:function(){s(t)}})}),Object(i.jsx)("span",{children:t.title}),Object(i.jsxs)("span",{children:["\u20b9",t.price]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(m.a,{variant:"dark",size:"sm",className:"mr-1",onClick:function(){return g(t.id)},children:"-"}),Object(i.jsx)(m.a,{variant:"light",children:n}),Object(i.jsx)(m.a,{variant:"dark",size:"sm",className:"ml-1",onClick:function(){return O(t.id)},children:"+"})]}),Object(i.jsx)(m.a,{variant:"danger",size:"sm",onClick:function(){return f(t.id)},children:"Delete"}),Object(i.jsxs)("span",{children:["\u20b9",a]})]},t.id)})):Object(i.jsx)(x.a,{variant:"danger",className:"text-center mt-2",children:"Your Cart Is Currently Empty"})]}),Object(i.jsx)("div",{className:"d-block d-sm-none d-flex flex-wrap justify-content-center ",children:t.length?t.map((function(e){var t=e.product,n=e.quantity,a=e.total;return Object(i.jsxs)("div",{className:"d-flex flex-column bg-info m-2 px-3 border rounded",children:[Object(i.jsx)(o.b,{to:"/details",children:Object(i.jsx)(K,{src:t.imgUrl,onClick:function(){s(t)}})}),Object(i.jsx)("span",{children:t.title}),Object(i.jsxs)("div",{children:[Object(i.jsx)(m.a,{variant:"dark",size:"sm",className:"mr-1",onClick:function(){return g(t.id)},children:"-"}),Object(i.jsx)(m.a,{variant:"light",children:n}),Object(i.jsx)(m.a,{variant:"dark",size:"sm",className:"ml-1",onClick:function(){return O(t.id)},children:"+"})]}),Object(i.jsx)(m.a,{variant:"danger",size:"sm",onClick:function(){return f(t.id)},children:"Remove"}),Object(i.jsxs)("span",{children:["\u20b9",a]})]},t.id)})):Object(i.jsx)(x.a,{variant:"danger",className:"text-center mt-2",children:"Your Cart Is Currently Empty"})}),0!=t.length&&Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"d-flex justify-content-end",children:Object(i.jsx)(m.a,{className:"mr-5 mb-2 border border-danger text-danger bg-white",onClick:function(){n([]),c(0)},children:"CLEAR CART"})}),Object(i.jsx)("div",{className:"d-flex justify-content-end",children:Object(i.jsxs)("h4",{className:"mr-5 mb-3 font-italic font-weight-bold border rounded p-1 bg-success",children:["GRAND TOTAL : \u20b9",r]})}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)(m.a,{className:"mb-2 border border-danger",variant:"warning",onClick:function(){c(0),n([]),b(!0)},children:"PLACE ORDER"})})]})]})},Z=r.a.memo($);function ee(){var e=Object(j.a)(["\n  font-size: 1000%;\n"]);return ee=function(){return e},e}var te=p.a.h1(ee()),ne=function(){return Object(i.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(te,{className:"font-weight-bold text-muted",children:"404"}),Object(i.jsx)("h2",{children:"Oops! PAGE_NOT_FOUND"}),Object(i.jsx)("p",{}),Object(i.jsx)(m.a,{href:"/",children:"Go To Homepage"})]})})},ie=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(Y,{children:[Object(i.jsx)(b,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:L}),Object(i.jsx)(l.a,{path:"/details",component:A}),Object(i.jsx)(l.a,{path:"/cart",component:Z}),Object(i.jsx)(l.a,{component:ne})]})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};s.a.render(Object(i.jsx)(o.a,{children:Object(i.jsx)(ie,{})}),document.getElementById("root")),ae()}},[[89,1,2]]]);
//# sourceMappingURL=main.ba79002a.chunk.js.map