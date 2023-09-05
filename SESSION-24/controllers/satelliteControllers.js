import sData from "../satellites-dataset.js";

export const allSatellites = (req, res, next) => {
    if (req.url === '/' && req.method === "GET") {
        if (sData) return res.status(200).send(sData)
        else return res.status(404).send('Data not Found...!!!')
    } else {
        /*
        405 Method Not Allowed
        The request method is known by the server but is not supported by the target resource.
        For example, an API may not allow calling DELETE to remove a resource.
        */
        return res.status(405).send('Method Not Allowed...!')
    }

}

export const getSatelliteByName = (req, res, next) => {
    // console.log("Req Param:", req.params.name);
    const data = sData.find(sat => sat.name === req.params.name)
    // console.log("Data: ", data);
    return res.status(200).send(data)
}

export const getSatelliteBySize = (req, res, next) => {

    if (req.params.pick === "largest") {
        let largestRadios = sData.reduce((mR, cur) => mR > cur.radius ? mR : cur.radius, sData[0].radius);
        /*
        302 Found
        This response code means that the URI of requested resource has been changed temporarily.
        Further changes in the URI might be made in the future. Therefore, this same URI should be used
        by the client in future requests.
        */
        console.log(largestRadios);
        return res.status(302).send(`The satellite with the largest radius is Elfo, with a size of ${largestRadios} km`)
    } else {
        return res.status(405).send('Wrong path')
    }




}

export const getHighestDensity = (req, res, next) => {
    if (req.params.pick === "highest") {
        let highestDensity = sData.reduce((md, cur) => md > cur.density ? md : cur.density, sData[0].density);
        return res.status(302).send(`The Satellite with highest desity is ${highestDensity}`)
    } else {
        return res.status(405).send('Wrong path')
    }
}