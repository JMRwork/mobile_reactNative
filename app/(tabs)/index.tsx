import { Image, Card } from '@/components';
import { Text } from 'react-native-paper';

export default function HomeScreen() {
  return (

    <Card title='Home'>
      <Text>This is a react-native page</Text>
      <Image style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../../assets/images/partial-react-logo.png')} />
    </Card>
  );
}
