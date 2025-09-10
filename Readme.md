INTEGRANTES:
Vicente Vásquez	- Backend
Nicolás Mora - UI/UX
Fabian Alarcon - UI/UX

Objectivo: 
Realizar una prueba de concepto de nuestra arquitectura de integracion creando un prototipo

Teoricamente (Pseudo Rubica):
- Con Docker crearemos un entorno de trabajo aislado para cada equipo.
- Para cada equipo existiran 3 instancias docker: 1 para el front, 1 para el back y 1 para su base de datos.
- Se podra establecer connexiones entre los docker haciendo un ecosistema de servicios.

Prototipo: Sandwicht Maker
- Utilizando los templates de frontend y backend creamos una app que almacene y muestre sandwiches
- El fronted solo lista el contenido de la base de datos, pero para ello tiene que establacer una conexion con el backend.
- El backend tiene denifida operaciones crud para crear,remover,modificar y recastar datos de la base datos.
- La base de datos funciona en una instacia aislada.

Instrucciones
1. clonar ambos repositorios y dejarlos en el mismo directorios.
  => Seguir instrucciones de instalacion de los templates.
  => Ademas con un terminal ejecutar "npm update" en directorio del backend.
2. Poner en el interior del backend y frontend su respectivo dockerfile, cambiar su nombre para que sea "Dockerfile"
3. En directorio que contiene ambos repositorios poner el docker-compose.
4. Ejecutar con una terminar ejecutar "docker-compose up --build" en directorio del docker-compose
5. Si en docker corren las images, deberia poderse usar el frontend y el backend en browser
  => Las operaciones crud se pueden probar con postman
  => La base de datos esta vacia por defecto, por lo tanto hay que llenarla con algo para visualizar cambios en el front.

