import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { MagicAccount } from './class/MagicAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(`People Account name: ${peopleAccount.getName()}`)
console.log(`People Account Doc: ${peopleAccount.getDocId()}`)
console.log(`People Account balance: ${peopleAccount.getBalance()}`)
console.log(`People Account deposit: ${peopleAccount.deposit(100)}`)
console.log(`People Account balance: ${peopleAccount.getBalance()}`)
console.log(`People Account withdraw: ${peopleAccount.withdraw(50)}`)
console.log(`People Account balance: ${peopleAccount.getBalance()}`)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(`Company Account balance: ${companyAccount.getBalance()}`)
console.log(`Company Account deposit: ${companyAccount.deposit(1000)}`)
console.log(`Company Account balance: ${companyAccount.getBalance()}`)
console.log(`Company Account loan: ${companyAccount.getLoan(1000)}`)
console.log(`Company Account balance: ${companyAccount.getBalance()}`)

const magicAccount: MagicAccount = new MagicAccount('Joe Doe', 8)
console.log(`Magic Account balance: ${magicAccount.getBalance()}`)
console.log(`Magic Account deposit: ${magicAccount.deposit(10)}`)
console.log(`Magic Account balance: ${magicAccount.getBalance()}`)