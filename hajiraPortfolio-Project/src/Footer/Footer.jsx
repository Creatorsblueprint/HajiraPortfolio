import { Link } from "react-router-dom";
import styles from './Footer.module.css'

function Footer({ setActive, active }) {
    return (
        <>
            <div className={styles.footerSection}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerHeader}>
                        <h1>Hajira</h1>
                    </div>
                    <div className={styles.footerNav}>
                        <div className={active === 'Home' ? styles.activeNav : styles.notActiveNav}>
                            <h1><Link to="/">Home</Link></h1>
                        </div>

                        <div className={active === "Product" ? styles.activeNav : styles.notActiveNav}>
                            <h1><Link to="/product">Product</Link></h1>
                        </div>

                        <div className={active === 'Contact' ? styles.activeNav : styles.notActiveNav}>
                            <h1><a href="mailto:workwithhajira@gmail.com">Contact</a></h1>
                        </div>
                    </div>
                    <div className={styles.footerSocials}>
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.instagram.com/hajirakhaaan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='; }} src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.tiktok.com/@hajirakhaaan?is_from_webapp=1&sender_device=pc'; }} src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:workwithhajira@gmail.com'; }} src="Images/socialIcons/gmail-Icon.png" alt="gmail" />
                    </div>

                    <div className={styles.footerBottom}>
                        <div className={styles.footerLine}>
                            <hr />
                        </div>
                        <div className={styles.footerBottomContainer}>
                            <div className={styles.footerCopyright}>
                                <p>Copyright 2026</p>
                                <i className="ri-copyright-line"></i>
                            </div>
                            <div className={styles.dev}>
                                <p>Developed By CreatorsBlueprint</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )

}

export default Footer