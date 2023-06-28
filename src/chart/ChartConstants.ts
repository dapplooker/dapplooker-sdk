
class ChartConstants {
    public get supportedFormatType(): string[] {
        return ["json"];
    }

    public get getChartDetailUrl(): string {
        return `http://www.dapplooker.com/web/plib/chart`;
    }
}

export default new ChartConstants();
