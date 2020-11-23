import {calcTime,  convertMoney} from '../helpers/helpers'

describe('Test helpers', () => {
    test('also should render 1h 0m', () => {
        expect(calcTime(60)).toBe('1h 0m')
    })

    test('also should render R$ 5.256.817,00', () => {
        expect(convertMoney(5256817)).toBe('R$ 5,256,817.00')
    })
})