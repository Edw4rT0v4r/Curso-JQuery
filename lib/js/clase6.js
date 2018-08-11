$.fn.exists = function() {
    return this.length > 0
}

console.log($("h1").exists() ? "Existe h1" : "No existe h1")
console.log($("div").exists() ? "Existe div" : "No existe div")