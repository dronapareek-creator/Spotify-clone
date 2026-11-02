import musicModel from "../models/music.model";

export async function uploadMusic(req, res) {

    const { uri, title, artist } = req.body;

    const newMusic = await musicModel.create({
        uri, title, artist
    });
    return res.status(201).json({
        success: true,
        message: "Music created Successfully"
    })
}