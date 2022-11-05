import React from 'react';
import {View, Pressable, Dimensions, StyleSheet, Image} from 'react-native';
import Text from '../atoms/Text';
import home_icon from '../../asset/images/home_icon.png';
import home_icon_selected from '../../asset/images/home_icon_selected.png';
import schedule_icon from '../../asset/images/schedule_icon.png';
import schedule_icon_selected from '../../asset/images/schedule_icon_selected.png';
import setting_icon from '../../asset/images/setting_icon.png';
import setting_icon_selected from '../../asset/images/setting_icon_selected.png';
import Item from '../molecules/BottomNavigationBarItem';

const BottomNavigationBar = ({state, descriptors, navigation}) => {
  const icons = [home_icon, schedule_icon, setting_icon];
  const selected_icons = [
    home_icon_selected,
    schedule_icon_selected,
    setting_icon_selected,
  ];
  return (
    <View style={{position: 'relative'}}>
      <View style={styles.mainContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View key={index} style={[styles.mainItemContainer]}>
              <Pressable onPress={onPress}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Item
                    size="big"
                    selected={isFocused}
                    source={isFocused ? selected_icons[index] : icons[index]}
                  />
                  <Text size="small" color="grey">
                    {label}
                  </Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#F4F4F4',
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
    borderRadius: 1,
    borderColor: '#333B42',
    backgroundColor: 'transparent',
  },
});

export default BottomNavigationBar;
