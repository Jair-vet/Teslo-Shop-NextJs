# Next.js Telo Shop
* App Estable y Corriendo
```
https://teslo-shop-nextjs-production.up.railway.app/category/kid
```



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