



const tablero__ajedres = (width, height) => {

    for (let i = 0; i < height; i++) {
        let table = "";
        for (let j = 0; j < width; j++) {
            
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    table += " ";
                }else{
                    table += "#";
                }
                
            }

            else if(i % 2 !== 0){

                if (j % 2 === 0) {
                    table += "#";
                }else{
                    table += " ";
                }
            }
            
        }
        console.log(table)
    }

}

tablero__ajedres(12, 5)