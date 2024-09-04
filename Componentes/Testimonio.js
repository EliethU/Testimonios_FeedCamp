import { View, Text, Image, StyleSheet } from 'react-native';

const Testimonio = ({ nombre, pais, cargo, empresa, foto, testimonio }) => {
  return (
    <View style={styles.container}>
      <Image source={foto} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nombre}>{nombre} en {pais}</Text>
        <Text style={styles.cargo}>{cargo} en {empresa}</Text>
        <Text style={styles.testimonio}>{`"${testimonio}"`}</Text>
      </View>
    </View>
  );
};

export default Testimonio;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    minHeight: 250,
    width: '100%',
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