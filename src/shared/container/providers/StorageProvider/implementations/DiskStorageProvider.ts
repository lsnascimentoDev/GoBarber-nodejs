import fs from 'fs'
import path from 'path'
import uploadConfig from '@config/upload'
import IStorageProvider from "../models/IStorageProvider";


class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename( // passa o arquivo da pasta tpm para uploads
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file)
    );
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath); // encontra o arquivo caso exista
    } catch{
      return;
    }

    await fs.promises.unlink(filePath)// Deleta o arquivo.
  }
}

export default DiskStorageProvider;
