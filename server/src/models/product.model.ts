import mysql from "./../utils/mysql"

export default class ProductModel {


    public static get = async (opts: any) => {
        let query = `SELECT * from Programy `
        if(opts?.id)
        query += ` WHERE id = ${opts.id}`
        const result = await mysql.execute(query, [])
        return result;
    }
}