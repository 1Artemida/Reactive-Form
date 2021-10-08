import { Hobby } from './hobby.interfaces';

export const JS_FRAMEWORKS: any = { angular: ['1.1.1', '1.2.1', '1.3.3'], react: ['2.1.2', '3.2.4', '4.3.2'], vue: ['3.3.1', '5.2.1', '5.1.3'] };
export const HOBBY: Hobby[] = [
    {
      name: 'Футбол',
      information: [
        {duration: '2 month'},
        {duration: '4 month'},
        {duration: '6 month'}
      ]
    },
    {
    name: 'Теніс',
      information: [
        {duration: '2 month'},
        {duration: '4 month'},
        {duration: '6 month'}
      ]
    },
    {
    name: 'Волейбол',
      information: [
        {duration: '2 month'},
        {duration: '4 month'},
        {duration: '6 month'}
      ]
    },
    {
      name: 'Бокс',
        information: [
          {duration: '2 month'},
          {duration: '4 month'},
          {duration: '6 month'}
        ]
      }
  ]