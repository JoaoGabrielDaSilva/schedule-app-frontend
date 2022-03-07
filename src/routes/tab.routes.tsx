import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Schedules } from '../pages/Schedules'

const Tabs = createBottomTabNavigator()

export const BottomTabs = () => (
 <Tabs.Navigator>
   <Tabs.Screen name="Schedules" component={Schedules}/>
 </Tabs.Navigator>
)