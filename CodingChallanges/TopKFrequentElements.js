function topKFrequent(nums, k) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            hash[nums[i]] = { node: nums[i], count: hash[nums[i]].count + 1 };
        } else {
            hash[nums[i]] = { node: nums[i], count: 1 };
        }
    }
    return Object.values(hash).sort((a, b) => b.count - a.count).slice(0, k).map(item => item.node);
};