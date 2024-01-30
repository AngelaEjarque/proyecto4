export default class Healtcheck{
    constructor(){}

    run(req:any, res:any){
        res.status(200).send("hola caracola!");
    }

}