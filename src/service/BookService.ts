import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()
export class BooksService {

    static async createBook(name: string, id: string) {
        const timestamp = new Date().getTime();
        try {
            const params = {
                TableName: "books",
                Item: {
                    id: id,
                    name: name,
                    lending: false,
                    createdAt: timestamp,
                    updatedAt: timestamp,
                }
            }

            dynamoDb.put(params, (error) => {
                if (error) {
                    console.error(error)
                    return false;
                }
            });
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}