# How to run cypress with Typescript

Create a new folder for the project
Open the folder in VS code
Run the commands to get started
        `npm init -y`
        `npm install cypress@a.b.c` to install a specific version or neglect to install the most recent stable build
        `npm install typescript@a.b.c` to install a specific version

Initialize a new tsconfig.json file using the command: `npx tsc --init --types cypress --lib dom,es6`  or just    `npx tsc --init --types cypress` , then proceed to the tsconfig file to add dom and es6 unser lib
This command ensures that the types for cypress are accessible by typescript. These types depends on dom and es6, so we pass them as lib option to typescript

To launch cypress, I will be using `npx cypress open` instead of the conventional `npm cypress open` because we are running a node package command locally
