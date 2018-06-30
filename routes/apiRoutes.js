var db = require("../models");

module.exports = function(app) {
  // get lessons by id

  app.get("/api/lessons/id/:id", function(req, res) {
    db.Lesson.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(lessons) {
      res.json(lessons);
    });
  });

  //get lessons by name ex: trigonometry

  app.get("/api/lessons/name/:name", function(req, res) {
    db.Lesson.findAll({
      where: {
        name: req.params.name
      }
    }).then(function(lessons) {
      res.json(lessons);
    });
  });

  //get lessons by subject ex: math

  app.get("/api/lessons/subject/:subject", function(req, res) {
    db.Lesson.findAll({
      where: {
        subject: req.params.subject
      }
    }).then(function(lessons) {
      res.json(lessons);
    });
  });

  // get lessons by gradeLevel ex: pre school

  app.get("/api/lessons/gradeLevel/:gradeLevel", function(req, res) {
    db.Lesson.findAll({
      where: {
        gradeLevel: req.params.gradeLevel
      }
    }).then(function(lessons) {
      res.json(lessons);
    });
  });

  // get lessons sorted by avgRating
  // /api/lessons?sort=ascending&col=avgRating
  // /api/lessons?sort=descending&col=avgRating

  app.get("/api/lessons", function(req, res) {
    var sort = req.query.sort;
    var col = req.query.col;

    if (sort === "ascending") {
      db.Lesson.findAll({
        order: [[col, "ASC"]]
      }).then(function(lessons) {
        res.json(lessons);
      });
    } else {
      db.Lesson.findAll({
        order: [[col, "DESC"]]
      }).then(function(lessons) {
        res.json(lessons);
      });
    }
  });

  // get lessons sorted by ratingQuantity

  // /api/lessons?sort
  // getAllLessons
  // getLessonsByGradeLevel
  // getLessonsBySubject
  // getLessonsByRating
  // createLesson
  // updateRatings
  // createRatings
};