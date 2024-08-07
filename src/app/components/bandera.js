"use client";

import axios from 'axios';
export async function Bandera() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images");
    return response.data;
}
/*console.log(bandera);
      const resp = bandera;
      document.getElementById("e").innerHTML = resp
      */