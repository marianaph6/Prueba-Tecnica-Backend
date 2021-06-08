
const pg = require('pg');

class PostgresService {
    constructor(){
        let uri=  "postgres://yvywibvsdzuehj:e98369e42475d0cb18298276aad7f43c6591ff702f5399ee407d86978403be65@ec2-3-233-7-12.compute-1.amazonaws.com:5432/dc38r8ud52mci9"
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