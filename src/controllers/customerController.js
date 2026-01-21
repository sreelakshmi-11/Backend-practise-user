import Customer from "../Model/customerModel.js";


export const addCustomer = async (req, res) => {
    try {
        const { name, phone, age, salary } = req.body;
        const customer = await Customer.findOne({ phone })
        if (customer) {
            return res.status(409).json({
                success: false,
                message: "Customer already exists"
            })
        }

        const newCustomer = await Customer.create({ name, phone, age, salary });
        return res.status(201).json({
            success: true,
            message: "Customer added successfully",
            newCustomer
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export const getCustomer = async (req, res) => {
    try {
        const { phone } = req.params

        const customer = await Customer.findOne({ phone })
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Customer fetched Sucessfully",
            customer
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}