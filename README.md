
## App Logic 
1. Created custom _app - get initial list of posts there with .getInitialProps
2. In MyApp body - created store with initStore and passed pageProps as preloadedState to configureStore
3. HOC is wrapping all pages to check if .loading  - then show spinner to inform user something is loading. 

## How to run the app 
As usual, clone it and run npm install 

## Live App
Please use Chrome as markup is not adapted for other browsers
[Deployed to Vercel](https://test-task-blog-app-next-js.vercel.app)