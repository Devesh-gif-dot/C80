import React,{Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import TabNavigator from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:TabNavigator}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home',
})