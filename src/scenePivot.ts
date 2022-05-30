export const pivotScene = new Entity()
    pivotScene.addComponent(new Transform({
        position: new Vector3(16, 0, 16),
        rotation: Quaternion.Euler(0, -180, 0)
    }))
    engine.addEntity(pivotScene)
