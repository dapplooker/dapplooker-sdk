<h1 align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://d2yxqfr8upg55w.cloudfront.net/assets/svg/dapplooker-dark-logo.svg">
        <source media="(prefers-color-scheme: dark)" srcset="https://d2yxqfr8upg55w.cloudfront.net/assets/img/DL_LOGO_dark_theme.png">
        <img width='60%' height='60%' src="https://d2yxqfr8upg55w.cloudfront.net/assets/svg/dapplooker-dark-logo.svg" alt="DL logo">
    </picture>
</h1>

<p align="center">
  <i align="center" style="font-size:0.9em;" >Get free blockchain analytics for Smart Contract, Subgraph, Defi, NFT, and Gaming dApps. Analyze and query on-chain and off-chain web3 data from Ethereum, Polygon, TheGraph, Celo, Polkadot, NEAR with our no-code dashboard..🚀</i>
</p>

<h4 align="center">

  <a href="https://discord.com/invite/dapplooker">
    <img src="https://d2yxqfr8upg55w.cloudfront.net/assets/img/DL_background.png">
  </a>
  </a>
</h4>

<h1>Introduction</h1>

<h3> What is DappLooker?</h3>
<p style="font-size:1em;">
DappLooker is a no-code multi-chain community-driven analytics and visualization platform for blockchain networks and Dapps. Users can run Visual SQL queries on blockchain data, using easy to use simple editor. Charts and dashboards can be forked, edited, and shared with the community.

DappLooker aims to empower everyone to easily understand blockchain data, do analytics and easily build beautiful charts and dashboards. You can build and share key metrics for Defi, NFT, gaming, and multi-chain protocols.
</p>

### What We Do ?
DappLooker is a Web3 analytics platform that is dedicated to making blockchain analytics accessible and simplified for everyone. Our goal is to provide a seamless and user-friendly experience With our intuitive, no-code platform, you can effortlessly analyze blockchain networks and Dapps. Our No-code interface allows you to create stunning charts and dashboards, enabling you to visualize and understand complex blockchain data without the need for coding skills.

<p style="font-weight:600;">Welcome to the GitHub profile for DappLooker</p>

📚 Read our comprehensive [documentation](https://docs.dapplooker.com) to learn how to start building with DappLooker.


# DappLooker SDK
The dapplooker-sdk provides developers with programmatic access to reliable and comprehensive blockchain data in the Web3 environment. By integrating the DappLooker SDK, you can easily retrieve popular charts data for your decentralized applications (Dapps).

> #### Node version: >=14

## Installation
To start using the DappLooker SDK, follow these steps:

#### 1. Install the SDK:
```bash
npm install dapplooker-sdk
```

#### 2. Generate an API key:

- Create an account on the [DappLooker website](https://dapplooker.com/).
- After signing up, navigate to the [API keys](https://dapplooker.com/user/api) page.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/APIPageHighlighted.png)
- Click on `+ API Key`.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/AddKey.png)
- Provide a name for your API key and click on `Generate Key`.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/generateKey.png)
- Copy your API key for future use.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/copyAPIKey.png)

#### 3. Get Your Chart UUID

- Visit the [DappLooker Analytics Website](https://analytics.dapplooker.com/)
- Create a new Chart or Open a Existing Created Chart
  ![ChartImage.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/ChartImage.png)
- Click on the `API` Button
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/chartAPIButton.png)
- Get the UUID of your chart from Endpoint of the chart API.
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/chartUUID.png)


#### 4. Import the SDK

Once you have installed the SDK, import it into your project. With the imported SDK, create an instance of the DappLookerChartsAPI and make API calls using the API key and chart UUID obtained in the previous steps.

### Examples
Here's an example of how you can use the DappLooker SDK:

```javascript
//Javascript
const DappLookerChartsAPI = require("dapplooker-sdk");

async function getChartData() => {
  let chartUUID = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0"; // Replace it with chart UUID you are working with
  let apiKey = "qzusb5p3q246ip246ab6g0p8ppzb7u"; // Replace it with your API key
  let outputFormat = 'json'; // This is a optional argument, valid value is `json`.
  let filterParams = {}; 
  
  let response = await DappLookerChartsAPI.getChartData(chartUUID, apiKey, outputFormat, filterParams);
  console.log("API Response Data: ", JSON.stringify(response));
};

getChartData();


> Output (With outputFormat value as json):
/*[
{"Day Timestamp":"2023-02-26","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0},
{"Day Timestamp":"2023-03-05","Sum of Attestation Requested Count":16.0,"Sum of Attestation Completed Count":2.0,"Success Percentage":12.5,"Failure Percentage":87.5},
{"Day Timestamp":"2023-05-14","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0}
]*/

> Output (Without outputFormat):
/*{
  "rows": [["2023-02-26T00:00:00Z"]],
  "cols": [{
      "description": null,
      "semantic_type": null,
      "table_id": 872
    }],
  "insights": [{ "previous-value": 9}],
  "results_timezone": "GMT"
}*/
```

