# 우대리

## 사용 기술

- React Native
- TypeScript
- Redux toolkit
- React Native Navigation
- Styled-Components

## Commit Convention

> feat : 새로운 기능  
> fix : 버그  
> refactor: 코드 리팩토링  
> style : 코드 의미에 영향을 주지 않는 변경사항 (형식 지정, 세미콜론 누락 등)  
> docs : 문서의 추가, 수정, 삭제  
> test : 테스트 추가, 수정, 삭제 (비즈니스 로직에 변경 없음)  
> chore : 기타 변경사항 (빌드 부분 혹은 패키지 매니저 수정사항)  
> setting : 환경 설정

## github flow

- master branch : 배포 가능한 최신 상태
- develop branch
  - feature 브랜치의 기준이 되는 브랜치.
  - 테스트 후 문제 없을 시 master 브랜치로 merge
- feature branch
  - 새로운 기능 개발을 위한 브랜치.
  - develop브랜치를 기준으로 생성.
  - 브랜치 이름은 "feature/기능이름"으로 생성
