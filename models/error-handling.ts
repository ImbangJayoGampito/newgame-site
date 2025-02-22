import "ts-error-as-value/lib/globals";

export async function tryFail<T>(
    f: (() => Promise<T>) | (() => T)
): Promise<Result<T, Error>> {
    try {
        const result = await Promise.resolve(f());
        return await ok(result)
    } catch (e) {
        return err(new Error("Error because of: " + e))
    }
}
