nomeAluno1 = prompt('Qual o nome do aluno')
notaAluno1 = prompt('Quais as notas do primeiro aluno separadas por virgula')

nomeAluno2 = prompt('Qual o nome do aluno')
notaAluno2 = prompt('Quais as notas do primeiro aluno separadas por virgula')

nomeAluno3 = prompt('Qual o nome do aluno')
notaAluno3 = prompt('Quais as notas do primeiro aluno separadas por virgula')

nomeAluno4 = prompt('Qual o nome do aluno')
notaAluno4 = prompt('Quais as notas do primeiro aluno separadas por virgula')

nomeAluno5 = prompt('Qual o nome do aluno')
notaAluno5 = prompt('Quais as notas do primeiro aluno separadas por virgula')

n1Aluno1 = parseFloat(notaAluno1.split(",")[0])
n2Aluno1 = parseFloat(notaAluno1.split(",")[1])

n1Aluno2 = parseFloat(notaAluno2.split(",")[0])
n2Aluno2 = parseFloat(notaAluno2.split(",")[1])

n1Aluno3 = parseFloat(notaAluno2.split(",")[0])
n2Aluno3 = parseFloat(notaAluno2.split(",")[1])

n1Aluno4 = parseFloat(notaAluno2.split(",")[0])
n2Aluno4 = parseFloat(notaAluno2.split(",")[1])

n1Aluno5 = parseFloat(notaAluno2.split(",")[0])
n2Aluno5 = parseFloat(notaAluno2.split(",")[1])

mediaAluno1 = (n1Aluno1 + n2Aluno1)/ 2
mediaAluno2 = (n1Aluno2 + n2Aluno2)/ 2
mediaAluno3 = (n1Aluno3 + n2Aluno3)/ 2
mediaAluno4 = (n1Aluno4 + n2Aluno4)/ 2
mediaAluno5 = (n1Aluno5 + n2Aluno4)/ 2

if (mediaAluno1 >= 5){
  alert(nomeAluno1 + ' Está Aprovado(a)')
}
else{
  alert(nomeAluno1 + ' Está Reprovado(a)')
}

if (mediaAluno2 >= 5){
  alert(nomeAluno2 + ' Está Aprovado(a)')
}
else{
  alert(nomeAluno2 + ' Está Reprovado(a)')
}

if (mediaAluno3 >= 5){
  alert(nomeAluno3 + ' Está Aprovado(a)')
}
else{
  alert(nomeAluno3 + ' Está Reprovado(a)')
}

if (mediaAluno4 >= 5){
  alert(nomeAluno4 + ' Está Aprovado(a)')
}
else{
  alert(nomeAluno4 + ' Está Reprovado(a)')
}

if (mediaAluno5 >= 5){
  alert(nomeAluno5 + ' Está Aprovado(a)')
}
else{
  alert(nomeAluno5 + ' Está Reprovado(a)')
}
