import { colors } from '../utils/colors';
import { Octicons } from '@react-native-vector-icons/octicons';
import {Ionicons} from '@react-native-vector-icons/ionicons';
const Icons = ({ family, name, color, size, ...props }) => {
  let Family;
  switch (family) {
    case 'Octicons':
      Family = Octicons;
      break;
    case 'Ionicons':
      Family = Ionicons;
      break;
    default:
      Family = Ionicons;
  }

  return (
    <Family
      name={name || 'help-outline'}
      color={color || colors.black}
      size={size || 14}
      {...props}
    />
  );
};
export default Icons;
