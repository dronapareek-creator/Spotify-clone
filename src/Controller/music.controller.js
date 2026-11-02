import musicModel from "../models/music.model.js";

export async function uploadMusic(req, res) {
    try {
        const { uri, title } = req.body;

        if (!uri || !title) {
            return res.status(400).json({
                success: false,
                message: "Uri and title fields are required"
            })
        }

        const newMusic = await musicModel.create({
            uri, title, artist: req.body.artist
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