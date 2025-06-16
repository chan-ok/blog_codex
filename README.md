# blog_codex
blog template by codex

# 목표
- 아래 후술되는 기술 스택, 폴더 구조, 요건을 만족하는 블로그를 생성한다

# 요건
1. 페이지
  0. 공통사항
    - 상단의 헤더는 스크롤하는 경우 화면상 상단에 고정으로 따라와야합니다
    - 헤더에는 제목, home, post, tag, about, github아이콘(내 깃프로필 링크)을 포함합니다
    - 하단에는 푸터가 있고 카피라이트문구가 있습니다
    - 푸터는 페이지 하단에 있습니다
    - 전체 좌우여백은 반응형 디자인으로서, 화면 사이즈가 태블릿보다 클 경우 좌우 300px 정도의 여백을 추가합니다
  2. home
    - 최근 작성되거나 수정된 포스트 5건이 표시되게 해주세요
    - 포스트는 카드 형식으로 표현하되, 이미지가 있을 경우 카드 형식 안에 표시해주세요
    - 포스트 카드는 제목, 간단한 설명, 이미지 (있을 경우), 작성날짜, 수정날짜, 태그를 포함해야합니다
  3. post
    - 작성된 날짜 최신순으로 정렬되어 10개씩 리스트를 보여줍니다
    - 리스트는 home에서 사용되는 포스트 카드 형태를 재활용합니다
    - 페이지네이션은 리스트 아래에 위치합니다
    - 페이지네이션을 위해서 인덱스를 생성하는 함수를 작성하고 빌드 시 postIndex.json을 생성합니다.
    - 포스트를 클릭하면 포스트 상세 페이지로 이동합니다
    - 포스트 상세페이지는 제목, 이미지 (있을 경우), 프론트매터 정보, 태그, 본문이 있습니다
    - 포스트 상세페이지에는 TOC 컴포넌트가 있고 마크다운 헤더요소와 매핑됩니다
    - TOC 컴포넌트는 스크롤 시 화면에 고정된 위치에 존재합니다
  5. tag
    - 포스트 태그별 정리된 요소를 보여줍니다
    - 태그별로 포스트가 몇개인지 태그 뱃지 옆에 숫자를 표시합니다
    - 태그를 여러개 클릭시 and 조건으로 조회합니다
    - 조회된 포스트는 home에서 사용되는 포스트 카드 형태를 재활용합니다 
  6. about
    - 깃 프로필(markdown) 기반으로 개인 소개글을 보여줍니다

# 기술 스택
- framework: react19
- language: typescript
- routing: tanstack router
- validation: zod
- markdown: mdx
- state: zustand
- style: tailwindcss version4
- UI component library: shadcn/ui
- unit test: vitest
- function test: react testing library
- e2e test: playwright
- componennt managing: storybook
- formatter and linter: biome

# 프로젝트 구조 (FSD Architecture)
```
/docs - 문서화
/src
  /app - 애플리케이션 진입점
  /features - 기능별 구성 요소 
    /[feature_name] - 각 기능별 폴더
      /blocks - 기능별 구성 요소
      /containers - 기능별 컨테이너
      /interactions - 기능별 상호작용
      /queries - 기능별 API 호출
      /schemas - 기능별 스키마 정의
  /pages - 페이지 구성 요소 (파일 기반 라우팅)
  /shared - 공유 구성 요소
    /assets - 이미지 및 기타 정적 자산
    /components - 재사용 가능한 구성 요소
      /blocks - 재사용 가능한 블록
      /containers - 재사용 가능한 컨테이너
      /interactions - 재사용 가능한 상호작용
      /layouts - 레이아웃 구성 요소
      /ui - Shadcn/UI 구성 요소
    /constants - 상수 및 설정
    /functions - Netlify serverless 함수
    /libs - 라이브러리 및 헬퍼 함수
      /router - tanstack router 설정
      /shadcn - Shadcn/UI 설정
    /stores - 상태 관리 (Zustand)
    /styles - Tailwind CSS 스타일
    /types - TypeScript 타입 정의
  /widgets - 재사용 가능한 구성 요소
```

# 개발 규칙
## 작업 플로우
1. 개발에 앞서 요건을 만족하는 테스트 코드를 먼저 작성하세요.
2. 현재 기술 스택을 확인한 후, 만족하는 기술 스택을 사용하여 코드를 작성하세요
3. 테스트 코드를 통과할 때까지 코드를 수정하세요
4. 테스트 코드를 통과하면 docs/ 폴더에 문서를 작성하세요
## 네이밍 규칙
- 폴더 및 파일명은 kebab-case로 작성
  - 예: `my-component`, `my-feature`
- 변수명, 함수명은 camelCase로 작성
  - 예: `myVariable`, `myFunction`
- 클래스명, 컴포넌트명은 PascalCase로 작성
  - 예: `MyClass`, `MyComponent`
- 상수명은 UPPER_SNAKE_CASE로 작성
  - 예: `MY_CONSTANT`

 
