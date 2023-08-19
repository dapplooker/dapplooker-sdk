package org.dapplooker;

import org.dapplooker.ChartConstants;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class DappLookerChartsAPI {

    /**
     * Get chart data from DappLooker API.
     *
     * @param chartUuid The UUID of the chart.
     * @param apiKey    The API key for DappLooker.
     * @param format    The format of the response.
     * @return The response from the DappLooker API.
     */
    public static Object getChartData(String chartUuid, String apiKey, String format) {
        String outputFormat = (format != null) ? format.toLowerCase() : null;

        // Check if the output format is supported.
        if (outputFormat != null && !ChartConstants.supportedFormatType.contains(outputFormat)) {
            throw new IllegalArgumentException("Invalid output format: " + outputFormat +
                    ". Supported formats are: " + ChartConstants.supportedFormatType);
        }

        // Build the API URL.
        String chartApiUrl = ChartConstants.getChartDetailUrl;
        String fullApiUrl = chartApiUrl + "/" + chartUuid + "?api_key=" + apiKey + "&output_format=" + format;

        // Call the API and get the response.
        try {
            URL url = new URL(fullApiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            if (responseCode >= 200 && responseCode < 300) {
                String response = "";
                try (Scanner scanner = new Scanner(connection.getInputStream())) {
                    while (scanner.hasNext()) {
                        response += scanner.nextLine();
                    }
                }
                Map<String, Object> jsonResponse = new HashMap<>();
                jsonResponse.put("response", response);
                return jsonResponse.get("response");
            } else {
                String errorDetails = "";
                try (Scanner scanner = new Scanner(connection.getErrorStream())) {
                    while (scanner.hasNext()) {
                        errorDetails += scanner.nextLine();
                    }
                }
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("msg", "Failed to get response from DappLooker API, error code: " + responseCode +
                        ", error: " + errorDetails);
                return errorResponse;
            }
        } catch (IOException e) {
            e.printStackTrace();
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("msg", "Error occurred while making API request: " + e.getMessage());
            return errorResponse;
        }
    }
}
