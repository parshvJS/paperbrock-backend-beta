import { User } from '../models/betaUser.model.js'
import { apiError } from '../utils/apiError.utils.js'
import { apiResponse } from '../utils/apiResponse.utils.js'
import asyncHandler from '../utils/asyncHandler.utils.js'

const betaRegister = asyncHandler(
    async (req, res) => {
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