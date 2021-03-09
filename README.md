# Backend (Node, Express y MongoDB)

> La aplicación mereceriabackend se encuentra desplegada en [Heroku](https://appmerceria.herokuapp.com/)
> 
> - El código fuente se encuentra organizado en los directorios del repositorio.
> - **La parte frontend de la aplicación se encuentra en [merceriafrontend](https://github.com/Yaye83/merceriafrontend)**


## Primeros pasos

> **La parte backend proporciona una API REST y ofrece la información en formato JSON**.
> - Para poder trabajar con el entorno de ejecución Node.js debemos instalar los siguiente:

```bash
sudo apt install nodejs npm
```

## Iniciar el proyecto
```
mkdir   merceriabackend
cd      merceriabackend

npm init -y
```

Esto creará un archivo **`package.json`** con la metainformación del proyecto. Tenemos que editarlo, la parte más importante es indicar el punto de entrada. En este caso el archivo **`server.js`**, que se creará posteriormente.

Para definir dicho punto de entrada escribiremos:
```
"main": "server.js",
```

Todos los archivos referentes a rutas, puertos y demás configuración, además de los archivos estáticos e imágenes se encuentran en el repositorio.

Cuando hemos adaptado nuestro código al tema elegido, lo subimos a un repositorio vacío en Github y posteriormente lo desplegamos en Heroku.


