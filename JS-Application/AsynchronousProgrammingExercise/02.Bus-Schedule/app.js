function solve() {

    let currentStopID = "depot";
    let stopName=""
    const info = document.querySelector("#info span.info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");


    async function depart() {
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStopID} `)

            if (response.ok == false) {
                throw new Error("Error");
            }
            const stop = await response.json();
            stopName=stop.name;
            currentStopID=stop.next;
            info.textContent = `Next stop ${stopName}`;
        
            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (err) {
            info.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }

    }

    async function arrive() {
        
        info.textContent = `Arriving at ${stopName}`; 
        departBtn.disabled = false;
        arriveBtn.disabled = true;

    }

    return {
        depart,
        arrive
    };

}

let result = solve();
