const Hapi = require("@hapi/hapi");
const showCatalog = require("./controller/catalog");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (request, h) => {
        return "Welcome to the API";
      },
    },
    {
      method: "GET",
      path: "/catalog",
      handler: showCatalog,
    },
  ]);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
