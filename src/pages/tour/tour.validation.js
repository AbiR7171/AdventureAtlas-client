import {z} from  "zod";

const tourValidationSchema =  z.object({
    tourName: z.string().min(1, "Tour Name is required"),
    price: z.string(),
    startDate: z.string(),
    endDate: z.string(),
})


export default tourValidationSchema