import {ERROR_CODE, ERROR_TEXT} from './../enum/index';
import {TypeResponse} from '../interfaces/index';

export default function resultData({
	error: {code = ERROR_CODE.THANH_CONG, message = ERROR_TEXT.THANH_CONG},
	data = null,
}: TypeResponse) {
	return {
		error: {
			code,
			message,
		},
		data,
	};
}
