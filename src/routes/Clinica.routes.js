import { Router } from 'express'
import ControllerClinica from '../controllers/Clinica'

const router = Router();

router.post('/', ControllerClinica.save)
router.get('/read', ControllerClinica.read)
router.put('/:uuid', ControllerClinica.update)


export default router