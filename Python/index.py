def find_stats(array):
 
  if not array:
    return {"smallest": None, "median": None, "largest": None}

  # Check for non-integer elements
  try:
    for values in array:
      int(values) 
  except ValueError:
    return "Error, Input list contains non-integer elements"
  sorted_array = sorted(array)
 
  smallest = sorted_array[0]
  largest = sorted_array[-1]

  
  mid_index = len(sorted_array) // 2
  if len(sorted_array) % 2 == 0:
      median = (sorted_array[mid_index - 1] + sorted_array[mid_index]) / 2
  else:
     median = sorted_array[mid_index]
     
  return {"smallest": smallest, "median": median, "largest": largest}

list = [0, 1, 1, 1, 3, 4, 5, 6, 7, 8, 2, 509, 100, 11, 25, "two"]
stats = find_stats(list)
print(stats)
