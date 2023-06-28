<h1 align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/DLLogo1800x400.png">
        <source media="(prefers-color-scheme: dark)" srcset="https://d2yxqfr8upg55w.cloudfront.net/assets/img/DL_LOGO_dark_theme.png">
        <img width='60%' height='60%' src="https://d2yxqfr8upg55w.cloudfront.net/assets/img/DL_logo_1800 x 400.png" alt="DL logo">
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

📚 Read our comprehensive [documentation](https://dapplooker.notion.site/dapplooker/DappLooker-Documentation-f3113336bdce4ecea688fa0ba69cec98) to learn how to start building with DappLooker.


# DappLooker SDK
The dapplooker-sdk provides developers with programmatic access to reliable and comprehensive blockchain data in the Web3 environment. By integrating the DappLooker SDK, you can easily retrieve popular charts data for your decentralized applications (Dapps).

### Node version: >=14

## Installation
To start using the DappLooker SDK, follow these steps:

#### 1. Install the SDK:
```bash
npm install dapplooker-sdk
```

#### 2. Generate an API key:

- Create an account on the [DappLooker website](https://dapplooker.com/).
- After signing up, navigate to the [API keys](https://dapplooker.com/user/api) page.
  
  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/APIPage.png)
- Click on `+ API Key`.

  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/AddKey.png)
- Provide a name for your API key and click on `Generate Key`.

  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/generateKey.png)
- Copy your API key for future use.

  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/copyAPIKey.png)

#### 3. Get Your Chart UUID

- Visit the [DappLooker Analytics Website](https://analytics.dapplooker.com/)
- Create a new Chart or Open a Existing Created Chart
  ![Screenshot from 2023-06-28 21-37-55](https://github.com/dapplooker/dapplooker-sdk/assets/95044988/49b73bbc-da18-4bfd-8116-4b83679d4d7d)

- Click on the `API` Button

  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/chartPageAPI.png)
- Get the UUID of your chart from Endpoint of the chart API.

  ![img.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/APIEndpoints.png)


#### 4. Import the SDK

Once you have installed the SDK, import it into your project. With the imported SDK, create an instance of the DappLookerChartsAPI and make API calls using the API key and chart UUID obtained in the previous steps.

### Examples
Here's an example of how you can use the DappLooker SDK:

```javascript
const DappLookerChartsAPI = require("dapplooker-sdk");

async function getChartData() => {
  let chartUUID = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0"; // Replace it with chart UUID you are working with
  let apiKey = "qzusb5p3q246ip246ab6g0p8ppzb7u"; // Replace it with your API key

  let response = await DappLookerChartsAPI.getChartData(chartUUID, apiKey);
  console.log("Chart API Data: ", JSON.stringify(response));
};

getChartData();
```

The DappLooker SDK also provides TypeScript support for developers who prefer type-checking and enhanced code editor features.

```jsx
//Typescript
import { DappLookerSDK } from "dapplooker-sdk";

const getChartData = async () => {
  let chartUUID = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0"; // Replace it with chart UUID you are working with
  let apiKey = "qzusb5p3q246ip246ab6g0p8ppzb7u"; // Replace it with your API key

  let response = await DappLookerChartsAPI.getChartData(chartUUID, apiKey);
  console.log("Chart API Data: ", JSON.stringify(response));
};

getChartData();
```
By integrating the dapplooker-sdk into your Dapp, you can easily access and utilize the most reliable and comprehensive blockchain data in the Web3 environment. Start exploring the possibilities and enhancing your decentralized applications with DappLooker SDK today!

## Resources
- **[Website](https://dapplooker.com/)** To checkout our Product.
- **[Docs](https://dapplooker.notion.site/dapplooker/DappLooker-Documentation-f3113336bdce4ecea688fa0ba69cec98)** For comprehensive documentation.
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

