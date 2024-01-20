def maxArea(height: list[int]) -> int:
    area = 0
    for l in range(len(height)):
        for r in range(l + 1, len(height)):
            width, min_height = r - l, min(height[l], height[r])
            area = max(area, width * min_height)
    return area
