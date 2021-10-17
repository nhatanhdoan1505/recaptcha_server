import { RecaptchaService } from "../model/recaptcha/service";

export class RecaptchaController {
  private recaptchaService: RecaptchaService = new RecaptchaService();

  async uploadRecaptcha(req, res) {
    if (!req.file || !req.body.question)
      return res.status(400).json({ status: "FAIL" });

    const recaptchaData = await this.recaptchaService.createRecaptcha({
      question: req.body.question,
      filePath: req.file.filename,
    });

    return res
      .status(200)
      .json({ status: "SUCCESS", data: { _id: recaptchaData._id } });
  }

  async getRecaptcha(req, res) {
    if (!req.params._id) return res.status(404).json({ status: "FAIL" });

    const recaptchaData = await this.recaptchaService.findRecaptcha({
      _id: req.params._id,
    });

    if (!recaptchaData)
      return res
        .status(404)
        .json({ status: "FAIL", data: { _id: "", filePath: "" } });

    return res.status(200).json({
      status: "SUCCESS",
      data: {
        _id: recaptchaData._id,
        filePath: recaptchaData.filePath,
        question: recaptchaData.question,
      },
    });
  }

  async setAnwser(req, res) {
    if (!req.params._id || !req.body.answer)
      return res.status(404).json({ status: "FAIL" });

    const recaptchaData = await this.recaptchaService.findRecaptcha({
      _id: req.params._id,
    });

    console.log("aaa", req.body);

    if (!recaptchaData) return res.status(404).json({ status: "FAIL" });

    await this.recaptchaService.updateRecaptcha(
      { _id: req.params._id },
      { ...recaptchaData, answer: req.body.answer }
    );

    return res.status(200).json({ status: "SUCCESS" });
  }
}
