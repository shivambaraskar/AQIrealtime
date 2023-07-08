
export default function updateTable(gasData, weathData){
    let data = {
        min : 0,
        max : 0,
        avg : 0
    };
    let getData=(gasCon)=>{
        let max = gasCon - 10;
        let min = gasCon + 10;
        let arr=[-1,-1,-1];
        arr[0]=Math.abs(Math.random(gasCon)*(max - min) + min).toFixed(2);
        arr[1]=Math.abs(Math.random(gasCon)*(max - min) + min).toFixed(2);
        arr[2]=Math.abs(Math.random(gasCon)*(max - min) + min).toFixed(2);
        arr = arr.sort(function(a,b) { return a - b;});
        data.min=arr[0];
        data.avg=arr[1];
        data.max=arr[2];
    }
    let getCondition=(gasName, gasCon)=>{
        if (gasName='PM10'){
            if(gasCon<=50 && gasCon>0)
                return "Good";
            else if(gasCon<=100 && gasCon>50)
                return "Satisfactory";
            else if(gasCon<=250 && gasCon>100)
                return "Moderate";
            else if(gasCon<=350 && gasCon>250)
                return "Unhealthy";
                else if(gasCon<=430 && gasCon>350)
                return "Very Unhealthy";
            else if(gasCon>430)
                return "Hazardous";
            else
                return "N/A";
        }
        if (gasName='PM2_5'){
            if(gasCon<=30 && gasCon>0)
                return "Good";
            else if(gasCon<=60 && gasCon>30)
                return "Satisfactory";
            else if(gasCon<=90 && gasCon>60)
                return "Moderate";
            else if(gasCon<=120 && gasCon>90)
                return "Unhealthy";
                else if(gasCon<=250 && gasCon>120)
                return "Very Unhealthy";
            else if(gasCon>250)
                return "Hazardous";
            else
                return "N/A";
        }
        if (gasName='NO2'){
            if(gasCon<=40 && gasCon>0)
                return "Good";
            else if(gasCon<=80 && gasCon>40)
                return "Satisfactory";
            else if(gasCon<=180 && gasCon>80)
                return "Moderate";
            else if(gasCon<=280 && gasCon>180)
                return "Unhealthy";
                else if(gasCon<=400 && gasCon>280)
                return "Very Unhealthy";
            else if(gasCon>400)
                return "Hazardous";
            else
                return "N/A";
        }
        else if (gasName='O3'){
            if(gasCon<=50 && gasCon>0)
                return "Good";
            else if(gasCon<=100 && gasCon>50)
                return "Satisfactory";
            else if(gasCon<=168 && gasCon>100)
                return "Moderate";
            else if(gasCon<=208 && gasCon>168)
                return "Unhealthy";
                else if(gasCon<=748 && gasCon>208)
                return "Very Unhealthy";
            else if(gasCon>748)
                return "Hazardous";
            else
                return "N/A";
        }
        else if (gasName='SO2'){
            if(gasCon<=40 && gasCon>0)
                return "Good";
            else if(gasCon<=80 && gasCon>40)
                return "Satisfactory";
            else if(gasCon<=380 && gasCon>80)
                return "Moderate";
            else if(gasCon<=800 && gasCon>380)
                return "Unhealthy";
                else if(gasCon<=1600 && gasCon>800)
                return "Very Unhealthy";
            else if(gasCon>1600)
                return "Hazardous";
            else
                return "N/A";
        }
        else if (gasName='CO'){
            if(gasCon<=50 && gasCon>0)
                return "Good";
            else if(gasCon<=100 && gasCon>50)
                return "Satisfactory";
            else if(gasCon<=168 && gasCon>100)
                return "Moderate";
            else if(gasCon<=208 && gasCon>168)
                return "Unhealthy";
                else if(gasCon<=748 && gasCon>208)
                return "Very Unhealthy";
            else if(gasCon>748)
                return "Hazardous";
            else
                return "N/A";
        }
        else if (gasName='NH3'){
            if(gasCon<=200 && gasCon>0)
                return "Good";
            else if(gasCon<=400 && gasCon>200)
                return "Satisfactory";
            else if(gasCon<=800 && gasCon>400)
                return "Moderate";
            else if(gasCon<=1200 && gasCon>800)
                return "Unhealthy";
                else if(gasCon<=1800 && gasCon>1200)
                return "Very Unhealthy";
            else if(gasCon>1800)
                return "Hazardous";
            else
                return "N/A";
        }
        else if (gasName='Pb'){
            if(gasCon<=0.5 && gasCon>0)
                return "Good";
            else if(gasCon<=1 && gasCon>0.5)
                return "Satisfactory";
            else if(gasCon<=2 && gasCon>1)
                return "Moderate";
            else if(gasCon<=3 && gasCon>2)
                return "Unhealthy";
                else if(gasCon<=3.5 && gasCon>3)
                return "Very Unhealthy";
            else if(gasCon>3.5)
                return "Hazardous";
            else
                return "N/A";
        }
        else{
            return "N/A";
        }

    }
    document.getElementById('gasTable').innerHTML=`<thead>\
    <tr>\
        <th>Pollutent/Gas</th>\
        <th>Current</th>\
        <th>Minimum</th>\
        <th>Maximum</th>\
        <th>Average</th>\
        <th>Severity</th>\
    </tr>\
    </thead>\
    <tbody>\
    <tr>\
        <td class="e1">PM-10</td>\
        <td>${(gasData.PM10.concentration)}</td>\
        <td>${getData(gasData.PM10.concentration),data.min}2</td>\
        <td>${data.max}</td>\
        <td>${data.avg}</td>\
        <td>${getCondition("PM10", gasData.PM10.aqi)}</td>\
    </tr>\
    <tr>\
        <td class="e1">PM-2.5</td>\
        <td>${(weathData.current.air_quality.pm2_5).toFixed(2)}</td>\
        <td>${getData(weathData.current.air_quality.pm2_5),data.min}2</td>\
        <td>${data.max}</td>\
        <td>${data.avg}</td>\
        <td>${getCondition("PM2_5", weathData.current.air_quality.pm2_5)}</td>\
    </tr>\
    <tr>\
        <td class="e1">NO2</td>\
        <td>${(gasData.NO2.concentration)}</td>\
        <td>${getData(gasData.NO2.concentration), data.min}</td>\
        <td>${data.max}</td>\
        <td>${data.avg}</td>\
        <td>${getCondition("NO2", gasData.NO2.concentration)}</td>\
    </tr>\
    <tr>\
        <td class="e1">O3</td>\
        <td>${(gasData.O3.concentration)}</td>\
        <td>${getData(gasData.O3.concentration), data.min}</td>\
        <td>${data.max}</td>\
        <td>${data.avg}</td>\
        <td>${getCondition("O3", gasData.O3.concentration)}</td>\
    </tr>\
    <tr>\
        <td class="e1">SO2</td>\
        <td>${(gasData.SO2.concentration)}</td>\
        <td>${getData(gasData.SO2.concentration), data.min}</td>\
        <td>${data.max}</td>\
        <td>${data.avg}</td>\
        <td>${getCondition("SO2", gasData.SO2.concentration)}</td>\
    </tr>\
    <tr>\
        <td class="e1">CO</td>\
        <td>${(gasData.CO.concentration)}</td>\
        <td>${getData(gasData.CO.concentration), data.min}</td>\
        <td>${data.max}</td>\
        <td>${data.avg}</td>\
        <td>${getCondition("CO", gasData.CO.concentration)}</td>\
    </tr>\
    <tr>\
        <td class="e1">NH3</td>\
        <td>N/A</td>\
        <td>N/A</td>\
        <td>N/A</td>\
        <td>N/A</td>\
        <td>N/A</td>\
    </tr>\
    <tr>\
        <td class="e1">Pb</td>\
        <td>N/A</td>\
        <td>N/A</td>\
        <td>N/A</td>\
        <td>N/A</td>\
        <td>N/A</td>\
    </tr>\
    </tbody>`;
}