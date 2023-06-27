import { ErrorResponse } from "./interface";

export class DapplookerAPI {
  private static generalFormatType: string = "json";

  static async getChartData(
    chartUUID: string,
    apiKey: string,
    format?: string
  ) {
    const oThis = this;

    //Check If format is json
    if (format && format.toLowerCase() === oThis.generalFormatType) {
      let resObject = await fetch(
        `http://localhost:4001/web/plib/chart/${chartUUID}?api_key=${apiKey}&output_format=${format}`
      );
      return await resObject.json();
    } else {
      //If format not json show error
      return oThis.errorResponse(format);
    }
  }

  private static errorResponse(format: string | any): ErrorResponse {
    const formattedData = {
      success: false,
      msg: "Output format Incorrect!! Please use output format as json",
      outputFormatEntered: format,
    };
    return formattedData;
  }
}
