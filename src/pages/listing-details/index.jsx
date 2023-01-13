import dynamic from 'next/dynamic';
import Seo from '../../components/common/seo';
import ListingDetails from '../../components/listing-details';

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing Details" />
      <ListingDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
