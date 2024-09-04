'use client';

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { conseguirBandera } from "./components/bandera";

export default function Home() {
  const [bandera, fijarBandera] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBandera = async () => {
    setLoading(true);
    const bdata = await conseguirBandera()
    fijarBandera(bdata)
    setLoading(false);
  }


  useEffect(() => {
    /*async function getBandera() {
      
    }*/
    console.log(getBandera())
  }, []);
  
    return (
    <main className={styles.main}>
      <div className="container">
      <h1>Mi bandera se llama {bandera.name}</h1>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
      </div>
    </main>
  );
}