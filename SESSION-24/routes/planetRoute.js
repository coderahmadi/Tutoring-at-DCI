import express from "express";
import { allPlanets } from "../controllers/planetControllers.js";


const router = express.Router();

router.get('/', allPlanets)



export default router;