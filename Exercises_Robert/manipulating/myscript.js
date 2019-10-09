var product;
function newProduct(img, product, price) {
	product = "<div class='col-xs-12 col-md-6'>" 
	+ 	"<!-- First product box start here--> <div class='prod-info-main prod-wrap clearfix'>"
	+ 	"<div class='row'><div class='col-md-5 col-sm-12 col-xs-12'><div class='product-image'>"
	+ 	"<img src='" + img + "'class='img-responsive'><span class='tag2 hot'>HOT</span>"
	+ 	"</div></div><div class='col-md-7 col-sm-12 col-xs-12'><div class='product-deatil'>"
	+ 	"<h5 class='name'><a href='#'>" + product + "</a><a href='#'><span>Product Category</span>"
	+	"</a></h5><p class='price-container'><span>" + price + "</span></p><span class='tag1'></span></div>"
	+	"<div class='description'><p>A Short product description here </p></div><div class='product-info smart-form'>"
	+	"<div class='row'><div class='col-md-12'><a href='javascript:void(0);' class='btn btn-danger'>Add to cart</a>"
	+	"<a href='javascript:void(0);' class='btn btn-info'>More info</a></div><div class='col-md-12'>"
	+ 	"<div class='rating'>Rating:<label for='stars-rating-5'><i class='fa fa-star text-danger'></i></label>"
	+	"<label for='stars-rating-4'><i class='fa fa-star text-danger'></i></label><label for='stars-rating-3'><i class='fa fa-star text-danger'></i></label>"
	+	"<label for='stars-rating-2'><i class='fa fa-star text-warning'></i></label>"
	+	"<label for='stars-rating-1'><i class='fa fa-star text-warning'></i></label>"
	+	"</div></div></div></div></div></div></div>"; 
	$(product).appendTo(".container");
}

newProduct('img', 'iPhone10', '900');
newProduct('img', 'coolTablet', '9999');

$(".col-xs-12 h5:contains('Book')").addClass("computer");
$(".col-xs-12 h5:contains('book')").addClass("computer");
$(".computer").closest(".col-xs-12.col-md-6").find("div.product-image").css("background-color", "red");

$(".col-xs-12 h5:contains('Phone')").addClass("phone");
$(".col-xs-12 h5:contains('Galaxy')").addClass("phone");
$(".phone").closest(".col-xs-12.col-md-6").find("div.product-image").css("background-color", "green");

$(".col-xs-12 h5:contains('Pad')").addClass("tablet");
$(".col-xs-12 h5:contains('Tablet')").addClass("tablet");
$(".tablet").closest(".col-xs-12.col-md-6").find("div.product-image").css("background-color", "blue");

$("#show-laptops").on("click", function() {
	$(".col-xs-12.col-md-6").find("*").css("display", "");
	$(".phone").closest(".col-xs-12.col-md-6").find("*").css("display", "none");
	$(".tablet").closest(".col-xs-12.col-md-6").find("*").css("display", "none");
});

$("#show-phones").on("click", function() {
	$(".col-xs-12.col-md-6").find("*").css("display", "");
	$(".computer").closest(".col-xs-12.col-md-6").find("*").css("display", "none");
	$(".tablet").closest(".col-xs-12.col-md-6").find("*").css("display", "none");
})

$("#show-tablets").on("click", function() {
	$(".col-xs-12.col-md-6").find("*").css("display", "");
	$(".computer").closest(".col-xs-12.col-md-6").find("*").css("display", "none");
	$(".phone").closest(".col-xs-12.col-md-6").find("*").css("display", "none");
})