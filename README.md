Prueba backend
.env -> No se debe dejar a la vista por temas de seguridad, pero por requisitos se subio al repositorio

Para esta prueba utilice el patron repositorio
¿Porque?

El patron repositorio es una abstraccion que actua como intermediario entre la aplicacion y la capa
de acceso a datos, en este caso la base de datos MongoDB.

Beneficios del Patrón Repositorio:
Desacople: Separa la lógica de negocio de la infraestructura

Testabilidad: Fácil de mockear en pruebas unitarias

Flexibilidad: Cambiar de MongoDB a SQL solo requiere nueva implementación

Mantenibilidad: Código más organizado y predecible

Usamos un repositorio para que se encarge de las operaciones de persistencia, como crear,
leer, actualizar y eliminar (CRUD). Con esto logramos separar la base de datos con la logica de negocio y el servicios del mismo.

Con esto logramos hacer cambios en la base de datos sin afectar al resto de la aplicacion

Este enfoque es especialmente valioso en aplicaciones complejas donde se necesita:

Cambiar de base de datos fácilmente

Mantener un dominio rico y desacoplado

Tener un código altamente testeable

Trabajar en equipos grandes con responsabilidades separadas

Utilizamos interfaces para poder lograr un diseño limpio y mantenible y las interfaces permiten que los módulos de alto nivel (lógica de negocio) no dependan de módulos de bajo nivel (acceso a datos), sino de abstracciones. Tambien sirven como documentación viva de lo que debe implementar cada repositorio.

Las interfaces nos brindan flexibilidad, mantenibilidad y testabilidad, mientras TypeScript asegura que las implementaciones cumplan con los contratos definidos.

Se utilizaron heramientas como: 
jsonwebtoken: Para el token de login de usuarios
bcrypt: Poder encriptar la contraseña del usuario
express: Simplicidad, flexibilidad y rendimiento para poder crear la API
morgan: Generar logs con información útil sobre cada request, monitoreo y registro de actividad

REST Client con VSCODE para poder hacer las pruebas sin necesidad de salir del editor de codigo.
