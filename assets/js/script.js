

function calc() {
   let fromBase = document.getElementById('select_base_from').value
   let toBase = document.getElementById('select_base_to').value
   let num = document.getElementById('ipt_numero').value
   let resultado = document.getElementById('div_resultado')

   let binario = []
   let numConvertido = ""

   if(fromBase === 'decimal' && toBase === 'binario') {
      num = Number(num)
      while(num > 0) {
         binario.unshift(num % 2)
         num = Math.floor(num / 2)
      }
   
      for(i = 0; i < binario.length; i++){
         numConvertido += binario[i]
      }
   } else if(fromBase === 'decimal' && toBase === 'octal') {
      num = Number(num)
      while(num > 0) {
         binario.unshift(num % 8)
         num = Math.floor(num / 8)
      }
   
      for(i = 0; i < binario.length; i++){
         numConvertido += binario[i]
      }
   } else if(fromBase === 'decimal' && toBase === 'hexa'){
      num = Number(num)
      while(num > 0) {
         let resto = num % 16
         switch(resto){
            case 10:
               binario.unshift('A')
               break
            case 11: 
               binario.unshift('B')
               break
            case 12:
               binario.unshift('C')
               break
            case 13: 
               binario.unshift('D')
               break
            case 14: 
               binario.unshift('E')
               break
            case 15: 
               binario.unshift('F')
               break
            default: 
               binario.unshift(resto)
         }
         num = Math.floor(num / 16)

      }
   
      for(i = 0; i < binario.length; i++){
         numConvertido += binario[i]
      }
   } else if(fromBase === 'binario' && toBase === 'decimal'){
      num = Number(num)
      let numArray = (num).toString().split('')
      let soma = 0
      let exponent = 0

      for(let i = numArray.length - 1; i >= 0; i--) {
         let digit = Number(numArray[i])
         let bin = digit * (2 ** exponent)
         soma += bin
         exponent++
      }
      numConvertido = soma
   } else if(fromBase === 'octal' && toBase === 'decimal') {
      num = Number(num)
      let numArray = num.toString().split('')
      let soma = 0
      let exponent = 0

      for(let i = numArray.length - 1; i >= 0; i--) {
         let digit = Number(numArray[i])
         let decimal = digit * (8 ** exponent)
         soma += decimal
         exponent++
      }
      numConvertido = soma
   } else if(fromBase === 'hexa' && toBase === 'decimal') {
      let numArray = num.split('')
      let soma = 0
      let exponent = 0
      console.log(numArray)
      for(i = numArray.length - 1; i >= 0; i--) {
         let digit = numArray[i]
         switch(digit) {
            case 'A':
               digit = 10
               break
            case 'B':
               digit = 11
               break
            case 'C':
               digit = 12
               break
            case 'D':
               digit = 13
               break
            case 'E':
               digit = 14
               break
            case 'F':
               digit = 15
               break
            default:
               digit = digit
         }

         digit = Number(digit)
         let decimal = digit * (16 ** exponent)
         soma += decimal
         exponent++
      }
      
      numConvertido = soma
   } else if (fromBase === 'binario' && toBase === 'octal') {  
      numArray = num.split('')
      for(i = 0; i < numArray.length; i++) {
         if(numArray[0] != '0' || '1') {
            numConvertido = `Valor inserido inválido. </br> A Base binário contém apenas 0 e 1. `
         } 
      } 
         
      if((num.length % 3) == 0){
         octArray = num.match(/...?/g) 
         console.log(octArray)
      } 
   }
   resultado.innerHTML = numConvertido
}
