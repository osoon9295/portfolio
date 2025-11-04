# Bo-Po : 프론트엔드 개발자 이보영 포트폴리오

[배포 사이트 보러 가기](https://bo-po.site/)

## 프로젝트 소개

- 미대생 출신 프론트엔드 개발자 이보영의 포트폴리오입니다.
- Next.js 15(App Router)와 Tailwind CSS 4를 활용해 부드러운 스크롤 경험과 반응형 UI를 제공합니다.
- 사용자가 제 소개, 기술 역량, 프로젝트 이력, 연락처를 한 번에 파악할 수 있도록 섹션을 구성했습니다.

## 주요 섹션 & 기능

### Intro

- 스크롤 스냅이 적용된 첫 화면에서 간단한 인사와 핵심 메시지를 전달합니다.  
  [src/app/page.tsx L12-L19](src/app/page.tsx#L12-L19)  
  [src/components/Intro.tsx L10-L37](src/components/Intro.tsx#L10-L37)

### About

- 프로필 이미지 위에 "더 알아보기" 오버레이를 클릭하면 학력·교육·인턴 정보가 펼쳐집니다.  
  [src/components/about/ProfileImage.tsx L6-L36](src/components/about/ProfileImage.tsx#L6-L36)
- 키워드와 자기소개 문단을 통해 가치관과 협업 스타일을 소개합니다. [src/components/about/Keyword.tsx L1-L14](src/components/about/Keyword.tsx#L1-L14)  
  [src/components/about/AboutText.tsx L1-L25](src/components/about/AboutText.tsx#L1-L25)

### Skills

- 카테고리 버튼을 통해 기술 스택을 필터링하며 확인할 수 있습니다. [src/components/about/Skills.tsx L1-L55](src/components/about/Skills.tsx#L1-L55)
- 기술 목록은 `constants/skills.ts`에서 관리하여 확장과 유지보수가 용이합니다.  
  [src/constants/skills.ts L1-L45](src/constants/skills.ts#L1-L45)

### Projects

- 썸네일, 기간, 역할, 활용 기술을 한눈에 보여주는 카드 뷰로 주요 프로젝트를 소개합니다.  
  [src/components/project/ProjectArea.tsx L1-L21](src/components/project/ProjectArea.tsx#L1-L21)  
  [src/components/project/Project.tsx L1-L46](src/components/project/Project.tsx#L1-L46)
- 프로젝트 데이터는 `constants/projects.ts`로 분리되어 있어 쉽게 추가/수정할 수 있습니다.  
  [src/constants/projects.ts L12-L52](src/constants/projects.ts#L12-L52)

### Contact

- Github, Velog, 이메일로 바로 연결되는 링크를 제공합니다.  
  [src/components/contact/Links.tsx L1-L20](src/components/contact/Links.tsx#L1-L20)
- "연락하기" 플로팅 버튼과 섹션 네비게이션으로 어느 위치에서도 빠르게 이동할 수 있습니다.  
  [src/components/common/FAB.tsx L1-L39](src/components/common/FAB.tsx#L1-L39)  
  [src/components/common/Navigation.tsx L1-L76](src/components/common/Navigation.tsx#L1-L76)

## 기술 스택

| 구분                  | 상세                                          |
| --------------------- | --------------------------------------------- |
| Language              | TypeScript, JavaScript                        |
| Framework             | Next.js, React                                |
| Styling               | Tailwind CSS                                  |
| State/Data            | Redux, Zustand, TanStack Query                |
| Collaboration & Tools | GitHub, Slack, Notion, Jira, ESLint, Prettier |
| Deployment & Infra    | Vercel, Supabase                              |
| Design                | Figma                                         |

※ 프로젝트에서 사용하지 않은 아이콘은 기본 대체 아이콘으로 표현됩니다.  
[src/components/project/Project.tsx L28-L44](src/components/project/Project.tsx#L28-L44)

## 프로젝트 구조

```
portfolio/
├─ src/
│  ├─ app/
│  │  └─ page.tsx           # 전체 페이지 구성
│  ├─ components/
│  │  ├─ Intro.tsx
│  │  ├─ about/             # 자기소개 관련 컴포넌트
│  │  ├─ common/            # 공통 UI(FAB, Navigation)
│  │  ├─ contact/           # 연락처 섹션
│  │  └─ project/           # 프로젝트 카드
│  ├─ constants/            # skills, projects 데이터
│  └─ type/                 # 타입 정의
├─ public/                  # 이미지 및 정적 에셋
└─ package.json             # 스크립트와 의존성
```

## 개발 환경

- Node.js >= 18.18.0 권장 (Next.js 15 요구사항)
- npm, pnpm, yarn 등 선호하는 패키지 매니저 사용 가능 (본 문서는 npm 기준)

## 실행 방법

```bash
npm install
npm run dev
```

- 로컬 개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 배포 & 운영

- Vercel을 통해 배포하고 있으며, GitHub Actions 등 CI/CD 파이프라인은 향후 도입 예정입니다.
- `constants/projects.ts`와 `constants/skills.ts`만 수정하면 콘텐츠를 빠르게 업데이트할 수 있습니다.

## 스크립트

| 명령어          | 설명                       |
| --------------- | -------------------------- |
| `npm run dev`   | 개발 서버 실행 (Turbopack) |
| `npm run build` | 프로덕션 빌드 생성         |
| `npm run start` | 프로덕션 모드 서버 실행    |
| `npm run lint`  | ESLint 검사 수행           |

## 향후 계획

- 프로젝트 상세 페이지 추가 및 영어 버전 지원
- Supabase 통계를 활용한 방문자 기록 기능 실험
- Skills 필터 상태를 URL 쿼리로 공유할 수 있는 기능 고민

## 문의

- 이메일: [osoon9295@gmail.com](mailto:osoon9295@gmail.com)
- Github: [@osoon9295](https://github.com/osoon9295)
- 기술 블로그: [Velog @genuss040822](https://velog.io/@genuss040822)

함께 성장할 수 있는 팀과의 만남을 기대하고 있습니다.
