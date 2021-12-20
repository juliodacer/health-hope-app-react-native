import React, {useEffect, useState, useContext} from 'react';
import {Text, View, ScrollView, TextInput, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';
import {useForm} from '../../hooks/useForm';
import {Button} from '../../components/Button/Button';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {AuthContext} from '../../context/authContext';
import {styles} from './styles';
import {PlansStackParams} from '../../navigator/PlansNavigator';
import {PlansContext} from '../../context/plansContext';

interface Props extends DrawerScreenProps<PlansStackParams, 'PlanScreen'> {}

export const PlanScreen = ({navigation, route}: Props) => {
  const [dateStart, setDateStart] = useState(new Date());
  const [openDateStart, setOpenDateStart] = useState(false);
  const [textDateStart, setTextDateStart] = useState('Definir fecha de inicio');

  const [dateFinish, setDateFinish] = useState(new Date());
  const [openDateFinish, setOpenDateFinish] = useState(false);
  const [textDateFinish, setTextDateFinish] = useState('Definir fecha final');

  const onChangeDateStart = (date: Date) => {
    let fDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    setTextDateStart(fDate);

    console.log(dateStart);
  };

  const onChangeDateFinish = (date: Date) => {
    let fDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    setTextDateFinish(fDate);

    console.log(dateFinish);
  };

  const {id = '', name = '', description = '', img = '', startDate, finishDate} = route.params;

  const {user} = useContext(AuthContext);
  const {loadPlanById, updatePlan, addPlan} = useContext(PlansContext);

  const {_id, name2, description2, img2, form, startDate2, finishDate2, onChange, setFormValue} =
    useForm({
      _id: id,
      name2: name,
      description2: description,
      img2: img,
      startDate2: startDate, 
      finishDate2: finishDate
    });

  useEffect(() => {
    loadPlan();
  }, []);

  const loadPlan = async () => {
    if (id.length === 0) return;
    const plan = await loadPlanById(id);
    setFormValue({
      _id: id,
      name2: name,
      img2: plan.img || '',
      description2: plan.description || '',
      startDate2: plan.startDate,
      finishDate2: plan.finishDate
    });
  };

  const saveOrUpdate = () => {
    if (id.length > 0) {
      updatePlan(id, name2, description2, dateStart, dateFinish);
    } else {
      addPlan(name2, description2, dateStart, dateFinish);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {img.length > 0 && (
          <Image
            source={{uri: img}}
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: '100%',
              height: 300,
            }}
          />
        )}

        {user?.role === 'ADMIN_ROLE' ? (
          <>
            <Text style={styles.label}>Nombre del Plan</Text>
            <TextInput
              placeholder="Nombre del Plan"
              style={styles.txtInput}
              value={name2}
              onChangeText={value => onChange(value, 'name2')}
            />

            <Text style={styles.label}>Descripción</Text>
            <TextInput
              placeholder="Descripción"
              style={styles.txtInput}
              value={description2}
              onChangeText={value => onChange(value, 'description2')}
            />

            <Text style={styles.label}>Fecha de inicio</Text>
            <Text style={{ fontSize: 18}}>
              {textDateStart}
            </Text>

            <ButtonGradient
              title="Fecha de inicio"
              onPress={() => {
                setOpenDateStart(true);
              }}
              newStyle={{marginBottom: 10, marginTop: 10}}
            />

            <DatePicker
              modal
              open={openDateStart}
              date={dateStart}
              onConfirm={date => {
                setOpenDateStart(false);
                setDateStart(date);
                onChangeDateStart(date);
              }}
              onCancel={() => {
                setOpenDateStart(false);
              }}
            />

            <Text style={styles.label}>Fecha de finalización</Text>
            <Text style={{fontSize: 18}}>
              {textDateFinish}
            </Text>

            <ButtonGradient
              title="Fecha de finalización"
              onPress={() => {
                setOpenDateFinish(true);
              }}
              newStyle={{marginBottom: 10,  marginTop: 10}}
            />

            <DatePicker
              modal
              open={openDateFinish}
              date={dateFinish}
              onConfirm={dateFinish => {
                setOpenDateFinish(false);
                setDateFinish(dateFinish);
                onChangeDateFinish(dateFinish);
              }}
              onCancel={() => {
                setOpenDateFinish(false);
              }}
            />

            <Text style={styles.label}>Subir imagen:</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginBottom: 10,
              }}>
              <Button
                title="Galeria"
                onPress={() => {}}
                newStyle={{width: '45%', marginRight: 10}}
              />
              <Button
                title="Cámara"
                onPress={() => {}}
                newStyle={{width: '45%', marginLeft: 10}}
              />
            </View>

            <ButtonGradient title="Guardar" onPress={saveOrUpdate} />
          </>
        ) : (
          <>
            <Text style={styles.label}>Descripción</Text>
            <Text style={styles.description}>{description}</Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};