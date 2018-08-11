var route = {
    _routes: {},
    add: function(url, action) {
        this._routes[url] = action
    },
    run: function() {
        $.each(this._routes, function(patron) {
            if (location.href.match(patron)) {
                // puedo ejecutar cualquier codigo
                this()
            }
        })
    }
}

/* aqui agregamos la funcion a la variable route,
sucesivamente se podra colocar mas funciones a ciertas rutas
y solo se ejecutaran dichas funciones en esas paginas */
route.add('clase2.html', function() {
    console.log("Este código solo funciona en la pag clase2.html")
})

//  aca ejecutamos la funcion ya agregada anteriormente

route.run()