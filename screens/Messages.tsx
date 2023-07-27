import React, { useContext, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Icon, Message } from "../components";
import styles, { DARK_GRAY } from "../assets/styles";
import { CombinedContext } from "../CombinedContextType";
import ChatWindow from "../components/ChatWindow";

const Messages = () => {

const context = useContext(CombinedContext);
if (!context) {
  throw new Error('SomeComponent must be used within a CombinedContextProvider');
}
const { user, setUser, match, setMatch, myMatches, setMyMatches } = context;

const [selectedMessage, setSelectedMessage] = useState(null);

const fakeChatData = [
  { sender: 'user', text: 'Hello!' },
  { sender: 'match', text: 'Hi there!' },
  { sender: 'user', text: 'Hello!' },
  { sender: 'match', text: 'Hi there!' },
  { sender: 'user', text: 'Hello!' },
  { sender: 'match', text: 'Hi there!' },
  { sender: 'user', text: 'Hello!' },
  { sender: 'match', text: 'Hi there!' },
  { sender: 'user', text: 'Hello!' },
  { sender: 'match', text: 'Hi there!' },
  
  // Add more fake data here
];

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>

        {selectedMessage ? (
          <ChatWindow
            messages={fakeChatData}
            onBack={() => setSelectedMessage(null)}
          />
        ) : (
          <FlatList
            data={myMatches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedMessage(item)}>
                <Message
                  name={item.FirstLastName} />
              </TouchableOpacity>
            )} />
        )}
      </View>
    </ImageBackground>
  );
};

export default Messages;

