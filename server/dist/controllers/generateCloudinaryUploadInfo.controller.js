import { v2 as cloudinary } from "cloudinary";
export default function getUploadInfo(req, res) {
    const timestamp = Math.round(Date.now() / 1000);
    const folder = "Notely_Users_Avatar_Image_Uploads";
    const signature = cloudinary.utils.api_sign_request({
        timestamp,
        folder,
    }, process.env.CLOUDINARY_API_SECRET);
    return res.json({
        timestamp,
        signature,
        folder,
        apiKey: process.env.CLOUDINARY_API_KEY,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    });
}
