export class AuthResponseDto {
    access_token?: string;
    expires_in?: string;
    refresh_expires_in?: string;
    refresh_token?: string;
    token_type?: string;
    id_token?: string;
    "not-before-policy"?: string;
    session_state?: string;
    scope?: string;
    error?: string;
    error_description?: string;
}

export class UserPermissionsDto {
    id: number;
    url: string;
}