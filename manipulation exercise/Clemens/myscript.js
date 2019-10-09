// $(".wrapper").css({"background-color":"red",});
// var test = $(".product-image:eq(0)").find("img").attr("src")
// console.log(test.indexOf("tablet"))
var result;
var test;
var articles = articles;

console.log(articles)

var new_product_1 = `<div class="container">
		<div class="col-xs-12 col-md-6">
			<!-- First product box start here-->
			<div class="prod-info-main prod-wrap clearfix">
				<div class="row">
					<div class="col-md-5 col-sm-12 col-xs-12"> 
						<div class="product-image"> 
							<img src=`+articles[0].link_online_pic+` class="img-responsive"> 
							<span class="tag2 hot">
								HOT
							</span> 
						</div>
					</div>
					<div class="col-md-7 col-sm-12 col-xs-12">
						<div class="product-deatil">
							<h5 class="name">
								<a href="#">`+articles[0].description+`
								</a>
								<a href="#">
									<span>Product Category</span>
								</a>                            

							</h5>
							<p class="price-container">
								<span>`+articles[0].currency + articles[0].price+`</span>
							</p>
							<span class="tag1"></span> 
						</div>
						<div class="description">
							<p>A Short product description here </p>
						</div>
						<div class="product-info smart-form">
							<div class="row">
								<div class="col-md-12"> 
									<a href="javascript:void(0);" class="btn btn-danger">Add to cart</a>
									<a href="javascript:void(0);" class="btn btn-info">More info</a>
								</div>
								<div class="col-md-12">
									<div class="rating">Rating:
										<label for="stars-rating-5"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-4"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-3"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-2"><i class="fa fa-star text-warning"></i></label>
										<label for="stars-rating-1"><i class="fa fa-star text-warning"></i></label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`
var new_product_2 = `<div class="container">
		<div class="col-xs-12 col-md-6">
			<!-- First product box start here-->
			<div class="prod-info-main prod-wrap clearfix">
				<div class="row">
					<div class="col-md-5 col-sm-12 col-xs-12"> 
						<div class="product-image"> 
							<img src=`+articles[1].link_online_pic+` class="img-responsive"> 
							<span class="tag2 hot">
								HOT
							</span> 
						</div>
					</div>
					<div class="col-md-7 col-sm-12 col-xs-12">
						<div class="product-deatil">
							<h5 class="name">
								<a href="#">`+articles[1].description+`
								</a>
								<a href="#">
									<span>Product Category</span>
								</a>                            

							</h5>
							<p class="price-container">
								<span>`+articles[1].currency + articles[1].price+`</span>
							</p>
							<span class="tag1"></span> 
						</div>
						<div class="description">
							<p>A Short product description here </p>
						</div>
						<div class="product-info smart-form">
							<div class="row">
								<div class="col-md-12"> 
									<a href="javascript:void(0);" class="btn btn-danger">Add to cart</a>
									<a href="javascript:void(0);" class="btn btn-info">More info</a>
								</div>
								<div class="col-md-12">
									<div class="rating">Rating:
										<label for="stars-rating-5"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-4"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-3"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-2"><i class="fa fa-star text-warning"></i></label>
										<label for="stars-rating-1"><i class="fa fa-star text-warning"></i></label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`

$(".container").append(new_product_1 + new_product_2);

loop_div = $(".product-image");

for(ind in loop_div){
	// console.log(ind)
	var test = $(".product-image:eq("+ind+")").find("img").attr("src")
		
		if (test.indexOf("tablet") > -1 ){
		result = "Tablet";
		$(".product-image:eq("+ind+")").css({"background-color":"blue",});
		} else if (test.indexOf("phone") > -1 ){
		result = "phone";
		$(".product-image:eq("+ind+")").css({"background-color":"green",});
		} else if (test.indexOf("notebook") > -1 ){
		result = "notebook";
		$(".product-image:eq("+ind+")").css({"background-color":"red",});
		}
	// console.log(result)
}

function myFunction_notebooks() {

	for(ind in loop_div){

	var test = $(".product-image:eq("+ind+")").find("img").attr("src")
		
		if (test.indexOf("tablet") > -1 ){
		result = "Tablet";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeOut(1000);
		} else if (test.indexOf("phone") > -1 ){
		result = "phone";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeOut(1000);
		} else if (test.indexOf("notebook") > -1 ){
		result = "notebook";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeIn(1000);
		}
}}

function myFunction_tablets() {
	for(ind in loop_div){

	var test = $(".product-image:eq("+ind+")").find("img").attr("src")
		
		if (test.indexOf("tablet") > -1 ){
		result = "Tablet";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeIn(1000);
		} else if (test.indexOf("phone") > -1 ){
		result = "phone";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeOut(1000);
		} else if (test.indexOf("notebook") > -1 ){
		result = "notebook";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeOut(1000);
		}
}}

function myFunction_phones() {
	for(ind in loop_div){

	var test = $(".product-image:eq("+ind+")").find("img").attr("src")
		
		if (test.indexOf("tablet") > -1 ){
		result = "Tablet";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeOut(1000);
		} else if (test.indexOf("phone") > -1 ){
		result = "phone";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeIn(1000);
		} else if (test.indexOf("notebook") > -1 ){
		result = "notebook";
		$(".product-image:eq("+ind+")").closest(".col-md-6").fadeOut(1000);
		}
}}