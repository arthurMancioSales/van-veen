export interface Response<T> {
    payload: {
        data: T;
        message: string;
    };
    error: boolean;
}
