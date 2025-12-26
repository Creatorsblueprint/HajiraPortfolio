import Nav from "./Nav/Nav.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import PaymentSuccess from "./paymentPopups/PaymentSuccess.jsx";
import PaymentCancel from "./paymentPopups/PaymentCancel.jsx";
import Product from "./Product/Product.jsx";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";



function App() {



  const [active, setActive] = useState('Home');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0)

  }, [active])



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
  }, [paymentStatus]);


  let lastScrollTop = 0;


  useEffect(() => {

    const container = document.getElementById("root");
    console.log(container)






    const isScrolling = (event) => {








      let currentScrollTop = event.target.scrollTop;

      // if currentScroll top is greater that last know scroll top postion set nav as visible else hidden
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
        console.log("hidden", currentScrollTop)

      } else if (currentScrollTop < lastScrollTop) {
        setIsVisible(true);
        console.log("visible", currentScrollTop)

      }

      // update lastScrollTop to currentscrll top 
      lastScrollTop = currentScrollTop;

    }





    window.addEventListener('scroll', isScrolling);

    return () => {
      window.removeEventListener('scroll', isScrolling);


    }

  }, [lastScrollTop]); // rune everytime isvisbile changes 


  return (
    <>


      <AnimatePresence>
        <motion.div
          key={isVisible}
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={isVisible === true ? "header" : "headerHidden"}
        >
          <Nav setActive={setActive} active={active} />

        </motion.div>
      </AnimatePresence>






      <div className="Content">
        <div className={active === 'Home' ? 'activeSection' : 'notActive'}>
          <About />

          <Home active={active} />



        </div>
        <div className={active === 'Product' ? 'activeSection' : 'notActive'}>
          <Product />
        </div>

        <div className={paymentStatus === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
          <PaymentSuccess setPaymentStatus={setPaymentStatus} />
        </div>

        <div className={paymentStatus === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
          <PaymentCancel setPaymentStatus={setPaymentStatus} />
        </div>



      </div>
      <div className="footer">
        <Footer setActive={setActive} active={active} />

      </div>




    </>
  )
}

export default App
