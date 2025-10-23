let produtos = [1200, 1000, 3000, 2100]

let descontos = produtos.map((prodDesc)=> {
    prodDesc -= prodDesc * 0.1
    console.log(prodDesc)
    return prodDesc 

})