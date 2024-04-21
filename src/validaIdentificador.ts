function isLetter(c:string):boolean {
    const code = c.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isNumber(c:string):boolean {
    const code = c.charCodeAt(0);
    return (code >= 48 && code <= 57);
}

function validaIdentificador(identificador:string | null):boolean {

    if(identificador === null || identificador === "") {
        return false;
    }

    if(identificador.length < 1 || identificador.length > 6) {
        return false;
    }

    if(!isLetter(identificador)) {
        return false;
    }

    let i = 1;
    while(i < identificador.length) {
        let char = identificador.charAt(i);
        if(!isLetter(char) && !isNumber(char)) {
            return false;
        }
        i++;
    }

    return true;
}

export {
    validaIdentificador,
    isLetter,
    isNumber
};