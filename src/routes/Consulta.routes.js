import { Router } from 'express'
import ControllerConsulta from '../controllers/Consulta.js'

const router = Router()

router.post('/', ControllerConsulta.save)
router.put('/:uuid', ControllerConsulta.update)
router.delete('/:uuid', ControllerConsulta.delete)
router.get('/:uuid', ControllerConsulta.findById)
router.get('/readToday/:data', ControllerConsulta.findByDate)

export default router
