/**
 * HEADER COMPONENT
 * 
 * This component displays the header at the top of the page.
 * It shows the logo and social media links.
 * 
 * This component doesn't need any props because it uses
 * hardcoded values from the constants file.
 */

import SocialLink from './SocialLink';
import { SOCIAL_LINKS } from '../constants';
import mainLogo from '../assets/ejc_2.png';

const Header = () => {
  /**
   * This component displays:
   * - The Enchanted Journal Club logo
   * - Instagram link (using the SocialLink component)
   * - Meetup link (using the SocialLink component)
   * 
   * Notice how we're using the SocialLink component twice with different props.
   * This is the power of reusable components!
   */

  return (
    <div className="header">
      {/* Logo section */}
      <div className="title-group">
        <img 
          src={mainLogo} 
          alt="Enchanted Journal Club Logo" 
          className="footer-bow logo" 
          style={{ width: '400px', height: 'auto' }}
        />
      </div>

      {/* Social media links section */}
      <div className="flex">
        {/* Instagram link - using the reusable SocialLink component */}
        <SocialLink
          url={SOCIAL_LINKS.instagram}
          iconClass="fa-instagram instagram-icon"
          label="Visit our Instagram page"
        />

        {/* Meetup link - using the same SocialLink component with different props */}
        <SocialLink
          url={SOCIAL_LINKS.meetup}
          iconClass="fa-meetup meetup-icon"
          label="Visit our Meetup page"
        />

        <SocialLink
          url={SOCIAL_LINKS.cashApp}
          iconClass="fa-brands fa-cash-app"
          label="Support us with Cash App"
        />
        <SocialLink
          url={SOCIAL_LINKS.venmo}
          iconClass="fa-brands fa-vimeo-v"
          label="Donate to us via Venmo"
        />
      </div>
    </div>
  );
};

// Export the component so other files can import and use it
export default Header;
