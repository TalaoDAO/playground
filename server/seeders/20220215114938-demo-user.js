'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    console.log("running")
    try{

      var res=await queryInterface.bulkInsert('Users', [{
        name: 'Jane Doe',
        email: 'demo@demo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
      console.log('res')
        return res;
    } catch (error) {
      console.error(error)
      throw 'Somethings wrong!';
     
    }
   
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
