'use client';

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { conseguirBandera } from "./components/bandera";

export default function Home() {
  const [bandera, fijarBandera] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBandera = async () => {
    setLoading(true);
    const data = await conseguirBandera()
    fijarBandera(data)
    setLoading(false);
  }


  useEffect(() => {
    getBandera();
  }, []);
  
    return (
    <main className={styles.main}>
      <div className="container"></div>
    </main>
  );
}