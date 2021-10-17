import { upload } from "./helper/multer";
import { RecaptchaController } from "./controller/RecaptchaController";

export class Router {
  private app;
  private recaptchaController: RecaptchaController = new RecaptchaController();

  constructor(app) {
    this.app = app;
  }

  route() {
    this.app.post(
      "/api/recaptcha/upload",
      upload.single("file"),
      (req, res) => {
        return this.recaptchaController.uploadRecaptcha(req, res);
      }
    );

    this.app.get("/api/recaptcha/:_id", (req, res) => {
      return this.recaptchaController.getRecaptcha(req, res);
    });

    this.app.put("/api/recaptcha/awnser/:_id", (req, res) => {
      return this.recaptchaController.setAnwser(req, res);
    });
  }
}
