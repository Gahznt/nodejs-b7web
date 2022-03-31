import {Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let nome: string = 'Gabriel';
    res.render('painel/home', {
        nome: nome,
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    let nome: string = '';
    let mostrarNome: boolean = false;

    if(req.query.name) {
        let nomeRecebido: string = req.query.name as string;
        nome = nomeRecebido[0].toUpperCase() + nomeRecebido.substr(1);
        mostrarNome = true;
    }
    res.render('painel/contato', {
        nome,
        mostrarNome
    });
});

export default router;