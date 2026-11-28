test("GET to /api/v1/status should return 200", async () => {
  // Arrange, é onde eu preparo o "Palco", nada do que é testado é usado aqui
  const url = "http://localhost:3000/api/v1/status";

  // Act, é onde eu disparo a ação que quero executar
  const response = await fetch(url);
  const responseBody = await response.json();

  // Assert, é aqui que eu confiro se meu resultado foi correto.
  expect(response.status).toBe(200);
  expect(responseBody.updated_at).toBeDefined();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.16");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

only("Estou fazendo um teste de sqlInjection", async () => {
  const url = "http://localhost:3000/api/v1/status?databaseName=local_db";

  const resposta = await fetch(url);
  const valueStatus = await resposta.json();

  expect(resposta.status).toBe(200);
});
