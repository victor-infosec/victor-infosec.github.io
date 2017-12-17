var perPageItem = 2;
var leftNum = $('div.hidden').length;
var $loading = $("<div class='loading' style='text-align:center !important;'><img src='/public/img/loading.gif'></div>");
/**
 * show the hidden articles by the number of perPageItem
 */
function showArticles() {
	$('div.show:last').after($loading);
	perPageItem = perPageItem > leftNum ? leftNum : perPageItem;
	for(var i = 0; i < perPageItem; i++) {
		$('div.hidden:first').removeClass('hidden').addClass('show');
	}
	$('div.loading').remove();
	createWaypoint();
}

/**
 * init the frist batch of articles to activate waypoint
 */
function initArticles() {
	if(leftNum==0){
		return;
	}
	$('div.hidden:first').removeClass('hidden').addClass('show');
	var offsetBottom = getOffsetBottom('div.post.show:last');
	var documentHeight = $('div.post.show:last').height();
	try{
		perPageItem = Math.ceil(offsetBottom/documentHeight);
	}catch(e){
		console.error(e);
		return;
	}
	showArticles();
	perPageItem = 2;
}

/**
 * use waypoint to realize infinite scrolling
 * 
 */
function createWaypoint() {
	$('div.post.show:last').waypoint(function(direction) {
		if(leftNum == 0) {
			this.destroy();
			return; //all articles have been loaded
		}
		if(direction == "down") {
			leftNum = $('div.hidden').length;//recount the numbers of left articles
			this.destroy();
			showArticles();
		}
	}, {
		offset: 'bottom-in-view'
	});
}

initArticles(); //init the frist batch of articles to activate waypoint
