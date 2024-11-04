# Text Analyzer

##### Introduction:
Create a simple Ruby program that analyzes a text document. The program will count the number of words, characters, and paragraphs in the document. Additionally, it will identify the most common word used in the document and provide word frequency statistics. The program should be structured using functions and code should be refactored for readability.

**Requirements:**

1. Read a text document provided as input (you can use a sample text document for testing - this code is written for you).
2. Implement a function that counts the number of words in the document.
3. Implement a function that counts the number of characters in the document.
4. Implement a function that counts the number of paragraphs in the document (paragraphs are separated by empty lines).
5. Identify the most common word in the document and display it along with its frequency.
6. Provide word frequency statistics, listing the top 10 most common words and their frequencies.
7. Utilize appropriate data structures (e.g., arrays, hashes) to manage the data efficiently.
8. Use blocks and sorting to organize the word frequency statistics.

**Make Sure to:**
- Submit a well-structured and commented Ruby code, along with a brief explanation of your refactoring choices and any additional features you implemented.

----------
**Stretch Goals:**

1. Implement the program as a command-line tool.
    - **HINT** look up ruby `ARGV` array on how to accept command-line arguments and options.
    - this can be tested by running `ruby text_analyzer.rb sample.txt` in your console and replacing `sample.txt` with any file.
2. Optimize the code for efficiency and readability through refactoring.
    - can you make the functions more modular and readable?
    - can you combine any functions for efficiency?
    - can you avoid any  avoid unnecessary iterations?