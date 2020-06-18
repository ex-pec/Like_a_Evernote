var sayac=0;
function divekle() {
	var yenidiv = document.createElement('div'); 
	yenidiv.setAttribute("id", sayac);
	yenidiv.setAttribute("class", "ekdiv");
    $("#notlar").append(yenidiv);
    sayac++;
}
function kaydet() {
	if(sayac==1){
   	var t = document.getElementById('başlık').value;
   	var z="<h6>"
   	var x="</h6>"
   	$("#0").append(z+t+x);

   	var y = document.getElementById('text').value;
   	var b="<br>";
   	$("#0").append(b+y);
   }
   else if(sayac==2){
   	var t = document.getElementById('başlık').value;
   	var z="<h6>"
   	var x="</h6>"
   	$("#1").append(z+t+x);

   	var y = document.getElementById('text').value;
   	var b="<br>";
   	$("#1").append(b+y);
   }
   else if(sayac==3){
   	var t = document.getElementById('başlık').value;
   	var z="<h6>"
   	var x="</h6>"
   	$("#2").append(z+t+x);

   	var y = document.getElementById('text').value;
   	var b="<br>";
   	$("#2").append(b+y);
   }
   else if(sayac==4){
   	var t = document.getElementById('başlık').value;
   	var z="<h6>"
   	var x="</h6>"
   	$("#3").append(z+t+x);

   	var y = document.getElementById('text').value;
   	var b="<br>";
   	$("#3").append(b+y);
   }
   else if(sayac==5){
   	var t = document.getElementById('başlık').value;
   	var z="<h6>"
   	var x="</h6>"
   	$("#4").append(z+t+x);

   	var y = document.getElementById('text').value;
   	var b="<br>";
   	$("#4").append(b+y);
   }
   else{
   	var t = document.getElementById('başlık').value;
   	var z="<h6>"
   	var x="</h6>"
   	$("#6").append(z+t+x);

   	var y = document.getElementById('text').value;
   	var b="<br>";
   	$("#6").append(b+y);
   }
}