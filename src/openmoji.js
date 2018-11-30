export const openmoji = {
	'rainbow': '1F308',
	'sparkles': '2728',
	'star': '1F31F',
	'happy': '1F601',
	'thumb': '1F44D',
};

export const openmojiJoy = [
	openmoji.rainbow,
	openmoji.sparkles,
	openmoji.star,
	openmoji.happy,
	openmoji.thumb,
];

export function openmojiPath( image ) {

	return '/images/openmoji/' + image + '.svg';

}