window.onload = function() {
	fetch_categories();
}

function fetch_categories() {
	end_point = "https://www.eventbriteapi.com/v3/categories/?token=BI4EZ4WPLG53F6RLTG7B";

	$.ajax({
		url: end_point,
		success: function(data) {
			console.log(data);
			category_list = data.categories;
			
			categories = $("#categories");
			categories.html("");
			var content = "";

			for(var i = 0; i < category_list.length; i++) {
				var category = category_list[i];

				content += "<div class="+category.short_name+">"
                    +"<h2>"+category.name+"</h2>"
                    +"<div class="+"button"+">"+"<a href="+"https://www.eventbriteapi.com/v3/events/search/?categories="+category.id+"&"+"token=BI4EZ4WPLG53F6RLTG7B"+">"+"View"+"</a>"+"</div>"
                    +"</div>";
			}
			
			categories.html(content);
		}
	});
}