window.onload = get()

get(){
    let url=""

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.onreadystatechange= function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let dados = JSON.parse(this.responseText);

            console.log(dados)

        }
    }

}