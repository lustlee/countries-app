export interface IPagination {
    limit: number,
    total: number,
    offset: number,
    setOffset: (e: number) => void
}