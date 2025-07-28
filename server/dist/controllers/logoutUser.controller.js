export default function logoutUser(_req, res) {
    res.locals.validUserData = null;
    res.status(200).json("");
}
