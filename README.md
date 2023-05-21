# FusionZk

Combining 1inch fusion and RailGun zk privacy to enable swaps at best rates that respect personal data.

# fusion-zk project description

Fusion zk

### Enabling private swaps at the best rates with fusion-zk
On polygon Blockchain, with gasless features, fusion-zk is the step forward to connect DeFi values of open finance and Cyberphunk ideology of human right to Privacy.

Danny Ba - Dannprinc#2842 - @dannyba10

Repository:
[https://github.com/zkinch/FusionZk](https://github.com/zkinch/FusionZk)

PowerPoint:

[https://docs.google.com/presentation/d/18F4v7dttay4icrk-lXDBMCEBKE6EgpOiWNz3XInLmv4/edit?usp=sharing](https://docs.google.com/presentation/d/18F4v7dttay4icrk-lXDBMCEBKE6EgpOiWNz3XInLmv4/edit?usp=sharing)

PriFi - Private Finance revolution

Why Privacy?

It relates to an individual’s ability to determine for themselves when, how, and for what purpose their personal information is handled by others.

Protecting privacy is key to ensuring human dignity, safety and self-determination. It allows individuals freely develop their own personality.

Why DeFi?

DeFi opens up financial services to anyone with an internet connection, regardless of their geographic location or socio-economic background. Breaking gaps between individuals, it also eliminates the need for intermediaries and middlemans

RailGun and 1inch: the meeting of two booming ecosystems

Enabling the access of 1inch fusion liquidity for Railway wallet users. 1inch fusions is the gate to almost all DeFi liquidity; with more than [7 billions $ of asset traded](https://dune.com/1inch/fusion) and more than 230’000 unique users.
RailGun with almost [300 millions $](https://dune.com/railgun_project/railgun-dao) in volume is fast growing. 

Enabling 1inch fusion swaps enable a lot of opportunity and has the goal to increase the total number of Swaps today (21 may 2023) at [619](https://dune.com/railgun_project/railgun-dao) since swap initiations. 

### Technical Description:
We first install the quickstart file in our coding environnement.

In the frontend/components/WalletRailGunts : 

We initiate the Railgun Wallet that would be then use in the backend file

In the backend/controller file :

We create the different instance that will use RailGun and integrate 1inch. 

1inch-sdk-fetch.ts main functions : 

- oneInchSubdomain ( here we can focus on Polygon)
- create1inchSDK : generate the sdk for interacting with 1inch Fusion

1inch-sdk-quote.ts :

Here we’ll have the class that will interact with the sdk and have the types that would be used in the Steps and the recipe. 
- supportsNetwork : we're calling the fetch file to get the right network
- GetSwapOrder : this function will place the order via the RailGun and 1inch DSK

oneInch-place-order-step.ts

oneInch-swap-recipe.ts


### Further implementation:
Introducing: Secret strategies for DeFi

Transform yourself in an Asset Manager, with private strategies elaborated with your unique skills 

- Outperform the market securely, with long term strategies and without competition pression or any possible copy trading
- Monetize your strategies, manage asset of others or sell your strategies

By incorporating these private strategies into the fusion-zk ecosystem, we aim to create a trustless environment where individuals can freely engage in trading without fear of their strategies being copied or compromised. We believe that by providing secure and confidential trading capabilities, we can promote trust, innovation, and further adoption of decentralized finance.

**Usecase: Authenticating Profitable Strategies without Disclosing Trade Amounts:** 
Introducing Proof of Performance: To provide transparency and authenticate the profitability of trading strategies on the ZK-inch platform, we introduce a unique authentication method called Sismo Badges. These badges offer a verifiable proof of successful strategies without revealing sensitive information such as the actual amount of money traded.

****Possible integration of Sismo Badges****

*Enjoying DeFi potential in a private way* 🦄🔫

### How to use fusion-zk

A frictionless, intuitive system, quick to use: 

1- Open dapp

2-  Connect your Railgun wallet 

3- Launch a trade

4- Enjoy

### Benefits from using fusion-zk

1- MEV protection

2- No gas fees

3- Privacy built-in

4- Connect to all DeFi liquidity 

5- Smooth experience

__

Resources : 

- 1-inch market [https://www.reddit.com/r/1inch/comments/1092s8n/more_than_two_weeks_have_passed_since_the_fusion/](https://www.reddit.com/r/1inch/comments/1092s8n/more_than_two_weeks_have_passed_since_the_fusion/)
[https://dune.com/1inch/fusion](https://dune.com/1inch/fusion)
- Railgun market
[https://dune.com/railgun_project/railgun-dao](https://dune.com/railgun_project/railgun-dao)
