export interface Category {
    categoryName: string,
    items: Item[],
    path: string
}

export interface Item {
    name: string,
    path: string,
    queryParams?: any
}