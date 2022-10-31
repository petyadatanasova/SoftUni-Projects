async function getInfo() {
    try{
        let buses = document.getElementById("buses");
    buses.innerHTML="";
    let stopId = document.getElementById("stopId").value;
    let responce = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
    if(responce.ok==false){
        throw new Error(`Error`);
    }
    let busStop = await responce.json();
    let stopName = document.getElementById("stopName");
    stopName.textContent = busStop.name;

    

    for (const [key, value] of Object.entries(busStop.buses)) {
        let li = document.createElement("li");
        li.textContent=`Bus ${key} arrives in ${value} minutes`;
        buses.appendChild(li);
    }
    document.getElementById("stopId").value = "";
    }catch(err){
        let stopName = document.getElementById("stopName");
        stopName.textContent="Error";
        document.getElementById("stopId").value = "";
    }
}