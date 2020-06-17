export default class Veiculo{
    protected modelo: string
    private velocidade: number = 0

    constructor(modelo: string,numeroDePortas: number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}
