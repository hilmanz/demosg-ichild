$(function() { 
	//language
	$(".language-menu a").click(function(){
		$(this).children("span").toggleClass("selected");						
	});

	//back top
	$(document).scroll(function(){
			
		if($(this).scrollTop()==0){
			$(".backtop").fadeOut("slow");
		}else{
			$(".backtop").fadeIn("slow");
		}
	});
	$(".backtop").click(function(){
		 $("html,body").animate({scrollTop:0},500);
	});
	//trips
	$(".tips_window").css('margin-top',$(window).height()/2-100);
	$(".flade").click(function(){
		$(this).hide();
	});
	$(".flade").delegate(".iframe","click",function(e){
		e.stopPropagation();
		$(this).show();
	});
	//more
	$("body .sub_r_opt").find(".opt.more").click(function(){
		$(this).next().toggle();
	});
	$("body .sub_menu").children("a").click(function(){
		$(this).parent().hide();
	});

	//search area
	$(".search").click(function(){
		$(".search_area_home").toggleClass("search_areanone");
	});
	$(".search_area_home .type h1").click(function(){
		$(this).next().toggle();
	});
	$(".search_area_home .type a").click(function(){
		$(this).parent().hide();
		$(this).parent().prev().html($(this).text()+"<i></i>");
	});
	//dan chu close
	$("#frame").delegate("a.btn_close_icon","click",function(){
		$(".flade").hide();
		$("body").css("overflow","visible");
	});
	//profile link
	$(".pull-left a").click(function(){
		loadingFrame("/IchildV3/profile/iframe.html #profile");
		$(".user-menu").removeClass("open");
		return false;

	})
}); 

//window resize
$(window).resize(function(){
	//frame

	if($(window).width()>480){
		$(".frame").height($(window).height()).width($(window).width());
		$(".frame .iframe_area").css("height",($(window).height()-120)*0.7);
	}else{
		$(".frame").height("100%").width("100%");
		if($(".flade").css("display")=="block"){
			$("body").css("overflow","hidden");
		}
		$(".frame .iframe_area").css("height",($(window).height()-45)).css("max-height",($(window).height()-45));
	}

});
 //check tab
function checkTab(strId){
	$(strId).toggleClass("check").toggleClass("checked");
	
}
//radio tab
function radioTab(strId){
	$(".danradioed").each(function() {
        $(this).addClass("danradio").removeClass("danradioed");
    });
	$(strId).removeClass("danradio").addClass("danradioed");
}   
//loading frame
function loadingFrame(url,status,callback){
	$("#frame").load(url,function(){
		if($(window).width()>480){
			$(".frame").height($(window).height()).width($(window).width());
			$(".frame .iframe_area").css("height",($(window).height()-120)*0.7);
			
		}else{
			$(".frame").height("100%").width("100%");
			if($(".flade").css("display")=="block"){
				$("body").css("overflow","hidden");
			}
			$(".frame .iframe_area").css("height",($(window).height()-45)).css("max-height",($(window).height()-45));
		}	
		if(status){
			callback&&callback();	
		}
						  	
	});

	$(".flade").show();
}
//tips window
function tips(info,btn1,btn2,btnNumber,urlStr){
	$(".tips").show();
	$(".tips").find("h1").html(info);
	if(btn1){
		$(".tips").find("a:first").text(btn1);
	}
	if(btn2){
		$(".tips").find("a:last").text(btn2);
	}
	if(btnNumber==1){
		$(".tips").find("a:last").hide();
		$(".tips").find("a").css("width","100%");
	}
	$(".tips_btn").click(function(){
		$(".tips").hide();
		$(".tips").find("a").show();
		$(".tips").find("a").css("width","49.5%");
		$(".tips").find("a:first").text("Ok");
		$(".tips").find("a:last").text("Cancel");
	});
}

