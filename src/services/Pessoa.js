import { http } from "./config";

export default {
    getAll:() =>{
        http.get('pessoa')
    }
}