import { useEffect } from "react";
import styles from './paymentPage.module.css';

export default function PaymentSuccess({ setPaymentActive}) {
  useEffect(() => {
    const timer = setTimeout(() => setPaymentActive(false), 4000);
    return () => clearTimeout(timer);
  }, [setPaymentActive]);

  return (
    <div className={styles.overlay}>
      <div className={styles.cardSuccess}>
        <h1>Payment Successful!</h1>
        <p>Automatically Closing Message</p>
        
      </div>
    </div>
  );
}