
class ChartConstants {
    public get supportedFormatType(): string[] {
        return ["json"];
    }

    public get getChartDetailUrl(): string {
        return `https://api.dapplooker.com/chart`;
    }

    public get timeoutLimit(): number{
        return 15000; // 15 sec connection timeout
    }
}

export default new ChartConstants();
