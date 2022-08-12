const yes = (validate) => {
    return (req, res, next) => {
        const { error } = validate(req.body);
        if(error) {
            return res.status(400).send(`[ERROR] ${error.details[0].message}`);
        }

        next();
    }
}

module.exports = yes;