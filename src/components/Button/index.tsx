import { BUTTON_SIZE } from '@@components/Button/constants';
import IconButton from '@@components/Button/IconButton';

const Button = {
  XLarge: IconButton(BUTTON_SIZE.XLARGE),
  Large: IconButton(BUTTON_SIZE.LARGE),
  Medium: IconButton(BUTTON_SIZE.MEDIUM),
  Tiny: IconButton(BUTTON_SIZE.TINY),
};

export default Button;
