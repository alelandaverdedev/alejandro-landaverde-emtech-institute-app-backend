'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
        {
            name: 'Jonathan',
            last_name: 'Smith',
            identification_number: uuidv4(),
            email: 'xjones@example.org',
            current_course: 'Química 3',
            percentage_progress_course: 66,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Mark',
            last_name: 'Pearson',
            identification_number: uuidv4(),
            email: 'djohns@example.net',
            current_course: 'Matemáticas 1',
            percentage_progress_course: 14,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Kevin',
            last_name: 'Barnes',
            identification_number: uuidv4(),
            email: 'angela87@example.com',
            current_course: 'Literatura',
            percentage_progress_course: 25,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Robert',
            last_name: 'Hancock',
            identification_number: uuidv4(),
            email: 'alan25@example.com',
            current_course: 'Economía',
            percentage_progress_course: 30,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'James',
            last_name: 'Smith',
            identification_number: uuidv4(),
            email: 'moorediane@example.net',
            current_course: 'Música Clásica',
            percentage_progress_course: 73,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Tiffany',
            last_name: 'Hughes',
            identification_number: uuidv4(),
            email: 'morganjason@example.org',
            current_course: 'Literatura',
            percentage_progress_course: 86,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'April',
            last_name: 'Rocha',
            identification_number: uuidv4(),
            email: 'deniseyoung@example.net',
            current_course: 'Psicología',
            percentage_progress_course: 62,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Stephanie',
            last_name: 'Jones',
            identification_number: uuidv4(),
            email: 'zpaul@example.org',
            current_course: 'Derecho',
            percentage_progress_course: 58,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Larry',
            last_name: 'Foster',
            identification_number: uuidv4(),
            email: 'jennifer98@example.com',
            current_course: 'Matemáticas 1',
            percentage_progress_course: 95,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Karen',
            last_name: 'Smith',
            identification_number: uuidv4(),
            email: 'renee49@example.com',
            current_course: 'Historia Universal',
            percentage_progress_course: 37,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Diane',
            last_name: 'Young',
            identification_number: uuidv4(),
            email: 'tanderson@example.net',
            current_course: 'Química 3',
            percentage_progress_course: 9,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Anne',
            last_name: 'Rivera',
            identification_number: uuidv4(),
            email: 'amy61@example.net',
            current_course: 'Filosofía',
            percentage_progress_course: 30,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'John',
            last_name: 'Conner',
            identification_number: uuidv4(),
            email: 'tarafaulkner@example.net',
            current_course: 'Arte Moderno',
            percentage_progress_course: 58,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Courtney',
            last_name: 'Coleman',
            identification_number: uuidv4(),
            email: 'zimmermanmelissa@example.org',
            current_course: 'Psicología',
            percentage_progress_course: 1,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Olivia',
            last_name: 'Martin',
            identification_number: uuidv4(),
            email: 'brenda24@example.org',
            current_course: 'Estadística',
            percentage_progress_course: 58,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Amy',
            last_name: 'Morrison',
            identification_number: uuidv4(),
            email: 'dshaw@example.net',
            current_course: 'Historia Universal',
            percentage_progress_course: 47,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Alyssa',
            last_name: 'Hill',
            identification_number: uuidv4(),
            email: 'leeheather@example.com',
            current_course: 'Derecho',
            percentage_progress_course: 10,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Sandra',
            last_name: 'Garcia',
            identification_number: uuidv4(),
            email: 'fernandezjeremy@example.com',
            current_course: 'Literatura',
            percentage_progress_course: 37,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Travis',
            last_name: 'White',
            identification_number: uuidv4(),
            email: 'rebeccacampbell@example.com',
            current_course: 'Matemáticas 1',
            percentage_progress_course: 2,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Randy',
            last_name: 'Burns',
            identification_number: uuidv4(),
            email: 'trobinson@example.org',
            current_course: 'Literatura',
            percentage_progress_course: 57,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Shawn',
            last_name: 'Clark',
            identification_number: uuidv4(),
            email: 'jennifer26@example.net',
            current_course: 'Educación Física',
            percentage_progress_course: 44,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Alicia',
            last_name: 'Coleman',
            identification_number: uuidv4(),
            email: 'christophermoore@example.com',
            current_course: 'Matemáticas 1',
            percentage_progress_course: 79,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Amber',
            last_name: 'Joyce',
            identification_number: uuidv4(),
            email: 'omeadows@example.org',
            current_course: 'Arte Moderno',
            percentage_progress_course: 84,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Monique',
            last_name: 'Oneal',
            identification_number: uuidv4(),
            email: 'thomasjoseph@example.org',
            current_course: 'Economía',
            percentage_progress_course: 79,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Scott',
            last_name: 'Anderson',
            identification_number: uuidv4(),
            email: 'julie31@example.net',
            current_course: 'Estadística',
            percentage_progress_course: 47,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Matthew',
            last_name: 'Jones',
            identification_number: uuidv4(),
            email: 'grace92@example.com',
            current_course: 'Química 3',
            percentage_progress_course: 39,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Brittany',
            last_name: 'Sims',
            identification_number: uuidv4(),
            email: 'michaelpierce@example.org',
            current_course: 'Economía',
            percentage_progress_course: 51,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Andrea',
            last_name: 'Jones',
            identification_number: uuidv4(),
            email: 'shannon02@example.com',
            current_course: 'Educación Física',
            percentage_progress_course: 88,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Deborah',
            last_name: 'Snyder',
            identification_number: uuidv4(),
            email: 'powellandrea@example.net',
            current_course: 'Filosofía',
            percentage_progress_course: 9,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            name: 'Mallory',
            last_name: 'Scott',
            identification_number: uuidv4(),
            email: 'sherry62@example.net',
            current_course: 'Matemáticas 1',
            percentage_progress_course: 63,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
