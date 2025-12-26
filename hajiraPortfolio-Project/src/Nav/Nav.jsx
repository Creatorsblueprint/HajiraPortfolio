import { useEffect, useState } from "react";
import styles from "./Nav.module.css"

function Nav({ setActive, active }) {

    const [hamburger, setHamburger] = useState(false)





    return (


        <>
            <div className={styles.navSection}>
                <div className={styles.navContainer}>
                    <div className={styles.navigation}>
                        <div className={active === 'Home' ? styles.activeNav : styles.notActiveNav}>
                            <h1 onClick={(e) => { e.preventDefault(); setActive('Home') }}>Home</h1>
                            <hr className={active === 'Home' ? styles.activeNavUnderline : styles.notActiveUnderline} />
                        </div>

                        <div className={active === "Product" ? styles.activeNav : styles.notActiveNav}>

                            <h1 onClick={(e) => { e.preventDefault(); setActive('Product') }} >Product</h1>
                            <hr className={active === 'Product' ? styles.activeNavUnderline : styles.notActiveUnderline} />
                        </div>
                        <div className={active === 'Potfolio' ? styles.activeNav : styles.notActiveNav}>
                            <h1><a href="portfolio-Hajira-compressed.pdf" download>Portfolio</a></h1>



                        </div>
                        <div className={active === 'Contact' ? styles.activeNav : styles.notActiveNav}>
                            <h1 onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:workwithhajira@gmail.com'; }} >Contact</h1>

                        </div>

                    </div>
                    <div className={styles.userTitle}>
                        <h1>Hajira</h1>
                    </div>
                    <div className={styles.socialIcons}>

                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.instagram.com/hajirakhaaan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='; }} src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.tiktok.com/@hajirakhaaan?is_from_webapp=1&sender_device=pc'; }} src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:workwithhajira@gmail.com'; }} src="Images/socialIcons/gmail-Icon.png" alt="mail" />

                    </div>

                </div>



            </div>
            <div className={styles.hamburgerSection}>
                <div className={styles.hamburgerContainer}>
                    <div className={styles.userTitle}>
                        <h1>Hajira</h1>
                    </div>
                    <div className={styles.hamburgerIcon}>
                        <i className="ri-menu-line" onClick={((e) => { e.preventDefault(); setHamburger(true) })}></i>

                    </div>

                </div>
            </div>



            <div className={hamburger === true ? styles.hamburgerMenuActive : styles.hamburgerMenuNotActive}>
                <div className={styles.menuContainer}>
                    <div className={styles.header}>

                        <i class="ri-arrow-left-s-line" onClick={((e) => { e.preventDefault(); setHamburger(false) })}></i>
                    </div>
                    <div className={styles.menuNavigation}>
                        <div className={styles.title}>
                            <h1>Menu</h1>
                        </div>
                        <div className={active === 'Home' ? styles.activeNav : styles.notActiveNav}>
                            <i className="ri-home-heart-fill"></i>
                            <h1 onClick={(e) => { e.preventDefault(); setActive('Home'); setHamburger('false') }}>Home</h1>


                        </div>


                        <div className={active === "Product" ? styles.activeNav : styles.notActiveNav}>
                            <i className="ri-shopping-cart-2-line"></i>
                            <h1 onClick={(e) => { e.preventDefault(); setActive('Product') }} >Product</h1>
                        </div>
                        <div className={active === 'Potfolio' ? styles.activeNav : styles.notActiveNav}>
                            <i className="ri-file-2-fill"></i>
                            <h1><a href="portfolio-Hajira-compressed.pdf" download>Portfolio</a>

                            </h1>



                        </div>
                        <div className={active === 'Contact' ? styles.activeNav : styles.notActiveNav}>
                            <i className="ri-mail-ai-fill"></i>
                            <h1 onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:workwithhajira@gmail.com'; }}>Contact</h1>



                        </div>


                    </div>
                    <div className={styles.menuSocials}>
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.instagram.com/hajirakhaaan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='; }} src="Images/socialIcons/instagram-Icon.png" alt="instagram" />
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.tiktok.com/@hajirakhaaan?is_from_webapp=1&sender_device=pc'; }} src="Images/socialIcons/tiktok-Icon.png" alt="tiktok" />
                        <img onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:workwithhajira@gmail.com'; }} src="Images/socialIcons/gmail-Icon.png" alt="tiktok" />
                    </div>
                    <div className={styles.menuBottom}>
                        <h1>#TEAMHAJIRA</h1>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Nav