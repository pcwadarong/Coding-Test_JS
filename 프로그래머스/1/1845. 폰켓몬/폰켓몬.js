function solution(nums) {
    let draw = nums.length/2;
    const type = new Set(nums);
    let option = type.size;
    return option > draw ? draw : option;
}