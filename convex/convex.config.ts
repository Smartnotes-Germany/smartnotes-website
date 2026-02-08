// @ts-ignore
import loops from "@devwithbobby/loops/convex.config";
import { defineApp } from "convex/server";

const app = defineApp();
app.use(loops);

export default app;