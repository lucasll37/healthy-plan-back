export type IEntity = "athlete" | "trainer"

export interface ICache {
    set(entity: IEntity, id: string, obj: Object): Promise<void>
    get(entity: IEntity, id: string): Promise<Object | null>
}
