import React, { useState, useEffect } from 'react';
// style
import styled from 'styled-components';

// type
type DescriptionType = {
  [key: string]: string;
  'clear sky': string;
  'few clouds': string;
  'scattered clouds': string;
  'broken clouds': string;
  'shower rain': string;
  rain: string;
  thunderstorm: string;
  snow: string;
  mist: string;
};

const WeatherLink = styled.a`
  &:hover {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

const StyledWeather = styled(WeatherLink)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  cursor: pointer;
  user-select: none;
`;

const StyledTempFont = styled.span`
  font-weight: 800;
  font-size: 15px;
  margin-right: 8px;
`;
const StyledCity = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: grey;
`;

const weatherDescription: DescriptionType = {
  'clear sky': '맑음',
  'few clouds': '구름 많음',
  'scattered clouds': '흐림',
  'broken clouds': '먹구름',
  'shower rain': '소나기',
  rain: '비',
  thunderstorm: '천둥번개',
  snow: '눈',
  mist: '안개',
};

export default function Weather() {
  const [weather, setWeather] = useState({
    icon: '',
    description: '',
    temp: 0,
    name: '',
  });
  async function getWeather() {
    const url = `http://localhost:3000/weather/Seoul`;
    const serverData = await fetch(url);
    const { data } = await serverData.json();
    const {
      main: { temp },
      weather: [{ icon, description }],
      name,
    } = data;
    setWeather({ ...weather, icon, description, temp, name });
  }
  useEffect(() => {
    getWeather();
  }, []);
  try {
    console.log(weather);
  } catch (err) {
    console.error(err);
  }
  const { description, icon, temp, name: city } = weather;
  return (
    <StyledWeather href="https://weather.naver.com/today/09650103">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} width="50" height="50" />
      <StyledTempFont>{`${temp}º`}</StyledTempFont>
      <StyledTempFont>{weatherDescription[description]}</StyledTempFont>
      <StyledCity>{city}</StyledCity>
    </StyledWeather>
  );
}
