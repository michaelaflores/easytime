class NotificationsService {
  async determineNotificationStrategy() {
    console.log('getting notification status')
    const permissionStatus = await this.getNotificationPermission()
    console.log('permissionStatus', permissionStatus)
    if (permissionStatus === 'granted') {
      console.log('permission was granted, ', typeof this.webNotification)
      this.state.notificationStrategy = this.webNotification
    }
    console.log('state', this.state)
  }

  constructor() {
    this.determineNotificationStrategy()
    this.state = {
      allowed: false,
      notificationStrategy: () => {},
    }
  }

  createNotification(notificationString) {
    console.log('notification created', notificationString)
    console.log(
      'notification strategy type ',
      typeof this.state.notificationStrategy,
    )
    this.state.notificationStrategy(notificationString)
  }

  async getNotificationPermission() {
    return Notification.requestPermission()
  }

  webNotification(string) {
    new Notification(string)
  }
}

export default NotificationsService
