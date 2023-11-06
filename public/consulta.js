var dataRef = new Firebase('https://futebol-8f0a0-default-rtdb.firebaseio.com');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'jogadores') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $("#tb tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.posicao}</td> +
    
                        <td>${value2.idade}</td> +

                        <td>${value2.status}</td> +

                        <td>${value2.data_entrada}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
