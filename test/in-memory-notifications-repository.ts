import { Notification } from '../src/app/entities/notification';
import { NotificationsRepository } from '../src/app/repositories/notifications-repository';

//fake repository
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  //fake database in memory
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