The DappLooker SDK also provides TypeScript support for developers who prefer type-checking and enhanced code editor features.

```jsx
//Typescript
import { DappLookerChartsAPI } from "dapplooker-sdk";

const getChartData = async () => {
  let chartUUID = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0"; // Replace it with chart UUID you are working with
  let apiKey = "qzusb5p3q246ip246ab6g0p8ppzb7u"; // Replace it with your API key
  let outputFormat = 'json'; // This is a optional argument, valid value is `json`.
  let filterParams = {}; 
  
  let response = await DappLookerChartsAPI.getChartData(chartUUID, apiKey, outputFormat, filterParams);
  console.log("API Response Data: ", JSON.stringify(response));
};

getChartData();

> Output (With outputFormat value as json):
/*[
{"Day Timestamp":"2023-02-26","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0},
{"Day Timestamp":"2023-03-05","Sum of Attestation Requested Count":16.0,"Sum of Attestation Completed Count":2.0,"Success Percentage":12.5,"Failure Percentage":87.5},
{"Day Timestamp":"2023-05-14","Sum of Attestation Requested Count":3.0,"Sum of Attestation Completed Count":0.0,"Success Percentage":0.0,"Failure Percentage":100.0}
]*/

> Output (Without outputFormat):
/*{
  "rows": [["2023-02-26T00:00:00Z"]],
  "cols": [{
      "description": null,
      "semantic_type": null,
      "table_id": 872
    }],
  "insights": [{ "previous-value": 9}],
  "results_timezone": "GMT"
}*/
```

Here's an example to get the data from AI studio of DappLooker

