import { IRecaptcha } from "./type";
import { Types } from "mongoose";
import Recaptcha from "./schema";

export class RecaptchaService {
  async createRecaptcha(params: any): Promise<IRecaptcha> {
    const _session = new Recaptcha({
      ...params,
      _id: new Types.ObjectId(),
    });
    return await _session.save();
  }

  async filterRecaptcha(query): Promise<IRecaptcha[]> {
    return await Recaptcha.find(query).lean();
  }

  async findRecaptcha(query): Promise<IRecaptcha> {
    return await Recaptcha.findOne(query).lean();
  }

  async updateRecaptcha(query, params): Promise<IRecaptcha> {
    return await Recaptcha.findOneAndUpdate(query, params, {
      new: true,
    }).lean();
  }

  async deleteRecaptcha(query) {
    return await Recaptcha.deleteMany(query);
  }
}
