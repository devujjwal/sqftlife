import Link from 'next/link';
import { useRouter } from 'next/router';
import { isSinglePageActive } from '../../../../utils/daynamicNavigation';

const MyAccount = () => {
  const route = useRouter();
  return (
    <>
      <div className="user_set_header">
        <img
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <p>
          Admin <br />
          <span className="address">info@sqftlife.com</span>
        </p>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
        <Link href="/my-profile">
          <a
            className="dropdown-item"
            style={
              isSinglePageActive('/my-profile', route.pathname)
                ? { color: '#ff5a5f' }
                : undefined
            }
          >
            My Profile
          </a>
        </Link>
        <Link href="/my-message">
          <a
            className="dropdown-item "
            style={
              isSinglePageActive('/my-message', route.pathname)
                ? { color: '#ff5a5f' }
                : undefined
            }
          >
            My Message
          </a>
        </Link>
        <Link href="/my-favourites">
          <a
            className="dropdown-item "
            style={
              isSinglePageActive('/my-favourite', route.pathname)
                ? { color: '#ff5a5f' }
                : undefined
            }
          >
            My Favourite
          </a>
        </Link>
      </div>
    </>
  );
};

export default MyAccount;
