import { ChartAPIInterface } from "./interface";

export class DapplookerAPI {
  static async getChartAPIData(
    chartId: string,
    apiKey: string
  ): Promise<ChartAPIInterface> {
    let responseObj = await fetch(
      `https://api.dapplooker.com/chart/${chartId}?api_key=${apiKey}`
    );
    return await responseObj.json();
  }
}
