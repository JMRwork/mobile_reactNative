import { Redirect, Tabs } from 'expo-router';
import React, { useContext } from 'react';

import { TabBarIcon } from '@/components';
import { Colors } from '@/constants/Colors';
import { useSession } from '../ctx';

export default function TabLayout() {
  const { session } = useSession()
  if (session === "") {
    return <Redirect href="/login" />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'analytics' : 'analytics-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="novoItem"
        options={{
          title: 'Novo Item',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information' : 'information-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
