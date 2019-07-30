import * as hash from 'hash.js';

export function isNonEmptyString(value: any): boolean {
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

export function hashPassword(unhashed: string): string {
    return hash.sha384().update(hash.sha384().update(unhashed)).digest('hex');
}
