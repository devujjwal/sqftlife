import 'react-pro-sidebar/dist/css/styles.css';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from 'react-pro-sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileMenuContent = () => {
  const route = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/">
            <a className="sidebar-header-inner">
              <img
                className="nav_logo_img img-fluid mt20"
                src="/assets/images/header-logo2.png"
                alt="header-logo.png"
              />
            </a>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem>
            <Link href="/">
              <a className={route.pathname === '/' ? 'ui-active' : undefined}>
                Home
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/listing">
              <a
                className={
                  route.pathname === '/listing' ? 'ui-active' : undefined
                }
              >
                Listings
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/about-us">
              <a
                className={
                  route.pathname === '/about-us' ? 'ui-active' : undefined
                }
              >
                About Us
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/contact">
              <a
                className={
                  route.pathname === '/contact' ? 'ui-active' : undefined
                }
              >
                Contact
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/login">
              <a
                className={
                  route.pathname === '/login' ? 'ui-active' : undefined
                }
              >
                <span className="flaticon-user"></span> Login
              </a>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href="/register">
              <a
                className={
                  route.pathname === '/register' ? 'ui-active' : undefined
                }
              >
                <span className="flaticon-edit"></span> Register
              </a>
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <Link href="/create-listing">
          <a className="btn btn-block btn-lg btn-thm circle">
            <span className="flaticon-plus"></span> Create Listing
          </a>
        </Link>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MobileMenuContent;
