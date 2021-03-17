export class BooksService {
    protected async createBook (params: object): Promise<object> {
        try {
            const result = await this.createBook({
            });



            return result;
        } catch (err) {
            console.error(err);

            throw err;
        }
    }
}