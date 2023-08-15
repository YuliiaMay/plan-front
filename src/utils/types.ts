export interface User {
    name: string | null,
    email: string | null,
}

export interface RegisterData {
    id: string,
    component: any,
    initialValues: {
        sex?: string,
        age?: number | null,
        name?: string,
        password?: string,
        email?: string,
        isSubscribe?: boolean,
        usage?: string,
        source?: string,
        experience?: boolean
    },
    validationSchema: any | (() => any);
    actionLabel: string,
}
