import { View } from 'react-native';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#1f2937' }}>
      <Header />
      <Home />
    </View>
  );
}