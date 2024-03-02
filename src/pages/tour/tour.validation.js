import { z } from "zod";

const TCustomFileSchema = z.object({
  name: z.string(),
  lastModified: z.number(),
  lastModifiedDate: z.date(),
  webkitRelativePath: z.string(),
  size: z.number(),
  type: z.string(),
});

const tourValidationSchema = z.object({
  tourName: z.string().min(1, "Tour Name is required"),
  price: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  image: TCustomFileSchema,
});

export default tourValidationSchema;
