import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // Create an Agent first (relation requirement)
  const agent = await prisma.agent.create({
    data: {
      name: "San AlSan",
      phone: "+971 50 123 4567",
      email: "sara@homes.example",
      company: "Harbor Homes Realty",
      avatar:
        "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?w=600&auto=format&fit=crop&q=60",
    },
  });

  // Demo images pool
  const images = [
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600",
    "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=600",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2069",
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2069",
  ];

  // Seed 20 posts
  for (let i = 1; i <= 20; i++) {
    await prisma.post.create({
      data: {
        title: `Modern ${faker.number.int({ min: 1, max: 5 })}BR Apartment with Marina View #${i}`,
        address: faker.location.streetAddress({ useFullAddress: true }),
        price: faker.number.int({ min: 800000, max: 4000000 }),
        beds: faker.number.int({ min: 1, max: 5 }),
        baths: faker.number.int({ min: 1, max: 4 }),
        areaSqft: faker.number.int({ min: 900, max: 3200 }),
        type: "Apartment",
        status: faker.helpers.arrayElement(["For Sale", "For Rent"]),
        yearBuilt: faker.number.int({ min: 2010, max: 2023 }),
        description:
          "Spacious apartment with floor-to-ceiling windows, balcony, and excellent community facilities.",
        features: [
          "Fully equipped gym",
          "Infinity pool",
          "24/7 security",
          "Covered parking",
          "Pets allowed",
          "Smart home system",
        ],
        nearby: ["Metro (5 min)", "Mall (10 min)", "Beach (7 min)"],
        images,
        lat: 25.08 + Math.random() * 0.01,
        lng: 55.14 + Math.random() * 0.01,
        agent: {
          connect: { id: agent.id },
        },
      },
    });
  }

  console.log("✅ Seeded 20 demo posts with one agent");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
