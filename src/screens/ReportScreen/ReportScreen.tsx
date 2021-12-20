import React, {useContext, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {dataOne} from '../../data/data';
import {dataTwo} from '../../data/data2';
import {dataThree} from '../../data/data3';
import {AuthContext} from '../../context/authContext';
import {useNavigation} from '@react-navigation/core';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryBar,
  VictoryPie,
} from 'victory-native';

export const ReportScreen = () => {
  const {user} = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconDrawer onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <>
      {user?.role === 'USER_ROLE' ? (
        <ScrollView
          style={{
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Avance de la semana
          </Text>
          <VictoryChart theme={VictoryTheme.material} height={220} width={500}>
            <VictoryBar
              style={{
                data: {
                  width: 20,
                },
              }}
              animate={{
                duration: 3000,
                onLoad: {
                  duration: 3000,
                },
              }}
              data={dataOne}
              x="day"
              y="habit"
            />
          </VictoryChart>

          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Progreso
          </Text>

          <VictoryChart>
            <VictoryLine
              theme={VictoryTheme.material}
              style={{
                data: {
                  stroke: 'red',
                  strokeWidth: 3,
                },
              }}
              animate
              data={dataOne}
              x="day"
              y="habit"
            />
          </VictoryChart>

          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Hábitos
          </Text>

          <VictoryPie
            theme={VictoryTheme.material}
            data={dataTwo.slice(0, 9)}
            x="habit"
            y="perform"
          />

          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Hábitos de calificacion de hábitos
          </Text>

          <VictoryPie
            theme={VictoryTheme.material}
            data={dataTwo.slice(0, 3)}
            x="habit"
            y="perform"
          />
        </ScrollView>
      ) : (
        <ScrollView
          style={{
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Avance de la semana
          </Text>
          <VictoryChart theme={VictoryTheme.material} height={220} width={500}>
            <VictoryBar
              style={{
                data: {
                  width: 20,
                },
              }}
              animate={{
                duration: 3000,
                onLoad: {
                  duration: 3000,
                },
              }}
              data={dataThree}
              x="user"
              y="perform"
            />
          </VictoryChart>

          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Progreso
          </Text>

          <VictoryChart>
            <VictoryLine
              theme={VictoryTheme.material}
              style={{
                data: {
                  stroke: 'red',
                  strokeWidth: 3,
                },
              }}
              animate
              data={dataThree}
              x="user"
              y="perform"
            />
          </VictoryChart>

          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Hábitos
          </Text>

          <VictoryPie
            theme={VictoryTheme.material}
            data={dataThree.slice(0, 14)}
            x="user"
            y="perform"
          />

          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Hábitos de calificacion de hábitos
          </Text>

          <VictoryPie
            theme={VictoryTheme.material}
            data={dataTwo.slice(0, 3)}
            x="habit"
            y="perform"
          />
        </ScrollView>
      )}
    </>
  );
};
