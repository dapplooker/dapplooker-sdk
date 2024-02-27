import ChartConstants from "./ChartConstants";
import fetch from "node-fetch";


export class DappLookerChartsAPI {
    static async getChartData(chartUUID: string, apiKey: string, format?: string, filterParams?: string) {
        let outputFormat: string | undefined = format?.toLowerCase();
        let requestTimedOut: boolean = false;
        const controller: AbortController = new AbortController();
        const timeoutId: NodeJS.Timeout = setTimeout(() => {
            controller.abort();
            requestTimedOut = true;
        }, ChartConstants.timeoutLimit);
        try {
            if ((outputFormat !== undefined && ChartConstants.supportedFormatType.includes(outputFormat)) || outputFormat === undefined) {
                let chartAPIUrl: string = ChartConstants.getChartDetailUrl;
                let fullAPIUrl: string = `${chartAPIUrl}/${chartUUID}?api_key=${apiKey}&output_format=${format}`;
                fullAPIUrl = filterParams ? fullAPIUrl.concat(`&filterParams=${filterParams}`): fullAPIUrl;
                console.log(`Calling DappLooker API: ${fullAPIUrl}`);
                let resObject = await fetch(fullAPIUrl, {
                    signal: controller.signal
                });
                const successResponseCode = [200, 201, 202, 203, 204];
                if (successResponseCode.includes(resObject.status)) {
                    return await resObject.json();
                } else {
                    let errorDetails: string = await resObject.text();
                    return {
                        msg: `Failed to get response from DappLooker API, error code: ${resObject.status}, error: ${errorDetails}`
                    };
                }
            } else {
                return {
                    msg: "Output format Incorrect!! Please use output format as json",
                    outputFormatEntered: format,
                };
            }
        } catch (e: any){
            if (requestTimedOut) {
                return {
                    msg: "Connection timeout"
                }
            }
            return {
                msg: `Exception getting result from DappLooker API, ${e.message}`,
            };
        } finally {
            clearTimeout(timeoutId);
        }
    }
}

export default DappLookerChartsAPI;
