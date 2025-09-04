/*




*/

const salarioFixo = 1500.95

let TvLedVendida=2;
let tvLcdVendida=5;
let tvPlasmaVendida=4;
const comissaoTvPlasma = 55*tvPlasmaVendida;
const comissaoTvLcd = 50*tvLcdVendida;
const comissaoTvLed = 60*TvLedVendida;

const salarioTotal = salarioFixo+comissaoTvLcd+comissaoTvLed+comissaoTvPlasma;

console.log("O salario total corresponde a : " + salarioTotal);

