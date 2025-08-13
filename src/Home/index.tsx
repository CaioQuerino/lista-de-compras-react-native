import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';
import { Button } from '@/components/Button/'; 
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />      
      <StatusBar style="auto" />

      <Button title="Adicionar" />
      <Button title="Deletar" />

    </View>
  );
}
