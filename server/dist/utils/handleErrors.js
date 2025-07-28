export default function (error, errorMessage, _req, res) {
    console.log(error);
    res.status(500).json({ message: `Something went wrong!! ${errorMessage}` });
}
