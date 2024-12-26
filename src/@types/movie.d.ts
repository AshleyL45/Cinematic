export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    // Ajoutez d'autres propriétés nécessaires
}

export interface Collection {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
