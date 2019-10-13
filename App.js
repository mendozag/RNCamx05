import * as React from 'react';
import { Appbar, Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import { View } from 'react-native';

const MyComponent = () => (
  
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <View><Text>XX</Text><Text>XX</Text></View>} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /><Card.Content>
      {/* <Title>Card title</Title> */}
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;