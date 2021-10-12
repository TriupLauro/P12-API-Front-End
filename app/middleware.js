const handleNoUserData = (res, userData, id) => {
    if (!userData) {
        res.statusCode = 404
        return res.json(`can not find user id ${id}`)
    }

    return res.json({data: userData})
}

module.exports = {
    handleNoUserData
}
