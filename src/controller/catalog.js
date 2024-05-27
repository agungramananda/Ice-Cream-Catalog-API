const prisma = require("../../prisma/prismaClient");
const { flavorQuery, typeQuery, toppingQuery } = require("../query/query");

const showCatalog = async (request, h) => {
  const { requestedFlavor, requestedType, requestedTopping } = request.query;
  try {
    if (requestedFlavor && requestedTopping && requestedType) {
      const getByAllRequest = await prisma.iceCream.findMany({
        where: {
          AND: [
            flavorQuery(requestedFlavor),
            typeQuery(requestedType),
            toppingQuery(requestedTopping),
          ],
        },
      });
      return h.response({
        status: "success",
        data: getByAllRequest,
      });
    } else if (requestedFlavor && requestedTopping) {
      const getByFlavorTopping = await prisma.iceCream.findMany({
        where: {
          AND: [flavorQuery(requestedFlavor), toppingQuery(requestedTopping)],
        },
      });
      return h.response({
        status: "success",
        data: getByFlavorTopping,
      });
    } else if (requestedFlavor && requestedType) {
      const getByFlavorType = await prisma.iceCream.findMany({
        where: {
          AND: [flavorQuery(requestedFlavor), typeQuery(requestedType)],
        },
      });
      return h.response({
        status: "success",
        data: getByFlavorType,
      });
    } else if (requestedTopping && requestedType) {
      const getByToppingType = await prisma.iceCream.findMany({
        where: {
          AND: [typeQuery(requestedType), toppingQuery(requestedTopping)],
        },
      });
      return h.response({
        status: "success",
        data: getByToppingType,
      });
    } else if (requestedFlavor) {
      const getByFlavor = await prisma.iceCream.findMany({
        where: flavorQuery(requestedFlavor),
      });
      return h
        .response({
          status: "success",
          data: getByFlavor,
        })
        .code(200);
    } else if (requestedTopping) {
      const getByTopping = await prisma.iceCream.findMany({
        where: toppingQuery(requestedTopping),
      });
      return h
        .response({
          status: "success",
          data: getByTopping,
        })
        .code(200);
    } else if (requestedType) {
      const getByType = await prisma.iceCream.findMany({
        where: typeQuery(requestedType),
      });
      return h
        .response({
          status: "success",
          data: getByType,
        })
        .code(200);
    }
    const iceCreams = await prisma.iceCream.findMany();
    return h
      .response({
        status: "success",
        data: {
          iceCreams,
        },
      })
      .code(200);
  } catch (e) {
    console.error(e);
    return h
      .response({
        status: "failed",
        message: "Gagal mengambil data",
      })
      .code(500);
  }
};

module.exports = showCatalog;
