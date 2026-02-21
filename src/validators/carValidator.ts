import * as Joi from "joi";

export const carsValidator=Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string patter base': 'Не правильный ввод' }).max(20.).min(1),
    price: Joi.number().max(1000000).min(0)
        .messages({
            'number.min': 'Минимальная цена 0',
            'number.max': 'Максимальная цена 1000000'
        }),
    year: Joi.number().max(2026).min(1990)
        .messages({
            'number.min': 'Минимальный год выпуска 1990',
            'number.max': 'Максимальный год выпуска 2026'
        }),

});