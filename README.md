# DiMS-University

A simple Digital Identity Management System implemented on Blockchain

Certainly! Below is the provided information formatted in Markdown:

````markdown
# Project Setup Instructions

**Before Starting:**
Make sure you have Node.js and npm installed.

## Front-end Setup

Navigate to the "Client" folder and use the following command:

```bash
npm run dev
```
````

This will start the client application.

## Local Blockchain Setup

### 1. Compile Contract

Run the following command to compile the contract:

```bash
npx hardhat compile
```

Note: After successful compilation, an "artifacts" folder will be created.

### 2. Run Contract

Run the deployment script:

```bash
npx hardhat run scripts/deploy.js
```

When successful, the following message will be printed on the console:

```bash
"Contract deployed at address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
```

Note: The address will be different. Take note of it; you will need it later.

### 3. Start Chain

To start the local blockchain with random dummy accounts, use the following command:

```bash
npx hardhat node
```

This will provide you with account addresses, balances, and private keys.

Note: Use any account to add on MetaMask. See how to add a Local Account on MetaMask.

### 4. Getting it Together

#### 4.1 Register Service Provider

Visit [localhost:5173/provider](http://localhost:5173/provider) to register a service provider.

#### 4.2 Register User

Visit [localhost:5173/register](http://localhost:5173/register) to register a user.

```

This Markdown file provides clear instructions for setting up the front-end, compiling and deploying the contract, starting the local blockchain, and registering a service provider and user.
```
