var links=$(".lecture__item__link__name").length;
	var results=[];
	for (i = 0; i <= links; i++) {
		$(".lecture__item__link__name:nth("+i+")").click()
		$( document ).ready(function() {
			
	 
		});
		var linkItem=$(location).attr('href');
			results[i]=linkItem;
			//console.log(linkItem);
			history.go(-1);
   
   }
   console.log(JSON.stringify(results));
