exports.home = (req, res) => {
  //// jest z modulu connect . ten flash//
  req.flash('form', {
    formMessage: req.flash('form')
  });
};