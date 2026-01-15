"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHARED_CONFIG = exports.UserRole = void 0;
// 예시: MongoDB에 저장할 유저 역할 코드
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
    UserRole["GUEST"] = "GUEST";
})(UserRole || (exports.UserRole = UserRole = {}));
// 예시: HTTP 응답 코드나 팀 내 규약 코드
exports.SHARED_CONFIG = {
    API_VERSION: "v1",
    TIMEOUT: 5000
};
