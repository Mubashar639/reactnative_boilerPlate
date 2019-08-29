

import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';
import Car from "../../asset/Car.png"
import Beauty from "../../asset/Beauty.png"
import Appliances from "../../asset/Appliances.png"
import Computer from "../../asset/Comuputer.png"
import Electric from "../../asset/Electric.png"
import Health from "../../asset/Health.png"
import Home from "../../asset/Home.png"
import Pest from "../../asset/Pest.png"
import Plumbing from "../../asset/Pulimbing.png"


import React, { Component } from 'react';
import { Container, Header, Content, Item, Icon, Input } from 'native-base';
import { red } from 'ansi-colors';
export default class IconTextboxExample extends Component {
  state = {
    tintColor: "linear-gradient(-145deg, purple ,white)",
    items: [
      { iconName: Beauty, title: "beauty" },
      { iconName: Car, title: "Car & Bike" },
      { iconName: Appliances, title: "Appliances" },
      { iconName: Electric, title: "Electric" },
      { iconName: Computer, title: "Computer" },
      { iconName: Health, title: "Health Care" },
      { iconName: Home, title: "Home Care" },
      { iconName: Pest, title: "Pest Controm" },
      { iconName: Plumbing, title: "Plumbing" },




    ]
  }

  whenChange = (text) => {
    this.setState({ value: text })
  }
  login = (text) => {
    alert(text);
  }



  render() {
    const { items } = this.state
    return (
      <React.Fragment>
        <Container style={styles.containerA}>
          <Content style={{ display: "flex", flex: 1 }}>

            <ImageBackground style={styles.imgBackground}

              source={require('../../asset/catalog.jpg')}>


              <View style={styles.contentA} >
                <View style={styles.startt}>


                  <Text style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginLeft: 50, marginTop: 10 }}>Location for Services</Text>
                  {/* <Text style={{fontSize:20,color:"white", marginLeft:9,}}>
                    <Icon  color="white" size={15} style={{ padding:10,color:"white" }} name="md-locate" />
                        Faisalabad, Punjab 
                       
                    <Icon color="white" size={15} style={{ margin: 20,color:"white" }} name="ios-arrow-down" />
                       </Text> */}
                  <Item style={{ borderBottomColor: "transparent" ,marginTop:-9  }}>
                    <Icon color="white" size={15} style={{ padding: 10, color: "white" }} name="md-locate" />
                    <Text style={{ fontSize: 16, color: "white", marginHorizontal: 0.1 }}>  Faisalabad, Punjab </Text>
                    <Icon color="white" size={15} style={{ padding: 10, color: "white" }} name="ios-arrow-down" />

                  </Item>

                </View>
                <View style={styles.endt}>
                  <View>
                    <Text style={styles.texthere}>
                      How Can We
              </Text>
                    <Text style={styles.texthere}>
                      Help You Today?
              </Text>
                  </View>
                </View>
              </View>
              <Item style={styles.inputS}>
                <Icon style={{ marginLeft: 10 }} name="ios-search" />
                <Input placeholder="Search" />
              </Item>
            </ImageBackground>
            {/* </View>
          
          <View style={styles.containerB}> */}

            <View style={styles.contentB} >
              <View style={styles.bottomitems}>

                {items.map((item, key) => {
                  return <View key={key} style={styles.innerItems} >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={item.iconName}
                    />
                    <Text style={{ color: "black" }}>{item.title}</Text>
                  </View>

                })}

              </View>
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  inputS: {
    marginHorizontal: 20,
    marginLeft: 20,
    borderRadius: 4,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 100,
    bottom: -20,
  },
  containerA: {
    display: 'flex',
    flex: 1,

    flexDirection: 'column',

    alignItems: 'flex-start',
    height: 70,
  },
  containerB: {
    display: 'flex',
    paddingTop: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  contentA: {
    padding: 20,
    backgroundColor: 'rgba(104,31,200,0.8)',
    padding: 0,
    height: 190,


  },
  contentB: {
    backgroundColor: 'rgba(236,239,241,1)',
    height: "100%",
    flex: 3
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    padding: 10
  },
  imgBackground: {
    width: '100%',
    height: 190,

  },
  startt: {

    height: 50,

  },
  texthere: {
    fontSize: 24,
    color: "white",
  },
  bottomitems:
  {
    marginHorizontal: 3,
    marginTop: 30,
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'center',



  },
  endt: {

    marginLeft: 10,
    marginTop: 30
  },
  innerItems:
  {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 80,
    margin: 1.5,
    borderRadius: 3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }

});
