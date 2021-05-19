# OpenTable Menu App 🧑‍🍳

## Table of Contents 📖

- [Overview](#overview-)
- [Technologies](#technologies-)
- [Process](#process-)
- [Getting Started](#getting-started-)
- [Wins](#wins-)
- [Challenges](#challenges-)
- [Future Work](#future-work-)

## Overview 👓

A **front-end application** built for **OpenTable's front-end coding challenge**. This was built over a few days and there are some suggestions for future work at the end. This application is built and designed as a simple interface for users looking to place their order at a restaurant with the following given restrictions/rules:

1. Specifically for groups of **2 diners/users**,
2. Each user will select a **minimum** of **2 different courses** (i.e. main & dessert),
3. **1** **of the courses** has to be the **'Main' course**,
4. Only **1 piece of 'Cheesecake'** is available,
5. If **'Prawn Cocktail'** is chosen, the same diner/user **cannot choose 'Salmon Fillet',**
6. **Total bill/amount** has to be displayed **after 1st dish** has been selected,
7. **Error notification/message** displayed when an **invalid menu combination** has been selected

**Final design:**
![Final Design](/ReadmeResources/finalDesign.png)

**Selecting menu items:**
![Selecting items](/ReadmeResources/selection.png)

**Invalid selections:**
![Invalid selections](/ReadmeResources/error.png)

**Successful order:**
![Successful order](/ReadmeResources/success.png)

## Technologies 💻

- General:
    - **React**
    - **HTML5**
    - **SCSS**
- Testing:
    - **Jest**
- Others:
    - **GitHub**
    - **React-Toast-Notifications**

## Process

- **Brainstormed ideas**:
    1. Design 1:
        ![Design 1](/ReadmeResources/design1.png)
        - The first design I just wanted something simple that could be easily include all the required functionality of the product (i.e. both diners can select their dishes and edit if required etc)
        - Though this design may not be the most efficient design in terms of screen congestion and repetition of components, I decided that for this task and given the suggested time, this would be an acceptable first pass and compromise,
        - Change to vertical design layout rather than side by side
    2. Design 2:
        ![Design 2](/ReadmeResources/design2.png)
        - The inspiration for this design was to have a multipage application where I can re-use components and to avoid congestion on the page (i.e. instead of having both Diner 1 and Diner 2 selecting their dishes on 1 page),
        - However, not super user-friendly, if Diners need to go back and edit their choices,
    3. Design 3:
        ![Design 3](/ReadmeResources/design3.png)
        - The focus behind this design is SPA (single page application), where the diners do not have to go onto another page for selection, and only needs to simply click a button to pass the selection to the next diner,
        - The same page and components are used (i.e. DRY concept),
- **Tech. stack decision:**
    - React was chosen for the main FE framework, as this is a stack I am most familiar with on the FE and also embraces the concept of re-usable components,
    - For styling, I decided to use 'SCSS' as I like the ability to nest selectors, which also reduces repeated code (i.e. DRY concept),
- **Testing:**

    Initially, I had a few tests that I had planned to do using Jest, however, due to unforeseen complexities with installing Jest which involved configuring Webpack and Babel, as well as time limitations, I have decided to list out the tests that I had planned to do instead:

    1. Unit Testing
        - Testing any methods,
        - UI actions for components ,
            - Check to see if `onClick()` triggers a change in CSS for the Menu item (i.e. green border added/removed),
            - Check to see if `onClick()` event ⇒ if 'click'/'selecting' the menu items ⇒ increases the total value
        - Other xamples:
            - (i.e. check to see state has updated after clicking on menu items, check if main dish not chosen for each user whether a toast notifications gets thrown up, 2 types of courses chosen, if "prawn cocktail" chosen cannot choose "salmon fillet", if 'cheesecake' chosen, other diner cannot choose 'cheesecake')
            - Test method to calculate total value is working and passed down to the `TotalValue` component,
    2. Integration Testing
    3. E2E Testing (i.e. End-to-End testing)
        - Don't have back-end database/API setup, not suitable for this small app,

### MVP

- 2 Diners are able to select dishes from the 3 courses,
- A total value should be displayed and correctly calculated, depending on the selected courses,
- Error message/notification when an invalid selection has been made by the Diner according to the set rules,

## Getting Started 🏃‍♂️🏃‍♀️

If you wish to **run it locally**, you will need to **follow the steps below**:

- **Fork** or **Clone** the **GitHub repository** ([https://github.com/ActivityHub/video-activity-hub](https://github.com/ActivityHub/video-activity-hub))
- In the **Root folder**, run `npm install` to **install** all the **dependencies**
- `npm start` to **start** the **development server** for the whole site

## Wins 🏆

- Able to implement the required functionality whilst also accounting for all the set rules,
- Designed a relatively pleasing yet simple aesthetics to the design,
- Fairly Mobile Responsive,

## Challenges 🏋️

One of the most challenging aspect of this project was the inclusion of testing as this was not something I had much experience in doing especially with Webpack and Babel configurations. Though I had attended an online course and watched Youtube videos on it, I have never had the opportunity to implement it practically in a project. Due to this, as well as the suggested time to do this, I tried to do a few and give a flavor of what additional testing I would do, if given more time.

Another major challenge was trying to configure my `webpack.config.js` since it seems that it doesn't take css/scss and import images out of the box so I had to read up about the issue and manually configure it to work.

The logic involved for enforcing the rules was also more complex than I thought and if given more time I would have like to refactor it by possibly extracting the logic into smaller, bitesized methods.

## Future Work ☕

### Planned features/extensions

- Use **TypeScript** for **stricter typings** + **code readability**,
- **DRY design** (i.e. 'Don't Repeat Yourself' ⇒ Diner 1 and Diner 2 can choose on the same menu interface without changing pages)
- Possibly inclusion of **'Integration Testing'** to test the interaction between different components,
- **Screenshot tests** to detect any unexpected changes in UI for maintenance and scalability,
- **More than 2 diners/users** can use the app to select their food (i.e. scalability),
- Add **'filter by course' functionality,**
- **Throw warnings** (i.e. toast notifications) **as soon as the user selects a bad input** as opposed to at the end, when they click on the "Submit" button (i.e. **More user-friendly**),
- **Refactor logic** by extracting into **smaller, bitesized methods**.
