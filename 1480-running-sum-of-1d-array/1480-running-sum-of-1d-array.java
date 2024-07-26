class Solution {
    public int[] runningSum(int[] nums) {
        int i = 0;
        int j = i + 1;

        while(j < nums.length){
            nums[j] = nums[i] + nums[j];
            j++;
            i++;
        }

        return nums;
    }
}