var alunos = [
  {
    Name: "Joana Cordeiro",
    Altura: 1.65,
    Idade: 21,
    Sexo: "Feminino",
    Sala: "Sala 1",
    Matemática: 8,
  },
  {
    Name: "Franklin Cascais",
    Altura: 1.74,
    Idade: 25,
    Sexo: "Masculino",
    Sala: "Sala 2",
    Matemática: 7,
  },
  {
    Name: "Mônica da Rosa",
    Altura: 1.59,
    Idade: 20,
    Sexo: "Feminino",
    Sala: "Sala 3",
    Matemática: 9,
  },
  {
    Name: "Joaquim Lima",
    Altura: 1.82,
    Idade: 23,
    Sexo: "Masculino",
    Sala: "Sala 4",
    Matemática: 9,
  },
  {
    Name: "Caroline Azevedo",
    Altura: 1.7,
    Idade: 19,
    Sexo: "Feminino",
    Sala: "Sala 5",
    Matemática: 7,
  },
];

let somaNota =
  alunos[0].Matemática +
  alunos[1].Matemática +
  alunos[2].Matemática +
  alunos[3].Matemática +
  alunos[4].Matemática;

alunos.forEach((aluno) => {
  media = somaNota / alunos.length;
});

console.log("Media da turma é ", media);

let i = alunos[1];
alunos[2];
alunos[3];
alunos[4];
alunos[5];

for (i = 0; i < 5; i++) {
  if (alunos[i].Matemática > 8) {
    console.log(alunos[i].Name, "passou");
  } else {
    console.log(alunos[i].Name, "não passou");
  }
}

/* console.log(alunos[i].Name); */

/* alunos.forEach((aluno) => {
  console.log(aluno);
}); */
