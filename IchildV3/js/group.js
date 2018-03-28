$(function ($){
	//no photo
	//$(".no_photo").css("margin-top",($(window).height()-460)/2);
	//$(".no_photo2").css("margin-top",0);
	//photo more menu
	$("#main").delegate(".menu_arrow","click",function(e){
		e.stopPropagation();
		$(this).next().toggle();
	});
	$("#main").delegate(".pic_opt1 div a","click",function(e){
		e.stopPropagation();
		$(this).parent().hide();
	});
	//add photo stopPropagation
	$("#tiles").delegate("#addPhoto","click",function(e){
		e.stopPropagation();
		loadingFrame("/IchildV3/share/iframe.html #uploadPhoto");
	});
	//add album stopPropagation
	$("#tiles").delegate("#addAlbum","click",function(e){
		e.stopPropagation();
		location.href='/IchildV3/share/add_album.html';
	});
	//delete all
	$("body").delegate(".del","click",function(){
		tips("You will delete this photos. Do you want to continue?");
	});	
	//photo edit
	/*$("#frame").delegate("a.s_rocate","click",function(){
		tips("You will rocate this . Do you want to continue?");
	});*/
	$("#frame").delegate("a.s_del","click",function(){
		tips("You will delete this . Do you want to continue?");
	});
	$("#frame").delegate("a.s_cover","click",function(){
		tips("Set this photo as album page?");
	});
	$("#frame").delegate("a.btn_done","click",function(){
		tips("Your submission has been successful!","Close","",1);
	});
	//photo edit2
	$("#main").delegate(".photo_edit","click",function(){
		//loadingFrame("/IchildV3/share/iframe.html #imgDetail3");
	});
	/*$("#main").delegate(".photo_rocate","click",function(){
		tips("You will rocate this . Do you want to continue?");
	});*/
	$("#main").delegate(".photo_delete","click",function(){
		tips("You will delete this . Do you want to continue?");
	});
	$("#main").delegate(".photo_cover","click",function(){
		tips("Set this photo as album page?");
	});
	/*$("#main").delegate(".opt.s_rocate","click",function(){
		tips("You will rocate this . Do you want to continue?");
	});*/
	$("#main").delegate(".opt.s_del","click",function(){
		tips("You will delete this . Do you want to continue?");
	});
	$("#main").delegate(".opt.s_cover","click",function(){
		tips("Set this photo as album page?");
	});
	
});
$(window).resize(function(){
	//no photo
	$(".no_photo").css("margin-top",($(window).height()-460)/2);
	$(".no_photo2").css("margin-top",0);
});
