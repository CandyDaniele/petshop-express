let pets = [{ nome: "doug", idade: 6 }, { nome: "costelinha", idade: 7 }];

const listarPets = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `
    ----------------<br>
    Nome: ${pet.nome} <br>
    Idade: ${pet.idade} <br>
    ----------------<br>`;
  }

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};

module.exports = { listarPets, adicionarPet, buscarPet };