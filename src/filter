import json
# Load the JSON file
with open('input.json', 'r') as json_file:
    data = json.load(json_file)

# Define the category you want to target
target_category = "your_target_category"

# Initialize a count for the target category
target_category_count = 0

# Symbol to add every fourth occurrence
symbol_to_add = "your_symbol"

# Function to add the symbol every fourth occurrence of the target category
def add_symbol_to_category(item):
    global target_category_count

    if item['category'] == target_category:
        target_category_count += 1
        if target_category_count % 4 == 0:
            item['description'] += symbol_to_add

# Process each item in the JSON data
for item in data:
    add_symbol_to_category(item)

# Save the modified data to a new JSON file
with open('output.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)

print("Processed JSON data and saved to 'output.json'.")