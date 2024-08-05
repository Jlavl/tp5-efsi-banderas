"use client";

import axios from 'axios';
export async function Bandera() {
    const response = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
    console.log(response)
    return response.data;
}