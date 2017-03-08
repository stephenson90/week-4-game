


$(document).ready(function(){

	var score = 0;
	var wins = 0;
	var losses = 0;
	var nbr = Math.floor(Math.random()*113) + 18;
	var rdVal = Math.floor(Math.random()*12)+1;
	var blVal = Math.floor(Math.random()*12)+1;
	var yel = Math.floor(Math.random()*12)+1;
	var grn = Math.floor(Math.random()*12)+1;
	
	
	
	
	
	


	function setNbr(){

	rdVal = Math.floor(Math.random()*12)+1 ;
	blVal = Math.floor(Math.random()*12)+1;
	yel = Math.floor(Math.random()*12)+1;
	grn = Math.floor(Math.random()*12)+1;
	nbr = Math.floor(Math.random()*113) + 18;
	score=0;
}

	
	$("#ranNbr").html(nbr);
	$("#wins").html("Wins: " + wins);
	$("#losses").html("Losses: " + losses);
	$("#scr").html(score);

			$("#green").click(function(){
			score = score + grn;
			$("#scr").html(score);
			checkWin();

			});

			$("#blue").click(function(){
			score = score + blVal;
			$("#scr").html(score);
			checkWin();
			});

			$("#yellow").click(function(){
			score = score + yel;
			$("#scr").html(score);
			checkWin();
			});

			$("#red").click(function(){
			score = score + rdVal;
			$("#scr").html(score);
			checkWin();

						
		});		

			console.log(score);


	function checkWin(){

	if( score == nbr){
		wins++;
		$("#wins").html("Wins: " + wins);
		setNbr();
		



	}

	else if (score > nbr){
		losses++;
		$("#losses").html("Losses: " + losses);
		setNbr();

	}
}

	console.log(score);
		console.log(nbr);



		
	

	



	

});

