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
    fijarBandera(bdata)
    //console.log(bdata)
    setLoading(false);
  }
  function getBopcion() {
    const bdata = conseguirBandera()
    return bdata.name;
    //console.log(bdata)
  }


  useEffect(() => {

    getBandera()

  }, []);
  
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.center}>
          <img src={bandera.flag} width="40%" height="40%"></img>
        </div>
        <h1>Que bandera es esta?</h1>
      
        <button type="button">{bandera.name}</button>
      </div>
    </main>
  );
}