
var hesaplaBtn=document.getElementById("firsttermbtn");
var allyear=document.getElementById("allyearbtn");


hesaplaBtn.onclick=function(){
    var cumulative1 = 0.075 * Number(document.getElementById('Cumulative-1').value);
    var cumulative2 = 0.075 * Number(document.getElementById('Cumulative-2').value); 
    var writing = 0.025 * Number( document.getElementById('Writing').value);
    var speaking =  0.025 * Number(document.getElementById('Speaking').value) ;
    var portfolio =  0.075 * Number(document.getElementById('Portfolio-Assignment').value) ;
    var basiccourse =  0.025 * Number(  document.getElementById('Basic-Course-Assignment').value);
    var midYear = 0.2 * Number(document.getElementById('MidYear').value) ;    
    var firstterm =2 * (cumulative1 + cumulative2 + writing + speaking + portfolio + basiccourse + midYear);
    document.getElementById("term1").innerHTML ='The first term average is ' + firstterm;
    document.getElementById("term1").style.display = 'block';
}

allyear.onclick=function(){
    var cumulative1 = 0.075 * Number(document.getElementById('Cumulative-1').value);
    var cumulative2 = 0.075 * Number(document.getElementById('Cumulative-2').value); 
    var writing = 0.025 * Number( document.getElementById('Writing').value);
    var speaking =  0.025 * Number(document.getElementById('Speaking').value) ;
    var portfolio =  0.075 * Number(document.getElementById('Portfolio-Assignment').value) ;
    var basiccourse =  0.025 * Number(  document.getElementById('Basic-Course-Assignment').value);
    var midYear = 0.2 * Number(document.getElementById('MidYear').value) ; 
    var cumulative3 = 0.075 * Number(document.getElementById('Cumulative-3').value);
    var cumulative4 = 0.075 * Number(document.getElementById('Cumulative-4').value); 
    var writing2 = 0.025 * Number( document.getElementById('Writing2').value);
    var speaking2 =  0.025 * Number(document.getElementById('Speaking2').value) ;
    var portfolio2 =  0.075 * Number(document.getElementById('Portfolio-Assignment2').value) ;
    var basiccourse2 =  0.025 * Number(  document.getElementById('Basic-Course-Assignment2').value);
    var endYear = 0.2 * Number(document.getElementById('EndYear').value) ;   
    var firstterm =cumulative1 + cumulative2 + writing + speaking + portfolio + basiccourse + midYear + cumulative3 + cumulative4 + writing2 + speaking2 + portfolio2 + basiccourse2 + endYear;

    document.getElementById("term2").innerHTML ='The all year average is ' + firstterm;
    document.getElementById("term2").style.display = 'block';
}