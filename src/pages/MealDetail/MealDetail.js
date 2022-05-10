import React from 'react';
import {
    FlatList,
    Image,
    View,
    Text,    
} from 'react-native';
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import DetailCard from "../../components/DetailCard/DetailCard";

const MealDetail = (props) => {
    const {idMeal} = props.route.params
    const {loading,error,data} =useFetch(`${Config.FOOD_DETAIL}${idMeal}`)
    if (loading) {
        return <Loading/>
    }
    if(error) {
        return <Error/>
    }
    const renderItem = ({item}) => <DetailCard meals={item}  />
    return(
        <View>
           <FlatList
           data={data.meals}
           renderItem={renderItem}
           />
        </View>
    );
};

export default MealDetail;