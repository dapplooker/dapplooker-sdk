package dapplooker

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type DappLookerChartsAPI struct {
	chartUUID string
	apiKey    string
	format    string
}

// NewDappLookerChartsAPI creates a new instance of DappLookerChartsAPI.
func NewDappLookerChartsAPI(chartUUID, apiKey, format string) *DappLookerChartsAPI {
	return &DappLookerChartsAPI{
		chartUUID: chartUUID,
		apiKey:    apiKey,
		format:    format,
	}
}

// GetChartData retrieves chart data from the DappLooker API.
func (api *DappLookerChartsAPI) GetChartData() (map[string]interface{}, error) {
	url := fmt.Sprintf("https://api.dapplooker.com/chart/%s?api_key=%s&output_format=%s", api.chartUUID, api.apiKey, api.format)
	response, err := http.Get(url)
	if err != nil {
		return nil, err
	}

	defer response.Body.Close()

	if response.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to get response from DappLooker API, error code: %d", response.StatusCode)
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		return nil, err
	}

	var chart_data map[string]interface{}
	err = json.Unmarshal(body, &chart_data)
	if err != nil {
		return nil, err
	}

	return chart_data, nil
}
