# 다용도 계산기

<img src="https://github.com/user-attachments/assets/96a562b2-2e4e-4c9b-94fc-c3b7c21fc9a0" width="400" height="400"/>


- 배포 URL : https://universal-calculator-sepia.vercel.app/

<br>

## 프로젝트 소개

- 해당 프로젝트는 계산기라는 하나의 매개체로 다양한 기능을 구현해보고자 만들게 되었습니다.
- 현재는 환율 계산기, BMI 계산기, 피파온라인 수수료 계산기로 이루어져 있습니다.

<br>

## 팀원 구성

<div align="center">

| **박병근** |
| :------: |
| [<img src="https://github.com/Dejong1706/MyBlog/assets/75114974/dc9fa281-1359-4c2c-866b-f426b258ee0a" height=150 width=150> <br/> @Dejong1706](https://github.com/Dejong1706) |

</div>

<br>

## 개발 환경

- Front : NextJS14, TypeScript, Redux-toolkit, TailwindCSS
 
<br>

## 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-07.18 ~ 07.25

<br>

### 작업 관리

- Git을 통해 버전관리를 진행하였습니다.
- 현재 3가지 기능을 구현할때까지는 main브랜치하나에서만 관리했지만 이후 새로운 아이디어나 기능을 추가할 경우 새로운 브랜치를 만들고 main과 병합할 예정입니다.

<br>

## 4. 페이지별 기능

### [환율 계산기]
- 각 나라별 환율을 계산할 수 있는 페이지입니다. (7/18일자 환율데이터 적용)
- 좌측 계산기를 통해 간단한 사칙연산을 수행할 수 있습니다.
- 나라 두개를 각각 선택한 뒤 첫번째 나라에 궁금한 금액을 입력하면 두번째 나라의 해당 금액에 대한 환율이 적용되어 표시됩니다.

| 나라 선택전 | 나라 선택 |
|----------|----------|
|![다용도 계산기 - Chrome 2024-07-25 오전 11_25_26](https://github.com/user-attachments/assets/c4b9e30a-9373-4bb3-97a4-787c2a6a5927)|![다용도 계산기 - Chrome 2024-07-25 오전 11_25_58](https://github.com/user-attachments/assets/be28fee7-251b-4172-b098-c540813d5b5c)|

<br>

### [BMI 계산기]
- 나의 BMI수치를 직관적으로 확인할 수 있는 페이지입니다.
- 사용자의 기본 정보(키, 몸무게, 나이)를 입력하면 BMI수치 공식을 통한 나의 BMI가 나타납니다.
- 나의 BMI 수치에 따른 아이콘과 막대 그래프가 좀더 알기 편하게 나타납니다.

| 정보 입력전 | 정보 입력 후 | 정보 입력 후2 |
|----------|----------|----------|
|![다용도 계산기 - Chrome 2024-07-25 오전 11_26_15](https://github.com/user-attachments/assets/06cf4c33-24c1-4747-aeaf-4b2eb54b79da)|![다용도 계산기 - Chrome 2024-07-25 오전 11_26_27](https://github.com/user-attachments/assets/18cc2fe0-b87c-4d97-b2e8-8f52ddb615f7)|![다용도 계산기 - Chrome 2024-07-25 오전 11_26_35](https://github.com/user-attachments/assets/905b85a6-66eb-4974-896c-d265212dcc41)|

<br>

### [피파 수수료 계산기]
- FC온라인의 수수료 계산을 도와주는 페이지입니다. 
- 판매입력창에 판매금액을 입력하게 되면 수수료 금액 40%가 감액되어 총 판매 금액에 해당 금액이 적용되어 나타납니다.
- 판매 입력 창 추가를 누르면 판매입력창의 갯수가 증가합니다.
- 프리미엄 PC방 할인과, TOP Class할인을 적용하면 각각 기본 수수료 40%에서 30%와 20%가 할인된 금액이 표시되게 됩니다.

| 나라 선택전 | 나라 선택 |
|----------|----------|
|![다용도 계산기 - Chrome 2024-07-25 오전 11_26_49](https://github.com/user-attachments/assets/7e5bb019-b6c6-45f1-aaab-9ad621c27a7a)|![다용도 계산기 - Chrome 2024-07-25 오전 11_27_20](https://github.com/user-attachments/assets/7db28c26-a7f5-44a9-995f-cb63d60861c4)|

<br>

## 5. 개선 목표

- 조금 더 다양한 계산기를 이용한 기능을 추가하고 싶습니다.

    


