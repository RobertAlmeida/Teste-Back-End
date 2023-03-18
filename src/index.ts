import { app } from "./app";
import './configs/env';
import './database/config/DatabaseConfiguration';

const port = process.env.PORT || 3000;

app.listen(port, async () => {

    console.log('Aplicação rodando na porta ' + port);

})
