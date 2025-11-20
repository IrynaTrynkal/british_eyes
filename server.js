const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(
        process.env.PORT || 3000,
        process.env.HOST || "127.0.0.1",
        err => {
            if (err) throw err;
            console.log("Next.js ready");
        }
    );
});
