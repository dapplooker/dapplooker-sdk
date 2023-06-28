# dapplooker-sdk

Programmatic access to the most reliable &amp; comprehensive blockchain data in Web3.

Integrate your DappLooker SDK and get popular charts data

## Installation

#### 1. Install the SDK:

```bash
npm install @dapplooker/sdk
```

#### 2. Generate API key:

- Create an account on the [DappLooker website](https://dapplooker.com/).
- After Signup, Go to the [API keys](https://dapplooker.com/user/api) page.
- ![img.png](.assets/APIPage.png)
- Click "+ API key".
- ![img.png](.assets/AddKey.png)
- Give your API key a name and Click "Generate".
- ![img.png](.assets/generateKey.png)
- Now Copy your API Key.

#### 3. Get Your Chart UUID

- Go to [DappLooker Analytics Website](https://analytics.dapplooker.com/)
- Create a new Chart or Open a Existing Created Chart
![img.png](.assets/chartPageAPI.png)
- Click "API" Button
- Get the UUID of your chart from the chart API Endpoint
![img.png](.assets/APIEndpoints.png)


#### 4. Import the SDK

Once you have imported the SDK, you can create a DapplookerSDK instance and make API calls using the API key and chart UUID that you obtained in the previous steps.

### Examples

```javascript
const DappLookerSDK = require("dapplooker-sdk");

const getChartData = async () => {
  let id = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0"; // Replace it with chart UUID you are working with
  let key = "qzusb5p3q246ip246ab6g0p8ppzb7u"; // Replace it with your API key

  let response = await DappLookerSDK.chartAPIData(id, key);
  console.log("Chart data: ", JSON.stringify(response?.data));
};

getChartData();
```

Typescript support is also available

```jsx
//Typescript
import { DappLookerSDK } from "dapplooker-sdk";
```
