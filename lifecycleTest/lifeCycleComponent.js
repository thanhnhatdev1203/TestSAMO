import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet, Text, Platform, View
} from 'react-native';
import Count from './component/CountComponent'
class LifeCycle extends Component{
    constructor(props){
        super(props)
        console.log(`${Date.now()}. This is constructor`);
        this.state ={
            numberOfRefresh : 0
        };
        setInterval( () => {
            console.log("Change State each 2S")
            this.setState(previousState => {
                return {numberOfRefresh : previousState.numberOfRefresh + 1};
        });
    }, 2000);
}
    componentWillMount(){
        console.log(`${Date.now()}. This is componentWillMount`);
    }
    componentDidMount(){
        console.log(`${Math.floor(Date.now())}. This is componentDidMount`);
    }
    shouldComponentUpdate(){
        console.log(`${Date.now()}. This is shouldComponentUpdate`);
        return true ;
    }
    componentWillUpdate(){
        console.log(`${Date.now()}. This is componentWillUpdate`);
    }
    componentDidUpdate(){
        console.log(`${Date.now()}. This is componentDidUpdate`);
    }


    render(){
        console.log(`${Math.floor(Date.now())}. This is render function`);
        return(
            <View style={{flex : 1,marginTop : 100,color: 'black', backgroundColor : 'red'}} >
                    <Text>hhasd</Text>
            </View>);
        }
    }
    export default class LifeCycleComponent extends Component{
        constructor(props){
            super(props)
        }
        render(){
            var lifeCycle = <LifeCycle propA="abc"></LifeCycle> ;
            return (
                
                <View>{lifeCycle}</View>
            );

        }
    }
