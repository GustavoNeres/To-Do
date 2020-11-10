const macaddressValidation = (req, res, next) => {
    if (!req.body.macaddress)
        return res.status(400).json({ error: 'Macaddress não encontrado' })
    else
        next()
}

module.exports = macaddressValidation