import React, { useState,useContext, createContext } from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import { CombinedContext } from '../CombinedContextType';



const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  const context = useContext(CombinedContext);
  if (!context) {
    throw new Error('SomeComponent must be used within a CombinedContextProvider');
  }
  const { user, setUser, match, setMatch } = context;
  function logMatch(match, user) {    
    
    fetch("https://eo52stvfxhyqbg7.m.pipedream.net?matchId="+user.index+"&userId="+match.index)
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        // Handle the error
      });
  }
  if(match){
    

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          verticalSwipe={false}
          renderNoMoreCards={() => <Card><View style={styles.containerCardItem}><b>NO MORE MATCHES</b></View></Card>}
          onSwipedRight={(d) => logMatch(match[d], user)}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {match.map((item) => {
            return (
              <Card key={item.index}>
                <CardItem
                  hasActions
                  key={item.index}
                  thing={item} />
              </Card>
            );
          })}
        </CardStack>
      </View>
    </ImageBackground>
  );
          }  else  {
            return ("LOADING")

          }
};

export default Home;