```jsx
//Typescript
import { DappLookerNlqAPI } from "dapplooker-sdk";

async function getResults(): Promise<any> {
  let apiKey = "d6fbd65055ef4510807fa4eb1662792b"
  let response = await DappLookerNlqAPI.getNlqData(apiKey, 'What is the current gas price per hour on the Ethereum network?', 'ethereum');
  console.log("API Response Data: ", JSON.stringify(response));
};

getResults();

> Output :
/*
API Response Data:  {"success":true,"data":{"msg":"Visualization Result","vizualizationData":{"rows":[["2024-10-14T10:00:00Z",16,12],["2024-10-14T11:00:00Z",31,20],["2024-10-14T12:00:00Z",42,34],["2024-10-14T13:00:00Z",41,32],["2024-10-14T14:00:00Z",50,43],["2024-10-14T15:00:00Z",46,39],["2024-10-14T16:00:00Z",35,30],["2024-10-14T17:00:00Z",39,29],["2024-10-14T18:00:00Z",32,25],["2024-10-14T19:00:00Z",28,22],["2024-10-14T20:00:00Z",24,19],["2024-10-14T21:00:00Z",21,16],["2024-10-14T22:00:00Z",18,14],["2024-10-14T23:00:00Z",17,13],["2024-10-15T00:00:00Z",17,15],["2024-10-15T01:00:00Z",19,14],["2024-10-15T02:00:00Z",18,14],["2024-10-15T03:00:00Z",17,14],["2024-10-15T04:00:00Z",15,12],["2024-10-15T05:00:00Z",14,12],["2024-10-15T06:00:00Z",13,11],["2024-10-15T07:00:00Z",15,12],["2024-10-15T08:00:00Z",16,13],["2024-10-15T09:00:00Z",18,14],["2024-10-15T10:00:00Z",15,12]],"cols":[{"display_name":"Hour","source":"native","field_ref":["field","Hour",{"base-type":"type/DateTime"}],"name":"Hour","base_type":"type/DateTime","effective_type":"type/DateTime"},{"display_name":"Average","source":"native","field_ref":["field","Average",{"base-type":"type/Float"}],"name":"Average","base_type":"type/Float","effective_type":"type/Float"},{"display_name":"Low","source":"native","field_ref":["field","Low",{"base-type":"type/Float"}],"name":"Low","base_type":"type/Float","effective_type":"type/Float"}],"native_form":{"query":"SELECT \n    toStartOfHour(timestamp) AS Hour,\n    ROUND(avg(gas_price) / power(10, 9)) AS Average,\n    ROUND(quantile(0.25)(gas_price) / power(10, 9)) AS Low\nFROM \n    ethereum.transactions\nWHERE \n    timestamp >= now() - INTERVAL 1 DAY\n    AND timestamp < now()\nGROUP BY \n    Hour\nORDER BY \n    Hour;","params":null},"results_timezone":"GMT","results_metadata":{"columns":[{"display_name":"Hour","field_ref":["field","Hour",{"base-type":"type/DateTime"}],"name":"Hour","base_type":"type/DateTime","effective_type":"type/DateTime","semantic_type":null,"fingerprint":{"global":{"distinct-count":25,"nil%":0},"type":{"type/DateTime":{"earliest":"2024-10-14T10:00:00Z","latest":"2024-10-15T10:00:00Z"}}}},{"display_name":"Average","field_ref":["field","Average",{"base-type":"type/Float"}],"name":"Average","base_type":"type/Float","effective_type":"type/Float","semantic_type":null,"fingerprint":{"global":{"distinct-count":18,"nil%":0},"type":{"type/Number":{"min":13,"q1":16.121320343559642,"q3":32.75,"max":50,"sd":11.397075648311427,"avg":24.68}}}},{"display_name":"Low","field_ref":["field","Low",{"base-type":"type/Float"}],"name":"Low","base_type":"type/Float","effective_type":"type/Float","semantic_type":null,"fingerprint":{"global":{"distinct-count":16,"nil%":0},"type":{"type/Number":{"min":11,"q1":12.694841350859116,"q3":26,"max":43,"sd":9.481912605939092,"avg":19.64}}}}]},"insights":[{"previous-value":18,"unit":"hour","offset":554173.141530699,"last-change":-0.16666666666666666,"col":"Average","slope":-27.692307691919787,"last-value":15,"best-fit":["+",5488330.3818478165,["*",-554148.5544930139,["log","x"]]]},{"previous-value":14,"unit":"hour","offset":429669.413840075,"last-change":-0.14285714285714285,"col":"Low","slope":-21.470769230465464,"last-value":12,"best-fit":["+",4255285.115637468,["*",-429649.75721279817,["log","x"]]]}],"questionId":1370,"answerId":1152,"entityId":7193,"entityType":"CHART"},"questionId":1370,"extraData":{"userId":121873,"apiKeyId":88,"apiType":3,"date":"2024-10-15T00:00:00.000Z"},"nlqLogId":49}}
*/
```

By integrating the dapplooker-sdk into your Dapp, you can easily access and utilize the most reliable and comprehensive blockchain data in the Web3 environment. Start exploring the possibilities and enhancing your decentralized applications with DappLooker SDK today!

## Resources
- **[Website](https://dapplooker.com/)** To checkout our Product.
- **[Docs](https://docs.dapplooker.com)** For comprehensive documentation.
- **[Medium](https://dapplooker.medium.com/)** To learn more about our partners, new launches, etc.
- **[GitHub](https://github.com/dapplooker/)** for source code, project board, issues, and pull requests.
- **[Youtube](https://www.youtube.com/channel/UC1KJmtb3UhnWSN_sDv71_fg)** Subscribe to our YouTube channel for video tutorials, demos, and informative content.

## Contributing

We invite you to become a valued member of the DappLooker community, an open-source project committed to transparency in our development process. We appreciate any contributions you can make, whether it's helping us identify and fix bugs, suggesting new features, improving our documentation, or spreading the word about DappLooker.

If you come across any errors or issues while using DappLooker, please take a moment to create a bug report. Your feedback is invaluable in improving the reliability. We also value the importance of comprehensive documentation. If you find any gaps or areas that need improvement in our documentation, please don't hesitate, Your suggestions will enable us to provide better resources for our users.

If you're unsure where to begin or need assistance, we invite you to join our Discord community. We'll be more than happy to help you get started on your journey with DappLooker.

## Social Links

Follow us to stay updated with the latest news and updates!

<a href="https://dapplooker.com/community" target="_blank">Discord</a> |
<a href="https://twitter.com/dapplooker" target="_blank">Twitter</a> |
<a href="https://t.me/dapplooker" target="_blank">Telegram</a> |
<a href="https://www.linkedin.com/company/dapplooker/" target="_blank">Linkedin</a>

