// 예시: MongoDB에 저장할 유저 역할 코드
export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

// 예시: HTTP 응답 코드나 팀 내 규약 코드
export const SHARED_CONFIG = {
  API_VERSION: "v1",
  TIMEOUT: 5000
} as const;