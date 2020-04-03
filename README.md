# ShopBox App

## ShopBox Overview
This is a complete redesign of an e-commerce platform to modernize their webpage. The application was built by a four person team and adhered to a business requirements document. The microservices of the application included: Product Overview, Related Items & Add to Outfit, Question & Answers, and Reviews. Each individual on the team took ownership of one microservice.

![Shop-Box-Overview](/dist/images/Shopbox-Complete.gif)

## Components

#### Product Overview
The Product Overview widget allows the user to browse through different styles of the product and add them to the cart. Using the custom image carousel, the user can browse through all of the images for the selected style. The user can also click to enlarge an image and browse the images using the expanded view. From this view, the image can be further expanded to check out the fine details for the images. Using the form, the user can select a size and quantity based on the available SKUs from the api.

![product-overview](/dist/images/product-overview.gif)
#### Related Items

#### Question & Answers
The Questions & Answers microservice allows asking and answering of questions for the product selected. Users can add photos to their answers and there is form validation for both submitting answers and questions. A live-search algorithm was implemented and searches through answers when there are more than 3 letters typed in the search bar.

![q-and-a](/dist/images/q-and-a.gif)
#### Ratings & Reviews
The Ratings & Reviews microservice grants the user the ability to read posted reviews, see product ratings and post reviews and photos for any product. Posted reviews are displayed within the reviews section 2 at a time. See more reviews by clicking on the New reviews are subject to form validation before sending a POST request to the API.

Reviews can be filtered based on the below criteria:

- Ratings
Selecting a rating filters the reviews that match the rating clicked on. These selections can be stacked by clicking on multiple ratings. Rating filters can be removed by clicking on the rating again or clicking the clear filters button.

- Sort options
Reviews for the selected product can be sorted by relevance, newest and helpfulness.

- Search
A search algorithm has been implemented to allow users to search through the reviews for a particular product. Typing 3 or more letters filters the list of reviews that matches the searched upon criteria.
 
## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

To start the server in production:

```sh
npm start
```

To run Jest unit tests:

```sh
npm run test
```

## Frameworks

```sh
React with React Hooks
Redux
Material UI
```

## Testing

```sh
Jest  
Puppeteer
```

## Running

Go to http://localhost:3000/ 

## Credits

Made with [createapp.dev](https://createapp.dev/)


