import express from 'express'
import controller from '../controllers/userscore'

const router = express.Router()

router.get('/', controller.fetchUserScores)
router.post('/', controller.saveUserScore)



export = router