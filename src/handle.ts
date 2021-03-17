import * as AWS from 'aws-sdk';

import { BooksController } from './controller/books';
import {Handler} from "express";
const booksController = new BooksController();

let options = {};
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    };
}
const client = new AWS.DynamoDB.DocumentClient(options);
export const create: Handler = (event: any, context: any) => {
    return booksController.create(event, context);
};
