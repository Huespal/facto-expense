# Facto Expense

Facto Expense Frontend application, a multi-tenant expense management system.
It handles authentication, lists expenses per user and tenant and allows to manage them as an administrator.
This application is intended to connect with an external API ([facto-expense-api](https://github.com/Huespal/facto-expense-api)).


## Instructions

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To run this application locally execute the following command on a terminal in the project's root:

```bash
npm run dev
```

You can open [http://localhost:3000](http://localhost:3000) with a browser to see the result.

The application connects to the external API from the [facto-expense-api](https://github.com/Huespal/facto-expense-api) project. So be sure the API is up and running to allow connections.

Tests can be run by executing the following command on a terminal in the project's root:

```bash
npm run test
npm run test:watch // to start the watcher
```

There are also these commands available:

```bash
npm run build // prepares an application build
npm run start // starts the application in production mode
npm run lint // lints code
```
They are not necessary to just run the application locally, but useful too.


## Approach explanation

The approach followed to generate this application is explained here with the decisions and assumptions made, so it is easy to understand the thought process behind. In the following text, 'application' refers to the frontend project (facto-expense) and backend or API to the [facto-expense-api](https://github.com/Huespal/facto-expense-api). 

The facto-expense project is a single page application ready to display the data consumed from the [facto-expense-api](https://github.com/Huespal/facto-expense-api) in a simple user interface. It allows to log in, list expenses and submit an expense.

The application handles multi-tenant locally. Multi tenant can be handled in different ways. One approach may be that Tenants data is stored into the backend's database so they can be managed by a (super) admin user from the UI, and relate tables to its identifier. Then each Tenant can have its own application and domain.

In this application only one domain is handled so Tenants are stored into the application instead of the database to keep it simple as there's no requirements about managing Tenants.
The application handles 3 Tenants:

- Agència de viatges l’Espardenya. (Identifier: 1, Budget: 100000)
- Rodamons (Identifier: 2, Budget: 15000)
- Centre excursionista (Identifier: 3, Budget: 1000)

Each Tenant has a maximum budget defined in the application.
There's no currency defined, so it is ok to assume it is in euros, or the currency you preffer.

Each tenant has 2 related users.
Each user has a username and all can access using the same password: 1234.

Tenant ID: 1 
- admin-espardenya
- employee-espardenya

Tenant ID: 2
- admin-rodamons
- employee-rodamons

Tenant ID: 3
- admin-excursionistes
- employee-excursionistes

admin users have an 'admin' role. Employee users an 'employee' role.
Users are seeds for the database as there is no user creation form in the application.

### Tech Stack

To generate the simple UI it has been decided to use the [NextJS library](https://nextjs.org/docs) with the 'app' strategy. It is fast, constantly improved and allows us to work both server side and client side in a very performant way and a nice developer experience. It also uses [ReactJS library](https://react.dev/) so it checks into one of the thecnical requirements for this project.

The stack is completed by: 
- [TypeScript](https://www.typescriptlang.org/): for basic code scripting.
- [Tanstack (React) Query](https://tanstack.com/query/latest): to manage application state.
- [Styled Components](https://styled-components.com/): to handle CSS in JS.
- [Formik](https://formik.org/): to handle forms.
- [Vitest](https://vitest.dev/): for testing (with [testing-library](https://testing-library.com/)).

It has been decided to use TypeScript over vanilla Javascript to get advantage of types which allows for a faster and better developer experience and it is the recommended ReactJS experience.

It has been decided to use React Query to manage the application state to get advantage of cache invalidation or revalidation and for a selfish reason too, the author of this project had not tried it before and it was a good opportunity to do so. It works perfectly, is fast and it allows for a nice developer experience.

It has been decided to use Styled Components over [Panda CSS](https://panda-css.com/) or similar, or just plain CSS because it allows to work as in ReactJS development while styling html, and includes theming. So again it gives a nice developer experience, is fast and works in server side within NextJS.

It has been decided to use Formik to handle forms because it allows to work as in ReactJS. It also gives a nice developer experience, is constantly updated and handles a lot of HTML form work automatically.

Finally, it has been decided to use Vitest with Testing library for testing instead of Jest because it needs less configuration, it is faster and allows to test ReactJS components specifically thanks to testing-library.

### Project organization

The project organization is as follow:

- `app`: It contains the application pages:
   - /login/page: the login page.
   - ./page: expenses list page (main application page, 'the home').
   - /create/page: expense create form page.

   The routing is handled by [NextJS](https://nextjs.org/docs/app/getting-started/layouts-and-pages) with the file-system based routing.

   This folder also contains necessary NextJS files.
   - Root layout: wraps the application with necessary providers
   - Global error: handles errors globally
   - Favicon: yep, exactly that. An icon image to be displayed in the browser tab.
   - Server actions: actions to be performed in server side, to manage access token and tenant id cookies. 


- `components`: It contains the application components. Shared components are grouped into a 'shared' folder.
    The shared components can be extracted into a separated repository and work as a components library to be used by different projects. They are isolated basic components ready to fit in different situations.
    Components outside 'shared' folder are specific to the facto-expense application with almost no 'shareability'.
    The components are created using ReactJS (index.tsx file) and styled using Styled-Components (styles.ts)
    Shared components includes testing (component.test.tsx) files using testing-library and Vitest.


- `core`: It contains shared helpers, constants, assets and fundamental files to handle api, state, theming and layout configuration.


- `domain`: It contains a folder for each (backend) domain.
    Each folder is named the same as the (backend) domain and includes a file configuring the API requests, both client and server side if apply, and TypeScript types.

There's also a middleware file at the root folder which ensures that expense related pages are only accessible by authenticated users, so only the login page is public.

### Development process

To develop the Facto Expense application, work has been separated in different tasks.

1. Add authentication 
  - Required components creation: Section, FieldText and Button.
  - Login page creation including a form using Formik.
  - Server actions to manage access token cookie.
  - JWToken authentication management with API connection (POST /login).

2. Add Tenant selector
  - Required components creation: TenantSelect, Header, FieldSelect and Footer.
  - Server actions to manage tenant id cookie.
  - Include the selector in login page and manage API connection.
 
3. Add Expense list
  - Required components creation: Table (and related components)
  - Expense page list creation.
  - API connection (GET /expense, PATCH /approve, PATCH /reject)

4. Add Expense form
  - Expense create page creation including a form using Formik.
  - Add expense type logic and validation into the form.
  - API connection (POST /expense)

5. Add Expense filters 
  - Adapt Expense page list to include status and date range filters.
  - Adapt API connection (GET /expense) to send filters as query parameters.

6. Review
  - Just a final step to review the application is working properly,
    add missing comments and refactor. 

Testing and user roles restrictions had been added along the tasks.
Components are done in a way that are ready to adapt to theme modifications, so multiple theming is handled.


## Final thoughts

The application components and general style is very basic and simple to match the project requirements.
It can be enhanced with better visuals. Working with a design system gives as a visual coherence between the entire application. Create the components with theming in mind helps to re-use the same application with different styles (maybe for different clients).

The decision to separate the frontend application from the API has been done because it adds some benefits.
Frontend and Backend teams can work in parallel and separated so there's no less blockers.
In case there's a new feature added only in one side (frontend or backend) feature flags can help to continuous deployment without breaking changes. If some project or (core) technology gets old, in legacy code or is affected by any problem, it can be replaced without compromising the entire product.

The state management is crucial to have a fast and very responsive user interface. Server side rendering gives us no waiting times. 
ReactJS and React Query helps to accomplish this and NextJS is a very pleasant piece of tech to work in Server Side.

Testing is essential for an application. This application includes unit testing with Vitest and testing-library. This should be scale up with end to end or integration testing to the entire application with technologies such as Cypress or similar handled by a QA expert.   
