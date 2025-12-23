# 🚀 Space War

A classic space shooter game built with vanilla JavaScript, HTML, and CSS. Defend Earth by destroying waves of alien invaders!

![Space War Game](https://img.shields.io/badge/Game-Space%20War-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎮 Game Description

Space War is a browser-based arcade shooter where you control a spaceship to eliminate alien enemies. Navigate your ship left and right while firing ammunition to destroy the incoming alien threat. Clear all enemies to win!

## ✨ Features

- **Smooth Controls**: Use arrow keys to move your spaceship
- **Dynamic Shooting**: Press spacebar to fire ammunition at enemies
- **Collision Detection**: Real-time hit detection system
- **Score Tracking**: Keep track of your eliminated enemies
- **Victory Condition**: Clear all aliens to win the game
- **Responsive Design**: Adapts to different screen widths
- **Animated Sprites**: Beautiful GIF animations for spaceship and aliens

## 🎯 How to Play

1. **Move**: Use `←` (Left Arrow) and `→` (Right Arrow) keys to move your spaceship
2. **Shoot**: Press `Space` to fire ammunition at the aliens
3. **Objective**: Destroy all alien enemies to win
4. **Score**: Each destroyed alien increases your score by 1

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/space-war.git
cd space-war
```

2. Make sure all files are in place (no additional setup required)

3. Open `index.html` in your web browser

## 📁 Project Structure

```
space-war/
│
├── index.html                              # Main HTML file
├── style.css                               # Game styling
├── game_funtion.js                         # Game logic and mechanics
│
└── GAME_ASSET/                             # Game assets folder
    ├── Fir_Ammo.PNG                        # Ammunition sprite
    ├── gun-alien-firing-animation.gif      # Enemy alien animation
    ├── carlotta-bonig-jet-animation-art.gif # Spaceship animation
    └── space.png                           # Background/space theme
```

## 🎨 Game Assets

All game assets are located in the `GAME_ASSET` folder:

- **Fir_Ammo.PNG** - Player ammunition projectile
- **gun-alien-firing-animation.gif** - Animated alien enemies (18 units in 2×9 formation)
- **carlotta-bonig-jet-animation-art.gif** - Player spaceship animation
- **space.png** - Space background or additional space-themed asset

## 🎨 Game Elements

- **Spaceship**: Your controllable character at the bottom of the screen
- **Aliens**: 18 enemy units arranged in a 2×9 grid formation
- **Ammunition**: Projectiles fired from your spaceship
- **Score Board**: Real-time score display

## 🔧 Technical Details

### Key Mechanics

- **Enemy Grid**: 2 rows × 9 columns of aliens with dynamic spacing
- **Movement Speed**: 20px per key press for spaceship
- **Ammunition Speed**: 10px per frame (30ms interval)
- **Collision Detection**: AABB (Axis-Aligned Bounding Box) algorithm
- **Enemy Dimensions**: 100px × 100px with dynamic gap calculation

### Code Structure

- **game_funtion.js**: Contains all game logic including:
  - Spaceship movement controls
  - Enemy generation and positioning
  - Shooting mechanics
  - Collision detection
  - Score management
  - Win condition

### Browser Compatibility

- Chrome (Recommended)
- Firefox
- Safari
- Edge

## 🚀 Future Enhancements

- [ ] Multiple difficulty levels
- [ ] Enemy movement patterns
- [ ] Enemy return fire
- [ ] Power-ups and special weapons
- [ ] Sound effects and background music
- [ ] High score persistence with localStorage
- [ ] Mobile touch controls
- [ ] More enemy types and waves
- [ ] Health system for the player
- [ ] Lives/respawn system
- [ ] Particle effects for explosions

## 🎮 Controls Summary

| Key | Action |
|-----|--------|
| `←` Left Arrow | Move spaceship left |
| `→` Right Arrow | Move spaceship right |
| `Space` | Fire ammunition |

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- Rapid spacebar pressing may cause multiple ammunition instances
- No boundary checking for enemy grid on window resize

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [@Neeraj_Dhyani](https://github.com/Neeraj-Dhyani)

## 🙏 Acknowledgments

- Inspired by classic Space Invaders arcade game
- Game assets created 2 months ago for this space shooting game project

---

**Enjoy the game and happy alien hunting! 👾🔫**

*Made with ❤️ and JavaScript*
