class AppController {
    /**
     * Handles the request for the homepage.
     * @param {Object} req - The HTTP request object.
     * @param {Object} res - The HTTP response object.
     */
    static getHomepage(req, res) {
      res.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  