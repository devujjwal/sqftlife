import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  isParentPageActive,
  isSinglePageActive,
} from '../../../../utils/daynamicNavigation';

const SidebarMenu = () => {
  const route = useRouter();

  const myProperties = [
    { id: 1, name: 'General Elements', route: '/my-properties' },
  ];
  const reviews = [{ id: 1, name: 'My Reviews', route: '/my-review' }];
  const manageAccount = [
    {
      id: 2,
      name: 'My Profile',
      route: '/my-profile',
      icon: 'flaticon-user',
    },
    { id: 2, name: 'Logout', route: '/login', icon: 'flaticon-logout' },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <a>
              <img
                src="/assets/images/header-logo2.png"
                alt="header-logo2.png"
              />
            </a>
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive('/my-dashboard', route.pathname)
                  ? 'active'
                  : ''
              }`}
            >
              <Link href="/my-dashboard">
                <a>
                  <i className="flaticon-layers"></i>
                  <span> Dashboard</span>
                </a>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive('/create-listing', route.pathname)
                  ? 'active'
                  : ''
              }`}
            >
              <Link href="/create-listing">
                <a>
                  <i className="flaticon-plus"></i>
                  <span> Create Listing</span>
                </a>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Manage Listings</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive('/my-properties', route.pathname)
                  ? 'active'
                  : ''
              }`}
            >
              <Link href="/my-properties">
                <a>
                  <i className="flaticon-home"></i>
                  <span> My Properties</span>
                </a>
              </Link>
            </li>
            {/* end properties */}

            <li
              className={`treeview ${
                isSinglePageActive('/my-review', route.pathname) ? 'active' : ''
              }`}
            >
              <Link href="/my-review">
                <a>
                  <i className="flaticon-chat"></i>
                  <span> Reviews</span>
                </a>
              </Link>
            </li>
            {/* End Review */}

            <li
              className={`treeview ${
                isSinglePageActive('/my-favourites', route.pathname)
                  ? 'active'
                  : ''
              }`}
            >
              <Link href="/my-favourites">
                <a>
                  <i className="flaticon-magnifying-glass"></i>
                  <span> My Favorites</span>
                </a>
              </Link>
            </li>
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>Manage Account</span>
          <ul>
            {manageAccount.map((item) => (
              <li
                className={
                  isSinglePageActive(item.route, route.pathname) ? 'active' : ''
                }
                key={item.id}
              >
                <Link href={item.route}>
                  <a>
                    <i className={item.icon}></i> <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
