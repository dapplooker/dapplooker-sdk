# DappLooker Java SDK

![DappLooker Logo](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/DLLogo1800x400.png)

Discover blockchain insights effortlessly with the DappLooker Java SDK. Access reliable Web3 data and popular Dapp charts via the DappLooker Analytics platform. Enhance your Java projects with seamless integration.


## Introduction

DappLooker Java SDK provides developers with programmatic access to comprehensive blockchain data in the Web3 environment. With this SDK, you can easily retrieve popular charts data for your decentralized applications (Dapps). The DappLooker Analytics platform offers a no-code, community-driven analytics and visualization platform for blockchain networks and Dapps.

## Features

- Access reliable and comprehensive blockchain data effortlessly.
- Retrieve popular charts data for your Dapps with ease.
- Integrate seamlessly with your Java projects.

## Prerequisites

Before using the DappLooker Java SDK, make sure you have the following installed:

- Java Development Kit (JDK) version 8 or above
- Apache Maven

## Installation

You can build and install the DappLooker Java SDK locally using Maven:

```bash
# Clone the repository
git clone https://github.com/dapplooker/dapplooker-sdk.git

# Navigate to the Java SDK directory
cd dapplooker-sdk/java

# Compile and build the SDK package
mvn clean install
```

After a successful Maven build, the SDK JAR file will be available in the local Maven repository.

## Importing the SDK

To use the DappLooker Java SDK in your project, add the following Maven dependency to your `pom.xml` file:

```xml
<dependency>
    <groupId>org.dapplooker</groupId>
    <artifactId>dapplooker</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

## Getting Started

To get started with the DappLooker Java SDK, follow these steps:

1. **Generate an API key**:

   - Create an account on the [DappLooker website](https://dapplooker.com/).
   - After signing up, navigate to the [API keys](https://dapplooker.com/user/api) page.
   - Click on `+ API Key` and provide a name for your API key.
   - Click on `Generate Key` and copy your API key for future use.

2. **Use the SDK**:

   Import the necessary classes in your Java project:

   ```java
   import org.dapplooker.DappLookerChartsAPI;
   ```

   Create an instance of the `DappLookerChartsAPI` class and make API calls using your API key:

   ```java
   // Replace 'your_api_key' with the API key you obtained
   String apiKey = "your_api_key";

   // Replace 'your_chart_uuid' with the UUID of the chart you want to retrieve data for
   String chartUUID = "your_chart_uuid";

   // Make an API call to get chart data
    Map<String,Object> data = DappLookerChartsAPI.getChartData(chartUUID, apiKey);

   // Process the response data as per your requirements
   System.out.println(data.get("response");
   ```

## Resources

- **[DappLooker Website](https://dapplooker.com/)** - To discover our product and analytics platform.
- **[DappLooker SDK Repository](https://github.com/dapplooker/dapplooker-sdk/)** - To explore the inspiration for this Java SDK.
- **[DappLooker Documentation](https://docs.dapplooker.com)** - For comprehensive documentation on the SDK and analytics platform.

## Contributing

We welcome contributions from the community to improve the DappLooker Java SDK. If you find any issues, have suggestions for new features, or want to help with bug fixes, feel free to submit a pull request or create an issue on the [GitHub repository](https://github.com/dapplooker/dapplooker-sdk/).