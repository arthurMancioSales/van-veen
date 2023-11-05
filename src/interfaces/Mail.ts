export interface mailResponse {
    payload: {
        message: string;
        code: number;
    };
    error: boolean;
}
