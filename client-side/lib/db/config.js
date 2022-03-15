import mongoose from 'mongoose'

const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@techbd71.5ewxj.mongodb.net/restaurantApp?retryWrites=true&w=majority`
//const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@techbd71.5ewxj.mongodb.net/restaurantApp?retryWrites=true&w=majority`
//const MONGO_URL = 'mongodb://127.0.0.1:27017/restaurant'
if (!MONGO_URL) {
    throw new Error(
        'Please define the MONGO_URL environment variable inside .env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        // const opts = {
        //     bufferCommands: true,
        // }

        cached.promise = await mongoose.connect(MONGO_URL).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect