import musicModel from "../models/music.model.js";

export async function uploadMusic(req, res) {
    try {
        const { uri, title } = req.body;

        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized please login first "
            })
        }
        if (req.user.role !== "artist") {
            return res.status(403).json({
                success: false,
                message: "Forbidden only artist can upload music so sad "
            })
        }

        if (!uri || !title) {
            return res.status(400).json({
                success: false,
                message: "Uri and title fields are required"
            })
        }

        const newMusic = await musicModel.create({
            uri, title, artist: req.user.id
        });
        return res.status(201).json({
            success: true,
            message: "Music created Successfully",
            data: newMusic
        })
    }


    catch (error) {
        console.error("Upload music error:", error);


        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })

    }
}