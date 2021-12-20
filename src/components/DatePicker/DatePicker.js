import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('No hay fecha')

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);

    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
        <Text>{text}</Text>
      <View>
        <Button onPress={() => showMode('date')} title="Show date picker!" />
      </View>
    
      {show && (
        <DateTimePicker
          testID="dateStart"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};
