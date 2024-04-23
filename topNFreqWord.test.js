import assert from "node:assert";
import test from "node:test";
import { topNFrequentWords } from "./index.js";

test("Test 1: Basic top 3 frequent words", () => {
  const text = "This is a test. This is only a test.";
  const expected = [
    ["a", 2],
    ["is", 2],
    ["test", 2],
  ];
  assert.deepStrictEqual(topNFrequentWords(text, 3), expected);
});

test("Test 2: Top frequent words with ties", () => {
  const text =
    "The quick brown fox jumps over the lazy dog. The lazy dog barks.";
  const expected = [
    ["the", 3],
    ["dog", 2],
    ["lazy", 2],
  ];
  assert.deepStrictEqual(topNFrequentWords(text, 3), expected);
});

test("Test 3: Top frequent words with alphabetical sorting", () => {
  const text = "Apple banana apple Banana APPLE BANANA";
  const expected = [
    ["apple", 3],
    ["banana", 3],
  ];
  assert.deepStrictEqual(topNFrequentWords(text, 2), expected);
});

test("Test 4: Return only the top 1 frequent word", () => {
  const text = "Unique word in the text.";
  const expected = [["in", 1]];
  assert.deepStrictEqual(topNFrequentWords(text, 1), expected);
});

test("Test 5: Empty string should return an empty array", () => {
  const text = "";
  const expected = [];
  assert.deepStrictEqual(topNFrequentWords(text, 3), expected);
});
