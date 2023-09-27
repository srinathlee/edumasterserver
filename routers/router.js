import Express from "express"
import * as controllers from "../controllers/controller.js"

const router=Express.Router()

router.route("/getStory").post(controllers.GetStory)
router.route("/save").post(controllers.PostStory)
router.route("/getall").get(controllers.GetAllStories)
router.route("/getall/:id").get(controllers.GetSingleStory).delete(controllers.Delete)
router.route("/getall/:id/like").put(controllers.Like)
router.route("/getall/:id/dislike").put(controllers.DisLike)





export default router