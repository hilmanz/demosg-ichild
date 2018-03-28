
var dateSelected="";
var responseDate=[];
function CalendarShow(dateArray){
	this.dateHtml="";
	this.timeHtml="";
	this.dateArr=dateArray;
	this.dateOrder=function(strId){
		
		//date order
		var dateOrderArr = [];
		for (var i=0; i<this.dateArr.length; i++){
			var tmp = {};
			tmp.group=this.dateArr[i].group;
			tmp.subject=this.dateArr[i].subject;
			tmp.time=this.dateArr[i].time;
			tmp.room=this.dateArr[i].room;
			tmp.teacherNo=this.dateArr[i].teacherNo;
			tmp.memberNo=this.dateArr[i].memberNo;
			tmp.date = new Date(this.dateArr[i].date.replace(/-/g,'/'));
			dateOrderArr.push(tmp);
		}
		dateOrderArr.sort(function(a,b){
			return a.date - b.date;
		});
		
		for (var i=0; i<dateOrderArr.length; i++){
			$(strId+" .time_list").append(this.dateHtml);
			var dateStr=this.formatTime(dateOrderArr[i].date);
			var dateStr2=this.formatTime2(dateOrderArr[i].date);
			$(strId+" .time_list").children(".date:eq("+i+")").attr("id",dateStr.replace(/\//g,''));
			$(strId+" .time_list").children(".date:eq("+i+")").children("h1").find("label").append(dateStr2);

			if(getValue(dateOrderArr[i],"time")){
				for(var j=0;j<dateOrderArr[i].time.length;j++){
					
					$(strId+" .time_list").children(".date:eq("+i+")").children("ul").append(this.timeHtml).children("li:eq("+j+")").find("label").append(dateOrderArr[i].time[j]);
				}
			}
			if(getValue(dateOrderArr[i],"room")){
				for(var j=0;j<dateOrderArr[i].room.length;j++){
					$(strId+" .time_list").children(".date:eq("+i+")").children("ul").children("li:eq("+j+")").find(".room").append(dateOrderArr[i].room[j]);
				}
			}
			if(getValue(dateOrderArr[i],"teacherNo")){
				for(var j=0;j<dateOrderArr[i].teacherNo.length;j++){
					$(strId+" .time_list").children(".date:eq("+i+")").children("ul").children("li:eq("+j+")").find(".teacherNo").append(dateOrderArr[i].teacherNo[j]);
				}
			}
			if(getValue(dateOrderArr[i],"memberNo")){
				for(var j=0;j<dateOrderArr[i].memberNo.length;j++){
					$(strId+" .time_list").children(".date:eq("+i+")").children("ul").children("li:eq("+j+")").find(".memberNo").append(dateOrderArr[i].memberNo[j]);
				}
			}
			if(getValue(dateOrderArr[i],"group")){
				for(var j=0;j<dateOrderArr[i].group.length;j++){
					$(strId+" .time_list").children(".date:eq("+i+")").children("ul").children("li:eq("+j+")").find(".groupName").append(dateOrderArr[i].group[j]);
				}
			}
			if(getValue(dateOrderArr[i],"subject")){
				for(var j=0;j<dateOrderArr[i].subject.length;j++){
					$(strId+" .time_list").children(".date:eq("+i+")").children("ul").children("li:eq("+j+")").find(".subjectName").append(dateOrderArr[i].subject[j]);
				}
			}
		}
	}

	this.formatTime=function(d){
			var date = new Date(d);
			var dayetime=((date.getDate() > 9) ? date.getDate() : "0" + date.getDate());
			var month=((parseInt(date.getMonth()) + 1)>9) ? (parseInt(date.getMonth()) + 1) :"0" + (parseInt(date.getMonth()) + 1);
			var year = date.getFullYear();
			var dateStr= dayetime + "/" + month + "/" + year;
			return dateStr;
		}
	this.formatTime2=function(d){
			var date = new Date(d);
			var dayetime=((date.getDate() > 9) ? date.getDate() : "0" + date.getDate());
			var month=((parseInt(date.getMonth()) + 1)>9) ? (parseInt(date.getMonth()) + 1) :"0" + (parseInt(date.getMonth()) + 1);
			var year = date.getFullYear();
			if(month==01){
				month="Jan";
				}else if(month==02){
				month="Feb";
				}else if(month==03){
				month="Mar";
				}else if(month==04){
				month="Apr";
				}else if(month==05){
				month="May";
				}else if(month==06){
				month="Jun";
				}else if(month==07){
				month="Jul";
				}else if(month==08){
				month="Aug";
				}else if(month==09){
				month="Sep";
				}else if(month==10){
				month="Oct";
				}else if(month==11){
				month="Nov";
				}else if(month==12){
				month="Dec";
				}
			
			
			var dateStr= "<span>"+ dayetime + "</span> " + month
			return dateStr;
		}
	this.calendarReset=function(strId,strId2){
		var array=[];
		for(var i=0; i<this.dateArr.length; i++){
			var tmp={};
			tmp.start=this.dateArr[i].date;
			array.push(tmp);
		}
		$(strId).fullCalendar({
				events: array
			});
		this.calendarResetMethod(strId2);
	}
	this.calendarResetCreate=function(strId){
		$(strId).fullCalendar();
	}
	this.calendarResetMethod=function(strId){
		$(strId+' .fc-content-skeleton tbody td').each(function(i){
			if($(this).attr('class')=='fc-event-container'){
				var dateformat=$(strId+' .fc-content-skeleton thead td:eq('+i+')').attr("data-date");
				$(strId+' .fc-content-skeleton thead td:eq('+i+')').addClass('eventCnt').wrapInner('<a></a>');
				$(strId+' .fc-content-skeleton thead td:eq('+i+')').children("a").attr("href",function(){return "#"+formatTimeId(dateformat)});
				if($(strId+' .fc-content-skeleton thead td:eq('+i+')').attr("data-date")==dateSelected){
					$(strId+' .fc-content-skeleton thead td:eq('+i+')').addClass('selected');
				}
			}
		});
		$(strId+' .fc-content-skeleton tbody').remove();
		$(strId+' .fc-content-skeleton thead td a').click(function(){
			$(strId+' .fc-content-skeleton thead td').removeClass('selected');
			$(this).parent().addClass('selected');
			dateSelected=$(this).parent().attr("data-date");
			$(this).anchorGoWhere({target:1});
			$(strId+" .time_list").find(".date").removeClass("selected");
			$(strId+" .time_list").find($(this).attr("href")).addClass("selected");
		});
	}
}

function getValue(object,key){
		for (var property in object){
			if(property==key){		
				if(object[property]==undefined){
					return false;
				}else{
					return true;
				}
			}
		}
	   return false;
	}
function formatTimeId(d){
		var date = new Date(d);
		var dayetime=((date.getDate() > 9) ? date.getDate() : "0" + date.getDate());
		var month=((parseInt(date.getMonth()) + 1)>9) ? (parseInt(date.getMonth()) + 1) :"0" + (parseInt(date.getMonth()) + 1);
		var year = date.getFullYear();
		var dateStr= dayetime + month + year;
		return dateStr;
	}
jQuery.fn.anchorGoWhere = function(options){
	var obj = jQuery(this);
	var defaults = {target:1, timer:1000};
	var o = jQuery.extend(defaults,options);
	obj.each(function(i){
		jQuery(obj[i]).click(function(){
			var _rel = jQuery(this).attr("href").substr(1);
			switch(o.target){
				case 1: 
					var targetTop = jQuery("#"+_rel).offset().top;
					jQuery("html,body").animate({scrollTop:targetTop}, o.timer);
					break;
				case 2:
					var targetLeft = jQuery("#"+_rel).offset().left;
					jQuery("html,body").animate({scrollLeft:targetLeft}, o.timer);
					break;
			}
			return false;
		});
	});
};