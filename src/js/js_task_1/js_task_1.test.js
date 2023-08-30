import * as task from "./js_task_1_solution.js";

describe('JS practical task tests', () => {
    describe('Seconds to date', () => {
        test('Should return 01.06.2021 for input 31536000', () => {
            expect(task.secondsToDate(31536000)).toEqual(new Date(2021, 5, 1))
        })
        test('Should return 01.06.2020 for input 0', () => {
            expect(task.secondsToDate(0)).toEqual(new Date(2020, 5, 1))
        })
        test('Should return 02.06.2020 for input 86400', () => {
            expect(task.secondsToDate(86400)).toEqual(new Date(2020, 5, 2))
        })
    })

    describe('Converter to binary', () => {
        test('Should return"101 for input 5', () => {
            expect(task.toBase2Converter(5)).toBe('101')
        })
        test('Should return 1000 for input 8', () => {
            expect(task.toBase2Converter(8)).toBe('1000')
        })
        test('Should return 1111 for input 15', () => {
            expect(task.toBase2Converter(15)).toBe('1111')
        })
    })

    describe('Substring occurrence counter', () => {
        test('Should return 1 for text "Hello world!" and substring "W"', () => {
            expect(task.substringOccurrencesCounter('w', 'Hello world!')).toBe(1)
        })
        test('Should return 2 for text "Hello world!" and substring "o"', () => {
            expect(task.substringOccurrencesCounter('o', 'Hello world!')).toBe(2)
        })
        test('Should return 3 for text "Hello world!" and substring "L"', () => {
            expect(task.substringOccurrencesCounter('l', 'Hello world!')).toBe(3)
        })
    })

    describe('Repeating letters', () => {
        test('Should return "HHeello  wworrldd" for input "Hello world"', () => {
            expect(task.repeatingLitters('Hello world')).toBe('HHeello  wworrldd')
        })
        test('Should return "HHeelloo" for input "Hello"', () => {
            expect(task.repeatingLitters('Hello')).toBe('HHeelloo')
        })
    })

    describe('Redundant function', () => {
        test('Should return function which returns input of the current function', () => {
            expect(task.redundant('taurus')()).toBe('taurus')
        })
    })

    describe('Tower Hanoi', () => {
        test('Should return 7 for input 3', () => {
            expect(task.towerHanoi(3)).toBe(7)
        })
        test('Should return 15 for input 4', () => {
            expect(task.towerHanoi(4)).toBe(15)
        })
    })

    describe('Matrix multiplication', () => {
        test('Should return [[11, 4]] for matrix1=[[1, 2]] and matrix2=[[3, 2], [4, 1]]', () => {
            expect(task.matrixMultiplication([[1, 2]], [[3, 2], [4, 1]])).toEqual([[11, 4]])
        })
        test('Should return [[11, 4]] for matrix1=[[1, 2], [3, 4]] and matrix2=[[3, 2, 2], [4, 1, 2]]', () => {
            expect(task.matrixMultiplication([[1, 2], [3, 4]], [[3, 2, 2], [4, 1, 2]])).toEqual([[11, 4, 6], [25, 10, 14]])
        })
    })

    describe('Gather and order string with chaining calls', () => {
        test('Should return abc for gather("a")("b")("c").order(0)(1)(2).get()', () => {
            expect(task.gather('a')('b')('c').order(0)(1)(2).get()).toBe('abc')
        })
        test('Should return abc for gather("a")("b")("c").order(2)(1)(0).get()', () => {
            expect(task.gather('a')('b')('c').order(2)(1)(0).get()).toBe('cba')
        })
        test('Should return abc for gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()', () => {
            expect(task.gather('e')('l')('o')('l')('!')('h').order(5)(0)(1)(3)(2)(4).get()).toBe('hello!')
        })
    })
})
