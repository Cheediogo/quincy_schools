import React, {useEffect, useState} from 'react';
import arrow from "../assets/arrow.png";

const ScrollToTop = () => {
    const [showTopArrow, setShowTopArrow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setShowTopArrow(true);
            }else {
                setShowTopArrow(false);
            }
        });
    }, []);

    const GoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <>
    {showTopArrow && (
        <div className='footer-cirle2'>
            <div className='footer-cirle3' onClick={GoToTop}>
                <img src={arrow} alt="arrow_img" />
            </div>
        </div>
    )}
    </>
  )
}

export default ScrollToTop