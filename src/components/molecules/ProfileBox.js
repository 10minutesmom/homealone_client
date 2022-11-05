import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../atoms/Text';
import Avatar from '../atoms/Avatar';

const ProfileBox = ({source, name, email}) => {
  return (
    <View style={styles.profileBox}>
      <View style={styles.avatar}>
        <Avatar source={source} />
      </View>
      <View>
        <Text
          size="big"
          color="black"
          weight="bold"
          marginBottom={6}>{`${name}님 환영합니다!`}</Text>
        <Text size="medium" color="grey">
          {email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileBox: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 122,
    marginBottom: 34,
  },
  avatar: {
    marginRight: 22,
  },
});

export default ProfileBox;
