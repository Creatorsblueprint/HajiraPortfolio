import Nav from "./Nav/Nav.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import PaymentSuccess from "./paymentPopups/PaymentSuccess.jsx";
import PaymentCancel from "./paymentPopups/PaymentCancel.jsx";
import Playlist from "./Playlist/Playlist.jsx";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";



function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [paymentActive, setPaymentActive] = useState(null);
  const location = useLocation();
  const lastScrollTop = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive("PaymentSuccess");
    if (payment === "cancel") setPaymentActive("PaymentCancel");
  }, []);

  useEffect(() => {
    const isScrolling = () => {
      if (window.innerWidth <= 768) {
        setIsVisible(true);
        return;
      }
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop.current && currentScrollTop > 50) {
        setIsVisible(false);
      } else if (currentScrollTop < lastScrollTop.current) {
        setIsVisible(true);
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', isScrolling);
    return () => {
      window.removeEventListener('scroll', isScrolling);
    };
  }, []);

  // Map pathname to 'active' string for compatibility with existing components if needed, 
  // though it's better to update components to use NavLink. 
  // For now, let's assume we will update Nav/Footer to use React Router's hooks or NavLink.
  // But to be safe, let's derive 'active' for now.
  let active = 'Home';
  if (location.pathname === '/playlist') active = 'Playlist';

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 }
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="header"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <Nav active={active} />
        </motion.div>
      </AnimatePresence>

      <div className="Content">
        <Routes>
          <Route path="/" element={
            <div className="activeSection">
              <About />
              <Home />
            </div>
          } />
          <Route path="/playlist" element={
            <div className="activeSection">
              <Playlist />
            </div>
          } />
          <Route path="/product" element={<Navigate to="/playlist" replace />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer active={active} />
      </div>

      <div className={paymentActive === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
        <PaymentSuccess setPaymentActive={setPaymentActive} />
      </div>

      <div className={paymentActive === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
        <PaymentCancel setPaymentActive={setPaymentActive} />
      </div>
    </>
  )
}

export default App
