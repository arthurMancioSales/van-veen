export default async function promiseHandler<T>(
    promise: Promise<Response>,
): Promise<[T | null, Error | null | unknown]> {
    try {
        const data = await promise;

        const parsedData = await data.json();

        return [parsedData, null];
    } catch (error) {
        return [null, error];
    }
}
