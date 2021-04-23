

const contarFs = ([...str]) => {
    let countF = 0;
    let arrString = [].concat(str);
    
    arrString.map( letter => (letter === 'F') && (countF = countF + 1) )
    return countF;
}

console.log(contarFs('hFolFa mFuFnfdo'))

const contarCaracteres = ([...str], character) => {
    let countF = 0;
    let arrString = [].concat(str);
    
    arrString.map( letter => (letter === character) && (countF = countF + 1) )
    return countF;
}


console.log(contarCaracteres('holahh MunHhdo', 'H'))