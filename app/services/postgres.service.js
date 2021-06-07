
const pg = require('pg');

class PostgresService {
    constructor(){
        let uri= process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/prueba-tecnica"
        this.connectionString= uri
        this.pool=new pg.Pool(
            {connectionString:this.connectionString}
        );
    }

    async executeSql(sql){
        let result= await this.pool.query(sql);
        return result;
    }

    
}

module.exports=PostgresService;