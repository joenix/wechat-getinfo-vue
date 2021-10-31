import env from "./env";

export default async fn => fn(await env());
