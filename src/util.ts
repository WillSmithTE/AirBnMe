export function isString(value: any): boolean {
    return typeof value === 'string' &&
        value !== null &&
        value !== undefined;
}

export function notify(message: string): void {
    alert(message);
}

export function notifyError(message: string): void {
    notify('Error: ' + message);
}
