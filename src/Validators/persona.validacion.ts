import {check} from 'express-validator'

const ValidateCreate = [
    check('aa').exists(),
]