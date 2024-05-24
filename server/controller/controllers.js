exports.GET_HOME = (req, res) => {
  res.send("Hello World")
}

exports.POST_LOGIN = (req, res) => {
  res.send({
    data: req.body,
    message: "Hello World",
  })
}

exports.POST_SIGNIN = (req, res) => {
  res.send({
    data: req.body,
    message: "Hello World",
  })
}
