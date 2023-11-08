export default async function generalRequest(
    url: string,
    method: "get" | "post" | "delete" | "patch",
    body?: BodyInit,
    props?: RequestInit,
) {
    const requestOptions: RequestInit = {
        cache: "no-cache",
        body,
        method,
        headers: { "Content-Type": "application/json" },
        ...props,
    };

    const request = await fetch(url, requestOptions);

    const data = request.json();

    return data;
}
