import promiseHandler from "./promiseHandler";

export default async function generalRequest<T>(
    url: string,
    method: "get" | "post" | "delete" | "patch",
    body?: BodyInit,
    props?: RequestInit,
): Promise<[T | null, Error | null | unknown]> {
    const requestOptions: RequestInit = {
        cache: "no-cache",
        body,
        method,
        headers: { "Content-Type": "application/json" },
        ...props,
    };

    const [data, error] = await promiseHandler<T>(fetch(url, requestOptions));

    return [data, error];
}
