export default function updateAQIinfo(gasData){
    let AQIindic = document.getElementById('indicImg');
    let sev_info = document.getElementById('severity');
    let pub_msg = document.getElementById('msgbox');
    let AQInum = document.getElementById('AQI-num');
    document.getElementById('indicImg')
    document.getElementById('indicImg')
    let AQI=gasData.overall_aqi;
    if(AQI>0 && AQI<=50){
      AQInum.innerHTML=`${AQI}`
      AQIindic.style.marginLeft="2.8vw";
      sev_info.style.borderRight="5px solid green";
      sev_info.innerHTML='<p>Good</p>';
      pub_msg.innerHTML='<p>Air quality is satisfactory, air pollution poses little or no risk. People can go out for a walk.</p>'
    }
    else if(AQI>50 && AQI<=100){
      AQInum.innerHTML=`${AQI}`
      AQIindic.style.marginLeft="13.1vw";
      sev_info.style.borderRight="5px solid yellow";
      sev_info.innerHTML='<p>Satisfactory</p>';
      pub_msg.innerHTML='<p>Air quality is acceptable. There may be a risk for some people who are unusually sensitive to air pollution.</p>'
    }
    else if(AQI>100 && AQI<=200){
      AQInum.innerHTML=`${AQI}`
      AQIindic.style.marginLeft="23.4vw";
      sev_info.style.borderRight="5px solid orange";
      sev_info.innerHTML='<p>Moderate</p>';
      pub_msg.innerHTML='<p>Sensitive groups may experience health effects. General public is less likely to be affected.</p>'
    }
    else if(AQI>200 && AQI<=300){
      AQInum.innerHTML=`${AQI}`
      AQIindic.style.marginLeft="33.7vw";
      sev_info.style.borderRight="5px solid orangered";
      sev_info.innerHTML='<p>Unhealthy</p>';
      pub_msg.innerHTML='<p>General public may experience health effects; Sensitive groups can have more serious health effects.</p>'
    }
    else if(AQI>300 && AQI<=400){
      AQInum.innerHTML=`${AQI}`
      AQIindic.style.marginLeft="44vw";
      sev_info.style.borderRight="5px solid purple";
      sev_info.innerHTML='<p>Very Unhealthy</p>';
      pub_msg.innerHTML='<p>Health alert : The risk of health effects is increased for everyone, Stay at home.</p>'
    }
    else{
      AQInum.innerHTML=`${AQI}`
      AQIindic.style.marginLeft="54.3vw";
      sev_info.style.borderRight="5px solid red";
      sev_info.innerHTML='<p>Hazardous</p>';
      pub_msg.innerHTML='<p>Health warning of emergency conditions: everyone is more likely to be affected. Prefer to stay at home.</p>'
    }
}