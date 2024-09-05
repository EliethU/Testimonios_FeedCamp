import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from './Imagenes/logo.png';
import Testimonio from './Componentes/Testimonio'; 

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>
      <ScrollView style={styles.scrollView}>
        <Testimonio 
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          foto={require('./Imagenes/1.png')} 
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de las cientos de horas de lecciones gratuitas en FreeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
        />
        <Testimonio 
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          foto={require('./Imagenes/2.png')}
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación al nivel de principiante total a uno muy seguro."
        />
        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software en Spotify"
          empresa="ChatDesk"
          foto={require('./Imagenes/3.png')}
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </ScrollView>
    </View>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
});