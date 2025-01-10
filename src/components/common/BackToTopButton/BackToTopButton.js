import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa"; // Icon for the button
import { animateScroll as scroll } from "react-scroll";
import "../BackToTopButton/BackToTopButton.css";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTopSlowly = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust this to increase/decrease the scroll speed
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      {showButton && (
        <Button
          onClick={scrollToTopSlowly}
          className="back-to-top-button"
          variant="primary"
        >
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

export default BackToTopButton;
