//クリック時に回答を表示・非表示を制御
/*
$(function(){
	target = ".faq-post dt";
	$(target).on("click", function() {
		$(this).next("dd").slideToggle("fast");
		$(this).next("dd").siblings("dd").slideUp("fast");
		$(this).siblings("dt").removeClass("open");
	});
	$(".close-btn span").on("click", function() {
		$(this).parents("dd").slideUp("fast");
	});
});
*/

// (Delete & Add 2014.10.07 Honma 複数展開できるよう変更、ddクリックにも対応)
$(function(){
	$(".faq-post dt").on("click", function() {
		if( $(this).next("dd").css("display") === "none" ){
			$(this).next("dd").slideDown("fast");
		}else{
//			$(this).next("dd").slideUp("fast");
		}
	});
	$(".faq-post dd").on("click", function() {
		$(this).slideUp("fast");
	});
});