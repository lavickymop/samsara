// Any of the following formats may be used
$(document).ready(function(){
//    localStorage.clear();
//    alert(localStorage.key(0))
    var val = 1;
	$(".btn-ajouter").click(function(){
       
        
        if($('.oui').is(':checked')){
             localStorage.setItem($(".jour").val(), $(".oui").val());
        }else if($('.non').is(':checked')){
            
             localStorage.setItem($(".jour").val(), $(".non").val());
        }
       
        
        
		
	})
	

var circle =28;
var fin_regle = 5;
var debut_sec = 6;
var fin_sec =11; 
var labels_tb = [];
var cou = "rgba(75,192,192,1)";
var data_tb = [];
var bg_tb = [];

for(var i=1; i< circle; i++){
//	labels_tb += [i];
	labels_tb.push(i);
	data_tb.push(1);
if(!localStorage.getItem(i)){
   localStorage.setItem(i, "")
}
   
                
                 if(localStorage.getItem(i) == "1" )   {
                    bg_tb.push(" #ef6d7b");

                }else if(localStorage.getItem(i) == "0"){
                    bg_tb.push("#30B0DE");
                }else{
                   bg_tb.push("#CCCCCC"); 
                }
          
}

const CHART = document.getElementById("donut");



 Chart.defaults.global.responsive= true;
 Chart.defaults.global.maintainAspectRatio= true;

Chart.defaults.global.legend.display = false;
let donut = new Chart(CHART, {
	
	type: 'doughnut',
	data: {
		labels: labels_tb,
       
		datasets: [
			{
				label: bg_tb,
				fill: false,
				lineTension: 0.1,
				backgroundColor: bg_tb,
				borderColor: "#FFF",
				data: data_tb,
				spanGaps: true,
        	}

		]

	},
	options:{
		cutoutPercentage: 70,
		animation:{
			
		},
        title:{
            display: true,
            text: "Cicle"
        }
	}
})
console.log(donut);
})

//else if(localStorage.getItem("lastname")== "false" ){
//		bg_tb.push("#30B0DE");
//	}


//
//for ( var j = 0;  j<localStorage.length  ; j++ ) {
//                 if(localStorage.key(j) == i){
//                     console.log('ok');
//                 }
//                 if(localStorage.getItem(i) == "1" && localStorage.key(j) == i )   {
//                    bg_tb.push(" #ef6d7b");
//
//                }else if(localStorage.getItem(i) == "0" && localStorage.key(j) == i){
//                    bg_tb.push("#30B0DE");
//                }
//            } 

