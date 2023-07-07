
let rtAQI=null;
let predic=null;

export default function updateGraph(weathData, gasData){
    //Realtime Chart
    const gasComp = document.getElementById('compositionGas');
    let compData={
      labels: ['PM10','PM2.5','NO2','O3','SO2','CO/3.5','NH3','Pb'],
      datasets: [{
        label: 'Composition (in ppb) ',
        data: [gasData.PM10.concentration, weathData.current.air_quality.pm2_5, gasData.NO2.concentration, gasData.O3.concentration, gasData.SO2.concentration, gasData.CO.concentration/3.5], // gasData.nh3.concentration, gasData.Pb.concentration
        borderWidth: 2,
        borderColor: '#70e000',
        backgroundColor: '#70e000',
        hoverBorderColor: '#ffd500',
        hoverBackgroundColor: '#ffd500',
        Text: {
          FontFace: 4
        }
      }]
    }
    if(rtAQI!=null){
      rtAQI.destroy();
    }
    rtAQI = new Chart(gasComp, {
      type: 'bar',
      data: compData,
    });

    let max=gasData.overall_aqi - 20;
    let min=gasData.overall_aqi + 20;
    let getPast=()=>Math.random()*(max - min) + min;
    let makeAQIarr=()=>{
      let hour=((weathData.location.localtime).split(" ")[1].split(":")[0]);
      hour=Number(hour);
      let AQItimeframe=null;
      if(hour>=0 && hour<2)
        AQItimeframe=[gasData.overall_aqi];
      else if(hour>=2 && hour<4)
        AQItimeframe=[getPast(),gasData.overall_aqi];
      else if(hour>=4 && hour<6)
        AQItimeframe=[getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=6 && hour<8)
        AQItimeframe=[getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=8 && hour<10)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=10 && hour<12)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=12 && hour<14)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=14 && hour<16)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=16 && hour<18)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=18 && hour<20)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=20 && hour<22)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else if (hour>=22 && hour<24)
        AQItimeframe=[getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),getPast(),gasData.overall_aqi];
      else
        AQItimeframe=[23,33,54,60,45,58,64,72,86,67,55,45];
      return AQItimeframe;
    }

    //Prediction Chart
    const predData = document.getElementById('AQI_Predict');
    let AQI_data={
      labels: ['00-02 AM','02-04 AM','04-06 AM','06-08 AM','08-10 AM','10-12 AM','12-02 PM','02-04 AM','04-06 PM','06-08 PM','08-10 AM','10-12 PM'],
      datasets: [{
        label: 'AQI Index',
        data: makeAQIarr(),
        borderWidth: 3,
        borderColor: '#84EE3E',
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: '#ffd500'
      }]
    }
    if(predic!=null){
      predic.destroy();
    }
    predic = new Chart(predData, {
      type: 'line',
      data: AQI_data,
    });
}

Chart.defaults.bgColor = 'red';
Chart.defaults.font.size = 16;
Chart.defaults.font.weight = 600;
Chart.defaults.color = 'black';
Chart.defaults.font.family = 'DM Sans';