import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Container from '../../components/atoms/Container';
import Text from '../../components/atoms/Text';
import Button from '../../components/molecules/Button';
import Icon from '../../asset/images/google_icon.png';
import * as Progress from 'react-native-progress';

const LoginPresenter = ({loginWithGoogle, isLoading}) => {
  return (
    <Container style={styles.progress}>
      {isLoading ? (
        <View style={styles.progress}>
          <Progress.Circle size={30} indeterminate={true} color={'white'} />
        </View>
      ) : null}

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
  progress: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginPresenter;
