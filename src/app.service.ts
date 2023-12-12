import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}

	getParameters(): string {
		return 'Hello Parameters!';
	}

}
