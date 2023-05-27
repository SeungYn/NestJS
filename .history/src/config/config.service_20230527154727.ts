import { Injectable } from '@nestjs/common';
import { EnvConfig } from './interfaces';
import path from 'path';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor() {
    const options = { folder: './config' };

    const filePath = `${process.env.NODE_ENV || 'devlopment'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
  }
}
