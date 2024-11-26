import { readDatabase } from '../utils.js';

class StudentsController {
  /**
   * Handles the request to get all students, categorized by their field.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   */
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase();
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      res.status(200).send(
        [
          'This is the list of our students',
          ...fields.map((field) => {
            const firstNames = students[field].join(', ');
            return `Number of students in ${field}: ${students[field].length}. List: ${firstNames}`;
          }),
        ].join('\n')
      );
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles the request to get all students by a specific major (field).
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase();
      const firstNames = students[major] ? students[major].join(', ') : '';

      res.status(200).send(`List: ${firstNames}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
