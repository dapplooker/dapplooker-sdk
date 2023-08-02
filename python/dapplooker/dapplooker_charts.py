import requests
from .chart_constants import ChartConstants


class DappLookerChartsAPI:
    """
    A class to get chart data from DappLooker API.

    Args:
        chart_uuid (str): The UUID of the chart.
        api_key (str): The API key for DappLooker.
        format (str, optional): The format of the response. Defaults to "json".

    Returns:
        dict: The response from the DappLooker API.
    """

    @staticmethod
    def get_chart_data(chart_uuid: str, api_key: str, format: str = None) -> dict:
        """
        Get chart data from DappLooker API.

        Args:
            chart_uuid (str): The UUID of the chart.
            api_key (str): The API key for DappLooker.
            format (str, optional): The format of the response. Defaults to "json".

        Returns:
            dict: The response from the DappLooker API.
        """

        output_format = format.lower() if format else None

        # Check if the output format is supported.
        if output_format not in ChartConstants.supported_format_type and output_format is not None:
            raise ValueError(
                f"Invalid output format: {output_format}. Supported formats are: {ChartConstants.supported_format_type}"
            )

        # Build the API URL.
        chart_api_url = ChartConstants.get_chart_detail_url
        full_api_url = f"{chart_api_url}/{chart_uuid}?api_key={api_key}&output_format={format}"
        # Call the API and get the response.
        res_object = requests.get(full_api_url)

        # Check the status code of the response.
        if res_object.status_code in [200, 201, 202, 203, 204]:
            return res_object.json()
        else:
            error_details = res_object.text()
            return {"msg": f"Failed to get response from DappLooker API, error code: {res_object.status_code}, error: {error_details}"}
