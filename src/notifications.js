class NotificationsService {
  static determineNotificationStrategy() {}

  constructor() {
    this.notificationStrategy = NotificationsService.determineNotificationStrategy()
  }

  createNotification(notificationString) {
    console.log('notification created', notificationString)
  }

  getNotificationPermission() {
    Notification.requestPermission().then(function(result) {
      console.log(result)
    })
  }
}

export default NotificationsService
