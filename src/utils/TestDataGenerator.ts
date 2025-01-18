import { faker } from '@faker-js/faker';


export class LogInCreds {
    static logInData(){
        const email = "simplybetest@mailinator.com";
        const password = "Helloworld@12345";
        return {
            email,
            password,
          };
    }
}

export class TestDataGenerator {
  static generateUserData() {
    const title = 'Mr'; // Static value for the title
    const firstName = faker.person.firstName(); // Generate first name
    const lastName = faker.person.lastName(); // Generate last name

    const day = faker.number.int({ min: 1, max: 28 }).toString().padStart(2, '0'); // Valid day (1-28)
    const month = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0'); // Valid month (1-12)
    const year = faker.number.int({ min: 1950, max: 2005 }).toString(); // Valid year for age 18-73

    const phoneNumber = faker.helpers.replaceSymbols('020########'); // Generate UK-style phone number

    const homeAddress = '3 R R'

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`; // Custom email format

    // const password = this.generateCustomPassword(12); // Generate a secure password
    const password = this.generateCustomPassword(12);

    return {
      title,
      firstName,
      lastName,
      day,
      month,
      year,
      phoneNumber,
      homeAddress,
      email,
      password,
    };
  }

  // Method to generate a custom secure password
  private static generateCustomPassword(length: number): string {
    const lowerCase = faker.string.alpha({ length: Math.ceil(length / 4) }); // Lowercase letters
    const upperCase = faker.string.alpha({ length: Math.ceil(length / 4), casing: 'upper' }); // Uppercase letters
    const specialChars = '!@#$%^&*()_+{}|:"<>?[];,./'; // Special character pool
    const special = Array.from({ length: Math.ceil(length / 4) }, () =>
      specialChars[Math.floor(Math.random() * specialChars.length)]
    ).join(''); // Generate random special characters
    const digits = faker.string.numeric({ length: length - (lowerCase.length + upperCase.length + special.length) }); // Numeric digits

    // Combine and shuffle the components to form a secure password
    return faker.helpers.shuffle([lowerCase, upperCase, special, digits].join('').split('')).join('');
  }
}
