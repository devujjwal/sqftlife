import Social from '../common/footer/Social';

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contact Us</h4>
      <p>
        No middlemen. Find homes without paying a dime in commission to agents
        or brokers.
      </p>
      <div className="content_list">
        <h5>Address</h5>
        <p>
          Jankipuram, Lucknow <br />
          Uttar Pradesh
        </p>
      </div>
      <div className="content_list">
        <h5>Corp Address</h5>
        <p>
          Gomti Nagar, Lucknow <br />
          Uttar Pradesh
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>+91 9336223806</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>info@sqftlife.com</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
