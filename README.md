# The Last Subway

막차 정보와 푸시 알람기능을 제공하는 안드로이드, iOS 모바일 애플리케이션

![](screens.png)
![](TheLastSubway.gif)

## 주요 특징

-	Google Directions API를 이용하여 목적지까지의 대중교통 경로 제공
-	Google Map, Geocode API를 이용하여 도착 위치 선택 기능
-	Expo Push Notifications, Android Channels를 이용한 푸시 알람 기능
-	목적지 위치, 푸시 알람 시간 수정 및 타이머 제거 기능
-	React Navigation API를 이용한 스크린 전환
-	Jest와 Enzyme을 사용한 Component, Reducer Unit  테스트
-	Git을 이용한 버전 관리

## 필요 조건
- 실제 디바이스가 필요합니다.
(Simulator 혹은 Emulator에서는 푸시 알림이 실행되지 않습니다.)

## 설치 전 필요한 선행 작업

- Google API에 들어갑니다. [Google API Console](https://console.developers.google.com/)


- 4개의 API를 활성화 시킵니다. [[how to link]](https://support.google.com/googleapi/answer/6158841?hl=en)

  * Maps SDK for Android
  * Maps SDK for iOS
  * Directions API
  * Geocoding API

- API key `<YOUR GOOGLE API KEY>`를 발급 받습니다.  [[how to link]](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Installation

```
git clone https://github.com/letsdoyi/the-last-subway-client.git

cd the-last-subway-client

touch credentials.js

open credentials.js // Copy and paste the code below in this file

npm install

expo start

```

### `credentials.js`

이 파일에 아래 코드를 붙여넣습니다.

단, `<GOOGLE API KEY>`자리에 `<YOUR GOOGLE API KEY>` 를 넣습니다. [Prerequisites](#Prerequisites)

```
export default credentials = {
  GOOGLE : {
    APIKEY : <GOOGLE API KEY>
  }
}
```

## 사용한 기술

- JavaScript (ES2015+)

- Expo, React Native

- React for component-based-architechture

- React Navigation

- Redux for state management

- HTTP request using Axios

## 테스트

- Jest and Enzyme for Unit test

## 버전 및 일정 관리

- Git, Github

- Trello for managing scheluled tasks

## 챌린지

- First Experiences With React Native: Different Structures To React

  Connecting React Native with Redux was challenging. In React, Redux Store is connected with an App container and delivers props and states to it. However, in React Native, linked screens by navigator, delivering props and states needs different structure. it is solved by using React Navigation. App container sends props to App Navigator made by React Navigation.

- Short Time Period, 2 weeks: Schedule Management and Finding Alternatives

  To meet a deadline, I found alternatives or held time-consuming problems over when faced with them although I'd tested APIs and codes in advance of App development.

  For instance, React Native Google Place Autocomplete set in the South Korea area was not working in my Application. I substituted searching function using Place autocomplete for moving a marker and setting destination and held the problem over.

  Another example is about public data portal open API (realtime station arrival API). The API data for calculating the last public transit time is not stable with a server error. I got transit information between the first and last train time using Google Direction API instead of unstable the API. From these experiences, I could practice managing my schedules on my level and finding several alternatives.

## 개선할 사항들

- [ ] Adding Place Autocomplete for improved location search

- [ ] Managing user's favorite locations

- [ ] Adding arrival time setting for providing accurate information

- [ ] Not stopping timer after leaving time BugFix

- [ ] Refactoring for code reusability

- [ ] End To End Test
