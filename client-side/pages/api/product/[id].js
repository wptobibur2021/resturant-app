import dbConnect from "../../../lib/db/config"
import Product from '../../../models/Products'
export default async function product(req, res) {
    dbConnect()
    const { method, query: { id } } = req
    if (method === 'GET') {
        try {
            const product = await Product.findById(id)
            await res.status(200).json(product)
        } catch (err) {
            await res.status(500).json(err.message)
        }
    }
    if (method === 'POST') {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            await res.status(500).json(err.message)
        }
    }

    if (method === 'PUT') {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            await res.status(500).json(err.message)
        }
    }

    if (method === 'DELETE') {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            await res.status(500).json(err.message)
        }
    }

}