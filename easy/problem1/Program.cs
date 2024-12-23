int[] TwoSum(int[] nums, int target) {
  Dictionary<int, int> dic = new();
  for (int i = 0; i < nums.Length; i++) {
    if (dic.Count == 0) {
      dic.Add(i, nums[i]);
      continue;
    }

    foreach (var entry in dic) {
      if ((entry.Value + nums[i]) == target) {
        return [entry.Key, i];
      }
    }
    
    dic.Add(i, nums[i]);
  }

  return [];
}

string FormatOutput(int[] values) {
  if (values.Count() == 0) {
    return "[]";
  }

  return "[" + string.Join(",", values) + "]";
}

Console.WriteLine(FormatOutput(TwoSum([2, 7, 11, 15], 9)));
Console.WriteLine(FormatOutput(TwoSum([3, 2, 4], 6)));
Console.WriteLine(FormatOutput(TwoSum([2, 5, 5, 11], 10)));
