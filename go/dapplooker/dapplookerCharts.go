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
// Returns a slice of maps
// chartUUID: 0be3ba16-3510-400c-9e9a-95b1a2bf8d97
// apiKey: xxxxxxxxxxxxxxxxxxxxxxx
/* Response:
	Data [map[Author:0x6488cfc95016804e23fd6fd370d8cc1a975d4178 Block Hash:0xea5498d905a046f89d193f604037edea42752d889a423e39b72cc08bcff1792a Block Number:462671 Timestamp:2023-08-04T12:27:12Z] map[Author:0x8364134c2856e229fe67d2bbc10c7a3575935b80 Block Hash:0x4a72ce8fd915a8a392a2e8680d47684a8e4438fc49b13a5d13c35ebf6539ff24 Block Number:462670 Timestamp:2023-08-04T12:27:00Z] map[Author:0x174eed974591bdfa99cf0036f6de03bc08b943fb Block Hash:0xcdc22e1ba5e15f546913a141f85bb187d17ff47c1d0a666592b226feda3a8054 Block Number:462669 Timestamp:2023-08-04T12:26:48Z] map[Author:0xd4d0a0f4d9370b7aeef9660169839ad5a96e8e01 Block Hash:0xee58ef526755158ef4ef7740279a10f5dd4045ffde062f1233b1f0bf409905bb Block Number:462668 Timestamp:2023-08-04T12:26:36Z] map[Author:0x6488cfc95016804e23fd6fd370d8cc1a975d4178 Block Hash:0xea2621b887c3ee8dc25443e5fc073b457263ebd8830973a7e15640af54db18d9 Block Number:462667 Timestamp:2023-08-04T12:26:24Z] map[Author:0x8364134c2856e229fe67d2bbc10c7a3575935b80 Block Hash:0x6b724a888158d91324ecfb19b7cd30877bfcd377490c88ac2e73c7152e65a465 Block Number:462666 Timestamp:2023-08-04T12:26:12Z] ...
*/
func (api *DappLookerChartsAPI) GetChartData() ([]map[string]interface{}, error) {
	constants := &ChartConstants{}

	// Using the methods from ChartConstants
	chartDetailURL := constants.GetChartDetailUrl()

	url := fmt.Sprintf("%s/%s?api_key=%s&output_format=%s", chartDetailURL, api.chartUUID, api.apiKey, api.format)
	response, err := http.Get(url)
	if err != nil {
		return nil, err
	}

	defer response.Body.Close()

	if response.StatusCode < http.StatusOK && response.StatusCode > http.StatusNoContent {
		return nil, fmt.Errorf("failed to get response from DappLooker API, error code: %d", response.StatusCode)
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		return nil, err
	}

	var chart_data []map[string]interface{}
	err = json.Unmarshal(body, &chart_data)
	if err != nil {
		return nil, err
	}
	return chart_data, nil
}

