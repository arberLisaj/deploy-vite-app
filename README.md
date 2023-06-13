# How to deploy vite app with github pages 
### Follow these steps : 
1. In the base directory / your repo  create a folder and name it ```.github``` , inside this folder create another folder and name it ```workflows```  . And inside ```workflows```  create a file with the exact name ```deploy.yml``` . The result should look like this  ```.github/workflows/deploy.yml```

2. Inside ```deploy.yml``` use this Code: 
```yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v3
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v3
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
3. The last step is adding the repo name to  ```vite.config.js``` 
```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // [Your  GitHub repo name is required]
  base: "/deploy-vite-app/", //  the name of your repo
});
```
4. Push the changes to github.

## And we are set configuring the files next we need to give permission to github actions doing the following steps: 

1. Go to the repository that you want to deploy for example :  ***arberlisaj/deploy-vite-app***
2. Then ***settings/Actions/General/Workflow permissions*** ```Read and write permission``` should be checked . Save and then go back to your repository 
3. There should be some failed jobs so you want to ***Re-Run all jobs*** and the build and deployment will be completed succesfully 
4. To Deploy your repo / app with github pages go to  ***settings/Pages/Branch*** select ```hg-pages``` and the folder should be ```/(root)```
5. Click Save and your project is now hosted with github pages ***refresh the page and your page link will appear***
