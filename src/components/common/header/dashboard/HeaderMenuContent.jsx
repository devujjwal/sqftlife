import Link from 'next/link';
import { useRouter } from 'next/router';
import MyAccount from './MyAccount';

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

      <li>
        <Link href="/listing">
          <a
            className={route.pathname === '/listing' ? 'ui-active' : undefined}
          >
            Listing
          </a>
        </Link>
      </li>

      <li>
        <Link href="/about-us">
          <a
            className={route.pathname === '/about-us' ? 'ui-active' : undefined}
          >
            About
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

      <li className="user_setting">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <img
              className="rounded-circle"
              src="/assets/images/team/e1.png"
              alt="e1.png"
            />
            <span className="dn-1199">Admin</span>
          </a>
          <div className="dropdown-menu">
            <MyAccount />
          </div>
        </div>
      </li>
      {/* End ."user_setting */}

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
