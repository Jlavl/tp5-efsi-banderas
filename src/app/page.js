'use client';

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { conseguirBandera } from "./components/bandera";

export default function Home() {
  var [bandera, fijarBandera] = useState(1);
  const [loading, setLoading] = useState(true);

  const getBandera = async () => {
    setLoading(true);
    const bdata = await conseguirBandera()
    fijarBandera = bdata
    console.log(bandera)
    setLoading(false);
  }


  useEffect(() => {
    /*async function getBandera() {
      fijarme como uso esto
      
    }*/
    console.log(getBandera())
  }, []);
  
    return (
    <main className={styles.main}>
      <div className="container">
      <h1>Mi bandera se llama {bandera.name}</h1>
      <button
        type="button"
      >Blue</button>
      </div>
    </main>
  );
}