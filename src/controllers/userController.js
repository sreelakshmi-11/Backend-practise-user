import UserModel from "../Model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password, role, description } = req.body;
        if (!name || !email || !password || !role) {
            return res.json({
                message: "All fields are required"
            })
        }

        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const newUser = await UserModel.create({ name, email, password, role, description })
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            newUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).select("name email role description")
        if (!users) {
            return res.json({
                success: false,
                message: "Users not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Fetched Users succesfully",
            users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}


export const updateUser = async (req, res) => {
    try {
        const { email, name, password, role } = req.body;

        const updatedData = {};

        if (name) updatedData.name = name;
        if (password) updatedData.password = password;
        if (role) updatedData.role = role;

        const updatedUser = await UserModel.findOneAndUpdate({ email }, { $set: updatedData }, { new: true }).select("-password")
        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.json({
            success: true,
            message: "User details updated successfully",
            updatedUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        const deleteUser = await UserModel.findOneAndDelete({ email })
        if (!deleteUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User deleted Successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}