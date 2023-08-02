# DappLooker Python SDK

![DappLooker Logo](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/DLLogo1800x400.png)

Discover blockchain insights effortlessly with the DappLooker Python SDK. Access reliable Web3 data and popular Dapp charts via the DappLooker Analytics platform. Enhance your Python projects with seamless integration.


[![Downloads](https://pepy.tech/badge/dapplooker)](https://pepy.tech/project/dapplooker)


## Introduction

DappLooker Python SDK provides developers with programmatic access to comprehensive blockchain data in the Web3 environment. With this SDK, you can easily retrieve popular charts data for your decentralized applications (Dapps). The DappLooker Analytics platform offers a no-code, community-driven analytics and visualization platform for blockchain networks and Dapps.

## Features

- Access reliable and comprehensive blockchain data effortlessly.
- Retrieve popular charts data for your Dapps with ease.
- Integrate seamlessly with your Python projects.

## Installation

You can install the DappLooker Python SDK using `pip`:

```bash
pip install dapplooker
```

## Getting Started

To get started with the DappLooker Python SDK, follow these steps:

1. **Generate an API key**:

   - Create an account on the [DappLooker website](https://dapplooker.com/).
   - After signing up, navigate to the [API keys](https://dapplooker.com/user/api) page.
   - Click on `+ API Key` and provide a name for your API key.
   - Click on `Generate Key` and copy your API key for future use.

2. **Import the SDK**:

   Import the DappLooker SDK in your Python project:

   ```python
   from dapplooker import DappLookerChartsAPI
   ```

3. **Access Blockchain Data**:

   With the SDK imported, create an instance of the `DappLookerChartsAPI` class and make API calls using your API key.

   ```python
   # Replace 'your_api_key' with the API key you obtained
   api_key = 'your_api_key'
   
   # Replace 'your_chart_uuid' with the UUID of the chart you want to retrieve data for
   chart_uuid = 'your_chart_uuid'
   
   # Make an API call to get chart data
   response = DappLookerChartsAPI.get_chart_data(chart_uuid, api_key)
   
   # Process the response data as per your requirements
   print(response)
   ```

## Resources

- **[DappLooker Website](https://dapplooker.com/)** - To discover our product and analytics platform.
- **[DappLooker SDK Repository](https://github.com/dapplooker/dapplooker-sdk/)** - To explore the inspiration for this Python SDK.
- **[DappLooker Documentation](https://docs.dapplooker.com)** - For comprehensive documentation on the SDK and analytics platform.

## Contributing

We welcome contributions from the community to improve the DappLooker Python SDK. If you find any issues, have suggestions for new features, or want to help with bug fixes, feel free to submit a pull request or create an issue on the [GitHub repository](https://github.com/dapplooker/dapplooker-sdk/).
