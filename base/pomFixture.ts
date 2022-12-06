import {test as baseTest} from "@playwright/test";
import RegisterPage from "../pages/registartion"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"

type pages={
    registerPage:RegisterPage;
    loginPage:LoginPage;
    homePage:HomePage;
    specialHotPage:SpecialHotPage;
}

const testPages=baseTest.extend<pages>({
 registerPage: async ({page},use) =>{
    await use(new RegisterPage(page))
 },
 loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
},
homePage: async ({ page }, use) => {
    await use(new HomePage(page));
},
specialHotPage: async ({ page }, use) => {
    await use(new SpecialHotPage(page));
}
})

export const test = testPages;
export const expect = testPages.expect;