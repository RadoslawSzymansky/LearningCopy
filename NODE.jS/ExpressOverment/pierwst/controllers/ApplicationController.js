exports.store = (req, res) => {
  //// jest z modulu connect . ten flash//
  req.flash('form', req.body.name.split(' ')[0], 'You are a true hero');
  res.redirect('/');
}