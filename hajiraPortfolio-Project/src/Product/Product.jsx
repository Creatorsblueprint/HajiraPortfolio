import styles from "./Product.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ProductSection() {
  const price = 25; // adjust as needed

  const [email, setEmail] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Detect ?payment=success or ?payment=cancel 
  useEffect(() => {
    const params = new URLSearchParams(window.location.search); 
    const status = params.get("payment");
     if (status === "success") setPaymentStatus("success");
      if (status === "cancel") setPaymentStatus("cancel"); 
      
      // Remove the query from URL after showing banner 
      if (status) { 
        const cleanUrl = window.location.origin + window.location.pathname; 
        window.history.replaceState({}, "", cleanUrl); 
      } 
    }, []);

  const handleBuy = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price, // backend multiplies by 100
          email: "playlist@hajira.com", // or collect from user later
          successUrl: window.location.origin + "/?payment=success",
          cancelUrl: window.location.origin + "/?payment=cancel",
        }),
      });

      if (!response.ok) {
        console.error("Failed to create payment intent");
        return;
      }

      const data = await response.json();

      if (data.redirect_url) {
        window.location.href = data.redirect_url;
      } else {
        console.error("No redirect_url returned from backend");
      }
    } catch (error) {
      console.error("Error triggering payment:", error);
    }
  };

  return (
    <div className={styles.productSection}>
      {paymentStatus && (
        <div className={ paymentStatus === "success" ? styles.successBanner : styles.cancelBanner } >
          {paymentStatus === "success"
            ? "Payment successful — your playlist is ready!"
            : "Payment canceled — no charges were made."}
        </div>
      )}

      <div className={styles.productContainer}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.imageCard}>
            <img
              src="Images/Product/Playlist cover.png"
              alt="Curated Spotify Playlist cover"
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.infoWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className={styles.heading}>
            <h2>SPOTIFY</h2>
            <h1>Playlist</h1>
          </div>

          <div className={styles.description}>
            <p>
              A curated playlist that captures my exact moodboard energy. 
              Perfect for night drives, editing sessions, and getting in the content zone.
            </p>
            <p>
              You’re not just getting songs - you’re getting a full vibe that’s already
              tested on my audience and in my own creative workflow.
            </p>
          </div>

          <div className={styles.embed}>
            <iframe
              src="https://open.spotify.com/embed/playlist/4g1hScL2mbyR0VU2XZ551J"
              width="100%"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
              title="Spotify playlist preview"
            ></iframe>
          </div>

          <div className={styles.emailField}>
            <label>Your Email</label>
            <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.purchaseRow}>
            <div className={styles.priceBlock}>
              <span className={styles.label}>Price</span>
              <span className={styles.price}>AED {price}</span>
            </div>
            <button className={styles.buyButton} onClick={handleBuy}>
              BUY PLAYLIST
            </button>
          </div>

          <div className={styles.note}>
            <p>
              After payment, you’ll be redirected and receive instant access to the playlist link.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductSection;
