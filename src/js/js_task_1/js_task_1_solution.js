'use strict';

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
export function secondsToDate(seconds) {

    let date = new Date(2020, 5, 1, 0, 0, 0)

    return new Date(date.getTime() + seconds * 1000)
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
export function toBase2Converter(decimal) {

    let result = ''
    while (decimal > 0) {
        result = decimal % 2 + result
        decimal = Math.floor(decimal / 2)
    }

    return result
}


/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
export function substringOccurrencesCounter(substring, text) {

    let count = 0
    while (text.includes(substring)) {
        count++
        text = text.toLowerCase().substring(text.indexOf(substring.toLowerCase()) + substring.length)
    }

    return count
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
export function repeatingLitters(string) {

    for (let i = 0; i < string.length; i++) {
        if (string.match(new RegExp(string.charAt(i), 'g')).length === 1) {
            string = string.substring(0, i + 1) + string.charAt(i) + string.substring(i + 1)
            i++
        }
    }

    return string
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
export function redundant(str) {

    return () => str
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
export function towerHanoi(disks) {

    return 2 ** disks - 1
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
export function matrixMultiplication(matrix1, matrix2) {

    let result = [];
    for(let i = 0; i < matrix1.length; i++) {
        result[i] = []
        for(let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = 0
            for(let g = 0; g < matrix2.length; g++) {
                result[i][j] += matrix1[i][g] * matrix2[g][j]
            }
        }
    }

    return result
}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
export function gather(str) {

    let currentString = str
    let result = ''

    const chainFunction = (nextVal) => {
        currentString += nextVal

        return chainFunction
    }

    chainFunction.order = (index) => {
        result += currentString.charAt(index)

        return chainFunction.order
    }

    chainFunction.order.get = () => {
        return result
    }

    return chainFunction
}
