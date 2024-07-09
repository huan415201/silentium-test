import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AppHeaderState } from '../../states/reducers';

const HeaderView: FC<AppHeaderState> = ({ visible, title, showBackButton }) =>
  visible ? (
    <View>
      {showBackButton ? <TouchableOpacity></TouchableOpacity> : null}
      <Text>{title}</Text>
    </View>
  ) : null;

export default HeaderView;