function tips2(info,btn1,btn2,btnNumber,urlStr){
	$(".tips").show();
	$(".tips").find("h1").html(info);
	if(btn1){
		$(".tips").find("a:first").text(btn1);
	}
	if(btn2){
		$(".tips").find("a:last").text(btn2);
	}
	$(".tips_btn").click(function(){
		$(".tips").find("a").show();
		$(".tips").find("a").css("width","49.5%");
	});
}
function progress() {
	var val = progressbar.progressbar( "value" ) || 0;
	progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
	if ( val <= 99 ) {
		progressTimer = setTimeout( progress, 50 );
	}
}
function closeDownload() {
clearTimeout( progressTimer );
dialog
.dialog( "option", "buttons", dialogButtons )
.dialog( "close" );
progressbar.progressbar( "value", false );
}
//List Center
function listCenter(parentId,strIdArray){
	for(var i=0; i<strIdArray.length; i++){
		var strIdWidth=$(strIdArray[i]).children("li").outerWidth()+10;
		var n=parseInt(($(parentId).width()-20)/strIdWidth);
		$(strIdArray[i]).width(strIdWidth*n);
		
	}	
}
//iframe height
function iframeHeight(){
	if($(window).width()>480){
        if($(".manpin").css("display")=="block"){
                $("body").css("overflow","hidden");
        }
        $(".manpin .frame").height($(window).height()-130).width($(window).width()-230);
        $(".manpin .iframe_area").css("height",$(window).height()-130);
        
        }else{
            $(".frame").height("100%").width("100%");
            if($(".flade").css("display")=="block"){
                $("body").css("overflow","hidden");
            }
            $(".manpin .iframe_area").css("height",$(window).height()-100);
        }
}                   
                
function iframeHeight2(){
	if($(window).width()>480){
        if($(".manpin").css("display")=="block"){
                $("body").css("overflow","hidden");
        }
        $(".manpin .frame").height($(window).height()-90).width($(window).width()-230);
        $(".manpin .iframe_area").css("height",$(window).height()-130);
        
        }else{
            $(".frame").height("100%").width("100%");
            if($(".flade").css("display")=="block"){
                $("body").css("overflow","hidden");
            }
            $(".manpin .iframe_area").css("height",$(window).height()-40);
        }
}           
function showIframe(url) {
    $(window.parent.document).find("body").css({ height: $(window).height(), overflow: "hidden" }); //父窗口现有高度；改为一屏，让其不出现滚动条
     //添加背景遮罩
     var strHtml="<div id='ifShowDetailedBg' style='background:rgba(0,0,0,0.3);display:block;width:100%;height:100%;z-index:3;position:fixed;z-index:9000001;left:0px;top:0px;'>";
     strHtml=strHtml+"<iframe width='100%' height='100%'  src='"+url+"' id='ifShowDetailed' name='ifShowDetailed'  frameborder='no' marginheight='0' marginwidth='0' allowTransparency='true'></iframe>";
     strHtml=strHtml+"</div>"
     $("body").prepend(strHtml);
     if($(window).width()<480){
     $("#ifShowDetailedBg").height($(window).height()-60);
     $("#ifShowDetailed").height($(window).height()-60);
 }

}
function showIframe2(url) {
    $(window.parent.document).find("body").css({ height: $(window).height(), overflow: "hidden" }); //父窗口现有高度；改为一屏，让其不出现滚动条
     //添加背景遮罩
     var strHtml="<div id='ifShowDetailedBg' style='background:rgba(0,0,0,0.3);display:block;width:100%;height:100%;z-index:3;position:fixed;z-index:9000001;left:0px;top:0px;'>";
     strHtml=strHtml+"<iframe width='100%' height='100%' src='"+url+"' id='ifShowDetailed' name='ifShowDetailed'  frameborder='no' marginheight='0' marginwidth='0' allowTransparency='true'></iframe>";
     strHtml=strHtml+"</div>"
     $("body").prepend(strHtml);

}
function closeIframe(){
	$(window.parent.document).find("body").css({overflow: "auto" });  //恢复父窗口高度，出现滚动条；
	$(window.parent.document).find("body").find("#ifShowDetailedBg").remove();
}