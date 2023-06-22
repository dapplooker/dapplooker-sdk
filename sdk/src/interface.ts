export interface ChartAPIInterface {
  data: {
    rows: [];
    cols: [];
    insights: [];
    results_timezone: string;
  };
  json_query: Object;
  status: string;
}
