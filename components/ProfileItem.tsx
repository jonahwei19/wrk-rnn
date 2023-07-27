import React, { useContext } from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { CombinedContext } from '../CombinedContextType';

const ProfileItem = () => {
  const context = useContext(CombinedContext);
  if (!context) {
    throw new Error('SomeComponent must be used within a CombinedContextProvider');
  }
  const { user, match } = context;

return(
  
  <View style={styles.containerProfileItem}>
    
    <Text style={styles.name}>{user.FirstLastName}</Text>

    <Text style={styles.descriptionProfileItem}>
      {user.phone}
    </Text>

    <View style={styles.info}>
      <Text style={styles.infoContent}>{user.PECompanies}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.infoContent}>{user.PEIndustries}</Text>
    </View>

  
  </View>
);
}

export default ProfileItem;
