const express = require('express');
const cors = require('cors');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let cartao = models.Cartao;
let promocao = models.Promocao;
let empresa = models.Empresa;
let compra = models.Compra;

app.get('/', function(req,res){
    res.send('Olá mundo!')
});
app.post('/clientes', async(req,res)=>{
    await cliente.create(
       req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Cliente cadastrado com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível efetuar cadastro'
        });
    });
});
app.post('/cartaos', async(req,res)=>{
    await cartao.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Cartao cadastrado com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível efetuar cadastro'
        });
    });
});
app.post('/empresas', async(req,res)=>{
    await empresa.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Empresa cadastrada com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível efetuar cadastro'
        });
    });
    
});
app.post('/promocaos', async(req,res)=>{
    await promocao.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Promoção cadastrada com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível efetuar cadastro'
        });
    });
});
app.post('/compras', async(req,res)=>{
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Compra cadastrada com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível efetuar cadastro'
        });
    });
});

app.get('/listarclientes', async(req, res)=>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});
app.get('/listarcartaos', async(req, res)=>{
    await cartao.findAll({
        raw: true
    }).then(function(cartaos){
        res.json({cartaos})
    });
});
app.get('/listarempresas', async(req, res)=>{
    await empresa.findAll({
        raw: true
    }).then(function(empresas){
        res.json({empresas})
    });
});
app.get('/listarpromocaos', async(req, res)=>{
    await promocao.findAll({
        raw: true
    }).then(function(promocao){
        res.json({promocao})
    });
});
app.get('/listarcompras', async(req, res)=>{
    await compra.findAll({
        raw: true
    }).then(function(compras){
        res.json({compras})
    });
});

app.put('/atualizarclientes', async(req, res)=>{
    await cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro alterado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível alterar"
        });
    });
});
app.put('/atualizarcartaos', async(req, res)=>{
    await cartao.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro alterado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível alterar"
        });
    });
});
app.put('/atualizarempresas', async(req, res)=>{
    await empresa.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro alterado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível alterar"
        });
    });
});
app.put('/atualizarpromocaos', async(req, res)=>{
    await promocao.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro alterado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível alterar"
        });
    });
});
app.put('/atualizarcompras', async(req, res)=>{
    await compra.update(req.body,{
        where: {and:{
            CartaoId: req.body.CartaoId,
            PromocaoId: req.body.PromocaoId
        }}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro alterado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível alterar"
        });
    });
});

app.delete('/excluirclientes/:id', async(req, res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro excluido com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir cadastro"
        });
    });
});
app.delete('/excluircartaos/:id', async(req, res)=>{
    cartao.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro excluido com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir cadastro"
        });
    });
});
app.delete('/excluirempresas/:id', async(req, res)=>{
    empresa.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro excluido com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir cadastro"
        });
    });
});
app.delete('/excluirpromocaos/:id', async(req, res)=>{
    promocao.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro excluido com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir cadastro"
        });
    });
});
app.delete('/excluircompras/:id', async(req, res)=>{
    compra.destroy({
        where: {and:{
            CartaoId: req.body.CartaoId,
            PromocaoId: req.body.PromocaoId
        }}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cadastro excluido com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir cadastro"
        });
    });
});


let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001')
});