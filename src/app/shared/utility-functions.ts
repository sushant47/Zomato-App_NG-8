import { Subscription } from 'rxjs/internal/Subscription';

export class UtilityFunctions {
    public static unSubscribeSubscriptions(subscriptions: Subscription[]) {
        subscriptions.forEach((data: Subscription) => {
            data.unsubscribe();
        });
    }
}
