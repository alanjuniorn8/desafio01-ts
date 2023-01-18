export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  private setBalance = (newBalance: number): string => {
    this.balance = newBalance
    return 'Saldo alterado!'
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit(value: number): string {
    if(!this.validateStatus()) return `Operação invalida`
      let previousBalance: number = this.getBalance()
      let newBalance: number = previousBalance + value
      this.setBalance(newBalance)
      return `Voce depositou: ${value}`
  }

  withdraw = (value: number): string => {
    let previousBalance: number = this.getBalance()
    if ((previousBalance < value) || !this.validateStatus) throw new Error('Operação invalida!')
 
    let newBalance: number = previousBalance - value
    this.setBalance(newBalance)

    return `Voce sacou: ${value}`
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
