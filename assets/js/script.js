function calc() {
   let base = document.getElementById('select_bases').value
   let num = Number(document.getElementById('ipt_numero').value)
   let resultado = document.getElementById('div_resultado')

   let binario = []
   let numConvertido = ""

   if(base === 'binario') {
      while(num > 0) {
         binario.unshift(num % 2)
         num = Math.floor(num / 2)
      }
   
      for(i = 0; i < binario.length; i++){
         numConvertido += binario[i]
      }
   } else if(base === 'octal') {
      while(num > 0) {
         binario.unshift(num % 8)
         num = Math.floor(num / 8)
      }
   
      for(i = 0; i < binario.length; i++){
         numConvertido += binario[i]
      }
   } else {
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
   }

   resultado.innerText = numConvertido
}