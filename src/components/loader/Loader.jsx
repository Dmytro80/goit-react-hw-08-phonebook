import { ThreeDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

const Loader = () => {
  return (
    <WrapperLoader>
      <ThreeDots
        height="50"
        width="50"
        radius="5"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};

export default Loader;
