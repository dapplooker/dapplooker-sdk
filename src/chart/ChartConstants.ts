
class ChartConstants {
    public get supportedFormatType(): string[] {
        return ["json"];
    }

    public get getChartDetailUrl(): string {
        return `http://localhost:4001/web/plib/chart`;
    }
}

export default new ChartConstants();
