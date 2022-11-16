import React from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Picker = ({hint, marginBottom, value, item, name, handle}) => {
  return (
    <View style={styles(marginBottom).input}>
      <RNPickerSelect
        textInputProps={{underlineColorAndroid: 'transparent'}}
        placeholder={{
          label: hint,
        }}
        fixAndroidTouchableBug={true}
        value={value}
        onValueChange={value => handle({value, name})}
        useNativeAndroidPickerStyle={false}
        items={item}
        style={{height: 40}}
      />
    </View>
  );
};

const styles = marginBottom =>
  StyleSheet.create({
    input: {
      width: '100%',
      marginBottom: marginBottom,
      height: 40,
      borderRadius: 12,
      backgroundColor: 'white',
      shadowColor: '#000000',
      shadowOpacity: 0.03,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      paddingLeft: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Picker;
