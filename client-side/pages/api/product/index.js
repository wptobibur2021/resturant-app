import dbConnect from "../../../lib/db/config"
import Product from '../../../models/Products'
export default async function product(req, res) {
    //res.status(200).json({ name: 'This is a product DB' })
    dbConnect()
    const { method } = req
    if (method === 'GET') {
        try {
            const products = await Product.find()
            await res.status(200).json(products)
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

}