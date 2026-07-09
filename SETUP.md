# KUNUK — 관리자 업로드 모드 설정 가이드

이 폴더에는 사이트 전체(index.html, admin/, data/, images/)가 들어있어요.
아래 순서대로 하면 /admin 에서 로그인해서 사진을 직접 올릴 수 있는 사이트가 됩니다.

---

## 1. GitHub 저장소 만들기 (5분)

1. github.com 가입 (이미 있으면 스킵)
2. 우측 상단 + 버튼 → "New repository"
3. 이름: `kunuk-site` (원하는 이름으로)
4. Public 또는 Private 아무거나 상관없음 (Private이어도 사이트는 정상 공개됨)
5. "Create repository" 클릭

## 2. 이 폴더를 GitHub에 업로드

가장 쉬운 방법 — 브라우저로:
1. 방금 만든 저장소 페이지에서 "uploading an existing file" 링크 클릭
2. 이 폴더 안의 모든 파일/폴더(index.html, admin, data, images)를 통째로 드래그
3. 맨 아래 "Commit changes" 클릭

## 3. Netlify를 이 저장소에 연결

지금 쓰고 있는 Netlify 사이트(kunuk.netlify.app)를 그대로 쓰되, 배포 방식만
"파일 드래그"에서 "GitHub 연동"으로 바꿉니다.

1. Netlify 대시보드 → 해당 프로젝트 → **Project configuration**
2. **Build & deploy** → **Link repository** (또는 "Link site to Git")
3. GitHub 선택 → 방금 만든 `kunuk-site` 저장소 선택
4. Build command는 비워두고, Publish directory는 `/` (루트) 그대로 두고 저장

## 4. Netlify Identity 켜기 (로그인 기능)

1. Netlify 프로젝트 → **Project configuration** → **Identity**
2. "Enable Identity" 클릭
3. 아래 **Registration** 설정을 "Invite only"로 변경 (아무나 가입 못 하게)
4. **Services** 섹션에서 **Git Gateway** → "Enable Git Gateway" 클릭

## 5. 나에게 초대장 보내기 (=너 자신을 등록)

1. 같은 Identity 탭에서 "Invite users" 클릭
2. 네 이메일(kunukyi@naver.com 등) 입력해서 초대
3. 메일함 확인 → 초대 메일의 링크 클릭 → 비밀번호 설정

## 6. 완료 — 관리자 페이지 접속

`https://kunuk.netlify.app/admin/` 로 접속 → 방금 만든 계정으로 로그인
→ "Works" 클릭 → 각 작품에 이미지 업로드 → "Publish" 클릭

몇 분 안에 실제 사이트(kunuk.netlify.app)에 이미지가 반영됩니다.

---

## 이후 사진 추가하는 법 (매번)

1. `kunuk.netlify.app/admin/` 접속 → 로그인
2. Works → 이미지 넣을 작품 클릭
3. Image 필드에 사진 업로드
4. 우측 상단 "Publish" 클릭
5. 30초~1분 내로 사이트에 반영됨 (Netlify가 자동으로 다시 빌드)

코드를 열 필요도, 나에게 파일을 다시 받을 필요도 없습니다.

---

## 막히면

- 3번(저장소 연결) 이후 사이트가 안 뜨면: Netlify의 "Deploys" 탭에서 에러 로그 확인
- 로그인이 안 되면: Identity가 켜져 있는지, Git Gateway가 활성화됐는지 재확인
- 이 파일 들고 다시 나(Claude)한테 와도 됩니다 — 스크린샷 보여주면 바로 다음 단계 알려줄게요.
