/**
 * encode the keyword before submit
 */
function encodeKeyword() {
	var keywordStr = $('input.js-typeahead').val();
	var ua = navigator.userAgent.toLowerCase();	
	if (/iphone|ipad|ipod/.test(ua)) {
		var baseUrl = "https://"+window.location.host+"/search/?q="+ encodeURI(keywordStr);
		window.location.href= baseUrl;
	}else{
		$('input.js-typeahead').val(encodeURI(keywordStr));
	}
}

/**
 * get the bottom offset of an element
 */
function getOffsetBottom(selector){
	var offsetTop = $(selector).offset().top;
	var documentHeight = $(selector).height();
	var offsetBottom = $(window).height()-(offsetTop+documentHeight);
	return offsetBottom;
}
