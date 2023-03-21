const {City}=require('../models/index')

class cityRepository {
    async createCity({name}){
        try{
            const city = await city.Create({name});
            return city;

        }catch(error){
            throw{error}

        }
    }
    //delete repository
    async deleteCity ({cityId}){
        try{
            await  City.destroy({
            where:{
                id:cityId
            }
            });

        }catch(error)   {
            throw{error}

        }
    }
}

