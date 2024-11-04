# Read text from a file
def read_text_from_file(filename)
    File.read(filename)
end

=begin 
 try using Ruby methods
 it's similar to using a function in js
 look up function/method `read_text_from_file` as an example
 structure: 
 def method_name
    logic of method goes in here
 end

=end

# logic for text_analyzer requirments go here:

#This is a function that counts words in the text file and returns the number of words in the text file
def CountWords(text)
    return text.downcase.split.size
end

#This is a function that counts characters in the text file and returns the number of characters in the text file
def CountCharacters(text)
    return text.length
end

#This is a function that counts paragraphs in the text file and returns the number of paragraphs in the text file
def CountParagraphs(text)
    paragraphs = text.gsub(/\r\n?/, "\n").strip.split(/\n\s*\n/)
    return paragraphs.reject { |para| para.strip.empty? }.count
end

#Find most common word in the file, it takes in text which is the string and n being the number of top words you want find
def MostCommon(text, n)
    words = text.downcase.tr(",.?!", '').split(' ')
    # Count occurrences of each word
    counts = words.each_with_object(Hash.new(0)) { |word, hash| hash[word] += 1 }
    # Sort by count in descending order and get the top N words
    counts.sort_by { |word, count| -count }.first(n).to_h
end


# Analyze the sample text
filename = 'text.txt' # Replace with your text file
text = read_text_from_file(filename)

# use `text` ^ to pass as a parameters to your methods

# puts statements to console go here:

puts 'Text Analysis:'
puts "The number of words in this file are: #{CountWords(text)}"
puts "The number of Characters in this file are: #{CountCharacters(text)}"
puts "The number of paragraphs in this file are: #{CountParagraphs(text)}"

#Display the most popular words and the amount of times it shows up
most_common_words = MostCommon(text, 1)
most_common_words.each do |word, count|
  puts "Most common word: '#{word}' (Appears #{count} times)"
end

#Display 10 most common words in the file
puts "Top 10 most common words:"
most_common_words = MostCommon(text, 10)
most_common_words.each do |word, count|
  puts "'#{word}' (Appears #{count} times)"
end

