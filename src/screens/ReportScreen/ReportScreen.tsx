import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {dataOne} from '../../data/data';
import {dataTwo} from '../../data/data2';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryBar,
  VictoryPie,
} from 'victory-native';

export const ReportScreen = () => {
  return (
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

      <VictoryPie  theme={VictoryTheme.material} data={dataTwo.slice(0, 8)} x="habit" y="perform" />
    </ScrollView>
  );
};
