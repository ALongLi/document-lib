var length=10
function fn(){
	console.log(this.length)
}
var obj={
	length:5,
	methods:function (fn){
		debugger
		fn()
		arguments[0]()
	},
}
obj.methods(fn,1)

function fun(n,o) { 
	console.log(o);
	return {
		fun:function (m) {  
			return fun(m,n)
		}
	}
}
var a=fun(0)
a.fun(1)
a.fun(2)
a.fun(3)
var b=fun(0).fun(1).fun(2).fun(3)
var c=fun(0).fun(1)
c.fun(2)
c.fun(3)

function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}