import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from "../assets/styles";
import IMAGE_04 from "../assets/images/04.jpg";

const CardItem = (
  thing) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: false ? fullWidth / 2 - 30 : fullWidth - 80,
      height: false ? 170 : 350,
      margin: false ? 0 : 20,
    },
  ];
  const nameStyle = [
    {
      paddingTop: false ? 10 : 15,
      paddingBottom: false ? 5 : 7,
      color: "#363636",
      fontSize: false ? 15 : 30,
    },
  ];

  const BOTTOM = [
    {
      marginTop: 80,
      paddingTop: false ? 10 : 15,
      paddingBottom: false ? 5 : 7,
      marginBottom: 180,
      color: "#363636",
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={IMAGE_04} style={imageStyle} />
      <Text>{thing.InvestSize1}</Text>
      {/* MATCHES */}
      

      {/* NAME */}
      <Text style={nameStyle}>{thing.CompanyName}</Text>
      <Text style={styles.descriptionCardItem}>{thing.LendingType}</Text>

      {/* ACTIONS */}
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Icon name="star" color={STAR_ACTIONS} size={14} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={LIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Icon name="flash" color={FLASH_ACTIONS} size={14} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default CardItem;
