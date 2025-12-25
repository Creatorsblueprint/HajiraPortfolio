import { useEffect } from "react";
import styles from './paymentPage.module.css';

export default function PaymentCancel({ setPaymentActive }) {
  useEffect(() => {
    const timer = setTimeout(() => setPaymentActive(false), 2000);
    return () => clearTimeout(timer);
  }, [setPaymentActive]);

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <h1>Payment Cancelled</h1>
        <p>Automatically Closing Message</p>
      </div>
    </div>
  );
}