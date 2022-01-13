import React, { useState, useEffect } from 'react';
// style
import styled from 'styled-components';

const WeatherLink = styled.a`
  &:hover {
    color: black;
  }
  &:hover span:nth-child(3) {
    text-decoration: underline grey;
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
  color: ${({ theme }) => theme.colors.link};
`;

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
    <StyledWeather href="https://weather.naver.com/today">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} width="50" height="50" />
      <StyledTempFont>{`${temp}º`}</StyledTempFont>
      <StyledCity>{city}</StyledCity>
    </StyledWeather>
  );
}
