import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
        
        <Text style={styles.paragraph}>Adega Boulevard</Text>
        
        <ScrollView>
        <View style={styles.cxfoto}>
        <Image 
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/vinho1.jpg')}
        />
        <Text style={styles.titulo}>Cabernet Sauvignon</Text>
        <Text style={styles.subtitulo}>Safra 2018 - 750ml</Text>
        <Text style={styles.subtitulo}>R$ 135,00</Text>
        </View>
        <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/vinho2.jpg')}
        />
        <Text style={styles.titulo}>Nois trupica mais não cai</Text>
        <Text style={styles.subtitulo}>Safra 2020 - 750ml</Text>
        <Text style={styles.subtitulo}>R$ 95,00</Text>
        </View>
        <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/vinho3.jpg')}
        />
        <Text style={styles.titulo}>Jacobs Creek </Text>
        <Text style={styles.subtitulo}>Safra 2014 - 750ml</Text>
        <Text style={styles.subtitulo}>R$ 165,00</Text>
        </View>
        <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/vinho4.jpg')}
        />
        <Text style={styles.titulo}>Conventual</Text>
        <Text style={styles.subtitulo}>Safra 2018 - 750ml</Text>
        <Text style={styles.subtitulo}>R$ 135,00</Text>
        </View>
        <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/vinho5.jpg')}
        />
        <Text style={styles.titulo}>Apriori</Text>
        <Text style={styles.subtitulo}>Safra 2010 - 750ml</Text>
        <Text style={styles.subtitulo}>R$ 79,00</Text>
        </View>
        <View style={styles.cxfoto}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={require('./assets/vinho6.jpg')}
        />
        <Text style={styles.titulo}>Vranac</Text>
        <Text style={styles.subtitulo}>Safra 2021 - 750ml</Text>
        <Text style={styles.subtitulo}>R$ 77,00</Text>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#288ba81'
  },
  paragraph: {
    margin: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 8,
    paddingTop: 15,
    marginTop: 15,
    marginLeft: 15
  },
  // paragraph: {
  //   color: '#DCDCDC',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   backgroundColor: '#0000FF',
  //   borderRadius: 15,
  //   textAlign: 'center',
  //   padding: 15
  // },
  titulo:{
    color: '#DCDCDC',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#0000FF',
    borderRadius: 15,
    textAlign: 'center',
    padding: 15
  },
  subtitulo:{
    color: '#DCDCDC',
    fontSize: 20,
    textAlign: 'center'
  },
  cxfoto:{
    flex: 1,
    backgroundColor: '#0000FF',
    marginTop: 50,
    alignItens:"center",
    borderRadius:15,
    width:320,
  }
});
