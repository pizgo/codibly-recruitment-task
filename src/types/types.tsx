export interface Product {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string,
}

export interface FetchedProductSuccess {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data: Product[];
}

export interface FetchedProductError {
    message: string;
}

export type FetchedProductState =
    | { status: "INITIAL" }
    | { status: "LOADING" }
    | { status: "SUCCESS"; payload: FetchedProductSuccess }
    | { status: "ERROR"; error: FetchedProductError };