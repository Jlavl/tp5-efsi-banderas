"use client";

import axios from 'axios';
export async function conseguirBandera() {
    const randomId = Math.floor(Math.random() * 500);

    const response = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images");
    //console.log(Object.values(response.data.data)); // Recorrer array con el numero de arriba de alguna manera
    var resp = getRandomItem(response.data.data) 
     
    function getRandomItem(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[andomIndex];
        return item;
    }
    console.log(randomId)
    //console.log(resp)
    return resp;
}


/*console.log(bandera);
      const resp = bandera;
      document.getElementById("e").innerHTML = resp
      */

