import {BooksService} from "../service/BookService";
export class BooksController  {
    async create (event: any, context: any) {
        const timestamp = new Date().getTime();
        const uuid = require('uuid');
        const params = {
                id: uuid.v1(),
                name: "Harry Potter",
                checked: false,
                createdAt: timestamp,
                updatedAt: timestamp,
        };
        try {
            const result = await BooksService.createBook(
                params.name,
                 params.id.toString()
            );

            return "success to add a book";
        } catch (err) {
            console.error(err);

            return "error!";
        }
    }
    async queryAll () {
        try {
            const result = await BooksService.queryAllBook();

            return result;
        } catch (err) {
            console.error(err);

            return "error!";
        }
    }
}