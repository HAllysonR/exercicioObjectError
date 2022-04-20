function MeuArray(arr, num){ //criando um array que recebe um array e um número
    try{
        if(!arr && !num) throw new ReferenceError("Parâmetros inválidos");

        if(typeof arr !== 'object') throw new TypeError("Tipo inválido de array, precisa ser tipo object");
    
        if(typeof num !== 'number') throw new TypeError("Num percisa ser do tipo number");
        
        if(arr.lenght !== num) throw new RangeError("Tamanho inválido");
    } catch(e){
        if(e instanceof ReferenceError){
            console.log("este erro é um reference error")
            console.log(e.massage);  
        } else if (e instanceof TypeError){
            console.log("este erro é um TypeError")
            console.log(e.massage);
        } else if (e instanceof RangeError){
            console.log("este erro é um RangeError")
            console.log(e.massage);
        } else{
            console.log("Tipo de erro não esperado" + e)
        }
    }
}; 

    console.log(MeuArray([], 5));
    
    

