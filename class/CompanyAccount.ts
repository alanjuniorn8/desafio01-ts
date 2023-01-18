import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): string => {
    this.deposit(value)
    return `Realizado emprestimo no valor de ${value} reais`
  }
}
