$(document).ready(function(){
	const articles = [{
		articleImageURL: "images/duster.jpg",
		articleTitle: "Updated Dacia Duster debuts with new engine and trim level",
		
	} , {
		articleImageURL: "images/autoshow.jpg",
		articleTitle: "Vancouver International Auto Show highlights"
	}];
	
	const links = [{
		linkURL: "#",
		linkTitle: "Toyota Tacoma TRD review",
	} , {
		linkURL: "#",
		linkTitle: "Five surprises from the All-New Renault Mégane",
	} , {
		linkURL: "#",
		linkTitle: "Ten things we learned this week: 28 October 2016 edition",
	}];
	
	const comments = [{
		commentatorName: "Mike",
		commentedArticle: "Updated Dacia Duster debuts with new engine and trim level ",
		commentatorComment: "It’s both simple and based on extremely well-proven (read: middle-aged) mechanicals from Renault.",
	} , {
		commentatorName: "Amy",
		commentedArticle:"Vancouver International Auto Show highlights",
		commentatorComment: "Though it’s a regional car show, it has plenty of variety for local consumers and car buffs.",
	} , {
		commentatorName: "Rick",
		commentedArticle: "Updated Dacia Duster debuts with new engine and trim level", 
		commentatorComment: "It’s not as economical nor as low-emission as many newer alternatives, but it’s still OK",
	}];
	
	
	function createAndInsertArticle(article){
		const articleTemplate = $("#article-template").text();
		const articleHTML = Mustache.render(articleTemplate, article);
		$("#left-container").append(articleHTML);
	}

	articles.forEach(article => createAndInsertArticle(article));

	$("#add-news").on("click", e => {
		const imageURL=prompt("Unesi lokaciju slike", "images/fiesta.jpg");
		if(!imageURL) {return; }
	
		const title = prompt ("Unesite naslov slike", "New Ford Fiesta specs");
		if(!title) {return; }
	
		createAndInsertArticle({
			articleImageURL: imageURL,
			articleTitle: title
		})
	});


	$("#left-container").on("click", ".article .delete-button", (e) => {
		const deleteButton = e.currentTarget;
		if(confirm("Delete news?")){
			const $article = $(deleteButton).parent(".article");
			$article.fadeOut(() => $article.remove());
		}
	});



	function createAndInsertLink(linkOnArticle){
		const linksTemplate = $("#links-template").text();
		const linksHTML = Mustache.render(linksTemplate, linkOnArticle);
		$("#right-container > .in-this-category").append(linksHTML);
	}

	links.forEach(linkOnArticle => createAndInsertLink(linkOnArticle));

	$(".plus-add-link").on("click", e => {
		const newLinkURL=prompt("Unesite poveznicu", "http://www.caranddriver.com/reviews/2017-mazda-cx-5-japan-spec-prototype-drive-review");
		if(!newLinkURL) {return; }
	
		const newLinkTitle = prompt ("Unesite naslov clanka", "A First Taste of Mazda's Next-Gen Crossover");
		if(!newLinkTitle) {return; }
		
		createAndInsertLink({
			linkURL: newLinkURL,
			linkTitle: newLinkTitle
		})
	});



	function createAndInsertComment(comment){
		const commentTemplate = $("#comment-template").text();
		const commentHTML = Mustache.render(commentTemplate, comment);
		$("#right-container > .comment-container").append(commentHTML);
	}

	comments.forEach(comment => createAndInsertComment(comment));

	$("#left-container").on("click", ".comment", (e) => {
		const comment = e.currentTarget;
		
		const name = prompt("Unesite ime", "Lucille");
		if(!name) {return; }
		
		const commentText = prompt ("Unesite komentar", "The Ford Fiesta’s greatest asset is its preternatural ability on the move and Ford has simply enhanced this further in the latest car. ");
		if(!commentText) {return; }
		
		
		const articleTitle = $(comment).parent(".article").children("h2").text();
		if(!articleTitle) {return;}
		
		createAndInsertComment({
			commentatorName: name,
			commentedArticle: articleTitle,
			commentatorComment: commentText
		})
	});
	
	$("#left-container").on("click"," .star",(e) => {
		const star = e.currentTarget;
		const $articleContainer = $(star).parents(".article");
		const $starContainer = $articleContainer.find(".star");
		$starContainer.removeClass("selected");
		let starNumber = $starContainer.index($(star));
		for(let i=0;i<=starNumber;i++){
			$($starContainer[i]).addClass("selected");
		  }
	});
	
});