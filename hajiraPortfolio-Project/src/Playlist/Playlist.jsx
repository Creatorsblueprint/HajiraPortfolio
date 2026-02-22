import styles from "./Playlist.module.css";
import { motion } from "framer-motion";
import { round } from "math"
import { useEffect, useState, useRef } from "react";

function PlaylistSection() {




  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [code, setCode] = useState("AED");
  const [price, setPrice] = useState(19);
  const [symbol, setSymbol] = useState("AED");

  const basePrice = 19
  let baseRate = 1


  const currency = [
    { code: "AED", symbol: "AED", rate: 1 },
    { code: "USD", symbol: "$", rate: 0.272294 },
    { code: "EUR", symbol: "€", rate: 0.231967 },
    { code: "GBP", symbol: "£", rate: 0.202600 },
    { code: "SAR", symbol: "SAR", rate: 1.020980 },
    { code: "QAR", symbol: "QAR", rate: 0.992250 },
    { code: "BHD", symbol: "BHD", rate: 0.102649 },
    { code: "KWD", symbol: "KWD", rate: 0.083217 },
    { code: "OMR", symbol: "OMR", rate: 0.104819 },
    { code: "INR", symbol: "₹", rate: 24.9477 }
  ];

  const handleRateChange = () => {
    for (let c in currency) {
      // if current code is equal to the set code  set base rate to the current code rate and caltue and set the price accordingyly
      if (currency[c].code === code) {
        baseRate = currency[c].rate
        setPrice(basePrice * currency[c].rate);
        setSymbol(currency[c].symbol);
      }
    }
  }

  useEffect(() => {
    handleRateChange()

  }, [code])




  const handleEmail = (email) => {
    setEmail(email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emailRegex.test(email));
  }


  const handleBuy = async () => {


    try {

      let roundedPrice = round(price)


      const response = await fetch("https://hajirabackend-648711352735.me-west1.run.app/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: roundedPrice, // backend multiplies by 100
          email: email,
          currency: code,
          successUrl: "https://www.hajirakhan.com/?payment=success",
          cancelUrl: "https://www.hajirakhan.com/?payment=cancel",
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
    <div className={styles.playlistSection}>

      <div className={styles.playlistContainer}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.imageCard}>
            <img
              src="Images/Playlist/Playlist cover.png"
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
            <img
              src="Images/spotify/spotify.png"
              alt="Spotify playlist preview"
            />
          </div>



          <div className={styles.emailField}>
            <label>Your Email</label>
            <input type="email" placeholder="you@example.com" value={email} onChange={(e) => handleEmail(e.target.value)}
            />
            <p className={styles.emailInstruction}>check email for playlist after payment (if not there, check spam)</p>
          </div>

          <div className={styles.purchaseRow}>
            <div className={styles.currencyWrapper}>
              <span className={styles.label}>Currency</span>
              <select
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={styles.currencySelect}
                defaultValue="AED"

              >

                {currency.map((currency, index) => (
                  <option key={index} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.priceBlock}>
              <span className={styles.label}>Price</span>
              <span className={styles.price}>{round(price) + " " + symbol}</span>
            </div>
            <button disabled={!isEmailValid} className={styles.buyButton} onClick={() => { handleBuy() }}>
              BUY PLAYLIST
            </button>
          </div>


        </motion.div>
      </div>
    </div>
  );
}

export default PlaylistSection;
