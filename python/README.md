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
   api_key = 'xxxxxxxxxxx'
   
   # Replace 'your_chart_uuid' with the UUID of the chart you want to retrieve data for
   chart_uuid = '0be3ba16-3510-400c-9e9a-95b1a2bf8d97'
   
   # Make an API call to get chart data
   response = DappLookerChartsAPI.get_chart_data(chart_uuid, api_key, 'json')
   
   # Process the response data as per your requirements
   print(response)
   """
   [
      {
         "Block Hash":"0xea5498d905a046f89d193f604037edea42752d889a423e39b72cc08bcff1792a",
         "Author":"0x6488cfc95016804e23fd6fd370d8cc1a975d4178",
         "Block Number":462671,
         "Timestamp":"2023-08-04T12:27:12Z"
      },
      {
         "Block Hash":"0x4a72ce8fd915a8a392a2e8680d47684a8e4438fc49b13a5d13c35ebf6539ff24",
         "Author":"0x8364134c2856e229fe67d2bbc10c7a3575935b80",
         "Block Number":462670,
         "Timestamp":"2023-08-04T12:27:00Z"
      },
      {
         "Block Hash":"0xcdc22e1ba5e15f546913a141f85bb187d17ff47c1d0a666592b226feda3a8054",
         "Author":"0x174eed974591bdfa99cf0036f6de03bc08b943fb",
         "Block Number":462669,
         "Timestamp":"2023-08-04T12:26:48Z"
      },
      {
         "Block Hash":"0xee58ef526755158ef4ef7740279a10f5dd4045ffde062f1233b1f0bf409905bb",
         "Author":"0xd4d0a0f4d9370b7aeef9660169839ad5a96e8e01",
         "Block Number":462668,
         "Timestamp":"2023-08-04T12:26:36Z"
      }
   ]
   """
   ```

## Resources

- **[DappLooker Website](https://dapplooker.com/)** - To discover our product and analytics platform.
- **[DappLooker SDK Repository](https://github.com/dapplooker/dapplooker-sdk/)** - To explore the inspiration for this Python SDK.
- **[DappLooker Documentation](https://docs.dapplooker.com)** - For comprehensive documentation on the SDK and analytics platform.

## Contributing

We welcome contributions from the community to improve the DappLooker Python SDK. If you find any issues, have suggestions for new features, or want to help with bug fixes, feel free to submit a pull request or create an issue on the [GitHub repository](https://github.com/dapplooker/dapplooker-sdk/).
