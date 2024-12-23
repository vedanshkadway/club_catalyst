import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: "Get dashboard statistics and summaries"
    });
})

export default router;