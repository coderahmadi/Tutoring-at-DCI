import express from "express";
const router = express.Router();

import { allSatellites, getSatelliteByName, getSatelliteBySize, getHighestDensity } from "../controllers/satelliteControllers.js";

router.get('/', allSatellites);

// http://localhost:3001/satellite/find/Phobos
router.get('/find/:name', getSatelliteByName);

// http://localhost:3001/satellite/size/largest
router.get('/size/:pick', getSatelliteBySize);

// http://localhost:3001/satellite/density/highest
router.get('/density/:pick', getHighestDensity);


export default router;