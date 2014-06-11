var Currency = require('./Currency');
var Gender = require('./Gender');
var Model = require('./model').Model;
var avatars = require('./avatars');
var careerItems = require('./careerItems');
var educationItems = require('./educationItems');


var model = module.exports = new Model([
	{
    id: 1,
    age: 28,
    avatar: avatars.getAt(19).image,
    career: [careerItems.get(1), careerItems.get(2), careerItems.get(3)],
    cityId: 1,
    education: [educationItems.get(1), educationItems.get(2), educationItems.get(3)],
    favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 3],
    gender: Gender.MALE,
    languageIds: [1, 2],
    maxEntertainmentPrice: { amount: 100000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 10000, currency: Currency.USD },
    name: 'Влад',
    nameForms: ['Влад', 'Влада', 'Владу', 'Влада', 'Владом', 'Владе'],
    online: false,
  },
	{
		id: 2,
		age: 28,
		avatar: avatars.getAt(0).image,
		career: [careerItems.get(1), careerItems.get(2), careerItems.get(4)],
		cityId: 2,
		education: [educationItems.get(1), educationItems.get(2), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
    gender: Gender.MALE,
    languageIds: [1, 2],
    maxEntertainmentPrice: { amount: 100000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 10000, currency: Currency.USD },
		name: "Президент Того или типа того",
		nameForms: [
			"Президент Того или типа того", "Президента Того или типа того",
			"Президенту Того или типа того", "Президента Того или типа того",
			"Президентом Того или типа того", "Президенте Того или типа того"
		],
		online: false,
	},
	{
		id: 3,
		age: 24,
		avatar: avatars.getAt(1).image,
		career: [careerItems.get(1), careerItems.get(2), careerItems.get(5)],
		cityId: 3,
    education: [educationItems.get(1), educationItems.get(2), educationItems.get(5)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [1, 2],
    maxEntertainmentPrice: { amount: 100000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 10000, currency: Currency.USD },
		name: "Татьяна",
		nameForms: ["Татьяна", "Татьяны", "Татьяне", "Татьяну", "Татьяной", "Татьяне"],
		online: false,
	},
	{
		id: 4,
		age: 18,
		avatar: avatars.getAt(2).image,
		career: [careerItems.get(1), careerItems.get(2)],
		cityId: 4,
    education: [educationItems.get(1), educationItems.get(2)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.MALE,
		languageIds: [],
    maxEntertainmentPrice: null,
    minEntertainmentPrice: null,
		name: "Агент поддержки пользователя",
		nameForms: [
			"Агент поддержки пользователей", "Агент поддержки пользователей",
			"Агент поддержки пользователей", "Агент поддержки пользователей",
			"Агент поддержки пользователей", "Агент поддержки пользователей"
		],
		online: true,
	},
	{
		id: 5,
		age: 32,
		avatar: avatars.getAt(3).image,
		career: [careerItems.get(4)],
		cityId: 5,
		education: [educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.MALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Майк",
		nameForms: null,
		online: true,
	},
	{
		id: 6,
		age: 26,
		avatar: avatars.getAt(4).image,
		career: [careerItems.get(5)],
		cityId: 6,
		education: [educationItems.get(5)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Женя !!!!",
		nameForms: [
			"Женя !!!!", "Жени !!!!", "Жене !!!!",
			"Жене !!!!", "Женей !!!!", "Жене !!!!"
		],
		online: false,
	},
	{
		id: 7,
		age: 28,
		avatar: avatars.getAt(5).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 7,
		education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Екатерина",
		nameForms: null,
		online: false,
	},
	{
		id: 8,
		age: 24,
		avatar: avatars.getAt(6).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 8,
		education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Алия",
		nameForms: [
			"Алия", "Алии", "Алии",
			"Алию", "Алией", "Алии"
		],
		online: false,
	},
	{
		id: 9,
		age: 22,
		avatar: avatars.getAt(7).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 9,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Гуля",
		nameForms: [ "Гуля", "Гули", "Гуле", "Гулю", "Гулей", "Гуле" ],
		online: false,
	},
	{
		id: 10,
		age: 24,
		avatar: avatars.getAt(8).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 10,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Светлана",
		nameForms: null,
	},
	{
		id: 11,
		age: 26,
		avatar: avatars.getAt(9).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 11,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Майя",
		nameForms: null,
		online: true,
	},
	{
		id: 12,
		age: 23,
		avatar: avatars.getAt(10).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 12,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.MALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Max",
		nameForms: null,
		online: false,
	},
	{
		id: 13,
		age: 26,
		avatar: avatars.getAt(11).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 13,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Анастасия",
		nameForms: null,
		online: false,
	},
	{
		id: 14,
		age: 26,
		avatar: avatars.getAt(12).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 14,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Ася",
		nameForms: null,
		online: false,
	},
	{
		id: 15,
		age: 27,
		avatar: avatars.getAt(13).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 15,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Диана",
		nameForms: null,
		online: false,
	},
	{
		id: 16,
		age: 25,
		avatar: avatars.getAt(14).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 16,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.MALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Валентин",
		nameForms: null,
		online: false,
	},
	{
		id: 17,
		age: 28,
		avatar: avatars.getAt(15).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 17,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
    gender: Gender.MALE,
    languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Rustem",
		nameForms: null,
		online: false,
	},
	{
		id: 18,
		age: 26,
		avatar: avatars.getAt(16).image,
		career: [careerItems.get(3), careerItems.get(4)],
		cityId: 18,
    education: [educationItems.get(3), educationItems.get(4)],
		favoriteCityIds: [1, 2, 3],
    favoritePlaceIds: [1, 2, 4],
		gender: Gender.FEMALE,
		languageIds: [3, 7],
    maxEntertainmentPrice: { amount: 1000, currency: Currency.USD },
    minEntertainmentPrice: { amount: 100, currency: Currency.USD },
		name: "Инна",
		nameForms: null,
		online: false,
	}
]);
