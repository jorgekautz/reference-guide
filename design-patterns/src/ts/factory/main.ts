import { Koopa } from './koopa'
import { Goomba } from './goomba'
import { Boo } from './boo'

function gameLogic() {
    // Mode code above
    if (shouldSpawnEnemy()) {
        let randomNum = Math.random()
        let enemy
        if (randomNum > 0.66) {
            enemy = new Koopa()
        } else if (randomNum > 0.33) {
            enemy = new Goomba()
        } else {
            enemy = new Boo()
        }
    }
    // More code below, use enemy
}

function shouldSpawnEnemy(): boolean {
    return true
}

