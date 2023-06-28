import ChartConstants from "./ChartConstants";

export class DappLookerChartsAPI {
    static async getChartData(chartUUID: string, apiKey: string, format?: string) {
        let outputFormat = format?.toLowerCase();
        if ((outputFormat !== undefined && ChartConstants.supportedFormatType.includes(outputFormat)) || outputFormat === undefined) {
            let chartAPIUrl = ChartConstants.getChartDetailUrl;
            let fullAPIUrl = `${chartAPIUrl}/${chartUUID}?api_key=${apiKey}&output_format=${format}`;
            console.log(`Calling DappLooker API: ${fullAPIUrl}`);
            let resObject = await fetch(fullAPIUrl);
            return await resObject.json();
        } else {
            return {
                success: false,
                msg: "Output format Incorrect!! Please use output format as json",
                outputFormatEntered: format,
            };
        }
    }
}

export default DappLookerChartsAPI;
