import {createConnection} from 'typeorm';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConnectionName} from  "./enum/connection-name.enum";
// import * as logsDbConfig from "./config/logs-db.config";
import * as mainDbConfig from "./config/main-db.config";

const environment = process.env.NODE_ENV || 'development';
const data: any = dotenv.parse(fs.readFileSync(`.${environment}.local.env`));

export const databaseProviders = [
    // TypeOrmModule.forRoot(logsDbConfig),
    TypeOrmModule.forRoot(mainDbConfig),
];
