# 다용도 계산기

<img src="https://github.com/user-attachments/assets/96a562b2-2e4e-4c9b-94fc-c3b7c21fc9a0" width="400" height="400"/>


- 배포 URL : ...

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
- 상단 배너
    - 로고 : 로고 클릭시 메인 화면으로 이동합니다.
    - 공지사항, 이벤트, TIL, SHOP, RANKING : 해당 영역 클릭시 페이지로 이동합니다.
    - 사용자 아이콘 : 로그아웃, Mypage, AdminPage(관리자 일 경우)을 확인 할 수 있습니다.
- 그림 이미지, 동아리 소개, 동아리 멤버 소개가 Fullpagescroll로 나타나져 있습니다. (비 로그인시 작동 그림 이미지만을 확인 할 수 있습니다)

| 나라 선택전 | 나라 선택 |
|----------|----------|
|![다용도 계산기 - Chrome 2024-07-25 오전 11_25_26](https://github.com/user-attachments/assets/c4b9e30a-9373-4bb3-97a4-787c2a6a5927)|![다용도 계산기 - Chrome 2024-07-25 오전 11_25_58](https://github.com/user-attachments/assets/be28fee7-251b-4172-b098-c540813d5b5c)
|


<br>

### [공지사항]
- 생성된 공지사항들을 확인할 수 있습니다.
- 공지사항 작성, 수정, 삭제기능이 존재합니다.

| 공지사항 |
|----------|
|![Pray2U - Chrome 2023-12-19 오후 8_50_59](https://github.com/Dejong1706/MyBlog/assets/75114974/bc3ab7a0-3817-4188-9204-2d6303594ab1)|

### [TIL]
- Today I Learn의 의미로 오늘의 학습한 자료들을 각각 업로드하는 페이지 입니다.
- 작성자의 이름을 검색하여 게시글을 확인 할 수 있습니다.
- TIL 작성, 수정, 삭제기능이 존재합니다.
- TIL의 글을 작성한 유저는 point를 획득합니다.

| TIL |
|----------|
|![Pray2U - Chrome 2023-12-19 오후 8_53_19](https://github.com/Dejong1706/MyBlog/assets/75114974/6d915f8f-5bca-457e-8aa9-78001878d3d0)|

<br>

### [Ranking]
- 출석, TIL 작성으로 얻은 point의 순위를 나타내는 페이지입니다.
- point가 많은 순으로 내림차순 되어 보여집니다.

| Ranking |
|----------|
|![Pray2U - Chrome 2023-12-19 오후 8_53_35](https://github.com/Dejong1706/MyBlog/assets/75114974/03fd2692-313d-4d5c-a5af-7aaf7ba8e88b)|

<br>

### [이벤트]
- react-calendar로 제작하였습니다.
- title, content, 시간을 설정한 뒤 원하는 날짜를 선택하면 해당 날짜에 일정이 작성됩니다.
- 일정이 존재하는 날짜는 하늘색 점으로 표시하였습니다.

| 이벤트 |
|----------|
|![Pray2U - Chrome 2023-12-19 오후 9_46_07](https://github.com/Dejong1706/MyBlog/assets/75114974/fa553216-587d-4698-a11b-186db478c07a)|

<br>

### [My Page]
- 프로필 : (유저 이미지, 전화번호, 이메일) 변경, 회원 탈퇴, Github 잔디 확인
- 출석 관리 : 달력에 현재 날짜와 클릭한 달력 날짜가 일치할 경우에만 출석 버튼 활성, 출석 성공시 버튼 "출석 완료"로 변경 
- MY TIL : 로그인한 유저가 작성한 TIL 확인
- MY SHOP : 로그인한 유저가 등록한 아이템, 혹은 구매한 아이템 확인 가능(아이템은 point로 구매 가능)
  
| 프로필 | 출석관리 |
|----------|----------|
|![Pray2U - Chrome 2023-12-19 오후 8_53_51](https://github.com/Dejong1706/MyBlog/assets/75114974/2f2bea9c-26ea-443c-b312-db88d0d5a4d0)|![Pray2U - Chrome 2023-12-19 오후 8_53_51](https://github.com/Dejong1706/MyBlog/assets/75114974/5d815375-8813-47d0-970e-413dd90f58c4)|

### [관리자]
- 유저관리 : 가입되어 있는 유저들의 정보 확인 가능, 관리자 권한 (부여,박탈) 기능
- 아이템 관리 : 사용자들이 올린 아이템들의 승인, 거절
- 주문 승인 : 아이템 구매요청 승인, 거절

| 유저관리 | 아이템관리 |
|----------|----------|
|![Pray2U - Chrome 2023-12-19 오후 8_54_01](https://github.com/Dejong1706/MyBlog/assets/75114974/a38d0979-7515-4d53-acb2-1b7b5ae581ef)|![Pray2U - Chrome 2023-12-19 오후 8_54_36](https://github.com/Dejong1706/MyBlog/assets/75114974/1e06c8a6-dece-4410-bd15-cb32ce6708f0)|

<br>

## 5. 개선 목표

- 반응형 디자인 적용
- css 통일
    


