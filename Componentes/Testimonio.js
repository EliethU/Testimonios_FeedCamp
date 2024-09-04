import { View, Text, Image, StyleSheet } from 'react-native';

function Testimonio (props) {
  return (
    <View style={styles.testimoniocontainer}>
      <Image source={foto} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nombre}>{nombre} en {pais}</Text>
        <Text style={styles.cargo}>{cargo} en {empresa}</Text>
        <Text style={styles.testimonio}>{props.testimonio}</Text>
      </View>
    </View>
  );
};

export default Testimonio;

const styles = StyleSheet.create({
  testimonioContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, 
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cargo: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  testimonio: {
    fontSize: 14,
  },
});