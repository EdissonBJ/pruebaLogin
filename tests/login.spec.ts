import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage.js';
import { getEnv } from '../src/utils/env';



test('Login exitoso con usuario estándar', async ({page})=>{
    const loginPage=new LoginPage(page);
    const {username, password}= getEnv();

    await loginPage.goto();
    await loginPage.login(username, password);

    await expect(page).toHaveURL(/inventory.html/);
});


test('Login falla con credenciales inválidas', async ({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('usuario invalido','clave mal');

    const error =await loginPage.getErrorMessage();
    expect(error).toContain('Username and password no match');


});
