# Automation of SimplyBe Website

This repository contains the automated tests for the SimplyBe website. The tests focus on key user interactions, including signing in, signing up, and adding items to the cart. The implementation also incorporates Mailinator to handle email verification during the sign-in process.

## Automated Test Cases

1. **Sign In**:
   - Automates the user login process, including handling email verification through Mailinator.

2. **Sign Up**:
   - Automates the registration process, ensuring a seamless user experience for new accounts.

3. **Add to Cart**:
   - Validates the functionality of adding products to the shopping cart.

## Why These Test Cases?

These test cases were chosen because they represent the core functionalities of the SimplyBe website. Automating these flows ensures:
- The integrity of the user authentication system.
- A smooth user experience for new registrations.
- The reliability of the e-commerce functionality, which is critical for customer satisfaction.

## Mailinator Integration

The sign-in process involves sending a verification code to the user's email. To automate this, Mailinator was integrated to:
- Access the email inbox dynamically.
- Retrieve and validate the verification code during the test flow.

## Page Object Model (POM) Implementation

The tests are implemented using the Page Object Model (POM) pattern, which includes:
- A **Base Class** for shared methods and reusable logic, ensuring consistency and reducing code duplication.
- Specific page classes for handling actions on individual pages.

## Test Data Generation

Test data for the automation was dynamically generated using the **Faker** library. This ensures:
- Realistic and unique test inputs for each run.
- The ability to test edge cases without relying on static data.

## How to Run the Tests

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm run test:headed 
   ```

## Conclusion

This project demonstrates the use of robust automation practices to ensure the reliability of critical user flows on the SimplyBe website. The integration of Mailinator and the use of POM and Faker showcase a modern approach to test automation.
