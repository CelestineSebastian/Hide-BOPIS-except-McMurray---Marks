
function hideBopisNew(){
setTimeout(function(){
var storeName = $("a#choose-a-store__button").text().trim();
if ( storeName != "Ft McMurray 2") {
$("body").append('<div id="newClass"><style>.prd-pick-up-in-store-section,.product-detail-form__find-in-store,.product-detail-form__find-in-store {display: none !important;}.prd-section-wrapper {background-color: transparent !important;}.prd-ship-to-home-section {background-color:rgba(238,249,255,.75);}.prd-section-wrapper--sticky{background:#fff !important;}.marks-custom .curbside-delivery__banner{display: none;}</style></div>');
$(".glb-pencil-ad-top.section").css("display","block");
}
if ( storeName == "Ft McMurray 2") {
  //console.log("code works");
$("#newClass").remove();
  $(".glb-pencil-ad-top.section").css("display","none");
if ( (location.href == "https://www.marks.com/")|| (location.href == "https://www.marks.com/#") ){

	if ($(".curbside-delivery__banner").length < 1){
		$('<div class="curbside-delivery__banner"><div class="container"><div class="curbside-delivery__banner-asset"><a href="/content/marks/en/help-desk/shipping-and-returns/shipping-and-returns-policy.html"><picture><source media="(max-width: 640px)" srcset="https://marks.scene7.com/is/image/marksp/20-wk17-Shipping-Curbside-M-01-640x50px-EN?wid=640&amp;hei=50"><img src="https://marks.scene7.com/is/image/marksp/20-wk17-Shipping-Curbside-D-01-1366x75px-EN?wid=1366&amp;hei=75" alt="Free Shipping on All Online Orders. Learn More"></picture></a></div><div class="curbside-delivery__banner-asset"><a href="/content/marks/en/curbside-pickup.html"><picture><source media="(max-width: 640px)" srcset="https://marks.scene7.com/is/image/marksp/20-wk17-Shipping-Curbside-M-02-640x50px-EN?wid=640&amp;hei=50"><img src="https://marks.scene7.com/is/image/marksp/20-wk17-Shipping-Curbside-D-02-1366x75px-EN?wid=1366&amp;hei=75" alt="Free Curbside Pick Up for Online Orders. Learn More."></picture></a></div></div></div>').insertAfter('header.page-header');
	}
}
$("body").append('<style>.curbside-delivery__banner .container{display:flex;flex-wrap:wrap;}.curbside-delivery__banner {box-sizing: border-box;width: 100%;display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-between;}.curbside-delivery__banner img {max-width: 100%;display:block;}.curbside-delivery__banner-asset {box-sizing: border-box;width: 100%;margin: 0;}@media screen and (min-width: 641px) {.curbside-delivery__banner-asset {width: 49.5%;}}.curbside-delivery__banner-asset:hover {filter: brightness(1.1) saturate(1.1);transition: all 0.2s ease 0s;backface-visibility: hidden;}.ship-to-home--pick-up-in-store .ship-to-home__description-wrapper:after {content: "Ready for pick up in 1-7 business days";font-family: RobotoCn,Arial,sans-serif;display:block;font-weight:bold;}@media only screen and (min-width:1280px){.ship-to-home--pick-up-in-store .ship-to-home__description-wrapper:after{font-size:12px;}}</style>');

}
},1000);
}
hideBopisNew();
$(document).on("click",".choose-a-store-locations__item-select-button",function(){
hideBopisNew();
});
