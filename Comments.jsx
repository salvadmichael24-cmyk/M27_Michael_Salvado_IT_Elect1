import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const comments = [
  {
    id: '1',
    name: 'Franz Anthony Baloran',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    comment: 'nautgan na maam klaro kaayo hikapa rajud',
    time: '1h',
  },
  {
    id: '2',
    name: 'Nhuj Gniad',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    comment: 'Hayahaya oh, lupig pa may na kadaog og lotto si IDOL.. 😅😂🤣',
    time: '32m',
  },
  {
    id: '3',
    name: 'Eryl Obob',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    comment: "Pa kayata ko nemo ma'am hehe",
    time: '20m',
  },
];

const CommentItem = ({ item }) => (
  <View style={styles.commentContainer}>
    <Image source={{ uri: item.avatar }} style={styles.avatar} />
    <View style={styles.content}>
      <Text>
        <Text style={styles.name}>{item.name} </Text>
        <Text style={styles.comment}>{item.comment}</Text>
      </Text>
      <View style={styles.footer}>
        <Text style={styles.time}>{item.time}</Text>
        <TouchableOpacity>
          <Text style={styles.action}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.action}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function Comments() {
  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={CommentItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <View style={styles.footerInput}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/4.jpg' }} // Your user avatar
          style={styles.avatarSmall}
        />
        <TextInput
          placeholder="Comment as Michael Manheaven"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.footerAction}>GIF</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerAction}>😊</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background like the screenshot
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  content: {
    backgroundColor: '#2c2c2c',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    color: '#eee',
  },
  comment: {
    color: '#ddd',
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },
  time: {
    color: '#888',
    fontSize: 12,
    marginRight: 15,
  },
  action: {
    color: '#888',
    fontWeight: '600',
    marginRight: 15,
    fontSize: 12,
  },
  footerInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  avatarSmall: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 35,
    backgroundColor: '#2c2c2c',
    borderRadius: 18,
    paddingHorizontal: 15,
    color: '#eee',
  },
  footerAction: {
    marginLeft: 10,
    color: '#888',
    fontSize: 18,
  },
});