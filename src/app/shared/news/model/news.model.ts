import { Author } from "./author.model";

export class News {
    title: string;
    liked: boolean;
    shared: boolean;
    content: string;
    author: Author;
    id: string;



    constructor(title: string, liked?: boolean, shared?: boolean, content?: string, author?: Author, id?: string) {
        this.title = title;
        this.liked = liked;
        this.shared = shared;
        this.content = content;
        this.author = author;
        this.id = id;
    }
}