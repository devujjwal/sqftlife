import dynamic from 'next/dynamic';
import Seo from '../../components/common/seo';
import Grid from '../../components/listing/grid';

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing" />
      <Grid />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
