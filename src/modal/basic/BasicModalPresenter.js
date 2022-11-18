import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Button from '../../components/molecules/Button';
import Text from '../../components/atoms/Text';

const BasicModalPresenter = ({close}) => {
  return (
    <View style={styles.modal}>
      <View style={styles.text}>
        <Text size="medium" color="black" marginBottom={20}>
          일정을 삭제하시겠습니까?
        </Text>
      </View>
      <View style={styles.button}>
        <View style={{marginRight: 12}}>
          <Button border={true} width={122} onPress={close}>
            취소
          </Button>
        </View>
        <Button border={false} width={122} onPress={close}>
          확인
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 22,
    width: 300,
    height: 142,
    justifyContent: 'center',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [
      {
        translateX: -Dimensions.get('window').width * 0.38,
      },
    ],
  },
  text: {
    width: '100%',
  },
  button: {
    flexDirection: 'row',
  },
});

export default BasicModalPresenter;
