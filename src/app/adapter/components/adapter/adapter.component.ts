import { Component } from '@angular/core';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent {

  // Отправка Message
  public sendMessage(): void {
    this.alertMessage(new Message('Сообщение отправлено', new Date()))
  }

  // Отправка Notification, адаптированного для alertMessage
  public sendNotification(): void {
    const notification = new Notification('Уведомление отправлено', new Date());
    this.alertMessage(new NotificationAdapter(notification))
  }

  // Условный метод, который принимает ТОЛЬКО инстанс класса Message
  private alertMessage(message: Message): void {
    alert(`
      Сообщение: ${message.text}
      Дата: ${message.date}
    `);
  }
}

class Notification {
  constructor(
    public readonly value: string,
    public readonly date: Date
  ) {
  }
}

class Message {
  constructor(
    public readonly text: string,
    public readonly date: Date
  ) {
  }
}

class NotificationAdapter extends Message {
  constructor(notification: Notification) {
    super(notification.value, notification.date)
  }
}
