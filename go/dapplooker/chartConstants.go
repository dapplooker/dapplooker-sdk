package dapplooker

import "time"

type ChartConstants struct{}

func (c *ChartConstants) SupportedFormatType() []string {
	return []string{"json"}
}

func (c *ChartConstants) GetChartDetailUrl() string {
	return "https://api.dapplooker.com/chart"
}

func (c *ChartConstants) TimeoutLimit() time.Duration {
	return 15 * time.Second
}
