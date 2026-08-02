/**
 * FOOTER COMPONENT
 * 
 * This component displays the footer at the bottom of the page.
 * It shows a decorative bow image.
 * 
 * This is a simple component that doesn't need any props.
 */

import bowImage from '../assets/bow.png';

const Footer = () => {
  /**
   * This component just displays a decorative image at the bottom.
   * Simple and clean!
   */

  return (
    <footer className="footer">
      <img 
        src={bowImage} 
        alt="Decorative bow" 
        className="footer-bow bow" 
      />
      <cta>enchanted.journal.club@gmail.com
      </cta>
    </footer>
  );
};

// Export the component so other files can import and use it
export default Footer;
