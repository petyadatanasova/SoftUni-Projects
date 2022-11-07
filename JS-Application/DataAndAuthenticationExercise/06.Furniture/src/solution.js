let userData = null;
window.addEventListener("load", solve);
  
async function solve() {
  debugger
  userData = JSON.parse(sessionStorage.getItem('userData'));
  if (userData === null) {

    let response = await fetch("http://localhost:3030/data/furniture");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("no furniture");
    }
    let tbody = document.querySelector("tbody");
    data.forEach(item => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>
                <img
                    src="${item.img}">
            </td>
            <td>
                <p>${item.name}</p>
            </td>
            <td>
                <p>${item.price}</p>
            </td>
            <td>
                <p>${item.factor}</p>
            </td>
            <td>
                <input type="checkbox" disabled/>
            </td>`;
      tbody.appendChild(tr);
    });
  }else{
    window.location="./homeLogged.html"
  }

}

solve();