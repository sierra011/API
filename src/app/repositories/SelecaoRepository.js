import conexao from '../database/conexao.js'

class SelecaoRepository {
    // CRUD aqui colocar todas as regras relacionadas ao mysql chamando por metodos 
    create(selecao) {
        const sql = "INSERT INTO selecao SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,selecao, (erro, resultado) => {
                if(erro) return reject('Nao foi possível cadastrar')
                
                    //fazer um parce dos resultados 
                const row =JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    //ação assicrona 
    findAll() {
        const sql = "SELECT * FROM selecao;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject('Nao foi possível localizar')
                
                    //fazer um parce dos resultados 
                const row =JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM selecao WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Nao foi possível localizar')
                
                    //fazer um parce dos resultados 
                const row =JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    update(selecao,id) {
        const sql = "UPDATE selecao  SET ?  WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,[selecao,id], (erro, resultado) => {
                if(erro) return reject('Não foi possivel atualizar')
                
                    //fazer um parce dos resultados 
                const row =JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }
    

    delete(id) {
        const sql = "DELETE  FROM selecao WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Nao foi possível deletar essa seleção')
                
                    //fazer um parce dos resultados 
                const row =JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }
}

export default new SelecaoRepository()