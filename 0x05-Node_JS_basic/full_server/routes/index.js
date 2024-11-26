import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();

// Link the / route to the AppController's getHomepage method
router.get('/', AppController.getHomepage);

// Link the /students route to StudentsController's getAllStudents method
router.get('/students', StudentsController.getAllStudents);

// Link the /students/:major route to StudentsController's getAllStudentsByMajor method
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
