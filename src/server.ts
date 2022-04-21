import { AppController } from "./app";

const port = process.env.PORT || 3000;

const app = new AppController();

app.express.listen(port, () => console.log(`Api stated on port ${port}!`));