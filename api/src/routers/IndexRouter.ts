import { Router } from "express";
import type { Request, Response } from "express";
// import userConroller from './../controllers/user'

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    console.log('safskmkm')
    return res.send('OK');
})

export default router;