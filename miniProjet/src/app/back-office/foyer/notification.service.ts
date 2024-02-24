// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications = new Subject<string[]>();
  private notificationList: string[] = [];

  getNotifications() {
    return this.notifications.asObservable();
  }

  addTimedNotification(message: string, duration: number = 5000) {
    this.notifications.next([message]);

    // Supprimer la notification après la durée spécifiée
    setTimeout(() => {
      this.removeNotification(message);
    }, duration);
  }

  private removeNotification(message: string) {
    this.notifications.next([]);
  }
}
