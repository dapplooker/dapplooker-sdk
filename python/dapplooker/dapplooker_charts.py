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
        List of dict: The response from the DappLooker API.
    """

    @staticmethod
    def get_chart_data(chart_uuid: str, api_key: str, format: str = None) -> list:
        """
        Get chart data from DappLooker API.

        Args:
            chart_uuid (str): The UUID of the chart.
            api_key (str): The API key for DappLooker.
            format (str, optional): The format of the response. Defaults to "json".

        Returns:
            listdict: The response from the DappLooker API.

        Example:
            chart_uuid: 0be3ba16-3510-400c-9e9a-95b1a2bf8d97
            api_key: xxxxxxxxxxxxxxxxxxxx
            Response: [{'Block Hash': '0xea5498d905a046f89d193f604037edea42752d889a423e39b72cc08bcff1792a', 'Author': '0x6488cfc95016804e23fd6fd370d8cc1a975d4178', 'Block Number': 462671, 'Timestamp': '2023-08-04T12:27:12Z'}, {'Block Hash': '0x4a72ce8fd915a8a392a2e8680d47684a8e4438fc49b13a5d13c35ebf6539ff24', 'Author': '0x8364134c2856e229fe67d2bbc10c7a3575935b80', 'Block Number': 462670, 'Timestamp': '2023-08-04T12:27:00Z'}, {'Block Hash': '0xcdc22e1ba5e15f546913a141f85bb187d17ff47c1d0a666592b226feda3a8054', 'Author': '0x174eed974591bdfa99cf0036f6de03bc08b943fb', 'Block Number': 462669, 'Timestamp': '2023-08-04T12:26:48Z'}, {'Block Hash': '0xee58ef526755158ef4ef7740279a10f5dd4045ffde062f1233b1f0bf409905bb', 'Author': '0xd4d0a0f4d9370b7aeef9660169839ad5a96e8e01', 'Block Number': 462668, 'Timestamp': '2023-08-04T12:26:36Z'} ... ]
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

