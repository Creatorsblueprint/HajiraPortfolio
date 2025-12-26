import styles from "./Product.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ProductSection() {
  const price = 25; // adjust as needed

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);


  const handleEmail = (email) => {
    setEmail(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }


  const handleBuy = async () => {


    try {
      const response = await fetch("https://hajiraportfolio-backend.onrender.com/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price, // backend multiplies by 100
          email: email,
          successUrl: "https://lebohangdev.github.io/HajiraPortfolio/?payment=success",
          cancelUrl: "https://lebohangdev.github.io/HajiraPortfolio/?payment=cancel",
        }),
      });

      const data = await response.json();


      window.location.href = data.redirect_url;
      console.log("redirect url:", data.redirect_url)

    } catch (error) {
      console.error("Error triggering payment:", error);
    }
  };

  return (
    <div className={styles.productSection}>

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
            <input type="email" placeholder="you@example.com" value={email} onChange={(e) => handleEmail(e.target.value)}
            />
          </div>

          <div className={styles.purchaseRow}>
            <div className={styles.priceBlock}>
              <span className={styles.label}>Price</span>
              <span className={styles.price}>AED {price}</span>
            </div>
            <button disabled={!isEmailValid} className={styles.buyButton} onClick={() => { handleBuy() }}>
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
