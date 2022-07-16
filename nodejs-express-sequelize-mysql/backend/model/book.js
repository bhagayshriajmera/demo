module.exports = (sequelize, Sequelize) => {
    console.log(sequelize)
    const Book = sequelize.define("tutorials", {
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
    console.log("&&&&&&&&&&&&&&&&&&777")
   console.log(Book.findAll().then(res=> console.log(res)))
    return Book;
  };