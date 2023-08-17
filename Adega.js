import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>Fotos dogs </Text>
        <ScrollView>
        <View style={styles.cxfoto}>
        <Image 
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/vinho1.jpg')}
        />
        <Text style={styles.subtitulo}>Sorriso Lindo</Text>
        </View>
        <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="strtch"
          source={require('./assets/vinho2.jpg')}
        />
        <Text style={styles.subtitulo}>Que olhar lindo</Text>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 8,
    paddingTop: 10
  },
  subtitulo:{
    fontSize: 20
  },
  cxfoto:{
    flex: 1,
    backgroundColor: '#602c6e99',
    marginTop: 20,
    alignItens:"center",
    borderRadius:15,
    width:320
  }
});
