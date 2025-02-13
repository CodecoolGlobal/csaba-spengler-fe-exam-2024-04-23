// Task: Reverse Words in a Sentence
// Write a function `reverseWords(sentence)` that takes a sentence as input and returns the sentence with the order of the words reversed.
// The words in the sentence should retain their original character order, but the sequence of words in the sentence should be reversed.

// Constraints:
// - Words are separated by spaces, and the sentence may contain leading or trailing spaces.
// - Consider only spaces as word separators (no punctuation splitting).
export function reverseWords(sentence) {
  const words = sentence.trim().split(" ");
  return words
    .reverse()
    .filter((el) => el)
    .join(" ");
}

// Task: Word Frequency Counter
// Given a string of text, write a function `wordFrequency` that counts the
// frequency of each unique word in the text. The function should return an
// object where the keys are the unique words and the values are the counts
// of each word. The comparison of words should be case-insensitive.

// Additional instructions:
// - Words are separated by spaces, and the text may contain punctuation.
// - The function should not count punctuation as part of the words.
// - Return the result with words in lowercase.
export function wordFrequency(text) {
  const result = {};
  const clearSentence = text
    .replace(/['.,\/#!;:{}=\-_`~()]/g, "")
    .split(" ")
    .filter((el) => el)
    .map((a) => {
      return a.toLowerCase();
    });
  clearSentence.forEach((word) => {
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  });

  return result;
}

// Task: Top N Frequent Words
// Write a function `topNFrequentWords(text, n)` that finds the top `n` most frequent words in a given text.
// The function should return an array of tuples where each tuple contains a word and its frequency,
// sorted in descending order of frequency. If two words have the same frequency, they should be sorted alphabetically.

// Constraints:
// - Text is case-insensitive.
// - Words are separated by spaces, and the text may contain punctuation.
// - Ignore punctuation, and consider only alphabetic characters for word separation.
export function topNFrequentWords(text, n) {
  const frequency = wordFrequency(text);
  let result = [];
  for (const word of Object.keys(frequency)) {
    const el = [];
    el.push(word);
    el.push(frequency[word]);
    result.push(el);
  }
  result.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return 0;
    }
  });

  result.sort((a, b) => b[1] - a[1]);
  return result.splice(0, n);
}
