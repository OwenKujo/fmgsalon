import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/image', upload.single('image'), async (req, res) => {
    try {
        const fileStr = req.file.buffer.toString('base64');
        const uploadResponse = await cloudinary.uploader.upload(
            `data:${req.file.mimetype};base64,${fileStr}`,
            { folder: 'fmgsalon' }
        );
        res.json({ url: uploadResponse.secure_url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
