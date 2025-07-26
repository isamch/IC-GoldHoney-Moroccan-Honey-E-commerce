# IC GoldHoney – Moroccan Honey E-commerce

Welcome to **IC GoldHoney**, your trusted source for premium Moroccan honey. Our e-commerce platform offers a seamless shopping experience for discovering and purchasing authentic Moroccan honey varieties.

## What Can Users Do?

- **Browse Products:** Explore a curated collection of Moroccan honey varieties, each with detailed descriptions, images, and prices.
- **Product Details:** View in-depth information about each honey type, including origin, weight, and customer reviews.
- **Add to Cart:** Seamlessly add products to your shopping cart, adjust quantities, and remove items.
- **Favourites:** Save your favorite products for quick access and future purchases.
- **Apply Promo Codes:** Use discount codes at checkout for special offers.
- **Customer Reviews:** Read real customer feedback and ratings for each product.
- **FAQ & Support:** Find answers to common questions and contact customer support directly.
- **Responsive Design:** Enjoy a smooth experience on mobile, tablet, and desktop.

## Main Features

- **Modern UI:** Clean, accessible, and visually appealing interface.
- **Cart & Favourites:** Persistent cart and favourites using browser storage.
- **Filtering & Sorting:** Filter products by price and sort by name or price.
- **Contact & Live Chat:** Contact form and live chat for customer support.
- **Sustainability:** Information about sustainable sourcing and local Moroccan beekeepers.
- **Order Summary:** Clear breakdown of subtotal, discounts, shipping, and total.

## Technologies Used

- **Framework:** Next.js (React-based)
- **Styling:** Tailwind CSS (with custom configuration)
- **UI Components:** Radix UI, custom components in `/components/ui/`
- **State Management:** React hooks, Context API
- **Type Checking:** TypeScript
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Charts:** Recharts (for any analytics or stats)
- **Carousel:** Embla Carousel
- **Other:** PostCSS, Tailwind CSS Animate

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) (project supports both)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/isamch/IC-GoldHoney-Moroccan-Honey-E-commerce.git
   cd honeymaroc-ecommerce
   ```

2. **Install dependencies:**
   - With npm:
     ```bash
     npm install
     ```
   - Or with pnpm:
     ```bash
     pnpm install
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── app/                # Main app pages (shop, cart, about, contact, faq, reviews, etc.)
│   ├── shop/           # Product listing and details
│   ├── cart/           # Shopping cart
│   ├── favourite/      # Favourites page
│   ├── about/          # About the business
│   ├── contact/        # Contact form and info
│   ├── faq/            # Frequently asked questions
│   ├── reviews/        # Customer reviews
│   ├── components/     # Page-specific components
│   ├── context/        # React Context providers (e.g., CartProvider)
│   └── layout.tsx      # Global layout (Navbar, Footer, etc.)
├── components/         # Reusable UI components (buttons, cards, forms, etc.)
│   └── ui/             # Atomic UI elements (Radix-based and custom)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, icons)
├── styles/             # Global styles (Tailwind, CSS)
├── package.json        # Project metadata and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── ...
```

## Available Scripts

- `npm run dev` / `pnpm dev` – Start the development server
- `npm run build` / `pnpm build` – Build for production
- `npm run start` / `pnpm start` – Start the production server
- `npm run lint` – Lint the codebase

## Developer Notes

- **Responsive Design:** All components are mobile-friendly and adapt to different screen sizes.
- **Code Style:** Follows standard ESLint/Prettier rules for clean, readable code.
- **TypeScript:** Type safety is enforced throughout the project.
- **Custom UI:** Many UI elements are built with Radix UI and Tailwind CSS for accessibility and flexibility.
- **Local Storage:** Cart and favourites are saved in the browser for a persistent user experience.
- **Error Handling:** User-friendly error messages and validation for forms.
- **Sustainability:** The app highlights sustainable sourcing and supports local Moroccan beekeepers.

## FAQ & Support

- Visit the [FAQ page](http://localhost:3000/faq) for common questions.
- Use the [Contact page](http://localhost:3000/contact) for support or business inquiries.

## Credits & Assets

- Product and brand images are in `/public/images/`.
- Icons from [Lucide](https://lucide.dev/).
- UI components inspired by [Radix UI](https://www.radix-ui.com/).

## License

IC GoldHoney is a registered trademark. All rights reserved. Unauthorized reproduction or distribution is prohibited.