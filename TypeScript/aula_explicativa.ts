// Tipando os parâmetros que a minha função "showWelcomeMessage" vai receber
type User = {
  name: String;
  email: String;
  address: {
    city: String;
    state?: String; // o "?" significa que não é obrigatório no meu escopo
  };
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}
