import dotenv from 'dotenv';
import path from 'path'

//Asegurar carga desde la raiz
dotenv.config ({path: path.resolve(__dirname, '../../.env')});

export const getEnv = () =>({
    baseUrl: process.env.BASE_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,  

});