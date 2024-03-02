import { z } from "zod";


const expenseValidationSchema = z.object(
    {
         spender: z.string().min(1, "spender must have to select"),
         date: z.string().optional(),
         cost: z.string().min(1, "Cost not given"),
         details: z.string().min(1, "description not given")
    }
)

export default expenseValidationSchema