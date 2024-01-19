def maxArea(height: list[int]) -> int:
    area = 0
    l, r = 0, len(height) - 1
    while l < r:
        width, min_height = r - l, min(height[l], height[r])
        area = max(area, width * min_height)
        while l < r and height[l] <= min_height:
            l += 1
        while l < r and height[r] <= min_height:
            r -= 1
    return area

