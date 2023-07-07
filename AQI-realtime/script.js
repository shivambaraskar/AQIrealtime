function moveNav(){
    let nav=document.getElementById('nav-menu').style;
    let btn=document.getElementById('menu').style;
    if(nav.display=="none" || nav.display==""){
        nav.display="block";
        btn.background="url(icon/cross.png)";
        btn.backgroundSize="cover";
    }
    else{
        nav.display="none";
        btn.background="url(icon/menu.png)";
        btn.backgroundSize="cover";
    }
}

function ChangeCol(name1, name2, name3){
    document.getElementById(name1).style.background="#1A1A1C";
    document.getElementById(name2).style.width="0%";
    document.getElementById(name3).style.display="none";
}

function togg(IDname1, IDname2, IDname3){
    let allHead=["gas-rt-div","gas-det-div","ml-predict-div"];
    let allBody=["gas-rt","gas-det","ml-predict"];
    let allCanvas=["compositionGas","gasTable","AQI_Predict"];
    for(let i=0; i<allHead.length; i++){
        if(allHead[i]!=IDname1){
            ChangeCol(allHead[i], allBody[i], allCanvas[i]);
        }
    }
    document.getElementById(IDname1).style.background="red";
    document.getElementById(IDname2).style.width="100%";
    if(IDname3!="gasTable"){
        document.getElementById(IDname3).style.display="block";}
    else{
        document.getElementById(IDname3).style.removeProperty('display');}
}

document.getElementById('menu').addEventListener("click",moveNav);
window.togg(`gas-rt-div`,`gas-rt`,`compositionGas`);