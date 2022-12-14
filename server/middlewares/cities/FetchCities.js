const dotenv = require("dotenv");
dotenv.config();

const {fetchAllCities} = require("../../controllers/users")
const {fetchReqCities} = require("../../controllers/users")

module.exports.getCities = async(req,res) => {
    await fetchAllCities()
    .then((data) => {
        // console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}

module.exports.fetchCities = async(req,res) => {
    await fetchReqCities()
    .then((data) => {
        // console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}