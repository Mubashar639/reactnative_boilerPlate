// At the top of your file

import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import {WebView} from 'react-native';
// import ht from '../dragdrop/in.html'
  import React, { Component } from 'react';
  import { Container, Header, Content, Item, Input, View,Text ,Button} from 'native-base';
  export default class IconTextboxExample extends Component {
    state={
      value:""
    }
  
    whenChange = (text) => {
      this.setState({ value: text })
    }
  login=(text)=>{
    alert(text);
  }  
    

    render() {
      return (
        <Container>
      
          <Content  style={styles.container} >
           <View>
             <Text>
               this. is request page
               <Icon name="ios-contacts" size={34} />
                </Text>
           </View>
            <Item>
              <Icon active name='ios-contacts' />
              <Input placeholder='Icon Textbox'/>
            </Item>
           
            <Item>
              <Input placeholder='Icon Alignment in Textbox'/>
              <Icon active name='ios-contacts' />
            </Item>
          </Content>
          <Button success
            style={styles.welcome}
              onPress={
                () => this.login(this.state.value)
              }>
              <Text>Get Meaning</Text>
            </Button>
            <WebView
            allowFileAccess = {true}
        source={require('../dragdrop/in.html')}
        // source={{uri: 'https://github.com/facebook/react-native'}}
        domStorageEnabled={true}
        style={{marginTop: 20}}
      />
        </Container>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 25,
    },
      welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
      padding:10
    },
  
  });
  