def print_text(message, x, y, end=0, font_color=(255, 255, 255), font_type='media/FiraSans-Italic.ttf', font_size=30):
pygame.font.init()
if end > 1:
    words = []
    for i in message:
        words.append(i)
        if len(words) % end == 0:
            words.append("\n")
    message = "".join(words)
    print(message)
font_type = pygame.font.Font(font_type, font_size)
text = font_type.render(message, True, font_color)
screen.blit(text, (x, y))
