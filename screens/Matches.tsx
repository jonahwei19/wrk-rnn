import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles, { DARK_GRAY } from "../assets/styles";
import { Icon } from "../components";

const fakeData = [
  { name: "Page Views", value: 2000 },
  { name: "Purchases", value: 150 },
  { name: "Active Users", value: 450 },
  { name: "Bounce Rate", value: "40%" },
];

const Matches = () => (
  <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.containerAnalytics}>
      <View style={styles.top}>
        <Text style={styles.title}>Analytics</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <View style={{...styles.summarySection, alignItems: 'center'}}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <Text style={styles.summaryText}>Here is the summary of the metrics</Text>
      </View>

      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {fakeData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemNameBig}>{item.name}</Text>
            <Text style={styles.itemValueBig}>{item.value}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  </ImageBackground>
);

export default Matches;


