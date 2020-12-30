# Top Cryptocurrency Lister

[![Netlify Status](https://api.netlify.com/api/v1/badges/4a8402a1-1aa0-40e9-90c5-df2e13f75f20/deploy-status)](https://app.netlify.com/sites/romantic-varahamihira-67282c/deploys)

A Vue SPA to fetch latest data for the top 100 cyrptocurrencies using the
[Coinranking API](https://coinranking.com). Data is auto-updated every 2
minutes.

[View Demo](https://romantic-varahamihira-67282c.netlify.app/)

Requirements:

- Show a list of the top 100 cryptocurrencies using the API -
  https://api.coinranking.com ([API docs](https://docs.coinranking.com/))
  - The data is constantly changing so make sure the user sees the current data
    by updating it at reasonable intervals. No need to use websockets for
    real-time functionality.
  - Use `vuex` to store the data.
  - Use pagination to show only 10 entries at a time. The table should also be
    able to show 25, 50, or 100 entries per page if required.
  - You can use any CSS framework that you want but the app should be
    responsive.
- Each item in the list should contain:
  - Icon
  - Name (eg. Bitcoin)
  - Symbol (eg. BTC)
  - Price (eg. $1050.24) - rounded down to 2 decimal places
  - Price Change (eg. 1.23%) - rounded down to 2 decimal places

Built using:

- Vue.js
- Vuex
- TailwindCSS
- Axios

## Run project

To run the project, follow these steps:

1. Clone repo (`git clone`)
2. Install dependencies (`yarn`)
3. Run server (`yarn serve`)
