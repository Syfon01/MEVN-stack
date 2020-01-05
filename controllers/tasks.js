module.exports.controller = (app) => {
  // get homepage
  app.get('/tasks', (req, res) => {
    res.render('tasks', { title: 'Tasks on Express', description: 'The task for this project is to complete this book and be good at this skill' });
  })
}