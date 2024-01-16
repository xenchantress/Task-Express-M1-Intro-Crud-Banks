const express = require("express");
let accounts = require("./accounts");
const app = express();
app.use(express.json());
const PORT = 8001;

app.get("/accounts", (req, res) => {
  return res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };
  accounts.push(newAccount);
  return res.status(200).json(newAccount);
});

app.get("/api/accounts/:id", (req, res) => {
  const id = req.params.id;
  const newAccount = accounts.find((student) => {
    return newAccount.id == id;
  });
  if (!newAccount)
    return res.status(404).json({
      message: ` Account holder with the id ${id}, was not found!`,
    });
});
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  accounts = accounts.filter((account) => {
    return account.id != id;
  });

  return res.json(accounts);
});

//update
app.put("/accounts",(req, res) =>{
    const id = re.params.id;

    accounts = accounts.map((account)=>{
        return account.id !=id;
    });


})

app.listen(PORT, () => {
  console.log(`we are the champions my friends ${PORT}`);
});

