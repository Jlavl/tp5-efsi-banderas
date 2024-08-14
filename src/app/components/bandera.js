"use client";

import axios from 'axios';
export async function conseguirBandera() {
    const randomId = Math.floor(Math.random() * 219);
    const response = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images");
    //console.log(Object.values(response)); // Recorrer array con el numero de arriba de alguna manera
    //.filter(element => element.id = randomId)
    var data = (JSON.stringify(response))
    data = data.find(buscar => randomId)
    return response.data;
}
/*console.log(bandera);
      const resp = bandera;
      document.getElementById("e").innerHTML = resp
      */

