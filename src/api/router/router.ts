import { Router } from "express";
import appointmentController from "../controllers/appointment";
import { checkApiKey } from "../../middleware/authentication";

const router: Router = Router();

router.use(checkApiKey);

router.get("/", appointmentController.getAvailableSlotbyDate);
router.post("/", appointmentController.createAppointment);
router.put("/:id", appointmentController.cancelAppointment);

export default router;
