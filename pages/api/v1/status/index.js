import database from "../../../../infra/database.js";

async function status(request, response) {
  //200 significa que está tudo aqui
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result.row);
  response.status(200).json({ chave: "Testando" });
}
export default status;
