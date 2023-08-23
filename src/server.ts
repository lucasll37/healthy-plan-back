import { generateApp } from "@/app";
import { env } from "@/env";

generateApp().then(app => {
    app.ready();
    // app.swagger();
    app.listen({host: "0.0.0.0", port: env.PORT});
    console.log("HTTP Server Running!");
})


    