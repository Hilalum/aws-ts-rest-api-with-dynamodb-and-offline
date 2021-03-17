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
            const result = await this.createBook({
                name: params.name,
                id: params.id,
            });

            return "success to add a book";
        } catch (err) {
            console.error(err);

            return "error!";
        }
    }

    private async createBook(param: {name: any; id: any}) {
        
    }
}