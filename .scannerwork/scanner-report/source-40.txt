export interface ICache {
    set<T>(id: string, obj: Object): Promise<void>
    get<T>(id: string): Promise<T | null>
}
