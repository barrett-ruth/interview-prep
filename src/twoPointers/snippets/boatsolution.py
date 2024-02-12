def minimum_rescue_boats(people: list[int], limit: int) -> int:
    boats = 0
    light = 0
    heavy = len(people) - 1

    people.sort()

    while light <= heavy:
        if light == heavy:
            boats += 1
            break
        elif people[light] + people[heavy] <= limit:
            boats += 1
            light += 1
            heavy -= 1
        else:
            boats += 1
            heavy -= 1

    return boats
