import pg from  'pg';

let client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'NodeReact',
    user: 'postgres',
    password: 'magidexter'
});
export default client;