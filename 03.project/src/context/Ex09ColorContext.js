import {createContext} from 'react';

export const ColorContext = createContext(null);   // 기본값은 null값으로
// 전역적으로 데이터를 관리할 수 있음
// context를 만들어서 밖에서 쓸 수 있게끔 만들어줌