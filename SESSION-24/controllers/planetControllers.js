import planetsData from "../planets-dataset.js";


export const allPlanets = (req, res, next) => {
    return res.send(planetsData);
}