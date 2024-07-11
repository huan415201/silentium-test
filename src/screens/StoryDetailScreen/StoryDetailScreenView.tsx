import moment from 'moment';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HTML from 'react-native-render-html';
import { getStoryDetailResponse } from '../../apis/StoryDetail';
import { ScreenWrapper } from '../../layout';
import { colors } from '../../utils';
import { CommentSection } from './components';
import { dummyText } from './constants';

type StoryListScreenViewProps = {
  data: getStoryDetailResponse;
  htmlWidth: number;
};

const StoryDetailScreenView = ({
  data,
  htmlWidth,
}: StoryListScreenViewProps) => (
  <ScreenWrapper>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.time}>
        {moment(data.time).format('dddd, DD/MM/YYYY, HH:mm')}
      </Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{`Author: ${data.by}`}</Text>
      <View style={styles.contentWrapper}>
        {data?.text ? (
          <HTML contentWidth={htmlWidth} source={{ html: data.text }} />
        ) : (
          <Text style={styles.content}>{dummyText}</Text>
        )}
      </View>
      <CommentSection ids={data.kids} htmlWidth={htmlWidth} />
    </ScrollView>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 12,
  },
  time: {
    fontSize: 12,
    color: colors.greyText,
  },
  title: {
    marginTop: 4,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  author: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  contentWrapper: {
    marginTop: 4,
  },
  content: {
    letterSpacing: 0.5,
  },
});

export default StoryDetailScreenView;
