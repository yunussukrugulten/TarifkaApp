import React from 'react';
import {
    TouchableWithoutFeedback,
    Image,
    View,
    Text,    
} from 'react-native';
import styles from './MealsCard.style';

const MealsCard = (props) => {
    return(
       <TouchableWithoutFeedback onPress={props.goFoodDetail}>
       <View style={styles.container} >
            <Image 
            style={styles.image}
            source={{uri:props.meals.strMealThumb}} />
            <View style={styles.opacityview} >
            </View>
            <Text style={styles.text} numberOfLines={1} >{props.meals.strMeal}</Text>
        </View>
        </TouchableWithoutFeedback>
    );
};

export default MealsCard;