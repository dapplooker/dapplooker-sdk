import ChartConstants from "./ChartConstants";

export class DappLookerChartsAPI {
    static async getChartData(chartUUID: string, apiKey: string, format?: string) {
        const oThis = this;
        let outputFormat = format?.toLowerCase();
        console.log(outputFormat);
        console.log(outputFormat !== undefined && !ChartConstants.supportedFormatType.includes(outputFormat));

        if ((outputFormat !== undefined && ChartConstants.supportedFormatType.includes(outputFormat)) || outputFormat === undefined) {
            let chartAPIUrl = ChartConstants.getChartDetailUrl;
            let fullAPIUrl = `${chartAPIUrl}/${chartUUID}?api_key=${apiKey}&output_format=${format}`;
            console.log(fullAPIUrl)
            let resObject = await fetch(fullAPIUrl);
            let resJSON = await resObject.json();
            console.log(`${JSON.stringify(resObject.status)}`);
            console.log(`${resJSON}`);
            return resJSON;
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
