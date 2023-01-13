import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderMenuContent = ({ float = '' }) => {
  const route = useRouter();

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li>
        <Link href="/">
          <a className={route.pathname === '/' ? 'ui-active' : undefined}>
            Home
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li>
        <Link href="/listing">
          <a
            className={route.pathname === '/listing' ? 'ui-active' : undefined}
          >
            Listing
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li>
        <Link href="/about-us">
          <a
            className={route.pathname === '/about-us' ? 'ui-active' : undefined}
          >
            About Us
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link href="/contact">
          <a
            className={route.pathname === '/contact' ? 'ui-active' : undefined}
          >
            Contact
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        <Link href="/login">
          <a className={route.pathname === '/login' ? 'ui-active' : undefined}>
            <span className="dn-lg">Login/Register</span>
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <a>
            <span className="flaticon-plus"></span>
            <span className="dn-lg"> Create Listing</span>
          </a>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
