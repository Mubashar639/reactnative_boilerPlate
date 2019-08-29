
import { StyleSheet } from 'react-native';


  import React, { Component } from 'react';
  import { Container, Header, Content, Item, Input, Icon, View,Text ,Button} from 'native-base';
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
               this is notification page
              
             </Text>
           </View>
            <Item>
              <Icon active name='home' />
              <Input placeholder='Icon Textbox'/>
            </Item>
           
            <Item>
              <Input placeholder='Icon Alignment in Textbox'/>
              <Icon active name='swap' />
            </Item>
          </Content>
          <Button success
            style={styles.welcome}
              onPress={
                () => this.login(this.state.value)
              }>
              <Text>Get Meaning</Text>
            </Button>
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
  