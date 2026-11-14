function status(request, response) {
  //200 significa que está tudo aqui
  response.status(200).json({ chave: "Testando" });
}
export default status;
