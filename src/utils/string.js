const string = text => {
  const stringMap = {
    Livingroom: '거실',
    Sitting: '앉아',
    living_room: '거실',
    kid_room: '아이방',
    standing: '서',
    sitting: '앉아',
    laying: '누워',
    mon: '월요일',
    tue: '화요일',
    wed: '수요일',
    thu: '목요일',
    fri: '금요일',
    inside: '내부일정',
    outside: '외부일정',
  };

  return stringMap.hasOwnProperty(text) ? stringMap[text] : text;
};

export default string;
