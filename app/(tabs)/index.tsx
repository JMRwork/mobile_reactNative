import { Image, Card, TopBar, Grid } from '@/components';
import { Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <Grid>
      <TopBar title="Home" />
      <Card title="You're at Home page">
        <Text>This is a react-native page</Text>
        <Image style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../../assets/images/partial-react-logo.png')} />
      </Card>
    </Grid>
  );
}
