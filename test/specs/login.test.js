import { expect, driver } from '@wdio/globals'
import homePage from "../pageobjects/home.page.js"
//import loginPage from '../pageobjects/login.page.js'
//import profilePage from '../pageobjects/profile.page.js'


describe('Abrir o Aplicativo', () => {
    it('Deve abrir o app aguarda 10 segundo e sair', async () => {
        await homePage.openMenu('profile')//abrir o menu detalhes pageobjects homepage
        //await loginPage.login('cliente@ebac.art.br','GD*peToHNJ1#c$sgk08EaYJQ')//preencher email e senha detalhes page objects login
        //await homePage.openMenu('profile')
        //expect (await profilePage.profileName('EBAC Cliente').isDisplayed()).toBeTruthy()
        //await driver.pause(10000)//Aguardando 10 segundos aplicativo

    })
})