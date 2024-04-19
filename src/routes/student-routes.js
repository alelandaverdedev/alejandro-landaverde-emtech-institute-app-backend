const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get('/list', StudentController.list);
router.get('/:studentId', StudentController.student);
router.put('/update/:id', StudentController.update);
router.post('/create', StudentController.create);
router.delete('/delete/:id', StudentController.delete);
router.get('/courses/list', StudentController.listCoursesWithStudentCounts);
router.get('/courses/progress', StudentController.getCoursesWithProgress);
module.exports = router;
