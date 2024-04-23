# Task: Reverse Words in a Sentence

Write a function `reverseWords(sentence)` that takes a sentence as input and returns the sentence with the order of the words reversed.
The words in the sentence should retain their original character order, but the sequence of words in the sentence should be reversed.

Constraints:

- Words are separated by spaces, and the sentence may contain leading or trailing spaces.
- Consider only spaces as word separators (no punctuation splitting).

# Task: Word Frequency Counter

Given a string of text, write a function `wordFrequency` that counts the
frequency of each unique word in the text. The function should return an
object where the keys are the unique words and the values are the counts
of each word. The comparison of words should be case-insensitive.

Additional instructions:

- Words are separated by spaces, and the text may contain punctuation.
- The function should not count punctuation as part of the words.
- Return the result with words in lowercase.

# Task: Top N Frequent Words

Write a function `topNFrequentWords(text, n)` that finds the top `n` most frequent words in a given text.
The function should return an array of tuples where each tuple contains a word and its frequency,
sorted in descending order of frequency. If two words have the same frequency, they should be sorted alphabetically.

Constraints:

- Text is case-insensitive.
- Words are separated by spaces, and the text may contain punctuation.
- Ignore punctuation, and consider only alphabetic characters for word separation.

# Sitebuild

Here's a detailed HTML structure specification for the provided context. This specification describes each section and its elements, including their roles, attributes, and content structure.

---

## HTML Structure Specification

### Font Family

- Roboto Slab

### Sections Overview

- The HTML document is divided into two main sections: an introductory section (`.intro`) and a container section (`.container`) that holds multiple card components.

### Introductory Section

- **Tag**: `<section>`
- **Class**: `intro`
- **Elements**:
  - **Header**:
    - **Tag**: `<h1>`
    - **Class**: `intro__header`

### Container Section

- **Tag**: `<section>`
- **Class**: `container`
- **Content**: This section holds multiple card components.
- **Elements**:
  - **Cards**:
    - **Tag**: `<div>`
    - **Class**: `card`
    - **Content**: Each card represents a distinct component, technology, or information block.
    - **Nested Elements**:
      - **Card Header**:
        - **Tag**: `<div>`
        - **Class**: `card__header`
      - **Card Body**:
        - **Tag**: `<div>`
        - **Class**: `card__body`
        - **Nested Elements**:
          - **Card Body Image**:
            - **Tag**: `<div>`
            - **Class**: `card__body__image`
            - **Content**: A wrapper for an image.
            - **Sub-Element**:
              - **Image**:
                - **Tag**: `<img>`
                - **Attributes**: `src`, `alt`
                - **Description**: Contains the path to the image and an alternate text. For example, the `src` attribute is `/static/assets/react.png`, and the `alt` attribute is `"React"`.
          - **Card Body Text**:
            - **Tag**: `<div>`
            - **Class**: `card__body__text`
            - **Content**: Contains the descriptive text.

## CSS Layout Specification

### Global Styles

- **Root Variables (`:root`)**: Define color variables for background (`--bg`), card color (`--card`), and text color (`--text`).
  -- Choose the colors you want.
- **Body**: The `body` element has a zero margin and padding, with a `Roboto Slab` serif font family. The background color is set to `var(--bg)`

### Intro Section

- **Introduction Block (`.intro`)**:
  - Margin of 1rem and padding of 0.5rem.
  - Background color from `var(--card)`
  - Text color is black.
  - Within `.intro`, the `.intro__header` has centered text alignment.

### Main Content

- **Container (`.container`)**:
  - Uses a CSS Grid layout.
  - Margin of 1rem, with a grid gap of 1rem for spacing between grid items.

### Card Component

- **Card Styles (`.card`)**:
  - Border with a light gray color (`#ddd`).
  - Border-radius of 8px for rounded corners.
  - Hover effect that adds a box-shadow.
- **Card Header (`.card__header`)**:
  - Font size of 1.2rem, bold weight.
  - Background color of light gray (`#f5f5f5`).
  - Padding of 0.5rem, with center-aligned text.
- **Card Body (`.card__body`)**:
  - Padding of 1rem for content spacing.
  - Contains an image section (`.card__body__image`) with center-aligned content.
  - Images have to ensure they do not exceed the card's boundaries.
  - Text section (`.card__body__text`) has a top margin of 0.5rem.

### Responsive Design

- **Tablet Viewport (max-width: 768px)**:
  - `.container` changes to a two-column grid
- **Mobile Large Viewport (max-width: 425px)**:
  - `.container` shifts to a single-column grid
  - Adjustments to the `.intro__header`, including font size and centered alignment.

### General Instructions

- Implement the provided CSS to create a responsive layout with cards and an introductory section.
- Ensure that the hover effects and responsive transitions are smooth.
- Check that the grid layout adjusts appropriately based on the viewport size.
- Verify the padding, margins, and color consistency across the elements.
- Ensure images are contained within their respective card components.
- Test the layout on different screen sizes (desktop, tablet, mobile) to confirm responsiveness.

## Laptop
![alt](/sitebuild/laptop.png)

## Tablet
![alt](/sitebuild/tablet.png)

## Mobile
![alt](/sitebuild/mobile.png)
