import * as AWS from 'aws-sdk';

import { BooksController } from './controller/BookController';
import {Handler} from "express";
const booksController = new BooksController();

export const create: Handler = (event: any, context: any) => {
    return booksController.create(event, context);
};
export const queryAll: Handler = (event: any, context: any) => {
    return booksController.queryAll(event, context);
};