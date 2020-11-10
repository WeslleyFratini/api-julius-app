import { Router } from 'express'

export const routerUsuario = Router()

routerUsuario.get('/', (req, res) => res.send('Serviço de Usuário'))