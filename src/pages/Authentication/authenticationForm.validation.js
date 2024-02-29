import {z} from "zod"

export const authValidationSchema = z.object({
    name: z.string().min(1,"name is required"),
    username: z.string().min(1,"username is required"),
    email: z.string().email().min(1, "email is required"),
    password: z.string().min(6, "password must have to contain 6 letter")
})