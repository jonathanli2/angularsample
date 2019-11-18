export interface Post {
    title: string;
    content: string;
    id?: string;
}

export interface Posts {
    [id: string]: Post;
}

export interface Strings {
    [index: number]: string;
}

