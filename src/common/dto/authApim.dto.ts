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

//DEPARTAMENTO
export class Departamento {
    codigo: number;
    descripcion: string;
}

//DATOS DE LA SUCURSAL
export class Sucursal {
    codigo: string;
    descripcion: string;
}

//DATOS DEL USUARIO
export class AuthUserDto {
    codigo: string;
    nombre: string;
    sucursal: Sucursal;
    departamento: Departamento;
    correo: string;
    nivel: number;
}