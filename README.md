# Glory Carrier Ministries International — The Embassy of Glory

A responsive React + Vite church website frontend using plain JavaScript function components and CSS Modules.

## Features
- Responsive sticky navigation with mobile menu
- Home hero, welcome, vision/mission/values, ministry cards, scripture banner
- Sample events with registration-interest modal
- Sermon/message cards with demo information modal
- First-visit form, prayer request form, contact form
- Giving amount selector and giving-information flow (payment processor not connected)
- Newsletter form and toast feedback
- Supplied church logo in header and footer

## Run locally
1. Install Node.js (LTS).
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL Vite prints.
4. Run `npm run build` to create a production build.

## Important setup notes
This is a fully interactive frontend demo, not yet connected to a backend. Contact, prayer, event, visit, and newsletter forms show frontend confirmation only. Giving is not processed; connect a payment provider (for example, a church-approved payment gateway) before accepting donations. Replace sample event dates, location details, sermon media, and social links with verified church information.

All React components use JavaScript. Styling is split into CSS Modules, with only a small global stylesheet for design tokens and common utilities.
