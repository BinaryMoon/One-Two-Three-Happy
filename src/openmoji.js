export const openmoji = {
	'happy': '1F601',
	'heart': '2764',
	'rainbow': '1F308',
	'star': '1F31F',
	'thumb': '1F44D',
	'lighbulb': '1F4A1',
	'cat': '1F638',
	'flower': '1F33C',
	'yummy': '1F60B',
};

export const openmojiJoy = [
	openmoji.rainbow,
	openmoji.star,
	openmoji.happy,
	openmoji.thumb,
	openmoji.heart,
	openmoji.cat,
];

export function openmojiPath( image ) {

	return '/images/openmoji/' + image + '.svg';

}