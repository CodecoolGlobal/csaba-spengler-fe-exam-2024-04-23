import assert from "node:assert";
import test from "node:test";
import { wordFrequency } from "./index.js";

test("Test 1: Basic word count", () => {
  const test1 = "Hello world world";
  const expected1 = {
    hello: 1,
    world: 2,
  };
  assert.deepStrictEqual(wordFrequency(test1), expected1);
});

test("Test 2: Case insensitivity", () => {
  const test2 = "HELLO Hello hello";
  const expected2 = {
    hello: 3,
  };
  assert.deepStrictEqual(wordFrequency(test2), expected2);
});

test("Test 3: Punctuation handling", () => {
  const test3 = "It's a good, good day!";
  const expected3 = {
    its: 1,
    a: 1,
    good: 2,
    day: 1,
  };
  assert.deepStrictEqual(wordFrequency(test3), expected3);
});

test("Test 4: Empty string", () => {
  const test4 = "";
  const expected4 = {};
  assert.deepStrictEqual(wordFrequency(test4), expected4);
});

test("Test 5: Multiple spaces", () => {
  const test5 = "   This    is a   test   ";
  const expected5 = {
    this: 1,
    is: 1,
    a: 1,
    test: 1,
  };
  assert.deepStrictEqual(wordFrequency(test5), expected5);
});

test("Test 6: Long text with unique words", () => {
  const test6 = "a b c d e f g";
  const expected6 = {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
  };
  assert.deepStrictEqual(wordFrequency(test6), expected6);
});
