import moment from 'moment';
import { Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { getStoryDetailResponse } from '../../apis/StoryDetail';
import { ScreenWrapper } from '../../layout';
import { colors } from '../../utils';
import { CommentSection } from './components';
import { Link } from '@react-navigation/native';
import { StoryListScreenName } from '../../router/screenNames';

type StoryListScreenViewProps = {
  data: getStoryDetailResponse;
};

const StoryDetailScreenView = ({ data }: StoryListScreenViewProps) => (
  <ScreenWrapper>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.time}>
        {moment(data.time).format('dddd, DD/MM/YYYY, HH:mm')}
      </Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{`Author: ${data.by}`}</Text>
      <Text style={styles.content}>
        This placeholder text serves a critical role in representing missing
        content that is expected but currently unavailable within the dataset.
        It is designed to simulate the layout and structure of information that
        would typically populate this space.
        {'\n\n'}
        Consider, for instance, an e-commerce platform where this text could
        stand in for product descriptions, detailed specifications, or customer
        reviews that are pending input or validation.
        {'\n\n'}
        By incorporating this placeholder, developers and designers can
        effectively map out the interface, ensuring that it accommodates the
        eventual inclusion of specific content seamlessly.
        {'\n\n'}
        This approach not only aids in the visual planning of the user interface
        but also facilitates iterative design improvements based on anticipated
        data inputs. As the necessary information becomes accessible, this
        placeholder will be supplanted with accurate and relevant content,
        thereby enhancing usability and providing users with comprehensive and
        engaging information.
      </Text>
      <CommentSection data={data.kids} />
    </ScrollView>
  </ScreenWrapper>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  content: {
    marginTop: 4,
    letterSpacing: 0.5,
  },
});

export default StoryDetailScreenView;
