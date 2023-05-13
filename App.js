import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const foodCategories = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Thai', 'Japanese'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for food"
        />
        <View style={styles.profileIcon} />
      </View>
      <View style={styles.dailyMealsSection}>
        <Text style={styles.sectionTitle}>Daily Meals</Text>
        {/* Add your daily meals content here */}
      </View>
      <View style={styles.foodCategoriesSection}>
        <Text style={styles.sectionTitle}>Food Categories</Text>
        <View style={styles.fullCategory}>
        <View style={styles.scrollLeft}>
        <ScrollView  verticle showsVerticalScrollIndicator={false}>
          {foodCategories.map((category, index) => (
            <View key={index} style={styles.categoryItem}>
              <Text>{category}</Text>
            </View>
          ))}
        </ScrollView>
        </View>
        <View style={styles.scrollRight}>
        <ScrollView >
              <Text>Hi These are list of Items</Text>
        </ScrollView>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
  },
  searchBar: {
    flex: 1,  
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
    marginRight: 12,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  dailyMealsSection: {
    flex:1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  foodCategoriesSection: {
    flex:4,
    paddingVertical: 15,
    paddingHorizontal: 5,
    width:155
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  categoryItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 8,
    textAlign:'center',
    margin:12,
    width:75,
    height:60
  },
  scrollLeft:{
    flex:7,
    borderRightWidth:1
  },
  scrollRight:{
    flex:3
    
  },
  fullCategory:{
    flex:1,
    flexDirection:'row',
  }

});

export default App;
