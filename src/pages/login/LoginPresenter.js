import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/atoms/Container';
import Text from '../../components/atoms/Text';
import Button from '../../components/molecules/Button';
import Icon from '../../asset/images/google_icon.png';

const LoginPresenter = ({navigate, loginWithGoogle}) => {
  return (
    <Container>
      <View style={[styles.text, {marginTop: 270}]}>
        <Text size="extra" weight="bold" color="black" marginBottom={10}>
          Home Alone
        </Text>
      </View>
      <View style={styles.text}>
        <Text size="small" color="grey" marginBottom={60}>
          서비스를 이용하시려면 로그인 해주세요
        </Text>
      </View>
      <View style={styles.button}>
        <Button big border width="100%" icon={Icon} onPress={loginWithGoogle}>
          Google 계정으로 로그인
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    width: '100%',
    paddingHorizontal: 44,
  },
  button: {
    width: '100%',
    paddingHorizontal: 44,
  },
});

export default LoginPresenter;
