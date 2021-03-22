const AWS = require('aws-sdk');
let options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 123,
    accessSecretKey: 123,
};


const dynamoDb = new AWS.DynamoDB.DocumentClient(options);

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

    static async queryAllBook() {
        const params = {
            TableName: "books",
        }
        return dynamoDb.get(params, (error, result) => {
            // handle potential errors
            if (error) {
                console.error(error);
                return false;
            }
        });
    }
}