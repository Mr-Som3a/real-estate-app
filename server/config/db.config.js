import prisma from './prisma.js'

// Handle graceful shutdown
const Shutdown = async () => {
  console.log('Shutting down...');
  await prisma.$disconnect(); // 🔌 disconnect from DB
  
};


export default Shutdown

