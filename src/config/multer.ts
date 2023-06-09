import crypto from 'crypto';
import { request } from 'express';
import multer from 'multer';

import { extname, resolve } from 'path';

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileNane = `${fileHash}-${file.originalname}`

                    return callback(null, fileNane)
                }
            })
        }
    }
}