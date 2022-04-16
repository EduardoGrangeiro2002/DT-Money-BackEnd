import { app } from "./config/app";
import { env } from "./config/env";

app.listen(3333, () => console.log(`Server is runnin at Port: ${env.port}`));
