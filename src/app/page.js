'use client';
import styles from "./page.module.css";
//import Bandera from "./components/bandera.js"
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const response = fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
    .then((response) => response.json())// esto funciona 
    .then((bandera) => {
      console.log(bandera);
      const resp = bandera.toString();
      document.getElementById("e").innerHTML = resp 
    })
  })
    return (
    <main className={styles.main}>
      <p id="e">a</p>
    </main>
  );
}