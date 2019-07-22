export function isString(value: any): boolean {
    return typeof value === 'string' &&
        value !== null &&
        value !== undefined;
}