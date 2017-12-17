var titles = new Array();
var urls = new Array();
var contents = new Array();
var itemList = new Array();
$.getJSON("/public/json/search.json").done(function (data) {
	typeof $.typeahead === 'function' && $.typeahead({
		input: ".js-typeahead",
		minLength: 1,
		maxItem: 15,
		order: "asc",
		hint: false,
		maxItemPerGroup: 5,
		href: "{{site.baseurl}}",
		emptyTemplate: 'No result for "{{query}}"',
		source: {
        	items: {
                data: data
            }
        },
        display:['title','content'],
	    template: function(query, item) {
//	    	console.error(item);
			return '<span class="row">' +
				'{{title}}' +
//				'{{content}}' +
				"</span>"
		},
		callback: {
			onClickAfter: function(node, a, item, event) {
				event.preventDefault();
				window.open(item.url);
	            return item;
			}
		},
		debug: true
	});
}).error(function(data, b) { 
//	console.error(data);
	console.log("json解析有误,搜索功能暂不可用"); 
});
