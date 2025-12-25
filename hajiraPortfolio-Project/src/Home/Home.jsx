import styles from './Home.module.css';

import { motion} from "framer-motion"

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Product from '../Product/Product.jsx';

function Home(){

    let Socials = [
        {
            social: 'Instagram',
            description: 'Fashion | Lifestyle | Creator Just a girl who drives with elite music taste',
            followers: '138K',
            img:'Images/SocialImages/haju1.jpg',
            icon:'Images/socialIcons/instagram-Icon.png',
            link: 'https://www.instagram.com/hajirakhaaan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            posts: 61
        },
        {
            social: 'TikTok',
            description: 'Fast-paced, trend-savvy videos built for engagement',
            followers: '136K',
            img:'Images/SocialImages/haju2.jpg',
            icon:'Images/socialIcons/tiktok-Icon.png',
            link: 'https://www.tiktok.com/@hajirakhaaan?is_from_webapp=1&sender_device=pc',
            posts: 155
        },
       
    ];
    let masonryIMAGES = [
        { img: 'Images/ImagePreview/img1.jpg' },
        { img: 'Images/ImagePreview/img2.jpg' },
        { img: 'Images/ImagePreview/img3.jpg' },
        { img: 'Images/ImagePreview/img4.jpg' },
        { img: 'Images/ImagePreview/img5.jpg' },
        { img: 'Images/ImagePreview/img6.jpg' },
        { img: 'Images/ImagePreview/img7.jpg' },
        { img: 'Images/ImagePreview/img8.jpg' },
        { img: 'Images/ImagePreview/img9.jpg' },
    ];

     let companyIMAGES = [
        { img: 'Images/Companies/Activia_Logo.png' },
        { img: 'Images/Companies/QV_Logo.png' },
        { img: 'Images/Companies/DU_Logo.png' },
        { img: 'Images/Companies/Mcdonalds_Logo.png' },
        { img: 'Images/Companies/Dunkin_Logo.png' },
        { img: 'Images/Companies/Adnoc_Logo.png' },
        { img: 'Images/Companies/Dubai_Logo.png' },
        { img: 'Images/Companies/Bath_Logo.png' },
        
    ];
 

    

    return(
        <>
        
        <div className={styles.homeContainer}>
            <div className={styles.socialsSection}>
                
                
                <div className={styles.socialsContainer}>

                 

                    
                   

                   

                    {Socials.map((S, index) =>(
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3, once: false }}
                        transition={{ delay: index * 0.1,}}
                        className={styles.socialCard}
                        >
                        
                        <div key={index}>
                           {index === 1 && 
                           <div className={styles.socialsHeader}>
                                <h1>#TEAMHAJIRA</h1>
                            </div>}

                        

                        

                                
                            <div className={styles.content1}>
                                <div className={styles.imgHolder}>
                                    <img src={S.img} alt="" />
                                </div>
                                <div className={styles.header}>
                                    <h1>{S.social}</h1>
                                    <img src={S.icon} alt="" />

                                </div>
                                <div className={styles.description}>
                                    <p>{S.description}</p>
                                </div>


                            </div>
                            <div className={styles.content2}>
                                <div className={styles.socialNumbers}>
                                    <div className={styles.followers}>
                                        <i className="ri-user-line"></i>
                                        <p>{S.followers}</p>
                                    </div>
                                    <div className={styles.postCount}>
                                        <i className="ri-multi-image-line"></i>
                                        <p>{S.posts}</p>
                                    </div>

                                </div>
                                <div className={styles.followButton} onClick={(e) =>{e.preventDefault(); window.location.href = S.link}}>
                                    
                                    <button >Follow Me</button>
                                    <i class="ri-add-fill"></i>
                                </div>
                            </div>
                            


                            
                        </div>
                        </motion.div>

                    ))}

                    


                </div>



                    
                
                


                
            </div>
            <div className={styles.collaborationsSection}>
               
                
                
                <div className={styles.collaborationsContainer}>
                   
                    <div className={styles.contents}>
                        
                        <div className={styles.content1}>
                            <div className={styles.collaborationsHeader}>
                                <h1>Collaborations</h1>

                            </div>
                        
                            <div className={styles.collabStats}>
                                <div className={styles.stat1}>
                                    <h1>16 +</h1>
                                    <p>Companies Represented</p>
                                </div>
                                <div className={styles.stat2}>
                                    <h1>100 +</h1>
                                    <p>#ad Content filmed</p>
                                </div>
                            </div>
                            <div className={styles.contactButton}>
                                <button onClick={(e) =>{e.preventDefault(); window.location.href = 'mailto:workwithhajira@gmail.com'; }}>CONTACT</button>
                                <p>Lets Work Together!</p>

                            </div>

                        </div>
                        <div className={styles.content2}>
                        
                            <div className={styles.title}>
                               <p>I’ve had the chance to work with brands of all sizes, from local businesses to major names.</p>

                            </div>
                            <div className={styles.description}>
                               <p>I’ve created custom ad content for companies like Dunkin Donuts, DU, and ADNOC, blending creativity with real results in reach, engagement, and impact.</p>

                            </div>

                        </div>

                    </div>

                    <div className={styles.adCompanies}>
                        {companyIMAGES.map((CI, index) =>(
                            <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.1, once: false }}
                            transition={{ delay: index * 0.05,}}
                    
                            >

                                <img src={CI.img} alt="" />
                                    
                       
                   
                                
                            </motion.div>

                        ))}

                    </div>


                   

                    
                    
                    
                    
                    


                </div>

            </div>

            <div className={styles.previewSection}>
                <div className={styles.previewContainer}>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                        <Masonry columnsCount={3} gutter="15rem">

                            {masonryIMAGES.map((MI, index) =>(
                                <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.1, once: false }}
                                transition={{ delay: index * 0.1,}}
                                className={styles.socialCard}
                                >
                                
                        
                                    <div className={styles.ProjectImg} key={index} >
                                        <img src={MI.img} alt='' />
                                    </div>
                                </motion.div>
                            

                            

                        
                    ))}



                </Masonry>


            
            </ResponsiveMasonry>
                </div>
            </div>

            
           
            
            
        </div>
        
        <div className={styles.productWrapper} id="product"> 
            <Product /> 
        </div>
        
        </>
    )
}

export default Home