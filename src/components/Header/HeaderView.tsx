import { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { chevronLeft } from '../../assets/images';
import { AppHeaderState } from '../../states/reducers';
import { colors } from '../../utils';

type HeaderViewProps = AppHeaderState & {
  goBack: () => void;
};

const HeaderView: FC<HeaderViewProps> = ({
  visible,
  title,
  showBackButton,
  goBack,
}) =>
  visible ? (
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity onPress={goBack} style={styles.backBtn}>
          <Image source={chevronLeft} style={styles.backIcon} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  ) : null;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backBtn: {
    marginRight: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});

export default HeaderView;
