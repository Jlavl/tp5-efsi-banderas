'use client';

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { conseguirBandera } from "./components/bandera";

export default function Home() {
  var [banderaIC3, fijarBanderaIC3] = useState(4);
  var [banderaIC2, fijarBanderaIC2] = useState(3);
  var [banderaIC1, fijarBanderaIC1] = useState(2);
  var [bandera, fijarBandera] = useState(1);
  const [loading, setLoading] = useState(true);

  const getBandera = async () => {
    setLoading(true);
    const bdata = await conseguirBandera()
    fijarBandera(bdata)
    //console.log(bdata)
    setLoading(false);
  }
  const getBopcion = async () => {
    const bdata = await conseguirBandera()
    fijarBanderaIC1(bdata)
    const bdata2 = await conseguirBandera()
    fijarBanderaIC2(bdata2)
    const bdata3 = await conseguirBandera()
    fijarBanderaIC3(bdata3)
    return bdata.name;
    //console.log(bdata)
  }


  useEffect(() => {

    getBandera()
    getBopcion()

  }, []);
  
    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.center}>
          <img src={bandera.flag} width="40%" height="40%"></img>
        </div>
        <h1 className={styles.center}>Que bandera es esta?</h1>
      
        <button type="button"className={styles.button}>{banderaIC2.name}</button>
        <button type="button"className={styles.button}>{banderaIC1.name}</button>
        <button type="button"className={styles.button}>{bandera.name}</button>
        <button type="button"className={styles.button}>{banderaIC3.name}</button>
      </div>
    </main>
  );
}