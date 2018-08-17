import noImage from '../../../assets/images/no_image.png';
import loading from '../../../assets/images/loading.svg';

const images = {
  noImage,
  loading,
};

const getImage = name => images[name];

export default getImage;
