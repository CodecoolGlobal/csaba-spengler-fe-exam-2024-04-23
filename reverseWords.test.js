import assert from "node:assert";
import test from "node:test";
import { reverseWords } from "./index.js";

test("Test 1: Basic sentence reversal", () => {
  const sentence = "Hello world";
  const expected = "world Hello";
  assert.strictEqual(reverseWords(sentence), expected);
});

test("Test 2: Sentence with multiple words", () => {
  const sentence = "The quick brown fox";
  const expected = "fox brown quick The";
  assert.strictEqual(reverseWords(sentence), expected);
});

test("Test 3: Sentence with leading and trailing spaces", () => {
  const sentence = "   Hello   world   ";
  const expected = "world Hello";
  assert.strictEqual(reverseWords(sentence), expected);
});

test("Test 4: Sentence with multiple spaces between words", () => {
  const sentence = "The   quick   brown    fox";
  const expected = "fox brown quick The";
  assert.strictEqual(reverseWords(sentence), expected);
});

test("Test 5: Empty string", () => {
  const sentence = "";
  const expected = "";
  assert.strictEqual(reverseWords(sentence), expected);
});
