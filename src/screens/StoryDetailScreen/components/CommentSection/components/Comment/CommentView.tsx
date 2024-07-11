import moment from 'moment';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import HTML from 'react-native-render-html';
import { getStoryDetailResponse } from '../../../../../../apis';
import { colors } from '../../../../../../utils';
import { Reply } from './components';

const CommentView = ({
  data,
  htmlWidth,
  isLoading,
}: {
  data?: getStoryDetailResponse;
  htmlWidth: number;
  isLoading: boolean;
}) => {
  const time = data?.time ? moment(data.time) : null;
  const timeString = time
    ? moment().diff(time, 'days') < 7
      ? time.fromNow()
      : time.format('DD/MM/YYYY HH:MM')
    : '';
  if (isLoading) return <ActivityIndicator color={colors.black} />;
  return (
    <View>
      <View style={styles.info}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {data?.by?.[0] ? data.by[0].toUpperCase() : ''}
          </Text>
        </View>
        <View style={styles.rightWrapper}>
          <Text numberOfLines={1} style={styles.by}>
            {data?.by}
          </Text>
          <Text numberOfLines={1} style={styles.time}>
            {timeString}
          </Text>
        </View>
      </View>
      {data?.text ? (
        <View style={styles.contentWrapper}>
          <HTML contentWidth={htmlWidth} source={{ html: data.text }} />
        </View>
      ) : null}
      {data?.kids?.length && data.kids.length > 0 ? (
        <Reply data={data.kids} htmlWidth={htmlWidth} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyBackground,
    marginRight: 8,
  },
  avatarText: {
    fontWeight: 'bold',
  },
  rightWrapper: {
    flex: 1,
  },
  by: {
    flex: 1,
    fontWeight: 'bold',
  },
  time: {
    flex: 1,
    fontSize: 12,
  },
  contentWrapper: {
    marginTop: 4,
  },
});

export default CommentView;
