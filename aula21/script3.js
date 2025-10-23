let pessoaa = [
   { nome: 'Ana',
    idade: 15,
   },
   { nome: 'Pedro',
    idade: 18,
   },   
   { nome: 'Maria',
    idade: 42,
   }, 
   { nome: 'Henrique',
    idade: 12,
   }, 
   { nome: 'Jorge',
    idade: 23,
   }
]

let pessoasMaiores = pessoaa.filter((elemento)=> elemento.idade >= 18)
console.log(pessoasMaiores)
