import CallToAction from '../common/CallToAction';
import CopyrightFooter from '../common/footer/CopyrightFooter';
import Footer from '../common/footer/Footer';
import Header from '../common/header/DefaultHeader';
import MobileMenu from '../common/header/MobileMenu';
import AddressSidebar from './AddressSidebar';
import BreadCrumbBanner from './BreadCrumbBanner';
import Form from './Form';

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- Our Contact --> */}
      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h4 className="mb5">Send Us An Email</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. Maecenas mattis enim at
                  arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio,
                  malesuada eu libero sit amet, congue aliquam leo. In hac
                  habitasse platea dictumst.
                </p>
                <Form />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              <AddressSidebar />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
