import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { getEnv } from '../src/utils/env';

test('Login exitoso con usuario estándar', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const { username, password } = getEnv();

  await loginPage.goto();
  await loginPage.login(username, password);

  await expect(page).toHaveURL(/inventory.html/);
});

test('Login falla con credenciales inválidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('usuario_invalido', 'clave_mal');

  const error = await loginPage.getErrorMessage();
  // ✅ Mensaje exacto que devuelve SauceDemo
  expect(error).toContain('Username and password do not match any user in this service');
});