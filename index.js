let dadosDoHeroi = {
  nome: "Thor",
  experiencia: 10001,
  vitorias: 85,
  derrotas: 20
};

let nivel;

if (dadosDoHeroi.experiencia <= 1000) {
    nivel = "Ferro";
} else if (dadosDoHeroi.experiencia >= 1001 && dadosDoHeroi.experiencia <= 2000) {
    nivel = "Bronze";
} else if (dadosDoHeroi.experiencia >= 2001 && dadosDoHeroi.experiencia <= 5000) {
    nivel = "Prata";
} else if (dadosDoHeroi.experiencia >= 5001 && dadosDoHeroi.experiencia <= 7000) {
    nivel = "Ouro";
} else if (dadosDoHeroi.experiencia >= 7001 && dadosDoHeroi.experiencia <= 8000) {
    nivel = "Platina";
} else if (dadosDoHeroi.experiencia >= 8001 && dadosDoHeroi.experiencia <= 9000) {
    nivel = "Ascendente";
} else if (dadosDoHeroi.experiencia >= 9001 && dadosDoHeroi.experiencia <= 10000) {
    nivel = "Imortal";
} else if (dadosDoHeroi.experiencia >= 10001) {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${dadosDoHeroi.nome} está no nível ${nivel}`);

function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
      nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
  } else if (vitorias >= 101) {
      nivel = "Imortal";
  }

  return `O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`;
}

let resultado = calcularNivel(dadosDoHeroi.vitorias, dadosDoHeroi.derrotas);
console.log(resultado);