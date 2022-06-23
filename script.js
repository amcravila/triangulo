const result = document.querySelector("#result")
const botaoClick = document.querySelector("#botaoClick")

const createTriangule = () => {
  // let input1 = document.querySelector("#stars-number").value
  // let input2 = document.querySelector("#stars-number2").value
  // console.log(input1)
  // result.innerHTML = input1 + input2  
// document.querySelector('h1').innerHTML = `Novo título <h2>Texto H2</h2>`

  result.innerHTML = ''
  const starsNumber = document.querySelector("#stars-number").value
  const star = '*'
  // let arrayNovo = [10, 20, 30, 40]

  // arrayNovo.map((elemento) => {
  //   return result.innerHTML += `<div>${elemento}</div>`
  // })
  for(let i=1; i <= starsNumber; i++) {
    result.innerHTML += `${star.repeat(i)} </br>`
    // console.log(star.repeat(i), '\n')
  }
console.log("branch nova")
console.log("branch master")
} 



//   let arrayNovo = [10, 20, 30, 40]
// let arrayModificado2  = []
// const arrayModificado3 = arrayNovo.map((elemento) => {
//   return elemento + 10
// })



// const novosNumeros = arrayNovo.map((elemento) => {
//   return console.log(elemento + 10)
// })

// [20, 30, 40, 50]