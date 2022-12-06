import { test as myTest } from "@playwright/test";

type details={
    age:number
    email:string
   
}
const myDetails=myTest.extend<details>({
    age:24,
    email:"@gmail.com"

}) 