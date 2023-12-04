// interfaces.tsx

// interface response
export interface response {
    ok: boolean;
    msg: string;
    usrDB: object;
}

// interface error
export interface error {
    ok?: boolean;
    msg: string;
}

// interface user
export interface user {
    _id: string;
    nombre: string;
    email: string;
    password: string;
    role: string;
    estado: boolean;
    __v: number;
}