import Link from 'next/link';
import Social from './Social';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Sqft Life</h4>
          <p>
            No middlemen. Find homes without paying a dime in commission to
            agents or brokers.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Terms & Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>User’s Guide</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Support Center</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Press Info</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@sqftlife.com">info@sqftlife.com</a>
            </li>
            <li>
              <a href="#">Office: Gomti Nagar, Lucknow</a>
            </li>
            <li>
              <a href="#">Office: Jankipuram, Lucknow</a>
            </li>
            <li>
              <a href="tel:+91 9336223806">+91 9336223806</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Follow us</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>Subscribe</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
