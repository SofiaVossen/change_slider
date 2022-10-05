function checkAirQuality(){
    let slider=document.getElementById("myRange").value;
    let hconcern=document.getElementById("hconcern");
    let heffect=document.getElementById("heffect");
    let color=document.getElementById("color");
    
    if (slider<=50){
        hconcern.innerHTML="Good";
        heffect.innerHTML="little or no risk";
        color.style.backgroundColor="green";
    } else if (slider>50 && slider<=100){
        hconcern.innerHTML="Moderate";
        heffect.innerHTML="Acceptable quality";
        color.style.backgroundColor="yellow";
    } else{
        hconcern.innerHTML="Unhealthy for sensitive groups";
        heffect.innerHTML="Generable publics not likely affected";
        color.style.backgroundColor="orange";
    }
        
}