import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Clean existing data (optional in dev)
  await prisma.message.deleteMany();
  await prisma.savedPost.deleteMany();
  await prisma.postDetail.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash('password123', 10);

  // ---- Create Users ----
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: passwordHash,
        imgUrl: faker.image.avatar(),
      }
    });
    users.push(user);
  }

  // ---- Create Posts with Details ----
  const posts = [];
  for (let i = 0; i < 20; i++) {
    const author = faker.helpers.arrayElement(users);

    const post = await prisma.post.create({
      data: {
        title: faker.lorem.words(4),
        text: faker.lorem.sentences(2),
        price: faker.number.int({ min: 500, max: 500000 }),
        images: [
          faker.image.urlPicsumPhotos({ width: 800, height: 600 }),
          faker.image.urlPicsumPhotos({ width: 800, height: 600 })
        ],
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        bedroom: faker.number.int({ min: 1, max: 5 }),
        bathroom: faker.number.int({ min: 1, max: 4 }),
        latitude: faker.location.latitude().toString(),
        longitude: faker.location.longitude().toString(),
        type: faker.helpers.arrayElement(['buy', 'rent']),
        property: faker.helpers.arrayElement(['apartment', 'house', 'condo', 'land']),
        authorId: author.id,
        postDetail: {
          create: {
            desc: faker.lorem.paragraph(),
            utilities: faker.helpers.arrayElement(['Water, Electricity', 'Water only', 'None']),
            pet: faker.helpers.arrayElement(['Allowed', 'Not allowed']),
            income: faker.number.int({ min: 2000, max: 8000 }) + ' USD/month',
            size: faker.number.int({ min: 50, max: 400 }),
            school: faker.number.int({ min: 0, max: 10 }),
            bus: faker.number.int({ min: 0, max: 10 }),
            restaurant: faker.number.int({ min: 0, max: 10 })
          }
        }
      }
    });

    posts.push(post);
  }

  // ---- Create SavedPosts ----
  for (let i = 0; i < 15; i++) {
    const user = faker.helpers.arrayElement(users);
    const post = faker.helpers.arrayElement(posts);

    // Avoid duplicates by try-catch
    try {
      await prisma.savedPost.create({
        data: {
          userId: user.id,
          postId: post.id
        }
      });
    } catch (err) {
      // Ignore duplicate constraint errors
    }
  }

  // ---- Create Messages ----
  for (let i = 0; i < 30; i++) {
    const sender = faker.helpers.arrayElement(users);
    let receiver = faker.helpers.arrayElement(users);

    // Ensure sender != receiver
    while (receiver.id === sender.id) {
      receiver = faker.helpers.arrayElement(users);
    }

    await prisma.message.create({
      data: {
        senderId: sender.id,
        receiverId: receiver.id,
        text: faker.lorem.sentence(),
        imgUrl: faker.datatype.boolean()
          ? faker.image.urlPicsumPhotos({ width: 600, height: 400 })
          : null
      }
    });
  }

  console.log('✅ Random seed data inserted successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
