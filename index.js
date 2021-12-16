function introduction (name) {
    console.log(`my name is ${name}`);
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional (name = "Gracie",language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional (name = "Gracie", language = "JavaScript"){
return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}



