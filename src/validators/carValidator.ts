import * as Joi from "joi";

export const carsValidator=Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base': 'Не правильный ввод' }),
    price: Joi.number().min(0).max(1000000)
        .messages({
            'number.min': 'Минимальная цена 0',
            'number.max': 'Максимальная цена 1000000'
        }),
    year: Joi.number().min(1990).max(2026)
        .messages({
            'number.min': 'Минимальный год выпуска 1990',
            'number.max': 'Максимальный год выпуска 2026'
        }),

});