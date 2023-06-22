function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  let closestSum = Infinity;

  // Iterate through the array, considering each element as a potential first number in the triplet
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];

      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Adjust the pointers based on the sum's comparison with the target
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // If the sum is equal to the target, return the target sum
        return target;
      }
    }
  }

  return closestSum;
}


module.exports = threeSum;
