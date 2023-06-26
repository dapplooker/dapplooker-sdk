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
- Click "Create API key".
- Give your API key a name and Click "Generate".
- Now Copy your API Key.

![Screenshot from 2023-06-26 15-58-37](https://github.com/dapplooker/dapplooker-sdk/assets/95044988/e1184e21-8260-43fd-a998-7ec6c75e80ac)

#### 3. Import the SDK

Once you have imported the SDK, you need to create a DapplookerSDK instance and make API Calls.

#Example

```javascript
//Javascript
const DappLookerSDK = require("@dapplooker/sdk");

const getData = async () => {
  let id = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0"; // example chart UUID
  let key = "qzusb5p3q246ip246ab6g0p8ppzb7u"; // example API key that you generated

  let response = await DappLookerSDK.chartAPIData(id, key);
  console.log("chart api data:- ", response?.data);
};

getData();
```

Typescript support is also available

```jsx
//Typescript
import { DappLookerSDK } from "@dapplooker/sdk";
```
