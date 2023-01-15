const users = [
    {
        email: "beatriz-palomo@gmail.com",
        password: "123456",
        username: "Beatriz"
    },
    {
        email: "ana-castellanos@gmail.com",
        password: "123456",
        username: "Ana"
    },
    {
        email: "test@test.com",
        password: "test",
        username: "test"
    }
];


//La función "login" recibe un objeto con dos propiedades: "email" y "password". Luego, busca en la constante "users" un objeto que tenga el mismo valor que email y contraseña que los proporcionados en el objeto de entrada. Si encuentra un objeto con esas propiedades, lo devuelve. Si no encuentra ninguno, lanza un  mensaje de error. La constante "users" contiene una serie de objetos, cada uno con las propiedades "email", "password" y "username", que representan las credenciales de los usuarios registrados en el sistema.

export const login = ({email, password}) => {
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user === undefined){
        alert("Email o contraseña erróneos")
    };
    return user;
};