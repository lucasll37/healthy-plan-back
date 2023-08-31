export interface ICache {
    set<T>(id: string, obj: T): Promise<void>
    get<T>(id: string): Promise<T | null>
}
