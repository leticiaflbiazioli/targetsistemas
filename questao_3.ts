interface IFaturamentoDiario {
    data: string;
    valor: number;
}

// Exemplo de vetor com faturamento diário 
const faturamentoDiario: IFaturamentoDiario[] = [
    { data: '2024-01-01', valor: 100 },
    { data: '2024-01-02', valor: 200 },
    { data: '2024-01-03', valor: 0 },
    { data: '2024-01-04', valor: 300 },
    { data: '2024-01-05', valor: 400 },
    { data: '2024-01-06', valor: 0 },
    { data: '2024-01-07', valor: 250 },
];

// Função solicitada na questão
const calcularFaturamento = (faturamento: IFaturamentoDiario[]) => {
    const diasComFaturamento = faturamento.filter(item => item.valor > 0);

    if (diasComFaturamento.length === 0) {
        return {
            menorFaturamento: 0,
            maiorFaturamento: 0,
            diasAcimaDaMedia: 0
        };
    }

    const valores = diasComFaturamento.map(item => item.valor);
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);

    const somaFaturamento = valores.reduce((acc, valor) => acc + valor, 0);
    const mediaAnual = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(item => item.valor > mediaAnual).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

export default calcularFaturamento;