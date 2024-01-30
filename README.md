# Express HTMX Showcase

This application is a showcase for HTMX built with Express.js. It demonstrates how HTMX works and how it can be used to build a dynamic web application.

## Architecture

The architecture of the application is designed around the concept of site-specific controllers. Each site has its own controller with a base path. The different resources for each site are then accessed via resource paths.
Keep in mind, that the resources can return HTML fragments, as only part of the website gets updated.

Folder structure:

```
.
├── controllers
│   ├── house.controller.tsx
├── components
│   ├── card.component.tsx
├── services
│   ├── house.service.ts
├── public
│   ├── css
│   │   ├── app.css
├── index.tsx
```

The index.tsx file is the entry point of the application. It sets up the Express.js server and registers the controllers.
It holds as well the base HTML structure of the application and the layout of the website.

In the base HTML structure, we load the HTMX library, tailwind CDN and the CSS file. The CSS file contains the styling of the application.
On the base path, this need to be delivered to allow the user to a reload of the page.

## Getting Started

To start the application, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate into the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`
4. Start the server: `npm dev`

Now, you can visit `http://localhost:3000` to view the application.

### Restriction

npm start only works on linux and may.
As we copy over the public folder to the dist folder, we need to use the cp command. This command is not available on windows.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
