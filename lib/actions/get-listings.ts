import prisma from "../prisma-db";

export default async function getListings() {
  try {
    return await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
