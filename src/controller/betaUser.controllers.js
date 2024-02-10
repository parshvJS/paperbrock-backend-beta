import { User } from '../models/betaUser.model.js'
import { apiError } from '../utils/apiError.utils.js'
import { apiResponse } from '../utils/apiResponse.utils.js'
import asyncHandler from '../utils/asyncHandler.utils.js'

const betaRegister = asyncHandler(
    async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        const { email } = req.body
        if (!email) throw new apiError(400, "Please Enter Email Here !")
        const isExisting = await User.findOne({ email })
        if (!isExisting) {
            await User.create({
                email
            })

            return res.status(200).json(
                new apiResponse(200, {}, "User added to beta user !")
            )
        }
        else {
            return res.status(404).json(new apiResponse(404, {}, "Email Already Exist !"))
        }
    }
)

export { betaRegister }