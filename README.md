# Next.js Telo Shop
* App Estable y Corriendo
```
https://teslo-shop-nextjs-production.up.railway.app
```
![Teslo App](https://github.com/Jair-vet/Teslo-Shop-NextJs/assets/63264620/c4c21bdb-8b49-40b6-98e0-a83ce23df29a)



Para correr localmente, se necesita la base de datos.
docker-compose up -d
```
```

* El -d, significa __detached__



## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__
* MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/teslodb
```

* Reconstruir los módulos de node y levantar Next
```
npm install
npm run dev
```


## Llenar la base de datos con información de pruebas

Llamara:
```
http://localhost:3000/api/seed
