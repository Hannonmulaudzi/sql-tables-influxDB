import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';


const app = express();

const db = await sqlite.open({
    filename: './data_plan.db',
    driver: sqlite3.Database
});

await db.exec(`PRAGMA foreign_keys = ON;`);

await db.migrate();