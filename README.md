# Bookie - E-commerce Website for Selling Books

Bookie is an E-commerce website designed to provide a seamless and user-friendly experience for buying and selling books online. It is built using TypeScript, React/Next.js, Redux, Firebase, SASS, Framer Motion, and Sanity. The project incorporates dynamic features, a headless CMS, and Google Analytics integration. Additionally, Bookie is optimized for mobile devices to ensure an optimal browsing experience.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
Bookie offers the following features:
- **Book Catalog**: Browse and search for books using different criteria, such as title, author, genre, or ISBN.
- **User Accounts**: Create and manage user accounts, including registration, login, and password reset.
- **Shopping Cart**: Add books to a shopping cart, view the cart contents, and proceed to checkout.
- **Order Management**: Place orders, view order history, and track order status.
- **Payment Integration**: Securely process payments for book purchases.
- **Admin Panel**: Access an administrative interface to manage books, users, and orders.
- **Headless CMS**: Utilize Sanity as a headless CMS for content management and easy updates.
- **Google Analytics**: Gather valuable insights into user behavior and website performance.
- **Mobile Responsive**: Enjoy a consistent and optimal browsing experience across various mobile devices.

## Technologies Used
The technologies employed in the development of Bookie are as follows:
- TypeScript
- React/Next.js
- Redux
- Firebase
- SASS
- Framer Motion
- Sanity

## Getting Started
To get started with Bookie, follow the instructions below.

## Installation
1. Clone the repository: `git clone https://github.com/your-username/bookie.git`
2. Change into the project directory: `cd bookie`
3. Install the dependencies: `npm install`

## Configuration
To configure Bookie, you need to provide the necessary environment variables. Create a `.env` file in the root directory of the project and add the following variables:
```
# Firebase configuration
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_DATABASE_URL=your_firebase_database_url
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id

# Sanity configuration
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=your_sanity_dataset

# Google Analytics configuration
GA_TRACKING_ID=your_google_analytics_tracking_id
```

## Usage
To start the development server, run the following command:
```
npm run dev
```
This will compile the TypeScript code, bundle the React components, and start the server. You can access the Bookie application in your browser at `http://localhost:3000`.

## Contributing
Contributions to Bookie are welcome! If you encounter any bugs, have feature requests, or want to contribute code, please feel free to open an issue or submit a pull request. Please follow the existing coding style and ensure that your changes are well-tested.

## License
Bookie is released under the [MIT License](https://opensource.org/licenses/MIT). You can find the full text of the license in the [LICENSE](https://github.com/your-username/bookie/blob/main/LICENSE) file.

---

We hope you find Bookie helpful and enjoy using it for your E-commerce book business. If you have any questions or need assistance, please don't hesitate to reach out to our support team.

Happy selling and happy reading!
