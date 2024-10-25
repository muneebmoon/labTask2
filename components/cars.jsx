import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const carData = [
  {
    id: '1',
    model: 'Tesla Model S',
    horsePower: '670 HP',
    acceleration: '0-60 mph in 2.1s',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-UnT-ApY0SCFM1o-yTG-H63eIDOp47vD0g&s',
  },
  {
    id: '2',
    model: 'BMW M3',
    horsePower: '473 HP',
    acceleration: '0-60 mph in 3.8s',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-UnT-ApY0SCFM1o-yTG-H63eIDOp47vD0g&s',
  },
  {
    id: '3',
    model: 'Audi R8',
    horsePower: '602 HP',
    acceleration: '0-60 mph in 3.2s',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-UnT-ApY0SCFM1o-yTG-H63eIDOp47vD0g&s',
  },
  {
    id: '4',
    model: 'Honda',
    horsePower: '500 HP',
    acceleration: '0-60 mph in 3.2s',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-UnT-ApY0SCFM1o-yTG-H63eIDOp47vD0g&s',
  },
  
];

const CarItem = ({ car }) => (
  <View style={styles.card}>
    <Image source={{ uri: car.image }} style={styles.image} />
    <Text style={styles.model}>{car.model}</Text>
    <Text style={styles.text}>Horsepower: {car.horsePower}</Text>
    <Text style={styles.text}>Acceleration: {car.acceleration}</Text>
  </View>
);

const Cars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest Cars</Text>
      <FlatList
        data={carData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default Cars;
