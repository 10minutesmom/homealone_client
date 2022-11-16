import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const TimePicker = ({hint, marginBottom, value, item, name, handle}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles(marginBottom).input}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
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

export default TimePicker;
