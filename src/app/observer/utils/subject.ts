export class CustomSubject<T> {
    private _listeners: CustomSubscription<T>[] = [];

    public subscribe(callback: (event: T) => void): CustomSubscription<T> {
        const listener = new CustomSubscription<T>(callback);
        this._listeners.push(listener);

        return listener;
    }

    public unsubscribe(listener: CustomSubscription<T>): void {
        const index = this._listeners.findIndex((item) => item.id === listener.id);
        this._listeners.splice(index, 1);
    }

    public next(data: T): void {
        this._listeners.forEach((listener) => {
            listener.update(data);
        });
    }
}

export class CustomSubscription<T> {
    public readonly id: number;
    public update: (event: T) => void;

    private static callConstructorCount: number = 0;
    
    constructor(update: (event: T) => void) {
        CustomSubscription.callConstructorCount++;
        this.id = CustomSubscription.callConstructorCount;
        this.update = update;
    }
}