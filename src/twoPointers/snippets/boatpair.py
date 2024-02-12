    elif people[light] + people[heavy] <= limit:
        boats += 1
        light += 1
        heavy -= 1
