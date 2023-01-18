import { DioAccount } from "./DioAccount";

export class MagicAccount extends DioAccount {
  
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit(value: number): string {
    let valueToDeposit = value + 10
    super.deposit(valueToDeposit)
    return `Voce depositou: ${value} e ficou com ${valueToDeposit} ;)`
  }
}