export default function <T, K extends keyof T>(data: T[], key: K): T[K][] {
    return data.map((value: T) => value[key]);
}